---
title: "Notación científica"
description: "Cómo escribir, comparar y operar números muy grandes o muy pequeños mediante potencias de diez, órdenes de magnitud y prefijos del Sistema Internacional."
slug: "notacion-cientifica"

course: "matematicas"
module: "aritmetica-y-algebra"
order: 5

level: "basico"
cycle: "ambos"

yearsApprox: [1, 2, 3, 4, 5, 6]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - potencias-y-raices

skills:
  - notacion-cientifica
  - potencias-de-diez
  - exponente-positivo
  - exponente-negativo
  - orden-de-magnitud
  - conversion-decimal-cientifica
  - multiplicacion-cientifica
  - division-cientifica
  - suma-cientifica
  - prefijos-si
  - calculadora-cientifica
  - estimacion-de-escala

hasExercises: true
hasQuiz: true
hasExperiment: false

deepening: false
status: "complete"
---

## La Física necesita escribir desde galaxias hasta electrones

Algunas cantidades físicas son enormes:

**299 792 458 m/s**

Otras son diminutas:

**0,000000000000000000000000000000911 kg**

Escribir muchos ceros:

- ocupa espacio;
- dificulta comparar;
- aumenta la probabilidad de errores.

La notación científica permite escribirlas como:

<div class="formula-panel">
  <span class="formula-panel__label">Velocidad de la luz</span>
  <div class="formula-panel__formula">c ≈ 3,00 × 10⁸ m/s</div>
</div>

y:

<div class="formula-panel">
  <span class="formula-panel__label">Masa del electrón</span>
  <div class="formula-panel__formula">m<sub>e</sub> ≈ 9,11 × 10<sup>−31</sup> kg</div>
</div>

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>La notación científica separa dos informaciones: el número significativo que estamos describiendo y la escala de potencia de diez en la que se encuentra.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar este repaso deberías poder:

- reconocer una expresión en notación científica;
- convertir números decimales a notación científica;
- volver de notación científica a decimal;
- interpretar exponentes positivos y negativos;
- normalizar el coeficiente;
- comparar escalas;
- reconocer órdenes de magnitud;
- multiplicar números en notación científica;
- dividirlos;
- elevarlos a potencias sencillas;
- sumar y restar números expresados con potencias de diez;
- utilizar prefijos SI;
- interpretar notación E de calculadoras;
- estimar resultados antes de calcular;
- mantener correctamente las unidades.

---

## 1. Forma general

Un número en notación científica se escribe:

<div class="formula-panel">
  <span class="formula-panel__label">Forma científica</span>
  <div class="formula-panel__formula">a × 10ⁿ</div>
</div>

donde normalmente:

<div class="formula-panel">
  <span class="formula-panel__label">Normalización</span>
  <div class="formula-panel__formula">1 ≤ |a| &lt; 10</div>
</div>

y n es un entero.

---

## 2. Ejemplos normalizados

**3,2 × 10⁵**

**−7,1 × 10<sup>−4</sup>**

**9,99 × 10⁰**

Todos están normalizados porque el valor absoluto del coeficiente está entre:

- 1;
- 10.

---

## 3. Ejemplo no normalizado

**32 × 10⁴**

representa el mismo número que:

<div class="formula-panel">
  <span class="formula-panel__label">Normalización</span>
  <div class="formula-panel__formula">3,2 × 10⁵</div>
</div>

La segunda forma es la notación científica normalizada habitual.

---

## 4. Exponente positivo

<div class="formula-panel">
  <span class="formula-panel__label">Exponente positivo</span>
  <div class="formula-panel__formula">4,2 × 10³ = 4200</div>
</div>

El exponente positivo indica una escala mayor que:

- 1.

---

## 5. Exponente negativo

<div class="formula-panel">
  <span class="formula-panel__label">Exponente negativo</span>
  <div class="formula-panel__formula">4,2 × 10<sup>−3</sup> = 0,0042</div>
</div>

El exponente negativo indica una escala menor que:

- 1.

---

## 6. Mover la coma

Para escribir:

**530 000**

movemos la coma hasta obtener:

**5,3**

Se movió 5 lugares.

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Conversión</span>
  <div class="formula-panel__formula">530 000 = 5,3 × 10⁵</div>
</div>

---

## 7. Número menor que uno

Para:

**0,00072**

movemos la coma hasta:

**7,2**

Se requieren 4 lugares.

Como el número original es menor que 1:

<div class="formula-panel">
  <span class="formula-panel__label">Conversión</span>
  <div class="formula-panel__formula">0,00072 = 7,2 × 10<sup>−4</sup></div>
</div>

---

## 8. Volver a decimal

Para:

**6,5 × 10⁴**

multiplicamos por 10 000:

**65 000**

Para:

**6,5 × 10<sup>−4</sup>**

dividimos por 10 000:

**0,00065**

---

## 9. No contar ceros mecánicamente

Una estrategia más segura es pensar:

- qué potencia de diez produce la escala;
- cómo debe quedar el coeficiente.

Por ejemplo:

**0,003 = 3 × 10<sup>−3</sup>**

porque:

**10<sup>−3</sup> = 0,001**

y:

**3 × 0,001 = 0,003**

---

## 10. Signo del número y signo del exponente

En:

**−2,5 × 10<sup>−6</sup>**

hay dos signos distintos:

### Primer signo

−2,5 indica que el número es:

- negativo.

### Exponente −6

indica una escala:

- muy pequeña.

No cumplen la misma función.

---

## 11. Potencias de diez frecuentes

| Potencia | Valor |
| ---: | ---: |
| 10³ | 1000 |
| 10² | 100 |
| 10¹ | 10 |
| 10⁰ | 1 |
| 10<sup>−1</sup> | 0,1 |
| 10<sup>−2</sup> | 0,01 |
| 10<sup>−3</sup> | 0,001 |
| 10<sup>−6</sup> | 0,000001 |
| 10<sup>−9</sup> | 0,000000001 |

---

## 12. Comparar números positivos

Comparemos:

- 4 × 10⁶;
- 8 × 10⁴.

Aunque 8 > 4, domina la potencia de diez:

**10⁶ > 10⁴**

Por lo tanto:

**4 × 10⁶ > 8 × 10⁴**

---

## 13. Si los exponentes son iguales

Comparemos:

- 3,2 × 10⁷;
- 7,1 × 10⁷.

Como tienen la misma potencia:

- comparamos coeficientes.

Entonces:

**7,1 × 10⁷ > 3,2 × 10⁷**

---

## 14. Orden de magnitud

El **orden de magnitud** indica aproximadamente la potencia de diez característica de una cantidad.

Por ejemplo:

- 3×10⁸ m/s está en la escala de 10⁸ m/s;
- 2×10<sup>−10</sup> m está en la escala de 10<sup>−10</sup> m.

Según la convención usada, la asignación del orden de magnitud alrededor de los límites puede refinarse.

Aquí nos interesa principalmente:

- reconocer escalas.

---

## 15. Órdenes de magnitud y comparación

Un átomo típico:

**~10<sup>−10</sup> m**

Un núcleo típico:

**~10<sup>−15</sup> m**

La diferencia de exponentes es:

**5**

Por lo tanto las escalas difieren en un factor del orden de:

<div class="formula-panel">
  <span class="formula-panel__label">Comparación de escalas</span>
  <div class="formula-panel__formula">10⁵ = 100 000</div>
</div>

---

## 16. Multiplicación

Para:

<div class="formula-panel">
  <span class="formula-panel__label">Producto</span>
  <div class="formula-panel__formula">(a × 10ᵐ)(b × 10ⁿ) = ab × 10<sup>m+n</sup></div>
</div>

Luego normalizamos si hace falta.

---

## 17. Ejemplo de multiplicación

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Producto científico</h3>
  <div class="worked-example-card__steps">
    <p>(3,0×10⁴)(2,0×10⁵)</p>
    <p>3,0×2,0 = 6,0</p>
    <p>10⁴×10⁵ = 10⁹</p>
    <p><strong>6,0×10⁹</strong></p>
  </div>
</div>

---

## 18. Producto que requiere normalización

**(6×10³)(4×10²)**

Primero:

**24×10⁵**

Pero 24 no está entre 1 y 10.

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Normalización</span>
  <div class="formula-panel__formula">24×10⁵ = 2,4×10⁶</div>
</div>

---

## 19. División

<div class="formula-panel">
  <span class="formula-panel__label">Cociente</span>
  <div class="formula-panel__formula">(a × 10ᵐ)/(b × 10ⁿ) = (a/b) × 10<sup>m−n</sup></div>
</div>

con:

**b ≠ 0**

---

## 20. Ejemplo de división

<div class="formula-panel">
  <span class="formula-panel__label">División</span>
  <div class="formula-panel__formula">(8×10⁷)/(2×10³) = 4×10⁴</div>
</div>

---

## 21. Potencia de un número científico

<div class="formula-panel">
  <span class="formula-panel__label">Potencia</span>
  <div class="formula-panel__formula">(a×10ⁿ)ᵐ = aᵐ × 10<sup>nm</sup></div>
</div>

Ejemplo:

<div class="formula-panel">
  <span class="formula-panel__label">Cuadrado</span>
  <div class="formula-panel__formula">(3×10⁴)² = 9×10⁸</div>
</div>

---

## 22. Suma: primero igualar exponentes

No podemos sumar directamente coeficientes si las potencias de diez son distintas.

Ejemplo:

**3×10⁵ + 2×10⁴**

reescribimos:

**2×10⁴ = 0,2×10⁵**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Suma</span>
  <div class="formula-panel__formula">3×10⁵ + 0,2×10⁵ = 3,2×10⁵</div>
</div>

---

## 23. Resta

Mismo procedimiento:

**5,0×10⁶ − 7,0×10⁵**

Reescribimos:

**7,0×10⁵ = 0,70×10⁶**

Entonces:

**4,30×10⁶**

si mantenemos ese nivel de precisión decimal.

---

## 24. No sumar exponentes en una suma

Es falso:

**10³ + 10⁴ = 10⁷**

Las reglas de sumar exponentes corresponden a:

- multiplicación de potencias de igual base.

No a:

- suma de números.

---

## 25. Prefijos del Sistema Internacional

Algunos prefijos representan potencias de diez.

| Prefijo | Símbolo | Factor |
| --- | --- | ---: |
| kilo | k | 10³ |
| mega | M | 10⁶ |
| giga | G | 10⁹ |
| tera | T | 10¹² |
| mili | m | 10<sup>−3</sup> |
| micro | μ | 10<sup>−6</sup> |
| nano | n | 10<sup>−9</sup> |
| pico | p | 10<sup>−12</sup> |

---

## 26. Mayúsculas y minúsculas importan

Por ejemplo:

- m = mili = 10<sup>−3</sup>;
- M = mega = 10⁶.

Confundirlos produce un factor de:

<div class="formula-panel">
  <span class="formula-panel__label">Diferencia</span>
  <div class="formula-panel__formula">10⁹</div>
</div>

---

## 27. Ejemplo con nanómetros

<div class="formula-panel">
  <span class="formula-panel__label">Nano</span>
  <div class="formula-panel__formula">500 nm = 500 × 10<sup>−9</sup> m</div>
</div>

Normalizando:

<div class="formula-panel">
  <span class="formula-panel__label">Forma científica</span>
  <div class="formula-panel__formula">500 nm = 5,00 × 10<sup>−7</sup> m</div>
</div>

---

## 28. Ejemplo con kilómetros

<div class="formula-panel">
  <span class="formula-panel__label">Kilo</span>
  <div class="formula-panel__formula">12 km = 12 × 10³ m = 1,2 × 10⁴ m</div>
</div>

---

## 29. Calculadora científica

Muchas calculadoras muestran:

```text
3.2E8
```

Esto significa:

<div class="formula-panel">
  <span class="formula-panel__label">Notación E</span>
  <div class="formula-panel__formula">3,2 × 10⁸</div>
</div>

La E no significa:

- número e;
- energía.

Es una forma compacta de indicar:

- “por diez elevado a”.

---

## 30. Tecla EXP o EE

En una calculadora puede haber una tecla:

- EXP;
- EE;
- ×10ˣ.

Para ingresar:

**6,02 × 10²³**

normalmente no se escribe:

- `6.02 × 10 ^ 23`;

sino algo equivalente a:

- `6.02 EXP 23`.

Depende del dispositivo.

---

## 31. Exponente negativo en calculadora

Para:

**9,11 × 10<sup>−31</sup>**

hay que usar el signo de:

- cambio de signo;
- exponente negativo;

según el equipo.

No confundirlo con:

- resta.

---

## 32. Estimar antes de pulsar

Calculemos mentalmente:

**(2×10⁶)(3×10<sup>−4</sup>)**

Coeficientes:

**6**

Exponentes:

**6 + (−4) = 2**

Esperamos:

**6×10² = 600**

Si la calculadora da:

**6×10<sup>10</sup>**

algo está mal.

---

## 33. Significatividad y notación científica

La notación científica también ayuda a expresar qué dígitos se muestran.

Por ejemplo:

- 1200 puede ser ambiguo respecto de precisión;
- 1,20×10³ muestra explícitamente tres cifras escritas.

El tratamiento formal de:

- incertidumbre;
- cifras significativas;

pertenece al bloque de medición, no es sólo una propiedad de la notación.

---

## 34. Unidades y potencias de diez

La notación científica no cambia la unidad física.

Ejemplo:

**5×10³ m**

sigue siendo una:

- longitud.

No debemos olvidar:

- escribir la unidad;
- convertirla si corresponde.

---

## 35. Ejemplo físico: luz visible

Una longitud de onda verde típica puede estar alrededor de:

**5,5×10<sup>−7</sup> m**

Esto equivale a:

**550 nm**

porque:

**1 nm = 10<sup>−9</sup> m**

---

## 36. Ejemplo físico: distancia Tierra-Sol

Una escala típica de la distancia Tierra-Sol es:

**1,5×10¹¹ m**

La notación científica permite comparar rápidamente con:

- radio terrestre;
- distancias estelares;
- tamaños atómicos.

---

## 37. Ejemplo físico: carga elemental

La magnitud de la carga elemental es aproximadamente:

<div class="formula-panel">
  <span class="formula-panel__label">Carga elemental</span>
  <div class="formula-panel__formula">e ≈ 1,60 × 10<sup>−19</sup> C</div>
</div>

El exponente −19 expresa una escala extremadamente pequeña en coulomb.

---

## 38. Error frecuente con el cuadrado

Si:

**r = 3×10² m**

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Cuadrado</span>
  <div class="formula-panel__formula">r² = (3×10²)² = 9×10⁴ m²</div>
</div>

No:

**9×10² m²**

---

## 39. Error frecuente con prefijos al cuadrado

<div class="formula-panel">
  <span class="formula-panel__label">Centímetro cuadrado</span>
  <div class="formula-panel__formula">1 cm² = (10<sup>−2</sup> m)² = 10<sup>−4</sup> m²</div>
</div>

No:

**10<sup>−2</sup> m²**

El factor de conversión también se eleva al cuadrado.

---

## 40. Unidades cúbicas

<div class="formula-panel">
  <span class="formula-panel__label">Centímetro cúbico</span>
  <div class="formula-panel__formula">1 cm³ = (10<sup>−2</sup> m)³ = 10<sup>−6</sup> m³</div>
</div>

Esto es muy importante en:

- densidad;
- volumen.

---

## 41. Errores frecuentes

### “El exponente negativo hace negativo al número”

No.

### “2×10⁵ significa 2 con cinco ceros siempre”

En este caso sí da 200 000, pero conviene entenderlo como multiplicación por 10⁵, no memorizar una receta de ceros.

### “32×10⁴ ya está normalizado”

No.

### “Para sumar 10³ + 10⁴ sumo exponentes”

No.

### “1 cm² = 10<sup>−2</sup> m²”

No. Es 10<sup>−4</sup> m².

### “3.2E8 significa 3,2e⁸”

No. Significa 3,2×10⁸.

### “M y m son el mismo prefijo”

No.

---

## 42. Ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Conversión</strong>
  </div>
  <ol>
    <li>Escribí 450 000 en notación científica.</li>
    <li>Escribí 0,000032 en notación científica.</li>
    <li>Convertí 7,2×10⁴ a decimal.</li>
    <li>Convertí 6,1×10<sup>−5</sup> a decimal.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Operaciones</strong>
  </div>
  <ol>
    <li>Calculá (2×10³)(4×10⁵).</li>
    <li>Calculá (9×10⁸)/(3×10²).</li>
    <li>Calculá (5×10⁴)².</li>
    <li>Normalizá 36×10<sup>−7</sup>.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Suma y prefijos</strong>
  </div>
  <ol>
    <li>Calculá 3,0×10⁶ + 4,0×10⁵.</li>
    <li>Convertí 250 nm a metros.</li>
    <li>Convertí 3,5 km a metros en notación científica.</li>
    <li>Convertí 2 cm² a m².</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Órdenes de magnitud</strong>
  </div>
  <ol>
    <li>Compará 10<sup>−10</sup> m y 10<sup>−15</sup> m. ¿Qué factor de escala los separa?</li>
    <li>Una magnitud pasa de 3×10² a 6×10⁷. Estimá cuántos órdenes de magnitud creció.</li>
    <li>Explicá por qué 1 mm³ = 10<sup>−9</sup> m³.</li>
    <li>Estimá antes de calcular (7×10<sup>−6</sup>)(4×10⁹).</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Explicá por qué cambiar el coeficiente de 30 a 3 obliga a aumentar el exponente en una unidad.</li>
    <li>Construí una tabla de escalas desde 10<sup>−15</sup> m hasta 10¹¹ m con ejemplos físicos.</li>
    <li>Analizá por qué los errores de prefijos cuadrados o cúbicos son especialmente graves en áreas, volúmenes y densidades.</li>
  </ol>
</div>

---

## 43. Ejemplo integrado

La densidad de un material es:

**ρ = 7,8×10³ kg/m³**

y una muestra ocupa:

**V = 2,0×10<sup>−6</sup> m³**

La masa es:

<div class="formula-panel">
  <span class="formula-panel__label">Masa</span>
  <div class="formula-panel__formula">m = ρV</div>
</div>

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Cálculo</span>
  <div class="formula-panel__formula">m = (7,8×10³)(2,0×10<sup>−6</sup>) kg</div>
</div>

Coeficientes:

**7,8×2,0 = 15,6**

Potencias:

**10³×10<sup>−6</sup> = 10<sup>−3</sup>**

Resultado inicial:

**15,6×10<sup>−3</sup> kg**

Normalizando:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>Notación científica con unidades</h3>
  <div class="worked-example-card__steps">
    <p>15,6×10<sup>−3</sup> kg = 1,56×10<sup>−2</sup> kg</p>
    <p><strong>m = 1,56×10<sup>−2</sup> kg</strong></p>
  </div>
</div>

---

## 44. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Qué condición debe cumplir el coeficiente de una notación científica normalizada?</summary>
  <div class="lesson-quiz__answer">
    Su valor absoluto debe cumplir 1 ≤ |a| &lt; 10.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Qué significa 5×10<sup>−4</sup>?</summary>
  <div class="lesson-quiz__answer">
    Significa 5/10⁴ = 0,0005.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Por qué para sumar 3×10⁵ y 2×10⁴ conviene igualar exponentes?</summary>
  <div class="lesson-quiz__answer">
    Porque sólo entonces ambos coeficientes están expresando múltiplos de la misma potencia de diez y pueden sumarse directamente.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Cuánto vale 1 cm² en m²?</summary>
  <div class="lesson-quiz__answer">
    1 cm² = (10⁻² m)² = 10⁻⁴ m².
  </div>
</details>

---

## 45. Resumen

- La notación científica tiene forma a×10ⁿ con 1 ≤ |a| &lt; 10.
- Exponentes positivos representan escalas grandes y negativos escalas pequeñas.
- Para multiplicar se multiplican coeficientes y se suman exponentes.
- Para dividir se dividen coeficientes y se restan exponentes.
- En potencias se eleva también la potencia de diez.
- Para sumar o restar hay que expresar los términos con igual exponente.
- Después de operar conviene normalizar.
- Los prefijos SI representan potencias de diez.
- Mayúsculas y minúsculas pueden cambiar completamente el prefijo.
- Notación E de calculadora representa ×10 elevado a un exponente.
- El análisis de orden de magnitud permite estimar y detectar errores.
- Al convertir áreas y volúmenes, el factor de conversión también se eleva.
- La unidad física debe acompañar al número.

---

## 46. Siguiente tema recomendado

**M-06 — Despeje de fórmulas**

Ahora usaremos estas herramientas para transformar relaciones como:

- v = d/t;
- ρ = m/V;
- V = IR;
- K = ½mv²;

y aislar la variable que necesitamos sin cambiar el significado de la ecuación.
