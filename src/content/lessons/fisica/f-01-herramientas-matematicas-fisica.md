---
title: "Herramientas matemáticas para Física"
description: "Las herramientas de álgebra, funciones, gráficos, trigonometría y vectores que vamos a usar para construir y resolver modelos físicos."
slug: "herramientas-matematicas-para-fisica"

course: "fisica"
module: "herramientas-matematicas"
order: 1

level: "basico"
cycle: "ambos"

yearsApprox: [3, 4, 5]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites: []

skills:
  - proporcionalidad
  - despeje-de-ecuaciones
  - potencias-y-raices
  - notacion-cientifica
  - funciones
  - interpretacion-de-graficos
  - pendiente
  - trigonometria
  - pitagoras
  - vectores
  - componentes-cartesianas
  - producto-escalar
  - uso-de-calculadora

hasExercises: true
hasQuiz: true
hasExperiment: false

deepening: true
status: "complete"
---

## La matemática como lenguaje, no como punto de partida

En Física queremos comprender fenómenos:

- cómo se mueve un cuerpo;
- por qué cambia su movimiento;
- cómo se transfiere energía;
- cómo se propaga una onda;
- cómo actúan los campos.

La matemática nos permite expresar esas relaciones con precisión.

Pero una ecuación física no es solamente una cuenta.

> **Primero necesitamos saber qué representa cada magnitud, qué modelo estamos usando y qué relación física expresa la ecuación.**

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>La matemática será una herramienta para pensar Física. No buscamos manipular símbolos sin significado, sino traducir entre fenómeno, gráfico, ecuación, unidades y resultado.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta lección deberías poder:

- reconocer proporcionalidad directa e inversa;
- despejar una variable en ecuaciones sencillas;
- trabajar con potencias y raíces;
- usar notación científica;
- interpretar funciones lineales y cuadráticas;
- leer información de un gráfico;
- calcular e interpretar una pendiente;
- utilizar seno, coseno y tangente;
- aplicar el teorema de Pitágoras;
- distinguir escalares y vectores;
- representar vectores;
- obtener componentes cartesianas;
- sumar y restar vectores;
- usar el producto escalar de manera introductoria;
- utilizar una calculadora sin perder control físico del resultado.

---

## 1. Prerrequisitos

Esta lección está diseñada como **puerta de entrada a Física**.

No exige haber completado todo el curso de Físico-Química.

Es útil tener familiaridad con:

- operaciones básicas;
- fracciones y decimales;
- unidades;
- lectura elemental de gráficos.

Si algún procedimiento matemático resulta nuevo, más adelante la colección **Matemáticas para Física** tendrá repasos M-01 a M-18 independientes para consultar solamente la herramienta necesaria.

---

## 2. Una ecuación física relaciona magnitudes

Consideremos:

<div class="formula-panel">
  <span class="formula-panel__label">Ejemplo</span>
  <div class="formula-panel__formula">d = v · t</div>
</div>

Podemos leerla como:

> la distancia recorrida en este modelo es igual a la velocidad multiplicada por el tiempo.

Los símbolos no son letras arbitrarias:

- `d` representa una distancia;
- `v` una velocidad;
- `t` un tiempo.

Además tienen unidades.

Si:

- `v = 5 m/s`;
- `t = 4 s`;

entonces:

**d = 5 m/s × 4 s = 20 m**

Las unidades también forman parte del razonamiento.

---

## 3. Igualdad y equivalencia

Una ecuación afirma que dos expresiones representan el mismo valor dentro del modelo.

Si:

**a = b**

podemos realizar la misma operación en ambos lados sin romper la igualdad.

Ejemplo:

**x + 3 = 8**

restamos 3 en ambos lados:

**x = 5**

Esta idea es la base del despeje de fórmulas.

---

## 4. Proporcionalidad directa

Dos magnitudes son directamente proporcionales cuando, dentro del modelo considerado:

> al multiplicar una por cierto factor, la otra se multiplica por el mismo factor.

Se expresa:

<div class="formula-panel">
  <span class="formula-panel__label">Proporcionalidad directa</span>
  <div class="formula-panel__formula">y = k · x</div>
  <p>k es la constante de proporcionalidad.</p>
</div>

Entonces:

**y/x = k**

mientras se mantengan las condiciones del modelo.

---

## 5. Ejemplo de proporcionalidad directa

Supongamos un movimiento ideal a velocidad constante:

**d = v · t**

Si v permanece constante:

**d ∝ t**

Para:

**v = 3 m/s**

tenemos:

| t (s) | d (m) |
| ---: | ---: |
| 1 | 3 |
| 2 | 6 |
| 3 | 9 |
| 4 | 12 |

Duplicar el tiempo duplica la distancia.

Triplicarlo la triplica.

---

## 6. Gráfico de una proporcionalidad directa

Para:

**y = kx**

el gráfico es una recta que pasa por el origen.

```text
y
|
|        /
|      /
|    /
|  /
|/____________ x
```

La pendiente es k.

Pero cuidado:

> **no toda recta representa proporcionalidad directa.**

Una recta:

**y = mx + b**

con `b ≠ 0` no pasa por el origen.

---

## 7. Proporcionalidad inversa

Dos magnitudes son inversamente proporcionales cuando su producto permanece constante:

<div class="formula-panel">
  <span class="formula-panel__label">Proporcionalidad inversa</span>
  <div class="formula-panel__formula">y = k / x</div>
</div>

Entonces:

**x · y = k**

Si x se duplica:

- y se reduce a la mitad.

Si x se triplica:

- y se reduce a un tercio.

---

## 8. Ejemplo de proporcionalidad inversa

En la ley de Boyle ideal:

**P · V = constante**

a temperatura y cantidad de gas constantes.

Entonces:

**P ∝ 1/V**

Si el volumen se reduce a la mitad:

- la presión se duplica.

Esto no produce una recta en un gráfico `P` versus `V`.

Produce una curva.

---

## 9. Cómo reconocer una proporcionalidad

No alcanza con observar que “cuando una sube, la otra también”.

### Directa

Verificamos si:

**y/x**

permanece constante.

### Inversa

Verificamos si:

**x · y**

permanece constante.

### Otra relación

Puede ser:

- lineal con término independiente;
- cuadrática;
- exponencial;
- más compleja.

La Física utiliza muchos tipos de relaciones.

---

## 10. Despejar una ecuación

Despejar significa aislar una variable utilizando operaciones equivalentes.

Ejemplo:

<div class="formula-panel">
  <span class="formula-panel__label">Partimos de</span>
  <div class="formula-panel__formula">v = d / t</div>
</div>

Queremos despejar d.

Multiplicamos ambos lados por t:

**v · t = d**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Resultado</span>
  <div class="formula-panel__formula">d = v · t</div>
</div>

---

## 11. Despejar tiempo

Desde:

**v = d/t**

multiplicamos por t:

**vt = d**

dividimos por v:

<div class="formula-panel">
  <span class="formula-panel__label">Tiempo</span>
  <div class="formula-panel__formula">t = d / v</div>
</div>

No necesitamos memorizar tres fórmulas diferentes.

Podemos recordar una relación y despejar.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Despejar es mejor que coleccionar fórmulas</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Comprender las operaciones algebraicas reduce la cantidad de fórmulas que hay que memorizar y ayuda a detectar errores.</p>
  </div>
</div>

---

## 12. Despeje con suma

Supongamos:

**x = x<sub>0</sub> + vt**

Queremos despejar t.

Restamos x<sub>0</sub>:

**x − x<sub>0</sub> = vt**

Dividimos por v:

<div class="formula-panel">
  <span class="formula-panel__label">Resultado</span>
  <div class="formula-panel__formula">t = (x − x<sub>0</sub>) / v</div>
</div>

Los paréntesis son importantes.

Todo x − x<sub>0</sub> debe dividirse por v.

---

## 13. Despeje con cuadrados

Supongamos:

**E = ½mv²**

Queremos despejar v.

Multiplicamos por 2:

**2E = mv²**

Dividimos por m:

**2E/m = v²**

Aplicamos raíz:

<div class="formula-panel">
  <span class="formula-panel__label">Resultado algebraico</span>
  <div class="formula-panel__formula">v = √(2E/m)</div>
</div>

En este contexto, si v representa rapidez, tomamos el valor no negativo.

En otros problemas matemáticos, una ecuación cuadrática puede admitir más de una solución.

---

## 14. Potencias

Una potencia representa multiplicaciones repetidas.

Ejemplo:

**10³ = 10 × 10 × 10 = 1000**

Reglas útiles:

<div class="formula-panel">
  <span class="formula-panel__label">Misma base: producto</span>
  <div class="formula-panel__formula">aᵐ · aⁿ = aᵐ⁺ⁿ</div>
</div>

<div class="formula-panel">
  <span class="formula-panel__label">Misma base: cociente</span>
  <div class="formula-panel__formula">aᵐ / aⁿ = aᵐ⁻ⁿ</div>
</div>

<div class="formula-panel">
  <span class="formula-panel__label">Potencia de potencia</span>
  <div class="formula-panel__formula">(aᵐ)ⁿ = aᵐⁿ</div>
</div>

---

## 15. Exponentes negativos

Un exponente negativo representa el inverso.

<div class="formula-panel">
  <span class="formula-panel__label">Exponente negativo</span>
  <div class="formula-panel__formula">a⁻ⁿ = 1/aⁿ</div>
</div>

Ejemplo:

**10⁻³ = 0,001**

Esto aparece continuamente en Física:

- milisegundos;
- micrómetros;
- cargas eléctricas;
- escalas atómicas.

---

## 16. Raíces

La raíz cuadrada invierte una potencia de exponente 2 para valores apropiados.

Ejemplo:

**√25 = 5**

porque:

**5² = 25**

También:

<div class="formula-panel">
  <span class="formula-panel__label">Raíz y potencia</span>
  <div class="formula-panel__formula">√(a²) = |a|</div>
</div>

El valor absoluto importa matemáticamente.

En muchos problemas físicos, la interpretación de la magnitud permite elegir el signo adecuado.

---

## 17. Notación científica

La notación científica escribe números como:

<div class="formula-panel">
  <span class="formula-panel__label">Forma general</span>
  <div class="formula-panel__formula">a × 10ⁿ</div>
  <p>con 1 ≤ |a| &lt; 10.</p>
</div>

Ejemplos:

**300 000 000 = 3,00 × 10⁸**

**0,0000016 = 1,6 × 10⁻⁶**

Es especialmente útil para escalas muy grandes o muy pequeñas.

---

## 18. Multiplicar en notación científica

Ejemplo:

**(2 × 10³)(4 × 10⁵)**

multiplicamos coeficientes:

**2 × 4 = 8**

sumamos exponentes:

**10³ × 10⁵ = 10⁸**

Resultado:

**8 × 10⁸**

---

## 19. Dividir en notación científica

Ejemplo:

**(6 × 10⁷)/(2 × 10³)**

coeficientes:

**6/2 = 3**

exponentes:

**10⁷/10³ = 10⁴**

Resultado:

**3 × 10⁴**

---

## 20. Orden de magnitud

El **orden de magnitud** permite comparar escalas aproximadamente mediante potencias de diez.

Ejemplos:

- tamaño humano → alrededor de `10⁰ m`;
- milímetro → `10⁻³ m`;
- kilómetro → `10³ m`.

No reemplaza una medición precisa.

Sirve para:

- estimar;
- comparar escalas;
- detectar resultados absurdos.

---

## 21. Función

Una **función** relaciona valores de una variable con valores de otra siguiendo una regla.

En Física solemos distinguir:

- variable independiente;
- variable dependiente.

Ejemplo:

**x(t)**

significa:

> posición x como función del tiempo t.

No significa `x × t`.

---

## 22. Función lineal

Una función lineal o afín tiene la forma:

<div class="formula-panel">
  <span class="formula-panel__label">Recta</span>
  <div class="formula-panel__formula">y = m x + b</div>
</div>

donde:

- m es la pendiente;
- b es el valor de y cuando x = 0.

En Física, m y b pueden tener significado físico y unidades.

---

## 23. Pendiente

La pendiente mide cuánto cambia y cuando cambia x.

<div class="formula-panel">
  <span class="formula-panel__label">Pendiente</span>
  <div class="formula-panel__formula">m = Δy / Δx</div>
</div>

Si tenemos dos puntos:

- (x<sub>1</sub>, y<sub>1</sub>);
- (x<sub>2</sub>, y<sub>2</sub>);

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Entre dos puntos</span>
  <div class="formula-panel__formula">m = (y<sub>2</sub> − y<sub>1</sub>)/(x<sub>2</sub> − x<sub>1</sub>)</div>
</div>

---

## 24. Las unidades de la pendiente importan

Si graficamos:

- posición en metros;
- tiempo en segundos;

la pendiente tiene unidades:

**m/s**

Eso sugiere una velocidad.

Si graficamos:

- velocidad en m/s;
- tiempo en s;

la pendiente tiene unidades:

**m/s²**

Eso sugiere una aceleración.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Una pendiente puede tener significado físico</strong>
  </div>
  <div class="lesson-callout__body">
    <p>No es solamente “qué tan inclinada está la línea”. Debemos leer qué magnitudes hay en cada eje y qué unidades resultan de dividir sus cambios.</p>
  </div>
</div>

---

## 25. Ejemplo de pendiente

Un móvil está en:

- `x = 2 m` cuando `t = 0 s`;
- `x = 14 m` cuando `t = 4 s`.

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Pendiente de x(t)</h3>
  <div class="worked-example-card__steps">
    <p>m = Δx/Δt</p>
    <p>m = (14 − 2) m / (4 − 0) s</p>
    <p>m = 12/4 m/s</p>
    <p><strong>m = 3 m/s</strong></p>
  </div>
</div>

En un movimiento rectilíneo uniforme, esa pendiente representa la velocidad.

---

## 26. Función cuadrática

Una función cuadrática tiene la forma general:

<div class="formula-panel">
  <span class="formula-panel__label">Función cuadrática</span>
  <div class="formula-panel__formula">y = ax² + bx + c</div>
</div>

Su gráfico es una parábola.

En Física aparecerá, por ejemplo, en movimientos con aceleración constante:

**x(t) = x<sub>0</sub> + v<sub>0</sub>t + ½at²**

La presencia de `t²` hace que la posición no cambie linealmente con el tiempo.

---

## 27. Leer un gráfico antes de calcular

Frente a un gráfico preguntamos:

1. ¿qué magnitud hay en el eje horizontal?
2. ¿qué magnitud hay en el eje vertical?
3. ¿qué unidades tienen?
4. ¿la variable aumenta o disminuye?
5. ¿la relación parece lineal?
6. ¿hay máximos, mínimos o cambios de pendiente?
7. ¿qué significa físicamente la pendiente?
8. ¿qué significa físicamente un área, si corresponde?

No todos los gráficos permiten interpretar pendiente o área de la misma manera.

---

## 28. El dibujo del gráfico no es la trayectoria

Un gráfico `x(t)` puede ser una línea inclinada.

Eso no significa que el objeto se mueva por una rampa.

El gráfico representa:

- posición en un eje;
- en función del tiempo.

Del mismo modo, una parábola en un gráfico no necesariamente representa una trayectoria parabólica espacial.

<div class="lesson-callout lesson-callout--error">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">!</span>
    <strong>Gráfico ≠ fotografía del movimiento</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Antes de interpretar la forma de una curva, leé siempre las variables y unidades de los ejes.</p>
  </div>
</div>

---

## 29. Teorema de Pitágoras

En un triángulo rectángulo:

<div class="formula-panel">
  <span class="formula-panel__label">Pitágoras</span>
  <div class="formula-panel__formula">c² = a² + b²</div>
  <p>c es la hipotenusa.</p>
</div>

Entonces:

**c = √(a² + b²)**

Esta relación será fundamental para:

- módulos de vectores;
- componentes;
- distancias en dos dimensiones.

---

## 30. Ejemplo de Pitágoras

Un desplazamiento tiene componentes:

- 3 m horizontal;
- 4 m vertical.

Módulo:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Módulo de un desplazamiento</h3>
  <div class="worked-example-card__steps">
    <p>r = √(3² + 4²)</p>
    <p>r = √(9 + 16)</p>
    <p>r = √25</p>
    <p><strong>r = 5 m</strong></p>
  </div>
</div>

---

## 31. Trigonometría básica

En un triángulo rectángulo y respecto de un ángulo θ:

<div class="formula-panel">
  <span class="formula-panel__label">Seno</span>
  <div class="formula-panel__formula">sen θ = cateto opuesto / hipotenusa</div>
</div>

<div class="formula-panel">
  <span class="formula-panel__label">Coseno</span>
  <div class="formula-panel__formula">cos θ = cateto adyacente / hipotenusa</div>
</div>

<div class="formula-panel">
  <span class="formula-panel__label">Tangente</span>
  <div class="formula-panel__formula">tan θ = cateto opuesto / cateto adyacente</div>
</div>

---

## 32. Elegir seno, coseno o tangente

No conviene memorizar “SOH-CAH-TOA” sin entender el dibujo.

Primero:

1. marcá el ángulo;
2. identificá la hipotenusa;
3. identificá cateto opuesto;
4. identificá cateto adyacente;
5. elegí la relación que contiene los datos disponibles.

La clasificación de opuesto y adyacente depende del ángulo elegido.

La hipotenusa no cambia.

---

## 33. Ejemplo trigonométrico

Un vector tiene módulo:

**10 N**

y forma:

**30°**

respecto del eje x positivo.

Componente horizontal:

**Fx = F cos θ**

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Componente horizontal</h3>
  <div class="worked-example-card__steps">
    <p>Fx = 10 N · cos 30°</p>
    <p>cos 30° ≈ 0,866</p>
    <p><strong>Fx ≈ 8,66 N</strong></p>
  </div>
</div>

---

## 34. Escalares y vectores

Una magnitud **escalar** queda descripta por:

- valor;
- unidad.

Ejemplos:

- masa;
- tiempo;
- temperatura;
- energía.

Una magnitud **vectorial** necesita además:

- dirección;
- sentido.

Ejemplos:

- desplazamiento;
- velocidad;
- aceleración;
- fuerza.

---

## 35. Representación de un vector

Un vector se representa con una flecha.

```text
        y
        ↑
        |
        |      ↗ A
        |    /
        |  /
────────┼────────→ x
```

La flecha comunica:

- módulo mediante su longitud a escala;
- dirección;
- sentido.

El punto de aplicación también puede ser importante para fuerzas.

---

## 36. Componentes cartesianas

Un vector en dos dimensiones puede descomponerse en:

- componente x;
- componente y.

Si A forma un ángulo θ desde el eje x positivo:

<div class="formula-panel">
  <span class="formula-panel__label">Componente x</span>
  <div class="formula-panel__formula">A<sub>x</sub> = A cos θ</div>
</div>

<div class="formula-panel">
  <span class="formula-panel__label">Componente y</span>
  <div class="formula-panel__formula">A<sub>y</sub> = A sen θ</div>
</div>

Los signos dependen del cuadrante y de la orientación elegida.

---

## 37. Reconstruir el módulo desde componentes

Si conocemos:

- A<sub>x</sub>;
- A<sub>y</sub>;

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Módulo</span>
  <div class="formula-panel__formula">A = √(A<sub>x</sub>² + A<sub>y</sub>²)</div>
</div>

Para el ángulo:

<div class="formula-panel">
  <span class="formula-panel__label">Dirección</span>
  <div class="formula-panel__formula">tan θ = A<sub>y</sub> / A<sub>x</sub></div>
</div>

Al usar la calculadora debemos revisar el cuadrante, porque la tangente sola puede ser ambigua.

---

## 38. Suma de vectores por componentes

Supongamos:

**A = (3, 2)**

**B = (4, −1)**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Suma</span>
  <div class="formula-panel__formula">A + B = (3 + 4, 2 − 1)</div>
</div>

Resultado:

**A + B = (7, 1)**

Sumamos componente con componente.

---

## 39. Resta de vectores

Restar B equivale a sumar su opuesto:

<div class="formula-panel">
  <span class="formula-panel__label">Resta vectorial</span>
  <div class="formula-panel__formula">A − B = A + (−B)</div>
</div>

Si:

**A = (3, 2)**

**B = (4, −1)**

entonces:

**A − B = (−1, 3)**

---

## 40. El módulo de una suma no es la suma de módulos

En general:

**|A + B| ≠ |A| + |B|**

salvo casos particulares, como vectores con misma dirección y mismo sentido.

La geometría importa.

Dos fuerzas de 10 N perpendiculares no producen una resultante de 20 N.

Producen:

**√(10² + 10²) ≈ 14,1 N**

---

## 41. Producto escalar

El **producto escalar** entre dos vectores produce un número.

Puede escribirse:

<div class="formula-panel">
  <span class="formula-panel__label">Producto escalar</span>
  <div class="formula-panel__formula">A · B = A B cos θ</div>
</div>

También, en componentes:

<div class="formula-panel">
  <span class="formula-panel__label">En dos dimensiones</span>
  <div class="formula-panel__formula">A · B = A<sub>x</sub>B<sub>x</sub> + A<sub>y</sub>B<sub>y</sub></div>
</div>

---

## 42. Interpretación geométrica del producto escalar

El factor:

**cos θ**

indica cuánto de un vector está alineado con el otro.

### Si θ = 0°

**cos 0° = 1**

producto máximo positivo.

### Si θ = 90°

**cos 90° = 0**

producto nulo.

### Si θ = 180°

**cos 180° = −1**

producto negativo.

Esta idea aparecerá en trabajo mecánico.

---

## 43. Producto escalar y trabajo

Más adelante estudiaremos:

<div class="formula-panel">
  <span class="formula-panel__label">Adelanto</span>
  <div class="formula-panel__formula">W = F · Δr = F Δr cos θ</div>
</div>

Esto expresa que solamente la componente de la fuerza alineada con el desplazamiento contribuye al trabajo en ese modelo.

No necesitamos desarrollar todavía toda la energía mecánica.

Lo importante es entender por qué el producto escalar es útil.

---

## 44. Signos y sistema de referencia

En Física elegimos convenciones.

Por ejemplo:

- derecha → positiva;
- izquierda → negativa.

Entonces una velocidad de:

**−5 m/s**

no significa “menos velocidad”.

Significa que apunta en el sentido negativo elegido.

Los signos forman parte del modelo.

---

## 45. Unidades como control algebraico

Las unidades ayudan a detectar errores.

Si queremos obtener una distancia:

**d = vt**

unidades:

**(m/s)(s) = m**

Correcto.

Si una cuenta para distancia termina en:

**m/s²**

algo está mal:

- ecuación;
- reemplazo;
- unidades;
- interpretación.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Las unidades también “hacen álgebra”</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Cancelar y combinar unidades es una de las herramientas más poderosas para revisar resultados físicos.</p>
  </div>
</div>

---

## 46. Estimación antes de usar la calculadora

Antes de presionar `=` conviene anticipar:

- signo esperado;
- orden de magnitud;
- unidad;
- si el resultado debería aumentar o disminuir.

Ejemplo:

**198 × 5,1**

sabemos que debería estar cerca de:

**200 × 5 = 1000**

Si la calculadora muestra:

**10,098**

probablemente ingresamos algo mal o interpretamos incorrectamente el separador decimal.

---

## 47. Uso responsable de calculadora

La calculadora ejecuta operaciones.

No decide:

- qué modelo usar;
- qué fórmula corresponde;
- qué unidades convertir;
- qué signo tiene sentido;
- si el resultado es físicamente razonable.

Una secuencia recomendable:

1. escribí la ecuación;
2. despejá simbólicamente;
3. convertí unidades;
4. reemplazá datos;
5. calculá;
6. escribí unidad;
7. interpretá;
8. revisá orden de magnitud.

---

## 48. Grados y modo de calculadora

En trigonometría escolar solemos utilizar ángulos en grados.

Si calculamos:

**cos 60°**

la calculadora debe estar en modo:

**DEG**

No en:

**RAD**

Más adelante estudiaremos el radián como unidad natural de ángulo en movimiento circular.

<div class="lesson-callout lesson-callout--error">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">!</span>
    <strong>Revisá DEG/RAD</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Muchos errores de trigonometría no provienen de la fórmula, sino de usar la calculadora en una unidad angular diferente de la del problema.</p>
  </div>
</div>

---

## 49. Cifras significativas y precisión

Una calculadora puede mostrar muchos dígitos.

Eso no significa que todos sean físicamente significativos.

Si medimos:

**L = 2,3 m**

no tiene sentido informar un resultado derivado como:

**7,364928154 m**

sin justificar esa precisión.

Las cifras significativas y la incertidumbre se profundizan en los apoyos de medición.

---

## 50. Estrategia general para problemas de Física

Una estrategia robusta es:

### 1. Fenómeno

¿Qué está ocurriendo?

### 2. Sistema

¿Qué cuerpo o sistema vamos a estudiar?

### 3. Datos

¿Qué conocemos? ¿Con qué unidades?

### 4. Incógnita

¿Qué queremos encontrar?

### 5. Modelo

¿Qué simplificaciones y relaciones físicas usamos?

### 6. Representación

¿Conviene un esquema, vector o gráfico?

### 7. Matemática

Despeje, cálculo, trigonometría.

### 8. Resultado

Número y unidad.

### 9. Interpretación

¿Tiene signo, tamaño y comportamiento razonables?

---

## 51. Ejemplo integrado

Una persona camina:

- 6,0 m hacia el este;
- luego 8,0 m hacia el norte.

### Componentes

Tomamos:

- este → +x;
- norte → +y.

Entonces:

**Δr = (6,0 m, 8,0 m)**

### Módulo

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>Desplazamiento resultante</h3>
  <div class="worked-example-card__steps">
    <p>|Δr| = √(6,0² + 8,0²)</p>
    <p>|Δr| = √(36 + 64)</p>
    <p>|Δr| = √100</p>
    <p><strong>|Δr| = 10,0 m</strong></p>
  </div>
</div>

### Dirección

**tan θ = 8/6**

**θ ≈ 53°**

Entonces el desplazamiento es aproximadamente:

**10,0 m a 53° al norte del este**

Este único problema combinó:

- sistema de ejes;
- vector;
- componentes;
- Pitágoras;
- trigonometría;
- interpretación física.

---

## 52. Errores frecuentes

### “Si dos variables aumentan juntas son directamente proporcionales”

No necesariamente. Debe mantenerse constante el cociente adecuado.

### “Para despejar, paso un término al otro lado y cambia mágicamente de signo”

Es mejor pensar qué operación realizamos en ambos lados.

### “La raíz de a² siempre es a”

Matemáticamente es `|a|`.

### “Una recta siempre representa proporcionalidad directa”

Sólo si pasa por el origen.

### “Pendiente es solamente inclinación visual”

También tiene valor, signo, unidades y significado físico.

### “El gráfico muestra la trayectoria del objeto”

No necesariamente.

### “Seno siempre va con y y coseno con x”

Solamente bajo una convención de ángulo específica. Hay que mirar el dibujo.

### “Los vectores se suman sumando módulos”

No en general.

### “La calculadora garantiza que la respuesta es correcta”

No. Sólo garantiza que ejecutó las operaciones ingresadas.

---

## 53. Problemas y ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Reconocimiento</strong>
  </div>
  <ol>
    <li>Indicá si `y = 4x` representa proporcionalidad directa.</li>
    <li>Indicá si `y = 4/x` representa proporcionalidad inversa.</li>
    <li>Escribí 0,00045 en notación científica.</li>
    <li>Clasificá como escalar o vectorial: masa, fuerza, tiempo, velocidad.</li>
    <li>¿Qué unidad tiene la pendiente de un gráfico posición-tiempo?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Aplicación directa</strong>
  </div>
  <ol>
    <li>Despejá t en `v = d/t`.</li>
    <li>Despejá m en `F = ma`.</li>
    <li>Calculá √(9² + 12²).</li>
    <li>Convertí `7,2 × 10⁵` a escritura decimal.</li>
    <li>Calculá el período correspondiente a `f = 20 Hz` usando `T = 1/f`.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Integración</strong>
  </div>
  <ol>
    <li>Una recta pasa por (2 s, 5 m) y (8 s, 23 m). Calculá su pendiente e interpretá las unidades.</li>
    <li>Un vector de 20 N forma 40° con +x. Calculá sus componentes.</li>
    <li>Sumá A = (4, 3) y B = (−2, 5). Calculá también el módulo del resultado.</li>
    <li>Una magnitud cumple `y = 12/x`. Compará y cuando x = 2 y cuando x = 6.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Problema complejo</strong>
  </div>
  <ol>
    <li>Construí una tabla y un gráfico para `x(t) = 3 + 2t` entre 0 y 5 s. Identificá pendiente e intercepto.</li>
    <li>Construí una tabla para `x(t) = 2t²` entre 0 y 4 s y explicá por qué no es una relación lineal.</li>
    <li>Una fuerza F = (12, 5) N produce un desplazamiento Δr = (3, −2) m. Calculá `F · Δr`.</li>
    <li>Diseñá una comprobación dimensional para decidir si `v = at²` podría representar correctamente una velocidad.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Explicá por qué dos vectores no nulos perpendiculares tienen producto escalar cero.</li>
    <li>Demostrá que si `y = kx`, la pendiente del gráfico y-x es k.</li>
    <li>Analizá por qué una ecuación puede ser algebraicamente correcta pero físicamente inválida por sus unidades.</li>
    <li>Explicá por qué una función cuadrática puede tener pendiente diferente en distintos puntos, mientras una función lineal tiene pendiente constante.</li>
  </ol>
</div>

---

## 54. Autoevaluación

<details class="lesson-quiz">
  <summary>1. Si y es directamente proporcional a x y x se triplica, ¿qué ocurre con y?</summary>
  <div class="lesson-quiz__answer">
    También se triplica, mientras la constante de proporcionalidad y las condiciones del modelo permanezcan iguales.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Qué representa la pendiente de un gráfico?</summary>
  <div class="lesson-quiz__answer">
    El cambio de la variable vertical dividido por el cambio de la horizontal. Su significado físico depende de qué magnitudes y unidades haya en los ejes.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Cómo obtenemos el módulo de un vector con componentes Ax y Ay?</summary>
  <div class="lesson-quiz__answer">
    Mediante Pitágoras: A = √(Ax² + Ay²).
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Cuándo el producto escalar de dos vectores es cero?</summary>
  <div class="lesson-quiz__answer">
    Entre otros casos, cuando son perpendiculares, porque cos 90° = 0.
  </div>
</details>

<details class="lesson-quiz">
  <summary>5. ¿Por qué hay que mirar las unidades antes de aceptar un resultado?</summary>
  <div class="lesson-quiz__answer">
    Porque las dimensiones y unidades deben ser compatibles con la magnitud buscada; una unidad incorrecta revela un problema en el modelo o el cálculo.
  </div>
</details>

<details class="lesson-quiz">
  <summary>6. ¿La calculadora puede decidir qué fórmula física corresponde?</summary>
  <div class="lesson-quiz__answer">
    No. El modelo, la ecuación, las unidades y la interpretación son parte del razonamiento físico.
  </div>
</details>

---

## 55. Resumen

- La matemática es una herramienta para expresar relaciones físicas.
- En proporcionalidad directa, `y/x` permanece constante.
- En proporcionalidad inversa, `xy` permanece constante.
- Despejar consiste en aplicar operaciones equivalentes a ambos lados de una ecuación.
- Potencias y raíces aparecen en numerosos modelos físicos.
- La notación científica permite manejar escalas muy grandes y muy pequeñas.
- Una función relaciona variables.
- Una recta `y = mx + b` tiene pendiente m e intercepto b.
- La pendiente posee unidades y puede tener significado físico.
- Una función cuadrática produce una parábola y tendrá importancia en movimientos acelerados.
- Pitágoras permite obtener módulos a partir de componentes perpendiculares.
- Seno, coseno y tangente relacionan lados y ángulos.
- Los vectores poseen módulo, dirección y sentido.
- Los vectores pueden descomponerse en componentes cartesianas.
- La suma y resta vectorial se realizan componente a componente.
- El producto escalar mide, entre otras interpretaciones, cuánto se alinean dos vectores.
- Las unidades, estimaciones y órdenes de magnitud permiten controlar resultados.
- La calculadora es una herramienta de ejecución, no un sustituto del razonamiento.

---

## 56. Siguiente tema recomendado

**F-02 — Cinemática: descripción del movimiento**

Ahora vamos a usar estas herramientas para construir una descripción mucho más precisa del movimiento.

Trabajaremos con:

- sistema de referencia;
- posición y vector posición;
- trayectoria;
- distancia;
- desplazamiento;
- instante e intervalo de tiempo;
- rapidez media;
- velocidad media e instantánea;
- aceleración media e instantánea;
- interpretación de `x(t)`, `v(t)` y `a(t)`.
