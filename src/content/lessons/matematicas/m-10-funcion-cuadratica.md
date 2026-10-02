---
title: "Función cuadrática"
description: "Cómo interpretar funciones de la forma y = ax² + bx + c, reconocer parábolas, vértice, eje de simetría, raíces y conexiones con MRUV, caída libre y tiro parabólico."
slug: "funcion-cuadratica"

course: "matematicas"
module: "funciones-y-graficos"
order: 10

level: "intermedio"
cycle: "ambos"

yearsApprox: [3, 4, 5, 6]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - funcion-lineal
  - potencias-y-raices

skills:
  - funcion-cuadratica
  - parabola
  - coeficiente-cuadratico
  - concavidad
  - vertice
  - eje-de-simetria
  - raices
  - discriminante
  - forma-factorizada
  - forma-canonica
  - maximo-y-minimo
  - modelizacion-cuadratica
  - mruv
  - tiro-parabolico

hasExercises: true
hasQuiz: true
hasExperiment: false

deepening: false
status: "complete"
---

## Una aceleración constante produce una posición que ya no es una recta

En MRU vimos:

<div class="formula-panel">
  <span class="formula-panel__label">MRU</span>
  <div class="formula-panel__formula">x(t) = x<sub>0</sub> + vt</div>
</div>

La posición depende linealmente del tiempo.

Pero con aceleración constante:

<div class="formula-panel">
  <span class="formula-panel__label">MRUV</span>
  <div class="formula-panel__formula">x(t) = x<sub>0</sub> + v<sub>0</sub>t + ½at²</div>
</div>

aparece:

**t²**

La gráfica posición-tiempo deja de ser una recta y pasa a ser una:

**parábola**

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Una función cuadrática no cambia a una tasa constante. Su pendiente cambia con x. Por eso es adecuada para modelar procesos como el movimiento uniformemente acelerado, donde la velocidad cambia con el tiempo.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar este repaso deberías poder:

- reconocer una función cuadrática;
- identificar los coeficientes a, b y c;
- interpretar la parábola;
- determinar concavidad;
- identificar el corte con el eje y;
- hallar raíces en casos sencillos;
- interpretar cantidad de raíces reales;
- hallar eje de simetría;
- hallar vértice;
- distinguir forma general, factorizada y canónica;
- interpretar máximos y mínimos;
- relacionar una cuadrática con MRUV;
- relacionarla con caída libre y tiro vertical;
- reconocer una parábola en tiro oblicuo ideal;
- distinguir una parábola matemática de una trayectoria física real con resistencia del aire.

---

## 1. Forma general

Una función cuadrática tiene la forma:

<div class="formula-panel">
  <span class="formula-panel__label">Forma general</span>
  <div class="formula-panel__formula">y = ax² + bx + c</div>
</div>

con:

**a ≠ 0**

Si a = 0, desaparece el término cuadrático y queda una función de primer grado.

---

## 2. Los coeficientes

En:

**y = 2x² − 3x + 5**

tenemos:

- a = 2;
- b = −3;
- c = 5.

Cada coeficiente influye en:

- forma;
- posición;
- orientación de la parábola.

---

## 3. Gráfico: parábola

La gráfica de una función cuadrática es una:

**parábola**

Puede abrir:

- hacia arriba;
- hacia abajo.

---

## 4. Concavidad

El signo de a determina la orientación.

### Si a > 0

La parábola abre hacia arriba.

Tiene un:

- mínimo.

### Si a < 0

Abre hacia abajo.

Tiene un:

- máximo.

---

## 5. Ejemplos

### y = x²

Abre hacia arriba.

### y = −x²

Abre hacia abajo.

Ambas tienen vértice en:

**(0,0)**

---

## 6. El coeficiente a también afecta la apertura

Comparemos:

- y = x²;
- y = 4x²;
- y = 0,25x².

La de mayor |a| aparece:

- más estrecha.

La de menor |a|:

- más abierta.

Esto es una descripción geométrica útil.

---

## 7. Corte con el eje y

Si ponemos:

**x = 0**

en:

**y = ax² + bx + c**

obtenemos:

<div class="formula-panel">
  <span class="formula-panel__label">Ordenada al origen</span>
  <div class="formula-panel__formula">y(0) = c</div>
</div>

Por lo tanto la parábola corta el eje vertical en:

**(0,c)**

---

## 8. Raíces

Las raíces son los valores de x para los que:

<div class="formula-panel">
  <span class="formula-panel__label">Raíces</span>
  <div class="formula-panel__formula">ax² + bx + c = 0</div>
</div>

Gráficamente corresponden a:

- cortes con el eje x.

---

## 9. Ejemplo factorizable

<div class="formula-panel">
  <span class="formula-panel__label">Función</span>
  <div class="formula-panel__formula">y = x² − 5x + 6</div>
</div>

Factorizamos:

<div class="formula-panel">
  <span class="formula-panel__label">Factorizada</span>
  <div class="formula-panel__formula">y = (x − 2)(x − 3)</div>
</div>

Las raíces son:

- x = 2;
- x = 3.

---

## 10. Forma factorizada

Si las raíces reales son x<sub>1</sub> y x<sub>2</sub>:

<div class="formula-panel">
  <span class="formula-panel__label">Forma factorizada</span>
  <div class="formula-panel__formula">y = a(x − x<sub>1</sub>)(x − x<sub>2</sub>)</div>
</div>

Esta forma hace visibles:

- los ceros.

---

## 11. Fórmula general de las raíces

Para:

**ax² + bx + c = 0**

<div class="formula-panel">
  <span class="formula-panel__label">Fórmula cuadrática</span>
  <div class="formula-panel__formula">x = [−b ± √(b² − 4ac)]/(2a)</div>
</div>

---

## 12. Discriminante

La expresión:

<div class="formula-panel">
  <span class="formula-panel__label">Discriminante</span>
  <div class="formula-panel__formula">Δ = b² − 4ac</div>
</div>

indica cuántas raíces reales existen.

---

## 13. Tres casos del discriminante

### Δ > 0

Dos raíces reales distintas.

### Δ = 0

Una raíz real doble.

### Δ < 0

No hay raíces reales.

La parábola no corta el eje x.

---

## 14. Ejemplo con Δ

Para:

**x² + 2x + 5 = 0**

tenemos:

- a = 1;
- b = 2;
- c = 5.

Entonces:

**Δ = 4 − 20 = −16**

No existen:

- raíces reales.

---

## 15. Eje de simetría

Toda parábola vertical tiene un eje de simetría:

<div class="formula-panel">
  <span class="formula-panel__label">Eje</span>
  <div class="formula-panel__formula">x = −b/(2a)</div>
</div>

Ese valor de x corresponde a:

- la coordenada horizontal del vértice.

---

## 16. Vértice

El vértice es el punto donde la función alcanza:

- un mínimo si a > 0;
- un máximo si a < 0.

Su coordenada horizontal es:

<div class="formula-panel">
  <span class="formula-panel__label">Vértice</span>
  <div class="formula-panel__formula">x<sub>v</sub> = −b/(2a)</div>
</div>

Luego:

<div class="formula-panel">
  <span class="formula-panel__label">Altura del vértice</span>
  <div class="formula-panel__formula">y<sub>v</sub> = f(x<sub>v</sub>)</div>
</div>

---

## 17. Ejemplo de vértice

Para:

**y = x² − 4x + 3**

tenemos:

**x<sub>v</sub> = 4/2 = 2**

Evaluamos:

**y(2) = 4 − 8 + 3 = −1**

Vértice:

**(2,−1)**

---

## 18. Forma canónica

Una cuadrática también puede escribirse:

<div class="formula-panel">
  <span class="formula-panel__label">Forma canónica</span>
  <div class="formula-panel__formula">y = a(x − h)² + k</div>
</div>

El vértice es directamente:

**(h,k)**

---

## 19. Interpretar la forma canónica

En:

**y = 2(x − 3)² + 5**

el vértice es:

- h = 3;
- k = 5.

Como a = 2 > 0:

- es un mínimo.

---

## 20. Completar cuadrados — profundización

Podemos transformar la forma general en canónica.

Ejemplo:

**x² − 4x + 3**

agregamos y quitamos 4:

**x² − 4x + 4 − 1**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Canónica</span>
  <div class="formula-panel__formula">y = (x − 2)² − 1</div>
</div>

El vértice queda visible.

---

## 21. Máximo y mínimo

El vértice tiene gran importancia física.

Ejemplos:

- altura máxima de un proyectil;
- tiempo de máximo;
- mínimo de una energía idealizada;
- máximo de una magnitud modelada cuadráticamente.

---

## 22. MRUV como función cuadrática

En:

<div class="formula-panel">
  <span class="formula-panel__label">MRUV</span>
  <div class="formula-panel__formula">x(t) = x<sub>0</sub> + v<sub>0</sub>t + ½at²</div>
</div>

comparando con:

**y = at² + bt + c**

tenemos:

- coeficiente cuadrático ↔ ½a física;
- coeficiente lineal ↔ v<sub>0</sub>;
- término independiente ↔ x<sub>0</sub>.

---

## 23. Cuidado con la letra a

En una función cuadrática usamos:

**a**

para el coeficiente de x².

En cinemática también usamos:

**a**

para aceleración.

No son necesariamente la misma letra conceptual.

En:

**x(t)=x<sub>0</sub>+v<sub>0</sub>t+½at²**

el coeficiente matemático del término t² es:

**½a**

---

## 24. Caída libre

Si elegimos eje vertical positivo hacia arriba:

<div class="formula-panel">
  <span class="formula-panel__label">Movimiento vertical</span>
  <div class="formula-panel__formula">y(t) = y<sub>0</sub> + v<sub>0</sub>t − ½gt²</div>
</div>

El coeficiente cuadrático es:

- negativo.

Por eso la parábola y(t) abre:

- hacia abajo.

---

## 25. Altura máxima

En un tiro vertical hacia arriba, la altura máxima ocurre en el:

- vértice de y(t).

El tiempo del vértice puede hallarse con:

<div class="formula-panel">
  <span class="formula-panel__label">Tiempo de máximo</span>
  <div class="formula-panel__formula">t<sub>v</sub> = −b/(2a<sub>mat</sub>)</div>
</div>

donde a<sub>mat</sub> es el coeficiente cuadrático matemático.

---

## 26. Derivación directa para tiro vertical

Para:

**y(t)=y<sub>0</sub>+v<sub>0</sub>t−½gt²**

tenemos:

- a<sub>mat</sub> = −g/2;
- b = v<sub>0</sub>.

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Máximo</span>
  <div class="formula-panel__formula">t<sub>máx</sub> = v<sub>0</sub>/g</div>
</div>

coincidiendo con la condición física:

**v = 0**

en la cima.

---

## 27. Tiro oblicuo

Sin resistencia del aire y con gravedad uniforme, la trayectoria puede escribirse:

<div class="formula-panel">
  <span class="formula-panel__label">Trayectoria ideal</span>
  <div class="formula-panel__formula">y(x) = y<sub>0</sub> + x tanθ − [g x²/(2v<sub>0</sub>² cos²θ)]</div>
</div>

Es una función cuadrática de:

- x.

Por eso la trayectoria ideal es:

- parabólica.

---

## 28. La trayectoria real puede no ser una parábola exacta

Con resistencia del aire:

- la aceleración ya no es simplemente constante;
- la trayectoria deja de ser una parábola ideal.

El modelo cuadrático tiene un:

- dominio de validez.

---

## 29. Tabla de valores

Para:

**y = x² − 4x + 3**

| x | y |
| ---: | ---: |
| 0 | 3 |
| 1 | 0 |
| 2 | −1 |
| 3 | 0 |
| 4 | 3 |

Se observa la simetría alrededor de:

**x = 2**

---

## 30. Simetría

Si el eje es:

**x = h**

entonces valores equidistantes de h tienen:

- la misma y.

Ejemplo:

- x = h−1;
- x = h+1.

Esto es útil para:

- construir gráficos.

---

## 31. Construcción rápida de una parábola

1. identificá a, b, c;
2. determiná concavidad;
3. hallá eje;
4. hallá vértice;
5. buscá raíces si existen;
6. ubicá corte con eje y;
7. agregá puntos simétricos.

---

## 32. Una raíz no es el vértice

Las raíces indican:

- y = 0.

El vértice indica:

- máximo o mínimo.

Pueden coincidir sólo en un caso especial:

- raíz doble.

---

## 33. Raíz doble

Si:

**Δ = 0**

la parábola toca el eje x exactamente en el vértice.

Ejemplo:

**y = (x−2)²**

Raíz doble:

**x = 2**

Vértice:

**(2,0)**

---

## 34. Interpretación de signos

Si a > 0 y el vértice está debajo del eje x:

- puede haber dos raíces.

Si a > 0 y el vértice está sobre el eje x:

- no hay raíces reales.

La geometría ayuda a anticipar:

- el discriminante.

---

## 35. Unidades en una cuadrática física

En:

**x(t)=x<sub>0</sub>+v<sub>0</sub>t+½at²**

todos los términos deben tener unidad:

**m**

porque:

- x<sub>0</sub>: m;
- v<sub>0</sub>t: (m/s)s = m;
- at²: (m/s²)s² = m.

---

## 36. El coeficiente cuadrático tiene unidades

En una función abstracta y = ax²+bx+c, las unidades de a dependen de:

- unidades de x;
- unidades de y.

No es correcto asumir que a es:

- adimensional.

---

## 37. Error frecuente: confundir el signo del coeficiente físico

En caída libre con eje positivo hacia arriba:

- aceleración = −g.

Con eje positivo hacia abajo:

- aceleración = +g.

La parábola depende de la:

- convención de signos.

---

## 38. Error frecuente: una parábola no implica necesariamente movimiento parabólico

Un gráfico:

**posición vertical vs. tiempo**

puede ser parabólico.

Eso no significa que la trayectoria en el espacio sea una parábola.

Hay que distinguir:

- gráfico de una magnitud contra otra;
- trayectoria geométrica.

---

## 39. Ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Reconocimiento</strong>
  </div>
  <ol>
    <li>Identificá a, b y c en y=3x²−2x+7.</li>
    <li>Decidí la concavidad de y=−4x²+x+1.</li>
    <li>Hallá el corte con el eje y de y=2x²−5x+6.</li>
    <li>Indicá si y=5x+2 es cuadrática.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Raíces y vértice</strong>
  </div>
  <ol>
    <li>Hallá las raíces de x²−5x+6.</li>
    <li>Hallá el vértice de x²−4x+3.</li>
    <li>Hallá el discriminante de x²+2x+5.</li>
    <li>Clasificá la cantidad de raíces reales.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Formas de la cuadrática</strong>
  </div>
  <ol>
    <li>Expandí y=(x−2)(x−5).</li>
    <li>Interpretá el vértice de y=3(x−4)²+2.</li>
    <li>Transformá x²−6x+5 a forma canónica completando cuadrados.</li>
    <li>Construí una tabla simétrica alrededor del vértice.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Física</strong>
  </div>
  <ol>
    <li>En x(t)=2+3t+4t², identificá posición inicial, velocidad inicial y aceleración.</li>
    <li>Para y(t)=20t−5t², hallá el tiempo del máximo.</li>
    <li>Hallá la altura máxima del caso anterior.</li>
    <li>Explicá por qué y(t) parabólica no implica que el objeto siga una trayectoria espacial parabólica.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Derivá x<sub>v</sub>=−b/(2a) completando cuadrados.</li>
    <li>Relacioná el signo del discriminante con la posición del vértice respecto del eje x.</li>
    <li>Mostrá por sustitución que la trayectoria ideal del tiro oblicuo es cuadrática en x.</li>
  </ol>
</div>

---

## 40. Ejemplo integrado

Un objeto es lanzado verticalmente y su altura idealizada es:

<div class="formula-panel">
  <span class="formula-panel__label">Altura</span>
  <div class="formula-panel__formula">y(t) = 20t − 5t²</div>
</div>

Reordenando:

**y(t)=−5t²+20t**

Entonces:

- a = −5;
- b = 20;
- c = 0.

### Tiempo del vértice

<div class="formula-panel">
  <span class="formula-panel__label">Tiempo</span>
  <div class="formula-panel__formula">t<sub>v</sub> = −20/(2·−5) = 2 s</div>
</div>

### Altura máxima

**y(2)=40−20=20 m**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>El vértice adquiere significado físico</h3>
  <div class="worked-example-card__steps">
    <p>La parábola abre hacia abajo porque el coeficiente cuadrático es negativo.</p>
    <p>El vértice ocurre en t=2 s.</p>
    <p>La altura máxima es 20 m.</p>
    <p><strong>La geometría de una función cuadrática permite leer un máximo físico.</strong></p>
  </div>
</div>

---

## 41. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Qué determina el signo de a?</summary>
  <div class="lesson-quiz__answer">
    Determina la concavidad: a&gt;0 abre hacia arriba y a&lt;0 abre hacia abajo.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Qué representa el discriminante?</summary>
  <div class="lesson-quiz__answer">
    Δ=b²−4ac permite determinar si la ecuación cuadrática tiene dos, una o ninguna raíz real.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Qué representa el vértice?</summary>
  <div class="lesson-quiz__answer">
    Es el punto de máximo o mínimo de la parábola, según la concavidad.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Por qué aparece una cuadrática en MRUV?</summary>
  <div class="lesson-quiz__answer">
    Porque con aceleración constante la posición contiene un término proporcional a t².
  </div>
</details>

---

## 42. Resumen

- Una función cuadrática tiene forma y=ax²+bx+c con a≠0.
- Su gráfico es una parábola.
- El signo de a determina la concavidad.
- c es el valor de y cuando x=0.
- Las raíces son los cortes con el eje x.
- El discriminante Δ=b²−4ac indica la cantidad de raíces reales.
- El eje de simetría es x=−b/(2a).
- El vértice representa un máximo o mínimo.
- La forma canónica hace visible el vértice.
- La forma factorizada hace visibles las raíces.
- MRUV produce una función cuadrática de t.
- En tiro vertical, el vértice puede representar altura máxima.
- En tiro oblicuo ideal, la trayectoria y(x) es parabólica.
- Todo modelo cuadrático físico tiene un dominio de validez.

---

## 43. Siguiente tema recomendado

**M-11 — Interpretación de gráficos**

Ahora ampliaremos la mirada:

- ejes;
- escalas;
- unidades;
- tendencias;
- máximos;
- mínimos;
- pendientes;
- áreas;
- lectura física.

La meta será no sólo “ver una curva”, sino extraer correctamente la información que contiene.
