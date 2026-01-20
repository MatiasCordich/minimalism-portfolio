
// ---------- Dark Mode ----------
const toggleDarkMode = () => {
  const root = document.documentElement;
  root.classList.toggle("dark-mode");
  
  // Guardamos el modo en el LocalStorage
  const isDarkMode = root.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode ? "true" : "false");
  
  // Cambiar el ícono según el modo
  updateDarkModeIcon(isDarkMode);
};

// Actualizar el ícono del dark mode
const updateDarkModeIcon = (isDarkMode) => {

  // Obtenemos el ícono y actualizamos su clase
  const icon = document.getElementById("darkModeIcon");
  if (icon) {
    icon.className = isDarkMode ? "iconoir-sun-light" : "iconoir-half-moon";
  }
};

// Cargar la preferencia de dark mode al iniciar la página
document.addEventListener("DOMContentLoaded", function () {

  const isDarkMode = localStorage.getItem("darkMode") === "true";

  if (isDarkMode) {
    document.documentElement.classList.add("dark-mode");
  }
  
  // Actualizar el ícono según el modo cargado
  updateDarkModeIcon(isDarkMode);
  
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

miniText.textContent = `Me llamo Matías, tengo ${yearsOld} años, actualmente me encuentro trabajando como Desarrollador PeopleSoft para Ataway, Argentina. Mi principal objetivo es ir profundizando conocimientos en el área técnica orientado en el soporte de aplicaciones empresariales.`;

// ---------- Año del Footer ----------

const footerYear = document.getElementById("footerYear");
footerYear.textContent = date.getFullYear();

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
  const resumeLink = document.getElementById("resumeLink");

  if (language === "es") {
    aboutText = `Me llamo Matías, tengo ${yearsOld} años, actualmente me encuentro trabajando como Desarrollador PeopleSoft para Ataway, Argentina. Mi principal objetivo es ir profundizando conocimientos en el área técnica orientado en el soporte de aplicaciones empresariales.`;
    resumeLink.href = "./asset/CV_Matias-Sio-Cordich_es.pdf";
  } else if (language === "en") {
    aboutText = `My name is Matías, I am ${yearsOld} years old, and I currently work as a PeopleSoft Developer at Ataway, Argentina. My main goal is to deepen my technical knowledge in enterprise application support.`;
    resumeLink.href = "./asset/CV_Matias-Sio-Cordich_en.pdf";
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
