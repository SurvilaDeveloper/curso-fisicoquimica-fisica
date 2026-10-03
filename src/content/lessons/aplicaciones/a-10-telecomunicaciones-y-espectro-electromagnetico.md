---
title: "Telecomunicaciones y espectro electromagnético"
description: "Cómo se transporta información mediante ondas electromagnéticas y señales eléctricas: espectro, frecuencia, longitud de onda, modulación, antenas, fibra óptica, ancho de banda, ruido y comunicaciones digitales."
slug: "telecomunicaciones-y-espectro-electromagnetico"

course: "aplicaciones"
module: "electromagnetismo-y-tecnologia"
order: 10

level: "intermedio"
cycle: "ambos"

yearsApprox: [4, 5, 6]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - ondas
  - optica-fisica
  - induccion-y-electromagnetismo
  - logaritmos

skills:
  - telecomunicaciones
  - espectro-electromagnetico
  - frecuencia
  - longitud-de-onda
  - velocidad-de-la-luz
  - señal
  - informacion
  - portadora
  - modulacion
  - amplitud-modulada
  - frecuencia-modulada
  - comunicaciones-digitales
  - ancho-de-banda
  - antenas
  - propagacion
  - atenuacion
  - decibeles
  - ruido
  - relacion-senal-ruido
  - fibra-optica
  - reflexion-interna-total

hasExercises: true
hasQuiz: true
hasExperiment: true

deepening: true
status: "complete"
---

## ¿Cómo puede una voz viajar miles de kilómetros sin que el aire viaje con ella?

Cuando hablamos por teléfono, la voz produce una onda mecánica en el aire.

Pero esa onda no atraviesa continentes ni llega directamente a una antena lejana.

El sistema:

1. transforma sonido en una señal eléctrica o digital;
2. representa la información mediante variaciones de una señal;
3. transmite esa información por cable, fibra óptica u ondas electromagnéticas;
4. la recibe, procesa y reconstruye en el destino.

La información puede cambiar de **soporte físico** varias veces sin dejar de representar el mismo mensaje.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Una telecomunicación no transporta “palabras” como objetos materiales. Un sistema físico codifica información en una señal, la transmite a través de un canal y luego intenta reconstruirla pese a atenuación, ruido, interferencias y límites de ancho de banda.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta aplicación deberías poder:

- ubicar radio, microondas, infrarrojo y luz dentro del espectro electromagnético;
- relacionar frecuencia y longitud de onda;
- distinguir onda electromagnética de onda sonora;
- distinguir señal, información y soporte físico;
- comprender para qué sirve una portadora;
- explicar cualitativamente modulación AM y FM;
- comprender qué significa modulación digital;
- distinguir frecuencia de portadora de tasa de información;
- interpretar ancho de banda;
- comprender el papel de antenas;
- relacionar dimensiones de antenas con longitud de onda de manera cualitativa;
- explicar atenuación, ruido e interferencia;
- usar decibeles como relación logarítmica;
- comprender reflexión, difracción y multitrayecto en radio;
- explicar el principio de la fibra óptica;
- distinguir repetidor, amplificador y regeneración digital;
- comprender por qué diferentes servicios usan distintas regiones del espectro;
- reconocer que las bandas concretas de uso son una cuestión técnica y regulatoria que puede cambiar.

---

# Espectro electromagnético

## 1. Una misma familia de ondas

En la descripción clásica, radio, microondas, infrarrojo, luz visible, ultravioleta, rayos X y gamma son:

**ondas electromagnéticas**

Difieren principalmente en:

- frecuencia;
- longitud de onda;
- energía por fotón cuando usamos la descripción cuántica.

---

## 2. Velocidad en el vacío

En el vacío:

<div class="formula-panel">
  <span class="formula-panel__label">Velocidad</span>
  <div class="formula-panel__formula">c ≈ 3,00×10<sup>8</sup> m/s</div>
</div>

y:

<div class="formula-panel">
  <span class="formula-panel__label">Relación ondulatoria</span>
  <div class="formula-panel__formula">c = λf</div>
</div>

---

## 3. Frecuencia y longitud de onda

Para c fija:

- mayor f → menor λ;
- menor f → mayor λ.

Son dos maneras relacionadas de caracterizar:

- la misma onda.

---

## 4. Ejemplo

Para una onda de:

**f = 100 MHz = 1,00×10<sup>8</sup> Hz**

en el vacío:

<div class="formula-panel">
  <span class="formula-panel__label">Longitud de onda</span>
  <div class="formula-panel__formula">λ = c/f ≈ 3,0 m</div>
</div>

---

## 5. El espectro no tiene fronteras “naturales” rígidas

Nombres como:

- radio;
- microondas;
- infrarrojo;

son categorías útiles.

Sus límites pueden variar según:

- convención;
- disciplina;
- aplicación.

La Física subyacente es continua.

---

## 6. En un material

En un medio material:

<div class="formula-panel">
  <span class="formula-panel__label">Propagación</span>
  <div class="formula-panel__formula">v = λf</div>
</div>

Al atravesar una frontera estacionaria, la frecuencia permanece fija mientras puede cambiar:

- velocidad;
- longitud de onda.

---

# Señal e información

## 7. Qué es una señal

Una señal es una magnitud física que cambia de una manera capaz de representar información.

Ejemplos:

- tensión eléctrica;
- corriente;
- campo electromagnético;
- potencia óptica.

---

## 8. Analógica

Una señal analógica puede variar de manera continua.

Ejemplo idealizado:

- tensión proporcional a la presión sonora de un micrófono.

---

## 9. Digital

Una comunicación digital representa información mediante estados discretos.

Eso no significa que el mundo físico del circuito sea “0 o 1 puro”.

Las tensiones y ondas reales siguen siendo:

- continuas;
- ruidosas;
- limitadas.

El sistema interpreta intervalos de valores como símbolos.

---

## 10. Bit

Un bit representa una elección entre dos estados lógicos.

Una secuencia de bits puede representar:

- texto;
- sonido;
- imagen;
- video;
- datos de sensores.

La información no determina por sí sola qué señal física se utiliza.

---

# Portadoras y modulación

## 11. Por qué usar una portadora

Una señal de información de baja frecuencia puede usarse para modificar una onda de frecuencia mayor.

La onda de alta frecuencia se llama:

- portadora.

Eso facilita:

- radiación mediante antenas;
- separación de canales;
- asignación de espectro;
- diseño de receptores.

---

## 12. Modulación de amplitud

En AM, una propiedad de la portadora que se modifica es su:

- amplitud.

Esquema conceptual:

```text
señal de información
        ↓
modulador + portadora
        ↓
onda cuya amplitud varía con el mensaje
```

---

## 13. Modulación de frecuencia

En FM, la información modifica principalmente la:

- frecuencia instantánea;

de la portadora alrededor de un valor central.

---

## 14. AM y FM no son “analógico versus digital”

AM y FM describen formas de modulación.

Puede haber sistemas:

- analógicos;
- digitales;

que utilizan variaciones de amplitud, frecuencia, fase o combinaciones.

---

## 15. Fase

Una onda sinusoidal puede escribirse conceptualmente como:

<div class="formula-panel">
  <span class="formula-panel__label">Señal</span>
  <div class="formula-panel__formula">s(t) = A cos(2πft + φ)</div>
</div>

Podemos modificar:

- A;
- f;
- φ;

para representar información.

---

## 16. Modulación digital

En comunicaciones digitales se usan esquemas que asocian símbolos con estados de:

- amplitud;
- frecuencia;
- fase;
- combinaciones.

El receptor debe distinguir esos estados pese a:

- ruido;
- distorsión.

---

# Ancho de banda

## 17. Una señal no suele tener una sola frecuencia

Una voz, una imagen o una secuencia digital contiene múltiples componentes espectrales.

Por eso ocupa un intervalo de frecuencias.

---

## 18. Ancho de banda

De manera general, el ancho de banda describe una extensión de frecuencias relevante para:

- una señal;
- un canal;
- un filtro.

No debe confundirse automáticamente con:

- velocidad de datos.

---

## 19. Más ancho de banda puede permitir más información, pero no es lo único

La tasa de información posible también depende de:

- relación señal/ruido;
- tipo de modulación;
- codificación;
- potencia;
- interferencia;
- calidad del canal.

---

## 20. Frecuencia de portadora no es tasa de bits

Una portadora de gigahertz no significa que el sistema transmita necesariamente:

- gigabits por segundo.

Son magnitudes diferentes.

---

# Antenas

## 21. Qué hace una antena transmisora

Una corriente variable produce campos electromagnéticos variables.

Una antena está diseñada para acoplar energía entre:

- circuito;
- campo electromagnético propagante.

---

## 22. Antena receptora

Un campo electromagnético incidente puede inducir tensiones y corrientes en una antena.

El receptor extrae de esas señales:

- energía;
- información.

---

## 23. Tamaño y longitud de onda

Muchas antenas eficientes tienen dimensiones relacionadas con fracciones de:

- λ.

Ejemplos ideales frecuentes usan:

- λ/2;
- λ/4.

Pero existen muchos diseños y técnicas de adaptación.

No toda antena tiene exactamente esas dimensiones.

---

## 24. Antenas direccionales

Una antena puede concentrar radiación preferentemente en ciertas direcciones.

La **ganancia** no significa crear energía.

Redistribuye la potencia radiada angularmente respecto de una referencia.

---

# Propagación

## 25. Propagación en espacio libre

Una onda que se expande distribuye su potencia sobre áreas crecientes.

Para una fuente isotrópica ideal:

<div class="formula-panel">
  <span class="formula-panel__label">Densidad de potencia</span>
  <div class="formula-panel__formula">S = P/(4πr²)</div>
</div>

---

## 26. Pérdida geométrica

Al duplicar r, en el modelo ideal:

- el área se multiplica por 4;
- la densidad de potencia cae a 1/4.

Eso no significa que la energía desaparezca.

Se distribuye sobre:

- una superficie mayor.

---

## 27. Absorción y obstáculos

Materiales pueden:

- absorber;
- reflejar;
- transmitir;
- dispersar;

ondas de manera diferente según:

- frecuencia;
- espesor;
- composición.

---

## 28. Difracción

Las ondas pueden rodear parcialmente obstáculos y expandirse al atravesar aberturas.

La importancia de la difracción aumenta cuando las dimensiones del obstáculo son comparables con:

- λ.

---

## 29. Reflexión

Edificios, terreno y otras superficies pueden reflejar ondas.

Una señal puede llegar al receptor por:

- camino directo;
- caminos reflejados.

---

## 30. Multitrayecto

Si varias copias de una señal llegan con distintos retardos y fases pueden:

- reforzarse;
- cancelarse;
- distorsionarse.

Eso se llama propagación por:

- múltiples trayectorias.

---

## 31. Mover el receptor puede cambiar mucho la señal

En interiores, desplazarse pocos centímetros puede cambiar la interferencia entre trayectorias.

Por eso la señal de radio puede variar aunque la distancia al transmisor casi no cambie.

---

# Ruido y relación señal/ruido

## 32. Ruido

Llamamos ruido a fluctuaciones no deseadas que dificultan recuperar la información.

Puede originarse en:

- componentes electrónicos;
- ambiente;
- otras transmisiones;
- procesos térmicos.

---

## 33. Señal/ruido

Una relación útil es:

<div class="formula-panel">
  <span class="formula-panel__label">Relación</span>
  <div class="formula-panel__formula">SNR = P<sub>señal</sub>/P<sub>ruido</sub></div>
</div>

---

## 34. SNR en decibeles

<div class="formula-panel">
  <span class="formula-panel__label">SNR</span>
  <div class="formula-panel__formula">SNR<sub>dB</sub> = 10 log(P<sub>s</sub>/P<sub>n</sub>)</div>
</div>

Una diferencia en dB representa una:

- razón multiplicativa.

---

## 35. +10 dB

Si la relación de potencias se multiplica por 10:

- aumenta 10 dB.

Si se multiplica por 100:

- aumenta 20 dB.

---

# Fibra óptica

## 36. Una telecomunicación puede usar luz guiada

En una fibra óptica, la información se transmite mediante variaciones de:

- potencia;
- fase;
- frecuencia;
- símbolos ópticos;

según el sistema.

---

## 37. Núcleo y revestimiento

Una fibra típica tiene:

- núcleo;
- revestimiento;

con índices de refracción diseñados para guiar la luz.

---

## 38. Reflexión interna total — modelo introductorio

Cuando la luz intenta pasar de un medio de mayor índice a uno de menor índice y el ángulo supera el crítico, puede producirse:

- reflexión interna total.

Esto ayuda a comprender el guiado básico.

---

## 39. Una fibra real no es sólo “un espejo interno”

La descripción completa usa:

- modos electromagnéticos;
- índices;
- dispersión;
- pérdidas.

La reflexión interna total es un excelente modelo inicial, pero no toda la teoría.

---

## 40. Atenuación en fibra

La potencia disminuye con la distancia por:

- absorción;
- dispersión;
- curvaturas;
- empalmes;
- conectores.

A menudo se expresa en:

- dB por unidad de longitud.

---

## 41. Dispersión

Pulsos enviados por una fibra pueden ensancharse debido a distintos mecanismos.

Si se superponen demasiado, se vuelve difícil distinguir:

- símbolos consecutivos.

Eso limita la transmisión.

---

# Repetidores y regeneración

## 42. Amplificar no elimina ruido

Un amplificador puede aumentar:

- señal;
- ruido.

No reconstruye necesariamente el mensaje perfecto.

---

## 43. Regeneración digital

Un sistema digital puede, dentro de ciertos límites:

1. detectar símbolos;
2. decidir cuál se transmitió;
3. generar una nueva señal limpia.

Esa posibilidad es una gran ventaja de:

- comunicaciones digitales.

---

## 44. Los errores no desaparecen mágicamente

Si el ruido o distorsión son demasiado grandes, el receptor puede interpretar el símbolo incorrecto.

Por eso se usan:

- códigos de detección;
- corrección de errores;
- redundancia.

---

# Radio, Wi‑Fi, telefonía y satélites

## 45. Diferentes sistemas, mismos principios

Radio, telefonía móvil, Wi‑Fi y enlaces satelitales usan distintas:

- frecuencias;
- anchos de banda;
- potencias;
- antenas;
- modulaciones;
- protocolos.

Pero todos deben resolver problemas de:

- propagación;
- ruido;
- codificación;
- recepción.

---

## 46. Celdas de telefonía

Una red celular divide el territorio en áreas atendidas por estaciones.

La reutilización espacial de frecuencias y la coordinación de usuarios permiten:

- compartir recursos limitados.

El nombre “celular” se relaciona con esta arquitectura.

---

## 47. Satélites

Un enlace satelital agrega grandes distancias de propagación.

Eso afecta:

- pérdida de señal;
- retardo;
- geometría;
- potencia;
- orientación de antenas.

La navegación satelital se tratará específicamente en A-15.

---

# Regulación

## 48. El espectro es un recurso coordinado

Si todos transmitieran libremente con cualquier potencia y frecuencia aparecería:

- interferencia;
- incompatibilidad.

Por eso las bandas y condiciones de uso son reguladas.

---

## 49. No fijamos bandas concretas como conocimiento permanente

Las asignaciones dependen de:

- país;
- servicio;
- normativa;
- época.

Para una aplicación real deben consultarse:

- autoridades regulatorias;
- documentación técnica vigente.

La Física de frecuencia, longitud de onda y modulación permanece.

---

# Energía de fotón — profundización

## 50. Descripción cuántica

Para un fotón:

<div class="formula-panel">
  <span class="formula-panel__label">Energía</span>
  <div class="formula-panel__formula">E = hf</div>
</div>

Mayor frecuencia implica mayor energía por fotón.

---

## 51. Radio y microondas

Las frecuencias usadas habitualmente en telecomunicaciones corresponden a radiación:

- no ionizante.

Eso significa que la energía de un fotón individual es insuficiente para ionizar átomos o moléculas por el mecanismo directo típico.

El análisis de exposición y salud se retomará en:

**A-13 — Radiaciones y salud**

---

# Experiencias seguras

## 52. Radio sin transmitir

Se puede estudiar recepción usando un receptor comercial o software que muestre:

- intensidad;
- espectro;
- canales.

No hace falta construir un transmisor de potencia.

---

## 53. Atenuación de una señal doméstica

Con un dispositivo propio puede registrarse cualitativamente cómo cambia una señal inalámbrica según:

- distancia;
- paredes;
- orientación.

No debemos concluir una ley exacta 1/r² dentro de un edificio porque hay:

- reflexiones;
- absorción;
- multitrayecto.

---

## 54. Fibra con luz visible segura

Una guía óptica educativa o una varilla transparente puede ilustrar guiado de luz usando fuentes de baja potencia diseñadas para aula.

No es necesario usar:

- láseres potentes;
- fibras de telecomunicación activas.

---

## 55. Herramientas matemáticas

Especialmente útiles:

- M-04 — Potencias y raíces;
- M-05 — Notación científica;
- M-11 — Interpretación de gráficos;
- M-17 — Logaritmos.

---

## 56. Errores frecuentes

### “La información viaja más rápido porque la portadora tiene más frecuencia”

No.

### “Gigahertz y gigabits por segundo son la misma cosa”

No.

### “Una antena amplifica creando energía”

No.

### “En espacio libre la energía se pierde”

No necesariamente: se distribuye sobre un área creciente.

### “Fibra óptica no tiene pérdidas”

Sí las tiene.

### “Digital significa inmune al ruido”

No. Puede regenerarse y corregirse mejor dentro de ciertos límites, pero puede haber errores.

### “Todas las ondas electromagnéticas producen el mismo tipo de interacción”

No. Frecuencia y energía por fotón importan.

---

## 57. Problemas graduados

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Espectro</strong>
  </div>
  <ol>
    <li>Calculá λ para f=100 MHz.</li>
    <li>Calculá λ para f=2,4 GHz.</li>
    <li>Explicá por qué al aumentar f disminuye λ.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Propagación</strong>
  </div>
  <ol>
    <li>Una fuente isotrópica ideal entrega P. ¿Cómo cambia P/(4πr²) al duplicar r?</li>
    <li>¿Por qué ese modelo puede fallar dentro de una habitación?</li>
    <li>Explicá qué es multitrayecto.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Decibeles</strong>
  </div>
  <ol>
    <li>Calculá SNR<sub>dB</sub> si P<sub>s</sub>/P<sub>n</sub>=1000.</li>
    <li>¿Qué razón de potencias corresponde a 20 dB?</li>
    <li>Explicá por qué sumar 10 dB no significa sumar 10 W.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Sistema de comunicación</strong>
  </div>
  <ol>
    <li>Dibujá un diagrama fuente → codificador → transmisor → canal → receptor → destino.</li>
    <li>Indicá dónde pueden aparecer ruido y pérdidas.</li>
    <li>Compará un enlace de radio y uno de fibra usando al menos cuatro criterios.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Explicá por qué una antena dipolo resonante suele tener dimensiones relacionadas con λ.</li>
    <li>Analizá por qué aumentar ancho de banda no garantiza por sí solo una tasa arbitraria de datos.</li>
    <li>Explicá cómo una comunicación digital puede regenerar símbolos sin eliminar la posibilidad de error.</li>
  </ol>
</div>

---

## 58. Ejemplo integrado

Una portadora tiene:

**f = 900 MHz = 9,00×10<sup>8</sup> Hz**

Su longitud de onda aproximada en vacío es:

<div class="formula-panel">
  <span class="formula-panel__label">Longitud de onda</span>
  <div class="formula-panel__formula">λ = 3,00×10<sup>8</sup> / 9,00×10<sup>8</sup> ≈ 0,333 m</div>
</div>

Un cuarto de longitud de onda es:

<div class="formula-panel">
  <span class="formula-panel__label">Referencia geométrica</span>
  <div class="formula-panel__formula">λ/4 ≈ 8,3 cm</div>
</div>

Eso no significa que toda antena para esa frecuencia mida exactamente 8,3 cm.

Muestra por qué las dimensiones de antenas están relacionadas con:

- longitud de onda;
- geometría;
- adaptación eléctrica.

---

## 59. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Cuál es la relación entre frecuencia y longitud de onda en el vacío?</summary>
  <div class="lesson-quiz__answer">
    c=λf. Para c fija, aumentar la frecuencia disminuye la longitud de onda.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Qué diferencia hay entre portadora y mensaje?</summary>
  <div class="lesson-quiz__answer">
    La portadora es una señal física de referencia, normalmente de frecuencia mayor, cuyos parámetros se modifican para representar la información del mensaje.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Por qué una señal puede variar mucho dentro de un edificio?</summary>
  <div class="lesson-quiz__answer">
    Por reflexión, absorción, difracción y multitrayecto; distintas copias pueden interferir constructiva o destructivamente.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Por qué GHz y Gbit/s no son equivalentes?</summary>
  <div class="lesson-quiz__answer">
    GHz mide frecuencia de una oscilación; Gbit/s mide tasa de información. La relación entre ambas depende del sistema de modulación, ancho de banda, ruido y codificación.
  </div>
</details>

---

## 60. Resumen

- Las telecomunicaciones codifican información en señales físicas.
- Las ondas electromagnéticas obedecen c=λf en el vacío.
- Radio, microondas, infrarrojo y luz son regiones del mismo espectro electromagnético.
- Portadora e información no son la misma cosa.
- AM, FM y otras modulaciones cambian propiedades de una portadora.
- Ancho de banda y tasa de datos están relacionados pero no son equivalentes.
- Las antenas acoplan circuitos con ondas electromagnéticas.
- Sus dimensiones suelen relacionarse con λ.
- Propagación incluye dispersión geométrica, reflexión, absorción y difracción.
- El multitrayecto puede reforzar o cancelar señales.
- El ruido limita la recuperación de información.
- Los decibeles expresan razones logarítmicas.
- La fibra óptica guía luz mediante su estructura de índices.
- Los sistemas digitales pueden regenerar símbolos dentro de ciertos márgenes.
- Las asignaciones de frecuencias dependen de regulación vigente.

---

## 61. Siguiente aplicación

**A-11 — Motores, generadores y transformadores**

Usaremos electromagnetismo para entender cómo una máquina puede:

- convertir energía eléctrica en mecánica;
- convertir energía mecánica en eléctrica;
- cambiar tensión y corriente mediante inducción.
