const html = document.documentElement;
const themeBtn = document.getElementById("theme-switch");
const langBtn = document.getElementById("language-switch");

/* =====================
   DARK MODE
===================== */
const savedTheme = localStorage.getItem("theme") || "light";
html.setAttribute("data-theme", savedTheme);
themeBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";

themeBtn.addEventListener("click", () => {
    const newTheme = html.getAttribute("data-theme") === "light" ? "dark" : "light";
    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    themeBtn.textContent = newTheme === "dark" ? "☀️" : "🌙";
});

/* =====================
   TRADUÇÕES
===================== */
const translations = {
    pt: {
        page_title: "Portfólio | Joabe Teixeira",
        nav_about: "Sobre",
        nav_projects: "Projetos",
        nav_contact: "Contato",

        about_title: "Sobre mim",
        about_p1: "Olá, meu nome é Joabe Teixeira, sou brasileiro e tenho 28 anos.",
        about_p2: "Atuei como vendedor, vigilante patrimonial em hospital psiquiátrico e empregado de mesa em Lisboa, onde recebi uma carta de recomendação.",
        about_p3: "Iniciei meus estudos em administração, mas migrei para programação com o objetivo de impactar positivamente a vida das pessoas.",

        projects_title: "Projetos",
        project1_title: "Calculadora de Dias Úteis",
        project1_desc: "Aplicação criada para calcular dias úteis no ano usando HTML, CSS e JavaScript.",
        project2_title: "Horário Atual",
        project2_desc: "Projeto para praticar CSS e JavaScript exibindo o horário atual.",
        project3_title: "Página de Login",
        project3_desc: "Página de login responsiva criada para praticar layout e organização de arquivos.",

        btn_view: "Ver projeto",

        contact_title: "Contato",
        contact_email: "Email",

        footer_text: "© 2025 Joabe Teixeira. Todos os direitos reservados."
    },

    en: {
        page_title: "Portfolio | Joabe Teixeira",
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact",

        about_title: "About me",
        about_p1: "Hello, my name is Joabe Teixeira. I'm Brazilian and 28 years old.",
        about_p2: "I have worked as a salesperson, security guard in a psychiatric hospital, and waiter in Lisbon, where I received a letter of recommendation.",
        about_p3: "I started studying business administration, but transitioned to programming with the goal of positively impacting people's lives.",

        projects_title: "Projects",
        project1_title: "Business Days Calculator",
        project1_desc: "Application created to calculate business days in a year using HTML, CSS and JavaScript.",
        project2_title: "Current Time",
        project2_desc: "Project to practice CSS and JavaScript by displaying the current time.",
        project3_title: "Login Page",
        project3_desc: "Responsive login page created to practice layout and file organization.",

        btn_view: "View project",

        contact_title: "Contact",
        contact_email: "Email",

        footer_text: "© 2025 Joabe Teixeira. All rights reserved."
    }
};

/* =====================
   APLICAR IDIOMA
===================== */
let currentLang = localStorage.getItem("lang") || "pt";

function applyLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    langBtn.textContent = lang === "pt" ? "EN" : "PT";
    localStorage.setItem("lang", lang);
}

langBtn.addEventListener("click", () => {
    currentLang = currentLang === "pt" ? "en" : "pt";
    applyLanguage(currentLang);
});

applyLanguage(currentLang);

/* =====================
   MENU MOBILE
===================== */
const menuBtn = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

// abrir / fechar
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuBtn.textContent = navLinks.classList.contains("active") ? "✖" : "☰";
});

// fechar ao clicar em link
navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});
