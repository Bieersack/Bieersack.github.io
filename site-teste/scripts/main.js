let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
 let meuSrc = minhaImagem.getAttribute('src');
 if(meuSrc === 'imagens/aomine-daiki.png') {
  minhaImagem.setAttrbute ('src", 'imagens/aomine-daiki2.png');
 } else {
  minhaImagem.setAttribute ('src" , 'imagens/aomine-daiki.png');
 }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
 let meuNome = prompt('Por favor, digite seu nome.');
 localStorage.setItem('nome', meuNome);
 meuCabecalho.textContent = 'Aomine é o melhor, ' + meuNome;
}

if(!localstorage.getItem('nome')) {
 defineNomeUsuario();
} else {
 let nomeGuardado = localStorage.getItem('nome');
 meuCabecalho.textContent = 'Aomine é o melhor, ' + nomeGuardado;
}

meuBotao.onclick = function() { defineNomeUsuario();
}
