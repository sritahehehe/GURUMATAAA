import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import Home from "./pages/Home";
import AchiWaliAnkita from "./pages/AchiWaliAnkita";
import KutkutiAnkita from "./pages/KutkutiAnkita";
import Gurumata from "./pages/Gurumata";
import MeowPage from "./pages/MeowPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/achi" element={<AchiWaliAnkita />} />
            <Route path="/kutkuti" element={<KutkutiAnkita />} />
            <Route path="/gurumata" element={<Gurumata />} />
            <Route path="/meow" element={<MeowPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
