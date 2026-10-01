---
title: "Presión y fluidos"
description: "Cómo se comporta la presión en líquidos y gases, cómo funciona una prensa hidráulica y por qué los cuerpos flotan o se hunden."
slug: "presion-y-fluidos"

course: "fisicoquimica"
module: "presion-y-fluidos"
order: 17

level: "intermedio"
cycle: "ambos"

yearsApprox: [2, 3, 4]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - materia-cuerpos-materiales-y-sustancias
  - fuerzas-e-interacciones
  - gases

skills:
  - presion
  - fluidos
  - presion-hidrostatica
  - presion-atmosferica
  - principio-de-pascal
  - prensa-hidraulica
  - empuje
  - principio-de-arquimedes
  - flotacion
  - densidad

hasExercises: true
hasQuiz: true
hasExperiment: true

deepening: true
status: "complete"
---

## ¿Por qué un clavo entra y una moneda no?

Si aplicamos la misma fuerza sobre:

- una punta muy pequeña;
- una superficie grande;

el efecto puede ser muy diferente.

También sentimos que aumenta la presión al bucear, y un barco enorme puede flotar aunque esté construido en gran parte con materiales más densos que el agua.

Todos estos fenómenos están relacionados con:

- presión;
- fluidos;
- empuje;
- densidad.

> **La presión depende no solamente de la fuerza, sino también del área sobre la que esa fuerza se distribuye.**

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Para entender fluidos necesitamos combinar fuerzas, áreas, densidad y diferencias de presión. La flotación no depende solamente de si un material es “pesado”.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta lección deberías poder:

- definir presión;
- calcular presión como fuerza por unidad de área;
- explicar por qué disminuir el área puede aumentar la presión;
- comprender cómo cambia la presión con la profundidad en un líquido;
- interpretar la presión atmosférica;
- explicar el principio de Pascal;
- resolver problemas sencillos de prensa hidráulica;
- comprender el empuje;
- interpretar el principio de Arquímedes;
- relacionar empuje, peso y flotación;
- relacionar densidad media con flotabilidad;
- analizar aplicaciones tecnológicas.

---

## 1. ¿Qué es un fluido?

Un **fluido** es un material que puede deformarse continuamente y fluir cuando actúan fuerzas apropiadas.

En este nivel consideramos fluidos a:

- líquidos;
- gases.

Tienen comportamientos diferentes en muchos aspectos, pero ambos pueden ejercer presión.

---

## 2. Presión

La **presión** es la fuerza perpendicular distribuida por unidad de área.

<div class="formula-panel">
  <span class="formula-panel__label">Presión</span>
  <div class="formula-panel__formula">P = F / A</div>
  <p>F es el módulo de la fuerza perpendicular y A el área.</p>
</div>

Unidad SI:

**pascal (Pa)**

<div class="formula-panel">
  <span class="formula-panel__label">Definición del pascal</span>
  <div class="formula-panel__formula">1 Pa = 1 N/m²</div>
</div>

---

## 3. Misma fuerza, distinta área

Supongamos una fuerza de:

**100 N**

### Caso A

Área:

**0,50 m²**

Presión:

**P = 100 / 0,50 = 200 Pa**

### Caso B

Área:

**0,10 m²**

Presión:

**P = 100 / 0,10 = 1000 Pa**

Con la misma fuerza, el área menor produce mayor presión.

<div class="lesson-callout lesson-callout--ejemplo">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">→</span>
    <strong>Aplicaciones cotidianas</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Una aguja, un clavo o un cuchillo concentran una fuerza sobre un área pequeña. Un esquí o una raqueta para nieve distribuyen el peso sobre un área mayor y reducen la presión sobre la nieve.</p>
  </div>
</div>

---

## 4. Presión no es fuerza

Dos situaciones pueden tener:

- la misma fuerza;
- distinta presión.

Y también:

- distinta fuerza;
- la misma presión.

Por eso no debemos usar ambos conceptos como sinónimos.

<table class="lesson-comparison">
  <thead>
    <tr>
      <th>Magnitud</th>
      <th>Unidad SI</th>
      <th>Tipo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Fuerza</td>
      <td>N</td>
      <td>Vectorial</td>
    </tr>
    <tr>
      <td>Presión</td>
      <td>Pa = N/m²</td>
      <td>Escalar en este tratamiento</td>
    </tr>
  </tbody>
</table>

---

## 5. Presión en un líquido

En un líquido en reposo, la presión aumenta con la profundidad.

Esto ocurre porque una región más profunda debe sostener el efecto del fluido que se encuentra por encima.

Para un líquido de densidad aproximadamente constante:

<div class="formula-panel">
  <span class="formula-panel__label">Presión hidrostática</span>
  <div class="formula-panel__formula">P = P₀ + ρgh</div>
  <p>P₀ es la presión en la superficie, ρ la densidad del líquido, g la intensidad gravitatoria y h la profundidad.</p>
</div>

La parte:

**ρgh**

representa el aumento de presión debido a la columna de líquido.

---

## 6. La presión depende de la profundidad, no de la forma del recipiente

Supongamos recipientes de formas diferentes llenos con el mismo líquido.

Si comparamos puntos:

- a la misma profundidad;
- bajo la misma presión superficial;

la presión hidrostática es la misma.

No depende directamente de:

- la forma del recipiente;
- el volumen total de líquido.

Depende de:

- profundidad;
- densidad;
- gravedad;
- presión sobre la superficie.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>La altura importa</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Una columna angosta y una ancha pueden producir la misma presión en puntos a igual profundidad si contienen el mismo líquido y tienen la misma presión en la superficie.</p>
  </div>
</div>

---

## 7. Ejemplo de presión hidrostática

Queremos calcular el aumento de presión a:

- h = 2,0 m;
- en agua;
- con ρ ≈ 1000 kg/m³;
- g ≈ 9,8 N/kg.

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Aumento de presión bajo el agua</h3>
  <div class="worked-example-card__steps">
    <p>ΔP = ρgh</p>
    <p>ΔP = 1000 × 9,8 × 2,0</p>
    <p><strong>ΔP ≈ 19 600 Pa = 19,6 kPa</strong></p>
  </div>
</div>

Ese valor es adicional a la presión que exista en la superficie.

---

## 8. Presión en todas las direcciones

En un fluido en reposo, la presión en un punto actúa de manera que las fuerzas debidas al fluido son perpendiculares a las superficies.

Por eso:

- una pared lateral de un tanque recibe presión;
- no solamente el fondo.

La presión de un fluido no es simplemente “el peso hacia abajo”.

---

## 9. Presión atmosférica

La atmósfera es un fluido gaseoso.

El aire ejerce presión sobre:

- nosotros;
- edificios;
- líquidos;
- objetos.

Cerca del nivel del mar una referencia habitual es:

**1 atm ≈ 101,3 kPa**

Como vimos en FQ-13, la presión atmosférica cambia con:

- altitud;
- condiciones meteorológicas.

No “sentimos” normalmente esa enorme presión porque existen presiones internas y externas que se compensan en buena medida.

---

## 10. Evidencias de presión atmosférica

Podemos observar efectos atmosféricos en:

- ventosas;
- sorbetes;
- jeringas;
- barómetros;
- envases que se deforman por diferencias de presión.

Un sorbete no funciona porque “succionamos el líquido hacia arriba” de manera directa.

Al reducir la presión dentro del sorbete, la presión atmosférica sobre la superficie del líquido contribuye a empujarlo hacia la región de menor presión.

<div class="lesson-callout lesson-callout--error">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">!</span>
    <strong>La succión no es una fuerza nueva</strong>
  </div>
  <div class="lesson-callout__body">
    <p>En muchos fenómenos de “succión” la explicación física se basa en una diferencia de presiones.</p>
  </div>
</div>

---

## 11. Principio de Pascal

El **principio de Pascal** establece que un cambio de presión aplicado a un fluido confinado se transmite a través del fluido.

Esto permite construir sistemas hidráulicos.

Ejemplos:

- gato hidráulico;
- frenos hidráulicos;
- elevadores;
- prensa hidráulica.

---

## 12. Prensa hidráulica

Imaginemos dos pistones conectados por un líquido.

### Pistón pequeño

Área:

**A₁**

Fuerza aplicada:

**F₁**

### Pistón grande

Área:

**A₂**

Fuerza obtenida:

**F₂**

En un modelo ideal:

<div class="formula-panel">
  <span class="formula-panel__label">Prensa hidráulica ideal</span>
  <div class="formula-panel__formula">F₁/A₁ = F₂/A₂</div>
</div>

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Multiplicación de fuerza</span>
  <div class="formula-panel__formula">F₂ = F₁ · A₂/A₁</div>
</div>

---

## 13. Ejemplo de prensa hidráulica

Tenemos:

- A₁ = 0,010 m²;
- A₂ = 0,20 m²;
- F₁ = 100 N.

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Fuerza en el pistón grande</h3>
  <div class="worked-example-card__steps">
    <p>F₂ = F₁ · A₂/A₁</p>
    <p>F₂ = 100 × 0,20/0,010</p>
    <p><strong>F₂ = 2000 N</strong></p>
  </div>
</div>

La fuerza aumenta veinte veces.

---

## 14. ¿La prensa crea energía?

No.

Una prensa hidráulica puede multiplicar fuerza, pero el pistón grande se desplaza una distancia menor que el pequeño en el modelo ideal.

Si ignoramos pérdidas:

- lo ganado en fuerza se compensa con recorrido.

La máquina no crea energía.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Multiplicar fuerza no significa multiplicar energía</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Una máquina hidráulica cambia la relación entre fuerza y desplazamiento. El principio de conservación de la energía sigue siendo válido.</p>
  </div>
</div>

---

## 15. Empuje

Un cuerpo sumergido total o parcialmente en un fluido experimenta una fuerza resultante hacia arriba llamada **empuje**.

¿Por qué aparece?

Porque la presión del fluido aumenta con la profundidad.

En general:

- la parte inferior del cuerpo recibe mayor presión que la superior;
- la suma de esas fuerzas puede producir una resultante hacia arriba.

---

## 16. Principio de Arquímedes

El **principio de Arquímedes** establece:

> **el empuje sobre un cuerpo sumergido es igual al peso del fluido desplazado.**

Matemáticamente:

<div class="formula-panel">
  <span class="formula-panel__label">Empuje</span>
  <div class="formula-panel__formula">E = ρfluido · g · Vdesplazado</div>
  <p>ρ es la densidad del fluido y Vdesplazado el volumen de fluido desplazado.</p>
</div>

La unidad del empuje es el newton.

---

## 17. Ejemplo de empuje

Un objeto desplaza:

**0,0030 m³**

de agua.

Tomamos:

- ρagua = 1000 kg/m³;
- g = 9,8 N/kg.

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Empuje en agua</h3>
  <div class="worked-example-card__steps">
    <p>E = ρgV</p>
    <p>E = 1000 × 9,8 × 0,0030</p>
    <p><strong>E ≈ 29,4 N</strong></p>
  </div>
</div>

---

## 18. Flotar, hundirse o quedar suspendido

Comparamos:

- peso del cuerpo;
- empuje del fluido.

### Si inicialmente E > P

El cuerpo acelera hacia arriba.

### Si E < P

Acelera hacia abajo.

### Si E = P

La resultante vertical puede ser cero.

Un cuerpo flotando en equilibrio cumple:

**E = P**

Esto no significa que esté completamente sumergido.

---

## 19. Densidad y flotabilidad

Para un objeto homogéneo simple en un fluido:

- si su densidad media es menor que la del fluido, puede flotar;
- si es mayor, tiende a hundirse;
- si es igual, puede permanecer suspendido en condiciones apropiadas.

La palabra importante es **densidad media**.

Un barco de acero puede flotar porque:

- contiene gran volumen de aire;
- su masa se distribuye sobre un volumen externo grande;
- la densidad media del conjunto barco + aire puede ser menor que la del agua.

---

## 20. ¿Por qué un barco de acero puede flotar?

Un bloque macizo de acero suele hundirse en agua.

Pero un casco hueco:

- desplaza un volumen grande de agua;
- sin aumentar la masa en la misma proporción.

A medida que el barco se hunde parcialmente:

- desplaza más agua;
- aumenta el empuje.

Se alcanza equilibrio cuando:

**peso del agua desplazada = peso total del barco**

<div class="lesson-callout lesson-callout--error">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">!</span>
    <strong>No depende solamente del material</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Para estudiar flotación debemos considerar el cuerpo completo, su volumen desplazado y su densidad media, no solamente el material de una parte.</p>
  </div>
</div>

---

## 21. Fracción sumergida

Para un cuerpo que flota en equilibrio:

**E = P**

Entonces:

**ρfluido g Vsumergido = ρcuerpo g Vtotal**

De manera idealizada:

<div class="formula-panel">
  <span class="formula-panel__label">Fracción sumergida</span>
  <div class="formula-panel__formula">Vsumergido / Vtotal = ρcuerpo / ρfluido</div>
</div>

Ejemplo:

si la densidad media del cuerpo es:

**0,80 × densidad del agua**

aproximadamente:

**80 % del volumen queda sumergido**

en equilibrio ideal.

---

## 22. Flotación en distintos líquidos

Un mismo objeto puede:

- hundirse en un líquido;
- flotar en otro.

El empuje depende de:

**ρfluido**

Un fluido más denso produce mayor empuje para el mismo volumen desplazado.

Por eso resulta más fácil flotar en agua muy salada que en agua dulce, en igualdad de otras condiciones.

---

## 23. Peso aparente

Cuando un cuerpo está sumergido, el empuje reduce la fuerza que debe ejercer un soporte para sostenerlo.

Podemos hablar de **peso aparente** en contextos simples.

Si el cuerpo cuelga de un dinamómetro:

<div class="formula-panel">
  <span class="formula-panel__label">Lectura ideal del dinamómetro</span>
  <div class="formula-panel__formula">Taparente = P − E</div>
</div>

Esto no significa que la gravedad haya disminuido.

El empuje compensa parte del peso.

---

## 24. Ejemplo de peso aparente

Un objeto pesa en aire:

**50 N**

Al sumergirlo completamente recibe un empuje:

**18 N**

Entonces la tensión del dinamómetro es:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Peso aparente</h3>
  <div class="worked-example-card__steps">
    <p>T = P − E</p>
    <p>T = 50 N − 18 N</p>
    <p><strong>T = 32 N</strong></p>
  </div>
</div>

---

## 25. Submarinos

Un submarino controla su flotabilidad modificando la cantidad de agua y aire en tanques de lastre.

Al aumentar su masa sin cambiar demasiado el volumen externo:

- aumenta su densidad media;
- puede hundirse.

Al expulsar agua e introducir aire:

- disminuye su densidad media;
- puede ascender.

Este proceso se analiza mediante:

- peso;
- empuje;
- densidad media.

---

## 26. Globos y empuje en gases

El principio de Arquímedes también se aplica a gases.

Un globo desplaza aire y recibe empuje.

Para ascender, el sistema completo debe tener condiciones tales que el empuje supere inicialmente su peso.

Ejemplos:

- globos de helio;
- globos de aire caliente.

En un globo de aire caliente, calentar el aire disminuye su densidad, favoreciendo la flotación dentro del aire exterior más denso.

---

## 27. Presión y represas

La presión del agua aumenta con la profundidad.

Por eso una represa debe soportar mayor presión cerca del fondo.

Esto influye en:

- espesor de estructuras;
- diseño de paredes;
- ubicación de conductos.

La presión no es uniforme en toda la pared.

---

## 28. Vasos comunicantes

Si recipientes conectados contienen el mismo líquido y están sometidos a la misma presión externa, el líquido tiende a alcanzar el mismo nivel de equilibrio.

Esto se relaciona con la igualdad de presión a igual profundidad dentro del fluido conectado.

Aplicaciones:

- niveles de agua;
- sistemas de depósitos;
- instrumentos simples.

---

## 29. Manómetros

Un **manómetro** permite medir diferencias de presión.

En un tubo en U con líquido:

- una diferencia de niveles se relaciona con una diferencia de presión.

De forma idealizada:

<div class="formula-panel">
  <span class="formula-panel__label">Diferencia de presión</span>
  <div class="formula-panel__formula">ΔP = ρgΔh</div>
</div>

Este principio utiliza la misma relación hidrostática.

---

## 30. Experiencia: agujeros a distintas alturas

### Objetivo

Observar cualitativamente que la presión aumenta con la profundidad.

### Materiales

- botella plástica;
- agua;
- tres pequeños orificios a distintas alturas;
- recipiente para contener el agua.

### Procedimiento

1. Preparar los orificios con supervisión adulta.
2. Taparlos temporalmente.
3. Llenar la botella.
4. Destapar simultáneamente.
5. Comparar los chorros.

### Interpretación

El orificio más profundo suele producir un chorro inicialmente más intenso o de mayor alcance horizontal porque la diferencia de presión es mayor.

### Seguridad

- realizar sobre una bandeja o exterior;
- no utilizar herramientas cortantes sin supervisión;
- evitar superficies resbaladizas.

---

## 31. Experiencia: flotación y densidad

### Objetivo

Relacionar densidad del fluido con flotación.

### Materiales

- dos vasos;
- agua;
- sal;
- un huevo fresco sin fisuras.

### Procedimiento

1. Llená ambos vasos con agua.
2. En uno disolvé suficiente sal.
3. Introducí cuidadosamente el huevo en cada vaso.
4. Compará.

### Interpretación

Al agregar sal:

- aumenta la densidad de la solución;
- para un mismo volumen desplazado aumenta el empuje.

El comportamiento puede cambiar de hundirse a flotar.

No consumir el huevo después de la experiencia.

---

## 32. Experiencia: principio de Pascal cualitativo

Puede explorarse un sistema hidráulico escolar con:

- dos jeringas sin aguja;
- tubo flexible;
- agua.

Al presionar un émbolo:

- aumenta la presión;
- el cambio se transmite a través del líquido;
- el otro émbolo puede desplazarse.

Debe evitarse:

- usar agujas;
- presurizar excesivamente;
- apuntar conexiones hacia personas.

---

## 33. Errores frecuentes

### “Presión y fuerza son lo mismo”

No. Presión = fuerza por unidad de área.

### “Cuanto más líquido haya, siempre mayor presión”

La presión en un punto depende de la profundidad, no directamente del volumen total.

### “La presión solamente actúa hacia abajo”

No. Un fluido ejerce fuerzas normales sobre superficies en todas las orientaciones.

### “Una prensa hidráulica crea fuerza gratis”

Puede aumentar fuerza, pero cambia también el desplazamiento y no crea energía.

### “Un objeto flota porque no pesa”

Sí tiene peso. Flota cuando el empuje puede equilibrar su peso.

### “Todo objeto de metal se hunde”

No. Importa la densidad media y el volumen de fluido desplazado.

### “El empuje depende del peso del objeto”

El empuje ideal depende del fluido y del volumen desplazado.

---

## 34. Problemas y ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Reconocimiento</strong>
  </div>
  <ol>
    <li>Definí presión y escribí su unidad SI.</li>
    <li>Explicá por qué una punta fina produce más presión con la misma fuerza.</li>
    <li>¿Qué ocurre con la presión de un líquido al aumentar la profundidad?</li>
    <li>Definí empuje.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Cálculo directo</strong>
  </div>
  <ol>
    <li>Una fuerza de 300 N actúa perpendicularmente sobre 0,20 m². Calculá la presión.</li>
    <li>Calculá el aumento de presión a 5,0 m de profundidad en agua usando ρ = 1000 kg/m³ y g = 9,8 N/kg.</li>
    <li>Un cuerpo desplaza 0,002 m³ de agua. Calculá el empuje.</li>
    <li>Una prensa tiene A₁ = 0,005 m² y A₂ = 0,10 m². Si F₁ = 50 N, calculá F₂ ideal.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Interpretación</strong>
  </div>
  <ol>
    <li>Explicá por qué el fondo de una represa debe soportar mayor presión que la zona superior.</li>
    <li>Un objeto pesa 40 N y recibe un empuje de 55 N al estar completamente sumergido. ¿Hacia dónde es la resultante inicial?</li>
    <li>Explicá por qué un barco de acero puede flotar y un bloque macizo de acero puede hundirse.</li>
    <li>Compará el empuje sobre el mismo volumen sumergido en agua y en un líquido de mayor densidad.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Aplicaciones y modelos</strong>
  </div>
  <ol>
    <li>Diseñá una prensa hidráulica ideal con una ventaja de fuerza 25. ¿Qué relación deben tener las áreas?</li>
    <li>Un cuerpo flota con 70 % de su volumen sumergido en agua. Estimá su densidad media.</li>
    <li>Explicá con diferencias de presión cómo funciona un sorbete.</li>
    <li>Diseñá una experiencia para comprobar cualitativamente que la presión hidrostática aumenta con profundidad.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Derivá la expresión de fracción sumergida para un cuerpo flotando a partir de E = P.</li>
    <li>Explicá por qué una prensa hidráulica aumenta fuerza pero no viola conservación de energía.</li>
    <li>Analizá qué cambia en la presión hidrostática si realizamos el mismo experimento en un planeta con menor g.</li>
    <li>Explicá por qué el principio de Arquímedes se aplica también a un cuerpo inmerso en un gas.</li>
  </ol>
</div>

---

## 35. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Qué ocurre con la presión si mantenemos la fuerza y reducimos el área a la mitad?</summary>
  <div class="lesson-quiz__answer">
    La presión se duplica.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿La presión hidrostática depende de la forma del recipiente?</summary>
  <div class="lesson-quiz__answer">
    No directamente. Para un mismo líquido y presión superficial depende principalmente de la profundidad, la densidad y g.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Qué establece el principio de Pascal?</summary>
  <div class="lesson-quiz__answer">
    Que un cambio de presión aplicado a un fluido confinado se transmite a través del fluido.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Qué establece el principio de Arquímedes?</summary>
  <div class="lesson-quiz__answer">
    Que el empuje sobre un cuerpo sumergido es igual al peso del fluido desplazado.
  </div>
</details>

<details class="lesson-quiz">
  <summary>5. ¿Un objeto que flota tiene peso?</summary>
  <div class="lesson-quiz__answer">
    Sí. En equilibrio, el empuje hacia arriba iguala su peso hacia abajo.
  </div>
</details>

<details class="lesson-quiz">
  <summary>6. ¿Por qué la sal puede ayudar a que un objeto flote?</summary>
  <div class="lesson-quiz__answer">
    Porque aumenta la densidad del agua y, para el mismo volumen desplazado, aumenta el empuje.
  </div>
</details>

---

## 36. Resumen

- La presión es fuerza perpendicular por unidad de área.
- Su unidad SI es el pascal.
- A igual fuerza, menor área produce mayor presión.
- En un líquido en reposo la presión aumenta con profundidad.
- La presión hidrostática puede modelarse mediante `P = P₀ + ρgh`.
- La atmósfera ejerce presión.
- El principio de Pascal explica el funcionamiento de sistemas hidráulicos.
- Una prensa hidráulica puede multiplicar fuerza sin crear energía.
- Un cuerpo sumergido recibe un empuje.
- Según Arquímedes, el empuje es igual al peso del fluido desplazado.
- La flotación depende de la relación entre peso, empuje y densidad media.
- Un barco puede flotar aunque parte de su estructura esté hecha de materiales más densos que el agua.
- Los mismos principios se aplican a aplicaciones como submarinos, globos, represas y manómetros.

---

## 37. Siguiente tema recomendado

**FQ-18 — Carácter eléctrico de la materia**

A continuación estudiaremos cómo la estructura atómica se manifiesta en fenómenos eléctricos.

Trabajaremos con:

- carga eléctrica;
- cargas positivas y negativas;
- conservación de la carga;
- electrización por frotamiento, contacto e inducción;
- conductores y aislantes;
- atracción y repulsión;
- electroscopio;
- relación con estructura atómica;
- ley de Coulomb introductoria;
- campo eléctrico.
