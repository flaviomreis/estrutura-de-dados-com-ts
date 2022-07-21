import Lista from '../interfaces/ListaInterface';

class No<T> {
  public dado: T | null = null;
  public anterior: No<T> | null = null;
  public proximo: No<T> | null = null;
}

export default class ListaEncadeada<T> implements Lista<T | null>, Iterable<T | null> {
  private base: No<T> | null;
  private topo: No<T> | null;
  private tamanho: number;

  constructor() {
    this.tamanho = 0;
    this.base = null;
    this.topo = null;
  }

  // public makeIterable = () => [Symbol.iterator];

  // [Symbol.iterator] = function*(): Generator<T | null> {
    // if (this.base !== null) {
    //   let atual = this.base;
    //   while (true) {
    //     yield atual.dado;
    //     if (atual.proximo === null) {
    //       break;
    //     }
    //     atual = atual.proximo;
    //   }
    // }
  // };

  *[Symbol.iterator](): Generator<T | null> {
    if (this.base !== null) {
      let atual = this.base;
      while (true) {
        yield atual.dado;
        if (atual.proximo === null) {
          break;
        }
        atual = atual.proximo;
      }
    }
  }

  imprimir(): void {
    if (this.base !== null) {
      let atual = this.base;
      while (true) {
        console.log(atual.dado);
        if (atual.proximo === null) {
          break;
        }
        atual = atual.proximo;
      }
    }
    console.log('---');
  }

  isVazia(): boolean {
    return this.tamanho === 0;
  }

  isCheia(): boolean {
    return false;
  }

  getTamanho(): number {
    return this.tamanho;
  }

  adicionarNoFim(valor: T | null): void {
    const novo = new No<T>;
    novo.dado = valor;
    if (this.topo === null) {
      this.base = novo;
    } else {
      this.topo.proximo = novo;
      novo.anterior = this.topo;
    }
    this.topo = novo;
    this.tamanho++;
  }

  private getNo(posicao: number): No<T> {
    this.verificarPosicao(posicao + 1);
    if (this.topo === null || this.base === null) {
      throw new Error('Lista inválida.');
    }
    const meio = Math.floor(this.tamanho / 2);
    if (posicao <= meio) {
      let atual = this.base;
      for (let i = 0; i < posicao; i++) {
        if (atual.proximo !== null) {
          atual = atual.proximo;
        }
      }
      return atual;
    }
    let atual = this.topo;
    for (let i = this.tamanho - 1; i > posicao; i--) {
      if (atual.anterior !== null) {
        atual = atual.anterior;
      }
    }
    return atual;
}

  adicionar(posicao: number, valor: T | null): void {
    this.verificarPosicao(posicao);
    if (posicao === this.tamanho) {
      this.adicionarNoFim(valor);
      return;
    }
    const novo = new No<T>;
    novo.dado = valor;
    const proximo = this.getNo(posicao);
    const anterior = proximo.anterior;
    novo.proximo = proximo;
    novo.anterior = anterior;
    proximo.anterior = novo;
    if (anterior === null) {
      this.base = novo;
    } else {
      anterior.proximo = novo;
    }
    this.tamanho++;
  }

  limpar(): void {
    this.topo = null;
    this.base = null;
    this.tamanho = 0;
  }

  removerDoFim(): T | null {
    if (this.isVazia()) {
      throw new Error('Lista vazia.');
    }
    return this.remover(this.tamanho - 1);
  }

  remover(posicao: number): T | null {
    this.verificarPosicao(posicao + 1);
    const no = this.getNo(posicao);
    const anterior = no.anterior;
    const proximo = no.proximo;
    if (proximo === null) {
      this.topo = anterior;
    } else {
      proximo.anterior = anterior;
    }
    if (anterior === null) {
      this.base = proximo;
    } else {
      anterior.proximo = proximo;
    }
    this.tamanho--;
    const dado = no.dado;
    return dado;
  }

  get(posicao: number): T | null {
    return this.getNo(posicao).dado;
  }

  set(posicao: number, valor: T | null): void {
    this.getNo(posicao).dado = valor;
  }

  indice(valor: T | null): number {
    if (this.base === null) {
      return -1;
    }
    let atual = this.base;
    let indice = 0;
    while (true) {
      if (atual.dado === valor) {
        return indice;
      }
      indice++;
      if (atual.proximo === null) {
        return -1;
      }
      atual = atual.proximo;
    }
  }

  ultimoIndice(valor: T | null): number {
    if (this.topo === null) {
      return -1;
    }
    let atual = this.topo;
    let indice = this.tamanho - 1;
    while (true) {
      if (atual.dado === valor) {
        return indice;
      }
      indice--;
      if (atual.anterior === null) {
        return -1;
      }
      atual = atual.anterior;
    }
  }

  private verificarPosicao(posicao: number): void {
    if (posicao < 0 || posicao > this.tamanho) {
      throw new Error(`# ${posicao} é uma posição inválida.`);
    }
  }
}