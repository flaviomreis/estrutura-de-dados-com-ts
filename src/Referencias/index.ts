class No<T> {
  public anterior: No<T> | null = null;
  public dado: T | null = null;
  public proximo: No<T> | null = null;
}

let no1: No<string> | null = new No<string>();
no1.dado = '1';

let no2: No<string> | null = new No<string>();
no2.dado = '2';

let no3: No<string> | null = new No<string>();
no3.dado = '3';

no2.anterior = no1;
no2.proximo = no3;

let no4: No<string> | null = new No<string>();
no4.dado = '4';

console.log(no2.anterior.dado);
console.log(no2.dado);
console.log(no2.proximo.dado);
console.log('---');

let temp: No<string> | null = no2;
temp.dado = 'temp';

console.log(no2.anterior.dado);
console.log(no2.dado);
console.log(no2.proximo.dado);
console.log('---');

no2 = no4;
no2.anterior = temp.anterior;
no2.proximo = temp.proximo;

console.log(no2.anterior?.dado);
console.log(no2.dado);
console.log(no2.proximo?.dado);
console.log('---');
