// Crie um projeto com dois arquivos: index.html e script.js. No arquivo 'index' insira apenas a estrutura base HTML e a tag script para conectar o arquivo HTML com o arquivo de extensão JavaScript.

// Usando os conceitos aprendidos nesse módulo, e sem alterar o arquivo index.html, adicione um título simples ao site com o id 'titulo', e um elemento que represente um produto à venda. O produto precisa incluir pelo menos o nome, a descrição e o preço. Pode incluir outros "elementos filhos" se achar necessário como, por exemplo, uma imagem. Procure usar o método simples e o método complexo, ensinados neste tópico.

//Adicionando um título
const titulo = document.createElement('h1');
titulo.id = 'titulo';
titulo.textContent = 'Loja de tecnologia';
document.body.appendChild(titulo);

//Colocando o produto
const produto = document.createElement('div');
produto.id = 'produto';
produto.style.border = '1px solid #ccc';
produto.style.padding = '16px';
produto.style.marginTop = '16px';
produto.style.borderRadius = '8px';
produto.style.maxWidth = '400px';

const nome = document.createElement('h2');
nome.textContent = 'Monitor UltraWide';
nome.style.color = '#333';

const descricao = document.createElement('p');
descricao.textContent = 'Monitor com tela UltraWide de 34 polegadas, ideal para multitarefas e edição de vídeos.';
descricao.style.color = '#555';

descricao.style.margin = '8px 0';

const preco = document.createElement('span');
preco.textContent = 'R$ 2.199,00';
preco.style.fontWeight = 'bold';
preco.style.display = 'block';
preco.style.marginTop = '8px';

const imagem = document.createElement('img');
imagem.src = 'https://www.lg.com/content/dam/channel/wcms/br/images/monitores/md05992456/gallery/desktop_01.jpg';
imagem.alt = 'Imagem do Monitor UltraWide';
imagem.style.width = '100%';
imagem.style.borderRadius = '8px';

// Adicionando os elementos filhos ao produto
produto.appendChild(imagem);
produto.appendChild(nome);
produto.appendChild(descricao);
produto.appendChild(preco);

// Adicionando o produto ao body
document.body.appendChild(produto);

