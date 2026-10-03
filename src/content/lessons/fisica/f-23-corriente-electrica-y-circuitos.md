---
title: "Corriente eléctrica y circuitos"
description: "Cómo describir el movimiento de cargas en circuitos mediante corriente, diferencia de potencial, resistencia, ley de Ohm, potencia, asociaciones, fuerza electromotriz, Kirchhoff e instrumentos de medición."
slug: "corriente-electrica-y-circuitos"

course: "fisica"
module: "electricidad"
order: 23

level: "intermedio"
cycle: "ambos"

yearsApprox: [4, 5, 6]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - electrostatica

skills:
  - corriente-electrica
  - intensidad-de-corriente
  - portadores-de-carga
  - diferencia-de-potencial
  - resistencia
  - resistividad
  - resistencia-geometrica
  - dependencia-con-temperatura
  - ley-de-ohm
  - potencia-electrica
  - efecto-joule
  - energia-electrica
  - circuitos-en-serie
  - circuitos-en-paralelo
  - asociacion-de-resistencias
  - fuerza-electromotriz
  - resistencia-interna
  - leyes-de-kirchhoff
  - amperimetro
  - voltimetro
  - multimetro
  - seguridad-electrica

hasExercises: true
hasQuiz: true
hasExperiment: true

deepening: true
status: "complete"
---

## Una batería no “manda electricidad” que se va gastando por el camino

Conectamos una batería, cables y una lámpara.

La lámpara enciende.

Una explicación apresurada podría decir:

> “la batería manda corriente y la lámpara la consume”.

Pero esa frase mezcla conceptos diferentes.

En un circuito debemos distinguir:

- carga;
- corriente;
- diferencia de potencial;
- energía;
- resistencia;
- potencia.

La corriente eléctrica describe flujo de carga.

La energía eléctrica transferida puede transformarse en:

- luz;
- energía interna;
- movimiento;
- otras formas.

> **La carga no se “consume” en un receptor idealmente estacionario: lo que se transforma es la energía asociada al movimiento de las cargas a través del circuito.**

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Un circuito eléctrico se comprende mejor separando dos balances: conservación de carga, que organiza las corrientes, y conservación de energía, que organiza las diferencias de potencial y la potencia.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta lección deberías poder:

- definir corriente eléctrica;
- calcular intensidad de corriente;
- distinguir corriente convencional y movimiento electrónico;
- identificar portadores de carga en distintos materiales;
- interpretar diferencia de potencial;
- definir resistencia eléctrica;
- distinguir resistencia y resistividad;
- relacionar resistencia con longitud y sección;
- interpretar su dependencia con la temperatura;
- aplicar la ley de Ohm cuando corresponde;
- distinguir elementos óhmicos y no óhmicos;
- calcular potencia eléctrica;
- interpretar el efecto Joule;
- calcular energía eléctrica;
- analizar circuitos en serie;
- analizar circuitos en paralelo;
- calcular resistencias equivalentes;
- comprender la fuerza electromotriz;
- interpretar resistencia interna como profundización;
- aplicar las leyes de Kirchhoff;
- usar correctamente amperímetro, voltímetro y multímetro;
- reconocer prácticas básicas de seguridad eléctrica.

---

## 1. De electrostática a corriente

En F-22 estudiamos principalmente:

- cargas en reposo;
- campo eléctrico;
- potencial;
- diferencia de potencial.

Ahora permitiremos que los portadores de carga:

- se desplacen de manera sostenida.

Eso nos lleva a:

**corriente eléctrica**

---

## 2. Corriente eléctrica

La corriente eléctrica es el movimiento neto de carga a través de una región.

La intensidad de corriente se define como:

<div class="formula-panel">
  <span class="formula-panel__label">Corriente media</span>
  <div class="formula-panel__formula">I = ΔQ/Δt</div>
</div>

donde:

- `ΔQ` es la carga neta que atraviesa una sección;
- `Δt` es el intervalo de tiempo.

---

## 3. Unidad de corriente

La unidad SI es:

**ampere (A)**

<div class="formula-panel">
  <span class="formula-panel__label">Ampere</span>
  <div class="formula-panel__formula">1 A = 1 C/s</div>
</div>

Una corriente de 2 A significa que atraviesan una sección:

- 2 coulomb de carga neta por segundo.

---

## 4. Ejemplo de corriente

Por un conductor pasan:

**12 C**

en:

**4 s**

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Intensidad media</h3>
  <div class="worked-example-card__steps">
    <p>I = ΔQ/Δt</p>
    <p>I = 12/4</p>
    <p><strong>I = 3 A</strong></p>
  </div>
</div>

---

## 5. Corriente instantánea — profundización

Si la corriente cambia con el tiempo:

<div class="formula-panel">
  <span class="formula-panel__label">Corriente instantánea</span>
  <div class="formula-panel__formula">I = dQ/dt</div>
</div>

La expresión escolar `I = ΔQ/Δt` puede representar:

- corriente media;
- o corriente constante en el intervalo.

---

## 6. Sentido convencional de la corriente

Por convenio, el sentido de corriente es:

> **el sentido en que se moverían cargas positivas.**

Este convenio fue establecido antes de conocerse la estructura electrónica de los metales.

---

## 7. Electrones en un metal

En un conductor metálico:

- los portadores móviles relevantes son electrones.

Como tienen carga negativa, su movimiento neto ocurre:

> **en sentido opuesto a la corriente convencional.**

```text
corriente convencional  →
electrones              ←
```

Ambas descripciones son compatibles.

---

## 8. Corriente no significa que cada electrón atraviese el circuito rápidamente

Los electrones de conducción presentan:

- movimiento microscópico complejo;
- una pequeña velocidad de deriva neta cuando existe campo eléctrico.

La respuesta del circuito puede establecerse mucho más rápidamente que el tiempo que tardaría un electrón particular en recorrer todo el cable.

---

## 9. Velocidad de deriva — profundización

Para un conductor sencillo:

<div class="formula-panel">
  <span class="formula-panel__label">Modelo microscópico</span>
  <div class="formula-panel__formula">I = nqAv<sub>d</sub></div>
</div>

donde:

- n es número de portadores por unidad de volumen;
- q es la carga de cada portador;
- A es área de sección;
- v<sub>d</sub> es velocidad de deriva en módulo.

Esta expresión conecta:

- descripción microscópica;
- corriente macroscópica.

---

## 10. Portadores de carga

Los portadores dependen del material.

### Metales

Principalmente electrones.

### Soluciones electrolíticas

Iones positivos y negativos.

### Plasmas

Electrones e iones.

### Semiconductores

Electrones y descripciones efectivas mediante huecos.

Por eso:

> **corriente eléctrica no significa siempre “flujo de electrones”.**

---

## 11. Circuito eléctrico

Un circuito es una conexión de elementos que permite establecer:

- caminos de corriente;
- diferencias de potencial;
- transferencias de energía.

Puede incluir:

- fuentes;
- resistencias;
- lámparas;
- interruptores;
- motores;
- instrumentos.

---

## 12. Circuito cerrado

Para mantener una corriente continua en un circuito simple debe existir:

- un camino conductor cerrado;
- una fuente que mantenga diferencias de potencial.

Si el camino se interrumpe:

- la corriente estacionaria deja de circular.

---

## 13. Diferencia de potencial

De F-22:

<div class="formula-panel">
  <span class="formula-panel__label">Diferencia de potencial</span>
  <div class="formula-panel__formula">ΔV = ΔU/q</div>
</div>

La diferencia de potencial mide:

> **cambio de energía potencial eléctrica por unidad de carga.**

Unidad:

**volt (V)**

---

## 14. Volt no es corriente

Una batería rotulada con cierta tensión indica:

- diferencia de potencial característica;

no la corriente que necesariamente circulará.

La corriente depende también de:

- circuito conectado;
- resistencias;
- comportamiento de la fuente.

---

## 15. Fuente eléctrica

Una fuente utiliza alguna forma de energía para mantener una separación de cargas y una diferencia de potencial.

Ejemplos:

- batería;
- generador;
- celda fotovoltaica.

La fuente no crea carga neta continuamente.

Realiza trabajo interno para:

- mover cargas;
- mantener condiciones eléctricas.

---

## 16. Resistencia eléctrica

La resistencia R caracteriza la oposición de un elemento al establecimiento de corriente bajo determinadas condiciones.

Para un elemento óhmico:

<div class="formula-panel">
  <span class="formula-panel__label">Resistencia</span>
  <div class="formula-panel__formula">R = ΔV/I</div>
</div>

Unidad:

**ohm (Ω)**

---

## 17. Ohm

<div class="formula-panel">
  <span class="formula-panel__label">Unidad</span>
  <div class="formula-panel__formula">1 Ω = 1 V/A</div>
</div>

Si un resistor de 5 Ω tiene 10 V entre sus extremos:

**I = 2 A**

si se comporta óhmicamente en esas condiciones.

---

## 18. Ley de Ohm

Para un conductor óhmico mantenido en condiciones apropiadas:

<div class="formula-panel">
  <span class="formula-panel__label">Ley de Ohm</span>
  <div class="formula-panel__formula">ΔV = RI</div>
</div>

R permanece aproximadamente constante.

---

## 19. Ley de Ohm no es universal

No todos los componentes satisfacen:

**ΔV ∝ I**

con R constante.

Ejemplos de comportamiento no óhmico:

- diodos;
- lámparas incandescentes en amplio rango;
- algunos semiconductores;
- dispositivos cuya temperatura cambia mucho.

Por eso:

> **R = ΔV/I puede calcularse en un punto, pero eso no vuelve automáticamente óhmico al elemento.**

---

## 20. Gráfica V-I de un resistor óhmico

Si graficamos:

- ΔV en vertical;
- I en horizontal;

para un resistor óhmico:

```text
ΔV
│       /
│     /
│   /
│ /
└──────── I
```

La pendiente es:

<div class="formula-panel">
  <span class="formula-panel__label">Pendiente</span>
  <div class="formula-panel__formula">R = ΔV/ΔI</div>
</div>

---

## 21. Resistencia no es resistividad

### Resistencia R

Propiedad del objeto completo.

Depende de:

- material;
- geometría;
- temperatura.

### Resistividad ρ

Propiedad característica del material dentro de determinadas condiciones.

Unidad:

**Ω·m**

---

## 22. Resistencia de un conductor uniforme

Para un conductor homogéneo de longitud L y sección constante A:

<div class="formula-panel">
  <span class="formula-panel__label">Resistencia geométrica</span>
  <div class="formula-panel__formula">R = ρL/A</div>
</div>

dentro del modelo.

---

## 23. Dependencia con la longitud

De:

**R = ρL/A**

si duplicamos L manteniendo lo demás:

<div class="formula-panel">
  <span class="formula-panel__label">Longitud</span>
  <div class="formula-panel__formula">R' = 2R</div>
</div>

Un conductor más largo ofrece mayor resistencia en el modelo uniforme.

---

## 24. Dependencia con la sección

Si duplicamos A:

<div class="formula-panel">
  <span class="formula-panel__label">Área</span>
  <div class="formula-panel__formula">R' = R/2</div>
</div>

Un conductor más grueso tiene menor resistencia, manteniendo material, longitud y temperatura.

---

## 25. Analogía con un camino: usarla con cuidado

Puede resultar intuitivo pensar:

- camino más largo → mayor dificultad;
- sección mayor → más espacio para portadores.

Pero una analogía:

- no reemplaza el modelo físico;
- puede fallar si se lleva demasiado lejos.

La ecuación relevante es:

**R = ρL/A**

---

## 26. Resistividad

La resistividad representa cuánto resiste un material al transporte de carga bajo determinadas condiciones.

Materiales con baja ρ:

- buenos conductores.

Materiales con alta ρ:

- malos conductores o aislantes, según el rango.

La resistividad depende de:

- temperatura;
- estructura;
- composición.

---

## 27. Dependencia con la temperatura

Para muchos metales y un intervalo moderado:

<div class="formula-panel">
  <span class="formula-panel__label">Aproximación lineal</span>
  <div class="formula-panel__formula">R ≈ R<sub>0</sub>[1 + α(T − T<sub>0</sub>)]</div>
</div>

donde α es un coeficiente térmico.

Para muchos metales:

- R aumenta al aumentar T.

---

## 28. No todos los materiales responden igual a la temperatura

En semiconductores y otros materiales:

- la resistencia puede disminuir al aumentar la temperatura.

Por eso no debemos convertir:

> “más temperatura → más resistencia”

en una regla universal.

---

## 29. Ejemplo geométrico

Un alambre tiene:

- resistividad ρ = 1,7 × 10<sup>−8</sup> Ω·m;
- longitud `L = 10 m`;
- sección A = 1,0 × 10<sup>−6</sup> m².

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Resistencia de un alambre</h3>
  <div class="worked-example-card__steps">
    <p>R = ρL/A</p>
    <p>R = (1,7×10<sup>−8</sup> × 10)/(1,0×10<sup>−6</sup>)</p>
    <p><strong>R = 0,17 Ω</strong></p>
  </div>
</div>

---

## 30. Potencia eléctrica

La potencia es energía transferida por unidad de tiempo:

<div class="formula-panel">
  <span class="formula-panel__label">Potencia</span>
  <div class="formula-panel__formula">P = ΔE/Δt</div>
</div>

En un elemento eléctrico:

<div class="formula-panel">
  <span class="formula-panel__label">Potencia eléctrica</span>
  <div class="formula-panel__formula">P = ΔV I</div>
</div>

---

## 31. Unidad de potencia

La unidad SI es:

**watt (W)**

<div class="formula-panel">
  <span class="formula-panel__label">Equivalencia</span>
  <div class="formula-panel__formula">1 W = 1 J/s = 1 V·A</div>
</div>

---

## 32. Potencia en un resistor óhmico

Usando:

**ΔV = RI**

obtenemos:

<div class="formula-panel">
  <span class="formula-panel__label">Forma 1</span>
  <div class="formula-panel__formula">P = I²R</div>
</div>

y:

<div class="formula-panel">
  <span class="formula-panel__label">Forma 2</span>
  <div class="formula-panel__formula">P = (ΔV)²/R</div>
</div>

Estas formas requieren:

- comportamiento óhmico;
- aplicación coherente de la relación V-I.

---

## 33. Efecto Joule

Cuando una corriente atraviesa un material resistivo:

- energía eléctrica se transforma en energía interna.

El calentamiento resistivo se denomina:

**efecto Joule**

Para potencia constante:

<div class="formula-panel">
  <span class="formula-panel__label">Energía transformada</span>
  <div class="formula-panel__formula">E = Pt</div>
</div>

---

## 34. Ejemplo de potencia

Un resistor tiene:

- `R = 20 Ω`;
- `I = 0,50 A`.

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Potencia por efecto Joule</h3>
  <div class="worked-example-card__steps">
    <p>P = I²R</p>
    <p>P = 0,50² × 20</p>
    <p><strong>P = 5 W</strong></p>
  </div>
</div>

---

## 35. Energía eléctrica

Si la potencia es constante:

<div class="formula-panel">
  <span class="formula-panel__label">Energía</span>
  <div class="formula-panel__formula">E = Pt</div>
</div>

También, para un elemento:

<div class="formula-panel">
  <span class="formula-panel__label">Con V e I constantes</span>
  <div class="formula-panel__formula">E = ΔV I t</div>
</div>

---

## 36. Joule y kilowatt-hora

En el SI usamos:

**joule**

Pero en consumo eléctrico aparece:

**kilowatt-hora (kWh)**

<div class="formula-panel">
  <span class="formula-panel__label">Conversión</span>
  <div class="formula-panel__formula">1 kWh = 3,6 × 10<sup>6</sup> J</div>
</div>

El kWh es una unidad de:

- energía;

no de potencia.

---

## 37. Ejemplo de energía

Un dispositivo de:

**1000 W**

funciona durante:

**2 h**

Entonces consume:

**2 kWh**

En joule:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Energía consumida</h3>
  <div class="worked-example-card__steps">
    <p>E = 2 × 3,6×10<sup>6</sup> J</p>
    <p><strong>E = 7,2 × 10<sup>6</sup> J</strong></p>
  </div>
</div>

---

## 38. Serie y paralelo

Los elementos pueden conectarse de diferentes maneras.

Dos configuraciones fundamentales:

- serie;
- paralelo.

La diferencia no es estética.

Determina:

- corrientes;
- tensiones;
- resistencia equivalente.

---

## 39. Resistores en serie

En una conexión en serie:

- la misma corriente atraviesa todos los resistores.

```text
──R<sub>1</sub>──R<sub>2</sub>──R<sub>3</sub>──
```

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Serie</span>
  <div class="formula-panel__formula">I<sub>1</sub> = I<sub>2</sub> = I<sub>3</sub></div>
</div>

---

## 40. Diferencias de potencial en serie

La diferencia total es:

<div class="formula-panel">
  <span class="formula-panel__label">Serie</span>
  <div class="formula-panel__formula">ΔV<sub>total</sub> = ΔV<sub>1</sub> + ΔV<sub>2</sub> + ...</div>
</div>

Para resistores óhmicos:

**ΔV<sub>i</sub> = IR<sub>i</sub>**

---

## 41. Resistencia equivalente en serie

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Serie</span>
  <div class="formula-panel__formula">R<sub>eq</sub> = R<sub>1</sub> + R<sub>2</sub> + ...</div>
</div>

La resistencia equivalente es mayor que:

- cualquiera de las resistencias individuales positivas.

---

## 42. Ejemplo de serie

Tenemos:

- R<sub>1</sub> = 10 Ω;
- R<sub>2</sub> = 20 Ω;
- `ΔV = 12 V`.

Entonces:

**R<sub>eq</sub> = 30 Ω**

Corriente:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Dos resistores en serie</h3>
  <div class="worked-example-card__steps">
    <p>I = 12/30</p>
    <p><strong>I = 0,40 A</strong></p>
    <p>ΔV<sub>1</sub> = 4 V</p>
    <p>ΔV<sub>2</sub> = 8 V</p>
  </div>
</div>

Se verifica:

**4 V + 8 V = 12 V**

---

## 43. Resistores en paralelo

En paralelo, los resistores están conectados entre los mismos dos nodos:

```text
      ┌─R<sub>1</sub>─┐
──────┤    ├──────
      └─R<sub>2</sub>─┘
```

Tienen la misma diferencia de potencial:

<div class="formula-panel">
  <span class="formula-panel__label">Paralelo</span>
  <div class="formula-panel__formula">ΔV<sub>1</sub> = ΔV<sub>2</sub> = ΔV</div>
</div>

---

## 44. Corrientes en paralelo

La corriente total se divide entre ramas:

<div class="formula-panel">
  <span class="formula-panel__label">Nodo</span>
  <div class="formula-panel__formula">I<sub>total</sub> = I<sub>1</sub> + I<sub>2</sub> + ...</div>
</div>

Esto es consecuencia de:

- conservación de carga.

---

## 45. Resistencia equivalente en paralelo

Para resistores óhmicos:

<div class="formula-panel">
  <span class="formula-panel__label">Paralelo</span>
  <div class="formula-panel__formula">1/R<sub>eq</sub> = 1/R<sub>1</sub> + 1/R<sub>2</sub> + ...</div>
</div>

---

## 46. Dos resistores en paralelo

Para dos resistores:

<div class="formula-panel">
  <span class="formula-panel__label">Forma útil</span>
  <div class="formula-panel__formula">R<sub>eq</sub> = R<sub>1</sub>R<sub>2</sub>/(R<sub>1</sub> + R<sub>2</sub>)</div>
</div>

Sólo para:

- dos resistencias.

---

## 47. La equivalente en paralelo es menor que cada rama

Agregar una rama paralela ofrece:

- un camino adicional para la corriente.

Por eso:

> **R<sub>eq</sub> es menor que la resistencia individual más pequeña.**

Esto es una buena verificación de plausibilidad.

---

## 48. Ejemplo de paralelo

Tenemos:

- R<sub>1</sub> = 6 Ω;
- R<sub>2</sub> = 3 Ω;
- `ΔV = 12 V`.

Corrientes:

**I<sub>1</sub> = 2 A**

**I<sub>2</sub> = 4 A**

Entonces:

**I<sub>total</sub> = 6 A**

y:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Dos resistores en paralelo</h3>
  <div class="worked-example-card__steps">
    <p>R<sub>eq</sub> = 12/6</p>
    <p><strong>R<sub>eq</sub> = 2 Ω</strong></p>
  </div>
</div>

Es menor que:

- 3 Ω;
- 6 Ω.

---

## 49. Circuitos mixtos

Un circuito puede contener:

- grupos en serie;
- grupos en paralelo.

La estrategia es:

1. identificar asociaciones simples;
2. reemplazarlas por equivalentes;
3. simplificar progresivamente;
4. calcular corriente total;
5. reconstruir hacia atrás para hallar cada rama.

---

## 50. No todo dibujo horizontal significa serie

Dos elementos están en serie sólo si:

- la misma corriente debe atravesar ambos;
- no existe un nodo de derivación entre ellos.

Dos elementos están en paralelo si:

- comparten los mismos dos nodos.

La geometría del dibujo puede engañar.

Debemos identificar:

- conexiones eléctricas.

---

## 51. Nodo

Un **nodo** es una región conductora conectada eléctricamente que podemos considerar aproximadamente al mismo potencial en el modelo de cables ideales.

Varias ramas pueden unirse en:

- un mismo nodo.

---

## 52. Cable ideal

En muchos problemas suponemos que los cables tienen:

**R ≈ 0**

Entonces todos los puntos de un mismo cable ideal continuo tienen aproximadamente:

- el mismo potencial.

En circuitos reales:

- los cables tienen resistencia;
- puede haber caídas de tensión.

---

## 53. Cortocircuito

Un **cortocircuito** aparece cuando existe un camino de resistencia muy baja entre puntos que mantienen una diferencia de potencial.

Puede producir:

- corriente muy grande;
- calentamiento;
- daños;
- incendio.

Nunca debe provocarse intencionalmente con:

- tensión de red;
- baterías de alta capacidad;
- fuentes desconocidas.

---

## 54. Fuerza electromotriz

La **fuerza electromotriz**, símbolo frecuente `ε`, no es una fuerza mecánica.

Se define como energía suministrada por la fuente por unidad de carga:

<div class="formula-panel">
  <span class="formula-panel__label">Fuerza electromotriz</span>
  <div class="formula-panel__formula">ε = W<sub>fuente</sub>/q</div>
</div>

Unidad:

**volt**

---

## 55. Por qué se conserva el nombre “fuerza”

El término es histórico.

Aunque se llame:

**fuerza electromotriz**

su unidad es:

- volt;
- joule por coulomb;

no:

- newton.

Por eso:

> **la fem es una energía por unidad de carga, no una fuerza.**

---

## 56. Fuente ideal

Una fuente ideal de fem ε mantiene entre sus terminales:

<div class="formula-panel">
  <span class="formula-panel__label">Fuente ideal</span>
  <div class="formula-panel__formula">ΔV = ε</div>
</div>

independientemente de la corriente.

Las fuentes reales:

- no son ideales.

---

## 57. Resistencia interna — profundización

Podemos modelar una batería real mediante:

- fuente ideal ε;
- resistencia interna r en serie.

Cuando entrega corriente I:

<div class="formula-panel">
  <span class="formula-panel__label">Tensión en terminales</span>
  <div class="formula-panel__formula">V<sub>terminal</sub> = ε − Ir</div>
</div>

durante descarga en el modelo simple.

---

## 58. Por qué cae la tensión en una fuente real

Parte de la energía por unidad de carga se transforma dentro de la propia fuente.

La potencia interna disipada puede modelarse como:

<div class="formula-panel">
  <span class="formula-panel__label">Pérdida interna</span>
  <div class="formula-panel__formula">P<sub>int</sub> = I²r</div>
</div>

Esto ayuda a explicar por qué una batería puede:

- calentarse;
- mostrar menor tensión bajo carga.

---

## 59. Corriente de cortocircuito idealizada

Si conectáramos una fuente real directamente a una resistencia externa casi nula:

<div class="formula-panel">
  <span class="formula-panel__label">Modelo simple</span>
  <div class="formula-panel__formula">I ≈ ε/r</div>
</div>

Puede ser muy grande si r es pequeña.

Esto muestra por qué:

> **un cortocircuito puede ser peligroso incluso con fuentes de baja tensión pero alta capacidad de corriente.**

---

## 60. Primera ley de Kirchhoff

La ley de nodos expresa conservación de carga.

En un nodo:

<div class="formula-panel">
  <span class="formula-panel__label">Ley de nodos</span>
  <div class="formula-panel__formula">ΣI<sub>entra</sub> = ΣI<sub>sale</sub></div>
</div>

Equivalente, con signos:

<div class="formula-panel">
  <span class="formula-panel__label">Forma algebraica</span>
  <div class="formula-panel__formula">ΣI = 0</div>
</div>

---

## 61. Ejemplo de nodo

Llegan:

- I<sub>1</sub> = 5 A;
- I<sub>2</sub> = 2 A.

Sale:

- I<sub>3</sub>.

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Conservación de carga</h3>
  <div class="worked-example-card__steps">
    <p>5 + 2 = I<sub>3</sub></p>
    <p><strong>I<sub>3</sub> = 7 A</strong></p>
  </div>
</div>

---

## 62. Segunda ley de Kirchhoff

En una trayectoria cerrada:

<div class="formula-panel">
  <span class="formula-panel__label">Ley de mallas</span>
  <div class="formula-panel__formula">ΣΔV = 0</div>
</div>

Esto expresa conservación de energía por unidad de carga.

Al volver al punto inicial:

- el potencial debe volver al mismo valor.

---

## 63. Recorrer una fuente

Si atravesamos una fuente ideal desde:

- terminal negativo;
- hacia terminal positivo;

registramos:

**+ε**

Si la atravesamos al revés:

**−ε**

según nuestra convención de recorrido.

---

## 64. Recorrer un resistor

Si recorremos un resistor:

- en el sentido de la corriente;

el potencial disminuye:

<div class="formula-panel">
  <span class="formula-panel__label">Caída resistiva</span>
  <div class="formula-panel__formula">ΔV = −IR</div>
</div>

Si lo recorremos contra la corriente:

**+IR**

---

## 65. Elegir corriente “incorrecta” no arruina el problema

En Kirchhoff podemos suponer inicialmente un sentido para una corriente.

Si el resultado da:

**I < 0**

significa que la corriente real va:

- en sentido opuesto al supuesto.

El signo negativo no es un error algebraico por sí mismo.

---

## 66. Ejemplo de una malla

Fuente ideal:

**ε = 12 V**

Resistores en serie:

- R<sub>1</sub> = 2 Ω;
- R<sub>2</sub> = 4 Ω.

Aplicando Kirchhoff:

**+12 − 2I − 4I = 0**

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Ley de malla</h3>
  <div class="worked-example-card__steps">
    <p>12 − 6I = 0</p>
    <p><strong>I = 2 A</strong></p>
  </div>
</div>

Coincide con:

**I = ε/(R<sub>1</sub> + R<sub>2</sub>)**

---

## 67. Kirchhoff en circuitos complejos

Cuando hay varias ramas y fuentes:

1. asignamos corrientes;
2. aplicamos ley de nodos;
3. elegimos mallas independientes;
4. aplicamos suma de potenciales;
5. resolvemos el sistema de ecuaciones.

No hace falta escribir una ecuación por cada malla posible.

Necesitamos:

- ecuaciones independientes suficientes.

---

## 68. Amperímetro

Un amperímetro mide:

**corriente**

Debe conectarse:

> **en serie con la rama cuya corriente queremos medir.**

Idealmente tiene:

<div class="formula-panel">
  <span class="formula-panel__label">Amperímetro ideal</span>
  <div class="formula-panel__formula">R<sub>A</sub> = 0</div>
</div>

para no alterar la corriente.

---

## 69. Nunca conectar un amperímetro directamente entre los bornes de una fuente

Como un amperímetro tiene resistencia muy baja:

- conectarlo en paralelo directamente a una fuente puede producir una corriente enorme.

Esto puede:

- quemar un fusible del instrumento;
- dañar la fuente;
- calentar cables;
- producir lesiones.

---

## 70. Voltímetro

Un voltímetro mide:

**diferencia de potencial**

Debe conectarse:

> **en paralelo entre los dos puntos que queremos comparar.**

Idealmente:

<div class="formula-panel">
  <span class="formula-panel__label">Voltímetro ideal</span>
  <div class="formula-panel__formula">R<sub>V</sub> → ∞</div>
</div>

para tomar corriente despreciable.

---

## 71. Instrumentos reales

Un amperímetro real tiene:

- resistencia pequeña pero no cero.

Un voltímetro real tiene:

- resistencia grande pero finita.

Por eso el instrumento puede:

- perturbar ligeramente el circuito.

En mediciones precisas debemos considerar esta carga instrumental.

---

## 72. Multímetro

Un multímetro puede medir, según configuración:

- tensión;
- corriente;
- resistencia;
- continuidad;
- otras magnitudes.

Pero cada modo requiere:

- bornes correctos;
- escala adecuada;
- conexión correcta.

---

## 73. Medir resistencia

Para medir resistencia con un multímetro:

- el circuito debe estar desenergizado;
- el componente debe estar aislado adecuadamente del resto del circuito si queremos su resistencia individual.

El multímetro utiliza:

- su propia fuente interna.

No debe medirse resistencia sobre un circuito energizado.

---

## 74. Medir tensión

Para medir tensión:

- se coloca el instrumento en modo voltímetro;
- se conecta en paralelo;
- se elige rango adecuado.

En circuitos didácticos de baja tensión continua:

- también importa la polaridad para interpretar el signo.

---

## 75. Medir corriente

Para medir corriente:

- hay que abrir la rama;
- insertar el amperímetro en serie.

Es una operación más invasiva que medir tensión.

Antes de medir:

- comprobar rango;
- borne;
- límite del instrumento.

---

## 76. Potencia entregada y absorbida

En un elemento, el signo de:

**P = VI**

depende de cómo definimos:

- polaridad;
- sentido de corriente.

Una convención muy útil es la:

**convención pasiva**

Si la corriente entra por el terminal marcado positivo:

<div class="formula-panel">
  <span class="formula-panel__label">Convención pasiva</span>
  <div class="formula-panel__formula">P = VI &gt; 0</div>
</div>

el elemento absorbe potencia.

---

## 77. Fuente entregando energía

Una fuente que impulsa corriente hacia el circuito puede:

- entregar potencia.

Con una convención adecuada su potencia absorbida resultará:

- negativa;

o podemos hablar directamente del módulo de:

- potencia entregada.

Lo importante es mantener:

- signos;
- interpretación física.

---

## 78. Conservación de potencia en un circuito ideal

En un circuito estacionario:

> **la potencia total entregada por las fuentes es igual a la potencia total absorbida por los receptores**, dentro del modelo.

Esto es otra forma de expresar:

- conservación de energía.

---

## 79. Ejemplo energético de un circuito

Una fuente ideal de:

**12 V**

alimenta un resistor de:

**6 Ω**

Corriente:

**I = 2 A**

Potencia del resistor:

**P = I²R = 24 W**

Potencia entregada por la fuente:

**P = εI = 24 W**

La energía se conserva.

---

## 80. Serie: qué ocurre con la potencia

En serie, la corriente es la misma.

Para cada resistor:

<div class="formula-panel">
  <span class="formula-panel__label">Serie</span>
  <div class="formula-panel__formula">P<sub>i</sub> = I²R<sub>i</sub></div>
</div>

A igual corriente:

- mayor R → mayor potencia disipada.

---

## 81. Paralelo: qué ocurre con la potencia

En paralelo, la tensión es la misma.

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Paralelo</span>
  <div class="formula-panel__formula">P<sub>i</sub> = V²/R<sub>i</sub></div>
</div>

A igual V:

- menor R → mayor potencia.

No hay contradicción con el caso serie.

Las condiciones mantenidas son diferentes.

---

## 82. Fusibles y protecciones

Un fusible está diseñado para:

- interrumpir el circuito si la corriente supera cierto valor durante condiciones especificadas.

Otros sistemas utilizan:

- interruptores automáticos;
- protecciones diferenciales;
- puesta a tierra.

Cada uno cumple funciones diferentes.

---

## 83. Seguridad eléctrica: tensión de red

La tensión de una instalación domiciliaria puede ser peligrosa o mortal.

Para experiencias escolares:

> **no se debe utilizar directamente la red eléctrica.**

Usar exclusivamente:

- fuentes didácticas de baja tensión;
- baterías apropiadas;
- componentes diseñados para el experimento.

---

## 84. La corriente que atraviesa el cuerpo es lo peligroso, pero no depende de una sola variable

El riesgo eléctrico depende de:

- tensión;
- resistencia e impedancia del cuerpo;
- trayectoria;
- duración;
- frecuencia;
- condiciones de contacto;
- humedad;
- energía disponible.

Por eso no existe una regla simple del tipo:

> “sólo la corriente importa”.

Tensión y condiciones del circuito determinan cuánta corriente puede circular.

---

## 85. Agua y electricidad

El agua real puede contener:

- sales;
- iones;
- impurezas.

Eso puede aumentar su conductividad.

Nunca manipular:

- equipos conectados a red;
- enchufes;
- extensiones;

con manos mojadas o en ambientes inseguros.

---

## 86. Capacitores y equipos desconectados

Como vimos en F-22:

- un capacitor puede conservar energía después de desconectar un equipo.

Por eso:

> **“desenchufado” no significa automáticamente “sin riesgo eléctrico interno”.**

No abrir:

- fuentes;
- monitores;
- microondas;
- equipos de potencia;

como práctica escolar.

---

## 87. Baterías también pueden ser peligrosas

Una batería puede tener baja tensión y aun así entregar:

- corrientes elevadas.

Un cortocircuito puede producir:

- calentamiento;
- incendio;
- daño químico.

No cortocircuitar baterías.

---

## 88. Experiencia segura: resistor y ley de Ohm

### Materiales

- fuente didáctica de baja tensión;
- resistor adecuado;
- multímetro;
- cables apropiados.

### Procedimiento

1. Elegí varias tensiones pequeñas.
2. Medí V en paralelo.
3. Medí I en serie.
4. Construí una tabla.
5. Graficá V versus I.

### Resultado esperado

Para un resistor aproximadamente óhmico:

- los puntos se aproximan a una recta;
- la pendiente representa R.

---

## 89. Experiencia: serie

Con dos resistores:

1. conectalos en serie;
2. medí corriente antes, entre y después;
3. compará valores;
4. medí tensión en cada resistor;
5. verificá aproximadamente:

<div class="formula-panel">
  <span class="formula-panel__label">Serie</span>
  <div class="formula-panel__formula">V<sub>total</sub> ≈ V<sub>1</sub> + V<sub>2</sub></div>
</div>

---

## 90. Experiencia: paralelo

Con dos resistores en paralelo:

1. medí V en cada rama;
2. medí corriente total;
3. medí corrientes de rama;
4. verificá:

<div class="formula-panel">
  <span class="formula-panel__label">Paralelo</span>
  <div class="formula-panel__formula">I<sub>total</sub> ≈ I<sub>1</sub> + I<sub>2</sub></div>
</div>

Esto conecta directamente con Kirchhoff.

---

## 91. Una lámpara incandescente puede no ser óhmica

Si disponemos de una lámpara de baja tensión apropiada:

- el filamento se calienta al aumentar la corriente;
- su resistencia cambia.

La gráfica V-I puede curvarse.

Esto demuestra experimentalmente:

> **la ley de Ohm no es una identidad universal.**

---

## 92. LED como elemento no óhmico — profundización

Un LED:

- conduce fuertemente en una dirección bajo condiciones adecuadas;
- tiene una relación V-I no lineal;
- emite luz.

Debe usarse:

- con resistencia limitadora;
- respetando especificaciones.

Nunca conectar un LED directamente a una fuente sin limitar corriente cuando el circuito requiera esa protección.

---

## 93. Estrategia para circuitos simples

1. Dibujá el circuito claramente.
2. Identificá nodos.
3. Detectá serie y paralelo reales.
4. Calculá R<sub>eq</sub>.
5. Hallá corriente total.
6. Reconstruí tensiones y corrientes.
7. Calculá potencias.
8. Verificá conservación de corriente y energía.

---

## 94. Estrategia para Kirchhoff

1. Marcá nodos.
2. Elegí sentidos de corriente.
3. Aplicá ley de nodos.
4. Elegí mallas independientes.
5. Elegí sentido de recorrido de cada malla.
6. Asigná signos a fuentes y resistores.
7. Resolvé ecuaciones.
8. Interpretá signos negativos.
9. Verificá balances.

---

## 95. Verificación por unidades

Algunas unidades útiles:

<div class="formula-panel">
  <span class="formula-panel__label">Corriente</span>
  <div class="formula-panel__formula">A = C/s</div>
</div>

<div class="formula-panel">
  <span class="formula-panel__label">Resistencia</span>
  <div class="formula-panel__formula">Ω = V/A</div>
</div>

<div class="formula-panel">
  <span class="formula-panel__label">Potencia</span>
  <div class="formula-panel__formula">W = V·A</div>
</div>

Estas relaciones ayudan a detectar errores.

---

## 96. Errores frecuentes

### “La corriente se gasta al atravesar un resistor”

No.

### “Los electrones se mueven en el mismo sentido que la corriente convencional”

En metales, no.

### “Toda corriente eléctrica es movimiento de electrones”

No.

### “La batería entrega siempre la misma corriente”

No. Depende del circuito.

### “R = V/I demuestra que todo elemento obedece la ley de Ohm”

No.

### “Resistencia y resistividad son lo mismo”

No.

### “En serie todos los resistores tienen la misma tensión”

No. Tienen la misma corriente.

### “En paralelo todos tienen la misma corriente”

No. Tienen la misma diferencia de potencial.

### “Fem significa fuerza mecánica”

No.

### “Un amperímetro se conecta en paralelo”

No.

### “Un voltímetro se conecta en serie”

No.

### “Un circuito desconectado siempre es seguro”

No necesariamente: puede haber capacitores cargados u otras fuentes internas.

---

## 97. Problemas y ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Conceptos</strong>
  </div>
  <ol>
    <li>Definí corriente eléctrica e intensidad.</li>
    <li>Explicá corriente convencional y movimiento de electrones en un metal.</li>
    <li>Distinguí resistencia y resistividad.</li>
    <li>Explicá qué significa que un elemento sea óhmico.</li>
    <li>¿Por qué la fuerza electromotriz no es una fuerza?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Corriente y Ohm</strong>
  </div>
  <ol>
    <li>Pasan 30 C en 5 s. Calculá I.</li>
    <li>Un resistor de 15 Ω tiene 6 V entre sus extremos. Calculá I.</li>
    <li>Un resistor conduce 0,20 A con 10 V. Calculá R.</li>
    <li>Un alambre duplica su longitud sin cambiar material ni sección. ¿Qué ocurre con R?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Potencia y energía</strong>
  </div>
  <ol>
    <li>Un dispositivo funciona con 12 V y 2 A. Calculá P.</li>
    <li>Un resistor de 8 Ω conduce 3 A. Calculá P.</li>
    <li>Una estufa idealizada de 1500 W funciona 30 min. Calculá la energía en kWh y J.</li>
    <li>Explicá la transformación energética asociada al efecto Joule.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Serie, paralelo y Kirchhoff</strong>
  </div>
  <ol>
    <li>Calculá R<sub>eq</sub> de 4 Ω, 6 Ω y 10 Ω en serie.</li>
    <li>Calculá R<sub>eq</sub> de 6 Ω y 3 Ω en paralelo.</li>
    <li>Una fuente de 12 V alimenta esos dos resistores en paralelo. Calculá cada corriente y la corriente total.</li>
    <li>En un nodo entran 2 A y 5 A y salen 1 A y una corriente desconocida. Calculala.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Derivá la resistencia equivalente de dos resistores en paralelo.</li>
    <li>Una batería tiene `ε = 12 V` y `r = 0,50 Ω`, conectada a `R = 5,5 Ω`. Calculá I y V<sub>terminal</sub>.</li>
    <li>Planteá y resolvé un circuito de dos mallas usando Kirchhoff.</li>
    <li>Demostrá mediante balance de potencia que la energía entregada por una fuente ideal coincide con la absorbida por los resistores de un circuito simple.</li>
  </ol>
</div>

---

## 98. Ejemplo integrado: batería real y resistor

Una batería se modela con:

- `ε = 12 V`;
- `r = 1,0 Ω`.

Se conecta a:

- `R = 5,0 Ω`.

### Resistencia total

<div class="formula-panel">
  <span class="formula-panel__label">Serie interna + externa</span>
  <div class="formula-panel__formula">R<sub>total</sub> = R + r = 6,0 Ω</div>
</div>

### Corriente

<div class="formula-panel">
  <span class="formula-panel__label">Corriente</span>
  <div class="formula-panel__formula">I = ε/(R + r)</div>
</div>

**I = 12/6 = 2,0 A**

### Tensión en terminales

<div class="formula-panel">
  <span class="formula-panel__label">Terminales</span>
  <div class="formula-panel__formula">V<sub>terminal</sub> = ε − Ir</div>
</div>

**V<sub>terminal</sub> = 12 − 2×1**

**V<sub>terminal</sub> = 10 V**

### Potencia en la carga

**P<sub>R</sub> = I²R = 4×5 = 20 W**

### Potencia interna

**P<sub>r</sub> = I²r = 4 W**

### Potencia química convertida por la fuente ideal

**P<sub>fuente</sub> = εI = 24 W**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>Corriente, tensión y energía en una fuente real</h3>
  <div class="worked-example-card__steps">
    <p>I = 2,0 A</p>
    <p>V<sub>terminal</sub> = 10 V</p>
    <p>P<sub>carga</sub> = 20 W</p>
    <p>P<sub>interna</sub> = 4 W</p>
    <p><strong>24 W = 20 W + 4 W</strong></p>
  </div>
</div>

La caída de tensión de la batería bajo carga no viola conservación de energía.

Parte de la potencia se transforma:

- dentro de la propia fuente.

---

## 99. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Cómo se define la intensidad de corriente?</summary>
  <div class="lesson-quiz__answer">
    Como carga neta que atraviesa una sección por unidad de tiempo: I = ΔQ/Δt.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿En qué sentido se mueven los electrones respecto de la corriente convencional en un metal?</summary>
  <div class="lesson-quiz__answer">
    En sentido opuesto, porque los electrones tienen carga negativa y la corriente convencional se define como el sentido del movimiento de carga positiva.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Qué diferencia existe entre resistencia y resistividad?</summary>
  <div class="lesson-quiz__answer">
    La resistencia caracteriza al objeto y depende de material, geometría y temperatura; la resistividad caracteriza al material bajo determinadas condiciones.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Qué se conserva en un nodo de un circuito estacionario?</summary>
  <div class="lesson-quiz__answer">
    La carga. Por eso la suma de corrientes que entran es igual a la suma de corrientes que salen.
  </div>
</details>

<details class="lesson-quiz">
  <summary>5. ¿Cómo se conecta un amperímetro y cómo un voltímetro?</summary>
  <div class="lesson-quiz__answer">
    El amperímetro se conecta en serie con la rama; el voltímetro, en paralelo entre los puntos cuya diferencia de potencial se quiere medir.
  </div>
</details>

<details class="lesson-quiz">
  <summary>6. ¿Qué significa fuerza electromotriz?</summary>
  <div class="lesson-quiz__answer">
    Es la energía que una fuente suministra por unidad de carga. Se mide en volt y no es una fuerza mecánica.
  </div>
</details>

---

## 100. Resumen

- La corriente eléctrica describe flujo neto de carga.
- `I = ΔQ/Δt`.
- `1 A = 1 C/s`.
- La corriente convencional sigue el sentido del movimiento de carga positiva.
- En metales, los electrones se desplazan netamente en sentido opuesto a la corriente convencional.
- Los portadores pueden ser electrones, iones u otros portadores según el material.
- La diferencia de potencial expresa energía por unidad de carga.
- La resistencia eléctrica se mide en ohm.
- Para un conductor uniforme, `R = ρL/A`.
- Resistencia y resistividad no son la misma magnitud.
- La resistencia puede depender de la temperatura.
- La ley de Ohm `ΔV = RI` describe elementos óhmicos bajo condiciones apropiadas.
- No todos los dispositivos son óhmicos.
- La potencia eléctrica es `P = ΔVI`.
- Para resistores óhmicos, `P = I²R = (ΔV)²/R`.
- El efecto Joule transforma energía eléctrica en energía interna.
- La energía es `E = Pt`.
- 1 kWh = 3,6 × 10<sup>6</sup> J.
- En serie, la corriente es la misma y R<sub>eq</sub> = ΣR.
- En paralelo, la tensión es la misma y 1/R<sub>eq</sub> = Σ(1/R).
- La fuerza electromotriz es energía suministrada por unidad de carga.
- Una fuente real puede modelarse con resistencia interna.
- La ley de nodos expresa conservación de carga.
- La ley de mallas expresa conservación de energía por unidad de carga.
- El amperímetro se conecta en serie.
- El voltímetro se conecta en paralelo.
- Un multímetro debe configurarse correctamente antes de conectarlo.
- Las experiencias deben realizarse con baja tensión y sin utilizar directamente la red eléctrica.
- Nunca se debe provocar un cortocircuito deliberado con fuentes capaces de entregar corrientes importantes.

---

## 101. Siguiente tema recomendado

**F-24 — Magnetismo**

La corriente eléctrica nos mostró que las cargas pueden moverse de manera sostenida.

En la próxima lección estudiaremos una consecuencia fundamental:

> **las cargas en movimiento y las corrientes están relacionadas con campos magnéticos.**

Veremos:

- imanes;
- campo magnético;
- líneas de campo;
- campo terrestre;
- fuerza magnética sobre cargas;
- fuerza de Lorentz;
- movimiento de cargas en campos magnéticos;
- fuerza sobre conductores;
- campo producido por corrientes;
- experimento de Oersted;
- reglas de la mano;
- solenoides;
- electroimanes.
