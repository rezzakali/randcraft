'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import React, { useState } from 'react';

const cursorGroups = [
  {
    group: 'General',
    cursors: [
      { name: 'Default', style: 'default' },
      { name: 'Pointer', style: 'pointer' },
      { name: 'Text', style: 'text' },
      { name: 'Wait', style: 'wait' },
      { name: 'Help', style: 'help' },
      { name: 'Progress', style: 'progress' },
    ],
  },
  {
    group: 'Zoom',
    cursors: [
      { name: 'Zoom In', style: 'zoom-in' },
      { name: 'Zoom Out', style: 'zoom-out' },
    ],
  },
  {
    group: 'Dragging',
    cursors: [
      { name: 'Move', style: 'move' },
      { name: 'Grab', style: 'grab' },
      { name: 'Grabbing', style: 'grabbing' },
    ],
  },
  {
    group: 'Resize',
    cursors: [
      { name: 'Resize Horizontal', style: 'ew-resize' },
      { name: 'Resize Vertical', style: 'ns-resize' },
      {
        name: 'Resize Diagonal (Top-Left to Bottom-Right)',
        style: 'nwse-resize',
      },
      {
        name: 'Resize Diagonal (Top-Right to Bottom-Left)',
        style: 'nesw-resize',
      },
    ],
  },
];

const Index = () => {
  const [copiedCursor, setCopiedCursor] = useState<string | null>(null);

  const handleCopy = (cursorStyle: string) => {
    navigator.clipboard.writeText(cursorStyle);
    setCopiedCursor(cursorStyle);
    setTimeout(() => setCopiedCursor(null), 800);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">CSS Cursors</h1>
      <TooltipProvider>
        <div className="space-y-4">
          {cursorGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-4">
              <h2 className="text-lg font-semibold">{group.group}</h2>
              <div className="grid grid-cols-3 gap-4">
                {group.cursors.map((cursor, cursorIndex) => (
                  <Tooltip key={cursorIndex}>
                    <TooltipTrigger
                      className={`p-3 border rounded cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foreground ${
                        copiedCursor === cursor.style
                          ? '!bg-green-500 !text-foreground'
                          : ''
                      }`}
                      style={{ cursor: cursor.style }}
                      onClick={() => handleCopy(cursor.style)}
                    >
                      {copiedCursor === cursor.style ? (
                        <p className="text-center !text-foreground">Copied</p>
                      ) : (
                        <React.Fragment>
                          <p className="text-center">{cursor.name}</p>
                          <p className="text-xs text-center">{cursor.style}</p>
                        </React.Fragment>
                      )}
                    </TooltipTrigger>
                    <TooltipContent>Click to copy value</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </TooltipProvider>
    </div>
  );
};

export default Index;
