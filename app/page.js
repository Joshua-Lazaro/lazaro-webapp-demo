import { useState } from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br to-gray-700"
    style={{ backgroundImage: "linear-gradient(to bottom right, #252b46, #374151)" }}
    >

      {/* Navigation Menu */}
      <nav className="sticky top-0 bg-gray-800 bg-opacity-70 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center p-4 rounded-lg">
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Tailwind CSS Demo</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#buttons" className="text-white-700 hover:text-indigo-600 transition">Buttons</a>
              <a href="#colors" className="text-white-700 hover:text-indigo-600 transition">Colors</a>
              <a href="#layouts" className="text-white-700 hover:text-indigo-600 transition">Layouts</a>
              <a href="#text" className="text-white-700 hover:text-indigo-600 transition">Typography</a>
            </div>
            <button className="md:hidden">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center bg-white rounded-lg p-6 pt-9 mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Tailwind CSS Components
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This blog showcases how Tailwind CSS can be used to quickly style a responsive interface using utility classes, without writing custom CSS.
          </p>
        </div>

        {/* Buttons Section */}
        <section id="buttons" className="mb-16 bg-black rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Buttons</h2>
          <p className="text-white-600 mb-6">
            Selecting different options updates the button by swapping Tailwind utility classes. 
            This demonstrates how visual styles are composed from small, reusable utilities.
          </p>
          <div className="flex flex-row gap-6">
            <div className="flex flex-col items-center">
               {/* Variants */}
              <h3 className="text-xl font-semibold mb-2">Variants</h3>
              <div className="flex gap-4 mb-6">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Solid</button>
                <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded">Outline</button>
                <button className="text-blue-500 px-4 py-2 rounded hover:bg-blue-50">Ghost</button>
              </div>

              {/* Sizes */}
              <h3 className="text-xl font-semibold mb-2">Sizes</h3>
              <div className="flex gap-4 mb-6">
                <button className="bg-indigo-500 text-white text-sm px-2 py-1 rounded">Small</button>
                <button className="bg-indigo-500 text-white text-base px-4 py-2 rounded">Medium</button>
                <button className="bg-indigo-500 text-white text-lg px-6 py-3 rounded">Large</button>
              </div>

              {/* Rounded */}
              <h3 className="text-xl font-semibold mb-2">Rounded</h3>
              <div className="flex gap-4 mb-6">
                <button className="bg-green-500 text-white px-4 py-2 rounded-none">None</button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md">Medium</button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-full">Full</button>
              </div>

              {/* Accent Colors */}
              <h3 className="text-xl font-semibold mb-2">Accent Colors</h3>
              <div className="flex gap-4">
                <button className="bg-red-500 text-white px-4 py-2 rounded">Red</button>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded">Yellow</button>
                <button className="bg-purple-500 text-white px-4 py-2 rounded">Purple</button>
              </div>

            </div>
            <div className="flex flex-col items-center mt-8">
                {/* text area for when button is pressed */}
            </div>
          </div>

        </section>

        {/* Colors Section */}
        <section id="colors" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Color Palette</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="text-center">
                <div className="w-full h-24 bg-red-500 rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Red</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-blue-500 rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Blue</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-green-500 rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Green</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-yellow-500 rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Yellow</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-purple-500 rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Purple</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-pink-500 rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Pink</p>
              </div>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section id="text" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Typography</h2>
          <div className="bg-white rounded-lg shadow-md p-8 space-y-4">
            <h1 className="text-5xl font-bold text-gray-900">Heading 1 - Extra Large</h1>
            <h2 className="text-4xl font-bold text-gray-900">Heading 2 - Large</h2>
            <h3 className="text-3xl font-bold text-gray-900">Heading 3 - Medium</h3>
            <p className="text-xl text-gray-700">This is a large paragraph with text-xl class.</p>
            <p className="text-base text-gray-600">This is a regular paragraph with text-base class.</p>
            <p className="text-sm text-gray-500">This is small text with text-sm class.</p>
            <p className="font-bold text-gray-900">This is bold text.</p>
            <p className="italic text-gray-700">This is italic text.</p>
            <p className="underline text-blue-600">This is underlined text.</p>
          </div>
        </section>

        {/* Layouts Section */}
        <section id="layouts" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Layout Examples</h2>
          
          {/* Grid Layout */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-xl font-bold mb-4">Grid Layout</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Card 1</h4>
                <p>This is a card in a responsive grid layout.</p>
              </div>
              <div className="bg-gradient-to-br from-green-400 to-green-600 text-white p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Card 2</h4>
                <p>Grid automatically adjusts to screen size.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 text-white p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Card 3</h4>
                <p>Three columns on large screens, stacked on mobile.</p>
              </div>
            </div>
          </div>

          {/* Flex Layout */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold mb-4">Flex Layout</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-red-500 text-white p-4 rounded-lg flex-shrink-0">Item 1</div>
              <div className="bg-orange-500 text-white p-4 rounded-lg flex-shrink-0">Item 2</div>
              <div className="bg-yellow-500 text-white p-4 rounded-lg flex-shrink-0">Item 3</div>
              <div className="bg-teal-500 text-white p-4 rounded-lg flex-shrink-0">Item 4</div>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Images</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <img 
                  src="https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Image+1" 
                  alt="Placeholder" 
                  className="w-full rounded-lg shadow-md"
                />
                <p className="mt-2 text-center font-medium">Rounded Image</p>
              </div>
              <div>
                <img 
                  src="https://via.placeholder.com/400x300/10B981/FFFFFF?text=Image+2" 
                  alt="Placeholder" 
                  className="w-full rounded-full shadow-md"
                />
                <p className="mt-2 text-center font-medium">Circular Image</p>
              </div>
              <div>
                <img 
                  src="https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Image+3" 
                  alt="Placeholder" 
                  className="w-full shadow-2xl"
                />
                <p className="mt-2 text-center font-medium">Shadow Image</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg">Built with Next.js and Tailwind CSS</p>
          <p className="text-sm text-gray-400 mt-2">A beginner-friendly tutorial project</p>
        </div>
      </footer>
    </div>
  );
}