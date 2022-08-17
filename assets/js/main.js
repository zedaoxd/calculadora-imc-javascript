const from = document.querySelector('#form');

from.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const classificacao = getClassificacaoImc(imc);

    const msg = `Seu IMC é ${imc} (${classificacao})`;
    setResultado(msg, true);
});

function getClassificacaoImc(imc) {
    const classificacao = [
        'Abaixo do peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade grau 1',
        'Obesidade grau 2',
        'Obesidade grau 3'
    ]

    if (imc >= 39.9) return classificacao[5];
    if (imc >= 34.9) return classificacao[4];
    if (imc >= 29.9) return classificacao[3];
    if (imc >= 24.9) return classificacao[2];
    if (imc >= 18.5) return classificacao[1];
    return classificacao[0];
}

function getImc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}