"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [codeSample, setCodeSample] = useState(`Click buttons to see code samples here`);
  const [preview, setPreview] = useState(`Click buttons to see live preview here`);
  const [typographyPreview, setTypographyPreview] = useState(`Click buttons to see live preview here`);

  return (
    <div className="min-h-screen bg-black">

      {/* Navigation Menu */}
      <nav className="sticky top-0 bg-black opacity-100 border-b-1 border-gray-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center p-4 rounded-lg">
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <a href="#hero"> Tailwind CSS CheatSheet</a>
                </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#buttons" className="text-white-700 hover:text-indigo-600 transition">Buttons</a>
              <a href="#spacing" className="text-white-700 hover:text-indigo-600 transition">Spacing</a>
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
      <div id="hero" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center bg-black border-2 border-gray-900 rounded-lg p-6 pt-9 mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Tailwind CSS CheatSheet
          </h1>
          <p className="text-xl text-white mb-8">
            This blog showcases how Tailwind CSS can be used to quickly style a responsive interface using utility classes, without writing custom CSS.
          </p>
        </div>

        {/* Buttons Section */}
        <section id="buttons" className="px-4 md:px-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Buttons</h2>
          <p className="text-white-600 mb-6">
            Selecting different options updates the button by swapping Tailwind utility classes. 
            This demonstrates how visual styles are composed from small, reusable utilities.
          </p>
          <div className="border-2 border-gray-900 shadow-xl bg-black grid grid-cols-1 mb-16 md:grid-cols-2 gap-8 p-8 rounded-lg">
            <div className="flex flex-col items-center">
               {/* Variants */}
              <h3 className="text-xl font-semibold mb-2">Variants</h3>
              <div className="flex gap-4 mb-6">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() =>
                      setCodeSample(`<button className="bg-blue-500 text-white px-4 py-2 rounded">\nSolid Button\n</button>`)
                    }
                  >
                    Solid
                  </button>

                  <button
                    className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded"
                    onClick={() =>
                      setCodeSample(`<button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded">\nOutline Button\n</button>`)
                    }
                  >
                    Outline
                  </button>

                  <button
                    className="text-blue-500 px-4 py-2 rounded hover:bg-blue-50"
                    onClick={() =>
                      setCodeSample(`<button className="text-blue-500 px-4 py-2 rounded hover:bg-blue-50">\nGhost Button\n</button>`)
                    }
                  >
                    Ghost
                  </button>
            </div>

              {/* Sizes */}
              <h3 className="text-xl font-semibold mb-2">Sizes</h3>
              <div className="flex gap-4 mb-6">
                <button
                  className="bg-indigo-500 text-white text-sm px-2 py-1 rounded"
                  onClick={() =>
                    setCodeSample(`<button className="bg-indigo-500 text-white text-sm px-2 py-1 rounded">\nSmall\n</button>`)
                  }
                >
                  Small
                </button>

                <button
                  className="bg-indigo-500 text-white text-base px-4 py-2 rounded"
                  onClick={() =>
                    setCodeSample(`<button className="bg-indigo-500 text-white text-base px-4 py-2 rounded">\nMedium\n</button>`)
                  }
                >
                  Medium
                </button>

                <button
                  className="bg-indigo-500 text-white text-lg px-6 py-3 rounded"
                  onClick={() =>
                    setCodeSample(`<button className="bg-indigo-500 text-white text-lg px-6 py-3 rounded">\nLarge\n</button>`)
                  }
                >
                  Large
                </button>
              </div>


              {/* Rounded */}
              <h3 className="text-xl font-semibold mb-2">Rounded</h3>
              <div className="flex gap-4 mb-6">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-none"
                  onClick={() =>
                    setCodeSample(`<button className="bg-green-500 text-white px-4 py-2 rounded-none">\nNone\n</button>`)
                  }
                >
                  None
                </button>

                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md"
                  onClick={() =>
                    setCodeSample(`<button className="bg-green-500 text-white px-4 py-2 rounded-md">\nMedium\n</button>`)
                  }
                >
                  Medium
                </button>

                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-full"
                  onClick={() =>
                    setCodeSample(`<button className="bg-green-500 text-white px-4 py-2 rounded-full">\nFull\n</button>`)
                  }
                >
                  Full
                </button>
              </div>

            </div> {/* end of flex-buttons*/}

              <div className="border-2 border-purple-500 shadow-xl bg-gray-900 rounded-lg p-4 text-sm text-purple-400 overflow-x-auto h-62">
              <h3 className="text-white font-semibold mb-3">
                Code Example
              </h3>
              <textarea
                value={codeSample}
                readOnly
                className="w-full h-40 bg-gray-900 text-green-400 rounded-md font-mono text-left p-1 overflow-x-auto"
              ></textarea>
            </div>
          </div>

        </section>

        {/* Spacing Section */}
        <section id="spacing" className="px-4 md:px-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Spacing</h2>
          <p className="text-white-600 mb-6">
            Selecting different options updates the spacing by swapping Tailwind utility classes.
            This demonstrates how margins, padding, and gaps affect layout visually.
          </p>

          <div className="border-2 border-gray-900 shadow-xl bg-black grid grid-cols-1 md:grid-cols-2 gap-8 p-8 rounded-lg">
            {/* Controls */}
            <div className="flex flex-col items-center">
              {/* Margin */}
              <h3 className="text-xl font-semibold mb-2">Margin</h3>
              <div className="flex gap-4 mb-6">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() =>
                    setPreview(
                      <div className="bg-gray-700 p-4">
                        <div className="m-2 bg-blue-500 text-white">Box with m-2</div>
                        <div className="m-2 bg-blue-500 text-white">Another m-2</div>
                      </div>
                    )
                  }
                >
                  m-2
                </button>

                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() =>
                    setPreview(
                      <div className="bg-gray-700 p-4">
                        <div className="m-4 bg-blue-500 text-white">Box with m-4</div>
                        <div className="m-4 bg-blue-500 text-white">Another m-4</div>
                      </div>
                    )
                  }
                >
                  m-4
                </button>

                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() =>
                    setPreview(
                      <div className="bg-gray-700 p-4">
                        <div className="m-8 bg-blue-500 text-white">Box with m-8</div>
                        <div className="m-8 bg-blue-500 text-white">Another m-8</div>
                      </div>
                    )
                  }
                >
                  m-8
                </button>
              </div>

              {/* Padding */}
              <h3 className="text-xl font-semibold mb-2">Padding</h3>
              <div className="flex gap-4 mb-6">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded"
                  onClick={() => setPreview(<div className="p-2 bg-green-500 text-white">Sample text with Small Padding</div>)}
                >
                  p-2
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded"
                  onClick={() => setPreview(<div className="p-4 bg-green-500 text-white">Sample text with Medium Padding</div>)}
                >
                  p-4
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded"
                  onClick={() => setPreview(<div className="p-8 bg-green-500 text-white">Sample text with Large Padding</div>)}
                >
                  p-8
                </button>
              </div>

              {/* Gap */}
              <h3 className="text-xl font-semibold mb-2">Gap</h3>
              <div className="flex gap-4 mb-6">
                <button
                  className="bg-purple-500 text-white px-4 py-2 rounded"
                  onClick={() =>
                    setPreview(
                      <div className="flex gap-2">
                        <div className="bg-purple-500 text-white px-2">A</div>
                        <div className="bg-purple-500 text-white px-2">B</div>
                      </div>
                    )
                  }
                >
                  gap-2
                </button>
                <button
                  className="bg-purple-500 text-white px-4 py-2 rounded"
                  onClick={() =>
                    setPreview(
                      <div className="flex gap-4">
                        <div className="bg-purple-500 text-white px-2">A</div>
                        <div className="bg-purple-500 text-white px-2">B</div>
                      </div>
                    )
                  }
                >
                  gap-4
                </button>
                <button
                  className="bg-purple-500 text-white px-4 py-2 rounded"
                  onClick={() =>
                    setPreview(
                      <div className="flex gap-8">
                        <div className="bg-purple-500 text-white px-2">A</div>
                        <div className="bg-purple-500 text-white px-2">B</div>
                      </div>
                    )
                  }
                >
                  gap-8
                </button>
              </div>
            </div>

            {/* Live Preview Area */}
            <div className="border-2 border-purple-500 shadow-xl bg-gray-900 rounded-lg p-4 h-62">
              <h3 className="text-white font-semibold mb-3">
                Live Preview
              </h3>
              <div className="flex items-center justify-center text-green-400 h-42">
                {preview}
              </div>
            </div>
          </div>
        </section>


        {/* Typography Section */}
        <section id="text" className="px-4 md:px-8 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Typography</h2>
            <p className="text-white mb-6">
              Selecting different options updates the preview by swapping Tailwind typography classes.
              This demonstrates how text styles are composed from small, reusable utilities.
            </p>

          <div className="border-2 border-gray-900 shadow-xl bg-black grid grid-cols-1 md:grid-cols-2 gap-8 p-8 rounded-lg">
              {/* Controls */}
              <div className="flex flex-col items-center space-y-6">
                {/* Headings */}
                <div>
                  <h3 className="text-xl font-semibold mb-2">Headings</h3>
                  <div className="flex gap-4 mb-4">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                      onClick={() =>
                        setTypographyPreview(<h1 className="text-5xl font-bold text-white">Heading 1 - Extra Large</h1>)
                      }
                    >
                      H1
                    </button>
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                      onClick={() =>
                        setTypographyPreview(<h2 className="text-4xl font-bold text-white">Heading 2 - Large</h2>)
                      }
                    >
                      H2
                    </button>
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                      onClick={() =>
                        setTypographyPreview(<h3 className="text-3xl font-bold text-white">Heading 3 - Medium</h3>)
                      }
                    >
                      H3
                    </button>
                  </div>
                </div>

                {/* Paragraph Sizes */}
                <div>
                  <h3 className="text-xl font-semibold mb-2">Paragraph Sizes</h3>
                  <div className="flex gap-4 mb-4">
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded"
                      onClick={() =>
                        setTypographyPreview(<p className="text-xl text-white">This is a large paragraph (text-xl).</p>)
                      }
                    >
                      text-xl
                    </button>
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded"
                      onClick={() =>
                        setTypographyPreview(<p className="text-base text-white">This is a regular paragraph (text-base).</p>)
                      }
                    >
                      text-base
                    </button>
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded"
                      onClick={() =>
                        setTypographyPreview(<p className="text-sm text-white">This is small text (text-sm).</p>)
                      }
                    >
                      text-sm
                    </button>
                  </div>
                </div>

                {/* Font Styles */}
                <div>
                  <h3 className="text-xl font-semibold mb-2">Font Styles</h3>
                  <div className="flex gap-4 mb-4">
                    <button
                      className="bg-purple-500 text-white px-4 py-2 rounded"
                      onClick={() =>
                        setTypographyPreview(<p className="font-bold text-white">This is bold text.</p>)
                      }
                    >
                      Bold
                    </button>
                    <button
                      className="bg-purple-500 text-white px-4 py-2 rounded"
                      onClick={() =>
                        setTypographyPreview(<p className="italic text-white">This is italic text.</p>)
                      }
                    >
                      Italic
                    </button>
                    <button
                      className="bg-purple-500 text-white px-4 py-2 rounded"
                      onClick={() =>
                        setTypographyPreview(<p className="underline text-blue-600">This is underlined text.</p>)
                      }
                    >
                      Underline
                    </button>
                  </div>
                </div>
              </div>

            {/* Live Preview Area */}
            <div className="border-2 border-purple-500 shadow-xl bg-gray-900 rounded-lg p-6 flex items-center justify-center h-62">
              {typographyPreview}
            </div>
          </div>

        </section>

        {/* Layouts Section */}
        <section id="layouts" className="px-4 md:px-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Layout Examples</h2>
          
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