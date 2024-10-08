// Importing necessary react library
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  // Returning Footer Page
  return (
    <footer className="p-4 bg-glass2 backdrop-blur-xs text-center">
      <div className="text-xl font-bold mb-4">
        {/* Back To Home Page */}
        <Link to="/">NARRATIVE NEST</Link>
      </div>
      <div className="mb-4 text-sm">
        Powered by Stable Diffusion Lightning Gradio API
      </div>
      <div className="border-t border-brown-600 py-4">
        <a href="" className="text-gray-700 font-bold hover:text-gray-900">
            Full Application Github Source Code
          </a>
        <div className="text-sm mt-2">
          &copy; 2024 Narrative Nest
          <span className="mx-2">|</span>
          <a className="text-gray-700 hover:text-gray-900">
            Created for College Project
          </a>
        </div>
      </div>
    </footer>
  );
};

// Exporting Footer Page
export default Footer;
