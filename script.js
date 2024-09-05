const translations = {
    en: {
        "Hola, soy Erick Veloz": "Hello, I am Erick Veloz",
        "Inicio": "Home",
        "Habilidades": "Skills",
        "Proyectos": "Projects",
        "Contáctame": "Contact Me",
        "Formación Académica": "Academic Formation",
        "Habilidades Técnicas": "Technical Skills",
        "Teléfono": "Phone",
        "Correo": "Email",
        "Soy Ingeniero en Sistemas Computacionales con especialización en desarrollo web y aplicaciones.": "I am a Systems Engineer specialized in web development and applications.",
        "Cuento con experiencia en programación orientada a objetos, bases de datos y diseño de soluciones eficientes tanto en frontend como en backend.": "I have experience in object-oriented programming, databases, and designing efficient frontend and backend solutions.",
        "Otras habilidades": "Other Skills",
        "Soy una persona meticulosa con un enfoque metódico en la resolución de problemas. Mi capacidad para analizar y razonar me permite considerar diversos escenarios al abordar desafíos. Mi profundo interés por la tecnología, la lectura y la ciencia impulsa mi motivación y me mantiene actualizado sobre las últimas tendencias en desarrollo web y programación.": "I am a meticulous person with a methodical approach to problem-solving. My ability to analyze and reason allows me to consider various scenarios when tackling challenges. My deep interest in technology, reading, and science drives my motivation and keeps me updated on the latest trends in web development and programming.",
        "Me destaco en el uso de tecnologías como HTML5, CSS3, JavaScript, y PHP, y he liderado proyectos utilizando Git para colaborar de manera eficiente en equipos de desarrollo. Mi curiosidad y autodisciplina me han permitido obtener certificaciones en áreas clave como programación orientada a objetos y CS50AI: CS50's Introduction to Artificial Intelligence with Python.": "I excel in the use of technologies such as HTML5, CSS3, JavaScript, and PHP, and have led projects using Git to collaborate efficiently in development teams. My curiosity and self-discipline have allowed me to obtain certifications in key areas such as object-oriented programming and CS50AI: CS50's Introduction to Artificial Intelligence with Python.",
        "Proyectos Recientes": "Recent Projects",
        "Página web enfocada a la astrofotografía.": "A website focused on astrophotography.",
        "Plataforma para reservas y diversión en eventos.": "Platform for event bookings and fun.",
        "Sitio web de cafetería con menús, promociones y pedidos en línea.": "Café website with menus, promotions, and online orders.",
        "Aplicación web personalizada para monitorear el rendimiento de software.": "Customized web application for monitoring software performance.",
        "Aplicación para el control remoto de dispositivos de hogar inteligente, desarrollada para manejar luces y puertas.": "Application for remote control of smart home devices, developed to manage lights and doors.",
        "Desarrollo de un robot humanoide programado en Python, con enfoque en movimiento autónomo y reconocimiento de comandos.": "Development of a humanoid robot programmed in Python, focused on autonomous movement and command recognition.",
        "Estoy disponible para colaboraciones, proyectos o cualquier consulta. ¡No dudes en contactarme!": "I am available for collaborations, projects, or any inquiries. Feel free to contact me!",
        "Enviar mensaje": "Send Message",
        "Tu nombre": "Your name",
        "Tu email": "Your email",
        "Tu mensaje": "Your message"
    },
    es: {
        "Hello, I am Erick Veloz": "Hola, soy Erick Veloz",
        "Home": "Inicio",
        "Skills": "Habilidades",
        "Projects": "Proyectos",
        "Contact Me": "Contáctame",
        "Academic Formation": "Formación Académica",
        "Technical Skills": "Habilidades Técnicas",
        "Phone": "Teléfono",
        "Email": "Correo",
        "I am a Systems Engineer specialized in web development and applications.": "Soy Ingeniero en Sistemas Computacionales con especialización en desarrollo web y aplicaciones.",
        "I have experience in object-oriented programming, databases, and designing efficient frontend and backend solutions.": "Cuento con experiencia en programación orientada a objetos, bases de datos y diseño de soluciones eficientes tanto en frontend como en backend.",
        "Other Skills": "Otras habilidades",
        "I am a meticulous person with a methodical approach to problem-solving. My ability to analyze and reason allows me to consider various scenarios when tackling challenges. My deep interest in technology, reading, and science drives my motivation and keeps me updated on the latest trends in web development and programming.": "Soy una persona meticulosa con un enfoque metódico en la resolución de problemas. Mi capacidad para analizar y razonar me permite considerar diversos escenarios al abordar desafíos. Mi profundo interés por la tecnología, la lectura y la ciencia impulsa mi motivación y me mantiene actualizado sobre las últimas tendencias en desarrollo web y programación.",
        "I excel in the use of technologies such as HTML5, CSS3, JavaScript, and PHP, and have led projects using Git to collaborate efficiently in development teams. My curiosity and self-discipline have allowed me to obtain certifications in key areas such as object-oriented programming and CS50AI: CS50's Introduction to Artificial Intelligence with Python.": "Me destaco en el uso de tecnologías como HTML5, CSS3, JavaScript, y PHP, y he liderado proyectos utilizando Git para colaborar de manera eficiente en equipos de desarrollo. Mi curiosidad y autodisciplina me han permitido obtener certificaciones en áreas clave como programación orientada a objetos y CS50AI: CS50's Introduction to Artificial Intelligence with Python.",
        "Recent Projects": "Proyectos Recientes",
        "A website focused on astrophotography.": "Página web enfocada a la astrofotografía.",
        "Platform for event bookings and fun.": "Plataforma para reservas y diversión en eventos.",
        "Café website with menus, promotions, and online orders.": "Sitio web de cafetería con menús, promociones y pedidos en línea.",
        "Customized web application for monitoring software performance.": "Aplicación web personalizada para monitorear el rendimiento de software.",
        "Application for remote control of smart home devices, developed to manage lights and doors.": "Aplicación para el control remoto de dispositivos de hogar inteligente, desarrollada para manejar luces y puertas.",
        "Development of a humanoid robot programmed in Python, focused on autonomous movement and command recognition.": "Desarrollo de un robot humanoide programado en Python, con enfoque en movimiento autónomo y reconocimiento de comandos.",
        "I am available for collaborations, projects, or any inquiries. Feel free to contact me!": "Estoy disponible para colaboraciones, proyectos o cualquier consulta. ¡No dudes en contactarme!",
        "Send Message": "Enviar mensaje",
        "Your name": "Tu nombre",
        "Your email": "Tu email",
        "Your message": "Tu mensaje"
    }
};

const languageToggle = document.getElementById('language-toggle');
let currentLanguage = 'es'; // Empieza en español

languageToggle.addEventListener('click', () => {
    const newLanguage = currentLanguage === 'es' ? 'en' : 'es';
    document.querySelectorAll('[data-translate]').forEach((element) => {
        element.textContent = translations[newLanguage][element.textContent.trim()];
    });
    currentLanguage = newLanguage;
    languageToggle.textContent = currentLanguage === 'es' ? 'English' : 'Español';
});






const text = "¡Hola, Soy Erick Veloz!";
const typingElement = document.getElementById('typing-text');
let index = 0;

function typeText() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 150);
    } else {
        setTimeout(() => {
            typingElement.innerHTML = '';
            index = 0;
            typeText();
        }, 5000);
    }
}

window.onload = typeText;



// Animación de fade-in
const faders = document.querySelectorAll('.fade-in-section');
const appearOptions = {
  threshold: 0.3, // Cambia cuando el 30% del elemento sea visible
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('fade-in-visible');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Funcionalidad del botón de menú
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navbar = document.getElementById('navbar');

    navToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});
