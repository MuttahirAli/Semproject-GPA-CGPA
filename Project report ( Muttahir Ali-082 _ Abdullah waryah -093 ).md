# Web Engineering

# Semester Project Report

**Submitted By**

- **Muttahir Ali** (23010101-082)
- **Abdullah Waryah** (23010101-093)

**Department:** BSSE (6th Gray)  
**Submitted To:** Prof. Museb Khalid

---

# 1. Introduction

The application allows students to enter subjects, grades, and credit hours to calculate Semester GPA (SGPA) and Overall CGPA. It also includes a grading policy page for reference.

# 2. Project Structure and Architecture

The project follows the standard Vue 3 + Vite directory structure.

```text
src/
├── assets/
│   ├── base.css
│   ├── main.css
│   ├── style.css
│   └── logo.svg
├── components/
│   ├── Navbar.vue
│   ├── Footer.vue
│   ├── SubjectRow.vue
│   ├── ResultCard.vue
│   └── PreviousCGPA.vue
├── router/
│   └── index.js
├── views/
│   ├── CombineView.vue
│   └── GradingPolicyView.vue
├── App.vue
└── main.js
```

## 2.1 Component Hierarchy

```text
App
├── Navbar
├── RouterView
│   ├── CombineView
│   │   ├── PreviousCGPA
│   │   ├── SubjectRow
│   │   └── ResultCard
│   └── GradingPolicyView
└── Footer
```

# 3. Single Page Application Routing

The project uses Vue Router to navigate between the calculator page and grading policy page without reloading the browser.

## Router Configuration

```js
// src/router/index.js
createRouter({
  history: createWebHistory(),
  routes
})
```

## Application Entry

```js
createApp(App)
  .use(router)
  .mount('#app')
```

# 4. Modular Component Architecture

- **Navbar.vue** – Navigation bar.
- **Footer.vue** – Footer displayed on every page.
- **CombineView.vue** – Main GPA calculator.
- **PreviousCGPA.vue** – Previous CGPA input.
- **SubjectRow.vue** – One subject entry.
- **ResultCard.vue** – Displays calculated results.
- **GradingPolicyView.vue** – Grading policy table.

# 5. Inter-Component Communication

The application uses **Props** for parent-to-child communication and **Emits** for child-to-parent communication.

# 6. Screenshots

Run locally:

```bash
npm run dev
```

Add screenshots here.

# 7. Conclusion

The project successfully implements a Vue 3 Single Page Application using reusable components, Vue Router, Props, and Emits. Future work includes integrating an Express.js backend and MongoDB database.
