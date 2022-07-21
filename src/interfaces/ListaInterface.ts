import Colecao from './Colecao';

export default interface Fila<T> extends Colecao<T> {
  getTamanho(): number;
  adiciona(posicao: number, valor: T | null): void;
  removeDoFim(): T | null;
  remove(posicao: number): T | null;
  get(posicao: number): T | null;
  set(posicao: number, valor: T | null): void;
  indice(valor: T | null): number;
  ultimoIndice(valor: T | null): number;
}
