---
title: "Vectores y componentes"
description: "Cómo representar magnitudes vectoriales mediante módulo, dirección y sentido, descomponerlas en componentes cartesianas, sumar y restar vectores y usar producto escalar en Física."
slug: "vectores-y-componentes"

course: "matematicas"
module: "geometria-y-vectores"
order: 15

level: "intermedio"
cycle: "ambos"

yearsApprox: [3, 4, 5, 6]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - trigonometria-basica
  - teorema-de-pitagoras

skills:
  - escalar
  - vector
  - modulo
  - direccion
  - sentido
  - componentes-cartesianas
  - vector-unitario
  - suma-de-vectores
  - resta-de-vectores
  - resultante
  - modulo-desde-componentes
  - direccion-desde-componentes
  - producto-escalar
  - trabajo-vectorial
  - vectores-en-fisica

hasExercises: true
hasQuiz: true
hasExperiment: false

deepening: false
status: "complete"
---

## Dos velocidades de 10 m/s pueden representar movimientos completamente distintos

Un automóvil puede moverse 10 m/s hacia el este y otro 10 m/s hacia el oeste.

La rapidez es la misma.

Pero la velocidad no.

Para describir algunas magnitudes no alcanza con un número y una unidad.

Necesitamos además dirección y sentido.

Esas magnitudes se representan mediante vectores.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Un vector puede representarse mediante módulo y dirección o mediante componentes. Ambas descripciones contienen la misma información. Las componentes permiten convertir muchos problemas geométricos en operaciones algebraicas simples.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar este repaso deberías poder:

- distinguir magnitudes escalares y vectoriales;
- identificar módulo, dirección y sentido;
- representar un vector gráficamente;
- interpretar componentes cartesianas;
- obtener componentes a partir de módulo y ángulo;
- obtener módulo a partir de componentes;
- hallar una dirección a partir de componentes;
- sumar vectores gráficamente;
- sumar vectores por componentes;
- restar vectores;
- interpretar el vector opuesto;
- usar vectores unitarios como profundización;
- comprender el producto escalar;
- interpretar el producto escalar mediante el ángulo;
- reconocer aplicaciones en desplazamiento, velocidad, aceleración, fuerza y campos;
- evitar errores de signo y de cuadrante.

---

## 1. Magnitud escalar

Una magnitud escalar queda determinada mediante valor y unidad.

Ejemplos:

- masa;
- temperatura;
- energía;
- tiempo;
- rapidez.

---

## 2. Magnitud vectorial

Una magnitud vectorial requiere módulo, dirección y sentido.

Ejemplos:

- desplazamiento;
- velocidad;
- aceleración;
- fuerza;
- campo eléctrico;
- campo magnético.

---

## 3. Módulo

El módulo es el tamaño del vector.

Para un vector **A** escribiremos su módulo como A o, en otros textos, |A|.

Siempre es no negativo.

---

## 4. Dirección

La dirección indica la línea geométrica de acción.

Puede describirse mediante un ángulo, un eje o una orientación espacial.

---

## 5. Sentido

Sobre una misma dirección puede haber dos sentidos opuestos.

Ejemplo horizontal:

- este;
- oeste.

En un eje x:

- +x;
- −x.

---

## 6. Representación con una flecha

Una flecha vectorial muestra:

- longitud proporcional al módulo;
- orientación;
- punta indicando sentido.

En un dibujo, un vector libre puede trasladarse paralelamente sin cambiar módulo, dirección ni sentido.

---

## 7. Vector y punto de aplicación

En matemática elemental un vector libre puede trasladarse.

En Física, algunas magnitudes —como una fuerza sobre un cuerpo rígido— pueden requerir además considerar punto de aplicación y línea de acción porque pueden producir torque.

---

## 8. Ejes cartesianos

Trabajaremos con ejes x horizontal e y vertical, perpendiculares.

Un vector puede escribirse mediante componentes:

<div class="formula-panel">
  <span class="formula-panel__label">Componentes</span>
  <div class="formula-panel__formula"><strong>A</strong> ↔ (A<sub>x</sub>, A<sub>y</sub>)</div>
</div>

---

## 9. Qué significa A<sub>x</sub>

A<sub>x</sub> indica cuánto del vector apunta a lo largo del eje x.

Puede ser positivo, negativo o cero.

---

## 10. Qué significa A<sub>y</sub>

A<sub>y</sub> indica cuánto del vector apunta a lo largo del eje y.

También puede ser positivo, negativo o cero.

---

## 11. Componentes desde módulo y ángulo

Si θ se mide desde +x:

<div class="formula-panel">
  <span class="formula-panel__label">Descomposición</span>
  <div class="formula-panel__formula">A<sub>x</sub> = A cosθ</div>
</div>

<div class="formula-panel">
  <span class="formula-panel__label">Descomposición</span>
  <div class="formula-panel__formula">A<sub>y</sub> = A senθ</div>
</div>

---

## 12. Signos según cuadrante

### I

A<sub>x</sub> > 0, A<sub>y</sub> > 0

### II

A<sub>x</sub> < 0, A<sub>y</sub> > 0

### III

A<sub>x</sub> < 0, A<sub>y</sub> < 0

### IV

A<sub>x</sub> > 0, A<sub>y</sub> < 0

---

## 13. Ejemplo en cuadrante I

A = 10 N

θ = 30°

<div class="formula-panel">
  <span class="formula-panel__label">Componentes</span>
  <div class="formula-panel__formula">A<sub>x</sub> = 10 cos30° ≈ 8,66 N</div>
</div>

<div class="formula-panel">
  <span class="formula-panel__label">Componentes</span>
  <div class="formula-panel__formula">A<sub>y</sub> = 10 sen30° = 5 N</div>
</div>

---

## 14. Módulo desde componentes

Por Pitágoras:

<div class="formula-panel">
  <span class="formula-panel__label">Módulo</span>
  <div class="formula-panel__formula">A = √(A<sub>x</sub>² + A<sub>y</sub>²)</div>
</div>

---

## 15. Dirección desde componentes

Cuando el cuadrante está controlado:

<div class="formula-panel">
  <span class="formula-panel__label">Ángulo</span>
  <div class="formula-panel__formula">tanθ = A<sub>y</sub>/A<sub>x</sub></div>
</div>

y podemos usar arctan, signos y cuadrante.

---

## 16. Ejemplo con componentes negativas

Supongamos:

- A<sub>x</sub> = −3;
- A<sub>y</sub> = 4.

Módulo:

**A = 5**

El vector está en cuadrante II.

No podemos quedarnos sólo con arctan(4/−3) sin interpretar el cuadrante.

---

## 17. Vectores unitarios — profundización

Podemos representar direcciones básicas mediante:

- **i** en +x;
- **j** en +y;
- **k** en +z.

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Forma cartesiana</span>
  <div class="formula-panel__formula"><strong>A</strong> = A<sub>x</sub><strong>i</strong> + A<sub>y</sub><strong>j</strong></div>
</div>

En 3D:

<div class="formula-panel">
  <span class="formula-panel__label">Tres dimensiones</span>
  <div class="formula-panel__formula"><strong>A</strong> = A<sub>x</sub><strong>i</strong> + A<sub>y</sub><strong>j</strong> + A<sub>z</sub><strong>k</strong></div>
</div>

---

## 18. Suma gráfica cabeza-cola

Para sumar A+B:

1. dibujamos A;
2. dibujamos B comenzando en la punta de A;
3. resultante desde el inicio de A hasta la punta de B.

Este método muestra bien la geometría.

---

## 19. Regla del paralelogramo

Si A y B parten del mismo punto:

- completamos un paralelogramo;
- la diagonal representa A+B.

Es equivalente al método cabeza-cola.

---

## 20. Suma por componentes

Si:

<div class="formula-panel">
  <span class="formula-panel__label">Vectores</span>
  <div class="formula-panel__formula"><strong>A</strong> = (A<sub>x</sub>,A<sub>y</sub>), <strong>B</strong> = (B<sub>x</sub>,B<sub>y</sub>)</div>
</div>

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Suma</span>
  <div class="formula-panel__formula"><strong>R</strong> = (A<sub>x</sub>+B<sub>x</sub>, A<sub>y</sub>+B<sub>y</sub>)</div>
</div>

---

## 21. Ejemplo de suma

A = (3,4)

B = (−1,2)

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Resultante</span>
  <div class="formula-panel__formula"><strong>R</strong> = (2,6)</div>
</div>

Módulo:

<div class="formula-panel">
  <span class="formula-panel__label">Módulo</span>
  <div class="formula-panel__formula">R = √(2²+6²) = √40 ≈ 6,32</div>
</div>

---

## 22. La suma vectorial no es sumar módulos

En general:

<div class="formula-panel">
  <span class="formula-panel__label">Cuidado</span>
  <div class="formula-panel__formula">|<strong>A</strong>+<strong>B</strong>| ≠ A+B</div>
</div>

Sólo coincide en casos particulares, como vectores paralelos de mismo sentido.

---

## 23. Vector opuesto

El vector −A tiene mismo módulo, misma dirección y sentido opuesto.

En componentes:

<div class="formula-panel">
  <span class="formula-panel__label">Opuesto</span>
  <div class="formula-panel__formula">−<strong>A</strong> = (−A<sub>x</sub>, −A<sub>y</sub>)</div>
</div>

---

## 24. Resta vectorial

Definimos:

<div class="formula-panel">
  <span class="formula-panel__label">Resta</span>
  <div class="formula-panel__formula"><strong>A</strong>−<strong>B</strong> = <strong>A</strong> + (−<strong>B</strong>)</div>
</div>

Por componentes:

<div class="formula-panel">
  <span class="formula-panel__label">Componentes</span>
  <div class="formula-panel__formula">(A<sub>x</sub>−B<sub>x</sub>, A<sub>y</sub>−B<sub>y</sub>)</div>
</div>

---

## 25. Desplazamiento

Si una persona se mueve 5 m al este y 2 m al oeste, el desplazamiento neto horizontal es +3 m si elegimos este como +x.

La suma de distancias recorridas es 7 m.

---

## 26. Velocidad relativa — ejemplo

Si un tren se mueve +20 m/s y una persona camina dentro del tren +2 m/s respecto del tren, entonces en el modelo galileano:

**v = 22 m/s**

si ambos sentidos coinciden.

Si camina en sentido contrario:

**v = 18 m/s**

---

## 27. Fuerza resultante

La segunda ley usa la suma vectorial de fuerzas:

<div class="formula-panel">
  <span class="formula-panel__label">Newton</span>
  <div class="formula-panel__formula">Σ<strong>F</strong> = m<strong>a</strong></div>
</div>

Por componentes:

<div class="formula-panel">
  <span class="formula-panel__label">Eje x</span>
  <div class="formula-panel__formula">ΣF<sub>x</sub> = ma<sub>x</sub></div>
</div>

<div class="formula-panel">
  <span class="formula-panel__label">Eje y</span>
  <div class="formula-panel__formula">ΣF<sub>y</sub> = ma<sub>y</sub></div>
</div>

---

## 28. Por qué las componentes simplifican la dinámica

Una ecuación vectorial puede separarse en una ecuación para x y otra para y.

Eso transforma un problema geométrico en álgebra.

---

## 29. Ejemplo de resultante de fuerzas

Fuerza 1:

- (10 N, 0)

Fuerza 2:

- (0, 6 N)

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Resultante</span>
  <div class="formula-panel__formula"><strong>R</strong> = (10,6) N</div>
</div>

Módulo:

**R = √136 ≈ 11,7 N**

---

## 30. Equilibrio

Un cuerpo está en equilibrio traslacional si:

<div class="formula-panel">
  <span class="formula-panel__label">Equilibrio</span>
  <div class="formula-panel__formula">Σ<strong>F</strong> = 0</div>
</div>

Equivalente en 2D:

<div class="formula-panel">
  <span class="formula-panel__label">Componentes</span>
  <div class="formula-panel__formula">ΣF<sub>x</sub> = 0, ΣF<sub>y</sub> = 0</div>
</div>

---

## 31. Producto por un escalar

Si multiplicamos un vector por un número k:

<div class="formula-panel">
  <span class="formula-panel__label">Escalamiento</span>
  <div class="formula-panel__formula">k<strong>A</strong> = (kA<sub>x</sub>, kA<sub>y</sub>)</div>
</div>

Si k>0 mantiene el sentido.

Si k<0 invierte el sentido.

---

## 32. Producto escalar

El producto escalar de A y B se define como:

<div class="formula-panel">
  <span class="formula-panel__label">Producto escalar</span>
  <div class="formula-panel__formula"><strong>A</strong>·<strong>B</strong> = AB cosθ</div>
</div>

El resultado es un escalar.

---

## 33. Producto escalar por componentes

En 2D:

<div class="formula-panel">
  <span class="formula-panel__label">Componentes</span>
  <div class="formula-panel__formula"><strong>A</strong>·<strong>B</strong> = A<sub>x</sub>B<sub>x</sub> + A<sub>y</sub>B<sub>y</sub></div>
</div>

En 3D se agrega A<sub>z</sub>B<sub>z</sub>.

---

## 34. Vectores perpendiculares

Si θ=90°:

**cos90°=0**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Perpendicularidad</span>
  <div class="formula-panel__formula"><strong>A</strong>·<strong>B</strong> = 0</div>
</div>

para vectores no nulos perpendiculares.

---

## 35. Vectores paralelos

Si tienen mismo sentido, θ=0°:

<div class="formula-panel">
  <span class="formula-panel__label">Paralelos</span>
  <div class="formula-panel__formula"><strong>A</strong>·<strong>B</strong> = AB</div>
</div>

---

## 36. Vectores opuestos

Si θ=180°:

**cos180°=−1**

y:

<div class="formula-panel">
  <span class="formula-panel__label">Opuestos</span>
  <div class="formula-panel__formula"><strong>A</strong>·<strong>B</strong> = −AB</div>
</div>

---

## 37. Trabajo mecánico

Para fuerza constante:

<div class="formula-panel">
  <span class="formula-panel__label">Trabajo</span>
  <div class="formula-panel__formula">W = <strong>F</strong>·<strong>d</strong> = Fd cosθ</div>
</div>

El producto escalar selecciona la componente de la fuerza paralela al desplazamiento.

---

## 38. Trabajo positivo, cero y negativo

### θ < 90°

cosθ>0 → trabajo positivo.

### θ = 90°

cosθ=0 → trabajo nulo.

### θ > 90°

cosθ<0 → trabajo negativo.

---

## 39. Campo eléctrico y fuerza

En electrostática:

<div class="formula-panel">
  <span class="formula-panel__label">Fuerza eléctrica</span>
  <div class="formula-panel__formula"><strong>F</strong> = q<strong>E</strong></div>
</div>

Si q>0, F tiene el mismo sentido que E.

Si q<0, el sentido es opuesto.

---

## 40. Componentes y signos no son módulos

Si A<sub>x</sub>=−5 N, eso no significa que el módulo sea −5 N.

Significa que la componente apunta hacia −x.

El módulo sigue siendo no negativo.

---

## 41. Vectores en tres dimensiones

Un vector puede tener A<sub>x</sub>, A<sub>y</sub> y A<sub>z</sub>.

Módulo:

<div class="formula-panel">
  <span class="formula-panel__label">3D</span>
  <div class="formula-panel__formula">A = √(A<sub>x</sub>² + A<sub>y</sub>² + A<sub>z</sub>²)</div>
</div>

---

## 42. Elegir ejes convenientes

En Física podemos elegir ejes que simplifiquen el problema.

Ejemplo en plano inclinado:

- x paralelo al plano;
- y perpendicular al plano.

Esto puede ser mejor que usar horizontal y vertical.

---

## 43. Cambiar de ejes no cambia el vector físico

Las componentes dependen del sistema de ejes.

El vector físico no.

Al rotar los ejes cambian A<sub>x</sub> y A<sub>y</sub>, pero no el módulo ni el objeto físico representado.

---

## 44. Resultante no es “la fuerza más grande”

La resultante es la suma vectorial de todas las fuerzas.

Puede ser mayor, menor o cero aunque haya fuerzas individuales grandes.

---

## 45. Ejemplo de cancelación

Fuerzas:

- +100 N en x;
- −100 N en x.

Resultante:

**0 N**

No significa que no existan fuerzas.

Significa que se cancelan vectorialmente.

---

## 46. Error frecuente: sumar magnitudes sin dirección

5 N + 5 N puede producir:

- 10 N si son paralelas y mismo sentido;
- 0 N si son opuestas;
- otro valor si forman otro ángulo.

Sin dirección no hay suficiente información.

---

## 47. Error frecuente: usar seno y coseno sin mirar el ángulo

Las componentes dependen de desde qué eje se mide θ.

Hay que reconstruir el triángulo.

---

## 48. Error frecuente: olvidar signos

Una componente negativa no es un error.

Es información sobre sentido.

---

## 49. Error frecuente: confundir vector con módulo

F puede representar módulo.

F<sub>x</sub> es una componente.

El vector completo contiene ambas componentes o módulo y dirección.

---

## 50. Ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Clasificación</strong>
  </div>
  <ol>
    <li>Clasificá masa, velocidad, temperatura, fuerza y energía como escalares o vectoriales.</li>
    <li>Definí módulo, dirección y sentido.</li>
    <li>Indicá los signos de las componentes en cada cuadrante.</li>
    <li>Explicá la diferencia entre vector y módulo.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Componentes</strong>
  </div>
  <ol>
    <li>Un vector de 20 unidades forma 30° con +x. Hallá sus componentes.</li>
    <li>Un vector tiene componentes (6,8). Hallá módulo y ángulo en cuadrante I.</li>
    <li>Un vector tiene componentes (−6,8). Hallá módulo y cuadrante.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Suma y resta</strong>
  </div>
  <ol>
    <li>Sumá A=(3,4) y B=(5,−2).</li>
    <li>Calculá A−B.</li>
    <li>Hallá el módulo de cada resultante.</li>
    <li>Dibujá la suma por cabeza-cola.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Física</strong>
  </div>
  <ol>
    <li>Dos fuerzas son F<sub>1</sub>=(40,0) N y F<sub>2</sub>=(−10,30) N. Hallá la resultante.</li>
    <li>Una velocidad inicial de 50 m/s forma 37° con la horizontal. Hallá componentes.</li>
    <li>Una partícula con carga negativa está en un campo E hacia +x. Indicá el sentido de la fuerza.</li>
    <li>Calculá el trabajo de una fuerza de 60 N durante 5 m si forma 60° con el desplazamiento.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Explicá la equivalencia entre la forma geométrica y por componentes del producto escalar.</li>
    <li>Explicá por qué rotar los ejes cambia las componentes pero no el módulo del vector.</li>
    <li>Diseñá un sistema de tres fuerzas no nulas cuya resultante sea cero.</li>
  </ol>
</div>

---

## 51. Ejemplo integrado

Sobre un objeto actúan dos fuerzas:

- F<sub>1</sub> = (40, 20) N;
- F<sub>2</sub> = (−10, 30) N.

### Suma por componentes

<div class="formula-panel">
  <span class="formula-panel__label">Resultante</span>
  <div class="formula-panel__formula">R<sub>x</sub> = 40 − 10 = 30 N</div>
</div>

<div class="formula-panel">
  <span class="formula-panel__label">Resultante</span>
  <div class="formula-panel__formula">R<sub>y</sub> = 20 + 30 = 50 N</div>
</div>

Entonces:

**R = (30,50) N**

### Módulo

<div class="formula-panel">
  <span class="formula-panel__label">Módulo</span>
  <div class="formula-panel__formula">R = √(30²+50²) ≈ 58,3 N</div>
</div>

### Dirección

<div class="formula-panel">
  <span class="formula-panel__label">Ángulo</span>
  <div class="formula-panel__formula">θ = arctan(50/30) ≈ 59°</div>
</div>

Como ambas componentes son positivas:

- cuadrante I.

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>La suma vectorial se vuelve álgebra por componentes</h3>
  <div class="worked-example-card__steps">
    <p>Sumamos por separado x e y.</p>
    <p>Reconstruimos el módulo mediante Pitágoras.</p>
    <p>Reconstruimos la dirección mediante trigonometría.</p>
    <p><strong>Las componentes son una representación completa del vector.</strong></p>
  </div>
</div>

---

## 52. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Qué diferencia existe entre una magnitud escalar y una vectorial?</summary>
  <div class="lesson-quiz__answer">
    Una escalar queda determinada por valor y unidad; una vectorial requiere además información de dirección y sentido.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Cómo se suman dos vectores por componentes?</summary>
  <div class="lesson-quiz__answer">
    Se suman separadamente sus componentes correspondientes: Rₓ=Aₓ+Bₓ y Rᵧ=Aᵧ+Bᵧ.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Qué representa una componente negativa?</summary>
  <div class="lesson-quiz__answer">
    Que esa parte del vector apunta en el sentido negativo del eje elegido; no significa que el módulo del vector sea negativo.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Qué tipo de cantidad produce el producto escalar?</summary>
  <div class="lesson-quiz__answer">
    Produce un escalar. Geométricamente vale AB cosθ y en Física aparece, por ejemplo, en el trabajo de una fuerza.
  </div>
</details>

---

## 53. Resumen

- Las magnitudes escalares requieren valor y unidad.
- Las vectoriales requieren módulo, dirección y sentido.
- Un vector puede representarse mediante módulo y ángulo o mediante componentes.
- Si θ se mide desde +x, A<sub>x</sub>=A cosθ y A<sub>y</sub>=A senθ.
- Los signos de las componentes contienen información direccional.
- El módulo en 2D es √(A<sub>x</sub>²+A<sub>y</sub>²).
- La dirección puede obtenerse con trigonometría y control de cuadrante.
- Los vectores se suman componente a componente.
- Restar B equivale a sumar −B.
- La suma de módulos no reemplaza la suma vectorial.
- El equilibrio traslacional exige resultante vectorial nula.
- Las componentes dependen del sistema de ejes; el vector físico no.
- El producto escalar es AB cosθ.
- Vectores perpendiculares tienen producto escalar cero.
- El trabajo de una fuerza constante es un producto escalar.
- Desplazamiento, velocidad, aceleración, fuerza y campos son ejemplos vectoriales.

---

## 54. Siguiente tema recomendado

**M-16 — Áreas y volúmenes**

Después de trabajar con geometría vectorial, repasaremos superficies, áreas, cuerpos, volúmenes y escalamiento cuadrático y cúbico.

Esto será útil para presión, densidad, fluidos, calor y geometría experimental.
