import PilhaEncadeada from './PilhaEncadeada';

const pilhaEncadeada = new PilhaEncadeada<string>();
for (let i = 0; i < 5; i++) {
  pilhaEncadeada.adicionar(`Item-${i}`);
}

console.log('---Pilha Encadeada---');
pilhaEncadeada.imprimir();
console.log('<', pilhaEncadeada.remover());
console.log('<', pilhaEncadeada.remover());
console.log('<', pilhaEncadeada.remover());
pilhaEncadeada.imprimir();
pilhaEncadeada.limpar();
pilhaEncadeada.imprimir();
