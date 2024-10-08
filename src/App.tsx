// Importing necessary page and react library
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
// import Create from './components/Create';
import Storyboard from "./components/Storyboard";

const App: React.FC = () => {
  // Returning App Page
  return (
    // ROUTER: wraps the entire application. It enables the use of React Router for managing navigation within the app.
    <Router>
        {/* ROUTES: container for all the Route components. It defines how different URLs in the application map to different components. */}
        <Routes>
          {/*ROUTE: specifies the component to render when the URL matches the path. */}
          <Route path="/" element={<Storyboard />} />
        </Routes>
    </Router>
  );
};

// Exporting App page
export default App;
