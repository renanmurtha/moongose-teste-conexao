# Teste de Conexão com MongoDB usando Mongoose

Este projeto tem como objetivo testar a conexão com o MongoDB utilizando Mongoose, demonstrando operações básicas e o uso de variáveis de ambiente para a configuração.

## Funcionalidades

- Conexão ao MongoDB (local ou Atlas).
- Operações básicas utilizando Mongoose.
- Configuração simplificada via arquivo .env.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada).
- [MongoDB](https://www.mongodb.com/) (local ou na nuvem).
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/).

## Instalação e Configuração

1. Clone este repositório:
```bash
git clone https://github.com/renanmurtha/moongose-teste-conexao.git
cd moongose-teste-conexao
```

2. Instale as dependências:
```bash
npm install
```

3. Renomear o arquivo **.env_exemplo** para **.env** na raiz do projeto, e configure as variáveis de ambiente. Exemplo de conteúdo:

```bash
MONGO_DB_URI=`mongodb://user:password@ip:27017/`
MONGO_DB_URI_ATLAS=`mongodb+srv://<username>:<password>@cluster0.7zv8z.mongodb.net/`
MONGO_DB_NAME=`teste_crud`
MONGO_DB_COLLECTION_NAME=`teste_crud_user`
MONGO_DB_PORT=27017
MONGO_DB_CLOUD_ATLAS=false

# Se utilizar MongoDB Atlas, configure a variável MONGO_DB_URI_ATLAS corretamnete.
# Mude variavel MONGO_DB_CLOUD_ATLAS para true. MONGO_DB_CLOUD_ATLAS=true
# Se utilizar MongoDB em HomeLab ou Servidor, configure a variável MONGO_DB_URI corretamnete.
```

4. Deletar usuário criado ao fim da excução do programa

Em app.js, a variável shouldDeleteUser controla se o usuário será deletado.
- true → Usuário será deletado.
- false → Usuário não será deletado.

## Executando o Projeto

Inicie a aplicação com:
```bash
npm run start
```

## Área de Copiar e Colar

Você pode copiar e colar os comandos abaixo diretamente no terminal (cmd ou PowerShell):

```bash
git clone https://github.com/renanmurtha/moongose-teste-conexao.git

cd moongose-teste-conexao

npm install

copy .env_exemplo .env 
  # ou crie manualmente o arquivo .env com as configurações necessárias
npm run start
```

## Estrutura do Projeto

```
.
├── app.js
├── config
│   ├── database.js
│   └── env.js
├── .env_exemplo
├── package.json
└── README.md
```

## Extra

Para criar um usuário no MongoDB, você pode seguir os passos abaixo:

## Comandos executados no console no MongoCompass
  ```bash
      mongo -u admin

      # Acesse ao banco, mesmo nome que nome que esta na variavel MONGO_DB_NAME em .env

      use teste_crud

      # Em user, escolha o nome do usuário da aplicação, neste exemplo será: teste_crud 
      # Em pwd, troque "youPass" e coloque uma senha mais forte
      # As regras para este usuário, será readWrite, que server para fazer o crud

      db.createUser({user: "teste_crud",pwd: "youPass",roles: ["readWrite"]})
      
      # O primeiro "teste_crud", é o nome do usuário mude caso no comando anterior tenha mudado o nome do usuário
      # O segundo, que esta em db, muda para o mesmo que esta na varivel MONGO_DB_NAME em .env

      db.grantRolesToUser("teste_crud",[{ role: "readWrite", db: "teste_crud" }])
  ```

## Licença

Este projeto está licenciado sob a Licença MIT.