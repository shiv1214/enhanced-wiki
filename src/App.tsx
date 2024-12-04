import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/theme-context';
import { MainContent } from '@/components/main-content';
import { Sidebar } from '@/components/sidebar';
import { Header } from '@/components/header';
import { ArticleView } from '@/components/article-view';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <div className="flex">
            <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/article/:slug" element={<ArticleView />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}