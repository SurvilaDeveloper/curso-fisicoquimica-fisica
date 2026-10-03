---
title: "Trigonometría básica"
description: "Cómo usar seno, coseno y tangente en triángulos rectángulos para relacionar ángulos y lados, resolver componentes y preparar el trabajo vectorial en Física."
slug: "trigonometria-basica"

course: "matematicas"
module: "geometria-y-vectores"
order: 14

level: "intermedio"
cycle: "ambos"

yearsApprox: [3, 4, 5, 6]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - teorema-de-pitagoras

skills:
  - angulo
  - grados
  - radianes-introduccion
  - seno
  - coseno
  - tangente
  - cateto-opuesto
  - cateto-adyacente
  - hipotenusa
  - funciones-inversas
  - componentes-trigonometricas
  - angulos-notables
  - calculadora-en-grados

hasExercises: true
hasQuiz: true
hasExperiment: false

deepening: false
status: "complete"
---

## Una misma fuerza puede repartir su efecto entre dos direcciones

Supongamos una fuerza de:

**100 N**

que forma:

**30°**

con el eje horizontal.

Queremos saber cuánto de esa fuerza apunta horizontalmente y cuánto verticalmente.

Pitágoras nos permitiría reconstruir el módulo si ya conociéramos ambas componentes.

Pero ahora conocemos módulo y ángulo.

Necesitamos trigonometría.

<div class="formula-panel">
  <span class="formula-panel__label">Componentes</span>
  <div class="formula-panel__formula">F<sub>x</sub> = F cosθ, F<sub>y</sub> = F senθ</div>
</div>

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Seno, coseno y tangente son razones entre lados de un triángulo rectángulo. No son fórmulas aisladas: dependen del ángulo elegido y de qué lado es opuesto, adyacente o hipotenusa respecto de ese ángulo.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar este repaso deberías poder:

- interpretar un ángulo;
- trabajar con grados;
- introducir la idea de radián;
- identificar hipotenusa;
- identificar cateto opuesto y adyacente respecto de un ángulo;
- definir seno;
- definir coseno;
- definir tangente;
- elegir la razón adecuada;
- hallar lados desconocidos;
- hallar ángulos mediante funciones inversas;
- usar una calculadora en el modo correcto;
- reconocer ángulos notables sencillos;
- obtener componentes horizontales y verticales;
- controlar signos según el cuadrante;
- comprender que seno y coseno no tienen unidades.

---

## 1. Ángulo

Un ángulo mide la apertura entre dos direcciones.

En el uso escolar suele medirse en grados.

Una vuelta completa:

**360°**

Media vuelta:

**180°**

Un ángulo recto:

**90°**

---

## 2. Radián — introducción

En Física también usamos radianes.

Una vuelta completa equivale a:

<div class="formula-panel">
  <span class="formula-panel__label">Conversión angular</span>
  <div class="formula-panel__formula">360° = 2π rad</div>
</div>

Por lo tanto:

<div class="formula-panel">
  <span class="formula-panel__label">Ángulo recto</span>
  <div class="formula-panel__formula">90° = π/2 rad</div>
</div>

El radián será especialmente importante en movimiento circular y ondas.

---

## 3. Triángulo rectángulo y ángulo de referencia

Consideremos un triángulo rectángulo y un ángulo agudo θ.

Respecto de θ distinguimos:

- hipotenusa;
- cateto opuesto;
- cateto adyacente.

---

## 4. Hipotenusa

La hipotenusa es opuesta al ángulo recto y el lado mayor.

No cambia según qué ángulo agudo elijamos.

---

## 5. Cateto opuesto

Es el cateto que está enfrente del ángulo θ.

Si cambiamos el ángulo de referencia, puede cambiar cuál cateto es opuesto.

---

## 6. Cateto adyacente

Es el cateto que toca al ángulo θ y no es la hipotenusa.

También depende del ángulo elegido.

---

## 7. Seno

<div class="formula-panel">
  <span class="formula-panel__label">Seno</span>
  <div class="formula-panel__formula">senθ = cateto opuesto / hipotenusa</div>
</div>

---

## 8. Coseno

<div class="formula-panel">
  <span class="formula-panel__label">Coseno</span>
  <div class="formula-panel__formula">cosθ = cateto adyacente / hipotenusa</div>
</div>

---

## 9. Tangente

<div class="formula-panel">
  <span class="formula-panel__label">Tangente</span>
  <div class="formula-panel__formula">tanθ = cateto opuesto / cateto adyacente</div>
</div>

---

## 10. Las razones no tienen unidades

Si ambos lados están en metros, en una razón m/m las unidades se cancelan.

Por eso senθ, cosθ y tanθ son números adimensionales.

---

## 11. Elegir la razón adecuada

Si conocemos hipotenusa y opuesto, usamos seno.

Si conocemos hipotenusa y adyacente, usamos coseno.

Si relacionamos opuesto y adyacente, usamos tangente.

---

## 12. Ejemplo con seno

Hipotenusa:

**10 m**

Ángulo:

**30°**

Cateto opuesto:

<div class="formula-panel">
  <span class="formula-panel__label">Seno</span>
  <div class="formula-panel__formula">opuesto = 10 m · sen30° = 5 m</div>
</div>

---

## 13. Ejemplo con coseno

Mismo triángulo:

<div class="formula-panel">
  <span class="formula-panel__label">Coseno</span>
  <div class="formula-panel__formula">adyacente = 10 m · cos30°</div>
</div>

Como:

**cos30° ≈ 0,866**

obtenemos:

**8,66 m**

---

## 14. Verificación con Pitágoras

<div class="formula-panel">
  <span class="formula-panel__label">Chequeo</span>
  <div class="formula-panel__formula">5² + 8,66² ≈ 10²</div>
</div>

Trigonometría y Pitágoras son compatibles y complementarios.

---

## 15. Hallar un ángulo

Si conocemos:

- opuesto = 3;
- adyacente = 4;

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Tangente</span>
  <div class="formula-panel__formula">tanθ = 3/4</div>
</div>

Aplicamos la función inversa:

<div class="formula-panel">
  <span class="formula-panel__label">Ángulo</span>
  <div class="formula-panel__formula">θ = arctan(3/4) ≈ 36,9°</div>
</div>

---

## 16. Funciones inversas

Para hallar ángulos usamos:

- arcsen;
- arccos;
- arctan.

En calculadoras pueden aparecer como:

- sin⁻¹;
- cos⁻¹;
- tan⁻¹.

Aquí el exponente −1 indica función inversa, no recíproco.

---

## 17. Cuidado con sin⁻¹

En una calculadora:

**sin⁻¹(0,5)**

suele significar arcsen(0,5).

No significa 1/sen(0,5).

Son conceptos diferentes.

---

## 18. Modo de calculadora

Antes de calcular ángulos verificá si la calculadora está en:

- DEG para grados;
- RAD para radianes.

Si el problema usa 30° y la calculadora está en RAD, el resultado será incorrecto.

---

## 19. Chequeo simple del modo

En grados:

<div class="formula-panel">
  <span class="formula-panel__label">Prueba</span>
  <div class="formula-panel__formula">sen30° = 0,5</div>
</div>

Si tu calculadora no da aproximadamente 0,5, revisá el modo angular.

---

## 20. Ángulos notables

| θ | senθ | cosθ | tanθ |
| ---: | ---: | ---: | ---: |
| 0° | 0 | 1 | 0 |
| 30° | 1/2 | √3/2 | 1/√3 |
| 45° | √2/2 | √2/2 | 1 |
| 60° | √3/2 | 1/2 | √3 |
| 90° | 1 | 0 | no definida |

---

## 21. Por qué tan90° no está definida

<div class="formula-panel">
  <span class="formula-panel__label">Identidad</span>
  <div class="formula-panel__formula">tanθ = senθ/cosθ</div>
</div>

Para 90°:

- sen90° = 1;
- cos90° = 0.

Aparecería división por cero.

---

## 22. Relación entre seno y coseno

En un triángulo rectángulo:

<div class="formula-panel">
  <span class="formula-panel__label">Identidad fundamental</span>
  <div class="formula-panel__formula">sen²θ + cos²θ = 1</div>
</div>

Esto deriva directamente de Pitágoras.

---

## 23. Demostración breve

Si opuesto=a, adyacente=b e hipotenusa=c, entonces:

**a²+b²=c²**

Dividimos todo por c²:

<div class="formula-panel">
  <span class="formula-panel__label">Resultado</span>
  <div class="formula-panel__formula">(a/c)² + (b/c)² = 1</div>
</div>

Por definición:

**sen²θ+cos²θ=1**

---

## 24. Componentes de un vector

Si un vector **A** de módulo A forma un ángulo θ medido desde el eje +x:

<div class="formula-panel">
  <span class="formula-panel__label">Componentes</span>
  <div class="formula-panel__formula">A<sub>x</sub> = A cosθ, A<sub>y</sub> = A senθ</div>
</div>

Esto es una aplicación directa de coseno y seno.

---

## 25. Ejemplo de componentes

Fuerza:

**F = 100 N**

Ángulo:

**30°**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Horizontal</span>
  <div class="formula-panel__formula">F<sub>x</sub> = 100 cos30° ≈ 86,6 N</div>
</div>

<div class="formula-panel">
  <span class="formula-panel__label">Vertical</span>
  <div class="formula-panel__formula">F<sub>y</sub> = 100 sen30° = 50 N</div>
</div>

---

## 26. Verificar el módulo

<div class="formula-panel">
  <span class="formula-panel__label">Chequeo</span>
  <div class="formula-panel__formula">√(86,6² + 50²) ≈ 100 N</div>
</div>

La descomposición conserva el vector original.

---

## 27. El orden seno-coseno depende de cómo se mida θ

Las fórmulas A<sub>x</sub>=A cosθ y A<sub>y</sub>=A senθ suponen que θ se mide desde el eje x.

Si θ se mide desde el eje y, cambian las relaciones.

No memorices sin mirar el triángulo.

---

## 28. Cuadrantes

### I

x positiva, y positiva.

### II

x negativa, y positiva.

### III

x negativa, y negativa.

### IV

x positiva, y negativa.

Los signos de las componentes dependen del cuadrante.

---

## 29. Trigonometría y signos

Para Física escolar, muchas veces conviene:

1. calcular magnitudes con el triángulo;
2. asignar signos según dirección.

---

## 30. Ángulo desde componentes

Si conocemos A<sub>x</sub> y A<sub>y</sub>:

<div class="formula-panel">
  <span class="formula-panel__label">Dirección</span>
  <div class="formula-panel__formula">tanθ = A<sub>y</sub>/A<sub>x</sub></div>
</div>

pero debemos considerar signos y cuadrante.

---

## 31. Problema de arctan simple

Si:

- A<sub>x</sub> = 4;
- A<sub>y</sub> = 3;

y ambas son positivas:

<div class="formula-panel">
  <span class="formula-panel__label">Ángulo</span>
  <div class="formula-panel__formula">θ = arctan(3/4) ≈ 36,9°</div>
</div>

Está en cuadrante I.

---

## 32. Ambigüedad de la tangente

La tangente sola no distingue automáticamente entre cuadrantes que producen la misma razón.

En herramientas informáticas existe a menudo atan2(y,x), que utiliza ambos signos.

Conceptualmente debemos mirar A<sub>x</sub> y A<sub>y</sub>.

---

## 33. Plano inclinado

En dinámica, una fuerza peso mg puede descomponerse respecto de un plano inclinado.

Dependiendo del ángulo definido aparecen componentes como:

- mg senθ;
- mg cosθ.

La clave es construir correctamente el triángulo de componentes.

---

## 34. Tiro oblicuo

Una velocidad inicial v<sub>0</sub> con ángulo θ respecto de la horizontal tiene:

<div class="formula-panel">
  <span class="formula-panel__label">Velocidad inicial</span>
  <div class="formula-panel__formula">v<sub>0x</sub> = v<sub>0</sub> cosθ</div>
</div>

<div class="formula-panel">
  <span class="formula-panel__label">Velocidad inicial</span>
  <div class="formula-panel__formula">v<sub>0y</sub> = v<sub>0</sub> senθ</div>
</div>

---

## 35. Trabajo mecánico

Para una fuerza constante que forma ángulo θ con el desplazamiento:

<div class="formula-panel">
  <span class="formula-panel__label">Trabajo</span>
  <div class="formula-panel__formula">W = Fd cosθ</div>
</div>

Aparece cosθ porque sólo la componente de la fuerza paralela al desplazamiento contribuye al trabajo.

---

## 36. Producto escalar — anticipo

La relación anterior conecta con:

<div class="formula-panel">
  <span class="formula-panel__label">Producto escalar</span>
  <div class="formula-panel__formula"><strong>A</strong>·<strong>B</strong> = AB cosθ</div>
</div>

Se retomará en M-15 y en trabajo y energía.

---

## 37. Radianes y longitud de arco — profundización

Si θ está en radianes:

<div class="formula-panel">
  <span class="formula-panel__label">Arco</span>
  <div class="formula-panel__formula">s = rθ</div>
</div>

Esta simplicidad es una razón por la que la Física usa radianes.

---

## 38. Conversión grados-radianes

<div class="formula-panel">
  <span class="formula-panel__label">Conversión</span>
  <div class="formula-panel__formula">θ(rad) = θ(°)·π/180</div>
</div>

y:

<div class="formula-panel">
  <span class="formula-panel__label">Conversión</span>
  <div class="formula-panel__formula">θ(°) = θ(rad)·180/π</div>
</div>

---

## 39. Ejemplo de conversión

**60°**

en radianes:

<div class="formula-panel">
  <span class="formula-panel__label">Conversión</span>
  <div class="formula-panel__formula">60·π/180 = π/3 rad</div>
</div>

---

## 40. Error frecuente: elegir seno o coseno por memoria

No preguntes “¿acá va seno o coseno?”.

Preguntá:

- ¿qué ángulo tengo?;
- ¿qué lado conozco?;
- ¿qué lado busco?

Luego elegí la razón.

---

## 41. Error frecuente: olvidar el cuadrante

Una calculadora puede dar un ángulo agudo asociado a una razón.

Pero las componentes pueden indicar otro cuadrante.

---

## 42. Error frecuente: usar grados en modo radianes

Es uno de los errores más frecuentes con calculadora.

Siempre revisá DEG o RAD.

---

## 43. Error frecuente: intercambiar opuesto y adyacente

Estos nombres dependen de θ.

Cambiar el ángulo de referencia intercambia qué cateto es opuesto y cuál adyacente.

---

## 44. Ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Razones trigonométricas</strong>
  </div>
  <ol>
    <li>Definí seno, coseno y tangente.</li>
    <li>En un triángulo con hipotenusa 10 y opuesto 6, calculá senθ.</li>
    <li>Si adyacente=8 e hipotenusa=10, calculá cosθ.</li>
    <li>Si opuesto=3 y adyacente=4, calculá tanθ.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Lados y ángulos</strong>
  </div>
  <ol>
    <li>Una hipotenusa mide 20 m y θ=30°. Hallá el opuesto.</li>
    <li>Con los mismos datos, hallá el adyacente.</li>
    <li>Si tanθ=1, hallá θ en grados.</li>
    <li>Convertí 45° y 120° a radianes.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Componentes</strong>
  </div>
  <ol>
    <li>Una fuerza de 80 N forma 60° con +x. Hallá F<sub>x</sub> y F<sub>y</sub>.</li>
    <li>Una velocidad de 25 m/s forma 37° con la horizontal. Hallá sus componentes.</li>
    <li>Verificá cada módulo mediante Pitágoras.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Física</strong>
  </div>
  <ol>
    <li>Un proyectil parte con v<sub>0</sub>=30 m/s y θ=45°. Hallá v<sub>0x</sub> y v<sub>0y</sub>.</li>
    <li>Una fuerza de 100 N actúa 25° respecto del desplazamiento. Hallá su componente paralela.</li>
    <li>Un vector tiene componentes −4 y +3. Hallá su módulo y determiná el cuadrante.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Derivá sen²θ+cos²θ=1 usando Pitágoras.</li>
    <li>Explicá por qué A<sub>x</sub>=A cosθ y A<sub>y</sub>=A senθ cuando θ se mide desde +x.</li>
    <li>Analizá por qué arctan(A<sub>y</sub>/A<sub>x</sub>) necesita información de cuadrante.</li>
  </ol>
</div>

---

## 45. Ejemplo integrado

Una fuerza de:

**F = 120 N**

forma:

**35°**

por encima del eje +x.

### Componente horizontal

<div class="formula-panel">
  <span class="formula-panel__label">Horizontal</span>
  <div class="formula-panel__formula">F<sub>x</sub> = 120 cos35° ≈ 98,3 N</div>
</div>

### Componente vertical

<div class="formula-panel">
  <span class="formula-panel__label">Vertical</span>
  <div class="formula-panel__formula">F<sub>y</sub> = 120 sen35° ≈ 68,8 N</div>
</div>

### Verificación

<div class="formula-panel">
  <span class="formula-panel__label">Módulo reconstruido</span>
  <div class="formula-panel__formula">√(98,3² + 68,8²) ≈ 120 N</div>
</div>

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>Trigonometría y Pitágoras se controlan mutuamente</h3>
  <div class="worked-example-card__steps">
    <p>El ángulo está medido desde +x.</p>
    <p>Por eso la componente adyacente usa coseno.</p>
    <p>La componente opuesta usa seno.</p>
    <p>El módulo reconstruido coincide con 120 N.</p>
    <p><strong>Las componentes no son fuerzas nuevas: son otra representación del mismo vector.</strong></p>
  </div>
</div>

---

## 46. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Qué representa senθ en un triángulo rectángulo?</summary>
  <div class="lesson-quiz__answer">
    La razón entre el cateto opuesto a θ y la hipotenusa.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Por qué seno y coseno son adimensionales?</summary>
  <div class="lesson-quiz__answer">
    Porque son cocientes entre longitudes expresadas en las mismas unidades, que se cancelan.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. Si θ se mide desde +x, ¿cómo se obtienen las componentes de un vector A?</summary>
  <div class="lesson-quiz__answer">
    A<sub>x</sub>=A cosθ y A<sub>y</sub>=A senθ, asignando los signos correspondientes al cuadrante.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Por qué hay que revisar DEG o RAD?</summary>
  <div class="lesson-quiz__answer">
    Porque la calculadora debe interpretar el número angular en la misma unidad utilizada por el problema.
  </div>
</details>

---

## 47. Resumen

- Un ángulo mide la separación entre direcciones.
- 360°=2π rad.
- Seno, coseno y tangente son razones de lados en un triángulo rectángulo.
- senθ=opuesto/hipotenusa.
- cosθ=adyacente/hipotenusa.
- tanθ=opuesto/adyacente.
- Opuesto y adyacente dependen del ángulo elegido.
- Las razones trigonométricas son adimensionales.
- Las funciones inversas permiten hallar ángulos.
- La calculadora debe estar en el modo angular correcto.
- sen²θ+cos²θ=1 deriva de Pitágoras.
- Si θ se mide desde +x, A<sub>x</sub>=A cosθ y A<sub>y</sub>=A senθ.
- Los signos de las componentes dependen del cuadrante.
- La tangente sola puede ser ambigua respecto del cuadrante.
- La trigonometría permite descomponer fuerzas, velocidades y otros vectores.
- Los radianes son especialmente naturales en Física.

---

## 48. Siguiente tema recomendado

**M-15 — Vectores y componentes**

Ahora uniremos Pitágoras, trigonometría, signos y ejes cartesianos.

El objetivo será representar y operar magnitudes que poseen módulo, dirección y sentido.
