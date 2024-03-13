// ---------- Texto con edad dinamico ----------

let miniText = document.getElementById("mini_text");

let birthday = new Date(1996, 6, 17);

let date = new Date();

let yearsOld = date.getFullYear() - birthday.getFullYear();

if (
  date.getMonth() < birthday.getMonth() ||
  (date.getMonth() === birthday.getMonth() &&
    date.getDate() < birthday.getDate())
) {
  yearsOld--;
}

miniText.textContent = `Me llamo Matías, tengo ${yearsOld} años, actualmente me encuentro trabajando como Desarrollador Frontend. Mi principal objetivo es ir aprendiendo para desarrollar soluciones sencillas y críticas que se adapten a las necesidades del cliente.`;

// ---------- Boton scroll up ----------

const scrollUpBtn = document.getElementById("scrollUpBtn");

// Funcion para aparecer el boton cuando si hizo cierto recorrido de la pagina
const toggleScrollBtn = () => {
  const bodyHeight = document.body.scrollHeight;
  const halfBodyHeight = bodyHeight / 4;
  if (
    document.body.scrollTop > halfBodyHeight ||
    document.documentElement.scrollTop > halfBodyHeight
  ) {
    scrollUpBtn.classList.add("show");
    scrollUpBtn.classList.remove("hide");
  } else {
    scrollUpBtn.classList.add("hide");
    scrollUpBtn.classList.remove("show");
  }
};

// Funcion para desplaar la pagina hacia arriba
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Evento scroll para mostrar u ocultar el botón
window.addEventListener("scroll", toggleScrollBtn);

// Evento cick para el boton para desplazar hacia arriba
scrollUpBtn.addEventListener("click", scrollToTop)
