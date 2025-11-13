---

# **React App – Week 3 Assignment**

A modern React application built using **Vite, TypeScript, Tailwind CSS, React Router, and custom reusable components**, demonstrating component architecture, hooks, local storage, API integration, and responsive UI design.

---

## 🚀 **Project Overview**

This project showcases multiple key concepts from modern front-end development:

* Reusable **Card** and **Button** components
* Global **Theme Context** for dark/light mode
* A **Task Manager** with local storage persistence
* **API Data Explorer** fetching posts from JSONPlaceholder
* Routing using **React Router**
* Clean UI styled fully with **Tailwind CSS**

---

## 🧩 **Features**

### ✔ **1. Task Manager**

* Add, delete, and toggle tasks
* Filter tasks by "All / Completed / Pending"
* Tasks are stored in **localStorage** using a custom hook (`useLocalStorage`)

---

### ✔ **2. API Data Explorer**

* Fetches posts from:
  `https://jsonplaceholder.typicode.com/posts`
* Supports:

  * Search by title/content
  * Pagination
  * Loading and error states

---

### ✔ **3. Component Architecture**

Includes reusable UI components:

* `<Button />`
* `<Card />`
* `<Navbar />`
* `<Footer />`
* `<Layout />`

---

### ✔ **4. Modern Styling with Tailwind CSS**

* Fully responsive
* Supports dark mode
* Uses elegant utility-first classes

---

### ✔ **5. TypeScript Support**

* Strong typing for components, hooks, and API response objects
* Safer, cleaner code

---

## 📁 **Project Structure**

```
src/
│── components/
│    ├── Button.tsx
│    ├── Card.tsx
│    ├── Layout.tsx
│    ├── Navbar.tsx
│    └── Footer.tsx
│
│── pages/
│    ├── Home.tsx
│    ├── Tasks.tsx
│    └── ApiData.tsx
│
│── hooks/
│    └── useLocalStorage.ts
│
│── context/
│    └── ThemeContext.tsx
│
│── App.tsx
│── main.tsx
│── index.css
```

---

## 🛠 **Technologies Used**

* **React 18**
* **TypeScript**
* **Vite**
* **Tailwind CSS**
* **React Router**
* **Lucide Icons**
* **LocalStorage API**
* **JSONPlaceholder REST API**

---

## ⚙️ **How to Run the Project Locally**

### **1. Clone the repository**

```sh
git clone <your-repository-url>
cd project
```

### **2. Install dependencies**

```sh
npm install
```

### **3. Start the development server**

```sh
npm run dev
```

### **4. Open in browser**

```
http://localhost:5173/
```

---

## 📸 **Screenshots**

(Add your own screenshots here if required)

---

## 📜 **License**

This project is for educational use under PLP Training.

---

## 🙌 **Author**

Benard Machuka
Week 3 React Assignment – PLP Software Development Program

---
