document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menuIcon");
    const menu = document.getElementById("menu");

    menuIcon.addEventListener("click", function () {
        menu.classList.toggle("open"); 
    });

    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
            menu.classList.remove("open"); 
        }
    });
});

const themeToggleButton = document.getElementById('theme-toggle');

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    if (themeToggleButton.src.includes("sun.png")) {
        themeToggleButton.src = "moon.png";
    } else {
        themeToggleButton.src = "sun.png";
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    let currentIndex = 0;

    function updateCarousel() {
        const totalItems = items.length;
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length; 
        updateCarousel();
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const telefoneInput = document.getElementById("telefone");
    const sucessoMsg = document.getElementById("mensagem-sucesso");

    telefoneInput.addEventListener("input", function () {
        this.value = formatarTelefone(this.value);
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = telefoneInput.value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (nome === "" || email === "" || telefone === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        console.log({ nome, email, telefone, mensagem });

        sucessoMsg.style.display = "block";
        form.reset(); 
    });

    function formatarTelefone(valor) {
        valor = valor.replace(/\D/g, "");

        if (valor.length > 10) {
            return valor.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
        } else if (valor.length > 5) {
            return valor.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
        } else if (valor.length > 2) {
            return valor.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
        }
        return valor;
    }
});

