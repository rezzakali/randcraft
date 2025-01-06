'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import { AppSidebar } from '../ui/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '../ui/sidebar';
import { Toaster } from '../ui/toaster';

const Index = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  return (
    <React.Fragment>
      {pathname !== '/' ? (
        <SidebarProvider>
          <AppSidebar />
          <div className="w-full">
            <SidebarTrigger />
            <main className="p-4">{children}</main>
            <Toaster />
          </div>
        </SidebarProvider>
      ) : (
        <div className="w-full">
          <main className="p-4">{children}</main>
          <Toaster />
        </div>
      )}
    </React.Fragment>
  );
};

export default Index;
