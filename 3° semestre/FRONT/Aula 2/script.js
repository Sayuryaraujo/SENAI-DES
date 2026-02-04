function reajustar() {
    let salario = Number(document.getElementById('salario').value);
    let resultado = document.getElementById('resultado');
    let bonus = 0;

    if (salario > 2000) {
        bonus = salario * (10 / 100);
    }

    let salarioFinal = salario + bonus;

    resultado.innerHTML = 
        `Bônus de R$ ${bonus.toFixed(2)} <br>
         Salário Final R$ ${salarioFinal.toFixed(2)}`;
}
function reajustar() {
    let compra = Number(document.getElementById('compra').value);
    let resultado = document.getElementById('resultado');
    let frete = 0;

    if (compra >= 150) {
        frete = 0;
    }
    else{
        frete = 20;
    }
    let compraFinal = compra + frete;

    resultado.innerHTML = 
        `Frete de R$ ${frete.toFixed(2)} <br>
         Compra Final R$ ${compraFinal.toFixed(2)}`;
}
function reajustar() {
    let total = Number(document.getElementById('total').value);
    let resultado = document.getElementById('resultado');
    let desconto = 0;

    if (total >= 200) {
        desconto = 10;
    }
    else{
        frete = 0;
    }
    let totalFinal = total - desconto;

    resultado.innerHTML = 
        `Desconto de R$ ${desconto.toFixed(2)} <br>
         Total Final R$ ${totalFinal.toFixed(2)}`;
    
}
function reajustar() {
    let mensalidade = Number(document.getElementById('mensalidade').value);
    let dias = Number(document.getElementById('dias').value);
    let resultado = document.getElementById('resultado');
    let multa = 0;

    if (dias > 0) {
        multa = mensalidade * 0.02;
    }

    let totalFinal = mensalidade + multa;

    resultado.innerHTML = 
        `Valor da multa: R$ ${multa.toFixed(2)} <br>
         Total a pagar: R$ ${totalFinal.toFixed(2)}`;
}
function reajustar() {
    let valor = Number(document.getElementById('valor').value);
    let resultado = document.getElementById('resultado');
    let cashback = 0;

    if (valor > 300) {
        cashback = valor * 0.05;
    }

    let valorLiquido = valor - cashback;

    resultado.innerHTML =
        `Valor do cashback: R$ ${cashback.toFixed(2)} <br>
         Valor líquido da compra: R$ ${valorLiquido.toFixed(2)}`;
}


