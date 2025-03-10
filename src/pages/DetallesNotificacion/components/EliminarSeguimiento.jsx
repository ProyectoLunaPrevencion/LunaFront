import { TrashIcon } from "@radix-ui/react-icons";
import { AlertDialog, Button, Text, Flex } from "@radix-ui/themes";
import { toast } from "react-hot-toast";
import PropTypes from "prop-types";
import { deleteSeguimientosReporte } from "../../../services/reportesServices";
import { useQueryClient } from "@tanstack/react-query";

export function EliminarSeguimiento({ idSeguimiento }) {
  const queryClient = useQueryClient();

  const handleDelete = async () => {
    try {
      await deleteSeguimientosReporte(idSeguimiento);
      queryClient.invalidateQueries({
        queryKey: ["reportes"],
      });
      toast.success("Seguimiento eliminado correctamente");
    } catch (error) {
      console.error("Error al eliminar el seguimiento:", error);
      toast.error("Error al eliminar el seguimiento");
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
          El seguimiento será eliminado de forma permanente.
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancelar
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button color="red" onClick={handleDelete}>
              Eliminar seguimiento
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}

EliminarSeguimiento.propTypes = {
  idSeguimiento: PropTypes.number.isRequired,
};
