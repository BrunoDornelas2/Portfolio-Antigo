//Criar palavras na tela com click
addEventListener('click', function(event){
    const localProibido = ['img','h1','section'];
    if (localProibido.includes(event.target.tagName.toLowerCase())|| event.target.closest('section')){
        return;
    }
    const words = ['Developer', 'Front-End', 'Biologist', 'Python', 'JavaScript', 'Arduino', 'LAN','Figma', 'Computer Maintenance', 'Software Installer'];
    const randomWord = words[Math.floor(Math.random()*words.length)];
    const palavra = document.createElement('div');
    palavra.className = 'text';
    palavra.innerHTML = randomWord;
    palavra.style.left = `${event.pageX-20}px`;
    palavra.style.top = `${event.pageY-10}px`;
    document.body.appendChild(palavra);
    setTimeout(
        function (){
            palavra.style.opacity = 1;
        }, 0 
    );
    setTimeout(
        function (){
            palavra.remove();
        }, 2000
    );
});
//mover cursor
document.addEventListener('DOMContentLoaded', function() {
let mouse = document.querySelector('#cursor');
let replace = document.querySelector('#sessao1')
document.onmousemove = function(e){
    mouse.style.top = e.pageY + 'px';
    mouse.style.left = e.pageX + 'px';
    //gerador de letras
    let letras = document.createElement('div');
    letras.className = 'letras';
    replace.prepend(letras);
    letras.style.position = 'absolute';
    letras.style.left = e.pageX + 'px';
    letras.style.top = e.pageY-30 + 'px';

    setTimeout(function(){
        let particula = document.querySelectorAll('.letras')[0],
        directionX = Math.random() < .5 ? -1 : 1,
        directionY = Math.random() < .5 ? -1 : 1

        particula.style.left = parseInt(particula.style.left) + (directionX * (Math.random()* 250)) + 'px';
        particula.style.top = parseInt(particula.style.top) + (directionY * (Math.random()* 250)) + 'px';
        letras.style.opacity = 0;
        letras.style.transform = 'scale(0.25)';
        letras.innerHTML = randomLetras();
        //remover letras
        setTimeout(function(){
            letras.remove()
        },1000)
    },10)
}
function randomLetras(){
    var words = ("abcdefghijklmnopqrstuvwxyz").split
    ("");
    letter = words[Math.floor(Math.random()* words.length)];
    return letter;
}
});
//Movimento da onda
document.addEventListener('DOMContentLoaded', function () {
const projetosSessao = document.getElementById("sessao2");
const animacaoLiquido = x => {
    const liquido = document.createElement('div');
    liquido.className = "liquido";
    liquido.style.left=`${x}px`;
    projetosSessao.appendChild(liquido);
    setTimeout(() => {
    liquido.classList.add('desaparecer');
    }, 10);
    setTimeout(()=> projetosSessao.removeChild(liquido), 2000);
}
window.onmousemove = e => animacaoLiquido(e.clientX);
});
//parar animação
let projeto = document.getElementsByClassName("projeto");
function pauseAll() {
    for (let i = 0; i < projeto.length; i++) {
      projeto[i].style.animationPlayState = "paused";
    }
  }
  
  function resumeAll() {
    for (let i = 0; i < projeto.length; i++) {
      projeto[i].style.animationPlayState = "running";
    }
  }