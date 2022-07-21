export default interface Colecao<T> extends Iterable<T | null> {
  limpar(): void;
  adicionarNoFim(valor: T | null): void;
  isVazia(): boolean;
  isCheia(): boolean;
}
