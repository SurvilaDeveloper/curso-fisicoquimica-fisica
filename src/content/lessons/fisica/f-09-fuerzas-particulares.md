---
title: "Fuerzas particulares"
description: "Cómo modelar peso, normal, tensión, rozamiento y fuerza elástica, y aplicarlas a planos inclinados, sistemas de cuerpos y poleas ideales."
slug: "fuerzas-particulares"

course: "fisica"
module: "dinamica"
order: 9

level: "intermedio"
cycle: "ambos"

yearsApprox: [3, 4, 5]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - leyes-de-newton

skills:
  - peso
  - normal
  - tension
  - rozamiento-estatico
  - rozamiento-cinetico
  - coeficiente-de-rozamiento
  - fuerza-elastica
  - ley-de-hooke
  - plano-inclinado
  - sistemas-de-cuerpos
  - poleas-ideales
  - aplicaciones-de-dinamica

hasExercises: true
hasQuiz: true
hasExperiment: true

deepening: true
status: "complete"
---

## Las leyes son generales; ahora necesitamos reconocer fuerzas concretas

En F-08 aprendimos que:

<div class="formula-panel">
  <span class="formula-panel__label">Segunda ley de Newton</span>
  <div class="formula-panel__formula">ΣF = m · a</div>
</div>

Pero para usarla en una situación real necesitamos responder:

> **¿qué fuerzas actúan sobre el cuerpo y de qué interacción proviene cada una?**

En esta lección vamos a estudiar fuerzas que aparecen continuamente:

- peso;
- normal;
- tensión;
- rozamiento;
- fuerza elástica.

Después las combinaremos en:

- planos inclinados;
- sistemas de cuerpos;
- poleas.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>No conviene empezar un problema buscando una fórmula. Primero identificamos el cuerpo, las interacciones y el diagrama de cuerpo libre. Recién después escribimos las ecuaciones.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta lección deberías poder:

- calcular e interpretar el peso;
- distinguir masa y peso;
- interpretar la fuerza normal;
- comprender por qué la normal no siempre vale `mg`;
- interpretar tensión en cuerdas ideales;
- distinguir rozamiento estático y cinético;
- utilizar coeficientes de rozamiento;
- comprender que `fₛ ≤ μₛN`;
- utilizar la ley de Hooke;
- interpretar el signo de la fuerza elástica;
- descomponer el peso en un plano inclinado;
- analizar sistemas de varios cuerpos;
- trabajar con cuerdas y poleas ideales;
- aplicar diagramas de cuerpo libre y la segunda ley a situaciones combinadas.

---

## 1. Peso

El **peso** es la fuerza gravitatoria que un astro ejerce sobre un cuerpo.

Cerca de la superficie terrestre y usando el modelo de g aproximadamente constante:

<div class="formula-panel">
  <span class="formula-panel__label">Peso</span>
  <div class="formula-panel__formula">P = m · g</div>
</div>

En forma vectorial:

<div class="formula-panel">
  <span class="formula-panel__label">Vector peso</span>
  <div class="formula-panel__formula">P = m · g</div>
</div>

donde el vector `g` apunta hacia abajo.

---

## 2. Unidad del peso

La masa se mide en:

**kg**

El peso se mide en:

**N**

Ejemplo:

para:

- `m = 5 kg`;
- `g = 9,8 m/s²`;

tenemos:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Peso cerca de la superficie terrestre</h3>
  <div class="worked-example-card__steps">
    <p>P = mg</p>
    <p>P = 5 × 9,8</p>
    <p><strong>P = 49 N</strong></p>
  </div>
</div>

---

## 3. Masa y peso no son lo mismo

### Masa

- mide una propiedad inercial;
- unidad: kg;
- no depende directamente del valor local de g.

### Peso

- es una fuerza gravitatoria;
- unidad: N;
- depende del campo gravitatorio.

Una persona puede conservar prácticamente la misma masa en la Tierra y en la Luna, pero tener pesos distintos.

---

## 4. El peso apunta hacia el centro de la Tierra

En problemas cercanos a la superficie terrestre solemos dibujar:

**P ↓**

como si todos los pesos fueran paralelos.

Es una buena aproximación local.

En una descripción global:

- la fuerza gravitatoria apunta hacia el centro de la Tierra.

---

## 5. El peso existe aunque no haya apoyo

Una pelota en caída libre tiene peso.

Un astronauta en órbita también puede seguir bajo una fuerte interacción gravitatoria.

Por eso:

> **“no sentir apoyo” no significa “no tener peso gravitatorio”.**

La sensación de peso aparente está relacionada con fuerzas de contacto, algo que veremos más adelante.

---

## 6. Fuerza normal

La **normal** es una fuerza de contacto ejercida por una superficie sobre un cuerpo.

Se llama normal porque apunta:

> **perpendicularmente a la superficie de contacto.**

No significa necesariamente:

- vertical;
- hacia arriba;
- igual al peso.

---

## 7. Libro sobre una mesa horizontal

Un libro en reposo sobre una mesa horizontal puede tener:

- peso hacia abajo;
- normal hacia arriba.

Si no hay otras fuerzas verticales y:

**aᵧ = 0**

entonces:

**N − P = 0**

y por lo tanto:

<div class="formula-panel">
  <span class="formula-panel__label">Sólo en este caso sencillo</span>
  <div class="formula-panel__formula">N = mg</div>
</div>

---

## 8. La normal no es automáticamente mg

Supongamos que empujamos una caja hacia abajo con una fuerza adicional F.

Entonces:

**N − mg − F = 0**

si no hay aceleración vertical.

Por lo tanto:

<div class="formula-panel">
  <span class="formula-panel__label">Con empuje hacia abajo</span>
  <div class="formula-panel__formula">N = mg + F</div>
</div>

La normal es mayor que el peso.

---

## 9. Tirar hacia arriba reduce la normal

Si tiramos de una caja con una fuerza vertical hacia arriba F y no se despega:

**N + F − mg = 0**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Con tracción hacia arriba</span>
  <div class="formula-panel__formula">N = mg − F</div>
</div>

La normal puede ser menor que el peso.

Si la fuerza hacia arriba es suficientemente grande:

- la caja pierde contacto;
- `N = 0`.

Una superficie no “tira” normalmente del cuerpo hacia ella en este modelo de contacto.

---

## 10. Normal en un ascensor

Una persona sobre una balanza en un ascensor tiene:

- peso hacia abajo;
- normal de la balanza hacia arriba.

Si elegimos arriba positivo:

<div class="formula-panel">
  <span class="formula-panel__label">Segunda ley</span>
  <div class="formula-panel__formula">N − mg = ma</div>
</div>

Entonces:

- aceleración hacia arriba → `N > mg`;
- aceleración hacia abajo → `N < mg`;
- aceleración cero → `N = mg`.

La lectura de una balanza está relacionada con N, no directamente con `mg`.

---

## 11. Tensión

La **tensión** es la fuerza que una cuerda, hilo o cable tenso ejerce sobre un objeto conectado.

La tensión:

- actúa a lo largo de la cuerda;
- tira del objeto;
- no lo empuja.

En diagramas suele representarse:

**T**

---

## 12. Modelo de cuerda ideal

Una cuerda ideal suele modelarse como:

- masa despreciable;
- inextensible;
- perfectamente flexible.

En una cuerda ideal simple, bajo condiciones apropiadas:

> **la tensión tiene el mismo módulo a lo largo de la cuerda.**

Eso es una propiedad del modelo, no de cualquier cuerda real.

---

## 13. Por qué una cuerda ideal tiene la misma tensión

Consideremos un pequeño segmento de cuerda ideal sin masa.

Si las tensiones de sus extremos fueran distintas:

- habría una fuerza neta finita;
- sobre masa cero.

El modelo no podría mantenerse de manera ordinaria.

Por eso se impone:

**T₁ = T₂**

para ese tipo de cuerda ideal.

---

## 14. Cuerda real

Una cuerda real puede:

- tener masa;
- estirarse;
- vibrar;
- tener tensión variable;
- romperse.

Entonces la igualdad de tensiones puede dejar de ser válida.

Siempre debemos distinguir:

- modelo ideal;
- sistema real.

---

## 15. Masa colgante en equilibrio

Una masa cuelga en reposo de una cuerda.

Actúan:

- tensión hacia arriba;
- peso hacia abajo.

Si:

**a = 0**

entonces:

**T − mg = 0**

por lo tanto:

<div class="formula-panel">
  <span class="formula-panel__label">Equilibrio vertical</span>
  <div class="formula-panel__formula">T = mg</div>
</div>

Otra vez: esta igualdad surge del movimiento particular, no de la definición de tensión.

---

## 16. Masa colgante acelerada

Si la masa acelera hacia arriba:

**T − mg = ma**

Entonces:

**T = m(g + a)**

y:

**T > mg**

Si acelera hacia abajo con módulo a:

**mg − T = ma**

y:

**T < mg**

---

## 17. Rozamiento

El **rozamiento** es una fuerza de contacto asociada a la interacción entre superficies.

Puede oponerse:

- al deslizamiento;
- o a la tendencia a deslizar.

No siempre apunta “en sentido contrario al movimiento del cuerpo” de manera simple.

Hay que analizar:

> **qué deslizamiento relativo se produce o tendería a producirse entre las superficies.**

---

## 18. Rozamiento estático

El **rozamiento estático** actúa cuando no hay deslizamiento relativo entre las superficies.

Su característica más importante es:

> **se ajusta al valor necesario hasta un máximo.**

En módulo:

<div class="formula-panel">
  <span class="formula-panel__label">Rozamiento estático</span>
  <div class="formula-panel__formula">0 ≤ fₛ ≤ μₛN</div>
</div>

El valor:

**μₛN**

es el máximo rozamiento estático.

---

## 19. El rozamiento estático no siempre vale μₛN

Supongamos una caja que permanece quieta.

La empujamos horizontalmente con:

**10 N**

Si el máximo rozamiento estático es:

**30 N**

la fuerza de rozamiento puede valer:

**10 N**

en sentido contrario.

No necesita valer 30 N.

<div class="lesson-callout lesson-callout--error">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">!</span>
    <strong>No uses fₛ = μₛN automáticamente</strong>
  </div>
  <div class="lesson-callout__body">
    <p>La igualdad corresponde al límite de deslizamiento. Mientras el cuerpo permanece adherido, el rozamiento estático adopta el valor necesario dentro del rango permitido.</p>
  </div>
</div>

---

## 20. Umbral de deslizamiento

Cuando la tendencia a deslizar aumenta, el rozamiento estático puede alcanzar:

<div class="formula-panel">
  <span class="formula-panel__label">Máximo estático</span>
  <div class="formula-panel__formula">fₛ,max = μₛN</div>
</div>

Si la fuerza necesaria para evitar el deslizamiento supera ese máximo:

- comienza el movimiento relativo;
- el modelo pasa al rozamiento cinético.

---

## 21. Coeficiente de rozamiento estático

`μₛ` es un coeficiente adimensional que depende del modelo de las superficies en contacto.

No tiene unidades porque:

**μₛ = fₛ,max / N**

es una razón entre fuerzas.

En cursos escolares solemos tratarlo como constante para un par de superficies dado.

En realidad puede depender de más factores.

---

## 22. Rozamiento cinético

Cuando las superficies deslizan una respecto de la otra, usamos un modelo aproximado:

<div class="formula-panel">
  <span class="formula-panel__label">Rozamiento cinético</span>
  <div class="formula-panel__formula">f_k = μ_kN</div>
</div>

Su dirección se opone al deslizamiento relativo.

---

## 23. μₛ y μ_k

En muchos materiales encontramos aproximadamente:

**μₛ > μ_k**

Es decir:

- puede requerirse una fuerza mayor para comenzar a deslizar;
- que para mantener el deslizamiento.

Pero no debemos convertir esto en una ley universal exacta para todo sistema real.

---

## 24. Ejemplo de rozamiento cinético

Una caja de:

**m = 10 kg**

desliza sobre una superficie horizontal con:

**μ_k = 0,20**

Usamos:

**g = 10 m/s²**

Como no hay otras fuerzas verticales:

**N = mg = 100 N**

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Rozamiento cinético</h3>
  <div class="worked-example-card__steps">
    <p>f_k = μ_kN</p>
    <p>f_k = 0,20 × 100 N</p>
    <p><strong>f_k = 20 N</strong></p>
  </div>
</div>

---

## 25. Fuerza aplicada con rozamiento

Sobre la caja anterior aplicamos:

**50 N**

hacia la derecha.

El rozamiento cinético es:

**20 N**

hacia la izquierda.

Resultante:

**ΣFₓ = 50 − 20 = 30 N**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Aceleración</span>
  <div class="formula-panel__formula">a = 30/10 = 3 m/s²</div>
</div>

---

## 26. Rozamiento y dirección

No conviene memorizar:

> “el rozamiento siempre va hacia atrás”.

Ejemplo:

una persona camina hacia adelante porque el pie empuja el suelo hacia atrás y el suelo puede ejercer rozamiento estático hacia adelante sobre el pie.

La dirección se determina analizando:

- deslizamiento;
- o tendencia al deslizamiento.

---

## 27. Rodar sin deslizar — adelanto

Una rueda que rueda sin patinar puede tener rozamiento estático en el contacto.

Aunque el vehículo se esté moviendo:

- el punto de contacto instantáneo no desliza respecto del suelo.

Por eso “cuerpo en movimiento” no implica automáticamente “rozamiento cinético”.

---

## 28. Fuerza elástica

Un resorte deformado puede ejercer una fuerza que tiende a recuperar su longitud de equilibrio.

Para deformaciones dentro de cierto régimen, usamos la **ley de Hooke**:

<div class="formula-panel">
  <span class="formula-panel__label">Ley de Hooke</span>
  <div class="formula-panel__formula">F_el = −k x</div>
</div>

En una dimensión.

---

## 29. Qué significa x en Hooke

`x` representa la deformación respecto de la posición de equilibrio.

Puede ser:

- estiramiento;
- compresión.

Si elegimos el equilibrio como:

**x = 0**

el signo de x indica hacia qué lado fue deformado el resorte.

---

## 30. Qué significa el signo menos

En:

**F_el = −kx**

el signo menos indica que la fuerza elástica apunta en sentido opuesto a la deformación.

### Si x > 0

`F_el < 0`

### Si x < 0

`F_el > 0`

La fuerza apunta hacia la posición de equilibrio.

---

## 31. Constante elástica

`k` es la constante elástica del resorte.

Unidad SI:

<div class="formula-panel">
  <span class="formula-panel__label">Unidad</span>
  <div class="formula-panel__formula">N/m</div>
</div>

Un valor mayor de k indica un resorte más rígido dentro del modelo lineal.

---

## 32. Ejemplo de Hooke

Un resorte tiene:

**k = 200 N/m**

y se estira:

**x = 0,05 m**

Módulo de la fuerza:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Fuerza restauradora</h3>
  <div class="worked-example-card__steps">
    <p>|F_el| = k|x|</p>
    <p>|F_el| = 200 × 0,05</p>
    <p><strong>|F_el| = 10 N</strong></p>
  </div>
</div>

---

## 33. Límite de la ley de Hooke

La relación:

**F = −kx**

no vale para deformaciones arbitrariamente grandes.

Un resorte real puede:

- dejar de responder linealmente;
- deformarse permanentemente;
- romperse.

La ley de Hooke es un modelo válido dentro de un rango elástico apropiado.

---

## 34. Plano inclinado

Un plano inclinado obliga a pensar bien los ejes.

Suele ser conveniente elegir:

- eje x paralelo al plano;
- eje y perpendicular al plano.

Así:

- la normal queda sobre un eje;
- el peso se descompone.

---

## 35. Descomposición del peso

Para un plano que forma un ángulo θ con la horizontal:

<div class="formula-panel">
  <span class="formula-panel__label">Paralela al plano</span>
  <div class="formula-panel__formula">P_∥ = mg sen θ</div>
</div>

<div class="formula-panel">
  <span class="formula-panel__label">Perpendicular al plano</span>
  <div class="formula-panel__formula">P_⊥ = mg cos θ</div>
</div>

La componente paralela apunta cuesta abajo.

La perpendicular apunta hacia el plano.

---

## 36. Por qué aparecen seno y coseno

No conviene memorizar las componentes sin dibujo.

El procedimiento general es:

1. dibujar el peso vertical;
2. elegir ejes paralelo/perpendicular;
3. construir el triángulo de componentes;
4. identificar el ángulo;
5. aplicar trigonometría.

Si cambia cómo definimos θ:

- también puede cambiar qué función trigonométrica aparece.

---

## 37. Normal en un plano inclinado

Si no hay otras fuerzas perpendiculares y:

**a_⊥ = 0**

entonces:

**N − mg cos θ = 0**

por lo tanto:

<div class="formula-panel">
  <span class="formula-panel__label">Caso simple</span>
  <div class="formula-panel__formula">N = mg cos θ</div>
</div>

Otra vez:

> no es una definición de N.

Es el resultado de la segunda ley para esa situación.

---

## 38. Plano inclinado sin rozamiento

Sin rozamiento, la única componente de fuerza paralela al plano es:

**mg sen θ**

Entonces:

**mg sen θ = ma**

Cancelamos m:

<div class="formula-panel">
  <span class="formula-panel__label">Aceleración cuesta abajo</span>
  <div class="formula-panel__formula">a = g sen θ</div>
</div>

En este modelo, la aceleración no depende de la masa.

---

## 39. Ejemplo de plano sin rozamiento

Para:

- `θ = 30°`;
- `g = 10 m/s²`;

tenemos:

**a = 10 sen 30°**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Descenso por plano ideal</h3>
  <div class="worked-example-card__steps">
    <p>sen 30° = 0,5</p>
    <p><strong>a = 5 m/s²</strong></p>
  </div>
</div>

---

## 40. Plano inclinado con rozamiento cinético

Si el cuerpo desliza cuesta abajo:

- componente del peso hacia abajo: `mg senθ`;
- rozamiento hacia arriba: `f_k`.

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Eje paralelo</span>
  <div class="formula-panel__formula">mg senθ − f_k = ma</div>
</div>

Si:

**N = mg cosθ**

entonces:

**f_k = μ_kmg cosθ**

y:

<div class="formula-panel">
  <span class="formula-panel__label">Aceleración</span>
  <div class="formula-panel__formula">a = g(senθ − μ_k cosθ)</div>
</div>

para ese caso específico.

---

## 41. ¿Se desliza o queda en reposo?

Antes de usar rozamiento cinético debemos decidir si comienza a deslizar.

En reposo, la componente que tendería a moverlo cuesta abajo es:

**mg senθ**

El máximo rozamiento estático es:

**μₛN**

Si:

<div class="formula-panel">
  <span class="formula-panel__label">Puede permanecer en reposo</span>
  <div class="formula-panel__formula">mg senθ ≤ μₛN</div>
</div>

el rozamiento estático puede equilibrarlo.

---

## 42. Ángulo crítico — profundización

En el límite de deslizamiento:

**mg senθ = μₛmg cosθ**

Cancelamos:

**mg**

y obtenemos:

<div class="formula-panel">
  <span class="formula-panel__label">Umbral</span>
  <div class="formula-panel__formula">tan θ_c = μₛ</div>
</div>

para el modelo simple del bloque sobre plano.

---

## 43. Sistemas de cuerpos

Muchas situaciones tienen varios cuerpos conectados o en contacto.

Entonces debemos decidir:

- analizar cada cuerpo por separado;
- o analizar el sistema completo.

Ambos enfoques pueden ser útiles.

---

## 44. Un diagrama por cuerpo

Supongamos dos bloques A y B unidos por una cuerda.

Conviene dibujar:

- DCL de A;
- DCL de B.

Después aplicamos:

**ΣF_A = m_Aa_A**

**ΣF_B = m_Ba_B**

Si la cuerda ideal es inextensible:

- las aceleraciones pueden estar relacionadas.

---

## 45. Dos bloques sobre una mesa sin rozamiento

Bloques:

- `m₁`;
- `m₂`.

Una fuerza externa F tira del sistema.

Como conjunto:

<div class="formula-panel">
  <span class="formula-panel__label">Sistema completo</span>
  <div class="formula-panel__formula">F = (m₁ + m₂)a</div>
</div>

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Aceleración común</span>
  <div class="formula-panel__formula">a = F/(m₁ + m₂)</div>
</div>

---

## 46. Encontrar la tensión entre los bloques

Una vez conocida a, analizamos uno de los bloques.

Si sobre `m₂` horizontalmente sólo actúa la tensión:

<div class="formula-panel">
  <span class="formula-panel__label">Bloque 2</span>
  <div class="formula-panel__formula">T = m₂a</div>
</div>

La tensión es una fuerza interna del sistema de dos bloques, pero externa si analizamos solamente uno.

---

## 47. Fuerzas internas y externas

La clasificación depende del sistema elegido.

### Sistema = dos bloques juntos

La tensión entre ellos es interna.

### Sistema = sólo bloque 2

La tensión es externa.

Esto muestra por qué:

> **definir el sistema es parte de resolver el problema.**

---

## 48. Polea ideal

Una polea ideal suele modelarse con:

- masa despreciable;
- eje sin rozamiento;
- cuerda ideal;
- cuerda que no resbala.

Bajo este modelo, una misma cuerda puede conservar:

- igual módulo de tensión;
- una relación geométrica simple entre aceleraciones.

---

## 49. La polea cambia la dirección de la tensión

Una polea fija ideal puede redirigir la cuerda.

La tensión sigue actuando:

- a lo largo de cada tramo de cuerda.

Por eso podemos tener:

- un tramo horizontal;
- otro vertical;

con el mismo módulo T bajo el modelo ideal.

---

## 50. Máquina de Atwood ideal

Consideremos dos masas:

- `m₁`;
- `m₂`;

unidas por una cuerda ideal sobre una polea ideal.

Supongamos:

**m₂ > m₁**

Entonces:

- `m₂` baja;
- `m₁` sube.

Tienen igual módulo de aceleración si la cuerda es inextensible.

---

## 51. Ecuaciones de Atwood

Para `m₂`, tomando abajo positivo:

**m₂g − T = m₂a**

Para `m₁`, tomando arriba positivo:

**T − m₁g = m₁a**

Sumamos:

**(m₂ − m₁)g = (m₁ + m₂)a**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Aceleración ideal</span>
  <div class="formula-panel__formula">a = [(m₂ − m₁)/(m₁ + m₂)]g</div>
</div>

---

## 52. Tensión en Atwood

Después de obtener a podemos usar, por ejemplo:

**T − m₁g = m₁a**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Tensión</span>
  <div class="formula-panel__formula">T = m₁(g + a)</div>
</div>

También debería obtenerse el mismo resultado desde la ecuación de `m₂`.

Eso sirve como control.

---

## 53. Ejemplo de Atwood

Tomemos:

- `m₁ = 2 kg`;
- `m₂ = 3 kg`;
- `g = 10 m/s²`.

Aceleración:

**a = [(3 − 2)/(3 + 2)]10**

**a = 2 m/s²**

Tensión:

**T = 2(10 + 2)**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Sistema de dos masas</h3>
  <div class="worked-example-card__steps">
    <p>a = 2 m/s²</p>
    <p><strong>T = 24 N</strong></p>
  </div>
</div>

---

## 54. Bloque sobre mesa conectado a masa colgante

Otro sistema frecuente:

- bloque `m₁` sobre una mesa;
- masa `m₂` colgante;
- cuerda y polea ideales.

Si la mesa no tiene rozamiento:

### Bloque sobre mesa

**T = m₁a**

### Masa colgante

**m₂g − T = m₂a**

Sumando:

<div class="formula-panel">
  <span class="formula-panel__label">Aceleración</span>
  <div class="formula-panel__formula">a = m₂g/(m₁ + m₂)</div>
</div>

---

## 55. Agregar rozamiento al sistema

Si `m₁` desliza sobre la mesa con rozamiento cinético:

**f_k = μ_kN**

y, en una mesa horizontal simple:

**N = m₁g**

Entonces:

### Bloque

**T − f_k = m₁a**

### Masa colgante

**m₂g − T = m₂a**

Las ecuaciones deben resolverse juntas.

---

## 56. El movimiento esperado debe verificarse

En un sistema con rozamiento estático no podemos asumir automáticamente que se mueve.

Primero:

1. suponemos reposo;
2. calculamos el rozamiento necesario;
3. verificamos si cumple `fₛ ≤ μₛN`.

Si puede cumplirlo:

- el sistema permanece en reposo.

Si no:

- comienza el deslizamiento;
- pasamos al modelo cinético.

---

## 57. Fuerzas en contacto entre bloques

Dos bloques en contacto pueden ejercer fuerzas normales uno sobre otro.

Por tercera ley:

- A sobre B;
- B sobre A;

tienen igual módulo y sentidos opuestos.

Pero actúan sobre cuerpos distintos.

Al analizar el sistema conjunto:

- son internas.

---

## 58. Aplicación: empujar dos cajas

Dos cajas:

- `m₁ = 4 kg`;
- `m₂ = 6 kg`;

sobre piso sin rozamiento.

Aplicamos:

**F = 20 N**

al conjunto.

Aceleración:

**a = 20/(4 + 6)**

**a = 2 m/s²**

La fuerza de contacto necesaria para acelerar `m₂` es:

**F_contacto = m₂a = 12 N**

---

## 59. ¿Importa sobre qué caja aplicamos la fuerza?

La aceleración del sistema ideal puede ser la misma si la resultante externa total es la misma.

Pero la fuerza de contacto entre los bloques puede cambiar según:

- dónde aplicamos F;
- cómo están ordenadas las masas.

Por eso el análisis interno requiere diagramas individuales.

---

## 60. Aplicación: frenado y rozamiento

En un modelo simplificado, el rozamiento entre neumáticos y suelo puede permitir:

- acelerar;
- frenar;
- tomar curvas.

No debe pensarse que el rozamiento siempre “perjudica” el movimiento.

Sin rozamiento suficiente:

- caminar sería difícil;
- un auto no podría transmitir adecuadamente fuerzas al suelo.

---

## 61. Aplicación: cinturón y normal

En un vehículo que acelera o frena:

- asiento;
- cinturón;
- piso;

pueden ejercer fuerzas de contacto que cambian nuestra velocidad.

Esas fuerzas explican nuestra aceleración.

No necesitamos una “fuerza de movimiento” adicional.

---

## 62. Aplicación: balanza en ascensor

Una balanza mide la interacción de contacto con el cuerpo.

Si el ascensor acelera:

- la normal cambia.

Por eso una persona puede sentir:

- “más pesada”;
- “más liviana”;

sin que su masa haya cambiado.

---

## 63. Estrategia general para problemas con fuerzas particulares

Una secuencia robusta es:

1. elegí el cuerpo o sistema;
2. identificá peso;
3. identificá contactos;
4. determiná normales;
5. identificá cuerdas y tensiones;
6. decidí si existe rozamiento estático o cinético;
7. dibujá el DCL;
8. elegí ejes convenientes;
9. descomponé fuerzas;
10. escribí `ΣF = ma` por eje;
11. agregá restricciones de cuerdas o geometría;
12. resolvé y verificá el movimiento supuesto.

---

## 64. Errores frecuentes

### “La normal siempre vale mg”

No.

### “La normal siempre es vertical”

No. Es perpendicular a la superficie.

### “La tensión siempre vale mg”

No. Depende de la dinámica.

### “El rozamiento estático siempre vale μₛN”

No. Sólo alcanza ese valor máximo en el límite de deslizamiento.

### “El rozamiento siempre apunta contra la velocidad del cuerpo”

No. Se opone al deslizamiento relativo o a su tendencia.

### “Si un cuerpo se mueve hay rozamiento cinético”

No necesariamente. Puede rodar sin deslizar.

### “La fuerza del resorte siempre es kx”

Le falta la dirección restauradora: en una dimensión `F = −kx`.

### “En plano inclinado N = mg”

En el caso simple vale `N = mg cosθ`.

### “Una polea ideal reduce siempre la tensión”

No. Una polea fija ideal puede cambiar la dirección sin cambiar el módulo de T.

### “Las aceleraciones de cuerpos conectados siempre son iguales”

Depende de la geometría y del modelo de cuerda/poleas.

---

## 65. Problemas y ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Reconocimiento</strong>
  </div>
  <ol>
    <li>Definí peso, normal y tensión.</li>
    <li>Explicá por qué la normal no tiene que ser igual al peso.</li>
    <li>Escribí la condición general del rozamiento estático.</li>
    <li>¿Qué significa el signo menos en la ley de Hooke?</li>
    <li>¿Qué hipótesis definen una cuerda ideal simple?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Fuerzas individuales</strong>
  </div>
  <ol>
    <li>Calculá el peso de una masa de 8 kg usando g = 9,8 m/s².</li>
    <li>Una caja de 10 kg está sobre una mesa horizontal y además se la empuja 30 N hacia abajo. Usando g = 10 m/s², calculá N.</li>
    <li>Una masa de 4 kg cuelga en equilibrio de una cuerda. Calculá T con g = 10 m/s².</li>
    <li>Un resorte de k = 300 N/m se estira 4 cm. Calculá el módulo de la fuerza elástica.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Rozamiento y plano inclinado</strong>
  </div>
  <ol>
    <li>Una caja de 5 kg desliza en mesa horizontal con μ_k = 0,30. Calculá f_k usando g = 10 m/s².</li>
    <li>Sobre esa caja se aplican 25 N horizontales. Calculá la aceleración.</li>
    <li>Un bloque de 2 kg está sobre un plano de 30° sin rozamiento. Calculá N y a.</li>
    <li>Explicá cómo decidirías si un bloque con rozamiento estático comienza a deslizar por un plano.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Sistemas de cuerpos</strong>
  </div>
  <ol>
    <li>Dos bloques de 3 kg y 7 kg están unidos sobre una mesa sin rozamiento. Una fuerza de 40 N tira del conjunto. Calculá a.</li>
    <li>Si la fuerza se aplica al bloque de 3 kg y el de 7 kg es arrastrado por la cuerda, calculá T.</li>
    <li>Una máquina de Atwood tiene masas de 2 kg y 5 kg. Calculá a y T con g = 10 m/s².</li>
    <li>Un bloque de 4 kg sobre mesa sin rozamiento está conectado a una masa colgante de 1 kg. Calculá a y T.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Derivá la aceleración de una máquina de Atwood ideal a partir de dos diagramas de cuerpo libre.</li>
    <li>Demostrá que un bloque sobre plano sin rozamiento tiene `a = g senθ` y explicá por qué la masa se cancela.</li>
    <li>Derivá `tanθ_c = μₛ` para el ángulo límite de deslizamiento en un plano simple.</li>
    <li>Explicá por qué una fuerza puede ser interna para un sistema y externa para otro.</li>
  </ol>
</div>

---

## 66. Experiencia: medir una constante elástica

### Objetivo

Explorar la relación entre fuerza y deformación.

### Materiales

- resorte de laboratorio;
- masas pequeñas;
- regla;
- soporte seguro.

### Procedimiento

1. Medí la posición sin carga.
2. Agregá una masa pequeña.
3. Esperá el equilibrio.
4. Medí la deformación.
5. Repetí sin superar el rango seguro.
6. Graficá fuerza aplicada versus deformación.

### Esperamos

Dentro del régimen lineal:

- una relación aproximadamente proporcional;
- pendiente relacionada con k.

### Seguridad

No sobrecargar el resorte ni colocarse debajo de masas suspendidas.

---

## 67. Experiencia: umbral de rozamiento estático

### Objetivo

Observar que el rozamiento estático se adapta hasta un máximo.

Una opción segura es:

- bloque liviano;
- superficie;
- dinamómetro escolar.

Aumentamos lentamente la tracción hasta que comienza a deslizar.

Observamos:

- fuerza creciente mientras sigue quieto;
- valor cercano al máximo antes del movimiento.

Esto ayuda a diferenciar:

**fₛ**

de:

**fₛ,max**

---

## 68. Ejemplo integrado

Una caja de:

**m = 5 kg**

está sobre una superficie horizontal.

Datos:

- `μₛ = 0,40`;
- `μ_k = 0,30`;
- `g = 10 m/s²`.

Aplicamos una fuerza horizontal de:

**18 N**

### Normal

**N = mg = 50 N**

### Máximo rozamiento estático

**fₛ,max = 0,40 × 50 = 20 N**

Para mantener la caja en reposo sólo se necesitan:

**18 N**

de rozamiento estático.

Como:

**18 N < 20 N**

la caja no se mueve.

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>Rozamiento estático que se ajusta</h3>
  <div class="worked-example-card__steps">
    <p>N = 50 N</p>
    <p>fₛ,max = 20 N</p>
    <p>fₛ real = 18 N</p>
    <p>ΣFₓ = 0</p>
    <p><strong>La caja permanece en reposo.</strong></p>
  </div>
</div>

Si aplicáramos:

**25 N**

el rozamiento estático no alcanzaría.

La caja comenzaría a deslizar y entonces usaríamos:

**f_k = 0,30 × 50 = 15 N**

La resultante horizontal sería:

**25 − 15 = 10 N**

y:

**a = 10/5 = 2 m/s²**

Este ejemplo muestra por qué no podemos sustituir automáticamente:

**fₛ = μₛN**

desde el comienzo.

---

## 69. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿El peso se mide en kg o en N?</summary>
  <div class="lesson-quiz__answer">
    En newton, porque es una fuerza.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿La normal siempre vale mg?</summary>
  <div class="lesson-quiz__answer">
    No. Su valor surge de la dinámica perpendicular a la superficie y puede ser mayor, menor o incluso cero.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Cuándo vale fₛ = μₛN?</summary>
  <div class="lesson-quiz__answer">
    En el límite de deslizamiento, cuando el rozamiento estático alcanza su valor máximo.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Hacia dónde apunta una fuerza elástica ideal?</summary>
  <div class="lesson-quiz__answer">
    Hacia la posición de equilibrio, en sentido opuesto a la deformación.
  </div>
</details>

<details class="lesson-quiz">
  <summary>5. ¿Qué componente del peso hace deslizar un bloque cuesta abajo en un plano inclinado?</summary>
  <div class="lesson-quiz__answer">
    La componente paralela al plano, `mg senθ`, bajo la convención angular usual.
  </div>
</details>

<details class="lesson-quiz">
  <summary>6. ¿Qué simplifica una cuerda ideal inextensible?</summary>
  <div class="lesson-quiz__answer">
    Permite relacionar los movimientos de los cuerpos conectados y, en configuraciones simples, tratar la tensión como de igual módulo a lo largo de la cuerda.
  </div>
</details>

---

## 70. Resumen

- El peso es una fuerza gravitatoria y cerca de la Tierra se modela como `P = mg`.
- Masa y peso no son lo mismo.
- La normal es perpendicular a la superficie.
- La normal no vale automáticamente `mg`.
- La tensión actúa a lo largo de una cuerda tensa.
- En una cuerda ideal simple la tensión puede considerarse igual a lo largo de ella.
- El rozamiento estático se ajusta: `0 ≤ fₛ ≤ μₛN`.
- `μₛN` es el máximo rozamiento estático, no su valor permanente.
- En deslizamiento usamos aproximadamente `f_k = μ_kN`.
- La dirección del rozamiento depende del deslizamiento relativo o su tendencia.
- La ley de Hooke es `F_el = −kx`.
- El signo menos indica carácter restaurador.
- En un plano inclinado simple, el peso se descompone en `mg senθ` y `mg cosθ`.
- Los sistemas de varios cuerpos requieren definir con claridad qué fuerzas son internas y externas.
- En poleas y cuerdas ideales usamos hipótesis simplificadoras explícitas.
- Antes de asumir movimiento con rozamiento estático hay que verificar si el máximo disponible es superado.
- Los diagramas de cuerpo libre siguen siendo la herramienta central.

---

## 71. Siguiente tema recomendado

**F-10 — Estática y equilibrio**

Hasta ahora analizamos principalmente cómo las fuerzas producen aceleraciones.

Ahora vamos a ampliar el concepto de equilibrio para incluir también:

- equilibrio traslacional;
- momento de una fuerza;
- brazo de palanca;
- torque;
- equilibrio rotacional;
- centro de masa;
- centro de gravedad;
- palancas;
- estabilidad;
- máquinas simples.
