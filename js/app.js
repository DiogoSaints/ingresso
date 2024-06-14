function comprar() {

    const tipoIngresso = document.getElementById('tipo-ingresso').value;
    const qtdSolicitada = parseInt(document.getElementById('qtd').value);

    const spanQtd = document.getElementById(`qtd-${tipoIngresso}`);
    const qtdDisponivel = parseInt(spanQtd.innerText);

    if (isNaN(qtdSolicitada) || qtdSolicitada <= 0) {
        alert("Por favor, insira uma quantidade válida.");
        return;
    }

    if (qtdSolicitada > qtdDisponivel) {
        alert("Quantidade solicitada excede a quantidade disponível.");
        return;
    }

    spanQtd.innerText = qtdDisponivel - qtdSolicitada;

    alert(`Compra realizada com sucesso! ${qtdSolicitada} ingresso(s) para ${tipoIngresso} foram comprados.`);
}