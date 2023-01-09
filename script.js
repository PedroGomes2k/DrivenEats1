// armazenamento dos pididos e preços com o escopo global
let nomecomida = "";
let nomebebida = "";
let nomesobremesa = "";

let precoComida = ""
let precoBebida = ""
let precoSobremesa = ""

let precoTotal = ""
// Final armazenamento dos pedidos


// Habilitar botao fechar pedido 
let contadorPedido = []

// Endereço do cliente
let nomeEndereco = "Não fornecido"
let nomeCliente = "Não fornecido"

// Inicío das functions para seleção do botão , e salvamento dos preços e do nome dos pratos
function selectioncomida(botaoclick) {
    // Ultilizando o DOM para poder fazer a verificação se ja existe alguma class com '-.selecionada'
    let categorias = document.querySelector('.barra-comida ');
    let selecionado = categorias.querySelector('.-selecionada')
    // Ultilizaçao do if para remover '-selecionada' das class se existir
    // Caso nao existir nenhuma class com '-selecionada' ele vai proseguir com o progama
    if (selecionado !== null) {
        selecionado.classList.remove('-selecionada')
    }
    // Adicionando a class a funçao '-selecionada' para que o elemento escolhido seja mudado
    botaoclick.classList.add('-selecionada')
    // Fazendo o armazenamento da string para ultilização no modal
    nomecomida = botaoclick.querySelector('h4').innerHTML
    // Fazendo o armazenamento do string para ultilização no modal
    // Porém antes transformando essa string em um Number para fazer o cálculo dos valores no preço final
    precoComida = Number(botaoclick.querySelector('h6').innerHTML.replace("R$", "").replace(",", "."))
    // Salvando que essa div foi escolhida e adcionando para habilitar no 'Fechar pedido'
    contadorPedido.push(1)
    selecionados()
}
function selectionbebida(botaoclick) {
    let categorias = document.querySelector('.barra-bebida ');
    let selecionado = categorias.querySelector('.-selecionada')

    if (selecionado !== null) {
        selecionado.classList.remove('-selecionada')
    }
    botaoclick.classList.add('-selecionada')
    nomebebida = botaoclick.querySelector('h4').innerHTML
    precoBebida = Number(botaoclick.querySelector('h6').innerHTML.replace("R$", "").replace(",", "."))
    console.log(nomebebida, precoBebida)

    contadorPedido.push(2)
    selecionados()
}

function selectionsobremesa(botaoclick) {

    let categorias = document.querySelector('.barra-sobremesa');
    let selecionado = categorias.querySelector('.-selecionada')
    if (selecionado !== null) {
        selecionado.classList.remove('-selecionada')
    }
    botaoclick.classList.add('-selecionada')
    nomesobremesa = botaoclick.querySelector('h4').innerHTML
    precoSobremesa = Number(botaoclick.querySelector('h6').innerHTML.replace("R$", "").replace(",", "."))
    console.log(nomesobremesa, precoSobremesa)

    contadorPedido.push(3)
    selecionados()
}

// Todos os comentários realizados na primeira function será aplicados dentro das outras abaixo
// Final das functions de salvamento de preços e nomes dos pratos

function selecionados() {
    // habilitção funcionamento do button dentro do rodapé
    if (contadorPedido.length === 3) {
        // Alteração da frase dentro do button do rodapé
        document.querySelector('.fechar-pedido h4').innerHTML = "Fechar pedido"
        // Adição da função 'pronto' dentro da class para alteraçao dela
        document.querySelector('.fechar-pedido').classList.add('pronto')
        // Retirando o o atributo 'disable' para habilitar o button e permitir clicar após terem sido escolhidos 3 pedidos
        document.querySelector('.fechar-pedido').removeAttribute('disabled')
    }
}

// 
function pedidopronto() {
    // Remoçao da class pedido para aparecer a função modal
    document.querySelector('.background').classList.remove('pedido')
    document.querySelector('.quadro-pedido-finalizado').classList.remove('pedido')

    // Ultilizando o escopo global para pegar as informções dos pedidos selecionados e seu preço respectativo
    // Fazendo a transformação das ',' em '.' para fazer o cáculo dos preços para colocar no preço final
    document.querySelector('.quadro-pedido-finalizado .comidapreco .item').innerHTML = nomecomida
    document.querySelector('.quadro-pedido-finalizado .comidapreco .preco').innerHTML = precoComida.toFixed(2).replace(".", ",")

    // Ultilizando o escopo global para pegar as informções dos pedidos selecionados e seu preço respectativo
    // Fazendo a transformação das ',' em '.' para fazer o cáculo dos preços para colocar no preço final
    document.querySelector('.quadro-pedido-finalizado .bebidapreco .item').innerHTML = nomebebida
    document.querySelector('.quadro-pedido-finalizado .bebidapreco .preco').innerHTML = precoBebida.toFixed(2).replace(".", ",")

    // Ultilizando o escopo global para pegar as informções dos pedidos selecionados e seu preço respectativo
    // Fazendo a transformação das ',' em '.' para fazer o cáculo dos preços para colocar no preço final
    document.querySelector('.quadro-pedido-finalizado .sobremesapreco .item').innerHTML = nomesobremesa
    document.querySelector('.quadro-pedido-finalizado .sobremesapreco .preco').innerHTML = precoSobremesa.toFixed(2).replace(".", ",")

    // Realização do cálculo final 
    precoTotal = `R$ ${(precoComida + precoBebida + precoSobremesa).toFixed(2).replace(".", ",")}`
    document.querySelector('.precototalfinal').innerHTML = precoTotal

    // Ultilizaçao da ação do prompt para perguntar nome e endereço do cliente
    nomeCliente = prompt("Digite seu nome:")
    nomeEndereco = prompt("Digite seu endenreço:")
    // Caso não for escrito sera identificado como 'Não informado'
    if (nomeCliente === null || nomeEndereco === null) {
        nomeCliente = "Não informado"
        nomeEndereco = "Não informado"
    }

}
 
function cancelado() {
    // Fazendo a função do botão de cancelamento
    // Adição as class 'pedido' para que desapareça com o modal
    document.querySelector('.background ').classList.toggle('pedido')
    document.querySelector('.quadro-pedido-finalizado ').classList.toggle('pedido')
}

function finalizado() {
    // Button do modal para mandar mensagem para o WhatsApp
    let msgZap =
    `Olá, gostaria de fazer o pedido:
    - Prato: ${nomecomida}
    - Bebida: ${nomebebida}
    - Sobremesa: ${nomesobremesa}
    Total: ${precoTotal}

    Nome: ${nomeCliente}
    Endereço: ${nomeEndereco}`

    console.log(msgZap)
    window.open(`https://wa.me/5531973453361?text= ${msgZap}`, '_blank');
}
