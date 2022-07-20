export default interface Fila<T> {
  isVazia(): boolean;
  isCheia(): boolean;
  getTamanho(): number;
  adicionarNoFim(valor: T | null): void;
  adicionar(posicao: number, valor: T | null): void;
  limpar(): void;
  removerDoFim(): T | null;
  remover(posicao: number): T | null;
  get(posicao: number): T | null;
  set(posicao: number, valor: T | null): void;
  indice(valor: T | null): number;
  ultimoIndice(valor: T | null): number;
}
