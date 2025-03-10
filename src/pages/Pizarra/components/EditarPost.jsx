import { Pencil2Icon } from "@radix-ui/react-icons";
import { Dialog, Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import PropTypes from "prop-types";
import { updatePost } from "../../../services/postsServices";
import { useQueryClient } from "@tanstack/react-query";

export function EditarPost({ currentPost }) {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      contenido: currentPost.contenido,
    },
  });

  const onSubmit = async (data) => {
    try {
      await updatePost(currentPost.idPost, data);
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
      toast.success("¡Información actualizada con éxito!");
    } catch (error) {
      toast.error("Hubo un error al actualizar la información");
      console.error(error);
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>
          <Flex gap="1">
            <Pencil2Icon width="18px" height="18px" />
            <Text size="2">Editar</Text>
          </Flex>
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Editar el post</Dialog.Title>

        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Contenido del post
              </Text>
              <TextField.Root
                defaultValue={currentPost.contenido}
                placeholder="Contenido"
                {...register("contenido", {
                  pattern: {
                    value: 280,
                    message: "El contenido no puede superar los 280 caracteres",
                  },
                })}
              />
              {errors.nombre && (
                <Text as="span" color="red" size="1">
                  {errors.nombre.message}
                </Text>
              )}
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Cancelar
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button type="submit">Editar</Button>
            </Dialog.Close>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
}

EditarPost.propTypes = {
  currentPost: PropTypes.shape({
    idPost: PropTypes.number.isRequired,
    contenido: PropTypes.string.isRequired,
  }).isRequired,
};
