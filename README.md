# LeetCode Solutions

My LeetCode problem solutions in JavaScript and TypeScript.

## Prerequisites

You need to have **Node.js** installed.

## Setup

1. Install dependencies:

```bash
npm install
```

## Structure

```
solutions/
├── ts/           # Write TypeScript here (source)
│   ├── easy/
│   ├── med/
│   └── hard/
└── js/           # Compiled JavaScript (auto-generated)
    ├── easy/
    ├── med/
    └── hard/
```

## Usage

### TypeScript (development)

Test your TypeScript code directly:

```bash
npx tsx solutions/ts/easy/twoSum.ts
```

### Compile to JavaScript

Once your TypeScript solution works, compile it:

```bash
npm run build
```

This outputs the compiled JS files to `solutions/js/` with the same folder structure.

For auto-compilation on save:

```bash
npm run build:watch
```

### Run compiled JavaScript

```bash
node solutions/js/easy/twoSum.js
```

## Reference

- [YouTube Course](https://www.youtube.com/watch?v=xwI5OBEnsZU&t=8378s)
