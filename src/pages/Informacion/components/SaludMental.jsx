import { Box, Heading, Flex, Container, Strong, Quote } from "@radix-ui/themes";
import { TiposSaludMental } from "./TiposSaludMental";
import ansiedad from "../../../assets/images/Ansiedad.jpg";
import agobio from "../../../assets/images/Agobio.jpg";
import tristezaContinuada from "../../../assets/images/Tristeza-continuada.jpg";
import desesperanza from "../../../assets/images/Pensamiento-desesperanza.jpg";
import dispositivos from "../../../assets/images/Uso-inadecuado-dispositivos.jpg";
import apetito from "../../../assets/images/Cambios-apetito.jpg";

export function SaludMental() {
  return (
    <Box>
      <Flex direction="column" gap={{ initial: "8", sm: "9" }} justify="center">
        <Heading
          as="h2"
          size={{ initial: "7", sm: "8" }}
          align="center"
          style={{ color: "var(--orange-9)" }}
          weight="bold"
        >
          Salud mental:
        </Heading>
        <Container>
          <Flex gap="6" direction="column">
            <TiposSaludMental
              title="Ansiedad"
              descriptions={[
                "Es una reacción normal que todos experimentamos en situaciones estresantes o de incertidumbre. Es como una alarma interna que se activa cuando sentimos miedo. Sin embargo, a veces esa alarma puede sonar demasiado fuerte o con mucha frecuencia, incluso cuando no hay un peligro real.",
                <>
                  Algunos <Strong>síntomas</Strong> son: sudoración, aceleración
                  del ritmo cardiaco, dolor en el pecho, falta de respiración,
                  menos concentración, tensión en los músculos del cuerpo…
                </>,
              ]}
              image={ansiedad}
              alt="Imagen de una persona con ansiedad"
            />
            <TiposSaludMental
              title="Tristeza continuada"
              descriptions={[
                "Estado emocional que va más allá de sentirse triste o desanimado por un corto tiempo. Es como llevar una nube negra encima que no se va, incluso cuando las cosas parecen ir bien. Algunos síntomas son: falta de energía, pérdida de interés…",
              ]}
              image={tristezaContinuada}
              alt="Imagen de una persona con tristeza continuada"
            />
            <TiposSaludMental
              title="Pensamientos de desesperanza"
              descriptions={[
                "Son esos momentos en los que sientes que las cosas nunca van a mejorar y que no hay salida a lo que estás viviendo. Es como estar en un túnel oscuro sin ver la luz final. Puedes sentir que tus problemas son demasiado grandes para manejarlos.",
              ]}
              image={desesperanza}
              alt="Imagen de una persona con pensamientos de desesperanza"
            />
            <TiposSaludMental
              title="Cambios en el sueño o apetito"
              descriptions={[
                "Situaciones continuadas en las que puedes tener dificultades para dormir, para conciliar el sueño o despertarte muchas veces. Tener ingestas de alimentos de forma ansiosa o, por el contrario, pérdida de apetito puede indicar que algo no está bien emocionalmente.",
              ]}
              image={apetito}
              alt="Imagen de una persona con cambios en el sueño o apetito"
            />
            <TiposSaludMental
              title="Sensación de agobio"
              descriptions={[
                "Es esa sensación abrumadora que a veces sentimos cuando hay demasiadas cosas en nuestra mente o cuando nos enfrentamos a situaciones difíciles. Es como si tuvieras un montón de cosas pesadas sobre tus hombros y te resultara difícil avanzar. Puedes sentir que no puedes respirar bien, que tu corazón late más rápido que simplemente no sabes por dónde empezar.",
              ]}
              image={agobio}
              alt="Imagen de una persona con agobio"
            />
            <TiposSaludMental
              title="Uso inadecuado de dispositivos"
              descriptions={[
                "Pasas demasiado tiempo frente a las pantallas (redes sociales, videojuegos) descuidando el sueño, la actividad física y las relaciones personales, pudiendo causar ansiedad y sueño.",
              ]}
              image={dispositivos}
              alt="Imagen de una persona haciendo un uso inadecuado de su dispositivo"
            />
            <TiposSaludMental
              title="Pareja"
              descriptions={[
                "Una pareja es una relación entre dos personas que deciden compartir tiempo, experiencias y emociones. Pero, ¡ojo! Tener pareja no es obligatorio ni significa que valgas más o menos. Lo importante es que, si decides estar en una relación, sea sana y te haga sentir bien.",
                <>
                  Las películas, las canciones y las redes sociales nos hacen
                  creer cosas sobre el amor que no son reales. Algunos mitos
                  comunes son:{" "}
                  <Strong>
                    <Quote>El amor verdadero es sufrir</Quote>
                  </Strong>
                  ,{" "}
                  <Strong>
                    <Quote>El amor lo puede todo</Quote>
                  </Strong>
                  ,{" "}
                  <Strong>
                    <Quote>Tu pareja debe ser tu otra mitad</Quote>
                  </Strong>
                  , ... No creas todo lo que dicen las películas o las redes
                  sobre el amor. Lo más importante es que te sientas
                  respetado/a, libre y feliz en cualquier relación. ¡Y recuerda!
                  No necesitas pareja para ser feliz o valioso/a.
                </>,
              ]}
              subtitle="¿Qué es una relación tóxica?"
              subdescriptions={[
                "Es cuando en una relación hay más sufrimiento que felicidad. Algunas señales de alerta son:",
              ]}
              subsubdescriptions={[
                "Si una relación tiene estas características, es importante pedir ayuda y alejarse.",
                "El amor debe hacerte sentir bien, no atrapado/a o con miedo. Una pareja sana es aquella en la que ambos se respetan, confían y crecen juntos. ¡No te conformes con menos!",
              ]}
            />
          </Flex>
        </Container>
      </Flex>
    </Box>
  );
}
