---
title: "Cantidad de materia y estequiometría básica"
description: "Cómo conectar partículas, moles y masa para interpretar cuantitativamente ecuaciones químicas y resolver problemas estequiométricos."
slug: "cantidad-de-materia-y-estequiometria-basica"

course: "fisicoquimica"
module: "estequiometria"
order: 11

level: "intermedio"
cycle: "ambos"

yearsApprox: [3, 4]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - transformaciones-fisicas-y-quimicas
  - tabla-periodica-y-propiedades-de-los-elementos

skills:
  - masa-atomica-relativa
  - masa-molecular
  - mol
  - numero-de-avogadro
  - masa-molar
  - estequiometria
  - reactivo-limitante
  - rendimiento

hasExercises: true
hasQuiz: true
hasExperiment: false

deepening: true
status: "complete"
---

## Contar partículas que no podemos contar una por una

Una muestra de agua puede contener una cantidad enorme de moléculas.

Sería imposible contarlas individualmente.

Sin embargo, en química necesitamos conectar dos escalas:

- la escala microscópica de átomos, moléculas e iones;
- la escala macroscópica de gramos que podemos medir en una balanza.

La herramienta que permite hacer ese puente es el **mol**.

> **El mol permite contar entidades microscópicas mediante cantidades macroscópicas medibles.**

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>La estequiometría no consiste en aplicar una “regla de tres” aislada. Parte de una ecuación correctamente balanceada y conecta coeficientes, moles, partículas y masas.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta lección deberías poder:

- interpretar masa atómica relativa;
- calcular masa molecular relativa;
- comprender el mol como unidad de cantidad de sustancia;
- usar el número de Avogadro;
- calcular masa molar;
- convertir entre masa, moles y cantidad de partículas;
- interpretar cuantitativamente una ecuación química balanceada;
- resolver relaciones estequiométricas sencillas;
- identificar el reactivo limitante en casos simples;
- calcular rendimiento teórico y rendimiento porcentual como profundización;
- reconocer errores frecuentes de unidades y proporciones.

---

## 1. El problema de la escala

Imaginemos una muestra de carbono de unos pocos gramos.

Podemos medir su masa con una balanza.

Pero no podemos:

- separar cada átomo;
- contar cada átomo;
- trabajar químicamente átomo por átomo.

Necesitamos una unidad de conteo adecuada a cantidades enormes.

En la vida cotidiana usamos unidades de conteo como:

- una docena = 12 unidades;
- una centena = 100 unidades.

En química usamos:

- **1 mol = una cantidad fija enorme de entidades**.

La entidad debe especificarse:

- átomos;
- moléculas;
- iones;
- electrones;
- unidades fórmula;
- otras partículas.

---

## 2. Masa atómica relativa

Los átomos tienen masas extremadamente pequeñas.

En lugar de expresarlas habitualmente en kilogramos, la química utiliza una escala relativa basada en la **unidad de masa atómica**, símbolo **u**.

La masa atómica relativa que aparece en la tabla periódica compara la masa promedio de los átomos de un elemento con una referencia definida.

Los valores suelen ser decimales porque consideran:

- distintos isótopos;
- sus masas;
- sus abundancias naturales.

Por ejemplo, en una tabla periódica podemos encontrar aproximadamente:

- H → 1,008;
- C → 12,01;
- O → 16,00;
- Na → 22,99;
- Cl → 35,45.

Estos valores no deben confundirse con el número másico de un isótopo particular.

<div class="lesson-callout lesson-callout--error">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">!</span>
    <strong>Masa atómica relativa ≠ número másico</strong>
  </div>
  <div class="lesson-callout__body">
    <p>El número másico A cuenta protones y neutrones de un núcleo particular y es entero. La masa atómica de una tabla suele ser un promedio isotópico y puede ser decimal.</p>
  </div>
</div>

---

## 3. Masa molecular relativa

Para una molécula, podemos sumar las masas atómicas relativas de todos los átomos que contiene.

### Ejemplo: agua

Fórmula:

**H₂O**

Usando valores aproximados:

- H ≈ 1,008;
- O ≈ 16,00.

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Masa molecular relativa del agua</h3>
  <div class="worked-example-card__steps">
    <p>M<sub>r</sub>(H₂O) = 2 × 1,008 + 16,00</p>
    <p>M<sub>r</sub>(H₂O) = 18,016</p>
    <p><strong>M<sub>r</sub>(H₂O) ≈ 18,02</strong></p>
  </div>
</div>

La masa molecular relativa es adimensional como relación relativa, aunque en contextos escolares suele conectarse inmediatamente con una masa molecular expresada en u.

---

## 4. Masa fórmula

No todas las sustancias están formadas por moléculas discretas.

Por ejemplo, NaCl forma una red iónica.

En ese caso es más apropiado hablar de **masa fórmula** o masa relativa de la unidad fórmula.

Para NaCl:

- Na ≈ 22,99;
- Cl ≈ 35,45.

Entonces:

**22,99 + 35,45 = 58,44**

La idea de cálculo es la misma: sumar las contribuciones indicadas por la fórmula química.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>La fórmula importa</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Antes de sumar masas debemos interpretar correctamente subíndices y paréntesis. La estequiometría depende de leer la fórmula química sin ambigüedad.</p>
  </div>
</div>

---

## 5. Ejemplo con paréntesis: Ca(OH)₂

La fórmula contiene:

- 1 Ca;
- 2 O;
- 2 H.

Usando valores aproximados:

- Ca ≈ 40,08;
- O ≈ 16,00;
- H ≈ 1,008.

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Masa fórmula de Ca(OH)₂</h3>
  <div class="worked-example-card__steps">
    <p>40,08 + 2 × (16,00 + 1,008)</p>
    <p>40,08 + 34,016</p>
    <p><strong>≈ 74,10</strong></p>
  </div>
</div>

El subíndice 2 multiplica a todo el grupo OH.

---

## 6. El mol

El **mol** es la unidad del Sistema Internacional para la cantidad de sustancia.

Un mol contiene exactamente:

<div class="formula-panel">
  <span class="formula-panel__label">Constante de Avogadro</span>
  <div class="formula-panel__formula">Nₐ = 6,02214076 × 10²³ mol⁻¹</div>
  <p>En ejercicios escolares suele utilizarse 6,02 × 10²³ mol⁻¹.</p>
</div>

Por lo tanto:

**1 mol de entidades = 6,02214076 × 10²³ entidades**

Ejemplos:

- 1 mol de átomos de C;
- 1 mol de moléculas de H₂O;
- 1 mol de iones Na⁺;
- 1 mol de unidades fórmula de NaCl.

<div class="lesson-callout lesson-callout--error">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">!</span>
    <strong>Siempre debemos nombrar la entidad</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Decir simplemente “un mol” es parecido a decir “una docena” sin aclarar de qué. En química debemos saber qué entidades estamos contando.</p>
  </div>
</div>

---

## 7. Número de Avogadro

La constante de Avogadro conecta cantidad de sustancia con cantidad de entidades.

<div class="formula-panel">
  <span class="formula-panel__label">Partículas a partir de moles</span>
  <div class="formula-panel__formula">N = n × Nₐ</div>
  <p>N es la cantidad de entidades, n la cantidad de sustancia en mol y Nₐ la constante de Avogadro.</p>
</div>

Despejando:

<div class="formula-panel">
  <span class="formula-panel__label">Moles a partir de partículas</span>
  <div class="formula-panel__formula">n = N / Nₐ</div>
</div>

---

## 8. Ejemplo: moléculas a partir de moles

¿Cuántas moléculas hay en 2,0 mol de H₂O?

Usamos:

**N = n × Nₐ**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>2,0 mol de agua</h3>
  <div class="worked-example-card__steps">
    <p>N = 2,0 mol × 6,02 × 10²³ moléculas/mol</p>
    <p><strong>N ≈ 1,20 × 10²⁴ moléculas</strong></p>
  </div>
</div>

Observá cómo la unidad **mol** se cancela.

---

## 9. Ejemplo inverso: moles a partir de partículas

Tenemos:

**3,01 × 10²³ moléculas de O₂**

¿Cuántos moles son?

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Moléculas → mol</h3>
  <div class="worked-example-card__steps">
    <p>n = N / Nₐ</p>
    <p>n = (3,01 × 10²³) / (6,02 × 10²³ mol⁻¹)</p>
    <p><strong>n = 0,500 mol</strong></p>
  </div>
</div>

---

## 10. Masa molar

La **masa molar** es la masa correspondiente a un mol de una sustancia.

Su unidad habitual es:

**g/mol**

Para muchos cálculos escolares, el valor numérico coincide con el de la masa atómica, molecular o fórmula relativa, pero cambia el significado y la unidad.

Ejemplos aproximados:

- C → 12,01 g/mol;
- O₂ → 32,00 g/mol;
- H₂O → 18,02 g/mol;
- NaCl → 58,44 g/mol.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>No confundir número con magnitud</strong>
  </div>
  <div class="lesson-callout__body">
    <p>18,02 como masa molecular relativa del agua y 18,02 g/mol como masa molar tienen valores numéricos relacionados, pero representan conceptos y unidades diferentes.</p>
  </div>
</div>

---

## 11. Relación entre masa y moles

Si conocemos la masa molar M:

<div class="formula-panel">
  <span class="formula-panel__label">Moles a partir de masa</span>
  <div class="formula-panel__formula">n = m / M</div>
  <p>n se expresa en mol, m en g y M en g/mol si usamos estas unidades.</p>
</div>

Y:

<div class="formula-panel">
  <span class="formula-panel__label">Masa a partir de moles</span>
  <div class="formula-panel__formula">m = n × M</div>
</div>

---

## 12. Ejemplo: gramos de agua a moles

Tenemos:

**36,0 g de H₂O**

Masa molar aproximada:

**18,0 g/mol**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Masa → moles</h3>
  <div class="worked-example-card__steps">
    <p>n = m / M</p>
    <p>n = 36,0 g / 18,0 g/mol</p>
    <p><strong>n = 2,00 mol</strong></p>
  </div>
</div>

---

## 13. Ejemplo: moles de CO₂ a masa

¿Cuál es la masa de 0,50 mol de CO₂?

Masa molar:

- C ≈ 12,01;
- 2 O ≈ 32,00.

**M(CO₂) ≈ 44,01 g/mol**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Moles → masa</h3>
  <div class="worked-example-card__steps">
    <p>m = n × M</p>
    <p>m = 0,50 mol × 44,01 g/mol</p>
    <p><strong>m ≈ 22 g</strong></p>
  </div>
</div>

---

## 14. El puente completo

Las tres cantidades centrales son:

- masa;
- moles;
- partículas.

Podemos pensarlas así:

<div class="formula-panel">
  <span class="formula-panel__label">Mapa de conversiones</span>
  <div class="formula-panel__formula">masa ⇄ mol ⇄ partículas</div>
  <p>Entre masa y mol usamos masa molar. Entre mol y partículas usamos la constante de Avogadro.</p>
</div>

No conviene saltar directamente de gramos a partículas sin comprender los dos pasos.

---

## 15. Ejemplo completo: gramos → moléculas

¿Cuántas moléculas hay en 9,0 g de H₂O?

### Paso 1: masa → moles

**M(H₂O) ≈ 18,0 g/mol**

**n = 9,0 / 18,0 = 0,50 mol**

### Paso 2: moles → moléculas

**N = 0,50 × 6,02 × 10²³**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>9,0 g de agua</h3>
  <div class="worked-example-card__steps">
    <p>9,0 g → 0,50 mol</p>
    <p>0,50 mol → 3,01 × 10²³ moléculas</p>
    <p><strong>N ≈ 3,0 × 10²³ moléculas</strong></p>
  </div>
</div>

---

## 16. Moléculas y átomos dentro de moléculas

Supongamos:

**1 mol de H₂O**

Contiene:

- 1 mol de moléculas de H₂O;
- 2 mol de átomos de H;
- 1 mol de átomos de O.

En cantidad de partículas:

- 6,02 × 10²³ moléculas de H₂O;
- 1,204 × 10²⁴ átomos de H;
- 6,02 × 10²³ átomos de O.

Los subíndices de la fórmula también expresan relaciones de conteo.

---

## 17. La ecuación balanceada como relación cuantitativa

Consideremos:

**2 H₂ + O₂ → 2 H₂O**

Los coeficientes indican:

### En partículas

2 moléculas H₂ + 1 molécula O₂ → 2 moléculas H₂O.

### En moles

2 mol H₂ + 1 mol O₂ → 2 mol H₂O.

La relación molar es:

<div class="formula-panel">
  <span class="formula-panel__label">Relación estequiométrica</span>
  <div class="formula-panel__formula">2 mol H₂ : 1 mol O₂ : 2 mol H₂O</div>
</div>

La ecuación balanceada es el punto de partida de la estequiometría.

---

## 18. Los coeficientes no son relaciones de masa

En:

**2 H₂ + O₂ → 2 H₂O**

no significa:

**2 g H₂ + 1 g O₂ → 2 g H₂O**

Los coeficientes expresan relaciones entre:

- moléculas;
- unidades fórmula;
- moles.

Para obtener masas debemos usar masas molares.

### Masa correspondiente

2 mol H₂:

**2 × 2 g ≈ 4 g**

1 mol O₂:

**1 × 32 g = 32 g**

2 mol H₂O:

**2 × 18 g ≈ 36 g**

Entonces:

**4 g + 32 g ≈ 36 g**

La masa se conserva.

<div class="lesson-callout lesson-callout--error">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">!</span>
    <strong>Coeficiente ≠ masa en gramos</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Los coeficientes de una ecuación dan proporciones en entidades o moles. Para convertir esas proporciones en gramos necesitamos la masa molar de cada sustancia.</p>
  </div>
</div>

---

## 19. Método general de un problema estequiométrico

Para resolver un problema sencillo:

1. escribir la ecuación correcta;
2. balancearla;
3. convertir el dato disponible a moles;
4. usar la relación de coeficientes;
5. convertir los moles obtenidos a la unidad solicitada;
6. verificar unidades y sentido físico.

Podemos resumirlo:

<div class="formula-panel">
  <span class="formula-panel__label">Ruta estequiométrica</span>
  <div class="formula-panel__formula">dato → mol → relación molar → mol buscados → resultado</div>
</div>

---

## 20. Ejemplo: moles de producto

Reacción:

**N₂ + 3 H₂ → 2 NH₃**

Si reaccionan 6,0 mol de H₂ con N₂ suficiente, ¿cuántos moles de NH₃ pueden formarse?

Relación:

**3 mol H₂ → 2 mol NH₃**

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>H₂ → NH₃</h3>
  <div class="worked-example-card__steps">
    <p>6,0 mol H₂ × (2 mol NH₃ / 3 mol H₂)</p>
    <p><strong>4,0 mol NH₃</strong></p>
  </div>
</div>

Las unidades mol H₂ se cancelan y queda mol NH₃.

---

## 21. Ejemplo: gramos de reactivo a gramos de producto

Reacción:

**2 H₂ + O₂ → 2 H₂O**

¿Cuánta agua puede formarse a partir de 8,0 g de H₂ si hay O₂ suficiente?

### Paso 1: gramos de H₂ → mol H₂

Tomamos:

**M(H₂) ≈ 2,0 g/mol**

**n = 8,0 / 2,0 = 4,0 mol H₂**

### Paso 2: relación molar

La ecuación indica:

**2 mol H₂ → 2 mol H₂O**

Por lo tanto:

**4,0 mol H₂ → 4,0 mol H₂O**

### Paso 3: mol H₂O → gramos

**M(H₂O) ≈ 18,0 g/mol**

**m = 4,0 × 18,0 = 72 g**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Masa de agua producida</h3>
  <div class="worked-example-card__steps">
    <p>8,0 g H₂ → 4,0 mol H₂</p>
    <p>4,0 mol H₂ → 4,0 mol H₂O</p>
    <p>4,0 mol H₂O → 72 g H₂O</p>
    <p><strong>Resultado ≈ 72 g de H₂O</strong></p>
  </div>
</div>

---

## 22. Factor estequiométrico

Una forma compacta de trabajar es usar la relación de coeficientes como un factor de conversión.

Para:

**N₂ + 3 H₂ → 2 NH₃**

podemos escribir:

**2 mol NH₃ / 3 mol H₂**

si queremos convertir H₂ en NH₃.

O bien:

**3 mol H₂ / 2 mol NH₃**

si queremos hacer la conversión inversa.

La orientación del factor depende de qué unidad queremos cancelar.

Esto conecta con el método de factores de conversión estudiado en FQ-02.

---

## 23. Una ecuación balanceada no garantiza que todo reaccione

Hasta ahora suponíamos que uno de los reactivos estaba disponible en cantidad suficiente.

Pero si tenemos cantidades concretas de **dos reactivos**, puede ocurrir que uno se agote antes.

Ese reactivo se llama **reactivo limitante**.

El otro queda en exceso.

Este es un contenido de profundización del temario.

---

## 24. Reactivo limitante

Consideremos:

**2 H₂ + O₂ → 2 H₂O**

Supongamos que tenemos:

- 3 mol H₂;
- 2 mol O₂.

La reacción exige:

**2 mol H₂ por 1 mol O₂**

Para consumir 3 mol H₂ necesitamos:

**1,5 mol O₂**

Tenemos 2 mol.

Por lo tanto:

- H₂ se consume primero;
- H₂ es el reactivo limitante;
- O₂ queda en exceso.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>El limitante fija el máximo de producto</strong>
  </div>
  <div class="lesson-callout__body">
    <p>No importa cuánto reactivo en exceso quede disponible: cuando se agota el reactivo limitante, ya no puede seguir formándose producto mediante esa reacción.</p>
  </div>
</div>

---

## 25. Método seguro para hallar el limitante

Una estrategia robusta es calcular cuánto producto podría formar **cada reactivo por separado**.

El que produzca menos producto es el limitante.

### Ejemplo

Reacción:

**N₂ + 3 H₂ → 2 NH₃**

Disponemos de:

- 2 mol N₂;
- 3 mol H₂.

### Si limitara N₂

2 mol N₂ podrían producir:

**4 mol NH₃**

### Si limitara H₂

3 mol H₂ podrían producir:

**2 mol NH₃**

Como H₂ permite formar menos producto:

**H₂ es el reactivo limitante.**

---

## 26. ¿Cuánto reactivo queda en exceso?

En el ejemplo anterior:

**N₂ + 3 H₂ → 2 NH₃**

Tenemos:

- 2 mol N₂;
- 3 mol H₂.

Para consumir 3 mol H₂ se necesita:

**1 mol N₂**

Había 2 mol N₂.

Entonces queda:

**1 mol N₂ en exceso**

Y se forman:

**2 mol NH₃**

---

## 27. Rendimiento teórico

La estequiometría permite calcular la cantidad máxima de producto que podría obtenerse según:

- ecuación balanceada;
- cantidades iniciales;
- reactivo limitante.

Esa cantidad se llama **rendimiento teórico**.

Es un valor ideal basado en el modelo estequiométrico.

En un experimento real, puede obtenerse menos producto por:

- reacción incompleta;
- reacciones secundarias;
- pérdidas en transferencias;
- impurezas;
- dificultades de separación;
- errores de medición.

---

## 28. Rendimiento real y rendimiento porcentual

El **rendimiento real** es la cantidad de producto obtenida experimentalmente.

Podemos comparar ambos:

<div class="formula-panel">
  <span class="formula-panel__label">Rendimiento porcentual</span>
  <div class="formula-panel__formula">% rendimiento = (rendimiento real / rendimiento teórico) × 100</div>
</div>

### Ejemplo

Rendimiento teórico:

**10,0 g**

Rendimiento real:

**8,5 g**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Rendimiento porcentual</h3>
  <div class="worked-example-card__steps">
    <p>% rendimiento = (8,5 / 10,0) × 100</p>
    <p><strong>% rendimiento = 85 %</strong></p>
  </div>
</div>

---

## 29. ¿Puede aparecer un rendimiento superior a 100 %?

Un resultado experimental puede producir aparentemente:

**más de 100 %**

Pero eso no significa que la reacción violó la conservación de masa.

Puede indicar:

- producto húmedo;
- impurezas;
- solvente retenido;
- error de medición;
- identificación incorrecta del producto.

El cálculo sirve también como herramienta de diagnóstico experimental.

<div class="lesson-callout lesson-callout--error">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">!</span>
    <strong>Más de 100 % no significa “reacción extraordinariamente eficiente”</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Si el rendimiento calculado supera el 100 %, debemos revisar la pureza, el secado, las mediciones y los supuestos del procedimiento.</p>
  </div>
</div>

---

## 30. Relación con conservación de la masa

La estequiometría no reemplaza la conservación de la masa.

La cuantifica.

Consideremos:

**C + O₂ → CO₂**

Aproximadamente:

- 1 mol C → 12 g;
- 1 mol O₂ → 32 g;
- 1 mol CO₂ → 44 g.

Entonces:

**12 g + 32 g = 44 g**

Las relaciones molares y las masas molares son compatibles con la conservación de la materia.

---

## 31. Diferencia entre cantidad de sustancia y masa

Dos muestras con el mismo número de moles no necesariamente tienen la misma masa.

Ejemplo:

### 1 mol H₂O

≈ 18 g.

### 1 mol CO₂

≈ 44 g.

Ambas contienen el mismo número de moléculas:

**Nₐ**

pero sus moléculas tienen masas diferentes.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Mismo mol, distinto peso</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Un mol fija una cantidad de entidades, no una masa universal. La masa de un mol depende de qué entidades estamos contando.</p>
  </div>
</div>

---

## 32. Diferencia entre mol y molécula

Una molécula es una entidad individual.

Un mol es una cantidad de entidades.

Comparación:

- **una molécula de H₂O** → una entidad;
- **un mol de H₂O** → 6,02214076 × 10²³ moléculas.

Es un error conceptual tratar “mol” como si fuera una partícula.

---

## 33. Diferencia entre mol y masa molar

### Mol

Unidad de cantidad de sustancia.

### Masa molar

Masa por unidad de cantidad de sustancia.

Unidad:

**g/mol**

Ejemplo:

Para agua:

- cantidad: 2,0 mol;
- masa molar: 18,02 g/mol;
- masa: aproximadamente 36,0 g.

Cada magnitud cumple un papel distinto.

---

## 34. Errores frecuentes

### “Un mol siempre pesa lo mismo”

No. Depende de la sustancia.

### “6,02 × 10²³ es una masa”

No. Es una cantidad de entidades por mol.

### “La masa molecular y la masa molar son exactamente la misma magnitud”

Están numéricamente relacionadas, pero una es una magnitud relativa/microscópica y la otra expresa masa por mol.

### “Los coeficientes son gramos”

No. Son proporciones entre entidades o moles.

### “Puedo hacer estequiometría con una ecuación sin balancear”

No. Las relaciones molares correctas provienen de una ecuación balanceada.

### “El reactivo que tiene menos gramos siempre es el limitante”

No. Hay que comparar cantidades en moles y la proporción de la ecuación.

### “El rendimiento real debería ser siempre exactamente igual al teórico”

No. El rendimiento teórico es una predicción ideal.

---

## 35. Problemas y ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Reconocimiento</strong>
  </div>
  <ol>
    <li>Explicá qué representa un mol.</li>
    <li>¿Cuántas entidades contiene aproximadamente 1 mol?</li>
    <li>Calculá la masa molecular relativa de O₂.</li>
    <li>Calculá la masa molecular relativa de CO₂.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Conversiones básicas</strong>
  </div>
  <ol>
    <li>Calculá los moles presentes en 36 g de H₂O usando M = 18 g/mol.</li>
    <li>Calculá la masa de 0,50 mol de CO₂ usando M = 44 g/mol.</li>
    <li>Calculá cuántas moléculas hay en 0,25 mol de O₂.</li>
    <li>Calculá cuántos moles representan 1,204 × 10²⁴ moléculas.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Estequiometría</strong>
  </div>
  <ol>
    <li>Para 2 H₂ + O₂ → 2 H₂O, calculá cuántos moles de agua se forman a partir de 5 mol de H₂ con O₂ en exceso.</li>
    <li>Para N₂ + 3 H₂ → 2 NH₃, calculá cuántos moles de H₂ se necesitan para producir 8 mol de NH₃.</li>
    <li>Para C + O₂ → CO₂, calculá la masa de CO₂ obtenida a partir de 24 g de C con O₂ suficiente. Usá C = 12 g/mol y CO₂ = 44 g/mol.</li>
    <li>Explicá por qué los coeficientes de una ecuación pueden usarse directamente para moles pero no directamente para gramos.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Reactivo limitante</strong>
  </div>
  <ol>
    <li>Para 2 H₂ + O₂ → 2 H₂O, determiná el reactivo limitante si hay 4 mol H₂ y 3 mol O₂. Calculá cuántos moles de agua se forman y cuánto reactivo queda en exceso.</li>
    <li>Para N₂ + 3 H₂ → 2 NH₃, determiná el limitante con 4 mol N₂ y 9 mol H₂.</li>
    <li>Explicá por qué comparar solamente masas iniciales puede llevar a identificar mal el reactivo limitante.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Rendimiento y profundización</strong>
  </div>
  <ol>
    <li>Una reacción tiene rendimiento teórico de 25,0 g y se obtienen 20,0 g. Calculá el rendimiento porcentual.</li>
    <li>Una experiencia informa 108 % de rendimiento. Proponé al menos tres explicaciones experimentales posibles.</li>
    <li>Explicá la diferencia entre una limitación estequiométrica y una pérdida de rendimiento experimental.</li>
  </ol>
</div>

---

## 36. Ejemplo integrado completo

Reacción:

**2 Mg + O₂ → 2 MgO**

Disponemos de:

**12,0 g de Mg**

y oxígeno en exceso.

Tomamos:

- M(Mg) ≈ 24,3 g/mol;
- M(MgO) ≈ 40,3 g/mol.

### Paso 1: masa de Mg → moles

**n = 12,0 / 24,3**

**n ≈ 0,494 mol Mg**

### Paso 2: relación molar

La ecuación muestra:

**2 mol Mg → 2 mol MgO**

Relación 1:1.

Entonces:

**0,494 mol MgO**

### Paso 3: moles de MgO → masa

**m = 0,494 × 40,3**

**m ≈ 19,9 g**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>12,0 g Mg → MgO</h3>
  <div class="worked-example-card__steps">
    <p>12,0 g Mg → 0,494 mol Mg</p>
    <p>0,494 mol Mg → 0,494 mol MgO</p>
    <p>0,494 mol MgO → 19,9 g MgO</p>
    <p><strong>Rendimiento teórico ≈ 19,9 g MgO</strong></p>
  </div>
</div>

La masa del producto supera la masa inicial del Mg porque el producto también contiene oxígeno incorporado desde el reactivo O₂.

No se creó materia.

---

## 37. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Qué representa 1 mol?</summary>
  <div class="lesson-quiz__answer">
    Una cantidad de sustancia que contiene 6,02214076 × 10²³ entidades elementales especificadas.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Cuántos moles hay en 44 g de CO₂ si M = 44 g/mol?</summary>
  <div class="lesson-quiz__answer">
    n = 44 g / 44 g/mol = 1 mol.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Cuántas moléculas hay aproximadamente en 0,50 mol?</summary>
  <div class="lesson-quiz__answer">
    0,50 × 6,02 × 10²³ ≈ 3,01 × 10²³ moléculas.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. En 2 H₂ + O₂ → 2 H₂O, ¿cuántos moles de agua se forman por 1 mol de O₂?</summary>
  <div class="lesson-quiz__answer">
    2 mol de H₂O, si hay suficiente H₂.
  </div>
</details>

<details class="lesson-quiz">
  <summary>5. ¿El reactivo con menor masa inicial es siempre el limitante?</summary>
  <div class="lesson-quiz__answer">
    No. Debemos convertir cantidades a moles y compararlas con la proporción estequiométrica de la ecuación balanceada.
  </div>
</details>

<details class="lesson-quiz">
  <summary>6. Si el rendimiento teórico es 50 g y el real es 40 g, ¿cuál es el rendimiento porcentual?</summary>
  <div class="lesson-quiz__answer">
    (40/50) × 100 = 80 %.
  </div>
</details>

---

## 38. Resumen

- La masa atómica relativa permite comparar masas atómicas en una escala conveniente.
- La masa molecular se obtiene sumando las masas atómicas correspondientes a la fórmula.
- Para sólidos iónicos resulta más apropiado hablar de masa fórmula.
- El mol es la unidad de cantidad de sustancia.
- Un mol contiene exactamente 6,02214076 × 10²³ entidades especificadas.
- La masa molar conecta moles con gramos.
- La constante de Avogadro conecta moles con cantidad de partículas.
- El mapa fundamental es masa ⇄ mol ⇄ partículas.
- Una ecuación balanceada establece proporciones molares entre reactivos y productos.
- Los coeficientes no representan directamente masas en gramos.
- Los problemas estequiométricos se resuelven pasando primero por moles.
- El reactivo limitante determina la cantidad máxima de producto.
- El rendimiento teórico es la cantidad ideal predicha.
- El rendimiento porcentual compara el producto real con el teórico.

---

## 39. Siguiente tema recomendado

**FQ-12 — Ácidos, bases y pH**

Después de aprender a describir reacciones cuantitativamente, estudiaremos una familia de transformaciones especialmente importante en química y en la vida cotidiana.

Trabajaremos con:

- propiedades de ácidos y bases;
- indicadores;
- escala de pH;
- acidez y basicidad;
- neutralización;
- seguridad;
- modelos ácido-base como profundización.
