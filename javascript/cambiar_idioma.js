const translations = {
    btn_esp: {
        title: "Martin Eduardo Osuna Gutierrez",
        navHome: "Inicio",
        navAbout: "Acerca de mí",
        Skills: "Desarrollador Web Front-End",
        navProjects: "Proyectos",
        navContact: "Contacto",
        navInsignias: "Insignias",
        About: "Acerca de mi",
        txtAbout: "Soy un estudiante de la Univerdidad Politecnica de Sinaloa y actualmente estoy en el segundo grado de mi carrera y mi proyeccion es destacarme en el area de desarrollo web front-end y especializarme en el lenguaje Java",
        Insignias: "Insignias obtenidas",
        txtIntRedes: "Curso introduccion a las redes",
        txtConmu: "Curso de conceptos básicos de conmutación, enrutamiento e inalámbricos",
        txtTecRedes: "Curso trayectoria profesional de técnico de redes",
        Contacto: "Contacto",

    },
    btn_eng: {
    title: "Martin Eduardo Osuna Gutierrez",
    navAbout: "About Me",
    Skills: "Front-End Web Developer",
    navInsignias: "Badges",
    navContact: "Contact",
    About: "About Me",
    txtAbout: "I am a student at the Polytechnic University of Sinaloa, currently in my second year. My goal is to excel in front-end web development and specialize in Java programming.",
    Insignias: "Earned Badges",
    txtIntRedes: "Introduction to Networks course",
    txtConmu: "Basic Switching, Routing, and Wireless Concepts course",
    txtTecRedes: "Network Technician Career Path course",
    Contacto: "Contact"
    },
    btn_fr: {
        title: "Martin Eduardo Osuna Gutierrez",
        logo: "Mon Portefeuille",
        menu: "Menu",
        navHome: "Accueil",
        navAbout: "À propos de moi",
        Skills: "Technologies",
        navProjects: "Projets",
        navContact: "Contact",
        name: "Carlos Eduardo Zamudio Coronado",
        subtitle: "Site Web de Portfolio Personnel",
        profileTitle: "Profil Professionnel",
        profileText: "Concernant mon profil professionnel, je suis actuellement étudiant à l'Université Polytechnique de Sinaloa...",
        footerSocial: "Réseaux Sociaux Professionnels",
        footerEmail: "Courriel"
    }
};

// --- Función principal ---
const languageSelect = document.getElementById("btn_idiomas");
const savedLang = localStorage.getItem("btn_idiomas") || "btn_esp";
languageSelect.value = savedLang;
setLanguage(savedLang);

languageSelect.addEventListener("click", (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    localStorage.setItem("btn_idiomas", lang);
});

function setLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    document.title = translations[lang].title;
}