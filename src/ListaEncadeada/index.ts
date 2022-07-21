import ListaEncadeada from './ListaEncadeada';

const lista = new ListaEncadeada<string>();

lista.adiciona(0, 'Item-0');
lista.imprime();
lista.adiciona(1, 'Item-1');
lista.imprime();
lista.adicionaNoFim('Item-2');
lista.imprime();
lista.adiciona(0, 'Novo-Item-0');
lista.imprime();
lista.adiciona(3, 'Item-3');
lista.imprime();
lista.adiciona(5, 'Item-5');
lista.imprime();

try {
  lista.adiciona(7, 'Item-7');
} catch (error) {
  if (error instanceof Error) {
    console.log('!!!', error.message);
  }
}
lista.imprime();

console.log('<', lista.remove(1));
lista.imprime();

try {
  lista.remove(5);
} catch (error) {
  if (error instanceof Error) {
    console.log('!!!', error.message);
  }
}
lista.imprime();

console.log('<', lista.removeDoFim());
lista.imprime();

console.log('<', lista.removeDoFim());
console.log('<', lista.removeDoFim());
console.log('<', lista.removeDoFim());
console.log('<', lista.removeDoFim());
lista.imprime();
try {
  lista.removeDoFim();
} catch (error) {
  if (error instanceof Error) {
    console.log('!!!', error.message);
  }
}
lista.imprime();

lista.limpa();
for (let i = 0; i < 1500; i++) {
  lista.adicionaNoFim(`Item-${i}`);
}
for (let i = 0; i < 1500; i++) {
  lista.adicionaNoFim(`Item-${i}`);
}

console.log('_', lista.indice('Item-1'));
console.log('_', lista.indice('Item-10'));
console.log('_', lista.ultimoIndice('Item-1'));
console.log('_', lista.ultimoIndice('Item-10'));

lista.selectionSort();
// lista.imprime();
