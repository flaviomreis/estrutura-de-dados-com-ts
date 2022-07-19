import Pilha from './PilhaInterface';

class No<T> {
  public anterior: No<T> | null = null;
  public dado: T | null = null;
}

export default class PilhaEncadeada<T> implements Pilha<T> {
  private topo: No<T> | null = null;

  adicionar(valor: T | null): void {
    const novo = new No<T>();
    novo.dado = valor;
    novo.anterior = this.topo;
    this.topo = novo;
  }

  imprimir() {
    let no = this.topo;
    while (no !== null) {
      console.log(no.dado);
      no = no.anterior;
    }
    console.log('---');
  }

  remover(): T | null {
    if (this.topo !== null) {
      const dado = this.topo.dado;
      this.topo = this.topo.anterior;
      return dado;
    } else {
      throw new Error('Pilha vazia.');
    }
  }

  isCheia(): boolean {
    return false;
  }

  isVazia(): boolean {
    return this.topo === null;
  }

  limpar(): void {
    this.topo = null;
  }
}
