import Lista from '../interfaces/ListaInterface';

export default class ListaEstatica<T> implements Lista<T> {
  private dados: T[] | null[];
  private tamanho: number;
  private atual: number;

  constructor(private readonly capacidade: number) {
    this.dados = new Array<T>(capacidade);
    this.tamanho = 0;
    this.atual = -1;
  }

  hasNext(): boolean {
    return this.atual + 1 < this.tamanho;
  }

  next(): T | null {
    if (!this.hasNext()) {
      throw new Error('Não existe um próximo elemento');
    }
    this.atual++;
    return this.dados[this.atual];
  }

  resetIterator(): void {
    this.atual = -1;
  }

  imprimir(): void {
    for (let i = 0; i < this.tamanho; i++) {
      console.log(this.dados[i]);
    }

    console.log('---');
  }

  isVazia(): boolean {
    return this.tamanho === 0;
  }

  isCheia(): boolean {
    return this.tamanho === this.capacidade;
  }

  getTamanho(): number {
    return this.tamanho;
  }

  adicionarNoFim(valor: T | null): void {
    this.adicionar(this.tamanho, valor);
  }

  adicionar(posicao: number, valor: T | null): void {
    if (this.isCheia()) {
      throw new Error('Lista cheia.');
    }

    if (posicao < 0 || posicao > this.tamanho) {
      throw new Error('Posição inválida.');
    }

    for (let i = this.tamanho - 1; i >= posicao; i--) {
      this.dados[i + 1] = this.dados[i];
    }

    this.dados[posicao] = valor;
    this.tamanho++;
  }

  limpar(): void {
    for (let i = 0; i < this.tamanho; i++) {
      this.dados[i] = null;
    }
    this.tamanho = 0;
  }

  removerDoFim(): T | null {
    return this.remover(this.tamanho - 1);
  }

  removerAtual(): T | null {
    const dado = this.remover(this.atual);
    this.atual--;
    return dado;
  }

  remover(posicao: number): T | null {
    if (posicao < 0 || posicao + 1 > this.tamanho) {
      throw new Error('Posição inválida.');
    }
    const dado = this.dados[posicao];
    for (let i = posicao; i < this.tamanho - 1; i++) {
      this.dados[i] = this.dados[i + 1];
    }

    this.dados[this.tamanho - 1] = null;
    this.tamanho--;

    return dado;
  }

  get(posicao: number): T | null {
    if (posicao < 0 || posicao > this.tamanho) {
      throw new Error('Posição inválida.');
    }

    return this.dados[posicao];
  }

  set(posicao: number, valor: T | null): void {
    if (posicao < 0 || posicao + 1 > this.tamanho) {
      throw new Error('Posição inválida.');
    }

    this.dados[posicao] = valor;
  }

  private iguais(a: T | null, b: T | null): boolean {
    return a === b;
  }

  indice(valor: T | null): number {
    for (let i = 0; i < this.tamanho - 1; i++) {
      if (this.iguais(valor, this.dados[i])) {
        return i;
      }
    }

    return -1;
  }

  ultimoIndice(valor: T | null): number {
    for (let i = this.tamanho - 1; i >= 0; i--) {
      if (this.iguais(valor, this.dados[i])) {
        return i;
      }
    }

    return -1;
  }
}
