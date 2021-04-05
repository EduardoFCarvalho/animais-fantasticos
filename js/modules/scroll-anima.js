export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6; //faz com que a animação comece no meio da tela ao invés de no topo.

    this.checkDistance = this.checkDistance.bind(this);
  }

  // O getDistance e checkDistance são uma otimização para que ao invés do caso anterior que as distâncias estavam sempre sendo atualizadas, agora o único valor que muda é o do scroll melhorando a performance.

  // Pega a distância de cada item
  // Em relação ao topo do site
  getDistance() {
    //Desestrutura para virar Array para poder usar o map, para poder pegar o retorno
    this.distance = [...this.sections].map((section) => {
      // offsetTop pega a distancia fixa do item até o topo da página.
      const offset = section.offsetTop;
      return {
        element: section,
        // Math.floor só pra arredondar os valores de offset mas funciona sem
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  // Verifica a distancia em cada objeto
  // em relação ao scroll do site
  checkDistance() {
    this.distance.forEach((item) => {
      // pageYOffset é a referencia do posicionamento do scroll
      if (window.pageYOffset > item.offset) {
        // o item.element é a section
        item.element.classList.add("ativo");
      } else if (item.element.classList.contains("ativo")) {
        item.element.classList.remove("ativo");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      // Para ativar logo de inicio e o que tiver na página já ser carregado
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  // remove o event de Scroll
  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
