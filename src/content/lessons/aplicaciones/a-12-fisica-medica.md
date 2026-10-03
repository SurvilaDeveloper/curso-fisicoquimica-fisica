---
title: "Física médica"
description: "Cómo se aplican ondas, radiación, magnetismo, detectores y procesamiento de señales en ecografía, rayos X, tomografía, resonancia magnética, medicina nuclear y radioterapia."
slug: "fisica-medica"

course: "aplicaciones"
module: "fisica-y-salud"
order: 12

level: "avanzado-secundario"
cycle: "orientado"

yearsApprox: [4, 5, 6]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - acustica
  - optica-fisica
  - induccion-y-electromagnetismo
  - fisica-nuclear
  - exponenciales

skills:
  - fisica-medica
  - imagen-medica
  - ecografia
  - ultrasonido
  - impedancia-acustica
  - eco
  - doppler
  - rayos-x
  - atenuacion
  - tomografia-computada
  - resonancia-magnetica
  - campo-magnetico
  - radiofrecuencia
  - medicina-nuclear
  - pet
  - spect
  - detectores
  - radioterapia
  - dosis-absorbida
  - gray
  - procesamiento-de-imagenes
  - resolucion
  - contraste

hasExercises: true
hasQuiz: true
hasExperiment: false

deepening: true
status: "complete"
---

## Ver dentro del cuerpo no significa usar siempre el mismo tipo de “radiación”

Una ecografía utiliza:

- ondas sonoras de alta frecuencia.

Una radiografía utiliza:

- rayos X.

Una resonancia magnética utiliza principalmente:

- campos magnéticos intensos;
- radiofrecuencia;
- propiedades magnéticas de núcleos atómicos.

La medicina nuclear detecta:

- radiación emitida por trazadores radiactivos.

Todas producen información médica, pero mediante fenómenos físicos muy distintos.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>La física médica transforma interacciones entre energía y materia en mediciones útiles. Cada técnica presenta compromisos entre contraste, resolución, tiempo, profundidad, sensibilidad, dosis, costo y seguridad. No existe una modalidad universalmente “mejor”: se elige según la pregunta clínica.</p>
  </div>
</div>

<div class="lesson-callout lesson-callout--warning">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">⚠</span>
    <strong>Alcance de esta lección</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Este material explica principios físicos. No permite decidir qué estudio necesita una persona, interpretar imágenes clínicas ni indicar tratamientos. Esas decisiones corresponden a profesionales de la salud y especialistas en física médica.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta aplicación deberías poder:

- distinguir modalidades que usan sonido, campos magnéticos y radiación ionizante;
- explicar el principio básico de una ecografía;
- relacionar tiempo de eco y profundidad;
- interpretar impedancia acústica cualitativamente;
- comprender el Doppler en mediciones de flujo;
- explicar por qué los rayos X producen contraste;
- usar una ley exponencial de atenuación como modelo;
- explicar conceptualmente una tomografía computada;
- comprender qué mide una resonancia magnética a nivel físico;
- reconocer que MRI no utiliza rayos X;
- describir el principio de un trazador radiactivo;
- distinguir SPECT y PET de manera introductoria;
- comprender qué hace un detector;
- distinguir imagen anatómica de información funcional;
- comprender la finalidad física de la radioterapia;
- definir dosis absorbida y gray;
- distinguir resolución, contraste, sensibilidad y ruido;
- reconocer que toda modalidad posee limitaciones y protocolos de seguridad propios.

---

# Una cadena de medición

## 1. Fuente, interacción, detector

Muchas técnicas médicas pueden pensarse como:

```text
fuente o excitación
      ↓
interacción con el cuerpo
      ↓
señal resultante
      ↓
detector
      ↓
procesamiento
      ↓
imagen o medición
```

---

## 2. Una imagen no es una fotografía directa del interior

La imagen final puede depender de:

- modelo físico;
- geometría;
- detector;
- algoritmos;
- calibración;
- filtrado;
- reconstrucción.

Por eso una imagen médica es una:

- medición procesada.

---

# Ecografía

## 3. Ultrasonido

El ultrasonido es sonido con frecuencia superior al rango auditivo humano.

En ecografía médica se emplean frecuencias mucho mayores que las de:

- música;
- habla.

---

## 4. Pulso y eco

Un transductor emite un pulso.

La onda se propaga por el tejido.

Parte se refleja en interfaces.

El transductor recibe los ecos.

Midiendo su tiempo de retorno podemos estimar:

- profundidad.

---

## 5. Profundidad por tiempo de vuelo

Si la velocidad efectiva del sonido es c y el eco tarda Δt en ir y volver:

<div class="formula-panel">
  <span class="formula-panel__label">Profundidad</span>
  <div class="formula-panel__formula">d ≈ cΔt/2</div>
</div>

El factor 2 aparece porque el pulso:

- va;
- vuelve.

---

## 6. Ejemplo

Si usamos:

**c≈1540 m/s**

como valor típico de referencia para tejido blando y medimos:

**Δt=130 μs**

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Profundidad aproximada</span>
  <div class="formula-panel__formula">d ≈ 1540·130×10<sup>−6</sup>/2 ≈ 0,100 m</div>
</div>

aproximadamente:

**10 cm**

---

## 7. Ese valor de c es un modelo

La velocidad del sonido varía entre:

- tejidos;
- materiales.

Los equipos usan aproximaciones para reconstruir posiciones.

Esto puede introducir:

- artefactos;
- errores geométricos.

---

## 8. Impedancia acústica

Una magnitud útil es:

<div class="formula-panel">
  <span class="formula-panel__label">Impedancia acústica</span>
  <div class="formula-panel__formula">Z = ρc</div>
</div>

Interfaces con diferente Z producen:

- reflexión parcial.

---

## 9. Gel de ecografía

El aire produce una gran discontinuidad acústica entre transductor y piel.

El gel ayuda a eliminar capas de aire y mejorar:

- acoplamiento acústico.

---

## 10. Frecuencia y resolución

Frecuencias más altas suelen permitir:

- mejor resolución espacial;

pero sufren mayor:

- atenuación.

Por eso existe un compromiso entre:

- detalle;
- profundidad.

---

## 11. Efecto Doppler

Si los dispersores se mueven, la frecuencia recibida puede cambiar.

Una forma idealizada para flujo sanguíneo es:

<div class="formula-panel">
  <span class="formula-panel__label">Doppler</span>
  <div class="formula-panel__formula">Δf ≈ 2f<sub>0</sub>v cosθ/c</div>
</div>

El factor 2 aparece por el camino de:

- ida;
- reflexión/dispersión;
- vuelta.

---

## 12. Dependencia angular

Si θ se acerca a 90°:

**cosθ→0**

y el desplazamiento Doppler medido se reduce.

Por eso la geometría de medición importa.

---

# Rayos X

## 13. Radiación electromagnética de alta energía

Los rayos X tienen frecuencias mucho mayores que la luz visible.

Sus fotones pueden ser:

- ionizantes.

Por eso su uso médico requiere:

- justificación;
- optimización;
- protocolos de protección.

Los detalles de radiación y salud se desarrollarán en A-13.

---

## 14. Producción de rayos X — panorama

En un tubo de rayos X, electrones acelerados impactan un blanco.

La desaceleración y procesos atómicos producen:

- radiación X.

No se trata de “luz visible más brillante”.

---

## 15. Atenuación

Al atravesar materia, la intensidad disminuye por procesos de interacción.

Un modelo sencillo es:

<div class="formula-panel">
  <span class="formula-panel__label">Atenuación</span>
  <div class="formula-panel__formula">I = I<sub>0</sub>e<sup>−μx</sup></div>
</div>

---

## 16. Coeficiente μ

μ depende de:

- energía del fotón;
- composición del material;
- densidad;
- tipo de interacción.

Por eso no es una constante universal de “todo tejido”.

---

## 17. Contraste radiográfico

Si dos regiones atenúan de manera diferente, llega distinta intensidad al detector.

Eso produce:

- contraste.

Hueso, aire y tejidos blandos no atenúan de la misma manera.

---

## 18. Espesor

A mayor x, en el modelo:

- menor transmisión.

El cambio es exponencial, no:

- lineal.

---

## 19. Capa hemirreductora

La distancia x que reduce I a la mitad cumple:

<div class="formula-panel">
  <span class="formula-panel__label">Mitad</span>
  <div class="formula-panel__formula">x<sub>1/2</sub> = ln2/μ</div>
</div>

Es una aplicación directa de:

- exponenciales;
- logaritmos.

---

# Tomografía computada

## 20. Una radiografía superpone profundidades

Una radiografía proyecta sobre un plano la atenuación acumulada a lo largo de muchas trayectorias.

Estructuras a diferentes profundidades pueden:

- superponerse.

---

## 21. CT: muchas proyecciones

Una tomografía computada obtiene mediciones de rayos X desde múltiples ángulos.

Un algoritmo reconstruye una representación de:

- cortes;
- volúmenes.

---

## 22. Reconstrucción

La máquina no “corta” físicamente el cuerpo.

Combina matemáticamente:

- múltiples proyecciones.

Es un ejemplo poderoso de cómo:

- Física;
- Matemática;
- computación;

trabajan juntas.

---

## 23. Resolución y dosis

Cambiar parámetros puede modificar:

- ruido;
- resolución;
- contraste;
- dosis.

No existe una configuración que maximice todo simultáneamente.

La selección es una decisión clínica y técnica.

---

# Resonancia magnética

## 24. MRI no usa rayos X

La resonancia magnética utiliza:

- campo magnético estático fuerte;
- gradientes de campo;
- pulsos de radiofrecuencia;
- detección de señales de núcleos.

No emplea radiación ionizante de rayos X.

---

## 25. Espín nuclear — introducción

Algunos núcleos poseen momento magnético asociado a una propiedad cuántica llamada:

- espín.

En medicina se aprovecha especialmente la señal relacionada con:

- hidrógeno;

abundante en agua y grasa.

---

## 26. Campo principal

En un campo magnético B<sub>0</sub>, los momentos magnéticos nucleares presentan una frecuencia característica.

De manera simplificada:

<div class="formula-panel">
  <span class="formula-panel__label">Larmor</span>
  <div class="formula-panel__formula">f = γB<sub>0</sub>/(2π)</div>
</div>

γ depende del núcleo.

---

## 27. Radiofrecuencia

Un pulso de radiofrecuencia apropiado perturba el estado de magnetización.

Después del pulso, el sistema evoluciona y produce señales detectables.

---

## 28. Relajación

La señal cambia con escalas características que se describen mediante tiempos como:

- T<sub>1</sub>;
- T<sub>2</sub>.

Distintos tejidos pueden mostrar comportamientos diferentes.

Eso ayuda a generar:

- contraste.

---

## 29. Gradientes

Campos magnéticos que varían con la posición permiten codificar información espacial.

La reconstrucción convierte señales de frecuencia y fase en:

- imágenes.

---

## 30. Seguridad magnética

Un campo magnético intenso puede ejercer fuerzas sobre objetos ferromagnéticos y afectar dispositivos.

Por eso una sala de MRI requiere:

- control estricto de acceso;
- evaluación de objetos e implantes;
- protocolos especializados.

La ausencia de rayos X no significa:

- ausencia de riesgos.

---

# Medicina nuclear

## 31. Trazadores

Una pequeña cantidad de una sustancia marcada con un radionúclido puede participar en procesos fisiológicos.

Detectando radiación emitida se estudia:

- distribución;
- función;
- metabolismo.

---

## 32. Imagen funcional

A diferencia de una técnica puramente anatómica, la medicina nuclear puede mostrar información relacionada con:

- actividad fisiológica;
- metabolismo;
- perfusión;
- receptores;

según el trazador.

---

## 33. Cámara gamma y SPECT

En SPECT se detectan fotones gamma emitidos por el radionúclido desde múltiples ángulos.

Luego se reconstruye:

- distribución tridimensional aproximada.

---

## 34. PET

En PET se usan radionúclidos emisores de positrones.

El positrón finalmente se aniquila con un electrón, produciendo típicamente dos fotones gamma emitidos aproximadamente en direcciones opuestas.

Cada uno tiene una energía característica de:

**511 keV**

en el proceso ideal de aniquilación en reposo.

---

## 35. Coincidencia

Los detectores buscan eventos casi simultáneos en lados opuestos del anillo.

Eso permite inferir una:

- línea de respuesta.

Con muchas detecciones se reconstruye la distribución del trazador.

---

## 36. PET no “ve positrones viajando por el cuerpo”

Lo que detecta el sistema son principalmente los fotones gamma producidos después de:

- aniquilación.

La física entre emisión y detección afecta la resolución.

---

# Detectores

## 37. Convertir radiación en señal

Un detector transforma una interacción física en:

- carga eléctrica;
- luz;
- corriente;
- pulso electrónico.

---

## 38. Centelleadores

Algunos materiales emiten luz cuando absorben energía de radiación.

Un fotodetector convierte esa luz en:

- señal eléctrica.

---

## 39. Semiconductores

En un detector semiconductor, la radiación puede crear portadores de carga.

Un campo eléctrico permite recolectarlos y producir:

- una señal.

---

## 40. Conteo y energía

Dependiendo del detector podemos medir:

- cantidad de eventos;
- energía depositada;
- posición;
- tiempo.

No todos los detectores entregan la misma información.

---

# Radioterapia

## 41. Objetivo físico

La radioterapia busca depositar energía en un volumen objetivo de manera planificada, limitando tanto como sea posible la dosis en:

- tejidos sanos;
- órganos sensibles.

---

## 42. Dosis absorbida

<div class="formula-panel">
  <span class="formula-panel__label">Dosis absorbida</span>
  <div class="formula-panel__formula">D = E<sub>abs</sub>/m</div>
</div>

Unidad SI:

<div class="formula-panel">
  <span class="formula-panel__label">Gray</span>
  <div class="formula-panel__formula">1 Gy = 1 J/kg</div>
</div>

---

## 43. Gray no es sievert

### Gray

Energía absorbida por masa.

### Sievert

Magnitud de protección radiológica que incorpora ponderaciones relacionadas con efectos biológicos y contexto.

No son unidades intercambiables.

A-13 profundizará:

- radiaciones;
- exposición;
- salud.

---

## 44. Fotones

Aceleradores lineales médicos pueden producir haces de alta energía utilizados en tratamientos.

La planificación considera:

- geometría;
- atenuación;
- dispersión;
- dosis;
- movimiento;
- anatomía.

---

## 45. Electrones

Los electrones tienen alcances diferentes de los fotones y pueden usarse en situaciones específicas.

La elección pertenece al equipo clínico.

---

## 46. Protones — profundización

Los protones cargados presentan una distribución de deposición de energía característica con un aumento cerca del final de su recorrido:

- pico de Bragg.

Eso puede aprovecharse para conformar dosis en profundidad.

---

## 47. La física no decide sola el tratamiento

Aunque la distribución de dosis sea un problema físico, la indicación depende de:

- diagnóstico;
- biología;
- estado clínico;
- objetivos terapéuticos.

Es una decisión médica multidisciplinaria.

---

# Imagen y calidad

## 48. Resolución espacial

Indica qué tan pequeños pueden ser dos detalles para seguir distinguiéndose.

Depende de:

- modalidad;
- detector;
- geometría;
- reconstrucción.

---

## 49. Contraste

Describe la diferencia de señal entre regiones.

Una imagen puede tener:

- alta resolución;
- bajo contraste;

o lo contrario.

---

## 50. Ruido

Las mediciones contienen fluctuaciones.

Reducir ruido puede requerir:

- más señal;
- más tiempo;
- promediado;
- procesamiento.

En técnicas ionizantes, aumentar señal puede implicar un compromiso con:

- dosis.

---

## 51. Resolución temporal

Para observar procesos rápidos importa cuánto tarda el sistema en adquirir:

- una imagen;
- una secuencia.

Esto es diferente de:

- resolución espacial.

---

## 52. Artefactos

Una imagen puede contener estructuras que no corresponden directamente a anatomía real por:

- movimiento;
- reconstrucción;
- calibración;
- interacción física;
- límites del modelo.

Interpretarlas requiere:

- conocimiento especializado.

---

# Comparación de modalidades

## 53. Ecografía

Ventajas físicas típicas:

- tiempo real;
- portátil;
- sin radiación ionizante.

Limitaciones:

- aire y hueso dificultan propagación;
- depende del operador;
- resolución/profundidad están acopladas.

---

## 54. Radiografía

Fortalezas:

- rápida;
- buena sensibilidad a diferencias de atenuación;
- útil para estructuras densas.

Limitación importante:

- proyección 2D;
- utiliza radiación ionizante.

---

## 55. CT

Fortalezas:

- cortes y reconstrucción 3D;
- alta resolución anatómica en muchos contextos.

Consideración:

- utiliza rayos X y puede implicar más exposición que una radiografía simple.

La comparación de dosis concreta depende del protocolo.

---

## 56. MRI

Fortalezas:

- excelente contraste de tejidos blandos en muchas aplicaciones;
- múltiples tipos de contraste;
- no utiliza radiación ionizante.

Consideraciones:

- campos magnéticos intensos;
- radiofrecuencia;
- tiempo;
- compatibilidad de dispositivos;
- ruido acústico.

---

## 57. Medicina nuclear

Fortaleza:

- información funcional y molecular.

Consideración:

- implica administrar un trazador radiactivo;
- resolución espacial puede ser menor que en otras técnicas.

---

# Seguridad y justificación

## 58. Más imagen no siempre significa mejor atención

Toda prueba debe responder una pregunta clínica.

Una técnica puede ser excelente para una situación y poco útil para otra.

La selección corresponde a:

- profesionales de salud.

---

## 59. Radiación ionizante

En técnicas que usan radiación ionizante se aplican principios de:

- justificación;
- optimización;
- control de exposición.

No es correcto concluir:

> “toda radiación es peligrosa y debe evitarse siempre”

ni:

> “la dosis médica nunca importa”.

El análisis depende de:

- beneficio;
- riesgo;
- alternativa;
- protocolo.

---

## 60. MRI y ecografía también tienen protocolos

“No ionizante” no significa “sin ninguna consideración de seguridad”.

MRI requiere control por:

- campos;
- implantes;
- objetos metálicos;
- radiofrecuencia.

Ecografía utiliza niveles y tiempos ajustados al:

- uso clínico.

---

# No hacer experimentos médicos

## 61. No reproducir equipos clínicos

No se deben construir ni improvisar:

- fuentes de rayos X;
- fuentes radiactivas;
- campos magnéticos intensos;
- equipos terapéuticos.

La enseñanza se realiza mediante:

- simulaciones;
- datos;
- imágenes públicas;
- modelos seguros.

---

## 62. Actividad con datos sintéticos

Podemos modelar atenuación con:

<div class="formula-panel">
  <span class="formula-panel__label">Modelo</span>
  <div class="formula-panel__formula">I/I<sub>0</sub> = e<sup>−μx</sup></div>
</div>

y construir una tabla para distintos x sin utilizar radiación real.

---

## 63. Actividad con eco acústico

Se puede estudiar tiempo de vuelo con:

- sonido audible;
- simuladores;
- sensores educativos;

sin usar un equipo médico.

El objetivo es comprender el principio:

**distancia = velocidad·tiempo/2**

---

## 64. Herramientas matemáticas

Esta aplicación usa especialmente:

- M-05 — Notación científica;
- M-11 — Interpretación de gráficos;
- M-17 — Logaritmos;
- M-18 — Exponenciales.

---

## 65. Errores frecuentes

### “Ecografía usa radiación electromagnética”

No. Usa ondas mecánicas.

### “MRI es una radiografía muy potente”

No. Emplea magnetismo y radiofrecuencia, no rayos X.

### “Una imagen médica muestra directamente la realidad”

Es una reconstrucción basada en mediciones y modelos.

### “Más resolución siempre es mejor”

Hay compromisos con ruido, tiempo, profundidad y dosis según la modalidad.

### “Gray y sievert son lo mismo”

No.

### “PET detecta directamente positrones desde lejos”

Principalmente detecta los fotones gamma de aniquilación.

### “No ionizante significa riesgo cero”

No. Cada tecnología tiene riesgos y protocolos propios.

---

## 66. Problemas graduados

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Modalidades</strong>
  </div>
  <ol>
    <li>Clasificá ecografía, radiografía y MRI según el fenómeno físico principal.</li>
    <li>¿Cuál utiliza rayos X?</li>
    <li>¿Cuál utiliza ondas mecánicas?</li>
    <li>¿Cuál utiliza campo magnético y radiofrecuencia?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Ecografía</strong>
  </div>
  <ol>
    <li>Con c=1540 m/s y Δt=100 μs, estimá d.</li>
    <li>Explicá por qué aparece el factor 1/2.</li>
    <li>¿Qué error aparece si la velocidad real difiere del valor asumido?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Atenuación</strong>
  </div>
  <ol>
    <li>Si μ=0,20 cm<sup>−1</sup>, calculá I/I<sub>0</sub> después de 5 cm.</li>
    <li>Calculá x<sub>1/2</sub>=ln2/μ.</li>
    <li>Explicá por qué dos tejidos con distinto μ generan contraste.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Imágenes</strong>
  </div>
  <ol>
    <li>Compará radiografía y CT desde el punto de vista geométrico.</li>
    <li>Compará CT y MRI según la interacción física usada.</li>
    <li>Distinguí información anatómica y funcional con ejemplos.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Explicá cómo gradientes magnéticos permiten codificar posición en MRI a nivel conceptual.</li>
    <li>Explicá por qué PET puede localizar una línea de respuesta mediante coincidencia de fotones.</li>
    <li>Diseñá una tabla comparativa entre cinco modalidades usando: fenómeno físico, señal detectada, ionización, resolución y limitaciones.</li>
  </ol>
</div>

---

## 67. Ejemplo integrado: atenuación

Supongamos un haz ideal con:

**I<sub>0</sub> = 100 unidades**

y:

**μ = 0,15 cm<sup>−1</sup>**

Tras:

**x = 10 cm**

<div class="formula-panel">
  <span class="formula-panel__label">Transmisión</span>
  <div class="formula-panel__formula">I = 100e<sup>−0,15·10</sup> = 100e<sup>−1,5</sup></div>
</div>

Aproximadamente:

**I≈22,3 unidades**

La capa hemirreductora es:

<div class="formula-panel">
  <span class="formula-panel__label">Mitad</span>
  <div class="formula-panel__formula">x<sub>1/2</sub> = ln2/0,15 ≈ 4,62 cm</div>
</div>

Este cálculo ilustra la física matemática de atenuación.

No representa un tejido ni protocolo clínico específico sin datos adicionales.

---

## 68. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Por qué d=cΔt/2 en una ecografía de pulso-eco?</summary>
  <div class="lesson-quiz__answer">
    Porque el tiempo medido incluye el recorrido desde el transductor hasta la interfaz y el regreso del eco.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Qué diferencia física principal existe entre CT y MRI?</summary>
  <div class="lesson-quiz__answer">
    CT mide atenuación de rayos X desde múltiples ángulos; MRI utiliza campos magnéticos y radiofrecuencia para detectar señales asociadas a núcleos y reconstruir imágenes.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Qué mide el gray?</summary>
  <div class="lesson-quiz__answer">
    Dosis absorbida: energía depositada por unidad de masa, 1 Gy=1 J/kg.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Por qué no existe una modalidad de imagen universalmente mejor?</summary>
  <div class="lesson-quiz__answer">
    Porque cada técnica tiene compromisos distintos de contraste, resolución, profundidad, tiempo, información funcional, seguridad, disponibilidad y costo; la elección depende de la pregunta clínica.
  </div>
</details>

---

## 69. Resumen

- Una imagen médica es el resultado de una cadena de medición y reconstrucción.
- Ecografía usa ondas sonoras y ecos.
- La profundidad puede estimarse con d≈cΔt/2.
- Diferencias de impedancia acústica producen reflexiones.
- Doppler permite estimar movimiento bajo supuestos geométricos.
- Rayos X son radiación electromagnética ionizante.
- La atenuación puede modelarse como I=I<sub>0</sub>e<sup>−μx</sup>.
- CT reconstruye cortes a partir de múltiples proyecciones de rayos X.
- MRI usa campos magnéticos, gradientes y radiofrecuencia; no rayos X.
- Medicina nuclear detecta radiación de trazadores dentro del cuerpo.
- PET utiliza coincidencia de fotones de aniquilación.
- Los detectores convierten interacciones físicas en señales.
- Radioterapia busca depositar dosis planificada en un volumen objetivo.
- El gray mide dosis absorbida.
- Resolución, contraste, ruido y tiempo son propiedades diferentes.
- La selección de un estudio o tratamiento es una decisión clínica, no una conclusión de esta lección.

---

## 70. Siguiente aplicación

**A-13 — Radiaciones y salud**

La siguiente aplicación distinguirá:

- radiación ionizante y no ionizante;
- actividad;
- dosis;
- exposición;
- riesgo;
- contaminación;
- protección;

sin confundir presencia de radiación con daño automático.
