---
title: "Estática y equilibrio"
description: "Cómo analizar equilibrio traslacional y rotacional mediante resultantes, torque, brazo de palanca, centro de masa, centro de gravedad, estabilidad, palancas y máquinas simples."
slug: "estatica-y-equilibrio"

course: "fisica"
module: "dinamica"
order: 10

level: "intermedio"
cycle: "ambos"

yearsApprox: [3, 4, 5]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - fuerzas-particulares

skills:
  - equilibrio-traslacional
  - resultante-nula
  - momento-de-una-fuerza
  - brazo-de-palanca
  - torque
  - equilibrio-rotacional
  - centro-de-masa
  - centro-de-gravedad
  - palancas
  - estabilidad
  - maquinas-simples

hasExercises: true
hasQuiz: true
hasExperiment: true

deepening: true
status: "complete"
---

## Un cuerpo puede no trasladarse y aun así empezar a girar

Empujamos una puerta cerca de las bisagras.

Después la empujamos con la misma fuerza cerca del picaporte.

La fuerza puede tener el mismo módulo.

Sin embargo:

- en un caso cuesta mucho hacerla girar;
- en el otro gira con facilidad.

Eso nos muestra algo nuevo:

> **para estudiar cuerpos extensos no alcanza con conocer la fuerza resultante; también importa dónde y cómo se aplica cada fuerza.**

En esta lección vamos a estudiar dos condiciones diferentes:

- equilibrio traslacional;
- equilibrio rotacional.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Un cuerpo está en equilibrio mecánico cuando no presenta aceleración traslacional ni aceleración angular. Para un cuerpo rígido, eso exige controlar tanto la suma de fuerzas como la suma de torques.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta lección deberías poder:

- interpretar el equilibrio traslacional;
- aplicar la condición `ΣF = 0`;
- comprender qué es el momento o torque de una fuerza;
- identificar el brazo de palanca;
- calcular torque;
- elegir una convención de signos para torques;
- aplicar equilibrio rotacional;
- combinar `ΣF = 0` y `Στ = 0`;
- interpretar centro de masa;
- distinguir centro de masa y centro de gravedad;
- analizar estabilidad y vuelco;
- comprender el funcionamiento de las palancas;
- interpretar máquinas simples como transformadores de fuerza y distancia.

---

## 1. Equilibrio traslacional

En F-08 vimos que:

<div class="formula-panel">
  <span class="formula-panel__label">Segunda ley</span>
  <div class="formula-panel__formula">ΣF = m · a</div>
</div>

Si:

<div class="formula-panel">
  <span class="formula-panel__label">Equilibrio traslacional</span>
  <div class="formula-panel__formula">ΣF = 0</div>
</div>

entonces:

**a = 0**

y la velocidad del centro de masa permanece constante.

---

## 2. Equilibrio no significa necesariamente reposo

Si:

**ΣF = 0**

el cuerpo puede:

- permanecer en reposo;
- o trasladarse con velocidad constante.

Cuando hablamos específicamente de **estática**, nos interesa sobre todo el caso en que el cuerpo permanece en reposo.

Pero la condición dinámica:

**ΣF = 0**

es más general.

---

## 3. Resultante nula en componentes

En dos dimensiones:

<div class="formula-panel">
  <span class="formula-panel__label">Equilibrio traslacional</span>
  <div class="formula-panel__formula">ΣFₓ = 0</div>
  <div class="formula-panel__formula">ΣFᵧ = 0</div>
</div>

En tres dimensiones también:

**ΣF_z = 0**

Cada eje debe equilibrarse por separado.

---

## 4. Ejemplo de equilibrio traslacional

Un cartel cuelga de manera que sobre él actúan:

- 100 N hacia abajo;
- dos componentes verticales de tensión que suman 100 N;
- componentes horizontales que se cancelan.

Entonces:

**ΣFₓ = 0**

**ΣFᵧ = 0**

No existe aceleración traslacional.

Pero todavía necesitamos preguntar:

> ¿puede girar?

---

## 5. Una fuerza puede producir rotación

Supongamos una puerta.

Si empujamos:

- perpendicularmente;
- lejos de las bisagras;

es fácil hacerla girar.

Si aplicamos la misma fuerza:

- muy cerca del eje de giro;

su efecto rotacional es mucho menor.

Por eso necesitamos una magnitud que combine:

- fuerza;
- distancia al eje;
- orientación.

---

## 6. Momento de una fuerza o torque

El **momento de una fuerza**, también llamado **torque**, mide la capacidad de una fuerza para producir cambio rotacional respecto de un punto o eje.

Para una fuerza F aplicada a una distancia r:

<div class="formula-panel">
  <span class="formula-panel__label">Módulo del torque</span>
  <div class="formula-panel__formula">τ = r · F · sen θ</div>
</div>

donde θ es el ángulo entre:

- el vector posición desde el eje hasta el punto de aplicación;
- la fuerza.

---

## 7. Brazo de palanca

Podemos escribir el torque de otra manera:

<div class="formula-panel">
  <span class="formula-panel__label">Torque</span>
  <div class="formula-panel__formula">τ = F · d⊥</div>
</div>

donde:

**d⊥**

es el **brazo de palanca**:

> la distancia perpendicular desde el eje de giro hasta la línea de acción de la fuerza.

Esta forma suele ser muy útil.

---

## 8. Línea de acción

La **línea de acción** de una fuerza es la recta imaginaria que prolonga su dirección.

El brazo de palanca no es simplemente:

- la distancia al punto donde aplicamos la fuerza.

Es específicamente:

> **la distancia perpendicular desde el eje hasta la línea de acción.**

---

## 9. Ejemplo: puerta

Aplicamos:

**F = 20 N**

perpendicularmente a una puerta, a:

**r = 0,80 m**

de las bisagras.

Como:

**θ = 90°**

y:

**sen 90° = 1**

tenemos:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Torque sobre una puerta</h3>
  <div class="worked-example-card__steps">
    <p>τ = rF</p>
    <p>τ = 0,80 m × 20 N</p>
    <p><strong>τ = 16 N·m</strong></p>
  </div>
</div>

---

## 10. Aplicar la fuerza cerca de las bisagras

Si la misma fuerza de:

**20 N**

se aplica a:

**0,10 m**

del eje:

**τ = 0,10 × 20**

**τ = 2 N·m**

La fuerza es la misma.

El efecto rotacional es mucho menor.

---

## 11. La dirección de la fuerza también importa

Si empujamos exactamente hacia las bisagras:

- la línea de acción pasa por el eje;
- el brazo perpendicular es cero.

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Línea de acción por el eje</span>
  <div class="formula-panel__formula">τ = 0</div>
</div>

aunque la fuerza tenga un módulo grande.

---

## 12. Torque máximo para una fuerza y un radio dados

En:

**τ = rF senθ**

el torque es máximo cuando:

**senθ = 1**

es decir:

**θ = 90°**

Por eso, para hacer girar una puerta eficientemente, conviene empujar:

- lejos del eje;
- aproximadamente perpendicular a la puerta.

---

## 13. Unidad del torque

La unidad SI es:

**N·m**

Es dimensionalmente igual a la unidad que aparecerá para el trabajo y la energía.

Pero:

> **torque y energía no son la misma magnitud.**

Por eso no llamamos al torque “joule”, aunque dimensionalmente `N·m` sea equivalente.

---

## 14. Sentido del torque

En problemas planos elegimos una convención de signos.

Por ejemplo:

- giro antihorario → torque positivo;
- giro horario → torque negativo.

La elección es convencional.

Lo importante es mantenerla durante todo el problema.

---

## 15. Ejemplo con dos torques

Una barra puede girar alrededor de un eje.

Actúan:

- `F₁ = 10 N` a `2 m`, antihorario;
- `F₂ = 20 N` a `0,5 m`, horario.

Torques:

**τ₁ = +20 N·m**

**τ₂ = −10 N·m**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Torque neto</span>
  <div class="formula-panel__formula">Στ = +10 N·m</div>
</div>

La tendencia neta es antihoraria.

---

## 16. Equilibrio rotacional

Para que no exista aceleración angular, necesitamos:

<div class="formula-panel">
  <span class="formula-panel__label">Equilibrio rotacional</span>
  <div class="formula-panel__formula">Στ = 0</div>
</div>

Eso significa que los efectos rotacionales se compensan.

---

## 17. Equilibrio mecánico completo

Para un cuerpo rígido en equilibrio estático necesitamos simultáneamente:

<div class="formula-panel">
  <span class="formula-panel__label">Condición traslacional</span>
  <div class="formula-panel__formula">ΣF = 0</div>
</div>

y:

<div class="formula-panel">
  <span class="formula-panel__label">Condición rotacional</span>
  <div class="formula-panel__formula">Στ = 0</div>
</div>

Una sola condición no alcanza.

---

## 18. Fuerzas que se cancelan pero producen giro

Imaginemos dos fuerzas:

- iguales;
- opuestas;
- paralelas;
- aplicadas en puntos diferentes.

La suma de fuerzas puede ser:

**ΣF = 0**

pero los torques pueden sumarse.

Entonces:

- no hay aceleración traslacional;
- sí puede haber aceleración angular.

Esto muestra por qué `ΣF = 0` no garantiza equilibrio rotacional.

---

## 19. Par de fuerzas

Dos fuerzas iguales y opuestas, separadas entre sí, pueden formar un **par de fuerzas**.

Su resultante traslacional es cero.

Pero generan un torque neto.

Ejemplos aproximados:

- girar un volante;
- girar una tapa con ambas manos.

---

## 20. Elegir el punto para calcular torques

Podemos calcular torques respecto de distintos puntos.

En equilibrio:

- la suma de torques debe ser compatible con cero.

Elegir un punto conveniente puede simplificar mucho las cuentas.

Por ejemplo:

- elegir el punto donde actúa una fuerza desconocida hace que su brazo sea cero;
- por lo tanto, su torque respecto de ese punto es cero.

---

## 21. Ejemplo: barra apoyada

Una barra horizontal de peso despreciable está apoyada en un extremo.

Una carga de:

**200 N**

se coloca a:

**1,5 m**

del apoyo.

Para equilibrarla aplicamos una fuerza vertical hacia arriba a:

**3,0 m**

del apoyo.

Equilibrio de torques:

**F × 3,0 = 200 × 1,5**

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Equilibrio de una barra</h3>
  <div class="worked-example-card__steps">
    <p>3F = 300</p>
    <p><strong>F = 100 N</strong></p>
  </div>
</div>

---

## 22. Después del torque, revisar fuerzas

La condición de torque nos permitió obtener F.

Pero si queremos conocer la reacción del apoyo también necesitamos:

**ΣFᵧ = 0**

El equilibrio completo exige usar:

- fuerzas;
- torques.

No debemos resolver sólo una mitad del problema.

---

## 23. Centro de masa

El **centro de masa** es un punto que representa la distribución de masa de un sistema.

Para masas puntuales en una dimensión:

<div class="formula-panel">
  <span class="formula-panel__label">Centro de masa</span>
  <div class="formula-panel__formula">x_CM = (m₁x₁ + m₂x₂ + ...)/(m₁ + m₂ + ...)</div>
</div>

Es un promedio ponderado por las masas.

---

## 24. Ejemplo de centro de masa

Tenemos:

- `m₁ = 2 kg` en `x₁ = 0 m`;
- `m₂ = 3 kg` en `x₂ = 5 m`.

Entonces:

**x_CM = (2×0 + 3×5)/(2+3)**

**x_CM = 15/5**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Centro de masa de dos cuerpos</h3>
  <div class="worked-example-card__steps">
    <p><strong>x_CM = 3 m</strong></p>
    <p>Queda más cerca de la masa mayor.</p>
  </div>
</div>

---

## 25. El centro de masa puede estar donde no hay material

En algunos cuerpos:

- anillos;
- aros;
- estructuras huecas;

el centro de masa puede ubicarse en una región donde no exista materia.

Eso no es un problema.

Es un punto matemático que representa la distribución de masa.

---

## 26. Centro de masa de un cuerpo uniforme y simétrico

Para un cuerpo homogéneo con alta simetría:

- esfera;
- disco;
- rectángulo;
- barra uniforme;

el centro de masa suele coincidir con el centro geométrico.

Si la distribución de masa no es uniforme:

- puede desplazarse.

---

## 27. Centro de gravedad

El **centro de gravedad** es el punto donde podemos representar la resultante de las fuerzas gravitatorias sobre el cuerpo.

Si el campo gravitatorio es aproximadamente uniforme en todo el cuerpo:

> **centro de gravedad y centro de masa coinciden aproximadamente.**

Ésta es una excelente aproximación para muchos objetos cotidianos.

---

## 28. Centro de masa y centro de gravedad no son conceptos idénticos

El centro de masa depende de:

- distribución de masa.

El centro de gravedad depende además de:

- cómo varía el campo gravitatorio sobre el cuerpo.

En campos prácticamente uniformes:

- coinciden.

En situaciones donde el campo varía apreciablemente:

- pueden no coincidir exactamente.

---

## 29. Peso aplicado en el centro de gravedad

Para problemas de estática cerca de la superficie terrestre, podemos modelar el peso total de un cuerpo como si actuara:

- verticalmente hacia abajo;
- a través del centro de gravedad.

Esto simplifica enormemente los diagramas de cuerpo libre.

---

## 30. Barra uniforme

Una barra uniforme de longitud L tiene su centro de masa en:

<div class="formula-panel">
  <span class="formula-panel__label">Barra uniforme</span>
  <div class="formula-panel__formula">x_CM = L/2</div>
</div>

Si calculamos torques respecto de un extremo:

- el peso de la barra actúa con brazo `L/2`.

---

## 31. Ejemplo con peso de la barra

Una barra uniforme de:

- longitud `4 m`;
- peso `120 N`;

está articulada en un extremo y horizontal.

Su peso actúa a:

**2 m**

del eje.

Torque del peso:

<div class="formula-panel">
  <span class="formula-panel__label">Torque gravitatorio</span>
  <div class="formula-panel__formula">τ = 120 N × 2 m = 240 N·m</div>
</div>

con sentido según la orientación de la barra.

---

## 32. Estabilidad

Un cuerpo puede estar en equilibrio y, sin embargo, ser:

- muy estable;
- poco estable;
- inestable.

La estabilidad estudia qué ocurre ante pequeñas perturbaciones.

Dos factores importantes son:

- altura del centro de masa;
- tamaño y forma de la base de apoyo.

---

## 33. Proyección del centro de masa

Para un cuerpo apoyado:

> mientras la proyección vertical del centro de masa permanezca dentro de la base de sustentación, el cuerpo puede conservar el apoyo sin volcar bajo condiciones estáticas apropiadas.

Cuando esa proyección cruza el borde:

- el peso produce un torque que favorece el vuelco.

---

## 34. Ejemplo: bloque que se inclina

Imaginemos un bloque alto.

Al inclinarlo:

- la línea vertical que pasa por el centro de masa se desplaza respecto de la base.

Si todavía cae dentro de la base:

- puede tender a volver.

Si supera el borde:

- aparece una tendencia a volcar.

---

## 35. Centro de masa bajo y estabilidad

En general, para una base dada:

- un centro de masa más bajo suele aumentar la estabilidad frente al vuelco.

Por eso muchos objetos diseñados para ser estables tienen:

- base ancha;
- masa concentrada relativamente abajo.

No es una regla aislada: debe analizarse junto con la geometría de apoyo.

---

## 36. Base de sustentación

Una base más ancha permite una mayor inclinación antes de que:

- la proyección del centro de masa salga de la base.

Por eso ampliar la base suele aumentar la estabilidad.

Ejemplos:

- trípodes;
- muebles anchos;
- posturas corporales con pies separados.

---

## 37. Equilibrio estable

En un **equilibrio estable**, una pequeña perturbación produce una tendencia a regresar al estado inicial.

Ejemplo ideal:

- una esfera en el fondo de un cuenco.

Al desplazarla ligeramente:

- la configuración favorece el retorno.

---

## 38. Equilibrio inestable

En un **equilibrio inestable**, una pequeña perturbación aleja todavía más al sistema.

Ejemplo ideal:

- una esfera exactamente en la parte superior de una superficie convexa.

Una perturbación pequeña puede hacer que se aleje de la posición inicial.

---

## 39. Equilibrio indiferente

En un **equilibrio indiferente** o neutro, una pequeña modificación puede dejar al sistema en una nueva posición equivalente.

Ejemplo ideal:

- una esfera sobre un piso horizontal perfecto.

Moverla horizontalmente no cambia la altura de su centro de masa.

---

## 40. Palanca

Una **palanca** es una máquina simple formada por un cuerpo rígido que puede girar alrededor de un punto o eje llamado:

**fulcro**

Intervienen típicamente:

- fuerza aplicada o potencia;
- resistencia o carga;
- fulcro.

Su funcionamiento se analiza con torques.

---

## 41. Condición de equilibrio de una palanca

Para una palanca ideal en equilibrio:

<div class="formula-panel">
  <span class="formula-panel__label">Ley de la palanca</span>
  <div class="formula-panel__formula">F₁ d₁ = F₂ d₂</div>
</div>

cuando las fuerzas son perpendiculares a sus brazos y producen torques opuestos.

Es simplemente:

**Στ = 0**

---

## 42. Ventaja mecánica de una palanca

Si queremos equilibrar una carga grande con una fuerza pequeña:

- aumentamos el brazo donde aplicamos nuestra fuerza.

En el caso ideal:

<div class="formula-panel">
  <span class="formula-panel__label">Relación de fuerzas</span>
  <div class="formula-panel__formula">F_aplicada / F_carga = d_carga / d_aplicada</div>
</div>

Una fuerza menor requiere actuar a una distancia mayor del fulcro.

---

## 43. Palanca de primer género

En una palanca de primer género:

- el fulcro está entre fuerza aplicada y resistencia.

Ejemplos aproximados:

- sube y baja;
- tijera;
- pinza de ciertos tipos.

La ventaja mecánica depende de los brazos.

---

## 44. Palanca de segundo género

En una palanca de segundo género:

- la carga está entre fulcro y fuerza aplicada.

Ejemplo aproximado:

- carretilla.

Suele permitir:

- una fuerza aplicada menor que la carga;

a costa de recorrer mayor distancia.

---

## 45. Palanca de tercer género

En una palanca de tercer género:

- la fuerza aplicada está entre fulcro y carga.

Ejemplos aproximados aparecen en:

- extremidades corporales;
- ciertas pinzas.

Puede requerir una fuerza mayor, pero permite:

- mayor desplazamiento o velocidad del extremo.

---

## 46. Las máquinas simples no crean fuerza “gratis”

Una máquina simple puede permitir:

- reducir la fuerza necesaria;
- cambiar la dirección;
- cambiar la distancia recorrida.

Pero aparece una compensación.

En un modelo ideal:

> menor fuerza suele implicar actuar a través de una distancia mayor.

La conservación de la energía se desarrollará formalmente en F-11.

---

## 47. Ventaja mecánica ideal

Definimos de manera introductoria:

<div class="formula-panel">
  <span class="formula-panel__label">Ventaja mecánica</span>
  <div class="formula-panel__formula">VM = F_salida / F_entrada</div>
</div>

Si:

**VM > 1**

la máquina multiplica la fuerza en ese sentido ideal.

Pero no significa:

- crear energía.

---

## 48. Plano inclinado como máquina simple

Un plano inclinado permite elevar un objeto con una fuerza menor que su peso, si despreciamos rozamiento.

La compensación es:

- recorrer una distancia mayor.

La dinámica del plano inclinado ya fue estudiada en F-09.

Ahora lo interpretamos como una máquina simple.

---

## 49. Poleas como máquinas simples

Una polea fija ideal puede:

- cambiar la dirección de una fuerza.

Sistemas de varias poleas pueden:

- repartir la carga entre varios tramos de cuerda;
- reducir la fuerza necesaria idealmente.

La relación exacta depende de la geometría del sistema.

---

## 50. Rueda y eje

Una rueda unida rígidamente a un eje puede analizarse mediante torques.

Una fuerza aplicada en un radio grande puede equilibrar una fuerza mayor aplicada en un radio pequeño:

<div class="formula-panel">
  <span class="formula-panel__label">Equilibrio ideal</span>
  <div class="formula-panel__formula">F_R · R = F_r · r</div>
</div>

Es otra aplicación directa del momento de una fuerza.

---

## 51. Llave inglesa

Una llave permite aplicar torque sobre una tuerca.

Para una misma fuerza:

- una llave más larga aumenta el brazo de palanca;
- produce mayor torque.

Eso explica por qué una extensión puede facilitar aflojar una tuerca.

---

## 52. El torque depende del punto de referencia

Una misma fuerza puede tener:

- torque cero respecto de un punto;
- torque no nulo respecto de otro.

Por eso siempre debemos indicar:

> **respecto de qué punto o eje calculamos el momento.**

No existe “el torque de una fuerza” sin referencia.

---

## 53. Torque como vector — profundización

En tres dimensiones:

<div class="formula-panel">
  <span class="formula-panel__label">Definición vectorial</span>
  <div class="formula-panel__formula">τ = r × F</div>
</div>

Es un producto vectorial.

Su módulo es:

**rF senθ**

y su dirección es perpendicular al plano definido por:

- r;
- F.

En secundaria suele bastar el análisis plano con signos horario/antihorario.

---

## 54. Condición de equilibrio usando cualquier punto

Si un cuerpo está realmente en equilibrio:

**ΣF = 0**

y:

**Στ = 0**

El torque neto será cero respecto de cualquier punto.

Por eso podemos elegir estratégicamente el punto que simplifique las incógnitas.

---

## 55. Ejemplo integrado de una barra

Una barra horizontal uniforme:

- longitud `4 m`;
- peso `100 N`;

está articulada en su extremo izquierdo.

En el extremo derecho actúa una fuerza vertical hacia arriba F.

El peso de la barra actúa en su centro:

- a `2 m` del eje.

### Equilibrio de torques

Tomamos antihorario positivo:

**F × 4 − 100 × 2 = 0**

**4F = 200**

**F = 50 N**

### Equilibrio vertical

Si la reacción vertical del apoyo es R:

**R + 50 − 100 = 0**

Entonces:

**R = 50 N**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>Equilibrio traslacional y rotacional</h3>
  <div class="worked-example-card__steps">
    <p>Στ = 0 → F = 50 N</p>
    <p>ΣFᵧ = 0 → R = 50 N</p>
    <p><strong>Las dos condiciones son necesarias para resolver el equilibrio completo.</strong></p>
  </div>
</div>

---

## 56. Estrategia para problemas de estática

Una secuencia útil es:

1. elegí el cuerpo o sistema;
2. dibujá el diagrama de cuerpo libre;
3. identificá puntos de aplicación y líneas de acción;
4. elegí ejes;
5. escribí `ΣFₓ = 0`, `ΣFᵧ = 0`;
6. elegí un punto conveniente para torques;
7. definí el signo horario/antihorario;
8. escribí `Στ = 0`;
9. resolvé las incógnitas;
10. verificá signos, unidades y plausibilidad.

---

## 57. Errores frecuentes

### “Si ΣF = 0, el cuerpo no puede girar”

Falso. Puede existir torque neto.

### “Si Στ = 0, el cuerpo no puede trasladarse”

Falso. Puede existir fuerza neta.

### “El brazo de palanca es siempre la distancia al punto de aplicación”

No. Es la distancia perpendicular a la línea de acción.

### “Una fuerza grande siempre produce un torque grande”

No. Puede aplicarse muy cerca del eje o con línea de acción pasando por él.

### “Torque y energía son lo mismo porque ambos usan N·m”

No.

### “Centro de masa siempre está dentro del objeto”

No.

### “Centro de masa y centro de gravedad siempre son idénticos”

Sólo aproximadamente cuando el campo gravitatorio es uniforme sobre el cuerpo.

### “Una máquina simple crea energía”

No.

### “Una palanca reduce fuerza sin ninguna compensación”

No. En el modelo ideal, la reducción de fuerza se compensa con distancia.

---

## 58. Problemas y ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Conceptos</strong>
  </div>
  <ol>
    <li>Escribí las dos condiciones de equilibrio de un cuerpo rígido.</li>
    <li>Definí torque.</li>
    <li>Definí brazo de palanca.</li>
    <li>¿Qué diferencia hay entre centro de masa y centro de gravedad?</li>
    <li>¿Qué condición geométrica favorece el vuelco?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Torque</strong>
  </div>
  <ol>
    <li>Calculá el torque de una fuerza de 30 N aplicada perpendicularmente a 0,40 m de un eje.</li>
    <li>Repetí si se aplica a 0,10 m.</li>
    <li>Una fuerza de 50 N se aplica a 0,60 m formando 30° con el vector radial. Calculá el módulo del torque.</li>
    <li>Explicá cuándo una fuerza produce torque cero respecto de un eje.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Equilibrio</strong>
  </div>
  <ol>
    <li>Una barra de peso despreciable tiene una carga de 300 N a 1 m del fulcro. ¿Qué fuerza perpendicular debe aplicarse a 3 m del otro lado para equilibrarla?</li>
    <li>Una barra uniforme de 2 m pesa 80 N y está apoyada en un extremo. Calculá el torque de su peso respecto del apoyo cuando está horizontal.</li>
    <li>Agregá una fuerza vertical en el extremo libre que la mantenga en equilibrio y calculá su módulo.</li>
    <li>Después calculá la reacción vertical del apoyo.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Centro de masa y estabilidad</strong>
  </div>
  <ol>
    <li>Dos masas de 2 kg y 6 kg están en x = 0 m y x = 4 m. Calculá x_CM.</li>
    <li>Explicá por qué bajar el centro de masa puede aumentar la estabilidad de un objeto apoyado.</li>
    <li>Compará dos objetos de igual altura pero bases de diferente ancho frente al vuelco.</li>
    <li>Diseñá un criterio para decidir cuándo un bloque inclinado comienza a volcar usando la proyección de su centro de masa.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Derivá `τ = Fd⊥` a partir de `τ = rF senθ`.</li>
    <li>Explicá por qué, si `ΣF = 0`, el torque neto de un cuerpo en equilibrio puede calcularse respecto de cualquier punto.</li>
    <li>Analizá un par de fuerzas y justificá por qué produce torque neto sin fuerza resultante.</li>
    <li>Relacioná una máquina simple ideal con el intercambio entre fuerza y distancia sin usar todavía formalmente conservación de energía.</li>
  </ol>
</div>

---

## 59. Experiencia: regla como palanca

### Objetivo

Comprobar cualitativamente el equilibrio de torques.

### Materiales

- regla resistente;
- apoyo cilíndrico pequeño;
- masas livianas conocidas;
- cinta métrica o escala de la regla.

### Procedimiento

1. Apoyá la regla sobre un fulcro.
2. Colocá una masa a un lado.
3. Colocá otra masa al otro lado.
4. Ajustá distancias hasta lograr equilibrio.
5. Compará los productos `Fd`.

### Esperamos

Aproximadamente:

**F₁d₁ ≈ F₂d₂**

### Seguridad

Usar masas pequeñas y evitar que caigan sobre manos o pies.

---

## 60. Experiencia: estabilidad

Podemos comparar cajas livianas con:

- base ancha;
- base angosta;
- masa ubicada más arriba o más abajo.

Inclinamos lentamente la superficie o el objeto, sin riesgo.

Observamos cuándo:

- la proyección del centro de masa alcanza el borde de la base.

Esto permite conectar:

- geometría;
- torque gravitatorio;
- vuelco.

---

## 61. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Qué dos condiciones necesita un cuerpo rígido para estar en equilibrio mecánico?</summary>
  <div class="lesson-quiz__answer">
    Fuerza neta cero y torque neto cero: ΣF = 0 y Στ = 0.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Qué es el brazo de palanca?</summary>
  <div class="lesson-quiz__answer">
    La distancia perpendicular entre el eje de giro y la línea de acción de la fuerza.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Puede una fuerza no nula producir torque cero?</summary>
  <div class="lesson-quiz__answer">
    Sí. Ocurre si su línea de acción pasa por el eje o punto respecto del cual calculamos el torque.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Centro de masa y centro de gravedad coinciden siempre?</summary>
  <div class="lesson-quiz__answer">
    No necesariamente. Coinciden aproximadamente cuando el campo gravitatorio es prácticamente uniforme sobre todo el cuerpo.
  </div>
</details>

<details class="lesson-quiz">
  <summary>5. ¿Qué favorece la estabilidad frente al vuelco?</summary>
  <div class="lesson-quiz__answer">
    En general, una base de sustentación más amplia y un centro de masa más bajo, manteniendo su proyección dentro de la base.
  </div>
</details>

<details class="lesson-quiz">
  <summary>6. ¿Una máquina simple puede crear energía?</summary>
  <div class="lesson-quiz__answer">
    No. Puede intercambiar fuerza por distancia o cambiar direcciones. La conservación de la energía se formalizará en la próxima lección.
  </div>
</details>

---

## 62. Resumen

- Equilibrio traslacional exige `ΣF = 0`.
- Equilibrio rotacional exige `Στ = 0`.
- Para equilibrio estático de un cuerpo rígido necesitamos ambas condiciones.
- El torque mide el efecto rotacional de una fuerza.
- `τ = rF senθ = Fd⊥`.
- El brazo de palanca es la distancia perpendicular a la línea de acción.
- Una fuerza cuya línea de acción pasa por el eje produce torque cero respecto de ese eje.
- El signo del torque depende de una convención horario/antihorario.
- El centro de masa representa la distribución de masa.
- El centro de gravedad representa la acción resultante de la gravedad.
- Ambos coinciden aproximadamente en un campo gravitatorio uniforme.
- La estabilidad depende de la posición del centro de masa y de la base de apoyo.
- El vuelco se favorece cuando la proyección del centro de masa sale de la base.
- Las palancas funcionan mediante equilibrio de torques.
- Las máquinas simples pueden reducir fuerza a costa de aumentar distancia o cambiar direcciones.
- Una máquina ideal no crea energía.
- Elegir bien el punto de cálculo de torques simplifica muchos problemas.

---

## 63. Siguiente tema recomendado

**F-11 — Trabajo, energía y potencia**

Hasta ahora describimos fuerzas y sus efectos sobre la traslación y la rotación.

Ahora vamos a introducir otra forma muy poderosa de analizar sistemas:

- trabajo de una fuerza;
- producto escalar;
- energía cinética;
- teorema trabajo-energía;
- energía potencial;
- conservación de la energía;
- potencia;
- rendimiento;
- diagramas energéticos.
