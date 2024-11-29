const componentes = document.querySelectorAll('.componente');

componentes.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.style.transform = 'scale(1.1)'; 
        div.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.5)'; 
        div.style.transition = 'transform 0.3s, box-shadow 0.3s';
    });


    div.addEventListener('mouseout', () => {
        div.style.transform = 'scale(1)'; 
        div.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)'; 
    });
});