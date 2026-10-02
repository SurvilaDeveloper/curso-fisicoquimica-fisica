---
title: "Trabajo, energía y potencia"
description: "Cómo analizar transferencias y transformaciones de energía mediante trabajo, energía cinética y potencial, conservación, potencia, rendimiento y diagramas energéticos."
slug: "trabajo-energia-y-potencia"

course: "fisica"
module: "energia"
order: 11

level: "intermedio"
cycle: "ambos"

yearsApprox: [3, 4, 5]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - estatica-y-equilibrio

skills:
  - trabajo-de-una-fuerza
  - producto-escalar
  - trabajo-positivo-negativo-nulo
  - energia-cinetica
  - teorema-trabajo-energia
  - energia-potencial-gravitatoria
  - energia-potencial-elastica
  - fuerzas-conservativas
  - fuerzas-no-conservativas
  - energia-mecanica
  - conservacion-de-la-energia
  - potencia
  - rendimiento
  - diagramas-energeticos

hasExercises: true
hasQuiz: true
hasExperiment: true

deepening: true
status: "complete"
---

## Una nueva manera de analizar el movimiento

Hasta ahora resolvimos muchos problemas preguntando:

- ¿qué fuerzas actúan?
- ¿cuál es la resultante?
- ¿qué aceleración producen?
- ¿cómo cambia la velocidad con el tiempo?

Ese enfoque sigue siendo fundamental.

Pero existe otra herramienta muy poderosa.

Podemos preguntarnos:

> **¿cómo cambia la energía del sistema entre un estado inicial y otro final?**

Esto permite resolver muchos problemas sin reconstruir todos los detalles intermedios del movimiento.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>El enfoque energético no reemplaza a las leyes de Newton. Es otra representación del mismo fenómeno, especialmente útil cuando interesan los estados inicial y final más que la evolución instante a instante.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta lección deberías poder:

- interpretar el trabajo de una fuerza constante;
- usar el producto escalar;
- distinguir trabajo positivo, negativo y nulo;
- calcular energía cinética;
- aplicar el teorema trabajo-energía;
- interpretar energía potencial gravitatoria;
- interpretar energía potencial elástica;
- distinguir fuerzas conservativas y no conservativas;
- definir energía mecánica;
- aplicar conservación de la energía bajo condiciones apropiadas;
- analizar sistemas con rozamiento;
- calcular potencia media e instantánea en casos sencillos;
- interpretar rendimiento;
- construir y leer diagramas energéticos;
- reconocer límites y condiciones de cada modelo.

---

## 1. Trabajo mecánico

En Física, **trabajo** tiene un significado preciso.

Una fuerza realiza trabajo sobre un cuerpo cuando existe desplazamiento y la fuerza tiene una componente en la dirección de ese desplazamiento.

Para una fuerza constante:

<div class="formula-panel">
  <span class="formula-panel__label">Trabajo de una fuerza constante</span>
  <div class="formula-panel__formula">W = F · Δr · cos θ</div>
</div>

donde θ es el ángulo entre:

- la fuerza;
- el desplazamiento.

---

## 2. Trabajo como producto escalar

En F-01 vimos el producto escalar:

<div class="formula-panel">
  <span class="formula-panel__label">Producto escalar</span>
  <div class="formula-panel__formula">A · B = AB cos θ</div>
</div>

Entonces podemos escribir:

<div class="formula-panel">
  <span class="formula-panel__label">Trabajo</span>
  <div class="formula-panel__formula">W = F · Δr</div>
</div>

Esto muestra que el trabajo es una magnitud:

**escalar**

no vectorial.

---

## 3. Unidad del trabajo

La unidad SI es:

**joule**

símbolo:

**J**

<div class="formula-panel">
  <span class="formula-panel__label">Definición</span>
  <div class="formula-panel__formula">1 J = 1 N · m</div>
</div>

Aunque torque y trabajo pueden expresarse dimensionalmente en `N·m`, son magnitudes físicas diferentes.

---

## 4. Trabajo positivo

Si fuerza y desplazamiento forman un ángulo menor que 90°:

**cos θ > 0**

Entonces:

**W > 0**

La fuerza aporta energía cinética al cuerpo en el sentido del teorema trabajo-energía.

Ejemplo:

- empujar una caja en la dirección en que se mueve.

---

## 5. Trabajo negativo

Si el ángulo entre fuerza y desplazamiento es mayor que 90°:

**cos θ < 0**

Entonces:

**W < 0**

Ejemplo:

- rozamiento cinético que se opone al deslizamiento.

El trabajo negativo puede reducir la energía cinética.

---

## 6. Trabajo nulo

El trabajo puede ser cero aunque exista una fuerza.

Ocurre, por ejemplo, si:

### No hay desplazamiento

**Δr = 0**

### Fuerza y desplazamiento son perpendiculares

**θ = 90°**

Entonces:

**cos 90° = 0**

y:

<div class="formula-panel">
  <span class="formula-panel__label">Trabajo nulo</span>
  <div class="formula-panel__formula">W = 0</div>
</div>

---

## 7. Ejemplo de trabajo positivo

Una persona empuja una caja con:

**F = 50 N**

en la misma dirección que el desplazamiento:

**Δx = 4 m**

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Fuerza paralela al desplazamiento</h3>
  <div class="worked-example-card__steps">
    <p>θ = 0°</p>
    <p>W = 50 × 4 × cos 0°</p>
    <p><strong>W = 200 J</strong></p>
  </div>
</div>

---

## 8. Ejemplo con fuerza inclinada

Una fuerza de:

**100 N**

forma:

**60°**

con un desplazamiento horizontal de:

**5 m**

Entonces:

**cos 60° = 0,5**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Sólo contribuye la componente paralela</h3>
  <div class="worked-example-card__steps">
    <p>W = 100 × 5 × 0,5</p>
    <p><strong>W = 250 J</strong></p>
  </div>
</div>

---

## 9. Fuerza perpendicular al movimiento

En un movimiento circular uniforme ideal:

- la fuerza neta radial es perpendicular a la velocidad instantánea;
- también es perpendicular al desplazamiento infinitesimal tangencial.

Por eso la fuerza centrípeta no cambia la rapidez.

Su trabajo instantáneo ideal es:

**cero**

Esto conecta dinámica, movimiento circular y energía.

---

## 10. El trabajo depende de la fuerza y del recorrido

No basta con conocer:

- el módulo de la fuerza.

También necesitamos:

- el desplazamiento;
- el ángulo;
- y, si la fuerza cambia, cómo cambia a lo largo del recorrido.

La expresión:

**W = FΔr cosθ**

vale directamente para una fuerza constante.

---

## 11. Trabajo de una fuerza variable — profundización

Si la fuerza cambia con la posición, podemos interpretar el trabajo mediante el área bajo una gráfica:

**Fₓ(x)**

En una dimensión:

<div class="formula-panel">
  <span class="formula-panel__label">Profundización</span>
  <div class="formula-panel__formula">W = área algebraica bajo Fₓ(x)</div>
</div>

Con cálculo integral:

**W = ∫ Fₓ dx**

No necesitamos usar integrales formalmente para aprovechar la interpretación gráfica.

---

## 12. Energía

La **energía** es una magnitud que permite describir y contabilizar cambios en sistemas físicos.

No debe entenderse como:

- una sustancia material;
- una fuerza;
- algo que necesariamente “se ve”.

Podemos observar:

- transferencias;
- transformaciones;
- cambios de formas de energía.

La unidad SI también es:

**joule (J)**

---

## 13. Energía cinética

La energía cinética está asociada al movimiento.

Para una partícula o cuerpo modelado traslacionalmente:

<div class="formula-panel">
  <span class="formula-panel__label">Energía cinética</span>
  <div class="formula-panel__formula">K = ½mv²</div>
</div>

donde:

- m es la masa;
- v es la rapidez.

La energía cinética es escalar.

---

## 14. La energía cinética nunca es negativa

En:

**K = ½mv²**

tenemos:

- `m > 0`;
- `v² ≥ 0`.

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Propiedad</span>
  <div class="formula-panel__formula">K ≥ 0</div>
</div>

Una velocidad negativa en una dimensión no produce energía cinética negativa.

---

## 15. Dependencia cuadrática con la rapidez

Si duplicamos la rapidez:

**v → 2v**

entonces:

**K → ½m(2v)² = 4K**

Por eso:

> duplicar la rapidez cuadruplica la energía cinética.

---

## 16. Ejemplo de energía cinética

Un cuerpo de:

**m = 2 kg**

se mueve a:

**v = 6 m/s**

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Energía cinética</h3>
  <div class="worked-example-card__steps">
    <p>K = ½mv²</p>
    <p>K = ½ × 2 × 36</p>
    <p><strong>K = 36 J</strong></p>
  </div>
</div>

---

## 17. Teorema trabajo-energía

El trabajo neto realizado sobre un cuerpo es igual al cambio de su energía cinética:

<div class="formula-panel">
  <span class="formula-panel__label">Teorema trabajo-energía</span>
  <div class="formula-panel__formula">W_neto = ΔK</div>
</div>

Es decir:

<div class="formula-panel">
  <span class="formula-panel__label">Forma desarrollada</span>
  <div class="formula-panel__formula">W_neto = K_f − K_i</div>
</div>

---

## 18. Qué significa el teorema

### Si W_neto > 0

**K_f > K_i**

La rapidez aumenta.

### Si W_neto < 0

**K_f < K_i**

La rapidez disminuye.

### Si W_neto = 0

**K_f = K_i**

La rapidez final es igual a la inicial.

Eso no obliga a que la dirección de la velocidad sea la misma.

---

## 19. Derivación sencilla del teorema

Para una fuerza neta constante en una dimensión:

**ΣF = ma**

Trabajo neto:

**W_neto = ΣF · Δx**

Entonces:

**W_neto = maΔx**

En MRUV:

**v_f² = v_i² + 2aΔx**

por lo tanto:

**aΔx = (v_f² − v_i²)/2**

Sustituimos:

<div class="formula-panel">
  <span class="formula-panel__label">Resultado</span>
  <div class="formula-panel__formula">W_neto = ½mv_f² − ½mv_i² = ΔK</div>
</div>

---

## 20. Ejemplo con trabajo neto

Un cuerpo de:

**2 kg**

pasa de:

**3 m/s**

a:

**7 m/s**

Cambio de energía cinética:

**ΔK = ½×2×7² − ½×2×3²**

**ΔK = 49 − 9**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Trabajo neto</h3>
  <div class="worked-example-card__steps">
    <p><strong>W_neto = ΔK = 40 J</strong></p>
  </div>
</div>

---

## 21. Trabajo neto no es trabajo de una sola fuerza

Si actúan varias fuerzas:

<div class="formula-panel">
  <span class="formula-panel__label">Trabajo neto</span>
  <div class="formula-panel__formula">W_neto = W₁ + W₂ + W₃ + ...</div>
</div>

El teorema usa la suma de todos los trabajos sobre el cuerpo.

Una fuerza puede realizar:

- trabajo positivo;

mientras otra realiza:

- trabajo negativo.

---

## 22. Energía potencial

La energía potencial se asocia a la configuración de un sistema y a interacciones conservativas.

No pertenece de manera absoluta a un objeto aislado.

Ejemplos:

- sistema Tierra-cuerpo;
- sistema resorte-cuerpo.

Por eso es más preciso hablar de:

> **energía potencial del sistema.**

---

## 23. Energía potencial gravitatoria cerca de la Tierra

En una región donde g puede tratarse como constante:

<div class="formula-panel">
  <span class="formula-panel__label">Energía potencial gravitatoria</span>
  <div class="formula-panel__formula">U_g = mgh</div>
</div>

respecto de un nivel de referencia elegido.

---

## 24. El cero de energía potencial es convencional

Podemos elegir:

**h = 0**

donde resulte conveniente.

Entonces los valores de:

**U_g**

dependen de ese nivel.

Pero las diferencias:

<div class="formula-panel">
  <span class="formula-panel__label">Cambio de energía potencial</span>
  <div class="formula-panel__formula">ΔU_g = mg(h_f − h_i)</div>
</div>

son las que tienen significado físico en los problemas.

---

## 25. Energía potencial puede ser negativa

Si elegimos un nivel de referencia:

**U = 0**

un cuerpo situado debajo puede tener:

**U < 0**

Eso no significa que exista “energía física negativa imposible”.

El valor absoluto depende de la elección del cero.

Las diferencias son lo importante.

---

## 26. Trabajo de la gravedad

Cerca de la superficie terrestre:

<div class="formula-panel">
  <span class="formula-panel__label">Relación</span>
  <div class="formula-panel__formula">W_g = −ΔU_g</div>
</div>

Si el cuerpo baja:

- `ΔU_g < 0`;
- `W_g > 0`.

Si sube:

- `ΔU_g > 0`;
- `W_g < 0`.

---

## 27. Ejemplo gravitatorio

Un cuerpo de:

**2 kg**

desciende:

**5 m**

Usamos:

**g = 10 m/s²**

Cambio de energía potencial:

**ΔU_g = 2×10×(−5)**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Descenso gravitatorio</h3>
  <div class="worked-example-card__steps">
    <p>ΔU_g = −100 J</p>
    <p><strong>W_g = +100 J</strong></p>
  </div>
</div>

---

## 28. Energía potencial elástica

Para un resorte ideal que cumple la ley de Hooke:

<div class="formula-panel">
  <span class="formula-panel__label">Energía potencial elástica</span>
  <div class="formula-panel__formula">U_el = ½kx²</div>
</div>

donde:

- k es la constante elástica;
- x es la deformación respecto del equilibrio.

---

## 29. La energía elástica depende de x²

Tanto una compresión como un estiramiento de igual módulo tienen:

- la misma energía potencial elástica.

Porque:

**x²**

elimina el signo.

El signo de x sí importa para la dirección de la fuerza:

**F = −kx**

pero no para el valor de:

**U_el = ½kx²**

---

## 30. Ejemplo de energía elástica

Un resorte tiene:

- `k = 200 N/m`;
- `x = 0,10 m`.

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Energía almacenada en un resorte ideal</h3>
  <div class="worked-example-card__steps">
    <p>U_el = ½ × 200 × 0,10²</p>
    <p><strong>U_el = 1 J</strong></p>
  </div>
</div>

---

## 31. Trabajo del resorte

Para una fuerza elástica ideal:

<div class="formula-panel">
  <span class="formula-panel__label">Relación</span>
  <div class="formula-panel__formula">W_el = −ΔU_el</div>
</div>

Cuando el resorte se acerca al equilibrio:

- su energía potencial puede disminuir;
- puede aumentar la energía cinética del cuerpo.

---

## 32. Fuerzas conservativas

Una fuerza es **conservativa** cuando el trabajo entre dos puntos no depende del camino seguido, sino sólo de los estados inicial y final.

Equivalentemente, podemos asociarle una energía potencial tal que:

<div class="formula-panel">
  <span class="formula-panel__label">Fuerza conservativa</span>
  <div class="formula-panel__formula">W_c = −ΔU</div>
</div>

Ejemplos ideales:

- gravedad;
- fuerza elástica de Hooke.

---

## 33. Camino cerrado

Para una fuerza conservativa:

> el trabajo total sobre una trayectoria cerrada es cero.

Si el sistema vuelve exactamente a la misma configuración:

**ΔU = 0**

y entonces:

**W_c = 0**

sobre el recorrido completo.

---

## 34. Fuerzas no conservativas

Una fuerza no conservativa no puede, en general, describirse mediante una energía potencial que dependa sólo de la configuración inicial y final.

Un ejemplo típico:

**rozamiento cinético**

Su trabajo depende de:

- la longitud del recorrido;
- las condiciones de contacto.

---

## 35. Rozamiento y energía

Cuando existe rozamiento cinético:

- parte de la energía mecánica puede transformarse en energía interna;
- aumenta la energía térmica de los cuerpos y entorno.

No decimos que la energía total “desaparece”.

Lo que puede disminuir es:

> **la energía mecánica del sistema.**

---

## 36. Energía mecánica

Definimos:

<div class="formula-panel">
  <span class="formula-panel__label">Energía mecánica</span>
  <div class="formula-panel__formula">E_m = K + U</div>
</div>

Si existen varias energías potenciales:

<div class="formula-panel">
  <span class="formula-panel__label">Ejemplo</span>
  <div class="formula-panel__formula">E_m = K + U_g + U_el</div>
</div>

según el sistema estudiado.

---

## 37. Conservación de la energía mecánica

Si sobre el sistema sólo realizan trabajo fuerzas conservativas relevantes:

<div class="formula-panel">
  <span class="formula-panel__label">Conservación mecánica</span>
  <div class="formula-panel__formula">E_m,i = E_m,f</div>
</div>

Es decir:

<div class="formula-panel">
  <span class="formula-panel__label">Forma expandida</span>
  <div class="formula-panel__formula">K_i + U_i = K_f + U_f</div>
</div>

---

## 38. Conservación de energía no significa K constante

En una caída ideal:

- U_g disminuye;
- K aumenta.

La suma:

**K + U_g**

permanece constante.

Entonces:

> conservar energía mecánica no significa que cada forma de energía sea constante.

Las formas pueden transformarse entre sí.

---

## 39. Ejemplo: caída sin rozamiento

Un cuerpo se deja caer desde:

**h = 20 m**

Usamos:

**g = 10 m/s²**

Parte del reposo.

Elegimos:

**U = 0**

en el suelo.

Inicialmente:

**K_i = 0**

**U_i = mgh**

Al llegar:

**U_f = 0**

Entonces:

**½mv² = mgh**

Cancelamos m:

**v² = 2gh**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Caída mediante energía</h3>
  <div class="worked-example-card__steps">
    <p>v = √(2gh)</p>
    <p>v = √(2×10×20)</p>
    <p><strong>v = 20 m/s</strong></p>
  </div>
</div>

---

## 40. La masa se cancela en la caída ideal

En el ejemplo:

**½mv² = mgh**

la masa aparece en ambos lados.

Por eso:

**v = √(2gh)**

no depende de m.

Esto coincide con la cinemática de caída libre ideal.

Dos enfoques diferentes llevan al mismo resultado.

---

## 41. Ejemplo: lanzamiento vertical

Lanzamos un cuerpo hacia arriba con rapidez:

**v₀**

En la altura máxima:

**v = 0**

Conservación:

**½mv₀² = mgh_max**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Altura máxima</span>
  <div class="formula-panel__formula">h_max = v₀²/(2g)</div>
</div>

Es el mismo resultado obtenido mediante MRUV.

---

## 42. Ejemplo: resorte ideal

Un bloque sobre una superficie sin rozamiento comprime un resorte y luego es liberado.

Si parte del reposo con compresión x:

**K_i = 0**

**U_el,i = ½kx²**

Cuando el resorte pasa por el equilibrio:

**U_el,f = 0**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Transformación</span>
  <div class="formula-panel__formula">½kx² = ½mv²</div>
</div>

y:

**v = x√(k/m)**

---

## 43. Trabajo de fuerzas no conservativas

Cuando existen fuerzas no conservativas externas al almacenamiento potencial considerado, podemos escribir:

<div class="formula-panel">
  <span class="formula-panel__label">Balance mecánico</span>
  <div class="formula-panel__formula">W_nc = ΔE_m</div>
</div>

es decir:

<div class="formula-panel">
  <span class="formula-panel__label">Forma expandida</span>
  <div class="formula-panel__formula">W_nc = (K_f + U_f) − (K_i + U_i)</div>
</div>

Esto permite contabilizar pérdidas o aportes de energía mecánica.

---

## 44. Trabajo del rozamiento

Si un bloque desliza una distancia d sobre una superficie horizontal y el rozamiento cinético es constante:

<div class="formula-panel">
  <span class="formula-panel__label">Rozamiento</span>
  <div class="formula-panel__formula">W_roz = −f_k d</div>
</div>

si el rozamiento se opone al desplazamiento.

El signo negativo indica reducción de energía mecánica.

---

## 45. Ejemplo con rozamiento

Una caja de:

**m = 2 kg**

se mueve inicialmente a:

**5 m/s**

sobre una superficie horizontal.

El rozamiento realiza:

**−9 J**

de trabajo hasta cierto punto.

Energía cinética inicial:

**K_i = ½×2×25 = 25 J**

Entonces:

**K_f = 25 − 9 = 16 J**

Como:

**K_f = ½×2×v_f²**

tenemos:

**v_f² = 16**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Pérdida de energía mecánica</h3>
  <div class="worked-example-card__steps">
    <p>K_i = 25 J</p>
    <p>W_roz = −9 J</p>
    <p>K_f = 16 J</p>
    <p><strong>v_f = 4 m/s</strong></p>
  </div>
</div>

---

## 46. Conservación de la energía total

Incluso cuando la energía mecánica disminuye por rozamiento:

> la energía total de un sistema suficientemente amplio se conserva.

La disminución de energía mecánica puede aparecer como:

- energía interna;
- calentamiento;
- deformación;
- sonido;
- otras formas.

Por eso debemos distinguir:

- conservación de energía total;
- conservación de energía mecánica.

---

## 47. Elegir bien el sistema

La frase:

> “la energía se conserva”

requiere especificar:

**¿en qué sistema?**

Ejemplo:

si una persona empuja una caja:

- la energía mecánica de la caja puede aumentar;
- porque existe transferencia desde energía química interna de la persona.

Ampliar el sistema cambia qué transferencias consideramos internas o externas.

---

## 48. Diagramas energéticos

Podemos representar cualitativamente la energía mediante barras.

Ejemplo: caída ideal.

### Estado inicial

```text
K    |          |
Ug   |██████████|
```

### Estado final

```text
K    |██████████|
Ug   |          |
```

La altura total de las barras puede conservarse si sólo hay transformación entre K y U.

---

## 49. Diagrama con rozamiento

Supongamos una caja que desliza y se detiene.

Inicialmente:

```text
K        |██████████|
Interna  |          |
```

Finalmente:

```text
K        |          |
Interna  |██████████|
```

En un sistema adecuado, la energía total se conserva aunque la energía mecánica no.

---

## 50. Diagramas de flujo de energía

También podemos representar:

```text
energía química
      ↓
trabajo muscular
      ↓
energía mecánica de la caja
      ↓
energía interna por rozamiento
```

Estos diagramas ayudan a identificar:

- almacenamiento;
- transformación;
- transferencia.

---

## 51. Potencia

El trabajo indica cuánto se transfiere energía.

La **potencia** indica qué tan rápido ocurre esa transferencia.

Potencia media:

<div class="formula-panel">
  <span class="formula-panel__label">Potencia media</span>
  <div class="formula-panel__formula">P_media = W / Δt</div>
</div>

Unidad SI:

**watt (W)**

---

## 52. Watt

<div class="formula-panel">
  <span class="formula-panel__label">Unidad de potencia</span>
  <div class="formula-panel__formula">1 W = 1 J/s</div>
</div>

Una máquina de mayor potencia puede transferir la misma cantidad de energía en menos tiempo.

Eso no significa necesariamente que realice más trabajo total.

---

## 53. Ejemplo de potencia media

Una máquina realiza:

**6000 J**

de trabajo en:

**20 s**

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Potencia media</h3>
  <div class="worked-example-card__steps">
    <p>P = 6000/20</p>
    <p><strong>P = 300 W</strong></p>
  </div>
</div>

---

## 54. Potencia mecánica instantánea

Para una fuerza que actúa sobre un cuerpo con velocidad v:

<div class="formula-panel">
  <span class="formula-panel__label">Potencia instantánea</span>
  <div class="formula-panel__formula">P = F · v = Fv cos θ</div>
</div>

Esto es el análogo temporal del producto escalar usado para trabajo.

---

## 55. Fuerza perpendicular y potencia nula

Si:

**F ⟂ v**

entonces:

**cos 90° = 0**

por lo tanto:

**P = 0**

En MCU ideal, la fuerza centrípeta no entrega potencia mecánica al cuerpo porque no cambia su rapidez.

---

## 56. Ejemplo de potencia al subir

Una persona eleva a velocidad aproximadamente constante una carga de:

**200 N**

a:

**0,5 m/s**

La fuerza hacia arriba tiene aproximadamente el mismo módulo:

**200 N**

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Potencia de elevación</h3>
  <div class="worked-example-card__steps">
    <p>P = Fv</p>
    <p>P = 200 × 0,5</p>
    <p><strong>P = 100 W</strong></p>
  </div>
</div>

---

## 57. Potencia no es energía

No confundamos:

### Energía

Unidad:

**J**

### Potencia

Unidad:

**W = J/s**

Una batería puede almacenar cierta energía.

Un dispositivo puede consumir o transferir esa energía a una determinada potencia.

---

## 58. Rendimiento

Las máquinas reales no convierten toda la energía de entrada en la forma de salida que consideramos útil.

Definimos:

<div class="formula-panel">
  <span class="formula-panel__label">Rendimiento energético</span>
  <div class="formula-panel__formula">η = E_útil / E_entrada</div>
</div>

También puede expresarse:

<div class="formula-panel">
  <span class="formula-panel__label">Con potencias</span>
  <div class="formula-panel__formula">η = P_útil / P_entrada</div>
</div>

si las condiciones son apropiadas.

---

## 59. Rendimiento en porcentaje

Multiplicamos por 100:

<div class="formula-panel">
  <span class="formula-panel__label">Porcentaje</span>
  <div class="formula-panel__formula">η(%) = 100 · E_útil/E_entrada</div>
</div>

En un sistema pasivo real:

**0 ≤ η ≤ 1**

o:

**0% ≤ η ≤ 100%**

según la definición de salida útil.

---

## 60. Ejemplo de rendimiento

Una máquina recibe:

**1000 J**

y entrega:

**750 J**

como energía útil.

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Rendimiento</h3>
  <div class="worked-example-card__steps">
    <p>η = 750/1000</p>
    <p>η = 0,75</p>
    <p><strong>η = 75%</strong></p>
  </div>
</div>

Los otros 250 J no desaparecen:

- pueden transformarse en energía interna;
- sonido;
- vibraciones;
- otras formas no consideradas útiles.

---

## 61. “Pérdida” de energía

En lenguaje técnico cotidiano hablamos de:

- pérdidas por rozamiento;
- pérdidas térmicas.

Eso suele significar:

> energía que deja de estar disponible en la forma útil deseada.

No significa que la energía total se destruya.

---

## 62. Fuerza conservativa y energía potencial

Una relación central es:

<div class="formula-panel">
  <span class="formula-panel__label">Conservativa</span>
  <div class="formula-panel__formula">W_c = −ΔU</div>
</div>

Esto permite reemplazar en muchos problemas:

- el cálculo detallado del trabajo de gravedad o resorte;

por:

- diferencias de energía potencial.

---

## 63. Ejemplo integrado: montaña rusa ideal

Un carrito parte del reposo desde una altura:

**h = 20 m**

y desciende sin rozamiento hasta una altura:

**h = 5 m**

Usamos:

**g = 10 m/s²**

Conservación:

**mgh_i = ½mv² + mgh_f**

Cancelamos m:

**10×20 = ½v² + 10×5**

**200 = ½v² + 50**

**150 = ½v²**

**v² = 300**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>Cambio de altura y rapidez</h3>
  <div class="worked-example-card__steps">
    <p>v = √300</p>
    <p><strong>v ≈ 17,3 m/s</strong></p>
  </div>
</div>

No necesitamos calcular el tiempo de descenso.

---

## 64. Ejemplo integrado con resorte y gravedad

Una masa comprime un resorte y luego es impulsada hacia arriba.

En un modelo sin rozamiento podemos tener:

<div class="formula-panel">
  <span class="formula-panel__label">Balance</span>
  <div class="formula-panel__formula">½kx_i² + mgh_i + ½mv_i² = ½kx_f² + mgh_f + ½mv_f²</div>
</div>

No todos los términos estarán presentes siempre.

El primer paso es identificar:

- qué formas de energía son relevantes;
- en qué estados.

---

## 65. Diagramas energéticos antes de las ecuaciones

Antes de calcular, conviene dibujar:

### Estado inicial

- ¿hay movimiento?
- ¿hay altura?
- ¿hay resorte deformado?

### Transferencias

- ¿trabajo externo?
- ¿rozamiento?
- ¿motor?

### Estado final

- ¿qué formas quedan?

Esto reduce errores de signo y de selección de ecuaciones.

---

## 66. Cuándo conviene usar energía

El enfoque energético suele ser especialmente útil cuando:

- conocemos estados inicial y final;
- no necesitamos conocer el tiempo;
- existen fuerzas conservativas;
- la geometría del camino es complicada pero conocemos alturas;
- queremos relacionar rapidez y posición.

---

## 67. Cuándo energía no alcanza por sí sola

El método energético no siempre responde:

- cuánto tarda;
- en qué dirección exacta acelera;
- qué fuerza normal actúa;
- qué tensión existe;
- cómo evoluciona el movimiento instante a instante.

Para eso podemos necesitar:

- leyes de Newton;
- cinemática;
- otras herramientas.

---

## 68. Experiencia: energía gravitatoria y cinética

### Objetivo

Observar la transformación entre energía potencial gravitatoria y movimiento.

### Posible montaje

- carrito;
- rampa baja;
- marcas de altura;
- video.

### Procedimiento

1. Liberá el carrito desde distintas alturas.
2. Registrá su velocidad aproximada en una zona baja.
3. Compará alturas mayores con velocidades mayores.
4. Analizá pérdidas por rozamiento.

### Seguridad

Usar una rampa baja, objetos livianos y un recorrido despejado.

---

## 69. Experiencia: resorte

Con un resorte dentro de su régimen seguro:

1. medimos k;
2. comprimimos o estiramos una distancia conocida;
3. calculamos `½kx²`;
4. observamos el movimiento al liberar.

No debemos lanzar objetos peligrosos ni sobrecargar el resorte.

---

## 70. Errores frecuentes

### “Trabajo es lo mismo que fuerza”

No. Trabajo combina fuerza y desplazamiento.

### “Si sostengo un objeto quieto, realizo trabajo mecánico sobre él”

Si no hay desplazamiento del objeto, el trabajo mecánico de esa fuerza sobre el objeto es cero, aunque la persona consuma energía biológica.

### “Una fuerza siempre realiza trabajo”

No. Puede ser perpendicular al desplazamiento o no haber desplazamiento.

### “Energía cinética puede ser negativa si v es negativa”

No.

### “La energía potencial gravitatoria siempre es positiva”

No. Depende del nivel cero elegido.

### “Si hay rozamiento, la energía no se conserva”

La energía total se conserva en un sistema adecuado; lo que puede no conservarse es la energía mecánica.

### “Conservar energía mecánica significa K constante”

No.

### “Potencia y energía son lo mismo”

No.

### “Una máquina con 80% de rendimiento destruye el 20% restante”

No. Esa fracción se transforma en formas no consideradas útiles.

---

## 71. Problemas y ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Conceptos</strong>
  </div>
  <ol>
    <li>Definí trabajo mecánico para una fuerza constante.</li>
    <li>¿Cuándo el trabajo es positivo, negativo o nulo?</li>
    <li>Definí energía cinética.</li>
    <li>Explicá la diferencia entre energía y potencia.</li>
    <li>¿Qué significa que una fuerza sea conservativa?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Cálculos directos</strong>
  </div>
  <ol>
    <li>Una fuerza de 40 N desplaza una caja 6 m en su misma dirección. Calculá W.</li>
    <li>Una fuerza de 100 N forma 60° con un desplazamiento de 4 m. Calculá W.</li>
    <li>Calculá K para una masa de 3 kg que se mueve a 8 m/s.</li>
    <li>Una máquina realiza 9000 J en 30 s. Calculá su potencia media.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Energías potenciales</strong>
  </div>
  <ol>
    <li>Una masa de 5 kg sube 8 m. Usando g = 10 m/s², calculá ΔU_g.</li>
    <li>Calculá el trabajo de la gravedad en ese desplazamiento.</li>
    <li>Un resorte de k = 400 N/m se comprime 0,15 m. Calculá U_el.</li>
    <li>Explicá por qué elegir otro cero de U_g no cambia una predicción física basada en ΔU.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Conservación y rozamiento</strong>
  </div>
  <ol>
    <li>Un cuerpo parte del reposo desde 45 m de altura y cae sin aire. Calculá su rapidez al llegar usando energía y g = 10 m/s².</li>
    <li>Un bloque de 2 kg parte a 10 m/s y el rozamiento realiza −36 J. Calculá su rapidez final.</li>
    <li>Un carrito pasa de 12 m a 3 m de altura sin rozamiento y parte a 4 m/s. Calculá su rapidez final.</li>
    <li>Construí un diagrama energético cualitativo para un péndulo ideal desde un extremo hasta el punto más bajo.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Derivá el teorema trabajo-energía para fuerza neta constante usando MRUV.</li>
    <li>Mostrá cómo obtener `h_max = v₀²/(2g)` mediante conservación de energía.</li>
    <li>Explicá por qué el trabajo de una fuerza conservativa sobre un camino cerrado es cero.</li>
    <li>Analizá cómo cambia el balance energético si ampliamos el sistema para incluir una superficie que se calienta por rozamiento.</li>
  </ol>
</div>

---

## 72. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Qué trabajo realiza una fuerza perpendicular al desplazamiento?</summary>
  <div class="lesson-quiz__answer">
    Cero, porque el producto escalar contiene cos 90° = 0.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Qué establece el teorema trabajo-energía?</summary>
  <div class="lesson-quiz__answer">
    Que el trabajo neto sobre un cuerpo es igual al cambio de su energía cinética: W_neto = ΔK.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Puede una energía potencial gravitatoria ser negativa?</summary>
  <div class="lesson-quiz__answer">
    Sí. Su valor depende del nivel de referencia elegido; las diferencias de energía potencial son las físicamente relevantes.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Cuándo se conserva la energía mecánica?</summary>
  <div class="lesson-quiz__answer">
    Cuando, en el modelo considerado, sólo intervienen fuerzas conservativas en el balance mecánico o el trabajo no conservativo neto es cero.
  </div>
</details>

<details class="lesson-quiz">
  <summary>5. ¿Qué ocurre con la energía cuando existe rozamiento?</summary>
  <div class="lesson-quiz__answer">
    La energía mecánica puede disminuir y transformarse en energía interna u otras formas; la energía total se conserva en un sistema suficientemente amplio.
  </div>
</details>

<details class="lesson-quiz">
  <summary>6. ¿Qué mide la potencia?</summary>
  <div class="lesson-quiz__answer">
    La rapidez con que se realiza trabajo o se transfiere energía.
  </div>
</details>

---

## 73. Resumen

- El trabajo de una fuerza constante es `W = FΔr cosθ`.
- El trabajo es un producto escalar y por lo tanto una magnitud escalar.
- Puede ser positivo, negativo o nulo.
- La unidad de trabajo y energía es el joule.
- La energía cinética es `K = ½mv²`.
- El trabajo neto cumple `W_neto = ΔK`.
- Cerca de la Tierra, `U_g = mgh` respecto de un nivel elegido.
- Para un resorte ideal, `U_el = ½kx²`.
- Para una fuerza conservativa, `W_c = −ΔU`.
- La energía mecánica es la suma de energía cinética y potencial relevante.
- Si sólo actúan fuerzas conservativas en el balance mecánico, `E_m` se conserva.
- Con rozamiento puede disminuir la energía mecánica y aumentar la energía interna.
- La energía total no desaparece.
- La potencia media es `P = W/Δt`.
- En casos apropiados, la potencia instantánea es `P = F·v`.
- El rendimiento compara energía o potencia útil con la entrada.
- Los diagramas energéticos ayudan a visualizar transformaciones y transferencias.
- El enfoque energético complementa, pero no reemplaza, la dinámica y la cinemática.

---

## 74. Siguiente tema recomendado

**F-12 — Cantidad de movimiento e impulso**

En la próxima lección vamos a introducir otra magnitud de conservación especialmente poderosa para analizar:

- interacciones breves;
- golpes;
- choques;
- sistemas aislados.

Trabajaremos con:

- momento lineal;
- impulso;
- teorema impulso-cantidad de movimiento;
- conservación del momento;
- choques elásticos e inelásticos;
- sistemas de varios cuerpos.
