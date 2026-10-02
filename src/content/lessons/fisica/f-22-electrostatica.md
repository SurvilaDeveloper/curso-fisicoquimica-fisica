---
title: "Electrostática"
description: "Cómo describir cargas eléctricas en reposo mediante conservación, cuantización, electrización, ley de Coulomb, campo eléctrico, potencial, equipotenciales y capacitores."
slug: "electrostatica"

course: "fisica"
module: "electricidad"
order: 22

level: "intermedio"
cycle: "ambos"

yearsApprox: [4, 5, 6]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - optica-fisica

skills:
  - carga-electrica
  - conservacion-de-la-carga
  - cuantizacion-de-la-carga
  - electrizacion
  - conductores-y-aislantes
  - ley-de-coulomb
  - superposicion-electrica
  - campo-electrico
  - vector-campo-electrico
  - lineas-de-campo
  - campo-de-cargas-puntuales
  - energia-potencial-electrica
  - potencial-electrico
  - diferencia-de-potencial
  - superficies-equipotenciales
  - capacitores
  - capacitancia
  - energia-en-capacitores

hasExercises: true
hasQuiz: true
hasExperiment: true

deepening: true
status: "complete"
---

## Una regla frotada puede atraer papelitos sin tocarlos

Frotamos una regla plástica con una tela y la acercamos a pequeños trozos de papel.

Los papeles:

- se mueven;
- pueden ser atraídos;
- sin que exista contacto inicial.

¿Qué cambió?

No apareció una fuerza “mágica”.

El proceso modificó la distribución de:

**carga eléctrica**

y esa carga produce un:

**campo eléctrico**

capaz de ejercer fuerzas sobre otras cargas.

La electrostática estudia principalmente:

> **cargas eléctricas en reposo o distribuciones de carga que no cambian apreciablemente con el tiempo.**

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>La electrostática puede organizarse como una cadena conceptual: carga → fuerza de Coulomb → campo eléctrico → energía potencial → potencial eléctrico → diferencia de potencial. Cada concepto responde una pregunta diferente.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta lección deberías poder:

- definir carga eléctrica;
- distinguir cargas positivas y negativas;
- aplicar conservación de la carga;
- comprender la cuantización;
- describir electrización por fricción, contacto e inducción;
- distinguir conductores y aislantes;
- usar la ley de Coulomb;
- aplicar superposición;
- definir campo eléctrico;
- interpretar el campo como vector;
- dibujar líneas de campo;
- calcular el campo de cargas puntuales;
- interpretar energía potencial eléctrica;
- definir potencial eléctrico;
- distinguir potencial de energía potencial;
- trabajar con diferencia de potencial;
- interpretar superficies equipotenciales;
- comprender capacitores como profundización;
- definir capacitancia;
- calcular energía almacenada en un capacitor ideal.

---

## 1. Carga eléctrica

La **carga eléctrica** es una propiedad física de la materia asociada a las interacciones eléctricas.

Existen dos signos:

- positivo;
- negativo.

Usamos el símbolo:

**q**

Unidad SI:

**coulomb (C)**

---

## 2. Interacción entre signos

Experimentalmente observamos:

### Cargas del mismo signo

Se repelen.

### Cargas de signo opuesto

Se atraen.

Esto describe la dirección de la interacción electrostática entre cargas puntuales.

---

## 3. Neutralidad eléctrica

Un cuerpo eléctricamente neutro no significa:

- ausencia total de cargas.

Significa que su carga neta es:

<div class="formula-panel">
  <span class="formula-panel__label">Neutralidad</span>
  <div class="formula-panel__formula">q<sub>neta</sub> = 0</div>
</div>

porque las contribuciones positivas y negativas se compensan.

---

## 4. Carga de protones y electrones

El protón tiene carga:

<div class="formula-panel">
  <span class="formula-panel__label">Protón</span>
  <div class="formula-panel__formula">q<sub>p</sub> = +e</div>
</div>

El electrón tiene:

<div class="formula-panel">
  <span class="formula-panel__label">Electrón</span>
  <div class="formula-panel__formula">q<sub>e</sub> = −e</div>
</div>

donde:

<div class="formula-panel">
  <span class="formula-panel__label">Carga elemental</span>
  <div class="formula-panel__formula">e ≈ 1,602 × 10<sup>−19</sup> C</div>
</div>

---

## 5. Un coulomb es una carga enorme a escala microscópica

Como:

**e ≈ 1,602×10<sup>−19</sup> C**

una carga de:

**1 C**

corresponde al módulo de la carga de aproximadamente:

**6,24 × 10<sup>18</sup>**

electrones.

Por eso en electrostática cotidiana suelen aparecer:

- μC;
- nC.

---

## 6. Conservación de la carga

La carga eléctrica total de un sistema aislado se conserva.

<div class="formula-panel">
  <span class="formula-panel__label">Conservación</span>
  <div class="formula-panel__formula">q<sub>total,inicial</sub> = q<sub>total,final</sub></div>
</div>

La electrización no crea carga neta de la nada.

Generalmente:

- redistribuye;
- transfiere;

carga entre cuerpos.

---

## 7. Ejemplo de conservación

Dos cuerpos inicialmente neutros se frotan.

Después:

- A tiene `+5 nC`;
- B debe adquirir `−5 nC`;

si el sistema A+B estuvo eléctricamente aislado y no intercambió carga con el entorno.

Entonces:

**q<sub>total</sub> = 0**

antes y después.

---

## 8. Cuantización de la carga

En la materia ordinaria, la carga neta aparece en múltiplos de la carga elemental:

<div class="formula-panel">
  <span class="formula-panel__label">Cuantización</span>
  <div class="formula-panel__formula">q = ne</div>
</div>

donde n es un número entero para la carga neta de cuerpos formados por partículas comunes.

---

## 9. Ejemplo de cuantización

Un cuerpo tiene:

**q = −4,806 × 10<sup>−19</sup> C**

Dividimos por:

**e = 1,602 × 10<sup>−19</sup> C**

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Exceso de electrones</h3>
  <div class="worked-example-card__steps">
    <p>n = q/(−e)</p>
    <p>n = 3</p>
    <p><strong>El cuerpo tiene un exceso neto de 3 electrones.</strong></p>
  </div>
</div>

---

## 10. Una precisión sobre la cuantización

En Física de partículas existen quarks con cargas fraccionarias respecto de e.

Pero los quarks:

- no aparecen aislados en condiciones ordinarias.

Para la electrostática escolar de cuerpos macroscópicos:

**q = ne**

es el modelo apropiado.

---

## 11. Electrización

Un cuerpo está **electrizado** cuando presenta una carga neta distinta de cero o una distribución de carga relevante para el fenómeno.

Procesos frecuentes:

- fricción;
- contacto;
- inducción.

También puede existir:

- polarización sin carga neta.

---

## 12. Electrización por fricción

Al frotar ciertos materiales:

- electrones pueden transferirse de uno a otro.

Uno queda con:

- exceso de electrones → carga negativa.

El otro queda con:

- déficit de electrones → carga positiva.

En sólidos ordinarios no son los protones del núcleo los que circulan de un cuerpo a otro.

---

## 13. Serie triboeléctrica — profundización

Algunos materiales muestran tendencias a:

- ganar;
- perder;

electrones al ponerse en contacto y separarse.

Las listas triboeléctricas son:

- empíricas;
- dependientes de condiciones superficiales;
- no leyes universales simples.

Sirven como guía, no como explicación fundamental completa.

---

## 14. Electrización por contacto

Si un conductor cargado toca otro conductor:

- las cargas móviles pueden redistribuirse.

Después de alcanzar equilibrio electrostático:

- ambos cuerpos pueden quedar cargados.

La distribución final depende de:

- geometría;
- tamaños;
- conexión con otros cuerpos.

---

## 15. Electrización por inducción

La **inducción electrostática** permite producir una separación de cargas sin contacto directo con el cuerpo cargado.

Un cuerpo cargado cercano puede:

- atraer cargas de signo opuesto;
- repeler cargas del mismo signo;

dentro de un conductor.

---

## 16. Inducción no siempre significa carga neta

Si acercamos una carga a un conductor neutro aislado:

- las cargas se redistribuyen;
- puede aparecer un lado más positivo y otro más negativo.

Pero la carga neta del conductor sigue siendo:

**0**

si no hubo transferencia de carga.

---

## 17. Conexión a tierra

La Tierra puede actuar como un enorme reservorio de carga.

Al conectar un conductor a tierra:

- electrones pueden entrar o salir;

según las condiciones eléctricas.

La combinación:

- inducción;
- conexión a tierra;
- desconexión adecuada;

permite dejar un conductor con carga neta.

---

## 18. Polarización en un aislante

Aunque las cargas no puedan desplazarse libremente por todo un aislante:

- las distribuciones microscópicas pueden deformarse ligeramente.

Esto produce:

**polarización**

y ayuda a explicar por qué un cuerpo cargado puede atraer:

- pequeños objetos inicialmente neutros.

---

## 19. Conductores

Un **conductor** contiene portadores de carga capaces de desplazarse con relativa libertad a escala macroscópica.

Ejemplos:

- muchos metales;
- soluciones iónicas;
- plasmas.

El tipo de portador depende del material.

---

## 20. Aislantes

En un **aislante**, las cargas no se desplazan libremente por todo el material en condiciones ordinarias.

Pueden existir:

- polarización;
- movimientos microscópicos limitados.

“Aislante” no significa:

- imposibilidad absoluta de movimiento de carga.

---

## 21. Semiconductores — profundización

Los semiconductores tienen propiedades eléctricas intermedias y altamente controlables.

Su conductividad puede depender de:

- temperatura;
- impurezas;
- iluminación;
- campos eléctricos.

Serán importantes tecnológicamente, aunque no los desarrollaremos aquí.

---

## 22. Electrostática en un conductor

En equilibrio electrostático ideal:

> **el campo eléctrico dentro del material conductor es cero.**

Si existiera un campo interno neto:

- las cargas libres seguirían moviéndose;
- por lo tanto no habría equilibrio.

---

## 23. Exceso de carga en un conductor

En un conductor aislado en equilibrio electrostático, el exceso de carga se encuentra:

- sobre su superficie.

La distribución puede ser:

- no uniforme.

Depende fuertemente de la geometría.

---

## 24. Campo en la superficie de un conductor

En equilibrio electrostático, el campo inmediatamente fuera de una superficie conductora ideal es:

- perpendicular a la superficie.

Si tuviera componente tangencial:

- movería cargas por la superficie.

---

## 25. Concentración de carga en puntas

En conductores con regiones muy curvas o puntiagudas:

- la densidad superficial de carga puede ser mayor.

El campo cercano también puede ser intenso.

Esto es relevante en:

- descargas;
- pararrayos;
- coronas eléctricas.

---

## 26. Ley de Coulomb

Para dos cargas puntuales en reposo:

<div class="formula-panel">
  <span class="formula-panel__label">Módulo de la fuerza</span>
  <div class="formula-panel__formula">F = k |q<sub>1</sub>q<sub>2</sub>|/r²</div>
</div>

donde:

- r es la distancia entre las cargas;
- k es la constante de Coulomb.

---

## 27. Constante de Coulomb

En el vacío:

<div class="formula-panel">
  <span class="formula-panel__label">Constante</span>
  <div class="formula-panel__formula">k ≈ 8,99 × 10<sup>9</sup> N·m²/C²</div>
</div>

También:

<div class="formula-panel">
  <span class="formula-panel__label">Relación</span>
  <div class="formula-panel__formula">k = 1/(4πε<sub>0</sub>)</div>
</div>

donde `ε<sub>0</sub>` es la permitividad del vacío.

---

## 28. Dirección de la fuerza de Coulomb

La fuerza actúa a lo largo de la recta que une las cargas.

### q<sub>1</sub>q<sub>2</sub> > 0

Repulsión.

### q<sub>1</sub>q<sub>2</sub> < 0

Atracción.

La expresión con valores absolutos calcula:

- el módulo.

El signo del producto ayuda a interpretar:

- la dirección relativa.

---

## 29. Coulomb y tercera ley

La fuerza de 1 sobre 2 y la fuerza de 2 sobre 1 cumplen:

<div class="formula-panel">
  <span class="formula-panel__label">Tercera ley</span>
  <div class="formula-panel__formula">F<sub>1→2</sub> = −F<sub>2→1</sub></div>
</div>

Tienen:

- igual módulo;
- sentidos opuestos;
- actúan sobre cuerpos distintos.

---

## 30. Dependencia con la distancia

La fuerza de Coulomb sigue una ley:

<div class="formula-panel">
  <span class="formula-panel__label">Inversa del cuadrado</span>
  <div class="formula-panel__formula">F ∝ 1/r²</div>
</div>

Si duplicamos r:

- F pasa a `F/4`.

Si triplicamos r:

- F pasa a `F/9`.

---

## 31. Comparación con gravitación

La forma matemática recuerda a:

**F<sub>g</sub> = Gm<sub>1</sub>m<sub>2</sub>/r²**

Pero existen diferencias importantes.

La gravedad clásica entre masas positivas es:

- atractiva.

La fuerza eléctrica puede ser:

- atractiva;
- repulsiva.

Además, las intensidades características son muy diferentes.

---

## 32. Ejemplo de Coulomb

Dos cargas:

- `q<sub>1</sub> = +2,0 μC`;
- `q<sub>2</sub> = −3,0 μC`;

están separadas:

**r = 0,50 m**

Entonces:

**F = k|q<sub>1</sub>q<sub>2</sub>|/r²**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Fuerza entre dos cargas</h3>
  <div class="worked-example-card__steps">
    <p>F = 8,99×10<sup>9</sup> × (2,0×10<sup>−6</sup>)(3,0×10<sup>−6</sup>)/(0,50)²</p>
    <p><strong>F ≈ 0,216 N</strong></p>
    <p>Como los signos son opuestos, la interacción es atractiva.</p>
  </div>
</div>

---

## 33. Principio de superposición

Si una carga recibe fuerzas de varias cargas:

> **la fuerza total es la suma vectorial de las fuerzas individuales.**

<div class="formula-panel">
  <span class="formula-panel__label">Superposición</span>
  <div class="formula-panel__formula">F<sub>total</sub> = F<sub>1</sub> + F<sub>2</sub> + ...</div>
</div>

Cada interacción se calcula como si las demás cargas no alteraran la ley de Coulomb.

---

## 34. Superposición es vectorial

No podemos sumar solamente:

- módulos.

Debemos considerar:

- dirección;
- sentido.

En una dimensión podemos usar signos.

En dos o tres dimensiones debemos trabajar con:

- componentes.

---

## 35. Campo eléctrico

En lugar de pensar continuamente en la fuerza entre cada par de cargas, introducimos el:

**campo eléctrico**

Una distribución de cargas modifica el espacio que la rodea.

En cada punto podemos definir un vector E.

---

## 36. Definición de campo eléctrico

El campo eléctrico en un punto se define mediante la fuerza sobre una carga de prueba positiva:

<div class="formula-panel">
  <span class="formula-panel__label">Campo eléctrico</span>
  <div class="formula-panel__formula">E = F/q<sub>prueba</sub></div>
</div>

La carga de prueba debe ser:

- suficientemente pequeña;

para no modificar apreciablemente la distribución que produce el campo.

---

## 37. Campo no es fuerza

Esta distinción es esencial.

### Campo E

Propiedad del espacio producida por las cargas fuente.

### Fuerza F

Interacción sobre una carga colocada en ese campo.

La relación es:

<div class="formula-panel">
  <span class="formula-panel__label">Fuerza sobre una carga</span>
  <div class="formula-panel__formula">F = qE</div>
</div>

---

## 38. Unidad del campo eléctrico

De:

**E = F/q**

obtenemos:

<div class="formula-panel">
  <span class="formula-panel__label">Unidad</span>
  <div class="formula-panel__formula">N/C</div>
</div>

Más adelante veremos una unidad equivalente:

**V/m**

---

## 39. Dirección de E

La dirección del campo se define como la dirección de la fuerza que experimentaría:

- una carga de prueba positiva.

Por lo tanto:

### Cerca de una carga positiva

E apunta hacia afuera.

### Cerca de una carga negativa

E apunta hacia la carga.

---

## 40. Fuerza sobre carga negativa

Si:

**q < 0**

en:

**F = qE**

la fuerza apunta:

- en sentido opuesto a E.

Por eso el campo no apunta necesariamente en la dirección de la fuerza sobre cualquier carga.

---

## 41. Campo de una carga puntual

Para una carga puntual Q:

<div class="formula-panel">
  <span class="formula-panel__label">Módulo del campo</span>
  <div class="formula-panel__formula">E = k|Q|/r²</div>
</div>

La dirección es:

- radial.

El sentido depende del signo de Q.

---

## 42. Campo de carga positiva

Para:

**Q > 0**

las líneas y vectores de campo apuntan:

- radialmente hacia afuera.

```text
      ↑
   ↖  |  ↗
←──── + ────→
   ↙  |  ↘
      ↓
```

---

## 43. Campo de carga negativa

Para:

**Q < 0**

el campo apunta:

- radialmente hacia adentro.

```text
      ↓
   ↘  |  ↙
→──── − ────←
   ↗  |  ↖
      ↑
```

---

## 44. Superposición de campos

Los campos también se suman vectorialmente:

<div class="formula-panel">
  <span class="formula-panel__label">Campo total</span>
  <div class="formula-panel__formula">E<sub>total</sub> = E<sub>1</sub> + E<sub>2</sub> + ...</div>
</div>

Esto es una enorme ventaja conceptual.

Podemos calcular el campo primero y después obtener la fuerza sobre cualquier carga:

**F = qE<sub>total</sub>**

---

## 45. Ejemplo de campo puntual

Una carga:

**Q = +4,0 μC**

produce un campo a:

**r = 0,30 m**

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Campo de una carga puntual</h3>
  <div class="worked-example-card__steps">
    <p>E = kQ/r²</p>
    <p>E = 8,99×10<sup>9</sup> × 4,0×10<sup>−6</sup> /(0,30)²</p>
    <p><strong>E ≈ 4,0 × 10<sup>5</sup> N/C</strong></p>
    <p>El campo apunta alejándose de la carga positiva.</p>
  </div>
</div>

---

## 46. Líneas de campo

Las **líneas de campo eléctrico** son una representación gráfica.

En cada punto:

- la tangente a la línea indica la dirección de E.

La densidad visual de líneas puede utilizarse cualitativamente para representar:

- intensidad del campo.

---

## 47. Reglas de líneas de campo

En electrostática:

- salen de cargas positivas;
- terminan en cargas negativas o en el infinito;
- no se cruzan;
- son más densas donde E es mayor;
- son perpendiculares a superficies conductoras en equilibrio.

No son:

- trayectorias materiales;
- “hilos” físicos.

---

## 48. Por qué no se cruzan

Si dos líneas de campo se cruzaran:

- habría dos direcciones diferentes de E en el mismo punto.

Pero un vector en un punto tiene:

- una única dirección.

Por eso las líneas de campo no pueden cruzarse.

---

## 49. Dipolo eléctrico

Un **dipolo eléctrico** ideal está formado por:

- +q;
- −q;

separadas por una pequeña distancia.

Sus líneas de campo salen de:

- la carga positiva;

y terminan en:

- la negativa.

Los dipolos son importantes en:

- moléculas;
- materiales;
- electromagnetismo.

---

## 50. Energía potencial eléctrica

La interacción eléctrica conservativa permite definir una:

**energía potencial eléctrica**

Para dos cargas puntuales:

<div class="formula-panel">
  <span class="formula-panel__label">Energía potencial</span>
  <div class="formula-panel__formula">U = k q<sub>1</sub>q<sub>2</sub>/r</div>
</div>

si elegimos:

**U = 0**

cuando:

**r → ∞**

---

## 51. Signo de U

### Cargas del mismo signo

`q<sub>1</sub>q<sub>2</sub> > 0`

Entonces:

**U > 0**

### Cargas de signo opuesto

`q<sub>1</sub>q<sub>2</sub> < 0`

Entonces:

**U < 0**

con el cero elegido en el infinito.

---

## 52. Interpretar U positiva

Dos cargas del mismo signo:

- se repelen.

Para acercarlas desde muy lejos:

- un agente externo debe aportar energía.

Por eso el sistema puede adquirir:

**U > 0**

---

## 53. Interpretar U negativa

Dos cargas opuestas:

- se atraen.

Al acercarse desde el infinito:

- la energía potencial disminuye.

Con el cero en infinito:

**U < 0**

Un valor negativo no significa:

- “energía imposible”.

Depende de la referencia elegida.

---

## 54. Trabajo de la fuerza eléctrica

Como la fuerza electrostática es conservativa:

<div class="formula-panel">
  <span class="formula-panel__label">Trabajo eléctrico</span>
  <div class="formula-panel__formula">W<sub>eléctrica</sub> = −ΔU</div>
</div>

Si la fuerza eléctrica realiza trabajo positivo:

- U disminuye.

---

## 55. Potencial eléctrico

Definimos el **potencial eléctrico** como energía potencial por unidad de carga de prueba:

<div class="formula-panel">
  <span class="formula-panel__label">Potencial eléctrico</span>
  <div class="formula-panel__formula">V = U/q</div>
</div>

Es una magnitud:

**escalar**

---

## 56. Potencial no es energía potencial

Otra distinción fundamental.

### Potencial V

Propiedad del punto del espacio producida por las cargas fuente.

### Energía potencial U

Depende también de la carga que colocamos allí.

La relación es:

<div class="formula-panel">
  <span class="formula-panel__label">Relación</span>
  <div class="formula-panel__formula">U = qV</div>
</div>

---

## 57. Unidad del potencial

De:

**V = U/q**

la unidad es:

<div class="formula-panel">
  <span class="formula-panel__label">Volt</span>
  <div class="formula-panel__formula">1 V = 1 J/C</div>
</div>

La unidad se llama:

**volt**

símbolo:

**V**

No debemos confundir:

- V como símbolo de potencial;
- V como nombre de unidad en una medida.

---

## 58. Potencial de una carga puntual

Para una carga puntual Q:

<div class="formula-panel">
  <span class="formula-panel__label">Potencial</span>
  <div class="formula-panel__formula">V = kQ/r</div>
</div>

A diferencia del módulo del campo:

**E ∝ 1/r²**

el potencial varía como:

**1/r**

---

## 59. El potencial lleva el signo de la carga fuente

Para:

**Q > 0**

y cero en infinito:

**V > 0**

Para:

**Q < 0**

**V < 0**

El potencial es escalar.

No tiene dirección.

---

## 60. Superposición de potenciales

El potencial total se obtiene sumando algebraicamente:

<div class="formula-panel">
  <span class="formula-panel__label">Superposición escalar</span>
  <div class="formula-panel__formula">V<sub>total</sub> = V<sub>1</sub> + V<sub>2</sub> + ...</div>
</div>

Esto puede ser más sencillo que sumar campos porque:

- no hay componentes vectoriales.

---

## 61. Ejemplo de potencial

Una carga:

**Q = +3,0 μC**

a una distancia:

**r = 0,20 m**

produce:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Potencial de una carga puntual</h3>
  <div class="worked-example-card__steps">
    <p>V = kQ/r</p>
    <p>V = 8,99×10<sup>9</sup> × 3,0×10<sup>−6</sup> / 0,20</p>
    <p><strong>V ≈ 1,35 × 10<sup>5</sup> V</strong></p>
  </div>
</div>

---

## 62. Diferencia de potencial

Entre dos puntos A y B:

<div class="formula-panel">
  <span class="formula-panel__label">Diferencia de potencial</span>
  <div class="formula-panel__formula">ΔV = V<sub>B</sub> − V<sub>A</sub></div>
</div>

También la llamamos:

- tensión;
- voltaje;

según el contexto.

---

## 63. Relación entre ΔU y ΔV

Como:

**U = qV**

para una carga q:

<div class="formula-panel">
  <span class="formula-panel__label">Cambio energético</span>
  <div class="formula-panel__formula">ΔU = qΔV</div>
</div>

Por lo tanto:

<div class="formula-panel">
  <span class="formula-panel__label">Trabajo eléctrico</span>
  <div class="formula-panel__formula">W<sub>eléctrica</sub> = −qΔV</div>
</div>

---

## 64. Una carga positiva y el potencial

Una carga positiva que se mueve espontáneamente bajo la fuerza eléctrica tiende a:

- disminuir U.

Como:

**U = qV**

con `q > 0`, esto suele corresponder a moverse hacia:

- menor V.

---

## 65. Una carga negativa y el potencial

Para:

**q < 0**

disminuir U puede significar:

- aumentar V.

Por eso es incorrecto decir:

> “todas las cargas se mueven espontáneamente hacia menor potencial”.

Eso sólo describe directamente el comportamiento energético de cargas positivas.

---

## 66. Campo y potencial

El campo eléctrico apunta en la dirección en que el potencial disminuye más rápidamente.

En forma conceptual:

> **E apunta “cuesta abajo” en el potencial.**

En una dimensión uniforme:

<div class="formula-panel">
  <span class="formula-panel__label">Campo uniforme</span>
  <div class="formula-panel__formula">E<sub>x</sub> = −ΔV/Δx</div>
</div>

si el campo y el desplazamiento son colineales.

---

## 67. Relación general — profundización

En forma vectorial:

<div class="formula-panel">
  <span class="formula-panel__label">Campo y potencial</span>
  <div class="formula-panel__formula">E = −∇V</div>
</div>

Y entre dos puntos:

<div class="formula-panel">
  <span class="formula-panel__label">Diferencia de potencial</span>
  <div class="formula-panel__formula">V<sub>B</sub> − V<sub>A</sub> = −∫<sub>A</sub><sup>B</sup> E · dl</div>
</div>

Queda como profundización matemática.

---

## 68. Superficies equipotenciales

Una **superficie equipotencial** contiene puntos con el mismo potencial:

<div class="formula-panel">
  <span class="formula-panel__label">Equipotencial</span>
  <div class="formula-panel__formula">V = constante</div>
</div>

Mover una carga a lo largo de una equipotencial ideal produce:

**ΔV = 0**

---

## 69. Trabajo sobre una equipotencial

Si:

**ΔV = 0**

entonces:

**ΔU = qΔV = 0**

Por lo tanto, la fuerza eléctrica realiza:

<div class="formula-panel">
  <span class="formula-panel__label">Equipotencial</span>
  <div class="formula-panel__formula">W<sub>eléctrica</sub> = 0</div>
</div>

para desplazamientos completamente sobre la misma equipotencial.

---

## 70. Campo perpendicular a equipotenciales

En electrostática:

> **las líneas de campo son perpendiculares a las superficies equipotenciales.**

Si E tuviera una componente tangencial:

- el potencial cambiaría al movernos sobre la superficie;
- dejaría de ser equipotencial.

---

## 71. Equipotenciales de una carga puntual

Para una carga puntual:

**V = kQ/r**

Los puntos a igual r tienen igual potencial.

Las equipotenciales son:

- esferas concéntricas.

En un dibujo bidimensional aparecen como:

- circunferencias.

---

## 72. Conductor en equilibrio como equipotencial

En un conductor en equilibrio electrostático:

- todo el conductor está al mismo potencial.

Si hubiera una diferencia de potencial interna:

- existiría campo;
- las cargas seguirían desplazándose.

---

## 73. Campo uniforme entre placas — modelo

Dos grandes placas paralelas con cargas opuestas pueden producir, lejos de los bordes, un campo aproximadamente uniforme.

```text
++++++++++++++
↓↓↓↓↓↓↓↓↓↓↓↓↓↓
--------------
```

En ese modelo:

- E tiene módulo aproximadamente constante;
- las equipotenciales son planos paralelos a las placas.

---

## 74. Relación entre E y ΔV en placas

Si el campo es uniforme y la separación es d:

<div class="formula-panel">
  <span class="formula-panel__label">Campo uniforme</span>
  <div class="formula-panel__formula">|ΔV| = Ed</div>
</div>

si medimos entre puntos separados en la dirección del campo.

Equivalente:

<div class="formula-panel">
  <span class="formula-panel__label">Unidad equivalente</span>
  <div class="formula-panel__formula">1 N/C = 1 V/m</div>
</div>

---

## 75. Capacitor — profundización

Un **capacitor** es un dispositivo formado por dos conductores separados por un material aislante o por vacío.

Puede mantener:

- cargas iguales y opuestas;

en sus conductores.

Su función principal es:

- almacenar energía en el campo eléctrico.

---

## 76. Un capacitor ideal puede tener carga neta cero

Si una placa tiene:

**+Q**

y la otra:

**−Q**

la carga neta del conjunto es:

**0**

Sin embargo existe:

- separación de carga;
- campo eléctrico;
- energía almacenada.

Esto muestra que:

> **carga neta cero no significa ausencia de fenómenos eléctricos.**

---

## 77. Capacitancia

Definimos:

<div class="formula-panel">
  <span class="formula-panel__label">Capacitancia</span>
  <div class="formula-panel__formula">C = Q/|ΔV|</div>
</div>

donde Q es el módulo de la carga de una placa.

Unidad:

**farad (F)**

---

## 78. Farad

<div class="formula-panel">
  <span class="formula-panel__label">Unidad</span>
  <div class="formula-panel__formula">1 F = 1 C/V</div>
</div>

Un farad es una capacitancia muy grande para muchos dispositivos pequeños.

Son comunes:

- μF;
- nF;
- pF.

---

## 79. Qué determina la capacitancia

La capacitancia depende principalmente de:

- geometría;
- tamaño;
- separación;
- material entre conductores.

En un capacitor ideal lineal:

- C no depende directamente de Q;
- ni de ΔV por separado.

La relación entre ambos es:

**Q = C|ΔV|**

---

## 80. Capacitor de placas paralelas — profundización

Para dos placas paralelas grandes en vacío:

<div class="formula-panel">
  <span class="formula-panel__label">Capacitancia ideal</span>
  <div class="formula-panel__formula">C = ε<sub>0</sub>A/d</div>
</div>

donde:

- A es el área de cada placa;
- d es la separación.

---

## 81. Interpretación de C = ε<sub>0</sub>A/d

### Aumentar A

Aumenta C.

### Aumentar d

Disminuye C.

La expresión supone:

- placas grandes;
- separación pequeña respecto de sus dimensiones;
- efectos de borde despreciables.

---

## 82. Dieléctrico — profundización

Si introducimos un material dieléctrico entre las placas:

- el material se polariza;
- la relación entre Q y ΔV cambia.

En muchos casos ideales:

<div class="formula-panel">
  <span class="formula-panel__label">Con dieléctrico</span>
  <div class="formula-panel__formula">C = εA/d</div>
</div>

donde ε caracteriza la respuesta eléctrica del material.

---

## 83. Energía almacenada en un capacitor

Para un capacitor ideal:

<div class="formula-panel">
  <span class="formula-panel__label">Energía</span>
  <div class="formula-panel__formula">U<sub>C</sub> = ½C(ΔV)²</div>
</div>

Formas equivalentes:

<div class="formula-panel">
  <span class="formula-panel__label">Equivalentes</span>
  <div class="formula-panel__formula">U<sub>C</sub> = Q²/(2C) = ½Q|ΔV|</div>
</div>

---

## 84. ¿Dónde está la energía?

Es frecuente decir:

- “la energía está en el capacitor”.

Una descripción más física es:

> **la energía está asociada al campo eléctrico producido entre y alrededor de los conductores.**

Esta idea será importante en electromagnetismo.

---

## 85. Ejemplo de capacitor

Un capacitor tiene:

- `C = 20 μF`;
- `|ΔV| = 12 V`.

Entonces:

**Q = C|ΔV|**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Carga y energía</h3>
  <div class="worked-example-card__steps">
    <p>Q = 20×10<sup>−6</sup> × 12</p>
    <p>Q = 2,4×10<sup>−4</sup> C</p>
    <p>U<sub>C</sub> = ½ × 20×10<sup>−6</sup> × 12²</p>
    <p><strong>U<sub>C</sub> = 1,44×10<sup>−3</sup> J</strong></p>
  </div>
</div>

---

## 86. Seguridad con capacitores

Un capacitor puede mantener una diferencia de potencial incluso después de desconectar una fuente.

Dependiendo del dispositivo puede almacenar suficiente energía para ser peligroso.

Por eso:

- no abrir fuentes de alimentación;
- no manipular capacitores grandes;
- no cortocircuitar dispositivos;
- no experimentar con tensión de red.

Las experiencias escolares deben usar:

- materiales electrostáticos simples;
- bajas energías.

---

## 87. Experiencia segura: electrización por fricción

### Materiales

- regla plástica;
- tela;
- papelitos livianos.

### Procedimiento

1. Frotá la regla con la tela.
2. Acercala a los papelitos.
3. Observá la atracción sin contacto inicial.

### Interpretación

La regla electrizada:

- polariza los papelitos;
- puede atraerlos aunque sean inicialmente neutros.

---

## 88. Experiencia segura: globo y pared

Frotamos un globo con una tela o cabello seco.

Luego lo acercamos a una pared.

El globo puede quedar adherido temporalmente.

La pared permanece aproximadamente neutra, pero:

- sus cargas se polarizan.

Esto muestra que:

> **un objeto neutro puede experimentar una fuerza eléctrica.**

---

## 89. Electroscopio — idea experimental

Un electroscopio permite detectar:

- presencia de carga;
- redistribución;
- inducción.

Dos láminas cargadas con igual signo:

- se repelen.

El dispositivo no mide directamente una carga exacta sin calibración.

---

## 90. Campo mediante semillas o simulación

El campo eléctrico no puede verse directamente.

Podemos representarlo mediante:

- simulaciones;
- mapas vectoriales;
- configuraciones de electrodos en medios apropiados.

Las líneas observadas o dibujadas son:

- representaciones del campo;
- no objetos físicos.

---

## 91. Estrategia para problemas de Coulomb

1. Dibujá las cargas.
2. Elegí ejes.
3. Determiná el signo de cada carga.
4. Calculá cada módulo con Coulomb.
5. Determiná dirección y sentido.
6. Descomponé en componentes si hace falta.
7. Sumá vectorialmente.
8. Revisá unidades.

---

## 92. Estrategia para campo eléctrico

1. Identificá las cargas fuente.
2. Elegí el punto donde calcular E.
3. Dibujá el campo de cada fuente.
4. Calculá cada módulo.
5. Sumá vectores.
6. Si luego colocan una carga q:
   - usá `F = qE`.

No mezcles:

- campo;
- fuerza.

---

## 93. Estrategia para potencial

1. Elegí la referencia de potencial.
2. Calculá cada contribución.
3. Conservá el signo de cada carga.
4. Sumá escalares:
   - `V<sub>total</sub> = ΣV<sub>i</sub>`.
5. Si colocás una carga q:
   - `U = qV`.

No sumes potencial como si fuera vector.

---

## 94. Campo cero no implica potencial cero

Puede existir un punto donde:

**E = 0**

pero:

**V ≠ 0**

Ejemplo:

- punto medio entre dos cargas positivas iguales.

Los campos se cancelan vectorialmente.

Los potenciales:

- se suman.

---

## 95. Potencial cero no implica campo cero

Entre una carga:

**+Q**

y una:

**−Q**

puede existir un lugar donde:

**V = 0**

por cancelación escalar.

Sin embargo:

- E puede ser distinto de cero.

Campo y potencial contienen información relacionada, pero no son la misma magnitud.

---

## 96. Fuerza cero y energía

Si en un punto:

**E = 0**

la fuerza instantánea sobre una carga de prueba es cero.

Eso no determina por sí solo:

- si el equilibrio es estable;
- el valor de U;
- el valor de V.

Debemos analizar cómo cambia el campo o la energía alrededor.

---

## 97. Errores frecuentes

### “Un cuerpo neutro no tiene cargas”

Falso.

### “Al frotar se crean electrones”

No. Se transfieren cargas.

### “Los protones circulan por un cable metálico”

No en la conducción metálica ordinaria.

### “Un conductor siempre tiene carga cero”

No. Puede tener carga neta.

### “Campo eléctrico y fuerza eléctrica son lo mismo”

No.

### “Las líneas de campo son trayectorias reales”

No.

### “El potencial eléctrico tiene dirección”

No. Es escalar.

### “Potencial y energía potencial son lo mismo”

No.

### “Toda carga va hacia menor potencial”

No. Eso depende del signo de q.

### “Si V = 0 entonces E = 0”

No necesariamente.

### “Un capacitor almacena sólo carga”

Almacena separación de carga y energía asociada al campo.

---

## 98. Problemas y ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Conceptos</strong>
  </div>
  <ol>
    <li>Definí carga eléctrica.</li>
    <li>Explicá conservación y cuantización de la carga.</li>
    <li>Distinguí conductor y aislante.</li>
    <li>Explicá electrización por fricción, contacto e inducción.</li>
    <li>¿Qué diferencia existe entre campo eléctrico y fuerza eléctrica?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Coulomb y campo</strong>
  </div>
  <ol>
    <li>Dos cargas de `+2 μC` y `+5 μC` están a 0,30 m. Calculá la fuerza y describí su sentido.</li>
    <li>Repetí si la segunda carga es negativa.</li>
    <li>Calculá E a 0,20 m de una carga `Q = +1 μC`.</li>
    <li>Una carga `q = −2 nC` se coloca en un campo de `5000 N/C`. Calculá el módulo de la fuerza e indicá su sentido respecto de E.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Superposición y potencial</strong>
  </div>
  <ol>
    <li>Dos cargas iguales positivas se ubican simétricamente. Analizá E y V en el punto medio.</li>
    <li>Una carga `+Q` y otra `−Q` están simétricas. Analizá V y E en el punto medio.</li>
    <li>Calculá V a 0,50 m de `Q = −4 μC`.</li>
    <li>Una carga de `+3 μC` pasa entre puntos cuya diferencia de potencial es `−200 V`. Calculá ΔU.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Energía y equipotenciales</strong>
  </div>
  <ol>
    <li>Calculá U para `q<sub>1</sub> = +2 μC`, `q<sub>2</sub> = −3 μC` y `r = 0,40 m`.</li>
    <li>Explicá el signo del resultado.</li>
    <li>Una carga se mueve sobre una equipotencial. ¿Qué trabajo realiza la fuerza electrostática?</li>
    <li>Un campo uniforme de 2000 V/m actúa entre dos puntos separados 0,030 m en la dirección del campo. Calculá el módulo de ΔV.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Derivá `V = kQ/r` a partir de `U = kQq/r` y la definición V = U/q.</li>
    <li>Explicá por qué las equipotenciales deben ser perpendiculares a E en electrostática.</li>
    <li>Un capacitor de 5 μF se conecta a 20 V. Calculá Q y U<sub>C</sub>.</li>
    <li>Explicá por qué un capacitor con carga neta total cero puede almacenar energía.</li>
  </ol>
</div>

---

## 99. Ejemplo integrado: carga, campo, potencial y energía

Una carga fuente:

**Q = +2,0 μC**

está aislada.

Analizamos un punto a:

**r = 0,50 m**

### Campo

<div class="formula-panel">
  <span class="formula-panel__label">Campo</span>
  <div class="formula-panel__formula">E = kQ/r²</div>
</div>

**E = 8,99×10<sup>9</sup> × 2,0×10<sup>−6</sup> /(0,50)²**

**E ≈ 7,19 × 10<sup>4</sup> N/C**

El campo apunta:

- radialmente hacia afuera.

### Potencial

<div class="formula-panel">
  <span class="formula-panel__label">Potencial</span>
  <div class="formula-panel__formula">V = kQ/r</div>
</div>

**V ≈ 3,60 × 10<sup>4</sup> V**

### Colocamos una carga de prueba

Sea:

**q = −3,0 nC**

La fuerza es:

<div class="formula-panel">
  <span class="formula-panel__label">Fuerza</span>
  <div class="formula-panel__formula">F = qE</div>
</div>

Su módulo:

**|F| ≈ 2,16 × 10<sup>−4</sup> N**

Como q es negativa:

- la fuerza apunta hacia Q.

### Energía potencial

<div class="formula-panel">
  <span class="formula-panel__label">Energía</span>
  <div class="formula-panel__formula">U = qV</div>
</div>

**U ≈ −1,08 × 10<sup>−4</sup> J**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>Una fuente, cuatro conceptos distintos</h3>
  <div class="worked-example-card__steps">
    <p>E describe el punto y es vectorial.</p>
    <p>V describe el punto y es escalar.</p>
    <p>F depende además de la carga colocada.</p>
    <p>U también depende de la carga colocada.</p>
    <p><strong>Campo y potencial pertenecen a la configuración fuente; fuerza y energía potencial dependen además del cuerpo de prueba.</strong></p>
  </div>
</div>

---

## 100. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Qué significa que la carga eléctrica se conserve?</summary>
  <div class="lesson-quiz__answer">
    Que la carga total de un sistema aislado permanece constante; los procesos de electrización redistribuyen o transfieren carga, no crean carga neta de la nada.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Qué expresa la cuantización de la carga?</summary>
  <div class="lesson-quiz__answer">
    Que en la electrostática ordinaria la carga neta aparece en múltiplos enteros de la carga elemental: q = ne.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Cómo se define el campo eléctrico?</summary>
  <div class="lesson-quiz__answer">
    Como la fuerza por unidad de carga de prueba positiva: E = F/q_prueba.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Qué diferencia existe entre potencial y energía potencial?</summary>
  <div class="lesson-quiz__answer">
    El potencial V caracteriza el punto del espacio debido a las cargas fuente; la energía potencial de una carga q colocada allí es U = qV.
  </div>
</details>

<details class="lesson-quiz">
  <summary>5. ¿Puede existir E = 0 con V distinto de cero?</summary>
  <div class="lesson-quiz__answer">
    Sí. Por ejemplo, en el punto medio entre dos cargas positivas iguales, los campos pueden cancelarse mientras los potenciales se suman.
  </div>
</details>

<details class="lesson-quiz">
  <summary>6. ¿Qué mide la capacitancia?</summary>
  <div class="lesson-quiz__answer">
    La relación entre el módulo de carga separada y la diferencia de potencial: C = Q/|ΔV|, para un capacitor ideal lineal.
  </div>
</details>

---

## 101. Resumen

- La carga eléctrica puede ser positiva o negativa.
- Un cuerpo neutro puede contener enormes cantidades de cargas de ambos signos.
- La carga total de un sistema aislado se conserva.
- En la materia ordinaria, `q = ne`.
- La electrización puede ocurrir por fricción, contacto e inducción.
- Los conductores permiten desplazamiento macroscópico relativamente libre de portadores de carga.
- Los aislantes pueden polarizarse aunque sus cargas no circulen libremente.
- La ley de Coulomb es `F = k|q<sub>1</sub>q<sub>2</sub>|/r²`.
- Las fuerzas eléctricas se suman vectorialmente.
- El campo eléctrico se define como `E = F/q<sub>prueba</sub>`.
- Para una carga puntual, `E = k|Q|/r²`.
- El campo es vectorial.
- Las líneas de campo salen de positivas y terminan en negativas o en el infinito.
- La energía potencial de dos cargas puntuales es `U = kq<sub>1</sub>q<sub>2</sub>/r`.
- El potencial es `V = U/q`.
- Para una carga puntual, `V = kQ/r`.
- El potencial es escalar.
- La diferencia de potencial satisface `ΔU = qΔV`.
- En electrostática, E apunta hacia potencial decreciente.
- Las superficies equipotenciales son perpendiculares al campo.
- Campo cero no implica potencial cero, ni viceversa.
- Un capacitor mantiene separación de carga y almacena energía en su campo.
- La capacitancia es `C = Q/|ΔV|`.
- Para placas paralelas ideales, `C = ε<sub>0</sub>A/d`.
- La energía de un capacitor ideal puede escribirse `U<sub>C</sub> = ½C(ΔV)²`.
- Estos conceptos serán la base para estudiar corriente eléctrica y circuitos.

---

## 102. Siguiente tema recomendado

**F-23 — Corriente eléctrica y circuitos**

Hasta ahora estudiamos principalmente cargas en configuraciones electrostáticas.

En la próxima lección permitiremos que las cargas:

- se desplacen de manera sostenida.

Vamos a estudiar:

- corriente;
- intensidad;
- portadores;
- diferencia de potencial;
- resistencia;
- resistividad;
- ley de Ohm;
- potencia;
- efecto Joule;
- energía eléctrica;
- serie y paralelo;
- fuerza electromotriz;
- leyes de Kirchhoff;
- amperímetro;
- voltímetro;
- multímetro;
- seguridad eléctrica.
