---
title: "Cinemática: descripción del movimiento"
description: "Cómo describir el movimiento mediante sistemas de referencia, posición, trayectoria, desplazamiento, velocidad y aceleración, e interpretar x(t), v(t) y a(t)."
slug: "cinematica-descripcion-del-movimiento"

course: "fisica"
module: "cinematica"
order: 2

level: "intermedio"
cycle: "ambos"

yearsApprox: [3, 4, 5]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - herramientas-matematicas-para-fisica

skills:
  - sistema-de-referencia
  - posicion
  - vector-posicion
  - trayectoria
  - distancia-recorrida
  - desplazamiento
  - intervalo-de-tiempo
  - rapidez-media
  - velocidad-media
  - velocidad-instantanea
  - aceleracion-media
  - aceleracion-instantanea
  - graficos-de-movimiento

hasExercises: true
hasQuiz: true
hasExperiment: true

deepening: true
status: "complete"
---

## ¿Cómo describimos un movimiento sin explicar todavía su causa?

Un auto pasa frente a una esquina.

Una pelota cambia de dirección.

Una persona camina, se detiene y vuelve hacia atrás.

Antes de preguntar **por qué** ocurre el movimiento, podemos preguntarnos:

- ¿dónde está el cuerpo?
- ¿respecto de qué referencia?
- ¿cómo cambia su posición?
- ¿qué distancia recorrió?
- ¿cuál fue su desplazamiento?
- ¿qué velocidad tiene?
- ¿cómo cambia esa velocidad?

La **cinemática** estudia precisamente cómo describir el movimiento sin comenzar todavía por las causas que lo producen.

> **Primero describimos el movimiento. Más adelante, con la dinámica, estudiaremos qué interacciones pueden cambiarlo.**

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Decir que un objeto “se mueve” no alcanza. En Física necesitamos especificar respecto de qué referencia lo describimos y cómo cambian sus magnitudes con el tiempo.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta lección deberías poder:

- elegir un sistema de referencia;
- describir una posición;
- interpretar el vector posición;
- distinguir trayectoria, distancia recorrida y desplazamiento;
- distinguir instante e intervalo de tiempo;
- calcular rapidez media;
- calcular velocidad media;
- interpretar velocidad instantánea;
- calcular aceleración media;
- interpretar aceleración instantánea;
- leer gráficos `x(t)`, `v(t)` y `a(t)`;
- relacionar pendiente de `x(t)` con velocidad;
- relacionar pendiente de `v(t)` con aceleración;
- evitar errores frecuentes de signo y de interpretación gráfica.

---

## 1. Cinemática

La **cinemática** es la rama de la mecánica que describe el movimiento.

Se ocupa de magnitudes como:

- posición;
- tiempo;
- desplazamiento;
- velocidad;
- aceleración.

En esta etapa no necesitamos explicar todavía las fuerzas que producen los cambios.

Eso será parte de la dinámica.

---

## 2. Movimiento y reposo dependen de una referencia

Imaginemos una persona sentada en un tren.

Respecto del asiento:

- su posición puede permanecer aproximadamente constante.

Respecto de una estación:

- su posición cambia.

Entonces puede estar:

- en reposo respecto del tren;
- en movimiento respecto de la estación.

No hay contradicción.

Estamos usando referencias diferentes.

---

## 3. Sistema de referencia

Un **sistema de referencia** permite asignar posiciones y describir cómo cambian con el tiempo.

En un problema sencillo puede incluir:

- un origen;
- uno o más ejes;
- sentidos positivos;
- una escala espacial;
- una referencia temporal.

En una dimensión:

```text
                 +x
←────────────────0────────────────→
               origen
```

Podemos elegir:

- derecha como positiva;
- izquierda como negativa.

Esa elección es convencional.

---

## 4. Elegir la referencia no cambia el fenómeno

Supongamos un auto que viaja hacia una ciudad.

Podemos elegir:

### Sistema A

- origen en una estación;
- este positivo.

### Sistema B

- origen 10 km más adelante;
- oeste positivo.

Los valores numéricos de posición y velocidad pueden cambiar.

Pero el movimiento físico es el mismo.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>La coordenada depende del sistema</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Una posición negativa no significa que el objeto esté “mal ubicado”. Sólo indica que se encuentra del lado negativo del eje elegido.</p>
  </div>
</div>

---

## 5. Posición

La **posición** indica dónde se encuentra un cuerpo respecto del sistema de referencia.

En una dimensión usamos con frecuencia:

**x**

Ejemplos:

- `x = +5 m`;
- `x = −2 m`;
- `x = 0`.

En más dimensiones necesitaremos un vector posición.

---

## 6. Vector posición

En dos o tres dimensiones, la posición se representa mediante el **vector posición**:

<div class="formula-panel">
  <span class="formula-panel__label">Vector posición</span>
  <div class="formula-panel__formula">r = (x, y, z)</div>
</div>

El vector se traza desde el origen del sistema hasta el punto donde se encuentra el cuerpo.

En dos dimensiones:

```text
             y
             ↑
             |
             |        • P
             |      ↗
             |    r
             |  ↗
─────────────O────────────→ x
```

---

## 7. Posición y distancia al origen no son lo mismo

En una dimensión:

**x = −4 m**

indica una posición con signo.

La distancia al origen es:

**4 m**

El signo pertenece a la coordenada.

La distancia es una magnitud escalar no negativa.

---

## 8. Trayectoria

La **trayectoria** es el conjunto de posiciones por las que pasa el cuerpo durante su movimiento.

Puede ser:

- rectilínea;
- circular;
- parabólica;
- curvilínea;
- irregular.

La trayectoria también puede depender del sistema de referencia.

---

## 9. Una trayectoria depende del observador

Imaginemos una persona que deja caer una pelota dentro de un tren que avanza con velocidad aproximadamente constante.

Para alguien dentro del tren:

- la pelota puede verse caer casi verticalmente.

Para alguien en el andén:

- la pelota también avanza horizontalmente;
- la trayectoria observada es diferente.

La Física debe indicar siempre respecto de qué referencia se describe el movimiento.

---

## 10. Distancia recorrida

La **distancia recorrida** es la longitud total del camino seguido.

Es una magnitud escalar.

Por ejemplo, una persona camina:

- 8 m hacia la derecha;
- 3 m hacia la izquierda.

Distancia total:

<div class="formula-panel">
  <span class="formula-panel__label">Distancia recorrida</span>
  <div class="formula-panel__formula">d = 8 m + 3 m = 11 m</div>
</div>

No usamos signos para cancelar tramos.

---

## 11. Desplazamiento

El **desplazamiento** es el cambio de posición.

En una dimensión:

<div class="formula-panel">
  <span class="formula-panel__label">Desplazamiento</span>
  <div class="formula-panel__formula">Δx = x<sub>f</sub> − x<sub>i</sub></div>
</div>

Es una magnitud vectorial.

Su signo depende del eje elegido.

---

## 12. Distancia y desplazamiento

Volvamos al recorrido:

- 8 m a la derecha;
- 3 m a la izquierda.

Si empezamos en:

**x<sub>i</sub> = 0**

terminamos en:

**x<sub>f</sub> = +5 m**

Entonces:

### Distancia

**11 m**

### Desplazamiento

**+5 m**

Son magnitudes diferentes.

<table class="lesson-comparison">
  <thead>
    <tr>
      <th>Magnitud</th>
      <th>Describe</th>
      <th>Tipo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Distancia recorrida</td>
      <td>Longitud total del camino</td>
      <td>Escalar</td>
    </tr>
    <tr>
      <td>Desplazamiento</td>
      <td>Cambio entre posición final e inicial</td>
      <td>Vectorial</td>
    </tr>
  </tbody>
</table>

---

## 13. Volver al punto inicial

Una persona corre una vuelta completa a una pista de:

**400 m**

y vuelve al punto inicial.

Entonces:

### Distancia

**400 m**

### Desplazamiento

**0 m**

<div class="lesson-callout lesson-callout--error">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">!</span>
    <strong>Desplazamiento cero no significa “no se movió”</strong>
  </div>
  <div class="lesson-callout__body">
    <p>El desplazamiento sólo compara posición final e inicial. La distancia registra el recorrido completo.</p>
  </div>
</div>

---

## 14. Desplazamiento vectorial en dos dimensiones

En dos dimensiones:

<div class="formula-panel">
  <span class="formula-panel__label">Desplazamiento vectorial</span>
  <div class="formula-panel__formula">Δr = r<sub>f</sub> − r<sub>i</sub></div>
</div>

Por componentes:

**Δx = x<sub>f</sub> − x<sub>i</sub>**

**Δy = y<sub>f</sub> − y<sub>i</sub>**

Y su módulo es:

<div class="formula-panel">
  <span class="formula-panel__label">Módulo del desplazamiento</span>
  <div class="formula-panel__formula">|Δr| = √(Δx² + Δy²)</div>
</div>

---

## 15. Ejemplo vectorial

Un móvil pasa de:

**r<sub>i</sub> = (2 m, 1 m)**

a:

**r<sub>f</sub> = (8 m, 5 m)**

Entonces:

**Δr = (8 − 2, 5 − 1) m**

**Δr = (6, 4) m**

Módulo:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Desplazamiento en el plano</h3>
  <div class="worked-example-card__steps">
    <p>|Δr| = √(6² + 4²)</p>
    <p>|Δr| = √52</p>
    <p><strong>|Δr| ≈ 7,21 m</strong></p>
  </div>
</div>

---

## 16. Instante

Un **instante** es un valor particular del tiempo.

Ejemplos:

- `t = 0 s`;
- `t = 3,5 s`;
- `t = 12 s`.

Podemos imaginarlo como una lectura específica del reloj.

---

## 17. Intervalo de tiempo

Un **intervalo de tiempo** es la diferencia entre dos instantes:

<div class="formula-panel">
  <span class="formula-panel__label">Intervalo temporal</span>
  <div class="formula-panel__formula">Δt = t<sub>f</sub> − t<sub>i</sub></div>
</div>

Ejemplo:

- t<sub>i</sub> = 2 s;
- t<sub>f</sub> = 9 s.

Entonces:

**Δt = 7 s**

---

## 18. Rapidez media

La **rapidez media** se calcula usando la distancia total recorrida:

<div class="formula-panel">
  <span class="formula-panel__label">Rapidez media</span>
  <div class="formula-panel__formula">rapidez media = distancia total / Δt</div>
</div>

Es una magnitud escalar.

Su unidad SI es:

**m/s**

---

## 19. Ejemplo de rapidez media

Un ciclista recorre:

**600 m**

en:

**40 s**

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Rapidez media</h3>
  <div class="worked-example-card__steps">
    <p>rapidez media = 600 m / 40 s</p>
    <p><strong>rapidez media = 15 m/s</strong></p>
  </div>
</div>

Esto no significa que la rapidez haya sido exactamente 15 m/s en cada instante.

---

## 20. Velocidad media

La **velocidad media** utiliza desplazamiento, no distancia total.

En una dimensión:

<div class="formula-panel">
  <span class="formula-panel__label">Velocidad media</span>
  <div class="formula-panel__formula">v<sub>media</sub> = Δx / Δt</div>
</div>

En forma vectorial:

<div class="formula-panel">
  <span class="formula-panel__label">Velocidad media vectorial</span>
  <div class="formula-panel__formula">v<sub>media</sub> = Δr / Δt</div>
</div>

La velocidad media es vectorial.

---

## 21. Rapidez media y velocidad media pueden ser muy distintas

Una persona recorre:

- 100 m al este;
- 100 m al oeste;

en:

**50 s**

Distancia total:

**200 m**

Rapidez media:

**4 m/s**

Desplazamiento:

**0 m**

Velocidad media:

**0 m/s**

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>No responden la misma pregunta</strong>
  </div>
  <div class="lesson-callout__body">
    <p>La rapidez media mide cuánto camino se recorrió por tiempo. La velocidad media mide cuánto cambió la posición por tiempo.</p>
  </div>
</div>

---

## 22. Velocidad instantánea

La **velocidad instantánea** describe cómo cambia la posición en un instante.

Conceptualmente podemos pensarla como:

> el valor al que se aproxima la velocidad media cuando observamos intervalos de tiempo cada vez más pequeños alrededor de ese instante.

En una dimensión, si disponemos de un gráfico `x(t)`:

- la velocidad instantánea corresponde a la pendiente local del gráfico.

En cursos con cálculo diferencial esto se expresa como:

<div class="formula-panel">
  <span class="formula-panel__label">Profundización</span>
  <div class="formula-panel__formula">v(t) = dx/dt</div>
</div>

No necesitamos usar derivadas formalmente para comprender la idea física.

---

## 23. Rapidez instantánea y velocidad instantánea

La rapidez instantánea es el **módulo** de la velocidad instantánea.

Ejemplo:

**v = −20 m/s**

significa:

- velocidad hacia el sentido negativo;
- rapidez de `20 m/s`.

Un velocímetro de auto informa esencialmente rapidez instantánea, no dirección vectorial completa.

---

## 24. Velocidad positiva, negativa y cero

En una dimensión:

### v > 0

La posición aumenta con el tiempo.

### v < 0

La posición disminuye con el tiempo.

### v = 0

En ese instante la posición no está cambiando.

Esto no significa necesariamente que el cuerpo permanecerá detenido después.

Puede ser un instante de cambio de sentido.

---

## 25. Aceleración media

La **aceleración media** mide cuánto cambia la velocidad durante un intervalo.

<div class="formula-panel">
  <span class="formula-panel__label">Aceleración media</span>
  <div class="formula-panel__formula">a<sub>media</sub> = Δv / Δt</div>
</div>

En una dimensión:

<div class="formula-panel">
  <span class="formula-panel__label">Forma desarrollada</span>
  <div class="formula-panel__formula">a<sub>media</sub> = (v<sub>f</sub> − v<sub>i</sub>)/(t<sub>f</sub> − t<sub>i</sub>)</div>
</div>

Unidad SI:

**m/s²**

---

## 26. Qué significa m/s²

Una aceleración de:

**2 m/s²**

puede significar que, en cierto movimiento unidimensional:

- la velocidad cambia en `2 m/s` por cada segundo;

si la aceleración permanece constante.

No debe leerse como “metros por segundo por segundo” sin interpretación.

Representa una tasa de cambio de velocidad.

---

## 27. Ejemplo de aceleración media

Un auto cambia su velocidad de:

**5 m/s**

a:

**17 m/s**

en:

**4 s**

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Aceleración media</h3>
  <div class="worked-example-card__steps">
    <p>a<sub>media</sub> = (17 − 5) / 4</p>
    <p>a<sub>media</sub> = 12/4</p>
    <p><strong>a<sub>media</sub> = 3 m/s²</strong></p>
  </div>
</div>

---

## 28. Aceleración instantánea

La **aceleración instantánea** describe cómo cambia la velocidad en un instante.

Conceptualmente:

> es el valor al que se aproxima la aceleración media cuando el intervalo considerado se hace muy pequeño.

En un gráfico `v(t)`:

- la aceleración instantánea corresponde a la pendiente local.

Con cálculo diferencial:

<div class="formula-panel">
  <span class="formula-panel__label">Profundización</span>
  <div class="formula-panel__formula">a(t) = dv/dt</div>
</div>

---

## 29. Acelerar no significa solamente aumentar rapidez

Como la velocidad es vectorial, puede cambiar porque:

- aumenta su módulo;
- disminuye su módulo;
- cambia de dirección;
- cambia de sentido.

Por eso un cuerpo puede tener aceleración aunque su rapidez permanezca constante.

Ejemplo:

- movimiento circular uniforme.

---

## 30. Signo de velocidad y signo de aceleración

El signo de la aceleración no indica por sí solo si el cuerpo “acelera” o “frena” en lenguaje cotidiano.

Debemos comparar los signos de:

- velocidad;
- aceleración.

### v > 0 y a > 0

Aumenta el módulo de la velocidad.

### v > 0 y a < 0

Puede disminuir el módulo.

### v < 0 y a < 0

Puede aumentar el módulo en sentido negativo.

### v < 0 y a > 0

Puede disminuir el módulo.

<div class="lesson-callout lesson-callout--error">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">!</span>
    <strong>Aceleración negativa no significa necesariamente frenado</strong>
  </div>
  <div class="lesson-callout__body">
    <p>El efecto sobre la rapidez depende de la relación entre los signos de velocidad y aceleración.</p>
  </div>
</div>

---

## 31. La función posición x(t)

Escribir:

**x(t)**

significa:

> posición x como función del tiempo.

Ejemplo:

<div class="formula-panel">
  <span class="formula-panel__label">Ejemplo de función posición</span>
  <div class="formula-panel__formula">x(t) = 2 m + (3 m/s)t</div>
</div>

Podemos calcular:

- `x(0) = 2 m`;
- `x(1 s) = 5 m`;
- `x(2 s) = 8 m`.

La función contiene una descripción completa de la posición en ese modelo.

---

## 32. Interpretar un gráfico x(t)

En un gráfico posición-tiempo:

- eje horizontal → tiempo;
- eje vertical → posición.

La pendiente representa velocidad.

```text
x
|
|        /
|      /
|    /
|  /
|/____________ t
```

### Pendiente positiva

Velocidad positiva.

### Pendiente negativa

Velocidad negativa.

### Pendiente cero

Velocidad cero.

---

## 33. Curvatura en x(t)

Si la pendiente de `x(t)` cambia:

- la velocidad está cambiando;
- existe aceleración.

Ejemplo conceptual:

```text
x
|
|          .
|       .
|    .
|  .
|.
|____________ t
```

La pendiente se vuelve cada vez mayor.

Eso sugiere una velocidad creciente.

---

## 34. La función velocidad v(t)

`v(t)` indica la velocidad en cada instante.

En un gráfico velocidad-tiempo:

- eje horizontal → tiempo;
- eje vertical → velocidad.

La altura del gráfico informa el valor de v.

La pendiente informa la aceleración.

---

## 35. Interpretar un gráfico v(t)

```text
v
|
|      /
|    /
|  /
|/
|____________ t
```

Si es una recta ascendente:

- la velocidad aumenta linealmente;
- la aceleración es constante y positiva.

Si la línea es horizontal:

- velocidad constante;
- aceleración cero.

---

## 36. Área bajo v(t) — adelanto importante

En un gráfico velocidad-tiempo, el área algebraica entre la curva y el eje temporal representa el desplazamiento.

<div class="formula-panel">
  <span class="formula-panel__label">Interpretación gráfica</span>
  <div class="formula-panel__formula">área bajo v(t) → Δx</div>
</div>

Esto se desarrollará con detalle en MRU y MRUV.

Por ahora podemos comprobarlo en un caso simple de velocidad constante:

**área = base × altura = Δt · v = Δx**

---

## 37. La función aceleración a(t)

`a(t)` indica la aceleración en cada instante.

En un gráfico aceleración-tiempo:

- eje horizontal → tiempo;
- eje vertical → aceleración.

Una línea horizontal sobre cero significa:

- aceleración constante positiva.

Sobre el eje:

- aceleración cero.

Debajo:

- aceleración negativa respecto del sistema elegido.

---

## 38. Relación conceptual entre x(t), v(t) y a(t)

Podemos resumir:

<div class="formula-panel">
  <span class="formula-panel__label">De posición a velocidad</span>
  <div class="formula-panel__formula">pendiente de x(t) → v(t)</div>
</div>

<div class="formula-panel">
  <span class="formula-panel__label">De velocidad a aceleración</span>
  <div class="formula-panel__formula">pendiente de v(t) → a(t)</div>
</div>

Y también:

<div class="formula-panel">
  <span class="formula-panel__label">De velocidad a desplazamiento</span>
  <div class="formula-panel__formula">área bajo v(t) → Δx</div>
</div>

Estas conexiones serán fundamentales durante toda la cinemática.

---

## 39. Ejemplo de lectura conjunta

Supongamos que durante cierto intervalo:

**v(t) = 4 m/s**

constante.

Entonces:

### Velocidad

Constante y positiva.

### Aceleración

**0 m/s²**

### x(t)

Debe ser una recta con pendiente:

**4 m/s**

### Desplazamiento en 5 s

**Δx = 4 × 5 = 20 m**

Una misma situación puede describirse con:

- palabras;
- ecuaciones;
- tablas;
- gráficos.

---

## 40. Un instante de reposo no implica reposo permanente

Una pelota lanzada hacia arriba puede tener:

**v = 0**

en el punto más alto.

Pero allí:

- la aceleración gravitatoria sigue existiendo;
- después cambia el sentido del movimiento.

Por eso:

> **velocidad cero en un instante no implica aceleración cero.**

Este ejemplo se desarrollará formalmente en caída libre y tiro vertical.

---

## 41. Trayectoria y gráfico x(t) no deben confundirse

Una trayectoria responde:

> ¿por qué lugares del espacio pasó el cuerpo?

Un gráfico `x(t)` responde:

> ¿cómo cambió una coordenada con el tiempo?

Son representaciones distintas.

Un gráfico parabólico `x(t)` no significa automáticamente que la trayectoria espacial sea una parábola.

---

## 42. Descripción en una y dos dimensiones

En una dimensión basta una coordenada:

**x(t)**

En dos dimensiones podemos necesitar:

- `x(t)`;
- `y(t)`.

Y el vector posición:

<div class="formula-panel">
  <span class="formula-panel__label">Dos dimensiones</span>
  <div class="formula-panel__formula">r(t) = (x(t), y(t))</div>
</div>

Lo mismo ocurrirá con velocidad y aceleración.

Esto será central en tiro oblicuo y movimiento circular.

---

## 43. Rapidez en dos dimensiones

Si la velocidad tiene componentes:

**v = (v<sub>x</sub>, v<sub>y</sub>)**

la rapidez es su módulo:

<div class="formula-panel">
  <span class="formula-panel__label">Rapidez</span>
  <div class="formula-panel__formula">|v| = √(v<sub>x</sub>² + v<sub>y</sub>²)</div>
</div>

Por eso:

- velocidad → vector;
- rapidez → módulo escalar.

---

## 44. Ejemplo vectorial de velocidad

Supongamos:

**v = (3, 4) m/s**

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Rapidez a partir de componentes</h3>
  <div class="worked-example-card__steps">
    <p>|v| = √(3² + 4²)</p>
    <p>|v| = √25</p>
    <p><strong>|v| = 5 m/s</strong></p>
  </div>
</div>

La rapidez es 5 m/s, pero la velocidad contiene además dirección y sentido.

---

## 45. Medir movimiento experimentalmente

Para estudiar un movimiento podemos registrar:

- posiciones;
- tiempos.

Luego construimos una tabla.

Ejemplo:

| t (s) | x (m) |
| ---: | ---: |
| 0 | 0,0 |
| 1 | 1,9 |
| 2 | 4,1 |
| 3 | 5,8 |
| 4 | 8,2 |

Con esos datos podemos:

- graficar `x(t)`;
- estimar velocidades medias;
- analizar si la pendiente es aproximadamente constante;
- discutir incertidumbres.

---

## 46. Experiencia: caminar y construir x(t)

### Objetivo

Construir una descripción cinemática a partir de datos reales.

### Materiales

- cinta métrica;
- cronómetro o video;
- marcas en el piso;
- hoja de registro.

### Procedimiento

1. Elegí un origen.
2. Elegí el sentido positivo.
3. Marcá posiciones conocidas.
4. Una persona camina a lo largo del eje.
5. Registrá el instante en que pasa por cada posición.
6. Construí una tabla `t-x`.
7. Graficá `x(t)`.
8. Calculá velocidades medias entre distintos pares de puntos.

### Preguntas

- ¿la pendiente es constante?
- ¿qué incertidumbres aparecen?
- ¿el tiempo de reacción afecta los datos?
- ¿el movimiento humano fue perfectamente uniforme?

---

## 47. Experiencia con video

Un video permite registrar posiciones cuadro a cuadro.

Conceptualmente podemos:

1. incluir una referencia de longitud visible;
2. conocer la tasa de cuadros por segundo;
3. marcar la posición del objeto en distintos fotogramas;
4. asignar tiempos;
5. construir `x(t)`.

Esto reduce algunos problemas de reacción humana, aunque introduce otros:

- perspectiva;
- escala;
- resolución;
- elección del punto del cuerpo;
- calibración temporal.

---

## 48. Incertidumbre en cinemática

Una posición medida no es exacta.

Un tiempo tampoco.

Las fuentes de incertidumbre pueden incluir:

- resolución del instrumento;
- reacción humana;
- dificultad para definir la posición exacta;
- perspectiva;
- tamaño del objeto;
- frecuencia de muestreo.

Por eso los datos experimentales reales rara vez caen exactamente sobre una curva ideal.

---

## 49. Modelo puntual

Muchas veces tratamos un cuerpo como si toda su posición estuviera representada por un solo punto.

Esto es un **modelo de partícula**.

Puede ser razonable si:

- el tamaño del cuerpo no importa para el problema;
- sólo interesa su movimiento traslacional.

No sirve igual de bien si necesitamos estudiar:

- rotación;
- deformación;
- orientación;
- dimensiones del cuerpo.

---

## 50. Errores frecuentes

### “Movimiento es absoluto”

No. Se describe respecto de un sistema de referencia.

### “Posición y distancia al origen son lo mismo”

No. La posición puede tener signo o dirección.

### “Distancia y desplazamiento son lo mismo”

No.

### “Rapidez y velocidad son sinónimos”

No. La velocidad es vectorial.

### “Velocidad media es promedio aritmético de velocidad inicial y final”

No en general. Se define mediante desplazamiento dividido por intervalo.

### “Velocidad cero implica aceleración cero”

No.

### “Aceleración negativa significa frenar”

No necesariamente.

### “Un gráfico x(t) dibuja la trayectoria”

No.

### “Una pendiente mayor significa siempre más aceleración”

Depende del gráfico. En `x(t)` la pendiente es velocidad; en `v(t)` es aceleración.

---

## 51. Problemas y ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Reconocimiento</strong>
  </div>
  <ol>
    <li>Definí sistema de referencia.</li>
    <li>Explicá la diferencia entre trayectoria, distancia y desplazamiento.</li>
    <li>¿Qué diferencia hay entre rapidez y velocidad?</li>
    <li>Indicá la unidad SI de aceleración.</li>
    <li>¿Qué representa la pendiente de un gráfico x(t)?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Aplicación directa</strong>
  </div>
  <ol>
    <li>Un móvil pasa de x = 3 m a x = 15 m. Calculá Δx.</li>
    <li>Recorre 120 m en 20 s. Calculá rapidez media.</li>
    <li>Pasa de x = 4 m a x = −8 m en 6 s. Calculá velocidad media.</li>
    <li>Su velocidad cambia de 2 m/s a 14 m/s en 3 s. Calculá aceleración media.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Integración</strong>
  </div>
  <ol>
    <li>Una persona camina 20 m al este y luego 8 m al oeste en 14 s. Calculá distancia, desplazamiento, rapidez media y velocidad media tomando este positivo.</li>
    <li>Un móvil va de r<sub>i</sub> = (1, 2) m a r<sub>f</sub> = (7, 10) m. Calculá el vector desplazamiento y su módulo.</li>
    <li>Una velocidad cambia de −6 m/s a −18 m/s en 4 s. Calculá la aceleración media e interpretá qué ocurre con la rapidez.</li>
    <li>Explicá una situación en la que v = 0 pero a ≠ 0.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Gráficos y modelización</strong>
  </div>
  <ol>
    <li>Dibujá un gráfico x(t) cualitativo para un móvil que avanza, se detiene durante unos segundos y luego regresa.</li>
    <li>Dibujá el v(t) correspondiente de manera cualitativa.</li>
    <li>Una recta x(t) pasa por (1 s, 4 m) y (6 s, 19 m). Calculá la velocidad representada por su pendiente.</li>
    <li>Diseñá una experiencia para medir x(t) de una persona caminando y enumerá al menos tres fuentes de incertidumbre.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Explicá conceptualmente cómo pasar de velocidades medias en intervalos cada vez menores a la idea de velocidad instantánea.</li>
    <li>Analizá por qué cambiar el origen del sistema modifica x pero no necesariamente Δx entre dos eventos.</li>
    <li>Explicá por qué una trayectoria puede depender del sistema de referencia.</li>
    <li>Justificá dimensionalmente por qué la pendiente de v(t) tiene unidades de aceleración.</li>
  </ol>
</div>

---

## 52. Ejemplo integrado

Un móvil se desplaza en línea recta.

A:

**t<sub>1</sub> = 2 s**

está en:

**x<sub>1</sub> = 5 m**

A:

**t<sub>2</sub> = 8 s**

está en:

**x<sub>2</sub> = 23 m**

### Intervalo

**Δt = 8 − 2 = 6 s**

### Desplazamiento

**Δx = 23 − 5 = 18 m**

### Velocidad media

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>Descripción entre dos instantes</h3>
  <div class="worked-example-card__steps">
    <p>v<sub>media</sub> = Δx/Δt</p>
    <p>v<sub>media</sub> = 18 m / 6 s</p>
    <p><strong>v<sub>media</sub> = +3 m/s</strong></p>
  </div>
</div>

El signo positivo indica que el desplazamiento ocurrió en el sentido positivo del eje.

No podemos concluir sólo con estos dos datos que la velocidad haya sido constante durante todo el intervalo.

---

## 53. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Un cuerpo puede estar en reposo respecto de una referencia y en movimiento respecto de otra?</summary>
  <div class="lesson-quiz__answer">
    Sí. Movimiento y reposo se describen respecto de un sistema de referencia.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. Si un cuerpo vuelve a su posición inicial, ¿cuál es su desplazamiento?</summary>
  <div class="lesson-quiz__answer">
    Cero, aunque la distancia recorrida pueda ser grande.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Qué usa la velocidad media: distancia o desplazamiento?</summary>
  <div class="lesson-quiz__answer">
    Desplazamiento.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Qué representa la pendiente de x(t)?</summary>
  <div class="lesson-quiz__answer">
    La velocidad; localmente, la pendiente corresponde a la velocidad instantánea.
  </div>
</details>

<details class="lesson-quiz">
  <summary>5. ¿Qué representa la pendiente de v(t)?</summary>
  <div class="lesson-quiz__answer">
    La aceleración; localmente, la pendiente corresponde a la aceleración instantánea.
  </div>
</details>

<details class="lesson-quiz">
  <summary>6. ¿Aceleración negativa significa siempre que disminuye la rapidez?</summary>
  <div class="lesson-quiz__answer">
    No. Depende también del signo de la velocidad.
  </div>
</details>

---

## 54. Resumen

- La cinemática describe el movimiento sin estudiar todavía sus causas.
- Movimiento y reposo dependen del sistema de referencia.
- La posición se define respecto de un origen y ejes.
- En varias dimensiones usamos el vector posición.
- La trayectoria es el conjunto de posiciones recorridas.
- La distancia mide el camino total.
- El desplazamiento mide el cambio de posición.
- Un instante es un valor de tiempo; un intervalo es una diferencia entre instantes.
- La rapidez media usa distancia.
- La velocidad media usa desplazamiento.
- La velocidad instantánea describe el cambio local de posición.
- La aceleración mide el cambio de velocidad.
- Aceleración negativa no implica necesariamente frenado.
- La pendiente de `x(t)` representa velocidad.
- La pendiente de `v(t)` representa aceleración.
- El área bajo `v(t)` representa desplazamiento.
- Los gráficos no deben confundirse con la trayectoria espacial.
- Los datos experimentales tienen incertidumbre.
- El modelo de partícula simplifica el estudio cuando el tamaño y la orientación del cuerpo no son relevantes.

---

## 55. Siguiente tema recomendado

**F-03 — Movimiento rectilíneo uniforme**

Ahora vamos a estudiar un caso particular muy importante:

> un móvil que se desplaza en línea recta con velocidad constante.

Trabajaremos con:

- ecuación horaria;
- posición inicial;
- encuentros;
- alcances;
- gráficos posición-tiempo;
- gráficos velocidad-tiempo;
- pendiente;
- sistemas de referencia.
