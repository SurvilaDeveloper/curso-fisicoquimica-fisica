---
title: "Motores, generadores y transformadores"
description: "Cómo la fuerza magnética y la inducción electromagnética permiten convertir energía eléctrica y mecánica, generar corriente alterna, transformar tensiones y comprender por qué la red transporta energía a alta tensión."
slug: "motores-generadores-y-transformadores"

course: "aplicaciones"
module: "electromagnetismo-y-tecnologia"
order: 11

level: "intermedio"
cycle: "ambos"

yearsApprox: [4, 5, 6]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - corriente-electrica-y-circuitos
  - magnetismo
  - induccion-y-electromagnetismo
  - energia-en-la-vida-cotidiana

skills:
  - motor-electrico
  - generador
  - transformador
  - fuerza-magnetica
  - torque
  - induccion
  - flujo-magnetico
  - ley-de-faraday
  - ley-de-lenz
  - corriente-alterna
  - tension-eficaz
  - relacion-de-transformacion
  - potencia
  - eficiencia
  - perdidas
  - transmision-electrica
  - efecto-joule
  - contra-fem
  - conversion-electromecanica

hasExercises: true
hasQuiz: true
hasExperiment: true

deepening: true
status: "complete"
---

## La misma máquina puede funcionar como motor o como generador

En un motor:

```text
energía eléctrica
      ↓
campos electromagnéticos
      ↓
movimiento mecánico
```

En un generador:

```text
movimiento mecánico
      ↓
cambio de flujo magnético
      ↓
energía eléctrica
```

Las dos funciones no son fenómenos desconectados.

Son manifestaciones recíprocas del:

- electromagnetismo;
- intercambio de energía entre campos, circuitos y movimiento.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Motores, generadores y transformadores no crean energía. Cambian la forma o las condiciones eléctricas bajo las que se transfiere. La ley de Lenz garantiza que la inducción se oponga al cambio que la produce, conectando el fenómeno con conservación de energía.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta aplicación deberías poder:

- explicar la fuerza sobre una carga en movimiento y sobre un conductor con corriente;
- interpretar torque sobre una espira;
- describir el principio de un motor;
- comprender por qué un motor genera una contra-fem;
- describir el principio de un generador;
- relacionar generación con cambio de flujo magnético;
- interpretar la ley de Faraday;
- interpretar la ley de Lenz;
- distinguir corriente continua y alterna;
- comprender valor eficaz como profundización;
- describir un transformador ideal;
- usar la relación de espiras y tensión;
- relacionar corrientes en un transformador ideal;
- explicar por qué alta tensión reduce pérdidas resistivas en transporte;
- reconocer pérdidas reales por efecto Joule, histéresis y corrientes parásitas;
- distinguir potencia nominal, entrada, salida y rendimiento;
- comprender que motores y generadores reales requieren sistemas de control, materiales y refrigeración.

---

# Fuerza magnética

## 1. Carga en movimiento

Una carga q que se mueve con velocidad **v** en un campo **B** experimenta:

<div class="formula-panel">
  <span class="formula-panel__label">Fuerza magnética</span>
  <div class="formula-panel__formula"><strong>F</strong> = q<strong>v</strong>×<strong>B</strong></div>
</div>

Su módulo es:

<div class="formula-panel">
  <span class="formula-panel__label">Módulo</span>
  <div class="formula-panel__formula">F = |q|vB senθ</div>
</div>

---

## 2. La fuerza es perpendicular

La fuerza magnética es perpendicular a:

- **v**;
- **B**.

Por eso, sobre una carga puntual, el campo magnético por sí solo no realiza trabajo mecánico directo:

<div class="formula-panel">
  <span class="formula-panel__label">Potencia instantánea</span>
  <div class="formula-panel__formula"><strong>F</strong>·<strong>v</strong> = 0</div>
</div>

La energía de una máquina real se intercambia a través del circuito y del campo electromagnético completo.

---

## 3. Conductor con corriente

Para un tramo recto de longitud vectorial **L**:

<div class="formula-panel">
  <span class="formula-panel__label">Conductor</span>
  <div class="formula-panel__formula"><strong>F</strong> = I<strong>L</strong>×<strong>B</strong></div>
</div>

Si L y B son perpendiculares:

**F = ILB**

---

# Torque y motor

## 4. Una espira en un campo

Fuerzas sobre lados opuestos de una espira pueden formar un par.

Eso produce:

- torque;
- tendencia a rotar.

---

## 5. Torque sobre una espira ideal

Para N vueltas:

<div class="formula-panel">
  <span class="formula-panel__label">Torque</span>
  <div class="formula-panel__formula">τ = NIAB senθ</div>
</div>

donde:

- I es corriente;
- A área de cada espira;
- B campo;
- θ ángulo entre la normal de la espira y B.

---

## 6. Momento dipolar magnético

Definimos:

<div class="formula-panel">
  <span class="formula-panel__label">Dipolo magnético</span>
  <div class="formula-panel__formula"><strong>μ</strong> = NI A<strong>n̂</strong></div>
</div>

y:

<div class="formula-panel">
  <span class="formula-panel__label">Torque</span>
  <div class="formula-panel__formula"><strong>τ</strong> = <strong>μ</strong>×<strong>B</strong></div>
</div>

---

## 7. Motor elemental

Un motor necesita mantener un torque útil durante la rotación.

Eso puede lograrse mediante:

- conmutación;
- campos variables;
- electrónica;
- múltiples bobinas.

El diseño real depende del tipo de motor.

---

## 8. Motor de corriente continua con escobillas — modelo

En un modelo escolar:

- rotor con bobina;
- imanes o estator;
- conmutador;
- escobillas.

El conmutador invierte la conexión de la bobina para mantener el torque en el sentido deseado.

---

## 9. Motores sin escobillas

En un motor brushless, la conmutación se realiza electrónicamente.

Sensores o algoritmos coordinan:

- corrientes;
- posición del rotor;
- campos.

El principio sigue basado en interacción electromagnética.

---

## 10. Motor de inducción — panorama

En un motor de inducción, un campo magnético giratorio del estator induce corrientes en el rotor.

La interacción produce:

- torque.

Es una aplicación conjunta de:

- corriente alterna;
- inducción;
- Lenz.

---

# Contra-fem

## 11. Un motor que gira también genera

Al girar una bobina dentro de un campo, cambia su flujo.

Por Faraday aparece una fem inducida que se opone a la tensión que impulsa el motor.

Se llama:

- contra-fem.

---

## 12. Ley de Faraday

<div class="formula-panel">
  <span class="formula-panel__label">Faraday</span>
  <div class="formula-panel__formula">ε = −N dΦ<sub>B</sub>/dt</div>
</div>

El signo negativo corresponde a:

- ley de Lenz.

---

## 13. Consecuencia práctica

Al arrancar un motor:

- velocidad pequeña;
- contra-fem pequeña.

La corriente puede ser mayor que en régimen.

Al aumentar la velocidad:

- aumenta contra-fem;
- cambia la corriente.

Por eso un motor no se comporta como una simple resistencia fija.

---

# Generadores

## 14. Generar una fem

Si hacemos girar mecánicamente una bobina en un campo:

- cambia Φ<sub>B</sub>;
- aparece ε.

La energía eléctrica obtenida proviene del:

- trabajo mecánico aplicado.

---

## 15. Flujo en una espira rotante ideal

Para una espira de área A en B uniforme:

<div class="formula-panel">
  <span class="formula-panel__label">Flujo</span>
  <div class="formula-panel__formula">Φ<sub>B</sub> = BA cos(ωt)</div>
</div>

---

## 16. Fem sinusoidal ideal

Aplicando Faraday:

<div class="formula-panel">
  <span class="formula-panel__label">Generador ideal</span>
  <div class="formula-panel__formula">ε(t) = NBAω sen(ωt)</div>
</div>

Así aparece naturalmente una fem:

- alterna.

---

## 17. Si conectamos una carga

Cuando el generador entrega corriente, la ley de Lenz implica un torque que se opone al movimiento impulsor.

Para mantener la velocidad hay que aportar:

- trabajo mecánico continuo.

---

## 18. Más carga eléctrica, más esfuerzo mecánico

Si el generador entrega más potencia eléctrica, la máquina primaria debe aportar más potencia mecánica, además de cubrir:

- pérdidas.

No hay generación de energía “gratis”.

---

# Corriente alterna

## 19. Señal sinusoidal

Una tensión alterna ideal puede escribirse:

<div class="formula-panel">
  <span class="formula-panel__label">CA</span>
  <div class="formula-panel__formula">V(t) = V<sub>máx</sub> sen(ωt)</div>
</div>

---

## 20. Frecuencia

<div class="formula-panel">
  <span class="formula-panel__label">Frecuencia</span>
  <div class="formula-panel__formula">f = ω/(2π)</div>
</div>

En la red domiciliaria argentina la frecuencia nominal es:

**50 Hz**

---

## 21. Valor eficaz

Para una sinusoide:

<div class="formula-panel">
  <span class="formula-panel__label">RMS</span>
  <div class="formula-panel__formula">V<sub>ef</sub> = V<sub>máx</sub>/√2</div>
</div>

El valor eficaz se define por equivalencia de potencia resistiva con una tensión continua.

---

## 22. No confundir máximo con eficaz

Una señal de:

**220 V eficaces**

tiene un valor máximo mayor:

<div class="formula-panel">
  <span class="formula-panel__label">Máximo ideal sinusoidal</span>
  <div class="formula-panel__formula">V<sub>máx</sub> ≈ √2·220 V ≈ 311 V</div>
</div>

Esto refuerza por qué la red domiciliaria no debe manipularse como experimento.

---

# Transformadores

## 23. Dos bobinas acopladas

Un transformador básico tiene:

- bobina primaria;
- núcleo magnético;
- bobina secundaria.

Una corriente alterna en el primario produce un flujo variable que induce fem en el secundario.

---

## 24. Relación de tensiones ideal

<div class="formula-panel">
  <span class="formula-panel__label">Transformador ideal</span>
  <div class="formula-panel__formula">V<sub>s</sub>/V<sub>p</sub> = N<sub>s</sub>/N<sub>p</sub></div>
</div>

---

## 25. Elevador

Si:

**N<sub>s</sub> > N<sub>p</sub>**

entonces idealmente:

**V<sub>s</sub> > V<sub>p</sub>**

Es un transformador:

- elevador.

---

## 26. Reductor

Si:

**N<sub>s</sub> < N<sub>p</sub>**

entonces:

**V<sub>s</sub> < V<sub>p</sub>**

---

## 27. Potencia ideal

En un transformador ideal:

<div class="formula-panel">
  <span class="formula-panel__label">Conservación</span>
  <div class="formula-panel__formula">P<sub>p</sub> = P<sub>s</sub></div>
</div>

y aproximadamente:

<div class="formula-panel">
  <span class="formula-panel__label">Potencia eléctrica</span>
  <div class="formula-panel__formula">V<sub>p</sub>I<sub>p</sub> = V<sub>s</sub>I<sub>s</sub></div>
</div>

---

## 28. Relación de corrientes

Combinando con la relación de espiras:

<div class="formula-panel">
  <span class="formula-panel__label">Corriente ideal</span>
  <div class="formula-panel__formula">I<sub>s</sub>/I<sub>p</sub> = N<sub>p</sub>/N<sub>s</sub></div>
</div>

Subir tensión reduce corriente para igual potencia.

---

# Transporte de energía

## 29. Pérdidas resistivas

En una línea con resistencia R:

<div class="formula-panel">
  <span class="formula-panel__label">Joule</span>
  <div class="formula-panel__formula">P<sub>pérdida</sub> = I²R</div>
</div>

---

## 30. Para transmitir la misma potencia

Aproximadamente:

<div class="formula-panel">
  <span class="formula-panel__label">Potencia</span>
  <div class="formula-panel__formula">P ≈ VI</div>
</div>

Si aumentamos V, podemos reducir I.

Como las pérdidas dependen de I²:

- disminuir la corriente es muy valioso.

---

## 31. Ejemplo de escalamiento

Si, para la misma potencia, la corriente se reduce a la mitad:

<div class="formula-panel">
  <span class="formula-panel__label">Pérdida</span>
  <div class="formula-panel__formula">P′<sub>pérdida</sub> = (I/2)²R = P<sub>pérdida</sub>/4</div>
</div>

---

## 32. Por qué no usar tensión infinita

Aumentar tensión también trae dificultades:

- aislación;
- distancias;
- descargas;
- equipos;
- seguridad;
- costos.

La ingeniería busca un compromiso.

---

# Pérdidas reales

## 33. Cobre

Las bobinas tienen resistencia.

Eso produce:

- calentamiento I²R.

---

## 34. Corrientes parásitas

Un flujo variable puede inducir corrientes dentro del propio núcleo conductor.

Esas corrientes producen:

- calentamiento.

Una técnica de reducción es usar núcleos:

- laminados;

en aplicaciones apropiadas.

---

## 35. Histéresis

Los materiales ferromagnéticos no responden sin pérdidas cuando su magnetización cambia cíclicamente.

Parte de la energía termina como:

- energía interna.

---

## 36. Pérdidas mecánicas

Motores y generadores también tienen:

- fricción;
- rodamientos;
- ventilación;
- resistencia del aire.

---

## 37. Rendimiento

<div class="formula-panel">
  <span class="formula-panel__label">Rendimiento</span>
  <div class="formula-panel__formula">η = P<sub>salida</sub>/P<sub>entrada</sub></div>
</div>

Un equipo real tiene:

**η<1**

si las fronteras están definidas correctamente.

---

# Potencia y torque

## 38. Potencia rotacional

Para un eje que gira:

<div class="formula-panel">
  <span class="formula-panel__label">Potencia mecánica</span>
  <div class="formula-panel__formula">P = τω</div>
</div>

Esto conecta:

- torque;
- velocidad angular;
- potencia.

---

## 39. Mucho torque no implica mucha potencia por sí solo

Si ω es pequeña:

- P puede ser pequeña;

aunque τ sea grande.

Torque y potencia no son:

- sinónimos.

---

## 40. Caja reductora

Un sistema de engranajes puede cambiar:

- torque;
- velocidad angular.

Idealmente no crea potencia.

En la práctica hay:

- pérdidas.

---

# Frenado regenerativo

## 41. Motor como generador

Un motor eléctrico puede operar como generador cuando el movimiento mecánico fuerza su rotor.

En frenado regenerativo:

```text
energía cinética del vehículo
        ↓
máquina eléctrica
        ↓
energía eléctrica
        ↓
batería
```

---

## 42. No se recupera todo

Hay pérdidas en:

- máquina;
- electrónica;
- batería;
- neumáticos;
- aire.

Además, la batería puede limitar:

- potencia aceptada;
- estado de carga.

---

# Experimentos seguros

## 43. Motor de baja tensión

Puede estudiarse un pequeño motor educativo alimentado por:

- pilas;
- fuente de muy baja tensión diseñada para aula.

Se puede observar:

- sentido de giro;
- relación con polaridad;
- cambio de velocidad con tensión dentro de los límites del dispositivo.

---

## 44. Motor como generador

Girando manualmente un pequeño motor de juguete desconectado de la red puede medirse una tensión pequeña.

Esto ilustra la reversibilidad aproximada:

- motor ↔ generador.

---

## 45. Transformador: no usar la red

Los experimentos con transformadores deben hacerse sólo con:

- equipos educativos;
- tensiones extra-bajas;
- aislamiento apropiado.

No se deben bobinar dispositivos caseros conectados a 220 V.

---

## 46. Inducción segura

Una bobina educativa, un imán y un instrumento sensible permiten observar:

- señal al acercar;
- señal opuesta al alejar;
- ausencia de señal con imán quieto.

No requiere tensión de red.

---

# Aplicaciones

## 47. Ventiladores

Un motor eléctrico convierte energía eléctrica en:

- rotación;
- movimiento de aire.

Parte termina como:

- calor;
- sonido.

---

## 48. Ascensores

Motores controlados producen torque.

Algunos sistemas pueden recuperar parte de la energía en determinadas fases mediante:

- regeneración.

---

## 49. Vehículos eléctricos

Utilizan:

- batería;
- inversor;
- motor;
- control;
- sistemas de refrigeración.

El motor es sólo una parte del tren de potencia.

---

## 50. Generación eléctrica

Turbinas impulsadas por:

- agua;
- vapor;
- viento;
- otros medios;

pueden mover generadores.

La fuente primaria cambia.

El principio electromagnético de generación puede ser similar.

---

## 51. Transformadores de red

Permiten modificar niveles de tensión para:

- generación;
- transmisión;
- distribución;
- uso final.

Son fundamentales para redes de corriente alterna.

---

## 52. Electrónica de potencia

Muchos sistemas modernos cambian tensiones y frecuencias mediante dispositivos electrónicos.

Por eso no todo cambio de tensión se hace con:

- transformadores de 50 Hz tradicionales.

---

## 53. Herramientas matemáticas

Especialmente útiles:

- M-03 — Porcentajes;
- M-06 — Despeje de fórmulas;
- M-14 — Trigonometría;
- M-15 — Vectores y componentes.

---

## 54. Errores frecuentes

### “Un motor consume corriente y crea movimiento”

Convierte energía; la carga eléctrica no se “consume”.

### “Un generador crea energía”

No. Convierte trabajo mecánico en energía eléctrica.

### “Un transformador eleva tensión y también corriente sin costo”

No. En el ideal, subir tensión reduce corriente para conservar potencia.

### “La ley de Lenz roba energía”

No. Es precisamente consistente con conservación de energía.

### “Alta tensión significa necesariamente alta potencia”

No. P depende también de corriente y condiciones del circuito.

### “La red de 220 V sirve para hacer experimentos”

No.

---

## 55. Problemas graduados

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Motor</strong>
  </div>
  <ol>
    <li>Un conductor de 0,20 m lleva 3 A perpendicular a B=0,50 T. Calculá F=ILB.</li>
    <li>Explicá qué ocurre si el conductor queda paralelo a B.</li>
    <li>¿Por qué una espira puede experimentar torque aunque la fuerza neta sea pequeña?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Generador</strong>
  </div>
  <ol>
    <li>Indicá tres maneras de cambiar un flujo BAcosθ.</li>
    <li>Explicá el signo negativo de Faraday mediante Lenz.</li>
    <li>¿De dónde proviene la energía eléctrica generada?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Transformador</strong>
  </div>
  <ol>
    <li>Un transformador ideal tiene N<sub>p</sub>=1000, N<sub>s</sub>=100 y V<sub>p</sub>=220 V. Hallá V<sub>s</sub>.</li>
    <li>Si la potencia secundaria es 110 W, calculá I<sub>s</sub>.</li>
    <li>Estimá I<sub>p</sub> ideal.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Transmisión</strong>
  </div>
  <ol>
    <li>Una línea transporta la misma potencia con corrientes I y I/10. Compará pérdidas I²R.</li>
    <li>Explicá por qué se eleva la tensión para transporte.</li>
    <li>Indicá dos límites prácticos a aumentar indefinidamente la tensión.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Derivá ε(t)=NBAωsen(ωt) desde Φ=BAcos(ωt).</li>
    <li>Explicá el origen físico de la contra-fem en un motor.</li>
    <li>Construí un balance de potencia de una máquina incluyendo pérdidas eléctricas, magnéticas y mecánicas.</li>
  </ol>
</div>

---

## 56. Ejemplo integrado: transmisión

Queremos transmitir:

**P = 100 kW**

### Caso 1

Tensión:

**V = 1000 V**

Corriente ideal aproximada:

<div class="formula-panel">
  <span class="formula-panel__label">Corriente</span>
  <div class="formula-panel__formula">I = P/V = 100 A</div>
</div>

Si la resistencia total equivalente de línea fuera:

**R = 1 Ω**

las pérdidas serían:

<div class="formula-panel">
  <span class="formula-panel__label">Joule</span>
  <div class="formula-panel__formula">P<sub>J</sub> = 100²·1 = 10 kW</div>
</div>

### Caso 2

Elevamos la tensión a:

**10 000 V**

Para igual potencia:

**I≈10 A**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Joule</span>
  <div class="formula-panel__formula">P<sub>J</sub> = 10²·1 = 100 W</div>
</div>

Una reducción de corriente por factor 10 redujo las pérdidas resistivas por factor:

**100**

en este modelo.

---

## 57. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Cuál es la diferencia esencial entre motor y generador?</summary>
  <div class="lesson-quiz__answer">
    El motor convierte energía eléctrica en mecánica; el generador convierte trabajo mecánico en energía eléctrica, aunque una misma máquina puede operar de ambas formas en ciertas condiciones.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Qué significa el signo negativo en la ley de Faraday?</summary>
  <div class="lesson-quiz__answer">
    Expresa la ley de Lenz: la respuesta inducida se orienta de modo que se opone al cambio de flujo que la produce.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. En un transformador ideal elevador, ¿qué ocurre con la corriente?</summary>
  <div class="lesson-quiz__answer">
    Disminuye en la proporción inversa a la tensión para conservar aproximadamente la potencia ideal.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Por qué una red transmite a alta tensión?</summary>
  <div class="lesson-quiz__answer">
    Para una potencia dada, mayor tensión permite menor corriente, lo que reduce las pérdidas resistivas I²R.
  </div>
</details>

---

## 58. Resumen

- Una corriente en un campo magnético puede experimentar fuerza.
- Una espira puede experimentar torque τ=NIABsenθ.
- Un motor convierte energía eléctrica en mecánica.
- Al girar, un motor desarrolla contra-fem.
- Un generador usa inducción para convertir trabajo mecánico en energía eléctrica.
- Faraday relaciona fem con cambio de flujo magnético.
- Lenz garantiza oposición al cambio y coherencia con conservación de energía.
- Una bobina rotante ideal puede generar tensión alterna sinusoidal.
- Un transformador cambia tensión mediante inducción mutua.
- Idealmente V<sub>s</sub>/V<sub>p</sub>=N<sub>s</sub>/N<sub>p</sub>.
- En el ideal, aumentar tensión disminuye corriente para conservar potencia.
- Las pérdidas de línea escalan como I²R.
- Máquinas reales pierden energía por efectos eléctricos, magnéticos y mecánicos.
- La potencia rotacional cumple P=τω.
- El frenado regenerativo utiliza una máquina como generador.
- La red domiciliaria no debe utilizarse para experimentos.

---

## 59. Siguiente aplicación

**A-12 — Física médica**

La próxima aplicación mostrará cómo ondas, campos, radiación y detectores permiten:

- observar;
- medir;
- diagnosticar;
- tratar;

sin confundir la explicación física con una indicación médica.
