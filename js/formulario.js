var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var erros = validar();

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    if (erros.length == 0) {
        var tempo = document.querySelector("#tempo").value;
        var chegadaA = document.querySelector("#chegadaA").value;
        var chegadaB = document.querySelector("#chegadaB").value;
        var chegadaC = document.querySelector("#chegadaC").value;
        var servicoA = document.querySelector("#servicoA").value;
        var servicoB = document.querySelector("#servicoB").value;
        var servicoC = document.querySelector("#servicoC").value;
        var clienteProb = document.querySelector("#clienteProb").value;

        RespChegadaC = calcularResC(chegadaC, tempo);
        RespChegadaB = calcularResB(chegadaB, tempo);
        RespChegadaA = calcularResA(chegadaA, tempo);
        RespServicoA = calcularResA(servicoA, tempo);
        RespServicoB = calcularResB(servicoB, tempo);
        RespServicoC = calcularResC(servicoC, tempo);
        MediaA = calcMediaA(RespServicoA, RespChegadaA);
        MediaB = calcMediaB(RespServicoB, RespChegadaB);
        MediaC = calcMediaC(RespServicoC, RespChegadaC);
        MediaSistemaA = calcMediaSistA(RespChegadaA, RespServicoA);
        MediaSistemaB = calcMediaSistB(RespChegadaB, RespServicoB);
        MediaSistemaC = calcMediaSistC(RespChegadaC, RespServicoC);
        TaxamediaSisA = calcTaxaMediaA(RespChegadaA, RespServicoA);
        TaxamediaSisB = calcTaxaMediaB(RespChegadaB, RespServicoB);
        TaxamediaSisC = calcTaxaMediaC(RespChegadaC, RespServicoC);

        var chegadaRespostaA = document.querySelector("#RespChegadaA");
        chegadaRespostaA.value = RespChegadaA;

        var chegadaRespostaB = document.querySelector("#RespChegadaB");
        chegadaRespostaB.value = RespChegadaB;

        var chegadaRespostaC = document.querySelector("#RespChegadaC");
        chegadaRespostaC.value = RespChegadaC;

        var servicoRespostaA = document.querySelector("#RespServA");
        servicoRespostaA.value = RespServicoA;

        var servicoRespostaB = document.querySelector("#RespServB");
        servicoRespostaB.value = RespServicoB;


        var servicoRespostaC = document.querySelector("#RespServC");
        servicoRespostaC.value = RespServicoC;

        var carroA = document.querySelector("#carroA");
        carroA.value = MediaA;

        var carroB = document.querySelector("#carroB");
        carroB.value = MediaB;

        var carroC = document.querySelector("#carroC");
        carroC.value = MediaC;

        var taxaMediaA = document.querySelector("#tempoA");
        taxaMediaA.value = -MediaSistemaA;

        var taxaMediaB = document.querySelector("#tempoB");
        taxaMediaB.value = -MediaSistemaB;

        var taxaMediaC = document.querySelector("#tempoC");
        taxaMediaC.value = -MediaSistemaC;

        var taxaSistMediaA = document.querySelector("#taxaMediA");
        taxaSistMediaA.value = TaxamediaSisA;

        var taxaSistMediaB = document.querySelector("#taxaMediB");
        taxaSistMediaB.value = TaxamediaSisB;

        var taxaSistMediaC = document.querySelector("#taxaMediC");
        taxaSistMediaC.value = TaxamediaSisC;

        var form = document.querySelector("#form-adiciona");

        var pacientes = [
            {
               n: 0,
               p: 0,
               cenarioA: (1 - (RespChegadaA / RespServicoA)) * ((RespChegadaA / RespServicoA) ** 0).toFixed(2),
               cenarioB: ((1 - (RespChegadaB / RespServicoB)) * ((RespChegadaB / RespServicoB) ** 0)).toFixed(2),
               cenarioC: (1 - (RespChegadaC / RespServicoC)) * ((RespChegadaC / RespServicoC) ** 0).toFixed(2),
           },
           {
               n: 1,
               p: 1,
               cenarioA: (1 - (RespChegadaA / RespServicoA)) * ((RespChegadaA / RespServicoA) ** 1).toFixed(2),
               cenarioB: ((1 - (RespChegadaB / RespServicoB)) * ((RespChegadaB / RespServicoB) ** 1)).toFixed(2),
               cenarioC: (1 - (RespChegadaC / RespServicoC)) * ((RespChegadaC / RespServicoC) ** 1).toFixed(2),
           },
           {
               n: 2,
               p: 2,
               cenarioA: (1 - (RespChegadaA / RespServicoA)) * ((RespChegadaA / RespServicoA) ** 2).toFixed(2),
               cenarioB: ((1 - (RespChegadaB / RespServicoB)) * ((RespChegadaB / RespServicoB) ** 2)).toFixed(2),
               cenarioC: (1 - (RespChegadaC / RespServicoC)) * ((RespChegadaC / RespServicoC) ** 2).toFixed(2),
           },
           {
               n: 3,
               p: 3,
               cenarioA: (1 - (RespChegadaA / RespServicoA)) * ((RespChegadaA / RespServicoA) ** 3).toFixed(2),
               cenarioB: ((1 - (RespChegadaB / RespServicoB)) * ((RespChegadaB / RespServicoB) ** 3)).toFixed(2),
               cenarioC: (1 - (RespChegadaC / RespServicoC)) * ((RespChegadaC / RespServicoC) ** 3).toFixed(2),
           },
           {
               n: 4,
               p: 4,
               cenarioA: (1 - (RespChegadaA / RespServicoA)) * ((RespChegadaA / RespServicoA) ** 4).toFixed(2),
               cenarioB: ((1 - (RespChegadaB / RespServicoB)) * ((RespChegadaB / RespServicoB) ** 4)).toFixed(2),
               cenarioC: (1 - (RespChegadaC / RespServicoC)) * ((RespChegadaC / RespServicoC) ** 4).toFixed(2),
           }
        ]
        
        var tbody = document.querySelector('tbody');
        
        pacientes.forEach(function (paciente) {
            var tr = document.createElement('tr');
            for (var campo in paciente) {
                var td = document.createElement('td');
                td.innerHTML = paciente[campo];
                tr.appendChild(td);
            };
            tbody.appendChild(tr);
        });

        var mensagensErro = document.querySelector("#mensagens-erro");
        mensagensErro.innerHTML = "";
        mensagensErro.value = "";
    }
});


function calcTaxaMediaA(RespChegadaA, RespServicoA) {
    var media = (RespChegadaA / RespServicoA);
    return media.toFixed(2);
}

function calcTaxaMediaB(RespChegadaB, RespServicoB) {
    var media = (RespChegadaB / RespServicoB);
    return media.toFixed(2);
}


function calcTaxaMediaC(RespChegadaC, RespServicoC) {
    var media = (RespChegadaC / RespServicoC);
    return media.toFixed(2);
}

function calcMediaSistA(RespChegadaA, RespServicoA) {
    var media = 1 / (RespChegadaA - RespServicoA);
    return media.toFixed(2);
}

function calcMediaSistB(RespChegadaB, RespServicoB) {
    var media = 1 / (RespChegadaB - RespServicoB);
    return media.toFixed(2);
}

function calcMediaSistC(RespChegadaC, RespServicoC) {
    var media = 1 / (RespChegadaC - RespServicoC);
    return media.toFixed(2);
}

function calcMediaA(RespChegadaA, RespServicoA) {
    var media = RespServicoA / (RespChegadaA - RespServicoA);
    return media.toFixed(2);
}

function calcMediaB(RespChegadaB, RespServicoB) {
    var media = RespServicoB / (RespChegadaB - RespServicoB);
    return media.toFixed(2);
}

function calcMediaC(RespChegadaC, RespServicoC) {
    var media = RespServicoC / (RespChegadaC - RespServicoC);
    return media.toFixed(2);
}


function calcularResA(servicoA, tempo) {
    var RespServicoA = 0;
    RespServicoA = tempo / servicoA;
    return RespServicoA.toFixed(2);
}


function calcularResB(servicoB, tempo) {
    var RespServicoB = 0;
    RespServicoB = tempo / servicoB;
    return RespServicoB.toFixed(2);
}

function calcularResC(servicoC, tempo) {
    var RespServicoC = 0;
    RespServicoC = tempo / servicoC;
    return RespServicoC.toFixed(2);
}

function calcularResC(chegadaC, tempo) {
    var RespChegadaC = 0;
    RespChegadaC = tempo / chegadaC;
    return RespChegadaC.toFixed(2);
}

function calcularResB(chegadaB, tempo) {
    var RespChegadaB = 0;
    RespChegadaB = tempo / chegadaB;
    return RespChegadaB.toFixed(2);
}

function calcularResA(chegadaA, tempo) {
    var RespChegadaA = 0;
    RespChegadaA = tempo / chegadaA;
    return RespChegadaA.toFixed(2);
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function validar() {

    var erros = [];

    var tempo = formularioAdiciona.tempo.value;
    var chegadaA = formularioAdiciona.chegadaA.value;
    var chegadaB = formularioAdiciona.chegadaB.value;
    var chegadaC = formularioAdiciona.chegadaC.value;
    var servicoA = formularioAdiciona.servicoA.value;
    var servicoB = formularioAdiciona.servicoB.value;
    var servicoC = formularioAdiciona.servicoC.value;
    var clienteProb = formularioAdiciona.clienteProb.value;

    if (tempo.length == 0) {
        erros.push("O tempo não pode ser em branco");
    }
    if (chegadaA.length == 0) {
        erros.push("A chegada (A) não pode ser em branco");
    }
    if (chegadaB.length == 0) {
        erros.push("A chegada (B) não pode ser em branco");
    }
    if (chegadaC.length == 0) {
        erros.push("A chegada (C) não pode ser em branco");
    }
    if (servicoA.length == 0) {
        erros.push("O serviço (A) não pode ser em branco");
    }
    if (servicoB.length == 0) {
        erros.push("O serviço (B) não pode ser em branco");
    }
    if (servicoC.length == 0) {
        erros.push("O serviço (C) não pode ser em branco");
    }
    if (clienteProb.length == 0) {
        erros.push("O cliente não pode ser em branco");
    }

    return erros;
}


//  console.log((1 - (15 / 20)) * ((15/20) ** 0));
//  console.log((1 - (RespChegadaA / RespServicoA)) * ((RespChegadaA / RespServicoA) ** i));


/*  var i;
  var clientesA = [];
  var clientesB = [];
  var clientesC = [];
  for (i = 0; i < clienteProb; i++) {
      clientesA[i] = (1 - (RespChegadaA / RespServicoA)) * ((RespChegadaA / RespServicoA) ** i);
      clientesB[i] = (1 - (RespChegadaB / RespServicoB)) * ((RespChegadaB / RespServicoB) ** i);
      clientesC[i] = (1 - (RespChegadaC / RespServicoC)) * ((RespChegadaC / RespServicoC) ** i);
      console.log(clientesA[i]);
      console.log(clientesB[i]);
      console.log(clientesC[i]);
  } */

  /*
        var paciente = [
         {
            n: 0,
            p: 0,
            cenarioA: (1 - (RespChegadaA / RespServicoA)) * ((RespChegadaA / RespServicoA) ** 0).toFixed(2),
            cenarioB: ((1 - (RespChegadaB / RespServicoB)) * ((RespChegadaB / RespServicoB) ** 0)).toFixed(2),
            cenarioC: (1 - (RespChegadaC / RespServicoC)) * ((RespChegadaC / RespServicoC) ** 0).toFixed(2),
        },
        {
            n: 1,
            p: 1,
            cenarioA: (1 - (RespChegadaA / RespServicoA)) * ((RespChegadaA / RespServicoA) ** 1).toFixed(2),
            cenarioB: ((1 - (RespChegadaB / RespServicoB)) * ((RespChegadaB / RespServicoB) ** 1)).toFixed(2),
            cenarioC: (1 - (RespChegadaC / RespServicoC)) * ((RespChegadaC / RespServicoC) ** 1).toFixed(2),
        },
        {
            n: 2,
            p: 2,
            cenarioA: (1 - (RespChegadaA / RespServicoA)) * ((RespChegadaA / RespServicoA) ** 2).toFixed(2),
            cenarioB: ((1 - (RespChegadaB / RespServicoB)) * ((RespChegadaB / RespServicoB) ** 2)).toFixed(2),
            cenarioC: (1 - (RespChegadaC / RespServicoC)) * ((RespChegadaC / RespServicoC) ** 2).toFixed(2),
        },
        {
            n: 3,
            p: 3,
            cenarioA: (1 - (RespChegadaA / RespServicoA)) * ((RespChegadaA / RespServicoA) ** 3).toFixed(2),
            cenarioB: ((1 - (RespChegadaB / RespServicoB)) * ((RespChegadaB / RespServicoB) ** 3)).toFixed(2),
            cenarioC: (1 - (RespChegadaC / RespServicoC)) * ((RespChegadaC / RespServicoC) ** 3).toFixed(2),
        },
        {
            n: 4,
            p: 4,
            cenarioA: (1 - (RespChegadaA / RespServicoA)) * ((RespChegadaA / RespServicoA) ** 4).toFixed(2),
            cenarioB: ((1 - (RespChegadaB / RespServicoB)) * ((RespChegadaB / RespServicoB) ** 4)).toFixed(2),
            cenarioC: (1 - (RespChegadaC / RespServicoC)) * ((RespChegadaC / RespServicoC) ** 4).toFixed(2),
        }
    ]
        return paciente;
}
  */