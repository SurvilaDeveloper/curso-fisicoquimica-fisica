---
title: "Caída libre y tiro vertical"
description: "Cómo aplicar el MRUV al movimiento vertical bajo la gravedad, interpretar signos, altura máxima, tiempos de subida y bajada y los límites del modelo ideal."
slug: "caida-libre-y-tiro-vertical"

course: "fisica"
module: "cinematica"
order: 5

level: "intermedio"
cycle: "ambos"

yearsApprox: [3, 4, 5]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - movimiento-rectilineo-uniformemente-variado

skills:
  - aceleracion-gravitatoria
  - caida-libre
  - tiro-vertical
  - altura-maxima
  - tiempo-de-subida
  - tiempo-de-bajada
  - eleccion-del-eje
  - analisis-de-signos
  - independencia-de-la-masa
  - resistencia-del-aire

hasExercises: true
hasQuiz: true
hasExperiment: true

deepening: true
status: "complete"
---

## Una pelota sube, se detiene un instante y vuelve a caer

Lanzamos una pelota verticalmente hacia arriba.

Durante la subida:

- su rapidez disminuye.

En el punto más alto:

- su velocidad instantánea vale cero.

Después:

- comienza a bajar;
- su rapidez aumenta.

Puede parecer que la gravedad “frena” al subir y luego “acelera” al bajar.

Pero la idea correcta es más simple:

> **cerca de la superficie terrestre y despreciando la resistencia del aire, la aceleración gravitatoria apunta siempre hacia abajo.**

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>En un tiro vertical ideal, la aceleración no se anula ni cambia de signo en la altura máxima. Lo que cambia de signo es la velocidad.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta lección deberías poder:

- interpretar la aceleración gravitatoria;
- reconocer la caída libre ideal como un MRUV;
- resolver problemas de caída desde el reposo;
- resolver tiros verticales;
- elegir un eje y mantener signos coherentes;
- calcular altura máxima;
- calcular tiempo de subida;
- analizar tiempo de bajada;
- comprender cuándo subida y bajada son simétricas;
- explicar por qué la masa no cambia la aceleración en caída ideal;
- distinguir caída ideal de caída real con resistencia del aire;
- reconocer los límites del valor constante de g.

---

## 1. Aceleración gravitatoria

Cerca de la superficie terrestre, un cuerpo en caída libre ideal tiene una aceleración aproximadamente constante dirigida hacia abajo.

Su módulo suele representarse como:

<div class="formula-panel">
  <span class="formula-panel__label">Aceleración gravitatoria</span>
  <div class="formula-panel__formula">g ≈ 9,8 m/s²</div>
</div>

En muchos ejercicios escolares también se usa:

**g ≈ 10 m/s²**

para simplificar cálculos.

Ambos valores son aproximaciones.

---

## 2. g es un módulo

La letra:

**g**

suele utilizarse para el módulo positivo de la aceleración gravitatoria.

El signo de la aceleración depende del eje elegido.

### Si elegimos arriba como positivo

<div class="formula-panel">
  <span class="formula-panel__label">Eje positivo hacia arriba</span>
  <div class="formula-panel__formula">a = −g</div>
</div>

### Si elegimos abajo como positivo

<div class="formula-panel">
  <span class="formula-panel__label">Eje positivo hacia abajo</span>
  <div class="formula-panel__formula">a = +g</div>
</div>

La gravedad física no cambió.

Cambió nuestra convención.

---

## 3. Caída libre ideal

Llamamos **caída libre ideal** al movimiento en el que consideramos que sobre el cuerpo actúa únicamente la gravedad.

En este modelo:

- ignoramos resistencia del aire;
- tomamos g aproximadamente constante;
- estudiamos una región cercana a la superficie terrestre.

Entonces el movimiento vertical es un caso particular de MRUV.

---

## 4. Las ecuaciones son las mismas que en MRUV

Si usamos coordenada vertical:

**y**

las ecuaciones son:

<div class="formula-panel">
  <span class="formula-panel__label">Velocidad</span>
  <div class="formula-panel__formula">v = v<sub>0</sub> + at</div>
</div>

<div class="formula-panel">
  <span class="formula-panel__label">Posición</span>
  <div class="formula-panel__formula">y = y<sub>0</sub> + v<sub>0</sub>t + ½at²</div>
</div>

<div class="formula-panel">
  <span class="formula-panel__label">Sin tiempo</span>
  <div class="formula-panel__formula">v² = v<sub>0</sub>² + 2a(y − y<sub>0</sub>)</div>
</div>

La diferencia es que ahora:

**a = ±g**

según el eje.

---

## 5. Caída desde el reposo

Un cuerpo se deja caer.

Eso significa:

<div class="formula-panel">
  <span class="formula-panel__label">Condición inicial</span>
  <div class="formula-panel__formula">v<sub>0</sub> = 0</div>
</div>

No significa:

- `a = 0`.

Al contrario:

- la aceleración es gravitatoria.

Si elegimos abajo como positivo:

**a = +g**

---

## 6. Ejemplo de caída con eje hacia abajo

Un objeto se deja caer desde el reposo.

Tomamos:

- origen en el punto de partida;
- abajo como positivo;
- `g = 9,8 m/s²`.

Después de:

**2 s**

### Velocidad

**v = gt**

**v = 9,8 × 2**

**v = 19,6 m/s**

### Posición

**y = ½gt²**

**y = ½ × 9,8 × 4**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Caída durante 2 segundos</h3>
  <div class="worked-example-card__steps">
    <p>v = 19,6 m/s hacia abajo</p>
    <p>y = 19,6 m</p>
    <p><strong>En este sistema ambas cantidades son positivas porque abajo fue elegido como sentido positivo.</strong></p>
  </div>
</div>

---

## 7. El mismo movimiento con eje hacia arriba

Ahora describimos exactamente el mismo fenómeno con:

- arriba positivo;
- `a = −g`.

Desde el reposo:

**v = −gt**

Después de 2 s:

**v = −19,6 m/s**

Posición:

**y = −½gt²**

**y = −19,6 m**

El resultado físico es el mismo:

- está 19,6 m debajo del origen;
- se mueve a 19,6 m/s hacia abajo.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Los signos dependen del eje; el fenómeno no</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Dos sistemas de referencia correctos pueden producir signos diferentes y describir exactamente la misma caída.</p>
  </div>
</div>

---

## 8. Tiro vertical hacia arriba

Ahora damos al cuerpo una velocidad inicial hacia arriba.

Si elegimos:

- arriba como positivo;

entonces:

- v<sub>0</sub> > 0;
- `a = −g`.

La velocidad cumple:

<div class="formula-panel">
  <span class="formula-panel__label">Tiro vertical, arriba positivo</span>
  <div class="formula-panel__formula">v = v<sub>0</sub> − gt</div>
</div>

---

## 9. Qué ocurre durante la subida

Mientras el cuerpo sube:

- `v > 0`;
- `a < 0`.

Velocidad y aceleración tienen signos opuestos.

Entonces:

- la rapidez disminuye.

La gravedad no apunta “contra el movimiento” por una regla especial.

Apunta hacia abajo.

Simplemente, durante la subida, eso es opuesto a la velocidad.

---

## 10. Altura máxima

En el punto más alto del tiro vertical:

<div class="formula-panel">
  <span class="formula-panel__label">Condición de altura máxima</span>
  <div class="formula-panel__formula">v = 0</div>
</div>

Pero:

<div class="formula-panel">
  <span class="formula-panel__label">La aceleración sigue siendo</span>
  <div class="formula-panel__formula">a = −g</div>
</div>

<div class="lesson-callout lesson-callout--error">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">!</span>
    <strong>En la altura máxima no desaparece la gravedad</strong>
  </div>
  <div class="lesson-callout__body">
    <p>La velocidad es cero sólo en ese instante. La aceleración continúa apuntando hacia abajo y hace que luego la velocidad se vuelva negativa.</p>
  </div>
</div>

---

## 11. Tiempo de subida

Con arriba positivo:

**v = v<sub>0</sub> − gt**

En la altura máxima:

**v = 0**

Entonces:

**0 = v<sub>0</sub> − g t<sub>subida</sub>**

Despejamos:

<div class="formula-panel">
  <span class="formula-panel__label">Tiempo de subida</span>
  <div class="formula-panel__formula">t<sub>subida</sub> = v<sub>0</sub> / g</div>
</div>

---

## 12. Ejemplo de tiempo de subida

Lanzamos una pelota hacia arriba con:

**v<sub>0</sub> = 19,6 m/s**

Usando:

**g = 9,8 m/s²**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Tiempo hasta la altura máxima</h3>
  <div class="worked-example-card__steps">
    <p>t<sub>subida</sub> = v<sub>0</sub>/g</p>
    <p>t<sub>subida</sub> = 19,6 / 9,8</p>
    <p><strong>t<sub>subida</sub> = 2,0 s</strong></p>
  </div>
</div>

---

## 13. Altura máxima respecto del punto de lanzamiento

Podemos usar:

**v² = v<sub>0</sub>² + 2aΔy**

En la altura máxima:

- `v = 0`;
- `a = −g`.

Entonces:

**0 = v<sub>0</sub>² − 2gΔy**

<div class="formula-panel">
  <span class="formula-panel__label">Altura ganada</span>
  <div class="formula-panel__formula">Δy<sub>max</sub> = v<sub>0</sub>² / (2g)</div>
</div>

---

## 14. Ejemplo de altura máxima

Con:

**v<sub>0</sub> = 19,6 m/s**

tenemos:

**Δy<sub>max</sub> = 19,6² / (2×9,8)**

**Δy<sub>max</sub> = 19,6 m**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Altura máxima</h3>
  <div class="worked-example-card__steps">
    <p>v = 0 en el punto más alto</p>
    <p>0 = v<sub>0</sub>² − 2gΔy</p>
    <p><strong>Δy<sub>max</sub> = 19,6 m</strong></p>
  </div>
</div>

---

## 15. Después de la altura máxima

Después del punto más alto:

- `v < 0`;
- `a < 0`;

si arriba sigue siendo positivo.

Velocidad y aceleración ahora tienen el mismo signo.

Entonces:

- aumenta la rapidez hacia abajo.

La aceleración nunca cambió.

Lo que cambió fue el signo de la velocidad.

---

## 16. Simetría ideal de subida y bajada

Si:

- el cuerpo vuelve a la misma altura desde la que fue lanzado;
- g es constante;
- no hay resistencia del aire;

entonces existe una simetría importante.

### Tiempo

**t<sub>bajada</sub> = t<sub>subida</sub>**

### Rapidez al volver

La rapidez al regresar es igual a la rapidez inicial.

### Velocidad al volver

Tiene signo opuesto:

<div class="formula-panel">
  <span class="formula-panel__label">Al regresar a la misma altura</span>
  <div class="formula-panel__formula">v<sub>f</sub> = −v<sub>0</sub></div>
</div>

si arriba es positivo.

---

## 17. Tiempo total de vuelo al mismo nivel

Bajo esas condiciones:

<div class="formula-panel">
  <span class="formula-panel__label">Tiempo total</span>
  <div class="formula-panel__formula">t<sub>total</sub> = 2v<sub>0</sub>/g</div>
</div>

Esta fórmula sólo vale si:

- vuelve a la altura inicial.

Si cae a otra altura:

- subida y bajada no tienen por qué durar lo mismo.

---

## 18. Ejemplo de vuelo completo

Con:

**v<sub>0</sub> = 19,6 m/s**

y:

**g = 9,8 m/s²**

sabemos:

- tiempo de subida = 2 s;
- tiempo de bajada hasta el mismo nivel = 2 s.

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Regreso al nivel de lanzamiento</h3>
  <div class="worked-example-card__steps">
    <p>t<sub>total</sub> = 4,0 s</p>
    <p>v<sub>f</sub> = −19,6 m/s</p>
    <p><strong>Regresa con la misma rapidez ideal con la que fue lanzado.</strong></p>
  </div>
</div>

---

## 19. Gráfico velocidad-tiempo

Para arriba positivo:

**v(t) = v<sub>0</sub> − gt**

es una recta descendente.

```text
v
|
|\
| \
|  \
|---\---------- t
|    \
|     \
|
```

El cruce con:

**v = 0**

indica la altura máxima.

Antes:

- sube.

Después:

- baja.

---

## 20. Pendiente del gráfico v(t)

La pendiente es:

<div class="formula-panel">
  <span class="formula-panel__label">Pendiente</span>
  <div class="formula-panel__formula">−g</div>
</div>

Permanece constante durante:

- subida;
- altura máxima;
- bajada.

Eso vuelve visible que la aceleración no cambia de signo.

---

## 21. Gráfico posición-tiempo

Con arriba positivo:

<div class="formula-panel">
  <span class="formula-panel__label">Posición vertical</span>
  <div class="formula-panel__formula">y(t) = y<sub>0</sub> + v<sub>0</sub>t − ½gt²</div>
</div>

Es una parábola que abre hacia abajo.

La altura máxima coincide con:

- pendiente cero;
- velocidad cero.

Pero la aceleración es:

**−g**

---

## 22. El gráfico y(t) no es necesariamente la trayectoria

En un tiro estrictamente vertical:

- la trayectoria espacial sí es una línea vertical.

Pero el gráfico:

**y(t)**

es una parábola.

Eso vuelve a mostrar que:

> **la forma de un gráfico posición-tiempo no es la forma geométrica de la trayectoria.**

---

## 23. Gráfico aceleración-tiempo

Con arriba positivo:

```text
a
|
|________________ t
|
|────────────── −g
|
```

La aceleración es una línea horizontal bajo cero.

No cambia en:

- subida;
- punto más alto;
- bajada.

---

## 24. Área bajo v(t)

El área algebraica bajo `v(t)` representa desplazamiento.

En un lanzamiento que vuelve al mismo nivel:

- área positiva durante subida;
- área negativa durante bajada.

Los módulos son iguales.

Entonces:

**Δy<sub>total</sub> = 0**

Pero la distancia recorrida no es cero.

---

## 25. Distancia en un tiro vertical completo

Si la altura máxima sobre el lanzamiento es:

**h**

y el cuerpo vuelve al mismo punto:

### Desplazamiento total

**0**

### Distancia total

<div class="formula-panel">
  <span class="formula-panel__label">Distancia recorrida</span>
  <div class="formula-panel__formula">d = 2h</div>
</div>

porque:

- sube h;
- baja h.

---

## 26. Lanzamiento desde una altura

No siempre el cuerpo vuelve al mismo nivel.

Supongamos una pelota lanzada hacia arriba desde un balcón.

Entonces:

- sube hasta una altura máxima;
- baja;
- pasa nuevamente por la altura del lanzamiento;
- sigue cayendo hasta el suelo.

El tiempo total ya no es:

**2v<sub>0</sub>/g**

porque el punto final está más abajo.

---

## 27. Elegir el origen en un lanzamiento desde altura

Podemos elegir:

### Opción A

`y = 0` en el suelo.

Entonces:

- y<sub>0</sub> > 0.

### Opción B

`y = 0` en el punto de lanzamiento.

Entonces:

- el suelo tiene `y < 0` si arriba es positivo.

Ambas elecciones son correctas.

Debemos mantener coherencia.

---

## 28. Ejemplo desde una altura

Una pelota se lanza hacia arriba desde:

**20 m**

sobre el suelo.

Datos:

- y<sub>0</sub> = 20 m;
- v<sub>0</sub> = 10 m/s;
- `a = −10 m/s²`.

Posición:

<div class="formula-panel">
  <span class="formula-panel__label">Ecuación</span>
  <div class="formula-panel__formula">y(t) = 20 + 10t − 5t²</div>
</div>

Para tocar el suelo:

**y = 0**

Entonces:

**20 + 10t − 5t² = 0**

Dividimos por 5:

**4 + 2t − t² = 0**

o:

**t² − 2t − 4 = 0**

La solución positiva es:

**t ≈ 3,24 s**

La raíz negativa no corresponde al tiempo posterior al lanzamiento.

---

## 29. Dos raíces no siempre son dos eventos futuros

Las ecuaciones cuadráticas pueden producir dos raíces.

En el ejemplo anterior:

- una raíz es positiva;
- otra negativa.

La negativa puede corresponder a la extensión matemática de la parábola antes de nuestro instante inicial.

No pertenece al intervalo físico:

**t ≥ 0**

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Resolver no termina al obtener raíces</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Una solución matemática debe interpretarse dentro del intervalo y las condiciones físicas del problema.</p>
  </div>
</div>

---

## 30. Independencia de la masa en caída libre ideal

En el modelo ideal, todos los cuerpos caen con la misma aceleración gravitatoria cerca de la superficie terrestre:

<div class="formula-panel">
  <span class="formula-panel__label">Caída libre ideal</span>
  <div class="formula-panel__formula">a = g</div>
</div>

independientemente de su masa.

Esto no significa que:

- tengan el mismo peso.

Un cuerpo de mayor masa tiene mayor peso.

Pero, idealmente, la relación entre fuerza gravitatoria y masa produce la misma aceleración.

La explicación dinámica completa se verá en las leyes de Newton y gravitación.

---

## 31. ¿Por qué una hoja cae más lento que una piedra?

En aire, la hoja experimenta una fuerza de resistencia muy importante respecto de su peso.

Entonces ya no está en caída libre ideal.

La piedra compacta puede verse menos afectada proporcionalmente.

Por eso:

- en aire parecen caer diferente;
- en vacío ideal pueden caer con la misma aceleración gravitatoria.

<div class="lesson-callout lesson-callout--error">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">!</span>
    <strong>La diferencia cotidiana no demuestra que g dependa de la masa</strong>
  </div>
  <div class="lesson-callout__body">
    <p>La resistencia del aire puede cambiar fuertemente el movimiento. Para probar la independencia de la masa debemos controlar o eliminar ese efecto.</p>
  </div>
</div>

---

## 32. Resistencia del aire

La resistencia del aire depende de factores como:

- forma;
- área frontal;
- velocidad;
- orientación;
- propiedades del aire.

No es generalmente constante.

Por eso, cuando es importante:

- la aceleración ya no permanece igual a g;
- el movimiento deja de ser MRUV.

---

## 33. Velocidad terminal — profundización

Durante una caída real, la resistencia del aire puede aumentar con la velocidad.

En ciertas condiciones llega un momento en que:

- la fuerza de resistencia equilibra al peso;
- la fuerza neta se vuelve aproximadamente cero;
- la aceleración se aproxima a cero.

Entonces el cuerpo puede caer con una rapidez aproximadamente constante llamada:

**velocidad terminal**

Esto no ocurre en el modelo de caída libre ideal.

---

## 34. g no es exactamente igual en todos lados

El valor:

**9,8 m/s²**

es una aproximación cercana a la superficie terrestre.

Puede variar con:

- latitud;
- altura;
- distribución de masas;
- ubicación.

Además, si nos alejamos mucho de la Tierra:

- g disminuye.

Por eso el modelo de aceleración constante tiene un rango de validez.

---

## 35. Caída libre y peso no son lo mismo

### Aceleración gravitatoria

Describe cómo cambia la velocidad de un cuerpo en caída libre ideal.

Unidad:

**m/s²**

### Peso

Es una fuerza gravitatoria.

Más adelante usaremos:

<div class="formula-panel">
  <span class="formula-panel__label">Adelanto</span>
  <div class="formula-panel__formula">P = m · g</div>
</div>

Unidad:

**newton (N)**

No debemos confundir:

- g;
- peso.

---

## 36. “Sin peso” en caída libre — profundización

Un astronauta en órbita puede experimentar sensación de ingravidez.

Eso no significa que la gravedad sea cero.

La nave y el astronauta están ambos en caída libre alrededor de la Tierra.

La descripción completa se verá con:

- dinámica;
- gravitación;
- movimiento orbital.

---

## 37. Experiencia segura: caída de dos objetos compactos

### Objetivo

Comparar tiempos de caída cualitativamente.

### Materiales

- dos objetos compactos de masas diferentes pero forma semejante;
- altura pequeña y segura;
- superficie despejada.

### Procedimiento

1. Sostené ambos a la misma altura.
2. Soltalos simultáneamente, sin empujar.
3. Observá los tiempos de llegada.
4. Repetí.

### Pregunta

¿La diferencia de masa produce una diferencia evidente en el tiempo?

### Cuidado

Usar objetos livianos y alturas pequeñas.

No dejar caer objetos desde balcones, escaleras altas ni sobre personas.

---

## 38. Experiencia: hoja plana y hoja arrugada

Tomamos dos hojas de papel iguales.

### Primera prueba

- una hoja plana;
- una hoja arrugada.

La arrugada suele caer más rápido.

### Segunda prueba

Arrugamos ambas de manera semejante.

La diferencia disminuye mucho.

Esto muestra la importancia de:

- forma;
- resistencia del aire.

No demuestra una dependencia simple con la masa.

---

## 39. Experiencia con video

Podemos filmar una caída corta y segura.

Luego:

1. elegimos un eje vertical;
2. identificamos posiciones cuadro a cuadro;
3. asociamos tiempos;
4. construimos `y(t)`;
5. estimamos velocidades;
6. construimos `v(t)`.

Esperamos, aproximadamente:

- `y(t)` cuadrática;
- `v(t)` lineal;
- `a(t)` aproximadamente constante.

---

## 40. Simetría y resistencia del aire

En el modelo ideal, al volver al mismo nivel:

- rapidez de regreso = rapidez de salida;
- tiempo de bajada = tiempo de subida.

Con aire real:

- esta simetría puede romperse.

Durante la bajada:

- la resistencia apunta hacia arriba.

Durante la subida:

- la resistencia apunta hacia abajo.

La aceleración neta no es simplemente `−g` en ambas etapas.

---

## 41. El lanzamiento no “lleva una fuerza hacia arriba”

Cuando una pelota abandona la mano:

- ya no existe una fuerza de la mano empujándola hacia arriba.

En el modelo ideal, después de soltarla:

- actúa la gravedad.

La pelota sigue subiendo porque tiene velocidad inicial hacia arriba.

No porque conserve una “fuerza de lanzamiento”.

Esta distinción será central en dinámica.

---

## 42. Velocidad y aceleración en cuatro momentos

Para un tiro vertical con arriba positivo:

| Momento | Velocidad | Aceleración |
| --- | --- | --- |
| Poco después de lanzar | `v > 0` | `a = −g` |
| Durante la subida | `v > 0` | `a = −g` |
| Altura máxima | `v = 0` | `a = −g` |
| Durante la bajada | `v < 0` | `a = −g` |

La tabla resume una de las ideas más importantes de esta lección.

---

## 43. Ejemplo integrado de tiro vertical

Lanzamos una pelota desde el suelo con:

- v<sub>0</sub> = 24,5 m/s;
- arriba positivo;
- `g = 9,8 m/s²`.

### Tiempo de subida

**t = v<sub>0</sub>/g**

**t = 24,5/9,8**

**t = 2,5 s**

### Altura máxima

**Δy = v<sub>0</sub>²/(2g)**

**Δy = 24,5²/19,6**

**Δy ≈ 30,6 m**

### Tiempo total hasta volver al suelo

**5,0 s**

### Velocidad al regresar

**−24,5 m/s**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>Tiro vertical ideal completo</h3>
  <div class="worked-example-card__steps">
    <p>t<sub>subida</sub> = 2,5 s</p>
    <p>y<sub>max</sub> ≈ 30,6 m</p>
    <p>t<sub>total</sub> = 5,0 s</p>
    <p>v<sub>regreso</sub> = −24,5 m/s</p>
    <p><strong>La simetría aparece porque vuelve a la misma altura y despreciamos el aire.</strong></p>
  </div>
</div>

---

## 44. Errores frecuentes

### “En el punto más alto la aceleración es cero”

No.

### “La gravedad cambia de signo cuando empieza a caer”

No. El signo depende del eje y permanece constante en el modelo.

### “Un cuerpo pesado cae más rápido porque tiene más peso”

No en caída libre ideal.

### “Si la velocidad es cero, el cuerpo está en equilibrio”

No necesariamente. Puede ser un instante de cambio de sentido.

### “Durante la subida hay una fuerza hacia arriba que se va gastando”

No después de que el objeto deja la mano, en el modelo ideal.

### “Subida y bajada siempre duran lo mismo”

Sólo bajo condiciones apropiadas, especialmente si vuelve al mismo nivel.

### “g = 9,8 m/s”

No. La unidad correcta es `m/s²`.

### “La caída real siempre es MRUV”

No. Si la resistencia del aire importa, la aceleración cambia.

---

## 45. Problemas y ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Reconocimiento</strong>
  </div>
  <ol>
    <li>Definí caída libre ideal.</li>
    <li>¿Qué representa g?</li>
    <li>Si arriba es positivo, ¿qué signo tiene la aceleración gravitatoria?</li>
    <li>¿Cuál es la velocidad en la altura máxima de un tiro vertical?</li>
    <li>¿Cuál es la aceleración en ese mismo instante?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Caída desde el reposo</strong>
  </div>
  <ol>
    <li>Un objeto se deja caer durante 3 s. Calculá su velocidad usando g = 9,8 m/s².</li>
    <li>Calculá el desplazamiento del ejercicio anterior.</li>
    <li>Repetí el cálculo usando arriba como positivo.</li>
    <li>Explicá por qué ambos sistemas describen el mismo fenómeno.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Tiro vertical</strong>
  </div>
  <ol>
    <li>Se lanza un objeto hacia arriba con 29,4 m/s. Calculá tiempo de subida.</li>
    <li>Calculá la altura máxima respecto del punto de lanzamiento.</li>
    <li>Si vuelve al mismo nivel, calculá tiempo total y velocidad de regreso.</li>
    <li>Dibujá cualitativamente v(t), y(t) y a(t).</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Lanzamiento desde altura</strong>
  </div>
  <ol>
    <li>Una pelota se lanza hacia arriba desde 15 m con v<sub>0</sub> = 10 m/s. Escribí y(t) tomando el suelo como y = 0 y g = 10 m/s².</li>
    <li>Calculá la altura máxima sobre el suelo.</li>
    <li>Calculá cuándo llega al suelo.</li>
    <li>Calculá la velocidad de impacto e interpretá su signo.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Demostrá que el tiempo de subida es v<sub>0</sub>/g usando la ecuación de velocidad.</li>
    <li>Derivá la altura máxima v<sub>0</sub>²/(2g) usando la ecuación sin tiempo.</li>
    <li>Explicá por qué el tiempo de subida y bajada es igual sólo cuando el punto final tiene la misma altura que el inicial bajo el modelo ideal.</li>
    <li>Analizá cómo la resistencia del aire rompe la simetría ideal de un tiro vertical.</li>
  </ol>
</div>

---

## 46. Autoevaluación

<details class="lesson-quiz">
  <summary>1. Si arriba es positivo, ¿cuánto vale la aceleración en caída libre ideal?</summary>
  <div class="lesson-quiz__answer">
    a = −g, aproximadamente −9,8 m/s² cerca de la superficie terrestre.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Qué ocurre con la aceleración en la altura máxima?</summary>
  <div class="lesson-quiz__answer">
    Sigue siendo gravitatoria y apunta hacia abajo. No se anula.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿La masa modifica g en la caída libre ideal?</summary>
  <div class="lesson-quiz__answer">
    No. En el modelo ideal, todos los cuerpos tienen la misma aceleración gravitatoria en el mismo lugar.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Cuándo la velocidad cambia de signo en un tiro vertical?</summary>
  <div class="lesson-quiz__answer">
    Después de pasar por cero en la altura máxima, cuando el cuerpo cambia de sentido.
  </div>
</details>

<details class="lesson-quiz">
  <summary>5. ¿Subida y bajada duran siempre lo mismo?</summary>
  <div class="lesson-quiz__answer">
    No. Esa simetría vale en el modelo ideal cuando el cuerpo vuelve a la misma altura.
  </div>
</details>

<details class="lesson-quiz">
  <summary>6. ¿Por qué una hoja plana cae más lento que una piedra en aire?</summary>
  <div class="lesson-quiz__answer">
    Porque la resistencia del aire puede ser mucho más importante respecto de su peso y modifica la aceleración.
  </div>
</details>

---

## 47. Resumen

- La caída libre ideal es un MRUV vertical bajo la acción de la gravedad.
- Cerca de la superficie terrestre usamos `g ≈ 9,8 m/s²`.
- g representa un módulo; el signo depende del eje.
- Si arriba es positivo, `a = −g`.
- Un cuerpo dejado caer tiene v<sub>0</sub> = 0, no `a = 0`.
- En un tiro vertical hacia arriba, la rapidez disminuye durante la subida.
- En la altura máxima, `v = 0` pero `a = −g`.
- Después, la velocidad cambia de signo y el cuerpo baja.
- El tiempo de subida ideal es v<sub>0</sub>/g.
- La altura máxima ganada es v<sub>0</sub>²/(2g).
- Si vuelve a la misma altura, subida y bajada son simétricas en el modelo ideal.
- En ese caso regresa con la misma rapidez y velocidad de signo opuesto.
- En caída libre ideal, la aceleración no depende de la masa.
- La resistencia del aire rompe el modelo de aceleración constante.
- g varía ligeramente con ubicación y altura.
- El modelo de caída libre debe utilizarse sólo dentro de sus condiciones de validez.

---

## 48. Siguiente tema recomendado

**F-06 — Movimiento en dos dimensiones**

Hasta ahora trabajamos principalmente en una dimensión.

El próximo paso es estudiar movimientos donde debemos combinar dos componentes independientes:

- posición vectorial;
- velocidad vectorial;
- aceleración vectorial;
- tiro horizontal;
- tiro oblicuo;
- trayectoria parabólica;
- alcance;
- altura máxima;
- tiempo de vuelo.
