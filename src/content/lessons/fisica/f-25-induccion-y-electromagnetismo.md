---
title: "Inducción y electromagnetismo"
description: "Cómo los campos magnéticos variables inducen efectos eléctricos y cómo Faraday, Lenz y Maxwell conectan generadores, motores, transformadores, corriente alterna, ondas electromagnéticas y luz."
slug: "induccion-y-electromagnetismo"

course: "fisica"
module: "electromagnetismo"
order: 25

level: "intermedio"
cycle: "ambos"

yearsApprox: [4, 5, 6]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - magnetismo

skills:
  - flujo-magnetico
  - induccion-electromagnetica
  - ley-de-faraday
  - ley-de-lenz
  - corriente-alterna
  - generadores
  - motores
  - transformadores
  - campo-electrico-variable
  - campo-magnetico-variable
  - ecuaciones-de-maxwell
  - unificacion-electromagnetica
  - ondas-electromagneticas
  - velocidad-de-la-luz
  - aplicaciones-tecnologicas

hasExercises: true
hasQuiz: true
hasExperiment: true

deepening: true
status: "complete"
---

## Mover un imán puede encender una lámpara

Acercamos un imán a una bobina conectada a un instrumento sensible.

Mientras el imán se mueve:

- aparece una señal eléctrica.

Si dejamos el imán quieto:

- la señal desaparece.

Si lo alejamos:

- la señal cambia de sentido.

No alcanza entonces con decir:

> “hay un campo magnético”.

Lo importante es que cambia la relación entre el campo y el circuito.

Ese fenómeno se llama:

**inducción electromagnética**

y es la base de:

- generadores;
- transformadores;
- gran parte de la producción y distribución de energía eléctrica.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>No es un campo magnético constante, por sí solo, lo que induce una fem en una espira estacionaria: debe cambiar el flujo magnético a través del circuito. Ese cambio puede lograrse modificando B, el área, la orientación o la geometría relativa.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar esta lección deberías poder:

- definir flujo magnético;
- interpretar el significado de Φ<sub>B</sub>;
- reconocer diferentes maneras de cambiar el flujo;
- explicar la inducción electromagnética;
- aplicar la ley de Faraday;
- interpretar el signo de la ley de Lenz;
- relacionar Lenz con conservación de energía;
- comprender la fem de movimiento;
- explicar el funcionamiento básico de un generador;
- distinguir corriente continua y corriente alterna;
- interpretar valores instantáneos y eficaces de CA como profundización;
- comprender el principio básico de un motor;
- distinguir motor y generador;
- explicar el funcionamiento de un transformador;
- relacionar tensiones y números de espiras;
- comprender las pérdidas de un transformador real;
- introducir autoinducción e inductancia como profundización;
- comprender cualitativamente campos eléctricos y magnéticos variables;
- reconocer las ideas centrales de las ecuaciones de Maxwell;
- explicar la unificación entre electricidad, magnetismo y óptica;
- describir una onda electromagnética;
- relacionar c con las constantes electromagnéticas;
- reconocer aplicaciones tecnológicas del electromagnetismo.

---

## 1. El paso histórico decisivo

En F-24 vimos:

> una corriente eléctrica produce un campo magnético.

Eso fue demostrado experimentalmente por Oersted.

La pregunta natural siguiente fue:

> ¿puede un fenómeno magnético producir un efecto eléctrico?

La respuesta experimental fue:

**sí, si el flujo magnético cambia.**

---

## 2. Faraday y la inducción

Michael Faraday realizó experimentos sistemáticos con:

- imanes;
- bobinas;
- corrientes;
- circuitos.

Encontró que podía aparecer una corriente inducida cuando cambiaba:

- el campo;
- la posición relativa;
- la orientación;
- la corriente en otro circuito.

La clave común era:

**un flujo magnético variable.**

---

## 3. Flujo magnético

El flujo magnético mide cuánto campo magnético atraviesa una superficie orientada.

Para un campo uniforme y una superficie plana:

<div class="formula-panel">
  <span class="formula-panel__label">Flujo magnético</span>
  <div class="formula-panel__formula">Φ<sub>B</sub> = BA cos θ</div>
</div>

donde:

- B es el módulo del campo;
- A es el área;
- θ es el ángulo entre B y la normal a la superficie.

---

## 4. El ángulo se mide respecto de la normal

Éste es un punto frecuente de error.

En:

**Φ<sub>B</sub> = BA cos θ**

θ es el ángulo entre:

- B;
- vector normal al área.

No entre:

- B;
- plano de la espira.

---

## 5. Flujo máximo

Si B es perpendicular al plano de la espira:

- B es paralelo a la normal;
- θ = 0°;
- cosθ = 1.

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Flujo máximo</span>
  <div class="formula-panel__formula">Φ<sub>B</sub> = BA</div>
</div>

---

## 6. Flujo nulo

Si B es paralelo al plano:

- B es perpendicular a la normal;
- θ = 90°;
- cos90° = 0.

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Flujo nulo</span>
  <div class="formula-panel__formula">Φ<sub>B</sub> = 0</div>
</div>

Aunque:

**B ≠ 0**

---

## 7. Unidad del flujo magnético

La unidad SI es:

**weber (Wb)**

<div class="formula-panel">
  <span class="formula-panel__label">Weber</span>
  <div class="formula-panel__formula">1 Wb = 1 T·m²</div>
</div>

---

## 8. Flujo no es campo

### Campo magnético B

Describe el campo en una región.

Unidad:

**tesla**

### Flujo Φ<sub>B</sub>

Describe cuánto campo atraviesa una superficie orientada.

Unidad:

**weber**

No son la misma magnitud.

---

## 9. El flujo depende también de la superficie

Dos espiras dentro del mismo B pueden tener flujos diferentes si cambian:

- área;
- orientación.

Por eso el flujo no pertenece solamente al campo.

Depende de:

- campo;
- superficie elegida;
- orientación.

---

## 10. Ejemplo de flujo

Una espira tiene:

- A = 0,020 m²;
- B = 0,50 T;

y su normal forma:

- θ = 60° con B.

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Flujo en una espira</h3>
  <div class="worked-example-card__steps">
    <p>Φ<sub>B</sub> = BA cosθ</p>
    <p>Φ<sub>B</sub> = 0,50 × 0,020 × cos60°</p>
    <p><strong>Φ<sub>B</sub> = 5,0 × 10<sup>−3</sup> Wb</strong></p>
  </div>
</div>

---

## 11. ¿Cómo puede cambiar el flujo?

De:

**Φ<sub>B</sub> = BA cosθ**

podemos cambiar el flujo modificando:

- B;
- A;
- θ.

También puede cambiar porque una espira entra o sale de:

- una región de campo.

Ésta es la idea central de inducción.

---

## 12. Inducción electromagnética

Cuando cambia el flujo magnético enlazado con un circuito:

- aparece una fuerza electromotriz inducida.

Si el circuito está cerrado:

- puede circular corriente inducida.

Si está abierto:

- puede existir fem sin corriente sostenida.

---

## 13. Fem inducida

Recordemos de F-23:

- fem no significa fuerza mecánica.

Es energía transferida por unidad de carga.

En inducción usamos:

**ε<sub>ind</sub>**

para la fuerza electromotriz inducida.

Unidad:

**volt**

---

## 14. Ley de Faraday

Para una espira:

<div class="formula-panel">
  <span class="formula-panel__label">Ley de Faraday</span>
  <div class="formula-panel__formula">ε<sub>ind</sub> = −ΔΦ<sub>B</sub>/Δt</div>
</div>

Como aproximación media durante un intervalo.

En forma instantánea:

<div class="formula-panel">
  <span class="formula-panel__label">Forma diferencial</span>
  <div class="formula-panel__formula">ε<sub>ind</sub> = −dΦ<sub>B</sub>/dt</div>
</div>

---

## 15. Bobina de N vueltas

Si una bobina tiene N espiras equivalentes enlazadas por el mismo flujo:

<div class="formula-panel">
  <span class="formula-panel__label">Faraday para N espiras</span>
  <div class="formula-panel__formula">ε<sub>ind</sub> = −N ΔΦ<sub>B</sub>/Δt</div>
</div>

Mayor N puede producir:

- mayor fem inducida;

para el mismo cambio de flujo por espira.

---

## 16. Qué significa el signo menos

El signo menos corresponde a:

**ley de Lenz**

No significa que la fem sea “negativa” en sentido absoluto.

Indica la orientación de la inducción respecto del cambio que la produce.

---

## 17. Ley de Lenz

La corriente inducida aparece con un sentido tal que:

> **el campo magnético generado por ella se opone al cambio de flujo que la originó.**

La palabra clave es:

**cambio**

No necesariamente se opone al campo original.

---

## 18. Si el flujo aumenta

Supongamos que aumenta un flujo dirigido:

- hacia dentro del plano.

La corriente inducida genera un campo que intenta:

- disminuir ese aumento.

Por lo tanto crea un B inducido:

- hacia fuera del plano.

---

## 19. Si el flujo disminuye

Si el flujo hacia dentro disminuye:

- el circuito intenta oponerse a esa disminución.

Entonces genera un B inducido:

- también hacia dentro.

Eso ayuda a sostener el flujo original.

---

## 20. Lenz no “cancela siempre el campo externo”

Éste es un error muy común.

La corriente inducida:

- se opone al cambio del flujo.

No tiene por qué:

- cancelar completamente B;
- apuntar siempre contra B.

Debe analizarse:

- si el flujo aumenta o disminuye.

---

## 21. Lenz y conservación de energía

Si la corriente inducida favoreciera el cambio que la produjo:

- el proceso podría autoamplificarse;
- aparecería energía sin aporte externo.

La oposición de Lenz es consistente con:

- conservación de energía.

Para aumentar el flujo contra la reacción inducida:

- un agente externo debe realizar trabajo.

---

## 22. Acercar un imán a una bobina

Al acercar el polo norte de un imán:

- el flujo por la bobina cambia.

La corriente inducida crea un campo que:

- se opone al aumento del flujo.

La cara próxima de la bobina puede comportarse temporalmente como:

- un polo norte;

produciendo repulsión sobre el imán que se acerca.

---

## 23. Alejar el imán

Si ahora alejamos ese polo norte:

- el flujo disminuye.

La corriente cambia de sentido para:

- intentar mantener el flujo.

La cara de la bobina puede comportarse como:

- polo sur;

atrayendo al imán que se aleja.

---

## 24. Imán quieto frente a bobina quieta

Si:

- B no cambia;
- la geometría no cambia;
- el área no cambia;
- la orientación no cambia;

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Sin cambio de flujo</span>
  <div class="formula-panel__formula">ΔΦ<sub>B</sub> = 0</div>
</div>

y:

**ε<sub>ind</sub> = 0**

en el modelo.

---

## 25. Ejemplo de Faraday

Una bobina de:

- N = 200 vueltas;

experimenta un cambio de flujo por espira de:

- 4,0×10<sup>−4</sup> Wb;

a cero en:

- 0,020 s.

El módulo de la fem es:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Fem inducida media</h3>
  <div class="worked-example-card__steps">
    <p>|ε| = N|ΔΦ<sub>B</sub>|/Δt</p>
    <p>|ε| = 200 × 4,0×10<sup>−4</sup> / 0,020</p>
    <p><strong>|ε| = 4,0 V</strong></p>
  </div>
</div>

El sentido debe determinarse con:

- ley de Lenz.

---

## 26. Fem de movimiento

Una barra conductora que se mueve a través de un campo magnético puede separar cargas mediante:

**F<sub>B</sub> = q(v × B)**

Eso produce una diferencia de potencial entre sus extremos.

Para una geometría ideal con:

- v perpendicular a B;
- barra de longitud ℓ perpendicular a ambos;

<div class="formula-panel">
  <span class="formula-panel__label">Fem de movimiento</span>
  <div class="formula-panel__formula">ε = Bℓv</div>
</div>

---

## 27. Interpretación de la fem de movimiento

Las cargas del conductor reciben fuerzas magnéticas.

Se separan hasta que aparece un campo eléctrico interno que puede equilibrar la fuerza magnética.

En equilibrio de carga:

<div class="formula-panel">
  <span class="formula-panel__label">Equilibrio transversal</span>
  <div class="formula-panel__formula">qE = qvB</div>
</div>

para la geometría perpendicular ideal.

---

## 28. Barra móvil sobre rieles

Una barra conductora que se desplaza sobre rieles en B puede formar un circuito cerrado.

Al moverla:

- cambia el área del circuito;
- cambia el flujo;
- aparece corriente inducida.

El análisis mediante:

- Faraday;
- fuerza de Lorentz;

conduce al mismo fenómeno.

---

## 29. Fuerza que se opone al movimiento

La corriente inducida en la barra móvil interactúa con B.

Aparece una fuerza magnética que:

- se opone al movimiento que genera la inducción.

Para mantener velocidad constante:

- un agente externo debe realizar trabajo.

---

## 30. Conversión de energía en la barra móvil

El trabajo mecánico externo puede transformarse en:

- energía eléctrica;
- y luego energía interna en una resistencia.

No hay generación gratuita de energía.

La inducción actúa como mecanismo de:

**conversión energética**

---

## 31. Generador eléctrico

Un **generador** convierte principalmente:

- energía mecánica;

en:

- energía eléctrica.

Una forma simple utiliza una bobina que gira dentro de un campo magnético.

Al girar:

- cambia θ;
- cambia Φ<sub>B</sub>;
- se induce una fem.

---

## 32. Espira girando en B uniforme

Si:

- área = A;
- campo = B;
- ángulo θ = ωt;

entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Flujo rotante</span>
  <div class="formula-panel__formula">Φ<sub>B</sub> = BA cos(ωt)</div>
</div>

Para N espiras:

- el enlace total es NΦ<sub>B</sub>.

---

## 33. Fem de un generador sinusoidal ideal

Aplicando Faraday:

<div class="formula-panel">
  <span class="formula-panel__label">Generador ideal</span>
  <div class="formula-panel__formula">ε(t) = NBAω sen(ωt)</div>
</div>

El valor máximo es:

<div class="formula-panel">
  <span class="formula-panel__label">Fem máxima</span>
  <div class="formula-panel__formula">ε<sub>máx</sub> = NBAω</div>
</div>

---

## 34. Corriente alterna

Una corriente alterna cambia periódicamente:

- módulo;
- sentido.

Una forma sinusoidal ideal puede escribirse:

<div class="formula-panel">
  <span class="formula-panel__label">Corriente alterna ideal</span>
  <div class="formula-panel__formula">I(t) = I<sub>máx</sub> sen(ωt + φ)</div>
</div>

---

## 35. Tensión alterna sinusoidal

También podemos escribir:

<div class="formula-panel">
  <span class="formula-panel__label">Tensión alterna</span>
  <div class="formula-panel__formula">V(t) = V<sub>máx</sub> sen(ωt)</div>
</div>

para una referencia de fase elegida.

El signo cambia durante el ciclo.

---

## 36. Frecuencia de la corriente alterna

La frecuencia es:

<div class="formula-panel">
  <span class="formula-panel__label">Frecuencia</span>
  <div class="formula-panel__formula">f = 1/T = ω/(2π)</div>
</div>

La red eléctrica utiliza una frecuencia definida por:

- el sistema eléctrico de cada región.

No necesitaremos fijar aquí un valor particular.

---

## 37. Valor eficaz — profundización

Para una tensión sinusoidal:

<div class="formula-panel">
  <span class="formula-panel__label">Tensión eficaz</span>
  <div class="formula-panel__formula">V<sub>ef</sub> = V<sub>máx</sub>/√2</div>
</div>

Para corriente sinusoidal:

<div class="formula-panel">
  <span class="formula-panel__label">Corriente eficaz</span>
  <div class="formula-panel__formula">I<sub>ef</sub> = I<sub>máx</sub>/√2</div>
</div>

---

## 38. Significado del valor eficaz

El valor eficaz de una corriente alterna es el valor de corriente continua que produciría la misma potencia media:

- en un resistor;

bajo condiciones ideales equivalentes.

No es:

- promedio algebraico de la sinusoidal.

Ese promedio durante un período completo es:

**0**

---

## 39. Potencia media en resistor con CA

Para una carga resistiva ideal:

<div class="formula-panel">
  <span class="formula-panel__label">Potencia media</span>
  <div class="formula-panel__formula">P<sub>media</sub> = V<sub>ef</sub>I<sub>ef</sub></div>
</div>

También:

<div class="formula-panel">
  <span class="formula-panel__label">Resistor ideal</span>
  <div class="formula-panel__formula">P<sub>media</sub> = I<sub>ef</sub>²R</div>
</div>

---

## 40. Corriente continua y alterna

### Corriente continua

Mantiene sentido constante.

Puede tener:

- valor constante;
- o variar sin invertir sentido.

### Corriente alterna

Invierte periódicamente:

- el sentido.

No debemos identificar automáticamente:

- continua = batería perfecta;
- alterna = sinusoidal perfecta.

Son categorías más generales.

---

## 41. Motor eléctrico

Un **motor** convierte principalmente:

- energía eléctrica;

en:

- energía mecánica.

En una versión simple:

- una corriente atraviesa una espira;
- existe un campo B;
- las fuerzas magnéticas producen torque.

---

## 42. Generador y motor son procesos relacionados

### Generador

Movimiento mecánico → energía eléctrica.

### Motor

Energía eléctrica → movimiento mecánico.

Los mismos principios electromagnéticos pueden operar:

- en sentidos energéticos opuestos.

---

## 43. Fem contraelectromotriz — profundización

Cuando un motor gira:

- sus conductores también se mueven en el campo;
- se induce una fem.

Esa fem suele oponerse a la fuente aplicada:

**fem contraelectromotriz**

Esto limita la corriente durante funcionamiento normal.

---

## 44. Arranque de un motor

Cuando el motor está detenido:

- la fem contraelectromotriz es pequeña o nula.

Entonces la corriente puede ser:

- mayor.

Por eso algunos motores requieren:

- sistemas de arranque;
- limitación de corriente.

---

## 45. Transformador

Un **transformador** transfiere energía eléctrica entre circuitos mediante:

- flujo magnético variable;
- inducción electromagnética.

Tiene típicamente:

- bobina primaria;
- núcleo;
- bobina secundaria.

---

## 46. Primario y secundario

### Primario

Conectado a la fuente alterna.

La corriente variable produce:

- flujo magnético variable.

### Secundario

El flujo variable atraviesa sus espiras e induce:

- una fem.

---

## 47. Un transformador necesita flujo variable

Con corriente continua estacionaria ideal:

- después del transitorio;
- el flujo se vuelve constante.

Entonces:

**dΦ<sub>B</sub>/dt = 0**

y no se mantiene una fem inducida continua en el secundario.

Por eso un transformador convencional funciona con:

- corriente variable.

---

## 48. Relación de transformación ideal

Para un transformador ideal:

<div class="formula-panel">
  <span class="formula-panel__label">Relación de tensiones</span>
  <div class="formula-panel__formula">V<sub>s</sub>/V<sub>p</sub> = N<sub>s</sub>/N<sub>p</sub></div>
</div>

donde:

- p = primario;
- s = secundario.

---

## 49. Transformador elevador

Si:

**N<sub>s</sub> > N<sub>p</sub>**

entonces:

**V<sub>s</sub> > V<sub>p</sub>**

Es un transformador:

**elevador de tensión**

en el modelo ideal.

---

## 50. Transformador reductor

Si:

**N<sub>s</sub> < N<sub>p</sub>**

entonces:

**V<sub>s</sub> < V<sub>p</sub>**

Es:

**reductor de tensión**

---

## 51. Potencia en un transformador ideal

Si no hay pérdidas:

<div class="formula-panel">
  <span class="formula-panel__label">Conservación de potencia ideal</span>
  <div class="formula-panel__formula">V<sub>p</sub>I<sub>p</sub> = V<sub>s</sub>I<sub>s</sub></div>
</div>

Por lo tanto:

- subir tensión;
- implica bajar corriente;

para la misma potencia ideal.

---

## 52. Relación de corrientes

Combinando con la relación de espiras:

<div class="formula-panel">
  <span class="formula-panel__label">Transformador ideal</span>
  <div class="formula-panel__formula">I<sub>s</sub>/I<sub>p</sub> = N<sub>p</sub>/N<sub>s</sub></div>
</div>

La relación de corrientes es inversa a:

- la relación de vueltas.

---

## 53. Ejemplo de transformador

Un transformador ideal tiene:

- N<sub>p</sub> = 500;
- N<sub>s</sub> = 100;
- V<sub>p</sub> = 230 V.

Entonces:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo resuelto</span>
  <h3>Transformador reductor</h3>
  <div class="worked-example-card__steps">
    <p>V<sub>s</sub>/230 = 100/500</p>
    <p><strong>V<sub>s</sub> = 46 V</strong></p>
  </div>
</div>

---

## 54. Transformadores reales

Un transformador real presenta pérdidas por:

- resistencia de bobinados;
- corrientes inducidas en el núcleo;
- histéresis;
- flujo que no enlaza ambas bobinas;
- vibraciones;
- calentamiento.

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Transformador real</span>
  <div class="formula-panel__formula">P<sub>salida</sub> &lt; P<sub>entrada</sub></div>
</div>

---

## 55. Núcleo laminado

Para reducir corrientes inducidas no deseadas dentro del núcleo:

- se utilizan láminas aisladas entre sí.

Eso dificulta grandes corrientes circulares internas.

Estas corrientes se llaman:

- corrientes parásitas;
- corrientes de Foucault.

---

## 56. Corrientes de Foucault

Un conductor sometido a flujo variable puede desarrollar corrientes inducidas internas.

Pueden producir:

- calentamiento;
- frenado magnético;
- pérdidas.

También pueden utilizarse tecnológicamente en:

- hornos de inducción;
- frenos;
- sensores.

---

## 57. Transporte de energía eléctrica

Para transmitir una potencia P:

<div class="formula-panel">
  <span class="formula-panel__label">Potencia</span>
  <div class="formula-panel__formula">P = VI</div>
</div>

Si elevamos V:

- podemos disminuir I.

Las pérdidas resistivas en cables son:

<div class="formula-panel">
  <span class="formula-panel__label">Pérdidas Joule</span>
  <div class="formula-panel__formula">P<sub>pérdida</sub> = I²R</div>
</div>

---

## 58. Por qué se transmite a alta tensión

Para la misma potencia:

- mayor V;
- menor I.

Como las pérdidas dependen de:

**I²**

disminuir la corriente reduce mucho:

- calentamiento;
- pérdidas en líneas.

Los transformadores hacen práctica esta estrategia en sistemas de CA.

---

## 59. No significa que “alta tensión sea segura”

Elevar tensión mejora la eficiencia de transmisión.

Pero altas tensiones son:

- extremadamente peligrosas.

La eficiencia tecnológica y la seguridad son:

- problemas diferentes.

---

## 60. Autoinducción — profundización

Una corriente variable en una bobina cambia:

- su propio campo magnético;
- su propio flujo.

Eso induce una fem en:

- la misma bobina.

El fenómeno se llama:

**autoinducción**

---

## 61. Inductancia

Definimos la inductancia L mediante una relación del tipo:

<div class="formula-panel">
  <span class="formula-panel__label">Autoinducción</span>
  <div class="formula-panel__formula">ε<sub>L</sub> = −L dI/dt</div>
</div>

Unidad:

**henry (H)**

---

## 62. Una bobina se opone a cambios de corriente

La fem autoinducida sigue la ley de Lenz.

Si I intenta aumentar:

- la fem inducida se opone al aumento.

Si I intenta disminuir:

- la fem inducida intenta sostenerla.

No significa que una bobina:

- “se oponga a toda corriente”.

Se opone principalmente a:

**cambios de corriente.**

---

## 63. Energía en un inductor — profundización

Un inductor ideal almacena energía asociada a su campo magnético:

<div class="formula-panel">
  <span class="formula-panel__label">Energía magnética</span>
  <div class="formula-panel__formula">U<sub>L</sub> = ½LI²</div>
</div>

Esto complementa el capacitor de F-22:

- capacitor → energía en campo eléctrico;
- inductor → energía en campo magnético.

---

## 64. Mutua inducción

Si una corriente variable en una bobina produce flujo variable en otra:

- puede inducir fem en la segunda.

Esto se denomina:

**inducción mutua**

El transformador es una aplicación directa.

---

## 65. De Faraday a una idea más profunda

Hasta ahora una fem inducida parecía surgir en:

- circuitos conductores.

Pero la teoría electromagnética va más lejos:

> **un campo magnético variable produce un campo eléctrico, incluso aunque no haya un cable marcando el camino.**

El conductor simplemente hace visible el efecto mediante:

- movimiento de cargas.

---

## 66. Campo eléctrico inducido

El campo eléctrico electrostático de F-22 tenía líneas relacionadas con cargas y era conservativo en situaciones estáticas.

Un campo eléctrico inducido por B variable puede formar:

- líneas cerradas.

Eso muestra que:

**no todo campo eléctrico tiene la misma estructura que un campo electrostático.**

---

## 67. Faraday en lenguaje de campos — profundización

Cualitativamente:

> un campo magnético variable produce circulación de campo eléctrico.

En forma integral:

<div class="formula-panel">
  <span class="formula-panel__label">Faraday-Maxwell</span>
  <div class="formula-panel__formula">∮ E · dl = −dΦ<sub>B</sub>/dt</div>
</div>

No es necesario dominar cálculo integral para comprender la idea física.

---

## 68. Ampère y el problema del capacitor

Las corrientes eléctricas producen campos magnéticos.

Pero Maxwell observó que la formulación original debía ampliarse para situaciones como:

- un capacitor que se está cargando.

Entre las placas:

- no cruza corriente conductora por el dieléctrico ideal;
- pero el campo eléctrico está cambiando.

---

## 69. Campo eléctrico variable produce campo magnético

Maxwell incorporó una idea decisiva:

> **un campo eléctrico variable también puede producir campo magnético.**

Este término completa la simetría dinámica entre:

- E;
- B.

---

## 70. Dos acoplamientos fundamentales

Podemos resumir:

### B variable

Produce E inducido.

### E variable

Produce B.

Entonces una perturbación electromagnética puede:

- sostenerse;
- propagarse;

incluso por el vacío.

---

## 71. Ecuaciones de Maxwell — panorama cualitativo

Las ecuaciones de Maxwell organizan cuatro grandes ideas.

### 1. Cargas eléctricas producen divergencia de E

Las cargas son fuentes o sumideros del campo eléctrico.

### 2. No se observan monopolos magnéticos

Las líneas de B forman lazos cerrados.

### 3. B variable produce E

Ley de Faraday.

### 4. Corrientes y E variable producen B

Ley de Ampère-Maxwell.

---

## 72. Ley de Gauss eléctrica — profundización conceptual

La primera ecuación de Maxwell relaciona:

- carga encerrada;
- flujo eléctrico.

Conceptualmente:

> las cargas eléctricas actúan como fuentes del campo E.

No necesitamos desarrollar aquí la forma matemática completa.

---

## 73. Ley de Gauss magnética — profundización conceptual

La segunda idea expresa:

> el flujo magnético neto a través de una superficie cerrada es cero.

Es consistente con:

- ausencia observada de monopolos magnéticos;
- líneas de B cerradas.

---

## 74. Faraday como tercera ecuación

La tercera idea es la que estudiamos:

> cambios de flujo magnético generan circulación de campo eléctrico.

Es la base de:

- inducción;
- generadores;
- transformadores.

---

## 75. Ampère-Maxwell como cuarta ecuación

La cuarta idea conecta campo magnético con:

- corrientes;
- campos eléctricos variables.

La incorporación del término de Maxwell hizo posible predecir:

**ondas electromagnéticas**

---

## 76. Maxwell y una predicción extraordinaria

Las ecuaciones permiten obtener una velocidad de propagación en el vacío:

<div class="formula-panel">
  <span class="formula-panel__label">Velocidad electromagnética</span>
  <div class="formula-panel__formula">c = 1/√(μ<sub>0</sub>ε<sub>0</sub>)</div>
</div>

El valor coincide con:

- la velocidad medida de la luz.

La conclusión histórica fue enorme:

> **la luz es una onda electromagnética.**

---

## 77. Unificación electricidad-magnetismo-óptica

Antes de Maxwell podían parecer temas separados:

- electricidad;
- magnetismo;
- luz.

La teoría electromagnética mostró que son manifestaciones de una estructura común.

La luz visible es:

- una pequeña parte del espectro electromagnético.

---

## 78. Onda electromagnética

En una onda electromagnética plana ideal:

- E oscila;
- B oscila;
- ambos son perpendiculares entre sí;
- ambos son perpendiculares a la dirección de propagación.

```text
            E
            ↑
            |
propagación →────
           /
          B
```

---

## 79. Geometría de E, B y propagación

Podemos resumir:

<div class="formula-panel">
  <span class="formula-panel__label">Onda EM ideal</span>
  <div class="formula-panel__formula">E ⟂ B ⟂ dirección de propagación</div>
</div>

La orientación está relacionada con:

- el producto vectorial E × B.

---

## 80. E y B están relacionados

En una onda electromagnética plana en vacío:

<div class="formula-panel">
  <span class="formula-panel__label">Relación de amplitudes</span>
  <div class="formula-panel__formula">E/B = c</div>
</div>

donde E y B representan:

- amplitudes correspondientes.

---

## 81. Las ondas electromagnéticas no necesitan materia

Los campos variables se sostienen mutuamente.

Por eso pueden propagarse en:

- vacío.

No necesitan:

- aire;
- éter material;
- una cuerda física.

---

## 82. Relación de onda

En vacío:

<div class="formula-panel">
  <span class="formula-panel__label">Onda electromagnética</span>
  <div class="formula-panel__formula">c = λf</div>
</div>

Esto es exactamente la relación usada en:

- óptica física.

Ahora entendemos por qué aparece dentro del electromagnetismo.

---

## 83. Espectro electromagnético

El espectro incluye:

- radio;
- microondas;
- infrarrojo;
- visible;
- ultravioleta;
- rayos X;
- gamma.

Todas son:

**ondas electromagnéticas**

Se diferencian principalmente por:

- f;
- λ;
- energía cuántica en la descripción moderna.

---

## 84. Hertz y la confirmación experimental

Heinrich Hertz produjo y detectó ondas electromagnéticas en laboratorio.

Sus experimentos confirmaron que estas ondas mostraban fenómenos como:

- reflexión;
- interferencia;
- propagación.

Eso apoyó la teoría de Maxwell.

---

## 85. Radio y comunicaciones

Una antena transmisora utiliza cargas aceleradas y corrientes variables para generar:

- campos eléctricos variables;
- campos magnéticos variables;
- radiación electromagnética.

Una antena receptora puede responder a esos campos y generar:

- señales eléctricas.

---

## 86. Antenas no “envían electrones por el aire” hasta el receptor

Los electrones de la antena emisora:

- oscilan localmente.

Lo que se propaga a grandes distancias es:

- el campo electromagnético;
- energía;
- información.

No una corriente de electrones viajando desde una antena a la otra.

---

## 87. Energía electromagnética

Una onda electromagnética transporta:

- energía;
- cantidad de movimiento.

En una descripción más avanzada, el flujo de energía se representa mediante:

- vector de Poynting.

No lo desarrollaremos matemáticamente en este nivel.

---

## 88. Aplicación: generación eléctrica

En centrales eléctricas, una turbina puede mover:

- un generador.

La fuente primaria de energía puede ser:

- agua;
- vapor;
- viento;
- otra fuente mecánica.

El generador transforma:

**energía mecánica → eléctrica**

mediante inducción.

---

## 89. Aplicación: hidroelectricidad

El agua posee energía potencial gravitatoria.

Durante el proceso:

- mueve turbinas;
- las turbinas giran generadores;
- el flujo magnético cambia;
- se induce fem.

La energía eléctrica final proviene de:

- la energía del sistema agua-Tierra.

---

## 90. Aplicación: energía eólica

El viento hace girar:

- palas;
- eje;
- generador.

La inducción electromagnética permite convertir parte de:

**energía cinética del aire**

en:

**energía eléctrica**

---

## 91. Aplicación: centrales térmicas

Una fuente térmica produce vapor o movimiento de un fluido.

Ese movimiento puede hacer girar:

- turbina;
- generador.

La inducción es la misma aunque la fuente inicial sea:

- combustible;
- energía nuclear;
- geotermia;
- otra.

---

## 92. Aplicación: carga inalámbrica — profundización

Sistemas de carga inalámbrica pueden utilizar:

- corrientes alternas;
- campos magnéticos variables;
- inducción mutua.

Una bobina transmisora produce flujo variable.

Una bobina receptora recibe:

- fem inducida.

---

## 93. Aplicación: freno electromagnético

Corrientes de Foucault pueden producir fuerzas que se oponen al movimiento.

Eso permite:

- frenado sin contacto mecánico directo;
- amortiguamiento.

La energía mecánica termina principalmente como:

- energía interna.

---

## 94. Aplicación: cocina de inducción

Una corriente alterna en una bobina produce:

- campo magnético variable.

En recipientes adecuados se inducen:

- corrientes;
- pérdidas magnéticas.

Eso genera calentamiento.

No se calienta porque “el magnetismo tenga temperatura”.

---

## 95. Aplicación: micrófonos y parlantes

Algunos micrófonos convierten:

- movimiento mecánico;
- en señal eléctrica;

mediante inducción.

Los parlantes hacen el proceso complementario:

- corriente eléctrica;
- fuerza magnética;
- movimiento de una membrana;
- sonido.

---

## 96. Aplicación: almacenamiento y sensores

El electromagnetismo aparece en:

- discos y memorias magnéticas;
- sensores;
- lectores;
- motores;
- actuadores;
- relés;
- sistemas de control.

Muchos dispositivos modernos combinan:

- campos;
- circuitos;
- materiales magnéticos.

---

## 97. Seguridad con inducción

Una bobina puede generar tensiones elevadas aunque la fuente original parezca modesta.

Además:

- inductores pueden producir picos de tensión al interrumpir corriente;
- transformadores pueden elevar tensión;
- campos intensos pueden calentar conductores.

Las experiencias escolares deben usar:

- baja tensión;
- corriente limitada;
- equipos didácticos.

---

## 98. No experimentar con la red eléctrica

La red domiciliaria puede ser:

- peligrosa;
- mortal.

No realizar experimentos caseros con:

- transformadores conectados directamente a red;
- bobinas improvisadas;
- motores abiertos;
- fuentes de alta tensión.

Usar únicamente:

- equipamiento educativo aislado;
- fuentes seguras de baja tensión.

---

## 99. Experiencia segura: imán y bobina

### Materiales

- bobina didáctica;
- imán;
- galvanómetro o multímetro sensible adecuado.

### Procedimiento

1. Dejá quietos imán y bobina.
2. Observá la lectura.
3. Acercá el imán.
4. Alejalo.
5. Invertí el polo.
6. Movelo más rápido.

### Observar

- quieto → señal aproximadamente nula;
- movimiento → señal;
- invertir movimiento → cambia el signo;
- mayor rapidez → mayor fem inducida aproximadamente.

---

## 100. Experiencia: dos bobinas

Colocamos:

- bobina primaria;
- bobina secundaria;

cercanas.

Si cambiamos la corriente en la primaria:

- aparece una señal transitoria en la secundaria.

Si la corriente primaria se mantiene constante:

- la señal inducida desaparece aproximadamente.

Esto muestra:

**inducción mutua**

---

## 101. Experiencia: transformador didáctico

Con un transformador escolar seguro podemos comparar:

- número de espiras;
- tensión primaria;
- tensión secundaria.

El modelo predice:

<div class="formula-panel">
  <span class="formula-panel__label">Ideal</span>
  <div class="formula-panel__formula">V<sub>s</sub>/V<sub>p</sub> ≈ N<sub>s</sub>/N<sub>p</sub></div>
</div>

Los resultados reales presentan:

- pérdidas;
- desviaciones.

---

## 102. Estrategia para problemas de flujo

1. Dibujá la superficie.
2. Dibujá su normal.
3. Dibujá B.
4. Medí θ entre B y la normal.
5. Usá Φ<sub>B</sub> = BA cosθ.
6. Conservá signos si analizás orientación.
7. Revisá unidades.

---

## 103. Estrategia para Faraday-Lenz

1. Elegí una normal positiva.
2. Determiná el flujo inicial.
3. Determiná el flujo final.
4. Calculá ΔΦ<sub>B</sub>.
5. Calculá el módulo de ε.
6. Analizá si el flujo original aumenta o disminuye.
7. Elegí el B inducido que se opone a ese cambio.
8. Aplicá la regla de la mano para obtener el sentido de corriente.

---

## 104. Estrategia para transformadores

1. Identificá primario y secundario.
2. Registrá N<sub>p</sub> y N<sub>s</sub>.
3. Usá la relación de tensiones.
4. Si es ideal, aplicá conservación de potencia.
5. Obtené corrientes.
6. Revisá:
   - más vueltas → mayor tensión;
   - mayor tensión → menor corriente para igual potencia ideal.

---

## 105. Errores frecuentes

### “Si hay B, siempre hay inducción”

No. Debe cambiar el flujo.

### “El flujo es simplemente B”

No. Depende también del área y orientación.

### “θ se mide desde el plano”

No. En `BA cosθ`, se mide desde la normal.

### “Lenz dice que el campo inducido siempre apunta contra B”

No. Se opone al cambio de flujo.

### “La inducción crea energía”

No. Convierte o transfiere energía.

### “Un transformador funciona igual con corriente continua constante”

No en régimen estacionario ideal.

### “Elevar tensión aumenta necesariamente la potencia”

No. En un transformador ideal la potencia se conserva aproximadamente y la corriente cambia.

### “Una onda electromagnética necesita aire”

No.

### “La luz y las ondas de radio son fenómenos físicos completamente distintos”

No. Son regiones diferentes del espectro electromagnético.

### “La teoría de Maxwell reemplazó por completo a la óptica”

La unificó dentro del electromagnetismo clásico y explicó la naturaleza electromagnética de la luz.

---

## 106. Problemas y ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Conceptos</strong>
  </div>
  <ol>
    <li>Definí flujo magnético.</li>
    <li>¿Qué condiciones pueden cambiar Φ<sub>B</sub>?</li>
    <li>Enunciá cualitativamente las leyes de Faraday y Lenz.</li>
    <li>Distinguí motor y generador.</li>
    <li>Explicá por qué un transformador necesita un flujo variable.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Flujo y Faraday</strong>
  </div>
  <ol>
    <li>Una espira de 0,040 m² está en B = 0,20 T perpendicular al plano. Calculá Φ<sub>B</sub>.</li>
    <li>Repetí si B es paralelo al plano.</li>
    <li>Una espira cambia su flujo en 0,006 Wb durante 0,030 s. Calculá el módulo de la fem media.</li>
    <li>Una bobina de 100 vueltas experimenta el mismo cambio. Calculá la fem.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Lenz, movimiento y generadores</strong>
  </div>
  <ol>
    <li>Un flujo hacia dentro del plano aumenta. Determiná el sentido del B inducido.</li>
    <li>Un flujo hacia fuera disminuye. Determiná el B inducido.</li>
    <li>Una barra de 0,50 m se mueve a 4 m/s perpendicular a B = 0,30 T. Calculá ε = Bℓv.</li>
    <li>Explicá de dónde proviene la energía eléctrica generada al mover esa barra.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>CA y transformadores</strong>
  </div>
  <ol>
    <li>Una tensión sinusoidal tiene V<sub>máx</sub> = 100 V. Calculá V<sub>ef</sub>.</li>
    <li>Un transformador ideal tiene 1000 vueltas en el primario y 100 en el secundario. Si V<sub>p</sub> = 200 V, calculá V<sub>s</sub>.</li>
    <li>Si la potencia ideal transferida es 400 W, calculá I<sub>p</sub> e I<sub>s</sub>.</li>
    <li>Explicá por qué las líneas eléctricas reducen pérdidas al transmitir potencia con tensión elevada.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Derivá `ε(t) = NBAω sen(ωt)` para una espira que gira uniformemente.</li>
    <li>Explicá por qué una bobina presenta una fem `−L dI/dt` cuando cambia su propia corriente.</li>
    <li>Usá c = 1/√(μ<sub>0</sub>ε<sub>0</sub>) para explicar la unificación de óptica y electromagnetismo.</li>
    <li>Describí cualitativamente cómo E variable y B variable pueden sostener una onda electromagnética que se propaga por el vacío.</li>
  </ol>
</div>

---

## 107. Ejemplo integrado: generador y transformador

Una bobina generadora tiene:

- N = 200 vueltas;
- B = 0,40 T;
- A = 0,010 m²;
- velocidad angular `ω = 100 rad/s`.

### Fem máxima

<div class="formula-panel">
  <span class="formula-panel__label">Generador</span>
  <div class="formula-panel__formula">ε<sub>máx</sub> = NBAω</div>
</div>

Entonces:

**ε<sub>máx</sub> = 200 × 0,40 × 0,010 × 100**

**ε<sub>máx</sub> = 80 V**

El valor eficaz ideal es:

<div class="formula-panel">
  <span class="formula-panel__label">Valor eficaz</span>
  <div class="formula-panel__formula">V<sub>ef</sub> = 80/√2 ≈ 56,6 V</div>
</div>

Supongamos que esa tensión eficaz alimenta el primario de un transformador ideal con:

- N<sub>p</sub> = 500;
- N<sub>s</sub> = 2000.

### Tensión secundaria

<div class="formula-panel">
  <span class="formula-panel__label">Transformador</span>
  <div class="formula-panel__formula">V<sub>s</sub>/V<sub>p</sub> = N<sub>s</sub>/N<sub>p</sub></div>
</div>

Entonces:

**V<sub>s</sub> = 56,6 × 2000/500**

**V<sub>s</sub> ≈ 226 V**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>Movimiento → inducción → CA → transformación</h3>
  <div class="worked-example-card__steps">
    <p>El giro de la bobina cambia el flujo.</p>
    <p>Faraday produce una fem alterna.</p>
    <p>La tensión eficaz generada es ≈ 56,6 V.</p>
    <p>El transformador eleva esa tensión hasta ≈ 226 V.</p>
    <p><strong>Generación y transformación son dos aplicaciones distintas de la misma inducción electromagnética.</strong></p>
  </div>
</div>

---

## 108. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Qué magnitudes determinan el flujo magnético uniforme a través de una superficie plana?</summary>
  <div class="lesson-quiz__answer">
    El módulo B, el área A y el ángulo θ entre B y la normal: Φ<sub>B</sub> = BA cosθ.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Qué expresa la ley de Faraday?</summary>
  <div class="lesson-quiz__answer">
    Que una variación temporal del flujo magnético enlazado con un circuito induce una fem proporcional a la rapidez de cambio del flujo.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿A qué se opone la ley de Lenz?</summary>
  <div class="lesson-quiz__answer">
    Al cambio del flujo magnético que origina la inducción, no necesariamente al campo magnético externo en sí.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Por qué un transformador ideal no funciona con corriente continua estacionaria?</summary>
  <div class="lesson-quiz__answer">
    Porque una corriente constante produce un flujo constante después del transitorio, por lo que dΦ<sub>B</sub>/dt = 0 y no se mantiene una fem inducida en el secundario.
  </div>
</details>

<details class="lesson-quiz">
  <summary>5. ¿Qué predicción de Maxwell conectó electromagnetismo y óptica?</summary>
  <div class="lesson-quiz__answer">
    Que las perturbaciones electromagnéticas se propagan con una velocidad c = 1/√(μ<sub>0</sub>ε<sub>0</sub>), coincidente con la velocidad de la luz; por eso la luz es una onda electromagnética.
  </div>
</details>

<details class="lesson-quiz">
  <summary>6. ¿Necesita materia una onda electromagnética para propagarse?</summary>
  <div class="lesson-quiz__answer">
    No. Puede propagarse en el vacío mediante campos eléctricos y magnéticos variables acoplados.
  </div>
</details>

---

## 109. Resumen

- El flujo magnético para B uniforme y superficie plana es Φ<sub>B</sub> = BA cosθ.
- θ se mide entre B y la normal a la superficie.
- Cambiar B, A, θ o la geometría relativa puede cambiar el flujo.
- Un flujo magnético variable induce una fem.
- La ley de Faraday es ε<sub>ind</sub> = −N dΦ<sub>B</sub>/dt.
- La ley de Lenz determina el sentido de la inducción.
- La inducción se opone al cambio de flujo, no necesariamente al campo externo.
- Lenz es consistente con conservación de energía.
- Una barra móvil puede presentar `ε = Bℓv` en una geometría perpendicular ideal.
- Un generador convierte energía mecánica en eléctrica.
- Una bobina rotante ideal puede generar una fem sinusoidal.
- La corriente alterna cambia periódicamente de sentido.
- Para una sinusoidal, V<sub>ef</sub> = V<sub>máx</sub>/√2.
- Un motor convierte principalmente energía eléctrica en mecánica.
- Motor y generador son aplicaciones complementarias del electromagnetismo.
- Un transformador utiliza inducción mutua y requiere flujo variable.
- En un transformador ideal, V<sub>s</sub>/V<sub>p</sub> = N<sub>s</sub>/N<sub>p</sub>.
- Idealmente, V<sub>p</sub>I<sub>p</sub> = V<sub>s</sub>I<sub>s</sub>.
- La transmisión a alta tensión permite reducir corriente y pérdidas `I²R`.
- Una corriente variable produce autoinducción.
- Un campo magnético variable produce campo eléctrico.
- Un campo eléctrico variable contribuye a producir campo magnético.
- Las ecuaciones de Maxwell unifican electricidad y magnetismo.
- Maxwell predijo ondas electromagnéticas.
- c = 1/√(μ<sub>0</sub>ε<sub>0</sub>).
- La luz es una onda electromagnética.
- En una onda EM ideal, E y B son perpendiculares entre sí y a la propagación.
- Radio, microondas, infrarrojo, visible, ultravioleta, rayos X y gamma pertenecen al mismo espectro electromagnético.
- Generadores, transformadores, motores, antenas, sensores, carga inalámbrica y muchas tecnologías se basan en estos principios.

---

## 110. Cierre de la Física clásica

Con F-25 llegamos a una de las mayores síntesis de la Física clásica.

A lo largo del recorrido construimos:

- mecánica;
- gravitación;
- fluidos;
- termodinámica;
- oscilaciones;
- ondas;
- acústica;
- óptica;
- electricidad;
- magnetismo;
- electromagnetismo.

La teoría electromagnética de Maxwell consiguió además unir:

- electricidad;
- magnetismo;
- luz.

A fines del siglo XIX, parecía que gran parte de la Física tenía una estructura extremadamente sólida.

Sin embargo, algunos experimentos comenzaron a mostrar resultados que no encajaban.

Ese conflicto abrirá la siguiente parte del curso.

---

## 111. Siguiente tema recomendado

**F-26 — Crisis de la Física clásica**

Comienza el bloque de **Física moderna**.

Estudiaremos:

- alcance de la mecánica clásica;
- problemas de fines del siglo XIX y comienzos del XX;
- radiación térmica;
- cuerpo negro;
- fracaso de ciertas predicciones clásicas;
- cuantización de Planck;
- constante de Planck;
- nueva discusión sobre la naturaleza de la luz;
- contexto histórico del nacimiento de la Física moderna.

La idea será especialmente importante:

> **la Física moderna no apareció porque la Física clásica fuera inútil, sino porque nuevos experimentos revelaron con precisión dónde dejaban de ser suficientes sus modelos.**
