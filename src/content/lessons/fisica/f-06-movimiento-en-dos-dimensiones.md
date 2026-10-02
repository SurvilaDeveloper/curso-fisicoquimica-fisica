---
title: "Movimiento en dos dimensiones"
description: "Cómo describir movimientos en el plano separando componentes, y cómo interpretar tiro horizontal, tiro oblicuo, trayectoria parabólica, alcance, altura máxima y tiempo de vuelo."
slug: "movimiento-en-dos-dimensiones"

course: "fisica"
module: "cinematica"
order: 6

level: "intermedio"
cycle: "ambos"

yearsApprox: [3, 4, 5]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - caida-libre-y-tiro-vertical

skills:
  - independencia-de-componentes
  - vector-posicion
  - vector-velocidad
  - vector-aceleracion
  - tiro-horizontal
  - tiro-oblicuo
  - trayectoria-parabolica
  - alcance
  - altura-maxima
  - tiempo-de-vuelo
  - interpretacion-de-componentes

hasExercises: true
hasQuiz: true
hasExperiment: true

deepening: true
status: "complete"
---

## Un solo movimiento, dos direcciones

Lanzamos una pelota con una velocidad que no es únicamente horizontal ni únicamente vertical.

La pelota:

- avanza;
- sube;
- alcanza una altura máxima;
- baja.

A primera vista parece un movimiento nuevo y complicado.

Pero podemos describirlo combinando dos movimientos que ya conocemos:

- uno horizontal;
- otro vertical.

La idea central será:

> **un movimiento en dos dimensiones puede analizarse separando sus componentes x e y y usando el mismo tiempo para ambas.**

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>En el movimiento de proyectiles ideal, la gravedad modifica la componente vertical de la velocidad, mientras la componente horizontal permanece constante. Ambas componentes evolucionan simultáneamente durante el mismo intervalo de tiempo.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta lección deberías poder:

- representar posición, velocidad y aceleración como vectores;
- separar un movimiento en componentes cartesianas;
- comprender la independencia cinemática de las componentes;
- describir un tiro horizontal;
- calcular tiempo de caída y alcance horizontal;
- describir un tiro oblicuo;
- descomponer la velocidad inicial;
- interpretar una trayectoria parabólica;
- calcular tiempo de subida;
- calcular altura máxima;
- calcular tiempo de vuelo;
- calcular alcance bajo condiciones específicas;
- interpretar las componentes de velocidad durante el movimiento;
- reconocer los límites del modelo sin resistencia del aire.

---

## 1. Del movimiento en una dimensión al plano

Hasta ahora utilizamos principalmente una sola coordenada:

**x(t)**

o, para movimientos verticales:

**y(t)**

En dos dimensiones necesitamos ambas:

<div class="formula-panel">
  <span class="formula-panel__label">Vector posición</span>
  <div class="formula-panel__formula">r(t) = (x(t), y(t))</div>
</div>

La posición completa depende de:

- componente horizontal x;
- componente vertical y.

---

## 2. Vector velocidad

La velocidad también tiene componentes:

<div class="formula-panel">
  <span class="formula-panel__label">Vector velocidad</span>
  <div class="formula-panel__formula">v(t) = (vₓ(t), vᵧ(t))</div>
</div>

Su módulo, que corresponde a la rapidez, es:

<div class="formula-panel">
  <span class="formula-panel__label">Rapidez</span>
  <div class="formula-panel__formula">|v| = √(vₓ² + vᵧ²)</div>
</div>

La dirección depende de la relación entre ambas componentes.

---

## 3. Vector aceleración

En dos dimensiones:

<div class="formula-panel">
  <span class="formula-panel__label">Vector aceleración</span>
  <div class="formula-panel__formula">a(t) = (aₓ(t), aᵧ(t))</div>
</div>

Cada componente describe cómo cambia la componente correspondiente de la velocidad.

---

## 4. Independencia de componentes

Una idea fundamental de la cinemática vectorial es que podemos estudiar las componentes por separado.

Si:

- conocemos `aₓ`;
- conocemos `aᵧ`;

podemos resolver:

- el movimiento horizontal;
- el movimiento vertical;

con ecuaciones independientes.

Después combinamos ambos resultados para reconstruir el movimiento completo.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Separar para entender</strong>
  </div>
  <div class="lesson-callout__body">
    <p>La independencia de componentes no significa que existan dos objetos distintos. Es una herramienta matemática para describir dos aspectos simultáneos del mismo movimiento.</p>
  </div>
</div>

---

## 5. Un mismo tiempo para x e y

Aunque resolvamos por separado:

- movimiento horizontal;
- movimiento vertical;

el tiempo es común.

Si han pasado:

**2 s**

han pasado 2 s para ambas componentes.

Eso permite combinar:

**x(2 s)**

con:

**y(2 s)**

y obtener la posición real del cuerpo en ese instante.

---

## 6. Movimiento de proyectiles ideal

En esta lección estudiaremos un modelo de proyectil donde:

- despreciamos la resistencia del aire;
- consideramos g constante;
- estudiamos una región cercana a la superficie terrestre.

Si elegimos:

- x horizontal;
- y vertical hacia arriba;

la aceleración es:

<div class="formula-panel">
  <span class="formula-panel__label">Aceleración del proyectil</span>
  <div class="formula-panel__formula">a = (0, −g)</div>
</div>

Por lo tanto:

- `aₓ = 0`;
- `aᵧ = −g`.

---

## 7. Consecuencia horizontal

Como:

**aₓ = 0**

la componente horizontal de velocidad permanece constante:

<div class="formula-panel">
  <span class="formula-panel__label">Componente horizontal</span>
  <div class="formula-panel__formula">vₓ(t) = v₀ₓ</div>
</div>

y:

<div class="formula-panel">
  <span class="formula-panel__label">Posición horizontal</span>
  <div class="formula-panel__formula">x(t) = x₀ + v₀ₓt</div>
</div>

Horizontalmente tenemos MRU.

---

## 8. Consecuencia vertical

Como:

**aᵧ = −g**

tenemos MRUV vertical:

<div class="formula-panel">
  <span class="formula-panel__label">Velocidad vertical</span>
  <div class="formula-panel__formula">vᵧ(t) = v₀ᵧ − gt</div>
</div>

<div class="formula-panel">
  <span class="formula-panel__label">Posición vertical</span>
  <div class="formula-panel__formula">y(t) = y₀ + v₀ᵧt − ½gt²</div>
</div>

Estas ecuaciones son las mismas del tiro vertical.

---

## 9. La gravedad no reduce vₓ en el modelo ideal

En ausencia de resistencia del aire:

- la gravedad apunta verticalmente;
- no tiene componente horizontal.

Por eso:

**vₓ = constante**

durante todo el vuelo.

<div class="lesson-callout lesson-callout--error">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">!</span>
    <strong>El proyectil no “se queda sin velocidad horizontal”</strong>
  </div>
  <div class="lesson-callout__body">
    <p>En el modelo ideal, la componente horizontal no disminuye durante el vuelo. La trayectoria se curva porque cambia vᵧ, no porque vₓ desaparezca.</p>
  </div>
</div>

---

## 10. Tiro horizontal

En un tiro horizontal, la velocidad inicial apunta solamente en x.

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Condiciones iniciales</span>
  <div class="formula-panel__formula">v₀ₓ = v₀</div>
  <div class="formula-panel__formula">v₀ᵧ = 0</div>
</div>

El objeto puede salir, por ejemplo, desde el borde de una mesa.

---

## 11. Ecuaciones del tiro horizontal

Tomemos:

- `x₀ = 0`;
- altura inicial `y₀ = h`;
- arriba positivo.

Horizontal:

<div class="formula-panel">
  <span class="formula-panel__label">Horizontal</span>
  <div class="formula-panel__formula">x(t) = v₀t</div>
</div>

Vertical:

<div class="formula-panel">
  <span class="formula-panel__label">Vertical</span>
  <div class="formula-panel__formula">y(t) = h − ½gt²</div>
</div>

Velocidades:

**vₓ = v₀**

**vᵧ = −gt**

---

## 12. El tiempo de caída en tiro horizontal

Para encontrar cuándo toca el suelo:

**y = 0**

Entonces:

**0 = h − ½gt²**

Despejamos:

<div class="formula-panel">
  <span class="formula-panel__label">Tiempo de caída</span>
  <div class="formula-panel__formula">t = √(2h/g)</div>
</div>

Notemos algo importante:

- la velocidad horizontal inicial no aparece.

---

## 13. Independencia entre caída y avance horizontal

En el modelo ideal, si dos objetos parten desde la misma altura al mismo tiempo:

- uno se deja caer;
- otro se lanza horizontalmente;

ambos tienen:

- la misma componente vertical inicial;
- la misma aceleración vertical.

Por eso llegan al suelo al mismo tiempo, si despreciamos el aire y el suelo está al mismo nivel.

El proyectil horizontal simplemente avanza además en x.

---

## 14. Ejemplo de tiro horizontal

Una pelota sale horizontalmente desde una altura de:

**20 m**

con:

**v₀ = 10 m/s**

Usamos:

**g = 10 m/s²**

### Tiempo de caída

**t = √(2×20/10)**

**t = √4**

**t = 2 s**

### Alcance horizontal

**x = v₀t**

**x = 10×2**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Tiro horizontal</h3>
  <div class="worked-example-card__steps">
    <p>t_caída = 2 s</p>
    <p>x = 20 m</p>
    <p>vₓ = 10 m/s constante</p>
    <p><strong>La pelota avanza 20 m mientras cae 20 m.</strong></p>
  </div>
</div>

---

## 15. Velocidad al impactar en tiro horizontal

En el ejemplo:

**vₓ = 10 m/s**

y:

**vᵧ = −gt = −20 m/s**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Rapidez de impacto</span>
  <div class="formula-panel__formula">|v| = √(10² + 20²)</div>
</div>

**|v| ≈ 22,4 m/s**

La velocidad final no es puramente vertical ni horizontal.

Es oblicua.

---

## 16. Dirección de la velocidad

Podemos obtener el ángulo mediante:

<div class="formula-panel">
  <span class="formula-panel__label">Dirección</span>
  <div class="formula-panel__formula">tan θ = |vᵧ| / |vₓ|</div>
</div>

En el ejemplo:

**tan θ = 20/10 = 2**

Entonces:

**θ ≈ 63,4°**

por debajo de la horizontal.

---

## 17. ¿Por qué la trayectoria es curva?

En el tiro horizontal:

- x crece linealmente con t;
- y cambia con t².

Eso hace que la relación espacial entre x e y no sea una recta.

La velocidad cambia de dirección continuamente porque:

- vₓ permanece constante;
- vᵧ se vuelve cada vez más negativa.

---

## 18. Eliminar el tiempo

En tiro horizontal:

**x = v₀t**

Entonces:

**t = x/v₀**

Sustituimos en:

**y = h − ½gt²**

Obtenemos:

<div class="formula-panel">
  <span class="formula-panel__label">Trayectoria</span>
  <div class="formula-panel__formula">y = h − (g / 2v₀²)x²</div>
</div>

Esta es una ecuación cuadrática en x.

Por eso:

> **la trayectoria ideal es parabólica.**

---

## 19. Tiro oblicuo

En un tiro oblicuo, la velocidad inicial forma un ángulo con la horizontal.

Tenemos que descomponerla.

Si el ángulo θ se mide desde el eje x positivo:

<div class="formula-panel">
  <span class="formula-panel__label">Componente horizontal</span>
  <div class="formula-panel__formula">v₀ₓ = v₀ cos θ</div>
</div>

<div class="formula-panel">
  <span class="formula-panel__label">Componente vertical</span>
  <div class="formula-panel__formula">v₀ᵧ = v₀ sen θ</div>
</div>

---

## 20. Ejemplo de descomposición

Lanzamos un proyectil con:

**v₀ = 20 m/s**

a:

**θ = 30°**

Entonces:

**v₀ₓ = 20 cos 30°**

**v₀ₓ ≈ 17,3 m/s**

y:

**v₀ᵧ = 20 sen 30°**

**v₀ᵧ = 10 m/s**

La velocidad inicial completa es:

**v₀ ≈ (17,3, 10) m/s**

---

## 21. Ecuaciones del tiro oblicuo

Tomando:

- arriba positivo;
- gravedad hacia abajo;

tenemos:

### Horizontal

<div class="formula-panel">
  <span class="formula-panel__label">Posición horizontal</span>
  <div class="formula-panel__formula">x = x₀ + v₀ cos θ · t</div>
</div>

### Vertical

<div class="formula-panel">
  <span class="formula-panel__label">Posición vertical</span>
  <div class="formula-panel__formula">y = y₀ + v₀ sen θ · t − ½gt²</div>
</div>

### Velocidad

**vₓ = v₀ cos θ**

**vᵧ = v₀ sen θ − gt**

---

## 22. La componente horizontal permanece constante

Durante todo el tiro:

**vₓ = v₀ cos θ**

si ignoramos el aire.

En cambio:

**vᵧ**

disminuye linealmente.

La velocidad total cambia:

- en módulo;
- en dirección.

---

## 23. Altura máxima del tiro oblicuo

En la altura máxima:

**vᵧ = 0**

No significa:

**v = 0**

porque todavía existe:

**vₓ ≠ 0**

<div class="lesson-callout lesson-callout--error">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">!</span>
    <strong>En la cima del tiro oblicuo el proyectil sigue moviéndose</strong>
  </div>
  <div class="lesson-callout__body">
    <p>La componente vertical se anula instantáneamente, pero la componente horizontal continúa. La velocidad total es horizontal en ese instante.</p>
  </div>
</div>

---

## 24. Tiempo hasta la altura máxima

Usamos:

**vᵧ = v₀ᵧ − gt**

En la cima:

**vᵧ = 0**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Tiempo de subida</span>
  <div class="formula-panel__formula">t_subida = v₀ sen θ / g</div>
</div>

Es el mismo resultado del tiro vertical aplicado a la componente vertical.

---

## 25. Altura máxima ganada

La componente vertical cumple:

**vᵧ² = v₀ᵧ² − 2gΔy**

En la altura máxima:

**vᵧ = 0**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Altura ganada</span>
  <div class="formula-panel__formula">Δy_max = v₀² sen²θ / (2g)</div>
</div>

La altura depende de la componente vertical inicial.

---

## 26. Tiempo de vuelo si vuelve a la misma altura

Si el proyectil:

- parte de una altura;
- vuelve exactamente al mismo nivel;
- no hay aire;

el tiempo total es:

<div class="formula-panel">
  <span class="formula-panel__label">Tiempo total</span>
  <div class="formula-panel__formula">t_vuelo = 2v₀ sen θ / g</div>
</div>

Es dos veces el tiempo de subida.

Esta fórmula no vale en general si la altura final es diferente.

---

## 27. Alcance horizontal

Si vuelve al mismo nivel:

**R = vₓ · t_vuelo**

Sustituimos:

**vₓ = v₀ cos θ**

y:

**t_vuelo = 2v₀ sen θ/g**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Alcance al mismo nivel</span>
  <div class="formula-panel__formula">R = v₀² sen(2θ) / g</div>
</div>

Esta fórmula tiene condiciones específicas.

---

## 28. Condiciones de la fórmula del alcance

La expresión:

**R = v₀² sen(2θ)/g**

supone:

- misma altura de salida y llegada;
- superficie horizontal;
- g constante;
- sin resistencia del aire.

No debe usarse automáticamente en cualquier lanzamiento.

---

## 29. Ángulo de máximo alcance — profundización

Para:

**R = v₀² sen(2θ)/g**

con v₀ y g fijos, el alcance es máximo cuando:

**sen(2θ) = 1**

Eso ocurre cuando:

**2θ = 90°**

por lo tanto:

<div class="formula-panel">
  <span class="formula-panel__label">Modelo ideal y mismo nivel</span>
  <div class="formula-panel__formula">θ = 45°</div>
</div>

Esto no implica que 45° sea siempre el mejor ángulo en situaciones reales.

---

## 30. Ángulos complementarios

En las mismas condiciones ideales:

**θ**

y:

**90° − θ**

producen el mismo alcance.

Por ejemplo:

- 30°;
- 60°.

Porque:

**sen 60° = sen 120°**

al aparecer `sen(2θ)`.

Pero tienen:

- alturas máximas diferentes;
- tiempos de vuelo diferentes.

---

## 31. Ejemplo completo de tiro oblicuo

Datos:

- `v₀ = 20 m/s`;
- `θ = 30°`;
- `g = 10 m/s²`;
- vuelve al mismo nivel.

Componentes:

**v₀ₓ ≈ 17,3 m/s**

**v₀ᵧ = 10 m/s**

### Tiempo de subida

**t_subida = 10/10 = 1 s**

### Tiempo total

**2 s**

### Altura máxima

**Δy_max = 10²/(2×10) = 5 m**

### Alcance

**R ≈ 17,3×2**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Tiro oblicuo completo</h3>
  <div class="worked-example-card__steps">
    <p>v₀ₓ ≈ 17,3 m/s</p>
    <p>v₀ᵧ = 10 m/s</p>
    <p>t_vuelo = 2 s</p>
    <p>h_max = 5 m</p>
    <p><strong>R ≈ 34,6 m</strong></p>
  </div>
</div>

---

## 32. Velocidad en la altura máxima

En el ejemplo:

- `vᵧ = 0`;
- `vₓ ≈ 17,3 m/s`.

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">En la cima</span>
  <div class="formula-panel__formula">v = (17,3 m/s, 0)</div>
</div>

La rapidez allí es:

**17,3 m/s**

No es cero.

---

## 33. Velocidad al regresar al mismo nivel

En el modelo ideal:

- `vₓ` conserva el mismo valor;
- `vᵧ` cambia de signo.

Si inicialmente:

**v₀ = (v₀ₓ, v₀ᵧ)**

al regresar al mismo nivel:

<div class="formula-panel">
  <span class="formula-panel__label">Simetría ideal</span>
  <div class="formula-panel__formula">v_f = (v₀ₓ, −v₀ᵧ)</div>
</div>

La rapidez final es igual a la inicial.

---

## 34. Trayectoria parabólica del tiro oblicuo

Podemos eliminar el tiempo.

Desde:

**x = x₀ + v₀ cos θ · t**

si tomamos `x₀ = 0`:

**t = x/(v₀ cos θ)**

Sustituyendo en y(t):

<div class="formula-panel">
  <span class="formula-panel__label">Ecuación de trayectoria</span>
  <div class="formula-panel__formula">y = y₀ + x tan θ − [g x² / (2v₀² cos²θ)]</div>
</div>

Es una función cuadrática de x.

Por eso la trayectoria ideal es una parábola.

---

## 35. Trayectoria y gráficos temporales

No confundamos:

### Trayectoria

Gráfico espacial:

**y(x)**

Describe la forma del camino.

### Gráfico horizontal

**x(t)**

Es lineal.

### Gráfico vertical

**y(t)**

Es cuadrático.

Tres gráficos distintos pueden describir el mismo movimiento.

---

## 36. Tabla de componentes

Para un tiro oblicuo ideal:

| Magnitud | Componente x | Componente y |
| --- | --- | --- |
| Posición | `x₀ + v₀ₓt` | `y₀ + v₀ᵧt − ½gt²` |
| Velocidad | `v₀ₓ` | `v₀ᵧ − gt` |
| Aceleración | `0` | `−g` |

Esta tabla resume prácticamente todo el modelo.

---

## 37. Interpretar el vector velocidad

La velocidad siempre es tangente a la trayectoria.

Durante un tiro oblicuo:

### Subida

- `vₓ > 0`;
- `vᵧ > 0`.

### Cima

- `vₓ > 0`;
- `vᵧ = 0`.

### Bajada

- `vₓ > 0`;
- `vᵧ < 0`.

La dirección cambia continuamente.

---

## 38. Interpretar el vector aceleración

Durante todo el vuelo ideal:

<div class="formula-panel">
  <span class="formula-panel__label">Aceleración</span>
  <div class="formula-panel__formula">a = (0, −g)</div>
</div>

Incluso en la cima:

- no es tangente a la trayectoria;
- sigue apuntando verticalmente hacia abajo.

---

## 39. La velocidad no tiene por qué apuntar en la dirección de la aceleración

Durante la subida:

- velocidad apunta hacia arriba y adelante;
- aceleración apunta hacia abajo.

En la cima:

- velocidad horizontal;
- aceleración vertical.

Durante la bajada:

- ambas tienen componente hacia abajo, pero sólo la velocidad tiene componente horizontal.

Esta distinción prepara el estudio de dinámica y movimiento circular.

---

## 40. Lanzamiento desde una altura diferente

Si:

- `y₀ ≠ y_f`;

no podemos usar automáticamente las fórmulas simétricas.

Debemos resolver:

<div class="formula-panel">
  <span class="formula-panel__label">Ecuación vertical general</span>
  <div class="formula-panel__formula">y_f = y₀ + v₀ᵧt − ½gt²</div>
</div>

para encontrar el tiempo.

Luego usamos ese mismo t en:

**x = x₀ + v₀ₓt**

---

## 41. Ejemplo desde una plataforma

Una pelota se lanza horizontalmente desde:

- `h = 45 m`;
- `v₀ = 12 m/s`;
- `g = 10 m/s²`.

Tiempo:

**0 = 45 − 5t²**

**t² = 9**

**t = 3 s**

Alcance:

**x = 12×3**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Desde una plataforma</h3>
  <div class="worked-example-card__steps">
    <p>t_caída = 3 s</p>
    <p><strong>x = 36 m</strong></p>
  </div>
</div>

La raíz `t = −3 s` no corresponde al intervalo posterior al lanzamiento.

---

## 42. Distancia recorrida no es igual al alcance

El **alcance horizontal** es:

- cambio de coordenada x.

La **distancia recorrida** es:

- longitud de la trayectoria curva.

No son lo mismo.

En general:

**distancia recorrida > alcance horizontal**

para un proyectil que cambia su coordenada vertical.

---

## 43. Alcance tampoco es desplazamiento total

Si un proyectil vuelve al mismo nivel:

- componente vertical del desplazamiento = 0;
- componente horizontal = R.

Entonces el módulo del desplazamiento es R.

Pero si termina a una altura distinta:

<div class="formula-panel">
  <span class="formula-panel__label">Desplazamiento</span>
  <div class="formula-panel__formula">|Δr| = √(Δx² + Δy²)</div>
</div>

y no coincide simplemente con el alcance.

---

## 44. Experiencia segura: lanzamiento horizontal corto

### Objetivo

Observar simultáneamente movimiento horizontal y caída vertical.

### Posible montaje

- una bolita liviana;
- una mesa baja;
- una superficie de caída despejada;
- video lateral.

### Procedimiento

1. Medí la altura.
2. Hacé rodar la bolita horizontalmente desde el borde.
3. Filmá de costado.
4. Marcá posiciones en varios cuadros.
5. Analizá x(t) y y(t).

### Esperamos aproximadamente

- x(t) lineal;
- y(t) cuadrática.

### Seguridad

Usar alturas bajas y objetos livianos. Mantener despejada la zona de caída.

---

## 45. Comparación con una caída vertical

Podemos realizar dos videos desde la misma altura:

- una bolita se deja caer;
- otra sale horizontalmente.

Si se liberan al mismo tiempo y podemos sincronizar bien:

- sus movimientos verticales deben ser muy parecidos.

Esto ilustra la independencia de las componentes bajo el modelo ideal.

---

## 46. Datos reales y modelo ideal

En una experiencia real pueden aparecer diferencias por:

- resistencia del aire;
- giro del objeto;
- lanzamiento no perfectamente horizontal;
- perspectiva de la cámara;
- error en la escala;
- incertidumbre temporal.

El objetivo no es exigir una parábola perfecta.

Buscamos una aproximación coherente con el modelo.

---

## 47. Resistencia del aire

Si el aire importa:

- aparece aceleración horizontal;
- `vₓ` ya no es constante;
- la aceleración vertical tampoco es simplemente `−g`;
- la trayectoria deja de ser una parábola perfecta.

La resistencia depende de la velocidad relativa al aire.

Por eso el modelo puede desviarse mucho en:

- pelotas livianas;
- objetos con gran área;
- velocidades altas.

---

## 48. Viento

Con viento, lo importante es la velocidad del proyectil respecto del aire.

Entonces pueden aparecer:

- fuerzas horizontales;
- desviaciones laterales;
- cambios en alcance.

El modelo bidimensional más simple puede dejar de ser suficiente.

---

## 49. Rotación — profundización

Una pelota con rotación puede sufrir fuerzas aerodinámicas adicionales.

Esto puede producir:

- curvas;
- sustentación;
- cambios en trayectoria.

Ejemplos cotidianos:

- fútbol;
- tenis;
- béisbol.

Estos efectos no forman parte del tiro parabólico ideal.

---

## 50. Errores frecuentes

### “La gravedad frena la componente horizontal”

No en el modelo ideal.

### “Si cae más tiempo, también aumenta vₓ”

No. vₓ permanece constante.

### “En la altura máxima la velocidad total es cero”

No en tiro oblicuo. Sólo vᵧ es cero.

### “La aceleración es tangente a la trayectoria”

No. En el proyectil ideal apunta verticalmente hacia abajo.

### “El alcance es la distancia recorrida”

No.

### “45° siempre da el mayor alcance”

Sólo bajo condiciones ideales específicas, especialmente igual altura de salida y llegada.

### “Tiro horizontal y caída libre son movimientos verticales distintos”

Verticalmente tienen las mismas ecuaciones si parten con la misma v₀ᵧ.

### “La parábola del gráfico y(t) es la trayectoria”

No. La trayectoria corresponde a y(x).

---

## 51. Problemas y ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Reconocimiento</strong>
  </div>
  <ol>
    <li>Escribí las componentes de la aceleración de un proyectil ideal.</li>
    <li>¿Qué componente de la velocidad permanece constante?</li>
    <li>¿Qué ocurre con vᵧ en la altura máxima?</li>
    <li>¿Qué ocurre con vₓ en ese mismo instante?</li>
    <li>¿Qué forma tiene la trayectoria ideal y(x)?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Tiro horizontal</strong>
  </div>
  <ol>
    <li>Una pelota sale horizontalmente a 8 m/s desde 20 m de altura. Usando g = 10 m/s², calculá tiempo de caída.</li>
    <li>Calculá el alcance horizontal.</li>
    <li>Calculá vᵧ al impactar.</li>
    <li>Calculá la rapidez final.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Tiro oblicuo</strong>
  </div>
  <ol>
    <li>Descomponé una velocidad de 30 m/s a 30°.</li>
    <li>Usando g = 10 m/s² y mismo nivel de salida y llegada, calculá tiempo de vuelo.</li>
    <li>Calculá altura máxima.</li>
    <li>Calculá alcance.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Interpretación y comparación</strong>
  </div>
  <ol>
    <li>Compará tiros ideales de 30° y 60° con la misma rapidez inicial y mismo nivel de salida y llegada.</li>
    <li>Explicá por qué tienen el mismo alcance pero distinta altura máxima.</li>
    <li>Construí cualitativamente vₓ(t), vᵧ(t), aₓ(t) y aᵧ(t).</li>
    <li>Explicá por qué un tiro desde una plataforma no puede resolverse siempre con `t_vuelo = 2v₀ senθ/g`.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Derivá la ecuación parabólica y(x) eliminando t de las ecuaciones paramétricas.</li>
    <li>Derivá la expresión del alcance `R = v₀² sen(2θ)/g` para igual altura inicial y final.</li>
    <li>Demostrá que, bajo esas condiciones, ángulos complementarios tienen igual alcance.</li>
    <li>Analizá qué partes de la derivación dejan de ser válidas cuando la resistencia del aire es importante.</li>
  </ol>
</div>

---

## 52. Ejemplo integrado

Una pelota se lanza desde el suelo con:

- `v₀ = 25 m/s`;
- `θ = 37°`;
- `g = 10 m/s²`.

Usamos aproximadamente:

- `cos 37° ≈ 0,80`;
- `sen 37° ≈ 0,60`.

### Componentes iniciales

**v₀ₓ = 25×0,80 = 20 m/s**

**v₀ᵧ = 25×0,60 = 15 m/s**

### Tiempo de subida

**t_subida = 15/10 = 1,5 s**

### Tiempo total

**t_vuelo = 3 s**

### Altura máxima

**h = 15²/(2×10)**

**h = 11,25 m**

### Alcance

**R = 20×3 = 60 m**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>Tiro oblicuo por componentes</h3>
  <div class="worked-example-card__steps">
    <p>v₀ = (20, 15) m/s</p>
    <p>t_subida = 1,5 s</p>
    <p>t_vuelo = 3,0 s</p>
    <p>h_max = 11,25 m</p>
    <p><strong>R = 60 m</strong></p>
  </div>
</div>

La solución completa surge de combinar:

- MRU horizontal;
- MRUV vertical;
- el mismo tiempo para ambos.

---

## 53. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Qué significa independencia de componentes?</summary>
  <div class="lesson-quiz__answer">
    Que podemos resolver las ecuaciones de cada eje por separado y luego combinar sus resultados, usando el mismo tiempo para describir el movimiento completo.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Qué vale aₓ en un proyectil ideal?</summary>
  <div class="lesson-quiz__answer">
    Cero, porque en el modelo sólo actúa la aceleración gravitatoria vertical.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Qué ocurre con vᵧ en la altura máxima?</summary>
  <div class="lesson-quiz__answer">
    Vale cero instantáneamente.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Qué ocurre con vₓ en la altura máxima?</summary>
  <div class="lesson-quiz__answer">
    Permanece constante y generalmente no es cero.
  </div>
</details>

<details class="lesson-quiz">
  <summary>5. ¿Por qué la trayectoria ideal es parabólica?</summary>
  <div class="lesson-quiz__answer">
    Porque x depende linealmente del tiempo y y depende cuadráticamente; al eliminar t resulta una relación cuadrática y(x).
  </div>
</details>

<details class="lesson-quiz">
  <summary>6. ¿La fórmula de alcance con sen(2θ) vale para cualquier lanzamiento?</summary>
  <div class="lesson-quiz__answer">
    No. Requiere, entre otras condiciones, igual altura inicial y final, gravedad constante y ausencia de resistencia del aire.
  </div>
</details>

---

## 54. Resumen

- En dos dimensiones usamos vectores de posición, velocidad y aceleración.
- Las componentes cartesianas pueden analizarse por separado.
- Ambas componentes comparten el mismo tiempo.
- En un proyectil ideal, `aₓ = 0` y `aᵧ = −g`.
- Por eso horizontalmente hay MRU.
- Verticalmente hay MRUV.
- En tiro horizontal, `v₀ᵧ = 0`.
- El tiempo de caída depende del movimiento vertical.
- El alcance horizontal se obtiene usando ese mismo tiempo en x(t).
- En tiro oblicuo, `v₀ₓ = v₀ cosθ` y `v₀ᵧ = v₀ senθ`.
- En la altura máxima, `vᵧ = 0` pero `vₓ` permanece.
- La trayectoria ideal y(x) es parabólica.
- Si el proyectil vuelve al mismo nivel, existen fórmulas simples para tiempo de vuelo y alcance.
- `R = v₀² sen(2θ)/g` sólo vale bajo condiciones específicas.
- En el modelo ideal y a igual nivel, 45° maximiza el alcance.
- La resistencia del aire rompe la constancia de vₓ y la trayectoria deja de ser una parábola perfecta.

---

## 55. Siguiente tema recomendado

**F-07 — Movimiento circular**

El próximo paso será estudiar una situación donde la rapidez puede permanecer constante pero la velocidad cambia continuamente de dirección.

Trabajaremos con:

- ángulo;
- radián;
- velocidad angular;
- período;
- frecuencia;
- velocidad tangencial;
- movimiento circular uniforme;
- aceleración centrípeta;
- fuerza centrípeta como resultante radial.
