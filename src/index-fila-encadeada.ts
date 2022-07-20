import FilaEncadeada from './FilaEncadeada/FilaEncadeada';

const filaEncadeada = new FilaEncadeada<string>();
for (let i = 0; i < 5; i++) {
  filaEncadeada.adicionar(`Item-${i}`);
}

console.log('---Fila Encadeada---');
filaEncadeada.imprimir();
console.log('<', filaEncadeada.remover());
console.log('<', filaEncadeada.remover());
console.log('<', filaEncadeada.remover());
filaEncadeada.imprimir();
filaEncadeada.adicionar('Item-especial');
filaEncadeada.imprimir();
filaEncadeada.limpar();
filaEncadeada.imprimir();
