---
title: "Energías renovables"
description: "Cómo analizar fuentes renovables desde la Física: radiación solar, viento, agua, biomasa y geotermia, distinguiendo potencia, energía, variabilidad, almacenamiento, eficiencia e impactos."
slug: "energias-renovables"

course: "aplicaciones"
module: "energia-y-ambiente"
order: 4

level: "intermedio"
cycle: "ambos"

yearsApprox: [3, 4, 5, 6]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - energia-en-la-vida-cotidiana
  - trabajo-energia-y-potencia
  - induccion-y-electromagnetismo

skills:
  - energias-renovables
  - recurso-energetico
  - potencia
  - energia
  - solar-fotovoltaica
  - solar-termica
  - energia-eolica
  - energia-hidraulica
  - biomasa
  - geotermia
  - variabilidad
  - almacenamiento
  - factor-de-capacidad
  - red-electrica
  - eficiencia
  - impacto-ambiental
  - analisis-de-ciclo-de-vida

hasExercises: true
hasQuiz: true
hasExperiment: true

deepening: true
status: "complete"
---

## ¿“Renovable” significa que una fuente no tiene impactos?

La radiación solar llega continuamente a la Tierra.

El viento se renueva por diferencias de presión y temperatura.

El agua circula mediante el ciclo hidrológico.

La biomasa puede regenerarse si su extracción y reposición se gestionan adecuadamente.

Por eso hablamos de **fuentes renovables**.

Pero de ahí no se sigue que:

- produzcan energía sin límite;
- funcionen todo el tiempo;
- no necesiten materiales;
- no ocupen territorio;
- no tengan impactos ambientales;
- puedan reemplazarse unas a otras sin cambios en la red.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>“Renovable” describe la manera en que se repone el recurso en una escala temporal relevante. Para evaluar una tecnología energética también hay que analizar potencia, energía producida, variabilidad, eficiencia, almacenamiento, materiales, territorio e impactos a lo largo de su ciclo de vida.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta aplicación deberías poder:

- distinguir fuente de energía y tecnología de conversión;
- distinguir renovable de “sin impacto”;
- relacionar potencia y energía generada;
- interpretar recurso solar, eólico e hidráulico;
- comprender el principio de una celda fotovoltaica;
- comprender el principio de una turbina eólica;
- usar una expresión sencilla de potencia hidráulica;
- explicar por qué la potencia del viento depende fuertemente de la velocidad;
- distinguir potencia instalada de energía efectivamente producida;
- interpretar el factor de capacidad;
- comprender variabilidad y gestionabilidad;
- explicar el papel del almacenamiento;
- comparar baterías, embalses y otras formas de almacenamiento en términos energéticos;
- analizar impactos mediante una mirada de ciclo de vida;
- reconocer ventajas y límites de distintas fuentes en Argentina.

---

## 1. Fuente y tecnología no son lo mismo

Una **fuente** es el recurso del que proviene la energía.

Ejemplos:

- radiación solar;
- viento;
- agua en altura;
- biomasa;
- calor interno terrestre.

Una **tecnología** transforma parte de esa energía en una forma útil.

Ejemplos:

- panel fotovoltaico;
- colector solar térmico;
- aerogenerador;
- turbina hidráulica;
- digestor de biogás.

---

## 2. ¿Qué significa renovable?

Un recurso es renovable cuando sus flujos pueden reponerse naturalmente en escalas compatibles con el uso humano.

Eso no significa que cualquier ritmo de explotación sea sostenible.

Por ejemplo, una biomasa puede ser renovable en principio, pero una extracción más rápida que su regeneración puede producir:

- degradación;
- pérdida de suelo;
- pérdida de biodiversidad.

---

## 3. Renovable, baja en carbono y “limpia”

Estas expresiones no son sinónimos perfectos.

### Renovable

Describe reposición del recurso.

### Baja en carbono

Describe emisiones relativamente bajas de gases de efecto invernadero, normalmente considerando el ciclo de vida.

### “Limpia”

Es una expresión amplia y menos precisa, que puede ocultar impactos distintos.

En ciencia conviene preguntar:

> **¿qué impacto, medido cómo y durante qué etapa?**

---

## 4. Potencia y energía

Una instalación puede tener potencia nominal:

**P**

pero la energía producida depende del tiempo y del funcionamiento real.

<div class="formula-panel">
  <span class="formula-panel__label">Energía</span>
  <div class="formula-panel__formula">E = ∫P(t)dt</div>
</div>

Si la potencia fuera constante:

<div class="formula-panel">
  <span class="formula-panel__label">Caso simple</span>
  <div class="formula-panel__formula">E = PΔt</div>
</div>

---

## 5. Potencia instalada

La potencia instalada indica la potencia máxima nominal de los equipos bajo condiciones especificadas.

No indica directamente:

- cuánta energía producirán en un mes;
- cuántas horas funcionarán;
- cuánta energía podrá usar la red.

---

## 6. Factor de capacidad

Una medida útil es:

<div class="formula-panel">
  <span class="formula-panel__label">Factor de capacidad</span>
  <div class="formula-panel__formula">FC = E<sub>real</sub> / (P<sub>nom</sub>·Δt)</div>
</div>

Compara la energía realmente producida con la que se habría producido funcionando a potencia nominal todo el tiempo.

No es lo mismo que:

- eficiencia termodinámica.

---

## 7. Ejemplo de factor de capacidad

Un parque de 100 MW produce en un período una energía equivalente a funcionar todo el tiempo a 40 MW.

Entonces:

**FC ≈ 0,40 = 40 %**

Eso no implica que cada aerogenerador haya funcionado exactamente al 40 % de potencia en cada instante.

Es un promedio energético del período.

---

# Energía solar

## 8. Radiación solar

El Sol entrega energía mediante radiación electromagnética.

Al llegar a una superficie, la radiación puede:

- reflejarse;
- transmitirse;
- absorberse.

La energía absorbida puede transformarse en:

- energía interna;
- electricidad;
- energía química.

---

## 9. Irradiancia

La potencia radiante recibida por unidad de área se expresa como:

<div class="formula-panel">
  <span class="formula-panel__label">Irradiancia</span>
  <div class="formula-panel__formula">G = P/A</div>
</div>

Unidad:

**W/m²**

La irradiancia cambia con:

- hora;
- estación;
- nubosidad;
- latitud;
- orientación;
- inclinación.

---

## 10. Energía solar recibida

Si un panel de área A recibe una irradiancia aproximadamente constante G durante un tiempo Δt:

<div class="formula-panel">
  <span class="formula-panel__label">Energía incidente</span>
  <div class="formula-panel__formula">E<sub>inc</sub> ≈ GAΔt</div>
</div>

La energía eléctrica será sólo una fracción de ese valor.

---

## 11. Eficiencia fotovoltaica

Una definición simplificada:

<div class="formula-panel">
  <span class="formula-panel__label">Eficiencia</span>
  <div class="formula-panel__formula">η = P<sub>eléctrica</sub>/P<sub>solar incidente</sub></div>
</div>

La eficiencia depende de:

- tecnología;
- temperatura;
- espectro;
- condiciones de operación.

---

## 12. Qué hace una celda fotovoltaica

Una celda fotovoltaica utiliza un material semiconductor.

La radiación puede generar portadores de carga, y la estructura interna del dispositivo favorece una separación que permite obtener:

- diferencia de potencial;
- corriente en un circuito externo.

No es correcto imaginar que el panel “almacena luz”.

El panel:

- convierte parte de la energía radiante.

---

## 13. Fotovoltaica no es solar térmica

### Fotovoltaica

Radiación → electricidad.

### Solar térmica

Radiación → aumento de energía interna de un fluido o material.

Ambas usan al Sol, pero mediante:

- procesos diferentes.

---

## 14. Orientación y sombras

La producción de un panel depende de:

- orientación;
- inclinación;
- sombras;
- temperatura;
- suciedad;
- electrónica.

Por eso dos paneles nominalmente iguales pueden producir energías distintas.

---

# Energía eólica

## 15. De dónde proviene el viento

El viento se relaciona con diferencias de presión producidas por calentamiento desigual de la superficie terrestre y dinámica atmosférica.

Por eso la energía eólica es indirectamente una consecuencia de:

- radiación solar;
- rotación terrestre;
- circulación atmosférica.

---

## 16. Energía cinética del aire

Una masa de aire m con rapidez v tiene:

<div class="formula-panel">
  <span class="formula-panel__label">Cinética</span>
  <div class="formula-panel__formula">K = ½mv²</div>
</div>

Pero en una turbina nos interesa cuánta masa atraviesa el rotor por unidad de tiempo.

---

## 17. Potencia disponible en el viento

Para un flujo idealizado:

<div class="formula-panel">
  <span class="formula-panel__label">Potencia eólica disponible</span>
  <div class="formula-panel__formula">P<sub>viento</sub> = ½ρAv³</div>
</div>

donde:

- ρ es densidad del aire;
- A es área barrida por el rotor;
- v es velocidad del viento.

---

## 18. Dependencia cúbica

La presencia de:

**v³**

es fundamental.

Si la velocidad del viento se duplica:

<div class="formula-panel">
  <span class="formula-panel__label">Escalamiento</span>
  <div class="formula-panel__formula">P′/P = 2³ = 8</div>
</div>

La potencia disponible se multiplica por ocho, en el modelo ideal.

---

## 19. Una turbina no puede extraer toda la energía

Si una turbina detuviera completamente el aire detrás del rotor, el flujo no podría continuar atravesándola.

Existe un límite aerodinámico ideal, conocido como límite de Betz, de aproximadamente:

**59,3 %**

de la potencia cinética del viento atravesando el área del rotor.

Los sistemas reales tienen además otras pérdidas.

---

## 20. Curva de potencia

Un aerogenerador real no sigue simplemente v³ en todo el rango.

Tiene:

- velocidad de arranque;
- región de crecimiento;
- potencia nominal;
- velocidad de corte de seguridad.

La expresión ½ρAv³ describe el recurso del viento, no toda la respuesta del equipo.

---

## 21. Argentina y el viento

La Patagonia y otras regiones argentinas poseen zonas de recurso eólico importante.

Eso no significa que cualquier sitio sea equivalente.

La selección requiere medir:

- distribución de velocidades;
- turbulencia;
- acceso a red;
- ambiente;
- logística.

---

# Energía hidráulica

## 22. Agua en altura

Un volumen de agua a cierta altura tiene energía potencial gravitatoria.

Al descender puede entregar energía a una turbina.

---

## 23. Potencia hidráulica

Una forma idealizada muy útil es:

<div class="formula-panel">
  <span class="formula-panel__label">Potencia hidráulica</span>
  <div class="formula-panel__formula">P = ρgQHη</div>
</div>

donde:

- ρ es densidad del agua;
- g es gravedad;
- Q es caudal volumétrico;
- H es desnivel efectivo;
- η es rendimiento global.

---

## 24. Dos maneras de obtener potencia

Puede haber:

- gran caudal con desnivel moderado;
- menor caudal con gran desnivel.

La potencia depende del producto:

**QH**

además del rendimiento.

---

## 25. Embalses

Un embalse puede almacenar agua en altura.

Eso permite separar parcialmente:

- momento de disponibilidad del agua;
- momento de generación eléctrica.

Por eso algunas centrales hidráulicas ofrecen mayor capacidad de gestión que:

- solar;
- eólica sin almacenamiento.

---

## 26. Impactos hidráulicos

Una central puede modificar:

- ecosistemas;
- sedimentos;
- inundación de terrenos;
- migración de peces;
- dinámica social;
- disponibilidad de agua.

“Renovable” no elimina la necesidad de evaluar:

- impactos.

---

# Biomasa y biogás

## 27. Biomasa

La biomasa contiene energía química originada, directa o indirectamente, por fotosíntesis.

Puede utilizarse mediante:

- combustión;
- digestión anaeróbica;
- procesos termoquímicos;
- producción de biocombustibles.

---

## 28. Balance de carbono no automáticamente neutro

A veces se dice que quemar biomasa es “carbono neutro”.

Eso puede ser una simplificación excesiva.

El balance depende de:

- reposición de biomasa;
- cambios de uso del suelo;
- transporte;
- procesamiento;
- tiempo de regeneración;
- emisiones asociadas.

---

## 29. Biogás

La degradación anaeróbica de materia orgánica puede producir una mezcla rica en:

- metano;
- dióxido de carbono.

Ese gas puede emplearse como combustible.

También puede aprovechar residuos que de otro modo emitirían gases durante su descomposición.

---

# Geotermia

## 30. Energía geotérmica

La geotermia aprovecha energía térmica del interior terrestre.

Puede utilizarse para:

- calefacción directa;
- procesos;
- generación eléctrica en zonas adecuadas.

Su disponibilidad depende fuertemente de:

- geología local.

---

## 31. Renovable no significa uniformemente disponible

El recurso solar, eólico, hidráulico o geotérmico cambia geográficamente.

Por eso la transición energética tiene una componente:

- física;
- geográfica;
- tecnológica.

---

# Variabilidad y red

## 32. Variabilidad

Solar y eólica dependen de condiciones que cambian.

### Solar

- ciclo día/noche;
- nubes;
- estaciones.

### Eólica

- variación del viento en múltiples escalas temporales.

Esto se llama:

- variabilidad.

---

## 33. Variabilidad no es imprevisibilidad total

Los recursos pueden pronosticarse con distinto grado de precisión.

La operación de una red utiliza:

- mediciones;
- modelos meteorológicos;
- pronósticos;
- reservas;
- interconexión.

---

## 34. Gestionabilidad

Una fuente es más gestionable cuando su potencia puede ajustarse de manera controlada dentro de ciertos límites.

No toda fuente renovable tiene igual:

- gestionabilidad.

Una central con embalse puede ser muy diferente de:

- un panel solar sin batería.

---

## 35. La red debe equilibrar potencia

En una red eléctrica, generación y demanda deben mantenerse equilibradas continuamente dentro de tolerancias muy estrictas.

Por eso importa no sólo:

- cuánta energía anual se produce;

sino también:

- cuándo;
- dónde;
- a qué potencia.

---

# Almacenamiento

## 36. Para qué sirve almacenar

El almacenamiento puede desplazar energía desde un momento hacia otro.

Ejemplo:

```text
exceso solar al mediodía
        ↓
    almacenamiento
        ↓
uso por la tarde o noche
```

---

## 37. Baterías

Las baterías almacenan energía mediante cambios electroquímicos.

Son útiles por:

- rapidez de respuesta;
- modularidad;
- eficiencia elevada en ciertos sistemas.

También requieren:

- materiales;
- electrónica;
- control térmico;
- gestión del final de vida.

---

## 38. Bombeo hidroeléctrico

Puede usarse electricidad para bombear agua a un nivel más alto.

Luego el agua desciende atravesando turbinas.

Es una forma de almacenar energía como:

- energía potencial gravitatoria.

---

## 39. Hidrógeno — profundización

La electricidad puede utilizarse para producir hidrógeno mediante electrólisis.

Luego el hidrógeno puede:

- almacenarse;
- transportarse;
- utilizarse como materia prima;
- reconvertirse en energía.

Cada conversión tiene pérdidas.

Por eso no es una “batería perfecta”.

---

## 40. Rendimiento de ida y vuelta

Para almacenamiento:

<div class="formula-panel">
  <span class="formula-panel__label">Rendimiento global</span>
  <div class="formula-panel__formula">η<sub>rt</sub> = E<sub>devuelta</sub>/E<sub>cargada</sub></div>
</div>

Siempre debemos especificar:

- fronteras del sistema;
- qué etapas incluimos.

---

# Impactos y ciclo de vida

## 41. Ciclo de vida

Una evaluación completa puede considerar:

```text
extracción de materiales
→ fabricación
→ transporte
→ construcción
→ operación
→ mantenimiento
→ desmantelamiento
→ reciclaje o disposición
```

---

## 42. Emisiones de operación y de ciclo de vida

Un panel solar no emite CO₂ por combustión mientras genera electricidad.

Pero fabricar:

- vidrio;
- aluminio;
- silicio;
- estructuras;
- cables;

requiere energía y materiales.

Por eso conviene diferenciar:

- emisiones directas de operación;
- emisiones del ciclo de vida.

---

## 43. Uso de territorio

Distintas tecnologías requieren:

- diferentes superficies;
- infraestructura;
- líneas;
- caminos;
- embalses.

No existe una única métrica ambiental que resuma todo.

---

## 44. Biodiversidad

Los impactos pueden incluir:

- aves y murciélagos;
- hábitats;
- ecosistemas fluviales;
- cambios en uso del suelo.

La evaluación debe considerar:

- ubicación;
- diseño;
- mitigación;
- monitoreo.

---

## 45. Materiales

Una transición energética modifica la demanda de materiales como:

- cobre;
- aluminio;
- acero;
- silicio;
- litio;
- níquel;
- tierras raras en algunos equipos.

Eso conecta energía con:

- minería;
- reciclaje;
- cadenas de suministro.

---

## 46. Diversidad de tecnologías

No suele existir una única fuente que resuelva por sí sola:

- generación;
- almacenamiento;
- potencia firme;
- transporte;
- industria;
- calor.

Los sistemas energéticos combinan:

- tecnologías;
- redes;
- almacenamiento;
- eficiencia;
- gestión de demanda.

---

## 47. Experiencia segura: recurso solar

Sin intervenir instalaciones eléctricas se puede comparar la radiación recibida por superficies con distintas orientaciones.

Por ejemplo:

- dos recipientes iguales;
- misma cantidad de agua;
- distinto sombreado u orientación;
- medición de temperatura con el tiempo.

Hay que controlar:

- material;
- volumen;
- condiciones iniciales.

El experimento estudia absorción térmica solar, no generación fotovoltaica.

---

## 48. Actividad con datos

Tomá una serie horaria ficticia de potencia solar:

| Hora | P (kW) |
| ---: | ---: |
| 8 | 0,5 |
| 10 | 2,0 |
| 12 | 3,5 |
| 14 | 3,0 |
| 16 | 1,5 |
| 18 | 0,2 |

Preguntas:

1. ¿a qué hora es máxima la potencia?
2. ¿la energía diaria puede obtenerse sólo mirando el máximo?
3. ¿cómo estimarías el área bajo P(t)?
4. ¿qué cambiaría si aparecieran nubes?

---

## 49. Herramientas matemáticas útiles

Esta aplicación utiliza:

- M-03 — Porcentajes;
- M-05 — Notación científica;
- M-11 — Interpretación de gráficos;
- M-16 — Áreas y volúmenes.

---

## 50. Errores frecuentes

### “Renovable significa impacto cero”

No.

### “100 MW instalados producen 100 MW todo el año”

No.

### “Factor de capacidad es eficiencia”

No.

### “Si el viento se duplica, la potencia sólo se duplica”

No en el recurso ideal: depende de v³.

### “Una batería genera energía”

No. Almacena energía previamente entregada al sistema.

### “Variabilidad significa que una fuente es inútil”

No. Significa que el sistema debe gestionarla mediante combinación de recursos, red, almacenamiento, pronóstico y demanda.

---

## 51. Problemas graduados

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Conceptos</strong>
  </div>
  <ol>
    <li>Distinguí fuente energética de tecnología de conversión.</li>
    <li>Explicá por qué renovable no significa impacto cero.</li>
    <li>Distinguí potencia instalada de energía producida.</li>
    <li>¿Qué diferencia existe entre fotovoltaica y solar térmica?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Cálculo</strong>
  </div>
  <ol>
    <li>Un panel recibe 800 W/m² sobre 2 m². Calculá la potencia solar incidente.</li>
    <li>Si entrega 320 W eléctricos, estimá η.</li>
    <li>Si el viento pasa de 5 a 10 m/s, ¿por qué factor cambia ½ρAv³?</li>
    <li>Calculá P hidráulica ideal para ρ=1000 kg/m³, Q=2 m³/s y H=20 m, tomando g≈9,8 m/s² y η=1.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Producción</strong>
  </div>
  <ol>
    <li>Una instalación de 50 MW produce 131 400 MWh en un año de 8760 h. Calculá su factor de capacidad.</li>
    <li>Explicá por qué ese número no es eficiencia energética.</li>
    <li>Proponé dos causas físicas de variación de la producción.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Sistema eléctrico</strong>
  </div>
  <ol>
    <li>Diseñá conceptualmente un sistema con solar, eólica, hidráulica y baterías para una demanda variable.</li>
    <li>Indicá qué componente podría ayudar durante una caída rápida de generación solar.</li>
    <li>Explicá por qué energía anual suficiente no garantiza potencia suficiente en cada instante.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Analizá por qué el límite de Betz impide extraer el 100 % de la energía cinética del flujo eólico.</li>
    <li>Compará emisiones de operación con emisiones de ciclo de vida.</li>
    <li>Construí una matriz de comparación entre dos tecnologías usando al menos cinco criterios diferentes.</li>
  </ol>
</div>

---

## 52. Ejemplo integrado

Un parque eólico tiene:

**P<sub>nom</sub> = 120 MW**

Durante 30 días produce:

**E = 43 200 MWh**

El máximo teórico del período a potencia nominal constante sería:

<div class="formula-panel">
  <span class="formula-panel__label">Máximo nominal</span>
  <div class="formula-panel__formula">E<sub>máx</sub> = 120 MW · 720 h = 86 400 MWh</div>
</div>

Por lo tanto:

<div class="formula-panel">
  <span class="formula-panel__label">Factor de capacidad</span>
  <div class="formula-panel__formula">FC = 43 200/86 400 = 0,50 = 50 %</div>
</div>

Eso significa que la energía mensual fue equivalente a producir continuamente:

**60 MW**

No significa que el parque haya entregado:

- 60 MW exactos todo el tiempo.

---

## 53. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Qué describe el factor de capacidad?</summary>
  <div class="lesson-quiz__answer">
    La relación entre la energía realmente producida y la que se habría producido funcionando a potencia nominal durante todo el período.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Por qué la potencia disponible del viento es muy sensible a v?</summary>
  <div class="lesson-quiz__answer">
    Porque en el modelo ideal P=½ρAv³: la velocidad aparece elevada al cubo.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Una batería es una fuente primaria de energía?</summary>
  <div class="lesson-quiz__answer">
    No. Es un sistema de almacenamiento: recibe energía, la conserva mediante transformaciones electroquímicas y puede devolver una fracción posteriormente.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Por qué una tecnología renovable debe evaluarse por ciclo de vida?</summary>
  <div class="lesson-quiz__answer">
    Porque fabricación, materiales, transporte, construcción, operación y fin de vida también requieren recursos y pueden producir impactos.
  </div>
</details>

---

## 54. Resumen

- Renovable describe reposición del recurso, no ausencia de impactos.
- Fuente energética y tecnología de conversión son conceptos distintos.
- Potencia instalada y energía producida no son equivalentes.
- El factor de capacidad compara producción real con producción nominal máxima del período.
- Solar fotovoltaica convierte radiación en electricidad.
- Solar térmica transforma radiación en energía interna.
- La potencia eólica disponible escala aproximadamente con v³.
- La hidráulica depende de caudal, desnivel y rendimiento.
- Biomasa y biogás requieren analizar el ciclo del carbono completo.
- Geotermia depende fuertemente de la geología.
- Solar y eólica son variables, pero pronosticables en parte.
- El almacenamiento desplaza energía entre momentos.
- La red debe equilibrar continuamente generación y demanda.
- Los impactos deben evaluarse a lo largo del ciclo de vida.
- Un sistema energético real combina múltiples tecnologías.

---

## 55. Siguiente aplicación

**A-05 — Cambio climático y balance energético terrestre**

Usaremos las ideas de:

- radiación;
- absorción;
- reflexión;
- energía térmica;
- equilibrio;

para comprender por qué la temperatura media del planeta depende del balance entre energía entrante y saliente.
