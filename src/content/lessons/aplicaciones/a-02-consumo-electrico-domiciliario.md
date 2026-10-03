---
title: "Consumo eléctrico domiciliario"
description: "Cómo estimar el consumo eléctrico de un hogar a partir de potencia y tiempo, interpretar kW y kWh, leer etiquetas, comprender ciclos de funcionamiento y analizar una factura sin confundir energía con costo."
slug: "consumo-electrico-domiciliario"
course: "aplicaciones"
module: "electricidad-en-el-hogar"
order: 2
level: "intermedio"
cycle: "ambos"
yearsApprox: [2, 3, 4, 5, 6]
jurisdictions: ["nacional", "caba", "pba"]
prerequisites:
  - energia-en-la-vida-cotidiana
  - corriente-y-circuitos-electricos
  - corriente-electrica-y-circuitos
skills:
  - potencia-electrica
  - energia-electrica
  - kilowatt
  - kilowatt-hora
  - consumo-domiciliario
  - estimacion-de-consumo
  - medidor-electrico
  - etiqueta-de-eficiencia
  - ciclo-de-funcionamiento
  - consumo-en-espera
  - factura-electrica
  - eficiencia-energetica
hasExercises: true
hasQuiz: true
hasExperiment: true
deepening: true
status: "complete"
---

## Una pava de 2000 W puede consumir menos energía que una lámpara

Una pava eléctrica puede indicar **2000 W** y una lámpara LED apenas **10 W**. La pava tiene doscientas veces más potencia, pero puede funcionar sólo unos minutos mientras la lámpara permanece encendida muchas horas.

Para comparar consumo necesitamos dos datos:

- potencia;
- tiempo de uso.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>La potencia indica qué tan rápido un artefacto transforma energía. El consumo domiciliario contabiliza energía y suele expresarse en kilowatt-hora. Potencia alta no implica automáticamente consumo mensual alto.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta aplicación deberías poder:

- distinguir W, kW, Wh y kWh;
- calcular energía a partir de potencia y tiempo;
- estimar consumo diario y mensual;
- interpretar potencia nominal;
- reconocer ciclos de encendido y modulación;
- comprender qué registra un medidor;
- distinguir consumo energético de precio final;
- interpretar etiquetas de eficiencia;
- comprender consumo en espera;
- identificar incertidumbres en una estimación doméstica;
- diseñar una auditoría energética simple sin intervenir la instalación.

---

## 1. Potencia eléctrica

<div class="formula-panel">
  <span class="formula-panel__label">Potencia</span>
  <div class="formula-panel__formula">P = ΔE/Δt</div>
</div>

En SI:

**1 W = 1 J/s**

---

## 2. Kilowatt

<div class="formula-panel">
  <span class="formula-panel__label">Potencia</span>
  <div class="formula-panel__formula">1 kW = 1000 W</div>
</div>

Muchos artefactos de calentamiento doméstico tienen potencias del orden de los kilowatts.

---

## 3. Energía eléctrica

Si la potencia puede modelarse aproximadamente constante:

<div class="formula-panel">
  <span class="formula-panel__label">Energía</span>
  <div class="formula-panel__formula">E = PΔt</div>
</div>

---

## 4. Watt-hora y kilowatt-hora

Si P está en watt y t en horas, obtenemos Wh.

Para consumos domiciliarios es cómodo usar:

<div class="formula-panel">
  <span class="formula-panel__label">Consumo</span>
  <div class="formula-panel__formula">E(kWh) = P(kW)·t(h)</div>
</div>

---

## 5. kW no es kWh

### kW

Potencia.

### kWh

Energía.

Confundirlos es parecido a confundir rapidez con distancia recorrida.

---

## 6. Ejemplo: lámpara

Lámpara:

**9 W = 0,009 kW**

Uso:

**6 h/día**

<div class="formula-panel">
  <span class="formula-panel__label">Energía diaria</span>
  <div class="formula-panel__formula">E = 0,009·6 = 0,054 kWh/día</div>
</div>

En 30 días:

**1,62 kWh**

---

## 7. Ejemplo: pava

Potencia:

**2,0 kW**

Uso:

**10 min/día = 1/6 h/día**

<div class="formula-panel">
  <span class="formula-panel__label">Consumo diario</span>
  <div class="formula-panel__formula">E ≈ 2,0·(1/6) = 0,33 kWh/día</div>
</div>

---

## 8. Comparar potencia y tiempo

Un artefacto muy potente usado brevemente puede consumir menos energía mensual que otro de menor potencia usado muchas horas.

La comparación correcta requiere:

- potencia;
- tiempo;
- cantidad de días;
- modo de funcionamiento.

---

## 9. Potencia nominal

La placa de un dispositivo puede indicar una potencia nominal. Ese valor corresponde a condiciones definidas de funcionamiento.

No significa necesariamente que el equipo consuma exactamente esa potencia en todo instante.

---

## 10. Artefactos con termostato

Una heladera, aire acondicionado, plancha o calefactor con control puede:

- encender y apagar;
- modular;
- trabajar por ciclos.

Por eso multiplicar potencia nominal por 24 h puede sobreestimar fuertemente el consumo real.

---

## 11. Ciclo de funcionamiento

Un aparato de 1,5 kW está activo el 40 % de un intervalo de 10 h.

Tiempo equivalente de actividad:

**4 h**

<div class="formula-panel">
  <span class="formula-panel__label">Consumo</span>
  <div class="formula-panel__formula">E ≈ 1,5·4 = 6 kWh</div>
</div>

---

## 12. Potencia media

Podemos describir un funcionamiento variable mediante:

<div class="formula-panel">
  <span class="formula-panel__label">Promedio</span>
  <div class="formula-panel__formula">P<sub>media</sub> = E/Δt</div>
</div>

No debe confundirse con potencia máxima o nominal.

---

## 13. Qué registra el medidor

El medidor domiciliario registra energía acumulada consumida por la instalación.

La magnitud central de facturación es normalmente:

**kWh**

---

## 14. Lectura por diferencia

Si un medidor pasa de 12 500 kWh a 12 680 kWh:

<div class="formula-panel">
  <span class="formula-panel__label">Consumo del período</span>
  <div class="formula-panel__formula">ΔE = 180 kWh</div>
</div>

---

## 15. Consumo y costo son cosas distintas

### Consumo

Pregunta física: ¿cuánta energía eléctrica se utilizó?

### Costo

Pregunta económica y regulatoria: ¿cómo se valoriza ese consumo bajo una tarifa concreta?

---

## 16. Por qué no usamos un precio fijo por kWh

El importe final puede incluir, según el esquema vigente:

- cargos fijos;
- cargos variables;
- impuestos;
- subsidios o bonificaciones;
- categorías de usuario;
- otros conceptos.

Las tarifas cambian. El concepto físico de kWh no.

---

## 17. Construir una tabla del hogar

| Artefacto | Potencia | Uso diario | Días/mes | Energía estimada |
| --- | ---: | ---: | ---: | ---: |
| LED | 0,009 kW | 6 h | 30 | 1,62 kWh |
| Pava | 2,0 kW | 0,17 h | 30 | ~10 kWh |
| Otro | ... | ... | ... | ... |

---

## 18. Consumo total aproximado

<div class="formula-panel">
  <span class="formula-panel__label">Total</span>
  <div class="formula-panel__formula">E<sub>total</sub> ≈ ΣE<sub>i</sub></div>
</div>

El resultado depende de la calidad de las estimaciones de cada artefacto.

---

## 19. Qué conviene mirar primero

Para encontrar consumos dominantes observá:

- potencias altas;
- tiempos largos;
- frecuencia de uso;
- calentamiento eléctrico;
- climatización;
- motores;
- equipos permanentes.

---

## 20. Calefacción eléctrica

Los aparatos que producen calor por efecto resistivo suelen tener potencias elevadas. Si funcionan muchas horas, pueden dominar el consumo.

El ENRE publica tablas de consumos típicos de electrodomésticos para ayudar a estimar órdenes de magnitud.

---

## 21. Heladeras

Una heladera no mantiene necesariamente el compresor encendido todo el tiempo.

Su consumo depende de:

- temperatura ambiente;
- aperturas de puerta;
- carga;
- eficiencia;
- regulación;
- estado del equipo.

---

## 22. Aire acondicionado

El consumo puede variar con:

- tecnología;
- temperatura seleccionada;
- tamaño del ambiente;
- aislamiento;
- clima exterior;
- mantenimiento.

Una sola potencia de placa no resume el consumo estacional.

---

## 23. Eficiencia energética

Dos equipos pueden brindar un servicio similar utilizando distinta cantidad de energía.

La eficiencia busca comparar el resultado útil con la energía requerida.

---

## 24. Etiquetas de eficiencia

Las etiquetas pueden mostrar, según la categoría:

- clase de eficiencia;
- potencia;
- consumo anual;
- capacidad;
- otras prestaciones.

La información debe interpretarse según el tipo de producto.

---

## 25. No comparar letras fuera de contexto

Una clase de eficiencia tiene sentido dentro de una categoría y una norma determinada.

No conviene comparar una heladera y una lámpara sólo por la letra de la etiqueta.

---

## 26. Consumo en espera

Algunos dispositivos consumen energía aunque no estén realizando su función principal:

- televisores;
- decodificadores;
- equipos de red;
- cargadores;
- aparatos en espera.

Un consumo pequeño por hora puede acumularse durante muchas horas.

---

## 27. No manipular la instalación para ahorrar

El análisis energético no requiere abrir tableros ni modificar enchufes, cables o protecciones.

Cualquier intervención sobre instalaciones fijas corresponde a profesionales habilitados.

---

## 28. Potencia eléctrica y corriente

En un caso resistivo idealizado:

<div class="formula-panel">
  <span class="formula-panel__label">Potencia</span>
  <div class="formula-panel__formula">P = VI</div>
</div>

En corriente alterna real pueden aparecer además factor de potencia, desfase y formas de onda no ideales.

Para una auditoría doméstica básica suele ser preferible partir de datos nominales y energía medida.

---

## 29. Contexto argentino

La red de distribución eléctrica domiciliaria argentina utiliza nominalmente:

**220 V, 50 Hz**

Los equipos conectados deben ser compatibles con esas condiciones.

---

## 30. Simultaneidad

Consumo mensual y potencia simultánea son conceptos distintos.

Podemos tener varios artefactos conectados al mismo tiempo y producir una demanda instantánea elevada aunque el consumo mensual no sea extremo.

Eso importa para el dimensionamiento de circuitos y protecciones, que debe realizar personal competente.

---

## 31. Auditoría energética segura

Sin abrir nada:

1. leé potencia de placa o manual;
2. estimá horas de uso;
3. registrá días;
4. calculá kWh;
5. compará con el consumo medido del hogar;
6. investigá diferencias.

---

## 32. Por qué la suma puede no coincidir con la factura

Causas posibles:

- tiempos estimados incorrectos;
- ciclos automáticos;
- consumos olvidados;
- equipos en espera;
- potencia variable;
- período distinto;
- errores de lectura.

La diferencia sirve para mejorar el modelo.

---

## 33. Medidores enchufables

Existen medidores comerciales para estimar consumo de un artefacto.

Deben usarse siguiendo el manual, dentro de sus límites y sin modificar cables ni tomacorrientes.

Para instalaciones fijas o cargas importantes corresponde consultar a un profesional.

---

## 34. Eficiencia no significa privación

Usar energía eficientemente significa obtener el servicio deseado con menos consumo o menos desperdicio.

Ejemplos:

- iluminación LED;
- mejor aislamiento;
- regulación adecuada;
- equipos eficientes.

---

## 35. Eficiencia y hábitos

El consumo depende tanto de la tecnología como de:

- tiempo de uso;
- configuración;
- hábitos.

Un equipo eficiente usado innecesariamente muchas horas puede consumir más que uno usado con criterio.

---

## 36. Herramientas matemáticas útiles

Esta aplicación usa especialmente:

- M-02 — Proporciones;
- M-03 — Porcentajes;
- M-05 — Notación científica;
- M-06 — Despeje de fórmulas;
- M-11 — Interpretación de gráficos.

---

## 37. Errores frecuentes

### “W × h sigue dando W”

No. Da Wh, una unidad de energía.

### “La potencia nominal vale igual todo el tiempo”

No necesariamente.

### “Un precio por kWh sirve para siempre”

No. Las tarifas cambian.

### “Un equipo eficiente siempre consume poco”

El consumo real también depende del uso.

---

## 38. Actividad: mapa de consumo del hogar

Elegí entre 5 y 10 artefactos y registrá:

- potencia nominal;
- tiempo de uso aproximado;
- días por mes;
- energía estimada.

Ordenalos de mayor a menor consumo.

Luego preguntate:

> ¿los de mayor potencia fueron necesariamente los de mayor consumo mensual?

---

## 39. Problemas graduados

<div class="exercise-level">
  <div class="exercise-level__header"><span>Nivel 1</span><strong>Unidades</strong></div>
  <ol>
    <li>Convertí 1500 W a kW.</li>
    <li>¿Qué magnitud mide el kWh?</li>
    <li>Un equipo de 0,2 kW funciona 3 h. Hallá E.</li>
    <li>Convertí 2,5 kWh a MJ.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header"><span>Nivel 2</span><strong>Consumo mensual</strong></div>
  <ol>
    <li>Una lámpara de 12 W funciona 5 h/día durante 30 días. Estimá kWh.</li>
    <li>Una pava de 2 kW funciona 8 min/día durante 30 días. Estimá kWh.</li>
    <li>Compará ambos resultados.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header"><span>Nivel 3</span><strong>Ciclos</strong></div>
  <ol>
    <li>Un calefactor de 1,5 kW está activo el 60 % de 6 h. Estimá energía diaria.</li>
    <li>Calculá la potencia media en esas 6 h.</li>
    <li>Explicá por qué 1,5 kW·6 h sobreestimaría el consumo.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header"><span>Nivel 4</span><strong>Modelo del hogar</strong></div>
  <ol>
    <li>Construí un inventario de cinco cargas y estimá consumo mensual.</li>
    <li>Compará con un valor hipotético de medidor de 180 kWh.</li>
    <li>Proponé tres razones físicas para una diferencia del 20 %.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header"><span>Nivel 5</span><strong>Profundización</strong></div>
  <ol>
    <li>Explicá por qué potencia simultánea y energía mensual responden preguntas distintas.</li>
    <li>Analizá las limitaciones de estimar una heladera mediante potencia nominal por 24 h.</li>
    <li>Diseñá una metodología de auditoría doméstica sin intervenir la instalación.</li>
  </ol>
</div>

---

## 40. Ejemplo integrado

Un hogar usa:

- 4 lámparas LED de 9 W, 5 h/día;
- una pava de 2,0 kW, 12 min/día;
- un televisor de 90 W, 4 h/día.

### Iluminación

**4·9 W = 36 W = 0,036 kW**

<div class="formula-panel">
  <span class="formula-panel__label">LED</span>
  <div class="formula-panel__formula">E = 0,036·5·30 = 5,4 kWh</div>
</div>

### Pava

12 min = 0,20 h

<div class="formula-panel">
  <span class="formula-panel__label">Pava</span>
  <div class="formula-panel__formula">E = 2,0·0,20·30 = 12 kWh</div>
</div>

### Televisor

<div class="formula-panel">
  <span class="formula-panel__label">TV</span>
  <div class="formula-panel__formula">E = 0,090·4·30 = 10,8 kWh</div>
</div>

Subtotal:

<div class="formula-panel">
  <span class="formula-panel__label">Subtotal</span>
  <div class="formula-panel__formula">E ≈ 28,2 kWh/mes</div>
</div>

Todavía faltan heladera, lavado, climatización y otros consumos.

---

## 41. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Qué diferencia existe entre kW y kWh?</summary>
  <div class="lesson-quiz__answer">kW mide potencia; kWh mide energía.</div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Por qué potencia nominal × 24 h puede ser mala estimación para una heladera?</summary>
  <div class="lesson-quiz__answer">Porque el compresor puede funcionar por ciclos o modular, y no necesariamente trabaja a potencia nominal durante todo el día.</div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Qué registra esencialmente un medidor domiciliario?</summary>
  <div class="lesson-quiz__answer">Energía eléctrica acumulada, normalmente expresada en kWh.</div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Por qué no fijamos un precio por kWh?</summary>
  <div class="lesson-quiz__answer">Porque las tarifas dependen del período, categoría, regulación, impuestos y otros componentes. El concepto físico de energía es independiente de esos valores.</div>
</details>

---

## 42. Resumen

- Potencia se mide en W o kW.
- Energía consumida suele expresarse en Wh o kWh.
- E=PΔt cuando la potencia puede modelarse constante.
- kW y kWh no son intercambiables.
- El tiempo de uso es tan importante como la potencia.
- Equipos con control automático pueden tener potencia variable.
- El medidor registra energía acumulada.
- La factura combina consumo con reglas tarifarias y otros cargos.
- Las etiquetas ayudan a comparar eficiencia dentro de categorías.
- Toda estimación doméstica debe explicitar supuestos.
- No hace falta manipular la instalación para realizar una auditoría energética educativa.
- La red argentina utiliza nominalmente 220 V y 50 Hz en el contexto domiciliario habitual.

---

## 43. Fuentes públicas útiles

Para contextualizar consumos y eficiencia pueden consultarse recursos oficiales del ENRE y de la Secretaría de Energía sobre:

- consumo básico de electrodomésticos;
- calculadora de consumo eléctrico;
- etiquetado de eficiencia energética.

Los valores reales dependen del equipo y del uso.

---

## 44. Siguiente aplicación

**A-03 — Seguridad eléctrica**

Pasaremos de la energía consumida a una pregunta distinta:

> ¿cómo se reducen los riesgos de contacto eléctrico, sobrecorriente, fallas de aislación y calentamiento?
