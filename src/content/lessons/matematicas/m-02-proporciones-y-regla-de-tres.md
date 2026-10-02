---
title: "Proporciones y regla de tres"
description: "Cómo reconocer proporcionalidad directa e inversa, trabajar con razones, tasas y escalas, y usar la regla de tres sólo cuando el modelo proporcional realmente corresponde."
slug: "proporciones-y-regla-de-tres"

course: "matematicas"
module: "proporcionalidad"
order: 2

level: "basico"
cycle: "ambos"

yearsApprox: [1, 2, 3, 4, 5, 6]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - operaciones-enteros-fracciones-decimales

skills:
  - razon
  - proporcion
  - tasa
  - proporcionalidad-directa
  - proporcionalidad-inversa
  - constante-de-proporcionalidad
  - regla-de-tres
  - escalas
  - conversiones-proporcionales
  - lectura-de-graficos-proporcionales

hasExercises: true
hasQuiz: true
hasExperiment: false

deepening: false
status: "complete"
---

## La regla de tres no es una receta universal

Si un automóvil mantiene rapidez constante, duplicar el tiempo hace que recorra:

- el doble de distancia.

Pero si dejamos caer un objeto ideal desde el reposo, duplicar el tiempo no hace que recorra:

- simplemente el doble de distancia.

En el primer caso hay proporcionalidad directa:

<div class="formula-panel">
  <span class="formula-panel__label">Movimiento uniforme</span>
  <div class="formula-panel__formula">d = vt</div>
</div>

con v constante.

En caída libre desde reposo:

<div class="formula-panel">
  <span class="formula-panel__label">Caída ideal</span>
  <div class="formula-panel__formula">d = ½gt²</div>
</div>

La dependencia es con:

- t²;
- no con t.

Por eso la pregunta correcta no es:

> “¿cómo hago la regla de tres?”

sino:

> **¿estas magnitudes son realmente proporcionales?**

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>La regla de tres funciona cuando ya sabemos que existe una relación proporcional. Primero se identifica el modelo; después se calcula.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar este repaso deberías poder:

- definir razón;
- definir proporción;
- interpretar una tasa;
- reconocer proporcionalidad directa;
- hallar una constante de proporcionalidad;
- reconocer proporcionalidad inversa;
- distinguir relaciones proporcionales de no proporcionales;
- usar regla de tres directa;
- usar una estrategia equivalente para proporcionalidad inversa;
- interpretar gráficos proporcionales;
- trabajar con escalas;
- usar factores de conversión;
- analizar unidades;
- evitar la regla de tres cuando el modelo no corresponde.

---

## 1. Razón

Una **razón** compara dos cantidades mediante una división:

<div class="formula-panel">
  <span class="formula-panel__label">Razón</span>
  <div class="formula-panel__formula">a/b</div>
</div>

Ejemplo:

- 120 km recorridos;
- en 2 h.

Razón:

**120 km / 2 h = 60 km/h**

---

## 2. Una razón puede tener unidades

Si dividimos magnitudes diferentes, la razón puede tener unidad.

Ejemplos:

- km/h;
- kg/m³;
- J/s;
- mol/L.

Estas razones aparecen constantemente en Física y Química.

---

## 3. Tasa

Una **tasa** es una razón que expresa una cantidad por unidad de otra.

Ejemplos:

- velocidad: metros por segundo;
- densidad: kilogramos por metro cúbico;
- potencia: joules por segundo.

La palabra “por” suele sugerir:

- división.

---

## 4. Proporción

Una **proporción** es una igualdad entre dos razones:

<div class="formula-panel">
  <span class="formula-panel__label">Proporción</span>
  <div class="formula-panel__formula">a/b = c/d</div>
</div>

con denominadores no nulos.

---

## 5. Producto cruzado

Si:

**a/b = c/d**

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Producto cruzado</span>
  <div class="formula-panel__formula">ad = bc</div>
</div>

Esto no es magia.

Se obtiene multiplicando ambos lados por:

**bd**

---

## 6. Proporcionalidad directa

Dos magnitudes x e y son directamente proporcionales si:

<div class="formula-panel">
  <span class="formula-panel__label">Directa</span>
  <div class="formula-panel__formula">y = kx</div>
</div>

donde k es constante.

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Constante</span>
  <div class="formula-panel__formula">y/x = k</div>
</div>

---

## 7. Qué significa “directamente proporcional”

Si y es directamente proporcional a x:

- duplicar x → duplica y;
- triplicar x → triplica y;
- reducir x a la mitad → reduce y a la mitad.

Siempre que:

- k permanezca constante;
- el modelo siga siendo válido.

---

## 8. Ejemplo: distancia y tiempo

Para rapidez constante:

**v = 5 m/s**

tenemos:

<div class="formula-panel">
  <span class="formula-panel__label">Relación</span>
  <div class="formula-panel__formula">d = 5t</div>
</div>

| t (s) | d (m) |
| ---: | ---: |
| 1 | 5 |
| 2 | 10 |
| 3 | 15 |
| 4 | 20 |

La razón:

**d/t = 5 m/s**

permanece constante.

---

## 9. Gráfico de proporcionalidad directa

Una relación:

**y = kx**

produce una recta que pasa por:

- el origen.

```text
y
│        /
│      /
│    /
│  /
│/
└────────── x
```

La pendiente está relacionada con:

**k**

---

## 10. Recta no siempre significa proporcionalidad directa

Una función:

<div class="formula-panel">
  <span class="formula-panel__label">Función afín</span>
  <div class="formula-panel__formula">y = kx + b</div>
</div>

con:

**b ≠ 0**

es una recta, pero no es proporcionalidad directa.

Porque si x = 0:

- y = b;
- no y = 0.

---

## 11. Ejemplo de relación lineal no proporcional

Temperatura Fahrenheit y Celsius:

<div class="formula-panel">
  <span class="formula-panel__label">Escalas térmicas</span>
  <div class="formula-panel__formula">F = (9/5)C + 32</div>
</div>

No podemos usar una regla de tres directa como si:

**F/C**

fuera constante.

---

## 12. Regla de tres directa

Si sabemos que dos magnitudes son directamente proporcionales:

| x | y |
| ---: | ---: |
| x<sub>1</sub> | y<sub>1</sub> |
| x<sub>2</sub> | ? |

podemos escribir:

<div class="formula-panel">
  <span class="formula-panel__label">Proporción</span>
  <div class="formula-panel__formula">y<sub>1</sub>/x<sub>1</sub> = y<sub>2</sub>/x<sub>2</sub></div>
</div>

---

## 13. Ejemplo de regla de tres directa

Si 3 kg de material ocupan 2 L y la relación se mantiene:

¿qué masa correspondería a 5 L?

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Proporción directa</h3>
  <div class="worked-example-card__steps">
    <p>3 kg / 2 L = m / 5 L</p>
    <p>m = 3×5/2 kg</p>
    <p><strong>m = 7,5 kg</strong></p>
  </div>
</div>

---

## 14. Mejor todavía: usar la constante

En el ejemplo:

<div class="formula-panel">
  <span class="formula-panel__label">Constante</span>
  <div class="formula-panel__formula">k = 3 kg / 2 L = 1,5 kg/L</div>
</div>

Entonces:

**m = kV**

**m = 1,5 kg/L × 5 L = 7,5 kg**

Esta forma hace más visible:

- el significado físico;
- las unidades.

---

## 15. Proporcionalidad inversa

Dos magnitudes son inversamente proporcionales si:

<div class="formula-panel">
  <span class="formula-panel__label">Inversa</span>
  <div class="formula-panel__formula">y = k/x</div>
</div>

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Producto constante</span>
  <div class="formula-panel__formula">xy = k</div>
</div>

---

## 16. Qué significa “inversamente proporcional”

Si y ∝ 1/x:

- duplicar x → y se reduce a la mitad;
- triplicar x → y pasa a un tercio;
- reducir x a la mitad → y se duplica.

Siempre dentro del modelo correspondiente.

---

## 17. Ejemplo: tiempo y rapidez para distancia fija

Para una distancia fija:

**d = 120 km**

tenemos:

<div class="formula-panel">
  <span class="formula-panel__label">Tiempo</span>
  <div class="formula-panel__formula">t = d/v = 120/v</div>
</div>

| v (km/h) | t (h) |
| ---: | ---: |
| 30 | 4 |
| 60 | 2 |
| 120 | 1 |

El producto:

**vt = 120 km**

permanece constante.

---

## 18. Gráfico de proporcionalidad inversa

Una relación:

**y = k/x**

produce una curva:

```text
y
│\
│ \
│  \
│   \__
│      \____
└──────────── x
```

No es:

- una recta.

---

## 19. “Más x, menos y” no basta para ser inversa

Puede ocurrir que al aumentar x disminuya y sin que:

**xy**

sea constante.

Para afirmar proporcionalidad inversa debemos comprobar:

<div class="formula-panel">
  <span class="formula-panel__label">Criterio</span>
  <div class="formula-panel__formula">xy = constante</div>
</div>

---

## 20. Ejemplo que no es proporcional

En caída libre desde reposo:

**d = ½gt²**

Si duplicamos t:

<div class="formula-panel">
  <span class="formula-panel__label">Escala cuadrática</span>
  <div class="formula-panel__formula">d(2t) = 4d(t)</div>
</div>

No es proporcionalidad directa entre:

- d;
- t.

Sí existe proporcionalidad directa entre:

- d;
- t²;

si g es constante.

---

## 21. Otra relación no proporcional

La energía cinética:

<div class="formula-panel">
  <span class="formula-panel__label">Energía cinética</span>
  <div class="formula-panel__formula">K = ½mv²</div>
</div>

para masa fija es proporcional a:

- v²;

no a v.

Duplicar v produce:

- cuatro veces K.

---

## 22. Identificar primero la fórmula

En Física, antes de una regla de tres conviene preguntar:

1. ¿qué relación une las variables?;
2. ¿qué se mantiene constante?;
3. ¿la variable aparece a la primera potencia?;
4. ¿está en denominador?;
5. ¿está al cuadrado?;
6. ¿hay un término adicional?

Eso evita usar proporcionalidad donde:

- no existe.

---

## 23. Escalas

Una escala compara:

- tamaño representado;
- tamaño real.

Ejemplo:

**1 : 100**

significa:

- 1 unidad en el dibujo;
- 100 unidades reales.

Las unidades deben ser:

- equivalentes antes de comparar.

---

## 24. Ejemplo de escala

En un plano:

**1 cm → 2 m**

Si una pared mide:

**4,5 cm**

en el plano:

<div class="formula-panel">
  <span class="formula-panel__label">Escala</span>
  <div class="formula-panel__formula">4,5 × 2 m = 9 m</div>
</div>

---

## 25. Factores de conversión

Una igualdad física permite formar factores equivalentes a 1.

Sabemos:

**1 km = 1000 m**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Factores</span>
  <div class="formula-panel__formula">1000 m / 1 km = 1</div>
</div>

y:

<div class="formula-panel">
  <span class="formula-panel__label">Factores</span>
  <div class="formula-panel__formula">1 km / 1000 m = 1</div>
</div>

---

## 26. Conversión mediante factores

Convertimos:

**72 km/h**

a m/s:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Conversión proporcional</h3>
  <div class="worked-example-card__steps">
    <p>72 km/h × (1000 m / 1 km) × (1 h / 3600 s)</p>
    <p>Las unidades km y h se cancelan.</p>
    <p><strong>72 km/h = 20 m/s</strong></p>
  </div>
</div>

---

## 27. Las unidades orientan el factor

Si queremos eliminar:

**km**

colocamos km en el lado opuesto del factor para que:

- se cancele.

El análisis de unidades ayuda a decidir:

- qué multiplicar;
- qué dividir.

---

## 28. Escalamiento

Supongamos una esfera de radio r.

Su volumen es:

<div class="formula-panel">
  <span class="formula-panel__label">Esfera</span>
  <div class="formula-panel__formula">V = 4πr³/3</div>
</div>

Si duplicamos r:

- el volumen se multiplica por 8.

Esto no es proporcionalidad directa con r.

Es una relación:

- cúbica.

---

## 29. Densidad como razón

La densidad es:

<div class="formula-panel">
  <span class="formula-panel__label">Densidad</span>
  <div class="formula-panel__formula">ρ = m/V</div>
</div>

Si ρ es constante:

<div class="formula-panel">
  <span class="formula-panel__label">Masa</span>
  <div class="formula-panel__formula">m = ρV</div>
</div>

Entonces masa y volumen sí son:

- directamente proporcionales.

---

## 30. Potencia como tasa

<div class="formula-panel">
  <span class="formula-panel__label">Potencia media</span>
  <div class="formula-panel__formula">P = E/t</div>
</div>

Si P es constante:

**E = Pt**

Por lo tanto:

- energía transferida;
- tiempo;

son directamente proporcionales.

---

## 31. Pendiente y proporcionalidad

En una gráfica y contra x de una proporcionalidad directa:

<div class="formula-panel">
  <span class="formula-panel__label">Pendiente</span>
  <div class="formula-panel__formula">k = Δy/Δx</div>
</div>

y la recta pasa por:

- origen.

Esto conecta con:

- M-09;
- M-11;
- M-12.

---

## 32. Unidades de la constante k

En:

**y = kx**

las unidades de k son:

<div class="formula-panel">
  <span class="formula-panel__label">Dimensión</span>
  <div class="formula-panel__formula">[k] = [y]/[x]</div>
</div>

Ejemplo:

**d = vt**

Entonces:

- [d] = m;
- [t] = s;
- [v] = m/s.

---

## 33. Regla de tres inversa

Si x e y son inversamente proporcionales:

<div class="formula-panel">
  <span class="formula-panel__label">Inversa</span>
  <div class="formula-panel__formula">x<sub>1</sub>y<sub>1</sub> = x<sub>2</sub>y<sub>2</sub></div>
</div>

No debemos usar la misma disposición que en una directa sin pensar.

---

## 34. Ejemplo inverso

Un trayecto se realiza en:

- 4 h a 60 km/h.

Para la misma distancia, ¿cuánto tarda a 80 km/h?

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Proporcionalidad inversa</h3>
  <div class="worked-example-card__steps">
    <p>60×4 = 80×t</p>
    <p>t = 240/80 h</p>
    <p><strong>t = 3 h</strong></p>
  </div>
</div>

---

## 35. Chequeo cualitativo

Aumentó la rapidez:

- 60 → 80 km/h.

Para igual distancia, el tiempo debe:

- disminuir.

El resultado 3 h es coherente.

Si hubiéramos obtenido:

- 5,3 h;

deberíamos sospechar un error.

---

## 36. Proporcionalidad compuesta

A veces una magnitud depende de varias variables.

Ejemplo:

<div class="formula-panel">
  <span class="formula-panel__label">Gravitación</span>
  <div class="formula-panel__formula">F = Gm<sub>1</sub>m<sub>2</sub>/r²</div>
</div>

Entonces:

- F ∝ m<sub>1</sub>;
- F ∝ m<sub>2</sub>;
- F ∝ 1/r².

No es simplemente:

- inversa con r.

Es inversa con:

- r².

---

## 37. Cómo leer “proporcional a”

La notación:

<div class="formula-panel">
  <span class="formula-panel__label">Símbolo</span>
  <div class="formula-panel__formula">y ∝ x</div>
</div>

significa que existe una constante k tal que:

**y = kx**

Mientras que:

**y ∝ 1/x²**

significa:

**y = k/x²**

---

## 38. Errores frecuentes

### “Si hay cuatro números, hago regla de tres”

No.

### “Toda recta representa proporcionalidad directa”

No; debe pasar por el origen.

### “Si una magnitud aumenta y la otra disminuye, son inversamente proporcionales”

No necesariamente.

### “Directa significa sumar siempre la misma cantidad”

No. Significa multiplicar por el mismo factor.

### “En una conversión puedo multiplicar por cualquier factor equivalente”

Debe orientarse para cancelar correctamente unidades.

### “Duplicar una variable siempre duplica el resultado”

Sólo si la dependencia es lineal proporcional respecto de esa variable.

---

## 39. Ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Reconocimiento</strong>
  </div>
  <ol>
    <li>Decidí si y = 3x es proporcionalidad directa.</li>
    <li>Decidí si y = 3x + 2 es proporcionalidad directa.</li>
    <li>Decidí si y = 12/x es proporcionalidad inversa.</li>
    <li>Identificá la constante en y = 7x.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Aplicación directa</strong>
  </div>
  <ol>
    <li>Si 5 m cuestan 20 unidades monetarias a precio constante, ¿cuánto cuestan 8 m?</li>
    <li>Convertí 90 km/h a m/s.</li>
    <li>Si d = 4t, calculá d para t = 7 s.</li>
    <li>Si xy = 36 y x = 9, hallá y.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Integración</strong>
  </div>
  <ol>
    <li>Para distancia fija, un viaje tarda 6 h a 50 km/h. Hallá el tiempo a 75 km/h.</li>
    <li>Un material tiene densidad constante 2,7 g/cm³. ¿Qué masa tienen 15 cm³?</li>
    <li>Una fuerza es proporcional a 1/r². Si r se duplica, ¿por qué factor cambia la fuerza?</li>
    <li>Una energía es proporcional a v². Si v se triplica, ¿por qué factor cambia?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Modelo</strong>
  </div>
  <ol>
    <li>Construí una tabla para y = 5x y verificá que y/x sea constante.</li>
    <li>Construí una tabla para y = 20/x y verificá que xy sea constante.</li>
    <li>Mostrá con una tabla por qué y = x² no es proporcionalidad directa con x.</li>
    <li>Explicá dimensionalmente por qué en d = vt la constante de proporcionalidad tiene unidad m/s.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Demostrá que si y = kx, entonces multiplicar x por un factor a multiplica y por el mismo factor.</li>
    <li>Demostrá que si y = k/x, multiplicar x por a divide y por a.</li>
    <li>Diseñá un ejemplo donde una regla de tres produzca una respuesta numérica plausible pero físicamente incorrecta porque la relación real es cuadrática.</li>
  </ol>
</div>

---

## 40. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Qué condición caracteriza a una proporcionalidad directa?</summary>
  <div class="lesson-quiz__answer">
    Puede escribirse y = kx con k constante; por lo tanto y/x permanece constante y la gráfica es una recta que pasa por el origen.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Qué condición caracteriza a una proporcionalidad inversa?</summary>
  <div class="lesson-quiz__answer">
    Puede escribirse y = k/x, por lo que el producto xy permanece constante.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Por qué y = 2x + 5 no es proporcionalidad directa?</summary>
  <div class="lesson-quiz__answer">
    Porque cuando x = 0, y = 5; la recta no pasa por el origen y la razón y/x no permanece constante.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Cuándo es válida una regla de tres?</summary>
  <div class="lesson-quiz__answer">
    Cuando primero se ha establecido que las magnitudes se relacionan proporcionalmente de la manera correspondiente.
  </div>
</details>

---

## 41. Resumen

- Una razón es una división entre cantidades.
- Una tasa expresa una cantidad por unidad de otra.
- Una proporción es una igualdad entre razones.
- En proporcionalidad directa, y = kx y y/x es constante.
- Su gráfica es una recta que pasa por el origen.
- Una recta con término independiente distinto de cero no es proporcionalidad directa.
- En proporcionalidad inversa, y = k/x y xy es constante.
- Regla de tres es una consecuencia de una relación proporcional, no una receta universal.
- Las unidades ayudan a identificar la constante de proporcionalidad.
- Los factores de conversión son razones equivalentes a 1.
- Relaciones cuadráticas, cúbicas o con términos adicionales no deben tratarse como proporcionalidad directa simple.
- En Física primero se identifica la relación; después se calcula.

---

## 42. Siguiente tema recomendado

**M-03 — Porcentajes**

Los porcentajes son otra forma de expresar una proporción.

Los usaremos para:

- variaciones;
- rendimiento;
- errores relativos;
- concentraciones;
- comparaciones.
