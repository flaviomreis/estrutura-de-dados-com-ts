import Fila from '../interfaces/FilaInterface';

export default class FilaCircular<T> implements Fila<T> {
  private base = 0;
  private topo = -1;

  private dados: T[] | null[];

  constructor(private tamanho: number) {
    this.dados = new Array<T>(tamanho);
  }

  private mover(posicao: number): number {
    return posicao + 1 === this.dados.length ? 0 : posicao + 1;
  }

  imprimir() {
    if (!this.isVazia()) {
      let indice = this.base;
      while (true) {
        console.log(this.dados[indice]);
        if (indice === this.topo) {
          break;
        }
        indice = this.mover(indice);
      }
    }
    console.log('---');
  }

  adicionar(valor: T | null): void {
    if (this.isCheia()) {
      throw new Error('Fila cheia.');
    }

    this.topo = this.mover(this.topo);
    this.dados[this.topo] = valor;
  }

  remover(): T | null {
    if (this.isVazia()) {
      throw new Error('Fila vazia.');
    }

    const dado = this.dados[this.base];
    if (this.base === this.topo) {
      this.limpar();
    } else {
      // this.dados[this.base] = null;
      this.base = this.mover(this.base);
    }

    return dado;
  }

  isCheia(): boolean {
    return !this.isVazia() && this.mover(this.topo) === this.base;
  }

  isVazia(): boolean {
    return this.topo === -1;
  }

  limpar(): void {
    this.base = 0;
    this.topo = -1;
  }
}
