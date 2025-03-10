import { Pencil2Icon } from "@radix-ui/react-icons";
import {
  Dialog,
  Button,
  Flex,
  Text,
  TextField,
  Select,
} from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import PropTypes from "prop-types";
import { updateSeguimientosReporte } from "../../../services/reportesServices";
import { useQueryClient } from "@tanstack/react-query";

export function EditarSeguimiento({ currentSeguimiento }) {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      comentarios: currentSeguimiento.comentarios,
      estado: currentSeguimiento.estado,
    },
  });

  const onSubmit = async (data) => {
    try {
      await updateSeguimientosReporte(currentSeguimiento.idSeguimiento, {
        estado: data.estado,
        comentarios: data.comentarios,
      });

      queryClient.invalidateQueries({
        queryKey: ["reportes"],
      });
      toast.success("¡Seguimiento actualizado con éxito!");
    } catch (error) {
      toast.error("Hubo un error al actualizar el seguimiento");
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
        <Dialog.Title>Editar el seguimiento</Dialog.Title>

        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Comentario del seguimiento
              </Text>
              <TextField.Root
                placeholder="comentarios"
                {...register("comentarios", {
                  maxLength: {
                    value: 280,
                    message:
                      "Los comentarios no pueden superar los 280 caracteres",
                  },
                })}
              />
              {errors.comentarios && (
                <Text as="span" color="red" size="1">
                  {errors.comentarios.message}
                </Text>
              )}
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Estado del seguimiento
              </Text>
              <Select.Root
                defaultValue={currentSeguimiento.estado}
                onValueChange={(value) => setValue("estado", value)}
                {...register("estado")}
              >
                <Select.Trigger id="estado" placeholder="Estado" />
                <Select.Content>
                  <Select.Item value="PENDIENTE">PENDIENTE</Select.Item>
                  <Select.Item value="EN_PROCESO">EN PROCESO</Select.Item>
                  <Select.Item value="ARCHIVADO">ARCHIVADO</Select.Item>
                </Select.Content>
              </Select.Root>
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

EditarSeguimiento.propTypes = {
  currentSeguimiento: PropTypes.shape({
    idSeguimiento: PropTypes.number.isRequired,
    comentarios: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
  }).isRequired,
};
