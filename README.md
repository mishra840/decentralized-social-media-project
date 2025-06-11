Decentralized Social Media MVP

A full-stack decentralized microblogging platform where users log in using their Ethereum wallet, post short updates, interact with posts, and manage their profiles — all without traditional authentication. Built using Next.js, NestJS, RainbowKit, and PostgreSQL.


---

🚀 Features

🔐 Wallet-based login via RainbowKit & Ethers.js

🧑‍💼 Create & update user profile (username, bio, profile pic)

📝 Post short messages (max 280 characters)

📰 Feed with all posts

❤️ Like posts

💬 Comment on posts

🌈 Fully styled using Tailwind CSS

🔗 Seamless integration between Web2 & Web3



---

🧰 Tech Stack

Frontend

Next.js

React

Tailwind CSS

RainbowKit

Wagmi

Ethers.js


Backend

NestJS

TypeORM

PostgreSQL

TypeScript



---

⚙️ Project Structure

decentralized-social-media-project/
├── backend/ # NestJS + PostgreSQL API
├── frontend/ # Next.js + RainbowKit client
├── README.md
├── .gitignore


---

🧪 Local Setup

1. Clone the repo

git clone https://github.com/mishra840/decentralized-social-media-project.git
cd decentralized-social-media-project


---

2. Backend Setup

cd backend
cp .env.example .env
# Make sure PostgreSQL is running and DATABASE_URL is valid
npm install
npm run start:dev



3. Frontend Setup

cd ../frontend
cp .env.example .env.local
npm install
npm run dev

Visit: http://localhost:3000


---

🧠 Inspiration

Centralized platforms monetize user data and enforce top-down moderation. This project demonstrates a lightweight, trustless alternative using Ethereum wallets for identity and user-owned data.


---

📌 Future Scope

IPFS for decentralized image storage

On-chain storage via smart contracts

ENS support

Push notifications for comments/likes
