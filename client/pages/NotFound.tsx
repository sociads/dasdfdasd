import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen grid place-items-center bg-background">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold">404</h1>
        <p className="mt-2 text-muted-foreground">Aradığınız sayfa bulunamadı.</p>
        <a href="/" className="mt-6 inline-block underline hover:text-foreground">
          Ana sayfaya dön
        </a>
      </div>
    </div>
  );
};

export default NotFound;
