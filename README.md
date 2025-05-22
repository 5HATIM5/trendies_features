# 🛍️ Trendies – E-Commerce Checkout Flow

Trendies is a minimal full-stack e-commerce prototype built with **Next.js 15**, **NestJS**, **Prisma**, **PostgreSQL**, and **TailwindCSS**. It allows users to browse products, add items to a cart, and complete a checkout with "cash" or "POS" as payment options.

---

## 🔧 Tech Stack

### Frontend
- [Next.js 15 (App Router)](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/) for cart management

### Backend
- [NestJS](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)

---

## 🚀 Features

- 💻 Product listing page
- 🛒 Cart functionality with Redux Toolkit
- 📦 Checkout flow with user info & payment method
- 🧾 Order summary and database persistence
- 🔐 Order validation (checks product availability)
- 🔄 Product status updates (`available` → `sold`)

---

## 📁 Project Structure
```
trendies_features/
│-- apps/
│   │-- api/       # NestJS backend with Prisma 
│   │-- web/       # Next.js frontend with Tailwind & Redux
│-- packages/          
│   │-- db/       # Prisma Database cCpnfig
```


1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/trendies.git
   cd books-app
   ```

2. **Install dependencies:**
   ```sh
   pnpm install
   ```

3. **Set up the database:**
   ```sh
    Create a .env in apps/api with your PostgreSQL credentials:
    DATABASE_URL="postgresql://username:password@localhost:5432/trendies"
   
    Run migrations:
      cd apps/api
      npx prisma migrate dev --name init
   ```
   
4. **Seed some products (optional):**
   ```sh
    Add initial products directly in your DB or create a seeder.
   ```

5. **5. Run dev servers**
   ```sh
     In separate terminals:
   
     # API
        cd apps/api
        pnpm run dev
      
     # Frontend
        cd apps/web
        pnpm run dev
   ```
