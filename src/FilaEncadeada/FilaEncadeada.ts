import Fila from '../interfaces/FilaInterface';

class No<T> {
  public dado: T | null = null;
  public proximo: No<T> | null = null;
}

export default class FileEncadeada<T> implements Fila<T> {
  private base: No<T> | null = null;
  private topo: No<T> | null = null;

  imprimir() {
    if (this.base !== null) {
      let indice = this.base;
      while (true) {
        console.log(indice.dado);
        if (indice.proximo === null) {
          break;
        }
        indice = indice.proximo;
      }
    }
    console.log('---');
  }

  adicionar(valor: T | null): void {
    const novo = new No<T>();
    novo.dado = valor;
    if (this.topo === null) {
      this.base = novo;
      this.topo = novo;
    } else {
      this.topo.proximo = novo;
      this.topo = novo;
    }
  }

  remover(): T | null {
    if (this.base !== null) {
      const dado = this.base.dado;
      this.base = this.base.proximo;
      if (this.base === null) {
        this.topo = null;
      }
      return dado;
    } else {
      throw new Error('Fila vazia.');
    }
  }

  isCheia(): boolean {
    return false;
  }

  isVazia(): boolean {
    return this.base === null;
  }

  limpar(): void {
    this.base = null;
    this.topo = null;
  }
}
