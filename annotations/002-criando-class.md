# Criando class
Para criar uma class é necessario informar seu nome precedido da keyword __class__
~~~ javascript
class Cliente {
}
~~~

Então podemos adicionar suas propriedades. Que são os campos que abstrairemos dos padrões no codigo
procedural

~~~ javascript
class Cliente {
nome;
cpf;
agencia;
saldo;
}
~~~

Para criarmos um novo objeto Js a partir da class Cliente(molde) utilizamos a keyword __new__.
E executaremos o método construtor, que será explicado futuramente.

~~~ javascript
new Cliente();
~~~
esse ato criará um novo obejeto na memoria do computado, porem o mesmo não teremos como acessar suas 
propriedades (nome, cpf, agencia, saldo) por que não temos uma variavel que o referencie e assim possamos 
manipular as properties. Então atribuiremos a execução do construtor a uma var.

~~~ javascript
const client01 = new Cliente();
~~~

pronto, agora podemos manipular nosso objeto criado a partir da class Cliente. Lembrando que caso não atri-
buirmos valores as properties as mesmas começaram com valores __undefined__.

podemos acessar atributos e popular das tais forma

~~~ javascript
client01.nome = 'Naruto';
//ou
client01['nome'] = 'Naruto';
~~~

Quando adicionarmos uma nova property na class Pessoa. Todos os objetos receberam essa property tbm. O que
deixa o uso de class super dinamico e extensivo. Lembrando que o valor inicial será undefined. A não
ser que na class for definido um default value. Mas será explicado tbm futuramente.



