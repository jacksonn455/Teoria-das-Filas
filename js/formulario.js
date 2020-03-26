var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var tempo = document.querySelector("#tempo").value;
    var chegadaA = document.querySelector("#chegadaA").value;
    var chegadaB = document.querySelector("#chegadaB").value;
    var chegadaC = document.querySelector("#chegadaC").value;
    var servicoA = document.querySelector("#servicoA").value;
    var servicoB = document.querySelector("#servicoB").value;
    var servicoC = document.querySelector("#servicoC").value;
    var clienteProb = document.querySelector("#clienteProb").value;

    RespChegadaC = calcularResC(chegadaC);
    RespChegadaB = calcularResB(chegadaB);
    RespChegadaA = calcularResA(chegadaA);
    RespServicoA = calcularResA(servicoA);
    RespServicoB = calcularResB(servicoB);
    RespServicoC = calcularResC(servicoC);

    var chegadaRespostaA = document.querySelector("#RespChegadaA");
    chegadaRespostaA.textContent  = RespChegadaA
    console.log(chegadaRespostaA.textContent = RespChegadaA);

    var chegadaRespostaB = document.querySelector("#RespChegadaB");
    chegadaRespostaB.textContent  = RespChegadaB
    console.log(chegadaRespostaB.textContent = RespChegadaB);

    var chegadaRespostaC = document.querySelector("#RespChegadaC");
    chegadaRespostaC.textContent  = RespChegadaC
    console.log(chegadaRespostaC.textContent = RespChegadaC);

    var servicoRespostaA = document.querySelector("#RespServA");
    servicoRespostaA.textContent  = RespServicoA
    console.log(servicoRespostaA.textContent = RespServicoA);

    var servicoRespostaB = document.querySelector("#RespServB");
    servicoRespostaB.textContent  = RespServicoB
    console.log(servicoRespostaB.textContent =RespServicoB);

    var servicoRespostaC = document.querySelector("#RespServC");
    servicoRespostaC.textContent = RespServicoC
    console.log(servicoRespostaC.textContent =RespServicoC);

});

function calcularResA(servicoA) {
    var RespServicoA = 0;
    RespServicoA = 60 / servicoA;
    return RespServicoA.toFixed(2);
}


function calcularResB(servicoB) {
    var RespServicoB = 0;
    RespServicoB = 60 / servicoB;
    return RespServicoB.toFixed(2);
}

function calcularResC(servicoC) {
    var RespServicoC = 0;
    RespServicoC = 60 / servicoC;
    return RespServicoC.toFixed(2);
}

function calcularResC(chegadaC) {
    var RespChegadaC = 0;
    RespChegadaC = 60 / chegadaC;
    return RespChegadaC.toFixed(2);
}

function calcularResB(chegadaB) {
    var RespChegadaB = 0;
    RespChegadaB = 60 / chegadaB;
    return RespChegadaB.toFixed(2);
}

function calcularResA(chegadaA) {
    var RespChegadaA = 0;
    RespChegadaA = 60 / chegadaA;
    return RespChegadaA.toFixed(2);
}