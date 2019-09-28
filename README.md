# Data Lovers

## Índice

* [1. Data Lovers](#1-data-lovers)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Objetivos](#3-objetivos)
* [4. Checklist](#4-checklist)

***

## 1. Data Lovers
Segundo projeto desenvolvido para o Bootcamp Laboratória - SP, Brasil
## 2. Resumo do projeto

Neste projeto construimos uma página web com o tema Pokemón onde é possível visualizar um conjunto de dados 
que se adeque às necessidades de seu usuário.

Permitindo também, filtrá-los, ordená-los e fazer um cálculo.
É um site focado nos jogadores do Pokémon GO, onde possibilita filtragem por tipo, fraquezas e por ovos.


## 3. Objetivos

O objetivo da aplicação é oferecer uma interface intuitiva e divertida que proporcione ao usuário uma ferramenta de pesquisa e consulta e traga informações relevantes sobre os Pokémons para melhor performance no game Pokemon GO.


### Histórias de usuário

Uma vez que entenda a necessidade dos usuários, escreva as [Historias de
Usuario](https://es.wikipedia.org/wiki/Historias_de_usuario) que representem
tudo que o usuário precisa fazer/ver. As **histórias de usuário** devem ser o
resultado de seu processo de investigação/pesquisa de seus usuários.

Não esqueça de incluir a definição de pronto (_definition of done_) e os
critérios de aceitação para cada uma.

Na medida do possível, termine uma história de usuário antes de passar para a
seguinte (cumpra com as definições de pronto + critérios de aceitação).

### Desenho de interface do usuário


#### Protótipo de baixa fidelidade
![](prototipo.jpg)

Durante seu trabalho você deverá fazer e iterar rascunhos de sua solução usando
lápis e papel. Recomendamos que fotografe todas as iterações que fizer, suba
para seu repositório e as mencione no `README.md`.

#### Testes de usabilidade

Durante o desafio você deverá fazer testes de usabilidade com usuários
diferentes, e com base nos resultados desses testes, iterar seus desenhos de
interface. Conte-nos quais problemas de usabilidade você detectou através dos
testes e como os resolveu na proposta final.

### Implementação da interface de usuário (HTML/CSS/JS)

Após desenhar sua interface de usuário, deverá trabalhar na sua implementação.
**Não** é necessário que construa a interface exatamente da mesma forma que
desenhou. Terá um tempo limitado para trabalhar no projeto, então você deve
priorizar as tarefas.

No mínimo, sua implementação deverá:

1. Mostrar os dados em uma interface: pode ser em cards, tabelas, listas, etc.
2. Permitir ao usuário filtrar e ordenar dados;
3. Calcular estatísticas, como média aritmética, máximo ou mínimo de algum
   atributo numérico, ou contar quantas vezes aparece determinada informação,
   por exemplo.
4. Ser _responsivo_, ou seja, deve ser visualizada sem problemas a partir de
   diversos tamanhos de tela: celulares, tablets, notebooks, etc.



## 4. Checklist

* [x] Usar VanillaJS.
* [x] Não utilizar `this`.
* [ ] Passa pelo linter (`npm run pretest`)
* [ ] Passa pelos testes (`npm test`)
* [ ] Testes unitários cobrem um mínimo de 70% de statements, functions,
  lines e branches.
* [ ] Inclui uma _definição de produto_ clara e informativa no `README.md`.
* [ ] Inclui histórias de usuário no `README.md`.
* [ ] Inclui rascunho da solução (protótipo de baixa fidelidade) no
  `README.md`.
* [ ] Inclui uma lista de problemas detectados nos testes de usabilidade no `README.md`.
* [x] UI: Mostra lista/tabela/etc com dados e/ou indicadores.
* [x] UI: Permite ordenar dados por um ou mais campos (asc e desc).
* [x] UI: Permite filtrar dados com base em uma condição.
* [x] UI: É _responsivo_.
