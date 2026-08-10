📦 Forma-Li
A lightweight, powerful utility library for TypeScript and JavaScript.

https://badge.fury.io/js/forma-li.svg
https://img.shields.io/badge/License-MIT-yellow.svg
https://img.shields.io/badge/TypeScript-5.5-blue.svg
https://img.shields.io/badge/Tree%2520Shaking-Supported-brightgreen.svg

✨ Features
🚀 Lightweight & Fast - Zero dependencies, minimal bundle size

📦 Universal - Works in browser, Node.js, Next.js, React, and more

🔧 TypeScript First - Full type support with inference

🪓 Tree Shakable - Import only what you need

📚 Comprehensive - Arrays, strings, objects, validation, and utilities

🧪 Fully Tested - Reliable and production-ready

📦 Installation
bash
# npm
npm install forma-li

# yarn
yarn add forma-li

# pnpm
pnpm add forma-li
🚀 Quick Start
typescript
import { 
  chunk,        // Arrays
  capitalize,   // Strings
  pick,         // Objects
  isValidEmail, // Validation
  debounce,     // Utilities
  sleep         // Utilities
} from 'forma-li';

// ============================================
// Array Examples
// ============================================
const numbers = [1, 2, 3, 4, 5];
const chunks = chunk(numbers, 2);
console.log(chunks); // [[1, 2], [3, 4], [5]]

const duplicated = [1, 1, 2, 2, 3];
const uniqueItems = unique(duplicated);
console.log(uniqueItems); // [1, 2, 3]

const users = [
  { id: 1, name: 'Ali', role: 'admin' },
  { id: 2, name: 'Sara', role: 'user' },
  { id: 3, name: 'Mohammad', role: 'admin' }
];
const grouped = groupBy(users, 'role');
console.log(grouped);
// {
//   admin: [{ id: 1, name: 'Ali', role: 'admin' }, { id: 3, name: 'Mohammad', role: 'admin' }],
//   user: [{ id: 2, name: 'Sara', role: 'user' }]
// }

// ============================================
// String Examples
// ============================================
console.log(capitalize('mohammad')); // 'Mohammad'
console.log(slugify('Hello World!')); // 'hello-world'
console.log(truncate('Lorem ipsum dolor sit amet', 10)); // 'Lorem ipsu...'

// ============================================
// Object Examples
// ============================================
const user = { id: 1, name: 'Ali', age: 25, email: 'ali@test.com' };
const picked = pick(user, ['name', 'email']);
console.log(picked); // { name: 'Ali', email: 'ali@test.com' }

const omitted = omit(user, ['age']);
console.log(omitted); // { id: 1, name: 'Ali', email: 'ali@test.com' }

const cloned = deepClone(user);
console.log(cloned === user); // false (deep copy)

// ============================================
// Validation Examples
// ============================================
console.log(isValidEmail('test@example.com')); // true
console.log(isValidEmail('invalid-email')); // false
console.log(isValidPhone('+989123456789')); // true
console.log(isValidUrl('https://example.com')); // true

// ============================================
// Utility Examples
// ============================================
// Debounce
const debouncedSearch = debounce((query: string) => {
  console.log('Searching for:', query);
}, 300);

debouncedSearch('Hello'); // Only the last call executes

// Throttle
const throttledScroll = throttle(() => {
  console.log('Scrolled!');
}, 1000);

// Sleep
async function example() {
  console.log('Start');
  await sleep(2000);
  console.log('After 2 seconds');
}
📚 API Reference
1️⃣ Arrays
Function	Description	Example
chunk<T>(array, size)	Split array into smaller chunks	chunk([1,2,3,4,5], 2) → [[1,2], [3,4], [5]]
unique<T>(array)	Remove duplicate values	unique([1,1,2,2,3]) → [1,2,3]
groupBy<T>(array, key)	Group array by a property	groupBy(users, 'role') → { admin: [...], user: [...] }
2️⃣ Strings
Function	Description	Example
capitalize(str)	Capitalize first letter	capitalize('hello') → 'Hello'
slugify(str)	Convert to URL-friendly slug	slugify('Hello World!') → 'hello-world'
truncate(str, length, suffix)	Truncate string with suffix	truncate('Hello World', 5) → 'Hello...'
3️⃣ Objects
Function	Description	Example
pick<T, K>(obj, keys)	Pick specific properties	pick(user, ['name']) → { name: 'Ali' }
omit<T, K>(obj, keys)	Omit specific properties	omit(user, ['age']) → { id: 1, name: 'Ali' }
deepClone<T>(obj)	Deep clone an object	deepClone(user) → new object
4️⃣ Validation
Function	Description	Example
isValidEmail(email)	Validate email format	isValidEmail('a@b.com') → true
isValidPhone(phone)	Validate phone number	isValidPhone('+98912') → true
isValidUrl(url)	Validate URL format	isValidUrl('https://x.com') → true
5️⃣ Utilities
Function	Description	Example
sleep(ms)	Delay execution	await sleep(1000)
debounce(fn, wait)	Debounce function calls	debounce(search, 300)
throttle(fn, limit)	Throttle function calls	throttle(scroll, 1000)
🔍 Usage Examples
Import Everything
typescript
import * as F from 'forma-li';

F.chunk([1, 2, 3], 2);
F.capitalize('hello');
Import Specific Functions
typescript
import { chunk, capitalize } from 'forma-li';
Import by Category
typescript
import { chunk, unique } from 'forma-li/arrays';
import { capitalize, slugify } from 'forma-li/strings';
import { pick, omit } from 'forma-li/objects';
import { isValidEmail } from 'forma-li/validation';
In Next.js / React
typescript
'use client';

import { debounce, isValidEmail } from 'forma-li';

function SearchForm() {
  const handleSearch = debounce((query: string) => {
    // API call
  }, 500);

  const validateEmail = (email: string) => {
    return isValidEmail(email);
  };

  return (
    <input 
      onChange={(e) => handleSearch(e.target.value)}
      placeholder="Search..."
    />
  );
}
In Node.js
typescript
import { sleep, chunk } from 'forma-li';

async function processData() {
  const data = [1, 2, 3, 4, 5, 6];
  const chunks = chunk(data, 2);
  
  for (const batch of chunks) {
    console.log('Processing:', batch);
    await sleep(1000);
  }
}

processData();
🔧 TypeScript Support
Forma-Li is written in TypeScript and includes full type definitions:

typescript
import { chunk, pick } from 'forma-li';

// Full type inference
const numbers: number[] = [1, 2, 3, 4, 5];
const chunks: number[][] = chunk(numbers, 2); // TypeScript knows this is number[][]

interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = { id: 1, name: 'Ali', email: 'ali@test.com' };
const picked: Pick<User, 'name' | 'email'> = pick(user, ['name', 'email']);
// TypeScript ensures only valid keys are used
📊 Bundle Size
Forma-Li is designed to be lightweight:

Package	Size (minified)	Size (gzip)
Full	~4.5 KB	~1.8 KB
Arrays	~1.6 KB	~0.7 KB
Strings	~1.5 KB	~0.6 KB
Objects	~1.7 KB	~0.7 KB
Validation	~1.5 KB	~0.6 KB
🤝 Contributing
Contributions are welcome! Here's how you can help:

Fork the repository

Create a new branch (git checkout -b feature/amazing)

Make your changes

Run tests (pnpm test)

Commit changes (git commit -m 'Add amazing feature')

Push to branch (git push origin feature/amazing)

Open a Pull Request

Development Setup
bash
# Clone the repo
git clone https://github.com/yourusername/forma-li.git
cd forma-li

# Install dependencies
pnpm install

# Build the package
pnpm run build

# Run tests
pnpm test

# Run in development mode
pnpm run dev
📄 License
MIT © Mohammad Felfelani

🙋 Support
📧 Email: mfelfelani72@gmail.com

🐛 Bug Reports: GitHub Issues

📖 Documentation: Read this README

⭐ Star us on GitHub!
If you found this useful, please give us a star! ⭐

📝 Changelog
v1.0.0
Initial release

Array utilities: chunk, unique, groupBy

String utilities: capitalize, slugify, truncate

Object utilities: pick, omit, deepClone

Validation utilities: isValidEmail, isValidPhone, isValidUrl

Utility functions: sleep, debounce, throttle

Full TypeScript support

Tree shaking support

Happy coding! 🚀