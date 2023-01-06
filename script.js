function selectioncomida(botaoclick){

// Ver se ja existe algum tipo de class -selecionada
const clickanterior=document.querySelector('.barra-comida .-selecionada')
// Caso não exista class -selecionada ele vai proseguir com a próxima função
// Tudo isso vai acontecer caso ela seja diferente de null
if(clickanterior !== null){
// Porém, se houver alguma class -selecionada ele vai remove-la
clickanterior.classList.remove('-selecionada')
}


// Ele agora vai procurar dentro do DOM alguma class com esse elemento
const seletor=document.querySelector('.barra-comida .comida1')
/*
Esta variavel foi criada,pois nao consegui fazer a variavel seletor ser transformada em 'botaoclick'.
 Assim, tive que colocar um sendo igual ao o outro para que o código funcionasse
*/
const selecionado=botaoclick
selecionado === seletor
// Adição do '-selecionada' na sua class pertencente
selecionado.classList.add('-selecionada')

}

function selectionbebida(botaoclick){

// Ver se ja existe algum tipo de class -selecionada
const clickanterior=document.querySelector('.barra-bebida .-selecionada')
// Caso não exista class -selecionada ele vai proseguir com a próxima função
// Tudo isso vai acontecer caso ela seja diferente de null
if(clickanterior !== null){
// Porém, se houver alguma class -selecionada ele vai remove-la
clickanterior.classList.remove('-selecionada')
}


// Ele agora vai procurar dentro do DOM alguma class com esse elemento
const seletor=document.querySelector('.barra-comida .comida2')
// Variavel explicada no primeiro bloco 
const selecionado=botaoclick
selecionado === seletor
// Adição do '-selecionada' na sua class pertencente
selecionado.classList.add('-selecionada')

}

function selectionsobremesa(botaoclick){

// Ver se ja existe algum tipo de class -selecionada
const clickanterior=document.querySelector('.barra-sobremesa .-selecionada')
// Caso não exista class -selecionada ele vai proseguir com a próxima função
// Tudo isso vai acontecer caso ela seja diferente de null
if(clickanterior !== null){
// Porém, se houver alguma class -selecionada ele vai remove-la
clickanterior.classList.remove('-selecionada')
}


// Ele agora vai procurar dentro do DOM alguma class com esse elemento
const seletor=document.querySelector('.barra-sobremesa .comida3')
// variável explicada no primeiro bloco
const selecionado=botaoclick
selecionado === seletor
// Adição do '-selecionada' na sua class pertencente
selecionado.classList.add('-selecionada')

}

function pedidopronto(fechado){
// quando as três refeiçoes forem escolhidas ele vai liberar o botão de fechar o pedido

// o if só vai ocorrer quando os elmentos forem escolholidos será igual a true
if(selecionados === true){

// quando o botão de fechar pedido for acionado vai trocar a mensagem para fechar o pedido
const fechar=document.querySelector('.h4')
// troca do texto da class '.h4'
fechar.innerHTML=" Fechar pedido"

// Ao tempo que a mensagem for trocada, será trocada também a cor do fundo

// Ela vai buscar a div com o DOM
const finalizaçao=document.querySelector('.fechar-pedido')
// Agora será adicionado a class '.pronto' a div 'fechar-pedido'
finalizaçao.classList.add('pronto')
}
}