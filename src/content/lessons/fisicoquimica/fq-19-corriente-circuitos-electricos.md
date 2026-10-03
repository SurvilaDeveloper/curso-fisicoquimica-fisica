---
title: "Corriente y circuitos eléctricos"
description: "Cómo funcionan los circuitos eléctricos: corriente, diferencia de potencial, resistencia, ley de Ohm, conexiones serie y paralelo, potencia, energía y seguridad."
slug: "corriente-y-circuitos-electricos"

course: "fisicoquimica"
module: "electricidad"
order: 19

level: "intermedio"
cycle: "ambos"

yearsApprox: [2, 3, 4]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - caracter-electrico-de-la-materia
  - energia-calor-y-temperatura

skills:
  - corriente-electrica
  - circuitos
  - diferencia-de-potencial
  - resistencia
  - ley-de-ohm
  - serie-y-paralelo
  - potencia-electrica
  - energia-electrica
  - efecto-joule
  - consumo-electrico
  - seguridad-electrica

hasExercises: true
hasQuiz: true
hasExperiment: true

deepening: true
status: "complete"
---

## ¿Qué hace que una lámpara se encienda?

Una pila, dos cables y una lámpara pequeña pueden formar un circuito capaz de producir luz.

Pero para que funcione no alcanza con “tener electricidad”.

Necesitamos comprender:

- qué se mueve;
- qué impulsa ese movimiento;
- qué camino sigue la corriente;
- qué papel cumple cada componente;
- cómo se transforma la energía.

La pregunta central es:

> **¿cómo se establece y mantiene una corriente eléctrica en un circuito y cómo se relacionan corriente, tensión, resistencia, potencia y energía?**

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Un circuito no “gasta corriente”. La carga se conserva. Lo que los dispositivos reciben y transforman es energía, mientras la corriente describe un flujo neto de carga.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta lección deberías poder:

- definir corriente eléctrica;
- distinguir corriente convencional y movimiento de electrones;
- reconocer los elementos básicos de un circuito;
- explicar el papel de una fuente;
- distinguir conductores, receptores e interruptores;
- comprender la diferencia de potencial;
- definir resistencia eléctrica;
- aplicar la ley de Ohm en casos sencillos;
- comparar circuitos serie y paralelo;
- calcular resistencia equivalente sencilla;
- calcular potencia eléctrica;
- relacionar potencia, energía y tiempo;
- interpretar el efecto Joule;
- comprender el significado del kWh;
- analizar consumo eléctrico;
- reconocer principios esenciales de seguridad eléctrica domiciliaria.

---

## 1. De la electrostática a la corriente

En FQ-18 estudiamos principalmente cargas:

- acumuladas;
- separadas;
- redistribuidas.

Ahora nos interesa otra situación:

> **carga eléctrica moviéndose de manera sostenida a través de un material.**

A ese fenómeno lo describimos mediante la **corriente eléctrica**.

---

## 2. Corriente eléctrica

La corriente eléctrica mide la cantidad neta de carga que atraviesa una sección de un conductor por unidad de tiempo.

<div class="formula-panel">
  <span class="formula-panel__label">Corriente eléctrica</span>
  <div class="formula-panel__formula">I = ΔQ / Δt</div>
  <p>I es la corriente, ΔQ la carga neta que atraviesa una sección y Δt el intervalo de tiempo.</p>
</div>

Unidad SI:

**ampere (A)**

Por definición:

<div class="formula-panel">
  <span class="formula-panel__label">Ampere</span>
  <div class="formula-panel__formula">1 A = 1 C/s</div>
</div>

---

## 3. Ejemplo de corriente

Si a través de una sección pasan:

**12 C**

en:

**4 s**

entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Carga por unidad de tiempo</h3>
  <div class="worked-example-card__steps">
    <p>I = ΔQ / Δt</p>
    <p>I = 12 C / 4 s</p>
    <p><strong>I = 3 A</strong></p>
  </div>
</div>

Una corriente mayor significa mayor cantidad de carga neta atravesando la sección por unidad de tiempo.

---

## 4. Corriente convencional y electrones

Por convención histórica, la dirección de la corriente se define como el sentido en que se moverían cargas positivas.

En un conductor metálico:

- los portadores móviles son principalmente electrones;
- los electrones se desplazan en sentido opuesto a la corriente convencional.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Dos sentidos distintos, una sola convención de circuito</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Los diagramas de circuitos suelen utilizar corriente convencional. Esto no contradice que los electrones de conducción en un metal se desplacen en el sentido opuesto.</p>
  </div>
</div>

---

## 5. ¿Los electrones salen de la pila y llegan instantáneamente a la lámpara?

No conviene imaginar un circuito como un tubo vacío que la pila comienza a llenar con electrones.

En un conductor metálico ya existen electrones móviles.

Cuando se establece un campo eléctrico en un circuito cerrado:

- los portadores distribuidos por el conductor responden;
- se establece corriente en todo el circuito tras un breve proceso electromagnético.

El movimiento medio de deriva de los electrones puede ser mucho más lento que la propagación del cambio eléctrico por el circuito.

---

## 6. Circuito eléctrico

Un **circuito eléctrico** es un conjunto de componentes conectados que permite establecer un camino para la corriente y transferir energía eléctrica.

Un circuito sencillo puede incluir:

- fuente;
- conductores;
- receptor o carga;
- interruptor.

Para mantener una corriente continua necesitamos, en el modelo básico:

- un camino conductor cerrado;
- una fuente capaz de mantener una diferencia de potencial.

---

## 7. Circuito abierto y circuito cerrado

### Circuito cerrado

Existe un camino conductor completo.

Puede circular corriente.

### Circuito abierto

El camino está interrumpido.

En el modelo ideal, la corriente por esa rama es cero.

Un interruptor permite controlar esta condición.

```text
cerrado:   fuente ─── lámpara ─── retorno
abierto:   fuente ───/ ─ lámpara ─ retorno
```

---

## 8. La fuente

Una **fuente eléctrica** mantiene una diferencia de potencial entre dos terminales y permite transferir energía al circuito.

Ejemplos:

- pila;
- batería;
- fuente de laboratorio;
- generador.

Una fuente transforma otras formas de energía.

Por ejemplo, una batería puede transformar energía química en energía eléctrica disponible para el circuito.

---

## 9. Conductores

Los **conductores** permiten el movimiento ordenado de portadores de carga con relativa facilidad.

En cables eléctricos se utilizan metales como cobre o aluminio.

El cable real incluye también:

- material conductor;
- aislación;
- recubrimientos y protecciones.

No todo el cable cumple la misma función.

---

## 10. Receptores o cargas

Un **receptor** es un componente que recibe energía eléctrica y la transforma.

Ejemplos:

### Lámpara

Puede transformar energía eléctrica en:

- luz;
- energía interna.

### Motor

En:

- movimiento;
- energía interna;
- sonido.

### Resistencia calefactora

Principalmente en:

- energía interna.

<div class="lesson-callout lesson-callout--error">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">!</span>
    <strong>El receptor no “consume electrones”</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Las cargas continúan por el circuito. El dispositivo transforma energía; no destruye los electrones que transportan carga.</p>
  </div>
</div>

---

## 11. Interruptores

Un **interruptor** controla la continuidad de un camino conductor.

Puede:

- abrir el circuito;
- cerrarlo;
- seleccionar caminos en dispositivos más complejos.

En circuitos escolares de baja tensión permite controlar una lámpara o LED sin desconectar manualmente cada cable.

---

## 12. Diferencia de potencial

La **diferencia de potencial eléctrico**, también llamada tensión o voltaje, expresa una diferencia de energía potencial eléctrica por unidad de carga.

Símbolo frecuente:

**V** o **ΔV**

Unidad:

**volt (V)**

<div class="formula-panel">
  <span class="formula-panel__label">Diferencia de potencial</span>
  <div class="formula-panel__formula">ΔV = ΔE / q</div>
  <p>En esta interpretación, una diferencia de potencial de 1 V corresponde a 1 J de diferencia de energía por cada coulomb de carga.</p>
</div>

Por eso:

**1 V = 1 J/C**

---

## 13. La tensión no es corriente

Una fuente puede mantener una diferencia de potencial incluso si el circuito está abierto.

En ese caso puede haber:

- tensión entre terminales;
- corriente prácticamente nula por el circuito externo.

Esto muestra que:

- corriente;
- diferencia de potencial;

son magnitudes diferentes.

<table class="lesson-comparison">
  <thead>
    <tr>
      <th>Magnitud</th>
      <th>Símbolo</th>
      <th>Unidad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Corriente</td>
      <td>I</td>
      <td>A</td>
    </tr>
    <tr>
      <td>Diferencia de potencial</td>
      <td>V o ΔV</td>
      <td>V</td>
    </tr>
    <tr>
      <td>Resistencia</td>
      <td>R</td>
      <td>Ω</td>
    </tr>
  </tbody>
</table>

---

## 14. Resistencia eléctrica

La **resistencia eléctrica** describe la oposición que presenta un componente al establecimiento de corriente bajo determinadas condiciones.

Símbolo:

**R**

Unidad:

**ohm (Ω)**

La resistencia depende de:

- material;
- geometría;
- temperatura;
- estructura del componente.

En ciertos materiales y rangos de funcionamiento puede tratarse aproximadamente como constante.

---

## 15. Ley de Ohm

Para un componente **óhmico** en condiciones donde su resistencia permanece aproximadamente constante:

<div class="formula-panel">
  <span class="formula-panel__label">Ley de Ohm</span>
  <div class="formula-panel__formula">V = I · R</div>
</div>

También:

**I = V/R**

y:

**R = V/I**

Esta relación no es una definición universal de todo dispositivo eléctrico.

Hay componentes no óhmicos.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Ohm es un modelo de comportamiento</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Una resistencia metálica idealizada puede presentar V proporcional a I. Un LED, una lámpara incandescente caliente y otros dispositivos pueden tener relaciones V-I más complejas.</p>
  </div>
</div>

---

## 16. Ejemplo de ley de Ohm

Una resistencia de:

**R = 6 Ω**

se conecta a:

**V = 12 V**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Corriente en una resistencia óhmica</h3>
  <div class="worked-example-card__steps">
    <p>I = V/R</p>
    <p>I = 12 V / 6 Ω</p>
    <p><strong>I = 2 A</strong></p>
  </div>
</div>

---

## 17. Gráfico V-I

Para un resistor óhmico:

**V = IR**

Si graficamos:

- V en vertical;
- I en horizontal;

obtenemos una recta que pasa por el origen.

Su pendiente es:

<div class="formula-panel">
  <span class="formula-panel__label">Pendiente V-I</span>
  <div class="formula-panel__formula">pendiente = ΔV/ΔI = R</div>
</div>

Mayor pendiente significa mayor resistencia.

---

## 18. Resistividad y geometría — profundización

Para un conductor uniforme:

<div class="formula-panel">
  <span class="formula-panel__label">Resistencia de un conductor</span>
  <div class="formula-panel__formula">R = ρ · L / A</div>
  <p>ρ es la resistividad del material, L la longitud y A el área transversal.</p>
</div>

Esto ayuda a comprender que:

- cable más largo → mayor resistencia;
- cable más grueso → menor resistencia;
- materiales diferentes → distinta resistividad.

La resistividad no es lo mismo que la densidad.

---

## 19. Circuito en serie

Dos o más componentes están en **serie** cuando forman un único camino para la corriente.

```text
fuente ── R1 ── R2 ── retorno
```

En un circuito serie ideal:

- la misma corriente atraviesa todos los componentes;
- las diferencias de potencial se reparten;
- la resistencia equivalente es la suma.

<div class="formula-panel">
  <span class="formula-panel__label">Resistencia equivalente en serie</span>
  <div class="formula-panel__formula">Req = R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub> + ...</div>
</div>

---

## 20. ¿Por qué la corriente es la misma en serie?

En un único camino estable no puede acumularse carga indefinidamente en cada componente.

La carga que atraviesa una sección por unidad de tiempo debe coincidir con la que atraviesa las demás.

Por eso:

**I<sub>1</sub> = I<sub>2</sub> = I<sub>3</sub> = ...**

en un circuito serie ideal en régimen estacionario.

---

## 21. Ejemplo de resistencias en serie

Tenemos:

- R<sub>1</sub> = 4 Ω;
- R<sub>2</sub> = 8 Ω;
- fuente = 24 V.

Resistencia equivalente:

**Req = 4 + 8 = 12 Ω**

Corriente:

**I = 24/12 = 2 A**

Caídas de tensión:

- V<sub>1</sub> = 2 × 4 = 8 V;
- V<sub>2</sub> = 2 × 8 = 16 V.

Comprobación:

**8 V + 16 V = 24 V**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Dos resistencias en serie</h3>
  <div class="worked-example-card__steps">
    <p>Req = 12 Ω</p>
    <p>I = 2 A</p>
    <p>V<sub>1</sub> = 8 V</p>
    <p>V<sub>2</sub> = 16 V</p>
    <p><strong>V<sub>1</sub> + V<sub>2</sub> = 24 V</strong></p>
  </div>
</div>

---

## 22. Circuito en paralelo

Dos componentes están en **paralelo** cuando están conectados entre los mismos dos nodos y forman caminos diferentes.

```text
          ┌── R1 ──┐
fuente ───┤        ├── retorno
          └── R2 ──┘
```

En paralelo ideal:

- cada rama tiene la misma diferencia de potencial;
- la corriente total se reparte entre ramas.

<div class="formula-panel">
  <span class="formula-panel__label">Corriente total</span>
  <div class="formula-panel__formula">Itotal = I<sub>1</sub> + I<sub>2</sub> + I<sub>3</sub> + ...</div>
</div>

---

## 23. Resistencia equivalente en paralelo

Para resistencias en paralelo:

<div class="formula-panel">
  <span class="formula-panel__label">Resistencia equivalente en paralelo</span>
  <div class="formula-panel__formula">1/Req = 1/R<sub>1</sub> + 1/R<sub>2</sub> + 1/R<sub>3</sub> + ...</div>
</div>

Para dos resistencias puede utilizarse:

<div class="formula-panel">
  <span class="formula-panel__label">Dos resistencias en paralelo</span>
  <div class="formula-panel__formula">Req = R<sub>1</sub>R<sub>2</sub> / (R<sub>1</sub> + R<sub>2</sub>)</div>
</div>

La resistencia equivalente en paralelo es menor que cualquiera de las resistencias individuales.

---

## 24. Ejemplo en paralelo

Tenemos:

- R<sub>1</sub> = 6 Ω;
- R<sub>2</sub> = 3 Ω;
- V = 12 V.

Corrientes:

**I<sub>1</sub> = 12/6 = 2 A**

**I<sub>2</sub> = 12/3 = 4 A**

Corriente total:

**Itotal = 6 A**

Entonces:

**Req = V/Itotal = 12/6 = 2 Ω**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Dos ramas en paralelo</h3>
  <div class="worked-example-card__steps">
    <p>V<sub>1</sub> = V<sub>2</sub> = 12 V</p>
    <p>I<sub>1</sub> = 2 A</p>
    <p>I<sub>2</sub> = 4 A</p>
    <p>Itotal = 6 A</p>
    <p><strong>Req = 2 Ω</strong></p>
  </div>
</div>

---

## 25. Serie y paralelo comparados

<table class="lesson-comparison">
  <thead>
    <tr>
      <th>Propiedad</th>
      <th>Serie</th>
      <th>Paralelo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Caminos</td>
      <td>Uno</td>
      <td>Varios</td>
    </tr>
    <tr>
      <td>Corriente</td>
      <td>Igual en todos</td>
      <td>Se reparte</td>
    </tr>
    <tr>
      <td>Tensión</td>
      <td>Se reparte</td>
      <td>Igual en cada rama</td>
    </tr>
    <tr>
      <td>Req</td>
      <td>Suma de resistencias</td>
      <td>Menor que cada rama individual</td>
    </tr>
  </tbody>
</table>

---

## 26. ¿Por qué las instalaciones domiciliarias usan ramas?

Los receptores de una vivienda necesitan funcionar de manera relativamente independiente.

En una conexión en paralelo:

- cada rama recibe la tensión de la instalación;
- apagar un receptor no debería abrir el camino de todos los demás.

Una instalación real es mucho más compleja e incluye protecciones.

No debe modificarse utilizando los circuitos escolares como guía práctica.

<div class="lesson-callout lesson-callout--error">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">!</span>
    <strong>Circuito escolar ≠ instalación domiciliaria</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Los circuitos con pilas sirven para aprender principios. Una instalación conectada a la red puede producir lesiones graves o incendio y debe ser intervenida únicamente por personas calificadas.</p>
  </div>
</div>

---

## 27. Potencia eléctrica

La **potencia** indica la rapidez con que se transfiere o transforma energía.

<div class="formula-panel">
  <span class="formula-panel__label">Potencia</span>
  <div class="formula-panel__formula">P = E / t</div>
</div>

En un circuito eléctrico:

<div class="formula-panel">
  <span class="formula-panel__label">Potencia eléctrica</span>
  <div class="formula-panel__formula">P = V · I</div>
</div>

Unidad:

**watt (W)**

Y:

**1 W = 1 J/s**

---

## 28. Potencia en un resistor

Combinando:

**P = VI**

con:

**V = IR**

podemos obtener:

<div class="formula-panel">
  <span class="formula-panel__label">Potencia resistiva</span>
  <div class="formula-panel__formula">P = I²R</div>
</div>

y:

<div class="formula-panel">
  <span class="formula-panel__label">Otra forma</span>
  <div class="formula-panel__formula">P = V²/R</div>
</div>

Estas expresiones son útiles cuando el comportamiento es resistivo y las magnitudes utilizadas son compatibles con el modelo.

---

## 29. Ejemplo de potencia

Un dispositivo trabaja a:

- V = 12 V;
- I = 2,5 A.

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Potencia eléctrica</h3>
  <div class="worked-example-card__steps">
    <p>P = V · I</p>
    <p>P = 12 V × 2,5 A</p>
    <p><strong>P = 30 W</strong></p>
  </div>
</div>

Esto significa una transformación de energía a razón de:

**30 J cada segundo**

en las condiciones consideradas.

---

## 30. Energía eléctrica

Si un dispositivo funciona con potencia aproximadamente constante:

<div class="formula-panel">
  <span class="formula-panel__label">Energía</span>
  <div class="formula-panel__formula">E = P · t</div>
</div>

En SI:

- P en W;
- t en s;
- E en J.

También se usa en consumo eléctrico:

- kW;
- h;
- kWh.

---

## 31. Kilowatt-hora

El **kilowatt-hora (kWh)** es una unidad de energía.

No es una unidad de potencia.

<div class="formula-panel">
  <span class="formula-panel__label">Conversión</span>
  <div class="formula-panel__formula">1 kWh = 3,6 × 10⁶ J</div>
</div>

Porque:

**1 kW = 1000 W**

y:

**1 h = 3600 s**

Entonces:

**1000 × 3600 = 3 600 000 J**

---

## 32. Ejemplo de consumo

Un aparato de:

**1500 W = 1,5 kW**

funciona durante:

**2 h**

Energía:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Consumo energético</h3>
  <div class="worked-example-card__steps">
    <p>E = P · t</p>
    <p>E = 1,5 kW × 2 h</p>
    <p><strong>E = 3,0 kWh</strong></p>
  </div>
</div>

El costo monetario depende de la tarifa aplicable y otros componentes de la facturación, no solamente de este cálculo físico.

---

## 33. Efecto Joule

Cuando una corriente atraviesa un material resistivo, parte de la energía eléctrica se transforma en energía interna.

Este fenómeno se conoce como **efecto Joule**.

Aplicaciones deseadas:

- estufas eléctricas;
- tostadoras;
- pavas eléctricas;
- resistencias calefactoras.

También aparece como pérdida no deseada:

- calentamiento de cables;
- componentes electrónicos;
- líneas de transmisión.

---

## 34. Calentamiento y corriente

Para un resistor:

**P = I²R**

Esto muestra que, si R permanece constante:

- duplicar I;
- multiplica la potencia térmica por 4.

Por eso corrientes excesivas pueden producir calentamientos peligrosos.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>El calentamiento puede crecer muy rápido</strong>
  </div>
  <div class="lesson-callout__body">
    <p>El término I² hace que pequeñas variaciones importantes de corriente puedan aumentar mucho la potencia disipada en un conductor resistivo.</p>
  </div>
</div>

---

## 35. Cortocircuito

Un **cortocircuito** aparece cuando se establece un camino de resistencia muy baja entre puntos con diferencia de potencial.

En un modelo simple:

**I = V/R**

Si R se vuelve muy pequeña:

- la corriente puede crecer enormemente.

En una instalación real, la corriente está limitada por múltiples resistencias e impedancias, pero todavía puede alcanzar valores peligrosos.

Consecuencias posibles:

- calentamiento;
- daño;
- incendio;
- arco eléctrico.

---

## 36. Sobrecarga

Una **sobrecarga** no es exactamente lo mismo que un cortocircuito.

Ocurre cuando un circuito transporta durante un tiempo una corriente mayor que la prevista para sus conductores o protecciones.

Por ejemplo, conectar demasiados receptores de alta potencia a un mismo circuito puede aumentar la corriente total.

Esto puede calentar cables y conexiones.

---

## 37. Fusibles e interruptores automáticos

Las instalaciones utilizan dispositivos destinados a interrumpir la corriente en situaciones anormales.

### Fusible

Un elemento se funde al superar ciertas condiciones de corriente.

### Interruptor automático o termomagnético

Puede abrir el circuito ante:

- sobrecorrientes;
- cortocircuitos;

según su diseño.

Estos dispositivos ayudan a proteger conductores e instalaciones.

No reemplazan otras medidas de seguridad.

---

## 38. Interruptor diferencial

Un **interruptor diferencial** compara corrientes que entran y salen por los conductores activos del circuito.

Si detecta una diferencia anormal compatible con una fuga:

- puede desconectar rápidamente.

Su función es diferente de la de una protección contra sobrecorriente.

En una instalación segura se utilizan protecciones complementarias.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Protecciones distintas, problemas distintos</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Una termomagnética protege principalmente frente a sobrecorrientes. Un diferencial detecta corrientes de fuga. Ningún dispositivo vuelve segura una manipulación incorrecta.</p>
  </div>
</div>

---

## 39. Puesta a tierra

La **puesta a tierra** de protección proporciona un camino diseñado para corrientes de falla en determinados equipos e instalaciones.

Trabaja conjuntamente con las protecciones para reducir riesgos.

No debemos confundir:

- tierra de protección;
- conductor neutro;
- “cero volts” en un circuito escolar.

Son conceptos relacionados con funciones diferentes.

---

## 40. Choque eléctrico

Una corriente que atraviesa el cuerpo humano puede producir lesiones graves.

El riesgo depende de muchos factores:

- corriente;
- trayectoria por el cuerpo;
- duración;
- frecuencia;
- condiciones de contacto;
- humedad;
- estado de la piel;
- tensión disponible.

Por eso no existe una práctica segura consistente en “probar” una instalación con el cuerpo.

<div class="lesson-callout lesson-callout--error">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">!</span>
    <strong>Nunca experimentar con la red eléctrica</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Las actividades de esta lección deben hacerse únicamente con pilas o fuentes didácticas de baja tensión. No se deben introducir objetos en tomacorrientes, desmontar enchufes, abrir tableros ni manipular conductores de una instalación energizada.</p>
  </div>
</div>

---

## 41. Agua y electricidad

El agua pura ideal conduce poco, pero el agua cotidiana contiene:

- sales;
- iones;
- otras sustancias.

Además, la piel mojada puede reducir mucho la resistencia del contacto.

Por eso:

- no manipular aparatos eléctricos con manos mojadas;
- mantener equipos alejados de bañeras, piletas y zonas húmedas;
- desconectar de forma segura antes de limpiar o inspeccionar un equipo, siguiendo instrucciones del fabricante.

---

## 42. Cables y alargues

Un cable real tiene límites de funcionamiento.

Factores importantes:

- sección conductora;
- material;
- longitud;
- corriente;
- ventilación;
- calidad de conexiones.

Enrollar cables, sobrecargar alargues o utilizar conexiones deterioradas puede aumentar el riesgo de calentamiento.

No debe improvisarse una reparación de red con criterios de circuitos escolares.

---

## 43. Consumo y eficiencia

Dos aparatos pueden realizar una función semejante utilizando distinta energía.

La **eficiencia energética** considera cuánto de la energía suministrada se convierte en el efecto útil buscado.

Ejemplo:

en iluminación interesa producir luz con menor consumo y menor disipación innecesaria.

Pero la comparación completa también puede considerar:

- duración;
- materiales;
- costo;
- condiciones de uso;
- impacto ambiental.

---

## 44. Potencia de distintos aparatos

La potencia nominal indica la tasa de transferencia o transformación de energía bajo condiciones especificadas.

Un aparato de mayor potencia:

- no necesariamente consume más energía en cualquier uso;
- depende también del tiempo de funcionamiento.

Ejemplo:

- aparato A: 2000 W durante 5 min;
- aparato B: 500 W durante 1 h.

Para comparar energía debemos usar:

**E = Pt**

---

## 45. Experiencia segura: pila, lámpara e interruptor

### Objetivo

Construir un circuito simple de baja tensión.

### Materiales

- pila o portapilas de baja tensión;
- lámpara pequeña compatible o módulo didáctico;
- cables adecuados;
- interruptor escolar.

### Procedimiento

1. Con la fuente desconectada, prepará el circuito.
2. Verificá que no haya un camino directo entre los terminales de la pila.
3. Cerrá el interruptor.
4. Observá la lámpara.
5. Abrí el interruptor.
6. Explicá qué cambia en el circuito.

### Seguridad

- utilizar solamente componentes compatibles;
- no cortocircuitar pilas;
- detener la experiencia si un componente se calienta;
- nunca reemplazar la pila por la red eléctrica domiciliaria.

---

## 46. Experiencia: serie y paralelo en baja tensión

Con lámparas o resistencias didácticas compatibles podemos comparar:

### Serie

- un único camino;
- la tensión se reparte.

### Paralelo

- varios caminos;
- cada rama se conecta entre los mismos nodos.

Podemos observar cualitativamente:

- brillo;
- independencia de ramas;
- efecto de retirar un componente.

El brillo no constituye por sí solo una medición precisa de potencia o corriente.

---

## 47. Medición eléctrica — ampliación

En un laboratorio escolar puede utilizarse un multímetro bajo supervisión.

Conceptualmente:

### Amperímetro

Se conecta de forma que la corriente de la rama atraviese el instrumento.

### Voltímetro

Se conecta entre dos puntos para medir diferencia de potencial.

La conexión incorrecta puede:

- alterar el circuito;
- dañar el instrumento;
- producir un cortocircuito.

Por eso esta práctica debe realizarse únicamente en circuitos didácticos de baja tensión y siguiendo el manual del instrumento.

---

## 48. Errores frecuentes

### “La corriente se gasta al pasar por una lámpara”

No. En régimen estacionario la carga se conserva; el receptor transforma energía.

### “Voltaje y corriente son lo mismo”

No. Son magnitudes diferentes.

### “V = IR funciona exactamente para cualquier componente”

No. Describe componentes óhmicos bajo condiciones apropiadas.

### “En serie la corriente se va haciendo más pequeña”

No. En un único camino ideal la misma corriente atraviesa todos los componentes.

### “En paralelo la tensión se reparte”

No. Las ramas conectadas entre los mismos nodos tienen la misma diferencia de potencial.

### “kWh es potencia”

No. Es una unidad de energía.

### “Un fusible, una termomagnética y un diferencial hacen lo mismo”

No. Cumplen funciones diferentes y complementarias.

### “Baja tensión escolar y red domiciliaria son equivalentes”

No. Las experiencias didácticas nunca deben trasladarse directamente a la red.

---

## 49. Problemas y ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Reconocimiento</strong>
  </div>
  <ol>
    <li>Definí corriente eléctrica y escribí su unidad.</li>
    <li>Explicá la diferencia entre corriente y diferencia de potencial.</li>
    <li>¿Qué función cumple una fuente?</li>
    <li>¿Qué ocurre con la corriente ideal en un circuito abierto?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Ley de Ohm</strong>
  </div>
  <ol>
    <li>Una resistencia de 10 Ω se conecta a 20 V. Calculá la corriente.</li>
    <li>Por una resistencia circulan 3 A y tiene 4 Ω. Calculá la tensión.</li>
    <li>Un componente tiene 12 V entre sus terminales y conduce 0,50 A. Calculá R si se comporta óhmicamente.</li>
    <li>Explicá qué representa la pendiente de un gráfico V-I de un resistor óhmico.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Serie y paralelo</strong>
  </div>
  <ol>
    <li>Calculá Req de 5 Ω y 7 Ω en serie.</li>
    <li>Calculá Req de dos resistencias de 6 Ω en paralelo.</li>
    <li>Dos resistencias de 4 Ω y 8 Ω están en serie con 24 V. Calculá corriente y caída de tensión en cada una.</li>
    <li>Dos resistencias de 6 Ω y 3 Ω están en paralelo a 12 V. Calculá corrientes de rama y corriente total.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Potencia, energía y consumo</strong>
  </div>
  <ol>
    <li>Un dispositivo funciona a 24 V y 2 A. Calculá su potencia.</li>
    <li>Un aparato de 1000 W funciona durante 3 h. Calculá la energía en kWh.</li>
    <li>Convertí 2,0 kWh a joules.</li>
    <li>Compará la energía usada por un equipo de 1500 W durante 10 min con otro de 300 W durante 1 h.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización y seguridad</strong>
  </div>
  <ol>
    <li>Usando P = I²R, explicá por qué una corriente excesiva puede calentar fuertemente un cable.</li>
    <li>Explicá por qué agregar ramas en paralelo puede aumentar la corriente total solicitada a una fuente.</li>
    <li>Compará la función de una protección contra sobrecorriente con la de un interruptor diferencial.</li>
    <li>Analizá por qué el modelo escolar de resistencias ideales no alcanza para diseñar una instalación eléctrica real.</li>
  </ol>
</div>

---

## 50. Ejemplo integrado

Tenemos una fuente ideal de:

**12 V**

y dos resistencias en paralelo:

- R<sub>1</sub> = 12 Ω;
- R<sub>2</sub> = 6 Ω.

### Corriente en R<sub>1</sub>

**I<sub>1</sub> = 12/12 = 1 A**

### Corriente en R<sub>2</sub>

**I<sub>2</sub> = 12/6 = 2 A**

### Corriente total

**Itotal = 1 + 2 = 3 A**

### Potencia total

**P = V · Itotal**

**P = 12 × 3 = 36 W**

También:

- P<sub>1</sub> = 12 × 1 = 12 W;
- P<sub>2</sub> = 12 × 2 = 24 W.

Entonces:

**Ptotal = 12 + 24 = 36 W**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>Paralelo, corriente y potencia</h3>
  <div class="worked-example-card__steps">
    <p>I<sub>1</sub> = 1 A</p>
    <p>I<sub>2</sub> = 2 A</p>
    <p>Itotal = 3 A</p>
    <p>P<sub>1</sub> = 12 W</p>
    <p>P<sub>2</sub> = 24 W</p>
    <p><strong>Ptotal = 36 W</strong></p>
  </div>
</div>

Este resultado muestra cómo las corrientes de las ramas y las potencias se suman.

---

## 51. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Qué mide la corriente eléctrica?</summary>
  <div class="lesson-quiz__answer">
    La cantidad neta de carga que atraviesa una sección por unidad de tiempo.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Qué ocurre con la corriente en componentes conectados en serie?</summary>
  <div class="lesson-quiz__answer">
    En un circuito serie ideal en régimen estacionario, la misma corriente atraviesa todos los componentes.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Qué ocurre con la diferencia de potencial en ramas en paralelo?</summary>
  <div class="lesson-quiz__answer">
    Cada rama conectada entre los mismos dos nodos tiene la misma diferencia de potencial.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. Un resistor de 5 Ω tiene 10 V. ¿Qué corriente circula?</summary>
  <div class="lesson-quiz__answer">
    I = V/R = 10/5 = 2 A.
  </div>
</details>

<details class="lesson-quiz">
  <summary>5. ¿Qué unidad es el kWh?</summary>
  <div class="lesson-quiz__answer">
    Una unidad de energía.
  </div>
</details>

<details class="lesson-quiz">
  <summary>6. ¿Por qué no debemos experimentar con la red domiciliaria?</summary>
  <div class="lesson-quiz__answer">
    Porque puede producir corrientes peligrosas, quemaduras, incendios y lesiones graves. Las experiencias escolares deben limitarse a baja tensión segura.
  </div>
</details>

---

## 52. Resumen

- La corriente eléctrica es carga neta por unidad de tiempo y se mide en amperes.
- La corriente convencional tiene sentido opuesto al movimiento de electrones en metales.
- Un circuito necesita un camino adecuado y una fuente para mantener corriente sostenida.
- La fuente mantiene una diferencia de potencial y transfiere energía al circuito.
- Los receptores transforman energía; no consumen electrones.
- La diferencia de potencial se mide en volts.
- La resistencia se mide en ohms.
- Para componentes óhmicos puede utilizarse `V = IR`.
- En serie la corriente es común y las tensiones se reparten.
- En paralelo la tensión es común y las corrientes se reparten.
- La potencia eléctrica puede calcularse con `P = VI`.
- La energía puede calcularse con `E = Pt`.
- El kWh es una unidad de energía.
- El efecto Joule transforma energía eléctrica en energía interna.
- Corrientes excesivas pueden provocar calentamiento peligroso.
- Las instalaciones usan protecciones frente a distintos tipos de falla.
- Las experiencias escolares deben realizarse sólo con baja tensión y nunca directamente con la red domiciliaria.

---

## 53. Siguiente tema recomendado

**FQ-20 — Magnetismo y electromagnetismo introductorio**

En la próxima lección conectaremos electricidad y magnetismo.

Trabajaremos con:

- imanes;
- polos;
- campo magnético;
- líneas de campo;
- magnetismo terrestre;
- corriente eléctrica y campo magnético;
- experiencia de Oersted;
- electroimanes;
- aplicaciones;
- inducción electromagnética como idea introductoria.
