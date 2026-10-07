import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'


i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    lng: "en",
    //fallbackLng: "en",
    //supportedLngs: ["es", "en"],
    resources: {
        en: {
            translation: {
                navbarItem1: 'About me',
                navbarItem2: 'Skills',
                navbarItem3: 'Projects',
                navbarItem4: 'Contact',
                resume: '/resume-english.pdf',
                cv: 'Download resume',
                profesion: 'Web Developer',
                aboutMe: 'I’m a web developer in training, specialized in HTML, CSS, JavaScript, and React. I enjoy both the creative process and the technical challenge, and I’m motivated by learning something new every day. In every project, I aim to combine the logic of code with the sensitivity of design, always prioritizing usability and efficiency.',
                title1: 'Skills',
                title2: 'Libraries',
                title3: 'Projects',
                title4: 'Contact',
                title5: 'My socials',
                title6: 'Contact me',
                project1_title: 'Blopy - Informative page - HTML + CSS',
                project1_description: 'Blopy is an informational website built with HTML5, CSS3, Sass, and Bootstrap, made up of five pages. The project presents information about restaurants, products, news, and other resources related to veganism. It features a 100% responsive design implemented with Flexbox and CSS Grid, along with a semantic structure and good SEO practices to improve accessibility and search engine ranking.',
                project2_description: 'I developed a functional e-commerce site with JavaScript, including user authentication, product filtering by category, and a dynamic shopping cart. Throughout the project, I applied core concepts such as DOM manipulation, event handling, the use of localStorage and sessionStorage, and data management through arrays and objects.',
                project3_description: 'Siempre Argenta is an e-commerce Single Page Application (SPA) built with React, focused on selling Argentine products. The application includes navigation with React Router, product listings with dynamic filters, a shopping cart, and a detail view using URL parameters. I used useState, useEffect, useContext, and Firebase to manage state, product data, and purchase orders. The project was developed with a focus on application logic and is optimized for the desktop version.',
                button1: 'See project',
                placeholder1: 'Full name',
                placeholder2: 'Email',
                placeholder3: 'Leave your message here',
                message1:'Must complete with your full name',
                message2:'The name must contain at least 3 characters',
                message3:'You must complete with your email address',
                message4:'Fill the blank space with a valid email',
                message5: 'You must leave a message',
                button2:'Send',
                swalFireTitle: '¡Thank you for your message!',
                swalFireText: 'I’ll contact you soon.',
            }
        },
        es: {
            translation: {
                navbarItem1: 'Sobre mi',
                navbarItem2: 'Habilidades',
                navbarItem3: 'Proyectos',
                navbarItem4: 'Contacto',
                resume: 'resume-espanol.pdf',
                cv: 'Descargar CV',
                profesion: 'Desarroladora Web',
                aboutMe: 'Soy desarrolladora web en formación, especializada en HTML, CSS, JavaScript y React. Disfruto tanto del proceso creativo como del desafío técnico, y me motiva aprender algo nuevo cada día. En cada proyecto busco combinar la lógica del código con la sensibilidad del diseño, priorizando siempre la usabilidad y la eficiencia.',
                title1: 'Habilidades',
                title2: 'Librerias',
                title3: 'Proyectos',
                title4: 'Contacto',
                title5: 'Mis redes',
                title6: 'Contactame',
                project1_title: 'Blopy - Página informativa - HTML + CSS',
                project1_description: 'Blopy es un sitio web informativo desarrollado con HTML5, CSS3, Sass y Bootstrap, compuesto por cinco páginas. El proyecto presenta información sobre restaurantes, productos, noticias y otros recursos relacionados con el veganismo. Cuenta con un diseño 100% responsive implementado con Flexbox y CSS Grid, además de una estructura semántica y buenas prácticas de SEO para mejorar la accesibilidad y el posicionamiento en buscadores.',
                project2_description: 'Desarrollé un e-commerce funcional con JavaScript, que incluye autenticación de usuarios, filtrado de productos por categorías y un carrito de compras dinámico. Durante el proyecto apliqué conceptos fundamentales como manipulación del DOM, manejo de eventos, uso de localStorage y sessionStorage, y gestión de datos mediante arrays y objetos.',
                project3_description: 'Siempre argenta es una Single Page Application (SPA) de e-commerce con React, enfocada en la venta de productos argentinos. La aplicación incluye navegación con React Router, listado de productos con filtros dinámicos, carrito de compras y vista de detalle mediante parámetros en la URL. Utilicé useState, useEffect, useContext y Firebase para gestionar el estado, los datos de productos y las órdenes de compra. El proyecto fue desarrollado con un enfoque en la lógica de la aplicación y está optimizado para versión desktop.',
                button1: 'Ver proyecto',
                placeholder1: 'Nombre completo',
                placeholder2: 'Email',
                placeholder3: 'Deje su mensaje aqui',
                message1:'Debe completar con su nombre',
                message2:'El nombre debe contener al menos 3 caracteres',
                message3:'Debe completar con su dirección de correo electrónico',
                message4:'Complete con un correo electrónico válido',
                message5: 'Debe completar con un mensaje',
                button2:'Enviar',
                swalFireTitle: '¡Gracias por tu mensaje!',
                swalFireText: 'Pronto me pondré en contacto con vos.',
            }
        }
    }
})