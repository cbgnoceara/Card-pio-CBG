        // Pega o elemento do DOM
        const backToTopButton = document.getElementById('back-to-top-btn');

        // Função para controlar a visibilidade do botão
        const handleScroll = () => {
            if (window.scrollY > 200) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        };

        // Adiciona o listener de scroll na janela
        window.addEventListener('scroll', handleScroll);