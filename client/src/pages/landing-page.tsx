
import { useAuth } from "@/hooks/use-auth";
import { useLocation } from "wouter";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RiUserSmileLine } from "react-icons/ri";

export default function LandingPage() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (user) {
      setLocation("/");
    }
  }, [user, setLocation]);

  const handleLoginClick = () => {
    setLocation("/auth");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-background border-b py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <RiUserSmileLine className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold">Compare AI</h1>
          </div>
          <Button onClick={handleLoginClick}>Login / Register</Button>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-6">Compare AI</h1>
          <p className="text-xl mb-8">
            Challenge your friends to photo comparisons using advanced AI technology.
            See who has the better smile, expression, or overall look with our cutting-edge facial analysis.
          </p>
          <div className="space-y-4">
            <Button size="lg" onClick={handleLoginClick} className="text-lg px-8 py-6">
              Get Started
            </Button>
          </div>
        </div>
      </main>

      <footer className="bg-background border-t py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Compare AI. All rights reserved.</p>
          <a href="/privacy-policy" className="text-sm text-primary hover:underline">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}
