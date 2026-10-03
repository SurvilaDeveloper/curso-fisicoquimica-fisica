---
title: "Cambio climático y balance energético terrestre"
description: "Cómo entender el clima mediante el balance entre radiación solar entrante y radiación infrarroja saliente, el efecto invernadero, los forzamientos, las retroalimentaciones y el papel de océanos, hielo y atmósfera."
slug: "cambio-climatico-y-balance-energetico-terrestre"

course: "aplicaciones"
module: "energia-y-ambiente"
order: 5

level: "avanzado-secundario"
cycle: "orientado"

yearsApprox: [4, 5, 6]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - energias-renovables
  - gases-y-termodinamica
  - ondas
  - optica-fisica

skills:
  - clima
  - tiempo-meteorologico
  - balance-energetico
  - radiacion-solar
  - albedo
  - radiacion-infrarroja
  - cuerpo-negro
  - stefan-boltzmann
  - efecto-invernadero
  - gases-de-efecto-invernadero
  - forzamiento-radiativo
  - retroalimentacion
  - oceano
  - hielo
  - aerosoles
  - ciclo-del-carbono
  - mitigacion
  - adaptacion
  - modelos-climaticos

hasExercises: true
hasQuiz: true
hasExperiment: true

deepening: true
status: "complete"
---

## ¿Por qué la Tierra no se calienta indefinidamente con la luz del Sol?

La Tierra recibe energía del Sol todos los días.

Si sólo recibiera energía y no emitiera nada al espacio, su energía interna aumentaría continuamente.

Pero nuestro planeta también emite radiación electromagnética, principalmente en el infrarrojo.

A escala climática, una pregunta fundamental es:

> **¿cuánta energía entra al sistema terrestre y cuánta sale?**

Si durante un período largo:

- entra más de la que sale → el sistema gana energía;
- sale más de la que entra → pierde energía;
- entrada y salida se equilibran → el contenido energético medio puede estabilizarse.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>El clima terrestre puede estudiarse como un problema de balance energético. El efecto invernadero modifica la manera en que la radiación infrarroja sale al espacio; un desequilibrio sostenido produce cambios en la temperatura, los océanos, el hielo y otros componentes del sistema climático.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta aplicación deberías poder:

- distinguir tiempo meteorológico de clima;
- representar el balance energético de la Tierra;
- explicar por qué la geometría introduce un factor 1/4 entre disco iluminado y superficie esférica;
- interpretar albedo;
- distinguir radiación solar y radiación térmica terrestre;
- explicar el efecto invernadero natural;
- explicar por qué aumentar gases de efecto invernadero modifica el balance radiativo;
- comprender la ley de Stefan-Boltzmann como modelo;
- distinguir forzamiento y retroalimentación;
- interpretar retroalimentación del vapor de agua y del hielo;
- explicar el papel térmico de los océanos;
- distinguir cambio climático de variabilidad meteorológica;
- comprender por qué agujero de ozono y cambio climático no son el mismo problema;
- distinguir mitigación y adaptación;
- reconocer fortalezas y límites de los modelos climáticos.

---

# Tiempo y clima

## 1. Tiempo meteorológico

El tiempo describe el estado de la atmósfera en escalas cortas:

- temperatura de hoy;
- lluvia;
- viento;
- nubosidad;
- tormentas.

---

## 2. Clima

El clima describe patrones estadísticos y distribuciones durante períodos largos.

Incluye:

- promedios;
- variabilidad;
- extremos;
- frecuencia de eventos;
- tendencias.

Un día frío no demuestra que el planeta no se caliente.

Un día muy caluroso, por sí solo, tampoco demuestra una tendencia climática.

---

## 3. Clima no es sólo temperatura media

También estudiamos:

- precipitación;
- humedad;
- circulación;
- hielo;
- nivel del mar;
- océanos;
- extremos.

La temperatura media global es una variable importante, pero no resume todo.

---

# Energía solar entrante

## 4. Constante solar

A la distancia media Tierra-Sol, la irradiancia solar sobre una superficie perpendicular a los rayos es aproximadamente:

**1360 W/m²**

El valor varía ligeramente con:

- distancia orbital;
- actividad solar.

---

## 5. La Tierra intercepta un disco

La potencia solar interceptada depende del área:

<div class="formula-panel">
  <span class="formula-panel__label">Área interceptora</span>
  <div class="formula-panel__formula">A<sub>disco</sub> = πR²</div>
</div>

No de toda la superficie esférica al mismo tiempo.

---

## 6. La energía se distribuye sobre una esfera

La superficie terrestre total es:

<div class="formula-panel">
  <span class="formula-panel__label">Superficie esférica</span>
  <div class="formula-panel__formula">A<sub>esfera</sub> = 4πR²</div>
</div>

Por eso, promediando geométricamente sobre toda la esfera:

<div class="formula-panel">
  <span class="formula-panel__label">Promedio solar</span>
  <div class="formula-panel__formula">G<sub>prom</sub> ≈ S/4 ≈ 340 W/m²</div>
</div>

---

## 7. Albedo

Una parte de la radiación solar es reflejada al espacio.

El **albedo** es la fracción reflejada:

<div class="formula-panel">
  <span class="formula-panel__label">Albedo</span>
  <div class="formula-panel__formula">α = P<sub>reflejada</sub>/P<sub>incidente</sub></div>
</div>

Para la Tierra completa, el promedio es cercano a:

**0,3**

aunque varía con:

- nubes;
- hielo;
- océanos;
- suelo;
- vegetación.

---

## 8. Radiación solar absorbida

En un modelo global sencillo:

<div class="formula-panel">
  <span class="formula-panel__label">Absorbida</span>
  <div class="formula-panel__formula">F<sub>abs</sub> = (1−α)S/4</div>
</div>

Con α≈0,30 y S≈1360 W/m²:

**F<sub>abs</sub> ≈ 238 W/m²**

El valor exacto depende de los datos y del período considerado.

---

# Radiación térmica saliente

## 9. Todo cuerpo con temperatura emite radiación

Un objeto a temperatura mayor que 0 K emite radiación electromagnética.

La distribución espectral depende de:

- temperatura;
- propiedades de la superficie.

La Tierra emite principalmente en:

- infrarrojo térmico.

---

## 10. Sol y Tierra emiten en regiones distintas

El Sol, mucho más caliente, emite gran parte de su energía en longitudes de onda más cortas.

La Tierra, más fría, emite principalmente en:

- infrarrojo.

Esta diferencia espectral es central para:

- efecto invernadero.

---

## 11. Stefan-Boltzmann — profundización

Un cuerpo negro ideal emite:

<div class="formula-panel">
  <span class="formula-panel__label">Stefan-Boltzmann</span>
  <div class="formula-panel__formula">F = σT⁴</div>
</div>

donde:

- F es potencia por unidad de área;
- σ es la constante de Stefan-Boltzmann;
- T está en kelvin.

---

## 12. La cuarta potencia importa

Si T aumenta, la emisión térmica aumenta aproximadamente con:

**T⁴**

Esto introduce una respuesta estabilizadora importante:

- un planeta más caliente emite más energía al espacio.

---

# Modelo sin atmósfera

## 13. Equilibrio radiativo ideal

Un modelo mínimo iguala:

<div class="formula-panel">
  <span class="formula-panel__label">Equilibrio</span>
  <div class="formula-panel__formula">(1−α)S/4 = σT<sub>e</sub>⁴</div>
</div>

T<sub>e</sub> se llama temperatura efectiva de emisión.

---

## 14. Resultado aproximado

Con valores terrestres típicos, el modelo da aproximadamente:

**255 K**

equivalente a:

**−18 °C**

Pero la temperatura media de la superficie es bastante mayor.

La diferencia principal se relaciona con:

- efecto invernadero atmosférico.

---

# Efecto invernadero

## 15. La atmósfera no interactúa igual con todas las longitudes de onda

La atmósfera deja pasar una fracción importante de la radiación solar de onda corta.

Pero gases como:

- vapor de agua;
- dióxido de carbono;
- metano;
- óxido nitroso;

absorben y emiten en bandas del infrarrojo.

---

## 16. Absorber y emitir

Una molécula que absorbe radiación infrarroja en determinadas bandas también puede:

- emitir radiación.

La atmósfera emite:

- hacia arriba;
- hacia abajo;
- en otras direcciones.

Por eso el efecto invernadero no debe imaginarse como una “tapa” sólida.

---

## 17. Altura efectiva de emisión

El sistema Tierra-atmósfera debe emitir al espacio una potencia compatible con el balance.

Cuando aumenta la opacidad infrarroja, la radiación que logra escapar en ciertas bandas proviene, en promedio, de niveles más altos y fríos.

Para recuperar el flujo saliente necesario, el sistema responde mediante:

- calentamiento;
- ajustes atmosféricos;
- cambios de vapor, nubes y superficie.

---

## 18. Efecto invernadero natural

Sin efecto invernadero natural, la superficie terrestre sería mucho más fría.

Por eso el efecto invernadero en sí no es:

- un problema artificial.

El problema climático actual es el **refuerzo** del efecto por cambios en la composición atmosférica, especialmente por actividades humanas.

---

## 19. CO₂ y combustibles fósiles

La combustión de carbono puede representarse esquemáticamente:

<div class="formula-panel">
  <span class="formula-panel__label">Combustión</span>
  <div class="formula-panel__formula">C + O<sub>2</sub> → CO<sub>2</sub></div>
</div>

Quemar combustibles fósiles transfiere carbono almacenado geológicamente hacia:

- atmósfera;
- océanos;
- biosfera.

---

## 20. Metano

El metano también absorbe infrarrojo y contribuye al forzamiento climático.

Sus fuentes incluyen:

- combustibles fósiles;
- ganadería;
- residuos;
- humedales naturales.

Los gases difieren en:

- concentración;
- vida atmosférica;
- bandas de absorción;
- eficacia radiativa.

---

# Forzamientos y retroalimentaciones

## 21. Forzamiento radiativo

Un **forzamiento** es una perturbación que modifica el balance energético del sistema.

Ejemplos:

- aumento de gases de efecto invernadero;
- cambios solares;
- aerosoles;
- cambios de uso del suelo.

---

## 22. Retroalimentación

Una retroalimentación ocurre cuando la respuesta inicial modifica a su vez:

- el cambio original.

Puede amplificar o reducir la perturbación.

---

## 23. Retroalimentación del vapor de agua

El vapor de agua es un potente gas de efecto invernadero.

En una atmósfera más cálida puede aumentar la cantidad de vapor que el aire puede contener.

Eso puede reforzar el calentamiento inicial.

En el cambio climático actual, el vapor de agua funciona principalmente como:

- retroalimentación;

mientras el aumento sostenido de CO₂ actúa como:

- forzamiento.

---

## 24. Hielo-albedo

El hielo y la nieve reflejan mucha radiación.

Si disminuye su extensión:

- baja el albedo;
- aumenta absorción solar;
- favorece calentamiento adicional.

Es una retroalimentación:

- positiva.

---

## 25. Nubes

Las nubes pueden:

- reflejar radiación solar;
- absorber y emitir infrarrojo.

Su efecto neto depende de:

- altura;
- espesor;
- tamaño de gotas;
- cobertura;
- región.

Son una de las partes complejas del sistema climático.

---

## 26. Aerosoles

Partículas atmosféricas pueden:

- dispersar radiación;
- absorberla;
- modificar nubes.

Algunos aerosoles tienden a producir enfriamiento neto y otros pueden producir calentamiento regional.

---

# Océanos y energía

## 27. Gran capacidad térmica

El agua posee alta capacidad calorífica.

Los océanos pueden absorber enormes cantidades de energía con cambios de temperatura relativamente pequeños.

Por eso son un componente central del:

- balance energético planetario.

---

## 28. Inercia térmica

Si el forzamiento cambia, la temperatura superficial no responde instantáneamente hasta un nuevo equilibrio.

El sistema tiene:

- océanos;
- hielo;
- suelos;
- atmósfera;

con distintas escalas temporales.

---

## 29. Expansión térmica

Cuando el agua oceánica se calienta, su volumen puede aumentar.

La expansión térmica contribuye al:

- aumento del nivel medio del mar.

También contribuye el agua agregada por pérdida de hielo continental.

---

## 30. Hielo marino e hielo continental

El derretimiento de hielo flotante tiene un efecto directo muy pequeño sobre el nivel del mar por desplazamiento, como en el principio de Arquímedes.

En cambio, derretir hielo que estaba sobre continentes agrega agua al océano.

No son equivalentes.

---

# Evidencias y atribución

## 31. Una causa no se identifica con una sola gráfica

La atribución climática combina:

- teoría física;
- mediciones;
- reconstrucciones;
- satélites;
- océanos;
- modelos;
- patrones espaciales y temporales.

La conclusión no depende de:

- un solo termómetro;
- un único año.

---

## 32. El calentamiento actual

La evidencia científica disponible muestra que el sistema climático se ha calentado y que la influencia humana, principalmente mediante emisiones de gases de efecto invernadero, es la causa dominante del calentamiento observado desde mediados del siglo XX.

Esto no significa que desaparezcan:

- variabilidad natural;
- volcanes;
- ciclos oceánicos;
- variación solar.

Significa que no explican por sí solos la tendencia observada.

---

## 33. Variabilidad natural

Fenómenos como El Niño y La Niña redistribuyen energía dentro del sistema y producen variaciones de corto plazo.

Pueden hacer que algunos años sean:

- más cálidos;
- más fríos;

respecto de la tendencia.

---

## 34. Sol y clima

La radiación solar es la fuente primaria de energía del sistema climático.

Pero para explicar una tendencia climática hay que comparar:

- cambios solares medidos;
- respuesta esperada;
- patrones observados.

No basta con afirmar:

> “el Sol calienta la Tierra, entonces todo cambio debe ser solar”.

---

# Ozono y clima

## 35. Agujero de ozono

El agotamiento de ozono estratosférico y el cambio climático son problemas diferentes.

### Ozono estratosférico

Absorbe radiación ultravioleta.

### Gases de efecto invernadero

Modifican el balance de radiación infrarroja.

Existen interacciones entre ambos problemas, pero no son:

- el mismo fenómeno.

---

# Modelos climáticos

## 36. Qué es un modelo climático

Un modelo representa matemáticamente procesos como:

- dinámica de fluidos;
- radiación;
- humedad;
- océanos;
- hielo;
- suelo.

Se basa en leyes físicas y parametrizaciones de procesos que no pueden resolverse explícitamente a toda escala.

---

## 37. Un modelo no es una copia perfecta del planeta

Todo modelo tiene:

- resolución finita;
- supuestos;
- incertidumbres;
- parámetros.

La pregunta científica no es:

> “¿es perfecto?”

sino:

> **¿qué procesos representa bien, qué incertidumbres tiene y qué observaciones reproduce?**

---

## 38. Escenarios no son predicciones únicas

Muchos estudios usan escenarios de futuras emisiones y concentraciones.

El resultado depende de:

- física del sistema;
- decisiones humanas;
- desarrollo tecnológico;
- políticas;
- uso del suelo.

Por eso distintos escenarios no significan que “los científicos no sepan qué va a pasar”.

Representan:

- futuros condicionados.

---

# Mitigación y adaptación

## 39. Mitigación

Busca reducir la magnitud del cambio climático mediante acciones como:

- reducir emisiones;
- eficiencia energética;
- electrificación;
- fuentes de baja emisión;
- protección de sumideros;
- reducción de metano.

---

## 40. Adaptación

Busca reducir daños o aumentar resiliencia frente a cambios que ocurren o pueden ocurrir.

Ejemplos:

- infraestructura;
- gestión de agua;
- planificación urbana;
- sistemas de alerta;
- adaptación agrícola.

---

## 41. No son alternativas excluyentes

Mitigación y adaptación responden a preguntas diferentes.

Un sistema puede necesitar:

- reducir futuras emisiones;
- adaptarse a cambios ya inevitables.

---

## 42. Justicia y decisiones

Las decisiones climáticas también involucran:

- costos;
- acceso a energía;
- vulnerabilidad;
- desarrollo;
- distribución de impactos.

La Física puede cuantificar balances y mecanismos.

Las decisiones sociales requieren además:

- economía;
- política pública;
- ética.

---

## 43. Experiencia segura: albedo

Podés comparar calentamiento de dos superficies:

- una clara;
- una oscura;

bajo la misma fuente de radiación.

Medí temperatura a intervalos regulares.

Controlá:

- material;
- masa;
- distancia;
- condiciones iniciales.

El experimento no reproduce el clima terrestre completo.

Sólo explora:

- absorción y reflexión.

---

## 44. Otra experiencia: capacidad térmica

Compará el calentamiento de masas iguales de:

- agua;
- otro material seguro.

Bajo una fuente controlada, el agua suele cambiar menos su temperatura por la misma energía recibida debido a su alta capacidad calorífica.

Esto ayuda a comprender la inercia térmica oceánica.

---

## 45. Herramientas matemáticas útiles

Esta aplicación utiliza especialmente:

- M-03 — Porcentajes;
- M-05 — Notación científica;
- M-10 — Función cuadrática como antecedente de funciones no lineales;
- M-11 — Interpretación de gráficos;
- M-16 — Áreas y volúmenes;
- M-18 — Exponenciales como profundización.

---

## 46. Errores frecuentes

### “Un día frío contradice el calentamiento global”

No. Tiempo y clima tienen escalas distintas.

### “El efecto invernadero es artificial”

No. Existe naturalmente; el problema actual es su intensificación.

### “Vapor de agua invalida el papel del CO₂”

No. Cumplen papeles diferentes en el sistema y el vapor actúa fuertemente como retroalimentación.

### “CO₂ forma una capa que refleja el calor”

No. Absorbe y emite radiación infrarroja en bandas específicas.

### “Cambio climático y agujero de ozono son lo mismo”

No.

### “Los modelos tienen incertidumbre, por eso no sirven”

No. Toda predicción científica cuantitativa tiene incertidumbre; lo importante es evaluarla y contrastar el modelo con observaciones.

---

## 47. Problemas graduados

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Conceptos</strong>
  </div>
  <ol>
    <li>Distinguí tiempo meteorológico de clima.</li>
    <li>Definí albedo.</li>
    <li>¿En qué región espectral emite principalmente la Tierra?</li>
    <li>Explicá por qué efecto invernadero natural y calentamiento antropogénico no son sinónimos.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Balance global</strong>
  </div>
  <ol>
    <li>Con S=1360 W/m², calculá S/4.</li>
    <li>Si α=0,30, estimá (1−α)S/4.</li>
    <li>¿Qué ocurriría inicialmente si la emisión saliente fuese menor que ese valor absorbido?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Radiación</strong>
  </div>
  <ol>
    <li>Usando F=σT⁴, explicá por qué un aumento de T aumenta fuertemente la emisión.</li>
    <li>Compará cualitativamente la radiación del Sol y de la Tierra.</li>
    <li>Explicá por qué gases que absorben infrarrojo pueden modificar la altura efectiva de emisión.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Retroalimentaciones</strong>
  </div>
  <ol>
    <li>Construí una cadena causal para la retroalimentación hielo-albedo.</li>
    <li>Explicá por qué el vapor de agua puede amplificar un calentamiento iniciado por otro forzamiento.</li>
    <li>Analizá dos papeles opuestos posibles de las nubes en el balance radiativo.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Derivá el factor geométrico 1/4 comparando πR² con 4πR².</li>
    <li>Explicá por qué una temperatura de emisión efectiva no es igual a la temperatura media de la superficie.</li>
    <li>Analizá qué observaciones serían necesarias para distinguir una causa solar de una causa por gases de efecto invernadero.</li>
  </ol>
</div>

---

## 48. Ejemplo integrado

Tomemos:

- S = 1360 W/m²;
- α = 0,30.

Promedio solar:

<div class="formula-panel">
  <span class="formula-panel__label">Promedio geométrico</span>
  <div class="formula-panel__formula">S/4 = 340 W/m²</div>
</div>

Absorción:

<div class="formula-panel">
  <span class="formula-panel__label">Solar absorbida</span>
  <div class="formula-panel__formula">F<sub>abs</sub> = 0,70·340 ≈ 238 W/m²</div>
</div>

En equilibrio de largo plazo, el sistema debe emitir al espacio aproximadamente la misma potencia media por unidad de área.

Si una perturbación reduce temporalmente la radiación saliente manteniendo la entrada:

```text
entrada > salida
      ↓
ganancia neta de energía
      ↓
ajustes y calentamiento del sistema
      ↓
aumento de emisión infrarroja
```

El nuevo equilibrio puede alcanzarse a una temperatura diferente.

---

## 49. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Por qué aparece S/4 en el modelo global?</summary>
  <div class="lesson-quiz__answer">
    Porque la Tierra intercepta radiación sobre un disco de área πR² pero, al promediar globalmente, esa energía se distribuye sobre una superficie 4πR².
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Qué es el albedo?</summary>
  <div class="lesson-quiz__answer">
    La fracción de radiación incidente que un sistema refleja.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Por qué el CO₂ puede afectar la temperatura superficial?</summary>
  <div class="lesson-quiz__answer">
    Porque absorbe y emite radiación infrarroja en bandas específicas, modificando la forma y la altura desde la que el sistema Tierra-atmósfera emite energía al espacio.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Cuál es la diferencia entre mitigación y adaptación?</summary>
  <div class="lesson-quiz__answer">
    Mitigación busca limitar la magnitud del cambio climático reduciendo forzamientos humanos; adaptación busca reducir daños y vulnerabilidad frente a cambios que ocurren o pueden ocurrir.
  </div>
</details>

---

## 50. Resumen

- El clima se estudia mediante estadísticas de largo plazo, no por un día aislado.
- La Tierra recibe energía solar y emite radiación infrarroja.
- La geometría esférica convierte aproximadamente S en S/4 como promedio global.
- El albedo determina qué fracción de radiación solar se refleja.
- En equilibrio, la energía absorbida y emitida deben balancearse a largo plazo.
- La emisión térmica aumenta fuertemente con T según una relación tipo T⁴.
- El efecto invernadero natural mantiene la superficie más cálida que un planeta sin atmósfera absorbente de infrarrojo.
- Aumentar gases de efecto invernadero produce un forzamiento radiativo.
- Vapor de agua, hielo y nubes participan en retroalimentaciones.
- Los océanos almacenan gran cantidad de energía y generan inercia térmica.
- Cambio climático y agotamiento de ozono son fenómenos diferentes.
- Los modelos climáticos combinan leyes físicas, datos y aproximaciones.
- Mitigación y adaptación son estrategias complementarias.

---

## 51. Para profundizar

Fuentes científicas de referencia para este tema incluyen:

- IPCC;
- Organización Meteorológica Mundial;
- NASA;
- NOAA;
- Servicio Meteorológico Nacional de Argentina.

Los valores numéricos globales pueden actualizarse a medida que mejoran las observaciones, pero los principios físicos de balance energético y transferencia radiativa permanecen.

---

## 52. Siguiente aplicación

**A-06 — Física del deporte**

Pasaremos del sistema climático a escalas humanas para analizar:

- movimiento;
- fuerzas;
- impulso;
- energía;
- potencia;
- rotación;
- aerodinámica;

en acciones deportivas.
