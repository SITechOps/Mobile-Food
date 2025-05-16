# 📱 Mobile-Food

## 🚀 Sobre o Projeto

**Mobile-Food** é uma aplicação móvel desenvolvida com **React Native** que permite aos restaurantes gerenciarem seus produtos através de um CRUD simples.

## 💻 Tecnologias Utilizadas

- ⚛️ React Native
- 🌬️ NativeWind (Tailwind CSS para React Native)
- 📦 Expo
- 🟦 TypeScript

## ⚙️ Instalação e Configuração

### ✅ Pré-requisitos

- 🧩 Node.js (versão 14 ou superior)
- 📦 npm ou yarn
- 📱 Aplicativo **Expo Go** no celular

### 🛠️ Criação do Projeto

O projeto foi criado utilizando o comando:

```bash
npx create-expo-app --template
```

Na etapa de escolha do template, foi selecionado:

```
» Navigation (TypeScript)
```

A instalação e configuração do NativeWind foi feita conforme descrito na documentação oficial:

🔗 [Guia de instalação do NativeWind v2](https://v2.nativewind.dev/getting-started/installation)

## ▶️ Executando o Projeto

Para iniciar o projeto em ambiente de desenvolvimento:

```bash
npm start --clear
```

ou

```bash
npx expo start --clear
```

- `--clear`: Limpa o cache, garantindo um ambiente mais "limpo" ao iniciar o app. 🧹

### 📲 Testando no seu Celular com QR Code

Para testar o aplicativo diretamente no seu dispositivo móvel:

1. Certifique-se de ter o aplicativo **Expo Go** instalado no seu celular

   - [Download para Android na Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - [Download para iOS na App Store](https://apps.apple.com/app/expo-go/id982107779)

2. Ao iniciar o projeto no terminal, um QR Code será exibido:

   - **Android**: Abra o app Expo Go e escaneie o QR Code diretamente pelo app
   - **iOS**: Use a câmera do iPhone para escanear o QR Code, que abrirá automaticamente o app Expo Go

3. O aplicativo será carregado no seu dispositivo e você poderá testá-lo em tempo real

⚠️ **Importante**: Seu celular e computador devem estar conectados na mesma rede Wi-Fi para que o aplicativo funcione corretamente.

### 📱 Rodando no Emulador

Para executar no emulador **Android Studio**:

```bash
npm start --android
```

Para executar no emulador **iOS** (Xcode):

```bash
npm start --ios
```

## 🧾 Funcionalidades Básicas

A aplicação implementa um CRUD simples para gerenciamento de produtos aos donos de restaurante:

- ➕ Cadastro de produtos
- 🔎 Visualização e busca de produtos
- ✏️ Atualização de produtos
- 🗑️ Exclusão de produtos

## 📚 Recursos Adicionais

- [Documentação oficial do NativeWind](https://www.nativewind.dev/docs/overview)
- [Documentação do React Native](https://reactnative.dev/docs/getting-started)
- [Guia do Tailwind CSS](https://tailwindcss.com/docs)
