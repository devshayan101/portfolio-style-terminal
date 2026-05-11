# 💻 Terminal-Themed Developer Portfolio

A minimal, high-performance, terminal-themed portfolio built with **Next.js**, **React**, and **Tailwind CSS**. Designed for developers who love the CLI aesthetic.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

---

## ✨ Features

- 📟 **Interactive Terminal Hero**: Simulated boot-up sequence and command-line interface.
- 🎨 **Sleek Terminal Aesthetic**: Monospace fonts, neon accents, and code-block styling.
- 🛠️ **Centralized Configuration**: All content is managed in a single `src/lib/data.ts` file for easy updates.
- 📱 **Fully Responsive**: Optimized for both desktop and mobile terminal lovers.
- 🚀 **Performance Focused**: Built with Next.js App Router for speed and SEO.
- 📂 **Structured Sections**:
  - `About`: Bio and links.
  - `Skills`: Categorized technical expertise.
  - `Experience`: Professional timeline.
  - `Projects`: Filterable project grid with README-style cards.
  - `Contact`: Terminal-prompt contact section.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Typography**: [Geist Mono](https://vercel.com/font)
- **Utilities**: `clsx`, `tailwind-merge`
- **Language**: [TypeScript](https://www.typescriptlang.org/)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## ⚙️ Customization

Most of the portfolio content is centralized in `src/lib/data.ts`. You can update your bio, skills, experience, and projects there.

### Updating Bio & Hero Text
Modify `bioData` in `src/lib/data.ts`:
```typescript
export const bioData = {
  name: "Your Name",
  role: "Full-Stack Engineer",
  email: "hello@yourdomain.com",
  // ...
  heroText: [
    "Initializing system...",
    "Loading modules...",
    "Welcome to my terminal.",
  ],
};
```

### Adding Projects
Add your projects to the `projectsData` array:
```typescript
export const projectsData: Project[] = [
  {
    id: "1",
    title: "Awesome Project",
    description: "Brief description of what it does.",
    tags: ["React", "Node.js"],
    repo: "https://github.com/yourusername/project",
    link: "https://project-demo.com",
  },
];
```

---

## 📂 Project Structure

```text
├── src/
│   ├── app/            # Next.js App Router (pages & layout)
│   ├── components/     # Reusable UI components
│   └── lib/            # Utilities and centralized data (data.ts)
├── public/             # Static assets
├── tailwind.config.ts  # Theme & color configuration
└── package.json        # Dependencies & scripts
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

<p align="center">
  <sub>Built with ❤️ and terminal-mode by <a href="https://github.com/ShayanDev">ShayanDev</a></sub>
</p>
