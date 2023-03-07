import {Cliente} from "./modules/Cliente.js";
import {ContaCorrente} from "./modules/ContaCorrente.js";

const cliente01 =  new Cliente();
cliente01.nome = 'Naruto';
cliente01.cpf = '22368897411';

const contaCorrente01 =  new ContaCorrente();
contaCorrente01.agencia = '2001';
contaCorrente01.cliente = cliente01;

const cliente02 =  new Cliente();
cliente02.nome = 'Sakura';
cliente02.cpf = '44568879986';

const contaCorrente02 =  new ContaCorrente();
contaCorrente02.agencia = '2001';
contaCorrente02.cliente = cliente02;

contaCorrente01.depositar(1000)
const valorSacado = contaCorrente01.sacar(10);
console.log(valorSacado ? `sacado: R$${valorSacado.toFixed(2)}`:'')
contaCorrente01.toString();
