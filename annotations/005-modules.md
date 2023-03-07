# Modules
Nesta aula iremos introduzir aos modules.
Para qiue seja possivel organizar nossas classes em arquivos diferente precisamos ter acesso as mesmas no arquivo
index.js. Iremos fazer isso por meio dos modules. Module nada mais é que um arquivo JS com codigos que é exportado
para ser usado em outro arquivo. Podendo ser class, iterfaces, enum, methods, etc

A principio vamos separar as class ContaCorrente e Cliente em um modulo separado.
Iremos adicionar a palavra chave __export__ para que o module posso ser importado no index

~~~javascript
export class Cliente {
    //codes
}
~~~


Apos declararmos as class como export, devemos importa-las no index.js

__index.js__
~~~javascript
import {Cliente} from 'path://';
import {ContaCorrente} from 'path://';
~~~

Assim tecnicamente está pronto. Porem será disparado um erro ao tentar executar o code. Pois para que possamos usar o 
ES module(EcmaScript Module) é necessario converter em uma aplicação do tipo module. O recomendado pelo console é que
adicionemos o 'type':'module' no arquivo package.json. Complicou? package.json é uma arquivo de conf de modules JS. Nos 
podemos cria-lo ou usar um comando para criar.

Usaremos o comando do node __npm init__ para iniciar um projeto com o package.json assim quando rodamos o sistema sera
considerado como module caso configurado o type.

## O comando executado no bash perguntara:
- Nome do package(pacote)
- versão
- Descrição
- Entry point: Basicamente estamos apontando o bootstrap do sistema. Como a class main de um projeto
java, no nosso caso é o index.js
- command test: comando de teste por hora não estudaremos isto. Deixaremos vazio.
- git repository: caso exista, adicionamos
- keywords:
- author

Apos isto é apresentado um resumo do package.json
Agora bastar informar o type como module. Então dar run/debug a vontade. Assim teremos o uso de modules em
nosso projeto.
