// Importing necessary page and react library
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Initial commit by Dean Hans

// Defines an interface with initial title which named 'UNNAMED STORYBOARD' from Storyboard page function
// and change it based on user preference
interface HeaderProps {
  initialTitle: string;
  onTitleChange: (newTitle: string) => void;
}

// Define a function that handling initialTitle and changed title from HeaderProps interface
const Header: React.FC<HeaderProps> = ({ initialTitle, onTitleChange }) => {
  const [title, setTitle] = useState(initialTitle);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    onTitleChange(newTitle);
  };

  // Returning Header Page
  return (
    // Navigation bar (NavBar)
    <header className="p-4 bg-glass backdrop-blur-sm shadow-md flex items-center justify-center relative">

      {/* Handling title changes based on user reference using called function beforehand */}
      <div className="text-center text-brown-800">
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          className="text-xl font-bold border-none outline-none bg-transparent text-center mx-auto"
        />
      </div>
    </header>
    // Navigation Bar End
  );
};

// Export Header Page
export default Header;
