import PilhaEstatica from './PilhaEstatica';

const pilhaEstatica = new PilhaEstatica(10);
for (let i = 0; i < 5; i++) {
  pilhaEstatica.adicionar(i);
}
console.log('---Pilha Estática---');
pilhaEstatica.imprimir();
console.log('<', pilhaEstatica.remover());
console.log('<', pilhaEstatica.remover());
pilhaEstatica.imprimir();
pilhaEstatica.limpar();
pilhaEstatica.imprimir();
