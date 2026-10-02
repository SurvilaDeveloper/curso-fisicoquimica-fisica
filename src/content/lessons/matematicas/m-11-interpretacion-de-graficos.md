---
title: "Interpretación de gráficos"
description: "Cómo leer ejes, escalas, unidades, tendencias, máximos, mínimos, pendientes y áreas en gráficos, y cómo distinguir claramente valor, pendiente y área en contextos físicos."
slug: "interpretacion-de-graficos"

course: "matematicas"
module: "funciones-y-graficos"
order: 11

level: "basico"
cycle: "ambos"

yearsApprox: [2, 3, 4, 5, 6]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - funcion-lineal

skills:
  - lectura-de-ejes
  - escala
  - unidades
  - variable-independiente
  - variable-dependiente
  - valor-de-una-funcion
  - tendencia
  - maximo
  - minimo
  - pendiente
  - area-bajo-la-curva
  - interpolacion
  - extrapolacion
  - graficos-cinematicos
  - deteccion-de-graficos-enganosos

hasExercises: true
hasQuiz: true
hasExperiment: false

deepening: false
status: "complete"
---

## La misma curva puede decir cosas completamente distintas según los ejes

Imaginemos una recta creciente.

Si el eje vertical representa:

- posición;

su pendiente puede significar:

- velocidad.

Si representa:

- velocidad;

su pendiente puede significar:

- aceleración.

Si representa:

- voltaje;

y el eje horizontal corriente, la pendiente puede representar:

- resistencia.

Por eso un gráfico no se interpreta mirando sólo su forma.

Hay que preguntar:

> **¿qué representa cada eje, qué unidades tiene y qué operación física estamos leyendo?**

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>En un gráfico hay que distinguir tres cosas diferentes: la altura de la curva da el valor de la variable vertical; la pendiente describe una razón de cambio; el área bajo la curva representa una acumulación cuya interpretación depende de las variables de los ejes.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar este repaso deberías poder:

- identificar ejes y variables;
- leer unidades;
- reconocer escalas uniformes;
- leer coordenadas;
- interpolar;
- detectar extrapolación;
- reconocer crecimiento y decrecimiento;
- identificar máximos y mínimos;
- distinguir valor de la función y pendiente;
- distinguir pendiente y área;
- interpretar gráficos posición-tiempo;
- interpretar gráficos velocidad-tiempo;
- interpretar gráficos aceleración-tiempo;
- reconocer discontinuidades y cambios de régimen;
- identificar representaciones engañosas;
- decidir qué información puede y no puede obtenerse de un gráfico.

---

## 1. Antes de mirar la curva

Leé primero:

1. título;
2. eje horizontal;
3. eje vertical;
4. unidades;
5. escala;
6. leyenda;
7. rango mostrado.

Recién después interpretá:

- la forma.

---

## 2. Eje horizontal

Suele representar la variable independiente.

Ejemplos:

- tiempo;
- posición;
- temperatura;
- corriente.

Pero no es obligatorio que sea:

- tiempo.

---

## 3. Eje vertical

Suele representar la variable dependiente.

Ejemplos:

- posición;
- velocidad;
- energía;
- fuerza;
- voltaje.

---

## 4. Coordenadas de un punto

Un punto:

**(x,y)**

indica:

- valor x en el eje horizontal;
- valor y en el vertical.

No se leen al revés.

---

## 5. Unidades

Si el gráfico muestra:

- tiempo en s;
- posición en m;

entonces un punto:

**(3,12)**

significa:

- t = 3 s;
- x = 12 m.

---

## 6. Escala

No siempre una división gráfica representa:

- 1 unidad.

Puede representar:

- 0,1;
- 5;
- 100;
- 10³.

Leer mal la escala puede producir errores de:

- factores grandes.

---

## 7. Escala uniforme

En un eje lineal uniforme, iguales distancias gráficas representan:

- iguales incrementos numéricos.

Ejemplo:

```text
0   10   20   30   40
|----|----|----|----|
```

---

## 8. Ejes que no empiezan en cero

Un gráfico puede mostrar sólo:

- 90 a 100.

Eso puede ser válido.

Pero visualmente puede exagerar:

- pequeñas diferencias.

Hay que leer números, no sólo la apariencia.

---

## 9. Gráfico recortado

Si dos valores son:

- 98;
- 100;

un eje vertical desde 0 muestra diferencia pequeña.

Un eje desde 97 puede hacerla parecer:

- enorme.

No necesariamente es fraude.

Pero requiere:

- interpretación cuidadosa.

---

## 10. Escala logarítmica — anticipo

Algunos gráficos científicos usan escalas donde iguales distancias representan:

- factores;
- no sumas constantes.

Eso se estudiará con más detalle en:

[M-17 — Logaritmos](/matematicas/logaritmos).

Siempre debe indicarse.

---

## 11. Valor de la curva

La altura de la curva en un x dado representa:

**y(x)**

Ejemplo:

si en t=4 s una gráfica de velocidad muestra:

**v=10 m/s**

ese valor es:

- velocidad;
- no aceleración.

---

## 12. Pendiente

La pendiente describe:

<div class="formula-panel">
  <span class="formula-panel__label">Razón de cambio</span>
  <div class="formula-panel__formula">pendiente = Δy/Δx</div>
</div>

No es igual al:

- valor y.

---

## 13. Ejemplo: altura y pendiente diferentes

Una recta puede estar a:

**y = 100**

y tener pendiente:

**0**

si es horizontal.

Entonces:

- valor grande;
- tasa de cambio nula.

---

## 14. Otro ejemplo

Una curva puede pasar por:

**y = 0**

con pendiente:

- muy grande.

Entonces el valor es cero pero la tasa de cambio:

- no.

---

## 15. Área bajo una curva

El área entre una curva y el eje horizontal representa una acumulación.

Su significado depende de:

- eje vertical;
- eje horizontal.

No es automáticamente:

- distancia;
- energía;
- trabajo.

---

## 16. Unidades del área

Si vertical tiene unidad:

**m/s**

y horizontal:

**s**

entonces el área tiene:

<div class="formula-panel">
  <span class="formula-panel__label">Unidades</span>
  <div class="formula-panel__formula">(m/s)·s = m</div>
</div>

Eso sugiere que en v(t) el área puede representar:

- desplazamiento.

---

## 17. Altura, pendiente y área son tres preguntas distintas

Ante un gráfico preguntá:

### Altura

¿Qué valor tiene la variable vertical?

### Pendiente

¿Qué tan rápido cambia respecto de la horizontal?

### Área

¿Qué cantidad acumulada producen las unidades multiplicadas?

---

## 18. Crecimiento

Si al aumentar x también aumenta y:

- la función es creciente en ese tramo.

La pendiente suele ser:

- positiva.

---

## 19. Decrecimiento

Si al aumentar x disminuye y:

- la función es decreciente.

La pendiente suele ser:

- negativa.

---

## 20. Tramo constante

Si y no cambia:

- gráfico horizontal;
- pendiente cero.

---

## 21. Máximo local

Un máximo es un punto donde la función es mayor que en puntos cercanos.

No necesariamente es:

- el mayor valor de todo el gráfico.

---

## 22. Mínimo local

Análogamente, un mínimo local es menor que:

- valores cercanos.

Puede existir más de uno.

---

## 23. Máximo global

Es el mayor valor de toda la región considerada.

Depende del:

- dominio mostrado o definido.

---

## 24. Interpolación

Si tenemos datos en:

- x=2;
- x=4;

y estimamos en:

- x=3;

estamos interpolando.

Estamos dentro del rango de datos.

---

## 25. Extrapolación

Si los datos llegan hasta:

- x=10;

y estimamos en:

- x=100;

estamos extrapolando.

El modelo puede dejar de ser válido.

---

## 26. Gráfico posición-tiempo

En un gráfico:

**x vs. t**

la altura representa:

- posición.

La pendiente representa:

<div class="formula-panel">
  <span class="formula-panel__label">Pendiente x-t</span>
  <div class="formula-panel__formula">Δx/Δt = velocidad media</div>
</div>

En el límite local:

- velocidad instantánea.

---

## 27. Posición-tiempo horizontal

Si x(t) es horizontal:

- posición constante;
- velocidad cero.

No significa que:

- posición sea cero.

---

## 28. Posición-tiempo con pendiente positiva

Indica:

- velocidad positiva.

Una pendiente mayor en valor absoluto indica:

- mayor rapidez de cambio de posición.

---

## 29. Posición-tiempo con pendiente negativa

Indica:

- velocidad negativa.

No significa:

- desaceleración necesariamente.

Significa que la posición disminuye con el tiempo.

---

## 30. Curvatura en x(t)

Si la pendiente cambia con el tiempo:

- la velocidad cambia.

Eso indica:

- aceleración distinta de cero.

Una parábola x(t) aparece en MRUV.

---

## 31. Gráfico velocidad-tiempo

En:

**v vs. t**

la altura representa:

- velocidad.

La pendiente representa:

<div class="formula-panel">
  <span class="formula-panel__label">Pendiente v-t</span>
  <div class="formula-panel__formula">Δv/Δt = aceleración media</div>
</div>

---

## 32. Área en velocidad-tiempo

El área algebraica bajo v(t) entre t<sub>1</sub> y t<sub>2</sub> representa:

- desplazamiento.

Si la velocidad es negativa:

- el área correspondiente cuenta con signo negativo.

---

## 33. Distancia no es siempre área algebraica de v(t)

Para hallar distancia recorrida cuando v cambia de signo, necesitamos acumular:

- |v| respecto del tiempo.

Es decir, sumar magnitudes de desplazamientos por tramos.

---

## 34. Ejemplo de área rectangular

Si:

**v = 5 m/s**

durante:

**4 s**

el área es:

<div class="formula-panel">
  <span class="formula-panel__label">Desplazamiento</span>
  <div class="formula-panel__formula">Δx = (5 m/s)(4 s) = 20 m</div>
</div>

---

## 35. Ejemplo triangular

Si v aumenta linealmente de:

- 0;
- a 10 m/s;

en 4 s, el área triangular es:

<div class="formula-panel">
  <span class="formula-panel__label">Área</span>
  <div class="formula-panel__formula">Δx = ½·4 s·10 m/s = 20 m</div>
</div>

---

## 36. Gráfico aceleración-tiempo

En:

**a vs. t**

la altura representa:

- aceleración.

El área algebraica representa:

<div class="formula-panel">
  <span class="formula-panel__label">Cambio de velocidad</span>
  <div class="formula-panel__formula">Δv = área bajo a(t)</div>
</div>

---

## 37. Aceleración cero no significa velocidad cero

Si a(t)=0:

- la velocidad es constante.

Puede ser:

- cero;
- positiva;
- negativa.

No podemos conocerla sólo a partir de:

- a=0;

sin una condición inicial.

---

## 38. Velocidad cero no significa aceleración cero

En el punto más alto de un tiro vertical:

- v=0;
- a=−g.

La altura de v(t) es cero, pero su pendiente:

- sigue siendo negativa.

---

## 39. Cruce del eje

Cuando una gráfica de velocidad cruza:

**v=0**

puede indicar cambio de:

- sentido del movimiento.

No necesariamente un instante de:

- aceleración cero.

---

## 40. Discontinuidad

Una curva puede mostrar un salto idealizado.

Eso puede representar:

- cambio abrupto;
- idealización;
- cambio de estado;
- medición discontinua.

Hay que interpretar el contexto.

---

## 41. Pico estrecho

Un pico alto y estrecho puede tener:

- gran valor instantáneo;
- área pequeña.

Otra razón para no confundir:

- altura;
- área.

---

## 42. Área con signo

En un gráfico con valores por debajo del eje:

- esas áreas se consideran negativas en una integral algebraica.

Esto importa en:

- desplazamiento;
- trabajo;
- cambio de velocidad.

---

## 43. Gráfico fuerza-desplazamiento

En:

**F vs. x**

el área bajo la curva puede representar:

- trabajo;

si F es la componente de fuerza en la dirección del desplazamiento.

Unidad:

**N·m = J**

---

## 44. Gráfico potencia-tiempo

En:

**P vs. t**

el área representa:

- energía transferida.

Unidad:

**W·s = J**

---

## 45. Gráfico corriente-tiempo

En:

**I vs. t**

el área representa:

- carga transferida.

Porque:

<div class="formula-panel">
  <span class="formula-panel__label">Corriente</span>
  <div class="formula-panel__formula">I = ΔQ/Δt</div>
</div>

---

## 46. La unidad ayuda a interpretar el área

Antes de decidir qué significa un área:

1. multiplicá las unidades de los ejes;
2. identificá qué magnitud física resulta.

Eso evita memorizar áreas sin comprender.

---

## 47. Barras de error

En datos experimentales pueden aparecer:

- barras horizontales;
- barras verticales.

Representan algún tipo de:

- incertidumbre;
- dispersión;
- intervalo;

según lo que declare el gráfico.

No deben ignorarse.

---

## 48. Puntos experimentales y línea teórica

Un gráfico puede mostrar:

- datos como puntos;
- modelo como línea.

No significa que los datos deban caer exactamente sobre la línea.

La comparación evalúa:

- compatibilidad;
- tendencia;
- incertidumbre.

---

## 49. Correlación no implica causalidad

Si dos variables cambian juntas en un gráfico, eso no demuestra por sí solo que:

- una cause la otra.

Puede existir:

- causa común;
- variable oculta;
- coincidencia;
- relación indirecta.

---

## 50. Gráfico engañoso por ejes invertidos

Si no miramos etiquetas podemos pensar que una pendiente representa:

- Δy/Δx;

pero si se intercambiaron variables, el significado cambia.

Ejemplo:

- V vs. I → pendiente R;
- I vs. V → pendiente 1/R.

---

## 51. Gráfico engañoso por escala

Dos gráficos de los mismos datos pueden parecer muy distintos si cambian:

- rango;
- escala;
- proporción visual.

La lectura numérica es esencial.

---

## 52. Gráfico sin unidades

Un gráfico científico sin unidades cuando las magnitudes las requieren está:

- incompleto.

No siempre invalida una tendencia cualitativa, pero limita:

- la interpretación cuantitativa.

---

## 53. Estrategia general

Ante un gráfico:

1. leé título;
2. identificá variables;
3. leé unidades;
4. revisá escalas;
5. ubicá puntos importantes;
6. buscá tendencia;
7. distinguí valor, pendiente y área;
8. preguntá si el modelo permite extrapolar.

---

## 54. Errores frecuentes

### “Si la curva está arriba, la pendiente es positiva”

No.

### “Si la velocidad es cero, la aceleración también”

No.

### “Un x(t) horizontal significa x=0”

No.

### “Área bajo cualquier curva significa distancia”

No.

### “Pendiente y altura son la misma información”

No.

### “Una curva descendente en x(t) significa que está frenando”

No necesariamente. Significa velocidad negativa.

### “Todo gráfico debe empezar en cero”

No.

### “Un gráfico visualmente espectacular implica una diferencia grande”

Depende de la escala.

---

## 55. Ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Lectura</strong>
  </div>
  <ol>
    <li>En un gráfico temperatura-tiempo, ¿qué representa la altura?</li>
    <li>¿Qué representa la pendiente?</li>
    <li>¿Qué información necesitás para interpretar cuantitativamente un punto?</li>
    <li>Explicá por qué un eje recortado puede alterar la percepción visual.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Cinemática</strong>
  </div>
  <ol>
    <li>En x(t), interpretá un tramo horizontal.</li>
    <li>En v(t), interpretá un tramo horizontal en v=5 m/s.</li>
    <li>En a(t), interpretá un tramo en a=0.</li>
    <li>Explicá qué representa la pendiente de v(t).</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Áreas</strong>
  </div>
  <ol>
    <li>Una velocidad constante de 8 m/s dura 5 s. Hallá el desplazamiento mediante área.</li>
    <li>Una velocidad crece linealmente de 0 a 12 m/s en 6 s. Hallá el área triangular.</li>
    <li>Una aceleración constante de 2 m/s² dura 4 s. Hallá Δv.</li>
    <li>Explicá qué representa el área de P(t).</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Análisis</strong>
  </div>
  <ol>
    <li>Construí dos gráficos con los mismos datos pero distintos rangos verticales y compará su apariencia.</li>
    <li>Inventá un gráfico donde y sea grande pero la pendiente sea cero.</li>
    <li>Inventá otro donde y=0 pero la pendiente sea distinta de cero.</li>
    <li>Analizá por qué el área de v(t) puede diferir de la distancia recorrida.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Explicá cómo se conectan x(t), v(t) y a(t) mediante pendiente y área.</li>
    <li>Diseñá un gráfico experimental con barras de error y explicá qué información adicional aportan.</li>
    <li>Construí un ejemplo donde extrapolar una tendencia lineal produzca una predicción físicamente absurda.</li>
  </ol>
</div>

---

## 56. Ejemplo integrado

Supongamos el siguiente movimiento:

- de 0 a 4 s: v aumenta linealmente de 0 a 8 m/s;
- de 4 a 7 s: v permanece en 8 m/s.

### Primer tramo

Área triangular:

<div class="formula-panel">
  <span class="formula-panel__label">Desplazamiento 1</span>
  <div class="formula-panel__formula">Δx<sub>1</sub> = ½·4·8 = 16 m</div>
</div>

Pendiente:

<div class="formula-panel">
  <span class="formula-panel__label">Aceleración</span>
  <div class="formula-panel__formula">a = 8/4 = 2 m/s²</div>
</div>

### Segundo tramo

Área rectangular:

<div class="formula-panel">
  <span class="formula-panel__label">Desplazamiento 2</span>
  <div class="formula-panel__formula">Δx<sub>2</sub> = 8·3 = 24 m</div>
</div>

Desplazamiento total:

**40 m**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>Un mismo gráfico contiene valor, pendiente y área</h3>
  <div class="worked-example-card__steps">
    <p>La altura da la velocidad.</p>
    <p>La pendiente del primer tramo da 2 m/s².</p>
    <p>La pendiente del segundo tramo es 0.</p>
    <p>El área total da 40 m de desplazamiento.</p>
    <p><strong>Leer correctamente un gráfico exige saber qué operación responde cada pregunta.</strong></p>
  </div>
</div>

---

## 57. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Qué diferencia hay entre altura y pendiente?</summary>
  <div class="lesson-quiz__answer">
    La altura es el valor de la variable vertical; la pendiente es la razón de cambio de esa variable respecto de la horizontal.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Qué representa el área bajo v(t)?</summary>
  <div class="lesson-quiz__answer">
    El desplazamiento algebraico en el intervalo considerado.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Qué significa a=0?</summary>
  <div class="lesson-quiz__answer">
    Que la velocidad no cambia en ese instante o tramo; no implica necesariamente que la velocidad sea cero.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Por qué no conviene extrapolar sin cuidado?</summary>
  <div class="lesson-quiz__answer">
    Porque el modelo observado dentro de un rango puede dejar de ser válido fuera de ese rango.
  </div>
</details>

---

## 58. Resumen

- Un gráfico debe leerse junto con ejes, unidades y escalas.
- La altura de la curva representa el valor de la variable vertical.
- La pendiente representa una razón de cambio.
- El área representa una acumulación cuya interpretación depende de las unidades.
- Altura, pendiente y área son conceptos diferentes.
- En x(t), la pendiente representa velocidad.
- En v(t), la pendiente representa aceleración.
- En v(t), el área representa desplazamiento.
- En a(t), el área representa cambio de velocidad.
- Velocidad cero no implica aceleración cero.
- Aceleración cero no implica velocidad cero.
- Un eje recortado puede exagerar visualmente diferencias.
- Interpolación ocurre dentro del rango de datos.
- Extrapolación ocurre fuera y exige más cautela.
- Los datos experimentales pueden incluir incertidumbres.
- Correlación gráfica no demuestra causalidad.

---

## 59. Siguiente tema recomendado

**M-12 — Pendiente**

Profundizaremos específicamente en:

- Δy/Δx;
- signo;
- unidades;
- rectas;
- pendiente local;
- velocidad;
- aceleración;
- interpretación experimental.
