---
title: "Exponenciales"
description: "Profundización en funciones exponenciales de crecimiento y decaimiento, base e, constante de tiempo, semivida y aplicaciones a radiactividad y procesos físicos."
slug: "exponenciales"

course: "matematicas"
module: "funciones-avanzadas"
order: 18

level: "avanzado-secundario"
cycle: "orientado"

yearsApprox: [4, 5, 6]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - logaritmos
  - funcion-lineal

skills:
  - funcion-exponencial
  - crecimiento-exponencial
  - decaimiento-exponencial
  - base-e
  - tasa-relativa
  - constante-de-decaimiento
  - constante-de-tiempo
  - semivida
  - tiempo-de-duplicacion
  - radiactividad
  - actividad
  - enfriamiento-exponencial
  - atenuacion
  - linealizacion-logaritmica

hasExercises: true
hasQuiz: true
hasExperiment: false

deepening: true
status: "complete"
---

## “Crece rápido” no significa necesariamente “crece exponencialmente”

Una cantidad que aumenta:

- 10 unidades por segundo;

crece linealmente.

Una cantidad que aumenta:

- 10 % de lo que ya tiene por unidad de tiempo;

puede seguir un comportamiento exponencial.

La diferencia está en qué permanece aproximadamente constante:

### Lineal

Cambio absoluto por intervalo.

### Exponencial

Cambio relativo respecto de la cantidad presente.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Un proceso exponencial se caracteriza por una tasa de cambio proporcional a la cantidad presente. Por eso intervalos iguales producen factores multiplicativos iguales, no incrementos absolutos iguales.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar este repaso deberías poder:

- reconocer una función exponencial;
- distinguirla de una función lineal;
- interpretar crecimiento y decaimiento;
- usar formas A·bˣ y A·e<sup>kt</sup>;
- comprender la base e;
- interpretar una tasa relativa;
- calcular factores tras varios intervalos;
- interpretar constante de decaimiento;
- interpretar constante de tiempo;
- calcular semivida;
- calcular tiempo de duplicación;
- modelar decaimiento radiactivo;
- relacionar actividad y número de núcleos;
- aplicar exponenciales a atenuación y relajación;
- usar logaritmos para despejar tiempo;
- reconocer límites de un modelo exponencial.

---

## 1. Función exponencial

Una forma básica es:

<div class="formula-panel">
  <span class="formula-panel__label">Exponencial</span>
  <div class="formula-panel__formula">y = Abˣ</div>
</div>

con:

- A ≠ 0;
- b > 0;
- b ≠ 1.

La variable aparece en:

- el exponente.

---

## 2. No confundir con potencia

### Potencia

**y = x²**

La variable está en la base.

### Exponencial

**y = 2ˣ**

La variable está en el exponente.

Son familias distintas.

---

## 3. Crecimiento exponencial

Si:

**b > 1**

y A>0:

- la función crece.

Ejemplo:

**y = 3·2ˣ**

Cada vez que x aumenta 1, y se multiplica por:

- 2.

---

## 4. Decaimiento exponencial

Si:

**0 < b < 1**

la función disminuye.

Ejemplo:

<div class="formula-panel">
  <span class="formula-panel__label">Decaimiento</span>
  <div class="formula-panel__formula">y = 100(1/2)ˣ</div>
</div>

Cada incremento unitario de x reduce la cantidad a:

- la mitad.

---

## 5. Tabla de crecimiento

Para:

**y = 2ˣ**

| x | y |
| ---: | ---: |
| 0 | 1 |
| 1 | 2 |
| 2 | 4 |
| 3 | 8 |
| 4 | 16 |

Las diferencias no son constantes.

Los cocientes sí:

**y(x+1)/y(x)=2**

---

## 6. Tabla de decaimiento

Para:

**y = (1/2)ˣ**

| x | y |
| ---: | ---: |
| 0 | 1 |
| 1 | 0,5 |
| 2 | 0,25 |
| 3 | 0,125 |

Cada paso multiplica por:

**1/2**

---

## 7. Comparación con una función lineal

### Lineal

<div class="formula-panel">
  <span class="formula-panel__label">Lineal</span>
  <div class="formula-panel__formula">y = y<sub>0</sub> + mt</div>
</div>

Intervalos iguales producen cambios absolutos iguales.

### Exponencial

<div class="formula-panel">
  <span class="formula-panel__label">Exponencial</span>
  <div class="formula-panel__formula">y = y<sub>0</sub>bᵗ</div>
</div>

Intervalos iguales producen factores iguales.

---

## 8. Cambio relativo

Para un proceso exponencial continuo:

<div class="formula-panel">
  <span class="formula-panel__label">Idea de tasa relativa</span>
  <div class="formula-panel__formula">(1/y)(dy/dt) = constante</div>
</div>

Esta notación usa cálculo diferencial como profundización.

Conceptualmente significa:

> el cambio por unidad de tiempo es proporcional a la cantidad presente.

---

## 9. Base e

El número:

<div class="formula-panel">
  <span class="formula-panel__label">Número e</span>
  <div class="formula-panel__formula">e ≈ 2,71828</div>
</div>

aparece naturalmente en procesos continuos.

Una forma general es:

<div class="formula-panel">
  <span class="formula-panel__label">Forma continua</span>
  <div class="formula-panel__formula">y(t) = y<sub>0</sub>e<sup>kt</sup></div>
</div>

---

## 10. Significado de k

### k > 0

Crecimiento.

### k < 0

Decaimiento.

La unidad de k debe ser inversa a la del tiempo para que:

**kt**

sea adimensional.

---

## 11. El exponente debe ser adimensional

En:

**e<sup>kt</sup>**

el producto kt no puede conservar unidades físicas.

Ejemplo:

- si t está en s;
- k debe estar en s<sup>−1</sup>.

---

## 12. Valor inicial

Si:

**t = 0**

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Inicial</span>
  <div class="formula-panel__formula">y(0) = y<sub>0</sub>e⁰ = y<sub>0</sub></div>
</div>

Por eso y<sub>0</sub> representa:

- valor inicial.

---

## 13. Factor tras un tiempo

<div class="formula-panel">
  <span class="formula-panel__label">Factor</span>
  <div class="formula-panel__formula">y(t)/y<sub>0</sub> = e<sup>kt</sup></div>
</div>

La exponencial expresa directamente:

- qué fracción;
- o qué múltiplo;

queda respecto del valor inicial.

---

## 14. Decaimiento con λ

Es habitual escribir:

<div class="formula-panel">
  <span class="formula-panel__label">Decaimiento</span>
  <div class="formula-panel__formula">N(t) = N<sub>0</sub>e<sup>−λt</sup></div>
</div>

con:

**λ > 0**

Entonces el signo menos garantiza:

- decaimiento.

---

## 15. Constante de decaimiento

λ mide la escala temporal del proceso.

Unidad:

**1/tiempo**

Ejemplos:

- s<sup>−1</sup>;
- año<sup>−1</sup>.

---

## 16. Semivida

La semivida T<sub>1/2</sub> es el tiempo necesario para que quede:

**N<sub>0</sub>/2**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Condición</span>
  <div class="formula-panel__formula">1/2 = e<sup>−λT<sub>1/2</sub></sup></div>
</div>

---

## 17. Derivación de la semivida

Aplicamos ln:

**ln(1/2)=−λT<sub>1/2</sub>**

Como:

**ln(1/2)=−ln2**

obtenemos:

<div class="formula-panel">
  <span class="formula-panel__label">Semivida</span>
  <div class="formula-panel__formula">T<sub>1/2</sub> = ln2/λ</div>
</div>

---

## 18. Después de varias semividas

Tras n semividas:

<div class="formula-panel">
  <span class="formula-panel__label">Fracción restante</span>
  <div class="formula-panel__formula">N/N<sub>0</sub> = (1/2)ⁿ</div>
</div>

Ejemplos:

- 1 semivida → 1/2;
- 2 → 1/4;
- 3 → 1/8.

---

## 19. No desaparece de golpe

Un modelo exponencial ideal no llega exactamente a cero en un tiempo finito.

Se aproxima a cero:

- asintóticamente.

En sistemas reales además puede existir:

- fondo;
- umbral de medición;
- otros procesos.

---

## 20. Radiactividad

En un conjunto grande de núcleos inestables, el número esperado de núcleos no decaídos se modela como:

<div class="formula-panel">
  <span class="formula-panel__label">Núcleos</span>
  <div class="formula-panel__formula">N(t) = N<sub>0</sub>e<sup>−λt</sup></div>
</div>

---

## 21. Naturaleza estadística

El decaimiento de un núcleo individual es:

- aleatorio.

La ley exponencial describe estadísticamente:

- poblaciones grandes.

No predice el instante exacto en que decaerá un núcleo particular.

---

## 22. Actividad

La actividad es el número de desintegraciones por unidad de tiempo.

En el modelo ideal:

<div class="formula-panel">
  <span class="formula-panel__label">Actividad</span>
  <div class="formula-panel__formula">A = λN</div>
</div>

Por lo tanto también decae exponencialmente:

<div class="formula-panel">
  <span class="formula-panel__label">Actividad temporal</span>
  <div class="formula-panel__formula">A(t) = A<sub>0</sub>e<sup>−λt</sup></div>
</div>

---

## 23. Unidad de actividad

En SI:

**1 Bq = 1 desintegración/s**

La actividad no es lo mismo que:

- dosis;
- energía;
- peligrosidad total.

---

## 24. Tiempo de duplicación

Para crecimiento:

<div class="formula-panel">
  <span class="formula-panel__label">Crecimiento</span>
  <div class="formula-panel__formula">y = y<sub>0</sub>e<sup>kt</sup></div>
</div>

con k>0.

Si queremos y=2y<sub>0</sub>:

<div class="formula-panel">
  <span class="formula-panel__label">Duplicación</span>
  <div class="formula-panel__formula">T<sub>2</sub> = ln2/k</div>
</div>

---

## 25. Constante de tiempo

Muchos procesos de relajación se escriben:

<div class="formula-panel">
  <span class="formula-panel__label">Relajación</span>
  <div class="formula-panel__formula">y(t) = y<sub>0</sub>e<sup>−t/τ</sup></div>
</div>

τ se llama:

- constante de tiempo.

---

## 26. Qué ocurre en t=τ

<div class="formula-panel">
  <span class="formula-panel__label">Una constante de tiempo</span>
  <div class="formula-panel__formula">y(τ) = y<sub>0</sub>/e ≈ 0,368y<sub>0</sub></div>
</div>

Queda aproximadamente:

- 36,8 %.

---

## 27. Relación entre τ y λ

Si:

**e<sup>−λt</sup> = e<sup>−t/τ</sup>**

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Relación</span>
  <div class="formula-panel__formula">τ = 1/λ</div>
</div>

---

## 28. Enfriamiento de Newton — modelo

Bajo ciertas condiciones, la diferencia de temperatura con el ambiente puede modelarse:

<div class="formula-panel">
  <span class="formula-panel__label">Enfriamiento</span>
  <div class="formula-panel__formula">T(t) − T<sub>amb</sub> = [T<sub>0</sub> − T<sub>amb</sub>]e<sup>−kt</sup></div>
</div>

---

## 29. No es “la temperatura decae a cero”

El modelo describe la diferencia:

**T−T<sub>amb</sub>**

La temperatura se aproxima a:

- la temperatura ambiente.

No necesariamente a:

- 0 °C;
- 0 K.

---

## 30. Atenuación

En ciertos medios, una intensidad puede modelarse como:

<div class="formula-panel">
  <span class="formula-panel__label">Atenuación</span>
  <div class="formula-panel__formula">I(x) = I<sub>0</sub>e<sup>−μx</sup></div>
</div>

donde μ tiene unidad inversa de longitud.

---

## 31. Ejemplos de atenuación

Modelos exponenciales aparecen en:

- absorción de radiación;
- transmisión en materiales;
- algunos fenómenos ópticos;
- blindaje idealizado.

La validez depende del:

- material;
- energía;
- geometría;
- régimen físico.

---

## 32. Capacitores — profundización

En un circuito RC ideal, ciertas tensiones y cargas pueden variar exponencialmente.

Descarga típica:

<div class="formula-panel">
  <span class="formula-panel__label">Descarga RC</span>
  <div class="formula-panel__formula">V(t) = V<sub>0</sub>e<sup>−t/(RC)</sup></div>
</div>

La constante de tiempo es:

**τ = RC**

---

## 33. Carga de un capacitor

Una forma típica es:

<div class="formula-panel">
  <span class="formula-panel__label">Carga RC</span>
  <div class="formula-panel__formula">V(t) = V<sub>f</sub>[1 − e<sup>−t/(RC)</sup>]</div>
</div>

Aquí la variable se aproxima a:

- un valor final distinto de cero.

---

## 34. Exponencial hacia un valor de equilibrio

Forma general:

<div class="formula-panel">
  <span class="formula-panel__label">Relajación a equilibrio</span>
  <div class="formula-panel__formula">y(t) = y<sub>eq</sub> + [y<sub>0</sub>−y<sub>eq</sub>]e<sup>−t/τ</sup></div>
</div>

Esto describe una cantidad que se aproxima a:

- y<sub>eq</sub>.

---

## 35. Resolver para el tiempo

Si:

<div class="formula-panel">
  <span class="formula-panel__label">Decaimiento</span>
  <div class="formula-panel__formula">N/N<sub>0</sub> = e<sup>−λt</sup></div>
</div>

aplicamos ln:

<div class="formula-panel">
  <span class="formula-panel__label">Despeje</span>
  <div class="formula-panel__formula">t = −ln(N/N<sub>0</sub>)/λ</div>
</div>

Los logaritmos son la herramienta inversa necesaria.

---

## 36. Ejemplo de tiempo

Queremos saber cuándo queda:

**25 %**

de una cantidad.

Entonces:

**N/N<sub>0</sub>=0,25**

<div class="formula-panel">
  <span class="formula-panel__label">Tiempo</span>
  <div class="formula-panel__formula">t = −ln(0,25)/λ = 2ln2/λ</div>
</div>

Es decir:

- dos semividas.

---

## 37. Gráfico lineal vs exponencial

### Lineal

Pendiente constante.

### Exponencial

Pendiente cambia con la cantidad.

En decaimiento, la curva cae rápidamente al principio y luego:

- cada vez más lentamente en valor absoluto.

---

## 38. La tasa relativa sí es constante

Aunque la pendiente absoluta cambie, en:

**y=y<sub>0</sub>e<sup>kt</sup>**

la tasa relativa:

<div class="formula-panel">
  <span class="formula-panel__label">Tasa relativa</span>
  <div class="formula-panel__formula">(1/y)(dy/dt) = k</div>
</div>

es constante.

---

## 39. Linealización con logaritmos

Si:

<div class="formula-panel">
  <span class="formula-panel__label">Exponencial</span>
  <div class="formula-panel__formula">y = y<sub>0</sub>e<sup>kt</sup></div>
</div>

aplicamos ln:

<div class="formula-panel">
  <span class="formula-panel__label">Linealizada</span>
  <div class="formula-panel__formula">ln y = ln y<sub>0</sub> + kt</div>
</div>

Esto tiene forma:

**Y = b + mt**

---

## 40. Interpretación de la linealización

En un gráfico:

- ln y vs. t;

la pendiente es:

**k**

si el modelo exponencial es adecuado.

Esto fue históricamente muy útil para analizar datos.

---

## 41. Cuidado con datos cero o negativos

No podemos aplicar ln directamente a:

- y=0;
- y<0;

en números reales.

La linealización requiere:

**y>0**

---

## 42. Modelo exponencial no es universal

Un crecimiento real no puede continuar exponencialmente para siempre si existen:

- recursos limitados;
- saturación;
- retroalimentaciones;
- cambios de régimen.

El modelo tiene un dominio de validez.

---

## 43. Crecimiento poblacional

Una población puede aproximarse exponencialmente durante un intervalo.

A largo plazo suelen aparecer:

- límites de recursos;
- competencia;
- capacidad de carga.

Entonces otros modelos pueden ser mejores.

---

## 44. Error frecuente: sumar el mismo porcentaje

Si una cantidad aumenta 10 % por período:

- no se suma siempre el mismo valor;
- se multiplica cada vez por 1,10.

Eso produce crecimiento compuesto.

---

## 45. Error frecuente: pensar que semivida depende de la cantidad inicial

En un modelo exponencial ideal con λ constante, la semivida no depende de:

- N<sub>0</sub>.

Cada mitad tarda:

- el mismo intervalo.

---

## 46. Error frecuente: confundir λ con T<sub>1/2</sub>

Son magnitudes relacionadas pero distintas:

<div class="formula-panel">
  <span class="formula-panel__label">Relación</span>
  <div class="formula-panel__formula">T<sub>1/2</sub> = ln2/λ</div>
</div>

Mayor λ implica:

- menor semivida.

---

## 47. Error frecuente: afirmar que llega a cero tras muchas semividas

Matemáticamente el modelo exponencial nunca llega exactamente a cero en tiempo finito.

Experimentalmente puede quedar por debajo de:

- sensibilidad de detección;
- relevancia práctica.

---

## 48. Ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Reconocimiento</strong>
  </div>
  <ol>
    <li>Clasificá y=3x+1, y=x³ y y=2ˣ.</li>
    <li>Indicá si y=5(0,8)ˣ representa crecimiento o decaimiento.</li>
    <li>Hallá y(0) para y=7e<sup>−2t</sup>.</li>
    <li>Explicá qué significa que intervalos iguales produzcan factores iguales.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Factores</strong>
  </div>
  <ol>
    <li>Una cantidad se duplica cada hora. Si comienza en 5, ¿cuánto vale a las 4 h?</li>
    <li>Una cantidad se reduce a la mitad cada 3 días. ¿Qué fracción queda tras 9 días?</li>
    <li>Calculá e<sup>−1</sup> aproximadamente.</li>
    <li>Explicá qué representa τ en y=y<sub>0</sub>e<sup>−t/τ</sup>.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Radiactividad</strong>
  </div>
  <ol>
    <li>Si λ=0,10 día<sup>−1</sup>, calculá la semivida.</li>
    <li>¿Qué fracción queda después de 4 semividas?</li>
    <li>Si N=0,10N<sub>0</sub>, despejá t en función de λ.</li>
    <li>Explicá por qué la ley exponencial es estadística para núcleos radiactivos.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Procesos físicos</strong>
  </div>
  <ol>
    <li>En I=I<sub>0</sub>e<sup>−μx</sup>, despejá x para I/I<sub>0</sub>=0,20.</li>
    <li>Una diferencia térmica se reduce a 1/e de su valor inicial en 12 min. Identificá τ.</li>
    <li>En una descarga RC, R=10 kΩ y C=100 μF. Calculá τ=RC.</li>
    <li>Explicá por qué la temperatura en el modelo de enfriamiento se aproxima a T<sub>amb</sub> y no necesariamente a cero.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Derivá T<sub>2</sub>=ln2/k para un crecimiento exponencial.</li>
    <li>Demostrá que ln y vs. t es lineal si y=y<sub>0</sub>e<sup>kt</sup>.</li>
    <li>Explicá por qué un modelo exponencial de crecimiento ilimitado suele fallar a largo plazo en sistemas reales.</li>
  </ol>
</div>

---

## 49. Ejemplo integrado

Una muestra tiene semivida:

**T<sub>1/2</sub> = 8 días**

y comienza con:

**N<sub>0</sub> = 1600**

núcleos representativos en una idealización.

Después de:

**24 días**

han transcurrido:

<div class="formula-panel">
  <span class="formula-panel__label">Número de semividas</span>
  <div class="formula-panel__formula">n = 24/8 = 3</div>
</div>

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Cantidad restante</span>
  <div class="formula-panel__formula">N = 1600(1/2)³ = 200</div>
</div>

También:

<div class="formula-panel">
  <span class="formula-panel__label">Constante de decaimiento</span>
  <div class="formula-panel__formula">λ = ln2/8 ≈ 0,0866 día<sup>−1</sup></div>
</div>

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>La forma de semivida y la forma exponencial describen el mismo modelo</h3>
  <div class="worked-example-card__steps">
    <p>Tres semividas dejan (1/2)³=1/8 de la cantidad inicial.</p>
    <p>1600/8=200.</p>
    <p>La constante λ contiene la misma información temporal que la semivida.</p>
    <p><strong>La semivida es una manera especialmente intuitiva de describir un decaimiento exponencial.</strong></p>
  </div>
</div>

---

## 50. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Qué caracteriza a un proceso exponencial?</summary>
  <div class="lesson-quiz__answer">
    Intervalos iguales producen factores multiplicativos iguales; en el modelo continuo, la tasa de cambio es proporcional a la cantidad presente.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Qué significa λ en N=N₀e<sup>−λt</sup>?</summary>
  <div class="lesson-quiz__answer">
    Es la constante de decaimiento, con unidades de inverso de tiempo; cuanto mayor es λ, más rápidamente decae el sistema.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Cómo se relacionan semivida y λ?</summary>
  <div class="lesson-quiz__answer">
    T₁/₂=ln2/λ.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Por qué un proceso exponencial ideal no llega exactamente a cero?</summary>
  <div class="lesson-quiz__answer">
    Porque e<sup>−λt</sup> permanece positivo para todo tiempo finito y sólo tiende a cero cuando t crece sin límite.
  </div>
</details>

---

## 51. Resumen

- Una función exponencial tiene la variable en el exponente.
- En crecimiento, intervalos iguales producen el mismo factor mayor que 1.
- En decaimiento, producen un factor entre 0 y 1.
- La forma continua es y=y<sub>0</sub>e<sup>kt</sup>.
- k tiene unidad inversa de tiempo cuando t representa tiempo.
- El exponente debe ser adimensional.
- N=N<sub>0</sub>e<sup>−λt</sup> modela decaimiento exponencial.
- T<sub>1/2</sub>=ln2/λ.
- Tras n semividas queda (1/2)ⁿ.
- La radiactividad es estadística a nivel de núcleos individuales.
- La actividad cumple A=λN.
- τ=1/λ en una forma e<sup>−t/τ</sup>.
- Procesos de enfriamiento, atenuación y circuitos RC pueden presentar exponenciales bajo modelos apropiados.
- Los logaritmos permiten despejar tiempos en ecuaciones exponenciales.
- ln y frente a t puede linealizar un modelo exponencial.
- Un modelo exponencial tiene límites de validez y no describe todo crecimiento o decaimiento real.

---

## 52. Cierre de Matemáticas para Física

Con **M-18** queda completo el bloque **M-01 → M-18** del temario maestro.

La colección cubre herramientas que aparecen a lo largo de Física y Físico-Química:

- aritmética;
- proporcionalidad;
- porcentajes;
- potencias;
- notación científica;
- álgebra;
- ecuaciones;
- funciones;
- gráficos;
- pendiente;
- geometría;
- trigonometría;
- vectores;
- áreas y volúmenes;
- logaritmos;
- exponenciales.

No es necesario estudiarlas todas antes de comenzar Física.

La idea de esta biblioteca es volver a la herramienta matemática concreta cuando un problema físico o químico la necesite.

**La Física plantea la pregunta; la matemática ayuda a construir y analizar el modelo.**
