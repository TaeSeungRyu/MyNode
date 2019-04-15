const { range } = require('rxjs');
const { map, filter } = require('rxjs/operators');
 
range(1, 100).pipe(
  filter(x => x % 2 === 1),
  map(x => x + x)
).subscribe(x => console.log(x));

console.log(1234);
