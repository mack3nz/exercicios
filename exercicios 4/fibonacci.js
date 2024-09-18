// fibonacci
let a = 0;
let b = 1;
let termo = 1;

console.log(`Termo ${termo}: ${a}`);

while (termo < 10) {
  let proxtermo = a + b;
  a = b;
  b = proxtermo;
  termo++;

  console.log(`Termo ${termo}: ${b}`);
}