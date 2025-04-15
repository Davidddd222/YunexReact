import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Reporte de hora",
    url: "#",
    icon: Home,
  },
  {
    title: "Laboratorio",
    url: "#",
    icon: Inbox,
  },
  {
    title: "EHS",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Almacen",
    url: "#",
    icon: Search,
  },
  {
    title: "Vehículos",
    url: "#",
    icon: Settings,
  },
  {
    title: "Garantías",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="bg-green-500 mr-4">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex justify-center text-lg font-bold ">
            Yunex Traffic
          </SidebarGroupLabel>
          
          {/* Agregamos la línea aquí */}
          <div
            style={{
              borderBottom: '1px solid #000',
              width: '90%',
              margin: '20px auto',
              borderTop: '1px solid #000',
            }}
          />
          
          <SidebarGroupContent>
            <SidebarMenu className="ml-2 font-semibold text">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

