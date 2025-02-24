// Alternância de idioma
document.getElementById('language-switch').addEventListener('click', () => {
    const langButton = document.getElementById('language-switch');
    const currentLang = langButton.innerText;

    if (currentLang === 'EN') {
        document.documentElement.lang = 'en';
        langButton.innerText = 'PT';
        document.querySelector('#sobre h1').innerText = 'About Me';
        document.querySelector('#sobre p').innerHTML = 
            `Hello, my name is Joabe Teixeira, I’m a 28-year-old Brazilian. Throughout my career, I’ve worked in various fields, mostly as a salesperson. I’ve also worked as a security guard in a psychiatric hospital and spent 1 year and 7 months as a waiter in Lisbon, where I received a letter of recommendation from my former employer.<br><br>
            I have been married for 4 years, and although I started studying Business Administration, I decided to shift my focus to programming. I believe that with the skills I am developing, I will be able to make a positive impact on many people’s lives in the future, using technology as a tool for transformation.<br><br>
            Currently, I am fully dedicated to enhancing my programming knowledge, aiming to grow in this new career and make a difference in the digital world.`;
        document.querySelector('#projetos h2').innerText = 'Projects';
        document.querySelector('#contato h2').innerText = 'Contact';
    } else {
        document.documentElement.lang = 'pt';
        langButton.innerText = 'EN';
        document.querySelector('#sobre h1').innerText = 'Sobre Mim';
        document.querySelector('#sobre p').innerHTML = 
            `Olá, meu nome é Joabe Teixeira, sou brasileiro e tenho 28 anos. Ao longo da minha carreira, atuei em diversas áreas, a maior parte do tempo como vendedor. Também trabalhei como vigilante patrimonial em um hospital psiquiátrico e, por 1 ano e 7 meses, fui empregado de mesa em Lisboa, onde recebi uma carta de recomendação do meu antigo chefe.<br><br>
            Sou casado há 4 anos e, embora tenha iniciado meus estudos em administração, decidi mudar de rumo para a área de programação. Acredito que, com as habilidades que estou desenvolvendo, poderei contribuir para transformar a vida de muitas pessoas no futuro, utilizando a tecnologia como ferramenta de impacto positivo.<br><br>
            Atualmente, estou me dedicando a aprimorar meus conhecimentos em programação, com o objetivo de crescer nessa nova carreira e fazer a diferença no mundo digital.`;
        document.querySelector('#projetos h2').innerText = 'Projetos';
        document.querySelector('#contato h2').innerText = 'Contato';
    }
});

// Alternância de tema (Dark Mode)
document.getElementById('theme-switch').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const themeIcon = document.getElementById('theme-icon');

    if (document.body.classList.contains('dark-mode')) {
        themeIcon.innerText = '🌜'; // Ícone da lua para o modo escuro
    } else {
        themeIcon.innerText = '🌞'; // Ícone do sol para o modo claro
    }
});
