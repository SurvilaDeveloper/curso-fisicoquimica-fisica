---
title: "Magnitudes, mediciones y unidades"
description: "Cómo medir, expresar resultados con unidades, estimar incertidumbres, convertir magnitudes y representar datos científicos."
slug: "magnitudes-mediciones-y-unidades"

course: "fisicoquimica"
module: "medicion-y-unidades"
order: 2

level: "basico"
cycle: "basico"

yearsApprox: [1, 2]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - introduccion-a-las-ciencias-fisicas-y-quimicas

skills:
  - medicion
  - unidades
  - conversion-de-unidades
  - notacion-cientifica
  - incertidumbre
  - lectura-de-tablas
  - interpretacion-de-graficos

hasExercises: true
hasQuiz: true
hasExperiment: true

deepening: true
status: "complete"
---

## Medir es comparar

Decir que una mesa es “larga” puede ser útil en una conversación cotidiana, pero no alcanza si queremos comunicar un resultado científico.

Si afirmamos que la mesa mide **1,42 m**, estamos haciendo algo más preciso: comparamos su longitud con una unidad acordada y expresamos el resultado mediante un número y una unidad.

Una medición siempre intenta responder una pregunta de este tipo:

> **¿Cuántas veces está contenida una determinada unidad en la magnitud que queremos medir?**

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Una medición no es solamente un número. Un resultado de medición necesita una magnitud, un valor numérico, una unidad y, cuando corresponde, información sobre su incertidumbre.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta lección deberías poder:

- explicar qué es una magnitud física;
- distinguir valor numérico y unidad;
- reconocer longitud, masa, tiempo, temperatura, área, volumen y densidad;
- trabajar con unidades del Sistema Internacional y reconocer el papel del SIMELA en Argentina;
- usar prefijos como kilo-, centi-, mili- y micro-;
- convertir unidades correctamente;
- evitar errores en conversiones de áreas y volúmenes;
- escribir números en notación científica;
- estimar órdenes de magnitud;
- elegir un instrumento apropiado para una medición;
- comprender resolución e incertidumbre;
- distinguir precisión de exactitud;
- usar cifras significativas de manera introductoria;
- organizar datos en tablas;
- leer e interpretar gráficos.

## Prerrequisitos

Necesitamos solamente operaciones aritméticas básicas, potencias de 10 y el criterio trabajado en FQ-01 de separar observaciones de interpretaciones.

---

## 1. Magnitudes físicas

Una **magnitud física** es una propiedad de un cuerpo, sustancia, sistema o fenómeno que puede compararse cuantitativamente mediante una medición.

Ejemplos:

- longitud;
- masa;
- tiempo;
- temperatura;
- área;
- volumen;
- densidad.

No toda propiedad se expresa necesariamente mediante una magnitud. Decir que una superficie es “bonita” o que un sonido es “agradable” no define, por sí solo, una magnitud física medible.

### Valor numérico y unidad

Un resultado como

<div class="formula-panel">
  <span class="formula-panel__label">Resultado de una medición</span>
  <div class="formula-panel__formula">L = 2,35 m</div>
  <p><strong>L</strong> representa la longitud, <strong>2,35</strong> es el valor numérico y <strong>m</strong> es la unidad.</p>
</div>

Cambiar la unidad cambia el valor numérico, pero no cambia la cantidad física medida.

Por ejemplo:

- 1 m;
- 100 cm;
- 1000 mm.

Las tres expresiones representan la misma longitud.

---

## 2. Algunas magnitudes que usaremos con frecuencia

<table class="lesson-comparison">
  <thead>
    <tr>
      <th>Magnitud</th>
      <th>Qué describe</th>
      <th>Unidad SI habitual</th>
      <th>Símbolo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Longitud</td>
      <td>Extensión lineal o distancia</td>
      <td>metro</td>
      <td>m</td>
    </tr>
    <tr>
      <td>Masa</td>
      <td>Cantidad asociada a la inercia de un cuerpo</td>
      <td>kilogramo</td>
      <td>kg</td>
    </tr>
    <tr>
      <td>Tiempo</td>
      <td>Duración de un proceso o intervalo</td>
      <td>segundo</td>
      <td>s</td>
    </tr>
    <tr>
      <td>Temperatura</td>
      <td>Estado térmico del sistema</td>
      <td>kelvin</td>
      <td>K</td>
    </tr>
    <tr>
      <td>Área</td>
      <td>Extensión de una superficie</td>
      <td>metro cuadrado</td>
      <td>m²</td>
    </tr>
    <tr>
      <td>Volumen</td>
      <td>Espacio ocupado</td>
      <td>metro cúbico</td>
      <td>m³</td>
    </tr>
    <tr>
      <td>Densidad</td>
      <td>Relación entre masa y volumen</td>
      <td>kilogramo por metro cúbico</td>
      <td>kg/m³</td>
    </tr>
  </tbody>
</table>

En el laboratorio y en la vida cotidiana también encontraremos unidades prácticas como gramos, centímetros cúbicos, mililitros o grados Celsius. Lo importante será reconocer qué magnitud representa cada unidad y convertir cuando sea necesario.

<div class="lesson-callout lesson-callout--error">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">!</span>
    <strong>Error frecuente</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Masa y peso no son sinónimos. La masa se expresa habitualmente en kg; el peso es una fuerza y se expresa en newtons. La diferencia se desarrollará con detalle cuando estudiemos fuerzas.</p>
  </div>
</div>

---

## 3. Magnitudes fundamentales y derivadas

En el Sistema Internacional algunas magnitudes se toman como base y otras se construyen combinando unidades.

Por ejemplo, el área se obtiene a partir de dos longitudes:

<div class="formula-panel">
  <span class="formula-panel__label">Área de un rectángulo</span>
  <div class="formula-panel__formula">A = largo × ancho</div>
  <p>Si ambas longitudes están expresadas en metros, el área queda expresada en metros cuadrados: m².</p>
</div>

El volumen de un prisma rectangular puede expresarse como:

<div class="formula-panel">
  <span class="formula-panel__label">Volumen de un prisma rectangular</span>
  <div class="formula-panel__formula">V = largo × ancho × alto</div>
  <p>Si las tres longitudes están en metros, la unidad resultante es m³.</p>
</div>

La densidad se define mediante:

<div class="formula-panel">
  <span class="formula-panel__label">Densidad</span>
  <div class="formula-panel__formula">ρ = m / V</div>
  <p>ρ es la densidad, m la masa y V el volumen. En el SI puede expresarse en kg/m³.</p>
</div>

En FQ-03 utilizaremos la densidad como propiedad para comparar e identificar materiales.

---

## 4. Sistema Internacional y SIMELA

Para que los resultados puedan compararse entre laboratorios, escuelas, industrias y países se necesitan unidades compartidas.

El **Sistema Internacional de Unidades (SI)** proporciona un sistema coherente de unidades utilizado como referencia científica.

En Argentina, el **SIMELA** establece el sistema legal de unidades y se apoya en las unidades del SI y otras unidades admitidas para usos específicos.

Para este curso, la regla práctica será:

- identificar la magnitud;
- escribir siempre la unidad;
- preferir unidades coherentes;
- convertir unidades antes de combinar datos en una fórmula cuando sea necesario.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Las unidades no son un adorno al final de una cuenta. Forman parte de la información física del resultado y sirven para detectar muchos errores.</p>
  </div>
</div>

---

## 5. Prefijos y potencias de diez

Los prefijos permiten expresar cantidades muy grandes o muy pequeñas sin escribir demasiados ceros.

<table class="lesson-comparison">
  <thead>
    <tr>
      <th>Prefijo</th>
      <th>Símbolo</th>
      <th>Factor</th>
      <th>Ejemplo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>kilo</td>
      <td>k</td>
      <td>10³</td>
      <td>1 km = 1000 m</td>
    </tr>
    <tr>
      <td>centi</td>
      <td>c</td>
      <td>10⁻²</td>
      <td>1 cm = 0,01 m</td>
    </tr>
    <tr>
      <td>mili</td>
      <td>m</td>
      <td>10⁻³</td>
      <td>1 mm = 0,001 m</td>
    </tr>
    <tr>
      <td>micro</td>
      <td>µ</td>
      <td>10⁻⁶</td>
      <td>1 µm = 0,000001 m</td>
    </tr>
  </tbody>
</table>

Más adelante aparecerán otros prefijos, pero estos alcanzan para una gran parte de las mediciones escolares iniciales.

---

## 6. Conversión de unidades

Convertir una unidad significa cambiar la forma de expresar una cantidad sin cambiar la cantidad física.

### Método de factores de conversión

Supongamos que queremos convertir 2,35 km a metros.

Sabemos que:

**1 km = 1000 m**

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Convertir 2,35 km a metros</h3>
  <div class="worked-example-card__steps">
    <p>2,35 km × (1000 m / 1 km)</p>
    <p>La unidad km aparece arriba y abajo, por lo que se cancela.</p>
    <p><strong>2,35 km = 2350 m</strong></p>
  </div>
</div>

El factor de conversión vale 1 porque numerador y denominador representan la misma cantidad.

### De km/h a m/s

Una conversión frecuente en Física es:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Convertir 72 km/h a m/s</h3>
  <div class="worked-example-card__steps">
    <p>72 km/h × (1000 m / 1 km) × (1 h / 3600 s)</p>
    <p>72 × 1000 / 3600 = 20</p>
    <p><strong>72 km/h = 20 m/s</strong></p>
  </div>
</div>

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Control de unidades</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Antes de hacer la cuenta, mirá qué unidades deben cancelarse y cuál tiene que quedar. Este control reduce muchísimo los errores de conversión.</p>
  </div>
</div>

---

## 7. Cuidado con áreas y volúmenes

Si cambiamos una unidad de longitud, el factor de conversión se eleva al cuadrado para áreas y al cubo para volúmenes.

Como:

**1 m = 100 cm**

entonces:

**1 m² = (100 cm)² = 10 000 cm²**

y:

**1 m³ = (100 cm)³ = 1 000 000 cm³**

<div class="lesson-callout lesson-callout--error">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">!</span>
    <strong>Error frecuente</strong>
  </div>
  <div class="lesson-callout__body">
    <p>No es correcto decir que 1 m² = 100 cm². El factor 100 corresponde a la longitud. Para un área debe aplicarse dos veces: 100 × 100.</p>
  </div>
</div>

### Litro y volumen

En contextos cotidianos y de laboratorio es frecuente usar litros y mililitros:

- 1 L = 1 dm³;
- 1 mL = 1 cm³;
- 1000 mL = 1 L.

Estas equivalencias serán muy útiles cuando estudiemos soluciones y densidad.

---

## 8. Notación científica

La notación científica permite escribir números muy grandes o muy pequeños de forma compacta.

Se escribe:

<div class="formula-panel">
  <span class="formula-panel__label">Forma general</span>
  <div class="formula-panel__formula">a × 10ⁿ</div>
  <p>donde el valor absoluto de a es mayor o igual que 1 y menor que 10, y n es un número entero.</p>
</div>

Ejemplos:

- 450 000 = 4,5 × 10⁵;
- 0,00032 = 3,2 × 10⁻⁴;
- 6 020 000 = 6,02 × 10⁶.

### Mover la coma

- Si movemos la coma hacia la **izquierda**, el exponente es positivo.
- Si la movemos hacia la **derecha**, el exponente es negativo.

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Escribir 0,0000075 en notación científica</h3>
  <div class="worked-example-card__steps">
    <p>Movemos la coma hasta obtener 7,5.</p>
    <p>La movimos 6 lugares hacia la derecha.</p>
    <p><strong>0,0000075 = 7,5 × 10⁻⁶</strong></p>
  </div>
</div>

---

## 9. Orden de magnitud

El **orden de magnitud** permite estimar la escala de una cantidad mediante una potencia de diez.

Por ejemplo:

- una longitud de aproximadamente 2 m tiene escala del orden de 10⁰ m;
- 3500 m se encuentra en la escala de los miles de metros, aproximadamente 10³ m;
- 0,0004 m está alrededor de la escala 10⁻⁴ m.

El objetivo inicial no es reemplazar el valor medido, sino adquirir intuición sobre tamaños y detectar resultados absurdos.

<div class="lesson-callout lesson-callout--ejemplo">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">→</span>
    <strong>Estimación rápida</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Si una persona obtiene como resultado que el largo de un aula es 4 × 10⁻³ m, el orden de magnitud ya indica que algo está mal: eso sería apenas unos milímetros.</p>
  </div>
</div>

---

## 10. Instrumentos de medición

No elegimos un instrumento solamente porque “mide esa magnitud”. También debemos considerar el intervalo de valores y la resolución necesaria.

Ejemplos:

- regla o cinta métrica para longitud;
- balanza para masa;
- cronómetro para tiempo;
- termómetro para temperatura;
- probeta para volumen de líquidos.

### Resolución

La **resolución** de un instrumento es el menor cambio que puede distinguir o mostrar.

Una regla graduada cada 1 mm tiene mayor resolución que una regla marcada solamente cada 1 cm.

Eso no significa automáticamente que toda medición realizada con la primera sea “correcta”. También intervienen la técnica de medición, el estado del instrumento y otras fuentes de incertidumbre.

---

## 11. Ninguna medición experimental es infinitamente exacta

Toda medición tiene una incertidumbre.

Si medimos la longitud de un objeto con una regla, el resultado depende de:

- la resolución de la regla;
- cómo alineamos el cero;
- la posición de nuestros ojos;
- si los extremos del objeto están bien definidos;
- si repetimos o no la medición.

Por eso puede ser razonable expresar un resultado como:

<div class="formula-panel">
  <span class="formula-panel__label">Medición con incertidumbre</span>
  <div class="formula-panel__formula">x = (12,4 ± 0,1) cm</div>
  <p>Esta escritura comunica un valor central y una estimación de la incertidumbre asociada.</p>
</div>

En actividades escolares simples, la resolución del instrumento sirve como punto de partida para estimar la incertidumbre. En situaciones más rigurosas, la incertidumbre puede depender de varios factores y no se reduce a una única regla universal.

<div class="lesson-callout lesson-callout--error">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">!</span>
    <strong>Error frecuente</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Una medición no se vuelve exacta por escribir muchos decimales. Si el instrumento no puede distinguir esas cifras, esos dígitos no contienen información experimental real.</p>
  </div>
</div>

---

## 12. Precisión y exactitud

Son conceptos relacionados, pero no significan lo mismo.

**Precisión** se refiere a qué tan próximos resultan entre sí los valores de mediciones repetidas.

**Exactitud** se refiere a qué tan próximo está un resultado respecto de un valor de referencia aceptado o del valor que intentamos estimar.

Imaginemos cuatro mediciones de una longitud cuyo valor de referencia es 10,0 cm.

### Caso A

9,99 cm; 10,01 cm; 10,00 cm; 10,00 cm

Los resultados son próximos entre sí y también al valor de referencia: buena precisión y buena exactitud.

### Caso B

9,50 cm; 9,51 cm; 9,50 cm; 9,49 cm

Los resultados están muy agrupados, pero desplazados respecto del valor de referencia: buena precisión, baja exactitud.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Repetir una medición permite estudiar la dispersión de los resultados, pero repetir muchas veces un procedimiento sesgado no elimina automáticamente ese sesgo.</p>
  </div>
</div>

---

## 13. Repetición y promedio

Cuando repetimos una medición varias veces, una primera forma de resumir los resultados es calcular el promedio.

<div class="formula-panel">
  <span class="formula-panel__label">Promedio</span>
  <div class="formula-panel__formula">x̄ = (x<sub>1</sub> + x<sub>2</sub> + ... + x<sub>n</sub>) / n</div>
  <p>El promedio no elimina la incertidumbre, pero resume el centro de un conjunto de mediciones repetidas.</p>
</div>

### Ejemplo

Medimos cinco veces un tiempo:

- 4,2 s;
- 4,1 s;
- 4,3 s;
- 4,2 s;
- 4,2 s.

Promedio:

**x̄ = 4,2 s**

También es importante observar cuánto se dispersan los valores alrededor del promedio. Más adelante podremos usar herramientas estadísticas más completas.

---

## 14. Cifras significativas

Las **cifras significativas** ayudan a comunicar la cantidad de información numérica que realmente está justificada por una medición.

Reglas introductorias:

- los dígitos distintos de cero son significativos;
- los ceros entre dígitos no nulos son significativos;
- los ceros a la izquierda solamente ubican la coma y no son significativos;
- los ceros finales después de una coma decimal pueden ser significativos;
- la notación científica permite mostrar con claridad cuántas cifras se quieren conservar.

Ejemplos:

- 3,42 tiene 3 cifras significativas;
- 0,0042 tiene 2;
- 1,050 tiene 4;
- 4,20 × 10³ tiene 3.

<div class="lesson-callout lesson-callout--ejemplo">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">→</span>
    <strong>¿4,2 y 4,20 representan lo mismo?</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Como número matemático representan el mismo valor. En un contexto experimental, 4,20 puede comunicar una resolución o precisión mayor que 4,2. Por eso los ceros finales pueden contener información.</p>
  </div>
</div>

No conviene aplicar reglas de redondeo de manera mecánica sin pensar primero en la calidad de los datos de entrada.

---

## 15. Densidad como ejemplo de magnitud derivada

La densidad relaciona dos mediciones: masa y volumen.

Supongamos un objeto con:

- masa = 270 g;
- volumen = 100 cm³.

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Calcular la densidad</h3>
  <div class="worked-example-card__steps">
    <p>ρ = m / V</p>
    <p>ρ = 270 g / 100 cm³</p>
    <p><strong>ρ = 2,7 g/cm³</strong></p>
  </div>
</div>

En FQ-03 estudiaremos por qué esta relación resulta útil para caracterizar materiales.

---

## 16. Organizar datos en tablas

Una tabla científica debe permitir comprender qué se midió sin tener que adivinar.

Una tabla clara incluye:

- nombre de las variables;
- unidades;
- valores ordenados;
- cantidad razonable de cifras;
- título o contexto cuando sea necesario.

Ejemplo:

<table class="lesson-comparison">
  <thead>
    <tr>
      <th>Tiempo (min)</th>
      <th>Temperatura (°C)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>0</td><td>80,0</td></tr>
    <tr><td>2</td><td>72,5</td></tr>
    <tr><td>4</td><td>66,1</td></tr>
    <tr><td>6</td><td>60,8</td></tr>
    <tr><td>8</td><td>56,4</td></tr>
  </tbody>
</table>

La unidad se escribe preferentemente en el encabezado, no repetida en cada celda.

---

## 17. Leer e interpretar gráficos

Los gráficos permiten reconocer relaciones que pueden ser difíciles de detectar en una lista de números.

En un gráfico cartesiano:

- el eje horizontal suele representar la variable que controlamos o utilizamos como referencia;
- el eje vertical suele representar la variable que observamos como respuesta.

Esta convención es útil, pero debemos comprender qué representa realmente cada variable en cada experimento.

### Antes de interpretar un gráfico

Preguntá siempre:

1. ¿Qué representa cada eje?
2. ¿Qué unidades se usan?
3. ¿Cuál es la escala?
4. ¿La escala comienza en cero?
5. ¿Los puntos representan mediciones?
6. ¿Hay una línea que une datos o un modelo ajustado?
7. ¿Qué tendencia general aparece?
8. ¿Hay valores atípicos?

<div class="lesson-callout lesson-callout--error">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">!</span>
    <strong>Error frecuente</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Una línea que sube en un gráfico no significa automáticamente “el objeto sube”. Significa que la variable del eje vertical aumenta cuando cambia la variable del eje horizontal.</p>
  </div>
</div>

### Interpolación y extrapolación

**Interpolar** es estimar un valor dentro del intervalo cubierto por los datos.

**Extrapolar** es extender la tendencia fuera de ese intervalo.

La extrapolación suele ser más riesgosa porque no sabemos si la misma relación continuará cumpliéndose fuera de la región medida.

---

## 18. Experiencia: medir una longitud varias veces

### Objetivo

Explorar resolución, repetición, promedio e incertidumbre.

### Materiales

- una regla milimetrada;
- un objeto de longitud entre 10 y 30 cm;
- papel y lápiz.

### Procedimiento

1. Elegí una dimensión bien definida del objeto.
2. Realizá cinco mediciones independientes.
3. Registrá cada resultado con la misma unidad.
4. Calculá el promedio.
5. Identificá la resolución de la regla.
6. Compará la dispersión entre las cinco mediciones.
7. Explicá qué factores podrían producir diferencias.

### Registro sugerido

| Medición | Longitud (cm) |
| --- | --- |
| 1 | |
| 2 | |
| 3 | |
| 4 | |
| 5 | |

### Preguntas

- ¿Todas las mediciones dieron exactamente lo mismo?
- ¿La diferencia entre valores es mayor o menor que la resolución del instrumento?
- ¿Qué resultado comunicarías?
- ¿Qué incertidumbre considerarías razonable justificar?
- ¿Cambiaría el resultado si utilizaras una cinta graduada solamente cada centímetro?

---

## 19. Ejemplo integrado

Un estudiante mide una placa rectangular:

- largo: 20,4 cm;
- ancho: 8,2 cm.

Quiere calcular el área.

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Área de una placa</h3>
  <div class="worked-example-card__steps">
    <p>A = largo × ancho</p>
    <p>A = 20,4 cm × 8,2 cm</p>
    <p>A = 167,28 cm²</p>
    <p>Como los datos originales tienen una cantidad limitada de cifras significativas, no tiene sentido presentar todos los decimales de la calculadora como si fueran igualmente confiables.</p>
    <p>Una presentación razonable a este nivel sería aproximadamente <strong>1,7 × 10² cm²</strong>.</p>
  </div>
</div>

La calculadora puede mostrar más dígitos de los que justifican nuestros datos. El criterio físico debe acompañar siempre al cálculo.

---

## 20. Errores frecuentes

### “Un número sin unidad alcanza”

No. En una medición, 25 puede significar 25 m, 25 s, 25 °C o muchas otras cosas.

### “Para convertir unidades siempre multiplico por 10 o por 100”

No existe una regla única. El factor depende de las unidades y de si trabajamos con longitud, área, volumen u otra magnitud.

### “Cuantos más decimales escribo, más precisa es mi medición”

Los decimales solamente tienen sentido si el instrumento y el procedimiento justifican esa información.

### “Precisión y exactitud son lo mismo”

No. Una serie de mediciones puede ser muy precisa y, al mismo tiempo, estar sistemáticamente alejada de un valor de referencia.

### “Si el gráfico sube, el fenómeno aumenta con el tiempo”

Solamente si el eje horizontal representa tiempo. Siempre debemos leer las etiquetas y unidades de los ejes.

### “La calculadora decide cuántas cifras tiene el resultado”

La calculadora hace operaciones. La calidad del resultado depende de los datos y del análisis experimental.

---

## 21. Problemas y ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Reconocimiento</strong>
  </div>
  <ol>
    <li>Identificá la magnitud y la unidad en: 12,5 cm; 4,2 s; 25 °C; 350 g.</li>
    <li>Indicá cuáles son unidades de longitud: m, s, km, cm³, mm.</li>
    <li>Escribí el símbolo correcto de metro, segundo, kilogramo y kelvin.</li>
    <li>¿Cuál de estos instrumentos elegirías para medir el tiempo de una carrera corta: regla, cronómetro, balanza o probeta?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Aplicación directa</strong>
  </div>
  <ol>
    <li>Convertí 3,6 km a m.</li>
    <li>Convertí 4500 mm a m.</li>
    <li>Convertí 2,4 L a mL.</li>
    <li>Convertí 90 km/h a m/s.</li>
    <li>Escribí 0,00056 en notación científica.</li>
    <li>Escribí 7,2 × 10⁵ en notación decimal.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Integración</strong>
  </div>
  <ol>
    <li>Una placa mide 1,5 m por 80 cm. Convertí las unidades necesarias y calculá el área en m².</li>
    <li>Un bloque tiene una masa de 540 g y un volumen de 200 cm³. Calculá su densidad.</li>
    <li>Un estudiante mide cuatro veces un tiempo: 3,2 s; 3,4 s; 3,3 s; 3,3 s. Calculá el promedio y describí la dispersión de los datos.</li>
    <li>Explicá por qué 1 m² no equivale a 100 cm².</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Problema experimental</strong>
  </div>
  <ol>
    <li>Diseñá un procedimiento para determinar el grosor aproximado de una sola hoja de papel usando una regla que solamente permite leer milímetros. Explicá cómo podrías reducir la limitación de la resolución.</li>
    <li>Dos grupos miden la misma longitud. El grupo A obtiene 10,1; 10,1; 10,2; 10,1 cm. El grupo B obtiene 9,8; 10,3; 10,0; 10,2 cm. Compará la precisión de ambos conjuntos y explicá qué información adicional necesitarías para hablar de exactitud.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Una medición se informa como (25,0 ± 0,2) cm. Calculá qué porcentaje representa 0,2 cm respecto del valor central y explicá qué información aporta esa comparación.</li>
    <li>Buscá un ejemplo de un gráfico publicado en un medio o sitio web. Analizá ejes, unidades, escala y si la representación podría inducir a una interpretación engañosa.</li>
  </ol>
</div>

---

## 22. Preguntas conceptuales

1. ¿Por qué una medición necesita una unidad?
2. ¿Qué cambia cuando expresamos una misma longitud en m y en cm?
3. ¿Qué diferencia hay entre una magnitud y una unidad?
4. ¿Por qué las conversiones de área requieren elevar al cuadrado el factor de longitud?
5. ¿Qué significa resolución de un instrumento?
6. ¿Por qué escribir más decimales no garantiza mayor precisión?
7. ¿Qué diferencia hay entre precisión y exactitud?
8. ¿Qué representa la incertidumbre?
9. ¿Qué ventaja ofrece la notación científica?
10. ¿Por qué debemos mirar la escala de un gráfico antes de interpretarlo?
11. ¿Por qué extrapolar suele ser más riesgoso que interpolar?
12. ¿Qué información se pierde si una tabla no indica unidades?

---

## 23. Autoevaluación

Intentá responder antes de desplegar cada solución.

<details class="lesson-quiz">
  <summary>1. ¿Cuánto es 2,5 km en metros?</summary>
  <div class="lesson-quiz__answer">
    2,5 km × 1000 m/km = 2500 m.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿1 m² equivale a 100 cm²?</summary>
  <div class="lesson-quiz__answer">
    No. Como 1 m = 100 cm, entonces 1 m² = (100 cm)² = 10 000 cm².
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Qué diferencia hay entre precisión y exactitud?</summary>
  <div class="lesson-quiz__answer">
    La precisión describe qué tan próximos están entre sí resultados repetidos. La exactitud describe qué tan próximo está el resultado de un valor de referencia o del valor que queremos estimar.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Qué significa que una regla tenga resolución de 1 mm?</summary>
  <div class="lesson-quiz__answer">
    Significa que su escala permite distinguir incrementos de aproximadamente 1 mm. La incertidumbre total de una medición puede depender además del procedimiento y de otras fuentes.
  </div>
</details>

<details class="lesson-quiz">
  <summary>5. Escribí 0,00042 en notación científica.</summary>
  <div class="lesson-quiz__answer">
    4,2 × 10⁻⁴.
  </div>
</details>

<details class="lesson-quiz">
  <summary>6. ¿Una calculadora con muchos decimales vuelve más exacta una medición?</summary>
  <div class="lesson-quiz__answer">
    No. La calculadora puede mostrar muchos dígitos, pero la información experimental está limitada por los datos, los instrumentos y la incertidumbre.
  </div>
</details>

<details class="lesson-quiz">
  <summary>7. ¿Qué debemos mirar primero en un gráfico?</summary>
  <div class="lesson-quiz__answer">
    Qué representa cada eje, sus unidades y su escala. Sin esa información no podemos interpretar correctamente la forma del gráfico.
  </div>
</details>

---

## 24. Resumen

- Medir es comparar una magnitud con una unidad.
- Un resultado experimental necesita número y unidad.
- Longitud, masa, tiempo y temperatura son magnitudes de uso fundamental; área, volumen y densidad son ejemplos de magnitudes derivadas.
- El SI proporciona un sistema coherente de unidades y el SIMELA organiza su uso legal en Argentina.
- Los prefijos representan potencias de diez.
- Los factores de conversión permiten cambiar unidades sin cambiar la cantidad física.
- En áreas y volúmenes los factores de longitud se elevan al cuadrado o al cubo.
- La notación científica facilita el trabajo con números muy grandes o pequeños.
- El orden de magnitud ayuda a estimar escalas y detectar resultados absurdos.
- Todo instrumento tiene una resolución limitada.
- Toda medición experimental tiene incertidumbre.
- Precisión y exactitud describen aspectos diferentes.
- Las cifras significativas comunican cuánta información numérica está justificada.
- Las tablas y gráficos deben indicar variables, unidades y escalas.
- Interpolar dentro de los datos suele ser más confiable que extrapolar fuera del intervalo medido.

---

## 25. Profundización: incertidumbre relativa

Dos incertidumbres absolutas iguales pueden tener importancia muy distinta.

Una incertidumbre de 1 cm es pequeña si medimos una cancha de 100 m, pero enorme si intentamos medir un objeto de 2 cm.

Una forma introductoria de comparar es calcular:

<div class="formula-panel">
  <span class="formula-panel__label">Incertidumbre relativa porcentual</span>
  <div class="formula-panel__formula">(Δx / x) × 100 %</div>
  <p>Compara la incertidumbre absoluta Δx con el valor medido x.</p>
</div>

Si medimos:

**x = (20,0 ± 0,2) cm**

entonces:

**0,2 / 20,0 × 100 % = 1 %**

Este porcentaje no “elimina” la incertidumbre. La expresa en relación con el tamaño de la cantidad medida.

---

## 26. Aplicación cotidiana: etiquetas, instrumentos y datos

Mediciones y unidades aparecen en casi todas las actividades cotidianas:

- masa de alimentos;
- volumen de bebidas;
- consumo eléctrico;
- temperatura ambiente;
- velocidad de vehículos;
- dosis y concentraciones;
- dimensiones de objetos;
- tiempos deportivos.

Leer correctamente una etiqueta o un instrumento requiere identificar:

1. qué magnitud se informa;
2. qué unidad se utiliza;
3. qué resolución tiene la lectura;
4. si existe una tolerancia o incertidumbre;
5. si las unidades son comparables con otras mediciones.

El lenguaje de las unidades permite que los datos científicos y técnicos sean comunicables.

---

## 27. Siguiente tema recomendado

**FQ-03 — Materia, cuerpos, materiales y sustancias**

Ahora que sabemos medir y comunicar resultados, podremos estudiar propiedades de los materiales de manera cuantitativa.

En la próxima lección trabajaremos con:

- materia;
- cuerpos;
- materiales;
- sustancias;
- propiedades intensivas y extensivas;
- masa;
- volumen;
- densidad;
- puntos de fusión y ebullición;
- conductividad;
- solubilidad.
