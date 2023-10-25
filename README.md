![image](https://github.com/TheBridge-FullStackDeveloper/javascript-exercises-p5-move-a-square/assets/33903092/325ed165-e8b8-4742-b79a-1e823645a6ac)

## Instrucciones para el ejercicio en p5.js: Mover un Cuadro

**Objetivo:** Diseñar un cuadro y utilizar las teclas de flecha para moverlo por el lienzo.

https://github.com/TheBridge-FullStackDeveloper/javascript-exercises-p5-move-a-square/assets/33903092/f4ca0403-85d1-473a-ad1a-200a6b5d0b28

### Paso 1: Configuración del lienzo

- Crea un lienzo de 400x400 píxeles utilizando `createCanvas(400, 400);`.

### Paso 2: Diseño del cuadro

- En la función `setup()`, dibuja un cuadro en el lienzo. El cuadro debe tener un tamaño de 50x50 píxeles y relleno rojo. Utiliza la función `rect(x, y, width, height)` para dibujar el cuadro. Asegúrate de elegir una posición inicial (x, y) y un tamaño adecuado.

### Paso 3: Movimiento del cuadro

- En la función `keyPressed()`, utiliza las teclas de flecha para mover el cuadro. Las teclas de flecha izquierda, derecha, arriba y abajo deben mover el cuadro en la dirección correspondiente. Puedes utilizar las siguientes condiciones en `keyPressed()`:
  - Si la tecla izquierda está presionada, disminuye la posición `x` del cuadro.
  - Si la tecla derecha está presionada, aumenta la posición `x` del cuadro.
  - Si la tecla arriba está presionada, disminuye la posición `y` del cuadro.
  - Si la tecla abajo está presionada, aumenta la posición `y` del cuadro.

### Paso 4: Prueba el ejercicio

- Ejecuta el programa y observa cómo el cuadro se mueve en respuesta a las teclas de flecha.

### Paso 5: Personalización

- Experimenta con diferentes tamaños y colores para el cuadro.
- Ajusta la velocidad de movimiento cambiando la cantidad que aumentas o disminuyes `x` y `y` cuando se presionan las teclas.

¡Listo! Ahora has creado un ejercicio en el que puedes diseñar un cuadro y moverlo por el lienzo utilizando las teclas de flecha. Puedes personalizar el ejercicio y experimentar con diferentes valores para comprender mejor p5.js y la programación creativa.

## Bonus 🏆

- Intenta crear objetos con los que el cuadrado pueda chocar
- Habilita la capacidad del cuadrado para saltar al presionar la tecla de espacio y asegúrate de que vuelva a descender como si estuviera bajo la influencia de la gravedad
