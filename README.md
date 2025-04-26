# 🛡️ AI Safety Incident Dashboard

A modern, animated, and fully responsive dashboard for tracking and reporting AI safety incidents.  
Built with **React**, **TypeScript**, and **Tailwind CSS** using a modular, component-driven architecture for scalability and maintainability.

---

## ✨ Features

- **Incident List:** View, filter, and sort AI safety incidents by severity and date.
- **Report New Incident:** Add new incidents with validation and instant UI update.
- **Severity Badges:** Color-coded, animated, and easy to scan.
- **Responsive UI:** Looks great on desktop, tablet, and mobile.
- **Theme Toggle:** Switch between light and dark mode.
- **Beautiful Animations:** Subtle transitions, glowing effects, and animated backgrounds.
- **Component Structure:** Clean separation for easy extension and maintenance.

---

## 🛠️ Tech Stack

- **Language:** TypeScript
- **Framework:** [React](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (with custom animations)
- **Icons:** [lucide-react](https://lucide.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)

---

## 📦 Project Structure

project-root/

├── public/

│ └── index.html

├── src/

│ ├── components/

│ │ ├── App.tsx

│ │ ├── BackgroundParticles.tsx

│ │ ├── Controls.tsx

│ │ ├── HeroSection.tsx

│ │ ├── IncidentCard.tsx

│ │ ├── IncidentForm.tsx

│ │ ├── IncidentList.tsx

│ │ ├── ScrollIndicator.tsx

│ │ ├── SummaryCards.tsx

│ │ └── ThemeToggle.tsx

│ ├── context/

│ │ └── ThemeContext.tsx

│ ├── data/

│ │ └── mockData.ts

│ ├── styles/

│ │ └── index.css

│ ├── types/

│ │ └── incident.ts

│ ├── App.tsx

│ ├── index.css

│ ├── main.tsx

│ └── vite-env.d.ts

├── .gitignore

├── package.json

├── package-lock.json

├── postcss.config.js

├── tailwind.config.js

├── tsconfig.json

├── tsconfig.app.json

├── tsconfig.node.json

├── vite.config.ts

└── README.md


---

## 🚀 Getting Started

### 1. **Clone the Repository**

git clone https://github.com/HardikArora0843/AI-Safety-Incident-Dashboard.git

cd AI-Safety-Incident-Dashboard

### 2. **Install Dependencies**

npm install


### 3. **Run the App Locally**

npm run dev

- The app will be available at [http://localhost:5174](http://localhost:5174).

---

## 🖌️ Design Decisions & Highlights

- **Component-Driven:** All UI features are split into focused components (`IncidentList`, `IncidentCard`, `Controls`, `SummaryCards`, etc.) for clarity and reusability.
- **Custom Animations:** CSS keyframes for glowing badges, fade-in cards, and pulsing buttons create a lively, modern SaaS feel.
- **Background Effects:** Includes animated particles and a gradient background for visual depth.
- **Theme Support:** Light/dark mode toggle using React context and Tailwind’s dark classes.
- **Accessibility:** High-contrast colors, focus states, and semantic labels for better usability.
- **Easy Customization:** Add fields, features, or new components quickly thanks to the modular structure.

---

---

## 🙌 Acknowledgments

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/)
- [Vite](https://vitejs.dev/)

---

> **Thank You!**
