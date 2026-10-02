---
title: "Pendiente"
description: "Cómo calcular e interpretar la pendiente como razón de cambio, reconocer su signo y unidades, distinguir pendiente media y local y conectarla con velocidad, aceleración y otras magnitudes físicas."
slug: "pendiente"

course: "matematicas"
module: "funciones-y-graficos"
order: 12

level: "intermedio"
cycle: "ambos"

yearsApprox: [3, 4, 5, 6]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - interpretacion-de-graficos

skills:
  - pendiente
  - razon-de-cambio
  - delta
  - pendiente-positiva
  - pendiente-negativa
  - pendiente-cero
  - pendiente-de-una-recta
  - pendiente-media
  - pendiente-local
  - recta-tangente
  - unidades-de-pendiente
  - velocidad-como-pendiente
  - aceleracion-como-pendiente
  - pendiente-experimental

hasExercises: true
hasQuiz: true
hasExperiment: false

deepening: false
status: "complete"
---

## La inclinación de un gráfico puede ser una magnitud física

En una gráfica posición-tiempo:

<div class="formula-panel">
  <span class="formula-panel__label">Pendiente</span>
  <div class="formula-panel__formula">Δx/Δt</div>
</div>

tiene unidad:

**m/s**

Es decir, la pendiente no es sólo una propiedad geométrica.

Puede ser:

- velocidad.

En una gráfica velocidad-tiempo:

<div class="formula-panel">
  <span class="formula-panel__label">Pendiente</span>
  <div class="formula-panel__formula">Δv/Δt</div>
</div>

tiene unidad:

**m/s²**

y puede representar:

- aceleración.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>La pendiente es una razón de cambio. Su número, su signo y sus unidades dependen de qué magnitudes ocupan los ejes. Una misma inclinación visual puede representar magnitudes físicas distintas.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar este repaso deberías poder:

- definir incremento mediante Δ;
- calcular pendiente entre dos puntos;
- interpretar pendiente positiva;
- interpretar pendiente negativa;
- interpretar pendiente cero;
- reconocer pendiente indefinida en una recta vertical;
- hallar pendiente de y=mx+b;
- interpretar unidades de pendiente;
- distinguir pendiente y valor de una función;
- calcular tasa media de cambio;
- comprender pendiente local;
- interpretar una recta tangente;
- relacionar pendiente de x(t) con velocidad;
- relacionar pendiente de v(t) con aceleración;
- obtener constantes físicas a partir de pendientes experimentales;
- evitar el error de usar y/x cuando la recta no pasa por el origen.

---

## 1. El símbolo Δ

La letra griega:

**Δ**

se lee:

**delta**

y suele representar una variación.

<div class="formula-panel">
  <span class="formula-panel__label">Variación</span>
  <div class="formula-panel__formula">Δx = x<sub>2</sub> − x<sub>1</sub></div>
</div>

---

## 2. Pendiente entre dos puntos

Dados:

- (x<sub>1</sub>, y<sub>1</sub>);
- (x<sub>2</sub>, y<sub>2</sub>);

con x<sub>2</sub> ≠ x<sub>1</sub>:

<div class="formula-panel">
  <span class="formula-panel__label">Pendiente</span>
  <div class="formula-panel__formula">m = (y<sub>2</sub> − y<sub>1</sub>)/(x<sub>2</sub> − x<sub>1</sub>)</div>
</div>

---

## 3. Interpretación geométrica

La pendiente compara:

- cambio vertical;
- cambio horizontal.

A veces se resume como:

> “subida sobre avance”

pero el concepto correcto es:

- razón de cambios.

---

## 4. Ejemplo

Puntos:

- (2,3);
- (6,11).

Entonces:

**Δy = 8**

**Δx = 4**

<div class="formula-panel">
  <span class="formula-panel__label">Resultado</span>
  <div class="formula-panel__formula">m = 8/4 = 2</div>
</div>

---

## 5. Elegir los puntos en orden consistente

Si invertimos ambos puntos:

**Δy = 3−11 = −8**

**Δx = 2−6 = −4**

Entonces:

**m = (−8)/(−4)=2**

La pendiente no cambia.

---

## 6. Error de orden inconsistente

Es incorrecto calcular:

- y<sub>2</sub>−y<sub>1</sub>;

pero:

- x<sub>1</sub>−x<sub>2</sub>.

Eso introduce un signo incorrecto.

---

## 7. Pendiente positiva

Si:

**m > 0**

al aumentar x:

- y aumenta.

La recta es creciente.

---

## 8. Pendiente negativa

Si:

**m < 0**

al aumentar x:

- y disminuye.

La recta es decreciente.

---

## 9. Pendiente cero

Si:

**m = 0**

entonces:

**Δy = 0**

aunque Δx no sea cero.

La recta es horizontal.

---

## 10. Recta vertical

En una recta vertical:

**Δx = 0**

La expresión:

**Δy/Δx**

implicaría división por cero.

Por eso su pendiente no está definida mediante un número real finito.

---

## 11. Pendiente en y = mx+b

En una recta:

<div class="formula-panel">
  <span class="formula-panel__label">Recta</span>
  <div class="formula-panel__formula">y = mx + b</div>
</div>

el coeficiente m es exactamente:

- la pendiente.

---

## 12. Demostración sencilla

Tomemos dos puntos de la recta:

**y<sub>1</sub>=mx<sub>1</sub>+b**

**y<sub>2</sub>=mx<sub>2</sub>+b**

Restamos:

**y<sub>2</sub>−y<sub>1</sub>=m(x<sub>2</sub>−x<sub>1</sub>)**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Resultado</span>
  <div class="formula-panel__formula">(y<sub>2</sub>−y<sub>1</sub>)/(x<sub>2</sub>−x<sub>1</sub>) = m</div>
</div>

---

## 13. La pendiente es constante en una recta

No importa qué dos puntos distintos elijamos:

- obtenemos la misma m.

Esa constancia distingue una relación de primer grado.

---

## 14. y/x no es la pendiente general

Si la recta es:

**y = 3x + 5**

entonces:

- pendiente = 3.

Pero:

**y/x**

depende de x.

Por ejemplo:

- x=1 → y/x=8;
- x=5 → y/x=4.

---

## 15. Cuándo y/x coincide con pendiente

Si:

<div class="formula-panel">
  <span class="formula-panel__label">Proporcionalidad</span>
  <div class="formula-panel__formula">y = mx</div>
</div>

la recta pasa por el origen.

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Razón constante</span>
  <div class="formula-panel__formula">y/x = m</div>
</div>

para x ≠ 0.

---

## 16. Unidades de la pendiente

Las unidades son:

<div class="formula-panel">
  <span class="formula-panel__label">Unidades</span>
  <div class="formula-panel__formula">[m] = [y]/[x]</div>
</div>

Esto es central en Física.

---

## 17. Posición-tiempo

Eje vertical:

- posición en m.

Eje horizontal:

- tiempo en s.

Pendiente:

<div class="formula-panel">
  <span class="formula-panel__label">Velocidad</span>
  <div class="formula-panel__formula">m = Δx/Δt</div>
</div>

Unidad:

**m/s**

---

## 18. Velocidad-tiempo

Vertical:

- m/s.

Horizontal:

- s.

Pendiente:

<div class="formula-panel">
  <span class="formula-panel__label">Aceleración</span>
  <div class="formula-panel__formula">m = Δv/Δt</div>
</div>

Unidad:

**m/s²**

---

## 19. Fuerza-alargamiento

Para un resorte ideal:

<div class="formula-panel">
  <span class="formula-panel__label">Hooke</span>
  <div class="formula-panel__formula">F = kx</div>
</div>

Gráfico F vs. x:

- pendiente = k;
- unidad = N/m.

---

## 20. Voltaje-corriente

Para un resistor óhmico:

<div class="formula-panel">
  <span class="formula-panel__label">Ohm</span>
  <div class="formula-panel__formula">V = RI</div>
</div>

Gráfico V vs. I:

- pendiente = R;
- unidad = V/A = Ω.

---

## 21. Intercambiar ejes

Si graficamos I vs. V:

<div class="formula-panel">
  <span class="formula-panel__label">Inversa</span>
  <div class="formula-panel__formula">I = (1/R)V</div>
</div>

La pendiente es:

**1/R**

No R.

---

## 22. Pendiente media en una curva

Si la gráfica no es una recta, entre dos puntos podemos calcular:

<div class="formula-panel">
  <span class="formula-panel__label">Tasa media</span>
  <div class="formula-panel__formula">m<sub>media</sub> = Δy/Δx</div>
</div>

Esto corresponde a la pendiente de una:

- recta secante.

---

## 23. Recta secante

Una secante une:

- dos puntos de la curva.

Su pendiente resume el cambio promedio entre:

- esos dos puntos.

---

## 24. Pendiente local

En una curva, la tasa de cambio puede ser diferente en cada punto.

La pendiente local se aproxima usando puntos:

- cada vez más cercanos.

Geométricamente conduce a la:

- recta tangente.

---

## 25. Recta tangente

La tangente toca localmente la curva y comparte su:

- dirección instantánea.

Su pendiente representa la tasa de cambio:

- instantánea.

---

## 26. Velocidad instantánea

En un gráfico x(t), la pendiente local es:

<div class="formula-panel">
  <span class="formula-panel__label">Velocidad instantánea</span>
  <div class="formula-panel__formula">v = pendiente local de x(t)</div>
</div>

En cálculo diferencial se escribe:

**v = dx/dt**

pero aquí nos interesa primero:

- la idea geométrica.

---

## 27. Aceleración instantánea

En v(t):

<div class="formula-panel">
  <span class="formula-panel__label">Aceleración instantánea</span>
  <div class="formula-panel__formula">a = pendiente local de v(t)</div>
</div>

En cálculo:

**a = dv/dt**

---

## 28. Una curva puede tener pendiente cero sin ser constante

En el vértice de una parábola:

- la tangente es horizontal;
- pendiente local = 0.

Pero la función no es constante.

Sólo en ese punto la tasa instantánea:

- se anula.

---

## 29. Ejemplo físico: altura máxima

En y(t) de un tiro vertical:

- en la altura máxima la pendiente es cero.

Como la pendiente de posición-tiempo representa velocidad:

**v = 0**

en ese instante.

---

## 30. Pendiente negativa y rapidez

En x(t), una pendiente negativa significa:

- velocidad negativa.

La rapidez es:

**|v|**

Por lo tanto una pendiente −10 m/s corresponde a una rapidez:

**10 m/s**

---

## 31. Pendiente más pronunciada

En el mismo sistema de ejes y escala, una mayor |m| significa:

- cambio más rápido de y por unidad de x.

Pero comparar visualmente inclinaciones entre gráficos con escalas distintas puede ser:

- engañoso.

---

## 32. La apariencia depende de la escala

La misma función puede verse:

- casi horizontal;
- muy empinada;

si cambiamos la proporción gráfica de los ejes.

El valor numérico de m no cambia.

---

## 33. Pendiente experimental

Supongamos datos aproximadamente lineales.

En vez de usar dos puntos cualesquiera con ruido, conviene obtener una:

- recta de ajuste.

La pendiente de esa recta estima:

- una constante física.

---

## 34. Elegir puntos de la recta de ajuste

Si ya tenemos una recta ajustada, conviene escoger:

- dos puntos bien separados sobre la recta;

no necesariamente dos puntos experimentales individuales.

Eso reduce el impacto visual de:

- errores de lectura.

---

## 35. Incertidumbre de pendiente — profundización

Si los datos tienen incertidumbre, la pendiente también la tiene.

Podemos estimarla mediante:

- ajuste estadístico;
- rectas extremas compatibles;
- propagación de incertidumbres.

El resultado experimental no es sólo:

- un número exacto.

---

## 36. Ejemplo experimental: resorte

Medimos:

| x (m) | F (N) |
| ---: | ---: |
| 0,01 | 0,50 |
| 0,02 | 1,01 |
| 0,03 | 1,49 |
| 0,04 | 2,02 |

Aproximadamente:

**F ≈ kx**

Pendiente:

**k ≈ 50 N/m**

Las pequeñas desviaciones pueden deberse a:

- incertidumbre;
- imperfecciones.

---

## 37. Intercepto no nulo experimental

A veces una recta experimental tiene:

**b ≠ 0**

aunque el modelo ideal prediga:

**b = 0**

Eso puede señalar:

- offset del instrumento;
- fuerza previa;
- error sistemático;
- modelo incompleto.

No conviene forzar siempre la recta por el origen sin justificarlo.

---

## 38. Pendiente y proporcionalidad

Una proporcionalidad directa exige:

- pendiente constante;
- paso por el origen.

Una relación afín sólo exige:

- pendiente constante.

---

## 39. Pendiente y derivada — profundización

En cursos de cálculo, la pendiente local se formaliza mediante:

<div class="formula-panel">
  <span class="formula-panel__label">Derivada</span>
  <div class="formula-panel__formula">f′(x) = lim<sub>Δx→0</sub> [f(x+Δx)−f(x)]/Δx</div>
</div>

No necesitamos dominar límites aquí.

La idea importante es:

- cambio medio → secante;
- cambio instantáneo → tangente.

---

## 40. Pendiente de una cuadrática

Para:

**y = x²**

la pendiente no es constante.

Entre:

- x=0 y x=1 → pendiente media = 1;
- x=1 y x=2 → pendiente media = 3.

La curva se vuelve:

- más empinada.

---

## 41. Conexión con aceleración constante

En MRUV:

**x(t)** es cuadrática.

Su pendiente cambia linealmente con t.

Esa pendiente es:

**v(t)**

que resulta:

- lineal.

La pendiente de v(t) es:

- constante;
- igual a a.

---

## 42. Cadena gráfica

Podemos pensar:

```text
x(t) --pendiente--> v(t) --pendiente--> a(t)
```

Y en sentido inverso mediante áreas:

```text
a(t) --área--> cambio de v
v(t) --área--> cambio de x
```

Esta conexión es una de las ideas más poderosas de la cinemática.

---

## 43. Error frecuente: usar puntos demasiado cercanos en un gráfico ruidoso

Si Δx es muy pequeño, un error de lectura en y puede alterar mucho:

- Δy/Δx.

Por eso en una recta experimental suele convenir elegir puntos:

- separados.

---

## 44. Error frecuente: ignorar unidades

Una pendiente “5” está incompleta si los ejes representan magnitudes físicas.

Puede ser:

- 5 m/s;
- 5 N/m;
- 5 V/A;
- 5 K/s.

---

## 45. Error frecuente: signo incorrecto

Si y baja al aumentar x:

- pendiente negativa.

Aunque ambos valores individuales de y sean:

- positivos.

---

## 46. Errores frecuentes

### “Pendiente = y/x siempre”

No.

### “La pendiente es la altura de la curva”

No.

### “Una curva tiene una única pendiente”

No; puede variar punto a punto.

### “Pendiente cero significa y=0”

No.

### “Pendiente negativa significa que la magnitud y es negativa”

No necesariamente.

### “Una recta casi horizontal siempre tiene pendiente pequeña”

Sólo si se consideran las escalas numéricas de los ejes.

### “La pendiente no tiene unidades”

Puede tenerlas y suelen ser físicamente esenciales.

---

## 47. Ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Cálculo</strong>
  </div>
  <ol>
    <li>Hallá la pendiente entre (1,2) y (5,10).</li>
    <li>Hallá la pendiente entre (−2,4) y (3,−6).</li>
    <li>Indicá el signo de una recta decreciente.</li>
    <li>¿Qué pendiente tiene una recta horizontal?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Rectas</strong>
  </div>
  <ol>
    <li>Identificá la pendiente de y=7x−2.</li>
    <li>Explicá por qué y/x no es constante en esa función.</li>
    <li>Hallá la recta de pendiente 3 que pasa por (2,5).</li>
    <li>Compará y=2x y y=2x+8.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Unidades físicas</strong>
  </div>
  <ol>
    <li>Un gráfico x-t cambia de 4 m a 16 m entre 2 s y 5 s. Hallá velocidad media.</li>
    <li>Un gráfico v-t cambia de 3 a 15 m/s en 4 s. Hallá aceleración media.</li>
    <li>En F vs. x, una pendiente vale 80. Indicá su unidad SI.</li>
    <li>En V vs. I, una pendiente vale 12. Interpretala físicamente.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Curvas</strong>
  </div>
  <ol>
    <li>Calculá la pendiente media de y=x² entre x=1 y x=3.</li>
    <li>Comparala con la pendiente media entre x=3 y x=5.</li>
    <li>Explicá qué significa pendiente cero en el vértice de una trayectoria vertical y(t).</li>
    <li>Dibujá una curva con pendiente positiva pero decreciente en magnitud.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Explicá cómo una secante se aproxima a una tangente al acercar dos puntos.</li>
    <li>Derivá algebraicamente que la pendiente de y=mx+b es m usando dos puntos generales.</li>
    <li>Diseñá un experimento donde una pendiente permita medir una constante física y explicá qué unidades tendría.</li>
  </ol>
</div>

---

## 48. Ejemplo integrado

Un móvil tiene los siguientes datos de posición:

| t (s) | x (m) |
| ---: | ---: |
| 0 | 2 |
| 2 | 10 |
| 4 | 18 |

Entre 0 y 2 s:

<div class="formula-panel">
  <span class="formula-panel__label">Pendiente</span>
  <div class="formula-panel__formula">v = (10−2)/(2−0) = 4 m/s</div>
</div>

Entre 2 y 4 s:

<div class="formula-panel">
  <span class="formula-panel__label">Pendiente</span>
  <div class="formula-panel__formula">v = (18−10)/(4−2) = 4 m/s</div>
</div>

La pendiente es constante.

La recta correspondiente es:

<div class="formula-panel">
  <span class="formula-panel__label">Movimiento</span>
  <div class="formula-panel__formula">x(t) = 2 m + (4 m/s)t</div>
</div>

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>La pendiente reconstruye el modelo físico</h3>
  <div class="worked-example-card__steps">
    <p>La razón Δx/Δt es 4 m/s en ambos intervalos.</p>
    <p>La posición inicial es 2 m.</p>
    <p>Por lo tanto el movimiento es compatible con un MRU.</p>
    <p><strong>Pendiente constante en x(t) significa velocidad constante.</strong></p>
  </div>
</div>

---

## 49. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Cómo se calcula la pendiente entre dos puntos?</summary>
  <div class="lesson-quiz__answer">
    m=(y₂−y₁)/(x₂−x₁), manteniendo el mismo orden en numerador y denominador.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Qué significa m=0?</summary>
  <div class="lesson-quiz__answer">
    Que y no cambia respecto de x en ese tramo; la recta es horizontal. No significa que y sea cero.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Qué representa la pendiente de x(t)?</summary>
  <div class="lesson-quiz__answer">
    La velocidad: media entre dos puntos o instantánea en el límite local.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Por qué las unidades de la pendiente importan?</summary>
  <div class="lesson-quiz__answer">
    Porque muestran qué magnitud física representa la razón de cambio; se obtienen dividiendo las unidades del eje vertical por las del horizontal.
  </div>
</details>

---

## 50. Resumen

- La pendiente es una razón de cambio.
- Δx=x₂−x₁ representa una variación.
- m=Δy/Δx.
- El orden usado en numerador y denominador debe ser consistente.
- Pendiente positiva indica crecimiento; negativa, decrecimiento.
- Pendiente cero corresponde a una recta horizontal.
- Una recta vertical tiene pendiente no definida.
- En y=mx+b, la pendiente es m.
- y/x sólo coincide con m cuando la recta pasa por el origen.
- Las unidades de pendiente son [y]/[x].
- En x(t), la pendiente representa velocidad.
- En v(t), representa aceleración.
- En F(x) para un resorte ideal, puede representar k.
- En V(I) para un resistor óhmico, puede representar R.
- En una curva distinguimos pendiente media y pendiente local.
- La pendiente local corresponde geométricamente a la tangente.
- Un gráfico experimental permite estimar constantes mediante ajustes lineales.
- La apariencia visual de una pendiente depende de la escala, pero su valor numérico no.

---

## 51. Siguiente tema recomendado

**M-13 — Teorema de Pitágoras**

La pendiente nos ayudó a relacionar cambios horizontales y verticales.

Ahora estudiaremos triángulos rectángulos para conectar:

- componentes;
- módulos;
- distancias;
- desplazamientos;
- vectores;
- geometría espacial básica.
