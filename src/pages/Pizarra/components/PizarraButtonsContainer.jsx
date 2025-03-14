import { PlusIcon } from "@radix-ui/react-icons";
import { Dialog, Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import PropTypes from "prop-types";
import { createPost } from "../../../services/postsServices";
import { useQueryClient } from "@tanstack/react-query";
import { useCurrentUserQuery } from "../../../hooks/queries/useCurrentUserQuery";

export function PizarraButtonsContainer() {
  const queryClient = useQueryClient();
  const { data: currentUser } = useCurrentUserQuery();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      contenido: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await createPost({
        id_usuario: currentUser.idUsuario,
        contenido: data.contenido,
        created_at: new Date().toISOString(),
      });
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
      toast.success("¡Post creado con éxito!");
    } catch (error) {
      toast.error("Hubo un error al crear el post");
      console.error(error);
    }
  };

  const canCreatePost =
    currentUser?.rol === "ORIENTACION" || currentUser?.rol === "PROFESOR";

  if (!canCreatePost) {
    return null;
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>
          <Flex gap="1">
            <PlusIcon width="18px" height="18px" />
            <Text size="2">Nuevo Post</Text>
          </Flex>
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Crear un nuevo post</Dialog.Title>

        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Contenido del post
              </Text>
              <TextField.Root
                placeholder="Contenido"
                {...register("contenido", {
                  maxLength: {
                    value: 280,
                    message: "El contenido no puede superar los 280 caracteres",
                  },
                })}
              />
              {errors.contenido && (
                <Text as="span" color="red" size="1">
                  {errors.contenido.message}
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
              <Button type="submit">Crear</Button>
            </Dialog.Close>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
}

PizarraButtonsContainer.propTypes = {
  currentUser: PropTypes.shape({
    idUsuario: PropTypes.number.isRequired,
    rol: PropTypes.string.isRequired,
  }),
};
