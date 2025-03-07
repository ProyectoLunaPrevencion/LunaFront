import { Flex, Text, Button, Select } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { isAxiosError } from "axios";
import { toast } from "react-hot-toast";
import { PersonIcon, MobileIcon } from "@radix-ui/react-icons";
import PropTypes from "prop-types";
import { updateUser } from "../../../services/authService";
import { InputAjustes } from "./InputAjustes";
import { useQueryClient } from "@tanstack/react-query";

export function FormularioUsuario({ currentUser }) {
  const queryClient = useQueryClient();

  const userId = currentUser.idUsuario;
  const userName = currentUser.nombre;
  const userLastName = currentUser.apellidos;
  const userPhone = currentUser.telefono;
  const userGrade = currentUser.curso;
  const userClass = currentUser.grupo;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      nombre: userName,
      apellidos: userLastName,
      telefono: userPhone,
      curso: userGrade,
      grupo: userClass,
    },
  });

  const onSubmit = async (data) => {
    try {
      await updateUser(userId, data);

      queryClient.invalidateQueries({
        queryKey: ["currentUser"],
      });
      toast.success("¡Información actualizada con éxito!");
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error("Hubo un error al actualizar la información");
      }
      console.error(error);
    }
  };

  const curso = watch("curso");
  const grupo = watch("grupo");

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Flex direction="column" gap={{ initial: "3", xs: "4" }} width="100%">
        <InputAjustes
          id="nombre"
          placeholder="Nombre"
          title="Nombre"
          registerProps={register("nombre", {
            pattern: {
              value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
              message: "El nombre solo puede contener letras y espacios",
            },
          })}
          errorMessage={errors.nombre?.message}
          Icon={PersonIcon}
        />
        <InputAjustes
          id="apellidos"
          placeholder="Apellidos"
          title="Apellidos"
          registerProps={register("apellidos", {
            pattern: {
              value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
              message: "El apellido solo puede contener letras y espacios",
            },
          })}
          errorMessage={errors.apellidos?.message}
          Icon={PersonIcon}
        />
        <InputAjustes
          id="telefono"
          placeholder="Teléfonos"
          title="Teléfono"
          registerProps={register("telefono", {
            pattern: {
              value: /^\d{9}$/,
              message:
                "El formato del teléfono es incorrecto. Debe tener 9 dígitos",
            },
          })}
          errorMessage={errors.telefono?.message}
          Icon={MobileIcon}
        />
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
              defaultValue={userGrade}
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
              defaultValue={userClass}
            >
              <Select.Trigger id="grupo" placeholder={userClass} />
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

        <Button size={{ initial: "3", lg: "4", xl: "5" }} type="submit">
          Cambiar esta información
        </Button>
      </Flex>
    </form>
  );
}

FormularioUsuario.propTypes = {
  currentUser: PropTypes.shape({
    idUsuario: PropTypes.string,
    nombre: PropTypes.string,
    apellidos: PropTypes.string,
    telefono: PropTypes.string,
    curso: PropTypes.string,
    grupo: PropTypes.string,
  }),
};
