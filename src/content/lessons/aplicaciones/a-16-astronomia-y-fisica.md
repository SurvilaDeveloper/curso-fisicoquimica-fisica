---
title: "Astronomía y física"
description: "Cómo la Física permite obtener información de objetos astronómicos mediante luz, espectros, telescopios, paralaje, brillo, temperatura, Doppler, órbitas y observaciones en distintas regiones del espectro."
slug: "astronomia-y-fisica"

course: "aplicaciones"
module: "espacio-y-relatividad"
order: 16

level: "avanzado-secundario"
cycle: "orientado"

yearsApprox: [4, 5, 6]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - cosmologia-y-astrofisica
  - optica-fisica
  - gravitacion
  - satelites-gps-y-relatividad

skills:
  - astronomia
  - observacion-astronomica
  - telescopios
  - apertura
  - resolucion-angular
  - difraccion
  - flujo
  - luminosidad
  - ley-inversa-del-cuadrado
  - paralaje
  - parsec
  - espectroscopia
  - cuerpo-negro
  - ley-de-wien
  - stefan-boltzmann
  - efecto-doppler
  - corrimiento-al-rojo
  - fotometria
  - radioastronomia
  - astronomia-infrarroja
  - astronomia-de-rayos-x
  - exoplanetas
  - transitos
  - velocidad-radial
  - interferometria
  - atmosfera

hasExercises: true
hasQuiz: true
hasExperiment: true

deepening: true
status: "complete"
---

## ¿Cómo sabemos de qué está hecha una estrella que nunca podremos tocar?

No podemos recoger una muestra de la superficie del Sol con una pinza.

Mucho menos de una estrella situada a:

- decenas;
- cientos;
- miles;

de años luz.

Sin embargo, podemos conocer:

- composición;
- temperatura;
- movimiento;
- tamaño;
- luminosidad;
- masa;
- presencia de planetas.

La clave es que los objetos astronómicos nos envían:

- luz;
- otras ondas electromagnéticas;
- partículas;
- en algunos casos, ondas gravitacionales.

La astronomía moderna es, en gran medida, una ciencia de:

> **inferir propiedades físicas a partir de señales recibidas a distancia.**

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>La astronomía convierte observaciones en magnitudes físicas. Medimos posiciones, tiempos, intensidades, espectros y variaciones; luego usamos modelos de óptica, gravitación, termodinámica, física atómica y relatividad para inferir propiedades de objetos que no podemos manipular directamente.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta aplicación deberías poder:

- explicar qué mide realmente un telescopio;
- distinguir aumento de capacidad colectora y resolución;
- relacionar apertura con cantidad de luz;
- comprender el límite de difracción;
- distinguir brillo aparente y luminosidad;
- usar la ley inversa del cuadrado;
- explicar el paralaje;
- relacionar parsec con paralaje;
- comprender qué información contiene un espectro;
- relacionar líneas espectrales con composición;
- usar cualitativamente la ley de Wien;
- relacionar luminosidad, radio y temperatura mediante Stefan-Boltzmann;
- aplicar Doppler a líneas espectrales;
- distinguir corrimiento Doppler y corrimiento cosmológico;
- comprender fotometría;
- comparar astronomía óptica, infrarroja, de radio, ultravioleta, rayos X y gamma;
- explicar por qué algunas observaciones requieren satélites;
- comprender seeing atmosférico y óptica adaptativa;
- describir interferometría de manera conceptual;
- explicar dos técnicas de detección de exoplanetas;
- reconocer sesgos de selección en una observación;
- diferenciar dato observado de inferencia física.

---

# Observar no es solamente “mirar”

## 1. Una observación produce datos

Un telescopio moderno puede registrar:

- posición;
- intensidad;
- espectro;
- polarización;
- tiempo;
- variaciones.

La imagen bonita es sólo una posible representación de esos datos.

---

## 2. Detector

La radiación puede convertirse en una señal mediante:

- sensores electrónicos;
- cámaras;
- espectrógrafos;
- antenas;
- detectores de partículas.

El detector tiene:

- sensibilidad;
- ruido;
- rango dinámico;
- resolución;
- eficiencia.

---

## 3. Calibración

Antes de interpretar una señal debemos corregir o caracterizar:

- respuesta del detector;
- fondo;
- ruido;
- sensibilidad;
- distorsiones instrumentales.

Una medición astronómica no es simplemente:

- “apuntar y leer”.

---

# Telescopios y apertura

## 4. Función principal de un telescopio

Un telescopio sirve principalmente para:

- recoger radiación;
- formar o registrar una señal;
- mejorar resolución angular;
- alimentar instrumentos.

El aumento visual no es la propiedad más importante en astronomía profesional.

---

## 5. Área colectora

Para una apertura circular de diámetro D:

<div class="formula-panel">
  <span class="formula-panel__label">Área</span>
  <div class="formula-panel__formula">A = πD²/4</div>
</div>

Si duplicamos D:

- el área se multiplica por 4.

---

## 6. Más apertura, más fotones

Para la misma fuente y tiempo de exposición, una apertura mayor puede recoger:

- más energía;
- más fotones.

Eso ayuda a observar objetos:

- débiles;
- lejanos.

---

## 7. Aumento no crea detalle

Un aumento mayor puede hacer que una imagen se vea más grande.

Pero si el sistema no resolvió el detalle original:

- ampliarlo no recupera información inexistente.

---

# Resolución angular

## 8. Dos objetos muy cercanos en el cielo

Aunque dos estrellas estén separadas físicamente, desde la Tierra pueden subtender un ángulo muy pequeño.

La capacidad de distinguirlas depende de:

- resolución angular.

---

## 9. Difracción

Una apertura finita produce un patrón de difracción.

Para una abertura circular ideal:

<div class="formula-panel">
  <span class="formula-panel__label">Límite angular</span>
  <div class="formula-panel__formula">θ ≈ 1,22λ/D</div>
</div>

---

## 10. Cómo mejorar resolución

En el límite ideal:

- menor λ → mejor resolución;
- mayor D → mejor resolución.

Esto explica por qué el diámetro del telescopio importa incluso cuando ya tenemos mucha luz.

---

## 11. Ejemplo

Si usamos:

- λ=550 nm;
- D=0,20 m;

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Resolución ideal</span>
  <div class="formula-panel__formula">θ ≈ 1,22·550×10<sup>−9</sup>/0,20 ≈ 3,4×10<sup>−6</sup> rad</div>
</div>

La atmósfera puede empeorar mucho ese valor.

---

# Atmósfera terrestre

## 12. Seeing

La atmósfera tiene regiones con:

- temperaturas;
- densidades;
- índices de refracción;

ligeramente diferentes.

La turbulencia hace que el frente de onda cambie continuamente.

Eso produce:

- centelleo;
- desenfoque;
- movimiento aparente.

---

## 13. Por qué las estrellas titilan más que los planetas

Una estrella está tan lejos que suele verse como una fuente angular casi puntual.

Un planeta tiene un disco angular mayor.

Las fluctuaciones de diferentes puntos del disco se promedian parcialmente.

Por eso suele:

- titilar menos.

---

## 14. Óptica adaptativa

Algunos telescopios miden distorsiones atmosféricas y deforman un espejo rápidamente para compensarlas.

Esto se llama:

- óptica adaptativa.

No elimina completamente todas las limitaciones.

---

## 15. Ventanas atmosféricas

La atmósfera transmite bien algunas regiones del espectro y bloquea otras.

Desde el suelo observamos especialmente bien:

- parte del visible;
- algunas regiones de radio.

Otras observaciones requieren:

- gran altitud;
- globos;
- satélites.

---

# Brillo y luminosidad

## 16. Luminosidad

La luminosidad L es la potencia total emitida por un objeto:

<div class="formula-panel">
  <span class="formula-panel__label">Luminosidad</span>
  <div class="formula-panel__formula">L = ΔE/Δt</div>
</div>

Unidad:

**watt**

---

## 17. Flujo recibido

Si la emisión fuese isotrópica:

<div class="formula-panel">
  <span class="formula-panel__label">Flujo</span>
  <div class="formula-panel__formula">F = L/(4πd²)</div>
</div>

F es potencia recibida por unidad de área.

---

## 18. Inversa del cuadrado

Si duplicamos d:

<div class="formula-panel">
  <span class="formula-panel__label">Escalamiento</span>
  <div class="formula-panel__formula">F′ = F/4</div>
</div>

El objeto no emite menos.

La misma energía se distribuye sobre una esfera mayor.

---

## 19. Brillo aparente no determina luminosidad por sí solo

Un objeto puede verse débil porque:

- emite poco;
- está muy lejos;
- parte de su luz fue absorbida;
- el detector responde poco a esa longitud de onda.

Para inferir luminosidad necesitamos conocer o estimar:

- distancia;
- extinción;
- respuesta instrumental.

---

# Paralaje

## 20. Cambiar el punto de observación

Si observamos un objeto cercano desde dos posiciones separadas, parece desplazarse respecto de objetos muy lejanos.

Ese efecto geométrico es:

- paralaje.

---

## 21. Paralaje anual

La Tierra observa una estrella desde lados diferentes de su órbita.

La línea de base es del orden de:

- unidades astronómicas.

---

## 22. Parsec

Por definición histórica:

<div class="formula-panel">
  <span class="formula-panel__label">Paralaje</span>
  <div class="formula-panel__formula">d(pc) = 1/p(")</div>
</div>

cuando p se expresa en segundos de arco.

---

## 23. Ejemplo

Si:

**p = 0,10"**

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Distancia</span>
  <div class="formula-panel__formula">d = 10 pc</div>
</div>

---

## 24. Cuanto más lejos, menor paralaje

Al aumentar d:

- p disminuye.

Por eso medir distancias enormes requiere:

- enorme precisión angular;
- otros métodos.

---

# Espectros

## 25. Dispersar la luz

Un espectrógrafo separa la radiación según:

- longitud de onda;
- frecuencia.

Obtenemos un:

- espectro.

---

## 26. Espectro continuo

Un objeto caliente y denso puede producir un espectro aproximadamente continuo.

Su forma depende fuertemente de:

- temperatura.

---

## 27. Líneas de absorción

Si un espectro continuo atraviesa gas más frío, ciertas longitudes de onda pueden absorberse.

Aparecen líneas oscuras.

---

## 28. Líneas de emisión

Un gas excitado puede emitir en longitudes de onda específicas.

Aparecen:

- líneas brillantes.

---

## 29. Huellas atómicas

Los niveles de energía atómicos son cuantizados.

Por eso cada elemento produce patrones espectrales característicos.

Esto permite inferir:

- composición química.

---

## 30. “Encontrar una línea” no basta siempre

Una línea puede:

- mezclarse con otra;
- desplazarse por Doppler;
- ensancharse;
- sufrir absorción interestelar.

La identificación real usa:

- conjuntos de líneas;
- modelos;
- calibración.

---

# Temperatura y espectro

## 31. Cuerpo negro

Un cuerpo negro ideal tiene un espectro térmico determinado por su temperatura.

Las estrellas no son cuerpos negros perfectos, pero la aproximación resulta muy útil.

---

## 32. Ley de Wien

<div class="formula-panel">
  <span class="formula-panel__label">Wien</span>
  <div class="formula-panel__formula">λ<sub>máx</sub>T ≈ 2,90×10<sup>−3</sup> m·K</div>
</div>

---

## 33. Estrella más caliente

Mayor T implica:

- menor λ<sub>máx</sub>.

El pico se desplaza hacia longitudes de onda más cortas.

---

## 34. Color no es termómetro perfecto

El color observado también depende de:

- líneas;
- polvo interestelar;
- filtros;
- detector.

La temperatura se obtiene con:

- modelos;
- espectros;
- múltiples bandas.

---

# Stefan-Boltzmann

## 35. Flujo superficial

Para un cuerpo negro:

<div class="formula-panel">
  <span class="formula-panel__label">Stefan-Boltzmann</span>
  <div class="formula-panel__formula">F = σT⁴</div>
</div>

---

## 36. Luminosidad de una estrella idealizada

Para radio R:

<div class="formula-panel">
  <span class="formula-panel__label">Luminosidad estelar</span>
  <div class="formula-panel__formula">L = 4πR²σT⁴</div>
</div>

---

## 37. Dos maneras de ser muy luminosa

Una estrella puede tener gran L por:

- T alta;
- R grande;
- combinación de ambas.

Una estrella roja muy grande puede ser más luminosa que una estrella azul pequeña.

---

# Doppler

## 38. Líneas desplazadas

Si una fuente se mueve respecto del observador, sus líneas espectrales cambian de longitud de onda.

Para velocidades pequeñas frente a c:

<div class="formula-panel">
  <span class="formula-panel__label">Doppler aproximado</span>
  <div class="formula-panel__formula">v<sub>r</sub>/c ≈ Δλ/λ<sub>0</sub></div>
</div>

---

## 39. Velocidad radial

El Doppler mide principalmente la componente de velocidad a lo largo de la línea de visión:

- velocidad radial.

No mide directamente la componente transversal.

---

## 40. Corrimiento al rojo

Si:

**λ<sub>obs</sub> > λ<sub>0</sub>**

decimos que existe corrimiento hacia:

- el rojo.

En un contexto cinemático simple puede indicar alejamiento.

---

## 41. Cosmología

En distancias cosmológicas, el corrimiento al rojo no debe interpretarse siempre como un Doppler clásico ordinario.

La expansión del espacio requiere una descripción:

- cosmológica;
- relativista.

F-33 desarrolla esa distinción.

---

# Fotometría

## 42. Medir en bandas

La fotometría mide flujo usando filtros que seleccionan regiones del espectro.

Comparando bandas podemos estudiar:

- color;
- temperatura;
- variabilidad;
- extinción.

---

## 43. Magnitudes astronómicas

La escala de magnitudes es histórica y logarítmica.

Una diferencia de 5 magnitudes corresponde a una razón de flujo de:

**100**

aproximadamente.

---

## 44. Menor magnitud significa objeto más brillante

La escala está invertida respecto de una intuición común:

- magnitud más pequeña → mayor brillo aparente.

Incluso puede haber magnitudes:

- negativas.

---

## 45. Logaritmos

La relación de magnitudes puede escribirse:

<div class="formula-panel">
  <span class="formula-panel__label">Diferencia de magnitud</span>
  <div class="formula-panel__formula">m<sub>2</sub>−m<sub>1</sub> = −2,5 log(F<sub>2</sub>/F<sub>1</sub>)</div>
</div>

---

# Astronomía en otras longitudes de onda

## 46. Radioastronomía

Las ondas de radio permiten estudiar:

- gas frío;
- púlsares;
- núcleos activos;
- fondo cósmico;
- moléculas.

Las antenas suelen ser grandes porque λ también puede ser:

- grande.

---

## 47. Infrarrojo

El infrarrojo es útil para estudiar:

- objetos fríos;
- polvo;
- regiones de formación estelar;
- planetas.

La atmósfera absorbe parte del infrarrojo.

---

## 48. Ultravioleta

El ultravioleta permite estudiar objetos y procesos calientes.

Gran parte queda bloqueada por:

- atmósfera.

Por eso se usan observatorios espaciales.

---

## 49. Rayos X

Procesos extremadamente energéticos pueden producir rayos X:

- gas muy caliente;
- acreción;
- remanentes;
- objetos compactos.

La atmósfera terrestre bloquea eficazmente gran parte de esos rayos.

---

## 50. Gamma

La astronomía gamma estudia fenómenos de energía aún mayor.

Los detectores y técnicas pueden diferir mucho de:

- una cámara óptica.

---

# Interferometría

## 51. Combinar señales

Dos o más telescopios separados pueden combinar señales de manera coherente.

Esto permite obtener información equivalente a una apertura angular mucho mayor en determinadas direcciones.

---

## 52. Línea de base

La resolución puede depender de:

- λ;
- separación efectiva entre instrumentos.

Una línea de base grande mejora:

- resolución angular.

---

## 53. No equivale a un espejo gigante para todo

Un interferómetro no recoge necesariamente la misma cantidad de luz que un espejo lleno del diámetro de la línea de base.

Debemos distinguir:

- resolución;
- área colectora.

---

# Exoplanetas

## 54. Tránsito

Si un planeta pasa delante de su estrella desde nuestra perspectiva, bloquea una pequeña fracción de luz.

Aparece una disminución periódica de:

- flujo.

---

## 55. Profundidad del tránsito

En un modelo simple:

<div class="formula-panel">
  <span class="formula-panel__label">Tránsito</span>
  <div class="formula-panel__formula">ΔF/F ≈ (R<sub>p</sub>/R<sub>★</sub>)²</div>
</div>

Esto permite estimar la razón entre radios.

---

## 56. No todos los planetas transitan

La órbita debe tener una orientación adecuada respecto del observador.

Por eso el método tiene un:

- sesgo geométrico.

---

## 57. Velocidad radial

Un planeta y su estrella orbitan alrededor de un centro de masa común.

La estrella realiza un pequeño movimiento que puede detectarse mediante:

- Doppler espectral.

---

## 58. Masa mínima

La velocidad radial depende de la inclinación orbital.

Sin conocerla exactamente, en muchos casos se obtiene una combinación relacionada con una:

- masa mínima.

---

## 59. Combinar métodos

Si un planeta:

- transita;
- tiene velocidad radial medida;

podemos estimar mejor:

- radio;
- masa;
- densidad media.

La combinación de observaciones reduce ambigüedades.

---

# Dato e inferencia

## 60. Lo que observamos directamente

Podemos observar:

- fotones;
- posiciones angulares;
- tiempos;
- frecuencias;
- intensidades.

---

## 61. Lo que inferimos

A partir de modelos deducimos:

- masa;
- radio;
- composición;
- temperatura;
- distancia;
- velocidad;
- edad.

La distinción entre observación e inferencia es central en ciencia.

---

## 62. Incertidumbre

Toda medida tiene incertidumbre.

En astronomía pueden contribuir:

- detector;
- atmósfera;
- calibración;
- fondo;
- modelo;
- distancia.

Un resultado serio debe incluir:

- error;
- intervalo;
- calidad de ajuste.

---

# Experiencias seguras

## 63. Observar el cielo nocturno

Con el ojo o binoculares apropiados puede registrarse:

- posición aparente;
- brillo relativo;
- color;
- movimiento nocturno.

Nunca debe apuntarse un instrumento óptico al:

- Sol;

sin equipamiento solar certificado específico.

---

## 64. Medir un diámetro angular

Podemos fabricar un modelo seguro con una regla a distancia conocida y usar triángulos para comprender:

- tamaño angular.

No hace falta observar el Sol.

---

## 65. Espectro de una lámpara

Con un espectroscopio educativo de baja resolución se pueden comparar fuentes seguras:

- LED;
- lámpara fluorescente;
- pantalla.

El objetivo es reconocer:

- espectro continuo;
- bandas;
- líneas aproximadas.

---

## 66. Curva de luz simulada

Podemos crear datos de brillo de una estrella ficticia con un tránsito:

| Tiempo | Flujo relativo |
| ---: | ---: |
| 0 | 1,000 |
| 1 | 1,000 |
| 2 | 0,990 |
| 3 | 0,990 |
| 4 | 1,000 |

y estimar:

- profundidad;
- duración;
- posible relación de radios.

---

## 67. Herramientas matemáticas

Especialmente útiles:

- M-04 — Potencias y raíces;
- M-05 — Notación científica;
- M-11 — Interpretación de gráficos;
- M-14 — Trigonometría;
- M-17 — Logaritmos.

---

## 68. Errores frecuentes

### “Un telescopio grande sirve principalmente para aumentar más”

No. Importan especialmente área colectora y resolución.

### “Una estrella débil emite poca energía”

No necesariamente. Puede estar muy lejos.

### “Un espectro dice directamente la composición sin modelos”

No. La identificación requiere interpretar líneas, temperatura y condiciones físicas.

### “Una estrella roja siempre es poco luminosa”

No. Puede ser una gigante de gran radio.

### “Todo corrimiento al rojo es Doppler clásico”

No.

### “Una imagen astronómica es una fotografía sin procesamiento”

No. Suele incluir calibración, filtros y procesamiento.

### “Encontrar un tránsito demuestra sin duda la existencia de un planeta”

No por sí solo. Pueden existir falsos positivos y se requieren verificaciones.

---

## 69. Problemas graduados

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Telescopios</strong>
  </div>
  <ol>
    <li>Compará el área colectora de telescopios de 10 cm y 20 cm de diámetro.</li>
    <li>¿Por qué duplicar D cuadruplica A?</li>
    <li>Explicá por qué aumento y resolución no son sinónimos.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Flujo y distancia</strong>
  </div>
  <ol>
    <li>Una estrella se observa a distancia d con flujo F. ¿Qué flujo tendría a 3d si L no cambia?</li>
    <li>Explicá qué información adicional necesitás para obtener L desde F.</li>
    <li>Una estrella tiene paralaje de 0,05". Calculá d en parsec.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Temperatura y espectros</strong>
  </div>
  <ol>
    <li>Usá Wien para estimar λ<sub>máx</sub> de un cuerpo a 5800 K.</li>
    <li>Compará con uno a 3000 K.</li>
    <li>Explicá por qué no alcanza el color visual para medir T con precisión.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Doppler y exoplanetas</strong>
  </div>
  <ol>
    <li>Una línea de 600 nm se desplaza 0,012 nm. Estimá v<sub>r</sub>/c.</li>
    <li>Un tránsito produce ΔF/F=0,01. Estimá R<sub>p</sub>/R<sub>★</sub>.</li>
    <li>Explicá qué sesgo geométrico tiene el método de tránsito.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Explicá por qué un interferómetro puede tener gran resolución sin poseer el área colectora de un espejo lleno de igual diámetro efectivo.</li>
    <li>Diseñá una estrategia observacional para estimar temperatura, velocidad radial y distancia de una estrella usando técnicas diferentes.</li>
    <li>Construí una tabla que separe observables directos e inferencias para una estrella y un exoplaneta.</li>
  </ol>
</div>

---

## 70. Ejemplo integrado

Una estrella tiene:

- flujo medido F=2,0×10<sup>−10</sup> W/m²;
- distancia d=100 pc.

Convertimos de forma aproximada:

**1 pc≈3,086×10<sup>16</sup> m**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Distancia</span>
  <div class="formula-panel__formula">d≈3,086×10<sup>18</sup> m</div>
</div>

Luminosidad:

<div class="formula-panel">
  <span class="formula-panel__label">Luminosidad</span>
  <div class="formula-panel__formula">L = 4πd²F ≈ 2,4×10<sup>28</sup> W</div>
</div>

El resultado depende de:

- distancia;
- flujo;
- correcciones de extinción;
- ancho de banda;
- modelo de emisión.

No debemos interpretar una cifra sin declarar:

- qué se midió;
- cómo se corrigió.

---

## 71. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Qué dos ventajas físicas principales aporta una apertura mayor?</summary>
  <div class="lesson-quiz__answer">
    Mayor área colectora y, en el límite de difracción, mejor resolución angular.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Por qué una estrella muy luminosa puede verse débil?</summary>
  <div class="lesson-quiz__answer">
    Porque el flujo recibido disminuye aproximadamente como 1/d² y además puede existir extinción en el trayecto.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Qué mide el paralaje?</summary>
  <div class="lesson-quiz__answer">
    El desplazamiento angular aparente de un objeto cercano al cambiar el punto de observación; permite estimar distancia geométricamente.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Qué información puede obtenerse de un espectro?</summary>
  <div class="lesson-quiz__answer">
    Entre otras cosas, composición, temperatura, velocidad radial y condiciones físicas, siempre mediante interpretación con modelos.
  </div>
</details>

---

## 72. Resumen

- La astronomía infiere propiedades físicas a partir de señales.
- Un telescopio recoge radiación y mejora resolución; el aumento no es su única función.
- El área colectora escala con D².
- El límite de difracción escala aproximadamente como λ/D.
- La atmósfera puede limitar resolución y bloquear regiones del espectro.
- F=L/(4πd²) relaciona luminosidad y flujo.
- El paralaje proporciona una medida geométrica de distancia.
- Los espectros revelan información atómica y térmica.
- Wien relaciona temperatura y longitud de onda del máximo.
- Stefan-Boltzmann relaciona temperatura, radio y luminosidad.
- Doppler permite medir velocidad radial.
- Fotometría compara flujos en bandas.
- La astronomía multibanda estudia procesos diferentes.
- Interferometría aumenta resolución efectiva.
- Tránsitos y velocidad radial permiten detectar exoplanetas.
- Toda inferencia astronómica depende de datos, modelos e incertidumbres.

---

## 73. Siguiente aplicación

**A-17 — Materiales y propiedades**

Pasaremos de objetos astronómicos a materiales cotidianos y tecnológicos para estudiar cómo:

- composición;
- estructura;
- microestructura;
- procesamiento;

determinan propiedades mecánicas, térmicas, eléctricas y ópticas.
