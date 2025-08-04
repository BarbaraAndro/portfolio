import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'


i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    lng: "es",
    resources: {
        en: {
            translation: {
                navbarItem1: 'About me',
                navbarItem2: 'Skills',
                navbarItem3: 'Projects',
                navbarItem4: 'Contact',
                cv:'Download CV',
                profesion: 'Web Developer',
                aboutMe:'I’m a web developer in training, specialized in HTML, CSS, JavaScript, and React. I enjoy both the creative process and the technical challenge, and I’m motivated by learning something new every day. In every project, I aim to combine the logic of code with the sensitivity of design, always prioritizing usability and efficiency.',
                title1:'Skills',
                title2:'Libraries',
                title3:'Projects',
                title4:'Contact',
            }
        },
        es: {
            translation: {
                navbarItem1: 'Sobre mi',
                navbarItem2: 'Habilidades',
                navbarItem3: 'Proyectos',
                navbarItem4: 'Contacto',
                cv:'Descargar CV',
                profesion: 'Desarroladora Web',
                aboutMe:'Soy desarrolladora web en formación, especializada en HTML, CSS, JavaScript y React. Disfruto tanto del proceso creativo como del desafío técnico, y me motiva aprender algo nuevo cada día. En cada proyecto busco combinar la lógica del código con la sensibilidad del diseño, priorizando siempre la usabilidad y la eficiencia.',
                title1:'Habilidades',
                title2:'Librerias',
                title3:'Proyectos',
                title4:'Contacto',
            }
        }
    }
})