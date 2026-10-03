---
title: "Física del tránsito y seguridad vial"
description: "Cómo aplicar cinemática, tiempo de reacción, frenado, fricción, energía, impulso y cantidad de movimiento para comprender distancias de detención, choques y decisiones de seguridad vial."
slug: "fisica-del-transito-y-seguridad-vial"

course: "aplicaciones"
module: "mecanica-en-contexto"
order: 7

level: "intermedio"
cycle: "ambos"

yearsApprox: [3, 4, 5, 6]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - cinematica-descripcion-del-movimiento
  - movimiento-rectilineo-uniformemente-variado
  - fuerzas-particulares
  - trabajo-energia-y-potencia
  - cantidad-de-movimiento-e-impulso

skills:
  - seguridad-vial
  - velocidad
  - tiempo-de-reaccion
  - distancia-de-reaccion
  - distancia-de-frenado
  - distancia-de-detencion
  - friccion
  - energia-cinetica
  - impulso
  - cantidad-de-movimiento
  - choque
  - cinturon-de-seguridad
  - airbag
  - casco
  - adherencia
  - analisis-de-riesgo
  - modelizacion

hasExercises: true
hasQuiz: true
hasExperiment: true

deepening: true
status: "complete"
---

## A 100 km/h no se necesita sólo “un poco más” de distancia que a 50 km/h

Duplicar la rapidez no duplica todo.

Durante el tiempo de reacción, la distancia recorrida sí crece aproximadamente de manera proporcional a v.

Pero la energía cinética depende de:

**v²**

y, bajo un modelo simple de frenado limitado por fricción aproximadamente constante, la distancia de frenado también crece aproximadamente con:

**v²**

Por eso aumentar la rapidez cambia fuertemente el margen disponible para detener un vehículo.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>La distancia total de detención tiene al menos dos partes: lo recorrido antes de comenzar a frenar y lo recorrido durante el frenado. La primera depende del tiempo de reacción; la segunda depende de la velocidad, la adherencia, el estado del vehículo, la pendiente y otras condiciones.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta aplicación deberías poder:

- distinguir rapidez, velocidad y aceleración;
- convertir km/h a m/s;
- estimar una distancia de reacción;
- distinguir distancia de reacción, frenado y detención;
- derivar un modelo simple de distancia de frenado;
- explicar por qué la distancia de frenado crece aproximadamente con v²;
- relacionar adherencia y fuerza de frenado;
- interpretar el efecto de lluvia, hielo, neumáticos y pendiente;
- relacionar energía cinética con severidad de un choque;
- interpretar impulso y tiempo de interacción;
- comprender la función física de cinturón, airbag, casco y zonas deformables;
- distinguir velocidad legal de velocidad físicamente segura para una condición;
- reconocer límites de los modelos escolares;
- analizar seguridad vial sin convertir la lección en una guía legal fija.

---

# Movimiento y unidades

## 1. Convertir km/h a m/s

Como:

**1 km = 1000 m**

y:

**1 h = 3600 s**

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Conversión</span>
  <div class="formula-panel__formula">1 km/h = 1/3,6 m/s</div>
</div>

Por lo tanto:

<div class="formula-panel">
  <span class="formula-panel__label">Regla práctica</span>
  <div class="formula-panel__formula">v(m/s) = v(km/h)/3,6</div>
</div>

---

## 2. Ejemplo

**72 km/h**

equivale a:

<div class="formula-panel">
  <span class="formula-panel__label">Conversión</span>
  <div class="formula-panel__formula">72/3,6 = 20 m/s</div>
</div>

Eso significa aproximadamente:

- 20 metros cada segundo;

si la rapidez se mantiene.

---

# Tiempo de reacción

## 3. El vehículo no empieza a frenar instantáneamente

Entre percibir un peligro y desarrollar una respuesta pueden transcurrir décimas de segundo o más.

Ese intervalo depende de:

- atención;
- visibilidad;
- expectativa;
- fatiga;
- distracciones;
- sustancias;
- complejidad de la situación.

No existe un único tiempo de reacción válido para todas las personas y circunstancias.

---

## 4. Distancia de reacción

Si durante el intervalo de reacción la velocidad cambia poco:

<div class="formula-panel">
  <span class="formula-panel__label">Distancia de reacción</span>
  <div class="formula-panel__formula">d<sub>r</sub> ≈ vt<sub>r</sub></div>
</div>

---

## 5. Ejemplo

A:

**20 m/s**

si usamos un tiempo de reacción ilustrativo de:

**1,0 s**

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Ejemplo</span>
  <div class="formula-panel__formula">d<sub>r</sub> ≈ 20 m</div>
</div>

Este número es un ejemplo de modelo, no un valor garantizado para conducción real.

---

## 6. Duplicar la velocidad

Con el mismo t<sub>r</sub>:

<div class="formula-panel">
  <span class="formula-panel__label">Escalamiento</span>
  <div class="formula-panel__formula">d<sub>r</sub> ∝ v</div>
</div>

Duplicar v duplica aproximadamente la distancia de reacción.

---

# Frenado

## 7. Aceleración negativa no significa “moverse hacia atrás”

Si elegimos positivo en el sentido del movimiento, un vehículo que frena tiene:

- v positiva;
- a negativa.

La aceleración describe el cambio de velocidad.

---

## 8. Ecuación útil de MRUV

Si aproximamos el frenado con aceleración constante:

<div class="formula-panel">
  <span class="formula-panel__label">MRUV</span>
  <div class="formula-panel__formula">v<sub>f</sub>² = v<sub>0</sub>² + 2aΔx</div>
</div>

Para detenerse:

**v<sub>f</sub> = 0**

---

## 9. Distancia de frenado con desaceleración constante

Si llamamos b al módulo positivo de la desaceleración:

**a = −b**

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Frenado</span>
  <div class="formula-panel__formula">d<sub>f</sub> = v<sub>0</sub>²/(2b)</div>
</div>

---

## 10. Dependencia cuadrática

Si b se mantiene igual:

<div class="formula-panel">
  <span class="formula-panel__label">Escalamiento</span>
  <div class="formula-panel__formula">d<sub>f</sub> ∝ v²</div>
</div>

Duplicar v produce aproximadamente:

- cuatro veces la distancia de frenado.

---

## 11. Distancia total de detención

En un modelo simple:

<div class="formula-panel">
  <span class="formula-panel__label">Detención</span>
  <div class="formula-panel__formula">d<sub>total</sub> = d<sub>r</sub> + d<sub>f</sub></div>
</div>

Una parte ocurre:

- antes de frenar;

y otra:

- durante el frenado.

---

# Fricción y adherencia

## 12. Fuerza máxima de adherencia — modelo simple

En un modelo básico:

<div class="formula-panel">
  <span class="formula-panel__label">Límite de fricción</span>
  <div class="formula-panel__formula">f<sub>máx</sub> ≈ μN</div>
</div>

En una calzada horizontal ideal:

**N≈mg**

---

## 13. Desaceleración aproximada limitada por fricción

Si la fuerza horizontal máxima es aproximadamente μmg:

<div class="formula-panel">
  <span class="formula-panel__label">Modelo ideal</span>
  <div class="formula-panel__formula">b ≈ μg</div>
</div>

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Distancia idealizada</span>
  <div class="formula-panel__formula">d<sub>f</sub> ≈ v²/(2μg)</div>
</div>

---

## 14. Qué enseña esta fórmula

Para igual v:

- menor μ → mayor distancia de frenado.

Para igual μ:

- mayor v → mucho mayor distancia de frenado.

---

## 15. Pero μ no es una constante universal

La adherencia depende de:

- neumático;
- presión;
- dibujo;
- temperatura;
- agua;
- hielo;
- superficie;
- contaminantes;
- velocidad;
- sistema de frenado.

Por eso una cifra única de μ es sólo una:

- aproximación.

---

## 16. Lluvia

El agua puede disminuir la adherencia y aumentar el riesgo.

Además reduce:

- visibilidad;
- contraste;
- capacidad de anticipación.

Eso puede afectar tanto:

- t<sub>r</sub>;
- como d<sub>f</sub>.

---

## 17. Aquaplaning

Cuando una capa de agua impide que el neumático mantenga contacto adecuado con el pavimento puede disminuir drásticamente el control.

La ocurrencia depende de:

- velocidad;
- profundidad de agua;
- neumático;
- presión;
- drenaje.

No es un fenómeno que deba buscarse experimentalmente.

---

## 18. Pendiente

En una bajada, una componente del peso actúa en el sentido del movimiento.

Eso puede aumentar la distancia necesaria para detenerse.

En una subida puede ocurrir lo contrario.

---

# Energía cinética

## 19. Energía del vehículo

<div class="formula-panel">
  <span class="formula-panel__label">Cinética</span>
  <div class="formula-panel__formula">K = ½mv²</div>
</div>

La masa influye linealmente.

La velocidad:

- al cuadrado.

---

## 20. Duplicar la rapidez

Si v se duplica:

<div class="formula-panel">
  <span class="formula-panel__label">Energía</span>
  <div class="formula-panel__formula">K′ = ½m(2v)² = 4K</div>
</div>

Por eso velocidades mayores implican una cantidad mucho mayor de energía que debe:

- disiparse al frenar;
- transformarse en un choque.

---

## 21. ¿La masa aumenta la distancia de frenado?

En el modelo ideal:

**d<sub>f</sub>≈v²/(2μg)**

la masa se cancela.

Pero en un vehículo real la masa puede afectar:

- neumáticos;
- temperatura de frenos;
- suspensión;
- distribución de cargas;
- rendimiento del sistema.

El modelo ideal no debe extrapolarse sin cuidado.

---

# Choques

## 22. Un choque no “consume” cantidad de movimiento

Para un sistema aproximadamente aislado durante un choque:

<div class="formula-panel">
  <span class="formula-panel__label">Momento</span>
  <div class="formula-panel__formula">Σ<strong>p</strong><sub>antes</sub> ≈ Σ<strong>p</strong><sub>después</sub></div>
</div>

La energía cinética, en cambio, puede transformarse en:

- deformación;
- energía interna;
- sonido;
- rotación.

---

## 23. Choque inelástico

Los choques de tránsito son altamente inelásticos.

Los vehículos se:

- deforman;
- calientan;
- dañan.

La conservación de momento no implica conservación de:

- energía cinética.

---

## 24. Impulso

<div class="formula-panel">
  <span class="formula-panel__label">Impulso</span>
  <div class="formula-panel__formula"><strong>J</strong> = Δ<strong>p</strong> = ∫<strong>F</strong>dt</div>
</div>

Si un cambio de cantidad de movimiento similar ocurre durante más tiempo, puede disminuir la fuerza media.

---

# Sistemas de protección

## 25. Cinturón

Durante un choque, el cuerpo tendería a continuar su movimiento por inercia.

El cinturón:

- aplica fuerzas sobre zonas diseñadas para soportarlas;
- aumenta el tiempo y distancia durante los que cambia el movimiento del ocupante;
- evita o reduce impactos contra el interior o la expulsión.

---

## 26. Airbag

El airbag trabaja junto con otros sistemas de retención.

Puede:

- aumentar el tiempo de interacción;
- distribuir fuerzas sobre una superficie mayor;
- reducir contacto con partes rígidas.

No reemplaza:

- el cinturón.

---

## 27. Zonas deformables

La deformación controlada del vehículo transforma energía cinética y aumenta la duración del choque.

Esto puede reducir picos de fuerza sobre el habitáculo.

La deformación del exterior no significa necesariamente “peor protección”.

---

## 28. Habitáculo

El diseño busca combinar:

- absorción de energía en zonas deformables;
- preservación del espacio de supervivencia;
- retención de ocupantes.

Es un problema de ingeniería de sistema.

---

## 29. Casco

Un casco puede:

- distribuir cargas;
- absorber energía mediante deformación;
- aumentar el tiempo de interacción;
- reducir riesgo de contacto directo.

No vuelve segura cualquier velocidad o impacto.

---

# Distancia de seguimiento

## 30. No se trata sólo de “metros fijos”

Una distancia de seguimiento segura depende de:

- velocidad;
- visibilidad;
- adherencia;
- reacción;
- vehículo;
- tráfico.

Por eso muchas recomendaciones prácticas se expresan en:

- tiempo de separación;

y no en una única cantidad de metros.

---

## 31. Tiempo de separación

Si dos vehículos mantienen una diferencia temporal Δt:

<div class="formula-panel">
  <span class="formula-panel__label">Separación aproximada</span>
  <div class="formula-panel__formula">d ≈ vΔt</div>
</div>

Al aumentar la velocidad, la distancia espacial correspondiente aumenta.

---

# Curvas

## 32. Cambiar de dirección requiere aceleración

En una curva, incluso con rapidez constante, la velocidad cambia de dirección.

Aparece aceleración centrípeta:

<div class="formula-panel">
  <span class="formula-panel__label">Centrípeta</span>
  <div class="formula-panel__formula">a<sub>c</sub> = v²/r</div>
</div>

---

## 33. La velocidad vuelve a aparecer al cuadrado

Para el mismo radio:

- duplicar v;

requiere:

- cuatro veces a<sub>c</sub>.

Eso aumenta fuertemente la exigencia de adherencia.

---

## 34. Fuerza lateral

En una curva plana, la fricción entre neumático y pavimento participa en proporcionar la fuerza lateral necesaria.

Si la demanda supera la adherencia disponible:

- el vehículo no puede seguir la trayectoria prevista.

---

# Visibilidad y percepción

## 35. La Física no empieza cuando se pisa el freno

La seguridad depende también de detectar el peligro con tiempo.

Factores como:

- oscuridad;
- lluvia;
- encandilamiento;
- obstáculos;
- distracción;

pueden retrasar la respuesta.

---

## 36. Velocidad y campo de decisión

A mayor velocidad, en el mismo segundo se recorren más metros.

Por eso hay menos tiempo disponible para:

- observar;
- interpretar;
- decidir;
- actuar;

ante un obstáculo a una distancia dada.

---

# Normas y Física

## 37. Límite legal no es garantía física

Un límite de velocidad es una norma jurídica.

La velocidad físicamente prudente puede ser menor si hay:

- lluvia;
- niebla;
- hielo;
- tránsito;
- obras;
- visibilidad reducida.

La Física ayuda a comprender por qué.

---

## 38. Las normas pueden cambiar

Esta lección no fija límites legales concretos.

Para circulación real deben consultarse:

- legislación vigente;
- señalización;
- autoridades competentes.

La parte física —reacción, frenado, energía— se mantiene como herramienta de análisis.

---

# Experiencia segura

## 39. Carrito sobre mesa, no vehículo real

Podemos estudiar frenado con:

- carrito de juguete;
- superficie controlada;
- cinta métrica;
- video.

Nunca se debe experimentar frenando un vehículo real para “medir qué pasa”.

---

## 40. Propuesta experimental

1. impulsá suavemente un carrito;
2. medí una velocidad inicial aproximada con video;
3. dejalo detenerse sobre una superficie;
4. medí distancia de frenado;
5. repetí con otra velocidad;
6. compará d con v².

El objetivo es explorar:

- tendencias;
- no reproducir un automóvil.

---

## 41. Análisis con gráfico

Si el modelo d<sub>f</sub>∝v² funciona razonablemente, un gráfico:

- d<sub>f</sub> vs. v²;

debería aproximarse a:

- una recta.

---

## 42. Herramientas matemáticas

Especialmente útiles:

- M-04 — Potencias y raíces;
- M-06 — Despeje de fórmulas;
- M-09 — Función lineal;
- M-11 — Interpretación de gráficos;
- M-15 — Vectores y componentes.

---

## 43. Errores frecuentes

### “Duplicar velocidad duplica distancia de frenado”

No en el modelo ideal: la cuadruplica.

### “Si el auto tiene ABS siempre frena en menos distancia”

El ABS ayuda principalmente a evitar bloqueo y conservar capacidad de dirección; la distancia depende de muchas condiciones.

### “Un auto pesado siempre necesita proporcionalmente más distancia”

No en el modelo ideal de fricción simple; en sistemas reales intervienen otros factores.

### “Si el límite legal permite cierta velocidad, siempre es segura”

No. Las condiciones físicas pueden exigir menos.

### “El cinturón evita fuerza”

No. Modifica cómo y durante cuánto tiempo actúan las fuerzas.

---

## 44. Problemas graduados

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Unidades</strong>
  </div>
  <ol>
    <li>Convertí 54 km/h a m/s.</li>
    <li>Convertí 90 km/h a m/s.</li>
    <li>A 15 m/s, ¿cuántos metros se recorren en 1,2 s?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Reacción y frenado</strong>
  </div>
  <ol>
    <li>Un vehículo circula a 20 m/s y usa t<sub>r</sub>=0,9 s como modelo. Calculá d<sub>r</sub>.</li>
    <li>Si b=8 m/s², calculá d<sub>f</sub>.</li>
    <li>Sumá ambas para estimar d<sub>total</sub>.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Escalamiento</strong>
  </div>
  <ol>
    <li>Compará d<sub>f</sub> para velocidades v y 2v con la misma b.</li>
    <li>Compará las energías cinéticas.</li>
    <li>Explicá por qué ambos resultados tienen la misma dependencia cuadrática.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Curvas</strong>
  </div>
  <ol>
    <li>Calculá a<sub>c</sub> para v=10 m/s y r=25 m.</li>
    <li>Repetí para 20 m/s.</li>
    <li>Explicá cómo cambia la demanda de adherencia.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Derivá d<sub>f</sub>≈v²/(2μg) a partir de dinámica y cinemática.</li>
    <li>Analizá por qué un modelo de μ constante es insuficiente para predecir una frenada real.</li>
    <li>Explicá con impulso por qué aumentar el tiempo de desaceleración puede reducir la fuerza media sobre un ocupante.</li>
  </ol>
</div>

---

## 45. Ejemplo integrado

Un vehículo circula a:

**72 km/h = 20 m/s**

Usamos sólo como ejemplo:

**t<sub>r</sub> = 1,0 s**

y una desaceleración constante idealizada:

**b = 8,0 m/s²**

### Reacción

<div class="formula-panel">
  <span class="formula-panel__label">Reacción</span>
  <div class="formula-panel__formula">d<sub>r</sub> = 20·1,0 = 20 m</div>
</div>

### Frenado

<div class="formula-panel">
  <span class="formula-panel__label">Frenado</span>
  <div class="formula-panel__formula">d<sub>f</sub> = 20²/(2·8) = 25 m</div>
</div>

### Total

<div class="formula-panel">
  <span class="formula-panel__label">Detención</span>
  <div class="formula-panel__formula">d<sub>total</sub> ≈ 45 m</div>
</div>

Este resultado no es una tabla de tránsito.

Es una demostración de cómo dos etapas físicas distintas contribuyen a la distancia total.

---

## 46. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Qué diferencia hay entre distancia de reacción y distancia de frenado?</summary>
  <div class="lesson-quiz__answer">
    La primera se recorre antes de comenzar la acción de frenado; la segunda se recorre mientras el vehículo desacelera.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. Si se duplica v y la desaceleración es la misma, ¿cómo cambia d<sub>f</sub>?</summary>
  <div class="lesson-quiz__answer">
    Se multiplica por cuatro porque d<sub>f</sub> es proporcional a v².
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Por qué las zonas deformables pueden mejorar la protección?</summary>
  <div class="lesson-quiz__answer">
    Porque transforman energía y pueden aumentar la duración de la desaceleración, reduciendo picos de fuerza sobre el habitáculo y los ocupantes.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿La velocidad legal es siempre la velocidad físicamente segura?</summary>
  <div class="lesson-quiz__answer">
    No. La visibilidad, adherencia, clima, tránsito y otras condiciones pueden exigir una velocidad menor.
  </div>
</details>

---

## 47. Resumen

- La distancia total de detención incluye reacción y frenado.
- d<sub>r</sub>≈vt<sub>r</sub>.
- En un frenado ideal con b constante, d<sub>f</sub>=v²/(2b).
- Bajo un modelo simple limitado por fricción, d<sub>f</sub>≈v²/(2μg).
- La distancia de frenado crece aproximadamente con el cuadrado de v.
- La energía cinética también depende de v².
- Lluvia, hielo, neumáticos y superficie afectan adherencia.
- Las curvas requieren aceleración centrípeta v²/r.
- El cinturón, airbag, casco y zonas deformables modifican fuerzas y tiempos de interacción.
- Los choques conservan aproximadamente momento en sistemas apropiados, pero no necesariamente energía cinética.
- Las normas legales y la Física responden preguntas distintas.
- Los modelos escolares sirven para comprender tendencias, no para predecir exactamente una frenada real.

---

## 48. Siguiente aplicación

**A-08 — Sonido, música y acústica**

Pasaremos de fuerzas y movimiento a ondas para estudiar:

- notas;
- armónicos;
- instrumentos;
- resonancia;
- salas;
- decibeles;
- percepción.
