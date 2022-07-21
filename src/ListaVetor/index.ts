import ListaVetor from './ListaVetor';

const listaVetor = new ListaVetor<string>(10);
for (let i = 0; i < 15; i++) {
  listaVetor.adicionarNoFim(`Item-${i}`);
}

console.log('---Lista Vetor---');
listaVetor.imprimir();

for (let item of listaVetor) {
  console.log('it0->', item);
}

for (let item of listaVetor) {
  console.log('it1->', item);
}

console.log('<', listaVetor.removerAtual());
listaVetor.imprimir();

listaVetor.adicionarNoFim('Item-1');
listaVetor.adicionarNoFim('Item-2');
listaVetor.imprimir();

console.log('#> Item-1', listaVetor.indice('Item-1'));
console.log('#< Item-1', listaVetor.ultimoIndice('Item-1'));
console.log('#> Item-2', listaVetor.indice('Item-2'));
console.log('#< Item-2', listaVetor.ultimoIndice('Item-2'));
console.log('#> Item-6', listaVetor.indice('Item-6'));
console.log('#< Item-6', listaVetor.ultimoIndice('Item-6'));

console.log('<', listaVetor.remover(1));
listaVetor.imprimir();
console.log('<', listaVetor.remover(2));
listaVetor.imprimir();
console.log('<', listaVetor.removerDoFim());
listaVetor.adicionar(0, 'Item-especial-posicao-0');
listaVetor.imprimir();

console.log('posicao 1 =', listaVetor.get(1));
listaVetor.set(1, 'Item-0-alterado');
console.log('posicao 1 =', listaVetor.get(1));
listaVetor.imprimir();
console.log('<', listaVetor.remover(1));
listaVetor.imprimir();
console.log('<', listaVetor.removerDoFim());
console.log('<', listaVetor.removerDoFim());
listaVetor.imprimir();
listaVetor.limpar();
listaVetor.imprimir();
