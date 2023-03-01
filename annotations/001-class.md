# Conceito de class
Nessa aula é apresentado o conceito de class. Que nada mais é que uma forma de abstrair repetições,
separar classes os padroões de forma coesa.

O exmplo apresentado é o de um sistema de Banco. Onde que de forma procedural iriamos criar vairaveis
para cada dado de um cliente. E para cada novo cliente recriariamos campos:

~~~ javascript
const nomeCliente = 'Naruto';
const cpf = '99031146899';

const nomeCliente = 'Sakura';
const cpf = '77926684922';
~~~

Se fossemos abstrair o padrão em uma class fariamos da seguinte forma

~~~  javascript
class Cliente{
const nome;
const cpf;
}
~~~

