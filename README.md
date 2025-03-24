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

## Configuração

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

## Observações

- Verifique se o MongoDB está rodando e acessível conforme configurado.
- Para usar o MongoDB Atlas, ajuste as variáveis do arquivo **.env** conforme necessário.

## Licença

Este projeto está licenciado sob a Licença MIT.