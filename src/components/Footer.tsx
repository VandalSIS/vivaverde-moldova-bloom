import { Link } from "react-router-dom";
import { Leaf, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-soil-dark text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 text-xl font-serif font-semibold mb-4">
              <Leaf className="h-8 w-8 text-harvest-gold" />
              <span>Vivaverde</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              De aproape 20 de ani cultivăm și colectăm plante medicinale ecologice pe 
              10 hectare în Moldova. Muncă manuală, 100% natural, cu respect pentru natură.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-harvest-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-harvest-gold transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigare</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                  Acasă
                </Link>
              </li>
              <li>
                <Link to="/despre" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link to="/produse" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                  Produse
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contact@vivaverde.md</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+373 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Moldova</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Vivaverde. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;