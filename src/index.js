class Cliente {
    nome;
    cpf;
    agencia;
    saldo
}

const cliente01 =  new Cliente();
cliente01.nome = 'Naruto';
cliente01.cpf = '22368897411';
cliente01.agencia = '2001';
cliente01.saldo = 0.0;

const cliente02 =  new Cliente();
cliente02.nome = 'Sakura';
cliente02.cpf = '44568879986';
cliente02.agencia = '2001';
cliente02.saldo = 0.0;

console.log(cliente01, cliente02);
