ShopNest – Full Stack E-Commerce Application
📌 Project Description

ShopNest is a full-stack e-commerce web application built with Next.js (App Router) for the frontend and Node.js, Express, and MongoDB for the backend.
The platform allows users to browse products, view product details, register/login securely using NextAuth, and enables admins to add new products to the store.

The project is designed with a modern UI, clean architecture, and scalable structure suitable for real-world applications.

⚙️ Setup Instructions
🔹 Prerequisites

Make sure you have installed:

Node.js (v18+ recommended)

npm or yarn

MongoDB (local or Atlas)

🔹 Frontend Setup (Next.js)
git clone https://github.com/your-username/shopnest.git
cd shopnest
npm install


Create a .env.local file in the root directory:

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key


Run the frontend:

npm run dev


Frontend will run on:

http://localhost:3000

🔹 Backend Setup (Express)
cd server
npm install


Create a .env file:

PORT=5000
MONGODB_URI=your_mongodb_connection_string


Run the backend server:

nodemon index.js


Backend will run on:

http://localhost:5000

 Routes List
🔸 Frontend Routes
Route	Description
/	Home / Landing Page
/products	All Products
/products/[slug]	Product Details
/login	Login Page
/register	Register Page
/add-products	Add New Product (Admin)
🔸 Backend API Routes
Method	Endpoint	Description
GET	/items	Get all products
GET	/items/:slug	Get product by slug
POST	/items	Add new product
