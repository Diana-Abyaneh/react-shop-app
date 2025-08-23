# 🛍️ Shop App

A modern e-commerce web application built with **React + Vite**, powered by [Fake Store API](https://fakestoreapi.com/).  
Browse products, view details, add items to the cart, and checkout — with a responsive UI.  

## 🚀 Live Demo
**[View on Vercel](https://react-shop-app-six.vercel.app/)**

---

## ✨ Features
- 📦 **Product Listing** – Fetch and display products from Fake Store API  
- 🔍 **Product Details Page** – View detailed information about each item  
- 🛒 **Cart & Checkout Page** – Add/remove products and complete checkout  
- ❌ **Custom 404 Page** – Friendly error page for undefined routes  
- 📱 **Responsive Design** – Optimized for desktop and mobile devices  
- 🔔 **Toast Notifications** – Feedback for cart actions and checkout events  

---

## 🛠️ Tech Stack
- **React 19** with **Vite**
- **React Router DOM** – Routing & navigation
- **Context API** – State management for cart & products
- **React Icons** – Iconography
- **React Toastify** – Notifications
- **CSS Modules** – Scoped styling
- Deployment – **Vercel**

---

## ⚙️ Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/shop-app.git
cd shop-app
npm install
```

Run locally
```bash
npm run dev
```

---

## 📦 Dependencies

This project uses the following main packages:

- **React** – Frontend library for building UI components.
- **Axios** – For making HTTP requests to APIs.
- **React Router DOM** – For routing and navigation between pages.
- **React Icons** – For including scalable vector icons.
- **React Toastify** – For displaying toast notifications.

---


## 📁 Project Structure
```
shop-app/
├── public/
│   └── images/
│       ├── 404.png
│       └── emptyCart.png
├── src/
│   ├── components/   # Reusable UI components
│   ├── context/      # Context API providers
│   ├── layout/       # Layout wrapper
│   ├── pages/        # Pages (Products, Details, Checkout, 404)
│   ├── services/     # API configuration
│   ├── utils/        # Custom hooks & helpers
│   ├── App.jsx       # Main app routes
│   └── main.jsx      # App entry point
└── vite.config.js    # Vite configuration
```
---

## 🌐 API
Data is fetched from Fake Store API:

- Products: GET https://fakestoreapi.com/products

- Product Details: GET https://fakestoreapi.com/products/:id

---

## 👩‍💻 Author

**Diana Abyaneh**  
- GitHub: [@Diana-Abyaneh](https://github.com/Diana-Abyaneh)
