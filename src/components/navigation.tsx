'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { 
  Home, 
  Building2, 
  Upload, 
  BarChart3,
  Coffee
} from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Competidores", href: "/competitors", icon: Building2 },
  { name: "Subir Documentos", href: "/upload", icon: Upload },
  { name: "Comparador", href: "/comparator", icon: BarChart3 },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-neutral-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-8 h-8 bg-[#000f9f] rounded-lg">
              <Coffee className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-neutral-900">East Crema</h1>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.name} href={item.href}>
                  <Button 
                    variant={isActive ? "default" : "ghost"}
                    className={isActive ? "bg-[#000f9f] hover:bg-[#000d8a] text-white" : "text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100"}
                  >
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.name}
                  </Button>
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <Home className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
