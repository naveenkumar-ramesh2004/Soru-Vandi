# 🍽️ Soru Vandi

Soru Vandi is a React-based food delivery web application inspired by modern food ordering platforms.

This project is part of my **learning journey in frontend development**. I am building it step by step while learning React.js, JavaScript, API handling, and Git/GitHub. As I learn new concepts, I apply them to the project, improve the existing features, and gradually make the application better.

> 🚧 **Project Status:** Actively developing and improving as part of my learning journey.

## 🚀 Features

- Restaurant listing
- Restaurant search functionality
- Search filtering using restaurant names
- Shimmer UI while data is loading
- API data fetching
- Manual fallback restaurant data when the API fails
- Empty search result handling
- Responsive restaurant card layout
- Font Awesome icons
- React state management for restaurant data and search results
- Git and GitHub workflow for tracking project changes

## 🛠️ Technologies Used

- React.js
- JavaScript
- HTML5
- CSS3
- Vite
- Font Awesome
- Git
- GitHub

## 📂 Project Structure

```text
Soru-Vandi/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   └── soruvandi_icon.png
│   │
│   ├── Components/
│   │   │
│   │   ├── Body/
│   │   │   ├── Body.jsx
│   │   │   ├── Body.css
│   │   │   ├── Shimmer.jsx
│   │   │   ├── Shimmer.css
│   │   │   └── filterBySearch.js
│   │   │
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   │
│   │   └── RestroCard/
│   │       ├── Restrocard.jsx
│   │       └── Restrocard.css
│   │
│   ├── utils/
│   │   └── mockDATA.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

```

## 🔍 Search Functionality

The application maintains the complete restaurant list separately from the currently displayed restaurant list.

- `allresList` stores the original restaurant data.
- `resList` stores the filtered restaurant data displayed on the screen.

When the user searches for a restaurant, the search text is used to filter `allresList`. This makes it possible to search again or clear the search without permanently changing the original restaurant data.

## ⏳ Loading State — Shimmer UI

A Shimmer UI is displayed while restaurant data is being loaded.

This provides a better user experience instead of displaying an empty screen during the initial loading state.

## 🔄 API Fallback

The application attempts to fetch restaurant data from the API.

If the API fails or does not return usable restaurant data, the application uses manually stored restaurant data from `mockDATA.js` as a fallback.

This allows the project to continue displaying restaurant data even when the API is unavailable.

## 📭 Empty Search Result

If a search does not match any restaurant, the application displays:

```text
No Result Found
```

This provides clear feedback to the user instead of showing an empty restaurant section.

## 💻 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/naveenkumar-ramesh2004/Soru-Vandi.git
```

### 2. Navigate to the project

```bash
cd Soru-Vandi
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

## 📦 Available Scripts

### Start development server

```bash
npm run dev
```

Starts the Vite development server.

### Build for production

```bash
npm run build
```

Creates a production build of the application.

### Run ESLint

```bash
npm run lint
```

Runs ESLint to check the project code.

### Preview production build

```bash
npm run preview
```

Previews the production build locally.

## 🌱 Learning Journey

Soru Vandi is not a finished product. I am developing it alongside my learning process.

The main goal of this project is to learn by building real features instead of only studying concepts separately.

As I learn new topics, I apply them to the project and improve it step by step.

### What I am practicing

- React.js fundamentals
- React state management
- Components and props
- Hooks such as `useState` and `useEffect`
- API handling and asynchronous JavaScript
- Array methods and filtering
- Conditional rendering
- Loading states and Shimmer UI
- Search functionality
- Reusable components
- Responsive frontend development
- Git and GitHub
- Writing meaningful commits
- Maintaining project documentation

## 📈 Development Approach

I am following a continuous learning-and-building approach:

```text
Learn → Practice → Build → Find Problems → Fix → Improve → Repeat
```

The project will continue to evolve as I learn more about frontend and full-stack development.

## 🔮 Future Improvements

- [ ] Add restaurant rating filter
- [ ] Add cuisine/category filtering
- [ ] Add restaurant details page
- [ ] Add food menu
- [ ] Add Add to Cart functionality
- [ ] Add cart page
- [ ] Add quantity management
- [ ] Add user authentication
- [ ] Add order placement
- [ ] Add order history
- [ ] Improve responsive design
- [ ] Improve API integration
- [ ] Add better error handling

## 📸 Project Preview

Screenshots of the application will be added here as the project develops.

Possible screenshots to include:

- Main restaurant listing
- Restaurant search result
- Shimmer loading state
- No-result search state

## 🔗 Repository

GitHub: https://github.com/naveenkumar-ramesh2004/Soru-Vandi

## 🙌 Why I Am Building This Project

I am building Soru Vandi to strengthen my practical development skills by working on a project continuously while learning.

Instead of trying to build everything at once, I am adding features one by one, understanding the concepts behind them, fixing issues, and improving the project over time.

This repository represents my progress as I learn and build.

---

⭐ **Learning, building, and improving one feature at a time.**

