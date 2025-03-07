import { Flex, Button } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { LockClosedIcon } from "@radix-ui/react-icons";
import { InputAjustes } from "./InputAjustes";

export function CambiarPassword() {
  const {
    register,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password", "");

  return (
    <form style={{ width: "100%" }}>
      <Flex direction="column" gap={{ initial: "3", xs: "4" }} width="100%">
        <InputAjustes
          id="password"
          placeholder="Cambiar la contraseña"
          title="Contraseña"
          infocontent="Debe tener al menos 8 caracteres, 1 minúscula, 1 mayúscula y 1 caracter especial"
          registerProps={register("password", {
            minLength: {
              value: 8,
              message:
                "La contraseña debe tener al menos 8 caracteres, 1 minúscula, 1 mayúscula y 1 caracter especial",
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/,
              message:
                "La contraseña debe tener al menos 8 caracteres, 1 minúscula, 1 mayúscula y 1 caracter especial",
            },
          })}
          errorMessage={errors.password?.message}
          Icon={LockClosedIcon}
          type="password"
        />
        <InputAjustes
          id="passwordRepeat"
          placeholder="Repite la contraseña"
          title="Repite la contraseña"
          infocontent="Debe coincidir con la contraseña anterior"
          registerProps={register("passwordRepeat", {
            validate: (value) =>
              value === password || "Las contraseñas no coinciden",
          })}
          errorMessage={errors.passwordRepeat?.message}
          Icon={LockClosedIcon}
          type="password"
        />
        <Button size={{ initial: "3", lg: "4", xl: "5" }} type="submit">
          Cambiar la contraseña
        </Button>
      </Flex>
    </form>
  );
}
