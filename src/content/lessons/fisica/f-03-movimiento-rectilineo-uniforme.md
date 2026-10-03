---
title: "Movimiento rectilíneo uniforme"
description: "Cómo describir movimientos rectilíneos con velocidad constante mediante ecuaciones horarias, gráficos, encuentros, alcances y distintos sistemas de referencia."
slug: "movimiento-rectilineo-uniforme"

course: "fisica"
module: "cinematica"
order: 3

level: "intermedio"
cycle: "ambos"

yearsApprox: [3, 4, 5]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - cinematica-descripcion-del-movimiento

skills:
  - velocidad-constante
  - ecuacion-horaria
  - posicion-inicial
  - grafico-posicion-tiempo
  - grafico-velocidad-tiempo
  - pendiente
  - encuentros
  - alcances
  - sistemas-de-referencia

hasExercises: true
hasQuiz: true
hasExperiment: true

deepening: true
status: "complete"
---

## Un movimiento sencillo que enseña mucho

Imaginemos un auto que avanza por una ruta recta manteniendo su velocidad constante.

En intervalos iguales de tiempo recorre desplazamientos iguales.

Este modelo parece simple, pero nos permite trabajar ideas fundamentales:

- posición;
- velocidad;
- signo;
- ecuación horaria;
- pendiente;
- encuentros;
- alcances;
- sistemas de referencia.

La pregunta central es:

> **¿cómo podemos predecir dónde estará un móvil en cualquier instante si conocemos su posición inicial y su velocidad constante?**

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>En MRU la velocidad permanece constante. Por eso la posición cambia linealmente con el tiempo y el gráfico x(t) es una recta.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta lección deberías poder:

- reconocer las condiciones del MRU;
- interpretar velocidad constante;
- utilizar la ecuación horaria;
- distinguir posición inicial y desplazamiento;
- interpretar el signo de la velocidad;
- construir tablas de posición;
- interpretar gráficos posición-tiempo;
- interpretar gráficos velocidad-tiempo;
- relacionar pendiente con velocidad;
- calcular desplazamiento mediante el área bajo `v(t)`;
- resolver encuentros;
- resolver alcances;
- trabajar con móviles que parten en distintos instantes;
- comparar descripciones en distintos sistemas de referencia;
- reconocer los límites del modelo de MRU.

---

## 1. ¿Qué significa MRU?

MRU significa:

**Movimiento Rectilíneo Uniforme**

Cada palabra agrega una condición.

### Movimiento

La posición cambia con el tiempo.

### Rectilíneo

La trayectoria es una línea recta.

### Uniforme

La velocidad permanece constante.

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Condición fundamental</span>
  <div class="formula-panel__formula">v = constante</div>
</div>

---

## 2. Velocidad constante

Que la velocidad sea constante significa que no cambian:

- su módulo;
- su dirección;
- su sentido.

En una dimensión:

**v = constante**

Por lo tanto:

<div class="formula-panel">
  <span class="formula-panel__label">Aceleración en MRU</span>
  <div class="formula-panel__formula">a = 0</div>
</div>

Esto no significa que el móvil esté quieto.

Puede desplazarse con cualquier velocidad constante distinta de cero.

---

## 3. Desplazamientos iguales en tiempos iguales

Si:

**v = 5 m/s**

entonces, en un MRU ideal:

- en 1 s → desplazamiento de 5 m;
- en 2 s → desplazamiento de 10 m;
- en 3 s → desplazamiento de 15 m.

La relación entre desplazamiento y tiempo es directamente proporcional.

<div class="formula-panel">
  <span class="formula-panel__label">Para velocidad constante</span>
  <div class="formula-panel__formula">Δx = v · Δt</div>
</div>

---

## 4. De velocidad media a ecuación horaria

En F-02 vimos:

<div class="formula-panel">
  <span class="formula-panel__label">Velocidad media</span>
  <div class="formula-panel__formula">v = Δx / Δt</div>
</div>

En MRU, como la velocidad es constante, esa misma velocidad describe todo el intervalo.

Entonces:

**Δx = vΔt**

Si elegimos:

- tiempo inicial t<sub>0</sub> = 0;
- posición inicial x<sub>0</sub>;

tenemos:

**Δx = x − x<sub>0</sub>**

y:

**Δt = t**

Por lo tanto:

<div class="formula-panel">
  <span class="formula-panel__label">Ecuación horaria del MRU</span>
  <div class="formula-panel__formula">x(t) = x<sub>0</sub> + v · t</div>
</div>

---

## 5. Qué significa cada término

En:

**x(t) = x<sub>0</sub> + vt**

tenemos:

### `x(t)`

Posición en el instante t.

### x<sub>0</sub>

Posición inicial, es decir:

**x(0)**

### `v`

Velocidad constante.

### `t`

Tiempo transcurrido desde el instante elegido como cero.

---

## 6. La posición inicial no tiene por qué ser cero

Un error frecuente es suponer:

**x<sub>0</sub> = 0**

siempre.

No.

Podemos elegir un origen lejos del móvil.

Ejemplo:

- origen en un semáforo;
- auto inicialmente 120 m a la derecha.

Entonces:

**x<sub>0</sub> = +120 m**

Si se mueve con:

**v = +10 m/s**

su ecuación es:

<div class="formula-panel">
  <span class="formula-panel__label">Ejemplo</span>
  <div class="formula-panel__formula">x(t) = 120 m + (10 m/s)t</div>
</div>

---

## 7. Ejemplo directo

Un ciclista comienza en:

**x<sub>0</sub> = 20 m**

con velocidad:

**v = +4 m/s**

Queremos la posición a:

**t = 15 s**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Posición futura</h3>
  <div class="worked-example-card__steps">
    <p>x = x<sub>0</sub> + vt</p>
    <p>x = 20 m + (4 m/s)(15 s)</p>
    <p>x = 20 m + 60 m</p>
    <p><strong>x = 80 m</strong></p>
  </div>
</div>

---

## 8. Velocidad positiva

Si elegimos:

- derecha como sentido positivo;

entonces:

**v > 0**

significa movimiento hacia la derecha.

En MRU:

- `x(t)` aumenta linealmente.

Ejemplo:

**x(t) = 5 + 3t**

Cada segundo la posición aumenta 3 m.

---

## 9. Velocidad negativa

Con el mismo eje:

**v < 0**

significa movimiento hacia la izquierda.

Ejemplo:

<div class="formula-panel">
  <span class="formula-panel__label">Ejemplo</span>
  <div class="formula-panel__formula">x(t) = 30 m − (5 m/s)t</div>
</div>

Esto significa:

- posición inicial: 30 m;
- velocidad: −5 m/s.

Después de 2 s:

**x = 20 m**

Después de 6 s:

**x = 0 m**

Después de 8 s:

**x = −10 m**

<div class="lesson-callout lesson-callout--error">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">!</span>
    <strong>Velocidad negativa no significa “más lento”</strong>
  </div>
  <div class="lesson-callout__body">
    <p>El signo indica sentido respecto del eje elegido. La rapidez correspondiente a v = −5 m/s es 5 m/s.</p>
  </div>
</div>

---

## 10. Una tabla de posiciones

Consideremos:

**x(t) = 2 m + (3 m/s)t**

| t (s) | x (m) |
| ---: | ---: |
| 0 | 2 |
| 1 | 5 |
| 2 | 8 |
| 3 | 11 |
| 4 | 14 |

La posición aumenta siempre:

**3 m por segundo**

La diferencia entre posiciones consecutivas es constante para intervalos iguales.

---

## 11. Gráfico posición-tiempo

Para MRU:

**x(t) = x<sub>0</sub> + vt**

es una función lineal.

Por eso el gráfico `x-t` es una recta.

```text
x
|
|         /
|       /
|     /
|   /
|__/_ _ _ _ _ _ t
```

La recta contiene dos informaciones físicas fundamentales:

- intercepto → posición inicial;
- pendiente → velocidad.

---

## 12. Intercepto en x(t)

Cuando:

**t = 0**

la ecuación queda:

**x(0) = x<sub>0</sub>**

Entonces el punto donde la recta corta el eje vertical representa la posición inicial.

Ejemplo:

**x(t) = 10 + 2t**

el gráfico empieza, para `t = 0`, en:

**x = 10 m**

---

## 13. Pendiente en x(t)

La pendiente es:

<div class="formula-panel">
  <span class="formula-panel__label">Pendiente</span>
  <div class="formula-panel__formula">m = Δx / Δt</div>
</div>

Pero en MRU:

<div class="formula-panel">
  <span class="formula-panel__label">Interpretación física</span>
  <div class="formula-panel__formula">pendiente de x(t) = v</div>
</div>

Por eso:

- recta ascendente → `v > 0`;
- recta descendente → `v < 0`;
- recta horizontal → `v = 0`.

---

## 14. Dos rectas con distinta pendiente

Supongamos dos móviles:

**A: x<sub>A</sub> = 2t**

**B: x<sub>B</sub> = 5t**

Ambos parten del origen.

Pero:

- A tiene `v = 2 m/s`;
- B tiene `v = 5 m/s`.

El gráfico de B es más inclinado.

En un gráfico `x-t`, mayor módulo de pendiente significa mayor rapidez.

---

## 15. Una recta horizontal en x(t)

Si:

**x(t) = 8 m**

para todo t:

- la posición no cambia;
- la velocidad es cero.

Eso representa reposo respecto del sistema elegido.

Puede verse como un caso límite de MRU con:

**v = 0**

---

## 16. Gráfico velocidad-tiempo

Como en MRU:

**v = constante**

el gráfico `v-t` es una línea horizontal.

```text
v
|
|────────────── v constante
|
|
|________________ t
```

Si la velocidad es positiva:

- la línea está sobre el eje temporal.

Si es negativa:

- queda debajo.

---

## 17. Pendiente de v(t)

La pendiente del gráfico velocidad-tiempo representa aceleración.

En MRU, la línea es horizontal.

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">MRU</span>
  <div class="formula-panel__formula">pendiente de v(t) = a = 0</div>
</div>

Esto conecta los gráficos de posición y velocidad.

---

## 18. Área bajo v(t)

En un gráfico velocidad-tiempo, el área algebraica representa desplazamiento.

Para MRU:

- base = `Δt`;
- altura = `v`.

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Área bajo v(t)</span>
  <div class="formula-panel__formula">Δx = v · Δt</div>
</div>

Es exactamente la relación que ya conocemos.

---

## 19. Área con velocidad negativa

Si:

**v < 0**

el rectángulo queda debajo del eje.

El área algebraica es negativa.

Eso representa:

**Δx < 0**

No significa “área geométrica negativa”.

Es una convención para incorporar el sentido del desplazamiento.

---

## 20. Distancia recorrida en MRU sin cambio de sentido

Si un móvil realiza MRU y no cambia de sentido durante el intervalo:

<div class="formula-panel">
  <span class="formula-panel__label">Distancia</span>
  <div class="formula-panel__formula">d = |v| · Δt</div>
</div>

Usamos el módulo de la velocidad porque la distancia es no negativa.

Mientras tanto:

**Δx = vΔt**

conserva el signo.

---

## 21. Ejemplo con velocidad negativa

Un móvil tiene:

- x<sub>0</sub> = 50 m;
- `v = −6 m/s`.

Durante:

**5 s**

### Desplazamiento

**Δx = −6 × 5 = −30 m**

### Distancia recorrida

**d = 30 m**

### Posición final

**x = 50 − 30 = 20 m**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Signo y distancia</h3>
  <div class="worked-example-card__steps">
    <p>Δx = −30 m</p>
    <p>d = 30 m</p>
    <p><strong>x<sub>f</sub> = 20 m</strong></p>
  </div>
</div>

---

## 22. Encontrar el tiempo

Desde:

**x = x<sub>0</sub> + vt**

podemos despejar:

<div class="formula-panel">
  <span class="formula-panel__label">Tiempo</span>
  <div class="formula-panel__formula">t = (x − x<sub>0</sub>)/v</div>
</div>

Siempre debemos revisar:

- signos;
- unidades;
- si el tiempo obtenido tiene sentido para el intervalo estudiado.

---

## 23. Ejemplo: pasar por una posición

Un móvil cumple:

**x(t) = 10 + 4t**

Queremos saber cuándo llega a:

**x = 42 m**

Entonces:

**42 = 10 + 4t**

**32 = 4t**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Instante de paso</h3>
  <div class="worked-example-card__steps">
    <p>t = 32/4</p>
    <p><strong>t = 8 s</strong></p>
  </div>
</div>

---

## 24. ¿Qué es un encuentro?

Dos móviles se **encuentran** cuando ocupan la misma posición en el mismo instante.

Matemáticamente:

<div class="formula-panel">
  <span class="formula-panel__label">Condición de encuentro</span>
  <div class="formula-panel__formula">x<sub>A</sub>(t) = x<sub>B</sub>(t)</div>
</div>

No necesitamos memorizar una fórmula nueva.

Escribimos una ecuación horaria para cada móvil y buscamos cuándo sus posiciones son iguales.

---

## 25. Encuentro de móviles que se acercan

Supongamos:

### Móvil A

- parte de `x = 0`;
- v<sub>A</sub> = +10 m/s.

### Móvil B

- parte de `x = 100 m`;
- v<sub>B</sub> = −15 m/s.

Ecuaciones:

**x<sub>A</sub> = 10t**

**x<sub>B</sub> = 100 − 15t**

Encuentro:

**10t = 100 − 15t**

**25t = 100**

**t = 4 s**

Posición:

**x = 40 m**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Encuentro frontal</h3>
  <div class="worked-example-card__steps">
    <p>x<sub>A</sub> = x<sub>B</sub></p>
    <p>10t = 100 − 15t</p>
    <p>25t = 100</p>
    <p><strong>t = 4 s</strong></p>
    <p><strong>x = 40 m</strong></p>
  </div>
</div>

---

## 26. Interpretación del encuentro en x(t)

En un gráfico posición-tiempo:

- cada móvil es una recta;
- el encuentro es el punto donde las rectas se cruzan.

Las coordenadas del punto de intersección son:

- eje horizontal → instante del encuentro;
- eje vertical → posición del encuentro.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>La solución algebraica y la gráfica describen lo mismo</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Resolver x<sub>A</sub>(t) = x<sub>B</sub>(t) es equivalente a buscar la intersección de las dos rectas en el gráfico posición-tiempo.</p>
  </div>
</div>

---

## 27. ¿Qué es un alcance?

Un **alcance** es un caso particular de encuentro.

Dos móviles se desplazan en el mismo sentido.

Uno parte detrás pero tiene mayor velocidad y finalmente alcanza al otro.

La condición sigue siendo:

**x<sub>A</sub>(t) = x<sub>B</sub>(t)**

Lo que cambia es la geometría del problema.

---

## 28. Ejemplo de alcance

### Auto A

- x<sub>A0</sub> = 0;
- v<sub>A</sub> = 25 m/s.

### Auto B

- x<sub>B0</sub> = 150 m;
- v<sub>B</sub> = 15 m/s.

Ambos hacia el sentido positivo.

Ecuaciones:

**x<sub>A</sub> = 25t**

**x<sub>B</sub> = 150 + 15t**

Igualamos:

**25t = 150 + 15t**

**10t = 150**

**t = 15 s**

Posición:

**x = 375 m**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Alcance</h3>
  <div class="worked-example-card__steps">
    <p>25t = 150 + 15t</p>
    <p>10t = 150</p>
    <p><strong>t = 15 s</strong></p>
    <p><strong>x = 375 m</strong></p>
  </div>
</div>

---

## 29. Velocidad relativa como interpretación

En el alcance anterior:

- A gana distancia a razón de `25 − 15 = 10 m/s`.

La separación inicial es:

**150 m**

Entonces:

**t = 150/10 = 15 s**

Esto introduce la idea de **velocidad relativa**.

No reemplaza la ecuación horaria, pero ayuda a interpretar.

---

## 30. Velocidad relativa en el mismo sentido

Si dos móviles avanzan en el mismo sentido:

<div class="formula-panel">
  <span class="formula-panel__label">Rapidez de acercamiento</span>
  <div class="formula-panel__formula">v<sub>rel</sub> = |v<sub>A</sub> − v<sub>B</sub>|</div>
</div>

si realmente uno está alcanzando al otro.

La diferencia de velocidades indica qué tan rápido cambia la separación.

---

## 31. Velocidad relativa en sentidos opuestos

Si dos móviles se acercan uno al otro en sentidos opuestos:

<div class="formula-panel">
  <span class="formula-panel__label">Rapidez de acercamiento</span>
  <div class="formula-panel__formula">v<sub>rel</sub> = |v<sub>A</sub>| + |v<sub>B</sub>|</div>
</div>

cuando usamos módulos.

Con velocidades con signo, el análisis general surge de restarlas correctamente.

---

## 32. Móviles que parten en instantes distintos

No todos los movimientos comienzan al mismo tiempo.

Supongamos:

- A parte en `t = 0`;
- B parte 5 s después.

Podemos resolverlo de dos maneras:

### Opción 1

Usar un reloj común y escribir una ecuación por tramos.

### Opción 2

Definir para B el tiempo transcurrido desde que comienza:

**t<sub>B</sub> = t − 5 s**

Entonces la ecuación de B puede usar:

**x<sub>B</sub> = x<sub>B0</sub> + v<sub>B</sub>(t − 5 s)**

para:

**t ≥ 5 s**

---

## 33. Ejemplo con partida retrasada

A parte del origen a:

**10 m/s**

En `t = 0`.

B parte del mismo punto:

**5 s después**

a:

**20 m/s**

Para `t ≥ 5 s`:

**x<sub>A</sub> = 10t**

**x<sub>B</sub> = 20(t − 5)**

Encuentro:

**10t = 20t − 100**

**100 = 10t**

**t = 10 s**

B estuvo moviéndose:

**5 s**

Posición:

**x = 100 m**

---

## 34. Cuidado con el reloj

En problemas con distintos tiempos de partida es fácil mezclar:

- tiempo global;
- tiempo de movimiento de cada móvil.

<div class="lesson-callout lesson-callout--error">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">!</span>
    <strong>El mismo símbolo t debe referirse al mismo reloj</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Si usamos un reloj común, un móvil que parte después necesita una expresión como t − t<sub>inicio</sub>. No podemos hacer como si hubiera estado moviéndose desde t = 0.</p>
  </div>
</div>

---

## 35. Encuentros sin solución futura

No toda pareja de móviles se encuentra.

Ejemplo:

- A está detrás;
- ambos avanzan en el mismo sentido;
- A es más lento.

Al resolver puede aparecer:

- un tiempo negativo.

Eso significa que, con las ecuaciones extendidas matemáticamente, las rectas se cruzaron antes del instante elegido como `t = 0`.

No existe encuentro futuro dentro del problema planteado.

---

## 36. Un tiempo negativo puede tener significado

Supongamos que la ecuación da:

**t = −3 s**

No debemos descartar automáticamente el resultado como “error”.

Puede indicar:

- que el evento ocurrió 3 s antes de nuestro origen temporal.

Pero si el problema sólo estudia:

**t ≥ 0**

entonces esa solución queda fuera del intervalo físico considerado.

---

## 37. Elegir el sistema de referencia

En un problema de MRU podemos elegir:

- origen;
- sentido positivo;
- instante `t = 0`.

Una buena elección puede simplificar mucho las ecuaciones.

Ejemplo de encuentro:

podemos colocar:

- `x = 0` en el punto de partida de A;
- sentido positivo hacia B.

Entonces A tendrá una ecuación sencilla.

Pero otra elección correcta debe producir la misma predicción física de encuentro.

---

## 38. Cambiar el origen espacial

Supongamos:

**x(t) = 100 + 20t**

en un sistema.

Elegimos un nuevo origen desplazado 100 m hacia la derecha.

Entonces:

**x' = x − 100**

y:

**x'(t) = 20t**

La posición inicial cambia.

La velocidad sigue siendo:

**20 m/s**

si no invertimos el eje.

---

## 39. Invertir el eje

Si además elegimos el sentido opuesto como positivo:

**x' = −x + constante**

La velocidad cambia de signo.

Ejemplo:

- en sistema A: `v = +20 m/s`;
- en sistema B con eje invertido: `v' = −20 m/s`.

El movimiento físico no cambió.

Cambió su descripción coordenada.

---

## 40. Cambiar el origen temporal

Podemos decidir que un evento sea:

**t' = 0**

aunque en otro reloj ocurra en:

**t = 8 s**

Entonces:

**t' = t − 8 s**

Esto puede simplificar problemas con partidas retrasadas.

La elección del cero temporal también es convencional.

---

## 41. Movimiento respecto de otro móvil

Supongamos:

- A: v<sub>A</sub> = 30 m/s;
- B: v<sub>B</sub> = 20 m/s;
- ambos en la misma dirección.

Respecto del suelo:

- A va a 30 m/s;
- B va a 20 m/s.

Desde A, B cambia su posición a:

**v<sub>B/A</sub> = 20 − 30 = −10 m/s**

Parece moverse hacia atrás a 10 m/s.

Esta es una introducción al movimiento relativo clásico.

---

## 42. Transformación galileana de velocidad — profundización

Para sistemas que se mueven entre sí con velocidad constante en una misma línea:

<div class="formula-panel">
  <span class="formula-panel__label">Movimiento relativo clásico</span>
  <div class="formula-panel__formula">v' = v − V</div>
  <p>V es la velocidad del segundo sistema respecto del primero, bajo las hipótesis de la mecánica clásica.</p>
</div>

Esta regla funciona excelentemente para velocidades cotidianas.

En relatividad especial veremos que no es exacta para velocidades comparables con la de la luz.

---

## 43. Unidades y conversiones

La ecuación:

**x = x<sub>0</sub> + vt**

exige unidades compatibles.

Si:

- x está en metros;
- t en segundos;

v debe estar en:

**m/s**

Si nos dan:

**72 km/h**

podemos convertir:

<div class="formula-panel">
  <span class="formula-panel__label">Conversión útil</span>
  <div class="formula-panel__formula">72 km/h = 20 m/s</div>
</div>

porque dividimos por:

**3,6**

---

## 44. Ejemplo con conversión

Un auto viaja a:

**90 km/h**

durante:

**12 s**

Primero:

**90/3,6 = 25 m/s**

Luego:

**Δx = vt**

**Δx = 25 × 12**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Conversión y desplazamiento</h3>
  <div class="worked-example-card__steps">
    <p>v = 25 m/s</p>
    <p>Δx = 25 m/s × 12 s</p>
    <p><strong>Δx = 300 m</strong></p>
  </div>
</div>

---

## 45. ¿Cuándo es razonable usar MRU?

MRU es una idealización.

Puede ser una buena aproximación cuando:

- la trayectoria es casi recta;
- la velocidad cambia poco durante el intervalo;
- los detalles de aceleración no son relevantes.

Ejemplos aproximados:

- vehículo en una ruta durante un tramo corto;
- cinta transportadora;
- objeto en una guía a velocidad controlada.

---

## 46. Cuándo deja de servir el modelo

MRU no es adecuado si:

- cambia la rapidez;
- cambia la dirección;
- hay frenado;
- hay aceleración importante;
- la trayectoria es curva.

En esos casos necesitamos otros modelos.

El siguiente será:

**MRUV**

para aceleración constante en línea recta.

---

## 47. Experiencia: construir un MRU aproximado

### Objetivo

Registrar un movimiento aproximadamente uniforme.

### Opciones

- carrito sobre una superficie;
- persona caminando a ritmo constante;
- video de un objeto que se mueve de forma aproximadamente uniforme.

### Procedimiento

1. Elegí un eje.
2. Marcá posiciones conocidas.
3. Registrá tiempos.
4. Construí una tabla `x(t)`.
5. Graficá.
6. Calculá pendientes entre distintos puntos.
7. Compará.

### Pregunta central

¿Las pendientes son aproximadamente iguales dentro de la incertidumbre experimental?

---

## 48. Qué esperamos en datos reales

En un MRU ideal:

- todos los puntos caen exactamente sobre una recta.

En datos reales:

- habrá dispersión.

Podemos buscar:

- una tendencia aproximadamente lineal;
- una pendiente prácticamente constante dentro de la incertidumbre.

No debemos esperar perfección matemática de una experiencia física.

---

## 49. Errores frecuentes

### “MRU significa rapidez constante solamente”

No. La velocidad completa debe permanecer constante y la trayectoria es recta.

### “x<sub>0</sub> siempre vale cero”

No.

### “Una posición negativa significa que el móvil va hacia atrás”

No necesariamente. Posición y velocidad son magnitudes diferentes.

### “v negativa significa menor rapidez”

No.

### “En x(t), la altura representa velocidad”

No. La altura es posición; la pendiente es velocidad.

### “En v(t), la altura representa posición”

No. La altura es velocidad.

### “Dos móviles se encuentran cuando recorren la misma distancia”

No. Se encuentran cuando ocupan la misma posición en el mismo instante.

### “En un alcance hay que sumar velocidades”

Si avanzan en el mismo sentido, la separación cambia según la diferencia de velocidades.

### “Un tiempo negativo siempre es un error de cuenta”

No. Puede indicar un evento anterior al origen temporal elegido.

---

## 50. Problemas y ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Reconocimiento</strong>
  </div>
  <ol>
    <li>Definí MRU.</li>
    <li>¿Cuál es la aceleración en MRU?</li>
    <li>¿Qué representa x<sub>0</sub> en la ecuación horaria?</li>
    <li>¿Qué representa la pendiente de x(t)?</li>
    <li>¿Cómo es el gráfico v(t) de un MRU?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Ecuación horaria</strong>
  </div>
  <ol>
    <li>Un móvil parte de x<sub>0</sub> = 5 m con v = 4 m/s. Calculá x a los 8 s.</li>
    <li>Un móvil tiene x<sub>0</sub> = 40 m y v = −3 m/s. Calculá x a los 10 s.</li>
    <li>Un móvil cumple x = 12 + 6t. Indicá posición inicial y velocidad.</li>
    <li>¿Cuándo llega a x = 72 m el móvil del ejercicio anterior?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Gráficos y signos</strong>
  </div>
  <ol>
    <li>Construí una tabla y un gráfico para x = 20 − 4t entre 0 y 6 s.</li>
    <li>Dibujá el gráfico v(t) correspondiente.</li>
    <li>Calculá el desplazamiento usando el área bajo v(t).</li>
    <li>Explicá la diferencia entre desplazamiento y distancia recorrida en este caso.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Encuentros y alcances</strong>
  </div>
  <ol>
    <li>A parte de x = 0 a 8 m/s y B de x = 120 m a −12 m/s. Hallá tiempo y posición de encuentro.</li>
    <li>A parte de x = 0 a 30 m/s y B de x = 200 m a 20 m/s, ambos en el mismo sentido. Hallá el alcance.</li>
    <li>Un móvil parte del origen a 5 m/s. Otro parte del mismo lugar 6 s después a 8 m/s. Determiná cuándo lo alcanza medido desde t = 0.</li>
    <li>Representá gráficamente las tres situaciones anteriores.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Mostrá algebraicamente que cambiar el origen espacial modifica x<sub>0</sub> pero no la velocidad si mantenemos la orientación del eje.</li>
    <li>Explicá por qué un encuentro corresponde a la intersección de dos gráficos x(t).</li>
    <li>Dos móviles tienen ecuaciones x<sub>A</sub> = 40 + 5t y x<sub>B</sub> = 10 + 8t. Hallá el encuentro e interpretá qué móvil estaba inicialmente adelante.</li>
    <li>Analizá qué significa físicamente obtener un tiempo negativo al igualar dos ecuaciones horarias.</li>
  </ol>
</div>

---

## 51. Ejemplo integrado

Dos ciclistas se mueven sobre una ruta recta.

### Ciclista A

- x<sub>A0</sub> = 0;
- v<sub>A</sub> = 8 m/s.

### Ciclista B

- x<sub>B0</sub> = 90 m;
- v<sub>B</sub> = 5 m/s.

Ambos avanzan hacia el sentido positivo.

### Ecuaciones

**x<sub>A</sub> = 8t**

**x<sub>B</sub> = 90 + 5t**

### Condición de alcance

**8t = 90 + 5t**

**3t = 90**

**t = 30 s**

### Posición

**x = 8 × 30 = 240 m**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>Alcance de dos ciclistas</h3>
  <div class="worked-example-card__steps">
    <p>Separación inicial = 90 m</p>
    <p>Velocidad relativa = 8 − 5 = 3 m/s</p>
    <p>t = 90/3</p>
    <p><strong>t = 30 s</strong></p>
    <p><strong>x = 240 m</strong></p>
  </div>
</div>

Podemos resolverlo:

- mediante ecuaciones horarias;
- mediante velocidad relativa;
- mediante la intersección de gráficos.

Las tres representaciones deben ser compatibles.

---

## 52. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Qué magnitud permanece constante en MRU?</summary>
  <div class="lesson-quiz__answer">
    La velocidad. Por eso la aceleración es cero.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Qué significa x<sub>0</sub>?</summary>
  <div class="lesson-quiz__answer">
    La posición del móvil en el instante elegido como t = 0.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Qué representa la pendiente del gráfico posición-tiempo?</summary>
  <div class="lesson-quiz__answer">
    La velocidad constante del móvil.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Qué representa el área algebraica bajo el gráfico velocidad-tiempo?</summary>
  <div class="lesson-quiz__answer">
    El desplazamiento.
  </div>
</details>

<details class="lesson-quiz">
  <summary>5. ¿Cuál es la condición matemática de encuentro?</summary>
  <div class="lesson-quiz__answer">
    Que las posiciones sean iguales en el mismo instante: x<sub>A</sub>(t) = x<sub>B</sub>(t).
  </div>
</details>

<details class="lesson-quiz">
  <summary>6. Si dos móviles van en el mismo sentido, ¿cómo cambia su separación?</summary>
  <div class="lesson-quiz__answer">
    Depende de la diferencia de sus velocidades. Si el que va detrás es más rápido, la separación disminuye.
  </div>
</details>

---

## 53. Resumen

- El MRU tiene trayectoria recta y velocidad constante.
- En MRU la aceleración es cero.
- La ecuación horaria es x(t) = x<sub>0</sub> + vt.
- La posición inicial no tiene por qué ser cero.
- El signo de v indica sentido según el eje elegido.
- El gráfico `x(t)` es una recta.
- Su intercepto es x<sub>0</sub>.
- Su pendiente es la velocidad.
- El gráfico `v(t)` es horizontal.
- El área algebraica bajo `v(t)` representa desplazamiento.
- Distancia y desplazamiento no son lo mismo cuando importa el signo.
- Dos móviles se encuentran cuando tienen la misma posición en el mismo instante.
- Un alcance es un encuentro entre móviles que avanzan en el mismo sentido.
- La velocidad relativa ayuda a interpretar cómo cambia la separación.
- Distintos orígenes y orientaciones cambian las coordenadas, pero no el fenómeno físico.
- Un tiempo negativo puede señalar un evento anterior al origen temporal elegido.
- MRU es un modelo ideal útil cuando la velocidad cambia muy poco.

---

## 54. Siguiente tema recomendado

**F-04 — Movimiento rectilíneo uniformemente variado**

El siguiente paso es abandonar la velocidad constante.

Vamos a estudiar movimientos en línea recta con:

> **aceleración constante.**

Trabajaremos con:

- ecuaciones del MRUV;
- relación entre posición, velocidad, aceleración y tiempo;
- gráficos;
- área bajo `v(t)`;
- pendiente de `v(t)`;
- frenado;
- encuentros;
- análisis de signos.
