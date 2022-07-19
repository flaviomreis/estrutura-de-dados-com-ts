export default interface Fila<T> {
  adicionar(valor: T | null): void;
  remover(): T | null;
  isCheia(): boolean;
  isVazia(): boolean;
  limpar(): void;
}
