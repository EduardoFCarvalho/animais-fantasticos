export default class ScrollSuave {
  //Virou classe e retirou o init, não vai mais iniciar direto
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: "smooth", block: "start" };
    } else {
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind(this); //Como alterei para classe e coloquei this.scrollToSection no addLinkEvent, aquele this passou a ser referente o link e não ao objeto, então retorna undefined e não funciona adequadamente, fazendo a referencia aqui com o .bind, consigo definir a referência que o caso é o this. Isso é fazer o bind da função callback. E com isso mantem a referencia da função para se precisar remover em algum momento conseguir, se usasse função anonima () => {} perderia referencia.
  }

  scrollToSection(event) {
    // deixou de ser função para ser um método
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    //Novo método para adicionar eventos
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", this.scrollToSection);
    });
  }

  init() {
    // Nova função para iniciar
    if (this.linksInternos.length) {
      //para verificar se foi definido valor para links.
      this.addLinkEvent();
    }
    return this; //para não retornar undefined.
  }
}
