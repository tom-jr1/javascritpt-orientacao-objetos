
export class ContaCorrente {
    agencia;
    #saldo;

    constructor() {
        this.#saldo = 0.0;
    }
    sacar(valorSaque) {
        const saldoValid = this.#saldo > 0;
        const valorSaqueValid = valorSaque <= this.#saldo;

        if (saldoValid && valorSaqueValid) {
            this.#saldo -= valorSaque;
            return valorSaque;
        } else {
            console.log(!saldoValid ? 'Sem saldo' : 'Saldo insuficiente');
        }
    }

    depositar (valor) {
        const valorInvalido = valor <= 0;
        if (valorInvalido) {
            console.log(`valor invalido ${valor}`)
        } else {
            this.#saldo += valor;
        }
    }

    toString () {
        console.log(this);
    }

}
