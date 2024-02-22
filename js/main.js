let miniText = document.getElementById("mini_text");

let birthday = new Date(1996, 6, 17)

let date = new Date()

let yearsOld = date.getFullYear() - birthday.getFullYear()

if (date.getMonth() < birthday.getMonth() || (date.getMonth() === birthday.getMonth() && date.getDate() < birthday.getDate())) {
    yearsOld--;
}

miniText.textContent = `Me llamo Matias, tengo ${yearsOld} años, actualmente me encuentro trabajando como Desarrollador Frontend. Mi principal objetivo es ir aprendiendo para desarollar soluciones sencillas y críticas que se adapten a las necesidades del cliente.`