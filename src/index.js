class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valorSaque) {
        const saldoValid = this.saldo > 0;
        const valorSaqueValid = valorSaque <= this.saldo;

        if (saldoValid && valorSaqueValid) {
            this.saldo -= valorSaque;
        } else {
            console.log(!saldoValid ? 'Sem saldo' : 'Saldo insuficiente');
        }
    }
}
const cliente01 =  new Cliente();
cliente01.nome = 'Naruto';
cliente01.cpf = '22368897411';

const contaCorrente01 =  new ContaCorrente();
contaCorrente01.agencia = '2001';
contaCorrente01.saldo = 100.0;

const cliente02 =  new Cliente();
cliente02.nome = 'Sakura';
cliente02.cpf = '44568879986';

contaCorrente02 =  new ContaCorrente();
contaCorrente02.agencia = '2001';
contaCorrente02.saldo = 0.0;

contaCorrente01.sacar(100);
console.log(contaCorrente01)
