export default interface Pilha<T> {
  adicionar(valor: T): void;
  remover(): T;
  isCheia(): boolean;
  isVazia(): boolean;
  limpar(): void;
}
