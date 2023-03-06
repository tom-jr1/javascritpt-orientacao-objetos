# Atributos/propriedade Privada

Em nosso sistema queremos que o saldo da conta seja alterado apenas pelos métodos que definirmos de saque e
deposito. Assim podemos aplicar as regras que desejarmos para que não seja realizados transações de formas
indesejadas como por exemplo um deposito de -100 ou um saque acima do valor existente em extrato e etc.
 Para que isso seja possivel precisamos adicionar os métodos na class e privar o atributo de saldo, para que 
assim seja impossivel alterar diretamente esse atributo.
Sintaxe de um att private:

~~~ javascript
class ClassName {
#att1, //a cerqui esta definindo o att como privado
#att2,
#att3,
}
~~~

com essa definição fica restrito a  alteração fora da propria class.

