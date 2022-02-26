function numbers() {
    let a = (Number(prompt('Digite o primeiro número: ')));
    let b = (Number(prompt('Digite o segundo número: ')));
    let soma;
    let comp10;
    let comp20;

    soma = a + b;

    if (soma > 10 && soma < 20) {
        comp10 = 'maior';
        comp20 = 'menor';
    } else if (soma > 20) { 
        comp10 = 'maior';
        comp20 = 'maior';
    } else if (soma < 10) {
        comp10 = 'menor';
        comp20 = 'menor';
    }


    if (a == b) {
        alert(`Os números ${a} e ${b} são iguais. Sua soma é ${soma}, que é ${comp10} que 10 e ${comp20} que 20.`);
    } else {
        alert(`Os números ${a} e ${b} são diferentes. Sua soma é ${soma}, que é ${comp10} que 10 e ${comp20} que 20.`);
    }



}


numbers();