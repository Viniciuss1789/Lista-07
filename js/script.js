const btnEx01 = document.querySelector("#ex01")
const btnEx02 = document.querySelector("#ex02")
const btnEx03 = document.querySelector("#ex03")
const btnEx04 = document.querySelector("#ex04")
const btnEx05 = document.querySelector("#ex05")
const btnEx06 = document.querySelector("#ex06")
const btnEx07 = document.querySelector("#ex07")
const btnEx08 = document.querySelector("#ex08")
const btnEx09 = document.querySelector("#ex09")
const btnEx10 = document.querySelector("#ex10")
const btnEx11 = document.querySelector("#ex11")
const btnEx12 = document.querySelector("#ex12")
const btnEx13 = document.querySelector("#ex13")
const btnEx14 = document.querySelector("#ex14")
const btnEx15 = document.querySelector("#ex15")

function ex01() {
    let matriz = [];

    for (let i = 0; i < 3; i++) {
        matriz[i] = [];
        for (let j = 0; j < 3; j++) {
            matriz[i][j] = Number(prompt(`Matriz[${i}][${j}]:`));
        }
    }

    console.log(matriz);

}
btnEx01.addEventListener('click', ex01)

function ex02() {
    let soma = 0;

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            soma += Number(prompt(`Matriz[${i}][${j}]:`));
        }
    }

    console.log("Soma =", soma);

}
btnEx02.addEventListener('click', ex02)

function ex03() {
    let matriz = [];
    let soma = 0;

    for (let i = 0; i < 3; i++) {
        matriz[i] = [];
        for (let j = 0; j < 3; j++) {
            matriz[i][j] = Number(prompt(`Matriz[${i}][${j}]:`));
            if (i === j) soma += matriz[i][j];
        }
    }

    console.log("Soma da diagonal principal =", soma);

}
btnEx03.addEventListener('click', ex03)

function ex04() {
    let A = [], B = [], C = [];

    for (let i = 0; i < 2; i++) {
        A[i] = [];
        B[i] = [];
        C[i] = [];
        for (let j = 0; j < 2; j++) {
            A[i][j] = Number(prompt(`A[${i}][${j}]:`));
            B[i][j] = Number(prompt(`B[${i}][${j}]:`));
            C[i][j] = A[i][j] + B[i][j];
        }
    }

    console.log("Soma das matrizes:");
    console.log(C);

}
btnEx04.addEventListener('click', ex04)

function ex05() {
    let maior = -Infinity;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let n = Number(prompt(`Matriz[${i}][${j}]:`));
            if (n > maior) maior = n;
        }
    }

    console.log("Maior valor =", maior);

}
btnEx05.addEventListener('click', ex05)

function ex06() {
}
btnEx06.addEventListener('click', ex06)

function ex07() {
}
btnEx07.addEventListener('click', ex07)

function ex08() {
}
btnEx08.addEventListener('click', ex08)

function ex09() {
}
btnEx09.addEventListener('click', ex09)

function ex10() {
}
btnEx10.addEventListener('click', ex10)

function ex11() {
}
btnEx11.addEventListener('click', ex11)

function ex12() {
}
btnEx12.addEventListener('click', ex12)

function ex13() {
}
btnEx13.addEventListener('click', ex13)

function ex14() {
}
btnEx14.addEventListener('click', ex14)

function ex15() {
}
btnEx15.addEventListener('click', ex15)