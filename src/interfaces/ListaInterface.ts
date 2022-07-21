import Colecao from './Colecao';

export default interface Fila<T> extends Colecao<T> {
  getTamanho(): number;
  adicionar(posicao: number, valor: T | null): void;
  removerDoFim(): T | null;
  remover(posicao: number): T | null;
  get(posicao: number): T | null;
  set(posicao: number, valor: T | null): void;
  indice(valor: T | null): number;
  ultimoIndice(valor: T | null): number;
}
