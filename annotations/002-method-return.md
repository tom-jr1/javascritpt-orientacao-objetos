# Method Return

metodos podem ter retorno. O que quero dizer com isso?
Quando executamos um método de qualquer class, estamos definindo um codeBlock que sera executado assim que
for invocado por um objeto criado a partir da class em questão. Esse code block pode retornar um valor. Do tipo
que quisermos que retorne. E para recebermos esse retorno basta uma variavel para recebe-la de acordo com o tipo
de retorno que definimos

~~~javascript
export class ClassName {
property1;
property2;
property3;

method1() {
return 'Hello World!'; //irá retorna um tipo string
}

}
~~~

Recebendo o retorno do metodo

~~~javascript
const obj = new ClassName();
const message = obj.method1();
console.log(message);
~~~


Vamos adicionar na class ContaCorrente um retorno quando sacarmos. O retorno será um number que representa o 
valor sacado apos a transação. Mas o retorno sera undefined caso não for sucesso a transação
