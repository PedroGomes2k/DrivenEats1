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

comidaselecionada=selecionado.innerHTML
fechamentodopedido()
}

let= comidaselecionada

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

bebidaselecionada=selecionado.innerHTML
fechamentodopedido()
}
let= bebidaselecionada
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

sobremesaselecionada=selecionado.innerHTML
fechamentodopedido()
}
let= sobremesaselecionada

function fechamentodopedido(){
// Sua função é quando a comida selecionada for diferente de nao defenida(undefined) ela pode prosseguir
// Essa lógica vai seguir até o último selecionado
if(comidaselecionada !== undefined){
    
    if(bebidaselecionada !== undefined){
     
        if(sobremesaselecionada !== undefined){
        // Depois todos selecionados o botao de fechar pedido vai ser mudado 

        // Ele esta ultilizando o DOM para alterar a frase quando os itens acima forem selecionados
        const fechar=document.querySelector('.h4')
        // Frase alterado 
        fechar.innerHTML=" Fechar pedido"
        // Agora vai ser adcionado a class 'fechar-pedido' o 'pronto' para alterar a cor do botão
        const finalizaçao=document.querySelector('.fechar-pedido')
        finalizaçao.classList.add('pronto')
        }
    }

}   

}

function pedidopronto(){
}