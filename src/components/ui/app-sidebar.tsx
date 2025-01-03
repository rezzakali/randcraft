import {
  BetweenHorizontalEnd,
  Database,
  MousePointer,
  Rainbow,
  Section,
  Shuffle,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Link } from 'react-router-dom';

// Menu items.
const items = [
  {
    title: 'Lorem Ipsum',
    url: '/',
    icon: Database,
  },
  {
    title: 'Gradient Generate',
    url: '/gradient-color',
    icon: Rainbow,
  },
  {
    title: 'Fake Data Generate',
    url: '/random-fake-data',
    icon: BetweenHorizontalEnd,
  },
  {
    title: 'Random ID Generate',
    url: '/random-id-generate',
    icon: Shuffle,
  },
  {
    title: 'CSS Cursors',
    url: '/css-cursors',
    icon: MousePointer,
  },
  {
    title: 'Symbols Collection',
    url: '/symbols-collection',
    icon: Section,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl font-semibold text-black dark:text-white mb-2">
            RandCraft
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
