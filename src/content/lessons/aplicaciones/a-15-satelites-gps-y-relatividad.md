---
title: "Satélites, GPS y relatividad"
description: "Cómo la gravitación, las órbitas, el tiempo de vuelo de señales, los relojes atómicos y las correcciones relativistas permiten determinar posición y tiempo mediante navegación satelital."
slug: "satelites-gps-y-relatividad"

course: "aplicaciones"
module: "espacio-y-relatividad"
order: 15

level: "avanzado-secundario"
cycle: "orientado"

yearsApprox: [5, 6]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - gravitacion
  - relatividad-especial
  - telecomunicaciones-y-espectro-electromagnetico
  - sistemas-de-ecuaciones-sencillos

skills:
  - satelite
  - orbita
  - velocidad-orbital
  - periodo-orbital
  - navegacion-satelital
  - gps
  - gnss
  - tiempo-de-vuelo
  - pseudodistancia
  - trilateracion
  - reloj-atomico
  - sincronizacion
  - relatividad-especial
  - relatividad-general
  - dilatacion-temporal
  - potencial-gravitatorio
  - correccion-relativista
  - efemerides
  - ionosfera
  - troposfera
  - error-de-reloj
  - geometria-de-satelites

hasExercises: true
hasQuiz: true
hasExperiment: true

deepening: true
status: "complete"
---

## El punto azul del teléfono depende de Einstein

Un receptor de navegación satelital mide tiempos con enorme precisión.

La señal viaja aproximadamente a la velocidad de la luz.

Un error temporal de apenas:

**1 μs**

corresponde a una distancia de:

<div class="formula-panel">
  <span class="formula-panel__label">Error equivalente</span>
  <div class="formula-panel__formula">c·1 μs ≈ 300 m</div>
</div>

Por eso diferencias minúsculas entre relojes importan muchísimo.

Los relojes de los satélites no avanzan al mismo ritmo que relojes equivalentes en la superficie terrestre.

Intervienen:

- relatividad especial por el movimiento;
- relatividad general por la diferencia de potencial gravitatorio.

Sin corregir estos efectos, el sistema acumularía errores rápidamente.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Un sistema GNSS determina posición midiendo tiempos de propagación de señales desde satélites cuyas órbitas y relojes deben conocerse con gran precisión. La relatividad no es una corrección filosófica: modifica directamente la tasa de los relojes y debe incorporarse al sistema de navegación.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta aplicación deberías poder:

- explicar por qué un satélite puede permanecer en órbita sin “flotar sin gravedad”;
- relacionar gravedad y aceleración centrípeta;
- calcular velocidad orbital circular ideal;
- relacionar radio orbital y período;
- distinguir órbita baja, media y geoestacionaria de manera conceptual;
- comprender qué transmite un satélite de navegación;
- explicar el tiempo de vuelo de una señal;
- definir pseudodistancia;
- distinguir trilateración de triangulación;
- comprender por qué un receptor necesita resolver también su error de reloj;
- explicar por qué hacen falta al menos cuatro señales satelitales en el modelo 3D básico;
- comprender el papel de relojes atómicos;
- explicar la corrección por relatividad especial;
- explicar cualitativamente la corrección gravitatoria de relatividad general;
- interpretar el efecto neto aproximado de los relojes GPS;
- reconocer correcciones adicionales por rotación terrestre y atmósfera;
- comprender que “GPS” es un sistema concreto dentro de una familia más amplia de GNSS.

---

# Órbitas

## 1. Un satélite está cayendo

Un satélite en órbita no está fuera del alcance de la gravedad.

Está en:

- caída libre.

La gravedad curva continuamente su trayectoria mientras su velocidad tangencial hace que “caiga alrededor” de la Tierra.

---

## 2. Gravedad

Para masa m a distancia r del centro terrestre:

<div class="formula-panel">
  <span class="formula-panel__label">Gravitación</span>
  <div class="formula-panel__formula">F = GMm/r²</div>
</div>

---

## 3. Órbita circular ideal

La aceleración centrípeta requerida es:

<div class="formula-panel">
  <span class="formula-panel__label">Centrípeta</span>
  <div class="formula-panel__formula">a<sub>c</sub> = v²/r</div>
</div>

Igualamos gravedad y dinámica circular:

<div class="formula-panel">
  <span class="formula-panel__label">Órbita</span>
  <div class="formula-panel__formula">GM/r² = v²/r</div>
</div>

---

## 4. Velocidad orbital

<div class="formula-panel">
  <span class="formula-panel__label">Velocidad circular</span>
  <div class="formula-panel__formula">v = √(GM/r)</div>
</div>

A mayor r:

- menor velocidad orbital circular.

---

## 5. Período

<div class="formula-panel">
  <span class="formula-panel__label">Período</span>
  <div class="formula-panel__formula">T = 2πr/v</div>
</div>

Sustituyendo v:

<div class="formula-panel">
  <span class="formula-panel__label">Kepler</span>
  <div class="formula-panel__formula">T² = 4π²r³/(GM)</div>
</div>

---

## 6. Más lejos, período mayor

Como:

**T²∝r³**

un satélite más lejano tarda más en completar:

- una órbita.

---

## 7. Órbita no significa ausencia de peso gravitatorio

La gravedad sigue actuando.

La sensación de ingravidez aparece porque satélite y objetos en su interior caen juntos.

Es:

- caída libre;
- no ausencia de campo.

---

# Tipos de órbita

## 8. Órbita terrestre baja

Los satélites LEO están relativamente cerca de la Tierra.

Tienen:

- períodos cortos;
- velocidades orbitales altas.

Se usan para:

- observación;
- comunicaciones;
- ciencia;
- estaciones espaciales.

---

## 9. Órbita media

Los satélites de muchos sistemas de navegación operan en órbitas medias.

Eso ofrece un compromiso entre:

- cobertura;
- cantidad de satélites;
- potencia;
- geometría.

---

## 10. Geoestacionaria

Un satélite geoestacionario:

- orbita sobre el ecuador;
- en el sentido de rotación terrestre;
- con un período igual al día sideral.

Desde la superficie parece permanecer sobre la misma:

- longitud geográfica.

---

## 11. No cualquier órbita de 24 h es geoestacionaria

También debe cumplir:

- circularidad aproximada;
- plano ecuatorial;
- sentido adecuado.

---

# Navegación satelital

## 12. GPS y GNSS

**GPS** es un sistema de navegación satelital específico.

El término más general es:

**GNSS**

que incluye diferentes constelaciones globales o regionales.

---

## 13. Qué transmite un satélite

Una señal de navegación incluye información para que el receptor conozca, entre otras cosas:

- tiempo de transmisión;
- datos orbitales;
- identificación;
- parámetros necesarios para el cálculo.

---

## 14. Tiempo de vuelo

Si una señal se transmite en t<sub>e</sub> y llega en t<sub>r</sub>:

<div class="formula-panel">
  <span class="formula-panel__label">Tiempo de vuelo</span>
  <div class="formula-panel__formula">Δt = t<sub>r</sub> − t<sub>e</sub></div>
</div>

En un modelo ideal:

<div class="formula-panel">
  <span class="formula-panel__label">Distancia</span>
  <div class="formula-panel__formula">ρ = cΔt</div>
</div>

---

## 15. ¿Por qué se llama pseudodistancia?

El reloj del receptor no suele estar perfectamente sincronizado con los relojes atómicos del sistema.

Entonces la medida contiene un error común de reloj.

Por eso hablamos de:

- pseudodistancia.

---

## 16. Modelo de pseudodistancia

Para el satélite i:

<div class="formula-panel">
  <span class="formula-panel__label">Pseudodistancia</span>
  <div class="formula-panel__formula">ρ<sub>i</sub> = r<sub>i</sub> + cδt + correcciones</div>
</div>

donde:

- r<sub>i</sub> es distancia geométrica;
- δt error de reloj del receptor.

---

# Trilateración

## 17. Una distancia define una esfera

Si conocemos la distancia r a un satélite de posición conocida, el receptor debe estar sobre una esfera de:

- radio r.

---

## 18. Dos satélites

Dos esferas se intersectan idealmente en:

- un círculo.

---

## 19. Tres satélites

Tres esferas pueden producir:

- dos soluciones geométricas;

y restricciones adicionales eliminan normalmente una.

Pero todavía queda el problema de:

- reloj del receptor.

---

## 20. Cuatro incógnitas

En 3D tenemos:

- x;
- y;
- z;
- δt.

Por eso el modelo básico requiere al menos:

- cuatro pseudodistancias independientes.

---

## 21. Trilateración, no triangulación

### Trilateración

Usa:

- distancias.

### Triangulación

Usa principalmente:

- ángulos.

GNSS se entiende mejor como un problema de:

- trilateración/pseudodistancias.

---

## 22. Más satélites

Con más de cuatro satélites se puede:

- mejorar robustez;
- estimar errores;
- usar ajustes por mínimos cuadrados;
- elegir mejor geometría.

---

# Relojes

## 23. Por qué importan tanto

La señal recorre aproximadamente:

**300 000 km por segundo**

Un error de:

**1 ns**

equivale aproximadamente a:

<div class="formula-panel">
  <span class="formula-panel__label">Escala</span>
  <div class="formula-panel__formula">c·1 ns ≈ 0,30 m</div>
</div>

---

## 24. Relojes atómicos

Los satélites utilizan relojes atómicos cuya frecuencia se referencia a:

- transiciones atómicas.

Ofrecen gran:

- estabilidad;
- precisión.

---

## 25. El receptor no necesita un reloj atómico equivalente

Al resolver δt junto con x,y,z, el receptor puede usar un reloj menos preciso.

La cuarta señal permite estimar:

- ese sesgo temporal.

---

# Relatividad especial

## 26. Relojes en movimiento

Según relatividad especial, un reloj en movimiento respecto de un marco inercial avanza más lentamente.

El factor es:

<div class="formula-panel">
  <span class="formula-panel__label">Lorentz</span>
  <div class="formula-panel__formula">γ = 1/√(1−v²/c²)</div>
</div>

---

## 27. Aproximación para v≪c

Para velocidades orbitales mucho menores que c, el efecto es pequeño pero medible.

Los relojes de satélites GPS, por su movimiento, tienden a retrasarse respecto de relojes sobre la Tierra en aproximadamente:

**7 μs por día**

por el efecto cinemático de relatividad especial.

---

# Relatividad general

## 28. Gravedad y tiempo

Relatividad general predice que relojes situados en diferentes potenciales gravitatorios no avanzan al mismo ritmo.

Más alto en el campo terrestre, donde el potencial gravitatorio es menos profundo, un reloj tiende a avanzar:

- más rápido.

---

## 29. Efecto gravitatorio en GPS

Para las órbitas GPS, el efecto gravitatorio hace que los relojes satelitales avancen aproximadamente:

**45 μs por día más rápido**

que relojes en la superficie.

---

## 30. Efecto neto

Combinando aproximadamente:

- especial: −7 μs/día;
- general: +45 μs/día;

queda:

<div class="formula-panel">
  <span class="formula-panel__label">Neto aproximado</span>
  <div class="formula-panel__formula">Δt ≈ +38 μs/día</div>
</div>

---

## 31. 38 μs parece muy poco

Pero multiplicado por c:

<div class="formula-panel">
  <span class="formula-panel__label">Escala espacial</span>
  <div class="formula-panel__formula">c·38 μs ≈ 11,4 km</div>
</div>

No significa que un receptor acumule simplemente 11,4 km de error diario porque el sistema implementa correcciones.

Muestra la enorme escala espacial asociada a:

- pequeños errores temporales.

---

## 32. Relatividad no es opcional

Los algoritmos y relojes del sistema incorporan correcciones relativistas.

Sin ellas, la navegación precisa no funcionaría adecuadamente.

---

## 33. A-15 introduce relatividad general sin desarrollarla completa

F-30 estudió:

- relatividad especial.

La corrección gravitatoria de GPS requiere:

- relatividad general.

Aquí la usamos como aplicación física, sin derivar las ecuaciones completas de Einstein.

---

# Rotación terrestre

## 34. La Tierra gira mientras viaja la señal

Durante el tiempo que la onda viaja desde el satélite hasta el receptor:

- la Tierra rota.

Esto debe incorporarse al sistema de coordenadas y al cálculo.

---

## 35. Efecto Sagnac — profundización

En un marco rotante, tiempos de propagación pueden depender del sentido y geometría de recorrido.

La corrección asociada a la rotación terrestre se denomina a menudo:

- corrección Sagnac.

---

# Atmósfera

## 36. La señal no viaja todo el camino en vacío

Atraviesa:

- ionosfera;
- troposfera.

La velocidad y trayectoria efectiva sufren:

- retrasos;
- refracción.

---

## 37. Ionosfera

El plasma ionosférico produce un retraso que depende de:

- frecuencia.

Los receptores de múltiples frecuencias pueden usar esa dependencia para estimar y reducir:

- error ionosférico.

---

## 38. Troposfera

La atmósfera neutra también retrasa la señal.

Influyen:

- presión;
- temperatura;
- humedad;
- geometría.

---

# Órbitas reales

## 39. El satélite no sigue una circunferencia perfecta

Las órbitas son perturbadas por:

- forma no esférica de la Tierra;
- Luna;
- Sol;
- presión de radiación solar;
- otras fuerzas.

---

## 40. Efemérides

El receptor necesita datos que describan con suficiente precisión:

- dónde estaba cada satélite;

al transmitir su señal.

Esos datos orbitales se llaman:

- efemérides.

---

## 41. Error orbital

Si la posición estimada del satélite es incorrecta, la esfera geométrica se centra en el lugar equivocado.

Eso produce error de:

- posición.

---

# Geometría de satélites

## 42. Cuatro satélites pueden ser insuficientes geométricamente

Aunque matemáticamente haya cuatro ecuaciones, si los satélites aparecen agrupados en una zona del cielo, pequeños errores de distancia pueden producir:

- grandes errores de posición.

---

## 43. Dilución geométrica de precisión

Una geometría con satélites bien distribuidos suele ser mejor.

Esta sensibilidad se cuantifica mediante magnitudes de:

- DOP;
- dilución de precisión.

---

# Exactitud

## 44. Fuentes de error

Entre las fuentes aparecen:

- relojes;
- órbitas;
- ionosfera;
- troposfera;
- multitrayecto;
- ruido;
- geometría;
- obstrucciones.

---

## 45. Multitrayecto

En ciudades, una señal puede reflejarse en:

- edificios;
- suelo;
- vehículos.

Si el receptor interpreta un camino reflejado como directo, estima una distancia:

- demasiado grande.

---

## 46. Bosques y edificios

Materiales pueden:

- atenuar;
- bloquear;
- reflejar.

Por eso la calidad de posición cambia con:

- entorno.

---

# Más allá de posición

## 47. Tiempo de precisión

GNSS también distribuye una referencia temporal muy precisa.

Se usa en:

- telecomunicaciones;
- redes eléctricas;
- ciencia;
- sincronización industrial.

---

## 48. Navegación no es sólo “mapas”

El teléfono combina GNSS con:

- mapas;
- sensores inerciales;
- redes;
- algoritmos.

La posición del receptor es sólo una parte de la experiencia de navegación.

---

# Experiencia segura

## 49. Analizar datos del teléfono

Sin manipular hardware se puede registrar:

- número de satélites;
- precisión estimada;
- cambio al pasar de cielo abierto a interior.

Después se puede discutir:

- geometría;
- bloqueo;
- multitrayecto.

---

## 50. Modelo de trilateración en papel

Dibujá en 2D tres “satélites” de coordenadas conocidas.

Trazá círculos de radios conocidos.

Buscá su intersección.

Esto modela el concepto sin usar:

- señales reales;
- equipos especiales.

---

## 51. Simulación del error de reloj

Agregá la misma distancia ficticia a todas las mediciones.

Observá que las circunferencias dejan de intersectarse correctamente.

Esto representa cualitativamente:

- cδt.

---

## 52. Herramientas matemáticas

Especialmente útiles:

- M-04 — Potencias y raíces;
- M-08 — Sistemas de ecuaciones;
- M-13 — Pitágoras;
- M-15 — Vectores;
- M-16 — Geometría.

---

## 53. Errores frecuentes

### “El satélite está fuera de la gravedad”

No. Está en caída libre orbital.

### “GPS usa triangulación”

Más correctamente usa pseudodistancias y trilateración.

### “Tres satélites siempre alcanzan”

En 3D también debemos resolver el error de reloj del receptor, por lo que el modelo básico necesita cuatro señales.

### “Relatividad especial hace que los relojes satelitales vayan más rápido”

No: por movimiento, van más lento.

### “La gravedad hace que todos los relojes vayan más lento en altura”

En GPS, el reloj orbital está en un potencial gravitatorio menos profundo y avanza más rápido que uno en superficie.

### “Las correcciones se cancelan”

No completamente: el efecto neto es del orden de +38 μs/día para GPS.

### “La señal viaja exactamente a c desde satélite hasta receptor”

No durante todo el trayecto: atraviesa atmósfera y debe modelarse el retraso.

---

## 54. Problemas graduados

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Tiempo de vuelo</strong>
  </div>
  <ol>
    <li>¿Qué distancia recorre la luz en 1 ms?</li>
    <li>¿Qué error de distancia corresponde a 10 ns?</li>
    <li>Explicá por qué la sincronización temporal es crítica.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Órbita</strong>
  </div>
  <ol>
    <li>Derivá v=√(GM/r) para una órbita circular.</li>
    <li>Explicá por qué v disminuye al aumentar r.</li>
    <li>Usá T=2πr/v para relacionar período y radio.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Posicionamiento</strong>
  </div>
  <ol>
    <li>Explicá por qué una distancia define una esfera.</li>
    <li>Enumerá las cuatro incógnitas del modelo GNSS 3D básico.</li>
    <li>Explicá la diferencia entre distancia geométrica y pseudodistancia.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Relatividad</strong>
  </div>
  <ol>
    <li>Combiná −7 μs/día y +45 μs/día.</li>
    <li>Multiplicá el resultado por c y expresá la escala equivalente en kilómetros.</li>
    <li>Explicá por qué no corresponde interpretar ese valor como un error real acumulado de un sistema que ya aplica correcciones.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Construí un sistema de ecuaciones de pseudodistancia con incógnitas x,y,z,δt.</li>
    <li>Explicá por qué la geometría de satélites afecta la sensibilidad a errores.</li>
    <li>Analizá por qué un sistema de navegación precisa es una aplicación simultánea de Newton, Maxwell, Einstein, relojes atómicos y procesamiento numérico.</li>
  </ol>
</div>

---

## 55. Ejemplo integrado

Una señal tarda aproximadamente:

**70 ms**

en llegar al receptor.

Distancia aparente ideal:

<div class="formula-panel">
  <span class="formula-panel__label">Pseudodistancia idealizada</span>
  <div class="formula-panel__formula">ρ ≈ 3,00×10<sup>8</sup>·70×10<sup>−3</sup> ≈ 2,10×10<sup>7</sup> m</div>
</div>

es decir:

**21 000 km**

Pero para convertir esa medida en posición debemos corregir o estimar:

- reloj del receptor;
- posición satelital;
- relatividad;
- atmósfera;
- rotación terrestre;
- multitrayecto.

Una sola distancia no da una posición.

---

## 56. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Por qué un satélite permanece en órbita?</summary>
  <div class="lesson-quiz__answer">
    Porque está en caída libre: la gravedad proporciona la aceleración centrípeta mientras su velocidad tangencial hace que siga cayendo alrededor de la Tierra.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Por qué se requieren al menos cuatro satélites en el modelo básico?</summary>
  <div class="lesson-quiz__answer">
    Porque hay cuatro incógnitas principales: las tres coordenadas del receptor y el error de su reloj.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Qué efecto relativista hace ir más lento al reloj del satélite?</summary>
  <div class="lesson-quiz__answer">
    La dilatación temporal cinemática de relatividad especial debida a su velocidad orbital.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Qué efecto hace ir más rápido al reloj orbital respecto de uno en superficie?</summary>
  <div class="lesson-quiz__answer">
    La diferencia de potencial gravitatorio descrita por relatividad general: en la órbita GPS el reloj está en un potencial menos profundo.
  </div>
</details>

---

## 57. Resumen

- Un satélite está en caída libre bajo gravedad.
- Para órbita circular ideal, v=√(GM/r).
- El período satisface T²∝r³.
- GPS es un sistema dentro de la familia GNSS.
- El receptor mide tiempos de propagación y pseudodistancias.
- GNSS usa esencialmente trilateración, no triangulación.
- El reloj del receptor introduce una incógnita adicional.
- El modelo 3D básico necesita al menos cuatro señales.
- Los relojes atómicos permiten gran precisión temporal.
- Relatividad especial retrasa los relojes GPS unos 7 μs/día respecto de superficie.
- Relatividad general los adelanta unos 45 μs/día.
- El efecto neto aproximado es +38 μs/día.
- Las correcciones relativistas son necesarias para navegación precisa.
- También importan rotación terrestre, atmósfera, órbitas, multitrayecto y geometría.
- Una señal GNSS aporta posición y también una referencia temporal precisa.

---

## 58. Fuentes públicas para profundizar

Referencias técnicas útiles:

- NIST — relatividad y relojes atómicos;
- documentación pública de sistemas GNSS;
- agencias espaciales y organismos geodésicos.

Los detalles de constelaciones, señales y algoritmos pueden actualizarse, pero la física de tiempo de vuelo, órbitas y relatividad permanece.

---

## 59. Siguiente aplicación

**A-16 — Astronomía y física**

La próxima aplicación reunirá:

- óptica;
- gravitación;
- espectros;
- temperatura;
- Doppler;
- escalas;
- instrumentos;

para mostrar cómo obtenemos información física de objetos que no podemos tocar.
