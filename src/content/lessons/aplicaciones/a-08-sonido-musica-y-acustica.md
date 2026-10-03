---
title: "Sonido, música y acústica"
description: "Cómo conectar frecuencia, amplitud, armónicos, resonancia, intensidad y decibeles con notas musicales, instrumentos, timbre, salas y percepción auditiva."
slug: "sonido-musica-y-acustica"

course: "aplicaciones"
module: "ondas-y-percepcion"
order: 8

level: "intermedio"
cycle: "ambos"

yearsApprox: [3, 4, 5, 6]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - ondas
  - acustica
  - logaritmos

skills:
  - sonido
  - musica
  - frecuencia
  - periodo
  - longitud-de-onda
  - tono
  - amplitud
  - intensidad
  - decibel
  - timbre
  - armonicos
  - frecuencia-fundamental
  - resonancia
  - ondas-estacionarias
  - cuerdas
  - tubos-sonoros
  - batidos
  - afinacion
  - reverberacion
  - absorcion-acustica
  - percepcion-auditiva

hasExercises: true
hasQuiz: true
hasExperiment: true

deepening: true
status: "complete"
---

## Dos instrumentos pueden tocar la misma nota y sonar distintos

Una guitarra y una flauta pueden producir una nota con la misma frecuencia fundamental.

Sin embargo, normalmente distinguimos cuál instrumento suena.

¿Por qué?

Porque un sonido musical real contiene:

- fundamental;
- armónicos;
- transitorios;
- envolvente temporal;
- ruido;
- resonancias propias del instrumento.

La frecuencia fundamental ayuda a determinar el **tono percibido**, pero no describe todo el sonido.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>La acústica física describe presión, frecuencia, intensidad, espectro y propagación. La percepción musical agrega cómo el sistema auditivo y el cerebro interpretan esas señales. Magnitud física y sensación perceptiva están relacionadas, pero no son idénticas.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta aplicación deberías poder:

- explicar cómo se produce y propaga el sonido;
- relacionar frecuencia, período, longitud de onda y velocidad;
- distinguir frecuencia física de tono percibido;
- distinguir amplitud, intensidad y nivel sonoro;
- interpretar la escala en decibeles;
- explicar frecuencia fundamental y armónicos;
- comprender ondas estacionarias en cuerdas y tubos;
- interpretar resonancia;
- comprender por qué instrumentos distintos tienen timbres diferentes;
- explicar batidos y afinación;
- relacionar tamaño de un instrumento con frecuencias características;
- comprender reflexión, absorción y reverberación;
- interpretar cualitativamente la acústica de salas;
- distinguir señal acústica de percepción auditiva;
- reconocer prácticas generales de cuidado auditivo sin convertirlas en diagnóstico clínico.

---

# Sonido como onda

## 1. Una perturbación mecánica

El sonido en aire es una onda mecánica.

Requiere:

- un medio material.

En el vacío no se propaga sonido.

---

## 2. Compresiones y rarefacciones

Una fuente vibrante produce cambios de presión.

En el aire aparecen regiones de:

- compresión;
- rarefacción.

La onda transporta energía e información sin transportar todo el aire desde la fuente hasta el oyente.

---

## 3. Velocidad del sonido

La velocidad depende de:

- medio;
- temperatura;
- propiedades mecánicas.

En aire cercano a temperatura ambiente suele estar alrededor de:

**340 m/s**

como orden de magnitud.

No es universal.

---

## 4. Relación fundamental

<div class="formula-panel">
  <span class="formula-panel__label">Onda</span>
  <div class="formula-panel__formula">v = λf</div>
</div>

donde:

- v es velocidad de propagación;
- λ longitud de onda;
- f frecuencia.

---

## 5. Ejemplo

Para:

**f = 440 Hz**

y usando:

**v≈343 m/s**

la longitud de onda es:

<div class="formula-panel">
  <span class="formula-panel__label">Longitud de onda</span>
  <div class="formula-panel__formula">λ ≈ 343/440 ≈ 0,78 m</div>
</div>

---

# Frecuencia y tono

## 6. Frecuencia

La frecuencia indica cuántos ciclos ocurren por segundo.

Unidad:

**hertz (Hz)**

---

## 7. Tono

La percepción de “grave” y “agudo” está fuertemente relacionada con la frecuencia fundamental.

Pero el tono percibido también depende de:

- espectro;
- intensidad;
- contexto;
- sistema auditivo.

No es una traducción matemática perfecta de f.

---

## 8. Octava

En la afinación musical habitual, duplicar la frecuencia corresponde a subir aproximadamente una:

- octava.

Ejemplo:

- 220 Hz;
- 440 Hz;
- 880 Hz.

---

## 9. Escala logarítmica de altura musical

El oído y los sistemas musicales no organizan las notas por diferencias iguales de frecuencia.

Importan mucho las:

- razones de frecuencia.

Por eso la música tiene conexiones naturales con:

- logaritmos.

---

# Amplitud, intensidad y nivel

## 10. Amplitud

La amplitud describe el tamaño de una oscilación.

En sonido podemos estudiar amplitud de:

- presión;
- desplazamiento;
- velocidad de partículas del medio.

No es lo mismo que:

- frecuencia.

---

## 11. Intensidad

La intensidad acústica es potencia por unidad de área:

<div class="formula-panel">
  <span class="formula-panel__label">Intensidad</span>
  <div class="formula-panel__formula">I = P/A</div>
</div>

Unidad:

**W/m²**

---

## 12. Propagación esférica ideal

Para una fuente puntual que emite uniformemente y sin absorción:

<div class="formula-panel">
  <span class="formula-panel__label">Idealización</span>
  <div class="formula-panel__formula">I = P/(4πr²)</div>
</div>

Entonces:

**I∝1/r²**

---

## 13. Duplicar distancia

En ese modelo:

- r → 2r;

produce:

- I → I/4.

Una sala real puede apartarse mucho por:

- reflexiones;
- absorción;
- geometría.

---

## 14. Nivel sonoro

Una escala común es:

<div class="formula-panel">
  <span class="formula-panel__label">Decibeles</span>
  <div class="formula-panel__formula">L = 10 log(I/I<sub>0</sub>)</div>
</div>

La razón I/I<sub>0</sub> es:

- adimensional.

---

## 15. Decibel no es intensidad

El decibel expresa un nivel logarítmico relativo a una referencia.

No se mide en:

- W/m².

---

## 16. Factores multiplicativos

Si la intensidad se multiplica por 10:

- el nivel aumenta 10 dB.

Si se multiplica por 2:

- aumenta aproximadamente 3 dB.

---

## 17. Sumar niveles no es sumar números directamente

Dos fuentes independientes de igual intensidad duplican la intensidad total.

Por eso el nivel aumenta aproximadamente:

**3 dB**

y no el doble del número de dB.

---

# Timbre y espectro

## 18. Onda sinusoidal

Una sinusoide pura contiene una sola frecuencia.

Muchos sonidos musicales reales contienen:

- múltiples frecuencias.

---

## 19. Espectro

El espectro muestra cómo se distribuye la señal entre frecuencias.

Puede contener:

- fundamental;
- armónicos;
- componentes no armónicas;
- ruido.

---

## 20. Frecuencia fundamental

En muchos instrumentos periódicos, la frecuencia fundamental corresponde al período global de repetición de la señal.

Suele estar fuertemente relacionada con la nota percibida.

---

## 21. Armónicos

Los armónicos tienen frecuencias:

<div class="formula-panel">
  <span class="formula-panel__label">Serie armónica</span>
  <div class="formula-panel__formula">f<sub>n</sub> = nf<sub>1</sub></div>
</div>

para:

**n = 1,2,3,...**

en sistemas ideales apropiados.

---

## 22. Timbre

El timbre depende de:

- amplitudes relativas de componentes;
- fases en ciertos contextos;
- ataque;
- decaimiento;
- sostenimiento;
- transitorios;
- ruido.

Por eso dos instrumentos con igual f<sub>1</sub> pueden sonar distintos.

---

# Cuerdas

## 23. Onda estacionaria

En una cuerda fija en ambos extremos, las reflexiones pueden formar patrones con:

- nodos;
- vientres.

Sólo ciertas longitudes de onda cumplen las condiciones de borde.

---

## 24. Modos permitidos

Para una cuerda ideal de longitud L:

<div class="formula-panel">
  <span class="formula-panel__label">Longitudes de onda</span>
  <div class="formula-panel__formula">λ<sub>n</sub> = 2L/n</div>
</div>

---

## 25. Frecuencias de una cuerda ideal

<div class="formula-panel">
  <span class="formula-panel__label">Frecuencias</span>
  <div class="formula-panel__formula">f<sub>n</sub> = nv/(2L)</div>
</div>

---

## 26. Velocidad en una cuerda — profundización

Para una cuerda ideal:

<div class="formula-panel">
  <span class="formula-panel__label">Cuerda</span>
  <div class="formula-panel__formula">v = √(T/μ)</div>
</div>

donde:

- T es tensión;
- μ masa por unidad de longitud.

---

## 27. Afinar una cuerda

Aumentar T aumenta v y, para el mismo modo:

- aumenta f.

Aumentar L disminuye:

- f.

Aumentar μ disminuye:

- f.

---

# Tubos sonoros

## 28. Columna de aire

En un instrumento de viento vibra una columna de aire.

Las condiciones en los extremos determinan:

- modos permitidos.

---

## 29. Tubo abierto-abierto

Para un tubo ideal abierto en ambos extremos:

<div class="formula-panel">
  <span class="formula-panel__label">Fundamental</span>
  <div class="formula-panel__formula">f<sub>1</sub> = v/(2L)</div>
</div>

Aparece una serie de armónicos enteros idealizada.

---

## 30. Tubo cerrado-abierto

En un tubo ideal con un extremo cerrado:

<div class="formula-panel">
  <span class="formula-panel__label">Fundamental</span>
  <div class="formula-panel__formula">f<sub>1</sub> = v/(4L)</div>
</div>

En el modelo simple aparecen principalmente:

- armónicos impares.

Los instrumentos reales son más complejos.

---

# Resonancia

## 31. Frecuencia natural

Un sistema oscilante posee frecuencias propias.

Si recibe una excitación periódica cercana a una de ellas, la amplitud puede aumentar.

Eso es:

- resonancia.

---

## 32. Resonancia no significa energía infinita

Los sistemas reales tienen:

- disipación;
- pérdidas;
- no linealidades;
- límites estructurales.

La amplitud permanece limitada.

---

## 33. Caja de resonancia

En una guitarra, violín u otros instrumentos, el cuerpo ayuda a transferir energía vibratoria al aire.

No “crea” energía.

Mejora el acoplamiento entre:

- cuerda;
- estructura;
- aire.

---

# Batidos y afinación

## 34. Dos frecuencias cercanas

Si superponemos dos tonos de frecuencias f<sub>1</sub> y f<sub>2</sub> próximas, la amplitud resultante varía lentamente.

Aparecen:

- batidos.

---

## 35. Frecuencia de batido

<div class="formula-panel">
  <span class="formula-panel__label">Batidos</span>
  <div class="formula-panel__formula">f<sub>b</sub> = |f<sub>1</sub> − f<sub>2</sub>|</div>
</div>

---

## 36. Afinación por batidos

Si dos tonos deberían coincidir, reducir la frecuencia de batidos ayuda a acercar sus frecuencias.

Es una aplicación directa de:

- interferencia.

---

# Acústica de salas

## 37. Reflexión

El sonido puede reflejarse en:

- paredes;
- techo;
- piso;
- objetos.

Las reflexiones modifican lo que llega al oyente.

---

## 38. Absorción

Materiales distintos absorben diferentes fracciones de energía acústica.

La absorción depende de:

- frecuencia;
- material;
- espesor;
- montaje.

No existe un material universalmente “absorbente” en todas las frecuencias.

---

## 39. Reverberación

Después de que la fuente se detiene, múltiples reflexiones pueden mantener energía sonora en la sala durante un tiempo.

Eso produce:

- reverberación.

---

## 40. Reverberación y uso de la sala

Una reverberación larga puede favorecer ciertos usos musicales y perjudicar:

- inteligibilidad del habla.

La acústica óptima depende de:

- función del espacio.

---

## 41. Tiempo de reverberación — profundización

Una definición común es el tiempo asociado a una disminución de:

**60 dB**

del nivel energético después de interrumpir la fuente, bajo condiciones de medición apropiadas.

En salas reales se estima con métodos normalizados.

---

## 42. Sabine — modelo de profundización

En una aproximación clásica:

<div class="formula-panel">
  <span class="formula-panel__label">Sabine</span>
  <div class="formula-panel__formula">T<sub>60</sub> ≈ 0,161 V/A<sub>eq</sub></div>
</div>

para unidades SI y condiciones adecuadas.

No es exacta para cualquier:

- geometría;
- absorción;
- distribución.

---

# Percepción auditiva

## 43. Oído y cerebro

El oído transforma vibraciones mecánicas en señales nerviosas.

La percepción final depende de:

- sistema auditivo;
- procesamiento cerebral;
- contexto.

---

## 44. Igual intensidad no implica igual sonoridad percibida

El oído no tiene igual sensibilidad a todas las frecuencias.

Por eso dos sonidos con igual nivel físico pueden percibirse:

- diferentes en sonoridad.

---

## 45. Tono no es sólo una lectura de frecuencia

En sonidos complejos, el sistema auditivo puede inferir una altura incluso cuando la fundamental física es débil o ausente.

Eso muestra que:

- percepción;
- señal física;

no son idénticas.

---

## 46. Cuidado auditivo

Exposiciones intensas o prolongadas pueden dañar la audición.

El riesgo depende de:

- nivel;
- duración;
- frecuencia;
- susceptibilidad;
- repetición.

Las recomendaciones concretas de exposición deben consultarse en normas y organismos de salud vigentes.

---

## 47. Señales de alerta

Dolor, zumbido persistente, pérdida de audición o molestias recurrentes requieren evaluación profesional.

Una lección de Física no sustituye:

- evaluación audiológica;
- atención médica.

---

# Experiencias

## 48. Batidos con generadores de tono

Con parlantes a volumen bajo y seguro se pueden reproducir dos tonos cercanos.

Ejemplo:

- 440 Hz;
- 444 Hz.

Se espera un batido de:

<div class="formula-panel">
  <span class="formula-panel__label">Batido</span>
  <div class="formula-panel__formula">f<sub>b</sub> = 4 Hz</div>
</div>

---

## 49. Cuerda vibrante

Con una cuerda segura y baja tensión puede observarse cómo cambian frecuencias al modificar:

- longitud;
- tensión;
- masa lineal.

No es necesario usar niveles sonoros altos.

---

## 50. Resonancia con botella

Soplar suavemente sobre una botella produce una resonancia de la columna de aire.

Cambiar el nivel de agua modifica el volumen y longitud efectiva de la cavidad.

Es un sistema más complejo que un tubo ideal, pero permite explorar:

- resonancia.

---

## 51. Analizar un audio

Con software de espectro se puede grabar:

- voz;
- instrumento;
- palmada.

Luego observar:

- picos;
- armónicos;
- ruido;
- evolución temporal.

---

## 52. Herramientas matemáticas

Especialmente útiles:

- M-05 — Notación científica;
- M-11 — Interpretación de gráficos;
- M-17 — Logaritmos;
- M-18 — Exponenciales.

---

## 53. Errores frecuentes

### “Más amplitud significa más frecuencia”

No.

### “Decibel y watt por metro cuadrado son lo mismo”

No.

### “Dos sonidos de 60 dB suman 120 dB”

No.

### “Tono y frecuencia son exactamente lo mismo”

No: están fuertemente relacionados, pero uno es perceptivo.

### “Timbre es sólo cantidad de armónicos”

Es más amplio e incluye distribución espectral y evolución temporal.

### “Resonancia crea energía”

No. Facilita transferencia de energía desde la fuente al sistema.

---

## 54. Problemas graduados

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Ondas</strong>
  </div>
  <ol>
    <li>Calculá λ para f=500 Hz y v=340 m/s.</li>
    <li>¿Qué ocurre con λ si f se duplica y v no cambia?</li>
    <li>Distinguí frecuencia de amplitud.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Decibeles</strong>
  </div>
  <ol>
    <li>Si I/I<sub>0</sub>=100, calculá L.</li>
    <li>¿Qué cambio de nivel produce multiplicar I por 10?</li>
    <li>¿Por qué dos fuentes iguales no duplican el número de dB?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Instrumentos</strong>
  </div>
  <ol>
    <li>Una cuerda ideal tiene L=0,65 m y v=286 m/s. Hallá f<sub>1</sub>.</li>
    <li>Calculá los primeros tres armónicos.</li>
    <li>Explicá qué cambia si aumenta la tensión.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Acústica de sala</strong>
  </div>
  <ol>
    <li>Explicá por qué una sala vacía puede sonar diferente de una ocupada.</li>
    <li>Indicá cómo puede afectar la absorción a la reverberación.</li>
    <li>¿Por qué una sala para habla y una sala para música pueden requerir tratamientos distintos?</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Derivá f<sub>n</sub>=nv/(2L) para una cuerda fija en ambos extremos.</li>
    <li>Explicá por qué la escala de decibeles es logarítmica.</li>
    <li>Analizá qué información adicional al espectro necesitás para describir el timbre de un sonido transitorio.</li>
  </ol>
</div>

---

## 55. Ejemplo integrado: una cuerda

Una cuerda tiene:

- L = 0,75 m;
- velocidad de onda v = 300 m/s.

Fundamental:

<div class="formula-panel">
  <span class="formula-panel__label">Fundamental</span>
  <div class="formula-panel__formula">f<sub>1</sub> = 300/(2·0,75) = 200 Hz</div>
</div>

Armónicos:

- f<sub>2</sub>=400 Hz;
- f<sub>3</sub>=600 Hz;
- f<sub>4</sub>=800 Hz.

Si dos cuerdas deberían dar 200 Hz pero una produce:

**203 Hz**

aparece un batido aproximado de:

<div class="formula-panel">
  <span class="formula-panel__label">Batido</span>
  <div class="formula-panel__formula">|203−200| = 3 Hz</div>
</div>

Eso conecta:

- onda estacionaria;
- armónicos;
- interferencia;
- afinación.

---

## 56. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Qué diferencia existe entre frecuencia y tono?</summary>
  <div class="lesson-quiz__answer">
    La frecuencia es una magnitud física de la señal; el tono es una percepción relacionada principalmente con la frecuencia fundamental y el espectro.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Qué representa un nivel en decibeles?</summary>
  <div class="lesson-quiz__answer">
    Una medida logarítmica relativa; para intensidad puede escribirse L=10log(I/I<sub>0</sub>).
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Qué son los armónicos?</summary>
  <div class="lesson-quiz__answer">
    En un sistema armónico ideal, son componentes cuyas frecuencias son múltiplos enteros de la frecuencia fundamental.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Por qué dos instrumentos con la misma nota pueden sonar distintos?</summary>
  <div class="lesson-quiz__answer">
    Porque difieren en espectro, amplitudes relativas, transitorios, envolvente temporal, ruido y resonancias.
  </div>
</details>

---

## 57. Resumen

- El sonido es una onda mecánica.
- v=λf relaciona velocidad, longitud de onda y frecuencia.
- Frecuencia y tono están relacionados pero no son idénticos.
- Intensidad es potencia por área.
- El nivel sonoro usa una escala logarítmica.
- Los decibeles no se suman como intensidades.
- Los armónicos ayudan a describir sonidos periódicos.
- El timbre depende del espectro y de la evolución temporal.
- Cuerdas y tubos admiten modos resonantes.
- Los batidos aparecen al superponer frecuencias cercanas.
- La reverberación resulta de múltiples reflexiones.
- La absorción depende de material y frecuencia.
- La percepción auditiva no es una copia directa de una sola magnitud física.
- La acústica puede estudiarse sin recurrir a niveles sonoros peligrosos.

---

## 58. Siguiente aplicación

**A-09 — Óptica, cámaras y visión**

Usaremos:

- reflexión;
- refracción;
- lentes;
- formación de imágenes;
- apertura;
- foco;
- difracción;

para comprender cámaras y ojo humano.
