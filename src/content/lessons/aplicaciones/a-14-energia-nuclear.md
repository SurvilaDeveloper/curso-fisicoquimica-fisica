---
title: "Energía nuclear"
description: "Cómo la fisión nuclear libera energía, cómo se mantiene una reacción en cadena controlada y cómo un reactor transforma energía nuclear en calor, movimiento y electricidad, incluyendo combustible, moderación, refrigeración, seguridad y residuos."
slug: "energia-nuclear"

course: "aplicaciones"
module: "energia-y-tecnologia"
order: 14

level: "avanzado-secundario"
cycle: "orientado"

yearsApprox: [5, 6]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - fisica-nuclear
  - radiaciones-y-salud
  - motores-generadores-y-transformadores

skills:
  - energia-nuclear
  - fision
  - reaccion-en-cadena
  - neutron
  - criticidad
  - reactor-nuclear
  - combustible-nuclear
  - moderador
  - refrigerante
  - barras-de-control
  - potencia-termica
  - turbina
  - generador
  - decaimiento-residual
  - seguridad-nuclear
  - defensa-en-profundidad
  - contencion
  - residuos-radiactivos
  - combustible-gastado
  - fusion
  - ciclo-de-vida

hasExercises: true
hasQuiz: true
hasExperiment: false

deepening: true
status: "complete"
---

## Una central nuclear es, en gran parte, una central térmica

La palabra “nuclear” describe de dónde proviene el calor.

En una central de fisión:

```text
energía nuclear
      ↓
energía cinética de fragmentos y radiación
      ↓
energía interna del combustible y refrigerante
      ↓
vapor o circuito térmico
      ↓
turbina
      ↓
generador
      ↓
energía eléctrica
```

La turbina y el generador obedecen los mismos principios generales que en otras centrales térmicas.

La diferencia central está en:

- la fuente de energía;
- el control del reactor;
- la gestión de radiación y materiales radiactivos.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Un reactor de potencia mantiene una reacción de fisión en cadena controlada. No “quema” combustible como una llama: transforma energía de enlace nuclear en energía térmica, que luego se convierte parcialmente en electricidad mediante un ciclo termodinámico y un generador.</p>
  </div>
</div>

<div class="lesson-callout lesson-callout--warning">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">⚠</span>
    <strong>Alcance</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Esta lección explica principios de física e ingeniería nuclear a nivel secundario. No incluye procedimientos para obtener materiales, modificar combustible, diseñar dispositivos nucleares ni operar un reactor.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta aplicación deberías poder:

- explicar qué es la fisión;
- relacionar defecto de masa y energía liberada;
- comprender por qué se emiten neutrones;
- explicar una reacción en cadena;
- distinguir subcriticidad, criticidad y supercriticidad a nivel conceptual;
- explicar la función de combustible, moderador, refrigerante y barras de control;
- reconocer que no todos los reactores usan el mismo moderador o refrigerante;
- describir la transformación energética de una central;
- distinguir potencia térmica y potencia eléctrica;
- comprender por qué detener la reacción en cadena no elimina inmediatamente todo el calor;
- explicar calor residual por decaimiento;
- interpretar defensa en profundidad;
- comprender el papel de contención y sistemas de refrigeración;
- distinguir reactor nuclear de arma nuclear;
- describir combustible gastado y residuos a nivel conceptual;
- comprender que actividad, calor y vida media no son una única magnitud;
- comparar fisión y fusión;
- reconocer que la evaluación ambiental requiere considerar todo el ciclo de vida.

---

# Fisión

## 1. Núcleo pesado

Algunos núcleos pesados pueden dividirse después de capturar un neutrón.

Un esquema simplificado es:

```text
núcleo fisible + neutrón
        ↓
fragmentos de fisión
+ neutrones
+ energía
```

---

## 2. Conservación

En una reacción nuclear deben conservarse:

- carga;
- número total de nucleones en la contabilidad apropiada;
- energía;
- cantidad de movimiento.

La masa de reposo total puede disminuir si aumenta la energía liberada al exterior.

---

## 3. Equivalencia masa-energía

<div class="formula-panel">
  <span class="formula-panel__label">Energía</span>
  <div class="formula-panel__formula">ΔE = Δmc²</div>
</div>

La gran magnitud de c² hace que una pequeña diferencia de masa corresponda a una energía importante.

---

## 4. Orden de magnitud de una fisión

Una fisión típica libera energía del orden de:

**200 MeV**

principalmente como:

- energía cinética de fragmentos;
- neutrones;
- radiación;
- energía posterior de productos de fisión.

Es un orden de magnitud, no una cifra universal para toda fisión.

---

## 5. De MeV a joule

Como:

**1 eV ≈ 1,602×10<sup>−19</sup> J**

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Conversión</span>
  <div class="formula-panel__formula">200 MeV ≈ 3,2×10<sup>−11</sup> J</div>
</div>

Parece pequeño por evento, pero en una cantidad macroscópica ocurren muchísimas fisiones.

---

# Reacción en cadena

## 6. Neutrones secundarios

Una fisión puede liberar varios neutrones.

Algunos pueden inducir nuevas fisiones.

Así aparece una:

- reacción en cadena.

---

## 7. No todos los neutrones producen otra fisión

Pueden:

- escapar;
- ser absorbidos sin fisionar;
- ser capturados por materiales estructurales;
- inducir otra fisión.

El comportamiento depende del sistema completo.

---

## 8. Factor de multiplicación — concepto

Podemos definir conceptualmente un factor k:

- k<1 → reacción decrece;
- k=1 → estado crítico estacionario;
- k>1 → población de neutrones crece.

En un reactor de potencia estable se busca aproximadamente:

**k=1**

en promedio.

---

## 9. “Crítico” no significa “a punto de explotar”

En física de reactores, **crítico** significa:

- reacción en cadena autosostenida estable.

Es el estado normal de operación de un reactor a potencia constante.

---

## 10. Subcrítico

Si:

**k<1**

la reacción en cadena tiende a:

- apagarse.

---

## 11. Supercrítico

Si:

**k>1**

la población de neutrones aumenta.

En un reactor, los sistemas de control regulan esta condición dentro de rangos operativos diseñados.

---

# Neutrones rápidos y moderación

## 12. Neutrones de fisión

Los neutrones emitidos inicialmente suelen ser rápidos.

En muchos reactores térmicos se los desacelera para aumentar la probabilidad de determinadas fisiones.

---

## 13. Moderador

Un moderador reduce la energía cinética de neutrones mediante colisiones.

Materiales utilizados en diferentes diseños incluyen:

- agua liviana;
- agua pesada;
- grafito.

---

## 14. No todos los reactores usan moderador

Los reactores rápidos están diseñados para operar sin moderar los neutrones hasta energías térmicas.

Por eso no debemos afirmar:

> “todo reactor necesita moderador”.

---

# Combustible

## 15. Material fisible

Un combustible nuclear contiene núclidos que pueden sostener fisión bajo las condiciones del reactor.

Ejemplos de núclidos físicamente relevantes incluyen:

- uranio-235;
- plutonio-239.

La composición concreta depende del:

- diseño;
- ciclo de combustible.

---

## 16. Combustible no es sólo “uranio puro”

En centrales reales puede presentarse como:

- dióxido de uranio;
- mezclas;
- otras formulaciones.

Se fabrica en geometrías y encapsulados diseñados para:

- transferencia térmica;
- integridad;
- control.

---

# Refrigerante

## 17. Extraer calor

El combustible libera energía térmica.

El refrigerante transporta ese calor fuera del núcleo.

Puede ser, según diseño:

- agua;
- gas;
- metal líquido;
- otras sustancias.

---

## 18. Refrigerante y moderador pueden ser el mismo material

En muchos reactores de agua, el agua cumple funciones de:

- refrigeración;
- moderación.

Pero conceptualmente son funciones diferentes.

---

# Barras de control

## 19. Absorción de neutrones

Materiales absorbentes pueden introducirse o retirarse para modificar la población de neutrones.

Las barras de control ayudan a:

- regular potencia;
- detener la reacción en cadena.

---

## 20. Lenz no interviene aquí

El control por barras no es un fenómeno de inducción electromagnética.

Es un fenómeno de:

- interacción de neutrones con núcleos.

No debemos mezclarlo con:

- motores;
- transformadores.

---

# Del calor a la electricidad

## 21. Potencia térmica

El reactor produce una potencia térmica:

<div class="formula-panel">
  <span class="formula-panel__label">Potencia térmica</span>
  <div class="formula-panel__formula">P<sub>th</sub> = ΔE<sub>térmica</sub>/Δt</div>
</div>

---

## 22. Ciclo térmico

El calor se utiliza para producir un fluido a condiciones capaces de mover una:

- turbina.

Según diseño, puede haber:

- un solo circuito;
- circuitos separados;
- generadores de vapor.

---

## 23. Turbina

El vapor o fluido realiza trabajo sobre la turbina.

La energía térmica se transforma parcialmente en:

- energía mecánica rotacional.

---

## 24. Generador

La turbina mueve un generador.

Mediante inducción electromagnética se obtiene:

- energía eléctrica.

---

## 25. Potencia eléctrica menor que la térmica

<div class="formula-panel">
  <span class="formula-panel__label">Rendimiento</span>
  <div class="formula-panel__formula">η = P<sub>eléctrica</sub>/P<sub>térmica</sub></div>
</div>

Como toda máquina térmica real:

**η<1**

---

## 26. Energía que no se convierte en electricidad

Debe rechazarse calor hacia un foco frío mediante:

- condensadores;
- agua;
- aire;
- torres de enfriamiento;

según la central.

Las grandes plumas blancas de algunas torres son principalmente:

- vapor de agua condensado;

no “humo radiactivo” por definición.

---

# Apagado y calor residual

## 27. Insertar barras reduce la fisión en cadena

Una parada rápida puede llevar el reactor a condición:

- subcrítica.

Pero eso no hace que la potencia térmica caiga instantáneamente a:

- cero.

---

## 28. Productos radiactivos siguen decayendo

Los productos de fisión continúan desintegrándose después de detener la reacción en cadena.

Ese decaimiento produce:

- calor residual.

---

## 29. La refrigeración sigue siendo necesaria

Después del apagado debe continuarse removiendo calor.

Este punto es central para comprender la seguridad de un reactor.

---

## 30. “Reactor apagado” no significa “frío”

La potencia residual disminuye con el tiempo, pero puede seguir siendo significativa.

Por eso existen sistemas destinados a:

- extracción de calor residual.

---

# Reactor y arma nuclear

## 31. No son el mismo sistema

Un reactor de potencia está diseñado para:

- mantener una reacción controlada;
- extraer calor durante períodos largos.

Un arma nuclear persigue una liberación extremadamente rápida de energía.

Difieren en:

- materiales;
- geometría;
- dinámica;
- propósito.

---

## 32. Una central no puede “detonar como una bomba nuclear” por simplemente perder control térmico

Los accidentes graves de reactor pueden producir:

- daño de combustible;
- hidrógeno;
- vapor;
- liberación de materiales radiactivos;

pero eso no equivale a una detonación nuclear de arma.

---

# Seguridad

## 33. Defensa en profundidad

La seguridad nuclear utiliza múltiples barreras y sistemas independientes o redundantes.

Ejemplos conceptuales:

```text
pastilla de combustible
→ vaina del combustible
→ circuito de refrigeración
→ estructura y contención
→ sistemas de seguridad
→ procedimientos y organización
```

---

## 34. Barreras físicas

El objetivo es limitar:

- liberación de radionúclidos;
- exposición;
- daño al combustible.

No todas las centrales tienen exactamente las mismas barreras.

---

## 35. Sistemas de parada

Debe existir capacidad de reducir rápidamente la reactividad.

Los diseños incluyen distintos mecanismos:

- barras;
- absorbentes;
- sistemas automáticos.

---

## 36. Refrigeración de emergencia

Si se pierde refrigeración normal, sistemas de seguridad buscan mantener:

- remoción de calor;
- integridad del combustible.

---

## 37. Contención

Muchos reactores de potencia poseen una estructura de contención destinada a limitar liberaciones en escenarios de accidente.

No es una garantía absoluta.

Es una capa de:

- defensa.

---

## 38. Seguridad pasiva — concepto

Algunos diseños usan fenómenos naturales como:

- gravedad;
- convección;
- expansión térmica;

para cumplir funciones de seguridad con menor dependencia de:

- energía externa;
- acción activa.

---

# Combustible gastado y residuos

## 39. El combustible descargado sigue siendo radiactivo

Después de su uso contiene:

- productos de fisión;
- actínidos;
- material no fisionado.

También produce:

- calor residual.

---

## 40. Almacenamiento inicial

El combustible gastado suele requerir inicialmente:

- refrigeración;
- blindaje.

En muchos sistemas se almacena primero en:

- piscinas diseñadas para ese propósito.

---

## 41. Almacenamiento posterior

Después de disminuir calor y actividad pueden utilizarse otros sistemas, como:

- almacenamiento seco;

según estrategia y regulación.

---

## 42. Residuos no son todos iguales

Se clasifican según criterios como:

- actividad;
- vida media;
- generación de calor;
- tipo de radionúclidos.

La gestión depende de:

- categoría.

---

## 43. Vida media y cantidad

Un residuo de vida larga no necesariamente tiene una tasa de actividad enorme.

La actividad depende de:

**A=λN**

Una vida media larga significa λ menor, para igual N.

---

## 44. El problema no se resume en “cuánto tarda en desaparecer”

La gestión considera:

- cantidad;
- actividad;
- movilidad;
- toxicidad;
- calor;
- forma química;
- confinamiento;
- tiempo.

---

# Ciclo de vida

## 45. Extracción y fabricación

El combustible requiere:

- minería;
- procesamiento;
- fabricación;
- transporte.

La energía nuclear no debe evaluarse sólo durante:

- la operación del reactor.

---

## 46. Emisiones de gases de efecto invernadero

Durante operación, una central de fisión no quema combustible fósil para producir el calor nuclear.

Por eso sus emisiones directas de CO₂ durante generación son bajas.

El ciclo completo incluye emisiones de:

- construcción;
- minería;
- enriquecimiento cuando corresponde;
- transporte;
- desmantelamiento.

---

## 47. Uso de agua

Muchas centrales térmicas, nucleares o fósiles, requieren sistemas de enfriamiento.

La demanda de agua depende de:

- diseño;
- clima;
- tecnología de condensación.

---

## 48. Densidad energética

Las reacciones nucleares liberan mucha más energía por unidad de masa de combustible que las reacciones químicas.

Eso reduce enormemente la masa de combustible requerida.

No elimina:

- infraestructura;
- residuos;
- sistemas de seguridad.

---

# Fusión

## 49. Unir núcleos livianos

En la fusión, núcleos ligeros se combinan formando núcleos más pesados.

Si aumenta la energía de enlace por nucleón, puede liberarse:

- energía.

---

## 50. El Sol

Las estrellas obtienen energía mediante:

- fusión nuclear.

En el Sol domina una cadena de reacciones que transforma hidrógeno en helio.

---

## 51. Fusión controlada en la Tierra

Para que núcleos positivos se acerquen suficientemente hay que superar la repulsión eléctrica.

Se requieren condiciones extremas de:

- temperatura;
- densidad;
- confinamiento.

---

## 52. Plasma

A temperaturas muy altas, la materia se encuentra ionizada:

- electrones;
- núcleos;

forman un plasma.

El confinamiento puede investigarse mediante:

- campos magnéticos;
- compresión inercial.

---

## 53. Fusión no es aún una fuente comercial general de electricidad

La investigación ha logrado avances importantes, pero producir electricidad de forma continua, económica y con todo el sistema integrado sigue siendo un desafío tecnológico.

No debe confundirse un experimento con ganancia física en una etapa con:

- una central comercial completa.

---

# Argentina — puente hacia A-20

## 54. Tecnología nuclear argentina

Argentina posee una trayectoria importante en:

- investigación nuclear;
- reactores;
- producción de radioisótopos;
- centrales de potencia;
- tecnología asociada.

Los ejemplos institucionales se desarrollarán específicamente en:

**A-20 — Ciencia argentina**

para no duplicar aquí el bloque histórico e institucional.

---

# Actividad educativa

## 55. Simular criticidad con fichas

Puede modelarse conceptualmente una reacción en cadena con una simulación computacional o fichas probabilísticas.

No se utilizan:

- fuentes;
- combustible;
- neutrones reales.

---

## 56. Balance energético de una central

Podemos construir:

```text
P nuclear térmica
→ P de vapor
→ P mecánica de turbina
→ P eléctrica
→ calor rechazado
```

y calcular eficiencias sin ninguna experimentación nuclear.

---

## 57. Herramientas matemáticas

Especialmente útiles:

- M-03 — Porcentajes;
- M-05 — Notación científica;
- M-17 — Logaritmos;
- M-18 — Exponenciales.

---

## 58. Errores frecuentes

### “Crítico significa fuera de control”

No. k≈1 corresponde al estado autosostenido estable.

### “Apagar el reactor elimina instantáneamente el calor”

No. Continúa el calor de decaimiento.

### “Un reactor puede explotar como una bomba nuclear”

No son sistemas equivalentes.

### “Toda central nuclear usa el mismo moderador”

No.

### “Las torres de enfriamiento expulsan humo nuclear”

No. La pluma visible suele ser agua condensada.

### “La energía nuclear no tiene ningún impacto climático porque no quema combustible fósil en el núcleo”

Hay que considerar el ciclo de vida completo.

### “Residuo más longevo significa automáticamente más actividad”

No. A=λN muestra que actividad y vida media no son la misma magnitud.

---

## 59. Problemas graduados

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Fisión</strong>
  </div>
  <ol>
    <li>Explicá qué es una reacción en cadena.</li>
    <li>Distinguí k&lt;1, k=1 y k&gt;1.</li>
    <li>¿Qué significa “crítico” en un reactor estable?</li>
    <li>¿Qué función cumple un moderador?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Energía</strong>
  </div>
  <ol>
    <li>Convertí 200 MeV a joule usando 1 eV=1,602×10<sup>−19</sup> J.</li>
    <li>Explicá por qué una sola fisión libera poca energía macroscópica pero una muestra contiene enormes cantidades de núcleos.</li>
    <li>Relacioná Δm con ΔE=Δmc².</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Central</strong>
  </div>
  <ol>
    <li>Una central tiene P<sub>th</sub>=3000 MW y entrega P<sub>e</sub>=1000 MW. Calculá η.</li>
    <li>¿A dónde va la potencia restante?</li>
    <li>Construí el diagrama de transformaciones desde fisión hasta electricidad.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Seguridad</strong>
  </div>
  <ol>
    <li>Explicá por qué hace falta refrigeración después de detener la reacción en cadena.</li>
    <li>Describí defensa en profundidad con al menos cuatro capas.</li>
    <li>Distinguí parada del reactor de enfriamiento del combustible.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Explicá por qué moderador y refrigerante son funciones conceptualmente diferentes aunque un mismo material pueda cumplir ambas.</li>
    <li>Analizá por qué una central térmica necesita rechazar calor incluso con un generador ideal.</li>
    <li>Construí una comparación de ciclo de vida entre una fuente nuclear y otra fuente eléctrica sin reducir el análisis a una sola métrica.</li>
  </ol>
</div>

---

## 60. Ejemplo integrado

Un reactor produce:

**P<sub>th</sub> = 2800 MW**

La planta entrega a la red:

**P<sub>e</sub> = 950 MW**

Rendimiento global aproximado:

<div class="formula-panel">
  <span class="formula-panel__label">Rendimiento</span>
  <div class="formula-panel__formula">η = 950/2800 ≈ 0,339 = 33,9 %</div>
</div>

Potencia térmica que no aparece como electricidad:

<div class="formula-panel">
  <span class="formula-panel__label">Resto energético</span>
  <div class="formula-panel__formula">P<sub>resto</sub> ≈ 1850 MW</div>
</div>

Esa energía no desaparece.

Se transfiere principalmente hacia:

- sistemas de enfriamiento;
- ambiente;

además de otras pérdidas internas.

---

## 61. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Qué significa k=1?</summary>
  <div class="lesson-quiz__answer">
    Que, en promedio, cada generación de neutrones produce la siguiente con igual población y la reacción en cadena se mantiene estable.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Por qué un reactor apagado sigue necesitando refrigeración?</summary>
  <div class="lesson-quiz__answer">
    Porque los productos de fisión continúan decayendo y liberando calor residual aun después de detener la reacción en cadena.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Qué hace un transformador en la central?</summary>
  <div class="lesson-quiz__answer">
    Permite modificar la tensión de la energía eléctrica generada, por ejemplo elevándola para transporte con menor corriente y menores pérdidas resistivas.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Por qué reactor y arma nuclear no son equivalentes?</summary>
  <div class="lesson-quiz__answer">
    Porque están diseñados con materiales, geometrías, dinámicas y objetivos completamente diferentes: el reactor mantiene una reacción controlada y extrae calor de forma sostenida.
  </div>
</details>

---

## 62. Resumen

- La fisión transforma energía de enlace nuclear en otras formas de energía.
- Una fisión típica libera del orden de 200 MeV.
- Los neutrones pueden sostener una reacción en cadena.
- k<1 es subcrítico, k=1 crítico estable y k>1 supercrítico.
- “Crítico” no significa accidente.
- Muchos reactores térmicos utilizan moderador; los rápidos no necesariamente.
- El refrigerante extrae calor.
- Las barras de control absorben neutrones.
- Una central transforma energía nuclear → térmica → mecánica → eléctrica.
- La potencia eléctrica es menor que la térmica por límites termodinámicos y pérdidas.
- Detener la fisión en cadena no elimina el calor de decaimiento.
- La seguridad utiliza defensa en profundidad.
- Reactor y arma nuclear no son sistemas equivalentes.
- El combustible gastado requiere gestión por su actividad y calor residual.
- Vida media y actividad no son sinónimos.
- La evaluación ambiental debe considerar el ciclo de vida.
- La fusión es la fuente de energía de las estrellas y continúa siendo un campo activo de investigación tecnológica.

---

## 63. Fuentes públicas para profundizar

Organismos de referencia:

- Organismo Internacional de Energía Atómica;
- autoridades regulatorias nucleares nacionales;
- organismos operadores y de investigación con documentación técnica pública.

---

## 64. Siguiente aplicación

**A-15 — Satélites, GPS y relatividad**

Conectaremos:

- gravitación;
- órbitas;
- ondas electromagnéticas;
- relojes atómicos;
- tiempo de vuelo;
- relatividad especial;
- relatividad general;

para comprender cómo un receptor determina su posición.
