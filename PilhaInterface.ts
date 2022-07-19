export default interface Pilha {
  adicionar(valor: number): void;
  remover(): number;
  isCheia(): boolean;
  isVazia(): boolean;
  limpar(): void;
}
