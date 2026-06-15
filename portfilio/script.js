// Efeito de digitação simples (Typing Effect)
const words = ["Desenvolvedor Web", "Estudante de CC", "Entusiasta de UI/UX"];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.querySelector('.typing-text').innerHTML = word.shift() + '<span class="cursor">|</span>';
        } else {
            setTimeout(deletingEffect, 2000);
            return false;
        }
        timer = setTimeout(loopTyping, 100);
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.querySelector('.typing-text').innerHTML = word.join("") + '<span class="cursor">|</span>';
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            }
            setTimeout(typingEffect, 500);
            return false;
        }
        timer = setTimeout(loopDeleting, 50);
    };
    loopDeleting();
}

// Iniciar a animação de texto ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    // Se quiser usar a lista dinâmica do JS, limpe o H2 do HTML e descomente a linha abaixo:
    // typingEffect();
});