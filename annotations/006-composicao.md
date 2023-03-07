# Composição
Nesta aula iremos fazer com que a class Cliente seja uma composição de ContaCorrente.
Como se da isso. Queremos que ContaCorrente tenha seu cliente assim como tem seu saldo e agencia. Então dessa
forma podemos adicionar uma property que seja um cliente na class ContaCorrente. Assim podemos ter um vinculo
de composição. Uma Cliente compões ContaCorrente

~~~javascript
export class ContaCorrente {
    agencia;
    saldo;
    cliente;
    
    //more codes
}
~~~

