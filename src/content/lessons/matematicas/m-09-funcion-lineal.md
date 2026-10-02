---
title: "Función lineal"
description: "Cómo interpretar relaciones de la forma y = mx y y = mx + b, construir tablas y gráficos, reconocer pendiente y ordenada al origen y conectar rectas con modelos físicos."
slug: "funcion-lineal"

course: "matematicas"
module: "funciones-y-graficos"
order: 9

level: "basico"
cycle: "ambos"

yearsApprox: [2, 3, 4, 5, 6]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - ecuaciones-lineales

skills:
  - funcion
  - variable-independiente
  - variable-dependiente
  - funcion-lineal
  - funcion-afin
  - grafico-cartesiano
  - recta
  - pendiente
  - ordenada-al-origen
  - proporcionalidad-directa
  - tabla-de-valores
  - interpretacion-fisica-de-parametros
  - crecimiento-y-decrecimiento

hasExercises: true
hasQuiz: true
hasExperiment: false

deepening: false
status: "complete"
---

## Una fórmula puede describir una familia completa de situaciones

En movimiento rectilíneo uniforme:

<div class="formula-panel">
  <span class="formula-panel__label">MRU</span>
  <div class="formula-panel__formula">x(t) = x<sub>0</sub> + vt</div>
</div>

Si fijamos:

- x<sub>0</sub>;
- v;

la fórmula no da una sola posición.

Da una posición para:

- cada instante t.

Es decir, describe una:

**función**

El gráfico correspondiente es una:

- recta.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Una función relaciona valores de dos variables. En una relación de primer grado, la pendiente indica cuánto cambia la variable dependiente cuando cambia la independiente, mientras que la ordenada al origen indica el valor inicial cuando x = 0.</p>
  </div>
</div>

## Una precisión de vocabulario

En muchos cursos escolares se llama **función lineal** a cualquier recta de la forma:

<div class="formula-panel">
  <span class="formula-panel__label">Uso escolar frecuente</span>
  <div class="formula-panel__formula">y = mx + b</div>
</div>

En sentido matemático más estricto:

### Función lineal

<div class="formula-panel">
  <span class="formula-panel__label">Lineal estricta</span>
  <div class="formula-panel__formula">y = mx</div>
</div>

pasa por el origen.

### Función afín

<div class="formula-panel">
  <span class="formula-panel__label">Afín</span>
  <div class="formula-panel__formula">y = mx + b</div>
</div>

con b posiblemente distinto de cero.

En esta lección estudiaremos ambas porque las dos aparecen constantemente en Física.

## Qué vamos a aprender

Al terminar este repaso deberías poder:

- explicar qué es una función;
- distinguir variable independiente y dependiente;
- construir tablas de valores;
- ubicar puntos en un plano cartesiano;
- reconocer una recta;
- interpretar y = mx;
- interpretar y = mx + b;
- distinguir proporcionalidad directa y relación afín;
- identificar pendiente;
- identificar ordenada al origen;
- reconocer funciones crecientes, decrecientes y constantes;
- hallar una recta a partir de parámetros;
- interpretar pendiente y ordenada en contextos físicos;
- relacionar intersecciones de rectas con sistemas de ecuaciones;
- preparar el estudio detallado de pendiente de M-12.

---

## 1. Función

Una función asigna a cada valor permitido de una variable de entrada:

- un único valor de salida.

Podemos escribir:

<div class="formula-panel">
  <span class="formula-panel__label">Notación</span>
  <div class="formula-panel__formula">y = f(x)</div>
</div>

---

## 2. Variable independiente

En:

**y = f(x)**

solemos tratar x como:

- variable independiente.

Elegimos un valor de x dentro del dominio y calculamos:

- y.

---

## 3. Variable dependiente

y es la:

- variable dependiente;

porque su valor depende de:

- x;
- la regla f.

En Física, cuál variable se trata como independiente depende del:

- modelo;
- experimento;
- gráfico.

---

## 4. Ejemplo simple

<div class="formula-panel">
  <span class="formula-panel__label">Función</span>
  <div class="formula-panel__formula">y = 2x + 1</div>
</div>

Si:

- x = 0 → y = 1;
- x = 1 → y = 3;
- x = 2 → y = 5.

---

## 5. Tabla de valores

| x | y = 2x + 1 |
| ---: | ---: |
| −1 | −1 |
| 0 | 1 |
| 1 | 3 |
| 2 | 5 |

Cada fila representa un punto:

**(x, y)**

---

## 6. Plano cartesiano

El plano posee dos ejes:

- horizontal: x;
- vertical: y.

```text
y
↑
│
│
└────────→ x
```

Cada punto se representa mediante:

**(x, y)**

---

## 7. Gráfico de una función de primer grado

Los puntos de:

**y = 2x + 1**

caen sobre una:

- recta.

```text
y
│        /
│      /
│    /
│  /
│/
└────────── x
```

---

## 8. Forma y = mx + b

Una recta no vertical puede escribirse como:

<div class="formula-panel">
  <span class="formula-panel__label">Forma pendiente-ordenada</span>
  <div class="formula-panel__formula">y = mx + b</div>
</div>

donde:

- m es la pendiente;
- b es la ordenada al origen.

---

## 9. Ordenada al origen

Si:

**x = 0**

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Valor inicial</span>
  <div class="formula-panel__formula">y = b</div>
</div>

Por eso la recta corta el eje y en:

**(0, b)**

---

## 10. Pendiente

La pendiente mide la razón de cambio:

<div class="formula-panel">
  <span class="formula-panel__label">Pendiente</span>
  <div class="formula-panel__formula">m = Δy/Δx</div>
</div>

M-12 desarrollará este concepto con mayor profundidad.

---

## 11. Interpretación intuitiva de m

Si:

**m = 3**

entonces por cada aumento de 1 unidad en x:

- y aumenta 3 unidades.

Si:

**m = −2**

por cada aumento de 1 en x:

- y disminuye 2.

---

## 12. Función creciente

Si:

**m > 0**

la recta aumenta hacia la derecha.

```text
y
│      /
│    /
│  /
└──────── x
```

---

## 13. Función decreciente

Si:

**m < 0**

la recta disminuye hacia la derecha.

```text
y
│\
│ \
│  \
└──────── x
```

---

## 14. Función constante

Si:

**m = 0**

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Constante</span>
  <div class="formula-panel__formula">y = b</div>
</div>

El gráfico es horizontal.

---

## 15. Proporcionalidad directa

Si:

<div class="formula-panel">
  <span class="formula-panel__label">Proporcionalidad</span>
  <div class="formula-panel__formula">y = mx</div>
</div>

entonces:

- b = 0;
- la recta pasa por el origen;
- y/x = m para x ≠ 0.

Esto es proporcionalidad directa.

---

## 16. Una recta con b ≠ 0 no es proporcionalidad directa

Ejemplo:

**y = 2x + 5**

es una recta.

Pero:

- no pasa por el origen;
- y/x no es constante.

Por eso no representa:

- proporcionalidad directa.

---

## 17. Uso escolar de “función lineal”

En materiales escolares puede encontrarse:

> función lineal: y = mx+b

Ese uso es común.

En matemática estricta suele distinguirse:

- lineal: y = mx;
- afín: y = mx+b.

Lo importante para Física es reconocer:

- qué representa m;
- qué representa b.

---

## 18. MRU como relación afín

En Física:

<div class="formula-panel">
  <span class="formula-panel__label">MRU</span>
  <div class="formula-panel__formula">x(t) = x<sub>0</sub> + vt</div>
</div>

Comparando con:

**y = mx+b**

tenemos:

- y ↔ x(t);
- x ↔ t;
- m ↔ v;
- b ↔ x<sub>0</sub>.

---

## 19. Interpretar la pendiente en MRU

En un gráfico:

**posición vs. tiempo**

la pendiente es:

<div class="formula-panel">
  <span class="formula-panel__label">Pendiente física</span>
  <div class="formula-panel__formula">Δx/Δt = v</div>
</div>

Su unidad es:

**m/s**

si usamos SI.

---

## 20. Interpretar la ordenada en MRU

Cuando:

**t = 0**

la posición es:

<div class="formula-panel">
  <span class="formula-panel__label">Inicial</span>
  <div class="formula-panel__formula">x(0) = x<sub>0</sub></div>
</div>

La ordenada al origen representa:

- posición inicial.

---

## 21. Ejemplo físico

<div class="formula-panel">
  <span class="formula-panel__label">Movimiento</span>
  <div class="formula-panel__formula">x(t) = 10 m + (3 m/s)t</div>
</div>

Interpretación:

- x<sub>0</sub> = 10 m;
- v = 3 m/s.

La recta comienza en:

- 10 m;

y aumenta:

- 3 m por cada segundo.

---

## 22. Tabla del movimiento

| t (s) | x (m) |
| ---: | ---: |
| 0 | 10 |
| 1 | 13 |
| 2 | 16 |
| 3 | 19 |

Las diferencias en x son constantes:

- +3 m cada 1 s.

---

## 23. Pendiente negativa en Física

<div class="formula-panel">
  <span class="formula-panel__label">Ejemplo</span>
  <div class="formula-panel__formula">x(t) = 20 m − (2 m/s)t</div>
</div>

La pendiente es:

**−2 m/s**

El móvil se desplaza hacia:

- el sentido negativo del eje.

---

## 24. Intersección con el eje x

Para encontrar dónde una recta cruza el eje x ponemos:

**y = 0**

Ejemplo:

**0 = 2x − 6**

Entonces:

**x = 3**

El punto es:

**(3,0)**

---

## 25. Cero de una función

El valor de x donde:

<div class="formula-panel">
  <span class="formula-panel__label">Cero</span>
  <div class="formula-panel__formula">f(x) = 0</div>
</div>

se llama:

- raíz;
- cero de la función;

según contexto.

En una recta no horizontal puede haber:

- un único cero.

---

## 26. Hallar una recta con m y b

Si:

- m = 4;
- b = −3;

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Recta</span>
  <div class="formula-panel__formula">y = 4x − 3</div>
</div>

Podemos graficar empezando en:

**(0,−3)**

y usando la pendiente.

---

## 27. Hallar b a partir de un punto

Supongamos pendiente:

**m = 2**

y punto:

**(3,10)**

Partimos de:

**y = 2x+b**

Sustituimos:

**10 = 6+b**

Entonces:

**b = 4**

Recta:

**y = 2x+4**

---

## 28. Hallar pendiente con dos puntos

Dados:

- (x<sub>1</sub>, y<sub>1</sub>);
- (x<sub>2</sub>, y<sub>2</sub>);

con x<sub>1</sub> ≠ x<sub>2</sub>:

<div class="formula-panel">
  <span class="formula-panel__label">Pendiente</span>
  <div class="formula-panel__formula">m = (y<sub>2</sub> − y<sub>1</sub>)/(x<sub>2</sub> − x<sub>1</sub>)</div>
</div>

---

## 29. Ejemplo con dos puntos

Puntos:

- (1,3);
- (4,9).

Entonces:

**Δy = 6**

**Δx = 3**

**m = 2**

Usando (1,3):

**3 = 2·1+b**

**b = 1**

Por lo tanto:

**y = 2x+1**

---

## 30. Las unidades de m dependen de los ejes

Si y es:

- posición en m;

y x es:

- tiempo en s;

entonces m tiene unidad:

**m/s**

Si y fuera temperatura y x tiempo:

- la unidad sería K/s o °C/s según la diferencia considerada.

---

## 31. La pendiente no siempre es una velocidad

La fórmula:

**m = Δy/Δx**

es matemática.

Su interpretación depende de:

- qué representa y;
- qué representa x.

Puede ser:

- velocidad;
- aceleración;
- resistencia;
- constante elástica;
- tasa de calentamiento;
- otra magnitud.

---

## 32. Fuerza elástica como ejemplo

Ley de Hooke en magnitud:

<div class="formula-panel">
  <span class="formula-panel__label">Hooke</span>
  <div class="formula-panel__formula">F = kx</div>
</div>

Un gráfico F vs. x ideal tiene:

- pendiente k;
- ordenada 0.

Aquí:

- k tiene unidad N/m.

---

## 33. Ley de Ohm como ejemplo

Para un resistor óhmico:

<div class="formula-panel">
  <span class="formula-panel__label">Ohm</span>
  <div class="formula-panel__formula">V = RI</div>
</div>

Si graficamos:

- V en vertical;
- I en horizontal;

la pendiente es:

**R**

---

## 34. Cambiar ejes cambia la pendiente

Si en el mismo resistor graficamos:

- I en vertical;
- V en horizontal;

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Pendiente</span>
  <div class="formula-panel__formula">m = 1/R</div>
</div>

Por eso siempre hay que mirar:

- qué variable está en cada eje.

---

## 35. Intersección de dos funciones

Supongamos:

**y = 2x+1**

**y = −x+7**

En el punto de intersección ambas y son iguales:

**2x+1 = −x+7**

**3x = 6**

**x = 2**

Entonces:

**y = 5**

---

## 36. Conexión con sistemas

La intersección:

**(2,5)**

es exactamente la solución del sistema:

<div class="formula-panel">
  <span class="formula-panel__label">Sistema</span>
  <div class="formula-panel__formula">{ y = 2x+1 ; y = −x+7 }</div>
</div>

M-08 y M-09 describen el mismo problema desde:

- álgebra;
- geometría.

---

## 37. Rectas paralelas

Dos rectas:

**y = m<sub>1</sub>x+b<sub>1</sub>**

**y = m<sub>2</sub>x+b<sub>2</sub>**

son paralelas si:

**m<sub>1</sub> = m<sub>2</sub>**

y tienen distintos b.

No se intersectan.

---

## 38. Rectas coincidentes

Si tienen:

- misma pendiente;
- misma ordenada;

representan exactamente:

- la misma recta.

---

## 39. Dominio físico

Matemáticamente una recta puede extenderse hacia:

- x positivo;
- x negativo;
- valores enormes.

Pero un modelo físico puede valer sólo en un intervalo.

Ejemplo:

- una aproximación lineal de temperatura puede servir durante algunos minutos;
- no para tiempos arbitrariamente largos.

---

## 40. Extrapolación

Usar una recta fuera del rango medido es:

**extrapolar**

Puede ser útil.

Pero aumenta el riesgo de que:

- el modelo deje de ser válido.

---

## 41. Interpolación

Estimar dentro del rango de datos observados es:

**interpolar**

Suele ser más segura que extrapolar si:

- el comportamiento lineal está bien sustentado.

---

## 42. Datos reales no caen siempre sobre una recta perfecta

En experimentos pueden aparecer:

- incertidumbre;
- ruido;
- errores de medición.

Una relación teóricamente lineal puede producir puntos:

- cercanos;
- no exactamente sobre una recta.

Luego puede realizarse un:

- ajuste lineal.

---

## 43. Ajuste lineal — profundización

Un ajuste busca una recta que represente de manera adecuada un conjunto de datos.

No significa forzar cualquier conjunto de puntos a:

- una recta.

Debemos comprobar si el modelo lineal tiene sentido:

- físico;
- estadístico.

---

## 44. Errores frecuentes

### “Toda recta es proporcionalidad directa”

No. Debe tener b = 0.

### “La pendiente es siempre y/x”

Sólo en una proporcionalidad que pasa por el origen. En general es Δy/Δx.

### “b es donde la recta corta el eje x”

No. Es donde corta el eje y.

### “Pendiente positiva significa que x es positiva”

No. Significa que y aumenta cuando x aumenta.

### “Una pendiente negativa es un error”

No.

### “Una recta física debe valer para todo valor imaginable”

No. Todo modelo tiene dominio de validez.

---

## 45. Ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Reconocimiento</strong>
  </div>
  <ol>
    <li>Identificá m y b en y=3x+5.</li>
    <li>Decidí si y=4x representa proporcionalidad directa.</li>
    <li>Decidí si y=4x+2 representa proporcionalidad directa.</li>
    <li>Clasificá como creciente, decreciente o constante una recta con m=-3.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Tablas y gráficos</strong>
  </div>
  <ol>
    <li>Construí una tabla para y=2x+1 con x=-2,-1,0,1,2.</li>
    <li>Graficá esos puntos.</li>
    <li>Hallá el corte con el eje y.</li>
    <li>Hallá el cero de la función.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Pendiente</strong>
  </div>
  <ol>
    <li>Hallá la pendiente entre (2,5) y (6,13).</li>
    <li>Encontrá la recta que pasa por esos dos puntos.</li>
    <li>Hallá la recta con m=-2 que pasa por (3,1).</li>
    <li>Explicá las unidades de la pendiente en un gráfico posición-tiempo.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Física</strong>
  </div>
  <ol>
    <li>Para x(t)=5 m+(2 m/s)t, identificá posición inicial y velocidad.</li>
    <li>Construí una tabla entre 0 y 5 s y graficá.</li>
    <li>Para V=RI con R=10 Ω, explicá qué representa la pendiente de V contra I.</li>
    <li>Dos móviles cumplen x<sub>A</sub>=3t y x<sub>B</sub>=20−2t. Interpretá gráficamente su encuentro.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Explicá la diferencia matemática entre función lineal y afín y por qué el uso escolar puede mezclar ambos nombres.</li>
    <li>Demostrá que dos rectas con igual pendiente y distinta ordenada no pueden intersectarse.</li>
    <li>Diseñá un experimento donde la pendiente de un gráfico tenga significado físico concreto.</li>
  </ol>
</div>

---

## 46. Ejemplo integrado

Un móvil cumple:

<div class="formula-panel">
  <span class="formula-panel__label">Posición</span>
  <div class="formula-panel__formula">x(t) = 12 m − (4 m/s)t</div>
</div>

Comparando con:

**y = mx+b**

identificamos:

- pendiente: −4 m/s;
- ordenada: 12 m.

### Interpretación

En t = 0:

**x = 12 m**

Cada segundo:

- la posición disminuye 4 m.

### Cuándo cruza el origen

Ponemos:

**x = 0**

Entonces:

**0 = 12 − 4t**

**t = 3 s**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>La geometría de la recta describe el movimiento</h3>
  <div class="worked-example-card__steps">
    <p>Ordenada al origen: 12 m → posición inicial.</p>
    <p>Pendiente: −4 m/s → velocidad.</p>
    <p>Corte con x=0: t=3 s → instante en que pasa por el origen.</p>
    <p><strong>Un mismo gráfico reúne valor inicial, tasa de cambio y evolución temporal.</strong></p>
  </div>
</div>

---

## 47. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Qué representa b en y=mx+b?</summary>
  <div class="lesson-quiz__answer">
    Es el valor de y cuando x=0 y corresponde al corte de la recta con el eje vertical.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Qué representa m?</summary>
  <div class="lesson-quiz__answer">
    La pendiente o razón de cambio Δy/Δx. Su interpretación física depende de las magnitudes representadas en los ejes.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Cuándo y=mx+b es una proporcionalidad directa?</summary>
  <div class="lesson-quiz__answer">
    Cuando b=0, de modo que y=mx y la recta pasa por el origen.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. En x(t)=x₀+vt, ¿qué representan pendiente y ordenada?</summary>
  <div class="lesson-quiz__answer">
    La pendiente representa la velocidad v y la ordenada al origen representa la posición inicial x₀.
  </div>
</details>

---

## 48. Resumen

- Una función asigna una salida a cada entrada permitida.
- y=f(x) expresa dependencia entre variables.
- Las relaciones de primer grado se representan mediante rectas.
- En y=mx+b, m es la pendiente y b la ordenada al origen.
- La pendiente es Δy/Δx.
- Si m>0 la recta es creciente; si m<0 es decreciente; si m=0 es constante.
- y=mx representa proporcionalidad directa y pasa por el origen.
- En sentido estricto y=mx es lineal y y=mx+b es afín, aunque en la escuela suele llamarse lineal a ambas.
- En MRU, x(t)=x₀+vt es una función afín del tiempo.
- La pendiente del gráfico posición-tiempo es la velocidad.
- La ordenada es la posición inicial.
- La pendiente puede tener unidades y significado físico.
- Intersecciones de rectas equivalen a soluciones de sistemas.
- Un modelo lineal puede tener un dominio de validez limitado.
- Interpolar y extrapolar no son lo mismo.

---

## 49. Siguiente tema recomendado

**M-10 — Función cuadrática**

Estudiaremos relaciones donde aparece:

<div class="formula-panel">
  <span class="formula-panel__label">Cuadrática</span>
  <div class="formula-panel__formula">y = ax² + bx + c</div>
</div>

Esto permitirá comprender mejor:

- MRUV;
- caída libre;
- tiro parabólico;
- máximos y mínimos;
- parábolas.
