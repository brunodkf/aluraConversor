function Converter(){
    let valorElemento = document.getElementById('valor'); 
    let valor = parseFloat(valorElemento.value); //dolar

    var valorEmReal = valor * 5;

    let valorConvertido = document.getElementById('valorConvertido');
    let mostraValor = `O valor da moeda em Reais: ${valorEmReal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`;

    valorConvertido.innerHTML = mostraValor;
}



// menu mobile

const button = document.querySelector('[data-button-menu]');


button.addEventListener('click', function(){
    const navMenu = document.querySelector('.menu');
    navMenu.classList.toggle('active');

});
