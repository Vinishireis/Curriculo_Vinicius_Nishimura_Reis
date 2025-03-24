// Pode ser usado para funcionalidades adicionais
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar ano atual no footer (opcional)
    const yearSpan = document.createElement('span');
    yearSpan.textContent = new Date().getFullYear();
    document.querySelector('footer').appendChild(yearSpan);
    
    
    const links = {
        github: 'https://github.com/Vinishireis', 
        portfolio: 'https://portfolioreact-alpha-two.vercel.app/', 
        tcc: 'https://github.com/Vinishireis/OnDev-Beta_0.3',
        app: 'https://github.com/Vinishireis/OnDev_App_React_Project' 
    };
    
    document.querySelectorAll('.link-button').forEach((button, index) => {
        const keys = Object.keys(links);
        button.href = links[keys[index]];
    });
    
    // Efeito de hover nos cards
    const cards = document.querySelectorAll('section');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    });
});