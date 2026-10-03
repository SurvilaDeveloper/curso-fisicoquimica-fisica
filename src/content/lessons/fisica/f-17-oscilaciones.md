---
title: "Oscilaciones"
description: "Cómo describir movimientos periódicos y armónicos simples mediante período, frecuencia, amplitud, sistemas masa-resorte, energía, péndulos, resonancia y amortiguamiento."
slug: "oscilaciones"

course: "fisica"
module: "oscilaciones-y-ondas"
order: 17

level: "intermedio"
cycle: "ambos"

yearsApprox: [4, 5, 6]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - gases-y-termodinamica

skills:
  - movimiento-periodico
  - periodo
  - frecuencia
  - amplitud
  - movimiento-armonico-simple
  - sistema-masa-resorte
  - ley-de-hooke
  - energia-en-el-mas
  - pendulo-simple
  - aproximacion-de-pequeno-angulo
  - resonancia
  - amortiguamiento

hasExercises: true
hasQuiz: true
hasExperiment: true

deepening: true
status: "complete"
---

## Un resorte vuelve una y otra vez alrededor del equilibrio

Colgamos una masa de un resorte, la desplazamos ligeramente y la soltamos.

La masa:

- pasa por la posición de equilibrio;
- sigue de largo;
- se frena;
- invierte el movimiento;
- vuelve a pasar por el equilibrio.

El proceso puede repetirse muchas veces.

Algo parecido ocurre con:

- un péndulo;
- una cuerda vibrando;
- una regla flexible;
- ciertas partes de instrumentos musicales;
- estructuras sometidas a vibraciones.

> **Una oscilación es un movimiento repetitivo alrededor de una configuración de equilibrio.**

En algunos casos la oscilación puede describirse mediante un modelo especialmente importante:

**el movimiento armónico simple.**

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Todo movimiento armónico simple es periódico, pero no todo movimiento periódico es armónico simple. El MAS requiere una relación restauradora específica: la aceleración debe ser proporcional al desplazamiento y apuntar hacia el equilibrio.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta lección deberías poder:

- reconocer un movimiento periódico;
- definir período;
- definir frecuencia;
- relacionar período y frecuencia;
- interpretar amplitud;
- distinguir movimiento periódico de movimiento armónico simple;
- describir posición, velocidad y aceleración en el MAS;
- analizar un sistema masa-resorte;
- relacionar ley de Hooke y oscilaciones;
- calcular el período de un sistema masa-resorte ideal;
- interpretar la energía en el MAS;
- comprender el péndulo simple;
- usar la aproximación de pequeño ángulo;
- calcular el período ideal de un péndulo simple;
- comprender conceptualmente la resonancia;
- interpretar el amortiguamiento como profundización.

---

## 1. Movimiento periódico

Un movimiento es **periódico** cuando se repite después de intervalos de tiempo iguales.

Si el sistema vuelve al mismo estado de movimiento después de un tiempo T:

<div class="formula-panel">
  <span class="formula-panel__label">Periodicidad</span>
  <div class="formula-panel__formula">estado(t + T) = estado(t)</div>
</div>

de manera ideal.

Ejemplos aproximados:

- una masa en un resorte;
- un péndulo de pequeña amplitud;
- una rueda girando uniformemente;
- la vibración de una cuerda.

---

## 2. Período

El **período**, T, es el tiempo que tarda el sistema en completar un ciclo.

Unidad SI:

**segundo (s)**

Si una oscilación completa tarda:

**0,50 s**

entonces:

**T = 0,50 s**

---

## 3. Frecuencia

La **frecuencia**, f, indica cuántos ciclos se completan por unidad de tiempo.

<div class="formula-panel">
  <span class="formula-panel__label">Frecuencia</span>
  <div class="formula-panel__formula">f = N/Δt</div>
</div>

Unidad SI:

**hertz (Hz)**

donde:

**1 Hz = 1 ciclo/s = 1 s<sup>−1</sup>**

---

## 4. Relación entre período y frecuencia

Como un ciclo tarda T:

<div class="formula-panel">
  <span class="formula-panel__label">Relación fundamental</span>
  <div class="formula-panel__formula">f = 1/T</div>
</div>

y:

<div class="formula-panel">
  <span class="formula-panel__label">Relación inversa</span>
  <div class="formula-panel__formula">T = 1/f</div>
</div>

Período y frecuencia son inversamente proporcionales.

---

## 5. Ejemplo de período y frecuencia

Un sistema realiza:

**20 oscilaciones**

en:

**10 s**

Entonces:

**f = 20/10 = 2 Hz**

y:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Frecuencia y período</h3>
  <div class="worked-example-card__steps">
    <p>f = 2 Hz</p>
    <p>T = 1/2</p>
    <p><strong>T = 0,50 s</strong></p>
  </div>
</div>

---

## 6. Posición de equilibrio

En muchos sistemas oscilantes existe una posición donde la fuerza neta puede ser cero.

La llamamos:

**posición de equilibrio**

Elegimos frecuentemente:

<div class="formula-panel">
  <span class="formula-panel__label">Origen conveniente</span>
  <div class="formula-panel__formula">x = 0</div>
</div>

en esa posición.

La oscilación ocurre alrededor de ella.

---

## 7. Desplazamiento respecto del equilibrio

La variable:

**x**

indica cuánto se ha separado el sistema de la posición de equilibrio.

### x > 0

Desplazamiento hacia un lado.

### x < 0

Desplazamiento hacia el lado opuesto.

El signo depende de la convención del eje.

---

## 8. Amplitud

La **amplitud**, A, es el máximo módulo del desplazamiento respecto del equilibrio:

<div class="formula-panel">
  <span class="formula-panel__label">Amplitud</span>
  <div class="formula-panel__formula">A = |x|<sub>máx</sub></div>
</div>

Por definición:

**A ≥ 0**

Los extremos de la oscilación son:

- `x = +A`;
- `x = −A`.

---

## 9. Distancia recorrida en un ciclo

Si el movimiento va:

- `+A → 0 → −A → 0 → +A`;

durante un ciclo completo, la distancia recorrida es:

<div class="formula-panel">
  <span class="formula-panel__label">Distancia por ciclo</span>
  <div class="formula-panel__formula">d = 4A</div>
</div>

El desplazamiento neto después de un ciclo completo es:

**0**

porque el sistema vuelve a la posición inicial.

---

## 10. Periódico no significa armónico simple

Un movimiento puede repetirse y no ser un MAS.

Por ejemplo:

- una trayectoria que se repite con cambios bruscos;
- una oscilación no lineal;
- un sistema forzado con forma compleja.

El MAS es un caso particular de movimiento periódico.

Necesitamos una condición dinámica adicional.

---

## 11. Fuerza restauradora

Una **fuerza restauradora** tiende a devolver el sistema hacia el equilibrio.

Si el cuerpo está:

- a la derecha del equilibrio;

la fuerza apunta:

- hacia la izquierda.

Si está:

- a la izquierda;

la fuerza apunta:

- hacia la derecha.

En un MAS ideal, además:

> **el módulo de la fuerza es proporcional al desplazamiento.**

---

## 12. Condición dinámica del MAS

El movimiento armónico simple cumple:

<div class="formula-panel">
  <span class="formula-panel__label">Fuerza restauradora lineal</span>
  <div class="formula-panel__formula">F = −kx</div>
</div>

para un sistema masa-resorte ideal.

Usando:

**F = ma**

obtenemos:

<div class="formula-panel">
  <span class="formula-panel__label">Aceleración en el MAS</span>
  <div class="formula-panel__formula">a = −(k/m)x</div>
</div>

Por lo tanto:

> **a es proporcional a x y apunta en sentido opuesto.**

---

## 13. El signo menos es esencial

En:

**a = −(k/m)x**

el signo menos indica:

- si `x > 0`, entonces `a < 0`;
- si `x < 0`, entonces `a > 0`.

La aceleración siempre apunta hacia:

**x = 0**

en el MAS ideal.

---

## 14. Aceleración en el equilibrio

Cuando:

**x = 0**

tenemos:

<div class="formula-panel">
  <span class="formula-panel__label">En el equilibrio</span>
  <div class="formula-panel__formula">a = 0</div>
</div>

Pero eso no significa que la velocidad sea cero.

De hecho, en un MAS ideal:

> **la rapidez es máxima al pasar por el equilibrio.**

---

## 15. Aceleración en los extremos

En:

**x = ±A**

el módulo de la aceleración es máximo:

<div class="formula-panel">
  <span class="formula-panel__label">Aceleración máxima</span>
  <div class="formula-panel__formula">a<sub>máx</sub> = ω²A</div>
</div>

En esos extremos:

- la velocidad instantánea es cero;
- el sistema invierte el sentido del movimiento.

---

## 16. Velocidad y aceleración no apuntan siempre igual

Durante una oscilación:

- a veces velocidad y aceleración apuntan en el mismo sentido;
- a veces en sentidos opuestos.

Ejemplo:

si el cuerpo se mueve hacia el equilibrio:

- la aceleración también puede apuntar hacia el equilibrio;
- la rapidez aumenta.

Si se aleja del equilibrio:

- la aceleración apunta en sentido contrario a la velocidad;
- la rapidez disminuye.

---

## 17. Descripción matemática del MAS

Una forma de representar la posición es:

<div class="formula-panel">
  <span class="formula-panel__label">Posición en MAS</span>
  <div class="formula-panel__formula">x(t) = A cos(ωt + φ)</div>
</div>

donde:

- A es la amplitud;
- ω es la frecuencia angular;
- φ determina el estado inicial de la oscilación.

La constante φ es un adelanto de la idea de fase que desarrollaremos en ondas.

---

## 18. Frecuencia angular

La frecuencia angular es:

<div class="formula-panel">
  <span class="formula-panel__label">Frecuencia angular</span>
  <div class="formula-panel__formula">ω = 2πf = 2π/T</div>
</div>

Unidad:

**rad/s**

Es la misma relación matemática que apareció en movimiento circular.

---

## 19. MAS y movimiento circular — conexión geométrica

La proyección sobre un diámetro de un punto que realiza movimiento circular uniforme puede describir un MAS.

Esta relación permite entender por qué aparecen:

- seno;
- coseno;
- `2π`;
- frecuencia angular.

No significa que una masa en un resorte esté físicamente girando en círculo.

Es una correspondencia matemática.

---

## 20. Velocidad en el MAS

Derivando la posición:

<div class="formula-panel">
  <span class="formula-panel__label">Velocidad</span>
  <div class="formula-panel__formula">v(t) = −Aω sen(ωt + φ)</div>
</div>

El valor máximo del módulo es:

<div class="formula-panel">
  <span class="formula-panel__label">Rapidez máxima</span>
  <div class="formula-panel__formula">v<sub>máx</sub> = Aω</div>
</div>

y ocurre al pasar por:

**x = 0**

---

## 21. Aceleración en el MAS

Derivando nuevamente:

<div class="formula-panel">
  <span class="formula-panel__label">Aceleración</span>
  <div class="formula-panel__formula">a(t) = −Aω² cos(ωt + φ)</div>
</div>

Como:

**x(t) = A cos(ωt + φ)**

obtenemos:

<div class="formula-panel">
  <span class="formula-panel__label">Relación característica</span>
  <div class="formula-panel__formula">a = −ω²x</div>
</div>

Ésta es la condición cinemática característica del MAS.

---

## 22. Relacionar ω con el resorte

Para masa-resorte:

**a = −(k/m)x**

Para MAS:

**a = −ω²x**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Frecuencia angular natural</span>
  <div class="formula-panel__formula">ω = √(k/m)</div>
</div>

---

## 23. Período del sistema masa-resorte

Como:

**T = 2π/ω**

obtenemos:

<div class="formula-panel">
  <span class="formula-panel__label">Período masa-resorte</span>
  <div class="formula-panel__formula">T = 2π√(m/k)</div>
</div>

Bajo el modelo ideal.

---

## 24. Qué nos dice la fórmula del período

En:

**T = 2π√(m/k)**

### Aumentar m

Aumenta T.

El sistema oscila más lentamente.

### Aumentar k

Disminuye T.

Un resorte más rígido produce oscilaciones más rápidas.

---

## 25. La amplitud no aparece en T

Para un resorte ideal que cumple Hooke:

**T = 2π√(m/k)**

no depende de A.

Eso significa que el período es independiente de la amplitud:

- dentro del régimen lineal del resorte;
- bajo el modelo ideal.

Para deformaciones grandes:

- Hooke puede dejar de ser válido;
- el período puede depender de la amplitud.

---

## 26. Ejemplo de masa-resorte

Datos:

- `m = 1,0 kg`;
- `k = 100 N/m`.

Entonces:

**ω = √(100/1) = 10 rad/s**

y:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Período natural de un resorte</h3>
  <div class="worked-example-card__steps">
    <p>T = 2π/10</p>
    <p><strong>T ≈ 0,628 s</strong></p>
    <p>f ≈ 1,59 Hz</p>
  </div>
</div>

---

## 27. Resorte horizontal ideal

Consideremos:

- masa sobre superficie sin rozamiento;
- resorte ideal;
- equilibrio en `x = 0`.

La energía mecánica es:

<div class="formula-panel">
  <span class="formula-panel__label">Energía total</span>
  <div class="formula-panel__formula">E = K + U<sub>el</sub></div>
</div>

con:

<div class="formula-panel">
  <span class="formula-panel__label">Cinética</span>
  <div class="formula-panel__formula">K = ½mv²</div>
</div>

y:

<div class="formula-panel">
  <span class="formula-panel__label">Potencial elástica</span>
  <div class="formula-panel__formula">U<sub>el</sub> = ½kx²</div>
</div>

---

## 28. Energía total en los extremos

En:

**x = ±A**

la velocidad es:

**v = 0**

Entonces:

**K = 0**

y toda la energía mecánica está en forma elástica:

<div class="formula-panel">
  <span class="formula-panel__label">Extremos</span>
  <div class="formula-panel__formula">E = ½kA²</div>
</div>

---

## 29. Energía en el equilibrio

En:

**x = 0**

tenemos:

**U<sub>el</sub> = 0**

y la rapidez es máxima.

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Equilibrio</span>
  <div class="formula-panel__formula">E = ½mv<sub>máx</sub>²</div>
</div>

Igualando con la energía de los extremos:

**½mv<sub>máx</sub>² = ½kA²**

---

## 30. Recuperar v máxima desde energía

De:

**mv<sub>máx</sub>² = kA²**

obtenemos:

**v<sub>máx</sub> = A√(k/m)**

Como:

**ω = √(k/m)**

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Resultado</span>
  <div class="formula-panel__formula">v<sub>máx</sub> = Aω</div>
</div>

Coincide con el resultado cinemático.

---

## 31. Energía a una posición cualquiera

La energía total ideal es:

**E = ½kA²**

En una posición x:

**U<sub>el</sub> = ½kx²**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Energía cinética</span>
  <div class="formula-panel__formula">K = ½k(A² − x²)</div>
</div>

La energía va transformándose continuamente entre:

- cinética;
- potencial elástica.

---

## 32. Ejemplo energético

Un resorte tiene:

- `k = 200 N/m`;
- `A = 0,10 m`.

Energía total:

**E = ½×200×0,10²**

**E = 1,0 J**

Cuando:

**x = 0,06 m**

tenemos:

**U = ½×200×0,06² = 0,36 J**

Por lo tanto:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Intercambio de energía en el MAS</h3>
  <div class="worked-example-card__steps">
    <p>E = 1,0 J</p>
    <p>U = 0,36 J</p>
    <p><strong>K = 0,64 J</strong></p>
  </div>
</div>

---

## 33. Gráficas x(t), v(t) y a(t)

En un MAS ideal:

- x(t) es sinusoidal;
- v(t) también es sinusoidal;
- a(t) también es sinusoidal.

Pero no alcanzan sus máximos al mismo tiempo.

### Cuando x es máximo

- v = 0;
- |a| es máximo.

### Cuando x = 0

- |v| es máximo;
- a = 0.

---

## 34. Resorte vertical

Si una masa cuelga verticalmente de un resorte:

- la gravedad estira el resorte;
- aparece una nueva posición de equilibrio.

En equilibrio estático:

<div class="formula-panel">
  <span class="formula-panel__label">Equilibrio vertical</span>
  <div class="formula-panel__formula">kx<sub>eq</sub> = mg</div>
</div>

por lo tanto:

<div class="formula-panel">
  <span class="formula-panel__label">Elongación de equilibrio</span>
  <div class="formula-panel__formula">x<sub>eq</sub> = mg/k</div>
</div>

---

## 35. Oscilar alrededor del nuevo equilibrio

Si medimos el desplazamiento y desde la posición de equilibrio vertical:

- la contribución constante de la gravedad queda incorporada en ese equilibrio;
- el movimiento puede describirse nuevamente como MAS ideal.

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Respecto del equilibrio</span>
  <div class="formula-panel__formula">F<sub>neta</sub> = −ky</div>
</div>

y el período sigue siendo:

**T = 2π√(m/k)**

en el modelo ideal.

---

## 36. Péndulo simple

Un **péndulo simple** ideal consiste en:

- una masa puntual;
- suspendida de un hilo sin masa;
- de longitud L;
- que no se estira;
- oscilando bajo gravedad;
- sin rozamiento.

Es un modelo.

Un péndulo real sólo se aproxima a estas condiciones.

---

## 37. Fuerzas sobre el péndulo

Sobre la masa actúan:

- tensión a lo largo del hilo;
- peso hacia abajo.

La componente tangencial del peso es la que tiende a devolver el péndulo al equilibrio.

En forma angular:

<div class="formula-panel">
  <span class="formula-panel__label">Componente restauradora</span>
  <div class="formula-panel__formula">F<sub>t</sub> = −mg sen θ</div>
</div>

---

## 38. El péndulo no es exactamente un MAS para cualquier amplitud

La fuerza restauradora depende de:

**sen θ**

no directamente de θ.

Por eso el péndulo simple exacto:

- es periódico;
- pero no es un MAS exacto para cualquier amplitud.

Necesitamos una aproximación.

---

## 39. Aproximación de pequeño ángulo

Si θ es pequeño y se expresa en radianes:

<div class="formula-panel">
  <span class="formula-panel__label">Pequeño ángulo</span>
  <div class="formula-panel__formula">sen θ ≈ θ</div>
</div>

Entonces:

**F<sub>t</sub> ≈ −mgθ**

y la ecuación se vuelve del tipo armónico simple.

---

## 40. Por qué deben usarse radianes

La aproximación:

**sen θ ≈ θ**

sólo toma esa forma numérica si θ se expresa en:

**radianes**

Por ejemplo:

para ángulos pequeños:

- `0,10 rad`;
- `sen(0,10) ≈ 0,0998`.

No podemos usar directamente:

- `10`;

si queremos decir `10°`.

---

## 41. Período del péndulo simple

Dentro de la aproximación de pequeño ángulo:

<div class="formula-panel">
  <span class="formula-panel__label">Péndulo simple</span>
  <div class="formula-panel__formula">T = 2π√(L/g)</div>
</div>

El período depende de:

- longitud L;
- aceleración gravitatoria g.

---

## 42. El período no depende de la masa

En:

**T = 2π√(L/g)**

no aparece:

- la masa del objeto.

Dentro del modelo ideal:

> dos péndulos de igual longitud, en el mismo campo gravitatorio y con pequeñas amplitudes tienen el mismo período aunque sus masas sean diferentes.

---

## 43. Dependencia con la longitud

Si aumentamos L:

- aumenta T.

Un péndulo más largo oscila:

- más lentamente.

Si multiplicamos L por 4:

<div class="formula-panel">
  <span class="formula-panel__label">Comparación</span>
  <div class="formula-panel__formula">T' = 2T</div>
</div>

porque aparece:

**√L**

---

## 44. Dependencia con g

Si g es mayor:

- T es menor.

El mismo péndulo tendría un período diferente:

- en la Tierra;
- en la Luna;

porque cambia la intensidad del campo gravitatorio.

Esto conecta F-17 con la gravitación estudiada en F-13.

---

## 45. Ejemplo de péndulo

Para:

- `L = 1,0 m`;
- `g = 9,8 m/s²`;

tenemos:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Período de un péndulo de un metro</h3>
  <div class="worked-example-card__steps">
    <p>T = 2π√(1/9,8)</p>
    <p><strong>T ≈ 2,01 s</strong></p>
  </div>
</div>

Es un resultado aproximado válido para oscilaciones pequeñas.

---

## 46. La amplitud del péndulo sí importa fuera del régimen pequeño

La fórmula:

**T = 2π√(L/g)**

es prácticamente independiente de la amplitud sólo cuando:

- el ángulo inicial es pequeño.

Para amplitudes mayores:

- la aproximación `senθ ≈ θ` empeora;
- el período aumenta respecto del valor aproximado.

---

## 47. Energía del péndulo ideal

Sin rozamiento:

- la energía mecánica se conserva.

En los extremos:

- rapidez = 0;
- energía potencial gravitatoria máxima.

En el punto más bajo:

- rapidez máxima;
- energía potencial mínima.

La energía se transforma entre:

- potencial gravitatoria;
- cinética.

---

## 48. Comparación resorte-péndulo

### Masa-resorte ideal

Fuerza restauradora:

**F = −kx**

Es MAS exacto mientras Hooke sea válido.

### Péndulo simple

Fuerza tangencial:

**F<sub>t</sub> = −mg senθ**

Sólo se aproxima al MAS cuando:

**senθ ≈ θ**

---

## 49. Oscilación libre

Una oscilación es **libre** cuando, después de una perturbación inicial, el sistema evoluciona sin una fuerza externa periódica que lo siga impulsando.

Ejemplos ideales:

- masa-resorte soltada;
- péndulo desplazado y liberado.

El sistema tiene una:

**frecuencia natural**

determinada por sus parámetros.

---

## 50. Frecuencia natural masa-resorte

Para el sistema ideal:

<div class="formula-panel">
  <span class="formula-panel__label">Frecuencia natural</span>
  <div class="formula-panel__formula">f<sub>0</sub> = (1/2π)√(k/m)</div>
</div>

Es la frecuencia con la que oscilaría libremente en ausencia de amortiguamiento significativo.

---

## 51. Oscilación forzada

Una oscilación es **forzada** cuando una fuerza externa periódica actúa continuamente sobre el sistema.

Ejemplos:

- empujar periódicamente una hamaca;
- vibración causada por un motor;
- altavoz excitado por una señal eléctrica.

La respuesta depende de:

- frecuencia externa;
- frecuencia natural;
- amortiguamiento.

---

## 52. Resonancia

La **resonancia** ocurre cuando un sistema forzado responde con amplitud especialmente grande al ser excitado cerca de una de sus frecuencias naturales.

No significa simplemente:

- “dos frecuencias son iguales y todo explota”.

La amplitud real depende de:

- fuerza excitadora;
- amortiguamiento;
- tiempo;
- no linealidades;
- límites estructurales.

---

## 53. Ejemplo: hamaca

Si empujamos una hamaca:

- en momentos bien sincronizados con su oscilación;

podemos transferir energía eficazmente en cada ciclo.

La amplitud crece.

Si empujamos con una frecuencia muy diferente:

- la transferencia neta puede ser mucho menos eficiente.

---

## 54. Resonancia y energía

En una oscilación forzada resonante:

- la fuerza externa puede aportar energía de manera coherente ciclo tras ciclo.

Sin amortiguamiento ideal:

- una descripción lineal podría predecir amplitudes crecientes sin límite.

En sistemas reales:

- las pérdidas;
- la no linealidad;

limitan la respuesta.

---

## 55. Resonancia útil

La resonancia puede aprovecharse en:

- instrumentos musicales;
- filtros;
- sensores;
- circuitos;
- sistemas de medición.

No es un fenómeno necesariamente peligroso.

Es una propiedad general de muchos sistemas oscilantes.

---

## 56. Resonancia no deseada

También puede ser importante evitar resonancias en:

- edificios;
- puentes;
- máquinas;
- vehículos;
- estructuras.

Los diseños buscan:

- modificar frecuencias naturales;
- agregar amortiguamiento;
- reducir excitaciones periódicas.

---

## 57. Amortiguamiento — profundización

En un sistema real aparecen mecanismos que retiran energía mecánica de la oscilación:

- rozamiento;
- resistencia del aire;
- deformaciones internas;
- disipación en soportes.

Entonces:

- la amplitud disminuye con el tiempo.

Esto se llama:

**amortiguamiento**

---

## 58. Oscilación amortiguada

En un régimen oscilatorio amortiguado podemos representar aproximadamente:

<div class="formula-panel">
  <span class="formula-panel__label">Forma cualitativa</span>
  <div class="formula-panel__formula">x(t) ≈ A(t) cos(ωt + φ)</div>
</div>

donde:

**A(t)**

disminuye con el tiempo.

La oscilación deja de tener una amplitud constante.

---

## 59. Energía en un sistema amortiguado

Si existe amortiguamiento:

- la energía mecánica disminuye.

La energía no desaparece.

Se transforma, por ejemplo, en:

- energía interna;
- calentamiento;
- sonido.

Esto conecta el tema con la conservación de energía estudiada en F-11.

---

## 60. Amortiguamiento pequeño, crítico y grande — profundización

Según la intensidad del amortiguamiento, un sistema puede:

- seguir oscilando con amplitud decreciente;
- volver al equilibrio sin oscilar en el menor tiempo límite;
- volver al equilibrio lentamente sin oscilar.

Estas situaciones se conocen, respectivamente, como:

- subamortiguada;
- críticamente amortiguada;
- sobreamortiguada.

No necesitamos sus ecuaciones completas en este nivel.

---

## 61. Amortiguadores reales

En vehículos, un buen sistema de suspensión no busca que el auto:

- rebote muchas veces.

El amortiguador disipa energía para que el sistema:

- recupere la estabilidad rápidamente;
- sin oscilaciones excesivas.

Es una aplicación directa de oscilaciones amortiguadas.

---

## 62. Gráfica de un MAS

Una gráfica posición-tiempo ideal podría verse así:

```text
x
│      ╭──╮      ╭──╮
│     ╱    ╲    ╱    ╲
0────╯──────╰──╯──────╰── t
│   ╱          ╲
│  ╰──╮      ╭──╯
```

Características:

- amplitud constante;
- períodos iguales;
- oscilación alrededor de cero.

---

## 63. Gráfica amortiguada

Una oscilación amortiguada puede verse cualitativamente:

```text
x
│      ╭──╮
│     ╱    ╲__    ╭─╮
0────╯────────╲──╯──╰──── t
│              ╲╭╯
```

La envolvente de amplitud:

- disminuye con el tiempo.

---

## 64. Movimiento periódico con equilibrio desplazado

No es obligatorio que el equilibrio físico esté en la coordenada:

**x = 0**

Podemos elegir el origen allí por comodidad.

Por ejemplo, un resorte vertical tiene una posición física de equilibrio desplazada por gravedad.

La coordenada puede redefinirse para simplificar:

- fuerzas;
- ecuaciones.

---

## 65. El período es una propiedad temporal, no una distancia

No confundamos:

### Período T

Tiempo de un ciclo.

### Amplitud A

Máximo desplazamiento respecto del equilibrio.

### Longitud de onda λ

Aparecerá en F-18 y describe periodicidad espacial de una onda.

Son conceptos diferentes.

---

## 66. Oscilador ideal y oscilador real

### Ideal

- fuerza exactamente lineal;
- sin rozamiento;
- parámetros constantes;
- amplitud constante.

### Real

Puede presentar:

- amortiguamiento;
- fuerzas no lineales;
- variación de parámetros;
- excitaciones externas;
- límites mecánicos.

El MAS es un modelo muy poderoso porque muchos sistemas se aproximan a él cerca del equilibrio.

---

## 67. Por qué el MAS aparece tantas veces — profundización

Cerca de un equilibrio estable, muchas fuerzas restauradoras suaves pueden aproximarse como:

<div class="formula-panel">
  <span class="formula-panel__label">Aproximación local</span>
  <div class="formula-panel__formula">F ≈ −kx</div>
</div>

para desplazamientos pequeños.

Por eso el MAS aparece en sistemas muy distintos:

- mecánicos;
- eléctricos;
- moleculares;
- ópticos.

Es uno de los modelos universales de la Física.

---

## 68. Experiencia segura: masa-resorte

### Objetivo

Medir período y estudiar su dependencia con la masa.

### Materiales

- resorte escolar;
- soporte seguro;
- masas pequeñas;
- cronómetro.

### Procedimiento

1. Colgá una masa.
2. Esperá el equilibrio.
3. Desplazá ligeramente.
4. Cronometrá 10 oscilaciones.
5. Calculá `T = Δt/10`.
6. Repetí con otras masas.

### Esperamos

Al aumentar m:

- T aumenta aproximadamente como `√m`.

---

## 69. Por qué medir varios ciclos

Si medimos un único período:

- el error de reacción del cronómetro puede ser importante.

Si medimos 10 o 20 ciclos:

- el tiempo total es mayor;
- dividimos por N;
- reducimos el efecto relativo del error de reacción.

Es una estrategia experimental general.

---

## 70. Experiencia segura: péndulo

### Materiales

- hilo;
- pequeña masa;
- soporte;
- regla;
- cronómetro.

### Procedimiento

1. Medí L desde el punto de suspensión hasta el centro de la masa.
2. Usá una amplitud pequeña.
3. Medí el tiempo de 10 o más oscilaciones.
4. Calculá T.
5. Cambiá L.
6. Compará con `T = 2π√(L/g)`.

### Seguridad

Usar masas livianas y mantener libre la trayectoria.

---

## 71. Probar independencia de la masa

Podemos comparar dos péndulos:

- misma longitud;
- masas diferentes;
- pequeñas amplitudes.

Idealmente deberían tener períodos muy parecidos.

Las diferencias reales pueden deberse a:

- resistencia del aire;
- geometría;
- error de longitud;
- cronometraje.

---

## 72. Probar el límite de pequeño ángulo

Podemos comparar:

- amplitud pequeña;
- amplitud mayor.

Para amplitudes pequeñas:

- el período se aproxima mejor a la fórmula simple.

Al aumentar mucho el ángulo:

- pueden observarse desviaciones.

No hace falta usar amplitudes peligrosamente grandes.

---

## 73. Errores frecuentes

### “Todo movimiento periódico es MAS”

No.

### “En el equilibrio la velocidad es cero”

En un MAS ideal, allí la rapidez es máxima.

### “En los extremos la aceleración es cero”

No. Allí su módulo es máximo.

### “La aceleración siempre se opone a la velocidad”

No. Se opone al desplazamiento respecto del equilibrio.

### “El período del resorte depende de la amplitud”

No dentro del modelo de Hooke ideal.

### “El período del péndulo nunca depende de la amplitud”

La independencia es aproximada para ángulos pequeños.

### “La masa cambia el período del péndulo simple”

No en el modelo ideal de pequeño ángulo.

### “Resonancia significa destrucción”

No. Puede ser útil o problemática según el sistema.

### “El amortiguamiento destruye energía”

No. La energía mecánica se transforma en otras formas.

---

## 74. Problemas y ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Conceptos</strong>
  </div>
  <ol>
    <li>Definí movimiento periódico.</li>
    <li>Definí período, frecuencia y amplitud.</li>
    <li>Explicá por qué no todo movimiento periódico es MAS.</li>
    <li>¿Hacia dónde apunta la aceleración en un MAS?</li>
    <li>¿Dónde son máximas la rapidez y la aceleración?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Período y frecuencia</strong>
  </div>
  <ol>
    <li>Un sistema realiza 15 oscilaciones en 6 s. Calculá f y T.</li>
    <li>Un oscilador tiene T = 0,25 s. Calculá f y ω.</li>
    <li>Si A = 0,08 m y f = 2 Hz, calculá v<sub>máx</sub>.</li>
    <li>Para el mismo sistema, calculá a<sub>máx</sub>.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Masa-resorte</strong>
  </div>
  <ol>
    <li>Calculá T para `m = 0,50 kg` y `k = 200 N/m`.</li>
    <li>¿Qué ocurre con T si la masa se cuadruplica?</li>
    <li>¿Qué ocurre con T si k se cuadruplica?</li>
    <li>Un resorte de `k = 100 N/m` oscila con amplitud 0,20 m. Calculá la energía mecánica.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Péndulo y energía</strong>
  </div>
  <ol>
    <li>Calculá T de un péndulo de 0,50 m con g = 9,8 m/s².</li>
    <li>¿Qué longitud debe tener aproximadamente un péndulo con T = 2 s?</li>
    <li>Explicá por qué la masa no aparece en la fórmula del período ideal.</li>
    <li>Para un resorte ideal, calculá K cuando `x = A/2` como fracción de la energía total.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Derivá `T = 2π√(m/k)` comparando `a = −(k/m)x` con `a = −ω²x`.</li>
    <li>Mostrá mediante energía que v<sub>máx</sub> = Aω para masa-resorte.</li>
    <li>Explicá por qué el péndulo sólo es aproximadamente armónico para pequeños ángulos.</li>
    <li>Analizá cualitativamente cómo el amortiguamiento modifica amplitud, energía y resonancia.</li>
  </ol>
</div>

---

## 75. Ejemplo integrado

Un bloque de:

**m = 0,50 kg**

está unido a un resorte horizontal de:

**k = 200 N/m**

y oscila con amplitud:

**A = 0,10 m**

### Frecuencia angular

<div class="formula-panel">
  <span class="formula-panel__label">Frecuencia angular</span>
  <div class="formula-panel__formula">ω = √(k/m)</div>
</div>

**ω = √(200/0,50)**

**ω = √400 = 20 rad/s**

### Período

**T = 2π/20**

**T ≈ 0,314 s**

### Frecuencia

**f = 1/T**

**f ≈ 3,18 Hz**

### Rapidez máxima

**v<sub>máx</sub> = Aω**

**v<sub>máx</sub> = 0,10×20 = 2,0 m/s**

### Aceleración máxima

**a<sub>máx</sub> = Aω²**

**a<sub>máx</sub> = 0,10×400 = 40 m/s²**

### Energía mecánica

**E = ½kA²**

**E = ½×200×0,10²**

**E = 1,0 J**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>Un oscilador, muchas representaciones</h3>
  <div class="worked-example-card__steps">
    <p>ω = 20 rad/s</p>
    <p>T ≈ 0,314 s</p>
    <p>f ≈ 3,18 Hz</p>
    <p>v<sub>máx</sub> = 2,0 m/s</p>
    <p>a<sub>máx</sub> = 40 m/s²</p>
    <p><strong>E = 1,0 J</strong></p>
  </div>
</div>

Este ejemplo conecta:

- dinámica;
- cinemática;
- periodicidad;
- energía.

---

## 76. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Qué relación existe entre período y frecuencia?</summary>
  <div class="lesson-quiz__answer">
    Son inversos: f = 1/T y T = 1/f.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Qué condición caracteriza al movimiento armónico simple?</summary>
  <div class="lesson-quiz__answer">
    La aceleración es proporcional al desplazamiento respecto del equilibrio y apunta en sentido opuesto: a = −ω²x.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Dónde es máxima la rapidez en un MAS ideal?</summary>
  <div class="lesson-quiz__answer">
    En la posición de equilibrio, x = 0.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿De qué depende el período de un sistema masa-resorte ideal?</summary>
  <div class="lesson-quiz__answer">
    De la masa y la constante elástica: T = 2π√(m/k).
  </div>
</details>

<details class="lesson-quiz">
  <summary>5. ¿Por qué la fórmula simple del péndulo exige amplitud pequeña?</summary>
  <div class="lesson-quiz__answer">
    Porque se obtiene usando la aproximación senθ ≈ θ, válida para ángulos pequeños expresados en radianes.
  </div>
</details>

<details class="lesson-quiz">
  <summary>6. ¿Qué papel cumple el amortiguamiento?</summary>
  <div class="lesson-quiz__answer">
    Disipa energía mecánica y hace que la amplitud de la oscilación disminuya con el tiempo; también limita la respuesta resonante de los sistemas reales.
  </div>
</details>

---

## 77. Resumen

- Un movimiento periódico se repite después de un período T.
- La frecuencia es `f = 1/T`.
- La amplitud es el máximo desplazamiento respecto del equilibrio.
- Todo MAS es periódico, pero no todo movimiento periódico es MAS.
- En el MAS, `a = −ω²x`.
- En un resorte ideal, `F = −kx`.
- Para masa-resorte, `ω = √(k/m)`.
- El período masa-resorte es `T = 2π√(m/k)`.
- En los extremos, `v = 0` y el módulo de a es máximo.
- En el equilibrio, `a = 0` y la rapidez es máxima.
- La energía de un oscilador ideal se transforma entre cinética y potencial.
- Para masa-resorte, `E = ½kA²`.
- Un péndulo simple tiene fuerza restauradora proporcional a `senθ`.
- Sólo para pequeños ángulos podemos usar `senθ ≈ θ`.
- En ese régimen, `T = 2π√(L/g)`.
- El período ideal del péndulo no depende de su masa.
- La resonancia aparece cuando una excitación periódica actúa cerca de una frecuencia natural.
- El amortiguamiento reduce la amplitud y transforma energía mecánica en otras formas.
- Los sistemas reales se apartan del MAS ideal cuando aparecen no linealidades, rozamiento o excitaciones externas.

---

## 78. Siguiente tema recomendado

**F-18 — Ondas**

Las oscilaciones de un punto pueden propagarse por un medio o por campos y formar ondas.

En la próxima lección estudiaremos:

- pulsos;
- ondas;
- transporte de energía;
- ondas mecánicas y electromagnéticas;
- ondas transversales y longitudinales;
- amplitud;
- longitud de onda;
- frecuencia;
- período;
- velocidad de propagación;
- fase;
- superposición;
- reflexión;
- refracción;
- difracción;
- interferencia;
- ondas estacionarias;
- nodos;
- vientres;
- resonancia.
