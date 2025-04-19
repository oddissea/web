# Transparency Portal — CoordiCanarias

This project is a web platform designed to clearly, accessibly, and systematically present the institutional, social, and financial information of **CoordiCanarias** (Coordinator of People with Physical Disabilities of the Canary Islands).

## 🧩 Portal Contents

The portal includes the following sections:

- **Regulations**: Key legal and statutory documents of the organization.
- **Governing Bodies**: Interactive organizational chart.
- **Activity Reports**: Annual reports from 2016 onwards.
- **Financial Reports**: Financial data and forms of collaboration.
- **History and Contact**.

---

## 🧑‍⚖️ Regulations

Presented as visual cards with thematic icons and links to official PDFs and legal references. Uses `.service`, `.text-theme`, and a responsive layout based on Bootstrap 5.

---

## 🧭 Governing Bodies

The interactive organizational chart is implemented with [GoJS](https://gojs.net), using a tree diagram with the following structure:

- **General Assembly**
  - **Board of Directors**
    - President
    - Secretary
    - Treasurer
    - Board Members

The chart dynamically adapts to active `data-bs-theme` modes. In `accessible` and `high-contrast` modes, link arrows are shown in white for visibility.

---

## 🗂 Activity Reports

Displayed as visual cards by year. Each includes the `fa-calendar-days` icon and links to corresponding files (PDFs or external resources). Multi-part reports are supported (e.g., Part 1 and Part 2 for 2020).

---

## 🌐 Accessibility

Two accessibility modes are implemented:

- `Accessible Mode`: Improved readability, black text on white background.
- `High Contrast Mode`: Black background, white text, high-contrast elements.

These are managed via `data-bs-theme`, with CSS rules defined in `theme-panel-enhance.css`.

---

## 🚀 Technologies Used

- HTML5 + CSS3 (Bootstrap 5 base)
- Font Awesome 6
- GoJS for organization chart (`https://unpkg.com/gojs`)
- Vanilla JavaScript
- GitHub Pages (recommended for deployment)

---

## 🛡 Repository and Version Control

This project is managed via Git and GitHub, using:

- `origin`: your fork (`https://github.com/oddissea/web.git`)
- `upstream`: original repository (`https://github.com/fhncoordi/web.git`)

### 🧑‍💻 Recommended workflow

```bash
# Create a new feature branch
git checkout -b feature-new-section

# Make changes and commit
git add .
git commit -m "Add section X"

# Push to your fork (origin)
git push origin feature-new-section

# Create a Pull Request to upstream if needed
```

---

## 📄 License

This project is part of CoordiCanarias' transparency initiative. Contents are subject to the usage terms established by the organization.
