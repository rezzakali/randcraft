import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useState } from 'react';
import { symbolsData } from './symbols-data';

const Index = () => {
  const [activeTab, setActiveTab] = useState('Most Used');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSymbols = symbolsData
    .filter((group) => group.group === activeTab)
    .flatMap((group) => group.symbols)
    .filter(
      (symbol) =>
        symbol.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        symbol.symbol.includes(searchQuery) ||
        symbol.entity.includes(searchQuery)
    );

  return (
    <TooltipProvider>
      <div>
        <h1 className="text-2xl font-bold mb-4">Symbols Collection</h1>

        {/* Tabs */}
        <Tabs
          defaultValue="Most Used"
          className="mb-6 w-full"
          onValueChange={(value) => setActiveTab(value)}
        >
          <TabsList className="w-auto flex items-center justify-between bg-sidebar-accent">
            {symbolsData.map((group) => (
              <TabsTrigger value={group.group} key={group.group}>
                {group.group}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeTab}>
            {/* Search Input */}
            <div className="mb-6">
              <Input
                type="text"
                placeholder="Search symbols..."
                className="w-full p-2 border rounded"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Symbols Table */}
            <div>
              <table className="table-auto w-full border-collapse border border-gray-400 rounded">
                <thead className="!sticky top-0 bg-sidebar-accent">
                  <tr className="text-sidebar-foreground">
                    <th className="border p-2">Symbol</th>
                    <th className="border p-2">Name</th>
                    <th className="border p-2">HTML Entity</th>
                    <th className="border p-2">CSS Entity</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSymbols.map((symbol, index) => (
                    <tr
                      key={index}
                      className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    >
                      {/* Symbol */}
                      <td
                        className="border p-2 text-center cursor-pointer"
                        onClick={() => {
                          navigator.clipboard.writeText(symbol.symbol);
                        }}
                      >
                        <Tooltip>
                          <TooltipTrigger>{symbol.symbol}</TooltipTrigger>
                          <TooltipContent>Copy Symbol</TooltipContent>
                        </Tooltip>
                      </td>

                      {/* Name */}
                      <td className="border p-2">{symbol.name}</td>

                      {/* HTML Entity */}
                      <td
                        className="border p-2 text-center cursor-pointer"
                        onClick={() =>
                          navigator.clipboard.writeText(symbol.entity)
                        }
                      >
                        <Tooltip>
                          <TooltipTrigger>{symbol.entity}</TooltipTrigger>
                          <TooltipContent>Copy HTML Entity</TooltipContent>
                        </Tooltip>
                      </td>

                      {/* CSS Entity */}
                      <td
                        className="border p-2 text-center"
                        onClick={() =>
                          navigator.clipboard.writeText(symbol.css)
                        }
                      >
                        <Tooltip>
                          <TooltipTrigger>{symbol.css}</TooltipTrigger>
                          <TooltipContent>Copy CSS Entity</TooltipContent>
                        </Tooltip>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredSymbols.length === 0 && (
              <p className="text-center text-gray-500 mt-4">
                No symbols found.
              </p>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </TooltipProvider>
  );
};

export default Index;
