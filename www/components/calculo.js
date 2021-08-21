window.onload = function(){
  const visor = document.querySelector("#visor");

  const numero = document.querySelectorAll(".numero");

  let valor;
  let valor1;
  let op;

  let botoes = Array.prototype.filter.call(numero, function(botao){
    botao.addEventListener('click', function(){
      valor = visor.value;
      valor += this.value;
      visor.value = valor;  
    });

  });

  document.querySelector("#sub").addEventListener('click', function(){
    valor1 = visor.value;
    visor.value = "";
    op = "sub";
  });
  document.querySelector("#adicao").addEventListener('click', function(){
    valor1 = visor.value;
    visor.value = "";
    op = "adicao";
  });
  document.querySelector("#multp").addEventListener('click', function(){
    valor1 = visor.value;
    visor.value = "";
    op = "multp";
  });
  document.querySelector("#divisao").addEventListener('click', function(){
    valor1 = visor.value;
    visor.value = "";
    op = "divisao";
  });

  document.querySelector("#igual").addEventListener('click', function(){
    let valor2 = visor.value;

    if(op == 'sub'){
      let resultado = valor1 - valor2;
      visor.value = resultado.toFixed(2);
    }
    if(op == 'adicao'){
       let resultado = parseFloat(valor1) + parseFloat(valor2);
      visor.value = resultado.toFixed(2);
    }
    if(op == 'divisao'){
       let resultado = valor1 / valor2;
      visor.value = resultado.toFixed(2);
    }
    if(op == 'multp'){
       let resultado = valor1 * valor2;
      visor.value = resultado.toFixed(2);
    }
  })
  document.querySelector("#C").addEventListener('click', function(){
    visor.value = "";
    valor1 = "";
    op = "";
  })
}

