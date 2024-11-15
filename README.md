
# AI-Menu Generator

> Generate restaurant menu based on meal time and cuisine.

![Screenshot of Project](./src/client/assets/project-screenshot.png)

You can view a live demo here: [Live Demo URL](https://flow.slickbit.com/)

---

## 📦 Installation

Follow these steps to set up the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or above)
- [React.js](https://react.dev/) (version 18 or above)

### Steps

1. **Clone the repository**
   git clone https://github.com/SlickbitTechnologies/ai-menu-generator.git

2. Navigate into the project directory
    cd ai-menu-generator

    3.Install dependencies
    npm install

    4.Start the development server
    npm run dev

**The app should now be running on** http://localhost:8089

📂 Folder Structure
ai-menu-generator/
├── public/               # Public assets and index.html
├── src/
    ├──client
    │   ├── components/       # Reusable components
    │   ├── pages/            # Page components
    │   ├── assets/           # Project icons and fonts
    │   ├── context/          # Context providers for state management(Redux)
    │   ├── App.jsx           # Main app component
    │   └── main.jsx          # ReactDOM entry point
    ├──server
    │   ├── controllers/      # Business logic
    │   ├── routes/           # Api links/navigations
    │   ├── utils/            # Reusable logic
└── package.json          # Project metadata and dependencies
