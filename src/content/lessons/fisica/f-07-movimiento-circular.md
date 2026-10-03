---
title: "Movimiento circular"
description: "Cómo describir movimientos circulares mediante ángulo, radián, velocidad angular, período, frecuencia, velocidad tangencial y aceleración centrípeta."
slug: "movimiento-circular"

course: "fisica"
module: "cinematica"
order: 7

level: "intermedio"
cycle: "ambos"

yearsApprox: [3, 4, 5]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - movimiento-en-dos-dimensiones

skills:
  - angulo
  - radian
  - velocidad-angular
  - periodo
  - frecuencia
  - velocidad-tangencial
  - movimiento-circular-uniforme
  - aceleracion-centripeta
  - fuerza-centripeta
  - movimiento-circular-no-uniforme

hasExercises: true
hasQuiz: true
hasExperiment: true

deepening: true
status: "complete"
---

## ¿Puede haber aceleración sin cambiar la rapidez?

Un auto recorre una curva manteniendo el velocímetro prácticamente constante.

La rapidez puede no cambiar.

Sin embargo, el auto está acelerado.

¿Por qué?

Porque la **velocidad** es un vector y su dirección está cambiando continuamente.

El movimiento circular nos obliga a distinguir con mucha claridad:

- rapidez;
- velocidad;
- aceleración.

> **Cambiar la dirección de la velocidad también es acelerar.**

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>En un movimiento circular uniforme la rapidez es constante, pero la velocidad no lo es, porque su dirección cambia en todo momento. Por eso existe aceleración.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta lección deberías poder:

- describir una posición sobre una circunferencia mediante un ángulo;
- interpretar el radián;
- convertir entre grados y radianes;
- calcular desplazamiento angular;
- interpretar velocidad angular;
- relacionar período y frecuencia;
- relacionar velocidad angular y velocidad tangencial;
- describir el movimiento circular uniforme;
- comprender por qué existe aceleración con rapidez constante;
- calcular aceleración centrípeta;
- interpretar la dirección radial de esa aceleración;
- comprender qué significa fuerza centrípeta;
- distinguir fuerza centrípeta de una nueva interacción;
- introducir el movimiento circular no uniforme.

---

## 1. Movimiento sobre una circunferencia

Consideremos un punto que se mueve siguiendo una circunferencia de radio:

**r**

Podemos describir su posición mediante:

- coordenadas x e y;
- o un ángulo θ medido desde una dirección de referencia.

```text
                 P
              •
           /  |
        r /   |
         / θ  |
────────O────────────→ x
```

A medida que el objeto se mueve:

- cambia θ;
- cambia su posición;
- cambia la dirección del vector velocidad.

---

## 2. Ángulo

Un ángulo mide cuánto ha girado una dirección respecto de otra.

En la vida cotidiana solemos usar grados:

- una vuelta completa → `360°`;
- media vuelta → `180°`;
- cuarto de vuelta → `90°`.

En Física aparece otra unidad especialmente útil:

**el radián**.

---

## 3. ¿Qué es un radián?

Un radián se define usando una circunferencia.

Si un arco tiene una longitud igual al radio:

**s = r**

el ángulo central correspondiente es:

**1 rad**

En general:

<div class="formula-panel">
  <span class="formula-panel__label">Ángulo en radianes</span>
  <div class="formula-panel__formula">θ = s / r</div>
</div>

donde:

- `s` es la longitud del arco;
- `r` es el radio.

---

## 4. El radián es adimensional

En:

**θ = s/r**

ambas magnitudes tienen unidad de longitud.

Entonces:

**m/m = 1**

Por eso el radián es dimensionalmente adimensional.

Aun así escribimos:

**rad**

para dejar claro que hablamos de una medida angular.

---

## 5. Una vuelta completa en radianes

La longitud de una circunferencia es:

**2πr**

Entonces:

**θ = 2πr/r**

Por lo tanto:

<div class="formula-panel">
  <span class="formula-panel__label">Vuelta completa</span>
  <div class="formula-panel__formula">360° = 2π rad</div>
</div>

De ahí obtenemos:

**180° = π rad**

y:

**90° = π/2 rad**

---

## 6. Conversiones comunes

| Grados | Radianes |
| ---: | ---: |
| 0° | 0 |
| 30° | π/6 |
| 45° | π/4 |
| 60° | π/3 |
| 90° | π/2 |
| 180° | π |
| 270° | 3π/2 |
| 360° | 2π |

---

## 7. Convertir grados a radianes

Usamos:

<div class="formula-panel">
  <span class="formula-panel__label">Conversión</span>
  <div class="formula-panel__formula">θ(rad) = θ(°) · π / 180°</div>
</div>

Ejemplo:

**60°**

Entonces:

**60 × π/180 = π/3 rad**

---

## 8. Convertir radianes a grados

Usamos:

<div class="formula-panel">
  <span class="formula-panel__label">Conversión</span>
  <div class="formula-panel__formula">θ(°) = θ(rad) · 180° / π</div>
</div>

Ejemplo:

**π/4 rad**

Entonces:

**π/4 × 180°/π = 45°**

---

## 9. Desplazamiento angular

Si el objeto pasa de:

**θ<sub>i</sub>**

a:

**θ<sub>f</sub>**

definimos:

<div class="formula-panel">
  <span class="formula-panel__label">Desplazamiento angular</span>
  <div class="formula-panel__formula">Δθ = θ<sub>f</sub> − θ<sub>i</sub></div>
</div>

El signo depende de la convención elegida.

Usualmente:

- antihorario → positivo;
- horario → negativo.

Pero podemos elegir otra convención si somos coherentes.

---

## 10. Distancia recorrida sobre el arco

Si conocemos el ángulo en radianes:

<div class="formula-panel">
  <span class="formula-panel__label">Longitud de arco</span>
  <div class="formula-panel__formula">s = r · |Δθ|</div>
</div>

Si queremos desplazamiento angular con signo:

**Δs<sub>tangencial</sub>** requiere más cuidado vectorial.

Pero para la longitud recorrida sobre la circunferencia usamos el módulo angular.

---

## 11. Ejemplo de longitud de arco

Una rueda tiene:

**r = 0,50 m**

y gira:

**π/2 rad**

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Arco recorrido</h3>
  <div class="worked-example-card__steps">
    <p>s = rθ</p>
    <p>s = 0,50 m × π/2</p>
    <p><strong>s ≈ 0,785 m</strong></p>
  </div>
</div>

---

## 12. Velocidad angular media

La velocidad angular media mide cuánto cambia el ángulo por unidad de tiempo:

<div class="formula-panel">
  <span class="formula-panel__label">Velocidad angular media</span>
  <div class="formula-panel__formula">ω<sub>media</sub> = Δθ / Δt</div>
</div>

Unidad SI:

**rad/s**

---

## 13. Velocidad angular instantánea

La velocidad angular instantánea describe qué tan rápido cambia θ en un instante.

En una profundización con cálculo:

<div class="formula-panel">
  <span class="formula-panel__label">Profundización</span>
  <div class="formula-panel__formula">ω = dθ/dt</div>
</div>

En movimiento circular uniforme:

**ω = constante**

---

## 14. Signo de la velocidad angular

Si adoptamos:

- antihorario positivo;

entonces:

### ω > 0

Giro antihorario.

### ω < 0

Giro horario.

La rapidez angular sería:

**|ω|**

El signo expresa sentido de giro.

---

## 15. Movimiento circular uniforme

El **movimiento circular uniforme**, o MCU, tiene:

- trayectoria circular;
- rapidez constante;
- velocidad angular constante.

<div class="formula-panel">
  <span class="formula-panel__label">MCU</span>
  <div class="formula-panel__formula">ω = constante</div>
</div>

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Ecuación angular</span>
  <div class="formula-panel__formula">θ(t) = θ<sub>0</sub> + ωt</div>
</div>

Es análoga a:

**x(t) = x<sub>0</sub> + vt**

del MRU.

---

## 16. Paralelo entre MRU y MCU

| Movimiento rectilíneo | Movimiento circular |
| --- | --- |
| posición `x` | posición angular `θ` |
| desplazamiento `Δx` | desplazamiento angular `Δθ` |
| velocidad `v` | velocidad angular `ω` |
| x = x<sub>0</sub> + vt | θ = θ<sub>0</sub> + ωt |

La analogía es útil, pero no debemos olvidar:

- en MCU la dirección de la velocidad lineal cambia.

---

## 17. Período

El **período**, T, es el tiempo que tarda el movimiento en completar una vuelta.

Unidad SI:

**segundo (s)**

Ejemplo:

si una rueda tarda:

**2 s**

por vuelta:

**T = 2 s**

---

## 18. Frecuencia

La **frecuencia**, f, indica cuántas vueltas o ciclos ocurren por unidad de tiempo.

<div class="formula-panel">
  <span class="formula-panel__label">Frecuencia</span>
  <div class="formula-panel__formula">f = N / Δt</div>
</div>

Unidad SI:

**hertz (Hz)**

con:

**1 Hz = 1 s⁻¹**

---

## 19. Relación entre período y frecuencia

Si cada ciclo tarda T segundos:

<div class="formula-panel">
  <span class="formula-panel__label">Relación fundamental</span>
  <div class="formula-panel__formula">f = 1/T</div>
</div>

y:

<div class="formula-panel">
  <span class="formula-panel__label">Relación inversa</span>
  <div class="formula-panel__formula">T = 1/f</div>
</div>

Son magnitudes inversamente relacionadas.

---

## 20. Ejemplo de período y frecuencia

Una rueda completa:

**5 vueltas**

en:

**10 s**

Entonces:

**f = 5/10 = 0,5 Hz**

y:

**T = 1/0,5**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Período y frecuencia</h3>
  <div class="worked-example-card__steps">
    <p>f = 0,5 Hz</p>
    <p><strong>T = 2 s</strong></p>
  </div>
</div>

---

## 21. Relación entre ω y período

En una vuelta:

**Δθ = 2π rad**

y:

**Δt = T**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Velocidad angular</span>
  <div class="formula-panel__formula">ω = 2π / T</div>
</div>

Como:

**f = 1/T**

también:

<div class="formula-panel">
  <span class="formula-panel__label">Velocidad angular y frecuencia</span>
  <div class="formula-panel__formula">ω = 2πf</div>
</div>

---

## 22. Ejemplo de velocidad angular

Un disco gira con:

**f = 2 Hz**

Entonces:

**ω = 2π × 2**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Velocidad angular</h3>
  <div class="worked-example-card__steps">
    <p>ω = 4π rad/s</p>
    <p><strong>ω ≈ 12,6 rad/s</strong></p>
  </div>
</div>

---

## 23. Velocidad tangencial

Un punto que gira también posee una velocidad lineal instantánea.

Se llama frecuentemente:

**velocidad tangencial**

porque el vector velocidad es tangente a la circunferencia en cada punto.

```text
             → v
          •
        / |
       /  |
      O
```

El vector velocidad:

- no apunta hacia el centro;
- es tangente a la trayectoria.

---

## 24. Relación entre velocidad tangencial y angular

Sabemos:

**s = rθ**

Si dividimos cambios por tiempo:

**Δs/Δt = r Δθ/Δt**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Relación lineal-angular</span>
  <div class="formula-panel__formula">v = ωr</div>
</div>

para el módulo de la velocidad tangencial en MCU.

---

## 25. Puntos de una misma rueda

En un disco rígido que gira:

- todos los puntos completan una vuelta en el mismo tiempo;
- tienen la misma ω.

Pero no todos tienen la misma velocidad tangencial.

Como:

**v = ωr**

un punto más alejado del eje tiene mayor v.

---

## 26. Ejemplo: centro y borde

Un disco gira con:

**ω = 10 rad/s**

### Punto A

`r = 0,10 m`

**v<sub>A</sub> = 1,0 m/s**

### Punto B

`r = 0,30 m`

**v<sub>B</sub> = 3,0 m/s**

Ambos tienen la misma velocidad angular.

El punto B recorre más longitud en el mismo tiempo.

---

## 27. ¿Cómo puede haber aceleración si la rapidez es constante?

En MCU:

**|v| = constante**

pero el vector velocidad cambia de dirección.

Consideremos dos velocidades en instantes cercanos:

- tienen igual módulo;
- apuntan en direcciones distintas.

Entonces:

**Δv ≠ 0**

y por definición:

<div class="formula-panel">
  <span class="formula-panel__label">Aceleración</span>
  <div class="formula-panel__formula">a = Δv / Δt</div>
</div>

Por lo tanto:

**a ≠ 0**

---

## 28. Aceleración centrípeta

En MCU, la aceleración apunta hacia el centro de la circunferencia.

Se llama:

**aceleración centrípeta**

<div class="formula-panel">
  <span class="formula-panel__label">Aceleración centrípeta</span>
  <div class="formula-panel__formula">a<sub>c</sub> = v² / r</div>
</div>

También podemos escribir:

<div class="formula-panel">
  <span class="formula-panel__label">Usando ω</span>
  <div class="formula-panel__formula">a<sub>c</sub> = ω²r</div>
</div>

porque:

**v = ωr**

---

## 29. Dirección de la aceleración centrípeta

La aceleración centrípeta:

- es radial;
- apunta hacia el centro.

Mientras tanto la velocidad:

- es tangencial.

En MCU ideal:

<div class="formula-panel">
  <span class="formula-panel__label">Geometría</span>
  <div class="formula-panel__formula">v ⟂ a<sub>c</sub></div>
</div>

Son perpendiculares en cada instante.

---

## 30. “Centrípeta” significa hacia el centro

La palabra viene de la idea de:

**buscar o dirigirse hacia el centro**

No significa:

- una nueva interacción fundamental;
- una fuerza adicional misteriosa.

Describe la dirección radial necesaria para curvar la velocidad.

---

## 31. Dependencia con la rapidez

En:

**a<sub>c</sub> = v²/r**

si duplicamos v manteniendo r:

**a<sub>c</sub>' = (2v)²/r = 4a<sub>c</sub>**

Entonces:

> duplicar la rapidez cuadruplica la aceleración centrípeta.

Esta dependencia cuadrática será muy importante.

---

## 32. Dependencia con el radio

Si mantenemos v constante:

**a<sub>c</sub> = v²/r**

un radio menor requiere una aceleración centrípeta mayor.

Por eso una curva más cerrada exige un cambio de dirección más rápido.

---

## 33. Cuidado: si mantenemos ω constante cambia la comparación

También:

**a<sub>c</sub> = ω²r**

Si mantenemos ω constante, aumentar r aumenta a<sub>c</sub>.

No hay contradicción con:

**a<sub>c</sub> = v²/r**

porque si ω es constante:

**v = ωr**

también aumenta con r.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Preguntá qué magnitud permanece constante</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Las relaciones con el radio parecen diferentes según mantengamos fija v o fija ω. Antes de comparar dos situaciones debemos indicar qué variables permanecen iguales.</p>
  </div>
</div>

---

## 34. Ejemplo de aceleración centrípeta

Un objeto realiza MCU con:

- `v = 6 m/s`;
- `r = 3 m`.

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Aceleración hacia el centro</h3>
  <div class="worked-example-card__steps">
    <p>a<sub>c</sub> = v²/r</p>
    <p>a<sub>c</sub> = 36/3</p>
    <p><strong>a<sub>c</sub> = 12 m/s²</strong></p>
  </div>
</div>

La aceleración apunta hacia el centro de la circunferencia.

---

## 35. Interpretación vectorial

Supongamos un objeto en el punto derecho de una circunferencia y moviéndose en sentido antihorario.

En ese instante:

- velocidad → hacia arriba;
- aceleración centrípeta → hacia la izquierda.

Un cuarto de vuelta después:

- velocidad → hacia la izquierda;
- aceleración → hacia abajo.

Los vectores cambian continuamente.

---

## 36. La aceleración centrípeta no aumenta la rapidez en MCU

Como:

- a<sub>c</sub> es perpendicular a `v`;

en MCU cambia:

- la dirección de v;

pero no su módulo.

Por eso:

- rapidez constante;
- velocidad variable.

Más adelante relacionaremos esto con trabajo y energía.

---

## 37. ¿Qué es la fuerza centrípeta?

Para mantener una aceleración hacia el centro debe existir una **resultante de fuerzas con componente radial hacia el centro**.

A esa resultante radial la llamamos:

**fuerza centrípeta**

De manera introductoria:

<div class="formula-panel">
  <span class="formula-panel__label">Resultante radial</span>
  <div class="formula-panel__formula">F<sub>radial,neta</sub> = m a<sub>c</sub> = mv²/r</div>
</div>

La explicación completa pertenece a las leyes de Newton.

---

## 38. La fuerza centrípeta no es una fuerza nueva

No agregamos una fuerza llamada “centrípeta” además de las fuerzas reales.

Según la situación, la resultante radial puede ser producida por:

- tensión;
- rozamiento;
- gravedad;
- normal;
- combinación de varias fuerzas.

<div class="lesson-callout lesson-callout--error">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">!</span>
    <strong>No dibujes “fuerza centrípeta” automáticamente como una fuerza extra</strong>
  </div>
  <div class="lesson-callout__body">
    <p>“Centrípeta” describe la resultante radial necesaria. Primero debemos identificar las interacciones reales y luego calcular su componente neta hacia el centro.</p>
  </div>
</div>

---

## 39. Ejemplo: objeto atado a una cuerda

Un objeto gira en una circunferencia horizontal sujeto por una cuerda.

La tensión puede aportar la resultante radial necesaria.

En ese caso, bajo un modelo sencillo:

**T<sub>radial</sub> = mv²/r**

Pero no decimos:

- tensión hacia el centro;
- más otra fuerza centrípeta hacia el centro.

Eso contaría dos veces el mismo efecto.

---

## 40. Ejemplo: auto en una curva plana

Un auto toma una curva horizontal.

La interacción con el suelo puede proporcionar la fuerza radial necesaria.

En un modelo simple:

- el rozamiento estático entre neumático y pavimento puede apuntar hacia el centro.

Si no alcanza la resultante radial necesaria:

- el vehículo no puede seguir la trayectoria circular ideal.

Esto se desarrollará después con dinámica y rozamiento.

---

## 41. Ejemplo: satélite

Un satélite puede moverse aproximadamente en una órbita circular.

La gravedad proporciona la aceleración radial.

En ese caso:

- no hay una “fuerza centrípeta” adicional;
- la fuerza gravitatoria es la que cumple el papel de resultante centrípeta.

Lo estudiaremos en gravitación.

---

## 42. ¿Existe una fuerza hacia afuera?

Desde un sistema inercial, para un objeto que realiza movimiento circular:

- necesitamos una resultante hacia el centro.

No hace falta agregar una fuerza real hacia afuera para explicar el movimiento.

La sensación de ser “empujado hacia afuera” en un auto que gira requiere analizar:

- inercia;
- contacto con el vehículo;
- sistema de referencia.

Esto se tratará con mayor precisión después de las leyes de Newton.

---

## 43. Período y velocidad tangencial

En una vuelta, la distancia recorrida es:

**2πr**

El tiempo es:

**T**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Velocidad tangencial</span>
  <div class="formula-panel__formula">v = 2πr / T</div>
</div>

Como:

**f = 1/T**

también:

<div class="formula-panel">
  <span class="formula-panel__label">Usando frecuencia</span>
  <div class="formula-panel__formula">v = 2πrf</div>
</div>

---

## 44. Aceleración centrípeta usando período

Partimos de:

**a<sub>c</sub> = v²/r**

y:

**v = 2πr/T**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Usando período</span>
  <div class="formula-panel__formula">a<sub>c</sub> = 4π²r / T²</div>
</div>

También:

<div class="formula-panel">
  <span class="formula-panel__label">Usando frecuencia</span>
  <div class="formula-panel__formula">a<sub>c</sub> = 4π²rf²</div>
</div>

---

## 45. Ejemplo integrado con período

Un punto gira en una circunferencia de:

**r = 0,50 m**

con período:

**T = 2,0 s**

### Velocidad angular

**ω = 2π/T = π rad/s**

### Velocidad tangencial

**v = ωr**

**v ≈ 1,57 m/s**

### Aceleración centrípeta

**a<sub>c</sub> = ω²r**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>De período a aceleración</h3>
  <div class="worked-example-card__steps">
    <p>ω ≈ 3,14 rad/s</p>
    <p>v ≈ 1,57 m/s</p>
    <p>a<sub>c</sub> ≈ 4,93 m/s²</p>
    <p><strong>La aceleración apunta siempre hacia el centro.</strong></p>
  </div>
</div>

---

## 46. Gráfico θ(t) en MCU

Como:

**θ = θ<sub>0</sub> + ωt**

el gráfico ángulo-tiempo es una recta.

La pendiente representa:

**ω**

Es análogo al gráfico posición-tiempo de MRU.

---

## 47. ¿Qué pasa al superar 2π?

Podemos dejar crecer θ:

- `2π`;
- `4π`;
- `6π`;
- etc.

Eso permite contar vueltas acumuladas.

También podemos expresar la posición angular “modulada” dentro de una vuelta.

Ambas representaciones pueden ser útiles.

---

## 48. Número de vueltas

Si el desplazamiento angular acumulado es:

**Δθ**

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Cantidad de vueltas</span>
  <div class="formula-panel__formula">N = Δθ / (2π)</div>
</div>

En MCU:

**Δθ = ωt**

por lo tanto:

**N = ωt/(2π) = ft**

---

## 49. Revoluciones por minuto

Muchos dispositivos indican:

**rpm**

revoluciones por minuto.

Ejemplo:

**120 rpm**

significa:

- 120 vueltas por minuto.

Frecuencia en Hz:

**120/60 = 2 Hz**

Entonces:

**ω = 4π rad/s**

---

## 50. Experiencia: objeto girando con velocidad aproximadamente uniforme

### Objetivo

Relacionar período, frecuencia y velocidad angular.

### Posibles sistemas

- plato giratorio;
- ventilador apagado que pueda girarse manualmente;
- rueda de bicicleta elevada y manipulada con seguridad;
- simulación.

### Procedimiento

1. Marcá un punto visible.
2. Contá N vueltas.
3. Medí el tiempo total.
4. Calculá `f = N/Δt`.
5. Calculá T.
6. Calculá ω.

### Seguridad

No tocar aspas, ruedas ni mecanismos mientras estén impulsados por un motor.

---

## 51. Experiencia con video

Filmando desde arriba un objeto que gira podemos:

1. elegir un origen angular;
2. medir θ cuadro a cuadro;
3. asociar tiempos;
4. construir θ(t);
5. comprobar si es aproximadamente lineal.

Si la pendiente es aproximadamente constante:

- el movimiento puede modelarse como MCU.

---

## 52. Movimiento circular no uniforme

Hasta ahora supusimos:

**ω = constante**

Pero un objeto también puede:

- girar cada vez más rápido;
- girar cada vez más lento.

Entonces existe aceleración angular.

De manera introductoria:

<div class="formula-panel">
  <span class="formula-panel__label">Aceleración angular media</span>
  <div class="formula-panel__formula">α<sub>media</sub> = Δω / Δt</div>
</div>

Unidad:

**rad/s²**

---

## 53. Aceleración tangencial — profundización

Si cambia el módulo de la velocidad tangencial, existe una componente de aceleración tangencial.

Para un punto a radio r:

<div class="formula-panel">
  <span class="formula-panel__label">Aceleración tangencial</span>
  <div class="formula-panel__formula">a<sub>t</sub> = αr</div>
</div>

Esta componente:

- es tangente a la trayectoria;
- cambia la rapidez.

---

## 54. Dos componentes de aceleración

En movimiento circular no uniforme pueden coexistir:

### Aceleración centrípeta

**a<sub>c</sub> = v²/r**

- radial;
- cambia dirección de la velocidad.

### Aceleración tangencial

**a<sub>t</sub>**

- tangente;
- cambia el módulo de la velocidad.

Son perpendiculares.

---

## 55. Aceleración total — profundización

Si ambas componentes están presentes:

<div class="formula-panel">
  <span class="formula-panel__label">Módulo de la aceleración total</span>
  <div class="formula-panel__formula">a = √(a<sub>c</sub>² + a<sub>t</sub>²)</div>
</div>

En MCU:

**a<sub>t</sub> = 0**

por eso:

**a = a<sub>c</sub>**

---

## 56. Modelo y realidad

Un movimiento perfectamente circular y uniforme es una idealización.

En sistemas reales puede haber:

- variaciones de rapidez;
- vibraciones;
- cambios de radio;
- rozamiento;
- deformaciones.

El modelo sigue siendo útil cuando esas variaciones son pequeñas para el problema que queremos estudiar.

---

## 57. Errores frecuentes

### “Si la rapidez es constante, la aceleración es cero”

No en movimiento circular.

### “La velocidad apunta hacia el centro”

No. La velocidad es tangente.

### “La aceleración centrípeta es tangente”

No. Apunta hacia el centro.

### “Velocidad angular y tangencial son lo mismo”

No. Tienen distintas unidades y significado.

### “Todos los puntos de un disco tienen la misma v”

No. Tienen la misma ω, pero `v = ωr`.

### “La fuerza centrípeta es una fuerza nueva”

No. Es la resultante radial hacia el centro.

### “En una curva debe existir una fuerza real hacia afuera”

No es necesaria en un sistema inercial para explicar la trayectoria circular.

### “Un radián tiene dimensión de longitud”

No. Surge de una razón entre longitudes.

---

## 58. Problemas y ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Reconocimiento</strong>
  </div>
  <ol>
    <li>Convertí 180°, 90° y 360° a radianes.</li>
    <li>Definí período.</li>
    <li>Definí frecuencia.</li>
    <li>¿Hacia dónde apunta la velocidad en MCU?</li>
    <li>¿Hacia dónde apunta la aceleración centrípeta?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Relaciones angulares</strong>
  </div>
  <ol>
    <li>Un sistema gira a 4 Hz. Calculá T y ω.</li>
    <li>Una rueda tiene T = 0,5 s. Calculá f y ω.</li>
    <li>Un disco gira con ω = 6 rad/s durante 5 s. Calculá Δθ y número de vueltas.</li>
    <li>Un punto está a 0,20 m del eje y tiene ω = 10 rad/s. Calculá v.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Aceleración centrípeta</strong>
  </div>
  <ol>
    <li>Un objeto gira con v = 8 m/s en un radio de 4 m. Calculá a<sub>c</sub>.</li>
    <li>Repetí si la rapidez se duplica manteniendo el radio.</li>
    <li>Un punto gira con ω = 5 rad/s a r = 0,8 m. Calculá v y a<sub>c</sub>.</li>
    <li>Explicá por qué un punto más alejado del eje tiene mayor v si ω es la misma.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Interpretación física</strong>
  </div>
  <ol>
    <li>Dibujá v y a<sub>c</sub> en cuatro puntos de una circunferencia.</li>
    <li>Explicá por qué a<sub>c</sub> puede ser distinta de cero aunque la rapidez sea constante.</li>
    <li>Un auto toma dos curvas con la misma rapidez, una de radio 20 m y otra de 80 m. Compará las aceleraciones centrípetas.</li>
    <li>Explicá por qué “fuerza centrípeta” no debe agregarse automáticamente como una fuerza adicional en un diagrama.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Derivá `v = ωr` a partir de `s = rθ`.</li>
    <li>Derivá a<sub>c</sub> = ω²r a partir de a<sub>c</sub> = v²/r.</li>
    <li>Derivá a<sub>c</sub> = 4π²r/T².</li>
    <li>Para movimiento circular no uniforme, explicá el papel diferente de a<sub>t</sub> y a<sub>c</sub> y construí el vector aceleración total.</li>
  </ol>
</div>

---

## 59. Ejemplo integrado

Una rueda de radio:

**r = 0,40 m**

gira a:

**90 rpm**

### Frecuencia

**f = 90/60 = 1,5 Hz**

### Período

**T = 1/1,5 ≈ 0,667 s**

### Velocidad angular

**ω = 2πf = 3π rad/s**

**ω ≈ 9,42 rad/s**

### Velocidad tangencial en el borde

**v = ωr**

**v ≈ 9,42 × 0,40**

**v ≈ 3,77 m/s**

### Aceleración centrípeta

**a<sub>c</sub> = ω²r**

**a<sub>c</sub> ≈ 35,5 m/s²**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>Del régimen de giro al movimiento del borde</h3>
  <div class="worked-example-card__steps">
    <p>f = 1,5 Hz</p>
    <p>T ≈ 0,667 s</p>
    <p>ω ≈ 9,42 rad/s</p>
    <p>v ≈ 3,77 m/s</p>
    <p><strong>a<sub>c</sub> ≈ 35,5 m/s² hacia el centro</strong></p>
  </div>
</div>

---

## 60. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Cuántos radianes tiene una vuelta completa?</summary>
  <div class="lesson-quiz__answer">
    2π rad.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Cómo se relacionan frecuencia y período?</summary>
  <div class="lesson-quiz__answer">
    Son inversas: f = 1/T y T = 1/f.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Qué relación existe entre velocidad tangencial y angular?</summary>
  <div class="lesson-quiz__answer">
    Para un punto a distancia r del eje, v = ωr.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Por qué existe aceleración en MCU?</summary>
  <div class="lesson-quiz__answer">
    Porque la dirección del vector velocidad cambia continuamente aunque su módulo permanezca constante.
  </div>
</details>

<details class="lesson-quiz">
  <summary>5. ¿Hacia dónde apunta la aceleración centrípeta?</summary>
  <div class="lesson-quiz__answer">
    Radialmente hacia el centro de la trayectoria circular.
  </div>
</details>

<details class="lesson-quiz">
  <summary>6. ¿La fuerza centrípeta es una interacción nueva?</summary>
  <div class="lesson-quiz__answer">
    No. Es el nombre de la resultante o componente neta radial hacia el centro producida por fuerzas reales como tensión, rozamiento, gravedad o normal.
  </div>
</details>

---

## 61. Resumen

- Una posición circular puede describirse mediante un ángulo.
- El radián se define por `θ = s/r`.
- Una vuelta completa equivale a `2π rad`.
- La velocidad angular mide cambio de ángulo por tiempo.
- En MCU, θ = θ<sub>0</sub> + ωt.
- El período es el tiempo de una vuelta.
- La frecuencia es la cantidad de vueltas por unidad de tiempo.
- `f = 1/T`.
- `ω = 2πf = 2π/T`.
- La velocidad tangencial cumple `v = ωr`.
- En un disco rígido, todos los puntos comparten ω pero no necesariamente v.
- En MCU la rapidez es constante, pero la velocidad cambia de dirección.
- Por eso existe aceleración centrípeta.
- a<sub>c</sub> = v²/r = ω²r.
- La aceleración centrípeta apunta hacia el centro.
- La velocidad es tangente a la trayectoria.
- La fuerza centrípeta no es una fuerza nueva: es la resultante radial necesaria.
- En movimiento circular no uniforme puede existir además aceleración tangencial.
- La aceleración centrípeta cambia dirección; la tangencial cambia rapidez.

---

## 62. Siguiente tema recomendado

**F-08 — Leyes de Newton**

Hasta ahora describimos movimientos sin estudiar sistemáticamente sus causas.

Ahora vamos a pasar de la cinemática a la dinámica.

Trabajaremos con:

- concepto de fuerza;
- sistemas de referencia inerciales;
- primera ley;
- inercia;
- segunda ley;
- masa inercial;
- resultante;
- tercera ley;
- pares acción-reacción;
- diagramas de cuerpo libre;
- errores frecuentes en interpretación de fuerzas.
