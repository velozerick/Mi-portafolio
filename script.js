const idiomaActual = document.getElementById('idioma');
const listaIdiomas = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');

// Info
const elementosTraducibles = document.querySelectorAll('[data-translate]');

// Toggle lista idiomas
idiomaActual.addEventListener('click', () => {
    listaIdiomas.classList.toggle('toggle');
});

const opcionesArray = Array.from(idiomas);

opcionesArray.forEach((opcion) => {
    opcion.addEventListener('click', () => {
        const idioma = opcion.getElementsByTagName('span')[0].textContent.toLowerCase();
        establecerIdioma(idioma);
    });
});

function establecerIdioma(idioma) {
    idiomaActual.getElementsByTagName('img')[0].src = `banderas/${idioma}.svg`;
    elementosTraducibles.forEach(element => {
        const key = element.getAttribute('data-translate');
        const traduccion = translations[idioma][key];
        if (traduccion) {
            element.textContent = traduccion;
        }
    });
}

// Traducciones
const translations = {
    usa: {
        "Inicio": "Home",
        "Habilidades": "Skills",
        "Proyectos": "Projects",
        "Contáctame": "Contact Me",
        "title": "Erick Veloz - Portfolio",
        "Hola, soy Erick Veloz": "Hello, I am Erick Veloz",
        "Soy Ingeniero en Sistemas Computacionales con especialización en desarrollo web y aplicaciones.": "I am a Systems Engineer specialized in web development and applications.",
        "Cuento con experiencia en programación orientada a objetos, bases de datos y diseño de soluciones eficientes tanto en frontend como en backend.": "I have experience in object-oriented programming, databases, and designing efficient frontend and backend solutions.",
        "Otras habilidades": "Other Skills",
        "Soy una persona meticulosa con un enfoque metódico en la resolución de problemas. Mi capacidad para analizar y razonar me permite considerar diversos escenarios al abordar desafíos. Mi profundo interés por la tecnología, la lectura y la ciencia impulsa mi motivación y me mantiene actualizado sobre las últimas tendencias en desarrollo web y programación.": 
        "I am a meticulous person with a methodical approach to problem-solving. My ability to analyze and reason allows me to consider various scenarios when tackling challenges. My deep interest in technology, reading, and science drives my motivation and keeps me updated on the latest trends in web development and programming.",
        
        "Me destaco en el uso de tecnologías como HTML5, CSS3, JavaScript, y PHP, y he liderado proyectos utilizando Git para colaborar de manera eficiente en equipos de desarrollo. Mi curiosidad y autodisciplina me han permitido obtener certificaciones en áreas clave como programación orientada a objetos y CS50AI: CS50's Introduction to Artificial Intelligence with Python.": 
        "I excel in the use of technologies such as HTML5, CSS3, JavaScript, and PHP, and have led projects using Git to collaborate efficiently in development teams. My curiosity and self-discipline have allowed me to obtain certifications in key areas such as object-oriented programming and CS50AI: CS50's Introduction to Artificial Intelligence with Python.",
        
        "Proyectos Recientes": "Recent Projects",
        "Página web enfocada a la astrofotografía.": "Website focused on astrophotography.",
        "Plataforma para reservas y diversión en eventos.": "Platform for event bookings and fun.",
        "Sitio web de cafetería con menús, promociones y pedidos en línea.": "Café website with menus, promotions, and online orders.",
        "Aplicación web personalizada para monitorear el rendimiento de software.": "Customized web application for monitoring software performance.",
        "Aplicación para el control remoto de dispositivos de hogar inteligente, desarrollada para manejar luces y puertas.": "Application for remote control of smart home devices, developed to manage lights and doors.",
        "Desarrollo de un robot humanoide programado en Python, con enfoque en movimiento autónomo y reconocimiento de comandos.": "Development of a humanoid robot programmed in Python, focused on autonomous movement and command recognition.",
        "Contáctame": "Contact Me",
        "Estoy disponible para colaboraciones, proyectos o cualquier consulta. ¡No dudes en contactarme!": "I am available for collaborations, projects, or any inquiries. Feel free to contact me!",
        "Tu nombre": "Your name",
        "Tu email": "Your email",
        "Tu mensaje": "Your message",
        "Enviar mensaje": "Send Message"
    },
    latino: {
        "Inicio": "Inicio",
        "Habilidades": "Habilidades",
        "Proyectos": "Proyectos",
        "Contáctame": "Contáctame",
        "title": "Erick Veloz - Portafolio",
        "Hola, soy Erick Veloz": "Hola, soy Erick Veloz",
        "Soy Ingeniero en Sistemas Computacionales con especialización en desarrollo web y aplicaciones.": "Soy Ingeniero en Sistemas Computacionales con especialización en desarrollo web y aplicaciones.",
        "Cuento con experiencia en programación orientada a objetos, bases de datos y diseño de soluciones eficientes tanto en frontend como en backend.": "Cuento con experiencia en programación orientada a objetos, bases de datos y diseño de soluciones eficientes tanto en frontend como en backend.",
        "Otras habilidades": "Otras habilidades",
        "Soy una persona meticulosa con un enfoque metódico en la resolución de problemas. Mi capacidad para analizar y razonar me permite considerar diversos escenarios al abordar desafíos. Mi profundo interés por la tecnología, la lectura y la ciencia impulsa mi motivación y me mantiene actualizado sobre las últimas tendencias en desarrollo web y programación.": 
        "Soy una persona meticulosa con un enfoque metódico en la resolución de problemas. Mi capacidad para analizar y razonar me permite considerar diversos escenarios al abordar desafíos. Mi profundo interés por la tecnología, la lectura y la ciencia impulsa mi motivación y me mantiene actualizado sobre las últimas tendencias en desarrollo web y programación.",
        
        "Me destaco en el uso de tecnologías como HTML5, CSS3, JavaScript, y PHP, y he liderado proyectos utilizando Git para colaborar de manera eficiente en equipos de desarrollo. Mi curiosidad y autodisciplina me han permitido obtener certificaciones en áreas clave como programación orientada a objetos y CS50AI: CS50's Introduction to Artificial Intelligence with Python.": 
        "Me destaco en el uso de tecnologías como HTML5, CSS3, JavaScript, y PHP, y he liderado proyectos utilizando Git para colaborar de manera eficiente en equipos de desarrollo. Mi curiosidad y autodisciplina me han permitido obtener certificaciones en áreas clave como programación orientada a objetos y CS50AI: CS50's Introduction to Artificial Intelligence with Python.",
        
        "Proyectos Recientes": "Proyectos Recientes",
        "Página web enfocada a la astrofotografía.": "Página web enfocada a la astrofotografía.",
        "Plataforma para reservas y diversión en eventos.": "Plataforma para reservas y diversión en eventos.",
        "Sitio web de cafetería con menús, promociones y pedidos en línea.": "Sitio web de cafetería con menús, promociones y pedidos en línea.",
        "Aplicación web personalizada para monitorear el rendimiento de software.": "Aplicación web personalizada para monitorear el rendimiento de software.",
        "Aplicación para el control remoto de dispositivos de hogar inteligente, desarrollada para manejar luces y puertas.": "Aplicación para el control remoto de dispositivos de hogar inteligente, desarrollada para manejar luces y puertas.",
        "Desarrollo de un robot humanoide programado en Python, con enfoque en movimiento autónomo y reconocimiento de comandos.": "Desarrollo de un robot humanoide programado en Python, con enfoque en movimiento autónomo y reconocimiento de comandos.",
        "Contáctame": "Contáctame",
        "Estoy disponible para colaboraciones, proyectos o cualquier consulta. ¡No dudes en contactarme!": "Estoy disponible para colaboraciones, proyectos o cualquier consulta. ¡No dudes en contactarme!",
        "Tu nombre": "Tu nombre",
        "Tu email": "Tu email",
        "Tu mensaje": "Tu mensaje",
        "Enviar mensaje": "Enviar mensaje"
    }
};

// Configuración inicial basada en el idioma del navegador
document.addEventListener('DOMContentLoaded', () => {
    const idiomaNavegador = navigator.language === 'en-US' ? 'usa' : 'latino';
    establecerIdioma(idiomaNavegador);
});



























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
