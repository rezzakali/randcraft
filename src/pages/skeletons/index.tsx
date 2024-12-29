import { Code2, CopyIcon, Eye } from 'lucide-react';
import { useState } from 'react';
import SkeletonGenerator from './SkeletonGenerator';

// SkeletonCard Component
const SkeletonCard = () => (
  <div className="animate-pulse flex space-x-3 border p-2 rounded">
    <div className="rounded-full bg-sidebar-accent h-12 w-12"></div>
    <div className="flex-1 space-y-4 py-1">
      <div className="h-4 bg-sidebar-accent rounded w-3/4"></div>
      <div className="space-y-2">
        <div className="h-3 bg-sidebar-accent rounded"></div>
        <div className="h-3 bg-sidebar-accent rounded w-5/6"></div>
      </div>
    </div>
  </div>
);

// SkeletonParagraph Component
const SkeletonParagraph = () => (
  <div className="animate-pulse space-y-2 border p-2 rounded">
    <div className="h-4 bg-sidebar-accent rounded"></div>
    <div className="h-4 bg-sidebar-accent rounded w-5/6"></div>
    <div className="h-4 bg-sidebar-accent rounded w-2/3"></div>
  </div>
);

// CodeBlock Component
const CodeBlock = ({
  component,
  code,
}: {
  component: React.ReactNode;
  code: string;
}) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="p-4 border rounded mb-4">
      <div className="flex items-center justify-end space-x-2 mb-2">
        <Eye
          onClick={() => setShowCode(false)}
          className={`cursor-pointer w-4 h-4 ${
            !showCode ? 'text-blue-500' : 'text-gray-400'
          }`}
        />
        <Code2
          onClick={() => setShowCode(true)}
          className={`cursor-pointer w-4 h-4 ${
            showCode ? 'text-blue-500' : 'text-gray-400'
          }`}
        />
      </div>

      {/* Toggle between Component Preview and Code View */}
      {!showCode ? (
        <div>{component}</div> // Render live component
      ) : (
        <div className="relative">
          <pre className="bg-sidebar-accent p-4 rounded overflow-auto">
            <code>{code}</code>
          </pre>
          <CopyIcon
            onClick={() => navigator.clipboard.writeText(code)}
            className="absolute top-2 right-2 cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

// Main Component (Index Page)
const Index = () => {
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-6">Skeleton Examples</h1>

      <h1>Generate Skeleton</h1>
      <SkeletonGenerator />

      <div>
        <h2 className="mb-2">Card</h2>
        <CodeBlock
          component={<SkeletonCard />}
          code={`const SkeletonCard = () => (
  <div className="animate-pulse flex space-x-3 border p-2 rounded">
    <div className="rounded-full bg-[#f9f9f9] h-12 w-12"></div>
    <div className="flex-1 space-y-4 py-1">
      <div className="h-4 bg-[#f9f9f9] rounded w-3/4"></div>
      <div className="space-y-2">
        <div className="h-3 bg-[#f9f9f9] rounded"></div>
        <div className="h-3 bg-[#f9f9f9] rounded w-5/6"></div>
      </div>
    </div>
  </div>
);`}
        />
      </div>

      <div>
        <h2 className="mb-2">Paragraph</h2>
        <CodeBlock
          component={<SkeletonParagraph />}
          code={`const SkeletonParagraph = () => (
  <div className="animate-pulse space-y-2 border p-2 rounded">
    <div className="h-4 bg-[#f9f9f9] rounded"></div>
    <div className="h-4 bg-[#f9f9f9] rounded w-5/6"></div>
    <div className="h-4 bg-[#f9f9f9] rounded w-2/3"></div>
  </div>
);`}
        />
      </div>
    </div>
  );
};

export default Index;
