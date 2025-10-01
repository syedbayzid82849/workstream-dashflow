import { LayoutDashboard, FolderKanban, CheckSquare, Users, Calendar, FileText, Settings } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

const menuItems = [
  { title: 'Dashboard', url: '/', icon: LayoutDashboard },
  { title: 'Projects', url: '/projects', icon: FolderKanban },
  { title: 'Tasks', url: '/tasks', icon: CheckSquare },
  { title: 'Team', url: '/team', icon: Users },
  { title: 'Attendance', url: '/attendance', icon: Calendar },
  { title: 'Reports', url: '/reports', icon: FileText },
  { title: 'Settings', url: '/settings', icon: Settings },
];

export function AppSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar collapsible="icon" className="border-r border-border/50">
      <SidebarContent className="bg-sidebar-background">
        <div className="px-6 py-5">
          <h1 className={`font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all ${!open ? 'opacity-0' : 'opacity-100'}`}>
            WorkStream
          </h1>
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel className={open ? 'px-6' : 'px-0'}>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url}
                      end={item.url === '/'}
                      className={({ isActive }) =>
                        `nav-item ${isActive ? 'nav-item-active' : 'nav-item-inactive'}`
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </NavLink>
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
