// armazenamento dos pididos e preços
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
let nomeEndereco="Não fornecido"
let nomeCliente="Não fornecido"
function selectioncomida(botaoclick) {

    let categorias = document.querySelector('.barra-comida ');
    let selecionado = categorias.querySelector('.-selecionada')
    if (selecionado !== null) {
        selecionado.classList.remove('-selecionada')
    }
    botaoclick.classList.add('-selecionada')
    nomecomida = botaoclick.querySelector('h4').innerHTML
    precoComida = Number(botaoclick.querySelector('h6').innerHTML.replace("R$", "").replace(",", "."))
    console.log(nomecomida, precoComida)

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

function selecionados() {
    if (contadorPedido.length === 3) {
        document.querySelector('.fechar-pedido h4').innerHTML = "Fechar pedido"
        document.querySelector('.fechar-pedido').classList.add('pronto')
        document.querySelector('.fechar-pedido').removeAttribute('disabled')
    }
}

// 
function pedidopronto() {
    document.querySelector('.background').classList.remove('pedido')
    document.querySelector('.quadro-pedido-finalizado').classList.remove('pedido')

    document.querySelector('.quadro-pedido-finalizado .comidapreco .item').innerHTML = nomecomida
    document.querySelector('.quadro-pedido-finalizado .comidapreco .preco').innerHTML = precoComida.toFixed(2).replace(".", ",")

    document.querySelector('.quadro-pedido-finalizado .bebidapreco .item').innerHTML = nomebebida
    document.querySelector('.quadro-pedido-finalizado .bebidapreco .preco').innerHTML = precoBebida.toFixed(2).replace(".", ",")


    document.querySelector('.quadro-pedido-finalizado .sobremesapreco .item').innerHTML = nomesobremesa
    document.querySelector('.quadro-pedido-finalizado .sobremesapreco .preco').innerHTML = precoSobremesa.toFixed(2).replace(".", ",")

    precoTotal = `R$ ${(precoComida + precoBebida + precoSobremesa).toFixed(2).replace(".", ",")}`
    document.querySelector('.precototalfinal').innerHTML = precoTotal

    nomeCliente=prompt("Digite seu nome:")
    nomeEndereco=prompt("Digite seu endenreço:")
    if(nomeCliente === null || nomeEndereco ===null ){
        nomeCliente="Não informado"
        nomeEndereco="Não informado"
    }
    
}

function cancelado() {
    document.querySelector('.background ').classList.toggle('pedido')
    document.querySelector('.quadro-pedido-finalizado ').classList.toggle('pedido')
}

function finalizado() {
let msgZap=`Olá, gostaria de fazer o pedido:
- Prato: ${nomecomida}
- Bebida: ${nomebebida}
- Sobremesa: ${nomesobremesa}
Total: ${precoTotal}

Nome: ${nomeCliente}
Endereço: ${nomeEndereco}`
console.log(msgZap)

window.open(`https://wa.me/552171516055?text=${msgZap}`, '_blank');
}
