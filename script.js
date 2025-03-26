document.addEventListener('DOMContentLoaded', function() {
    // Adicionar ano atual no footer (opcional)
    const yearSpan = document.createElement('span');
    yearSpan.textContent = new Date().getFullYear();
    document.querySelector('footer').appendChild(yearSpan);
    
    // Links
    const links = {
        github: 'https://github.com/Vinishireis', 
        portfolio: 'https://portfolioreact-alpha-two.vercel.app/', 
        tcc: 'https://github.com/Vinishireis/OnDev-Beta_0.3',
        app: 'https://github.com/Vinishireis/OnDev_App_React_Project' 
    };
    
    // Atribuir links aos botões
    document.querySelectorAll('.link-button').forEach((button, index) => {
        const keys = Object.keys(links);
        button.href = links[keys[index]];
        
        // Animação ao passar o mouse nos botões
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
            button.style.transition = 'transform 0.3s ease';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });
    
    // Efeito de hover nos cards com animação suave
    const cards = document.querySelectorAll('section');
    cards.forEach((card, index) => {
        // Animação inicial quando a página carrega
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        
        // Forçar o reflow para ativar a animação
        void card.offsetWidth;
        
        // Aplicar as propriedades finais para acionar a animação
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        
        // Efeito hover
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
            card.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '';
        });
    });
    
    // Animação para o header
    const header = document.querySelector('header');
    header.style.opacity = '0';
    header.style.transform = 'translateY(-20px)';
    header.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    setTimeout(() => {
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    }, 100);
});