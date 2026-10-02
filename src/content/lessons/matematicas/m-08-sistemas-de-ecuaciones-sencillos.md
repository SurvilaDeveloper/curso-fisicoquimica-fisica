---
title: "Sistemas de ecuaciones sencillos"
description: "Cómo resolver sistemas lineales de dos ecuaciones con dos incógnitas mediante sustitución, igualación y eliminación, e interpretar soluciones, incompatibilidades y dependencias."
slug: "sistemas-de-ecuaciones-sencillos"

course: "matematicas"
module: "algebra"
order: 8

level: "basico"
cycle: "ambos"

yearsApprox: [2, 3, 4, 5, 6]

jurisdictions:
  - nacional
  - caba
  - pba

prerequisites:
  - ecuaciones-lineales

skills:
  - sistema-de-ecuaciones
  - dos-incognitas
  - solucion-de-un-sistema
  - metodo-de-sustitucion
  - metodo-de-igualacion
  - metodo-de-eliminacion
  - sistema-compatible-determinado
  - sistema-incompatible
  - sistema-dependiente
  - interpretacion-grafica
  - modelizacion-con-sistemas

hasExercises: true
hasQuiz: true
hasExperiment: false

deepening: false
status: "complete"
---

## Dos incógnitas necesitan más información

Supongamos que sabemos:

<div class="formula-panel">
  <span class="formula-panel__label">Relación</span>
  <div class="formula-panel__formula">x + y = 10</div>
</div>

¿Podemos determinar x e y?

No.

Existen muchas parejas:

- x = 1, y = 9;
- x = 2, y = 8;
- x = 7, y = 3.

Pero si además sabemos:

<div class="formula-panel">
  <span class="formula-panel__label">Segunda relación</span>
  <div class="formula-panel__formula">x − y = 2</div>
</div>

las dos condiciones juntas pueden seleccionar:

- una única pareja.

<div class="lesson-callout lesson-callout--idea">
  <div class="lesson-callout__heading">
    <span class="lesson-callout__icon" aria-hidden="true">◆</span>
    <strong>Idea clave</strong>
  </div>
  <div class="lesson-callout__body">
    <p>Un sistema de ecuaciones exige que todas sus ecuaciones se cumplan al mismo tiempo. La solución no es un valor aislado: es una combinación de valores que satisface simultáneamente todas las relaciones.</p>
  </div>
</div>

## Qué vamos a aprender

Al terminar este repaso deberías poder:

- reconocer un sistema de dos ecuaciones con dos incógnitas;
- interpretar una solución como una pareja ordenada;
- resolver por sustitución;
- resolver por igualación;
- resolver por eliminación;
- elegir un método conveniente;
- verificar una solución en ambas ecuaciones;
- interpretar gráficamente el sistema como intersección de rectas;
- reconocer un sistema con solución única;
- reconocer sistemas incompatibles;
- reconocer sistemas dependientes;
- traducir problemas sencillos a sistemas;
- aplicar sistemas a encuentros, mezclas y balances simples.

---

## 1. Sistema de ecuaciones

Un sistema puede escribirse:

<div class="formula-panel">
  <span class="formula-panel__label">Sistema</span>
  <div class="formula-panel__formula">{ x + y = 10 ; x − y = 2 }</div>
</div>

Buscamos valores de:

- x;
- y;

que satisfagan ambas ecuaciones.

---

## 2. Solución como pareja

En el sistema anterior:

sumamos ecuaciones:

**2x = 12**

Entonces:

**x = 6**

Sustituimos:

**6 + y = 10**

**y = 4**

La solución es:

<div class="formula-panel">
  <span class="formula-panel__label">Solución</span>
  <div class="formula-panel__formula">(x, y) = (6, 4)</div>
</div>

---

## 3. Verificación

Primera ecuación:

**6 + 4 = 10**

Segunda:

**6 − 4 = 2**

Se cumplen ambas.

---

## 4. Una sola ecuación con dos incógnitas

Una ecuación como:

**x + y = 10**

representa infinitas parejas.

Geométricamente corresponde a:

- una recta.

La segunda ecuación introduce otra condición.

---

## 5. Intersección de dos rectas

Cada ecuación lineal de dos variables representa una recta.

La solución del sistema es:

- el punto donde ambas rectas se intersectan.

```text
y
│\       /
│ \     /
│  \   /
│   \•/
│   / \
└──────── x
```

---

## 6. Método de sustitución

La idea es:

1. despejar una incógnita en una ecuación;
2. sustituirla en la otra;
3. resolver una ecuación de una incógnita;
4. volver para hallar la segunda.

---

## 7. Ejemplo por sustitución

Sistema:

<div class="formula-panel">
  <span class="formula-panel__label">Sistema</span>
  <div class="formula-panel__formula">{ y = 2x + 1 ; x + y = 10 }</div>
</div>

Sustituimos y:

**x + (2x + 1) = 10**

**3x + 1 = 10**

**3x = 9**

**x = 3**

Entonces:

**y = 2·3 + 1 = 7**

---

## 8. Cuándo conviene sustitución

Es especialmente cómoda cuando:

- una variable ya está despejada;
- despejarla es sencillo;
- un coeficiente es 1 o −1.

---

## 9. Método de igualación

Si podemos despejar la misma variable en ambas ecuaciones:

<div class="formula-panel">
  <span class="formula-panel__label">Primera</span>
  <div class="formula-panel__formula">y = expresión 1</div>
</div>

<div class="formula-panel">
  <span class="formula-panel__label">Segunda</span>
  <div class="formula-panel__formula">y = expresión 2</div>
</div>

entonces igualamos:

**expresión 1 = expresión 2**

---

## 10. Ejemplo por igualación

Sistema:

**y = 3x − 2**

**y = x + 4**

Igualamos:

**3x − 2 = x + 4**

**2x = 6**

**x = 3**

Luego:

**y = 7**

---

## 11. Método de eliminación

También llamado:

- reducción;
- suma y resta.

La idea es combinar las ecuaciones para cancelar una incógnita.

---

## 12. Ejemplo de eliminación directa

<div class="formula-panel">
  <span class="formula-panel__label">Sistema</span>
  <div class="formula-panel__formula">{ x + y = 10 ; x − y = 2 }</div>
</div>

Sumamos:

**2x = 12**

**x = 6**

Después:

**y = 4**

---

## 13. Eliminación multiplicando una ecuación

Sistema:

**2x + y = 11**

**x − y = 1**

Aquí y ya tiene coeficientes opuestos.

Sumamos:

**3x = 12**

**x = 4**

Luego:

**y = 3**

---

## 14. Cuando los coeficientes no coinciden

Sistema:

**2x + 3y = 12**

**x + y = 5**

Multiplicamos la segunda por:

**−2**

obtenemos:

**−2x − 2y = −10**

Sumamos con la primera:

**y = 2**

Luego:

**x = 3**

---

## 15. Multiplicar una ecuación completa

Si multiplicamos:

**x + y = 5**

por −2, obtenemos:

**−2x − 2y = −10**

Debemos multiplicar:

- todos los términos;
- ambos miembros.

---

## 16. Elegir método

### Sustitución

Conviene si una incógnita ya está aislada.

### Igualación

Conviene si ambas pueden aislarse fácilmente.

### Eliminación

Conviene si los coeficientes permiten cancelar una variable con pocos pasos.

No hay un único método correcto.

---

## 17. Solución única

Dos rectas que se cortan en un punto corresponden a un sistema:

**compatible determinado**

Tiene:

- una solución.

---

## 18. Sistema incompatible

Ejemplo:

**y = 2x + 1**

**y = 2x + 5**

Las rectas tienen:

- misma pendiente;
- distintas ordenadas al origen.

Son paralelas.

No se cortan.

El sistema no tiene:

- solución.

---

## 19. Cómo aparece algebraicamente la incompatibilidad

Igualamos:

**2x + 1 = 2x + 5**

Restamos 2x:

**1 = 5**

Contradicción.

---

## 20. Sistema dependiente

Ejemplo:

**x + y = 5**

**2x + 2y = 10**

La segunda ecuación es exactamente:

- el doble de la primera.

Representan la misma recta.

Hay:

- infinitas soluciones.

---

## 21. Cómo aparece algebraicamente

Si eliminamos términos obtenemos:

**0 = 0**

No aparece una pareja única porque las dos ecuaciones contienen:

- la misma información.

---

## 22. Clasificación geométrica

### Una intersección

Una solución.

### Rectas paralelas distintas

Ninguna solución.

### Rectas coincidentes

Infinitas soluciones.

---

## 23. Dos ecuaciones no garantizan dos datos independientes

Podemos tener dos ecuaciones escritas que en realidad expresan:

- la misma condición.

Entonces no alcanzan para determinar:

- dos incógnitas.

La independencia de la información importa.

---

## 24. Problema de mezcla

Tenemos dos soluciones con concentraciones:

- 10 %;
- 30 %.

Queremos preparar:

- 10 L;
- al 18 %.

Sea:

- x = litros de la primera;
- y = litros de la segunda.

Volumen total:

<div class="formula-panel">
  <span class="formula-panel__label">Volumen</span>
  <div class="formula-panel__formula">x + y = 10</div>
</div>

Cantidad de soluto relativa:

<div class="formula-panel">
  <span class="formula-panel__label">Soluto</span>
  <div class="formula-panel__formula">0,10x + 0,30y = 1,8</div>
</div>

---

## 25. Resolver la mezcla

De:

**x + y = 10**

obtenemos:

**x = 10 − y**

Sustituimos:

**0,10(10 − y) + 0,30y = 1,8**

**1 − 0,10y + 0,30y = 1,8**

**0,20y = 0,8**

**y = 4**

Entonces:

**x = 6**

---

## 26. Interpretar la mezcla

Necesitamos:

- 6 L de solución al 10 %;
- 4 L de solución al 30 %.

Chequeo de volumen:

**6 + 4 = 10 L**

---

## 27. Encuentro de dos móviles como sistema

Podemos pensar las ecuaciones:

<div class="formula-panel">
  <span class="formula-panel__label">A</span>
  <div class="formula-panel__formula">x = 4t</div>
</div>

<div class="formula-panel">
  <span class="formula-panel__label">B</span>
  <div class="formula-panel__formula">x = 30 − 2t</div>
</div>

como un sistema con incógnitas:

- x;
- t.

---

## 28. Resolver por igualación

Como ambas ecuaciones dan x:

**4t = 30 − 2t**

**6t = 30**

**t = 5 s**

Luego:

**x = 20 m**

La solución del sistema es:

<div class="formula-panel">
  <span class="formula-panel__label">Encuentro</span>
  <div class="formula-panel__formula">(t, x) = (5 s, 20 m)</div>
</div>

---

## 29. Equilibrio de fuerzas sencillo

Supongamos que en una dimensión:

<div class="formula-panel">
  <span class="formula-panel__label">Equilibrio</span>
  <div class="formula-panel__formula">T<sub>1</sub> + T<sub>2</sub> = 100 N</div>
</div>

y además:

<div class="formula-panel">
  <span class="formula-panel__label">Relación</span>
  <div class="formula-panel__formula">T<sub>1</sub> − T<sub>2</sub> = 20 N</div>
</div>

Sumando:

**2T<sub>1</sub> = 120 N**

**T<sub>1</sub> = 60 N**

Entonces:

**T<sub>2</sub> = 40 N**

---

## 30. Circuitos y sistemas

En circuitos con varias ramas, leyes como las de Kirchhoff pueden producir:

- varias ecuaciones lineales;
- varias corrientes desconocidas.

M-08 prepara la herramienta algebraica.

Los circuitos reales pueden requerir sistemas de:

- más de dos incógnitas.

---

## 31. Verificación en todas las ecuaciones

Una pareja propuesta debe comprobarse en:

- cada ecuación.

Si satisface una sola:

- no alcanza.

---

## 32. Error de sustitución

Si:

**y = 2x + 3**

y sustituimos en:

**x − y = 1**

debemos escribir:

**x − (2x + 3) = 1**

Los paréntesis son esenciales.

---

## 33. Error de eliminación

No podemos sumar ecuaciones término a término si antes alteramos sólo:

- una parte de una ecuación.

Toda transformación debe conservar:

- equivalencia.

---

## 34. Unidades en sistemas físicos

Si las incógnitas son:

- x en metros;
- t en segundos;

cada ecuación debe ser dimensionalmente coherente.

No debemos sumar directamente:

- metros;
- segundos.

---

## 35. Sistema y función

Dos ecuaciones como:

**y = 2x + 1**

**y = −x + 7**

pueden verse como:

- un sistema algebraico;
- dos funciones;
- dos rectas.

La intersección pertenece a:

[M-09 — Función lineal](/curso-fisicoquimica-fisica/matematicas/funcion-lineal).

---

## 36. Método gráfico

Podemos resolver aproximadamente un sistema dibujando ambas rectas.

El punto de cruce da:

- x;
- y.

Ventaja:

- interpretación visual.

Desventaja:

- precisión limitada si se dibuja a mano.

---

## 37. Método algebraico y gráfico se complementan

El álgebra puede dar una solución exacta.

El gráfico permite ver:

- si existe intersección;
- cuántas;
- si las rectas son casi paralelas;
- si la respuesta es razonable.

---

## 38. Errores frecuentes

### “Dos ecuaciones siempre producen una única solución”

No.

### “Una solución puede cumplir sólo una ecuación”

No.

### “Si obtengo 0 = 0, la solución es (0,0)”

No. Puede haber infinitas soluciones.

### “Si las rectas son paralelas, existe una solución muy lejana”

No si son exactamente paralelas y distintas.

### “Puedo multiplicar sólo un término de una ecuación para eliminar”

No.

### “El método gráfico siempre da valores exactos”

No necesariamente.

---

## 39. Ejercicios

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 1</span>
    <strong>Sustitución</strong>
  </div>
  <ol>
    <li>Resolvé y = x+2, x+y=8.</li>
    <li>Resolvé y = 3x, x+y=12.</li>
    <li>Verificá ambas soluciones en las dos ecuaciones.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 2</span>
    <strong>Eliminación</strong>
  </div>
  <ol>
    <li>Resolvé x+y=9, x−y=3.</li>
    <li>Resolvé 2x+y=11, x−y=1.</li>
    <li>Resolvé 2x+3y=12, x+y=5.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 3</span>
    <strong>Clasificación</strong>
  </div>
  <ol>
    <li>Clasificá y=2x+1, y=2x−4.</li>
    <li>Clasificá x+y=5, 2x+2y=10.</li>
    <li>Explicá geométricamente cada caso.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 4</span>
    <strong>Aplicaciones</strong>
  </div>
  <ol>
    <li>Dos móviles cumplen x=3t y x=24−t. Hallá encuentro.</li>
    <li>Prepará 20 L al 25 % mezclando soluciones al 10 % y 40 %.</li>
    <li>Dos fuerzas suman 150 N y su diferencia es 30 N. Hallá ambas.</li>
  </ol>
</div>

<div class="exercise-level">
  <div class="exercise-level__header">
    <span>Nivel 5</span>
    <strong>Profundización</strong>
  </div>
  <ol>
    <li>Analizá cuándo el sistema ax+by=e, cx+dy=f puede tener solución única según la geometría de las rectas.</li>
    <li>Construí un sistema dependiente que no sea simplemente el doble de una ecuación.</li>
    <li>Diseñá un problema físico sencillo cuya resolución requiera dos incógnitas y dos relaciones independientes.</li>
  </ol>
</div>

---

## 40. Ejemplo integrado

Dos móviles cumplen:

<div class="formula-panel">
  <span class="formula-panel__label">Móvil A</span>
  <div class="formula-panel__formula">x = 6t</div>
</div>

<div class="formula-panel">
  <span class="formula-panel__label">Móvil B</span>
  <div class="formula-panel__formula">x = 42 − t</div>
</div>

El sistema tiene incógnitas:

- t;
- x.

Igualamos:

**6t = 42 − t**

**7t = 42**

**t = 6 s**

Luego:

**x = 36 m**

<div class="worked-example-card">
  <span class="worked-example-card__label">Ejemplo integrado</span>
  <h3>Dos ecuaciones describen un mismo evento</h3>
  <div class="worked-example-card__steps">
    <p>La primera ecuación describe la posición de A.</p>
    <p>La segunda describe la posición de B.</p>
    <p>La solución común representa el encuentro.</p>
    <p><strong>(t, x) = (6 s, 36 m)</strong></p>
  </div>
</div>

---

## 41. Autoevaluación

<details class="lesson-quiz">
  <summary>1. ¿Qué es la solución de un sistema?</summary>
  <div class="lesson-quiz__answer">
    Es el conjunto de valores que satisface simultáneamente todas las ecuaciones del sistema.
  </div>
</details>

<details class="lesson-quiz">
  <summary>2. ¿Cuándo suele convenir sustitución?</summary>
  <div class="lesson-quiz__answer">
    Cuando una de las variables ya está despejada o puede despejarse con muy pocos pasos.
  </div>
</details>

<details class="lesson-quiz">
  <summary>3. ¿Qué representan dos rectas paralelas distintas?</summary>
  <div class="lesson-quiz__answer">
    Un sistema incompatible: no existe una pareja que satisfaga ambas ecuaciones.
  </div>
</details>

<details class="lesson-quiz">
  <summary>4. ¿Qué representan dos ecuaciones equivalentes?</summary>
  <div class="lesson-quiz__answer">
    La misma recta y, por lo tanto, un sistema dependiente con infinitas soluciones.
  </div>
</details>

---

## 42. Resumen

- Un sistema exige satisfacer varias ecuaciones simultáneamente.
- Con dos incógnitas, dos relaciones independientes pueden determinar una pareja.
- Sustitución reemplaza una variable por una expresión equivalente.
- Igualación hace iguales dos expresiones de la misma variable.
- Eliminación combina ecuaciones para cancelar una incógnita.
- Una solución debe verificarse en todas las ecuaciones.
- Dos rectas que se cortan producen una solución única.
- Rectas paralelas distintas producen ninguna solución.
- Rectas coincidentes producen infinitas soluciones.
- Dos ecuaciones escritas no garantizan dos datos independientes.
- Los sistemas aparecen en encuentros, mezclas, fuerzas y circuitos.

---

## 43. Siguiente tema recomendado

**M-09 — Función lineal**

Pasaremos de resolver valores aislados a estudiar relaciones completas entre variables.

Veremos:

- rectas;
- pendiente;
- ordenada al origen;
- proporcionalidad;
- interpretación física.
