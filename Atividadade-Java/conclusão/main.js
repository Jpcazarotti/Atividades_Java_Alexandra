function showForm(formId) {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.style.display = 'none';
    });

    const formToShow = document.getElementById(formId);
    if (formToShow) {
        formToShow.style.display = 'block';
    }
}
function opneFnotas() {        
    let n1 = parseFloat(document.getElementById("nota_01").value);
    let n2 = parseFloat(document.getElementById("nota_02").value);
    let n3 = parseFloat(document.getElementById("nota_03").value);
    let n4 = parseFloat(document.getElementById("nota_04").value);
    let notaRecuperacao = parseFloat(document.getElementById("nota_recuperacao").value);
   
    let soma = n1 + n2 + n3 + n4;
    let media = soma / 4;

    if (media >= 5.0) {
        alert('Aprovado com média: ' + media.toFixed(2));
    } else {
        document.getElementById("provaRecuperacao").style.display = "block";
        
        if (notaRecuperacao >= 5.0) {
            alert('Aprovado na recuperação com nota: ' + notaRecuperacao.toFixed(2));
        } else {
            alert('Reprovado na recuperação com nota: ' + notaRecuperacao.toFixed(2));
        }
    }
}
function openFidade() {
    let idade;
    do {    
        idade = parseInt(document.getElementById("idade").value);

        if(isNaN(idade) || !Number.isInteger(idade) ||  idade <= 0){
            alert("Essa idade não é válida!")
        }
    } while (isNaN(idade) || !Number.isInteger(idade));
       
    if(idade >= 18) {
        alert("Maior de idade!")
    }
    else if(idade < 18) {
        alert("Menor de idade!")
    }
}
function openFsal(){

    let nameVendedor = document.getElementById("nome").value;
    let salario = parseFloat(document.getElementById("salario").value);
    let vendas = parseFloat(document.getElementById("vendas").value);

    let comissão = vendas * 0.15;
    let totalmes = comissão + salario;

    alert("Muito bem " + nameVendedor + " seu salário fixo e de: R$" + salario + " e o seu salário total no mês foi de: R$" + totalmes);
}
function openFpar() {
    let numero;
    do {
        numero = parseInt(document.getElementById("numero").value);
   
        if (isNaN(numero) || !Number.isInteger(numero)) {
            alert("Não é um número inteiro! Digite novamente");
        }    
    } while (isNaN(numero) || !Number.isInteger(numero));
   
    if (numero % 2 === 0) {
        alert(numero + " é um número par");
    } else {
        alert(numero + " é um número ímpar");
    }
}
function openFval() {
    let A = parseFloat(document.getElementById("valor_01").value);
    let B = parseFloat(document.getElementById("valor_02").value);

    [A, B] = [B, A]; //desestrutução com array

    alert('O novo valor de A é: ' + A + ' O novo valor de B é: ' + B + '.');
}
function openFimc() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    if(isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0){
        alert("Por favor, insira números válidos para peso e altura.");
    }else {

        let imc = peso / (altura ** 2);

        if(imc < 18.5) {
            alert('Abaixo do peso!');
        } else if(imc >= 18.5 && imc <= 24.9) {
            alert('Peso normal!');
        } else if(imc >= 25 && imc <= 29.9) {
            alert('Sobrepeso!');
        } else if(imc >= 30 && imc <= 34.9) {
            alert('Obesidade grau 01');
        } else if(imc >= 35 && imc <= 39.9) {
            alert('Obesidade grau 02');
        } else if(imc >= 40) {
            alert('Obesidade grau 03');
        }
    }
}
function calcularPrecoVenda() {
    let precoCusto = parseFloat(document.getElementById("precoCusto").value);
    let percentualAcrescimo = parseFloat(document.getElementById("percentualAcrescimo").value);
    let precoVenda = precoCusto * (1 + percentualAcrescimo/100);
    alert(`O preço de venda do produto é: ${precoVenda}`);
}
function openFprodutos() {
    let valor = parseFloat(document.getElementById("carro").value);
    let porcentagem1 = 28;
    let porcentagem2 = 45;
    let valor1 = valor + (valor * (porcentagem1/100));
    let novo_valor = valor + (valor1 * (porcentagem2/100));
    alert(`O preço do carro é: ${novo_valor}`);
}