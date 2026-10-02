---
title: "Despeje de fórmulas"
description: "Cómo aislar una variable aplicando operaciones equivalentes a ambos miembros, controlar signos, fracciones, potencias y raíces, y verificar el resultado mediante unidades."
slug: "despeje-de-formulas"

course: "matematicas"
module: "algebra"
order: 6

level: "basico"
cycle: "ambos"

yearsApprox: [2, 3, 4, 5, 6]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - potencias-y-raices

skills:
  - igualdad
  - operaciones-equivalentes
  - despeje
  - variable
  - inversas
  - despeje-con-fracciones
  - despeje-con-productos
  - despeje-con-potencias
  - despeje-con-raices
  - control-de-signos
  - analisis-dimensional
  - verificacion-por-sustitucion

hasExercises: true
hasQuiz: true
hasExperiment: false

deepening: false
status: "complete"
---

## Una fórmula no es una flecha que funciona en un solo sentido

En cinemática:

<div class="formula-panel">
  <span class="formula-panel__label">Rapidez media</span>
  <div class="formula-panel__formula">v = d/t</div>
</div>

La misma relación permite hallar:

- v si conocemos d y t;
- d si conocemos v y t;
- t si conocemos d y v.

No necesitamos memorizar tres fórmulas separadas.

Podemos transformar una igualdad conservando su equivalencia.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Despejar no significa “pasar algo al otro lado cambiando de signo”. Significa aplicar operaciones equivalentes a ambos miembros de una igualdad hasta dejar aislada la variable buscada.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar este repaso deberías poder:

- interpretar una igualdad;
- reconocer miembros de una ecuación;
- identificar la variable buscada;
- aplicar la misma operación a ambos lados;
- usar operaciones inversas;
- despejar variables en sumas y restas;
- despejar factores;
- despejar denominadores;
- trabajar con fórmulas que contienen varios factores;
- despejar variables elevadas al cuadrado;
- usar raíces al despejar;
- reconocer cuándo aparece ± en una ecuación matemática;
- seleccionar la solución físicamente apropiada;
- verificar un despeje por sustitución;
- comprobar unidades;
- reconocer condiciones de denominadores no nulos;
- distinguir un despeje simple de una ecuación donde la variable aparece varias veces.

---

## 1. Igualdad

Una igualdad como:

<div class="formula-panel">
  <span class="formula-panel__label">Ecuación</span>
  <div class="formula-panel__formula">A = B</div>
</div>

afirma que ambos miembros representan:

- el mismo valor.

Podemos modificar su forma sin cambiar esa igualdad si realizamos:

- operaciones equivalentes.

---

## 2. Los dos miembros

En:

**v = d/t**

tenemos:

### Primer miembro

**v**

### Segundo miembro

**d/t**

No existe un “lado correcto” obligatorio para una variable.

---

## 3. La balanza como modelo

Podemos imaginar una ecuación como una balanza.

Si:

**A = B**

y sumamos C a ambos lados:

<div class="formula-panel">
  <span class="formula-panel__label">Misma operación</span>
  <div class="formula-panel__formula">A + C = B + C</div>
</div>

La igualdad se conserva.

---

## 4. Operaciones permitidas

Podemos, en condiciones adecuadas:

- sumar lo mismo a ambos lados;
- restar lo mismo;
- multiplicar por lo mismo;
- dividir por el mismo número no nulo;
- aplicar una función inversa compatible.

El objetivo es:

- aislar la variable.

---

## 5. No “pasa restando”

Supongamos:

**x + 5 = 12**

En lugar de decir:

> “el 5 pasa restando”

decimos:

- restamos 5 a ambos lados.

<div class="formula-panel">
  <span class="formula-panel__label">Operación equivalente</span>
  <div class="formula-panel__formula">x + 5 − 5 = 12 − 5</div>
</div>

Entonces:

**x = 7**

---

## 6. La regla abreviada es consecuencia, no fundamento

La frase:

> “si suma pasa restando”

puede servir como atajo.

Pero oculta por qué funciona.

El razonamiento general es más seguro:

> **aplicar la operación inversa a ambos miembros.**

---

## 7. Operaciones inversas

Algunas parejas:

- suma ↔ resta;
- multiplicación ↔ división;
- cuadrado ↔ raíz cuadrada, con cuidados;
- exponencial ↔ logaritmo, en cursos posteriores.

---

## 8. Despeje de una suma

Si:

<div class="formula-panel">
  <span class="formula-panel__label">Inicial</span>
  <div class="formula-panel__formula">y = x + a</div>
</div>

restamos a:

<div class="formula-panel">
  <span class="formula-panel__label">Despeje</span>
  <div class="formula-panel__formula">x = y − a</div>
</div>

---

## 9. Despeje de una resta

Si:

**y = x − a**

sumamos a:

<div class="formula-panel">
  <span class="formula-panel__label">Despeje</span>
  <div class="formula-panel__formula">x = y + a</div>
</div>

---

## 10. Despeje de un producto

Si:

<div class="formula-panel">
  <span class="formula-panel__label">Producto</span>
  <div class="formula-panel__formula">y = ax</div>
</div>

con a ≠ 0, dividimos por a:

<div class="formula-panel">
  <span class="formula-panel__label">Despeje</span>
  <div class="formula-panel__formula">x = y/a</div>
</div>

---

## 11. Despeje de un cociente

Si:

<div class="formula-panel">
  <span class="formula-panel__label">Cociente</span>
  <div class="formula-panel__formula">y = x/a</div>
</div>

multiplicamos ambos lados por a:

<div class="formula-panel">
  <span class="formula-panel__label">Despeje</span>
  <div class="formula-panel__formula">x = ay</div>
</div>

---

## 12. Velocidad: despejar distancia

Partimos de:

<div class="formula-panel">
  <span class="formula-panel__label">Velocidad</span>
  <div class="formula-panel__formula">v = d/t</div>
</div>

Multiplicamos ambos lados por t:

<div class="formula-panel">
  <span class="formula-panel__label">Distancia</span>
  <div class="formula-panel__formula">vt = d</div>
</div>

Reordenamos:

<div class="formula-panel">
  <span class="formula-panel__label">Resultado</span>
  <div class="formula-panel__formula">d = vt</div>
</div>

---

## 13. Velocidad: despejar tiempo

Partimos otra vez de:

**v = d/t**

Multiplicamos por t:

**vt = d**

Dividimos por v:

<div class="formula-panel">
  <span class="formula-panel__label">Tiempo</span>
  <div class="formula-panel__formula">t = d/v</div>
</div>

con:

**v ≠ 0**

para esta forma del despeje.

---

## 14. Densidad

<div class="formula-panel">
  <span class="formula-panel__label">Densidad</span>
  <div class="formula-panel__formula">ρ = m/V</div>
</div>

### Despejar masa

<div class="formula-panel">
  <span class="formula-panel__label">Masa</span>
  <div class="formula-panel__formula">m = ρV</div>
</div>

### Despejar volumen

<div class="formula-panel">
  <span class="formula-panel__label">Volumen</span>
  <div class="formula-panel__formula">V = m/ρ</div>
</div>

---

## 15. Ley de Ohm

<div class="formula-panel">
  <span class="formula-panel__label">Ley de Ohm</span>
  <div class="formula-panel__formula">V = IR</div>
</div>

Despejando:

<div class="formula-panel">
  <span class="formula-panel__label">Corriente</span>
  <div class="formula-panel__formula">I = V/R</div>
</div>

y:

<div class="formula-panel">
  <span class="formula-panel__label">Resistencia</span>
  <div class="formula-panel__formula">R = V/I</div>
</div>

---

## 16. Fórmula con un término sumado

Movimiento con velocidad inicial:

<div class="formula-panel">
  <span class="formula-panel__label">Velocidad</span>
  <div class="formula-panel__formula">v = v<sub>0</sub> + at</div>
</div>

Queremos despejar t.

Restamos v<sub>0</sub>:

**v − v<sub>0</sub> = at**

Dividimos por a:

<div class="formula-panel">
  <span class="formula-panel__label">Tiempo</span>
  <div class="formula-panel__formula">t = (v − v<sub>0</sub>)/a</div>
</div>

---

## 17. Los paréntesis son esenciales

En:

<div class="formula-panel">
  <span class="formula-panel__label">Correcto</span>
  <div class="formula-panel__formula">t = (v − v<sub>0</sub>)/a</div>
</div>

todo el numerador se divide por a.

No es lo mismo que:

**v − v<sub>0</sub>/a**

---

## 18. Fórmula con varios factores

Supongamos:

<div class="formula-panel">
  <span class="formula-panel__label">Producto</span>
  <div class="formula-panel__formula">F = mab</div>
</div>

Para despejar b:

<div class="formula-panel">
  <span class="formula-panel__label">Despeje</span>
  <div class="formula-panel__formula">b = F/(ma)</div>
</div>

si:

- m ≠ 0;
- a ≠ 0.

---

## 19. Variable en un denominador

Si:

<div class="formula-panel">
  <span class="formula-panel__label">Relación</span>
  <div class="formula-panel__formula">y = a/x</div>
</div>

multiplicamos por x:

**yx = a**

Luego dividimos por y:

<div class="formula-panel">
  <span class="formula-panel__label">Despeje</span>
  <div class="formula-panel__formula">x = a/y</div>
</div>

---

## 20. Fracción más compleja

Si:

<div class="formula-panel">
  <span class="formula-panel__label">Relación</span>
  <div class="formula-panel__formula">P = W/t</div>
</div>

y buscamos t:

<div class="formula-panel">
  <span class="formula-panel__label">Tiempo</span>
  <div class="formula-panel__formula">t = W/P</div>
</div>

La estructura es la misma que en:

- velocidad;
- densidad.

---

## 21. Fórmula con cuadrado

Energía cinética:

<div class="formula-panel">
  <span class="formula-panel__label">Energía cinética</span>
  <div class="formula-panel__formula">K = ½mv²</div>
</div>

Queremos despejar v.

---

## 22. Paso 1: aislar v²

Multiplicamos por 2:

**2K = mv²**

Dividimos por m:

<div class="formula-panel">
  <span class="formula-panel__label">Cuadrado aislado</span>
  <div class="formula-panel__formula">v² = 2K/m</div>
</div>

---

## 23. Paso 2: aplicar raíz

Matemáticamente:

<div class="formula-panel">
  <span class="formula-panel__label">Soluciones</span>
  <div class="formula-panel__formula">v = ±√(2K/m)</div>
</div>

Pero si v representa específicamente una:

- rapidez;

tomamos la solución no negativa:

<div class="formula-panel">
  <span class="formula-panel__label">Rapidez</span>
  <div class="formula-panel__formula">v = √(2K/m)</div>
</div>

---

## 24. Física y elección de solución

El álgebra puede producir:

- más de una solución.

El contexto físico decide cuáles son aceptables.

Ejemplos:

- rapidez ≥ 0;
- radio > 0;
- tiempo transcurrido puede requerir t ≥ 0;
- una componente de velocidad sí puede ser negativa.

---

## 25. Caída libre y raíz

Si:

<div class="formula-panel">
  <span class="formula-panel__label">Caída ideal</span>
  <div class="formula-panel__formula">h = ½gt²</div>
</div>

entonces:

**2h = gt²**

<div class="formula-panel">
  <span class="formula-panel__label">Tiempo al cuadrado</span>
  <div class="formula-panel__formula">t² = 2h/g</div>
</div>

y para tiempo transcurrido:

<div class="formula-panel">
  <span class="formula-panel__label">Tiempo físico</span>
  <div class="formula-panel__formula">t = √(2h/g)</div>
</div>

---

## 26. Fórmula con variable dentro de una raíz

Supongamos:

<div class="formula-panel">
  <span class="formula-panel__label">Relación</span>
  <div class="formula-panel__formula">v = √(k/m)</div>
</div>

Elevamos ambos lados al cuadrado:

**v² = k/m**

Multiplicamos por m:

**mv² = k**

Entonces:

<div class="formula-panel">
  <span class="formula-panel__label">Masa</span>
  <div class="formula-panel__formula">m = k/v²</div>
</div>

---

## 27. Gravitación: despejar distancia

<div class="formula-panel">
  <span class="formula-panel__label">Gravitación</span>
  <div class="formula-panel__formula">F = Gm<sub>1</sub>m<sub>2</sub>/r²</div>
</div>

Multiplicamos por r²:

**Fr² = Gm<sub>1</sub>m<sub>2</sub>**

Dividimos por F:

<div class="formula-panel">
  <span class="formula-panel__label">Radio al cuadrado</span>
  <div class="formula-panel__formula">r² = Gm<sub>1</sub>m<sub>2</sub>/F</div>
</div>

Entonces, para una distancia positiva:

<div class="formula-panel">
  <span class="formula-panel__label">Distancia</span>
  <div class="formula-panel__formula">r = √(Gm<sub>1</sub>m<sub>2</sub>/F)</div>
</div>

---

## 28. Temperatura en gas ideal

<div class="formula-panel">
  <span class="formula-panel__label">Gas ideal</span>
  <div class="formula-panel__formula">PV = nRT</div>
</div>

Para despejar T:

<div class="formula-panel">
  <span class="formula-panel__label">Temperatura</span>
  <div class="formula-panel__formula">T = PV/(nR)</div>
</div>

---

## 29. Despejar P en gas ideal

De:

**PV = nRT**

dividimos por V:

<div class="formula-panel">
  <span class="formula-panel__label">Presión</span>
  <div class="formula-panel__formula">P = nRT/V</div>
</div>

---

## 30. Verificación por sustitución

Si de:

**v = d/t**

obtenemos:

**d = vt**

podemos reemplazar d en la fórmula original:

<div class="formula-panel">
  <span class="formula-panel__label">Chequeo</span>
  <div class="formula-panel__formula">v = (vt)/t = v</div>
</div>

si t ≠ 0.

La identidad confirma el despeje.

---

## 31. Verificación dimensional

En:

<div class="formula-panel">
  <span class="formula-panel__label">Distancia</span>
  <div class="formula-panel__formula">d = vt</div>
</div>

unidades:

<div class="formula-panel">
  <span class="formula-panel__label">Unidades</span>
  <div class="formula-panel__formula">(m/s)·s = m</div>
</div>

Coinciden con una distancia.

---

## 32. Un despeje incorrecto puede delatarse por unidades

Si alguien escribe:

**d = v/t**

las unidades serían:

<div class="formula-panel">
  <span class="formula-panel__label">Chequeo</span>
  <div class="formula-panel__formula">(m/s)/s = m/s²</div>
</div>

Eso corresponde a una aceleración, no a una longitud.

El análisis dimensional detecta el error.

---

## 33. Unidades no reemplazan el álgebra

Dos expresiones pueden tener las mismas unidades y no ser iguales.

Ejemplo:

- 2vt;
- vt.

Ambas tienen unidad de longitud.

Pero no son necesariamente:

- el mismo valor.

El análisis dimensional es un control:

- necesario a veces;
- no suficiente.

---

## 34. Condiciones del despeje

Cuando dividimos por una variable o expresión, debemos recordar que no puede valer:

**0**

Por ejemplo:

**t = d/v**

requiere:

- v ≠ 0;

para esa forma algebraica.

---

## 35. Variable que aparece más de una vez

Consideremos:

**ax + b = cx + d**

Aquí x aparece:

- en ambos lados.

Ya no basta con deshacer una sola cadena de operaciones.

Debemos:

- reunir términos;
- resolver una ecuación lineal.

Eso será parte de:

[M-07 — Ecuaciones lineales](/curso-fisicoquimica-fisica/matematicas/ecuaciones-lineales).

---

## 36. Variable dentro de suma y denominador

Si aparece algo como:

**y = a/(x+b)**

todavía podemos despejar paso a paso:

1. multiplicar por x+b;
2. dividir por y;
3. restar b.

Resultado:

<div class="formula-panel">
  <span class="formula-panel__label">Despeje</span>
  <div class="formula-panel__formula">x = a/y − b</div>
</div>

con las condiciones correspondientes.

---

## 37. Orden inverso de operaciones

Si para construir una expresión hacemos:

1. multiplicar x por a;
2. sumar b;

obtenemos:

**y = ax + b**

Para recuperar x deshacemos en orden inverso:

1. restar b;
2. dividir por a.

<div class="formula-panel">
  <span class="formula-panel__label">Despeje</span>
  <div class="formula-panel__formula">x = (y − b)/a</div>
</div>

---

## 38. Diagrama de operaciones

```text
x ──×a──> ax ──+b──> y
y ──−b──> ax ──÷a──> x
```

Pensar así evita memorizar:

- “pases”;
- cambios de signo automáticos.

---

## 39. Ejemplo numérico de verificación

Supongamos:

**v = v<sub>0</sub> + at**

con:

- v = 14 m/s;
- v<sub>0</sub> = 2 m/s;
- a = 3 m/s².

Despeje:

<div class="formula-panel">
  <span class="formula-panel__label">Tiempo</span>
  <div class="formula-panel__formula">t = (v − v<sub>0</sub>)/a</div>
</div>

Sustituimos:

**t = (14 − 2)/3 s = 4 s**

Chequeo:

**2 + 3·4 = 14**

Correcto.

---

## 40. Primero despejar, después sustituir

En muchos ejercicios conviene:

1. escribir la fórmula simbólica;
2. despejar la variable;
3. recién después reemplazar números.

Esto reduce errores y permite:

- ver estructura;
- controlar unidades;
- reutilizar el resultado.

---

## 41. No mezclar álgebra con conversión sin control

Si tenemos:

- km;
- h;
- m/s;

primero decidimos qué sistema de unidades usar.

Luego:

- convertimos;
- sustituimos.

El despeje algebraico es independiente de:

- los valores numéricos concretos.

---

## 42. Ejemplo integrado: energía cinética

Una partícula tiene:

- K = 90 J;
- m = 5 kg.

Partimos de:

**K = ½mv²**

Despejamos:

<div class="formula-panel">
  <span class="formula-panel__label">Rapidez</span>
  <div class="formula-panel__formula">v = √(2K/m)</div>
</div>

Sustituimos:

<div class="formula-panel">
  <span class="formula-panel__label">Cálculo</span>
  <div class="formula-panel__formula">v = √[(2·90 J)/(5 kg)]</div>
</div>

Dentro de la raíz:

**36 J/kg**

Como:

**J = kg·m²/s²**

entonces:

**J/kg = m²/s²**

Por lo tanto:

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>Álgebra y unidades llegan al mismo resultado</h3>
  <div class="worked-example-card__steps">
    <p>v = √(36 m²/s²)</p>
    <p><strong>v = 6 m/s</strong></p>
  </div>
</div>

---

## 43. Errores frecuentes

### “Pasar al otro lado cambia siempre el signo”

No.

### “Si está multiplicando, pasa dividiendo” como regla sin entender

Es un atajo que proviene de dividir ambos miembros.

### “Puedo cancelar términos en una suma”

No como si fueran factores.

### “De x² = 9 sale solamente x = 3”

Matemáticamente salen ±3, aunque el contexto físico puede seleccionar una.

### “Si aparece una raíz, siempre hay ± delante”

No al evaluar una raíz principal; ± aparece al resolver ciertas ecuaciones cuadráticas.

### “Las unidades se chequean sólo al final”

Conviene usarlas durante el proceso.

### “Cualquier despeje con letras es válido si parece simétrico”

Debe conservar la igualdad y las condiciones de dominio.

---

## 44. Ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Operaciones inversas</strong>
  </div>
  <ol>
    <li>Despejá x en y = x + a.</li>
    <li>Despejá x en y = ax.</li>
    <li>Despejá x en y = x/a.</li>
    <li>Despejá d en v = d/t.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Fórmulas físicas</strong>
  </div>
  <ol>
    <li>Despejá V en ρ = m/V.</li>
    <li>Despejá R en V = IR.</li>
    <li>Despejá t en P = W/t.</li>
    <li>Despejá a en v = v<sub>0</sub> + at.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Potencias y raíces</strong>
  </div>
  <ol>
    <li>Despejá v en K = ½mv².</li>
    <li>Despejá t en h = ½gt² para t ≥ 0.</li>
    <li>Despejá r en F = Gm<sub>1</sub>m<sub>2</sub>/r² para r > 0.</li>
    <li>Despejá m en v = √(k/m).</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Verificación</strong>
  </div>
  <ol>
    <li>Verificá por sustitución que V = m/ρ es equivalente a ρ = m/V.</li>
    <li>Chequeá dimensionalmente t = d/v.</li>
    <li>Mostrá por unidades que v = √(2K/m) tiene dimensión de velocidad.</li>
    <li>Encontrá el error en un supuesto despeje d = v/t partiendo de v = d/t.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Despejá x en y = a/(x+b), indicando condiciones de denominadores.</li>
    <li>Explicá mediante un diagrama de operaciones cómo despejar x en y = ax+b.</li>
    <li>Construí un ejemplo donde el álgebra entregue dos soluciones y el contexto físico permita sólo una.</li>
  </ol>
</div>

---

## 45. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Qué significa realmente “pasar sumando o restando”?</summary>
  <div class="lesson-quiz__answer">
    Es una abreviatura para aplicar la operación inversa a ambos miembros de la igualdad. El fundamento es conservar la equivalencia.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Cómo se despeja t de v = d/t?</summary>
  <div class="lesson-quiz__answer">
    Multiplicamos ambos miembros por t y luego dividimos por v: t = d/v, con v ≠ 0 para esa forma.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Por qué de v² = 2K/m puede aparecer ±?</summary>
  <div class="lesson-quiz__answer">
    Porque la ecuación x² = a posee dos soluciones reales cuando a es positiva. Si v representa rapidez, el contexto físico selecciona la raíz no negativa.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Para qué sirve el análisis dimensional después de un despeje?</summary>
  <div class="lesson-quiz__answer">
    Permite comprobar que la expresión resultante tiene unidades compatibles con la magnitud despejada y puede detectar muchos errores algebraicos.
  </div>
</details>

---

## 46. Resumen

- Una ecuación expresa igualdad entre dos miembros.
- Despejar significa aislar una variable conservando la igualdad.
- Las operaciones deben aplicarse de manera equivalente a ambos lados.
- Suma y resta, multiplicación y división funcionan como operaciones inversas.
- Los paréntesis son esenciales cuando un bloque completo se divide.
- Una variable en denominador puede aislarse multiplicando primero por ese denominador.
- Si la variable está al cuadrado, puede ser necesario aplicar una raíz.
- Resolver x² = a puede producir ±√a.
- El contexto físico selecciona soluciones admisibles.
- Antes de dividir por una variable debemos considerar que no sea cero.
- Verificar por sustitución es una prueba útil.
- El análisis dimensional permite controlar unidades.
- Conviene despejar simbólicamente antes de sustituir números.
- Si la variable aparece varias veces, puede ser necesario resolver una ecuación lineal completa.

---

## 47. Siguiente tema recomendado

**M-07 — Ecuaciones lineales**

El siguiente paso será resolver expresiones donde la incógnita:

- aparece en ambos miembros;
- aparece dentro de varios términos;
- requiere agrupar y simplificar.

Eso permitirá trabajar con modelos algebraicos más generales sin depender de fórmulas ya despejadas.
