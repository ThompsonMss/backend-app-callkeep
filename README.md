## Backend App CallKeep 🖥

---

![haha](https://user-images.githubusercontent.com/71772535/127778916-00303470-29cc-41c2-b5aa-a8bf26d7f987.gif)


## 📝Sumário

- [Descrição](#📖Descrição)
- [Instalação](#📦Instalação)
- [Configurações](#🌇Configurações)
- [Rotas](#⚙Rotas)

##

## 📖Descrição

Essa aplicação tem o propósito de gerenciar as chamadas remotas que o aplicativo _[App CallKeep](https://github.com/thompsons3/app-callkeep)_ consome atráves de notificações silienciosas disparadas pelo Firebase Cloud Messaging. Construído com _NodeJS_ e utilizando _firebase-admin_ para gerir as notificações.

##

## 📦Instalação

Siga os comandos abaixo para instalar essa aplicação em sua máquina.

> ❗ É necessário que você tenha instalado em seu ambiente de desenvolvimento o NodeJS e NPM.

```bash
# Clonando o repositório da aplicação.

git clone https://github.com/thompsons3/backend-app-callkeep.git
```

```bash
# Entrando na pasta da aplicação.

cd backend-app-callkeep/
```

```bash
# Comando para instalar os pacotes necessários da aplicação.

npm i
```

```bash
# Comando para rodar a aplicação.

npm start
```
##

## 🌇Configurações

> 1º Passo

Você precisar ter uma conta no google e criar um projeto no firebase. Você pode está criando aqui: _[Firebase Console](https://console.firebase.google.com/)_.

> 2º Passo

Depois de ter criado o seu projeto, clique em _Visão geral do projeto -> Configurações do projeto -> Contas de serviço._

No menu _SDK Admin do Firebase_ selecione a opção _NodeJS_ e clique em _Gerar nova chave privada_.

Copie o código fornecido pela plataforma do Firebase. Algo parecido com isso:

```javascript
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "SUA DATABASE_URL",
});
```

> 3º Passo

Feito o download dessa chave, cole os dados do arquivo _JSON_ dentro de _src/config/firebase-adminsdk.json_.

O código que você copiou, vai ser colado dentro de _src/remote/firebaseRemote.js_. Cole o código onde estiver o comentário sobre.

##

## ⚙Rotas

> POST - /call - params: token: string

Rota para disparar uma notificação silenciosa para um determinado token.
