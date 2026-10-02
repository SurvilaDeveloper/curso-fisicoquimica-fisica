---
title: "Teorema de Pitágoras"
description: "Cómo relacionar los lados de un triángulo rectángulo y usar Pitágoras para calcular distancias, módulos, diagonales y resultantes en problemas de Física."
slug: "teorema-de-pitagoras"

course: "matematicas"
module: "geometria-y-vectores"
order: 13

level: "basico"
cycle: "ambos"

yearsApprox: [2, 3, 4, 5, 6]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - potencias-y-raices

skills:
  - triangulo-rectangulo
  - hipotenusa
  - catetos
  - teorema-de-pitagoras
  - distancia-en-el-plano
  - diagonal
  - modulo-de-un-vector
  - resultante-perpendicular
  - verificacion-geometrica

hasExercises: true
hasQuiz: true
hasExperiment: false

deepening: false
status: "complete"
---

## Dos desplazamientos perpendiculares producen una distancia que no se obtiene sumando

Una persona camina:

- 3 m hacia el este;
- después 4 m hacia el norte.

La distancia recorrida es:

**7 m**

Pero el desplazamiento directo desde el punto inicial hasta el final no mide 7 m.

Los dos tramos forman los catetos de un triángulo rectángulo.

El desplazamiento neto es la hipotenusa:

<div class="formula-panel">
  <span class="formula-panel__label">Pitágoras</span>
  <div class="formula-panel__formula">R = √(3² + 4²) = 5 m</div>
</div>

Esta diferencia entre camino recorrido y distancia directa aparece constantemente en Física.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>El teorema de Pitágoras sólo relaciona lados de un triángulo rectángulo. En Física es especialmente útil cuando dos componentes son perpendiculares entre sí.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar este repaso deberías poder:

- reconocer un triángulo rectángulo;
- identificar hipotenusa y catetos;
- aplicar el teorema de Pitágoras;
- despejar un cateto;
- estimar si un resultado es razonable;
- distinguir distancia recorrida de desplazamiento;
- calcular diagonales;
- calcular distancia entre dos puntos;
- hallar el módulo de un vector a partir de componentes perpendiculares;
- calcular resultantes de magnitudes perpendiculares;
- reconocer cuándo Pitágoras no puede aplicarse directamente.

---

## 1. Triángulo rectángulo

Un triángulo rectángulo posee un ángulo de:

**90°**

Los dos lados que forman ese ángulo se llaman:

- catetos.

El lado opuesto al ángulo recto se llama:

- hipotenusa.

---

## 2. La hipotenusa

En un triángulo rectángulo, la hipotenusa:

- es el lado opuesto al ángulo de 90°;
- es el lado de mayor longitud.

Esto permite detectar errores antes de calcular.

---

## 3. Teorema de Pitágoras

Si los catetos son a y b y la hipotenusa es c:

<div class="formula-panel">
  <span class="formula-panel__label">Teorema</span>
  <div class="formula-panel__formula">c² = a² + b²</div>
</div>

---

## 4. Hallar la hipotenusa

Despejando c:

<div class="formula-panel">
  <span class="formula-panel__label">Hipotenusa</span>
  <div class="formula-panel__formula">c = √(a² + b²)</div>
</div>

Tomamos la raíz no negativa porque una longitud no puede ser negativa.

---

## 5. Ejemplo 3-4-5

Si:

- a = 3;
- b = 4;

entonces:

**c² = 9 + 16 = 25**

por lo tanto:

**c = 5**

---

## 6. Despejar un cateto

De:

**c² = a² + b²**

podemos despejar:

<div class="formula-panel">
  <span class="formula-panel__label">Cateto</span>
  <div class="formula-panel__formula">a = √(c² − b²)</div>
</div>

si c es realmente la hipotenusa.

---

## 7. Ejemplo de cateto

Hipotenusa:

**13 m**

Cateto conocido:

**5 m**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Cálculo</span>
  <div class="formula-panel__formula">a = √(13² − 5²) = √144 = 12 m</div>
</div>

---

## 8. Chequeo rápido

Si la hipotenusa mide:

**10 m**

ningún cateto puede medir 12 m.

La geometría nos permite detectar un dato incompatible.

---

## 9. Pitágoras no es a+b=c

Con catetos 3 y 4:

- a+b = 7;
- c = 5.

El teorema relaciona cuadrados, no longitudes mediante suma directa.

---

## 10. Por qué aparece el cuadrado

Geométricamente, el teorema puede interpretarse como:

> el área del cuadrado construido sobre la hipotenusa es igual a la suma de las áreas de los cuadrados construidos sobre los catetos.

Por eso aparecen:

**a², b² y c²**

---

## 11. Una demostración por áreas — idea

Podemos construir un cuadrado grande de lado a+b y acomodar dentro cuatro triángulos rectángulos iguales.

El área restante puede expresarse de dos formas y conduce a:

<div class="formula-panel">
  <span class="formula-panel__label">Resultado</span>
  <div class="formula-panel__formula">c² = a² + b²</div>
</div>

Existen muchas demostraciones del teorema.

---

## 12. Distancia entre dos puntos

Dados:

- A(x<sub>1</sub>, y<sub>1</sub>);
- B(x<sub>2</sub>, y<sub>2</sub>);

los cambios horizontal y vertical son:

<div class="formula-panel">
  <span class="formula-panel__label">Cambios</span>
  <div class="formula-panel__formula">Δx = x<sub>2</sub> − x<sub>1</sub>, Δy = y<sub>2</sub> − y<sub>1</sub></div>
</div>

---

## 13. Fórmula de distancia

Como Δx y Δy son perpendiculares:

<div class="formula-panel">
  <span class="formula-panel__label">Distancia</span>
  <div class="formula-panel__formula">d = √[(Δx)² + (Δy)²]</div>
</div>

---

## 14. Ejemplo en el plano

A = (1,2)

B = (5,5)

Entonces:

- Δx = 4;
- Δy = 3.

Por Pitágoras:

**d = 5**

---

## 15. El signo desaparece al elevar al cuadrado

Si:

**Δx = −4**

entonces:

**(Δx)² = 16**

La distancia final sigue siendo positiva.

Pero el signo de Δx sí conserva información sobre dirección y no debe perderse antes de tiempo si estamos trabajando con vectores.

---

## 16. Distancia recorrida y desplazamiento

Volvamos al recorrido:

- 3 m al este;
- 4 m al norte.

### Distancia recorrida

**3 + 4 = 7 m**

### Módulo del desplazamiento

**5 m**

No son la misma magnitud.

---

## 17. Componentes perpendiculares

Supongamos un vector con componentes:

- A<sub>x</sub> = 6 N;
- A<sub>y</sub> = 8 N.

Su módulo es:

<div class="formula-panel">
  <span class="formula-panel__label">Módulo</span>
  <div class="formula-panel__formula">A = √(A<sub>x</sub>² + A<sub>y</sub>²) = 10 N</div>
</div>

---

## 18. Por qué funciona con vectores cartesianos

Los ejes x e y son perpendiculares.

Por eso las componentes forman un triángulo rectángulo.

M-15 desarrollará esta idea en profundidad.

---

## 19. Resultante de fuerzas perpendiculares

Dos fuerzas:

- F<sub>x</sub> = 30 N;
- F<sub>y</sub> = 40 N.

Si son perpendiculares:

<div class="formula-panel">
  <span class="formula-panel__label">Resultante</span>
  <div class="formula-panel__formula">F = √(30² + 40²) = 50 N</div>
</div>

---

## 20. No alcanza con conocer dos magnitudes

Si dos fuerzas miden 30 N y 40 N pero forman un ángulo distinto de 90°, no podemos usar directamente √(30²+40²).

Pitágoras exige perpendicularidad.

---

## 21. Caso general — anticipo

Si dos vectores forman un ángulo θ cualquiera, aparece la ley de cosenos:

<div class="formula-panel">
  <span class="formula-panel__label">Caso general</span>
  <div class="formula-panel__formula">R² = A² + B² + 2AB cosθ</div>
</div>

Cuando θ = 90°:

**cos90° = 0**

y recuperamos Pitágoras.

---

## 22. Diagonal de un rectángulo

Para lados L y H:

<div class="formula-panel">
  <span class="formula-panel__label">Diagonal</span>
  <div class="formula-panel__formula">d = √(L² + H²)</div>
</div>

---

## 23. Diagonal de un cuadrado

Si ambos lados valen L:

<div class="formula-panel">
  <span class="formula-panel__label">Cuadrado</span>
  <div class="formula-panel__formula">d = √(L² + L²) = L√2</div>
</div>

---

## 24. Espacio tridimensional — profundización

En tres dimensiones, con componentes perpendiculares Δx, Δy y Δz, podemos aplicar Pitágoras dos veces:

<div class="formula-panel">
  <span class="formula-panel__label">Distancia 3D</span>
  <div class="formula-panel__formula">d = √[(Δx)² + (Δy)² + (Δz)²]</div>
</div>

---

## 25. Módulo de un vector 3D

Para un vector **A**:

<div class="formula-panel">
  <span class="formula-panel__label">Módulo</span>
  <div class="formula-panel__formula">A = √(A<sub>x</sub>² + A<sub>y</sub>² + A<sub>z</sub>²)</div>
</div>

---

## 26. Unidades

Si los catetos están en metros, la expresión a²+b² tiene unidad m² y al aplicar la raíz vuelve a m.

---

## 27. Chequeo dimensional

<div class="formula-panel">
  <span class="formula-panel__label">Unidades</span>
  <div class="formula-panel__formula">√(m² + m²) → m</div>
</div>

Sólo podemos sumar dentro de la raíz cantidades con las mismas unidades.

---

## 28. Ejemplo físico: velocidad

Un objeto tiene:

- v<sub>x</sub> = 12 m/s;
- v<sub>y</sub> = 5 m/s.

Rapidez:

<div class="formula-panel">
  <span class="formula-panel__label">Rapidez</span>
  <div class="formula-panel__formula">v = √(12² + 5²) = 13 m/s</div>
</div>

---

## 29. Ejemplo físico: campo eléctrico

Si en un punto:

- E<sub>x</sub> = 3 N/C;
- E<sub>y</sub> = −4 N/C;

el módulo es:

<div class="formula-panel">
  <span class="formula-panel__label">Campo</span>
  <div class="formula-panel__formula">E = √(3² + (−4)²) = 5 N/C</div>
</div>

El signo de E<sub>y</sub> afecta la dirección, no el módulo final.

---

## 30. Triángulos pitagóricos

Algunas ternas enteras cumplen a²+b²=c².

Ejemplos:

- 3, 4, 5;
- 5, 12, 13;
- 8, 15, 17.

Son útiles para estimaciones y ejercicios mentales.

---

## 31. Pitágoras inverso

Si tres longitudes cumplen c²=a²+b², con c como lado mayor, entonces el triángulo es rectángulo.

---

## 32. Ejemplo de verificación

Lados:

- 6;
- 8;
- 10.

Comprobamos:

**6²+8²=36+64=100=10²**

Por lo tanto forman un triángulo rectángulo.

---

## 33. Estimar antes de calcular

Si los catetos son 6 y 8, la hipotenusa debe ser:

- mayor que 8;
- menor que 14.

Un resultado de 5 o 20 sería inmediatamente sospechoso.

---

## 34. Error frecuente: sumar módulos

Dos componentes perpendiculares de 6 y 8 no producen módulo 14 sino 10.

La suma 14 correspondería a longitud total de dos tramos, no a la diagonal.

---

## 35. Error frecuente: usar la hipotenusa equivocada

La hipotenusa siempre es el lado opuesto al ángulo recto y el lado mayor.

No depende de cómo dibujemos el triángulo en la página.

---

## 36. Error frecuente: restar cuadrados sin saber qué lado buscamos

Para hallar un cateto:

**a²=c²−b²**

pero para hallar la hipotenusa:

**c²=a²+b²**

Confundirlos puede producir raíces imposibles o resultados menores que los catetos.

---

## 37. Error frecuente: aplicar Pitágoras a cualquier triángulo

No.

Sólo directamente a triángulos rectángulos.

Para ángulos generales se necesitan otras herramientas.

---

## 38. Ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Reconocimiento</strong>
  </div>
  <ol>
    <li>Identificá hipotenusa y catetos en un triángulo rectángulo.</li>
    <li>Calculá la hipotenusa para catetos 6 y 8.</li>
    <li>Calculá un cateto si c=13 y b=5.</li>
    <li>Verificá si 8,15,17 forman un triángulo rectángulo.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Geometría</strong>
  </div>
  <ol>
    <li>Hallá la diagonal de un rectángulo de 9 m por 12 m.</li>
    <li>Hallá la diagonal de un cuadrado de lado 5 m.</li>
    <li>Hallá la distancia entre A(2,1) y B(8,9).</li>
    <li>Explicá por qué la distancia nunca sale negativa.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Física</strong>
  </div>
  <ol>
    <li>Un desplazamiento tiene componentes 7 m y 24 m. Hallá su módulo.</li>
    <li>Una velocidad tiene v<sub>x</sub>=9 m/s y v<sub>y</sub>=12 m/s. Hallá la rapidez.</li>
    <li>Dos fuerzas perpendiculares valen 20 N y 21 N. Hallá la resultante.</li>
    <li>Explicá por qué el método deja de ser válido si las fuerzas no son perpendiculares.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Integración</strong>
  </div>
  <ol>
    <li>Un móvil se desplaza 30 m al este y 40 m al sur. Compará distancia recorrida y módulo del desplazamiento.</li>
    <li>Un campo tiene E<sub>x</sub>=−5 N/C y E<sub>y</sub>=12 N/C. Hallá su módulo.</li>
    <li>Una caja rectangular mide 2 m, 3 m y 6 m. Hallá la diagonal espacial.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Demostrá la fórmula de distancia en el plano a partir de Pitágoras.</li>
    <li>Mostrá cómo aplicar Pitágoras dos veces conduce a la fórmula de distancia tridimensional.</li>
    <li>Explicá por qué el módulo de un vector es independiente del signo individual de sus componentes pero la dirección no.</li>
  </ol>
</div>

---

## 39. Ejemplo integrado

Un avión posee una velocidad respecto del aire con componentes:

- v<sub>x</sub> = 180 km/h;
- v<sub>y</sub> = 240 km/h.

Como las componentes son perpendiculares:

<div class="formula-panel">
  <span class="formula-panel__label">Módulo</span>
  <div class="formula-panel__formula">v = √(180² + 240²)</div>
</div>

Factorizando 60:

**v = 60√(3²+4²)**

**v = 60·5**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>Las componentes reconstruyen el módulo</h3>
  <div class="worked-example-card__steps">
    <p>Las direcciones x e y son perpendiculares.</p>
    <p>Aplicamos Pitágoras.</p>
    <p>v = 300 km/h.</p>
    <p><strong>El módulo es una sola magnitud positiva; las componentes conservan la información direccional.</strong></p>
  </div>
</div>

---

## 40. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Cuándo puede aplicarse directamente Pitágoras?</summary>
  <div class="lesson-quiz__answer">
    Cuando los tres lados forman un triángulo rectángulo, es decir, cuando los catetos son perpendiculares.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Cuál es la hipotenusa?</summary>
  <div class="lesson-quiz__answer">
    El lado opuesto al ángulo de 90° y el de mayor longitud en un triángulo rectángulo.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Por qué el módulo de un vector con componentes x e y puede hallarse por Pitágoras?</summary>
  <div class="lesson-quiz__answer">
    Porque los ejes cartesianos x e y son perpendiculares y las componentes forman los catetos de un triángulo rectángulo cuyo vector es la hipotenusa.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Distancia recorrida y módulo del desplazamiento son siempre iguales?</summary>
  <div class="lesson-quiz__answer">
    No. Sólo coinciden en recorridos particulares; si hay cambios de dirección, la distancia recorrida suele ser mayor.
  </div>
</details>

---

## 41. Resumen

- El teorema de Pitágoras se aplica a triángulos rectángulos.
- c²=a²+b², donde c es la hipotenusa.
- La hipotenusa es el lado opuesto al ángulo de 90° y el mayor.
- Para hallar un cateto se resta el cuadrado del otro cateto al cuadrado de la hipotenusa.
- La fórmula de distancia en el plano deriva de Pitágoras.
- Componentes cartesianas perpendiculares permiten calcular módulos mediante Pitágoras.
- El módulo de un vector 2D es √(A<sub>x</sub>²+A<sub>y</sub>²).
- En 3D se agrega A<sub>z</sub>².
- Distancia recorrida y desplazamiento no son lo mismo.
- Las unidades también se elevan al cuadrado y luego vuelven mediante la raíz.
- Pitágoras no puede aplicarse directamente si el ángulo entre los lados no es 90°.

---

## 42. Siguiente tema recomendado

**M-14 — Trigonometría básica**

Pitágoras permite relacionar longitudes.

La trigonometría agregará ángulos, seno, coseno y tangente.

Con eso podremos pasar de módulo y dirección a componentes cartesianas.
