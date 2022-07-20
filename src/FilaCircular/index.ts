import FilaCircular from './FilaCircular';

const filaCircular = new FilaCircular<string>(10);
for (let i = 0; i < 5; i++) {
  filaCircular.adicionar(`Item-${i}`);
}

console.log('---Fila Circular---');
filaCircular.imprimir();
console.log('<', filaCircular.remover());
console.log('<', filaCircular.remover());
console.log('<', filaCircular.remover());
filaCircular.imprimir();
filaCircular.adicionar('Item-especial');
filaCircular.imprimir();
console.log('<', filaCircular.remover());
filaCircular.imprimir();
filaCircular.limpar();
filaCircular.imprimir();
