import { TrashIcon } from "@radix-ui/react-icons";
import { AlertDialog, Button, Text, Flex } from "@radix-ui/themes";
import { toast } from "react-hot-toast";
import PropTypes from "prop-types";
import { deletePost } from "../../../services/postsServices";
import { useQueryClient } from "@tanstack/react-query";

export function EliminarPost({ idPost }) {
  const queryClient = useQueryClient();

  const handleDelete = async () => {
    try {
      await deletePost(idPost);
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
      toast.success("El post eliminado correctamente");
    } catch (error) {
      console.error("Error al eliminar el post:", error);
      toast.error("Error al eliminar el post");
    }
  };

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button>
          <Flex gap="1">
            <TrashIcon width="18px" height="18px" />
            <Text size="2">Eliminar</Text>
          </Flex>
        </Button>
      </AlertDialog.Trigger>

      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>¿Estás segur@?</AlertDialog.Title>
        <AlertDialog.Description size="2">
          El post será eliminado de forma permanente.
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancelar
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button color="red" onClick={handleDelete}>
              Eliminar post
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}

EliminarPost.propTypes = {
  idPost: PropTypes.string.isRequired,
};
