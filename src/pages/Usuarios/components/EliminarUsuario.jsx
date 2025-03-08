import { TrashIcon } from "@radix-ui/react-icons";
import { AlertDialog, Button, Text, Flex } from "@radix-ui/themes";
import { toast } from "react-hot-toast";
import PropTypes from "prop-types";
import { deleteUser } from "../../../services/userService";
import { useQueryClient } from "@tanstack/react-query";

export function EliminarUsuario({ idUsuario }) {
  const queryClient = useQueryClient();

  const handleDelete = async () => {
    try {
      await deleteUser(idUsuario);
      queryClient.invalidateQueries({
        queryKey: ["usuarios"],
      });
      toast.success("Usuario eliminado correctamente");
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
      toast.error("Error al eliminar el usuario");
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
          El usuario será eliminado de forma permanente y tendrá que volver a
          registrarse.
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancelar
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button color="red" onClick={handleDelete}>
              Eliminar usuario
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}

EliminarUsuario.propTypes = {
  idUsuario: PropTypes.string.isRequired,
};
