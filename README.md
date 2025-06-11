# Decentralized Social Media Project

This is a full-stack decentralized social media app with:

- 🚀 **Frontend**: Next.js + RainbowKit + Wagmi
- 🔐 **Backend**: NestJS + TypeORM + REST APIs

## 📁 Structure

```
.
├── frontend/     # Next.js application
├── backend/      # NestJS REST API
```

## 📦 Installation

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend/backend
npm install
npm run start:dev
```

## 📄 Environment Setup

Create `.env` files in both `frontend/` and `backend/backend/`.

```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

```
DATABASE_URL=your_database_url_here
```

## 📌 Todo

- Add authentication
- Improve smart contract integration
- Add tests
