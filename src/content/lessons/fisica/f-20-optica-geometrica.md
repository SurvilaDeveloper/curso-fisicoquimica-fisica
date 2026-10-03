---
title: "Óptica geométrica"
description: "Cómo modelar la propagación de la luz mediante rayos para estudiar sombras, reflexión, espejos, refracción, lentes, instrumentos ópticos y el ojo humano."
slug: "optica-geometrica"

course: "fisica"
module: "optica"
order: 20

level: "intermedio"
cycle: "ambos"

yearsApprox: [4, 5, 6]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - acustica

skills:
  - naturaleza-y-propagacion-de-la-luz
  - rayos
  - sombras
  - reflexion
  - leyes-de-reflexion
  - espejo-plano
  - espejos-esfericos
  - foco
  - formacion-de-imagenes
  - ecuacion-de-espejos
  - aumento
  - refraccion
  - indice-de-refraccion
  - ley-de-snell
  - reflexion-interna-total
  - lentes-convergentes
  - lentes-divergentes
  - ecuacion-de-lentes
  - instrumentos-opticos
  - ojo-humano

hasExercises: true
hasQuiz: true
hasExperiment: true

deepening: true
status: "complete"
---

## Ver un objeto no significa que “los ojos envían rayos”

Entramos en una habitación iluminada y vemos una mesa.

¿Qué ocurre físicamente?

Una descripción sencilla es:

- una fuente emite luz;
- la luz interactúa con la mesa;
- parte de esa luz llega a nuestros ojos;
- el sistema visual procesa la información recibida.

La óptica geométrica simplifica la propagación luminosa usando:

**rayos**

que representan direcciones de propagación.

> **Los rayos no son objetos materiales. Son herramientas geométricas para modelar cómo se propaga la luz.**

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>La óptica geométrica describe muy bien muchas situaciones usando rayos rectilíneos, reflexión y refracción. Es un modelo aproximado: en F-21 veremos fenómenos como interferencia y difracción que requieren una descripción ondulatoria.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta lección deberías poder:

- interpretar la propagación de la luz mediante el modelo de rayos;
- comprender cuándo es útil la propagación rectilínea;
- construir sombras y penumbras;
- aplicar las leyes de reflexión;
- analizar imágenes en espejos planos;
- distinguir espejos cóncavos y convexos;
- identificar foco y distancia focal;
- construir imágenes con rayos notables;
- usar la ecuación de espejos;
- calcular aumento;
- explicar la refracción;
- interpretar el índice de refracción;
- aplicar la ley de Snell;
- comprender la reflexión interna total;
- distinguir lentes convergentes y divergentes;
- construir imágenes con lentes;
- usar la ecuación de lentes delgadas;
- interpretar instrumentos ópticos sencillos;
- comprender el ojo como sistema óptico;
- reconocer los límites de la óptica geométrica.

---

## 1. Naturaleza de la luz: varios modelos

A lo largo de la historia se utilizaron distintos modelos para comprender la luz.

En este curso veremos:

- modelo de rayos;
- modelo ondulatorio;
- posteriormente, aspectos cuánticos.

No debemos pensar que un modelo útil necesariamente describe todos los fenómenos.

En esta lección trabajaremos principalmente con:

**óptica geométrica**

---

## 2. La luz puede propagarse en el vacío

A diferencia del sonido:

- la luz no necesita un medio material.

Puede viajar por:

- aire;
- agua;
- vidrio;
- vacío.

La luz que recibimos del Sol atraviesa una enorme región de vacío antes de llegar a la Tierra.

---

## 3. Velocidad de la luz en el vacío

La velocidad de la luz en el vacío es:

<div class="formula-panel">
  <span class="formula-panel__label">Constante c</span>
  <div class="formula-panel__formula">c = 299 792 458 m/s</div>
</div>

En problemas escolares usamos frecuentemente:

<div class="formula-panel">
  <span class="formula-panel__label">Aproximación</span>
  <div class="formula-panel__formula">c ≈ 3,00 × 10<sup>8</sup> m/s</div>
</div>

---

## 4. Velocidad de la luz en materiales

En muchos materiales transparentes:

- la velocidad de propagación es menor que c.

Esa diferencia permitirá definir:

- índice de refracción.

No significa que la frecuencia de la luz deba disminuir al entrar al material.

---

## 5. Modelo de rayo

Un **rayo luminoso** es una línea orientada que representa:

- la dirección local de propagación de la luz.

Lo dibujamos como:

```text
────────────→
```

El rayo:

- no tiene espesor físico;
- no es una cuerda;
- no es una partícula material.

Es una idealización geométrica.

---

## 6. Propagación rectilínea

En un medio homogéneo y dentro del régimen de óptica geométrica:

> **la luz se modela propagándose en líneas rectas.**

Esta aproximación explica:

- sombras;
- cámaras oscuras;
- trazado de rayos.

Pero tiene límites cuando aparecen fenómenos de:

- difracción;
- interferencia.

---

## 7. Fuente puntual

Una fuente puntual ideal emite luz desde una región despreciablemente pequeña.

Podemos representar muchos rayos saliendo en distintas direcciones:

```text
      ↗
   ↗
●────────→
   ↘
      ↘
```

Las fuentes reales tienen tamaño finito.

---

## 8. Fuente extensa

Una fuente extensa contiene muchos puntos emisores.

Ejemplos:

- lámpara;
- Sol visto desde la Tierra;
- pantalla.

Esto permite explicar por qué aparecen:

- sombra completa;
- penumbra.

---

## 9. Sombra

Si un objeto opaco bloquea los rayos provenientes de una fuente puntual:

- detrás aparece una región donde no llegan rayos directos.

La llamamos:

**sombra**

La geometría puede analizarse trazando:

- rayos límites desde la fuente;
- tangentes al obstáculo.

---

## 10. Umbra y penumbra

Con una fuente extensa pueden aparecer:

### Umbra

Región donde queda bloqueada toda la fuente.

### Penumbra

Región donde sólo parte de la fuente queda bloqueada.

Esto explica aspectos geométricos de:

- eclipses;
- sombras de bordes no perfectamente definidos.

---

## 11. Cámara oscura

Una pequeña abertura permite que rayos provenientes de distintos puntos de un objeto formen una imagen invertida sobre una pantalla.

```text
objeto          orificio          pantalla
  ↑                •                 ↓
  | \             /                 |
  |  \           /                  |
```

La inversión surge de:

- propagación aproximadamente rectilínea.

---

## 12. Reflexión

Cuando la luz llega a una superficie:

- parte puede reflejarse;
- parte puede transmitirse;
- parte puede absorberse.

La **reflexión** es el retorno de una parte de la luz hacia el medio de procedencia.

---

## 13. Normal a la superficie

Para estudiar reflexión definimos la:

**normal**

como la recta perpendicular a la superficie en el punto de incidencia.

Los ángulos se miden respecto de:

- la normal;

no respecto de la superficie.

---

## 14. Ángulo de incidencia

El ángulo entre:

- rayo incidente;
- normal;

se llama:

**θ<sub>i</sub>**

---

## 15. Ángulo de reflexión

El ángulo entre:

- rayo reflejado;
- normal;

se llama:

**θ<sub>r</sub>**

---

## 16. Primera ley de reflexión

Rayo incidente, normal y rayo reflejado se encuentran:

> **en un mismo plano.**

---

## 17. Segunda ley de reflexión

<div class="formula-panel">
  <span class="formula-panel__label">Ley de reflexión</span>
  <div class="formula-panel__formula">θ<sub>i</sub> = θ<sub>r</sub></div>
</div>

La igualdad vale midiendo ambos ángulos:

- respecto de la normal.

---

## 18. Error frecuente: medir respecto de la superficie

Si un rayo forma:

**30°**

con la superficie, entonces forma:

**60°**

con la normal.

La ley de reflexión usa:

**60°**

como ángulo de incidencia.

---

## 19. Reflexión especular

Una superficie muy lisa puede reflejar rayos de manera ordenada.

Se denomina:

**reflexión especular**

Ejemplo aproximado:

- espejo.

Permite formar imágenes claras.

---

## 20. Reflexión difusa

Una superficie rugosa a escala relevante puede enviar luz reflejada en muchas direcciones.

Se denomina:

**reflexión difusa**

Gracias a ella podemos ver objetos mate desde muchas posiciones.

Cada pequeña región puede seguir obedeciendo la ley de reflexión localmente.

---

## 21. Espejo plano

Un espejo plano forma una imagen que aparece:

- detrás del espejo.

El observador interpreta los rayos reflejados como si provinieran de allí.

La imagen es:

**virtual**

---

## 22. Imagen real e imagen virtual

### Imagen real

Los rayos luminosos convergen físicamente en la posición de la imagen.

Puede proyectarse sobre una pantalla.

### Imagen virtual

Los rayos no convergen físicamente allí.

Son sus prolongaciones hacia atrás las que parecen encontrarse.

No puede proyectarse directamente en una pantalla ubicada en esa posición.

---

## 23. Propiedades del espejo plano

Para un objeto frente a un espejo plano ideal:

- imagen virtual;
- derecha;
- mismo tamaño;
- misma distancia detrás del espejo que el objeto delante.

<div class="formula-panel">
  <span class="formula-panel__label">Espejo plano</span>
  <div class="formula-panel__formula">d<sub>imagen</sub> = d<sub>objeto</sub></div>
</div>

en módulo.

---

## 24. “Inversión lateral”

Un espejo plano no intercambia físicamente izquierda y derecha.

La transformación geométrica es:

- inversión respecto del eje perpendicular al espejo.

Lo que solemos llamar “inversión lateral” depende de cómo comparamos nuestra imagen con nosotros mismos.

Es más preciso decir:

> **la coordenada perpendicular al espejo cambia de sentido en la representación virtual.**

---

## 25. Espejos esféricos

Un espejo esférico puede modelarse como una porción de esfera.

Hay dos casos principales:

### Cóncavo

La superficie reflectante está del lado interior.

### Convexo

La superficie reflectante está del lado exterior.

---

## 26. Eje principal

En un espejo esférico definimos:

- vértice V;
- centro de curvatura C;
- eje principal.

El eje principal pasa por:

- V;
- C.

---

## 27. Radio de curvatura

La distancia entre:

- vértice;
- centro de curvatura;

es:

<div class="formula-panel">
  <span class="formula-panel__label">Radio de curvatura</span>
  <div class="formula-panel__formula">R = VC</div>
</div>

---

## 28. Foco de un espejo cóncavo

Rayos aproximadamente paralelos al eje principal que llegan a un espejo cóncavo paraxial se reflejan convergiendo cerca de un punto:

**F**

Ese punto es el:

**foco**

---

## 29. Distancia focal de espejo esférico

Para espejos esféricos paraxiales:

<div class="formula-panel">
  <span class="formula-panel__label">Relación aproximada</span>
  <div class="formula-panel__formula">f = R/2</div>
</div>

Esta relación depende de la aproximación de rayos cercanos al eje.

---

## 30. Foco de un espejo convexo

En un espejo convexo, rayos paralelos al eje se reflejan divergiendo.

Sus prolongaciones hacia atrás parecen provenir de:

- un foco virtual detrás del espejo.

Por eso el espejo convexo es:

**divergente**

---

## 31. Rayos notables para espejo cóncavo

Para construir imágenes usamos rayos sencillos.

### Rayo paralelo al eje

Se refleja pasando por F.

### Rayo que pasa por F

Se refleja paralelo al eje.

### Rayo dirigido hacia C

Se refleja aproximadamente sobre sí mismo.

---

## 32. Imagen de un objeto más allá de C

Para un espejo cóncavo con objeto más allá de C:

- la imagen se forma entre C y F;
- es real;
- invertida;
- reducida.

---

## 33. Objeto en C

Si el objeto está en C:

- imagen en C;
- real;
- invertida;
- mismo tamaño.

---

## 34. Objeto entre C y F

Si el objeto está entre C y F:

- imagen más allá de C;
- real;
- invertida;
- aumentada.

---

## 35. Objeto en F

Si el objeto está exactamente en el foco dentro del modelo paraxial:

- los rayos reflejados salen paralelos.

La imagen se considera:

- en el infinito ideal.

---

## 36. Objeto entre F y el espejo

Si el objeto está entre F y el espejo cóncavo:

- los rayos reflejados divergen;
- sus prolongaciones forman una imagen detrás del espejo.

La imagen es:

- virtual;
- derecha;
- aumentada.

Éste es el principio de un espejo de aumento.

---

## 37. Imagen en espejo convexo

Para un objeto real frente a un espejo convexo ideal:

- imagen virtual;
- derecha;
- reducida;
- situada detrás del espejo.

Por eso ofrece:

- un campo visual amplio;

aunque los objetos aparenten ser más pequeños.

---

## 38. Ecuación de espejos

Para espejos esféricos paraxiales:

<div class="formula-panel">
  <span class="formula-panel__label">Ecuación de espejos</span>
  <div class="formula-panel__formula">1/f = 1/d<sub>o</sub> + 1/d<sub>i</sub></div>
</div>

donde:

- d<sub>o</sub> es distancia de objeto;
- d<sub>i</sub> es distancia de imagen;
- f es distancia focal.

---

## 39. Convención de signos que usaremos para espejos

Para evitar ambigüedades adoptaremos:

### Objeto real frente al espejo

d<sub>o</sub> > 0

### Imagen real frente al espejo

d<sub>i</sub> > 0

### Imagen virtual detrás del espejo

d<sub>i</sub> < 0

### Espejo cóncavo

`f > 0`

### Espejo convexo

`f < 0`

Otras convenciones existen.

Lo importante es:

> **usar una sola convención de forma consistente.**

---

## 40. Aumento en espejos

Definimos el aumento lateral:

<div class="formula-panel">
  <span class="formula-panel__label">Aumento</span>
  <div class="formula-panel__formula">M = h<sub>i</sub>/h<sub>o</sub> = −d<sub>i</sub>/d<sub>o</sub></div>
</div>

### M > 0

Imagen derecha.

### M < 0

Imagen invertida.

### |M| > 1

Aumentada.

### |M| < 1

Reducida.

---

## 41. Ejemplo de espejo cóncavo

Tenemos:

- `f = +20 cm`;
- d<sub>o</sub> = +60 cm.

Ecuación:

**1/20 = 1/60 + 1/d<sub>i</sub>**

Entonces:

**1/d<sub>i</sub> = 1/20 − 1/60 = 2/60**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Espejo cóncavo</h3>
  <div class="worked-example-card__steps">
    <p>d<sub>i</sub> = +30 cm</p>
    <p>M = −30/60 = −0,50</p>
    <p><strong>Imagen real, invertida y de la mitad del tamaño.</strong></p>
  </div>
</div>

---

## 42. Refracción

La **refracción** ocurre cuando la luz atraviesa una frontera entre medios donde cambia su velocidad de propagación.

Puede cambiar:

- dirección;
- longitud de onda.

En una frontera estacionaria, la frecuencia permanece:

- constante.

---

## 43. Índice de refracción

Definimos el índice de refracción:

<div class="formula-panel">
  <span class="formula-panel__label">Índice de refracción</span>
  <div class="formula-panel__formula">n = c/v</div>
</div>

donde:

- c es velocidad de la luz en vacío;
- v es velocidad de fase de la luz en el medio.

---

## 44. Índice sin unidades

Como es una razón de velocidades:

**n**

es adimensional.

En materiales transparentes ordinarios suele cumplirse:

**n > 1**

porque:

**v < c**

---

## 45. Ejemplo de índice

Si la luz se propaga en un material a:

**v = 2,00 × 10<sup>8</sup> m/s**

entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Índice de refracción</h3>
  <div class="worked-example-card__steps">
    <p>n = c/v</p>
    <p>n = 3,00×10<sup>8</sup> / 2,00×10<sup>8</sup></p>
    <p><strong>n = 1,50</strong></p>
  </div>
</div>

---

## 46. Frecuencia y longitud de onda al cambiar de medio

En la frontera:

<div class="formula-panel">
  <span class="formula-panel__label">Frecuencia</span>
  <div class="formula-panel__formula">f<sub>1</sub> = f<sub>2</sub></div>
</div>

Pero:

**v<sub>1</sub> ≠ v<sub>2</sub>**

Entonces, como:

**v = λf**

tenemos:

**λ<sub>1</sub> ≠ λ<sub>2</sub>**

La frecuencia se conserva; la longitud de onda cambia.

---

## 47. Ley de Snell

Para dos medios:

<div class="formula-panel">
  <span class="formula-panel__label">Ley de Snell</span>
  <div class="formula-panel__formula">n<sub>1</sub> sen θ<sub>1</sub> = n<sub>2</sub> sen θ<sub>2</sub></div>
</div>

Los ángulos se miden:

- respecto de la normal.

---

## 48. Hacia un medio de mayor índice

Si:

**n<sub>2</sub> > n<sub>1</sub>**

entonces para incidencia oblicua ordinaria:

**θ<sub>2</sub> < θ<sub>1</sub>**

El rayo se desvía:

- hacia la normal.

---

## 49. Hacia un medio de menor índice

Si:

**n<sub>2</sub> < n<sub>1</sub>**

entonces:

**θ<sub>2</sub> > θ<sub>1</sub>**

El rayo se desvía:

- alejándose de la normal.

---

## 50. Incidencia normal

Si:

**θ<sub>1</sub> = 0°**

entonces:

**θ<sub>2</sub> = 0°**

El rayo no cambia de dirección.

Pero sí puede cambiar:

- velocidad;
- longitud de onda.

Por lo tanto:

> **refracción no implica necesariamente desviación angular.**

---

## 51. Ejemplo con Snell

Luz pasa de aire idealizado:

**n<sub>1</sub> = 1,00**

a vidrio:

**n<sub>2</sub> = 1,50**

con:

**θ<sub>1</sub> = 30°**

Entonces:

**1,00 sen30° = 1,50 senθ<sub>2</sub>**

**0,50 = 1,50 senθ<sub>2</sub>**

**senθ<sub>2</sub> = 1/3**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Refracción aire-vidrio</h3>
  <div class="worked-example-card__steps">
    <p>θ<sub>2</sub> ≈ 19,5°</p>
    <p><strong>El rayo se acerca a la normal.</strong></p>
  </div>
</div>

---

## 52. Profundidad aparente

Un objeto bajo agua puede parecer:

- más cerca de la superficie.

Esto ocurre porque los rayos que salen del agua:

- se refractan;
- el observador prolonga aproximadamente esos rayos en línea recta hacia atrás.

La posición aparente no coincide con:

- la posición real.

---

## 53. Reflexión interna total

Cuando la luz intenta pasar:

- de un medio de mayor índice;
- a uno de menor índice;

puede existir un ángulo a partir del cual deja de aparecer rayo refractado propagante.

Toda la luz idealmente queda reflejada.

Esto se llama:

**reflexión interna total**

---

## 54. Dos condiciones necesarias

Para reflexión interna total necesitamos:

1. n<sub>1</sub> > n<sub>2</sub>;
2. ángulo de incidencia mayor que el ángulo crítico.

No puede ocurrir de la misma manera al pasar:

- de menor n a mayor n.

---

## 55. Ángulo crítico

En el límite, el rayo refractado forma:

**90°**

con la normal.

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Ángulo crítico</span>
  <div class="formula-panel__formula">sen θ<sub>c</sub> = n<sub>2</sub>/n<sub>1</sub></div>
</div>

válido cuando:

**n<sub>1</sub> > n<sub>2</sub>**

---

## 56. Ejemplo de ángulo crítico

Vidrio:

**n<sub>1</sub> = 1,50**

aire:

**n<sub>2</sub> = 1,00**

Entonces:

**senθ<sub>c</sub> = 1/1,5 = 0,667**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Vidrio hacia aire</h3>
  <div class="worked-example-card__steps">
    <p><strong>θ<sub>c</sub> ≈ 41,8°</strong></p>
    <p>Para incidencias mayores, puede ocurrir reflexión interna total ideal.</p>
  </div>
</div>

---

## 57. Fibras ópticas

Una fibra óptica puede guiar luz utilizando:

- un núcleo;
- un revestimiento de menor índice;
- condiciones adecuadas de incidencia.

La reflexión interna total contribuye a mantener la luz confinada.

En sistemas reales también importan:

- modos;
- absorción;
- dispersión;
- pérdidas.

---

## 58. Lentes

Una **lente** es un elemento óptico transparente limitado por superficies que refractan la luz.

En el modelo de lente delgada estudiaremos:

- lentes convergentes;
- lentes divergentes.

Las representamos mediante:

- eje principal;
- centro óptico;
- focos.

---

## 59. Lente convergente

Una lente convergente hace que rayos paralelos al eje principal:

- converjan aproximadamente en un foco real.

En el modelo usual:

**f > 0**

---

## 60. Lente divergente

Una lente divergente hace que rayos paralelos:

- salgan divergiendo.

Sus prolongaciones hacia atrás parecen provenir de un foco virtual.

En nuestra convención:

**f < 0**

---

## 61. Dos focos

Una lente delgada tiene dos focos principales:

- uno a cada lado.

Para una lente simétrica en un mismo medio:

- están a igual distancia del centro óptico.

La distancia es:

**|f|**

---

## 62. Rayo paralelo en lente convergente

Un rayo paralelo al eje:

- emerge pasando por el foco del lado de salida.

---

## 63. Rayo por el foco anterior

Un rayo que llega dirigido hacia el foco del lado del objeto:

- emerge paralelo al eje.

---

## 64. Rayo por el centro óptico

En el modelo de lente delgada paraxial:

- un rayo que atraviesa el centro óptico se dibuja aproximadamente sin desviación neta.

Es una aproximación geométrica.

---

## 65. Imagen con lente convergente: objeto más allá de 2f

Si el objeto está más allá de:

**2f**

la imagen es:

- real;
- invertida;
- reducida;
- entre f y 2f del lado opuesto.

---

## 66. Objeto en 2f

Para objeto en:

**2f**

la imagen es:

- real;
- invertida;
- mismo tamaño;
- en 2f del otro lado.

---

## 67. Objeto entre f y 2f

La imagen es:

- real;
- invertida;
- aumentada;
- más allá de 2f.

---

## 68. Objeto en f

Si el objeto está exactamente en el foco ideal:

- los rayos emergen paralelos;
- la imagen está idealmente en el infinito.

---

## 69. Objeto dentro de f

Si el objeto está entre:

- lente;
- foco;

la lente convergente forma una imagen:

- virtual;
- derecha;
- aumentada;
- del mismo lado que el objeto.

Éste es el principio de una lupa simple.

---

## 70. Imagen con lente divergente

Para un objeto real frente a una lente divergente ideal:

- imagen virtual;
- derecha;
- reducida;
- ubicada entre la lente y el foco del lado del objeto.

---

## 71. Ecuación de lentes delgadas

Usaremos:

<div class="formula-panel">
  <span class="formula-panel__label">Lente delgada</span>
  <div class="formula-panel__formula">1/f = 1/d<sub>o</sub> + 1/d<sub>i</sub></div>
</div>

La forma algebraica coincide con la ecuación usada para espejos.

Pero:

- el significado geométrico;
- la convención de signos;

debe aplicarse correctamente.

---

## 72. Convención de signos que usaremos para lentes

### Objeto real

d<sub>o</sub> > 0

### Imagen real en el lado opuesto

d<sub>i</sub> > 0

### Imagen virtual en el mismo lado que el objeto

d<sub>i</sub> < 0

### Lente convergente

`f > 0`

### Lente divergente

`f < 0`

---

## 73. Aumento en lentes

<div class="formula-panel">
  <span class="formula-panel__label">Aumento lateral</span>
  <div class="formula-panel__formula">M = h<sub>i</sub>/h<sub>o</sub> = −d<sub>i</sub>/d<sub>o</sub></div>
</div>

La interpretación es:

- `M > 0` → derecha;
- `M < 0` → invertida;
- `|M| > 1` → aumentada;
- `|M| < 1` → reducida.

---

## 74. Ejemplo de lente convergente

Datos:

- `f = +10 cm`;
- d<sub>o</sub> = +30 cm.

Entonces:

**1/10 = 1/30 + 1/d<sub>i</sub>**

**1/d<sub>i</sub> = 2/30**

**d<sub>i</sub> = +15 cm**

Aumento:

**M = −15/30 = −0,50**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Lente convergente</h3>
  <div class="worked-example-card__steps">
    <p>d<sub>i</sub> = +15 cm</p>
    <p>M = −0,50</p>
    <p><strong>Imagen real, invertida y reducida.</strong></p>
  </div>
</div>

---

## 75. Potencia óptica de una lente — profundización

La potencia óptica se define como:

<div class="formula-panel">
  <span class="formula-panel__label">Potencia óptica</span>
  <div class="formula-panel__formula">D = 1/f</div>
</div>

si f se expresa en:

**metros**

La unidad es:

**dioptría (D)**

---

## 76. Signo de la potencia

Con nuestra convención:

### Lente convergente

`f > 0`

por lo tanto:

`D > 0`

### Lente divergente

`f < 0`

por lo tanto:

`D < 0`

---

## 77. Instrumentos ópticos

Muchos instrumentos combinan:

- lentes;
- espejos;
- aberturas.

Ejemplos:

- lupa;
- cámara;
- microscopio;
- telescopio;
- binoculares.

Cada uno manipula rayos para producir:

- imágenes reales;
- imágenes virtuales;
- aumentos angulares o lineales.

---

## 78. Lupa

Una lupa es una lente convergente usada con el objeto:

- dentro de la distancia focal.

Produce una imagen:

- virtual;
- derecha;
- aumentada.

El aumento útil depende también de:

- posición del ojo;
- distancia de observación.

---

## 79. Cámara fotográfica

Una cámara forma una imagen real sobre:

- sensor;
- película.

Una lente convergente produce sobre ese plano una imagen generalmente:

- real;
- invertida.

El sistema ajusta:

- enfoque;
- apertura;
- tiempo de exposición.

---

## 80. Enfoque en una cámara

Para objetos a diferentes distancias, cambia la posición donde se forma la imagen.

El sistema debe ajustar:

- posición relativa lente-sensor;
- o propiedades del conjunto óptico.

La ecuación:

**1/f = 1/d<sub>o</sub> + 1/d<sub>i</sub>**

ayuda a describir este cambio.

---

## 81. Microscopio compuesto — idea general

Un microscopio compuesto utiliza al menos:

- objetivo;
- ocular.

El objetivo produce una imagen intermedia aumentada.

El ocular actúa como:

- lupa sobre esa imagen.

El análisis completo es más elaborado que una sola lente.

---

## 82. Telescopio — idea general

Un telescopio busca aumentar el tamaño angular aparente de objetos lejanos.

Puede usar:

- lentes;
- espejos;
- combinaciones.

Ejemplos:

- telescopio refractor;
- telescopio reflector.

---

## 83. Ojo humano como sistema óptico

El ojo utiliza principalmente:

- córnea;
- cristalino;

para refractar luz y formar una imagen sobre:

**retina**

La retina contiene células sensibles que transforman la señal luminosa en:

- señales nerviosas.

---

## 84. La imagen en la retina

El sistema óptico del ojo forma sobre la retina una imagen:

- real;
- invertida.

La percepción visual final no consiste simplemente en “mirar una imagen derecha” en el cerebro.

El procesamiento visual es:

- neurológico;
- mucho más complejo.

---

## 85. Acomodación

El ojo puede enfocar objetos a diferentes distancias modificando principalmente:

- la forma del cristalino;
- su potencia óptica efectiva.

Este proceso se llama:

**acomodación**

---

## 86. Punto próximo y punto remoto

El ojo tiene límites de enfoque.

### Punto remoto

Posición más lejana que puede enfocarse sin acomodación adicional significativa.

### Punto próximo

Posición más cercana que puede enfocarse con máxima acomodación confortable.

Cambian entre personas y con la edad.

---

## 87. Miopía — aplicación

En una descripción óptica simplificada, en la miopía un objeto lejano puede enfocarse:

- antes de la retina;

si el ojo no compensa.

Puede corregirse utilizando:

- lentes divergentes;

según el caso clínico.

---

## 88. Hipermetropía — aplicación

En una descripción simplificada, en la hipermetropía el sistema óptico puede tender a enfocar:

- detrás de la retina;

para ciertos objetos si la acomodación no compensa.

Puede corregirse con:

- lentes convergentes;

según el caso.

---

## 89. Presbicia

Con la edad puede disminuir la capacidad de acomodación.

Esto dificulta enfocar:

- objetos cercanos.

La presbicia no es exactamente lo mismo que:

- hipermetropía;

aunque ambas pueden requerir potencia convergente para ciertas tareas.

---

## 90. Astigmatismo — aplicación

En el astigmatismo:

- diferentes direcciones del sistema óptico pueden tener distinta potencia.

No se corrige simplemente con una lente esférica ideal única.

Se utilizan:

- correcciones cilíndricas o tóricas;

según evaluación profesional.

---

## 91. Seguridad con la luz

No debemos mirar directamente:

- al Sol;
- a fuentes láser intensas;
- a haces concentrados.

Una lente puede concentrar energía luminosa y producir:

- daño ocular;
- calentamiento;
- incendio.

Los experimentos escolares deben usar fuentes seguras y de baja potencia.

---

## 92. Experiencia segura: ley de reflexión

### Materiales

- espejo plano;
- hoja;
- regla;
- transportador;
- fuente luminosa segura de haz estrecho.

### Procedimiento

1. Dibujá la superficie del espejo.
2. Marcá la normal.
3. Hacé incidir el haz.
4. Marcá rayo incidente y reflejado.
5. Medí θ<sub>i</sub> y θ<sub>r</sub>.

### Resultado esperado

<div class="formula-panel">
  <span class="formula-panel__label">Comprobación</span>
  <div class="formula-panel__formula">θ<sub>i</sub> ≈ θ<sub>r</sub></div>
</div>

---

## 93. Experiencia: imagen en espejo plano

Colocá un objeto delante de un espejo plano.

Podemos estimar:

- distancia del objeto al espejo;
- posición aparente de la imagen.

El modelo predice igualdad de distancias en módulo.

Una construcción geométrica con rayos ayuda a visualizar:

- por qué la imagen es virtual.

---

## 94. Experiencia: refracción

Podemos colocar un lápiz dentro de un vaso transparente con agua.

El lápiz parece:

- “quebrado” en la superficie.

No está físicamente doblado.

La posición aparente cambia por:

- refracción en la interfaz agua-aire.

---

## 95. Experiencia: lente convergente

Con una lente convergente y una fuente distante segura podemos proyectar una imagen sobre una pantalla.

Al mover la pantalla podemos encontrar:

- la posición de enfoque.

### Seguridad

Nunca usar el Sol como fuente para este experimento.

Una lente puede concentrar radiación solar peligrosamente.

---

## 96. Trazado de rayos antes de usar ecuaciones

Antes de resolver algebraicamente conviene:

1. dibujar eje principal;
2. ubicar objeto;
3. ubicar foco;
4. trazar al menos dos rayos notables;
5. estimar si la imagen debe ser real o virtual;
6. estimar orientación;
7. estimar tamaño;
8. recién después usar ecuaciones.

Así podemos detectar respuestas algebraicas incompatibles con la geometría.

---

## 97. Estrategia para espejos

1. Identificá plano, cóncavo o convexo.
2. Marcá V, F y C cuando corresponda.
3. Dibujá el objeto.
4. Trazá rayos notables.
5. Clasificá la imagen.
6. Aplicá la convención de signos.
7. Usá 1/f = 1/d<sub>o</sub> + 1/d<sub>i</sub>.
8. Calculá M.
9. Compará con el dibujo.

---

## 98. Estrategia para lentes

1. Identificá convergente o divergente.
2. Marcá ambos focos.
3. Dibujá el objeto.
4. Trazá rayos notables.
5. Decidí si la imagen esperada es real o virtual.
6. Aplicá la convención de signos.
7. Usá la ecuación de lente.
8. Calculá M.
9. Verificá posición, orientación y tamaño.

---

## 99. Errores frecuentes

### “Los rayos son partículas dibujadas de luz”

No. Son líneas geométricas que representan dirección de propagación.

### “La luz necesita aire”

No.

### “El ángulo de reflexión se mide desde el espejo”

No. Se mide desde la normal.

### “Una imagen virtual no existe”

Existe como configuración óptica aparente de procedencia de rayos, aunque no pueda proyectarse directamente en una pantalla.

### “Todo espejo cóncavo da imágenes aumentadas”

No. Depende de la posición del objeto.

### “Un espejo convexo puede formar una imagen real de un objeto real común”

No dentro del caso elemental estudiado.

### “Al entrar a vidrio, la luz cambia de frecuencia”

En una frontera estacionaria, la frecuencia se conserva.

### “Refracción siempre significa doblarse”

No. En incidencia normal cambia la velocidad sin cambio de dirección.

### “Reflexión interna total puede ocurrir de aire a vidrio”

No en esa dirección ordinaria; requiere pasar de mayor a menor índice.

### “Toda lente convergente produce imagen real”

No. Si el objeto está dentro de f, produce imagen virtual.

### “Una imagen invertida tiene aumento negativo porque mide una altura negativa físicamente”

El signo es una convención geométrica que codifica orientación.

---

## 100. Problemas y ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Conceptos</strong>
  </div>
  <ol>
    <li>¿Qué representa un rayo luminoso?</li>
    <li>Explicá la diferencia entre imagen real y virtual.</li>
    <li>Enunciá las leyes de reflexión.</li>
    <li>Definí índice de refracción.</li>
    <li>¿Qué condiciones hacen posible la reflexión interna total?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Reflexión y refracción</strong>
  </div>
  <ol>
    <li>Un rayo incide a 35° respecto de la normal. Calculá el ángulo de reflexión.</li>
    <li>Un rayo forma 20° con la superficie. ¿Qué ángulo forma con la normal?</li>
    <li>Calculá n para un medio donde v = 2,25 × 10<sup>8</sup> m/s.</li>
    <li>Una luz pasa de aire a un medio de n = 1,40 con incidencia de 30°. Calculá el ángulo refractado.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Espejos</strong>
  </div>
  <ol>
    <li>Un espejo cóncavo tiene `f = +15 cm` y un objeto a d<sub>o</sub> = 45 cm. Calculá d<sub>i</sub>.</li>
    <li>Calculá M y clasificá la imagen.</li>
    <li>Un espejo convexo tiene `f = −20 cm` y objeto a 40 cm. Calculá la imagen.</li>
    <li>Realizá un trazado de rayos que confirme cualitativamente cada resultado.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Lentes</strong>
  </div>
  <ol>
    <li>Una lente convergente tiene `f = +12 cm` y objeto a 36 cm. Calculá d<sub>i</sub> y M.</li>
    <li>Una lente convergente tiene objeto a 8 cm y `f = 12 cm`. Calculá y clasificá la imagen.</li>
    <li>Una lente divergente tiene `f = −10 cm` y objeto real a 30 cm. Calculá d<sub>i</sub>.</li>
    <li>Compará los resultados algebraicos con construcciones de rayos.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Derivá la expresión del ángulo crítico a partir de la ley de Snell.</li>
    <li>Explicá por qué la frecuencia se conserva y λ cambia al entrar a otro medio.</li>
    <li>Analizá por qué una cámara necesita cambiar el enfoque para objetos a distintas distancias.</li>
    <li>Explicá por qué la óptica geométrica debe fallar cuando las dimensiones de aberturas y obstáculos se vuelven comparables con λ.</li>
  </ol>
</div>

---

## 101. Ejemplo integrado: lente convergente y refracción

Una lente delgada convergente tiene:

- `f = +20 cm`;
- objeto real a d<sub>o</sub> = 60 cm.

### Posición de imagen

<div class="formula-panel">
  <span class="formula-panel__label">Ecuación de lente</span>
  <div class="formula-panel__formula">1/f = 1/d<sub>o</sub> + 1/d<sub>i</sub></div>
</div>

**1/20 = 1/60 + 1/d<sub>i</sub>**

**1/d<sub>i</sub> = 2/60**

**d<sub>i</sub> = +30 cm**

### Aumento

<div class="formula-panel">
  <span class="formula-panel__label">Aumento</span>
  <div class="formula-panel__formula">M = −d<sub>i</sub>/d<sub>o</sub></div>
</div>

**M = −30/60 = −0,50**

Entonces:

- imagen real;
- invertida;
- reducida.

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>Geometría, signos y significado físico</h3>
  <div class="worked-example-card__steps">
    <p>d<sub>i</sub> = +30 cm → imagen real.</p>
    <p>M = −0,50 → invertida y de la mitad del tamaño.</p>
    <p><strong>La ecuación y el trazado de rayos deben contar la misma historia física.</strong></p>
  </div>
</div>

---

## 102. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Qué es un rayo luminoso?</summary>
  <div class="lesson-quiz__answer">
    Una línea orientada usada por la óptica geométrica para representar la dirección local de propagación de la luz.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Respecto de qué línea se miden los ángulos de incidencia y reflexión?</summary>
  <div class="lesson-quiz__answer">
    Respecto de la normal a la superficie en el punto de incidencia.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Qué diferencia hay entre una imagen real y una virtual?</summary>
  <div class="lesson-quiz__answer">
    En una imagen real los rayos convergen físicamente y puede proyectarse en una pantalla; en una virtual convergen sólo sus prolongaciones aparentes.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Qué ocurre con frecuencia, velocidad y longitud de onda al entrar a otro medio?</summary>
  <div class="lesson-quiz__answer">
    En una frontera estacionaria la frecuencia se conserva; la velocidad puede cambiar y por eso también cambia la longitud de onda.
  </div>
</details>

<details class="lesson-quiz">
  <summary>5. ¿Cuándo puede ocurrir reflexión interna total?</summary>
  <div class="lesson-quiz__answer">
    Cuando la luz pasa desde un medio de mayor índice a uno de menor índice y el ángulo de incidencia supera el ángulo crítico.
  </div>
</details>

<details class="lesson-quiz">
  <summary>6. ¿Toda lente convergente produce una imagen real?</summary>
  <div class="lesson-quiz__answer">
    No. Si el objeto está dentro de la distancia focal, la imagen es virtual, derecha y aumentada.
  </div>
</details>

---

## 103. Resumen

- La óptica geométrica representa la propagación mediante rayos.
- Un rayo es una herramienta geométrica, no un objeto material.
- En medios homogéneos y dentro del régimen geométrico, la luz se modela propagándose en línea recta.
- Las fuentes extensas producen umbra y penumbra.
- La reflexión cumple θ<sub>i</sub> = θ<sub>r</sub>.
- Los ángulos se miden respecto de la normal.
- Un espejo plano forma una imagen virtual, derecha y de igual tamaño.
- Los espejos cóncavos pueden formar imágenes reales o virtuales según la posición del objeto.
- Los espejos convexos forman, para objetos reales ordinarios, imágenes virtuales, derechas y reducidas.
- Para espejos paraxiales, 1/f = 1/d<sub>o</sub> + 1/d<sub>i</sub>.
- El aumento es M = −d<sub>i</sub>/d<sub>o</sub>.
- La refracción aparece cuando cambia la velocidad de propagación al atravesar una frontera.
- `n = c/v`.
- La ley de Snell es n<sub>1</sub>senθ<sub>1</sub> = n<sub>2</sub>senθ<sub>2</sub>.
- La frecuencia permanece constante en una frontera estacionaria.
- La reflexión interna total requiere pasar de mayor a menor índice y superar el ángulo crítico.
- Una lente convergente tiene `f > 0`; una divergente, `f < 0` con nuestra convención.
- Para lentes delgadas, 1/f = 1/d<sub>o</sub> + 1/d<sub>i</sub>.
- La naturaleza real o virtual de una imagen depende del signo de d<sub>i</sub> en nuestra convención.
- Cámaras, lupas, microscopios y telescopios utilizan combinaciones de elementos ópticos.
- El ojo forma una imagen real sobre la retina y utiliza acomodación para enfocar.
- La óptica geométrica tiene límites que se vuelven evidentes cuando aparecen interferencia y difracción.

---

## 104. Siguiente tema recomendado

**F-21 — Óptica física**

Hasta ahora tratamos la luz mediante rayos.

En la próxima lección preguntaremos:

> ¿qué fenómenos no puede explicar ese modelo?

Estudiaremos:

- modelo ondulatorio de la luz;
- principio de Huygens;
- interferencia;
- doble rendija;
- difracción;
- polarización;
- dispersión;
- espectro visible;
- espectro electromagnético;
- órdenes de magnitud de longitud de onda;
- límites de la óptica geométrica.
