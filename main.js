// Obtener contexto de Canvas
function getContext() {
    var canvas = document.getElementById('canvas');
    if (!canvas) return null;
    return canvas.getContext('2d');
}

// Limpiar el canvas antes de dibujar cada ejemplo
function clearCanvas(ctx) {
    var canvas = ctx.canvas;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// 1. Rectángulo (Ejemplo inicial de la práctica)
function drawRect() {
    var ctx = getContext();
    if (!ctx) return;
    clearCanvas(ctx);

    ctx.fillStyle = "green";
    ctx.fillRect(10, 10, 100, 100);
}

// 2. Triángulo
function drawTriangle() {
    var ctx = getContext();
    if (!ctx) return;
    clearCanvas(ctx);

    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(150, 50);
    ctx.lineTo(250, 200);
    ctx.lineTo(50, 200);
    ctx.closePath();
    ctx.fill();
}

// 3. Happy Face (Cara feliz)
function drawHappyFace() {
    var ctx = getContext();
    if (!ctx) return;
    clearCanvas(ctx);

    ctx.beginPath();
    ctx.arc(150, 150, 100, 0, Math.PI * 2, true); // Círculo principal
    ctx.fillStyle = "#ffeb3b";
    ctx.fill();
    ctx.stroke();

    // Boca
    ctx.beginPath();
    ctx.arc(150, 150, 60, 0, Math.PI, false); // Boca (boca abajo o sonrisa)
    ctx.stroke();

    // Ojos
    ctx.beginPath();
    ctx.arc(120, 120, 10, 0, Math.PI * 2, true);  // Ojo izquierdo
    ctx.arc(180, 120, 10, 0, Math.PI * 2, true);  // Ojo derecho
    ctx.fillStyle = "#333";
    ctx.fill();
}

// 4. Líneas
function drawLines() {
    var ctx = getContext();
    if (!ctx) return;
    clearCanvas(ctx);

    ctx.strokeStyle = "red";
    ctx.lineWidth = 4;

    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(250, 50);
    ctx.lineTo(150, 250);
    ctx.closePath();
    ctx.stroke();
}

// 5. Arcos
function drawArcs() {
    var ctx = getContext();
    if (!ctx) return;
    clearCanvas(ctx);

    ctx.strokeStyle = "purple";
    ctx.lineWidth = 3;

    for (var i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.arc(75 + i * 50, 150, 20, 0, Math.PI + (Math.PI * i) / 2, false);
        ctx.stroke();
    }
}

// 6. Curvas Bézier y cuadráticas
function drawCurves() {
    var ctx = getContext();
    if (!ctx) return;
    clearCanvas(ctx);

    // Curva cuadrática
    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.moveTo(50, 200);
    ctx.quadraticCurveTo(150, 50, 250, 200);
    ctx.stroke();

    // Curva Bézier cúbica
    ctx.strokeStyle = "teal";
    ctx.beginPath();
    ctx.moveTo(50, 100);
    ctx.bezierCurveTo(90, 20, 210, 20, 250, 100);
    ctx.stroke();
}

// 7. Combinaciones de líneas y figuras
function drawCombination() {
    var ctx = getContext();
    if (!ctx) return;
    clearCanvas(ctx);

    // Fondo rectángulo con bordes redondeados o combinados
    ctx.fillStyle = "rgba(0, 150, 255, 0.5)";
    ctx.fillRect(50, 50, 200, 200);

    // Círculo central
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(150, 150, 50, 0, Math.PI * 2, true);
    ctx.fill();

    // Cruz encima
    ctx.strokeStyle = "white";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(150, 100);
    ctx.lineTo(150, 200);
    ctx.moveTo(100, 150);
    ctx.lineTo(200, 150);
    ctx.stroke();
}