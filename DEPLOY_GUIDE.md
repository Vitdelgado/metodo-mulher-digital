# 🚀 Guia Completo para Deploy no GitHub Pages

Este guia vai te ajudar a subir sua landing page do Método Mulher no Digital no GitHub Pages de forma simples e rápida.

## 📋 Pré-requisitos

- Conta no GitHub
- Git instalado no seu computador
- Conhecimento básico de Git

## 🎯 Passo a Passo

### 1. Preparar o Repositório Local

Primeiro, vamos garantir que todos os arquivos estejam prontos:

```bash
# Verificar se todos os arquivos estão presentes
ls -la
```

Você deve ver:
- ✅ `index.html` (página principal)
- ✅ `static/` (pasta com CSS, JS e imagens)
- ✅ `README.md` (documentação)
- ✅ `.gitignore` (arquivos a ignorar)

### 2. Inicializar o Git (se ainda não foi feito)

```bash
# Inicializar repositório Git
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Initial commit: Landing page Método Mulher no Digital"
```

### 3. Criar Repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Clique em **"New repository"** (botão verde)
3. Configure o repositório:
   - **Repository name**: `metodo-mulher-digital` (ou o nome que preferir)
   - **Description**: "Landing page do Método Mulher no Digital"
   - **Public** (importante para GitHub Pages)
   - **NÃO** inicialize com README (já temos um)
4. Clique em **"Create repository"**

### 4. Conectar Repositório Local ao GitHub

```bash
# Adicionar o repositório remoto (substitua USERNAME pelo seu usuário)
git remote add origin https://github.com/USERNAME/metodo-mulher-digital.git

# Enviar o código para o GitHub
git branch -M main
git push -u origin main
```

### 5. Ativar GitHub Pages

1. No seu repositório no GitHub, vá para **Settings**
2. Role até a seção **Pages** (no menu lateral esquerdo)
3. Em **Source**, selecione **"Deploy from a branch"**
4. Em **Branch**, selecione **main** e pasta **/ (root)**
5. Clique em **Save**

### 6. Aguardar o Deploy

- O GitHub vai processar seu site
- Você verá uma mensagem: "Your site is published at https://USERNAME.github.io/metodo-mulher-digital"
- Pode levar alguns minutos para ficar disponível

## 🔧 Configurações Adicionais

### Personalizar URL (Opcional)

Se quiser um domínio personalizado:

1. Em **Settings > Pages**
2. Em **Custom domain**, digite seu domínio
3. Salve
4. Configure DNS no seu provedor de domínio

### Configurar HTTPS

O GitHub Pages já vem com HTTPS por padrão, mas você pode verificar em:
- **Settings > Pages > Enforce HTTPS** (deve estar marcado)

## 🧪 Testando o Site

### Localmente
```bash
# Abrir o arquivo no navegador
open index.html
```

### No GitHub Pages
1. Acesse a URL fornecida pelo GitHub
2. Teste em diferentes dispositivos
3. Verifique se todos os links funcionam

## 📊 Monitoramento

### Verificar Deploy
- Vá em **Actions** no seu repositório
- Você verá o histórico de deploys

### Analytics (Opcional)
Para adicionar Google Analytics:

1. Crie uma conta no Google Analytics
2. Adicione o código de tracking no `<head>` do `index.html`

## 🐛 Solução de Problemas

### Site não aparece
- Verifique se o repositório é público
- Aguarde alguns minutos
- Verifique se não há erros no código

### Imagens não carregam
- Verifique se os caminhos estão corretos
- Use caminhos relativos: `static/images/arquivo.jpg`

### CSS não aplica
- Verifique se o arquivo `style.css` está na pasta `static/css/`
- Limpe o cache do navegador

## 🚀 Próximos Passos

### Otimizações Recomendadas

1. **Performance**
   - Comprimir imagens
   - Minificar CSS e JS
   - Usar CDN para bibliotecas

2. **SEO**
   - Adicionar meta tags
   - Configurar sitemap
   - Otimizar para mobile

3. **Analytics**
   - Google Analytics
   - Facebook Pixel
   - Hotjar (para heatmaps)

### Integrações Futuras

- Formulário de captura de leads
- Integração com plataforma de pagamento
- Chat de suporte
- Pop-up de newsletter

## 📞 Suporte

Se encontrar problemas:

1. Verifique os logs em **Actions**
2. Teste localmente primeiro
3. Consulte a [documentação do GitHub Pages](https://docs.github.com/en/pages)

---

**🎉 Parabéns! Sua landing page está no ar!**

Agora você pode compartilhar o link com seus clientes e começar a capturar leads para o Método Mulher no Digital. 