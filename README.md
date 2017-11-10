# Horizon Four - OneCode - TS - RESTFUL API com TypeScript e JWT Auth

<p align="center">
  <img width="150" heigth="150" src="https://horizonfour.com.br/images/logo.svg">
</p>   
Este é o repositório da base de uma API Rest com Hapi.js, Moongoose, JWTAuth e TypeScript, para utilizarmos como base para projetos futuros.                  
**Dúvidas ?** erick.wendel@horizonfour.com.br  

### Status (CICD)

| Branch | Status |
| ------ | ------ |
| master | ? |
| develop | ? |

### Pull Request
Todos os projetos precisam passar code review de pelo menos um membro do time H4.

### Importante!      
**Para construção desse template de API foi utilizado o Git-Crypt, para verificar seu uso, acesse**  
[GitCrypt Tutorial](https://medium.com/trainingcenter/protegendo-dados-sens%C3%ADveis-com-git-crypt-9fca13e6835b).  
**E para acessar esse ambiente entre em contado e solicite a chave** :smile:  


### Principais Dependencias
Esta é a lista com as principais dependencias que o seu projeto deve possuir.

| Tipo | Nome | Link |
| ------ | ------ | ------ |
| Tests/Framework | Mocha | [Mocha](https://mochajs.org) |
| Tests/Runner | ? | - |
| Transpiler | Typescript  | [TS](www.typescriptlang.org) |
| CICD | ? | [SemaphoreCI](https://www.semaphoreci.com) |
| Server | Microsoft Azure (GCP) | [Azure]() |

### Ferramentas
Para que você possa iniciar o desenvolvimento, verifique se você possui todas as ferramentas abaixo com o setup correto em sua máquina.

| Ferramenta | Link |
| ------ | ------ |
| Docker | [Link](https://www.docker.com/) |
| GitFlow | [Link](https://github.com/nvie/gitflow/wiki/Installation) |
| GitCrypt | [Link](https://github.com/AGWA/git-crypt) |
| TSLint | [Link](https://palantir.github.io/tslint/) |
| Airbnb Styleguide | [Link](https://github.com/airbnb/javascript) |
| Prettier | [Link](https://github.com/prettier/prettier) |
| JSDoc | [Link](http://usejsdoc.org) |
| JIRA | [Link](https://horizonfour.atlassian.net/) |


#### Caso cliente externo que não possua Typescript no projeto
| Ferramenta | Link |
| ------ | ------ |
| ESLint | [Link](https://eslint.org) | 


### Dica
 - Adicione as regras de `Linters` (eslint ou tslint) descritas no projeto, no `formatOnSave` do seu editor.
 - Adicione adicione também o prettier e configure no `formatOnSave` para organizar e formatar o seu codigo.

## IMPORTANTE
Nós utilizamos um pipe de CI/CD via [SemaphoreCI.](https://semaphoreci.com/)

O processo de test + build + deploy é realizado de maneira automática pelo CI escolhido. Todo commit no repositório do GitHub é deployado automáticamente, por isso muita atenção na `branch master`.

**Isso aí. Tudo pronto pra construírmos um projeto DO CARALHO! #GOH4**

## Créditos
- Este repositório foi baseado na documentação do [Drafteam](github.com/drafteam)
