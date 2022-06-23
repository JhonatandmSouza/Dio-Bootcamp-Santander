// Como podemos melhorar o esse código usando TS? 

enum Trabalho{
    Atriz,
    Padeiro
}

interface pessoa{nome: string, idade: number, profissao: Trabalho};

let pessoa1: pessoa = {
    nome: "maria",
    idade: 29,
    profissao: Trabalho.Atriz
};

let pessoa2: pessoa = {
    nome: "roberto",
    idade: 19,
    profissao: Trabalho.Padeiro
}


let pessoa3: pessoa = {
    nome: "laura",
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4: pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
};