import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { MessageSquare } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"

export function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate('/')}
          >
            <div className="rounded-lg bg-primary p-2">
              <MessageSquare className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              DebateAI
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Button 
              variant="ghost" 
              className="text-muted-foreground hover:text-foreground"
              onClick={() => navigate('/')}
            >
              Home
            </Button>
            <Button 
              variant="ghost" 
              className="text-muted-foreground hover:text-foreground"
            >
              Topics
            </Button>
            <Button 
              variant="ghost" 
              className="text-muted-foreground hover:text-foreground"
            >
              Leaderboard
            </Button>
            <Button 
              variant="ghost" 
              className="text-muted-foreground hover:text-foreground"
            >
              About
            </Button>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {location.pathname === '/' && (
              <>
                <Button 
                  variant="ghost" 
                  onClick={() => navigate('/login')}
                  className="hidden sm:inline-flex"
                >
                  Login
                </Button>
                <Button 
                  variant="hero" 
                  onClick={() => navigate('/signup')}
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}