const navbar = document.querySelector(".navbar");
let lastScrollTop = 0;

window.addEventListener(
  "scroll",
  () => {
    console.log("scroll");
    var { scrollY } = window;
    if (scrollY > lastScrollTop) {
      navbar.classList.remove("visible");
    } else if (scrollY < lastScrollTop) {
      navbar.classList.add("visible");
    }
    lastScrollTop = scrollY <= 0 ? 0 : scrollY;
  },
  { passive: true }
);


const sobre = document.querySelector('#sobre-mim');
const portifolio = document.querySelector('#portifolio');
const formacao = document.querySelector('#formacao');
const contato = document.querySelector('#contato');
const secaoSobre = document.querySelector('#secao-sobre');
const secaoFormacao = document.querySelector('#secao-formacao');
const secaoContato = document.querySelector('#secao-contato');
const secaoPortifolio = document.querySelector('#secao-portifolio');


sobre.addEventListener('click', () => {
  secaoSobre.scrollIntoView({ behavior: 'smooth' });
});
formacao.addEventListener('click', () => {
  secaoFormacao.scrollIntoView({ behavior: 'smooth' });
});
contato.addEventListener('click', () => {
  secaoContato.scrollIntoView({ behavior: 'smooth' });
});
portifolio.addEventListener('click', () => {
  secaoPortifolio.scrollIntoView({ behavior: 'smooth' });
});