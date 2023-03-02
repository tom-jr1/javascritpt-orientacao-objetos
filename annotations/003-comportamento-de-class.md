# Comportamento de class

Nesta aula criaremos uma nova class para representar nossos objetos que representam uma ContaCorrente. Uma
conta corrente a principio tem as prpriedades de agencia e saldo. Dados que estavam na class Cliente. Mas pensado
em coesao é possivel perceber que a class pessoa fica incoesa com esses dados, e faz mais sentido que uma conta 
corrente tenha esses dados. 
Sendo assim removeremos essas duas prperties de Cliente e a adicionaremos em ContaCorrente

## Métodos
O prof de cara não explica o que método. Mas em uma breve explicação podemos dizer que métodos são comportamento
que adicionamos em uma class expecifica. Quando temos um codeblock que pode se repetir em nossos codigos e faz 
sentido a alguma class que criamos, lá adicionamos o método.

Depois dessa explicação vamos criar um método chamado sacar. No qual terá a regra de saque, caso o saldo for igual
a zero ou o valor de saque for maior que o saldo, a operação não é realizada.

Métodos podem ter args. nesse teremos um arg que é o valorDoSaque

~~~ javascript
class ContaCorrente {
    //attributes
    agencia;
    saldo;
    
    //methods
    sacar(valorSaque) {
    if (this.saldo > 0 && valorSaque > this.saldo) {
        this.saldo -= valorSaque;
     }
    }
}
~~~

note que usamos uma keyword chamada __this__ essa keyword estamos usando para referenciar o proprio objeto
no caso o objeto que invocar esse metodo ira usar o seu saldo nessa operação. 
