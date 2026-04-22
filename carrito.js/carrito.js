let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  guardarCarrito();
  actualizarContador();
  mostrarCarrito();
}

function eliminarProducto(index) {
  carrito.splice(index, 1);
  guardarCarrito();
  actualizarContador();
  mostrarCarrito();
}

function mostrarCarrito() {
  const lista = document.getElementById("listaCarrito");
  const totalTexto = document.getElementById("total");

  if (!lista || !totalTexto) return; // evita errores en otras páginas

  lista.innerHTML = "";
  let total = 0;

  carrito.forEach((producto, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${producto.nombre} - ₡${producto.precio}
      <button onclick="eliminarProducto(${index})">❌</button>`;
    lista.appendChild(li);
    total += producto.precio;
  });

  totalTexto.textContent = "Total: ₡" + total;
}

function actualizarContador() {
  const contador = document.getElementById("contadorCarrito");
  if (contador) contador.textContent = carrito.length;
}

function toggleCarrito() {
  const panel = document.getElementById("carritoPanel");
  if (panel) {
    panel.style.display = panel.style.display === "none" ? "block" : "none";
  }
}

window.onload = function () {
  actualizarContador();
  mostrarCarrito();
};