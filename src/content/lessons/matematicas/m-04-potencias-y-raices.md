---
title: "Potencias y raíces"
description: "Repaso de potencias, exponentes enteros y fraccionarios, raíces, leyes de exponentes y su uso en escalas cuadráticas, cúbicas e inversas de la Física."
slug: "potencias-y-raices"

course: "matematicas"
module: "aritmetica-y-algebra"
order: 4

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
  - potencias
  - exponente
  - base
  - exponente-cero
  - exponentes-negativos
  - leyes-de-potencias
  - raices
  - raiz-cuadrada
  - raiz-cubica
  - exponentes-fraccionarios
  - escalamiento-cuadratico
  - escalamiento-cubico
  - ley-inversa-cuadratica

hasExercises: true
hasQuiz: true
hasExperiment: false

deepening: false
status: "complete"
---

## Duplicar una longitud no siempre duplica el resultado

Supongamos un cuadrado de lado:

**L**

Su área es:

<div class="formula-panel">
  <span class="formula-panel__label">Área</span>
  <div class="formula-panel__formula">A = L²</div>
</div>

Si duplicamos el lado:

<div class="formula-panel">
  <span class="formula-panel__label">Nuevo lado</span>
  <div class="formula-panel__formula">L′ = 2L</div>
</div>

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Nueva área</span>
  <div class="formula-panel__formula">A′ = (2L)² = 4L²</div>
</div>

El lado se duplicó, pero el área se multiplicó por:

**4**

Las potencias aparecen constantemente en Física:

- áreas;
- volúmenes;
- energía cinética;
- leyes inversas;
- intensidad;
- gravitación;
- electricidad;
- escalas microscópicas.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Una potencia describe cómo una cantidad se repite como factor y también cómo cambia una magnitud cuando otra se escala. Antes de calcular conviene mirar el exponente: duplicar una variable no produce el mismo efecto si aparece como x, x², x³ o 1/x².</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar este repaso deberías poder:

- reconocer base y exponente;
- interpretar potencias con exponentes naturales;
- usar exponentes cero;
- usar exponentes negativos;
- aplicar las leyes básicas de potencias;
- distinguir `−a²` de `(−a)²`;
- interpretar raíces cuadradas y cúbicas;
- relacionar raíces con potencias;
- usar exponentes fraccionarios sencillos;
- reconocer la raíz principal;
- comprender por qué `√(x²) = |x|`;
- analizar escalas cuadráticas y cúbicas;
- interpretar relaciones inversas cuadráticas;
- operar correctamente unidades elevadas a potencias;
- estimar resultados antes de usar calculadora.

---

## 1. Potencia

Una potencia tiene la forma:

<div class="formula-panel">
  <span class="formula-panel__label">Potencia</span>
  <div class="formula-panel__formula">aⁿ</div>
</div>

donde:

- a es la base;
- n es el exponente.

Si n es un entero positivo:

<div class="formula-panel">
  <span class="formula-panel__label">Significado</span>
  <div class="formula-panel__formula">aⁿ = a·a·a·...·a</div>
</div>

con n factores iguales a a.

---

## 2. Ejemplos

<div class="formula-panel">
  <span class="formula-panel__label">Cuadrado</span>
  <div class="formula-panel__formula">3² = 3·3 = 9</div>
</div>

<div class="formula-panel">
  <span class="formula-panel__label">Cubo</span>
  <div class="formula-panel__formula">2³ = 2·2·2 = 8</div>
</div>

---

## 3. Exponente 1

Cualquier número elevado a 1 queda igual:

<div class="formula-panel">
  <span class="formula-panel__label">Exponente uno</span>
  <div class="formula-panel__formula">a¹ = a</div>
</div>

---

## 4. Exponente cero

Para a ≠ 0:

<div class="formula-panel">
  <span class="formula-panel__label">Exponente cero</span>
  <div class="formula-panel__formula">a⁰ = 1</div>
</div>

No es una regla aislada.

Surge de:

<div class="formula-panel">
  <span class="formula-panel__label">Cociente</span>
  <div class="formula-panel__formula">a³/a³ = a<sup>3−3</sup> = a⁰ = 1</div>
</div>

---

## 5. Qué ocurre con 0⁰

La expresión:

**0⁰**

requiere contexto y no debe tratarse simplemente mediante la regla anterior.

En este curso:

- no la necesitaremos para cálculos físicos básicos.

La regla:

**a⁰ = 1**

se usa con:

**a ≠ 0**

---

## 6. Exponente negativo

Para a ≠ 0:

<div class="formula-panel">
  <span class="formula-panel__label">Exponente negativo</span>
  <div class="formula-panel__formula">a<sup>−n</sup> = 1/aⁿ</div>
</div>

Ejemplo:

<div class="formula-panel">
  <span class="formula-panel__label">Ejemplo</span>
  <div class="formula-panel__formula">10<sup>−3</sup> = 1/1000 = 0,001</div>
</div>

---

## 7. El signo negativo del exponente no hace negativo al número

Comparemos:

<div class="formula-panel">
  <span class="formula-panel__label">Exponente negativo</span>
  <div class="formula-panel__formula">2<sup>−3</sup> = 1/8</div>
</div>

No es:

**−8**

El signo negativo indica:

- inverso;
- no signo negativo del resultado.

---

## 8. Producto de potencias de igual base

<div class="formula-panel">
  <span class="formula-panel__label">Producto</span>
  <div class="formula-panel__formula">aᵐaⁿ = a<sup>m+n</sup></div>
</div>

Ejemplo:

**2³·2⁴ = 2⁷**

porque en total aparecen:

- siete factores 2.

---

## 9. Cociente de potencias de igual base

Para a ≠ 0:

<div class="formula-panel">
  <span class="formula-panel__label">Cociente</span>
  <div class="formula-panel__formula">aᵐ/aⁿ = a<sup>m−n</sup></div>
</div>

Ejemplo:

**10⁵/10² = 10³**

---

## 10. Potencia de una potencia

<div class="formula-panel">
  <span class="formula-panel__label">Potencia de potencia</span>
  <div class="formula-panel__formula">(aᵐ)ⁿ = a<sup>mn</sup></div>
</div>

Ejemplo:

**(2³)² = 2⁶ = 64**

---

## 11. Potencia de un producto

<div class="formula-panel">
  <span class="formula-panel__label">Producto</span>
  <div class="formula-panel__formula">(ab)ⁿ = aⁿbⁿ</div>
</div>

Ejemplo:

**(2·3)² = 2²·3² = 36**

---

## 12. Potencia de un cociente

Para b ≠ 0:

<div class="formula-panel">
  <span class="formula-panel__label">Cociente</span>
  <div class="formula-panel__formula">(a/b)ⁿ = aⁿ/bⁿ</div>
</div>

---

## 13. Una suma no se distribuye así

En general:

**(a + b)² ≠ a² + b²**

porque:

<div class="formula-panel">
  <span class="formula-panel__label">Cuadrado de binomio</span>
  <div class="formula-panel__formula">(a + b)² = a² + 2ab + b²</div>
</div>

Ejemplo:

- (2 + 3)² = 25;
- 2² + 3² = 13.

---

## 14. Base negativa

Comparemos:

<div class="formula-panel">
  <span class="formula-panel__label">Con paréntesis</span>
  <div class="formula-panel__formula">(−3)² = 9</div>
</div>

pero:

<div class="formula-panel">
  <span class="formula-panel__label">Sin paréntesis</span>
  <div class="formula-panel__formula">−3² = −(3²) = −9</div>
</div>

La potencia tiene prioridad sobre:

- el signo negativo exterior.

---

## 15. Exponente par e impar

Con una base negativa:

### Exponente par

**(−2)⁴ = +16**

### Exponente impar

**(−2)³ = −8**

Esto ocurre porque el producto contiene:

- cantidad par;
- o impar;

de factores negativos.

---

## 16. Raíz cuadrada

La raíz cuadrada principal de a ≥ 0 es el número no negativo cuyo cuadrado vale a:

<div class="formula-panel">
  <span class="formula-panel__label">Raíz cuadrada</span>
  <div class="formula-panel__formula">√a = b ⇔ b² = a, con b ≥ 0</div>
</div>

Ejemplo:

**√25 = 5**

---

## 17. √25 no es ±5

La raíz principal:

**√25**

vale:

**5**

En cambio, si resolvemos:

**x² = 25**

entonces existen dos soluciones:

**x = ±5**

No debemos confundir:

- una raíz;
- las soluciones de una ecuación.

---

## 18. Raíz cúbica

La raíz cúbica permite también números negativos:

<div class="formula-panel">
  <span class="formula-panel__label">Raíz cúbica</span>
  <div class="formula-panel__formula">∛(−8) = −2</div>
</div>

porque:

**(−2)³ = −8**

---

## 19. Raíz y potencia son operaciones relacionadas

Para a ≥ 0:

<div class="formula-panel">
  <span class="formula-panel__label">Inversas</span>
  <div class="formula-panel__formula">(√a)² = a</div>
</div>

Pero:

<div class="formula-panel">
  <span class="formula-panel__label">Cuidado</span>
  <div class="formula-panel__formula">√(a²) = |a|</div>
</div>

---

## 20. Por qué aparece el valor absoluto

Si:

**a = −4**

entonces:

**a² = 16**

y:

**√16 = 4**

No:

- −4.

Por eso:

**√(a²) = |a|**

---

## 21. Exponentes fraccionarios

Para valores donde la expresión esté definida:

<div class="formula-panel">
  <span class="formula-panel__label">Raíz como potencia</span>
  <div class="formula-panel__formula">a<sup>1/2</sup> = √a</div>
</div>

y:

<div class="formula-panel">
  <span class="formula-panel__label">Raíz cúbica</span>
  <div class="formula-panel__formula">a<sup>1/3</sup> = ∛a</div>
</div>

---

## 22. Exponente m/n

Para a positiva:

<div class="formula-panel">
  <span class="formula-panel__label">Exponente racional</span>
  <div class="formula-panel__formula">a<sup>m/n</sup> = ⁿ√(aᵐ)</div>
</div>

Ejemplo:

**16<sup>3/4</sup> = (⁴√16)³ = 2³ = 8**

---

## 23. Raíces y dominio real

En números reales:

- √9 existe;
- √0 existe;
- √(−9) no es un número real.

En cursos posteriores pueden introducirse:

- números complejos.

No los necesitamos aquí.

---

## 24. Unidades al cuadrado

Si una longitud se mide en metros:

**L = 3 m**

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Área</span>
  <div class="formula-panel__formula">L² = (3 m)² = 9 m²</div>
</div>

La potencia afecta:

- al número;
- a la unidad.

---

## 25. Unidades al cubo

Si:

**L = 2 m**

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Volumen</span>
  <div class="formula-panel__formula">L³ = (2 m)³ = 8 m³</div>
</div>

---

## 26. Unidades con exponentes negativos

Una aceleración puede escribirse:

<div class="formula-panel">
  <span class="formula-panel__label">Aceleración</span>
  <div class="formula-panel__formula">m/s² = m·s<sup>−2</sup></div>
</div>

Ambas formas son equivalentes.

---

## 27. Escalamiento cuadrático

Si:

**y ∝ x²**

y multiplicamos x por un factor k:

<div class="formula-panel">
  <span class="formula-panel__label">Escalamiento</span>
  <div class="formula-panel__formula">y′/y = k²</div>
</div>

Ejemplo:

- x se triplica;
- y se multiplica por 9.

---

## 28. Escalamiento cúbico

Si:

**y ∝ x³**

y x se duplica:

<div class="formula-panel">
  <span class="formula-panel__label">Escalamiento</span>
  <div class="formula-panel__formula">y′/y = 2³ = 8</div>
</div>

Esto ocurre con volúmenes de objetos semejantes.

---

## 29. Ley inversa

Si:

**y ∝ 1/x**

duplicar x produce:

- y/2.

Pero si:

**y ∝ 1/x²**

duplicar x produce:

<div class="formula-panel">
  <span class="formula-panel__label">Inverso cuadrático</span>
  <div class="formula-panel__formula">y′ = y/4</div>
</div>

---

## 30. Gravitación como ejemplo

La fuerza gravitatoria cumple:

<div class="formula-panel">
  <span class="formula-panel__label">Gravitación</span>
  <div class="formula-panel__formula">F = Gm<sub>1</sub>m<sub>2</sub>/r²</div>
</div>

Si sólo duplicamos r:

**F′ = F/4**

No:

- F/2.

---

## 31. Intensidad y distancia

Para una fuente puntual ideal que distribuye energía uniformemente:

<div class="formula-panel">
  <span class="formula-panel__label">Intensidad</span>
  <div class="formula-panel__formula">I ∝ 1/r²</div>
</div>

La razón geométrica es que el área de una esfera es:

**4πr²**

---

## 32. Energía cinética y velocidad

<div class="formula-panel">
  <span class="formula-panel__label">Energía cinética</span>
  <div class="formula-panel__formula">K = ½mv²</div>
</div>

Para masa fija:

- K ∝ v².

Si v se duplica:

- K se cuadruplica.

---

## 33. Estimar potencias de diez

Sin calculadora:

**10⁶ · 10<sup>−2</sup> = 10⁴**

y:

**10⁶ / 10² = 10⁴**

Estas reglas serán centrales en:

[M-05 — Notación científica](/matematicas/notacion-cientifica).

---

## 34. Calculadora

Para calcular:

**(3,0×10⁴)²**

conviene pensar primero:

- 3² = 9;
- (10⁴)² = 10⁸.

Entonces esperamos:

**9×10⁸**

Si la calculadora muestra algo del orden de:

**10⁴**

sabemos que hubo un error de ingreso.

---

## 35. Orden de operaciones con potencias

En:

**2 + 3²·4**

primero:

1. potencia: 3² = 9;
2. multiplicación: 9·4 = 36;
3. suma: 2 + 36 = 38.

---

## 36. Errores frecuentes

### “a² significa 2a”

No.

### “a⁰ = 0”

No, para a ≠ 0 vale 1.

### “a<sup>−2</sup> = −a²”

No. Significa 1/a².

### “(a+b)² = a²+b²”

No.

### “−3² = 9”

No si no hay paréntesis: vale −9.

### “√25 = ±5”

La raíz principal es 5; ± aparece al resolver x² = 25.

### “√(a²) = a para cualquier a”

No. Es |a|.

### “Si duplico una distancia en una ley 1/r², la fuerza se reduce a la mitad”

No. Se reduce a la cuarta parte.

---

## 37. Ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Reconocimiento</strong>
  </div>
  <ol>
    <li>Identificá base y exponente en 5³.</li>
    <li>Calculá 2⁵.</li>
    <li>Calculá 10⁰.</li>
    <li>Calculá √81.</li>
    <li>Calculá ∛(−27).</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Aplicación directa</strong>
  </div>
  <ol>
    <li>Calculá 2³·2⁵.</li>
    <li>Calculá 10⁶/10².</li>
    <li>Calculá (3²)⁴ como una sola potencia.</li>
    <li>Calculá 4<sup>−2</sup>.</li>
    <li>Calculá 16<sup>1/2</sup> y 27<sup>1/3</sup>.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Integración física</strong>
  </div>
  <ol>
    <li>Si el lado de un cuadrado se triplica, ¿por qué factor cambia el área?</li>
    <li>Si el radio de una esfera se duplica, ¿por qué factor cambia su volumen?</li>
    <li>Si K ∝ v² y v aumenta 50 %, ¿por qué factor cambia K?</li>
    <li>Si F ∝ 1/r² y r se triplica, ¿qué fracción de F queda?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Modelo y unidades</strong>
  </div>
  <ol>
    <li>Calculá (4 m)² y explicá por qué la unidad también queda elevada al cuadrado.</li>
    <li>Mostrá que m/s² puede escribirse m·s<sup>−2</sup>.</li>
    <li>Compará −5² y (−5)².</li>
    <li>Explicá por qué √(x²) debe expresarse como |x|.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Derivá la regla a<sup>−n</sup> = 1/aⁿ usando la ley del cociente.</li>
    <li>Mostrá algebraicamente que si y ∝ x³, duplicar x multiplica y por 8.</li>
    <li>Construí un ejemplo físico donde confundir x² con 2x produzca una predicción cualitativamente equivocada.</li>
  </ol>
</div>

---

## 38. Ejemplo integrado

La energía cinética de un objeto es:

<div class="formula-panel">
  <span class="formula-panel__label">Energía cinética</span>
  <div class="formula-panel__formula">K = ½mv²</div>
</div>

Para masa fija, comparamos dos velocidades:

- v<sub>2</sub> = 3v<sub>1</sub>.

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Cociente</span>
  <div class="formula-panel__formula">K<sub>2</sub>/K<sub>1</sub> = (v<sub>2</sub>/v<sub>1</sub>)² = 3² = 9</div>
</div>

La energía cinética se multiplica por:

**9**

No hace falta conocer:

- la masa;
- el valor de v<sub>1</sub>.

El exponente ya determina el:

- factor de escala.

---

## 39. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Qué significa 10<sup>−3</sup>?</summary>
  <div class="lesson-quiz__answer">
    Significa 1/10³ = 1/1000 = 0,001.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Cuál es la diferencia entre −4² y (−4)²?</summary>
  <div class="lesson-quiz__answer">
    −4² = −16 porque la potencia se aplica al 4 antes del signo exterior. En cambio, (−4)² = 16 porque la base completa es −4.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Por qué √(x²) = |x|?</summary>
  <div class="lesson-quiz__answer">
    Porque la raíz cuadrada principal es no negativa. Tanto x como −x tienen el mismo cuadrado, y la raíz devuelve la magnitud no negativa.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. Si una magnitud es proporcional a 1/r², ¿qué ocurre al duplicar r?</summary>
  <div class="lesson-quiz__answer">
    Se multiplica por 1/2² = 1/4.
  </div>
</details>

---

## 40. Resumen

- aⁿ representa una potencia de base a y exponente n.
- Para a ≠ 0, a⁰ = 1.
- a<sup>−n</sup> = 1/aⁿ.
- Al multiplicar potencias de igual base se suman exponentes.
- Al dividirlas se restan.
- En una potencia de potencia se multiplican exponentes.
- La potencia se distribuye sobre productos y cocientes, no sobre sumas.
- Los paréntesis determinan si un signo negativo pertenece a la base.
- √a es la raíz cuadrada principal no negativa.
- Resolver x² = a no es lo mismo que calcular √a.
- √(x²) = |x|.
- Las raíces pueden escribirse mediante exponentes fraccionarios.
- Las unidades también se elevan a potencias.
- Una dependencia cuadrática, cúbica o inversa cuadrática produce factores de escala diferentes.
- Reconocer el exponente es esencial antes de usar proporcionalidad.

---

## 41. Siguiente tema recomendado

**M-05 — Notación científica**

Usaremos potencias de diez para escribir y operar con números como:

- 300 000 000;
- 0,000000001;
- masas atómicas;
- tamaños nucleares;
- distancias astronómicas.

El objetivo será conservar con claridad:

- escala;
- orden de magnitud;
- unidades.
