const fotos = ["foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg","foto5.jpg","foto6.jpg","foto7.jpg","foto8.jpg","foto9.jpg"];
let indiceAtual = 0;
let slideInterval;

function iniciarSlideShow() {
  mostrarFoto();
  atualizarPontos();
  slideInterval = setInterval(proximo, 5000);
}

function mostrarFoto() {
  document.getElementById("slide").src = fotos[indiceAtual];
  atualizarPontos();
}

function proximo() {
  indiceAtual = (indiceAtual + 1) % fotos.length;
  mostrarFoto();
  resetInterval();
}

function anterior() {
  indiceAtual = (indiceAtual - 1 + fotos.length) % fotos.length;
  mostrarFoto();
  resetInterval();
}

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(proximo, 5000);
}

function atualizarPontos() {
  const dotsContainer = document.querySelector('.dots-container');
  dotsContainer.innerHTML = '';
  
  fotos.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if(index === indiceAtual) dot.classList.add('active');
    dot.addEventListener('click', () => {
      indiceAtual = index;
      mostrarFoto();
      resetInterval();
    });
    dotsContainer.appendChild(dot);
  });
}

window.onload = iniciarSlideShow;
// Adicione no final do arquivo
document.addEventListener('DOMContentLoaded', function() {
  const memoriasSection = document.querySelector('.memorias');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  memoriasSection.style.opacity = 0;
  memoriasSection.style.transform = 'translateY(20px)';
  memoriasSection.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  
  observer.observe(memoriasSection);
});

// Configuração da data de nascimento (ANO-MÊS-DIA)
const dataNascimento = new Date('1999-04-07'); // SUBSTITUA PELA SUA DATA

function atualizarContador() {
  const agora = new Date();
  const diferenca = agora - dataNascimento;
  
  // Cálculos precisos
  const segundosTotal = Math.floor(diferenca / 1000);
  const minutosTotal = Math.floor(segundosTotal / 60);
  const horasTotal = Math.floor(minutosTotal / 60);
  const diasTotal = Math.floor(horasTotal / 24);
  
  // Anos considerando anos bissextos
  let anos = dataNascimento.getFullYear();
  let meses = agora.getMonth() - dataNascimento.getMonth();
  let dias = agora.getDate() - dataNascimento.getDate();
  
  if (dias < 0) {
    meses--;
    // Último dia do mês anterior
    const ultimoDiaMes = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
    dias += ultimoDiaMes;
  }
  
  if (meses < 0) {
    anos--;
    meses += 12;
  }
  
  anos = agora.getFullYear() - dataNascimento.getFullYear();
  if (agora.getMonth() < dataNascimento.getMonth() || 
      (agora.getMonth() === dataNascimento.getMonth() && agora.getDate() < dataNascimento.getDate())) {
    anos--;
  }
  
  // Atualiza os elementos
  document.getElementById('anos').textContent = anos;
  document.getElementById('meses').textContent = meses;
  document.getElementById('dias').textContent = dias;
  document.getElementById('horas').textContent = agora.getHours();
  document.getElementById('minutos').textContent = agora.getMinutes();
  document.getElementById('segundos').textContent = agora.getSeconds();
}

// Atualiza a cada segundo
setInterval(atualizarContador, 1000);

// Inicia imediatamente
atualizarContador();

// Configuração do Slideshow de Memórias
const fotosMemorias = ["memoria1.jpg", "memoria2.jpg", "memoria4.jpg", "memoria5.jpg", "memoria6.jpg", "memoria3.jpg",
  "memoria8.jpg","memoria9.jpg","memoria10.jpg","memoria11.jpg","memoria12.jpg"]; // Adicione mais se quiser
let indiceMemorias = 0;
let intervaloMemorias;

function iniciarSlideshowMemorias() {
  mostrarMemoria();
  atualizarPontosMemorias();
  intervaloMemorias = setInterval(proximaMemoria, 5000);
}

function mostrarMemoria() {
  const slide = document.getElementById('slide-memorias');
  if (slide) {
    slide.src = fotosMemorias[indiceMemorias];
    slide.alt = `Memória ${indiceMemorias + 1}`;
  }
  atualizarPontosMemorias();
}

function proximaMemoria() {
  indiceMemorias = (indiceMemorias + 1) % fotosMemorias.length;
  mostrarMemoria();
  resetIntervalMemorias();
}

function anteriorMemoria() {
  indiceMemorias = (indiceMemorias - 1 + fotosMemorias.length) % fotosMemorias.length;
  mostrarMemoria();
  resetIntervalMemorias();
}

function resetIntervalMemorias() {
  clearInterval(intervaloMemorias);
  intervaloMemorias = setInterval(proximaMemoria, 5000);
}

function atualizarPontosMemorias() {
  const dotsContainer = document.querySelector('.dots-container-memorias');
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    
    fotosMemorias.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (index === indiceMemorias) dot.classList.add('active');
      dot.addEventListener('click', () => {
        indiceMemorias = index;
        mostrarMemoria();
        resetIntervalMemorias();
      });
      dotsContainer.appendChild(dot);
    });
  }
}

// Inicia quando a página carrega
window.addEventListener('DOMContentLoaded', () => {
  iniciarSlideshowMemorias();
});

function criarChuvaDeCoracoes() {
  const ceu = document.getElementById('ceu-estrelado');
  
  // Limpa o céu antes de criar novos corações
  ceu.innerHTML = '';
  
  // Cria estrelas de fundo
  for (let i = 0; i < 100; i++) {
    const estrela = document.createElement('div');
    estrela.style.position = 'absolute';
    estrela.style.width = `${Math.random() * 3}px`;
    estrela.style.height = estrela.style.width;
    estrela.style.backgroundColor = 'white';
    estrela.style.borderRadius = '50%';
    estrela.style.left = `${Math.random() * 100}%`;
    estrela.style.top = `${Math.random() * 100}%`;
    estrela.style.opacity = Math.random();
    estrela.style.animation = `piscar ${5 + Math.random() * 5}s infinite`;
    ceu.appendChild(estrela);
  }

  // Cria corações caindo
  setInterval(() => {
    const coracao = document.createElement('div');
    coracao.className = 'coracao';
    
    // Configurações aleatórias
    const tamanho = 15 + Math.random() * 15;
    const duracao = 5 + Math.random() * 10;
    const atraso = Math.random() * 5;
    const esquerda = Math.random() * 100;
    
    coracao.style.width = `${tamanho}px`;
    coracao.style.height = `${tamanho}px`;
    coracao.style.left = `${esquerda}%`;
    coracao.style.animationDuration = `${duracao}s`;
    coracao.style.animationDelay = `${atraso}s`;
    
    ceu.appendChild(coracao);
    
    // Remove após animação
    setTimeout(() => {
      coracao.remove();
    }, duracao * 1000);
  }, 300);
}

// Adicione esta animação de piscar no CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes piscar {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 1; }
  }
`;
document.head.appendChild(style);

// Inicia quando a página carrega
window.addEventListener('load', criarChuvaDeCoracoes);