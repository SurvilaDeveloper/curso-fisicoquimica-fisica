---
title: "Gases y termodinámica"
description: "Cómo describir estados y procesos termodinámicos mediante gases ideales, diagramas P-V, trabajo, energía interna, primera y segunda ley, entropía y máquinas térmicas."
slug: "gases-y-termodinamica"

course: "fisica"
module: "termica"
order: 16

level: "intermedio"
cycle: "ambos"

yearsApprox: [4, 5, 6]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - temperatura-dilatacion-y-calorimetria

skills:
  - variables-termodinamicas
  - sistema-termodinamico
  - estado-y-equilibrio
  - gas-ideal
  - modelo-cinetico
  - ecuacion-de-estado
  - proceso-isotermico
  - proceso-isobarico
  - proceso-isocorico
  - proceso-adiabatico
  - diagramas-pv
  - trabajo-termodinamico
  - energia-interna
  - primera-ley
  - segunda-ley
  - irreversibilidad
  - entropia
  - maquinas-termicas
  - refrigeradores
  - rendimiento
  - ciclo-de-carnot

hasExercises: true
hasQuiz: true
hasExperiment: true

deepening: true
status: "complete"
---

## Un gas puede expandirse, enfriarse y realizar trabajo

Imaginemos un gas encerrado en un cilindro con un pistón móvil.

Podemos:

- calentarlo;
- comprimirlo;
- dejarlo expandirse;
- cambiar su presión;
- cambiar su volumen.

Durante esos procesos pueden intercambiarse energías de distintas maneras.

La termodinámica organiza estas situaciones mediante unas pocas ideas centrales:

- sistema;
- estado;
- energía interna;
- calor;
- trabajo;
- leyes de conservación;
- dirección de los procesos espontáneos.

> **La termodinámica no sigue necesariamente el movimiento de cada molécula. Describe el sistema mediante variables macroscópicas y relaciones entre estados.**

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Un sistema posee energía interna, pero no “contiene calor” ni “contiene trabajo”. Calor y trabajo son dos mecanismos diferentes mediante los cuales la energía puede atravesar la frontera del sistema.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta lección deberías poder:

- identificar un sistema termodinámico y su entorno;
- distinguir estado, proceso y equilibrio;
- trabajar con presión, volumen, temperatura y cantidad de sustancia;
- comprender el modelo de gas ideal;
- interpretar microscópicamente presión y temperatura;
- usar la ecuación `PV = nRT`;
- analizar procesos isotérmicos, isobáricos e isocóricos;
- comprender el proceso adiabático como profundización;
- leer diagramas P-V;
- interpretar el trabajo termodinámico;
- comprender la energía interna;
- aplicar la primera ley de la termodinámica;
- distinguir calor y trabajo como transferencias;
- comprender conceptualmente la segunda ley;
- reconocer procesos irreversibles;
- introducir la entropía sin reducirla a una definición simplista;
- analizar máquinas térmicas y refrigeradores;
- calcular rendimientos;
- comprender el límite ideal de Carnot.

---

## 1. Sistema y entorno

En termodinámica comenzamos eligiendo un **sistema**.

El sistema es la parte del universo que decidimos estudiar.

Todo lo demás constituye el:

**entorno**

o alrededores.

Ejemplos de sistema:

- gas dentro de un cilindro;
- agua dentro de un recipiente;
- motor térmico;
- heladera;
- mezcla de sustancias.

La elección del sistema determina qué transferencias consideramos:

- internas;
- externas.

---

## 2. Frontera del sistema

El sistema está separado del entorno por una frontera.

La frontera puede ser:

- real;
- imaginaria;
- fija;
- móvil.

Por ejemplo, en un cilindro con pistón:

- las paredes forman parte de la frontera;
- el pistón puede moverse.

A través de la frontera pueden cruzar:

- energía;
- materia;

según el tipo de sistema.

---

## 3. Sistemas abiertos, cerrados y aislados

### Sistema abierto

Puede intercambiar:

- energía;
- materia.

### Sistema cerrado

Puede intercambiar energía, pero no materia.

### Sistema aislado ideal

No intercambia:

- materia;
- energía;

con el entorno.

Son modelos.

Un aislamiento perfecto es una idealización.

---

## 4. Variables termodinámicas

Un estado macroscópico puede caracterizarse mediante variables como:

- presión `P`;
- volumen `V`;
- temperatura `T`;
- cantidad de sustancia `n`;
- energía interna `U`.

También pueden ser importantes:

- masa;
- densidad;
- composición.

No todas son independientes.

---

## 5. Estado termodinámico

El **estado** de un sistema queda especificado cuando conocemos un conjunto suficiente de variables macroscópicas.

Por ejemplo, para cierta cantidad de gas ideal:

- P;
- V;
- T;

están relacionadas.

No podemos elegir arbitrariamente las tres sin respetar la ecuación de estado.

---

## 6. Equilibrio termodinámico

Un sistema está en equilibrio termodinámico cuando sus variables macroscópicas permanecen estables y no existen tendencias internas netas que produzcan cambios macroscópicos espontáneos.

Incluye, según el problema:

- equilibrio térmico;
- equilibrio mecánico;
- equilibrio químico.

En un estado de equilibrio:

- la presión y temperatura pueden describirse macroscópicamente de manera bien definida.

---

## 7. Estado no es proceso

Un **estado** describe una condición del sistema.

Un **proceso** describe una transformación entre estados.

Podemos tener:

- mismo estado inicial;
- mismo estado final;

pero recorrer caminos termodinámicos diferentes.

Eso será importante porque:

> **el trabajo y el calor pueden depender del camino.**

---

## 8. Gas ideal

Un **gas ideal** es un modelo simplificado.

Supone, entre otras ideas:

- partículas de tamaño despreciable respecto del volumen disponible;
- interacciones intermoleculares despreciables salvo durante choques;
- choques elásticos;
- gran cantidad de partículas en movimiento aleatorio.

Ningún gas real es perfectamente ideal.

Pero muchos gases se aproximan bien al modelo en ciertos regímenes.

---

## 9. Cuándo un gas real se aproxima al ideal

En general, muchos gases se comportan más idealmente cuando:

- la densidad es baja;
- la presión no es demasiado alta;
- la temperatura no está cerca de una condensación.

Cuando las partículas están muy próximas:

- su volumen propio;
- sus interacciones;

pueden dejar de ser despreciables.

---

## 10. Modelo cinético

El modelo cinético conecta las variables macroscópicas con el movimiento microscópico de las partículas.

En un gas ideal:

- las partículas se mueven constantemente;
- chocan con las paredes;
- esos choques producen la presión macroscópica.

La presión no aparece porque las partículas estén “quietas empujando”.

Surge del intercambio de momento en los choques.

---

## 11. Temperatura y movimiento molecular

En un gas ideal monoatómico:

> la temperatura absoluta está relacionada con la energía cinética traslacional media de las partículas.

Como profundización:

<div class="formula-panel">
  <span class="formula-panel__label">Gas ideal monoatómico</span>
  <div class="formula-panel__formula">⟨K<sub>trans</sub>⟩ = (3/2)k<sub>B</sub>T</div>
</div>

donde:

- k<sub>B</sub> es la constante de Boltzmann;
- T debe expresarse en kelvin.

---

## 12. No confundir temperatura con velocidad molecular

Las moléculas de un gas no tienen todas:

- la misma velocidad.

Existe una distribución de velocidades.

Además, partículas de distinta masa pueden tener:

- velocidades medias diferentes;

a la misma temperatura.

Por eso es mejor hablar de:

- distribución;
- energía cinética media;

y no simplemente “temperatura = velocidad”.

---

## 13. Cantidad de sustancia

La cantidad de sustancia se mide en:

**mol**

Un mol contiene un número enorme de entidades elementales.

La constante de Avogadro es aproximadamente:

<div class="formula-panel">
  <span class="formula-panel__label">Constante de Avogadro</span>
  <div class="formula-panel__formula">N<sub>A</sub> ≈ 6,022 × 10<sup>23</sup> mol<sup>−1</sup></div>
</div>

Si hay n moles:

<div class="formula-panel">
  <span class="formula-panel__label">Número de partículas</span>
  <div class="formula-panel__formula">N = nN<sub>A</sub></div>
</div>

---

## 14. Ecuación de estado del gas ideal

Para un gas ideal:

<div class="formula-panel">
  <span class="formula-panel__label">Gas ideal</span>
  <div class="formula-panel__formula">PV = nRT</div>
</div>

donde:

- P es presión;
- V es volumen;
- n es cantidad de sustancia;
- T es temperatura absoluta;
- R es la constante universal de los gases.

---

## 15. Constante R

En unidades SI:

<div class="formula-panel">
  <span class="formula-panel__label">Constante universal</span>
  <div class="formula-panel__formula">R ≈ 8,314 J/(mol·K)</div>
</div>

Como:

**1 J = 1 Pa·m³**

también es compatible con:

- P en Pa;
- V en m³;
- T en K.

---

## 16. La temperatura en PV = nRT debe ser absoluta

No debemos sustituir directamente:

**20 °C**

en la ecuación de gas ideal.

Primero:

**T = 293,15 K**

La escala Kelvin es necesaria porque la ecuación relaciona proporcionalidades con la temperatura absoluta.

---

## 17. Ejemplo de gas ideal

Tenemos:

- `n = 1,0 mol`;
- `T = 300 K`;
- `V = 0,025 m³`.

Entonces:

**P = nRT/V**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Presión de un gas ideal</h3>
  <div class="worked-example-card__steps">
    <p>P = (1,0 × 8,314 × 300)/0,025</p>
    <p><strong>P ≈ 9,98 × 10<sup>4</sup> Pa</strong></p>
    <p>Es aproximadamente 100 kPa.</p>
  </div>
</div>

---

## 18. Estados 1 y 2 del mismo gas

Si n permanece constante:

<div class="formula-panel">
  <span class="formula-panel__label">Estado 1</span>
  <div class="formula-panel__formula">P<sub>1</sub>V<sub>1</sub> = nRT<sub>1</sub></div>
</div>

<div class="formula-panel">
  <span class="formula-panel__label">Estado 2</span>
  <div class="formula-panel__formula">P<sub>2</sub>V<sub>2</sub> = nRT<sub>2</sub></div>
</div>

Dividiendo:

<div class="formula-panel">
  <span class="formula-panel__label">Ley combinada para n constante</span>
  <div class="formula-panel__formula">P<sub>1</sub>V<sub>1</sub>/T<sub>1</sub> = P<sub>2</sub>V<sub>2</sub>/T<sub>2</sub></div>
</div>

---

## 19. Proceso isotérmico

Un proceso **isotérmico** mantiene:

<div class="formula-panel">
  <span class="formula-panel__label">Isotérmico</span>
  <div class="formula-panel__formula">T = constante</div>
</div>

Para un gas ideal con n constante:

<div class="formula-panel">
  <span class="formula-panel__label">Relación</span>
  <div class="formula-panel__formula">PV = constante</div>
</div>

Por lo tanto:

**P ∝ 1/V**

---

## 20. Interpretación del isotérmico

Si un gas ideal se expande isotérmicamente:

- V aumenta;
- P disminuye.

Para mantener T constante mientras el gas realiza trabajo:

- generalmente debe recibir energía térmica del entorno.

Ésta es una idea termodinámica más rica que la simple relación algebraica `PV = constante`.

---

## 21. Ejemplo isotérmico

Un gas ideal ocupa:

- V<sub>1</sub> = 2,0 L;
- P<sub>1</sub> = 300 kPa.

Se expande isotérmicamente hasta:

- V<sub>2</sub> = 6,0 L.

Entonces:

**P<sub>1</sub>V<sub>1</sub> = P<sub>2</sub>V<sub>2</sub>**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Expansión isotérmica</h3>
  <div class="worked-example-card__steps">
    <p>P<sub>2</sub> = 300 × 2/6</p>
    <p><strong>P<sub>2</sub> = 100 kPa</strong></p>
  </div>
</div>

---

## 22. Proceso isobárico

Un proceso **isobárico** mantiene:

<div class="formula-panel">
  <span class="formula-panel__label">Isobárico</span>
  <div class="formula-panel__formula">P = constante</div>
</div>

Para n constante:

**V/T = constante**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Relación</span>
  <div class="formula-panel__formula">V<sub>1</sub>/T<sub>1</sub> = V<sub>2</sub>/T<sub>2</sub></div>
</div>

---

## 23. Ejemplo isobárico

Un gas ideal a presión constante tiene:

- V<sub>1</sub> = 3,0 L;
- T<sub>1</sub> = 300 K.

Se calienta hasta:

- T<sub>2</sub> = 400 K.

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Calentamiento isobárico</h3>
  <div class="worked-example-card__steps">
    <p>V<sub>2</sub> = V<sub>1</sub>T<sub>2</sub>/T<sub>1</sub></p>
    <p>V<sub>2</sub> = 3,0 × 400/300</p>
    <p><strong>V<sub>2</sub> = 4,0 L</strong></p>
  </div>
</div>

---

## 24. Proceso isocórico o isovolumétrico

Un proceso **isocórico** mantiene:

<div class="formula-panel">
  <span class="formula-panel__label">Isocórico</span>
  <div class="formula-panel__formula">V = constante</div>
</div>

Para n constante:

**P/T = constante**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Relación</span>
  <div class="formula-panel__formula">P<sub>1</sub>/T<sub>1</sub> = P<sub>2</sub>/T<sub>2</sub></div>
</div>

---

## 25. Ejemplo isocórico

Un gas rígidamente encerrado tiene:

- P<sub>1</sub> = 100 kPa;
- T<sub>1</sub> = 300 K.

Se calienta hasta:

- T<sub>2</sub> = 450 K.

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Calentamiento a volumen constante</h3>
  <div class="worked-example-card__steps">
    <p>P<sub>2</sub> = 100 × 450/300</p>
    <p><strong>P<sub>2</sub> = 150 kPa</strong></p>
  </div>
</div>

---

## 26. Proceso adiabático — profundización

Un proceso **adiabático** ideal es aquel en el que:

<div class="formula-panel">
  <span class="formula-panel__label">Adiabático</span>
  <div class="formula-panel__formula">Q = 0</div>
</div>

No significa:

- temperatura constante.

Un gas puede cambiar de temperatura durante una expansión o compresión adiabática.

---

## 27. Expansión adiabática

Si un gas:

- se expande;
- realiza trabajo;
- no recibe energía térmica;

su energía interna puede disminuir.

Para un gas ideal:

- eso suele implicar disminución de temperatura.

Por eso:

> **adiabático e isotérmico son procesos diferentes.**

---

## 28. Compresión adiabática

Si comprimimos rápidamente un gas de modo que el intercambio térmico durante el proceso sea pequeño:

- el entorno realiza trabajo sobre el gas;
- su energía interna puede aumentar;
- la temperatura puede subir.

Esto puede sentirse al comprimir aire con una bomba.

---

## 29. Relación adiabática — profundización

Para un gas ideal bajo un proceso adiabático reversible:

<div class="formula-panel">
  <span class="formula-panel__label">Relación adiabática</span>
  <div class="formula-panel__formula">PV<sup>γ</sup> = constante</div>
</div>

donde:

- γ = C<sub>P</sub>/C<sub>V</sub>.

Esta relación es una profundización.

No vale para cualquier proceso adiabático real.

---

## 30. Diagramas P-V

Un diagrama presión-volumen representa:

- P en el eje vertical;
- V en el eje horizontal.

Cada punto representa:

- un estado de equilibrio.

Una curva representa:

- una secuencia idealizada de estados durante un proceso.

---

## 31. Proceso isobárico en P-V

Si P es constante:

- la curva es horizontal.

```text
P
│     ───────────
│
└──────────────── V
```

Un desplazamiento hacia la derecha representa:

- expansión.

Hacia la izquierda:

- compresión.

---

## 32. Proceso isocórico en P-V

Si V es constante:

- la curva es vertical.

```text
P
│       │
│       │
│       │
└───────┼──────── V
```

No hay cambio de volumen.

---

## 33. Proceso isotérmico en P-V

Para un gas ideal:

**PV = constante**

La curva es una hipérbola:

```text
P
│  ╲
│    ╲__
│        ╲___
└────────────── V
```

A mayor V:

- menor P.

---

## 34. Trabajo termodinámico

Cuando un gas empuja un pistón y cambia su volumen:

- puede realizar trabajo mecánico sobre el entorno.

Para un proceso cuasiestático sencillo:

<div class="formula-panel">
  <span class="formula-panel__label">Trabajo realizado por el gas</span>
  <div class="formula-panel__formula">W<sub>por</sub> = ∫P dV</div>
</div>

En un diagrama P-V:

> **el trabajo realizado por el gas es el área bajo la curva del proceso.**

---

## 35. Convención de signos que usaremos

En esta lección elegimos:

### Q > 0

El sistema recibe energía térmica.

### W<sub>por</sub> > 0

El sistema realiza trabajo sobre el entorno.

### W<sub>por</sub> < 0

El entorno realiza trabajo neto sobre el sistema.

Con esta convención:

<div class="formula-panel">
  <span class="formula-panel__label">Primera ley</span>
  <div class="formula-panel__formula">ΔU = Q − W<sub>por</sub></div>
</div>

---

## 36. Otra convención posible

Algunos libros definen:

**W<sub>sobre</sub>**

como el trabajo realizado **sobre** el sistema.

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Convención alternativa</span>
  <div class="formula-panel__formula">ΔU = Q + W<sub>sobre</sub></div>
</div>

Ambas formas son equivalentes porque:

**W<sub>sobre</sub> = −W<sub>por</sub>**

Lo importante es:

> **no mezclar convenciones dentro del mismo problema.**

---

## 37. Trabajo isobárico

Si P es constante:

<div class="formula-panel">
  <span class="formula-panel__label">Proceso isobárico</span>
  <div class="formula-panel__formula">W<sub>por</sub> = P(V<sub>f</sub> − V<sub>i</sub>)</div>
</div>

### Expansión

V<sub>f</sub> > V<sub>i</sub>

Entonces:

**W<sub>por</sub> > 0**

### Compresión

V<sub>f</sub> < V<sub>i</sub>

Entonces:

**W<sub>por</sub> < 0**

---

## 38. Ejemplo de trabajo isobárico

Un gas se expande a:

**P = 200 kPa**

desde:

**2,0 L**

hasta:

**5,0 L**

Cambio de volumen:

**ΔV = 3,0 L = 0,0030 m³**

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Trabajo de expansión</h3>
  <div class="worked-example-card__steps">
    <p>W<sub>por</sub> = PΔV</p>
    <p>W<sub>por</sub> = 200 000 × 0,0030</p>
    <p><strong>W<sub>por</sub> = 600 J</strong></p>
  </div>
</div>

---

## 39. Trabajo en un proceso isocórico

Si:

**ΔV = 0**

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Volumen constante</span>
  <div class="formula-panel__formula">W<sub>por</sub> = 0</div>
</div>

Aunque:

- la presión cambie;
- la temperatura cambie;
- exista transferencia térmica.

No hay trabajo P-V de expansión porque la frontera no cambia de volumen.

---

## 40. El trabajo depende del camino

Consideremos dos procesos entre los mismos estados inicial y final.

En un diagrama P-V pueden tener:

- curvas diferentes;
- áreas diferentes.

Entonces:

**W<sub>por</sub>**

puede ser distinto.

Por eso el trabajo:

> **no es una función de estado.**

Depende del proceso seguido.

---

## 41. Energía interna

La **energía interna**, U, representa la energía microscópica asociada al estado interno del sistema.

Puede incluir contribuciones relacionadas con:

- movimiento microscópico;
- rotación molecular;
- vibraciones;
- interacciones entre partículas;
- estructura interna.

No incluye, según la definición habitual del sistema:

- la energía cinética macroscópica del sistema como un todo;
- ni necesariamente su energía potencial externa.

---

## 42. U sí es una función de estado

A diferencia de Q y W:

> **la energía interna depende del estado del sistema, no del camino seguido para llegar a él.**

Por eso:

<div class="formula-panel">
  <span class="formula-panel__label">Cambio de energía interna</span>
  <div class="formula-panel__formula">ΔU = U<sub>f</sub> − U<sub>i</sub></div>
</div>

Si el sistema vuelve al mismo estado:

**ΔU = 0**

---

## 43. Energía interna de un gas ideal

En el modelo de gas ideal:

> **la energía interna depende solamente de la temperatura.**

Para un gas ideal monoatómico:

<div class="formula-panel">
  <span class="formula-panel__label">Profundización</span>
  <div class="formula-panel__formula">U = (3/2)nRT</div>
</div>

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Cambio</span>
  <div class="formula-panel__formula">ΔU = (3/2)nRΔT</div>
</div>

para ese modelo particular.

---

## 44. Gas ideal isotérmico y energía interna

Si el proceso es isotérmico:

**ΔT = 0**

Para un gas ideal:

<div class="formula-panel">
  <span class="formula-panel__label">Isotérmico ideal</span>
  <div class="formula-panel__formula">ΔU = 0</div>
</div>

Pero eso no significa:

- `Q = 0`;
- `W = 0`.

La primera ley determina cómo se compensan.

---

## 45. Primera ley de la termodinámica

La primera ley expresa conservación de energía para procesos termodinámicos.

Con nuestra convención:

<div class="formula-panel">
  <span class="formula-panel__label">Primera ley</span>
  <div class="formula-panel__formula">ΔU = Q − W<sub>por</sub></div>
</div>

La energía interna puede cambiar porque:

- entra o sale energía térmica;
- el sistema realiza o recibe trabajo.

---

## 46. Leer los signos de la primera ley

### Q > 0

Entra energía por transferencia térmica.

### Q < 0

Sale energía por transferencia térmica.

### W<sub>por</sub> > 0

El sistema entrega energía mediante trabajo.

### W<sub>por</sub> < 0

El entorno entrega energía al sistema mediante trabajo.

---

## 47. Ejemplo de primera ley

Un gas recibe:

**Q = +1000 J**

y realiza:

**W<sub>por</sub> = +600 J**

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Balance de energía</h3>
  <div class="worked-example-card__steps">
    <p>ΔU = Q − W<sub>por</sub></p>
    <p>ΔU = 1000 − 600</p>
    <p><strong>ΔU = +400 J</strong></p>
  </div>
</div>

La energía interna aumenta 400 J.

---

## 48. Primera ley en proceso isocórico

Si:

**W<sub>por</sub> = 0**

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Isocórico</span>
  <div class="formula-panel__formula">ΔU = Q</div>
</div>

Toda la transferencia térmica neta modifica la energía interna en ese modelo.

---

## 49. Primera ley en isotérmico ideal

Para un gas ideal isotérmico:

**ΔU = 0**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Isotérmico</span>
  <div class="formula-panel__formula">Q = W<sub>por</sub></div>
</div>

Durante una expansión isotérmica ideal:

- el gas realiza trabajo;
- debe recibir la misma energía térmica.

---

## 50. Primera ley en adiabático

En un proceso adiabático:

**Q = 0**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Adiabático</span>
  <div class="formula-panel__formula">ΔU = −W<sub>por</sub></div>
</div>

### Expansión adiabática

W<sub>por</sub> > 0

Entonces:

**ΔU < 0**

### Compresión adiabática

W<sub>por</sub> < 0

Entonces:

**ΔU > 0**

---

## 51. Calor y trabajo no son funciones de estado

No tiene sentido termodinámico decir:

- “el sistema contiene 500 J de calor”;
- “el sistema contiene 300 J de trabajo”.

Sí podemos decir:

- “se transfirieron 500 J como calor”;
- “el sistema realizó 300 J de trabajo”.

Una vez transferida la energía:

- pasa a formar parte de las energías del sistema o del entorno.

---

## 52. Un mismo ΔU con distintos procesos

Supongamos que queremos pasar entre dos estados con:

**ΔU = +500 J**

Podría ocurrir:

### Proceso A

`Q = +500 J`

W<sub>por</sub> = 0

### Proceso B

`Q = +800 J`

W<sub>por</sub> = +300 J

En ambos:

**ΔU = +500 J**

Pero:

- Q;
- W;

son distintos.

---

## 53. Ciclos termodinámicos

En un ciclo:

- el sistema vuelve al estado inicial.

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Ciclo completo</span>
  <div class="formula-panel__formula">ΔU<sub>ciclo</sub> = 0</div>
</div>

Por la primera ley:

<div class="formula-panel">
  <span class="formula-panel__label">Balance del ciclo</span>
  <div class="formula-panel__formula">Q<sub>neto</sub> = W<sub>neto,por</sub></div>
</div>

---

## 54. Área encerrada en un ciclo P-V

En un diagrama P-V, el trabajo neto de un ciclo es:

- el área algebraica encerrada por la trayectoria.

En una orientación típica horaria:

- el gas realiza trabajo neto positivo.

En orientación antihoraria:

- el trabajo neto realizado por el gas es negativo.

---

## 55. La primera ley no indica la dirección espontánea

La primera ley nos dice:

> la energía se conserva.

Pero no nos dice:

- qué procesos ocurren espontáneamente;
- cuáles son irreversibles;
- qué límites existen para convertir calor en trabajo.

Para eso necesitamos la:

**segunda ley de la termodinámica.**

---

## 56. Segunda ley: dirección de los procesos

Observamos espontáneamente que:

- un objeto caliente enfría una habitación fría;
- no vemos que, sin intervención externa, el objeto frío se enfríe aún más mientras el caliente se calienta.

La segunda ley introduce una:

> **dirección preferente para los procesos macroscópicos espontáneos.**

---

## 57. Transferencia térmica espontánea

Si dos cuerpos a distintas temperaturas se ponen en contacto:

- la energía térmica neta fluye espontáneamente del más caliente al más frío.

El proceso continúa hasta acercarse al:

- equilibrio térmico.

El proceso inverso no ocurre espontáneamente sin otros cambios.

---

## 58. Segunda ley y máquinas térmicas

Otra formulación conceptual:

> **ninguna máquina que opere cíclicamente puede convertir en trabajo toda la energía recibida como calor de una única fuente térmica.**

Parte de la energía debe transferirse a una región más fría.

Por eso un motor térmico real o ideal tiene:

**η < 100%**

si trabaja entre fuentes a temperaturas finitas.

---

## 59. Irreversibilidad

Un proceso es **irreversible** cuando no puede invertirse dejando simultáneamente:

- al sistema;
- y al entorno;

exactamente como estaban originalmente, sin otros efectos.

Ejemplos aproximados:

- difusión espontánea;
- rozamiento;
- expansión libre;
- transferencia térmica con diferencia finita de temperatura.

---

## 60. Reversibilidad ideal

Un proceso reversible es una idealización límite.

Debe avanzar mediante estados extremadamente próximos al equilibrio y sin disipaciones apreciables.

Los procesos reales:

- ocurren en tiempo finito;
- tienen rozamiento;
- gradientes;
- pérdidas;

por lo que presentan irreversibilidad.

---

## 61. Entropía — introducción

La **entropía**, S, es una función de estado que permite formular cuantitativamente la segunda ley.

No conviene definirla simplemente como:

> “desorden”.

Esa palabra puede ser una analogía limitada y generar errores.

La entropía tiene una definición termodinámica precisa.

---

## 62. Cambio de entropía reversible — profundización

Para una transferencia térmica reversible:

<div class="formula-panel">
  <span class="formula-panel__label">Definición termodinámica</span>
  <div class="formula-panel__formula">dS = δQ<sub>rev</sub>/T</div>
</div>

Para un proceso reversible isotérmico sencillo:

<div class="formula-panel">
  <span class="formula-panel__label">A temperatura constante</span>
  <div class="formula-panel__formula">ΔS = Q<sub>rev</sub>/T</div>
</div>

T debe expresarse en kelvin.

Unidad:

**J/K**

---

## 63. Entropía y sistema aislado

Una forma de expresar la segunda ley es:

<div class="formula-panel">
  <span class="formula-panel__label">Sistema aislado</span>
  <div class="formula-panel__formula">ΔS<sub>total</sub> ≥ 0</div>
</div>

### Proceso reversible ideal

**ΔS<sub>total</sub> = 0**

### Proceso irreversible

**ΔS<sub>total</sub> > 0**

---

## 64. Entropía no significa que todo se vuelva “más desordenado” visualmente

Un sistema puede formar:

- estructuras;
- cristales;
- organismos;

mientras la entropía total del sistema más entorno cumple la segunda ley.

Por eso una descripción seria debe considerar:

- el sistema;
- el entorno;
- las transferencias de energía.

---

## 65. Máquina térmica

Una **máquina térmica** opera cíclicamente y:

1. recibe energía térmica Q<sub>caliente</sub> de una fuente caliente;
2. transforma una parte en trabajo;
3. entrega Q<sub>fría</sub> a una fuente más fría.

En un ciclo:

<div class="formula-panel">
  <span class="formula-panel__label">Balance energético</span>
  <div class="formula-panel__formula">W<sub>salida</sub> = Q<sub>caliente</sub> − Q<sub>fría</sub></div>
</div>

usando módulos positivos para estas cantidades transferidas.

---

## 66. Rendimiento de una máquina térmica

Definimos:

<div class="formula-panel">
  <span class="formula-panel__label">Rendimiento térmico</span>
  <div class="formula-panel__formula">η = W<sub>salida</sub>/Q<sub>caliente</sub></div>
</div>

También:

<div class="formula-panel">
  <span class="formula-panel__label">Forma equivalente</span>
  <div class="formula-panel__formula">η = 1 − Q<sub>fría</sub>/Q<sub>caliente</sub></div>
</div>

Para una máquina térmica ordinaria:

**0 < η < 1**

---

## 67. Ejemplo de máquina térmica

Una máquina recibe:

**Q<sub>caliente</sub> = 2000 J**

y entrega:

**Q<sub>fría</sub> = 1200 J**

Entonces:

**W = 800 J**

y:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Rendimiento térmico</h3>
  <div class="worked-example-card__steps">
    <p>η = 800/2000</p>
    <p>η = 0,40</p>
    <p><strong>η = 40%</strong></p>
  </div>
</div>

---

## 68. Una máquina térmica no “pierde” necesariamente la energía restante

Los:

**1200 J**

del ejemplo no desaparecieron.

Fueron transferidos:

- a la fuente fría.

La segunda ley impide que toda la energía térmica tomada de una única fuente se transforme cíclicamente en trabajo.

---

## 69. Refrigerador

Un refrigerador realiza el proceso deseado en sentido opuesto al flujo térmico espontáneo.

Su objetivo es:

- extraer energía térmica de una región fría;
- entregarla a una región más caliente.

Para lograrlo necesita:

- trabajo externo.

---

## 70. Balance de un refrigerador

Usando módulos positivos:

<div class="formula-panel">
  <span class="formula-panel__label">Refrigerador</span>
  <div class="formula-panel__formula">Q<sub>caliente</sub> = Q<sub>fría</sub> + W<sub>entrada</sub></div>
</div>

El motor del refrigerador aporta:

**W<sub>entrada</sub>**

---

## 71. Coeficiente de desempeño — profundización

Para un refrigerador:

<div class="formula-panel">
  <span class="formula-panel__label">COP de refrigeración</span>
  <div class="formula-panel__formula">COP = Q<sub>fría</sub>/W<sub>entrada</sub></div>
</div>

El COP puede ser:

- mayor que 1.

Eso no significa violación de conservación de energía.

No es un rendimiento definido como fracción de energía convertida.

---

## 72. Aire acondicionado y bomba de calor

Un aire acondicionado:

- extrae energía del interior;
- la entrega al exterior;
- consume trabajo eléctrico.

Una bomba de calor usa el mismo principio pero considera útil:

- la energía entregada a la región caliente.

El dispositivo no “produce frío”.

Transfiere energía.

---

## 73. Ciclo de Carnot — profundización

El **ciclo de Carnot** es un ciclo reversible ideal que opera entre:

- una fuente caliente a temperatura T<sub>H</sub>;
- una fuente fría a temperatura T<sub>C</sub>.

Su importancia no es describir exactamente un motor real.

Sirve como:

> **límite ideal de rendimiento.**

---

## 74. Rendimiento de Carnot

Para temperaturas absolutas:

<div class="formula-panel">
  <span class="formula-panel__label">Rendimiento máximo reversible</span>
  <div class="formula-panel__formula">η<sub>Carnot</sub> = 1 − T<sub>C</sub>/T<sub>H</sub></div>
</div>

con temperaturas en:

**kelvin**

---

## 75. Por qué no se usan grados Celsius en Carnot

La relación:

**T<sub>C</sub>/T<sub>H</sub>**

es una razón entre temperaturas absolutas.

Usar Celsius daría resultados físicamente incorrectos.

Por eso:

> **las temperaturas de Carnot deben expresarse en kelvin.**

---

## 76. Ejemplo de Carnot

Una máquina ideal opera entre:

- T<sub>H</sub> = 600 K;
- T<sub>C</sub> = 300 K.

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Límite ideal de Carnot</h3>
  <div class="worked-example-card__steps">
    <p>η = 1 − 300/600</p>
    <p><strong>η = 0,50 = 50%</strong></p>
  </div>
</div>

Ninguna máquina térmica que opere entre esas dos temperaturas puede superar el rendimiento de una máquina reversible ideal de Carnot.

---

## 77. Carnot no es un motor práctico perfecto

Un ciclo de Carnot ideal exige:

- procesos reversibles;
- ausencia de fricción;
- transferencias con diferencias infinitesimales de temperatura;
- operación idealizada.

Un proceso completamente reversible sería:

- extremadamente lento en el límite.

Los motores reales buscan:

- potencia;
- tamaño razonable;
- costos;
- durabilidad;

además de eficiencia.

---

## 78. Diferencia entre potencia y rendimiento

Una máquina puede tener:

- alta potencia;
- bajo rendimiento.

Otra puede tener:

- menor potencia;
- mayor rendimiento.

### Potencia

Energía transferida por unidad de tiempo.

### Rendimiento

Fracción de la entrada que aparece como salida útil.

Son conceptos diferentes.

---

## 79. Experiencia segura: gas y temperatura

### Objetivo

Observar cualitativamente la relación entre temperatura y volumen.

### Posible montaje

- botella plástica vacía;
- globo colocado en la boca;
- recipiente con agua tibia;
- recipiente con agua fresca.

Al cambiar la temperatura del aire:

- puede cambiar el volumen del globo.

### Seguridad

Usar agua tibia, no hirviendo. No cerrar recipientes rígidos y calentarlos.

---

## 80. Experiencia segura: compresión de aire

Con una jeringa plástica:

- sin aguja;
- con la salida cerrada suavemente;

podemos comprimir un pequeño volumen de aire.

Se observa que:

- la presión aumenta;
- el émbolo tiende a regresar.

No aplicar fuerzas grandes ni usar recipientes rígidos presurizados.

---

## 81. Simulación P-V

Una simulación es especialmente útil para:

- mover un pistón;
- calentar o enfriar;
- observar P, V y T;
- comparar trayectorias;
- visualizar áreas de trabajo.

Podemos estudiar un mismo estado final obtenido mediante:

- caminos diferentes;

y comprobar que:

- ΔU puede ser igual;
- Q y W pueden diferir.

---

## 82. Errores frecuentes

### “Un sistema contiene calor”

No. Contiene energía interna; el calor es transferencia.

### “Trabajo y calor son funciones de estado”

No.

### “Si T es constante, Q es cero”

No necesariamente.

### “Adiabático significa temperatura constante”

No.

### “En un proceso isocórico no puede cambiar la energía”

Sí puede cambiar U; lo que es cero es el trabajo P-V.

### “En una expansión el trabajo realizado por el gas es negativo”

Con la convención de esta lección es positivo.

### “La primera ley dice qué procesos son espontáneos”

No. Eso requiere la segunda ley.

### “Entropía significa simplemente desorden”

Es una simplificación insuficiente.

### “Una máquina térmica puede alcanzar 100% si no tiene rozamiento”

No si opera cíclicamente entre fuentes térmicas finitas.

### “Una heladera crea frío”

No. Transfiere energía térmica desde una región fría hacia una caliente usando trabajo.

---

## 83. Problemas y ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Conceptos</strong>
  </div>
  <ol>
    <li>Definí sistema, entorno y estado termodinámico.</li>
    <li>¿Qué caracteriza a un gas ideal?</li>
    <li>Explicá la diferencia entre estado y proceso.</li>
    <li>¿Por qué calor y trabajo no son funciones de estado?</li>
    <li>Explicá conceptualmente qué agrega la segunda ley respecto de la primera.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Gas ideal y procesos</strong>
  </div>
  <ol>
    <li>Calculá la presión de 2 mol de gas ideal a 300 K contenidos en 0,050 m³.</li>
    <li>Un gas duplica su volumen isotérmicamente. ¿Qué ocurre con su presión?</li>
    <li>Un gas a presión constante pasa de 300 K a 450 K. ¿Por qué factor cambia V?</li>
    <li>Un gas a volumen constante pasa de 250 K a 500 K. ¿Por qué factor cambia P?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Trabajo y primera ley</strong>
  </div>
  <ol>
    <li>Un gas se expande a 150 kPa desde 2 L hasta 6 L. Calculá W<sub>por</sub>.</li>
    <li>El gas recibe 1000 J y realiza 400 J de trabajo. Calculá ΔU.</li>
    <li>En un proceso isocórico el sistema recibe 700 J. Calculá ΔU.</li>
    <li>Un gas ideal se expande isotérmicamente realizando 500 J. ¿Cuánto Q recibe según la convención usada?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Diagramas y ciclos</strong>
  </div>
  <ol>
    <li>Dibujá cualitativamente procesos isobárico, isocórico e isotérmico en P-V.</li>
    <li>Compará dos caminos entre los mismos estados y explicá por qué pueden tener trabajos diferentes.</li>
    <li>En un ciclo completo, ¿qué vale ΔU? Relacioná Q<sub>neto</sub> con W<sub>neto</sub>.</li>
    <li>Explicá por qué el área bajo una curva P-V tiene unidades de energía.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Para un gas ideal monoatómico, calculá ΔU de 2 mol cuando T aumenta 100 K.</li>
    <li>Analizá energéticamente una expansión adiabática y justificá el descenso de temperatura.</li>
    <li>Una máquina térmica recibe 5000 J y entrega 3000 J a la fuente fría. Calculá trabajo y rendimiento.</li>
    <li>Calculá el rendimiento de Carnot entre 800 K y 300 K y explicá por qué es un límite, no una predicción exacta para motores reales.</li>
  </ol>
</div>

---

## 84. Ejemplo integrado: tres maneras de cambiar un gas

Consideremos un gas ideal.

### Caso A: calentamiento isocórico

- W<sub>por</sub> = 0;
- `Q > 0`;
- `ΔU > 0`;
- T aumenta;
- P aumenta.

### Caso B: expansión isotérmica

- `ΔU = 0`;
- W<sub>por</sub> > 0;
- Q = W<sub>por</sub>;
- T permanece constante;
- V aumenta;
- P disminuye.

### Caso C: expansión adiabática

- `Q = 0`;
- W<sub>por</sub> > 0;
- `ΔU < 0`;
- para un gas ideal, T disminuye.

<div class="worked-example-card">
  <span class="worked-example-card__label">Comparación integrada</span>
  <h3>La misma sustancia, procesos diferentes</h3>
  <div class="worked-example-card__steps">
    <p>Isocórico: la energía transferida aumenta U.</p>
    <p>Isotérmico: la energía recibida compensa el trabajo realizado.</p>
    <p>Adiabático: el trabajo sale a costa de la energía interna.</p>
    <p><strong>El proceso determina cómo se relacionan Q, W, U, P, V y T.</strong></p>
  </div>
</div>

---

## 85. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Cuál es la ecuación de estado del gas ideal?</summary>
  <div class="lesson-quiz__answer">
    PV = nRT, con la temperatura expresada en kelvin y unidades coherentes.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Qué significa un proceso isotérmico?</summary>
  <div class="lesson-quiz__answer">
    Que la temperatura permanece constante. Para un gas ideal con n constante, PV permanece constante.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Qué vale el trabajo P-V en un proceso isocórico?</summary>
  <div class="lesson-quiz__answer">
    Cero, porque no hay cambio de volumen.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. Con nuestra convención, ¿cómo se escribe la primera ley?</summary>
  <div class="lesson-quiz__answer">
    ΔU = Q − W_por, donde Q es positivo cuando el sistema recibe energía térmica y W_por es positivo cuando el sistema realiza trabajo sobre el entorno.
  </div>
</details>

<details class="lesson-quiz">
  <summary>5. ¿Qué diferencia fundamental existe entre primera y segunda ley?</summary>
  <div class="lesson-quiz__answer">
    La primera expresa conservación de energía; la segunda agrega restricciones sobre la dirección de los procesos espontáneos, la irreversibilidad y los límites de conversión de calor en trabajo.
  </div>
</details>

<details class="lesson-quiz">
  <summary>6. ¿Por qué una máquina de Carnot no representa un motor real perfecto?</summary>
  <div class="lesson-quiz__answer">
    Porque es un ciclo reversible ideal que sirve como límite máximo de rendimiento entre dos temperaturas, mientras los motores reales presentan irreversibilidades y deben operar en condiciones prácticas finitas.
  </div>
</details>

---

## 86. Resumen

- La termodinámica estudia sistemas mediante variables macroscópicas.
- Estado y proceso son conceptos diferentes.
- Un gas ideal es un modelo de partículas con interacciones despreciables salvo choques.
- La ecuación de estado es `PV = nRT`.
- La temperatura de esa ecuación debe expresarse en kelvin.
- En un isotérmico ideal, T permanece constante y `PV = constante`.
- En un isobárico, P permanece constante.
- En un isocórico, V permanece constante.
- En un adiabático ideal, `Q = 0`.
- Los diagramas P-V representan estados y procesos.
- El trabajo realizado por un gas es el área bajo la curva P-V en un proceso cuasiestático.
- Con nuestra convención, ΔU = Q − W<sub>por</sub>.
- La energía interna es función de estado.
- Calor y trabajo son mecanismos de transferencia, no funciones de estado.
- Para un gas ideal, U depende solamente de T.
- La primera ley expresa conservación de energía.
- La segunda ley establece restricciones sobre la dirección de procesos y la conversión de energía.
- Los procesos reales presentan irreversibilidad.
- La entropía es una función de estado y no debe reducirse simplemente a “desorden”.
- En un sistema aislado, ΔS<sub>total</sub> ≥ 0.
- Una máquina térmica recibe calor de una fuente caliente, produce trabajo y entrega parte a una fuente fría.
- η = W<sub>salida</sub>/Q<sub>caliente</sub>.
- Un refrigerador necesita trabajo para transferir energía de una región fría a una caliente.
- Carnot proporciona un límite ideal: η = 1 − T<sub>C</sub>/T<sub>H</sub>.
- Las temperaturas de Carnot deben expresarse en kelvin.

---

## 87. Siguiente tema recomendado

**F-17 — Oscilaciones**

Después de estudiar sistemas térmicos, volvemos al movimiento con una clase muy importante de fenómenos repetitivos.

Trabajaremos con:

- movimiento periódico;
- período;
- frecuencia;
- amplitud;
- movimiento armónico simple;
- sistema masa-resorte;
- ley de Hooke;
- energía en las oscilaciones;
- péndulo simple;
- aproximación de pequeño ángulo;
- resonancia;
- amortiguamiento.
