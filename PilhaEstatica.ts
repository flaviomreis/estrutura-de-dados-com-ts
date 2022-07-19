import Pilha from './PilhaInterface';

export default class PilhaEstatica implements Pilha {
  private dados: number[];
  private topo: number = -1;

  constructor(private readonly tamanho: number) {
    this.dados = new Array(tamanho);
  }

  adicionar(valor: number): void {
    if (this.isCheia()) {
      throw new Error('Pilha cheia.');
    }

    this.topo++;
    this.dados[this.topo] = valor;
  }

  remover(): number {
    if (this.isVazia()) {
      throw new Error('Pilha vazia.');
    }

    const valor = this.dados[this.topo];
    this.dados[this.topo] = 0;
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
    for (let i = 0; i <= this.topo; i++) {
      this.dados[i] = 0;
    }

    this.topo = -1;
  }

  imprimir(): void {
    for (let i = 0; i <= this.topo; i++) {
      console.log(this.dados[i]);
    }
    console.log('---');
  }
}
