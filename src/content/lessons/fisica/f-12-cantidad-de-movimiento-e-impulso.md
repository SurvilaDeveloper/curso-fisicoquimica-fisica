---
title: "Cantidad de movimiento e impulso"
description: "Cómo analizar interacciones y choques mediante momento lineal, impulso, sistemas aislados, conservación del momento y tipos de colisiones."
slug: "cantidad-de-movimiento-e-impulso"

course: "fisica"
module: "dinamica"
order: 12

level: "intermedio"
cycle: "ambos"

yearsApprox: [3, 4, 5]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - trabajo-energia-y-potencia

skills:
  - momento-lineal
  - impulso
  - teorema-impulso-cantidad-de-movimiento
  - sistema-aislado
  - conservacion-del-momento
  - choques
  - choque-elastico
  - choque-inelastico
  - choque-perfectamente-inelastico
  - problemas-unidimensionales
  - momento-en-dos-dimensiones
  - centro-de-masa

hasExercises: true
hasQuiz: true
hasExperiment: true

deepening: true
status: "complete"
---

## ¿Qué se conserva durante un choque?

Dos carritos se aproximan.

Chocan durante una fracción de segundo.

Después:

- pueden separarse;
- pueden cambiar de velocidad;
- incluso pueden quedar unidos.

Durante el choque aparecen fuerzas internas grandes, pero actúan durante poco tiempo.

Seguir cada detalle de esas fuerzas puede ser complicado.

Sin embargo, existe una magnitud especialmente útil:

> **la cantidad de movimiento o momento lineal.**

Cuando el impulso externo sobre un sistema es despreciable, el momento lineal total se conserva.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>En un sistema aislado, las interacciones internas pueden redistribuir el momento entre los cuerpos, pero no cambian el momento lineal total del sistema.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta lección deberías poder:

- definir momento lineal;
- interpretar su carácter vectorial;
- relacionar momento, masa y velocidad;
- definir impulso;
- usar el teorema impulso-cantidad de movimiento;
- interpretar un gráfico fuerza-tiempo;
- distinguir fuerzas internas y externas;
- definir un sistema aislado para el problema;
- aplicar conservación del momento;
- resolver choques unidimensionales;
- distinguir choques elásticos e inelásticos;
- analizar choques perfectamente inelásticos;
- comprender qué ocurre con la energía cinética en cada tipo de choque;
- extender la conservación del momento a dos dimensiones;
- relacionar momento total y movimiento del centro de masa como profundización.

---

## 1. Momento lineal

El **momento lineal**, también llamado **cantidad de movimiento**, se define como:

<div class="formula-panel">
  <span class="formula-panel__label">Momento lineal</span>
  <div class="formula-panel__formula">p = m · v</div>
</div>

donde:

- `m` es la masa;
- `v` es la velocidad.

Como la velocidad es vectorial:

> **el momento lineal también es un vector.**

---

## 2. Momento lineal no es torque

En español usamos la palabra “momento” en más de un contexto.

### Momento lineal

**p = mv**

Está relacionado con traslación.

### Momento de una fuerza

**τ = r × F**

Es el torque estudiado en F-10.

Son magnitudes diferentes.

Por eso en esta lección usaremos muchas veces la expresión:

**cantidad de movimiento**

para evitar confusiones.

---

## 3. Unidad del momento lineal

De:

**p = mv**

obtenemos:

<div class="formula-panel">
  <span class="formula-panel__label">Unidad SI</span>
  <div class="formula-panel__formula">kg · m/s</div>
</div>

También veremos que es equivalente a:

**N·s**

cuando estudiemos impulso.

---

## 4. El signo importa en una dimensión

Elegimos derecha como sentido positivo.

Un cuerpo de:

**2 kg**

se mueve a:

**+5 m/s**

Entonces:

**p = +10 kg·m/s**

Si se mueve a:

**−5 m/s**

entonces:

**p = −10 kg·m/s**

La masa no es negativa.

El signo proviene de la velocidad.

---

## 5. Ejemplo de momento lineal

Un carrito de:

**m = 3 kg**

se mueve hacia la derecha a:

**v = 4 m/s**

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Cantidad de movimiento</h3>
  <div class="worked-example-card__steps">
    <p>p = mv</p>
    <p>p = 3 × 4</p>
    <p><strong>p = 12 kg·m/s hacia la derecha</strong></p>
  </div>
</div>

---

## 6. Más masa o más velocidad

El momento lineal depende linealmente de:

- la masa;
- la velocidad.

Si duplicamos la masa manteniendo v:

- p se duplica.

Si duplicamos v manteniendo m:

- p se duplica.

Esto es distinto de la energía cinética, que depende de:

**v²**

---

## 7. Comparar momento y energía cinética

Recordemos:

<div class="formula-panel">
  <span class="formula-panel__label">Momento</span>
  <div class="formula-panel__formula">p = mv</div>
</div>

<div class="formula-panel">
  <span class="formula-panel__label">Energía cinética</span>
  <div class="formula-panel__formula">K = ½mv²</div>
</div>

El momento:

- es vectorial;
- puede tener signo o dirección.

La energía cinética:

- es escalar;
- no es negativa.

No se conservan bajo las mismas condiciones.

---

## 8. Sistema de varios cuerpos

Para un sistema con varios cuerpos definimos el momento total:

<div class="formula-panel">
  <span class="formula-panel__label">Momento total</span>
  <div class="formula-panel__formula">p_total = p₁ + p₂ + p₃ + ...</div>
</div>

La suma es:

**vectorial**

En una dimensión podemos trabajar con signos.

---

## 9. Ejemplo de momento total

Dos carritos:

### A

- `m_A = 2 kg`;
- `v_A = +4 m/s`.

Entonces:

**p_A = +8 kg·m/s**

### B

- `m_B = 3 kg`;
- `v_B = −2 m/s`.

Entonces:

**p_B = −6 kg·m/s**

Momento total:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Suma vectorial en una dimensión</h3>
  <div class="worked-example-card__steps">
    <p>p_total = +8 − 6</p>
    <p><strong>p_total = +2 kg·m/s</strong></p>
  </div>
</div>

---

## 10. Cambio de cantidad de movimiento

Si la velocidad cambia:

**p**

también cambia.

Para masa constante:

<div class="formula-panel">
  <span class="formula-panel__label">Cambio de momento</span>
  <div class="formula-panel__formula">Δp = m(v_f − v_i)</div>
</div>

En forma vectorial:

**Δp = p_f − p_i**

---

## 11. Impulso

El **impulso** de una fuerza mide su efecto acumulado durante un intervalo de tiempo.

Para una fuerza constante:

<div class="formula-panel">
  <span class="formula-panel__label">Impulso</span>
  <div class="formula-panel__formula">J = F · Δt</div>
</div>

Como F es vector:

> **el impulso también es vectorial.**

---

## 12. Unidad del impulso

La unidad es:

**N·s**

Pero:

**1 N = 1 kg·m/s²**

Entonces:

**N·s = kg·m/s**

La unidad del impulso coincide dimensionalmente con la del cambio de momento.

---

## 13. Teorema impulso-cantidad de movimiento

Para masa constante:

**F = ma**

y:

**a = Δv/Δt**

Entonces:

**FΔt = mΔv**

Por lo tanto:

<div class="formula-panel">
  <span class="formula-panel__label">Teorema impulso-momento</span>
  <div class="formula-panel__formula">J = Δp</div>
</div>

Es decir:

<div class="formula-panel">
  <span class="formula-panel__label">Forma desarrollada</span>
  <div class="formula-panel__formula">J = p_f − p_i</div>
</div>

---

## 14. Qué significa físicamente

Un impulso neto:

- cambia el momento lineal.

### J en el mismo sentido que p inicial

Puede aumentar su módulo.

### J en sentido opuesto

Puede disminuirlo.

### Impulso suficientemente grande en sentido opuesto

Puede invertir el movimiento.

---

## 15. Ejemplo de impulso

Una pelota de:

**0,50 kg**

cambia su velocidad de:

**+6 m/s**

a:

**−4 m/s**

Entonces:

**p_i = 0,50×6 = +3 kg·m/s**

**p_f = 0,50×(−4) = −2 kg·m/s**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Cambio de sentido</h3>
  <div class="worked-example-card__steps">
    <p>J = p_f − p_i</p>
    <p>J = −2 − 3</p>
    <p><strong>J = −5 N·s</strong></p>
  </div>
</div>

El impulso neto apunta hacia el sentido negativo.

---

## 16. Fuerza media

Si conocemos el impulso y la duración:

<div class="formula-panel">
  <span class="formula-panel__label">Fuerza media</span>
  <div class="formula-panel__formula">F_media = Δp / Δt</div>
</div>

Esto es muy útil en:

- golpes;
- colisiones;
- frenados breves.

---

## 17. Misma Δp, distinto tiempo

Supongamos que queremos producir el mismo cambio de momento.

Si aumentamos:

**Δt**

la fuerza media necesaria puede disminuir:

<div class="formula-panel">
  <span class="formula-panel__label">Para Δp fijo</span>
  <div class="formula-panel__formula">F_media = Δp/Δt</div>
</div>

Esta idea ayuda a entender:

- airbags;
- zonas deformables;
- colchonetas;
- flexionar las piernas al caer.

---

## 18. Airbag y cinturón

El objetivo no es evitar necesariamente el cambio total de momento.

Durante una detención:

- el pasajero debe pasar de cierta velocidad a una menor o a cero.

Lo que puede modificarse es:

- el tiempo durante el cual ocurre ese cambio.

Aumentar el tiempo puede reducir la fuerza media para el mismo `Δp`.

---

## 19. Impulso con fuerza variable

En una colisión real la fuerza rara vez es constante.

Puede crecer rápidamente:

- alcanzar un máximo;
- disminuir.

El impulso corresponde al área algebraica bajo la gráfica:

**F(t)**

<div class="formula-panel">
  <span class="formula-panel__label">Interpretación gráfica</span>
  <div class="formula-panel__formula">J = área bajo F(t)</div>
</div>

---

## 20. Fuerza-tiempo y no fuerza-distancia

No confundamos dos gráficas distintas.

### Área bajo F(t)

Da:

**impulso**

### Área bajo F(x)

Da:

**trabajo**

Son conceptos relacionados, pero distintos.

---

## 21. Profundización con cálculo

Para una fuerza variable:

<div class="formula-panel">
  <span class="formula-panel__label">Impulso</span>
  <div class="formula-panel__formula">J = ∫ F dt</div>
</div>

Y la forma más general de la segunda ley se relaciona con:

<div class="formula-panel">
  <span class="formula-panel__label">Profundización</span>
  <div class="formula-panel__formula">F_neta = dp/dt</div>
</div>

Para masa constante recuperamos:

**F = ma**

---

## 22. Fuerzas internas y externas

Para hablar de conservación del momento debemos definir un:

**sistema**

### Fuerzas internas

Interacciones entre cuerpos que pertenecen al sistema.

### Fuerzas externas

Interacciones con cuerpos que quedaron fuera del sistema.

La clasificación depende de qué elegimos incluir.

---

## 23. Tercera ley dentro del sistema

Dos cuerpos A y B interactúan.

Por tercera ley:

**F_A→B = −F_B→A**

Si ambos pertenecen al sistema:

- esas fuerzas son internas;
- sus impulsos sobre el conjunto se compensan en el balance total.

Por eso las fuerzas internas pueden cambiar los momentos individuales sin cambiar el momento total.

---

## 24. Sistema aislado

Para estos problemas llamamos **aislado**, o aproximadamente aislado, a un sistema cuyo impulso externo neto es cero o despreciable durante el intervalo estudiado:

<div class="formula-panel">
  <span class="formula-panel__label">Condición</span>
  <div class="formula-panel__formula">J_ext ≈ 0</div>
</div>

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Conservación</span>
  <div class="formula-panel__formula">p_total,f = p_total,i</div>
</div>

---

## 25. “Aislado” no significa ausencia de fuerzas internas

Durante un choque pueden existir fuerzas internas enormes.

Sin embargo, si el impulso externo es despreciable:

- el momento total se conserva.

Por eso un sistema puede estar lejos de ser “tranquilo” y aun así ser útil tratarlo como aislado durante el choque.

---

## 26. Conservación del momento lineal

Para dos cuerpos:

<div class="formula-panel">
  <span class="formula-panel__label">Antes = después</span>
  <div class="formula-panel__formula">p₁i + p₂i = p₁f + p₂f</div>
</div>

En una dimensión:

<div class="formula-panel">
  <span class="formula-panel__label">Con signos</span>
  <div class="formula-panel__formula">m₁v₁i + m₂v₂i = m₁v₁f + m₂v₂f</div>
</div>

Los signos de las velocidades son esenciales.

---

## 27. Conservación no significa que cada p sea constante

Durante una interacción:

- `p₁` puede cambiar;
- `p₂` puede cambiar.

Lo que permanece constante es:

**p₁ + p₂**

si el sistema está aislado.

El momento se redistribuye entre los cuerpos.

---

## 28. Choque

Un **choque** es una interacción relativamente breve entre cuerpos, durante la cual las fuerzas mutuas pueden ser grandes.

No es necesario que:

- los cuerpos se destruyan;
- exista una deformación visible permanente.

Puede ser:

- choque entre carritos;
- bolas;
- vehículos;
- partículas.

---

## 29. Momento durante un choque

Si el impulso externo es despreciable durante el corto intervalo del choque:

<div class="formula-panel">
  <span class="formula-panel__label">Conservación</span>
  <div class="formula-panel__formula">p_total,antes = p_total,después</div>
</div>

Esto vale tanto para choques:

- elásticos;
- inelásticos.

La diferencia entre ellos aparece al estudiar la energía cinética.

---

## 30. Choque elástico

En un **choque elástico** ideal se conservan:

### Momento lineal total

<div class="formula-panel">
  <span class="formula-panel__label">Momento</span>
  <div class="formula-panel__formula">p_i = p_f</div>
</div>

### Energía cinética total

<div class="formula-panel">
  <span class="formula-panel__label">Energía cinética</span>
  <div class="formula-panel__formula">K_i = K_f</div>
</div>

Deben cumplirse ambas condiciones.

---

## 31. Choque inelástico

En un choque inelástico, para un sistema aislado:

- se conserva el momento total;
- no se conserva la energía cinética total.

Parte de K puede transformarse en:

- energía interna;
- deformación;
- sonido;
- calentamiento.

La energía total sigue conservándose en un sistema suficientemente amplio.

---

## 32. Choque perfectamente inelástico

Es un caso especial de choque inelástico.

Después del impacto:

> **los cuerpos quedan unidos y se mueven con una misma velocidad final.**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Momento</span>
  <div class="formula-panel__formula">m₁v₁i + m₂v₂i = (m₁ + m₂)v_f</div>
</div>

---

## 33. Velocidad final en choque perfectamente inelástico

Despejamos:

<div class="formula-panel">
  <span class="formula-panel__label">Velocidad común final</span>
  <div class="formula-panel__formula">v_f = (m₁v₁i + m₂v₂i)/(m₁ + m₂)</div>
</div>

Es un promedio ponderado de velocidades con signos.

---

## 34. Ejemplo perfectamente inelástico

Un carrito A:

- `m₁ = 2 kg`;
- `v₁i = +6 m/s`.

Un carrito B:

- `m₂ = 4 kg`;
- `v₂i = 0`.

Después chocan y quedan unidos.

Momento inicial:

**p_i = 2×6 = 12 kg·m/s**

Masa final:

**6 kg**

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Quedan unidos</h3>
  <div class="worked-example-card__steps">
    <p>v_f = 12/6</p>
    <p><strong>v_f = +2 m/s</strong></p>
  </div>
</div>

---

## 35. ¿Se conserva la energía cinética en ese ejemplo?

Antes:

**K_i = ½×2×6² = 36 J**

Después:

**K_f = ½×6×2² = 12 J**

Entonces:

**K_f < K_i**

Se perdieron:

**24 J**

de energía cinética.

No desaparecieron de la energía total.

Se transformaron en otras formas.

---

## 36. Choque inelástico no significa necesariamente “quedan pegados”

Todo choque perfectamente inelástico es:

- inelástico.

Pero no todo choque inelástico es:

- perfectamente inelástico.

Los cuerpos pueden:

- separarse después;
- y aun así perder energía cinética total.

---

## 37. Choque elástico unidimensional

Para dos cuerpos necesitamos cumplir:

<div class="formula-panel">
  <span class="formula-panel__label">Momento</span>
  <div class="formula-panel__formula">m₁v₁i + m₂v₂i = m₁v₁f + m₂v₂f</div>
</div>

y:

<div class="formula-panel">
  <span class="formula-panel__label">Energía cinética</span>
  <div class="formula-panel__formula">½m₁v₁i² + ½m₂v₂i² = ½m₁v₁f² + ½m₂v₂f²</div>
</div>

Son dos ecuaciones para las dos velocidades finales desconocidas.

---

## 38. Caso especial: masas iguales

En un choque elástico frontal ideal entre masas iguales, si:

- una se mueve;
- la otra está en reposo;

puede ocurrir un intercambio de velocidades.

Ejemplo:

antes:

- A → `+5 m/s`;
- B → `0`.

Después:

- A → `0`;
- B → `+5 m/s`.

Se conservan:

- momento;
- energía cinética.

---

## 39. Comprobar una solución

Después de resolver un choque conviene verificar dos cosas.

### Siempre que el sistema sea aislado

¿Se conserva el momento?

### Si se afirma que el choque es elástico

¿También se conserva K?

Una solución que no supera estas verificaciones no es compatible con el modelo.

---

## 40. Ejemplo con sentidos opuestos

Dos cuerpos:

### A

- `m_A = 2 kg`;
- `v_Ai = +3 m/s`.

### B

- `m_B = 1 kg`;
- `v_Bi = −4 m/s`.

Momento inicial:

**p_i = 2×3 + 1×(−4)**

**p_i = +2 kg·m/s**

Si quedan unidos:

**m_total = 3 kg**

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Choque con velocidades opuestas</h3>
  <div class="worked-example-card__steps">
    <p>v_f = 2/3 m/s</p>
    <p><strong>v_f ≈ +0,67 m/s</strong></p>
  </div>
</div>

El signo positivo indica que el conjunto final se mueve hacia el sentido elegido como positivo.

---

## 41. Momento total cero

Es posible que:

**p_total = 0**

aunque los cuerpos se estén moviendo.

Ejemplo:

- dos masas iguales;
- velocidades iguales y opuestas.

Entonces:

**p₁ = −p₂**

La suma es cero.

No significa:

- que cada cuerpo esté quieto.

---

## 42. Explosiones y separaciones

La conservación del momento también sirve cuando un sistema inicialmente unido se separa.

Si inicialmente:

**p_total = 0**

y luego se divide en dos partes:

<div class="formula-panel">
  <span class="formula-panel__label">Conservación</span>
  <div class="formula-panel__formula">p₁ + p₂ = 0</div>
</div>

por lo tanto:

**p₁ = −p₂**

Los momentos son iguales en módulo y opuestos.

---

## 43. Masas distintas en una separación

Si:

**m₁v₁ = −m₂v₂**

el fragmento de menor masa tendrá mayor módulo de velocidad.

Eso no significa que tenga mayor momento.

Los módulos de los momentos son iguales si el momento total inicial era cero.

---

## 44. Recoil o retroceso

El retroceso de un sistema puede analizarse con conservación del momento.

Si inicialmente todo está en reposo:

**p_total = 0**

después de una expulsión:

- una parte adquiere momento hacia un lado;
- el resto adquiere momento opuesto.

Es una aplicación directa de la misma conservación.

---

## 45. Interacción breve y fuerzas externas

Durante una colisión muy breve puede ocurrir que fuerzas externas como el peso no sean cero.

Sin embargo, su impulso durante ese intervalo puede ser pequeño comparado con el impulso de las fuerzas internas del choque.

Entonces podemos aproximar:

**J_ext ≈ 0**

durante la colisión.

Ésta es una decisión de modelado.

---

## 46. El tiempo del choque importa

Una fuerza externa pequeña actuando mucho tiempo puede producir un impulso importante.

Por eso no basta con decir:

- “la fuerza externa es pequeña”.

Debemos considerar:

**F × Δt**

o el área bajo `F(t)`.

---

## 47. Problemas unidimensionales: estrategia

Una secuencia útil es:

1. elegí el sistema;
2. elegí el sentido positivo;
3. escribí masas y velocidades iniciales con signo;
4. decidí si el impulso externo es despreciable;
5. escribí conservación de p;
6. agregá la condición del tipo de choque;
7. resolvé;
8. interpretá signos;
9. verificá momento;
10. verificá energía cinética si corresponde.

---

## 48. No usar conservación de energía cinética en todo choque

Éste es uno de los errores más frecuentes.

En un choque:

- momento total puede conservarse;
- energía cinética puede no conservarse.

Sólo usamos:

**K_i = K_f**

si el choque es:

**elástico**

o si el problema establece una condición equivalente.

<div class="lesson-callout lesson-callout--error">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">!</span>
    <strong>Momento conservado no implica energía cinética conservada</strong>
  </div>
  <div class="lesson-callout__body">
    <p>La conservación del momento depende del impulso externo neto. La conservación de la energía cinética depende además del tipo de interacción.</p>
  </div>
</div>

---

## 49. ¿Puede aumentar la energía cinética?

En ciertos procesos internos, la energía cinética total puede aumentar.

Por ejemplo:

- un sistema inicialmente comprimido;
- una separación impulsada por energía interna.

Entonces parte de otra forma de energía se transforma en:

**K**

La conservación del momento no impide esa transformación.

---

## 50. Conservación vectorial en dos dimensiones

En dos dimensiones:

<div class="formula-panel">
  <span class="formula-panel__label">Conservación vectorial</span>
  <div class="formula-panel__formula">p_total,i = p_total,f</div>
</div>

equivale a conservar cada componente:

<div class="formula-panel">
  <span class="formula-panel__label">Eje x</span>
  <div class="formula-panel__formula">Σpₓ,i = Σpₓ,f</div>
</div>

<div class="formula-panel">
  <span class="formula-panel__label">Eje y</span>
  <div class="formula-panel__formula">Σpᵧ,i = Σpᵧ,f</div>
</div>

---

## 51. Ejemplo conceptual en dos dimensiones

Un objeto inicialmente en reposo se separa en dos fragmentos.

Uno adquiere:

**p₁ = (3, 4) kg·m/s**

Como el momento inicial era cero:

**p₂ = −p₁**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Segundo fragmento</span>
  <div class="formula-panel__formula">p₂ = (−3, −4) kg·m/s</div>
</div>

Los vectores son opuestos.

---

## 52. Choques oblicuos — profundización

En un choque bidimensional debemos:

- elegir ejes;
- descomponer cada velocidad;
- multiplicar por la masa;
- conservar p en x;
- conservar p en y.

Si además es elástico:

- agregamos conservación de K.

La geometría puede requerir trigonometría.

---

## 53. Centro de masa — profundización

Para un sistema de partículas:

<div class="formula-panel">
  <span class="formula-panel__label">Posición del centro de masa</span>
  <div class="formula-panel__formula">r_CM = (Σmᵢrᵢ)/(Σmᵢ)</div>
</div>

Su velocidad es:

<div class="formula-panel">
  <span class="formula-panel__label">Velocidad del centro de masa</span>
  <div class="formula-panel__formula">v_CM = (Σmᵢvᵢ)/(Σmᵢ)</div>
</div>

---

## 54. Momento total y centro de masa

Si la masa total es:

**M = Σmᵢ**

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Relación fundamental</span>
  <div class="formula-panel__formula">p_total = M · v_CM</div>
</div>

Esto permite interpretar la conservación del momento como conservación del movimiento del centro de masa cuando no hay impulso externo neto.

---

## 55. Fuerza externa y centro de masa

Las fuerzas internas se compensan en el balance total.

Para masa total constante:

<div class="formula-panel">
  <span class="formula-panel__label">Sistema</span>
  <div class="formula-panel__formula">ΣF_ext = M · a_CM</div>
</div>

Así, el centro de masa responde a:

- las fuerzas externas netas.

Las interacciones internas pueden cambiar el movimiento relativo de los cuerpos sin alterar ese resultado global.

---

## 56. Si p_total = 0

Si:

**p_total = 0**

entonces:

**v_CM = 0**

en el sistema de referencia elegido.

Eso no obliga a que cada partícula esté quieta.

Pueden moverse internamente mientras el centro de masa permanece fijo.

---

## 57. Marco del centro de masa — profundización

Podemos elegir un sistema de referencia que se mueva con:

**v_CM**

En ese marco:

<div class="formula-panel">
  <span class="formula-panel__label">Marco del CM</span>
  <div class="formula-panel__formula">p_total = 0</div>
</div>

Puede simplificar el análisis conceptual de colisiones.

---

## 58. Impulso y seguridad

Cuando una persona cae y flexiona las piernas:

- el cambio de momento puede ser parecido;
- pero el tiempo de detención aumenta.

Entonces la fuerza media puede disminuir.

La misma idea aparece en:

- cascos;
- colchonetas;
- airbags;
- zonas deformables.

---

## 59. Cuidado con interpretar “fuerza máxima”

El teorema impulso-momento relaciona:

- área bajo F(t);
- no necesariamente el valor máximo de F.

Dos impactos pueden tener:

- el mismo impulso;
- diferentes picos de fuerza;
- diferentes duraciones.

Para evaluar daños reales pueden importar ambos.

---

## 60. Experiencia segura: choque de carritos

### Objetivo

Comparar momento total antes y después.

### Materiales

- dos carritos livianos;
- pista horizontal;
- video;
- marcas de distancia.

### Procedimiento

1. Medí masas.
2. Filmá el choque lateralmente.
3. Estimá velocidades antes.
4. Estimá velocidades después.
5. Calculá momentos.
6. Compará el momento total.

### Discusión

Las diferencias pueden deberse a:

- rozamiento;
- medición;
- fuerzas externas;
- deformaciones;
- perspectiva.

---

## 61. Experiencia con cierre adhesivo

Podemos hacer que dos carritos:

- choquen;
- queden unidos mediante velcro o material equivalente.

Eso aproxima un choque perfectamente inelástico.

Podemos comprobar:

- conservación aproximada del momento;
- disminución de energía cinética.

Usar únicamente carritos livianos y velocidades seguras.

---

## 62. Contexto histórico

El estudio de colisiones fue importante en el desarrollo de la mecánica.

Antes de la formulación moderna convivieron distintas propuestas para cuantificar el “movimiento” de los cuerpos.

La física clásica terminó distinguiendo magnitudes diferentes:

- momento lineal;
- energía cinética;

que obedecen leyes distintas y resuelven preguntas distintas.

---

## 63. Límites del modelo

En choques reales pueden aparecer:

- rotación;
- deformación;
- sonido;
- calentamiento;
- fracturas;
- rozamiento;
- fuerzas externas.

Además, a velocidades cercanas a la de la luz:

- la expresión clásica `p = mv` deja de ser suficiente.

En este curso trabajamos aquí con:

**mecánica clásica no relativista.**

---

## 64. Errores frecuentes

### “Momento lineal y energía cinética son lo mismo”

No.

### “Si el momento total es cero, todos están quietos”

No.

### “En cualquier choque se conserva la energía cinética”

No.

### “En un choque inelástico no se conserva el momento”

Sí puede conservarse si el impulso externo neto es despreciable.

### “Perfectamente inelástico significa que se pierde toda la energía cinética”

No necesariamente toda. Significa que los cuerpos quedan unidos.

### “Las fuerzas internas no existen si el momento se conserva”

Pueden ser muy grandes.

### “Impulso es lo mismo que fuerza”

No. Impulso depende también del tiempo.

### “Mayor tiempo de choque produce mayor fuerza”

Para un mismo cambio de momento, aumentar el tiempo reduce la fuerza media.

---

## 65. Problemas y ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Conceptos</strong>
  </div>
  <ol>
    <li>Definí momento lineal.</li>
    <li>Definí impulso.</li>
    <li>Escribí el teorema impulso-momento.</li>
    <li>¿Qué condición permite conservar el momento total?</li>
    <li>¿Qué distingue a un choque elástico de uno inelástico?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Momento e impulso</strong>
  </div>
  <ol>
    <li>Calculá p de una masa de 4 kg que se mueve a +6 m/s.</li>
    <li>Calculá p si la misma masa se mueve a −6 m/s.</li>
    <li>Una fuerza constante de 30 N actúa durante 0,20 s. Calculá J.</li>
    <li>Una pelota de 0,50 kg cambia de +8 m/s a +2 m/s. Calculá Δp.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Choques perfectamente inelásticos</strong>
  </div>
  <ol>
    <li>Un carrito de 2 kg a 5 m/s choca con otro de 3 kg en reposo y quedan unidos. Calculá v_f.</li>
    <li>Calculá K antes y después.</li>
    <li>Dos masas de 1 kg se mueven a +4 m/s y −2 m/s y quedan unidas. Calculá v_f.</li>
    <li>Interpretá el signo de la respuesta.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Choques y verificación</strong>
  </div>
  <ol>
    <li>Dos masas iguales: A llega a 6 m/s y B está en reposo. Después de un choque elástico ideal A queda quieta. Hallá v_B y verificá p y K.</li>
    <li>Un cuerpo de 3 kg a +4 m/s choca con uno de 1 kg a −2 m/s. Si después el primero queda a +1 m/s, hallá la velocidad final del segundo suponiendo sistema aislado.</li>
    <li>Decidí si el choque anterior es elástico calculando K antes y después.</li>
    <li>Explicá por qué conocer sólo conservación del momento no siempre determina completamente dos velocidades finales desconocidas.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Derivá `J = Δp` desde la segunda ley para masa constante.</li>
    <li>Explicá mediante la tercera ley por qué los impulsos internos se compensan en el momento total de dos cuerpos.</li>
    <li>Resolvé por componentes una separación bidimensional de un sistema inicialmente en reposo.</li>
    <li>Derivá `p_total = Mv_CM` a partir de la definición de velocidad del centro de masa.</li>
  </ol>
</div>

---

## 66. Ejemplo integrado

Dos carritos chocan en una pista.

### Carrito A

- `m_A = 2 kg`;
- `v_Ai = +4 m/s`.

### Carrito B

- `m_B = 3 kg`;
- `v_Bi = −1 m/s`.

Después del choque quedan unidos.

### Momento inicial

**p_i = 2×4 + 3×(−1)**

**p_i = 8 − 3**

**p_i = +5 kg·m/s**

### Velocidad final

Masa total:

**5 kg**

Entonces:

**v_f = 5/5 = +1 m/s**

### Energía cinética inicial

**K_i = ½×2×4² + ½×3×1²**

**K_i = 16 + 1,5**

**K_i = 17,5 J**

### Energía cinética final

**K_f = ½×5×1²**

**K_f = 2,5 J**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>Momento conservado, energía cinética no</h3>
  <div class="worked-example-card__steps">
    <p>p_i = +5 kg·m/s</p>
    <p>p_f = +5 kg·m/s</p>
    <p>v_f = +1 m/s</p>
    <p>K_i = 17,5 J</p>
    <p>K_f = 2,5 J</p>
    <p><strong>El momento se conserva, pero 15 J dejan de estar en forma de energía cinética.</strong></p>
  </div>
</div>

Es exactamente lo esperado para un choque perfectamente inelástico ideal de un sistema aproximadamente aislado.

---

## 67. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿La cantidad de movimiento es escalar o vectorial?</summary>
  <div class="lesson-quiz__answer">
    Vectorial, porque p = mv y la velocidad es vectorial.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Qué relaciona el impulso con el momento?</summary>
  <div class="lesson-quiz__answer">
    El impulso neto es igual al cambio de momento lineal: J = Δp.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Qué debe ser despreciable para conservar el momento total?</summary>
  <div class="lesson-quiz__answer">
    El impulso externo neto sobre el sistema durante el intervalo estudiado.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Se conserva la energía cinética en todo choque?</summary>
  <div class="lesson-quiz__answer">
    No. Se conserva en el choque elástico ideal, pero no en general en un choque inelástico.
  </div>
</details>

<details class="lesson-quiz">
  <summary>5. ¿Qué caracteriza a un choque perfectamente inelástico?</summary>
  <div class="lesson-quiz__answer">
    Los cuerpos quedan unidos y comparten una misma velocidad final.
  </div>
</details>

<details class="lesson-quiz">
  <summary>6. ¿Qué representa el área bajo una gráfica F(t)?</summary>
  <div class="lesson-quiz__answer">
    El impulso de la fuerza durante ese intervalo.
  </div>
</details>

---

## 68. Resumen

- El momento lineal o cantidad de movimiento es `p = mv`.
- Es una magnitud vectorial.
- El momento total es la suma vectorial de los momentos individuales.
- El impulso de una fuerza constante es `J = FΔt`.
- El teorema impulso-momento establece `J = Δp`.
- Para una fuerza variable, el impulso es el área bajo `F(t)`.
- Fuerzas internas y externas dependen del sistema elegido.
- Si el impulso externo neto es cero o despreciable, el momento total se conserva.
- Las fuerzas internas pueden cambiar los momentos individuales sin alterar el total.
- En un choque elástico se conservan momento y energía cinética.
- En un choque inelástico se conserva el momento de un sistema aislado, pero no la energía cinética total.
- En un choque perfectamente inelástico los cuerpos quedan unidos.
- Momento conservado no implica energía cinética conservada.
- La conservación del momento es vectorial y puede aplicarse por componentes en dos dimensiones.
- El momento total se relaciona con el centro de masa mediante `p_total = Mv_CM`.
- Aumentar el tiempo de una interacción puede reducir la fuerza media para el mismo cambio de momento.
- El modelo clásico debe revisarse en situaciones relativistas o con impulsos externos importantes.

---

## 69. Siguiente tema recomendado

**F-13 — Gravitación**

Ahora vamos a ampliar la gravedad desde la aproximación local:

**P = mg**

hacia una teoría capaz de describir:

- movimiento planetario;
- ley de gravitación universal;
- campo gravitatorio;
- variación de g;
- energía potencial gravitatoria general;
- órbitas;
- satélites;
- velocidad orbital;
- velocidad de escape como profundización.
