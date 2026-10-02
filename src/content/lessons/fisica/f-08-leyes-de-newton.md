---
title: "Leyes de Newton"
description: "Cómo relacionar fuerzas e interacciones con los cambios de movimiento mediante inercia, resultante, masa inercial, segunda ley, tercera ley y diagramas de cuerpo libre."
slug: "leyes-de-newton"

course: "fisica"
module: "dinamica"
order: 8

level: "intermedio"
cycle: "ambos"

yearsApprox: [3, 4, 5]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - movimiento-circular

skills:
  - fuerza
  - interaccion
  - sistemas-de-referencia-inerciales
  - primera-ley
  - inercia
  - segunda-ley
  - masa-inercial
  - resultante
  - tercera-ley
  - accion-reaccion
  - diagramas-de-cuerpo-libre

hasExercises: true
hasQuiz: true
hasExperiment: true

deepening: true
status: "complete"
---

## De describir el movimiento a explicar sus cambios

Hasta ahora estudiamos:

- posición;
- velocidad;
- aceleración;
- trayectorias;
- movimientos rectilíneos;
- proyectiles;
- movimiento circular.

Podíamos describir con bastante precisión **cómo se mueve** un cuerpo.

Ahora aparece una pregunta nueva:

> **¿qué hace que la velocidad de un cuerpo cambie?**

La dinámica relaciona:

- interacciones;
- fuerzas;
- masa;
- aceleración.

Las leyes de Newton forman uno de los modelos más importantes de la física clásica.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Las fuerzas no son necesarias para “mantener el movimiento”. En un sistema de referencia inercial, una fuerza neta es necesaria para cambiar la velocidad: modificar su módulo, su dirección o ambas cosas.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta lección deberías poder:

- interpretar una fuerza como interacción;
- distinguir fuerza individual y fuerza resultante;
- representar fuerzas como vectores;
- comprender qué es un sistema de referencia inercial;
- interpretar la primera ley de Newton;
- explicar la inercia;
- usar la segunda ley de Newton;
- interpretar la masa inercial;
- calcular una resultante;
- analizar equilibrio y movimiento uniforme;
- interpretar la tercera ley de Newton;
- identificar correctamente pares acción-reacción;
- construir diagramas de cuerpo libre;
- evitar errores frecuentes en la interpretación de fuerzas.

---

## 1. Fuerza: una manera de representar una interacción

Una **fuerza** no es una sustancia que un cuerpo “posee”.

Es una magnitud vectorial que utilizamos para representar una interacción.

Ejemplos:

- la Tierra atrae gravitatoriamente a una pelota;
- una mesa empuja a un libro apoyado sobre ella;
- una cuerda tira de un objeto;
- una persona empuja un carrito;
- un imán interactúa con otro imán.

En todos los casos hay:

> **un cuerpo que interactúa con otro.**

---

## 2. Una fuerza siempre tiene un agente

Cuando decimos:

> “sobre el libro actúa una fuerza”

conviene preguntar:

> **¿qué cuerpo ejerce esa fuerza sobre el libro?**

Por ejemplo:

- fuerza gravitatoria de la Tierra sobre el libro;
- fuerza de contacto de la mesa sobre el libro.

Nombrar el agente ayuda a no inventar fuerzas inexistentes.

---

## 3. Las fuerzas son vectores

Una fuerza tiene:

- módulo;
- dirección;
- sentido;
- punto de aplicación cuando el modelo lo requiere.

Por eso no podemos sumar fuerzas únicamente como números si apuntan en distintas direcciones.

En forma vectorial:

<div class="formula-panel">
  <span class="formula-panel__label">Fuerza</span>
  <div class="formula-panel__formula">F = (F<sub>x</sub>, F<sub>y</sub>, F<sub>z</sub>)</div>
</div>

---

## 4. Unidad de fuerza

En el Sistema Internacional, la fuerza se mide en:

**newton**

símbolo:

**N**

Más adelante veremos que:

<div class="formula-panel">
  <span class="formula-panel__label">Definición mediante la segunda ley</span>
  <div class="formula-panel__formula">1 N = 1 kg · m/s²</div>
</div>

---

## 5. Fuerzas individuales y resultante

Sobre un cuerpo pueden actuar varias fuerzas al mismo tiempo.

La **fuerza resultante** o **fuerza neta** es la suma vectorial de todas las fuerzas que actúan sobre ese cuerpo:

<div class="formula-panel">
  <span class="formula-panel__label">Resultante</span>
  <div class="formula-panel__formula">ΣF = F₁ + F₂ + F₃ + ...</div>
</div>

El símbolo:

**Σ**

significa suma.

---

## 6. Ejemplo de fuerzas en una dimensión

Sobre una caja actúan:

- 10 N hacia la derecha;
- 6 N hacia la izquierda.

Elegimos derecha positiva.

Entonces:

**F₁ = +10 N**

**F₂ = −6 N**

Resultante:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Resultante en una dimensión</h3>
  <div class="worked-example-card__steps">
    <p>ΣF = +10 N − 6 N</p>
    <p><strong>ΣF = +4 N</strong></p>
    <p>La resultante apunta hacia la derecha.</p>
  </div>
</div>

---

## 7. Resultante cero

Si:

<div class="formula-panel">
  <span class="formula-panel__label">Equilibrio traslacional</span>
  <div class="formula-panel__formula">ΣF = 0</div>
</div>

entonces la aceleración es cero.

Pero eso admite dos posibilidades:

- el cuerpo permanece en reposo;
- el cuerpo se mueve con velocidad constante.

<div class="lesson-callout lesson-callout--error">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">!</span>
    <strong>Resultante cero no significa necesariamente reposo</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Si la velocidad inicial no es cero, el cuerpo puede continuar moviéndose en línea recta con velocidad constante.</p>
  </div>
</div>

---

## 8. La idea de inercia

La **inercia** es la tendencia de un cuerpo a conservar su estado de movimiento cuando no existe una fuerza neta que lo cambie.

Eso significa conservar:

- reposo;
- o movimiento rectilíneo uniforme.

No significa que un cuerpo tenga una “fuerza de inercia” que lo empuja hacia adelante en un sistema inercial.

---

## 9. Primera ley de Newton

La primera ley puede expresarse así:

> **En un sistema de referencia inercial, si la fuerza resultante sobre un cuerpo es cero, su velocidad permanece constante.**

En símbolos:

<div class="formula-panel">
  <span class="formula-panel__label">Primera ley</span>
  <div class="formula-panel__formula">ΣF = 0 → v = constante</div>
</div>

Como consecuencia:

<div class="formula-panel">
  <span class="formula-panel__label">Equivalente cinemático</span>
  <div class="formula-panel__formula">ΣF = 0 → a = 0</div>
</div>

---

## 10. Reposo como caso particular

El reposo corresponde a:

**v = 0**

constante.

Entonces un cuerpo en reposo puede continuar en reposo si:

**ΣF = 0**

Pero la primera ley es más amplia.

También incluye cualquier:

**v ≠ 0**

que permanezca constante.

---

## 11. El movimiento no necesita una fuerza que lo sostenga

En la experiencia cotidiana parece que todo cuerpo termina deteniéndose.

Por ejemplo:

- una pelota rueda y se frena;
- un carrito deja de avanzar;
- una bicicleta pierde velocidad.

Eso puede llevar a pensar:

> “si no existe una fuerza hacia adelante, el objeto se detiene”.

Pero normalmente existen fuerzas como:

- rozamiento;
- resistencia del aire.

Si esas interacciones fueran despreciables:

- el movimiento uniforme podría continuar.

---

## 12. Experimento mental de Galileo

Una idea histórica importante es imaginar superficies con cada vez menos rozamiento.

Cuanto menor es el rozamiento:

- más tiempo puede mantenerse el movimiento.

El límite ideal sugiere:

> sin fuerza neta, no hace falta “alimentar” un movimiento rectilíneo uniforme.

Esta idea prepara la primera ley de Newton.

---

## 13. Sistemas de referencia inerciales

La primera y la segunda ley adoptan su forma sencilla en **sistemas de referencia inerciales**.

Podemos caracterizarlos como sistemas donde:

> un cuerpo libre de fuerza neta permanece en reposo o en movimiento rectilíneo uniforme.

Dos sistemas que se mueven uno respecto del otro con velocidad constante pueden ser ambos aproximadamente inerciales dentro del marco de la mecánica clásica.

---

## 14. Un sistema acelerado puede no ser inercial

Imaginemos estar dentro de un auto que acelera hacia adelante.

Podemos sentir que nuestro cuerpo “se va hacia atrás”.

Desde un sistema aproximadamente inercial ligado al suelo:

- nuestro cuerpo tiende a conservar su velocidad;
- el asiento del auto debe ejercer una fuerza para acelerarnos con el vehículo.

Desde el sistema acelerado del auto, la descripción requiere cuidados adicionales.

---

## 15. La Tierra como sistema aproximadamente inercial

Para muchos problemas escolares:

- una habitación;
- una cancha;
- una calle;

pueden tratarse como sistemas aproximadamente inerciales ligados a la Tierra.

Es una aproximación.

La Tierra:

- rota;
- orbita alrededor del Sol.

En problemas donde esos efectos importan, el análisis debe ser más preciso.

---

## 16. Segunda ley de Newton

La segunda ley relaciona:

- fuerza neta;
- masa;
- aceleración.

En un sistema inercial y para masa constante:

<div class="formula-panel">
  <span class="formula-panel__label">Segunda ley</span>
  <div class="formula-panel__formula">ΣF = m · a</div>
</div>

Es una ecuación vectorial.

---

## 17. La aceleración apunta como la resultante

Como:

**m > 0**

el vector aceleración tiene la misma dirección y sentido que:

**ΣF**

Entonces:

> la aceleración no tiene por qué apuntar en la dirección de la velocidad.

Ya vimos un ejemplo:

- movimiento circular;
- velocidad tangencial;
- resultante radial.

---

## 18. Masa inercial

En la segunda ley:

<div class="formula-panel">
  <span class="formula-panel__label">Masa inercial</span>
  <div class="formula-panel__formula">m = |ΣF| / |a|</div>
</div>

cuando fuerza y aceleración están alineadas.

La masa caracteriza cuánta aceleración produce una fuerza neta dada.

A mayor masa:

- menor aceleración para la misma resultante.

Por eso hablamos de resistencia al cambio de movimiento.

---

## 19. Masa no es peso

La masa:

- se mide en kg;
- caracteriza una propiedad inercial del cuerpo.

El peso:

- es una fuerza gravitatoria;
- se mide en N.

No debemos confundir:

**kg**

con:

**N**

El peso se estudiará con detalle en F-09.

---

## 20. Ejemplo de segunda ley

Sobre un carrito de:

**m = 4 kg**

actúa una resultante:

**ΣF = 12 N**

hacia la derecha.

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Aceleración producida por una resultante</h3>
  <div class="worked-example-card__steps">
    <p>a = ΣF/m</p>
    <p>a = 12 N / 4 kg</p>
    <p><strong>a = 3 m/s² hacia la derecha</strong></p>
  </div>
</div>

---

## 21. La unidad newton

De:

**F = ma**

tenemos:

**kg × m/s²**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Unidad derivada</span>
  <div class="formula-panel__formula">1 N = 1 kg · m/s²</div>
</div>

Una fuerza neta de 1 N aplicada a una masa de 1 kg produce una aceleración de:

**1 m/s²**

bajo el modelo correspondiente.

---

## 22. Misma fuerza, distinta masa

Supongamos una fuerza neta de:

**10 N**

### Cuerpo A

`m = 2 kg`

**a = 5 m/s²**

### Cuerpo B

`m = 5 kg`

**a = 2 m/s²**

La misma resultante produce menor aceleración en la masa mayor.

---

## 23. Misma masa, distinta fuerza

Para:

**m = 2 kg**

### Caso A

`ΣF = 4 N`

**a = 2 m/s²**

### Caso B

`ΣF = 10 N`

**a = 5 m/s²**

La aceleración es directamente proporcional a la fuerza neta si la masa permanece constante.

---

## 24. Segunda ley por componentes

Como es una ecuación vectorial:

<div class="formula-panel">
  <span class="formula-panel__label">Eje x</span>
  <div class="formula-panel__formula">ΣFₓ = maₓ</div>
</div>

<div class="formula-panel">
  <span class="formula-panel__label">Eje y</span>
  <div class="formula-panel__formula">ΣFᵧ = maᵧ</div>
</div>

Y en tres dimensiones:

**ΣF_z = ma_z**

Podemos resolver cada eje por separado.

---

## 25. Ejemplo en dos dimensiones

Sobre un cuerpo de:

**m = 2 kg**

actúan de manera neta:

- `ΣFₓ = 6 N`;
- `ΣFᵧ = 8 N`.

Entonces:

**aₓ = 3 m/s²**

**aᵧ = 4 m/s²**

Módulo:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Aceleración vectorial</h3>
  <div class="worked-example-card__steps">
    <p>a = (3, 4) m/s²</p>
    <p>|a| = √(3² + 4²)</p>
    <p><strong>|a| = 5 m/s²</strong></p>
  </div>
</div>

---

## 26. Fuerza neta y cambio de velocidad

La segunda ley no dice simplemente:

> “una fuerza produce movimiento”.

Dice que la resultante está asociada a:

**aceleración**

y por lo tanto a un cambio del vector velocidad.

Ese cambio puede ser:

- aumento de rapidez;
- disminución de rapidez;
- cambio de dirección;
- combinación de ambos.

---

## 27. Conexión con el movimiento circular

En MCU:

- la rapidez es constante;
- existe aceleración centrípeta.

Por segunda ley:

<div class="formula-panel">
  <span class="formula-panel__label">Componente radial</span>
  <div class="formula-panel__formula">ΣF_radial = m v²/r</div>
</div>

Esto confirma lo adelantado en F-07:

- “centrípeta” describe la resultante radial;
- no es necesariamente una fuerza adicional.

---

## 28. Tercera ley de Newton

Cuando un cuerpo A ejerce una fuerza sobre un cuerpo B:

> **B ejerce simultáneamente sobre A una fuerza de igual módulo y dirección, pero sentido opuesto.**

En símbolos:

<div class="formula-panel">
  <span class="formula-panel__label">Tercera ley</span>
  <div class="formula-panel__formula">F_A→B = −F_B→A</div>
</div>

---

## 29. Las dos fuerzas actúan sobre cuerpos distintos

Este punto es esencial.

En un par acción-reacción:

- una fuerza actúa sobre A;
- la otra actúa sobre B.

Por eso:

> **no se cancelan entre sí en el diagrama de cuerpo libre de un solo cuerpo.**

<div class="lesson-callout lesson-callout--error">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">!</span>
    <strong>Acción y reacción no se anulan sobre el mismo cuerpo</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Son iguales y opuestas, pero pertenecen a cuerpos diferentes. Para calcular la aceleración de un cuerpo sólo sumamos las fuerzas que actúan sobre ese cuerpo.</p>
  </div>
</div>

---

## 30. Ejemplo: mano y pared

Una persona empuja una pared.

### Fuerza 1

Mano sobre pared.

### Fuerza 2

Pared sobre mano.

Forman un par de tercera ley.

Tienen:

- igual módulo;
- sentidos opuestos;
- cuerpos receptores diferentes.

---

## 31. Ejemplo: Tierra y objeto

La Tierra atrae gravitatoriamente a una pelota.

La pelota también atrae gravitatoriamente a la Tierra.

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Par gravitatorio</span>
  <div class="formula-panel__formula">F_Tierra→pelota = −F_pelota→Tierra</div>
</div>

Las aceleraciones no son iguales porque las masas son enormemente diferentes.

---

## 32. Fuerzas iguales no implican aceleraciones iguales

Por tercera ley:

**|F_A→B| = |F_B→A|**

Pero por segunda ley:

**a = F/m**

Si:

**m_A ≠ m_B**

entonces:

**|a_A| ≠ |a_B|**

en general.

El cuerpo de menor masa puede experimentar una aceleración mucho mayor.

---

## 33. Ejemplo: dos personas sobre patines

Dos personas sobre patines se empujan.

Durante la interacción:

- A ejerce una fuerza sobre B;
- B ejerce una fuerza igual y opuesta sobre A.

Si una persona tiene menor masa:

- puede adquirir mayor aceleración.

No porque reciba una fuerza mayor.

Recibe una fuerza de igual módulo.

La diferencia está en la masa.

---

## 34. La tercera ley es simultánea

Las fuerzas de acción y reacción aparecen como partes de la misma interacción.

No ocurre:

1. primero acción;
2. después reacción.

En el modelo newtoniano:

> aparecen simultáneamente.

Los nombres “acción” y “reacción” no indican prioridad temporal.

---

## 35. Cómo reconocer un par acción-reacción

Una buena forma es nombrar:

> **fuerza de A sobre B**

y buscar:

> **fuerza de B sobre A**

Deben corresponder a:

- la misma interacción;
- los mismos dos cuerpos;
- sentidos opuestos.

---

## 36. Peso y normal no forman un par acción-reacción

Un libro sobre una mesa puede tener:

- fuerza gravitatoria de la Tierra sobre el libro;
- fuerza normal de la mesa sobre el libro.

Esas dos fuerzas:

- pueden ser iguales y opuestas;
- pero actúan sobre el mismo cuerpo;
- provienen de interacciones diferentes.

Por lo tanto:

> **no son un par de tercera ley.**

---

## 37. ¿Cuál es la reacción al peso?

Si llamamos peso a la fuerza gravitatoria:

**Tierra → libro**

su par de tercera ley es:

**libro → Tierra**

Es decir:

- el libro también atrae gravitatoriamente a la Tierra.

---

## 38. ¿Cuál es la reacción a la normal?

Si la mesa ejerce sobre el libro una fuerza normal:

**mesa → libro**

el par es:

**libro → mesa**

Es la fuerza de contacto que el libro ejerce sobre la mesa.

---

## 39. Diagrama de cuerpo libre

Un **diagrama de cuerpo libre**, o DCL, representa únicamente:

> **las fuerzas que actúan sobre el cuerpo que estamos analizando.**

Procedimiento:

1. elegimos el cuerpo;
2. lo aislamos conceptualmente;
3. identificamos las interacciones;
4. dibujamos las fuerzas externas sobre él;
5. elegimos ejes;
6. descomponemos si hace falta;
7. aplicamos `ΣF = ma`.

---

## 40. Qué no debe aparecer en un DCL

En el DCL de un cuerpo no dibujamos:

- su velocidad como si fuera una fuerza;
- su aceleración como si fuera una fuerza;
- las fuerzas que ese cuerpo ejerce sobre otros;
- una “fuerza de movimiento” inventada.

Velocidad y aceleración pueden dibujarse aparte para ayudar a interpretar, pero no forman parte de la suma de fuerzas.

---

## 41. DCL de un libro apoyado

Un libro en reposo sobre una mesa horizontal tiene, en un modelo simple:

```text
        ↑ N
        •
        ↓ P
```

donde:

- `N` es la fuerza normal de la mesa sobre el libro;
- `P` es la fuerza gravitatoria de la Tierra sobre el libro.

Si está en reposo:

**a = 0**

por lo tanto:

**ΣFᵧ = 0**

y en ese caso particular:

**N = P**

---

## 42. Normal y peso no siempre son iguales

Que en el ejemplo anterior:

**N = P**

no significa que sea una regla universal.

Puede cambiar si:

- existe aceleración vertical;
- el plano está inclinado;
- actúan otras fuerzas;
- no existe contacto.

La igualdad surge de la situación dinámica concreta.

---

## 43. DCL de una caja empujada

Supongamos una caja sobre una superficie horizontal.

Podrían actuar:

- peso hacia abajo;
- normal hacia arriba;
- fuerza aplicada hacia la derecha;
- rozamiento hacia la izquierda.

Entonces debemos resolver:

### Eje x

**ΣFₓ = maₓ**

### Eje y

**ΣFᵧ = maᵧ**

Las fuerzas particulares se estudiarán en F-09.

---

## 44. Elegir los ejes

Los ejes no tienen que ser siempre:

- horizontal;
- vertical.

Conviene elegirlos para simplificar el problema.

En un plano inclinado, por ejemplo, suele ser útil elegir:

- un eje paralelo al plano;
- otro perpendicular.

Eso reduce la cantidad de componentes necesarias.

---

## 45. Un DCL por cuerpo

Si estudiamos dos cuerpos conectados:

- conviene dibujar un DCL para cada cuerpo.

Después escribimos:

**ΣF = ma**

para cada uno.

Esto evita mezclar fuerzas que actúan sobre cuerpos diferentes.

---

## 46. Sistema de cuerpos

A veces podemos considerar varios cuerpos como un solo sistema.

En ese caso:

- ciertas fuerzas internas aparecen en pares y pueden cancelarse al sumar sobre todo el sistema;
- las fuerzas externas determinan el cambio del movimiento del sistema.

Esta idea se desarrollará más adelante con:

- sistemas de cuerpos;
- cantidad de movimiento.

---

## 47. Ejemplo sencillo de resultante

Una caja de:

**5 kg**

recibe:

- 20 N hacia la derecha;
- 5 N hacia la izquierda.

Entonces:

**ΣFₓ = 15 N**

y:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Segunda ley con varias fuerzas</h3>
  <div class="worked-example-card__steps">
    <p>aₓ = 15 N / 5 kg</p>
    <p><strong>aₓ = 3 m/s² hacia la derecha</strong></p>
  </div>
</div>

No usamos la fuerza de 20 N directamente.

Usamos la resultante.

---

## 48. Si la resultante se opone a la velocidad

Supongamos:

- el cuerpo se mueve hacia la derecha;
- la resultante apunta hacia la izquierda.

Entonces:

- la aceleración apunta a la izquierda;
- inicialmente la rapidez puede disminuir.

Si la fuerza continúa suficiente tiempo:

- v puede llegar a cero;
- luego el cuerpo puede comenzar a moverse hacia la izquierda.

La dirección de la fuerza neta determina la aceleración, no necesariamente la velocidad.

---

## 49. Si la resultante es perpendicular a la velocidad

Si:

**ΣF ⟂ v**

la aceleración también es perpendicular a v.

Eso puede cambiar principalmente:

- la dirección de la velocidad.

El movimiento circular uniforme es el ejemplo más importante:

- rapidez constante;
- resultante radial.

---

## 50. Si la resultante tiene componentes tangencial y normal

Una resultante puede tener:

- componente paralela a la velocidad;
- componente perpendicular.

La componente paralela puede cambiar la rapidez.

La perpendicular puede cambiar la dirección.

Esto conecta con el movimiento circular no uniforme estudiado en F-07.

---

## 51. La primera ley no es simplemente un caso inútil de la segunda

Matemáticamente, si usamos:

**ΣF = ma**

y ponemos:

**ΣF = 0**

obtenemos:

**a = 0**

Pero la primera ley cumple además un papel conceptual importante:

- caracteriza los sistemas inerciales;
- establece que el movimiento uniforme no necesita una causa mantenida.

---

## 52. Masa inercial y cantidad de materia

En contextos escolares a veces se dice que la masa es “cantidad de materia”.

Esa frase puede ser útil como intuición inicial, pero es incompleta.

En dinámica, la **masa inercial** se caracteriza por su relación con la aceleración:

> a igual fuerza neta, mayor masa implica menor aceleración.

Ésta es la idea relevante para las leyes de Newton.

---

## 53. Modelo de partícula

Muchas veces representamos un cuerpo por un punto material.

Así podemos analizar:

- traslación;
- resultante de fuerzas;
- aceleración del cuerpo como conjunto.

Pero este modelo no describe:

- rotación;
- deformación;
- distribución de fuerzas;
- torque.

Esos aspectos requerirán modelos adicionales.

---

## 54. Experiencia segura: carrito y diferentes fuerzas

### Objetivo

Observar cómo cambia la aceleración al cambiar la fuerza neta.

### Posible montaje

- carrito liviano;
- superficie horizontal;
- banda elástica o mecanismo de tracción controlado;
- video para registrar posiciones.

### Idea

Mantener aproximadamente constante la masa y comparar:

- tracción pequeña;
- tracción mayor.

Esperamos:

- mayor resultante → mayor aceleración.

No buscamos verificar perfectamente la ley sin controlar rozamiento e incertidumbre.

---

## 55. Experiencia: misma fuerza, distintas masas

Podemos usar:

- el mismo carrito;
- agregar masas pequeñas y bien aseguradas;
- aplicar una tracción aproximadamente reproducible.

Esperamos cualitativamente:

- mayor masa → menor aceleración.

### Seguridad

- usar masas livianas;
- asegurarlas para que no caigan;
- mantener despejada la trayectoria.

---

## 56. Inercia cotidiana

Cuando un colectivo frena:

- nuestro cuerpo tiende a conservar su velocidad.

El colectivo reduce su velocidad por fuerzas externas.

Nuestro cuerpo necesita fuerzas del:

- piso;
- asiento;
- cinturón;

para cambiar su movimiento junto con el vehículo.

No hay una fuerza misteriosa “hacia adelante” necesaria para explicar la tendencia inercial desde el suelo.

---

## 57. Cinturón de seguridad

El cinturón ejerce una fuerza sobre el pasajero durante un frenado.

Eso permite producir la aceleración necesaria para reducir su velocidad junto con el vehículo.

El ejemplo muestra que:

- la inercia no es una fuerza;
- las fuerzas son necesarias para cambiar el movimiento.

---

## 58. Tercera ley y caminar

Al caminar:

- el pie interactúa con el suelo.

El pie ejerce una fuerza sobre el suelo.

El suelo ejerce una fuerza sobre el pie.

Ese par de interacción contribuye a permitir el movimiento de la persona.

El análisis detallado requiere rozamiento y se retomará en F-09.

---

## 59. Tercera ley y propulsión

Un sistema puede avanzar interactuando con otro cuerpo o expulsando materia.

La tercera ley ayuda a entender ejemplos como:

- caminar;
- nadar;
- remar;
- propulsión de un cohete.

No hace falta que exista una pared fija “contra la cual empujar”.

---

## 60. Error: “la fuerza más grande gana”

Si dos fuerzas opuestas actúan sobre el mismo cuerpo:

- calculamos la suma vectorial.

Puede quedar una resultante en el sentido de la mayor.

Pero hablar de que una fuerza “gana” puede ocultar el razonamiento.

Es mejor decir:

> la suma vectorial no es cero y produce una aceleración según la segunda ley.

---

## 61. Error: “si se mueve, hay una fuerza en el sentido del movimiento”

No necesariamente.

Un cuerpo puede tener:

- velocidad hacia la derecha;
- resultante cero.

Entonces sigue con velocidad constante hacia la derecha.

También puede tener:

- velocidad hacia la derecha;
- resultante hacia la izquierda.

Entonces inicialmente se mueve a la derecha mientras desacelera.

---

## 62. Error: “si está quieto, no hay fuerzas”

No necesariamente.

Un libro sobre una mesa puede estar quieto mientras actúan:

- gravedad;
- normal.

La resultante puede ser cero aunque existan fuerzas individuales.

---

## 63. Error: “acción y reacción se cancelan”

No sobre el mismo cuerpo.

La cancelación sólo tiene sentido cuando sumamos fuerzas aplicadas al mismo sistema.

El par de tercera ley actúa sobre cuerpos diferentes.

---

## 64. Error: “peso y normal son acción-reacción”

No.

Ambas pueden actuar sobre el mismo cuerpo.

Sus pares de tercera ley involucran:

- Tierra ↔ cuerpo;
- superficie ↔ cuerpo.

---

## 65. Error: “una fuerza produce velocidad”

La segunda ley relaciona fuerza neta con:

**aceleración**

no directamente con velocidad.

Una fuerza neta constante produce:

- cambio continuo de velocidad;

y, bajo masa constante:

- aceleración constante.

---

## 66. Estrategia para resolver problemas de dinámica

Una secuencia útil es:

1. elegí el cuerpo o sistema;
2. elegí un sistema de referencia aproximadamente inercial;
3. identificá interacciones;
4. dibujá el DCL;
5. elegí ejes;
6. descomponé fuerzas;
7. escribí `ΣFₓ = maₓ`, `ΣFᵧ = maᵧ`, etc.;
8. incorporá restricciones cinemáticas si las hay;
9. resolvé;
10. revisá unidades y sentido físico.

---

## 67. Problemas y ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Conceptos</strong>
  </div>
  <ol>
    <li>Definí fuerza como interacción.</li>
    <li>¿Qué significa que la resultante sea cero?</li>
    <li>Explicá la primera ley de Newton.</li>
    <li>¿Qué es un sistema de referencia inercial?</li>
    <li>¿Qué representa la masa inercial?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Segunda ley</strong>
  </div>
  <ol>
    <li>Una masa de 3 kg recibe una resultante de 12 N. Calculá la aceleración.</li>
    <li>Sobre un cuerpo actúan 15 N a la derecha y 9 N a la izquierda. Si m = 2 kg, calculá a.</li>
    <li>¿Qué fuerza neta necesita una masa de 5 kg para acelerar a 4 m/s²?</li>
    <li>Dos cuerpos reciben la misma fuerza neta. Uno tiene el doble de masa. Compará sus aceleraciones.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Tercera ley y diagramas</strong>
  </div>
  <ol>
    <li>Identificá el par acción-reacción cuando una mano empuja una mesa.</li>
    <li>Identificá el par correspondiente a la fuerza gravitatoria de la Tierra sobre una pelota.</li>
    <li>Dibujá el DCL de un libro en reposo sobre una mesa.</li>
    <li>Explicá por qué peso y normal no son un par de tercera ley.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Interpretación</strong>
  </div>
  <ol>
    <li>Un cuerpo se mueve a 8 m/s hacia la derecha y tiene resultante cero. Describí su movimiento posterior en un sistema inercial.</li>
    <li>Un cuerpo se mueve a la derecha pero su resultante apunta a la izquierda. Explicá qué puede ocurrir.</li>
    <li>Dos patinadores se empujan con fuerzas iguales y opuestas. Uno tiene el triple de masa. Compará sus aceleraciones.</li>
    <li>Explicá qué fuerza real podría proporcionar la resultante centrípeta en un auto que toma una curva plana.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Analizá por qué la primera ley es importante para definir sistemas inerciales aunque `ΣF = 0` pueda obtenerse como caso de la segunda.</li>
    <li>Explicá la diferencia entre una fuerza individual y la fuerza neta usando un ejemplo con tres fuerzas.</li>
    <li>Construí dos DCL separados para dos cuerpos que interactúan y señalá un par de tercera ley entre ellos.</li>
    <li>Relacioná `ΣF = ma` con `a_c = v²/r` y explicá por qué “fuerza centrípeta” no identifica por sí sola una interacción física.</li>
  </ol>
</div>

---

## 68. Ejemplo integrado

Una caja de:

**m = 10 kg**

se mueve inicialmente hacia la derecha.

Sobre ella actúan horizontalmente:

- 50 N hacia la derecha;
- 20 N hacia la izquierda.

Verticalmente:

- las fuerzas se equilibran.

### Resultante horizontal

**ΣFₓ = 50 − 20 = 30 N**

### Aceleración

**aₓ = 30/10**

**aₓ = 3 m/s²**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>De las interacciones a la aceleración</h3>
  <div class="worked-example-card__steps">
    <p>ΣFₓ = +30 N</p>
    <p>ΣFᵧ = 0</p>
    <p>aₓ = +3 m/s²</p>
    <p><strong>La aceleración apunta a la derecha porque ésa es la dirección de la fuerza neta.</strong></p>
  </div>
</div>

Si la caja ya se movía hacia la derecha:

- su rapidez aumenta.

Si inicialmente se moviera hacia la izquierda:

- primero podría disminuir su rapidez;
- detenerse;
- y luego moverse hacia la derecha.

La fuerza neta determina la aceleración, no el sentido instantáneo de la velocidad.

---

## 69. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Puede un cuerpo moverse si la resultante de fuerzas es cero?</summary>
  <div class="lesson-quiz__answer">
    Sí. En un sistema inercial puede moverse con velocidad constante en línea recta.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Qué relaciona la segunda ley de Newton?</summary>
  <div class="lesson-quiz__answer">
    La fuerza neta con la masa y la aceleración: ΣF = ma para masa constante en un sistema inercial.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Qué significa masa inercial?</summary>
  <div class="lesson-quiz__answer">
    Caracteriza la respuesta de un cuerpo a una fuerza neta: a igual resultante, una masa mayor adquiere menor aceleración.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Las fuerzas de acción y reacción actúan sobre el mismo cuerpo?</summary>
  <div class="lesson-quiz__answer">
    No. Actúan sobre cuerpos distintos.
  </div>
</details>

<details class="lesson-quiz">
  <summary>5. ¿Peso y normal forman un par acción-reacción?</summary>
  <div class="lesson-quiz__answer">
    No. Pueden actuar sobre el mismo cuerpo y corresponden a interacciones distintas.
  </div>
</details>

<details class="lesson-quiz">
  <summary>6. ¿Qué debe incluir un diagrama de cuerpo libre?</summary>
  <div class="lesson-quiz__answer">
    Las fuerzas externas que actúan sobre el cuerpo o sistema elegido, no las fuerzas que ese cuerpo ejerce sobre otros.
  </div>
</details>

---

## 70. Resumen

- Una fuerza representa una interacción.
- Las fuerzas son magnitudes vectoriales.
- La resultante es la suma vectorial de las fuerzas que actúan sobre un cuerpo.
- La primera ley establece que `ΣF = 0` implica velocidad constante en un sistema inercial.
- Reposo es solamente el caso `v = 0`.
- La inercia no es una fuerza.
- La segunda ley, para masa constante, es `ΣF = ma`.
- La aceleración apunta en la dirección de la fuerza neta.
- La masa inercial caracteriza la respuesta frente a una resultante.
- `1 N = 1 kg·m/s²`.
- La segunda ley puede aplicarse por componentes.
- La tercera ley relaciona fuerzas mutuas entre dos cuerpos.
- Las fuerzas de acción y reacción son iguales y opuestas, pero actúan sobre cuerpos distintos.
- Acción y reacción son simultáneas.
- Peso y normal no son un par de tercera ley.
- Un DCL contiene solamente las fuerzas que actúan sobre el cuerpo analizado.
- Fuerza neta cero no significa ausencia de fuerzas.
- Una fuerza no es necesaria para mantener MRU.
- La fuerza neta cambia la velocidad, no “produce” simplemente movimiento.
- La fuerza centrípeta es una resultante radial, no una interacción adicional.

---

## 71. Siguiente tema recomendado

**F-09 — Fuerzas particulares**

Ahora vamos a aplicar las leyes de Newton a fuerzas concretas que aparecen una y otra vez en problemas reales:

- peso;
- normal;
- tensión;
- rozamiento estático;
- rozamiento cinético;
- coeficiente de rozamiento;
- fuerza elástica;
- ley de Hooke;
- plano inclinado;
- sistemas de cuerpos;
- poleas ideales;
- aplicaciones de dinámica.
