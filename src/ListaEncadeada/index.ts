import ListaEncadeada from './ListaEncadeada';

const lista = new ListaEncadeada<string>();

lista.adicionar(0, 'Item-0');
lista.imprimir();
lista.adicionar(1, 'Item-1');
lista.imprimir();
lista.adicionarNoFim('Item-2');
lista.imprimir();
lista.adicionar(0, 'Novo-Item-0');
lista.imprimir();
lista.adicionar(3, 'Item-3');
lista.imprimir();
lista.adicionar(5, 'Item-5');
lista.imprimir();

try {
  lista.adicionar(7, 'Item-7');
} catch (error) {
  if (error instanceof Error) {
    console.log('!!!', error.message);
  }
}
lista.imprimir();

console.log('<', lista.remover(1));
lista.imprimir();

try {
  lista.remover(5);
} catch (error) {
  if (error instanceof Error) {
    console.log('!!!', error.message);
  }
}
lista.imprimir();

console.log('<', lista.removerDoFim());
lista.imprimir();

console.log('<', lista.removerDoFim());
console.log('<', lista.removerDoFim());
console.log('<', lista.removerDoFim());
console.log('<', lista.removerDoFim());
lista.imprimir();
try {
  lista.removerDoFim();
} catch (error) {
  if (error instanceof Error) {
    console.log('!!!', error.message);
  }
}
lista.imprimir();
