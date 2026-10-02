---
title: "Fluidos"
description: "Cómo describir fluidos en reposo y movimiento mediante densidad, presión, hidrostática, Pascal, Arquímedes, caudal, continuidad y Bernoulli."
slug: "fluidos"

course: "fisica"
module: "fluidos"
order: 14

level: "intermedio"
cycle: "ambos"

yearsApprox: [3, 4, 5]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - gravitacion

skills:
  - densidad
  - presion
  - presion-hidrostatica
  - principio-fundamental-hidrostatica
  - principio-de-pascal
  - prensa-hidraulica
  - principio-de-arquimedes
  - flotacion
  - presion-atmosferica
  - barometro
  - caudal
  - ecuacion-de-continuidad
  - bernoulli
  - aplicaciones-de-fluidos
  - limites-del-fluido-ideal

hasExercises: true
hasQuiz: true
hasExperiment: true

deepening: true
status: "complete"
---

## El agua puede sostener un barco y también multiplicar una fuerza

Los fluidos aparecen en fenómenos muy distintos:

- un barco flota;
- una represa soporta mayor presión en profundidad;
- una jeringa transmite presión;
- un elevador hidráulico permite levantar un automóvil;
- el aire ejerce presión sobre nosotros;
- el agua acelera al pasar por una sección más angosta.

Todos estos fenómenos pueden organizarse con unas pocas ideas fundamentales.

> **En un fluido importan tanto sus propiedades materiales como la manera en que se distribuyen la presión y el movimiento.**

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>La hidrostática estudia fluidos en reposo. La hidrodinámica estudia fluidos en movimiento. Los modelos más simples funcionan muy bien, pero siempre debemos revisar sus condiciones de validez.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta lección deberías poder:

- calcular e interpretar densidad;
- distinguir presión de fuerza;
- usar la unidad pascal;
- comprender cómo cambia la presión con la profundidad;
- aplicar el principio fundamental de la hidrostática;
- interpretar el principio de Pascal;
- analizar una prensa hidráulica;
- comprender el principio de Arquímedes;
- predecir condiciones de flotación;
- interpretar la presión atmosférica;
- comprender el funcionamiento de un barómetro;
- calcular caudal;
- aplicar la ecuación de continuidad;
- interpretar la ecuación de Bernoulli;
- reconocer aplicaciones;
- identificar límites del modelo de fluido ideal.

---

## 1. ¿Qué es un fluido?

Un **fluido** es un material que puede deformarse continuamente cuando se le aplica una fuerza tangencial.

En esta categoría incluimos:

- líquidos;
- gases.

Los líquidos suelen tener:

- volumen aproximadamente definido;
- muy poca compresibilidad en condiciones ordinarias.

Los gases:

- ocupan el volumen disponible;
- son mucho más compresibles.

En esta lección algunos modelos se aplicarán especialmente bien a líquidos.

---

## 2. Densidad

La **densidad** relaciona masa y volumen:

<div class="formula-panel">
  <span class="formula-panel__label">Densidad</span>
  <div class="formula-panel__formula">ρ = m/V</div>
</div>

donde:

- `ρ` es la densidad;
- `m` es la masa;
- `V` es el volumen.

Unidad SI:

<div class="formula-panel">
  <span class="formula-panel__label">Unidad</span>
  <div class="formula-panel__formula">kg/m³</div>
</div>

---

## 3. Densidad no es peso

Dos objetos pueden tener:

- la misma masa;
- distinto volumen;

y por lo tanto:

- distinta densidad.

También pueden tener:

- el mismo volumen;
- masas diferentes.

La densidad es una propiedad que relaciona ambas magnitudes.

No es una fuerza.

---

## 4. Ejemplo de densidad

Un bloque tiene:

- `m = 2,4 kg`;
- `V = 0,003 m³`.

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Densidad de un bloque</h3>
  <div class="worked-example-card__steps">
    <p>ρ = m/V</p>
    <p>ρ = 2,4 / 0,003</p>
    <p><strong>ρ = 800 kg/m³</strong></p>
  </div>
</div>

---

## 5. Conversión útil

Una unidad frecuente es:

**g/cm³**

Como:

**1 g/cm³ = 1000 kg/m³**

el agua líquida cerca de condiciones ordinarias suele aproximarse como:

**ρ ≈ 1000 kg/m³**

en problemas escolares.

---

## 6. Presión

La **presión** mide cómo se distribuye una fuerza perpendicular sobre una superficie.

En un caso uniforme:

<div class="formula-panel">
  <span class="formula-panel__label">Presión</span>
  <div class="formula-panel__formula">p = F<sub>⊥</sub>/A</div>
</div>

donde:

- `F<sub>⊥</sub>` es la componente perpendicular de la fuerza;
- `A` es el área.

---

## 7. Presión no es fuerza

La misma fuerza puede producir presiones muy diferentes.

Si disminuimos el área:

- aumenta la presión.

Si aumentamos el área:

- disminuye la presión.

Por eso:

- una aguja;
- un cuchillo;
- un esquí;

producen efectos distintos aunque las fuerzas involucradas puedan ser comparables.

---

## 8. Unidad de presión

La unidad SI es:

**pascal**

símbolo:

**Pa**

<div class="formula-panel">
  <span class="formula-panel__label">Pascal</span>
  <div class="formula-panel__formula">1 Pa = 1 N/m²</div>
</div>

Un pascal es una presión relativamente pequeña.

Por eso también aparecen:

- kPa;
- MPa.

---

## 9. Ejemplo de presión

Una fuerza perpendicular de:

**600 N**

se distribuye sobre:

**0,030 m²**

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Presión sobre una superficie</h3>
  <div class="worked-example-card__steps">
    <p>p = F/A</p>
    <p>p = 600/0,030</p>
    <p><strong>p = 20 000 Pa = 20 kPa</strong></p>
  </div>
</div>

---

## 10. Presión en un fluido en reposo

Un fluido en reposo ejerce presión sobre las superficies que lo contienen.

En un punto de un fluido estático ideal:

- la presión no tiene una dirección única como una fuerza vectorial;
- actúa mediante fuerzas normales sobre cualquier superficie pequeña que coloquemos allí.

La presión se trata como una magnitud escalar.

---

## 11. Presión hidrostática

En un líquido de densidad uniforme bajo gravedad aproximadamente constante:

<div class="formula-panel">
  <span class="formula-panel__label">Aumento de presión</span>
  <div class="formula-panel__formula">Δp = ρgh</div>
</div>

donde h es la diferencia vertical de profundidad.

Cuanto más profundo:

- mayor presión.

---

## 12. Principio fundamental de la hidrostática

Entre dos puntos de un mismo fluido en reposo:

<div class="formula-panel">
  <span class="formula-panel__label">Hidrostática</span>
  <div class="formula-panel__formula">p<sub>2</sub> − p<sub>1</sub> = ρg(h<sub>2</sub> − h<sub>1</sub>)</div>
</div>

si usamos h como profundidad medida hacia abajo.

Otra forma frecuente es:

<div class="formula-panel">
  <span class="formula-panel__label">Desde una superficie</span>
  <div class="formula-panel__formula">p = p<sub>0</sub> + ρgh</div>
</div>

---

## 13. Presión absoluta y presión manométrica

Si la superficie está expuesta a una presión externa:

**p<sub>0</sub>**

entonces:

**p = p<sub>0</sub> + ρgh**

La cantidad:

<div class="formula-panel">
  <span class="formula-panel__label">Presión manométrica</span>
  <div class="formula-panel__formula">p<sub>man</sub> = ρgh</div>
</div>

es la presión por encima de la referencia externa.

---

## 14. Ejemplo hidrostático

Agua con:

**ρ = 1000 kg/m³**

a una profundidad de:

**h = 5 m**

Usamos:

**g = 10 m/s²**

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Aumento de presión con la profundidad</h3>
  <div class="worked-example-card__steps">
    <p>Δp = ρgh</p>
    <p>Δp = 1000 × 10 × 5</p>
    <p><strong>Δp = 50 000 Pa = 50 kPa</strong></p>
  </div>
</div>

---

## 15. La presión no depende de la forma del recipiente

Para un líquido homogéneo en reposo:

- a igual profundidad;
- dentro del mismo fluido conectado;

la presión es la misma, independientemente de la forma global del recipiente.

Esto puede resultar contraintuitivo.

La profundidad importa más que:

- el ancho;
- la forma;
- el volumen total.

---

## 16. Vasos comunicantes

En recipientes conectados que contienen el mismo líquido y están sometidos a la misma presión externa:

- las superficies libres tienden a quedar al mismo nivel en equilibrio.

La razón es que a una misma altura dentro del líquido conectado:

- las presiones deben ser compatibles con el equilibrio.

---

## 17. Represas

La presión hidrostática aumenta con la profundidad.

Por eso la fuerza total sobre una pared de una represa:

- no se distribuye uniformemente;
- es mayor en las zonas profundas.

Esto explica por qué muchas represas son:

- más robustas cerca de la base.

---

## 18. Derivación sencilla de ρgh

Consideremos una columna de líquido:

- área A;
- altura h;
- densidad ρ.

Volumen:

**V = Ah**

Masa:

**m = ρAh**

Peso:

**P = ρAhg**

Presión adicional sobre la base:

**Δp = P/A**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Resultado</span>
  <div class="formula-panel__formula">Δp = ρgh</div>
</div>

---

## 19. Principio de Pascal

En un fluido confinado, aproximadamente incomprensible y en equilibrio, un cambio de presión aplicado se transmite por el fluido.

En el modelo ideal:

> **un incremento de presión se transmite sin disminución a todos los puntos del fluido confinado.**

Este principio permite construir sistemas hidráulicos.

---

## 20. Prensa hidráulica

Consideremos dos pistones conectados por un líquido.

En el pistón 1:

<div class="formula-panel">
  <span class="formula-panel__label">Presión aplicada</span>
  <div class="formula-panel__formula">p = F<sub>1</sub>/A<sub>1</sub></div>
</div>

En el pistón 2, idealmente:

<div class="formula-panel">
  <span class="formula-panel__label">Misma variación de presión</span>
  <div class="formula-panel__formula">p = F<sub>2</sub>/A<sub>2</sub></div>
</div>

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Relación hidráulica</span>
  <div class="formula-panel__formula">F<sub>2</sub>/F<sub>1</sub> = A<sub>2</sub>/A<sub>1</sub></div>
</div>

---

## 21. Multiplicar fuerza no crea energía

Si:

**A<sub>2</sub> > A<sub>1</sub>**

podemos obtener:

**F<sub>2</sub> > F<sub>1</sub>**

Pero el pistón grande se desplaza menos.

Para un líquido incomprensible ideal:

<div class="formula-panel">
  <span class="formula-panel__label">Conservación de volumen</span>
  <div class="formula-panel__formula">A<sub>1</sub>d<sub>1</sub> = A<sub>2</sub>d<sub>2</sub></div>
</div>

y en el caso ideal:

**F<sub>1</sub>d<sub>1</sub> = F<sub>2</sub>d<sub>2</sub>**

La ganancia en fuerza se compensa con distancia.

---

## 22. Ejemplo de prensa hidráulica

Datos:

- `A<sub>1</sub> = 5 cm²`;
- `A<sub>2</sub> = 100 cm²`;
- `F<sub>1</sub> = 50 N`.

Entonces:

**A<sub>2</sub>/A<sub>1</sub> = 20**

Por lo tanto:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Multiplicación ideal de fuerza</h3>
  <div class="worked-example-card__steps">
    <p>F<sub>2</sub> = 20 × 50 N</p>
    <p><strong>F<sub>2</sub> = 1000 N</strong></p>
  </div>
</div>

---

## 23. Principio de Arquímedes

Un cuerpo total o parcialmente sumergido en un fluido experimenta un empuje vertical hacia arriba igual al peso del fluido desplazado.

<div class="formula-panel">
  <span class="formula-panel__label">Empuje</span>
  <div class="formula-panel__formula">E = ρ<sub>fluido</sub> g V<sub>desplazado</sub></div>
</div>

Éste es el principio de Arquímedes.

---

## 24. ¿De dónde surge el empuje?

La presión aumenta con la profundidad.

Sobre un cuerpo sumergido:

- la parte inferior suele recibir fuerzas de presión mayores que la parte superior.

La suma de todas las fuerzas de presión produce:

- una resultante hacia arriba.

Ese resultado neto es el empuje.

---

## 25. El empuje depende del fluido desplazado

En:

**E = ρ<sub>fluido</sub>gV<sub>desplazado</sub>**

aparecen:

- densidad del fluido;
- volumen desplazado;
- gravedad.

No aparece directamente:

- la masa del objeto.

La masa del objeto importa al comparar empuje con peso.

---

## 26. Cuerpo totalmente sumergido

Si un objeto de volumen V está completamente sumergido:

<div class="formula-panel">
  <span class="formula-panel__label">Volumen desplazado</span>
  <div class="formula-panel__formula">V<sub>desplazado</sub> = V</div>
</div>

Entonces:

**E = ρ<sub>fluido</sub>gV**

---

## 27. Peso aparente

Un objeto sumergido y sostenido por una cuerda puede tener:

- peso P hacia abajo;
- empuje E hacia arriba;
- tensión T hacia arriba.

En equilibrio:

**T + E = P**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Tensión</span>
  <div class="formula-panel__formula">T = P − E</div>
</div>

La tensión puede interpretarse como un “peso aparente” medido por un dinamómetro.

---

## 28. Flotación

Para un cuerpo que flota en equilibrio:

<div class="formula-panel">
  <span class="formula-panel__label">Equilibrio vertical</span>
  <div class="formula-panel__formula">E = P</div>
</div>

Por lo tanto:

**ρ<sub>fluido</sub>gV<sub>sumergido</sub> = ρ<sub>cuerpo</sub>gV<sub>total</sub>**

---

## 29. Fracción sumergida

Cancelando g:

<div class="formula-panel">
  <span class="formula-panel__label">Cuerpo flotando</span>
  <div class="formula-panel__formula">V<sub>sumergido</sub>/V<sub>total</sub> = ρ<sub>cuerpo</sub>/ρ<sub>fluido</sub></div>
</div>

para un cuerpo homogéneo flotando en un fluido uniforme.

---

## 30. Densidad y flotación

### Si ρ<sub>cuerpo</sub> < ρ<sub>fluido</sub>

Puede flotar parcialmente sumergido.

### Si ρ<sub>cuerpo</sub> = ρ<sub>fluido</sub>

Puede quedar en equilibrio completamente sumergido bajo condiciones apropiadas.

### Si ρ<sub>cuerpo</sub> > ρ<sub>fluido</sub>

Tiende a hundirse si no intervienen otras fuerzas.

---

## 31. ¿Cómo flota un barco de acero?

El acero es más denso que el agua.

Pero un barco no es un bloque macizo de acero.

Su estructura contiene:

- grandes volúmenes de aire.

Entonces la densidad media del conjunto:

**masa total / volumen externo desplazado**

puede ser suficientemente baja para que el empuje equilibre su peso.

---

## 32. Ejemplo de flotación

Un objeto homogéneo tiene:

**ρ<sub>cuerpo</sub> = 750 kg/m³**

y flota en agua:

**ρ<sub>agua</sub> = 1000 kg/m³**

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Fracción sumergida</h3>
  <div class="worked-example-card__steps">
    <p>V<sub>sum</sub>/V = 750/1000</p>
    <p><strong>V<sub>sum</sub>/V = 0,75</strong></p>
    <p>El 75% del volumen queda sumergido en el modelo ideal.</p>
  </div>
</div>

---

## 33. Presión atmosférica

La atmósfera tiene masa.

La gravedad actúa sobre el aire.

Por eso la atmósfera ejerce presión sobre:

- personas;
- objetos;
- superficies;
- líquidos.

Cerca del nivel del mar, la presión atmosférica típica es del orden de:

<div class="formula-panel">
  <span class="formula-panel__label">Valor de referencia</span>
  <div class="formula-panel__formula">p<sub>atm</sub> ≈ 1,01 × 10<sup>5</sup> Pa</div>
</div>

No es exactamente igual en todo momento y lugar.

---

## 34. ¿Por qué no sentimos una fuerza enorme?

La presión atmosférica actúa:

- desde muchas direcciones;
- también sobre el interior de nuestro organismo mediante fluidos y gases.

Las fuerzas pueden equilibrarse en gran medida.

Los efectos aparecen claramente cuando existen:

- diferencias de presión.

---

## 35. Barómetro de Torricelli

Un barómetro de mercurio utiliza una columna de líquido para equilibrar la presión atmosférica.

En el modelo ideal:

<div class="formula-panel">
  <span class="formula-panel__label">Barómetro</span>
  <div class="formula-panel__formula">p<sub>atm</sub> = ρ<sub>Hg</sub>gh</div>
</div>

donde:

- `ρ<sub>Hg</sub>` es la densidad del mercurio;
- h es la altura de la columna.

---

## 36. Por qué se usa un líquido muy denso

Cuanto mayor es ρ:

- menor altura h hace falta para equilibrar la misma presión.

Por eso el mercurio permite una columna mucho más corta que la que requeriría agua.

Los experimentos reales con mercurio requieren medidas de seguridad especiales y no son apropiados para manipulación escolar informal.

---

## 37. Manómetro — aplicación

Un tubo en U puede comparar presiones mediante diferencias de altura entre columnas de líquido.

La idea básica es la misma:

<div class="formula-panel">
  <span class="formula-panel__label">Diferencia de presión</span>
  <div class="formula-panel__formula">Δp = ρgΔh</div>
</div>

según la geometría y los fluidos involucrados.

---

## 38. De fluidos en reposo a fluidos en movimiento

Ahora pasamos a la **hidrodinámica**.

Queremos describir:

- cuánto fluido atraviesa una sección;
- cómo cambia su velocidad;
- cómo se relacionan presión, velocidad y altura.

Empezaremos con el caudal.

---

## 39. Caudal volumétrico

El **caudal volumétrico** mide volumen por unidad de tiempo:

<div class="formula-panel">
  <span class="formula-panel__label">Caudal</span>
  <div class="formula-panel__formula">Q = ΔV/Δt</div>
</div>

Unidad SI:

**m³/s**

También aparecen unidades prácticas como:

- L/s;
- L/min.

---

## 40. Caudal y velocidad media

Si un fluido atraviesa una sección de área A con velocidad media v:

<div class="formula-panel">
  <span class="formula-panel__label">Caudal</span>
  <div class="formula-panel__formula">Q = Av</div>
</div>

Esta relación supone una descripción suficientemente simple del perfil de velocidad.

---

## 41. Ejemplo de caudal

Por una tubería circula:

**Q = 0,020 m³/s**

a través de un área:

**A = 0,010 m²**

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Velocidad media del flujo</h3>
  <div class="worked-example-card__steps">
    <p>v = Q/A</p>
    <p>v = 0,020/0,010</p>
    <p><strong>v = 2 m/s</strong></p>
  </div>
</div>

---

## 42. Ecuación de continuidad

La conservación de masa exige que, en flujo estacionario:

<div class="formula-panel">
  <span class="formula-panel__label">Continuidad general</span>
  <div class="formula-panel__formula">ρ<sub>1</sub>A<sub>1</sub>v<sub>1</sub> = ρ<sub>2</sub>A<sub>2</sub>v<sub>2</sub></div>
</div>

Para un fluido incomprensible:

**ρ<sub>1</sub> = ρ<sub>2</sub>**

y queda:

<div class="formula-panel">
  <span class="formula-panel__label">Fluido incomprensible</span>
  <div class="formula-panel__formula">A<sub>1</sub>v<sub>1</sub> = A<sub>2</sub>v<sub>2</sub></div>
</div>

---

## 43. Tubo más angosto

Si:

**A<sub>2</sub> < A<sub>1</sub>**

para conservar el caudal de un líquido incomprensible:

**v<sub>2</sub> > v<sub>1</sub>**

Por eso el fluido acelera en la zona más estrecha del tubo.

---

## 44. Ejemplo de continuidad

Una tubería pasa de:

- `A<sub>1</sub> = 0,020 m²`;
- a `A<sub>2</sub> = 0,005 m²`.

Si:

**v<sub>1</sub> = 1 m/s**

entonces:

**A<sub>1</sub>v<sub>1</sub> = A<sub>2</sub>v<sub>2</sub>**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Estrechamiento de una tubería</h3>
  <div class="worked-example-card__steps">
    <p>0,020 × 1 = 0,005 × v<sub>2</sub></p>
    <p><strong>v<sub>2</sub> = 4 m/s</strong></p>
  </div>
</div>

---

## 45. Bernoulli

Para un fluido ideal:

- incomprensible;
- sin viscosidad;
- en flujo estacionario;

a lo largo de una línea de corriente podemos escribir:

<div class="formula-panel">
  <span class="formula-panel__label">Ecuación de Bernoulli</span>
  <div class="formula-panel__formula">p + ½ρv² + ρgh = constante</div>
</div>

Cada término tiene unidades de:

**presión**

o energía por unidad de volumen.

---

## 46. Los tres términos de Bernoulli

### p

Presión estática.

### ½ρv²

Término asociado al movimiento del fluido.

### ρgh

Término gravitatorio asociado a la altura.

Bernoulli expresa una forma de conservación de energía mecánica por unidad de volumen en el modelo ideal.

---

## 47. Mismo nivel

Si dos puntos están a la misma altura:

**h<sub>1</sub> = h<sub>2</sub>**

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Bernoulli horizontal</span>
  <div class="formula-panel__formula">p<sub>1</sub> + ½ρv<sub>1</sub>² = p<sub>2</sub> + ½ρv<sub>2</sub>²</div>
</div>

En este caso ideal, si la velocidad aumenta:

- la presión estática disminuye.

---

## 48. La frase “más velocidad, menos presión” tiene condiciones

No debemos convertir Bernoulli en una regla universal.

La relación depende de:

- flujo estacionario;
- viscosidad despreciable;
- comparación apropiada;
- línea de corriente;
- términos de altura;
- ausencia de aportes o extracciones de energía no contemplados.

<div class="lesson-callout lesson-callout--error">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">!</span>
    <strong>Bernoulli no significa que toda región rápida tenga siempre menor presión</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Hay que aplicar la ecuación completa y verificar las hipótesis del modelo antes de comparar presiones.</p>
  </div>
</div>

---

## 49. Efecto Venturi

En un tubo horizontal que se estrecha:

- continuidad predice mayor velocidad en la sección angosta;
- Bernoulli ideal predice menor presión allí.

Este comportamiento se denomina:

**efecto Venturi**

y se utiliza en diferentes dispositivos de medición y mezcla.

---

## 50. Ejemplo sencillo de Bernoulli

En una tubería horizontal con agua:

- `v<sub>1</sub> = 1 m/s`;
- `v<sub>2</sub> = 3 m/s`;
- `ρ = 1000 kg/m³`.

Entonces:

**p<sub>1</sub> + ½ρv<sub>1</sub>² = p<sub>2</sub> + ½ρv<sub>2</sub>²**

Por lo tanto:

**p<sub>1</sub> − p<sub>2</sub> = ½ρ(v<sub>2</sub>² − v<sub>1</sub>²)**

**p<sub>1</sub> − p<sub>2</sub> = ½×1000×(9−1)**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Diferencia de presión ideal</h3>
  <div class="worked-example-card__steps">
    <p><strong>p<sub>1</sub> − p<sub>2</sub> = 4000 Pa</strong></p>
    <p>La sección de mayor velocidad tiene menor presión estática en este caso.</p>
  </div>
</div>

---

## 51. Torricelli como aplicación de Bernoulli

Un depósito grande con un pequeño orificio puede modelarse aproximadamente.

Si:

- la superficie libre y el orificio están a presión atmosférica;
- la velocidad de la superficie es despreciable;
- la diferencia de altura es h;

Bernoulli da:

<div class="formula-panel">
  <span class="formula-panel__label">Ley de Torricelli</span>
  <div class="formula-panel__formula">v = √(2gh)</div>
</div>

Es la misma forma que la rapidez adquirida en una caída libre desde altura h.

---

## 52. Conexión con energía

La similitud entre:

**v = √(2gh)**

para:

- caída libre;
- salida ideal de un depósito;

no es casual.

En ambos casos aparece una transformación de:

- energía potencial gravitatoria;
- en energía cinética.

---

## 53. Sustentación: cuidado con explicaciones simplificadas

La aerodinámica de un ala real involucra:

- geometría;
- circulación;
- distribución de presiones;
- desviación del aire;
- viscosidad;
- condiciones del flujo.

Bernoulli puede participar del análisis, pero no conviene explicar toda sustentación diciendo únicamente:

> “el aire de arriba va más rápido y por eso la presión baja”.

Esa frase aislada es incompleta.

---

## 54. Viscosidad

Los fluidos reales presentan:

**viscosidad**

La viscosidad está relacionada con la resistencia interna al movimiento relativo entre capas del fluido.

Ejemplos:

- miel;
- aceite;
- agua;

tienen comportamientos diferentes.

Un fluido ideal usado en Bernoulli suele modelarse como:

- no viscoso.

---

## 55. Flujo laminar

En un flujo laminar:

- las capas del fluido se desplazan de manera relativamente ordenada;
- las líneas de corriente son más estables.

Muchos modelos sencillos se aproximan mejor bajo condiciones de flujo regular.

---

## 56. Turbulencia

En un flujo turbulento aparecen:

- remolinos;
- fluctuaciones;
- mezclado intenso.

En esas condiciones:

- el análisis puede ser mucho más complejo;
- las pérdidas de energía mecánica pueden ser importantes.

---

## 57. Fluido incomprensible

Un fluido incomprensible ideal mantiene aproximadamente constante su densidad.

Este modelo funciona muy bien para muchos líquidos en condiciones ordinarias.

Para gases:

- la compresibilidad puede ser importante;
- especialmente cuando cambian mucho presión o velocidad.

---

## 58. Flujo estacionario

Un flujo estacionario significa que, en un punto fijo:

- las variables macroscópicas no cambian con el tiempo.

Eso no significa que:

- las partículas del fluido estén quietas.

Pueden moverse continuamente mientras el patrón de flujo permanece estable.

---

## 59. Línea de corriente

Una línea de corriente es una curva que, en cada punto, es tangente al vector velocidad del fluido.

En flujo estacionario:

- ayuda a visualizar la dirección local del movimiento.

La forma elemental de Bernoulli se aplica:

- a lo largo de una línea de corriente;

bajo sus hipótesis.

---

## 60. Aplicaciones de la hidrostática

La hidrostática aparece en:

- tanques;
- represas;
- sistemas de agua;
- buceo;
- instrumentos de presión;
- hidráulica.

En todos ellos conviene separar:

- presión externa;
- contribución `ρgh`.

---

## 61. Aplicaciones de Arquímedes

El empuje aparece en:

- barcos;
- submarinos;
- globos aerostáticos;
- hidrómetros;
- cuerpos sumergidos.

En un gas también existe empuje.

El principio no se limita a líquidos.

---

## 62. Submarinos

Un submarino puede modificar su flotabilidad cambiando:

- la cantidad de agua y aire en tanques de lastre;
- la masa efectiva del conjunto;
- su densidad media.

Así puede:

- ascender;
- descender;
- mantenerse aproximadamente a una profundidad.

---

## 63. Globos

Un globo en el aire desplaza un volumen de atmósfera.

El empuje vale aproximadamente:

<div class="formula-panel">
  <span class="formula-panel__label">Empuje del aire</span>
  <div class="formula-panel__formula">E = ρ<sub>aire</sub>gV</div>
</div>

Para ascender, la comparación entre:

- empuje;
- peso total;

es fundamental.

---

## 64. Aplicaciones de continuidad y Bernoulli

Estos principios aparecen en:

- tuberías;
- boquillas;
- medidores Venturi;
- atomizadores;
- flujo sanguíneo como modelo aproximado;
- sistemas de ventilación.

En aplicaciones reales puede ser necesario agregar:

- viscosidad;
- bombas;
- pérdidas;
- compresibilidad.

---

## 65. Modelo de fluido ideal

En distintos problemas idealizamos que el fluido es:

- continuo;
- incomprensible;
- sin viscosidad;
- de densidad conocida;
- en flujo estacionario.

No todas estas hipótesis se usan siempre.

Debemos identificar cuáles son necesarias para cada ecuación.

---

## 66. Límites de Bernoulli

La forma elemental:

**p + ½ρv² + ρgh = constante**

puede fallar o necesitar modificaciones si existen:

- viscosidad importante;
- turbulencia intensa;
- bombas;
- turbinas;
- transferencia apreciable de energía;
- compresibilidad;
- flujo no estacionario.

---

## 67. Experiencia segura: presión y profundidad

### Materiales

- botella plástica;
- agua;
- recipiente colector;
- pequeños orificios preparados con supervisión.

Con orificios a diferentes alturas podemos observar que:

- el chorro de una zona más profunda suele salir con mayor rapidez.

Esto es compatible con:

- mayor presión hidrostática;
- y, aproximadamente, con Torricelli.

### Seguridad

Preparar los orificios con herramientas sólo bajo condiciones seguras y supervisadas. No perforar recipientes mientras se sostienen con la mano.

---

## 68. Experiencia segura: flotación

Podemos usar:

- agua;
- pequeños objetos;
- plastilina.

Una bola compacta de plastilina puede hundirse.

La misma masa, moldeada como una “barquita”, puede flotar.

La masa no cambió.

Cambió:

- el volumen de fluido que puede desplazar;
- la densidad media del conjunto.

---

## 69. Experiencia: caudal

Podemos medir:

- volumen recogido;
- intervalo de tiempo.

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Medición</span>
  <div class="formula-panel__formula">Q = ΔV/Δt</div>
</div>

Repetir varias veces permite estimar:

- variabilidad;
- incertidumbre experimental.

---

## 70. Errores frecuentes

### “Presión y fuerza son lo mismo”

No.

### “A la misma profundidad importa la forma del recipiente”

En un mismo fluido estático conectado, la presión depende de la profundidad, densidad y presión de referencia, no de la forma global del recipiente.

### “Pascal multiplica energía”

No. Puede multiplicar fuerza a costa de distancia.

### “El empuje es igual al peso del objeto”

No en general. Es igual al peso del fluido desplazado.

### “Todo objeto menos denso que el agua queda totalmente fuera”

No. Flota con una fracción sumergida.

### “En órbita no había gravedad y en un fluido sí”

Son temas distintos: aquí la gravedad sigue siendo esencial para hidrostática y empuje.

### “Si el tubo se angosta, siempre aumenta la presión”

No. En un flujo horizontal ideal, continuidad y Bernoulli predicen lo contrario para la presión estática.

### “Más velocidad siempre significa menos presión”

No como regla universal.

### “Bernoulli sirve para cualquier fluido real”

No. Tiene hipótesis de validez.

---

## 71. Problemas y ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Conceptos</strong>
  </div>
  <ol>
    <li>Definí densidad.</li>
    <li>Definí presión.</li>
    <li>Explicá por qué presión y fuerza no son lo mismo.</li>
    <li>Enunciá el principio de Arquímedes.</li>
    <li>¿Qué significa que un fluido sea incomprensible?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Hidrostática</strong>
  </div>
  <ol>
    <li>Calculá la densidad de 6 kg que ocupan 0,004 m³.</li>
    <li>Una fuerza de 1000 N actúa perpendicularmente sobre 0,20 m². Calculá p.</li>
    <li>Calculá el aumento de presión a 8 m de profundidad en agua usando g = 10 m/s².</li>
    <li>Explicá por qué una represa debe soportar mayor presión cerca del fondo.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Pascal y Arquímedes</strong>
  </div>
  <ol>
    <li>Una prensa tiene áreas de 4 cm² y 80 cm². Si aplicamos 100 N en el pistón pequeño, hallá la fuerza ideal en el grande.</li>
    <li>Explicá qué ocurre con las distancias recorridas por los pistones.</li>
    <li>Un cuerpo desplaza 0,020 m³ de agua. Calculá el empuje con g = 10 m/s².</li>
    <li>Un objeto de densidad 600 kg/m³ flota en agua. Calculá la fracción sumergida.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Flujo</strong>
  </div>
  <ol>
    <li>Por una tubería circulan 0,030 m³/s a través de 0,015 m². Calculá la velocidad media.</li>
    <li>Una tubería pasa de 12 cm² a 3 cm². Si v<sub>1</sub> = 2 m/s, hallá v<sub>2</sub> para un líquido incomprensible.</li>
    <li>Aplicá Bernoulli a dos puntos de igual altura con velocidades conocidas y obtené una diferencia de presión.</li>
    <li>Explicá por qué no basta la frase “más rápido, menos presión” para resolver cualquier problema.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Derivá `Δp = ρgh` a partir del peso de una columna de líquido.</li>
    <li>Derivá la relación de fuerzas de una prensa hidráulica y conectala con conservación de volumen.</li>
    <li>Derivá la fracción sumergida de un cuerpo homogéneo flotante.</li>
    <li>Obtené la ley de Torricelli desde Bernoulli e interpretá su semejanza con la caída libre.</li>
  </ol>
</div>

---

## 72. Ejemplo integrado

Un depósito abierto contiene agua.

Un pequeño orificio está:

**5 m**

debajo de la superficie.

Usamos:

- `ρ = 1000 kg/m³`;
- `g = 10 m/s²`.

### Presión manométrica a esa profundidad

<div class="formula-panel">
  <span class="formula-panel__label">Hidrostática</span>
  <div class="formula-panel__formula">p<sub>man</sub> = ρgh</div>
</div>

**p<sub>man</sub> = 1000×10×5 = 50 000 Pa**

### Velocidad ideal de salida

Si aplicamos Bernoulli entre la superficie y el orificio:

<div class="formula-panel">
  <span class="formula-panel__label">Torricelli</span>
  <div class="formula-panel__formula">v = √(2gh)</div>
</div>

**v = √(100)**

**v = 10 m/s**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>De la presión al movimiento del fluido</h3>
  <div class="worked-example-card__steps">
    <p>p<sub>man</sub> = 50 kPa</p>
    <p>v<sub>ideal</sub> = 10 m/s</p>
    <p><strong>La hidrostática y Bernoulli describen dos aspectos del mismo sistema bajo modelos distintos.</strong></p>
  </div>
</div>

En un depósito real:

- viscosidad;
- geometría del orificio;
- turbulencia;

pueden reducir la velocidad respecto del valor ideal.

---

## 73. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Cuál es la unidad SI de presión?</summary>
  <div class="lesson-quiz__answer">
    El pascal: 1 Pa = 1 N/m².
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿De qué depende el aumento de presión hidrostática?</summary>
  <div class="lesson-quiz__answer">
    De la densidad del fluido, la gravedad y la diferencia de profundidad: Δp = ρgh.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Qué establece el principio de Arquímedes?</summary>
  <div class="lesson-quiz__answer">
    Que el empuje sobre un cuerpo sumergido es igual al peso del fluido desplazado.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Qué se conserva en la ecuación de continuidad?</summary>
  <div class="lesson-quiz__answer">
    La masa que atraviesa las secciones por unidad de tiempo. Para un fluido incomprensible queda A₁v₁ = A₂v₂.
  </div>
</details>

<details class="lesson-quiz">
  <summary>5. ¿Qué representa Bernoulli?</summary>
  <div class="lesson-quiz__answer">
    Una relación de conservación de energía mecánica por unidad de volumen para un fluido ideal bajo condiciones específicas.
  </div>
</details>

<details class="lesson-quiz">
  <summary>6. ¿Por qué Bernoulli no debe aplicarse automáticamente a cualquier flujo?</summary>
  <div class="lesson-quiz__answer">
    Porque supone condiciones como flujo estacionario, viscosidad despreciable, densidad aproximadamente constante y una aplicación apropiada a lo largo del flujo.
  </div>
</details>

---

## 74. Resumen

- La densidad es `ρ = m/V`.
- La presión es fuerza perpendicular por unidad de área: `p = F<sub>⊥</sub>/A`.
- La unidad SI de presión es el pascal.
- En hidrostática, la presión aumenta con la profundidad.
- Para densidad y g constantes, `Δp = ρgh`.
- En un fluido confinado ideal, Pascal permite transmitir cambios de presión.
- Una prensa hidráulica puede multiplicar fuerza a costa de desplazamiento.
- El principio de Arquímedes establece `E = ρ<sub>fluido</sub>gV<sub>desplazado</sub>`.
- Un cuerpo flotante satisface `E = P`.
- La fracción sumergida depende de la relación de densidades.
- La atmósfera ejerce presión.
- Un barómetro relaciona presión atmosférica con una columna de líquido.
- El caudal es `Q = ΔV/Δt`.
- En un flujo simple, `Q = Av`.
- La continuidad general expresa conservación de masa.
- Para un fluido incomprensible, `A<sub>1</sub>v<sub>1</sub> = A<sub>2</sub>v<sub>2</sub>`.
- Bernoulli relaciona presión, velocidad y altura.
- La frase “más velocidad, menos presión” sólo es válida bajo condiciones apropiadas.
- Los fluidos reales tienen viscosidad y pueden desarrollar turbulencia.
- El modelo de fluido ideal tiene límites que siempre deben explicitarse.

---

## 75. Siguiente tema recomendado

**F-15 — Temperatura, dilatación y calorimetría**

En la próxima lección vamos a estudiar:

- equilibrio térmico;
- principio cero;
- temperatura;
- escalas térmicas;
- termómetros;
- dilatación;
- calor;
- calor específico;
- calorimetría;
- cambios de fase;
- transferencia por conducción, convección y radiación.
