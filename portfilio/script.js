// Efeito de cursor piscando
const cursor = document.querySelector('.cursor');
if (cursor) {
    setInterval(() => {
        cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
    }, 500);
}

// Navegação suave
document.querySelectorAll('.nav-menu a, .btn-talk').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            const targetId = href.substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));
                this.classList.add('active');
            }
        } else if (this.classList.contains('btn-talk')) {
            e.preventDefault();
            const contato = document.getElementById('contato');
            if (contato) contato.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Botões "Ver Projetos" e "Download CV"
document.querySelector('.btn-secondary')?.addEventListener('click', function() {
    const projetos = document.getElementById('projetos');
    if (projetos) projetos.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.btn-primary')?.addEventListener('click', function() {
    window.open('Curriculo.pdf', '_blank');
});

// Formulário de contato
const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const inputs = form.querySelectorAll('input, textarea');
        let filled = true;
        inputs.forEach(inp => {
            if (!inp.value.trim()) filled = false;
        });
        if (filled) {
            feedback.innerHTML = '<span style="color:#34d399;">✓ Mensagem enviada! Em breve entrarei em contato.</span>';
            form.reset();
            setTimeout(() => { feedback.innerHTML = ''; }, 4000);
        } else {
            feedback.innerHTML = '<span style="color:#f87171;">⚠️ Preencha todos os campos antes de enviar.</span>';
            setTimeout(() => { if (feedback.innerHTML.includes('Preencha')) feedback.innerHTML = ''; }, 3000);
        }
    });
}

// Scroll spy para menu ativo
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', function() {
    let current = '';
    const scrollPos = window.scrollY + 200;
    sections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
            current = sec.getAttribute('id');
        }
    });
    navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Particles simples
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: rgba(108, 92, 231, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float-particle ${Math.random() * 20 + 10}s infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        container.appendChild(particle);
    }
}

// Adicionar keyframes dinamicamente
const styleSheet = document.createElement("style");
styleSheet.textContent = `
    @keyframes float-particle {
        0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
        25% { transform: translate(30px, -20px) scale(1.2); opacity: 0.8; }
        50% { transform: translate(-20px, 30px) scale(0.8); opacity: 0.5; }
        75% { transform: translate(15px, -30px) scale(1.1); opacity: 0.7; }
    }
`;
document.head.appendChild(styleSheet);

createParticles();