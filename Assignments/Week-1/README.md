# Week 1 – JavaScript Assignments

> **Student ID:** 24EG105J32
> **Repository:** [ATP_24EG105J32](https://github.com/abhii66/ATP_24EG105J32)

---

## 📁 Folder Structure

```
Week-1/
├── program1.js   → Find the biggest of 2 numbers
├── program2.js   → Find the biggest of 3 numbers
├── program3.js   → Sum of an array
├── program4.js   → Minimum element of an array
├── program5.js   → Biggest of 3 numbers using a function & ternary operator
├── program6.js   → Sum of an array using a function
├── program7.js   → Linear search in an array
└── day2.js       → Array of objects – insert, delete, and update operations
```

---

## 📝 Programs Overview

### `program1.js` – Biggest of 2 Numbers
Compares two numbers using an `if-else` condition and prints the larger one.

```js
let a = 10, b = 20;
// Uses conditional (if-else) to find the bigger number
```

---

### `program2.js` – Biggest of 3 Numbers
Extends the comparison to three numbers using `if-else if-else` with compound conditions (`&&`).

```js
let a = 10, b = 20, c = 13;
// Uses if-else if-else to determine the largest
```

---

### `program3.js` – Sum of an Array
Iterates through an array using a `for` loop and accumulates the total sum.

```js
let marks = [90, 78, 65, 98];
// Output: sum of the array is 331
```

---

### `program4.js` – Minimum Element of an Array
Finds the minimum value in an array by comparing each element against a running minimum.

```js
let marks = [90, 78, 65, 98];
// Output: minimum element is 65.
```

---

### `program5.js` – Biggest of 3 Numbers (Function + Ternary)
Refactors the biggest-of-3 logic into a reusable function using **nested ternary operators**.

```js
function biggest(a, b, c) { ... }
biggest(10, 30, 20); // Output: 30 is biggest number.
```

---

### `program6.js` – Sum of Array (Function)
Wraps the array summation logic in a function for reusability.

```js
function sumOfArray(exampleArray) { ... }
sumOfArray([10, 30, 20]); // Output: 60 is sum of the Array.
```

---

### `program7.js` – Linear Search
Implements a linear search function that returns the index of a key if found, or `'not found'`.

```js
function search(exampleArray, key) { ... }
search([10, 20, 30, 50], 30); // Output: 30 found at index 2
```

---

### `day2.js` – Array of Objects (Insert / Delete / Update)
Demonstrates advanced array manipulation on an employee dataset using `splice()` and direct index access.

| Operation | Method Used |
|---|---|
| Insert employee at index 2 | `splice(2, 0, newEmp)` |
| Delete employee by name ("Kiran") | `for...in` loop + `splice(i, 1)` |
| Update a specific mark | Direct index assignment `emp.marks[2] = 75` |

**Employee Structure:**
```js
{ eno: 101, ename: "Ravi", marks: [78, 82, 91] }
```

---

## 🚀 How to Run

Make sure [Node.js](https://nodejs.org/) is installed, then run any file with:

```bash
node program1.js
node day2.js
# etc.
```

---

## 🧠 Concepts Covered

- `if / else if / else` conditionals
- `for` loops and array iteration
- Ternary (`? :`) operator
- Functions – definition, parameters, return values
- Arrays – creation, traversal, `splice()`, index access
- Array of objects – CRUD-style operations
- `console.log` for output

---

## 👤 Author

**Abhishek** | Roll No: `24EG105J32`
GitHub: [@abhii66](https://github.com/abhii66)
