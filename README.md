# Tia Ká Hospedagem Pet - Landing Page

Uma landing page profissional desenvolvida em Angular 17+ para a empresa Tia Ká Hospedagem Pet, especializada em hospedagem, banho e tosa de pets.

## 🎨 Características do Design

- **Paleta de Cores**: Baseada na identidade visual da marca
  - Azul Turquesa Principal: #20B2AA
  - Azul Turquesa Claro: #40E0D0
  - Marrom Acolhedor: #D2B48C
  - Tons neutros: Branco, bege e cinza

- **Tipografia**: 
  - Títulos: Poppins (Google Fonts)
  - Textos: Open Sans (Google Fonts)

- **Responsividade**: Totalmente responsiva para desktop, tablet e mobile

## 📱 Seções da Landing Page

1. **Hero Section**: Apresentação principal com logo, título impactante e CTAs
2. **Sobre Nós**: Estatísticas e informações sobre a empresa
3. **Serviços**: Cards detalhados dos serviços oferecidos
4. **Diferenciais**: Pontos fortes da empresa
5. **Depoimentos**: Avaliações de clientes satisfeitos
6. **Galeria**: Fotos dos pets e instalações
7. **Contato**: Formulário funcional integrado com WhatsApp

## 🚀 Funcionalidades

- **Formulário de Contato**: Integração direta com WhatsApp
- **Design Responsivo**: Adaptação automática para todos os dispositivos
- **Animações Suaves**: Efeitos de hover e transições
- **SEO Otimizado**: Meta tags e estrutura semântica
- **Performance**: Build otimizado para produção

## 🛠️ Tecnologias Utilizadas

- **Angular 17+**: Framework principal
- **TypeScript**: Linguagem de programação
- **SCSS**: Pré-processador CSS
- **Server-Side Rendering (SSR)**: Para melhor SEO
- **Google Fonts**: Tipografia profissional

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Passos para executar

1. **Clone ou extraia o projeto**
```bash
cd tia-ka-landing
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute em modo de desenvolvimento**
```bash
npm start
```
A aplicação estará disponível em `http://localhost:4200`

4. **Build para produção**
```bash
npm run build
```
Os arquivos de produção estarão na pasta `dist/`

## 📁 Estrutura do Projeto

```
tia-ka-landing/
├── src/
│   ├── app/
│   │   ├── app.component.html    # Template principal
│   │   ├── app.component.scss    # Estilos do componente
│   │   ├── app.component.ts      # Lógica do componente
│   │   └── ...
│   ├── assets/
│   │   ├── imagenspetshop.png    # Logo da empresa
│   │   └── search_images/        # Imagens da galeria
│   ├── styles.scss               # Estilos globais
│   └── index.html               # HTML principal
├── package.json
└── README.md
```

## 🎯 Personalização

### Alterando Informações de Contato

Edite o arquivo `src/app/app.component.html` e `src/app/app.component.ts`:

- **Telefone**: Altere `(11) 99999-9999` para seu número
- **E-mail**: Altere `contato@tiaka.com.br` para seu e-mail
- **Endereço**: Modifique as informações de localização
- **WhatsApp**: Atualize o número no código TypeScript

### Alterando Cores

Modifique as variáveis CSS em `src/styles.scss`:

```scss
:root {
  --primary-turquoise: #20B2AA;
  --light-turquoise: #40E0D0;
  --warm-brown: #D2B48C;
  // ... outras cores
}
```

### Adicionando/Removendo Imagens

- Substitua as imagens na pasta `src/assets/`
- Atualize as referências no HTML conforme necessário

## 📱 Integração WhatsApp

O formulário de contato está configurado para enviar mensagens diretamente para o WhatsApp. Para personalizar:

1. Abra `src/app/app.component.ts`
2. Localize a função `createWhatsAppMessage()`
3. Altere o número do WhatsApp na URL: `https://wa.me/5511999999999`

## 🌐 Deploy

### Opções de Deploy

1. **Vercel** (Recomendado para Angular)
2. **Netlify**
3. **Firebase Hosting**
4. **GitHub Pages**

### Deploy no Vercel

1. Instale a CLI do Vercel: `npm i -g vercel`
2. Execute: `vercel`
3. Siga as instruções na tela

## 📞 Suporte

Para dúvidas ou suporte técnico, entre em contato através dos canais disponíveis na landing page.

## 📄 Licença

Este projeto foi desenvolvido especificamente para a Tia Ká Hospedagem Pet.

---

**Desenvolvido com ❤️ para cuidar melhor dos nossos pets!**

