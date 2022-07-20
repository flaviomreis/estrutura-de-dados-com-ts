import ListaEstatica from './ListaEstatica';

const listaEstatica = new ListaEstatica<string>(10);
for (let i = 0; i < 5; i++) {
  listaEstatica.adicionarNoFim(`Item-${i}`);
}

console.log('---Fila Encadeada---');
listaEstatica.imprimir();

listaEstatica.resetIterator();
console.log('>>', listaEstatica.next());
console.log('>>', listaEstatica.next());
console.log('<', listaEstatica.removerAtual());
listaEstatica.imprimir();
console.log('>>', listaEstatica.next());
console.log('>>', listaEstatica.next());

listaEstatica.adicionarNoFim('Item-1');
listaEstatica.adicionarNoFim('Item-2');
listaEstatica.imprimir();

console.log('#> Item-1', listaEstatica.indice('Item-1'));
console.log('#< Item-1', listaEstatica.ultimoIndice('Item-1'));
console.log('#> Item-2', listaEstatica.indice('Item-2'));
console.log('#< Item-2', listaEstatica.ultimoIndice('Item-2'));
console.log('#> Item-6', listaEstatica.indice('Item-6'));
console.log('#< Item-6', listaEstatica.ultimoIndice('Item-6'));

console.log('<', listaEstatica.remover(1));
listaEstatica.imprimir();
console.log('<', listaEstatica.remover(2));
listaEstatica.imprimir();
console.log('<', listaEstatica.removerDoFim());
listaEstatica.adicionar(0, 'Item-especial-posicao-0');
listaEstatica.imprimir();

console.log('posicao 1 =', listaEstatica.get(1));
listaEstatica.set(1, 'Item-0-alterado');
console.log('posicao 1 =', listaEstatica.get(1));
listaEstatica.imprimir();
console.log('<', listaEstatica.remover(1));
listaEstatica.imprimir();
console.log('<', listaEstatica.removerDoFim());
console.log('<', listaEstatica.removerDoFim());
listaEstatica.imprimir();
listaEstatica.limpar();
listaEstatica.imprimir();
