'use client';

import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useToast } from '@/hooks/use-toast';
import { useDebounce } from '@/hooks/useDebounce';
import { useMemo, useState } from 'react';
import { tabMeta } from './meta-data';
import { symbolsData } from './symbols-data';

type TabKeys = keyof typeof tabMeta;

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabKeys>('Most Used');
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 300); // Debounce search input by 300ms

  const { toast } = useToast();

  // Filtered symbols with memoization
  const filteredSymbols = useMemo(() => {
    return symbolsData
      .filter((group) => group.group === activeTab)
      .flatMap((group) => group.symbols)
      .filter(
        (symbol) =>
          symbol.name
            .toLowerCase()
            .includes(debouncedSearchQuery.toLowerCase()) ||
          symbol.symbol.includes(debouncedSearchQuery) ||
          symbol.entity.includes(debouncedSearchQuery)
      );
  }, [activeTab, debouncedSearchQuery]);

  const copyHanler = async (string: string) => {
    try {
      await navigator.clipboard.writeText(string);
      toast({
        title: 'Copied!',
        variant: 'default',
      });
    } catch (error) {
      console.log('🚀 ~ copyHanler ~ error:', error);
      toast({ title: 'Failed to copy!', variant: 'destructive' });
    }
  };

  return (
    <TooltipProvider>
      <div>
        <h1 className="text-2xl font-bold mb-4">Symbols Collection</h1>

        {/* Tabs */}
        <Tabs
          defaultValue="Most Used"
          className="mb-6 w-full"
          onValueChange={(value) => setActiveTab(value as TabKeys)}
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
                        onClick={() => copyHanler(symbol.symbol)}
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
                        onClick={() => copyHanler(symbol.entity)}
                      >
                        <Tooltip>
                          <TooltipTrigger>{symbol.entity}</TooltipTrigger>
                          <TooltipContent>Copy HTML Entity</TooltipContent>
                        </Tooltip>
                      </td>

                      {/* CSS Entity */}
                      <td
                        className="border p-2 text-center"
                        onClick={() => copyHanler(symbol.css)}
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
