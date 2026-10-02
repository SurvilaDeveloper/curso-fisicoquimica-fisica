---
title: "Logaritmos"
description: "Introducción a los logaritmos como operación inversa de la potencia, sus propiedades y su uso como apoyo para pH, decibeles, escalas de muchos órdenes de magnitud y decaimiento exponencial."
slug: "logaritmos"

course: "matematicas"
module: "funciones-avanzadas"
order: 17

level: "avanzado-secundario"
cycle: "orientado"

yearsApprox: [4, 5, 6]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - potencias-y-raices
  - notacion-cientifica

skills:
  - logaritmo
  - base-logaritmica
  - logaritmo-decimal
  - logaritmo-natural
  - propiedades-de-logaritmos
  - cambio-de-base
  - ordenes-de-magnitud
  - ph
  - decibeles
  - ecuaciones-exponenciales
  - dominio-logaritmico

hasExercises: true
hasQuiz: true
hasExperiment: false

deepening: true
status: "complete"
---

## ¿Cómo representar cómodamente cantidades que difieren por millones o billones?

En acústica, una intensidad puede ser:

- 10 veces otra;
- 1000 veces otra;
- 1 000 000 de veces otra.

En química, la concentración de ciertos iones puede variar por muchos órdenes de magnitud.

En lugar de trabajar siempre con largas cadenas de potencias de diez, usamos:

**logaritmos**

El logaritmo responde una pregunta muy concreta:

> **¿a qué exponente hay que elevar una base para obtener cierto número?**

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>El logaritmo no es una operación misteriosa: es la operación inversa de una potencia. Convierte productos en sumas y factores multiplicativos en diferencias aditivas.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar este repaso deberías poder:

- interpretar un logaritmo;
- relacionarlo con potencias;
- reconocer base y argumento;
- calcular logaritmos sencillos;
- distinguir log base 10 y ln;
- comprender el dominio positivo;
- usar propiedades de producto, cociente y potencia;
- aplicar cambio de base;
- interpretar órdenes de magnitud;
- comprender la estructura matemática del pH;
- comprender la estructura matemática de los decibeles;
- resolver ecuaciones exponenciales sencillas;
- usar logaritmos en procesos de decaimiento;
- reconocer los límites de fórmulas simplificadas.

---

## 1. Definición

<div class="formula-panel">
  <span class="formula-panel__label">Definición</span>
  <div class="formula-panel__formula">log<sub>b</sub>(x) = y ⇔ bʸ = x</div>
</div>

con:

- b > 0;
- b ≠ 1;
- x > 0.

---

## 2. Ejemplo

<div class="formula-panel">
  <span class="formula-panel__label">Ejemplo</span>
  <div class="formula-panel__formula">log<sub>10</sub>(1000) = 3</div>
</div>

porque:

**10³ = 1000**

---

## 3. Otro ejemplo

<div class="formula-panel">
  <span class="formula-panel__label">Ejemplo</span>
  <div class="formula-panel__formula">log<sub>2</sub>(8) = 3</div>
</div>

porque:

**2³ = 8**

---

## 4. Logaritmo decimal

Cuando escribimos:

**log(x)**

sin indicar base, en muchos contextos escolares y científicos significa:

<div class="formula-panel">
  <span class="formula-panel__label">Logaritmo decimal</span>
  <div class="formula-panel__formula">log(x) = log<sub>10</sub>(x)</div>
</div>

Conviene comprobar la convención del contexto.

---

## 5. Logaritmo natural

El logaritmo de base e se escribe:

<div class="formula-panel">
  <span class="formula-panel__label">Natural</span>
  <div class="formula-panel__formula">ln(x) = log<sub>e</sub>(x)</div>
</div>

donde:

**e ≈ 2,71828**

Aparece naturalmente en:

- crecimiento continuo;
- decaimiento;
- radiactividad;
- ecuaciones diferenciales.

---

## 6. Logaritmo de 1

Para cualquier base válida:

<div class="formula-panel">
  <span class="formula-panel__label">Propiedad</span>
  <div class="formula-panel__formula">log<sub>b</sub>(1) = 0</div>
</div>

porque:

**b⁰ = 1**

---

## 7. Logaritmo de la base

<div class="formula-panel">
  <span class="formula-panel__label">Propiedad</span>
  <div class="formula-panel__formula">log<sub>b</sub>(b) = 1</div>
</div>

porque:

**b¹ = b**

---

## 8. Potencias de diez

<div class="formula-panel">
  <span class="formula-panel__label">Base 10</span>
  <div class="formula-panel__formula">log(10ⁿ) = n</div>
</div>

Ejemplos:

- log(10³)=3;
- log(10<sup>−5</sup>)=−5.

---

## 9. El argumento debe ser positivo

En números reales:

- log(5) existe;
- log(0) no existe;
- log(−5) no existe.

Esto no es una restricción arbitraria.

Una base positiva elevada a cualquier exponente real produce:

- un resultado positivo.

---

## 10. Un logaritmo puede ser negativo

<div class="formula-panel">
  <span class="formula-panel__label">Ejemplo</span>
  <div class="formula-panel__formula">log(0,001) = −3</div>
</div>

porque:

**10<sup>−3</sup> = 0,001**

El logaritmo puede ser negativo aunque su argumento deba ser positivo.

---

## 11. Producto

<div class="formula-panel">
  <span class="formula-panel__label">Producto</span>
  <div class="formula-panel__formula">log<sub>b</sub>(xy) = log<sub>b</sub>(x) + log<sub>b</sub>(y)</div>
</div>

para x,y>0.

---

## 12. Cociente

<div class="formula-panel">
  <span class="formula-panel__label">Cociente</span>
  <div class="formula-panel__formula">log<sub>b</sub>(x/y) = log<sub>b</sub>(x) − log<sub>b</sub>(y)</div>
</div>

---

## 13. Potencia

<div class="formula-panel">
  <span class="formula-panel__label">Potencia</span>
  <div class="formula-panel__formula">log<sub>b</sub>(xⁿ) = n log<sub>b</sub>(x)</div>
</div>

---

## 14. Lo que NO ocurre con una suma

En general:

**log(x+y) ≠ log(x)+log(y)**

Las propiedades corresponden a:

- productos;
- cocientes;
- potencias.

No a sumas.

---

## 15. Demostración de la propiedad del producto

Si:

**x=bᵐ**

y:

**y=bⁿ**

entonces:

**xy=b<sup>m+n</sup>**

Por lo tanto:

**log<sub>b</sub>(xy)=m+n**

es decir:

**log<sub>b</sub>(x)+log<sub>b</sub>(y)**

---

## 16. Cambio de base

Podemos calcular un logaritmo en otra base mediante:

<div class="formula-panel">
  <span class="formula-panel__label">Cambio de base</span>
  <div class="formula-panel__formula">log<sub>b</sub>(x) = ln(x)/ln(b)</div>
</div>

También puede usarse log decimal:

<div class="formula-panel">
  <span class="formula-panel__label">Cambio de base</span>
  <div class="formula-panel__formula">log<sub>b</sub>(x) = log(x)/log(b)</div>
</div>

---

## 17. Escala logarítmica

En una escala lineal, pasos iguales representan:

- sumas iguales.

En una escala logarítmica, pasos iguales pueden representar:

- factores iguales.

Por ejemplo, en base 10:

**1 → 10 → 100 → 1000**

cada paso multiplica por:

- 10.

---

## 18. Orden de magnitud

Los logaritmos permiten comparar escalas.

Si:

**A/B = 10⁶**

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Diferencia logarítmica</span>
  <div class="formula-panel__formula">log(A/B) = 6</div>
</div>

Hay seis órdenes decimales de diferencia.

---

## 19. pH — forma escolar

En cursos introductorios suele escribirse:

<div class="formula-panel">
  <span class="formula-panel__label">pH</span>
  <div class="formula-panel__formula">pH = −log[H<sup>+</sup>]</div>
</div>

cuando la concentración se expresa según la convención química correspondiente.

---

## 20. Qué hace el signo menos en pH

Si:

**[H<sup>+</sup>] = 10<sup>−3</sup>**

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Cálculo</span>
  <div class="formula-panel__formula">pH = −log(10<sup>−3</sup>) = 3</div>
</div>

El signo menos convierte el exponente negativo en:

- un valor positivo.

---

## 21. Cada unidad de pH representa un factor 10

Si una solución pasa de:

- pH 3;
- pH 4;

la cantidad asociada a H<sup>+</sup> en el modelo idealizado cambia por un factor:

- 10.

La escala no es lineal respecto de la concentración.

---

## 22. Cuidado conceptual con pH

La fórmula escolar simplificada es muy útil.

En tratamiento termodinámico riguroso, el pH se define a partir de una cantidad adimensional relacionada con:

- actividad química;

no simplemente el logaritmo de una cantidad con unidades.

Para nivel secundario suele utilizarse la aproximación mediante concentración.

---

## 23. Decibeles

Para intensidad sonora puede aparecer:

<div class="formula-panel">
  <span class="formula-panel__label">Nivel sonoro</span>
  <div class="formula-panel__formula">L = 10 log(I/I<sub>0</sub>)</div>
</div>

donde:

- L se expresa en dB;
- I es intensidad;
- I<sub>0</sub> es una intensidad de referencia.

---

## 24. El argumento es una razón

En:

**I/I<sub>0</sub>**

las unidades se cancelan.

El argumento del logaritmo queda:

- adimensional.

Esta es una característica físicamente importante.

---

## 25. Factor 10 en intensidad

Si:

**I = 10I<sub>0</sub>**

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Nivel</span>
  <div class="formula-panel__formula">L = 10 log(10) = 10 dB</div>
</div>

---

## 26. Factor 100

Si:

**I = 100I<sub>0</sub>**

entonces:

**L = 20 dB**

porque:

**log(100)=2**

---

## 27. Diferencia de niveles

Si comparamos I<sub>2</sub> e I<sub>1</sub>:

<div class="formula-panel">
  <span class="formula-panel__label">Diferencia</span>
  <div class="formula-panel__formula">ΔL = 10 log(I<sub>2</sub>/I<sub>1</sub>)</div>
</div>

Los cocientes multiplicativos se convierten en:

- diferencias.

---

## 28. +3 dB aproximadamente

Un aumento de intensidad por factor 2 produce:

<div class="formula-panel">
  <span class="formula-panel__label">Doble intensidad</span>
  <div class="formula-panel__formula">10 log(2) ≈ 3,01 dB</div>
</div>

Por eso:

- +3 dB ≈ doble intensidad.

---

## 29. Decibel no significa “intensidad”

El decibel expresa un nivel logarítmico relativo a una referencia.

No es lo mismo que:

- W/m².

---

## 30. Resolver una ecuación exponencial

Supongamos:

<div class="formula-panel">
  <span class="formula-panel__label">Ecuación</span>
  <div class="formula-panel__formula">2ˣ = 10</div>
</div>

Aplicamos logaritmo:

**x log2 = log10**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Solución</span>
  <div class="formula-panel__formula">x = log10/log2 ≈ 3,32</div>
</div>

---

## 31. Exponencial con e

Si:

<div class="formula-panel">
  <span class="formula-panel__label">Ecuación</span>
  <div class="formula-panel__formula">e<sup>kt</sup> = R</div>
</div>

aplicamos ln:

<div class="formula-panel">
  <span class="formula-panel__label">Despeje</span>
  <div class="formula-panel__formula">kt = ln(R)</div>
</div>

y:

<div class="formula-panel">
  <span class="formula-panel__label">Tiempo</span>
  <div class="formula-panel__formula">t = ln(R)/k</div>
</div>

---

## 32. Decaimiento

Para:

<div class="formula-panel">
  <span class="formula-panel__label">Decaimiento</span>
  <div class="formula-panel__formula">N = N<sub>0</sub>e<sup>−λt</sup></div>
</div>

podemos despejar t:

<div class="formula-panel">
  <span class="formula-panel__label">Tiempo</span>
  <div class="formula-panel__formula">t = −ln(N/N<sub>0</sub>)/λ</div>
</div>

---

## 33. Semivida

Si:

**N/N<sub>0</sub> = 1/2**

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Semivida</span>
  <div class="formula-panel__formula">T<sub>1/2</sub> = ln2/λ</div>
</div>

Esta relación se retomará en:

[M-18 — Exponenciales](/curso-fisicoquimica-fisica/matematicas/exponenciales).

---

## 34. Logaritmos y cifras extremas

El logaritmo comprime escalas.

Por ejemplo:

- 10<sup>−12</sup> → log = −12;
- 10⁰ → log = 0;
- 10⁹ → log = 9.

Una enorme gama de valores se convierte en:

- un intervalo manejable.

---

## 35. Calculadora

Las teclas suelen ser:

- `log` para base 10;
- `ln` para base e.

Para otras bases se usa:

- cambio de base.

---

## 36. Estimar antes de calcular

Si:

**x está entre 100 y 1000**

entonces:

**log(x)**

debe estar entre:

- 2;
- 3.

Eso permite controlar:

- resultados de calculadora.

---

## 37. Log de un número entre 0 y 1

Si:

**0 < x < 1**

en base mayor que 1:

**log(x) < 0**

Ejemplo:

**log(0,01)=−2**

---

## 38. Monotonía

Para base b>1, log<sub>b</sub>(x) es creciente.

Si:

**x<sub>1</sub> < x<sub>2</sub>**

entonces:

**log<sub>b</sub>(x<sub>1</sub>) < log<sub>b</sub>(x<sub>2</sub>)**

---

## 39. Base entre 0 y 1 — profundización

Si:

**0 < b < 1**

el logaritmo es decreciente.

En Física secundaria usamos principalmente:

- base 10;
- base e;

ambas mayores que 1.

---

## 40. Argumentos dimensionales — profundización

Matemáticamente, un logaritmo se aplica a un número puro.

Por eso en fórmulas físicas rigurosas aparecen razones como:

- I/I<sub>0</sub>;
- actividades relativas;
- cocientes normalizados.

En expresiones escolares a veces esta normalización queda:

- implícita.

---

## 41. Error frecuente: log de una suma

No:

**log(a+b)=log a+log b**

---

## 42. Error frecuente: confundir log y ln

Ambos son logaritmos, pero con bases distintas:

- log → usualmente 10;
- ln → e.

---

## 43. Error frecuente: aceptar argumento negativo

En los números reales:

**log(−2)**

no está definido.

---

## 44. Error frecuente: interpretar dB linealmente

20 dB no significa:

- el doble de 10 dB en intensidad.

La escala es logarítmica.

---

## 45. Ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Definición</strong>
  </div>
  <ol>
    <li>Calculá log(1000).</li>
    <li>Calculá log(0,01).</li>
    <li>Calculá log<sub>2</sub>(16).</li>
    <li>Explicá por qué log(0) no está definido.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Propiedades</strong>
  </div>
  <ol>
    <li>Expandí log(ab).</li>
    <li>Expandí log(a/b).</li>
    <li>Expandí log(a³).</li>
    <li>Explicá por qué log(a+b) no puede simplificarse de la misma manera.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Aplicaciones</strong>
  </div>
  <ol>
    <li>Calculá el pH idealizado para [H<sup>+</sup>]=10<sup>−5</sup>.</li>
    <li>Hallá L si I/I<sub>0</sub>=1000.</li>
    <li>¿Cuántos dB corresponden aproximadamente a duplicar la intensidad?</li>
    <li>Explicá por qué I/I<sub>0</sub> no tiene unidades.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Ecuaciones exponenciales</strong>
  </div>
  <ol>
    <li>Resolvé 10ˣ=500 usando logaritmos.</li>
    <li>Resolvé e<sup>2t</sup>=7.</li>
    <li>Despejá t en N=N<sub>0</sub>e<sup>−λt</sup>.</li>
    <li>Derivá T<sub>1/2</sub>=ln2/λ.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Justificá la propiedad log(xy)=log x+log y usando exponentes.</li>
    <li>Explicá por qué una escala logarítmica comprime rangos de muchos órdenes de magnitud.</li>
    <li>Explicá por qué en una formulación física rigurosa el argumento de un logaritmo debe ser adimensional.</li>
  </ol>
</div>

---

## 46. Ejemplo integrado

Una intensidad sonora es:

**I = 10<sup>−6</sup> W/m²**

y la referencia:

**I<sub>0</sub> = 10<sup>−12</sup> W/m²**

Cociente:

<div class="formula-panel">
  <span class="formula-panel__label">Razón</span>
  <div class="formula-panel__formula">I/I<sub>0</sub> = 10⁶</div>
</div>

Nivel:

<div class="formula-panel">
  <span class="formula-panel__label">Decibeles</span>
  <div class="formula-panel__formula">L = 10 log(10⁶) = 60 dB</div>
</div>

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>Un factor de un millón se convierte en un número manejable</h3>
  <div class="worked-example-card__steps">
    <p>La razón de intensidades es adimensional.</p>
    <p>El logaritmo devuelve el exponente 6.</p>
    <p>El factor 10 de la definición produce 60 dB.</p>
    <p><strong>La escala logarítmica transforma factores multiplicativos en diferencias aditivas.</strong></p>
  </div>
</div>

---

## 47. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Qué significa log<sub>b</sub>(x)=y?</summary>
  <div class="lesson-quiz__answer">
    Significa que b elevado a y produce x: bʸ=x.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Por qué el argumento de un logaritmo real debe ser positivo?</summary>
  <div class="lesson-quiz__answer">
    Porque una base positiva válida elevada a un exponente real produce siempre un número positivo.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Qué diferencia hay entre log y ln?</summary>
  <div class="lesson-quiz__answer">
    En la convención usual de este curso, log usa base 10 y ln usa base e.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Por qué una diferencia de 1 unidad de pH representa un factor 10 en el modelo idealizado?</summary>
  <div class="lesson-quiz__answer">
    Porque el pH usa un logaritmo decimal con signo negativo; cambiar el logaritmo en una unidad corresponde a cambiar el argumento por un factor 10.
  </div>
</details>

---

## 48. Resumen

- log<sub>b</sub>(x)=y equivale a bʸ=x.
- La base debe ser positiva y distinta de 1.
- El argumento debe ser positivo.
- log suele indicar base 10 y ln base e.
- log(1)=0.
- log(xy)=log x+log y.
- log(x/y)=log x−log y.
- log(xⁿ)=n log x.
- No existe una propiedad equivalente para log(x+y).
- Los logaritmos convierten factores multiplicativos en diferencias aditivas.
- Las escalas logarítmicas son útiles para rangos de muchos órdenes de magnitud.
- El pH y los decibeles son aplicaciones importantes.
- Los logaritmos permiten despejar exponentes.
- En Física rigurosa, el argumento de un logaritmo debe ser adimensional.

---

## 49. Siguiente tema recomendado

**M-18 — Exponenciales**

El último módulo matemático estudiará procesos en los que una cantidad cambia proporcionalmente a su propio valor.

Aparecen en:

- radiactividad;
- crecimiento;
- relajación;
- enfriamiento idealizado;
- atenuación.
