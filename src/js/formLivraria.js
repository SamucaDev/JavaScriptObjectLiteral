const eventSubmit = document.querySelector('#form-livraria');

console.log(eventSubmit);

eventSubmit.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name_book').value;
    const price = Number(document.getElementById('price_book').value);
    var discount = Number(document.getElementById('discount-book').value);
    // 0 1 2 3

    //Object literal
    const addDiscount = {
        0: (price) => {
            let array = new Array;
            array['price'] = price;
            array['desconto'] = 0;

            return array
        },
        1: (price) => {
            let array = new Array;
            array['price'] = price * 0.85;
            array['desconto'] = price * 0.15;

            return array
        },
        2: (price) => {
            let array = new Array;
            array['price'] = price * 0.90;
            array['desconto'] = price * 0.10;

            return array
        },
        3: (price) => {
            let array = new Array;
            array['price'] = price * 0.93;
            array['desconto'] = price * 0.07;

            return array
        },

    };

    const result = addDiscount[discount](price);



    document.getElementById('name_exibicao').innerHTML = `Nome do Livro: ${name}`;
    document.getElementById('price_exibicao').innerHTML = `Price do Livro: ${formatPrice(price)}`;
    document.getElementById('discount_exibicao').innerHTML = `Desconto Cliente: ${formatPrice(result['desconto'])}`;
    document.getElementById('total_exibicao').innerHTML = `Total a Pagar: ${formatPrice(result['price'])}`;

    document.querySelector('.result-display').style.display = 'block'

});


function formatPrice(price) {


    const formatado = price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    return formatado;
}