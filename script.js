AOS.init();

let index = 0;
const totalImagens = 6; // Defina o número total de imagens

function mudarImagem(direcao) {
  const imagens = document.querySelector('.imagens-vasco');
  const tamanhoImagem = document.querySelector('.imagens-vasco img').clientWidth;
  
  if (direcao === -1 && index > 0) {
    index--;
  } else if (direcao === 1 && index < totalImagens - 1) {
    index++;
  } else if (direcao === -1 && index === 0) {
    index = totalImagens - 1; // Retorna para a última imagem
  } else if (direcao === 1 && index === totalImagens - 1) {
    index = 0; // Retorna para a primeira imagem
  }
  
  imagens.style.transform = `translateX(${-tamanhoImagem * index}px)`;
}

document.addEventListener('DOMContentLoaded', function () {
  var meuCarrossel = new bootstrap.carrossel(document.getElementById('meuCarrossel'), {
    interval: 50000, // Tempo padrão entre as transições (em milissegundos)
  });

  // Adicionar um delay de 2 segundos antes de iniciar a próxima transição
  meuCarrossel._config.interval += 2000;
  
  // Adicionar evento 'slide.bs.carrossel' para controlar a mudança de slide
  document.getElementById('meuCarrossel').addEventListener('slide.bs.carrossel', function (event) {
    if (event.direction === "left") {
      mudarImagem(1); // Avança para o próximo slide
    } else if (event.direction === "right") {
      mudarImagem(-1); // Retrocede para o slide anterior
    }
  });
  
  // Iniciar o carrossel
  meuCarrossel.cycle();
});



