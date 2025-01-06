import {
  BetweenHorizontalEnd,
  Database,
  Images,
  MousePointer,
  Palette,
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
import Link from 'next/link';

// Menu items.
const items = [
  {
    title: 'Lorem Ipsum',
    url: '/lorem-ipsum',
    icon: Database,
  },
  {
    title: 'Gradient Generator',
    url: '/gradient-generator',
    icon: Rainbow,
  },
  {
    title: 'Fake Data Generator',
    url: '/fake-data-generator',
    icon: BetweenHorizontalEnd,
  },
  {
    title: 'Base64',
    url: '/base64',
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
  {
    title: 'Color Shades Generator',
    url: '/color-shades-generator',
    icon: Palette,
  },
  {
    title: 'Image Compressor',
    url: '/image-compressor',
    icon: Images,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl font-semibold text-black dark:text-white mb-2">
            <Link href={'/'}>Randcraft</Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
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
