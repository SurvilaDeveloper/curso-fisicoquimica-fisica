---
title: "Relatividad especial"
description: "Cómo la relatividad especial modifica nuestra descripción clásica de espacio, tiempo, simultaneidad, velocidades y energía cuando las velocidades son comparables con la de la luz."
slug: "relatividad-especial"

course: "fisica"
module: "fisica-moderna"
order: 30

level: "avanzado-secundario"
cycle: "orientado"

yearsApprox: [5, 6]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - dualidad-onda-particula-y-mecanica-cuantica

skills:
  - sistemas-de-referencia
  - relatividad-galileana
  - transformaciones-clasicas
  - dominio-de-validez-clasico
  - propagacion-de-la-luz
  - experimento-de-michelson-morley
  - postulados-de-einstein
  - constancia-de-c
  - relatividad-de-la-simultaneidad
  - dilatacion-temporal
  - tiempo-propio
  - contraccion-de-longitud
  - longitud-propia
  - factor-de-lorentz
  - transformacion-relativista-de-velocidades
  - energia-relativista
  - equivalencia-masa-energia
  - relatividad-especial-y-general
  - paradojas-relativistas
  - limite-newtoniano

hasExercises: true
hasQuiz: true
hasExperiment: true

deepening: true
status: "complete"
---

## Dos observadores pueden discrepar sobre el tiempo y, sin embargo, ambos tener razón

Imaginemos un tren que se mueve con velocidad constante.

Una persona está:

- dentro del tren;

y otra:

- junto a la vía.

En la mecánica clásica ambas pueden discrepar sobre:

- posición;
- velocidad.

Pero coincidirían en algo aparentemente obvio:

- qué sucesos ocurren al mismo tiempo;
- cuánto dura un intervalo;
- cuánto mide una regla.

La relatividad especial muestra que, cuando las velocidades relativas son comparables con la velocidad de la luz:

> **esas cantidades tampoco son absolutas.**

No significa que “todo sea relativo”.

Existen magnitudes y leyes que todos los observadores inerciales deben relacionar de manera precisa.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>La relatividad especial no dice que cada observador pueda inventar su propia realidad. Establece reglas exactas para relacionar mediciones de espacio y tiempo realizadas por observadores inerciales, manteniendo invariantes las leyes físicas y la velocidad de la luz en el vacío.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta lección deberías poder:

- definir sistema de referencia;
- identificar sistemas inerciales;
- describir la relatividad galileana;
- usar transformaciones clásicas sencillas;
- reconocer su dominio de validez;
- explicar el problema que planteaba la propagación de la luz;
- ubicar históricamente el experimento de Michelson-Morley;
- enunciar los postulados de Einstein;
- comprender la constancia de c;
- explicar la relatividad de la simultaneidad;
- definir factor de Lorentz;
- interpretar tiempo propio;
- aplicar dilatación temporal;
- definir longitud propia;
- aplicar contracción de longitud;
- comprender por qué tiempo y longitud dependen del marco;
- utilizar la transformación relativista de velocidades como profundización;
- distinguir energía de reposo, energía total y energía cinética relativista;
- interpretar la equivalencia masa-energía;
- usar correctamente E<sub>0</sub> = mc²;
- distinguir relatividad especial y general;
- resolver paradojas aparentes a nivel conceptual;
- explicar por qué la Física newtoniana reaparece cuando `v ≪ c`.

---

## 1. Sistemas de referencia

Para describir movimiento necesitamos especificar:

- origen;
- ejes;
- reloj;
- procedimiento de medición.

Ese conjunto constituye un:

**sistema de referencia**

Una posición o velocidad siempre se expresa:

- respecto de un sistema.

---

## 2. Un mismo movimiento puede verse diferente

Una persona sentada dentro de un tren tiene:

- velocidad cero respecto del tren.

Pero respecto del andén tiene:

- la velocidad del tren.

No existe contradicción.

La velocidad depende del:

- sistema de referencia.

---

## 3. Sistema de referencia inercial

Un sistema es aproximadamente **inercial** si un cuerpo libre:

- permanece en reposo;
- o se mueve con velocidad constante;

cuando la fuerza neta es cero.

Es el marco donde las leyes de Newton adoptan su forma usual.

---

## 4. Dos sistemas inerciales

Supongamos dos sistemas:

- S;
- S′.

S′ se mueve respecto de S con velocidad constante:

**v**

a lo largo del eje x.

Elegimos que:

- los orígenes coincidan en t = 0.

Éste será nuestro modelo básico.

---

## 5. Transformación galileana de posición

En mecánica clásica:

<div class="formula-panel">
  <span class="formula-panel__label">Galileo</span>
  <div class="formula-panel__formula">x′ = x − vt</div>
</div>

y:

<div class="formula-panel">
  <span class="formula-panel__label">Tiempo clásico</span>
  <div class="formula-panel__formula">t′ = t</div>
</div>

El tiempo se supone:

- universal;
- idéntico para todos los observadores.

---

## 6. Suma clásica de velocidades

Si un objeto tiene velocidad u respecto de S:

<div class="formula-panel">
  <span class="formula-panel__label">Transformación clásica</span>
  <div class="formula-panel__formula">u′ = u − v</div>
</div>

en una dimensión.

Esta relación funciona excelentemente en:

- velocidades cotidianas.

---

## 7. Ejemplo clásico

Un tren avanza a:

**20 m/s**

Una persona camina hacia adelante dentro del tren a:

**2 m/s**

respecto del tren.

Según Galileo:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo clásico</span>
  <h3>Velocidad respecto del suelo</h3>
  <div class="worked-example-card__steps">
    <p>u = 20 m/s + 2 m/s</p>
    <p><strong>u = 22 m/s</strong></p>
  </div>
</div>

La corrección relativista sería:

- completamente despreciable;

a estas velocidades.

---

## 8. Relatividad galileana

Galileo ya había reconocido que dentro de un sistema que se mueve con velocidad constante:

- no podemos detectar ese movimiento uniforme mediante experimentos mecánicos internos simples.

Las leyes mecánicas tienen la misma forma en:

- todos los sistemas inerciales.

---

## 9. El barco de Galileo

Imaginemos experimentos dentro de la cabina cerrada de un barco que se mueve uniformemente.

Podemos:

- dejar caer objetos;
- observar insectos;
- derramar agua;
- lanzar una pelota.

Los experimentos internos no revelan una velocidad absoluta del barco.

Sólo importan:

- movimientos relativos.

---

## 10. El problema con el electromagnetismo

Las ecuaciones de Maxwell predicen ondas electromagnéticas con velocidad:

<div class="formula-panel">
  <span class="formula-panel__label">Velocidad electromagnética</span>
  <div class="formula-panel__formula">c = 1/√(μ<sub>0</sub>ε<sub>0</sub>)</div>
</div>

Ese valor coincide con:

- la velocidad de la luz en el vacío.

Pero surge una pregunta:

> ¿respecto de qué sistema de referencia vale c?

---

## 11. Una intuición clásica sobre ondas

El sonido tiene velocidad definida respecto de:

- el medio material.

Si el aire se mueve respecto de nosotros:

- medimos efectos de ese movimiento.

Por analogía, durante el siglo XIX se propuso que la luz podría propagarse en un medio llamado:

**éter luminífero**

---

## 12. El éter como hipótesis histórica

El éter debía:

- llenar el espacio;
- sostener ondas luminosas;
- definir un marco privilegiado.

La Tierra se movería a través de ese medio.

Entonces podría esperarse detectar un:

**“viento de éter”**

mediante diferencias en la velocidad efectiva de la luz.

---

## 13. Michelson y Morley

En 1887, Albert Michelson y Edward Morley realizaron un experimento interferométrico muy sensible.

Compararon la propagación de la luz:

- en direcciones perpendiculares.

Si existiera un viento de éter clásico apreciable:

- debería producir un desplazamiento de las franjas al rotar el instrumento.

---

## 14. Resultado de Michelson-Morley

No apareció el efecto esperado por el modelo simple de éter estacionario.

El resultado fue:

- nulo dentro de la sensibilidad experimental correspondiente.

Esto generó una dificultad importante para:

- las concepciones clásicas del éter.

---

## 15. Qué no debemos decir sobre Michelson-Morley

No es correcto resumir:

> “Michelson-Morley demostró por sí solo la relatividad especial”.

El desarrollo histórico incluyó:

- electromagnetismo de Maxwell;
- transformaciones de Lorentz;
- trabajos de Lorentz y Poincaré;
- distintos experimentos;
- la formulación conceptual de Einstein.

Michelson-Morley fue:

- una pieza importante del contexto.

---

## 16. Einstein en 1905

Einstein propuso una reorganización profunda del problema.

En vez de introducir un medio privilegiado para la luz, formuló:

**dos postulados**

para los sistemas inerciales.

---

## 17. Primer postulado

> **Las leyes de la Física tienen la misma forma en todos los sistemas de referencia inerciales.**

No existe un sistema inercial privilegiado detectable mediante:

- leyes físicas internas.

---

## 18. Segundo postulado

> **La velocidad de la luz en el vacío tiene el mismo valor c para todos los observadores inerciales, independientemente del movimiento de la fuente o del observador.**

<div class="formula-panel">
  <span class="formula-panel__label">Velocidad de la luz</span>
  <div class="formula-panel__formula">c = 299 792 458 m/s</div>
</div>

---

## 19. La aparente contradicción

Supongamos una nave que se mueve a:

**0,5c**

y enciende una linterna hacia adelante.

La suma clásica sugeriría para un observador externo:

**c + 0,5c = 1,5c**

Pero la relatividad especial establece que ese observador mide:

**c**

para la luz.

Entonces debe cambiar:

- nuestra transformación de espacio y tiempo.

---

## 20. No es la luz la que “se adapta”

No debemos imaginar que la luz cambia misteriosamente su velocidad para complacer a cada observador.

La solución relativista es más profunda:

> **las mediciones de espacio y tiempo de distintos observadores están relacionadas mediante transformaciones diferentes de las galileanas.**

---

## 21. Eventos

Un **evento** es algo que ocurre en:

- una posición;
- un instante.

Ejemplos:

- un relámpago impacta una vía;
- se enciende una lámpara;
- una partícula llega a un detector.

Para especificarlo necesitamos:

- coordenadas espaciales;
- tiempo.

---

## 22. Simultaneidad clásica

En la Física clásica, si dos eventos ocurren al mismo tiempo:

**t<sub>1</sub> = t<sub>2</sub>**

todos los observadores inerciales deberían coincidir en:

- que son simultáneos.

La relatividad especial muestra que esto no es general.

---

## 23. Relatividad de la simultaneidad

Dos eventos separados espacialmente pueden ser simultáneos para un observador y:

- no simultáneos;

para otro que se mueve respecto del primero.

La simultaneidad depende del:

- sistema de referencia.

---

## 24. Tren y relámpagos

Imaginemos dos relámpagos que impactan:

- extremo delantero;
- extremo trasero;

de un tren.

Un observador en el punto medio del andén recibe ambas señales luminosas simultáneamente.

Concluye que:

- los impactos fueron simultáneos en el marco del andén.

---

## 25. Observador dentro del tren

La persona situada en el centro del tren se mueve:

- hacia una señal;
- alejándose de la otra.

Como la velocidad de ambas señales es c respecto de esa persona:

- recibe una antes que la otra.

Al corregir por su posición y usar sincronización relativista, concluye que:

- los eventos no fueron simultáneos en su marco.

---

## 26. No es sólo un retraso visual

La relatividad de simultaneidad no consiste simplemente en:

- “la luz tardó distinto en llegar a los ojos”.

Los observadores pueden corregir los tiempos de propagación.

Aun después de esa corrección:

- asignan tiempos diferentes;

de acuerdo con sus sistemas de referencia.

---

## 27. Factor de Lorentz

Aparece repetidamente el factor:

<div class="formula-panel">
  <span class="formula-panel__label">Factor de Lorentz</span>
  <div class="formula-panel__formula">γ = 1/√(1 − v²/c²)</div>
</div>

Para:

**0 ≤ v < c**

tenemos:

**γ ≥ 1**

---

## 28. Cuando v es pequeña

Si:

**v ≪ c**

entonces:

**v²/c² ≈ 0**

y:

<div class="formula-panel">
  <span class="formula-panel__label">Límite clásico</span>
  <div class="formula-panel__formula">γ ≈ 1</div>
</div>

Las correcciones relativistas se vuelven:

- despreciables.

---

## 29. Algunos valores de γ

| v | γ aproximado |
| --- | ---: |
| 0,1c | 1,005 |
| 0,5c | 1,155 |
| 0,8c | 1,667 |
| 0,9c | 2,294 |
| 0,99c | 7,089 |

Las diferencias crecen rápidamente cerca de:

- c.

---

## 30. Transformaciones de Lorentz — profundización

Para movimiento relativo a lo largo de x:

<div class="formula-panel">
  <span class="formula-panel__label">Posición</span>
  <div class="formula-panel__formula">x′ = γ(x − vt)</div>
</div>

y:

<div class="formula-panel">
  <span class="formula-panel__label">Tiempo</span>
  <div class="formula-panel__formula">t′ = γ(t − vx/c²)</div>
</div>

Aquí aparece una diferencia fundamental:

- espacio y tiempo se mezclan.

---

## 31. Galileo como aproximación de Lorentz

Si:

**v/c → 0**

entonces:

- γ → 1;
- vx/c² → 0.

Por lo tanto:

<div class="formula-panel">
  <span class="formula-panel__label">Límite</span>
  <div class="formula-panel__formula">x′ ≈ x − vt</div>
</div>

y:

<div class="formula-panel">
  <span class="formula-panel__label">Tiempo clásico</span>
  <div class="formula-panel__formula">t′ ≈ t</div>
</div>

La relatividad recupera a Galileo.

---

## 32. Tiempo propio

El **tiempo propio** es el intervalo medido por un único reloj que está presente en:

- ambos eventos;

es decir, por el reloj en cuyo marco los dos eventos ocurren en el mismo lugar.

Lo representaremos como:

**Δτ**

---

## 33. Ejemplo conceptual de tiempo propio

Una persona dentro de una nave mide con su reloj:

- salida de una señal;
- regreso de esa señal;

si ambos eventos ocurren junto a ella.

Ese reloj mide:

**Δτ**

Para otros observadores en movimiento relativo, los eventos ocurren:

- en lugares diferentes.

---

## 34. Dilatación temporal

Si Δτ es el tiempo propio:

<div class="formula-panel">
  <span class="formula-panel__label">Dilatación temporal</span>
  <div class="formula-panel__formula">Δt = γΔτ</div>
</div>

Como:

**γ ≥ 1**

tenemos:

<div class="formula-panel">
  <span class="formula-panel__label">Comparación</span>
  <div class="formula-panel__formula">Δt ≥ Δτ</div>
</div>

---

## 35. Qué significa “reloj en movimiento”

Desde un sistema inercial, un reloj que se mueve respecto de ese sistema acumula:

- menos tiempo propio;

entre determinados eventos que el intervalo coordinado correspondiente.

La frase popular:

> “los relojes en movimiento van más lento”

es útil sólo si se especifica:

- respecto de qué marco;
- entre qué eventos.

---

## 36. Simetría entre observadores inerciales

Si dos observadores se mueven uniformemente uno respecto del otro:

- cada uno puede describir al reloj del otro como dilatado.

No hay contradicción porque comparan:

- diferentes conjuntos de eventos;
- diferentes nociones de simultaneidad.

La relatividad de simultaneidad es esencial para mantener la consistencia.

---

## 37. Ejemplo de dilatación temporal

Una nave se mueve a:

**v = 0,80c**

Entonces:

**γ = 1,667**

Si dentro de la nave transcurren:

**Δτ = 3,0 años**

un observador inercial terrestre correspondiente mide:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Dilatación temporal</h3>
  <div class="worked-example-card__steps">
    <p>Δt = γΔτ</p>
    <p>Δt = 1,667 × 3,0 años</p>
    <p><strong>Δt ≈ 5,0 años</strong></p>
  </div>
</div>

---

## 38. Reloj de luz — experimento mental

Imaginemos un reloj formado por:

- dos espejos;
- un pulso de luz que rebota entre ellos.

En el marco del reloj, la luz recorre verticalmente:

- una distancia simple.

Para un observador que ve moverse el reloj:

- la luz sigue una trayectoria diagonal más larga.

Como ambos miden la misma c:

- el intervalo temporal debe ser mayor.

---

## 39. Derivación accesible de la dilatación — profundización

En media oscilación del reloj de luz:

- distancia vertical = L;
- tiempo propio = Δτ/2.

Entonces:

**L = cΔτ/2**

Para el observador externo, por Pitágoras:

<div class="formula-panel">
  <span class="formula-panel__label">Geometría</span>
  <div class="formula-panel__formula">(cΔt/2)² = L² + (vΔt/2)²</div>
</div>

Sustituyendo L y despejando:

<div class="formula-panel">
  <span class="formula-panel__label">Resultado</span>
  <div class="formula-panel__formula">Δt = γΔτ</div>
</div>

---

## 40. Muones atmosféricos

Los muones son partículas inestables producidas en:

- la atmósfera.

Su tiempo de vida propio es muy corto.

Sin efectos relativistas simples, muchos no deberían alcanzar:

- la superficie terrestre;

desde las alturas donde se forman.

---

## 41. Muones y dilatación temporal

Desde el marco terrestre:

- los muones se mueven a velocidades cercanas a c;
- su tiempo de vida observado aparece dilatado.

Eso permite que una fracción mucho mayor alcance:

- detectores en superficie.

Es una evidencia experimental directa de:

- efectos relativistas.

---

## 42. Desde el marco del muón

El muón no considera que su propio reloj vaya lento.

Mide su:

- tiempo propio normal.

Desde su marco, es la atmósfera la que se mueve y su espesor aparece:

- contraído.

Ambas descripciones predicen:

- el mismo encuentro entre muón y detector.

---

## 43. Longitud propia

La **longitud propia** L<sub>0</sub> de un objeto es la longitud medida en el sistema donde:

- el objeto está en reposo.

Para medirla:

- sus extremos tienen posiciones fijas;
- puede usarse una regla en ese mismo marco.

---

## 44. Contracción de longitud

Si un objeto se mueve con velocidad v paralela a su longitud:

<div class="formula-panel">
  <span class="formula-panel__label">Contracción longitudinal</span>
  <div class="formula-panel__formula">L = L<sub>0</sub>/γ</div>
</div>

Como:

**γ ≥ 1**

tenemos:

**L ≤ L<sub>0</sub>**

---

## 45. Sólo en la dirección del movimiento

La contracción ocurre en la componente de longitud:

- paralela a la velocidad relativa.

Las dimensiones perpendiculares no se contraen por este efecto en la transformación estándar.

---

## 46. No es una deformación mecánica

Una nave no “se aplasta” físicamente en su propio marco.

En el marco de la nave:

- su longitud sigue siendo L<sub>0</sub>.

La longitud menor aparece en:

- otro marco donde la nave se mueve.

Es una diferencia en la medición espacio-temporal.

---

## 47. Medir una longitud en movimiento requiere simultaneidad

Para medir la longitud de un objeto que se mueve debemos registrar:

- posición del extremo delantero;
- posición del extremo trasero;

**al mismo tiempo en nuestro marco**.

Como la simultaneidad es relativa:

- diferentes marcos pueden obtener longitudes distintas.

---

## 48. Ejemplo de contracción

Una nave tiene longitud propia:

**L<sub>0</sub> = 100 m**

y se mueve a:

**0,80c**

Con:

**γ = 1,667**

un observador terrestre mide:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Contracción de longitud</h3>
  <div class="worked-example-card__steps">
    <p>L = L<sub>0</sub>/γ</p>
    <p>L = 100/1,667</p>
    <p><strong>L ≈ 60 m</strong></p>
  </div>
</div>

---

## 49. Tiempo propio y longitud propia no son “mínimo” y “máximo” arbitrarios

En las configuraciones estándar:

- el tiempo propio es el menor intervalo entre los mismos dos eventos comparado con marcos inerciales donde ocurren en lugares distintos;
- la longitud propia es la mayor longitud de ese objeto comparada con marcos donde se mueve longitudinalmente.

Pero lo importante es reconocer sus definiciones:

- mismo lugar para tiempo propio;
- objeto en reposo para longitud propia.

---

## 50. Transformación relativista de velocidades — profundización

Para velocidades colineales:

<div class="formula-panel">
  <span class="formula-panel__label">Velocidad relativista</span>
  <div class="formula-panel__formula">u′ = (u − v)/(1 − uv/c²)</div>
</div>

Esta reemplaza a:

**u′ = u − v**

cuando las velocidades son relativistas.

---

## 51. La luz sigue teniendo velocidad c

Si:

**u = c**

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Invariancia de c</span>
  <div class="formula-panel__formula">u′ = (c − v)/(1 − v/c) = c</div>
</div>

La fórmula relativista conserva:

- la velocidad de la luz.

---

## 52. Suma relativista de velocidades

Si una nave se mueve a:

**0,80c**

y lanza un objeto hacia adelante a:

**0,70c**

respecto de la nave, la velocidad respecto de la Tierra no es:

**1,50c**

Sino:

<div class="formula-panel">
  <span class="formula-panel__label">Composición</span>
  <div class="formula-panel__formula">u = (0,80c + 0,70c)/(1 + 0,80·0,70)</div>
</div>

---

## 53. Ejemplo de suma relativista

Calculando:

**u = 1,50c/1,56**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Composición de velocidades</h3>
  <div class="worked-example-card__steps">
    <p>u ≈ 0,962c</p>
    <p><strong>La velocidad sigue siendo menor que c.</strong></p>
  </div>
</div>

---

## 54. Ningún objeto con masa alcanza c mediante aceleración ordinaria

A medida que v se acerca a c:

- γ aumenta sin límite.

La energía necesaria para seguir aumentando la velocidad crece enormemente.

En relatividad especial:

> **un objeto con masa en reposo distinta de cero no puede acelerarse hasta c mediante una cantidad finita de energía.**

---

## 55. La luz no “acelera hasta c”

Los fotones en vacío se propagan a:

**c**

No deben imaginarse como objetos con masa ordinaria que:

- parten del reposo;
- aceleran hasta alcanzar c.

Su descripción relativista es diferente.

---

## 56. Cantidad de movimiento relativista — profundización

Para una partícula con masa de reposo m:

<div class="formula-panel">
  <span class="formula-panel__label">Momento relativista</span>
  <div class="formula-panel__formula">p = γmv</div>
</div>

Cuando:

**v ≪ c**

tenemos:

**γ ≈ 1**

y recuperamos:

**p ≈ mv**

---

## 57. Energía relativista total

La energía total de una partícula con masa de reposo m es:

<div class="formula-panel">
  <span class="formula-panel__label">Energía total</span>
  <div class="formula-panel__formula">E = γmc²</div>
</div>

Incluye:

- energía de reposo;
- energía cinética.

---

## 58. Energía de reposo

Si la partícula está en reposo:

**v = 0**

entonces:

**γ = 1**

y:

<div class="formula-panel">
  <span class="formula-panel__label">Energía de reposo</span>
  <div class="formula-panel__formula">E<sub>0</sub> = mc²</div>
</div>

Ésta es la forma precisa de interpretar la famosa relación:

**E = mc²**

cuando E significa energía de reposo.

---

## 59. Energía cinética relativista

La energía cinética es:

<div class="formula-panel">
  <span class="formula-panel__label">Energía cinética</span>
  <div class="formula-panel__formula">K = E − E<sub>0</sub></div>
</div>

Por lo tanto:

<div class="formula-panel">
  <span class="formula-panel__label">Forma relativista</span>
  <div class="formula-panel__formula">K = (γ − 1)mc²</div>
</div>

---

## 60. Recuperar K = ½mv²

Cuando:

**v ≪ c**

puede aproximarse:

<div class="formula-panel">
  <span class="formula-panel__label">Expansión</span>
  <div class="formula-panel__formula">γ ≈ 1 + ½v²/c²</div>
</div>

Entonces:

**K = (γ − 1)mc²**

se convierte aproximadamente en:

<div class="formula-panel">
  <span class="formula-panel__label">Límite newtoniano</span>
  <div class="formula-panel__formula">K ≈ ½mv²</div>
</div>

---

## 61. Relación energía-momento — profundización

Una relación muy importante es:

<div class="formula-panel">
  <span class="formula-panel__label">Energía y momento</span>
  <div class="formula-panel__formula">E² = p²c² + m²c⁴</div>
</div>

Para una partícula en reposo:

- p = 0;
- E = mc².

---

## 62. Fotones y relatividad

Para un fotón:

- masa de reposo m = 0.

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Fotón</span>
  <div class="formula-panel__formula">E = pc</div>
</div>

Como:

**E = hf**

resulta:

<div class="formula-panel">
  <span class="formula-panel__label">Momento del fotón</span>
  <div class="formula-panel__formula">p = h/λ</div>
</div>

Esto conecta:

- relatividad;
- teoría cuántica.

---

## 63. Equivalencia masa-energía

La masa de reposo de un sistema contribuye a su:

- energía interna total.

Si cambia la energía interna de un sistema aislado o ligado:

- puede cambiar su masa total.

La equivalencia:

**E<sub>0</sub> = mc²**

expresa una relación profunda entre:

- masa;
- energía.

---

## 64. Masa no es “energía congelada” en sentido literal

Frases como:

> “la masa es energía congelada”

pueden ser sugerentes, pero son imprecisas.

Es mejor decir:

> **la masa de un sistema está relacionada con su energía de reposo mediante E<sub>0</sub> = mc².**

---

## 65. No usamos “masa relativista” en este curso

A veces se define una masa que aumenta con velocidad.

Esa convención histórica puede generar confusión.

Usaremos:

- masa de reposo o masa invariante m;
- energía total E = γmc²;
- momento p = γmv.

La masa m permanece:

- invariante.

---

## 66. Ejemplo de energía de reposo

Para:

**m = 1,0 g = 1,0 × 10<sup>−3</sup> kg**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Energía equivalente a 1 gramo</h3>
  <div class="worked-example-card__steps">
    <p>E<sub>0</sub> = mc²</p>
    <p>E<sub>0</sub> = 1,0×10<sup>−3</sup> × (3,00×10<sup>8</sup>)²</p>
    <p><strong>E<sub>0</sub> ≈ 9,0 × 10<sup>13</sup> J</strong></p>
  </div>
</div>

Esto no significa que podamos convertir fácilmente:

- toda esa masa en energía utilizable.

---

## 67. Energía de enlace y masa

Cuando partículas se unen formando un sistema ligado y liberan energía:

- la masa del sistema ligado puede ser menor que la suma de las masas separadas.

Esta diferencia será fundamental en:

**F-31 — Física nuclear**

---

## 68. Relatividad especial y relatividad general

### Relatividad especial

Describe fundamentalmente:

- sistemas inerciales;
- espacio-tiempo plano;
- ausencia de tratamiento general de la gravitación.

### Relatividad general

Describe la gravedad mediante:

- geometría del espacio-tiempo;
- efectos de masa-energía;
- sistemas acelerados de manera más amplia.

---

## 69. Aceleración no está “prohibida” en relatividad especial

La relatividad especial también puede analizar:

- partículas aceleradas;
- cohetes;
- trayectorias no inerciales;

dentro de un espacio-tiempo sin gravedad relevante.

Lo que no ofrece es:

- una teoría general de la gravitación.

---

## 70. Gravedad y equivalencia

Einstein extendió las ideas relativistas mediante el:

- principio de equivalencia.

Eso llevó a la relatividad general.

No desarrollaremos aquí:

- curvatura del espacio-tiempo;
- ecuaciones de Einstein.

---

## 71. Paradoja de los gemelos

Imaginemos dos gemelos.

Uno permanece aproximadamente en la Tierra.

El otro:

- viaja a alta velocidad;
- cambia de movimiento para regresar.

Al reunirse:

- pueden haber acumulado tiempos propios diferentes.

---

## 72. ¿Por qué no es simétrica la paradoja de los gemelos?

Durante un tramo inercial uniforme, ambos pueden describir al otro como:

- en movimiento.

Pero el viajero debe:

- cambiar de marco;
- acelerar o invertir su movimiento;
- seguir una trayectoria distinta en el espacio-tiempo.

Los dos gemelos no recorren:

- la misma historia espacio-temporal.

---

## 73. El tiempo propio depende de la trayectoria

Entre dos encuentros, diferentes trayectorias por el espacio-tiempo pueden acumular:

- diferentes tiempos propios.

Esta es la forma más profunda de resolver:

- la aparente paradoja.

---

## 74. Paradoja del granero y la escalera

Una escalera muy larga se mueve a velocidad relativista hacia un granero.

Desde el granero:

- la escalera está contraída;
- puede caber momentáneamente.

Desde la escalera:

- es el granero el que está contraído.

¿Contradicción?

No.

---

## 75. La simultaneidad resuelve el granero

Cerrar simultáneamente las dos puertas del granero es una condición:

- simultánea en el marco del granero.

No es simultánea en:

- el marco de la escalera.

Por eso ambos marcos describen los mismos eventos sin contradicción.

---

## 76. “Paradoja” no significa contradicción de la teoría

Muchas paradojas relativistas son:

- conflictos con intuiciones clásicas;
- consecuencias de mezclar marcos de referencia;
- errores sobre simultaneidad.

Al analizar correctamente los eventos:

- la contradicción desaparece.

---

## 77. Causalidad

La relatividad especial mantiene una estructura causal.

Una señal física no puede transmitir información:

- más rápido que c;

dentro de la teoría estándar.

Esto ayuda a preservar:

- el orden causal de eventos que pueden influirse.

---

## 78. Intervalos temporales y causalidad — profundización

Si dos eventos están conectados por una señal más lenta o igual que c:

- todos los observadores inerciales coinciden en cuál puede ser causa del otro.

Para eventos demasiado separados espacialmente:

- distintos observadores pueden discrepar en el orden temporal;
- pero no pueden conectarlos causalmente mediante señales sublumínicas.

---

## 79. Diagrama espacio-tiempo — profundización

Podemos representar:

- posición x en horizontal;
- tiempo ct en vertical.

Una partícula describe una:

**línea de universo**

La luz sigue líneas con:

- pendiente característica;
- x = ±ct.

Esto ayuda a visualizar:

- causalidad;
- simultaneidad;
- tiempo propio.

---

## 80. Cono de luz

Desde un evento, la luz define:

- cono de luz futuro;
- cono de luz pasado.

Dentro del cono pueden existir relaciones causales mediante velocidades:

**≤ c**

Fuera del cono no puede llegar una señal causal ordinaria desde ese evento sin superar:

- c.

---

## 81. Experiencia conceptual: sincronizar relojes

Podemos imaginar dos relojes separados A y B.

Para sincronizarlos en un marco:

1. enviamos una señal luminosa;
2. suponemos propagación a c;
3. corregimos el tiempo de viaje;
4. definimos simultaneidad dentro de ese sistema.

Otro marco en movimiento no conserva necesariamente:

- la misma sincronización.

---

## 82. Actividad con una tabla de γ

Podemos calcular γ para distintas velocidades:

- 0,01c;
- 0,1c;
- 0,5c;
- 0,8c;
- 0,99c.

Después graficamos:

- γ versus v/c.

Se observa que:

- γ ≈ 1 a velocidades pequeñas;
- crece rápidamente cerca de c.

---

## 83. Actividad con datos de muones

Podemos comparar:

- tiempo de vida propio;
- velocidad;
- altura de producción;
- distancia clásica esperada;
- distancia observada relativista.

Esto permite contrastar:

- modelo newtoniano;
- modelo relativista.

No requiere realizar experimentos con radiación.

---

## 84. Actividad con simulación de reloj de luz

Una animación o dibujo permite comparar:

### Marco del reloj

Trayectoria vertical del pulso.

### Marco externo

Trayectoria diagonal.

Usando:

- Pitágoras;
- c constante;

se obtiene cualitativamente:

**Δt > Δτ**

---

## 85. Aplicación: aceleradores de partículas

En aceleradores, electrones y protones pueden alcanzar velocidades cercanas a:

- c.

Las fórmulas clásicas dejan de ser suficientes para:

- energía;
- momento;
- dinámica.

La ingeniería del acelerador debe utilizar:

- relatividad especial.

---

## 86. Aplicación: GPS

Los sistemas de navegación satelital requieren correcciones temporales extremadamente precisas.

Intervienen:

- efectos de relatividad especial por el movimiento de los satélites;
- efectos de relatividad general por diferencias gravitatorias.

Sin esas correcciones:

- los errores de posicionamiento crecerían rápidamente.

---

## 87. GPS no es sólo una prueba de relatividad especial

Es importante distinguir:

- movimiento → corrección especial;
- gravedad → corrección general.

El funcionamiento preciso del sistema utiliza:

- ambas teorías.

---

## 88. Aplicación: rayos cósmicos

Partículas de alta energía provenientes del espacio alcanzan velocidades muy cercanas a c.

Su análisis requiere:

- energía relativista;
- momento relativista;
- dilatación temporal.

---

## 89. Aplicación: Física nuclear

En procesos nucleares:

- pequeñas diferencias de masa;

pueden corresponder a energías enormes porque:

**c²**

es muy grande.

Esto será central para:

- energía de enlace;
- fisión;
- fusión.

---

## 90. Relatividad no permite viajar “instantáneamente”

La dilatación temporal puede hacer que un viajero acumule menos tiempo propio durante un viaje rápido.

Pero eso no significa:

- velocidad infinita;
- transporte instantáneo;
- violación de c.

Las distancias y tiempos dependen del marco.

---

## 91. Tampoco implica que el tiempo “se detenga” para un objeto con masa

Para cualquier objeto material:

**v < c**

y su tiempo propio transcurre normalmente en su propio marco.

No existe un sistema de referencia inercial válido:

- en reposo con un fotón.

Por eso frases como:

> “para la luz no pasa el tiempo”

son pedagógicamente engañosas.

---

## 92. Dominio de validez de Newton

La mecánica newtoniana funciona extraordinariamente bien cuando:

<div class="formula-panel">
  <span class="formula-panel__label">Condición práctica</span>
  <div class="formula-panel__formula">v ≪ c</div>
</div>

y cuando no necesitamos:

- precisión relativista extrema;
- gravedad relativista.

---

## 93. Cuán pequeña es la corrección cotidiana

Para un automóvil a:

**30 m/s**

tenemos aproximadamente:

**v/c ≈ 10<sup>−7</sup>**

y:

**v²/c² ≈ 10<sup>−14</sup>**

Entonces:

**γ − 1**

es del orden de:

**10<sup>−15</sup>**

La mecánica clásica es más que suficiente.

---

## 94. Relatividad como ampliación, no destrucción

Podemos ordenar:

### Velocidades cotidianas

Newton.

### Velocidades cercanas a c

Relatividad especial.

### Gravedad intensa o geometría espacio-temporal

Relatividad general.

Una teoría más general explica:

- por qué la anterior funcionaba tan bien en su dominio.

---

## 95. Estrategia para problemas de dilatación temporal

1. Identificá los dos eventos.
2. Preguntá:
   - ¿en qué marco ocurren en el mismo lugar?
3. Ese intervalo es:
   - Δτ.
4. Calculá:
   - γ.
5. Usá:
   - Δt = γΔτ.
6. Verificá:
   - Δt ≥ Δτ.

---

## 96. Estrategia para contracción de longitud

1. Identificá el objeto.
2. Encontrá su marco de reposo.
3. Allí se mide:
   - L<sub>0</sub>.
4. En el marco donde se mueve:
   - L = L<sub>0</sub>/γ.
5. Verificá:
   - L ≤ L<sub>0</sub>.
6. Recordá que sólo se contrae:
   - la dimensión paralela al movimiento.

---

## 97. Estrategia para energía relativista

1. Calculá v/c.
2. Hallá γ.
3. Energía de reposo:
   - E<sub>0</sub> = mc².
4. Energía total:
   - E = γmc².
5. Energía cinética:
   - K = (γ − 1)mc².
6. Si `v ≪ c`, compará con:
   - ½mv².

---

## 98. Errores frecuentes

### “La relatividad dice que todo es relativo”

No.

### “Michelson-Morley, por sí solo, demostró toda la teoría”

No.

### “La luz viaja a c sólo respecto de su fuente”

No.

### “La simultaneidad es absoluta”

No para eventos espacialmente separados.

### “La dilatación temporal es sólo una ilusión óptica”

No.

### “El reloj en movimiento funciona mal mecánicamente”

No.

### “La contracción significa que el objeto se siente aplastado”

No.

### “E = mc² es siempre la energía total de una partícula en movimiento”

No. Para una partícula masiva, E<sub>0</sub> = mc² es la energía de reposo y `E = γmc²` la energía total.

### “La masa aumenta con la velocidad”

En este curso mantenemos la masa invariante y atribuimos el cambio a energía y momento relativistas.

### “Un objeto con masa puede superar c si le damos suficiente energía”

No.

### “Para un fotón el tiempo está detenido”

No existe un marco inercial de reposo del fotón.

---

## 99. Problemas y ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Conceptos</strong>
  </div>
  <ol>
    <li>Definí sistema de referencia inercial.</li>
    <li>Enunciá los dos postulados de Einstein.</li>
    <li>Explicá qué significa relatividad de la simultaneidad.</li>
    <li>Distinguí tiempo propio y longitud propia.</li>
    <li>Explicá por qué la mecánica newtoniana sigue siendo válida en la vida cotidiana.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Factor de Lorentz</strong>
  </div>
  <ol>
    <li>Calculá γ para v = 0,60c.</li>
    <li>Calculá γ para v = 0,90c.</li>
    <li>Compará ambos resultados.</li>
    <li>¿Qué ocurre con γ cuando v se aproxima a c?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Tiempo y longitud</strong>
  </div>
  <ol>
    <li>Una nave viaja a 0,80c y en ella transcurren 6 años. Calculá el intervalo en el marco terrestre idealizado.</li>
    <li>Una barra tiene longitud propia 10 m y se mueve a 0,60c paralelamente a su longitud. Calculá la longitud observada.</li>
    <li>Explicá por qué la longitud propia no se mide en el marco donde el objeto se mueve.</li>
    <li>Describí cómo se relacionan dilatación temporal y contracción en el ejemplo de los muones.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Velocidades y energía</strong>
  </div>
  <ol>
    <li>Una nave viaja a 0,70c y lanza una sonda hacia adelante a 0,60c respecto de la nave. Calculá la velocidad relativista respecto de la Tierra.</li>
    <li>Una partícula de masa m se mueve a 0,80c. Expresá su energía total en múltiplos de mc².</li>
    <li>Calculá su energía cinética en múltiplos de mc².</li>
    <li>Explicá por qué K relativista se aproxima a ½mv² para v pequeña.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Derivá Δt = γΔτ mediante el reloj de luz y el teorema de Pitágoras.</li>
    <li>Mostrá que la transformación relativista de velocidades mantiene u = c.</li>
    <li>Explicá la paradoja de los gemelos usando tiempo propio y trayectorias diferentes.</li>
    <li>Usá una expansión para velocidades pequeñas y recuperá K ≈ ½mv² desde K = (γ − 1)mc².</li>
  </ol>
</div>

---

## 100. Ejemplo integrado: viaje relativista

Una nave viaja a:

**v = 0,80c**

respecto de la Tierra.

Su longitud propia es:

**L<sub>0</sub> = 120 m**

y los tripulantes miden un intervalo de:

**Δτ = 4,0 años**

entre dos eventos que ocurren en el mismo lugar de la nave.

### Factor de Lorentz

<div class="formula-panel">
  <span class="formula-panel__label">Factor</span>
  <div class="formula-panel__formula">γ = 1/√(1 − 0,80²)</div>
</div>

**γ = 1,667**

### Tiempo medido desde la Tierra

<div class="formula-panel">
  <span class="formula-panel__label">Dilatación</span>
  <div class="formula-panel__formula">Δt = γΔτ</div>
</div>

**Δt ≈ 6,67 años**

### Longitud de la nave desde la Tierra

<div class="formula-panel">
  <span class="formula-panel__label">Contracción</span>
  <div class="formula-panel__formula">L = L<sub>0</sub>/γ</div>
</div>

**L ≈ 72,0 m**

### Energía

Para una masa de reposo m:

<div class="formula-panel">
  <span class="formula-panel__label">Energía total</span>
  <div class="formula-panel__formula">E = 1,667mc²</div>
</div>

y:

<div class="formula-panel">
  <span class="formula-panel__label">Energía cinética</span>
  <div class="formula-panel__formula">K = 0,667mc²</div>
</div>

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>Tiempo, longitud y energía pertenecen a una misma estructura relativista</h3>
  <div class="worked-example-card__steps">
    <p>γ = 1,667</p>
    <p>Δt terrestre ≈ 6,67 años</p>
    <p>L terrestre ≈ 72,0 m</p>
    <p>E = 1,667mc²</p>
    <p>K = 0,667mc²</p>
    <p><strong>No son efectos independientes: todos surgen de la misma transformación relativista del espacio-tiempo y de la dinámica compatible con ella.</strong></p>
  </div>
</div>

---

## 101. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Qué afirma el primer postulado de Einstein?</summary>
  <div class="lesson-quiz__answer">
    Que las leyes de la Física tienen la misma forma en todos los sistemas de referencia inerciales.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Qué afirma el segundo postulado?</summary>
  <div class="lesson-quiz__answer">
    Que todos los observadores inerciales miden la misma velocidad c para la luz en el vacío, independientemente del movimiento de la fuente o del observador.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Qué es el tiempo propio?</summary>
  <div class="lesson-quiz__answer">
    El intervalo medido por un único reloj para dos eventos que ocurren en el mismo lugar en el marco de ese reloj.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Qué es la longitud propia?</summary>
  <div class="lesson-quiz__answer">
    La longitud de un objeto medida en el sistema de referencia donde el objeto está en reposo.
  </div>
</details>

<details class="lesson-quiz">
  <summary>5. ¿Qué representa E = mc² en su forma más precisa para una partícula masiva?</summary>
  <div class="lesson-quiz__answer">
    La energía de reposo E₀ = mc². Si la partícula se mueve, su energía total es E = γmc².
  </div>
</details>

<details class="lesson-quiz">
  <summary>6. ¿Por qué Newton sigue funcionando para un automóvil?</summary>
  <div class="lesson-quiz__answer">
    Porque su velocidad es muchísimo menor que c, de modo que γ es indistinguible de 1 para la precisión habitual y las fórmulas relativistas se reducen a las clásicas.
  </div>
</details>

---

## 102. Resumen

- El movimiento debe describirse respecto de un sistema de referencia.
- Un sistema inercial es aquel donde un cuerpo libre mantiene velocidad constante.
- Galileo utiliza `x′ = x − vt` y tiempo absoluto `t′ = t`.
- La suma clásica de velocidades funciona cuando `v ≪ c`.
- Maxwell predice una velocidad de propagación electromagnética c.
- Michelson-Morley no detectó el efecto esperado por un modelo simple de éter estacionario.
- Einstein formuló dos postulados para sistemas inerciales.
- Las leyes físicas tienen la misma forma en todos los sistemas inerciales.
- Todos los observadores inerciales miden c para la luz en vacío.
- La simultaneidad de eventos espacialmente separados es relativa al marco.
- El factor de Lorentz es `γ = 1/√(1 − v²/c²)`.
- Cuando `v ≪ c`, γ ≈ 1.
- El tiempo propio se mide entre eventos que ocurren en el mismo lugar del reloj.
- La dilatación temporal cumple `Δt = γΔτ`.
- La longitud propia se mide en el marco de reposo del objeto.
- La contracción longitudinal cumple L = L<sub>0</sub>/γ.
- La transformación relativista de velocidades impide obtener velocidades superiores a c mediante suma ordinaria.
- Para una partícula masiva, `p = γmv`.
- Su energía total es `E = γmc²`.
- Su energía de reposo es E<sub>0</sub> = mc².
- Su energía cinética es `K = (γ − 1)mc²`.
- La relación general energía-momento es `E² = p²c² + m²c⁴`.
- Para un fotón, `E = pc`.
- La equivalencia masa-energía será fundamental en Física nuclear.
- La relatividad especial no es lo mismo que la relatividad general.
- Las paradojas aparentes suelen resolverse distinguiendo marcos, simultaneidad y tiempo propio.
- La mecánica de Newton reaparece como excelente aproximación en el límite de velocidades pequeñas frente a c.

---

## 103. Siguiente tema recomendado

**F-31 — Física nuclear**

La relatividad especial nos mostró que masa y energía están profundamente relacionadas.

Ahora aplicaremos esa idea al núcleo atómico.

Estudiaremos:

- protones y neutrones;
- isótopos;
- estabilidad nuclear;
- energía de enlace;
- defecto de masa;
- radiactividad;
- desintegraciones alfa, beta y gamma;
- ley de decaimiento;
- vida media;
- actividad;
- radiación ionizante;
- detección y protección;
- fisión;
- reacción en cadena;
- reactores;
- fusión;
- energía estelar;
- aplicaciones médicas e industriales.
