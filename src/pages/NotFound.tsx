import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Pagina nu a fost găsită</p>
        <Link to="/" className="text-nature-green underline hover:text-field-green transition-colors">
          Înapoi la Pagina Principală
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
