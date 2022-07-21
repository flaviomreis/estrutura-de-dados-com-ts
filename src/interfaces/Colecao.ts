export default interface Colecao<T> extends Iterable<T | null> {
  limpa(): void;
  adicionaNoFim(valor: T | null): void;
  isVazia(): boolean;
  isCheia(): boolean;
}
