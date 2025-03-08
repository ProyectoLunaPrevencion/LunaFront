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
import { updateUser } from "../../../services/authService";
import { useQueryClient } from "@tanstack/react-query";

export function EditarUsuario({ currentUser }) {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      nombre: currentUser.nombre,
      apellidos: currentUser.apellidos,
      email: currentUser.email,
      telefono: currentUser.telefono,
      curso: currentUser.curso,
      grupo: currentUser.grupo,
    },
  });

  const onSubmit = async (data) => {
    try {
      await updateUser(currentUser.idUsuario, data);
      queryClient.invalidateQueries({
        queryKey: ["usuarios"],
      });
      toast.success("¡Información actualizada con éxito!");
    } catch (error) {
      toast.error("Hubo un error al actualizar la información");
      console.error(error);
    }
  };

  const curso = watch("curso");
  const grupo = watch("grupo");

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
        <Dialog.Title>Editar perfil</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Edita el perfil de este usuario.
        </Dialog.Description>

        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Nombre
              </Text>
              <TextField.Root
                defaultValue={currentUser.nombre}
                placeholder="Nombre"
                {...register("nombre", {
                  pattern: {
                    value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
                    message: "El nombre solo puede contener letras y espacios",
                  },
                })}
              />
              {errors.nombre && (
                <Text as="span" color="red" size="1">
                  {errors.nombre.message}
                </Text>
              )}
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Apellidos
              </Text>
              <TextField.Root
                {...register("apellidos", {
                  pattern: {
                    value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
                    message:
                      "El apellido solo puede contener letras y espacios",
                  },
                })}
                defaultValue={currentUser.apellidos}
                placeholder="Apellidos"
              />
              {errors.apellidos && (
                <Text as="span" color="red" size="1">
                  {errors.apellidos.message}
                </Text>
              )}
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Email
              </Text>
              <TextField.Root
                {...register("email", {
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@colegiovirgendelcarmen\.com$/,
                    message: "El formato del email es incorrecto",
                  },
                })}
                defaultValue={currentUser.email}
                placeholder="Email"
              />
              {errors.email && (
                <Text as="span" color="red" size="1">
                  {errors.email.message}
                </Text>
              )}
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Teléfono
              </Text>
              <TextField.Root
                {...register("telefono", {
                  pattern: {
                    value: /^\d{9}$/,
                    message:
                      "El formato del teléfono es incorrecto. Debe tener 9 dígitos",
                  },
                })}
                defaultValue={currentUser.telefono}
                placeholder="Teléfono"
              />
              {errors.telefono && (
                <Text as="span" color="red" size="1">
                  {errors.telefono.message}
                </Text>
              )}
            </label>
            <Flex gap="5">
              <Flex direction="column" gap="1" width="100%">
                <Flex gap="1" align="center">
                  <Text as="p" size={{ initial: "2", lg: "3", xl: "5" }}>
                    Curso
                  </Text>
                </Flex>
                <Select.Root
                  onValueChange={(value) => setValue("curso", value)}
                  {...register("curso")}
                  defaultValue={currentUser.curso}
                >
                  <Select.Trigger id="curso" placeholder="Curso" />
                  <Select.Content>
                    <Select.Item value="ESO1">1º ESO</Select.Item>
                    <Select.Item value="ESO2">2º ESO</Select.Item>
                    <Select.Item value="ESO3">3º ESO</Select.Item>
                    <Select.Item value="ESO4">4º ESO</Select.Item>
                  </Select.Content>
                </Select.Root>
                {errors.curso && !curso && (
                  <Text as="span" color="red" size="1">
                    {errors.curso.message}
                  </Text>
                )}
              </Flex>
              <Flex direction="column" gap="1" width="100%">
                <Flex gap="1" align="center">
                  <Text as="p" size={{ initial: "2", lg: "3", xl: "5" }}>
                    Grupo
                  </Text>
                </Flex>
                <Select.Root
                  onValueChange={(value) => setValue("grupo", value)}
                  {...register("grupo", {})}
                  defaultValue={currentUser.grupo}
                >
                  <Select.Trigger id="grupo" placeholder={currentUser.grupo} />
                  <Select.Content>
                    <Select.Item value="A">A</Select.Item>
                    <Select.Item value="B">B</Select.Item>
                    <Select.Item value="C">C</Select.Item>
                    <Select.Item value="D">D</Select.Item>
                  </Select.Content>
                </Select.Root>
                {errors.grupo && !grupo && (
                  <Text as="span" color="red" size="1">
                    {errors.grupo.message}
                  </Text>
                )}
              </Flex>
            </Flex>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Cancelar
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button type="submit">Guardar</Button>
            </Dialog.Close>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
}

EditarUsuario.propTypes = {
  currentUser: PropTypes.shape({
    idUsuario: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    telefono: PropTypes.string,
    curso: PropTypes.string,
    grupo: PropTypes.string,
  }).isRequired,
};
