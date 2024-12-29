import React, { useState } from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css'; // Import the default styles for React-Resizable

const SkeletonGenerator = () => {
  const [tailwindClasses, setTailwindClasses] = useState(
    'h-6 w-full bg-gray-300 rounded animate-pulse'
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTailwindClasses(event.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row gap-1 p-6">
      {/* Left: Live Editor */}
      <ResizableBox
        width={400}
        height={300}
        minConstraints={[200, 150]} // Minimum size [width, height]
        maxConstraints={[800, 600]} // Maximum size [width, height]
        resizeHandles={['e']} // Enable resizing from the right
        className="border rounded-md bg-sidebar-accent"
      >
        <div className="flex flex-col h-full">
          <h2 className="text-lg font-semibold mb-2">
            Write Tailwind Classes:
          </h2>
          <textarea
            className="w-full h-full p-4 border border-sidebar-accent bg-sidebar-accent outline-none focus:outline-1"
            value={tailwindClasses}
            onChange={handleInputChange}
            placeholder="e.g., h-6 w-full rounded animate-pulse"
          />
        </div>
      </ResizableBox>

      {/* Right: Live Preview */}
      <ResizableBox
        width={400}
        height={300}
        minConstraints={[200, 150]}
        maxConstraints={[800, 600]}
        resizeHandles={['w']} // Enable resizing from the left
        className="border border-gray-200 rounded-md"
      >
        <div className="flex flex-col h-full">
          <h2 className="text-lg font-semibold mb-2">Live Preview:</h2>
          <div className="flex-1 p-6 border border-gray-200 rounded-md">
            <div className={tailwindClasses}></div>
          </div>
        </div>
      </ResizableBox>
    </div>
  );
};

export default SkeletonGenerator;
