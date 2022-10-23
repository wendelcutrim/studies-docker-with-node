# studies-docker-with -node

O intuito deste repositório é colocar em prática como utilizar um projeto node com docker.

## 1o passo: Configuração do Dockerfile
Após criar a estrutura do projeto, será necessário criar o arquivo `Dockerfile` onde devemos inserir algumas configurações.

Exemplo da configuração desse projeto.

```bash
#Exemplo em um projeto node com express

# Imagem de origem
FROM node

# Pasta de trabalho do projeto
WORKDIR /src

# Arquivos que o docker deve copiar do projeto atual para o container, colocamos para coiar o package.json e a pasta src
COPY package.json /src

# Comando que o docker deve executar após copiar os arquivos e montar a imagem do node.
RUN npm i

# Neste comando estamos falando para o docker copiar os demais arquivos que temos na nossa aplicação
COPY . .

## Porta que irá rodar a aplicação
EXPOSE 3000

# Comando que irá iniciaizar a aplicação, não podemos rodar com o run, devemos utilizar o CMD e passar um array
CMD ["node", "/src/app.js"]
```

## 2o passo: Realizar build da imagem
Após criarmos o Dockerfile, será necesário realizar a build da imagem, sendo que será através desta imagem que iremos criar um container.

`⚠️ A cada modificação que realizarmos no código, será necessário realizar um novo build`

## 3o passo: Criar um container da imagem e executá-lo
Após realizar o build da imagem, podemos encontra-la através do comando:

```bash
docker image ls
```

Este comando irá retornar todas as imagens que temos no docker.

![Exemplo do retorno do comando](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F38d7b8be-d468-477f-a232-fdd35db6f11f%2FUntitled.png?table=block&id=0f7e6c9d-9326-4621-9617-8168e5551885&spaceId=941d05d3-58e4-4120-a81a-bce4f7e89867&width=2000&userId=09d9ae56-9799-4537-a5dd-d50783d11a4f&cache=v2)

Podemos copiar o ID da imagem para rodar em um container.

`💡Lembrando que caso o container tenha porta, ao criar o container devemos passar a porta e também podemos dar um nome para este container para que o docker não gere um nome aleatório para ele e ficar mais fácil de entendermos o que é este container`

```bash
docker run -d -p 3000:3000 --name project_api 5be18b1a11ca
```

## Verificar containers que estão em execução

Quando rodamos um container utilizando a flag `-d` o container é rodado em background, isso é bom pois o container não 'trava' o terminal, para saber os containers que estão em execução, basta utilizar o comando:

```bash
docker ps
```

## Parando um container em execução

Primeiro será necessário descobrir o id ou nome do container que deseja parar através do comando `docker ps` e executar o comando:

```bash
docker stop <container name or id>
```
