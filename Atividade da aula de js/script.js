//capture os quatro elementos criados, e use a propriedade .innerText para adicionar conteúdo textual aos elementos 'h1' e 'a', e a propriedade .innerHTML para adicionar três itens simples na lista não ordenada, e três itens com links para outros sites na lista ordenada.

const titulo = document.getElementById("titulo");

titulo.innerText = 'Título principal';

const elementoA = document.getElementById('a');
elementoA.innerText = 'Proz - educação';

const elementoUL = document.getElementById('lista-nao-ordenada');
elementoUL.innerHTML = `
    <li> Elemento 1 </li>
    <li> Elemento 2 </li>
    <li> Elemento 3 </li>
`;

const elementoOL = document.getElementById('lista-ordenada');
elementoOL.innerHTML = `
    <li><a href="https://www.globo.com/">GLOBO</li>
    <li><a href="https://www.youtube.com/watch?v=OYPbr6ZG3pc">Youtube Curso de JS</li>
    <li><a href="https://www.instagram.com/?hl=en">Instagram</li>
`


