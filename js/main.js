// ---------- Persistir un valor de traduccion ----------
document.addEventListener("DOMContentLoaded", function () {
  let lang = localStorage.getItem("language");

  if (lang) {
    translateTo(lang); // Traducir según el idioma almacenado
  } else {
    translateTo("es"); // Configurar la traducción en español por defecto
  }
});

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
scrollUpBtn.addEventListener("click", scrollToTop);

// Funcion para traducir
const translateTo = (language) => {
  let elements = document.getElementsByClassName("translate");
  let aboutText;

  if (language === "es") {
    aboutText = `Me llamo Matías, tengo ${yearsOld} años, actualmente me encuentro trabajando como Desarrollador Frontend. Mi principal objetivo es ir aprendiendo para desarrollar soluciones sencillas y críticas que se adapten a las necesidades del cliente.`;
  } else if (language === "en") {
    aboutText = `My name is Matías, I am ${yearsOld} years old, and I am currently working as a Frontend Developer. My main goal is to keep learning to develop simple and critical solutions that adapt to the client's needs.`;
  }

  // Actualizar el contenido del párrafo
  miniText.textContent = aboutText;

  // Actualizar el resto de los elementos
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    let text = element.getAttribute("data-" + language);
    if (text) {
      element.textContent = text;
    }
  }

  // Guardar el idioma en el almacenamiento local
  localStorage.setItem("language", language);
};
