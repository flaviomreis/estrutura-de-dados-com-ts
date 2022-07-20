import Pilha from '../interfaces/PilhaInterface';

export default class PilhaEstatica<T> implements Pilha<T> {
  private dados: T[];
  private topo: number = -1;

  constructor(private readonly tamanho: number) {
    this.dados = new Array(tamanho);
  }

  adicionar(valor: T): void {
    if (this.isCheia()) {
      throw new Error('Pilha cheia.');
    }

    this.topo++;
    this.dados[this.topo] = valor;
  }

  remover(): T {
    if (this.isVazia()) {
      throw new Error('Pilha vazia.');
    }

    const valor = this.dados[this.topo];
    this.topo = this.topo - 1;

    return valor;
  }

  isCheia(): boolean {
    return this.topo == this.dados.length - 1;
  }

  isVazia(): boolean {
    return this.topo == -1;
  }

  limpar(): void {
    this.topo = -1;
  }

  imprimir(): void {
    for (let i = 0; i <= this.topo; i++) {
      console.log(this.dados[i]);
    }
    console.log('---');
  }
}
