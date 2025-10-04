# 🛒 E-Commerce - Landing Page

Uma landing page moderna e responsiva para e-commerce, desenvolvida com HTML5, CSS3 e JavaScript puro.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Demonstração](#demonstração)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar](#como-executar)
- [Funcionalidades Implementadas](#funcionalidades-implementadas)
- [Próximas Melhorias](#próximas-melhorias)
- [Contribuindo](#contribuindo)
- [Licença](#licença)
- [Contato](#contato)

## 🎯 Sobre o Projeto

Este projeto é uma landing page completa para e-commerce, apresentando um produto (MacBook Pro 2020) com todas as informações necessárias para compra, incluindo avaliações, preços, descontos e um formulário de informações para checkout.

## 🖼️ Demonstração

![E-Commerce Preview](./preview.png)

> **Nota**: Adicione uma screenshot do projeto na pasta raiz com o nome `preview.png`

## ✨ Funcionalidades

- ✅ Interface moderna e intuitiva
- ✅ Sistema de avaliação por estrelas (5.0)
- ✅ Exibição de preços com desconto
- ✅ Seletor de cor do produto
- ✅ Formulário de informações do cliente
- ✅ Busca automática de endereço via CEP (ViaCEP API)
- ✅ Validação de campos obrigatórios
- ✅ Rodapé com informações da empresa e redes sociais
- ✅ Design responsivo

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização e layouts
  - CSS Grid
  - Flexbox
  - CSS Variables (Custom Properties)
- **JavaScript (ES6+)** - Funcionalidades interativas
- **ViaCEP API** - Busca automática de endereço

## 📁 Estrutura do Projeto

```
e-commerce/
│
├── index.html
├── README.md
│
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── logo.svg
│   │       ├── notebook.svg
│   │       ├── star.svg
│   │       └── social-icons-*.svg
│   │
│   ├── styles/
│   │   ├── global.css
│   │   └── style.css
│   │
│   └── js/
│       └── script.js
│
└── preview.png (adicionar)
```

## 💻 Como Executar

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code, Sublime, etc.) - opcional

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/e-commerce-landing-page.git
```

2. Navegue até o diretório do projeto
```bash
cd e-commerce-landing-page
```

3. Abra o arquivo `index.html` no navegador
```bash
# No VS Code com Live Server
# Clique com botão direito em index.html > Open with Live Server

# Ou simplesmente abra o arquivo diretamente no navegador
```

## 🎨 Funcionalidades Implementadas

### 1. Header Navegável
- Logo da empresa
- Menu de navegação
- Botão de Login

### 2. Produto em Destaque
- Imagem do produto
- Sistema de avaliação (5 estrelas)
- Nome e descrição do produto
- Preço original e com desconto
- Percentual de desconto destacado
- Seletor de cores
- Botão "Adicionar ao Carrinho"

### 3. Formulário de Informações
- Nome Completo
- CPF
- CEP (com busca automática)
- Endereço completo (Rua, Número, Complemento)
- Bairro e Estado (preenchimento automático)
- E-mail
- Validação de campos obrigatórios

### 4. Rodapé Profissional
- Informações da empresa
- Menu alternativo
- Contatos telefônicos
- Endereço físico
- Links para redes sociais

## 🎨 Paleta de Cores

```css
--color-primary: #B0CB1F      /* Verde principal */
--color-secondary: #3C0506    /* Vermelho escuro */
--color-info: #2DA5F3          /* Azul informativo */
--color-black: #252B42         /* Preto texto */
--color-yellow: #EFD33D        /* Amarelo destaque */
--color-gray: #77878F          /* Cinza médio */
--color-gray-claro: #B1B5B8    /* Cinza claro */
--color-orange: #FA8232        /* Laranja */
--color-white: #FFFFFF         /* Branco */
```

## 📝 Próximas Melhorias

- [ ] Implementar responsividade completa para mobile
- [ ] Adicionar carrinho de compras funcional
- [ ] Integrar sistema de pagamento
- [ ] Adicionar mais produtos
- [ ] Implementar filtros de busca
- [ ] Sistema de login/cadastro
- [ ] Painel administrativo
- [ ] Integração com backend

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 👨‍💻 Autor

Desenvolvido com 💚 por Eduardo Falabella

