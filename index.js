const { range } = require('rxjs');
const { map, filter } = require('rxjs/operators');
 
range(1, 100).pipe(
  filter(x => x % 2 === 1),
  map(x => x + x)
).subscribe(x => console.log(x));

var m=1234;
var m2=5678;
console.log( m * m2);


console.log(1234);
console.log(1234);
console.log(1234);
console.log('try to do other commit from reset order')

console.log(1234);
