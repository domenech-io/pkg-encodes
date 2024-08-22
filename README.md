# Encodes 
Package with util functions to encode/decode numbers

# Install 
```cmd
npm install @domenech/encodes
```
# Usage 
```js
import { Letterize, Numerize } from "@domenech/encodes";

console.log(Letterize.From(26)); // Outputs "AA"
console.log(Letterize.From(701)); // Outputs "ZZ"
console.log(Numerize.From("ZZZ")); // Outputs 18277
console.log(Numerize.From("A")); // Outputs 0

```

