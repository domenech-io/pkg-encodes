# Encodes 
Package with util functions to encode/decode numbers

# Install 
```cmd
npm install encodes@domenech-io
```
# Usage 
```js
import {Letterize} from "encodes"
import {Numerize} from "encodes"

console.log(Letterize.From(26)); // Outputs "AA"
console.log(Letterize.From(701)); // Outputs "AAA"
console.log(Numerize.From("A")); // Outputs "AAA"
console.log(Numerize.From("AA")); // Outputs "AAA"

```

