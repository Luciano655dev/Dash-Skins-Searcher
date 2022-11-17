# Dash SKins Search
Uma aplicação, com <strong>frontend e backend</strong> que facilita a busca de skins baratas de cs-go!

# Como Instalar:
```
npm start
```
ou
```
node app
```
### Antes, instale as dependências necessárias (puppeteer, express e ejs) com `npm install` ou, de forma mais simples, `npm i`

# Como usar
![image](https://user-images.githubusercontent.com/83819836/202476216-4fcd01f0-9c1c-4eba-9b6a-84f6f06fee98.png)<br>
Primeiramente você irá acessar o link http://localhost:5000/form

![image](https://user-images.githubusercontent.com/83819836/202476496-f612ba3a-c2b0-41c7-ae4e-70b50e930e0f.png)
Quando esta tela abrir, você irá colocar as seguintes informações:
- Em weaponName, você colocará nome da arma que deseja procurar
- Em skinName, você colocará nome da skin da arma que deseja procurar
- em lowestPrice, você colocará o menor preço que quer procurar, ou seja, só aparecerá a skin se ela for abaixo desse preço
Se a pesquisa não retornar nenhum resultado, aparecerá o titulo "Nothing Founded" após a página carregar

![image](https://user-images.githubusercontent.com/83819836/202477302-1ab62981-f411-4d53-b53b-ac663e8fe04c.png)
Depois de carregar, você terá acesso as seguintes informações:
- A imagem da skin
- O nome da arma junto ao nome da skin
- O float
- O preço (em real)
- A foto e o nome dos adesivos (se existirem)

<strong>Nota: a demora para o carregamento é devido ao uso do "puppeteer" na pesquisa, que simula um navegador real</strong>

Obrigado pela atenção!<br>
Sinta-se live para dar sugestões de melhoras, commits ou PRs

Este projeto tambem está disponivel o site https://dashskinsearch-luciano655.netlify.app e no meu portfolio https://luciano655.netlify.app
