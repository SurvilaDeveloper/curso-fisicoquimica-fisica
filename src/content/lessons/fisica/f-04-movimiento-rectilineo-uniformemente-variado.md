---
title: "Movimiento rectilíneo uniformemente variado"
description: "Cómo describir movimientos rectilíneos con aceleración constante mediante ecuaciones, gráficos, frenado, encuentros y análisis de signos."
slug: "movimiento-rectilineo-uniformemente-variado"

course: "fisica"
module: "cinematica"
order: 4

level: "intermedio"
cycle: "ambos"

yearsApprox: [3, 4, 5]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - movimiento-rectilineo-uniforme

skills:
  - aceleracion-constante
  - ecuaciones-del-mruv
  - posicion-velocidad-aceleracion-tiempo
  - grafico-posicion-tiempo
  - grafico-velocidad-tiempo
  - grafico-aceleracion-tiempo
  - area-bajo-velocidad
  - pendiente-de-velocidad
  - frenado
  - encuentros
  - analisis-de-signos

hasExercises: true
hasQuiz: true
hasExperiment: true

deepening: true
status: "complete"
---

## Cuando la velocidad deja de ser constante

Un auto arranca desde un semáforo.

Una bicicleta frena antes de una esquina.

Un tren aumenta su velocidad de manera aproximadamente regular.

Ya no podemos usar MRU porque la velocidad cambia.

Pero si ese cambio ocurre de una manera especialmente simple:

> **la aceleración permanece constante**

podemos construir un nuevo modelo muy poderoso:

**Movimiento Rectilíneo Uniformemente Variado**, o **MRUV**.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>En MRUV la aceleración es constante. Eso hace que la velocidad cambie linealmente con el tiempo y que la posición cambie cuadráticamente.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta lección deberías poder:

- reconocer un MRUV;
- interpretar aceleración constante;
- relacionar velocidad y tiempo;
- relacionar posición, velocidad, aceleración y tiempo;
- usar las ecuaciones del MRUV con criterio;
- interpretar gráficos `x(t)`, `v(t)` y `a(t)`;
- relacionar pendiente de `v(t)` con aceleración;
- relacionar área bajo `v(t)` con desplazamiento;
- interpretar frenado;
- analizar signos de velocidad y aceleración;
- resolver encuentros con uno o dos móviles;
- distinguir cuándo una solución matemática no corresponde al intervalo físico;
- reconocer los límites del modelo de aceleración constante.

---

## 1. ¿Qué significa MRUV?

MRUV significa:

**Movimiento Rectilíneo Uniformemente Variado**

### Movimiento

La posición cambia con el tiempo.

### Rectilíneo

La trayectoria es una línea recta.

### Uniformemente variado

La velocidad cambia de manera uniforme.

Eso significa:

<div class="formula-panel">
  <span class="formula-panel__label">Condición fundamental</span>
  <div class="formula-panel__formula">a = constante</div>
</div>

---

## 2. Qué significa aceleración constante

Recordemos:

<div class="formula-panel">
  <span class="formula-panel__label">Aceleración media</span>
  <div class="formula-panel__formula">a = Δv / Δt</div>
</div>

Si `a` es constante:

- iguales intervalos de tiempo producen iguales cambios de velocidad.

Ejemplo:

**a = +2 m/s²**

puede significar:

| t (s) | v (m/s) |
| ---: | ---: |
| 0 | 3 |
| 1 | 5 |
| 2 | 7 |
| 3 | 9 |
| 4 | 11 |

La velocidad aumenta:

**2 m/s cada segundo**

---

## 3. Aceleración positiva no significa siempre “ir más rápido”

Supongamos que elegimos derecha como positiva.

### Caso A

`v > 0` y `a > 0`

La rapidez aumenta.

### Caso B

`v < 0` y `a > 0`

La velocidad se vuelve menos negativa.

La rapidez puede disminuir.

Por eso:

> **para saber si un móvil aumenta o disminuye su rapidez debemos comparar el signo de v con el signo de a.**

---

## 4. Aceleración negativa tampoco significa siempre frenado

Si:

- `v > 0`;
- `a < 0`;

la rapidez puede disminuir.

Pero si:

- `v < 0`;
- `a < 0`;

la rapidez aumenta en el sentido negativo.

<div class="lesson-callout lesson-callout--error">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">!</span>
    <strong>El signo no dice por sí solo si “acelera” o “frena”</strong>
  </div>
  <div class="lesson-callout__body">
    <p>El efecto sobre la rapidez depende de la combinación de signos entre velocidad y aceleración.</p>
  </div>
</div>

---

## 5. Ecuación de la velocidad

Partimos de:

**a = Δv/Δt**

Si tomamos:

- `t₀ = 0`;
- velocidad inicial `v₀`;

entonces:

**Δv = v − v₀**

y:

**Δt = t**

Por lo tanto:

**a = (v − v₀)/t**

despejamos:

<div class="formula-panel">
  <span class="formula-panel__label">Velocidad en MRUV</span>
  <div class="formula-panel__formula">v(t) = v₀ + a · t</div>
</div>

---

## 6. Interpretación de v(t)

En:

**v = v₀ + at**

### `v₀`

Velocidad inicial.

### `a`

Aceleración constante.

### `t`

Tiempo transcurrido desde el origen temporal.

### `v`

Velocidad en el instante t.

La ecuación es lineal en t.

Por eso el gráfico `v-t` es una recta.

---

## 7. Ejemplo de velocidad

Un móvil tiene:

- `v₀ = 4 m/s`;
- `a = +3 m/s²`.

Queremos v a los:

**5 s**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Velocidad después de 5 s</h3>
  <div class="worked-example-card__steps">
    <p>v = v₀ + at</p>
    <p>v = 4 + 3×5</p>
    <p>v = 19 m/s</p>
    <p><strong>La velocidad aumentó 15 m/s.</strong></p>
  </div>
</div>

---

## 8. Gráfico velocidad-tiempo

Para MRUV:

**v(t) = v₀ + at**

es una recta.

```text
v
|
|       /
|     /
|   /
| /
|____________ t
```

La información física es:

- intercepto → `v₀`;
- pendiente → `a`.

---

## 9. Pendiente de v(t)

La pendiente es:

<div class="formula-panel">
  <span class="formula-panel__label">Pendiente</span>
  <div class="formula-panel__formula">Δv / Δt</div>
</div>

Pero eso es precisamente la aceleración:

<div class="formula-panel">
  <span class="formula-panel__label">Interpretación física</span>
  <div class="formula-panel__formula">pendiente de v(t) = a</div>
</div>

Si la recta:

- sube → `a > 0`;
- baja → `a < 0`;
- es horizontal → `a = 0`.

---

## 10. Gráfico aceleración-tiempo

Como la aceleración es constante:

```text
a
|
|────────────── a constante
|
|
|________________ t
```

Si `a > 0`:

- la línea está sobre el eje.

Si `a < 0`:

- está debajo.

---

## 11. Área bajo v(t)

En cualquier movimiento unidimensional, el área algebraica bajo el gráfico `v(t)` representa el desplazamiento.

En MRUV, `v(t)` es una recta.

Por eso el área suele ser:

- rectángulo;
- triángulo;
- trapecio.

<div class="formula-panel">
  <span class="formula-panel__label">Interpretación gráfica</span>
  <div class="formula-panel__formula">área bajo v(t) = Δx</div>
</div>

---

## 12. Desplazamiento desde el área

Supongamos:

- `v₀ = 4 m/s`;
- `v = 10 m/s`;
- `t = 3 s`.

El área bajo `v(t)` es un trapecio.

Velocidad media para aceleración constante:

<div class="formula-panel">
  <span class="formula-panel__label">Velocidad media en MRUV</span>
  <div class="formula-panel__formula">v_media = (v₀ + v)/2</div>
</div>

Entonces:

**v_media = (4 + 10)/2 = 7 m/s**

y:

**Δx = 7 × 3 = 21 m**

---

## 13. Por qué funciona esa velocidad media

En MRUV, `v(t)` cambia linealmente.

El valor promedio entre los extremos de una recta es:

**(v₀ + v)/2**

Por eso:

<div class="formula-panel">
  <span class="formula-panel__label">Desplazamiento</span>
  <div class="formula-panel__formula">Δx = ((v₀ + v)/2) · t</div>
</div>

Esta expresión vale para aceleración constante.

No debe generalizarse a cualquier movimiento.

---

## 14. Ecuación de posición

Sabemos:

**v = v₀ + at**

y:

**Δx = v_media t**

con:

**v_media = (v₀ + v)/2**

Sustituimos:

**Δx = ((v₀ + v₀ + at)/2)t**

**Δx = (v₀ + ½at)t**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Desplazamiento en MRUV</span>
  <div class="formula-panel__formula">Δx = v₀t + ½at²</div>
</div>

Y como:

**x = x₀ + Δx**

obtenemos:

<div class="formula-panel">
  <span class="formula-panel__label">Ecuación horaria del MRUV</span>
  <div class="formula-panel__formula">x(t) = x₀ + v₀t + ½at²</div>
</div>

---

## 15. Qué significa cada término

En:

**x = x₀ + v₀t + ½at²**

### `x₀`

Posición inicial.

### `v₀t`

Contribución asociada a la velocidad inicial.

### `½at²`

Contribución debida a la aceleración constante.

La posición depende de:

**t²**

Por eso `x(t)` es una función cuadrática.

---

## 16. Gráfico posición-tiempo

En MRUV:

**x(t) = x₀ + v₀t + ½at²**

El gráfico es una parábola.

```text
x
|
|           .
|        .
|     .
|   .
| .
|____________ t
```

La pendiente va cambiando.

Eso expresa que la velocidad no es constante.

---

## 17. Concavidad del gráfico x(t)

La aceleración determina la concavidad.

### a > 0

La parábola abre hacia arriba.

### a < 0

La parábola abre hacia abajo.

Pero la dirección instantánea del movimiento depende de la pendiente, es decir, de la velocidad.

Una parábola que abre hacia arriba puede tener inicialmente pendiente negativa.

---

## 18. Relación entre x(t), v(t) y a(t)

Podemos resumir:

<div class="formula-panel">
  <span class="formula-panel__label">Relación 1</span>
  <div class="formula-panel__formula">pendiente de x(t) = v(t)</div>
</div>

<div class="formula-panel">
  <span class="formula-panel__label">Relación 2</span>
  <div class="formula-panel__formula">pendiente de v(t) = a</div>
</div>

<div class="formula-panel">
  <span class="formula-panel__label">Relación 3</span>
  <div class="formula-panel__formula">área bajo v(t) = Δx</div>
</div>

En MRUV:

- `x(t)` es parabólica;
- `v(t)` es lineal;
- `a(t)` es constante.

---

## 19. Ecuación sin tiempo

A veces queremos relacionar:

- velocidad;
- aceleración;
- desplazamiento;

sin usar t.

Partimos de:

**v = v₀ + at**

y:

**Δx = ((v₀ + v)/2)t**

Despejando y combinando se obtiene:

<div class="formula-panel">
  <span class="formula-panel__label">Ecuación de Torricelli</span>
  <div class="formula-panel__formula">v² = v₀² + 2aΔx</div>
</div>

Es muy útil cuando no conocemos el tiempo.

---

## 20. No memorizar ecuaciones como una lista aislada

Las principales relaciones son:

<div class="formula-panel">
  <span class="formula-panel__label">Velocidad</span>
  <div class="formula-panel__formula">v = v₀ + at</div>
</div>

<div class="formula-panel">
  <span class="formula-panel__label">Posición</span>
  <div class="formula-panel__formula">x = x₀ + v₀t + ½at²</div>
</div>

<div class="formula-panel">
  <span class="formula-panel__label">Sin tiempo</span>
  <div class="formula-panel__formula">v² = v₀² + 2a(x − x₀)</div>
</div>

<div class="formula-panel">
  <span class="formula-panel__label">Velocidad media en MRUV</span>
  <div class="formula-panel__formula">v_media = (v₀ + v)/2</div>
</div>

La idea no es elegir por memoria.

Primero preguntamos:

- qué datos tenemos;
- qué buscamos;
- qué variable no necesitamos.

---

## 21. Estrategia para elegir ecuación

Supongamos que conocemos:

- `v₀`;
- `a`;
- `t`;

y queremos `v`.

La ecuación más directa es:

**v = v₀ + at**

Si queremos `x`:

**x = x₀ + v₀t + ½at²**

Si no conocemos t pero sí:

- `v₀`;
- `v`;
- `a`;

podemos usar:

**v² = v₀² + 2aΔx**

La mejor ecuación suele ser la que contiene:

- los datos conocidos;
- la incógnita;
- la menor cantidad de incógnitas adicionales.

---

## 22. Ejemplo completo

Un auto parte con:

- `x₀ = 0`;
- `v₀ = 5 m/s`;
- `a = 2 m/s²`.

Queremos conocer posición y velocidad a los:

**4 s**

### Velocidad

**v = 5 + 2×4**

**v = 13 m/s**

### Posición

**x = 0 + 5×4 + ½×2×4²**

**x = 20 + 16**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Posición y velocidad</h3>
  <div class="worked-example-card__steps">
    <p>v = 13 m/s</p>
    <p>x = 36 m</p>
    <p><strong>Después de 4 s está en x = 36 m y se mueve a 13 m/s.</strong></p>
  </div>
</div>

---

## 23. Verificación mediante velocidad media

En el ejemplo anterior:

- `v₀ = 5 m/s`;
- `v = 13 m/s`.

Entonces:

**v_media = (5 + 13)/2 = 9 m/s**

Durante 4 s:

**Δx = 9 × 4 = 36 m**

Coincide con la ecuación de posición.

Esta verificación ayuda a detectar errores.

---

## 24. Frenado

En un frenado rectilíneo ideal:

- la aceleración tiene sentido opuesto a la velocidad;
- la rapidez disminuye.

Si elegimos el sentido de movimiento inicial como positivo:

- `v₀ > 0`;
- `a < 0`.

Pero si el eje se eligiera al revés:

- `v₀ < 0`;
- `a > 0`.

El fenómeno físico es el mismo.

---

## 25. Tiempo de frenado

Un auto tiene:

- `v₀ = 20 m/s`;
- `a = −5 m/s²`.

Queremos saber cuándo se detiene.

En el instante de detención:

**v = 0**

Entonces:

**0 = 20 − 5t**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Tiempo hasta detenerse</h3>
  <div class="worked-example-card__steps">
    <p>5t = 20</p>
    <p><strong>t = 4 s</strong></p>
  </div>
</div>

---

## 26. Distancia de frenado ideal

Con los mismos datos:

- `v₀ = 20 m/s`;
- `v = 0`;
- `a = −5 m/s²`.

Usamos:

**v² = v₀² + 2aΔx**

Entonces:

**0 = 400 − 10Δx**

**10Δx = 400**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Desplazamiento de frenado</h3>
  <div class="worked-example-card__steps">
    <p>Δx = 40 m</p>
    <p><strong>El auto necesita 40 m en este modelo ideal para detenerse.</strong></p>
  </div>
</div>

---

## 27. Tiempo de reacción y distancia total de detención

En una situación real de tránsito, la distancia total para detenerse no es solamente la distancia de frenado.

Antes de frenar existe un tiempo de reacción.

Durante ese intervalo el vehículo continúa avanzando.

Podemos separar:

<div class="formula-panel">
  <span class="formula-panel__label">Distancia total de detención</span>
  <div class="formula-panel__formula">d_total = d_reacción + d_frenado</div>
</div>

Este modelo ya combina:

- una etapa aproximadamente MRU;
- una etapa aproximadamente MRUV.

---

## 28. Ejemplo de tiempo de reacción

Un vehículo circula a:

**20 m/s**

y el conductor tarda:

**0,8 s**

en comenzar a frenar.

Durante la reacción:

**d = vt**

**d = 20 × 0,8**

**d = 16 m**

Si luego necesita 40 m para frenar:

**d_total = 56 m**

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Frenar empieza antes de que el auto desacelere</strong>
  </div>
  <div class="lesson-callout__body">
    <p>La percepción y la reacción agregan una distancia recorrida antes de que comience la etapa de aceleración negativa.</p>
  </div>
</div>

---

## 29. Frenado no implica necesariamente detenerse

Supongamos:

- `v₀ = 15 m/s`;
- `a = −2 m/s²`;
- observamos sólo 3 s.

Entonces:

**v = 15 − 2×3 = 9 m/s**

La rapidez disminuyó.

Pero el móvil todavía se desplaza en el sentido positivo.

“Frenar” significa reducir rapidez, no necesariamente llegar a v = 0 durante el intervalo considerado.

---

## 30. Cambio de sentido

Supongamos:

- `v₀ = +6 m/s`;
- `a = −3 m/s²`.

Entonces:

**v = 6 − 3t**

En:

**t = 2 s**

tenemos:

**v = 0**

Después:

- `t > 2 s`;
- `v < 0`.

El móvil cambia de sentido.

La aceleración nunca cambió.

---

## 31. Qué ocurre en x(t) al cambiar de sentido

En el instante donde:

**v = 0**

la pendiente de `x(t)` es cero.

Eso corresponde a un:

- máximo;
- o mínimo;

de la posición.

En el ejemplo anterior, como:

**a < 0**

la parábola abre hacia abajo.

El punto de cambio de sentido es un máximo de x.

---

## 32. Posición máxima en un cambio de sentido

Para:

- `x₀ = 0`;
- `v₀ = 6 m/s`;
- `a = −3 m/s²`;

sabemos que el cambio de sentido ocurre a:

**t = 2 s**

Entonces:

**x = 6×2 + ½(−3)(2²)**

**x = 12 − 6**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Punto de cambio de sentido</h3>
  <div class="worked-example-card__steps">
    <p>v = 0 en t = 2 s</p>
    <p>x = 6 m</p>
    <p><strong>El móvil llega hasta x = 6 m y luego regresa.</strong></p>
  </div>
</div>

---

## 33. Distancia y desplazamiento cuando hay cambio de sentido

Si el móvil avanza hasta:

**x = 6 m**

y luego regresa hasta:

**x = 2 m**

entonces:

### Desplazamiento desde x₀ = 0

**Δx = +2 m**

### Distancia recorrida

**6 m + 4 m = 10 m**

Cuando hay cambio de sentido:

- no podemos usar simplemente `|Δx|` como distancia total.

---

## 34. Área positiva y negativa en v(t)

Si el gráfico `v(t)` cruza el eje:

- el área sobre el eje es desplazamiento positivo;
- el área debajo es desplazamiento negativo.

El desplazamiento total es la suma algebraica.

La distancia total, en cambio, requiere sumar los módulos de las áreas correspondientes a cada tramo.

---

## 35. Ejemplo con cambio de signo

Supongamos:

**v(t) = 6 − 3t**

entre:

**t = 0 y t = 4 s**

### De 0 a 2 s

v es positiva.

Área triangular:

**½ × 2 × 6 = 6 m**

### De 2 a 4 s

v es negativa.

Área algebraica:

**−6 m**

Entonces:

### Desplazamiento total

**0 m**

### Distancia total

**12 m**

El móvil regresa al punto de partida.

---

## 36. Área bajo a(t)

En un gráfico aceleración-tiempo:

<div class="formula-panel">
  <span class="formula-panel__label">Interpretación</span>
  <div class="formula-panel__formula">área bajo a(t) = Δv</div>
</div>

En MRUV:

**a = constante**

Entonces:

**Δv = aΔt**

que coincide con:

**v = v₀ + at**

---

## 37. Los tres gráficos juntos

Para un MRUV con:

- `v₀ > 0`;
- `a > 0`;

tenemos:

### x(t)

Parábola con pendiente creciente.

### v(t)

Recta ascendente.

### a(t)

Línea horizontal positiva.

Las tres representaciones describen el mismo movimiento.

---

## 38. Ejemplo tabulado

Tomemos:

- `x₀ = 0`;
- `v₀ = 2 m/s`;
- `a = 2 m/s²`.

| t (s) | v (m/s) | x (m) |
| ---: | ---: | ---: |
| 0 | 2 | 0 |
| 1 | 4 | 3 |
| 2 | 6 | 8 |
| 3 | 8 | 15 |
| 4 | 10 | 24 |

Observamos:

- v aumenta linealmente;
- x aumenta cada vez más rápido.

---

## 39. Diferencias de posición por segundo

Con la tabla anterior:

- de 0 a 1 s → 3 m;
- de 1 a 2 s → 5 m;
- de 2 a 3 s → 7 m;
- de 3 a 4 s → 9 m.

Los desplazamientos en intervalos iguales no son iguales.

Aumentan porque la velocidad crece.

---

## 40. Encuentro entre MRU y MRUV

Supongamos:

### Móvil A

MRU:

**x_A = 10t**

### Móvil B

MRUV:

- `x₀ = 40 m`;
- `v₀ = 0`;
- `a = 2 m/s²`.

Entonces:

**x_B = 40 + t²**

Encuentro:

<div class="formula-panel">
  <span class="formula-panel__label">Condición de encuentro</span>
  <div class="formula-panel__formula">10t = 40 + t²</div>
</div>

Reordenamos:

**t² − 10t + 40 = 0**

En este caso el discriminante es:

**100 − 160 < 0**

No hay soluciones reales.

Los móviles no se encuentran en este modelo.

---

## 41. Un encuentro puede tener dos soluciones

Con movimientos acelerados, las ecuaciones pueden ser cuadráticas.

Eso permite que dos móviles:

- se encuentren una vez;
- dos veces;
- ninguna vez;

según el problema.

Dos soluciones pueden corresponder a:

- un primer encuentro;
- separación;
- un segundo encuentro.

No debemos elegir una solución sin interpretar el movimiento.

---

## 42. Ejemplo con dos encuentros

Consideremos:

**x_A = 8t**

y:

**x_B = 2t²**

Igualamos:

**8t = 2t²**

**2t(t − 4) = 0**

Entonces:

**t = 0 s**

o:

**t = 4 s**

Interpretación:

- parten juntos;
- se separan;
- vuelven a coincidir a los 4 s.

La matemática refleja dos eventos físicos.

---

## 43. Encuentros entre dos MRUV

Cada móvil puede tener:

**x_A = x_A0 + v_A0t + ½a_At²**

**x_B = x_B0 + v_B0t + ½a_Bt²**

La condición sigue siendo:

**x_A = x_B**

Puede resultar una ecuación cuadrática.

Lo importante sigue siendo:

- mismo sistema de referencia;
- mismo reloj;
- signos coherentes.

---

## 44. Elegir el eje en MRUV

La aceleración no es “positiva” o “negativa” de manera absoluta.

Depende del eje.

Ejemplo:

un auto acelera hacia la izquierda.

### Eje positivo a la derecha

`a < 0`

### Eje positivo a la izquierda

`a > 0`

El fenómeno es el mismo.

---

## 45. Cambiar de eje cambia signos, no el movimiento

Si invertimos el eje:

- x cambia de signo o referencia;
- v cambia de signo;
- a cambia de signo.

Pero las predicciones físicas deben seguir siendo compatibles.

Por ejemplo:

- instante de detención;
- distancia recorrida;
- evento de encuentro;

no dependen de elegir derecha o izquierda como positivo.

---

## 46. Análisis dimensional

En:

**v = v₀ + at**

el término:

**at**

tiene unidades:

**(m/s²)(s) = m/s**

compatible con velocidad.

En:

**x = x₀ + v₀t + ½at²**

tenemos:

**v₀t → (m/s)(s) = m**

y:

**at² → (m/s²)(s²) = m**

Todos los términos tienen unidad de longitud.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>El análisis dimensional ayuda a controlar las ecuaciones</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Si los términos de una suma no tienen las mismas dimensiones, la ecuación no puede ser físicamente correcta.</p>
  </div>
</div>

---

## 47. Experiencia: carrito con aceleración aproximadamente constante

### Objetivo

Observar un movimiento cuya velocidad cambia de manera aproximadamente uniforme.

### Posibles montajes

- carrito en una rampa suave;
- video de un carrito descendiendo;
- simulación educativa;
- sistema de laboratorio apropiado.

### Procedimiento

1. Elegí un eje.
2. Registrá posiciones en tiempos conocidos.
3. Construí `x(t)`.
4. Estimá velocidades entre intervalos.
5. Construí un gráfico aproximado `v(t)`.
6. Analizá si la pendiente de `v(t)` es aproximadamente constante.

### Seguridad

- utilizar rampas bajas;
- asegurar el recorrido;
- evitar objetos pesados;
- no colocarse delante del carrito.

---

## 48. Datos reales y aceleración constante

En un MRUV ideal:

- `v(t)` es una recta perfecta.

En una experiencia real puede haber:

- rozamiento;
- pequeñas variaciones de la rampa;
- errores de tiempo;
- errores de posición;
- resistencia del aire.

Entonces buscamos una tendencia:

> **aceleración aproximadamente constante dentro de la incertidumbre.**

---

## 49. Cuándo es razonable usar MRUV

El modelo puede ser útil cuando:

- el movimiento es aproximadamente rectilíneo;
- la aceleración cambia poco;
- el intervalo estudiado no es demasiado largo.

Ejemplos aproximados:

- carrito en una rampa;
- frenado controlado;
- caída libre cerca de la superficie terrestre si ignoramos aire.

La caída libre será el próximo caso especial.

---

## 50. Cuándo deja de servir el modelo

MRUV deja de ser adecuado si:

- la aceleración varía fuertemente;
- la trayectoria se curva;
- las fuerzas cambian mucho con la velocidad;
- la resistencia del aire es relevante;
- el movimiento requiere varias etapas.

En esos casos podemos:

- dividir el movimiento por tramos;
- usar otro modelo.

---

## 51. Errores frecuentes

### “MRUV significa velocidad constante”

No. La aceleración es constante.

### “Si a es positiva, la rapidez aumenta”

No necesariamente.

### “Si a es negativa, el cuerpo frena”

No necesariamente.

### “Cuando v = 0 también a = 0”

No. Puede ser un instante de cambio de sentido.

### “La ecuación x(t) es una recta”

No. En MRUV es cuadrática.

### “El área bajo v(t) es siempre distancia”

No. Es desplazamiento algebraico.

### “La velocidad media siempre es (v₀ + v)/2”

Sólo en aceleración constante.

### “La ecuación v² = v₀² + 2aΔx siempre necesita tiempo”

Precisamente una de sus ventajas es que no contiene t.

### “Una raíz negativa de tiempo se descarta automáticamente”

No. Primero hay que interpretar el intervalo físico.

---

## 52. Problemas y ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Reconocimiento</strong>
  </div>
  <ol>
    <li>Definí MRUV.</li>
    <li>¿Qué magnitud permanece constante?</li>
    <li>¿Cómo es el gráfico v(t)?</li>
    <li>¿Cómo es el gráfico a(t)?</li>
    <li>¿Qué representa la pendiente de v(t)?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Aplicación directa</strong>
  </div>
  <ol>
    <li>Un móvil tiene v₀ = 3 m/s y a = 2 m/s². Calculá v a los 6 s.</li>
    <li>Con los mismos datos y x₀ = 0, calculá x a los 6 s.</li>
    <li>Un móvil pasa de 25 m/s a 5 m/s en 4 s. Calculá a.</li>
    <li>Un móvil parte del reposo con a = 4 m/s². Calculá el desplazamiento en 3 s.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Frenado y signos</strong>
  </div>
  <ol>
    <li>Un auto va a 30 m/s y frena con a = −6 m/s². Calculá tiempo de detención.</li>
    <li>Calculá la distancia de frenado del ejercicio anterior.</li>
    <li>Un móvil tiene v₀ = −10 m/s y a = −2 m/s². Explicá qué ocurre con la rapidez.</li>
    <li>Un móvil tiene v₀ = −10 m/s y a = +2 m/s². ¿Cuándo se detiene?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Gráficos y encuentros</strong>
  </div>
  <ol>
    <li>Construí v(t), a(t) y un bosquejo de x(t) para v₀ = 4 m/s y a = 2 m/s².</li>
    <li>Para v(t) = 12 − 3t entre 0 y 6 s, calculá desplazamiento y distancia total mediante áreas.</li>
    <li>Un móvil A cumple x_A = 6t y B cumple x_B = t². Hallá los encuentros.</li>
    <li>Explicá por qué una ecuación de encuentro puede tener dos soluciones físicas.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Derivá `x = x₀ + v₀t + ½at²` usando el área bajo un gráfico v(t) lineal.</li>
    <li>Derivá `v² = v₀² + 2aΔx` eliminando el tiempo entre dos ecuaciones del MRUV.</li>
    <li>Analizá dimensionalmente las tres ecuaciones principales del MRUV.</li>
    <li>Explicá por qué un gráfico x(t) con pendiente cero en un punto puede tener aceleración distinta de cero.</li>
  </ol>
</div>

---

## 53. Ejemplo integrado

Un auto se mueve inicialmente a:

**v₀ = 18 m/s**

y frena con aceleración constante:

**a = −3 m/s²**

desde:

**x₀ = 0**

### Tiempo hasta detenerse

**0 = 18 − 3t**

**t = 6 s**

### Distancia de frenado

**v² = v₀² + 2aΔx**

**0 = 18² + 2(−3)Δx**

**0 = 324 − 6Δx**

**Δx = 54 m**

### Verificación mediante velocidad media

**v_media = (18 + 0)/2 = 9 m/s**

**Δx = 9 × 6 = 54 m**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>Frenado completo</h3>
  <div class="worked-example-card__steps">
    <p>t_detención = 6 s</p>
    <p>Δx = 54 m</p>
    <p>v_media = 9 m/s</p>
    <p><strong>Las ecuaciones, el área bajo v(t) y la velocidad media son consistentes.</strong></p>
  </div>
</div>

---

## 54. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Qué magnitud permanece constante en MRUV?</summary>
  <div class="lesson-quiz__answer">
    La aceleración.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Qué forma tiene v(t) en MRUV?</summary>
  <div class="lesson-quiz__answer">
    Es una función lineal del tiempo: v = v₀ + at.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Qué forma tiene x(t)?</summary>
  <div class="lesson-quiz__answer">
    Es una función cuadrática: x = x₀ + v₀t + ½at².
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Qué representa el área bajo v(t)?</summary>
  <div class="lesson-quiz__answer">
    El desplazamiento algebraico.
  </div>
</details>

<details class="lesson-quiz">
  <summary>5. Si v y a tienen signos opuestos, ¿qué ocurre con la rapidez?</summary>
  <div class="lesson-quiz__answer">
    Disminuye mientras mantengan signos opuestos.
  </div>
</details>

<details class="lesson-quiz">
  <summary>6. ¿Puede haber v = 0 y a ≠ 0?</summary>
  <div class="lesson-quiz__answer">
    Sí. Puede ocurrir en un instante de cambio de sentido.
  </div>
</details>

---

## 55. Resumen

- En MRUV la aceleración es constante.
- La velocidad cambia linealmente con el tiempo.
- `v = v₀ + at`.
- La posición cambia cuadráticamente.
- `x = x₀ + v₀t + ½at²`.
- `v² = v₀² + 2aΔx` relaciona velocidad, aceleración y desplazamiento sin usar tiempo.
- Para aceleración constante, `v_media = (v₀ + v)/2`.
- La pendiente de `v(t)` es la aceleración.
- El área bajo `v(t)` es el desplazamiento.
- El área bajo `a(t)` es el cambio de velocidad.
- Frenar significa que velocidad y aceleración tienen sentidos opuestos.
- Una aceleración negativa no implica necesariamente frenado.
- Un móvil puede cambiar de sentido sin que cambie la aceleración.
- Cuando cambia de sentido, distancia y desplazamiento pueden ser muy diferentes.
- Encuentros con MRUV pueden producir ecuaciones cuadráticas y más de una solución física.
- Los signos dependen del sistema de referencia.
- MRUV es un modelo ideal útil cuando la aceleración permanece aproximadamente constante.

---

## 56. Siguiente tema recomendado

**F-05 — Caída libre y tiro vertical**

Ahora vamos a aplicar MRUV a uno de los movimientos más importantes de la Física:

> el movimiento vertical bajo la acción de la gravedad.

Trabajaremos con:

- aceleración gravitatoria;
- caída libre ideal;
- tiro vertical;
- altura máxima;
- tiempo de subida y bajada;
- elección del eje;
- signos;
- independencia de la masa en caída ideal;
- resistencia del aire como límite del modelo.
