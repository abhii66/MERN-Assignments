# Week 2 - JavaScript Array Methods, OOP, Spread/Rest, Modules & REST API

This repository covers four major JavaScript topics practiced through hands-on assignments, along with an introduction to building REST APIs with Express.js.

---

## 1. Array Higher-Order Functions (`arrayfunctions/`)

Five real-world scenarios practicing `filter()`, `map()`, `reduce()`, `find()`, and `findIndex()` on arrays of objects.

| File | Scenario |
|------|----------|
| `shoppingCart.js` | Filter in-stock items, calculate total price, find a product |
| `student.js` | Filter passing students, assign grades (A/B/C/D), calculate average |
| `payroll.js` | Filter by department, compute net salary with 10% bonus, total payout |
| `avengers.js` | Filter by genre, format title+rating string, find movie by name |
| `bank.js` | Filter credits, extract amounts, calculate final balance |

Key methods used:
```js
array.filter((item) => condition)
array.map((item) => ({ ...item, newField: value }))
array.reduce((acc, item) => acc + item.value, 0)
array.find((item) => item.name === "X")
array.findIndex((item) => item.id === id)
```

---

## 2. Object-Oriented Programming (`week2_object/bookclass.js`)

Built a `Book` class to manage a library system.

**Properties:** `title`, `author`, `pages`, `isAvailable` (default: `true`)

**Methods:**
- `borrow()` — sets `isAvailable` to `false`
- `returnBook()` — sets `isAvailable` to `true`
- `getInfo()` — returns a formatted string: `"Title by Author (N pages)"`
- `isLongBook()` — returns `true` if pages > 300

**Operations performed:**
- Displayed info for all 5 books using `getInfo()`
- Borrowed 2 books and verified availability status
- Returned 1 book and confirmed status update
- Counted long books using `isLongBook()`
- Listed all currently available books

```js
class Book {
    constructor(title, author, pages) { this.isAvailable = true; ... }
    borrow() { this.isAvailable = false; }
    getInfo() { return `${this.title} by ${this.author} (${this.pages} pages)`; }
}
```

---

## 3. Spread, Rest, Copying & Timers (`week2_spread/`)

### `spread.js` — Spread Operator
Copying and extending arrays and objects without mutating the original.

```js
let moreFruits = [...fruits, "orange"];         // array spread
let updatedUser = { ...user, age: 25 };         // object spread
```

### `copys.js` — Shallow vs Deep Copy
Demonstrates the difference between shallow copy (using spread) and deep copy (using `structuredClone`).

- **Shallow copy:** nested objects are still shared — changing `preferences.theme` in the copy also changes the original.
- **Deep copy:** `structuredClone(obj)` creates a fully independent clone — changes to nested fields don't affect the original.

```js
const copyUser = { ...user };                   // shallow copy
const corder = structuredClone(order);          // deep copy
```

### `restpara.js` — Rest Parameters
A `sum()` function that accepts any number of arguments using the `...` rest syntax.

```js
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
```

### `timer.js` — Async Timers
Two simulations using `setTimeout` and `setInterval`:

- **Exam portal:** shows "Submitted" immediately, "Evaluating…" after 2s, "Result: Pass" after 4s.
- **OTP countdown:** prints a 10-second countdown using `setInterval`, then clears itself with `clearInterval`.

```js
setTimeout(() => console.log("Evaluating answers.."), 2000);
let timer = setInterval(() => { if (--s === 0) clearInterval(timer); }, 1000);
```

---

## 4. ES Modules (`todo_module/`)

A simple Todo app split across three files to practice the `import`/`export` module system.

- **`validation.js`** — Exports `validateTitle` (min 3 chars), `validatePriority` (low/medium/high), `validateDueDate`
- **`task.js`** — Imports validators; exports `addTask`, `getAllTasks`, `completeTask`. Tasks stored in an in-memory array.
- **`app.js`** — Entry point; adds tasks, displays them, marks one complete, and displays again.

```js
// validation.js
export { validateTitle, validatePriority, validateDueDate }

// task.js
import { validateTitle, validatePriority, validateDueDate } from './validation.js'
export function addTask(title, priority, dueDate) { ... }
```

---

## 5. REST API with Express.js (`product rest api/`)

An in-memory REST API built with Express.js, split into two separate apps on different ports.

**`server.js`** — Creates two Express instances, registers custom middleware functions that log to the console, and mounts the routers.

| App | Port | Router |
|-----|------|--------|
| User API | 6767 | `/users-api` → `userApi.js` |
| Product API | 2525 | `/products-api` → `productapi.js` |

**`userapi.js`** — Full CRUD for users stored in an in-memory array:

| Method | Route | Action |
|--------|-------|--------|
| GET | `/users` | Get all users |
| GET | `/users/:id` | Get user by ID |
| POST | `/users` | Add new user |
| PUT | `/users` | Update user by ID |
| DELETE | `/users/:id` | Delete user by ID |

**`productapi.js`** — Similar CRUD routes for products at `/products`.

```js
userApp.get('/users/:id', (req, res) => {
    let user = users.find(u => u.id === Number(req.params.id));
    if (!user) return res.json({ msg: "user not found" });
    res.json({ msg: "a user", payload: user });
});
```

---

## Concepts Covered

- Array higher-order functions: `filter`, `map`, `reduce`, `find`, `findIndex`
- ES6 Classes, constructors, and instance methods
- Spread operator for arrays and objects
- Shallow copy vs deep copy (`structuredClone`)
- Rest parameters (`...args`)
- Async timers: `setTimeout`, `setInterval`, `clearInterval`
- ES Modules: `import` / `export`
- Express.js: routing, middleware, `Router`, request params and body
