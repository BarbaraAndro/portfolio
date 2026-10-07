# 🌐 Front-End Developer Portfolio
 
A personal portfolio website built with React, showcasing my projects, skills, and experience as a front-end developer.
 
🔗 **Live Demo:** [My portfolio](https://andro-web-developer.vercel.app)
 
![Portfolio Preview](./src/public/pagePreview.jpeg)
 
---
 
## ✨ Features
 
- **Multi-language support (ES/EN)** — powered by `react-i18next`, with a manual language switcher.
- **Responsive design** — built with Flexbox and CSS Grid, optimized for mobile, tablet, and desktop.
- **Skills section** — interactive icons with hover effects showing technology names.
- **Projects showcase** — cards displaying my featured projects, with links to live demos and GitHub repositories.
- **Contact form** — built with `react-hook-form`, connected to Firebase Firestore, with form validation and success/error feedback via `SweetAlert2`.

---
 
## 🛠️ Built With
 
- **[React](https://react.dev/)** — UI library
- **[SCSS](https://sass-lang.com/)** — styling with BEM methodology
- **[React-icons](https://react-icons.github.io/react-icons/)** — icon library
- **[React-i18next](https://react.i18next.com/)** — internationalization
- **[React-hook-form](https://react-hook-form.com/)** — form handling and validation
- **[Firebase](https://firebase.google.com/)** — backend for contact form submissions
- **[SweetAlert2](https://sweetalert2.github.io/)** — styled alert modals

---
 
## 🚀 Getting Started
 
### Prerequisites
 
- Node.js (v20 or higher recommended)
- npm

### Installation
 
```bash
# Clone the repository
git clone https://github.com/BarbaraAndro/portfolio
 
# Navigate to the project folder
cd portfolio
 
# Install dependencies
npm install
 
# Start the development server
npm run dev
```
 
The app will be available at `http://localhost:5173` (or the port shown in your terminal).
 
## Firebase Configuration

If your contact form uses Firebase, create a `.env.local` file in the root directory with your Firebase config.

Copy `.env.example` and rename it to `.env.local`, then fill in your Firebase credentials:

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

**Important:** Never commit `.env.local` to the repository. It's included in `.gitignore` for security reasons.

---
 
## 📸 Screenshots
 
| Skills | Projects | Contact |
|------|----------|---------|
| ![skills](./src/public/screenshot-skills.jpg) | ![projects](./src/public/screenshot-projects.jpg) | ![contact](./src/public/screenshot-contact.jpg) |
 
---
 
## 📬 Contact
 
Feel free to reach out through the contact form on the site, or connect with me here:
 
- **LinkedIn:** [https://www.linkedin.com/in/barbara-andro/](https://www.linkedin.com/in/barbara-andro/)
- **GitHub:** [https://github.com/BarbaraAndro](https://github.com/BarbaraAndro)

---
 
## 📄 License
 
This project is open source and available under the [MIT License](LICENSE). 


