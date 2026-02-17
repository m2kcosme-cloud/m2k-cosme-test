# m2k-cosme-test

Full-stack TypeScript project for M2K Cosme testing and development.  
This repository contains client, server, and shared modules for building and testing cosmetic-tech related services.

---

## 📦 Project Structure

```
client/      Frontend application
server/      Backend API and services
shared/      Shared types and utilities
```

---

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/m2kcosme-cloud/m2k-cosme-test.git
cd m2k-cosme-test
```

### 2. Install dependencies

Using npm:

```bash
npm install
```

Or using pnpm (recommended if lockfile exists):

```bash
pnpm install
```

Or using yarn:

```bash
yarn install
```

---

## 💻 Local Development

### Start development mode

```bash
npm run dev
```

or

```bash
pnpm dev
```

This will start the local development server.  
Check the console output for the local URL.

---

## 🏗 Build for Production

```bash
npm run build
```

---

## ▶️ Run Production Build

```bash
npm run start
```

---

## 🧪 Testing

If tests are configured:

```bash
npm run test
```

---

## 🧹 Linting

```bash
npm run lint
```

---

## 🔐 Environment Variables

If the project uses environment variables, create a local file:

```
.env
```

Example:

```
PORT=3000
API_URL=http://localhost:3000
```

Do not commit `.env` files to version control.

---

## 🤝 Contributing

Please read `CONTRIBUTING.md` before submitting pull requests.

---

## 📄 License

This project is licensed under the MIT License. See `LICENSE` file for details.
