import { ArrowRight, Leaf, Users, Award, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroFields from "@/assets/hero-fields.jpg";
import proudFarmer from "@/assets/proud-farmer.jpg";
import herbHarvesting from "@/assets/herb-harvesting.jpg";
import lavenderHarvest from "@/assets/lavender-harvest.jpg";
import manualHarvest from "@/assets/manual-harvest.jpg";
import excavatorWork from "@/assets/excavator-work.jpg";

const Home = () => {
  const whyCards = [
    {
      icon: <Leaf className="h-8 w-8 text-nature-green" />,
      title: "100% Natural",
      description: "Fără chimicale sau pesticide, doar natura pură cultivată cu grijă manuală"
    },
    {
      icon: <MapPin className="h-8 w-8 text-nature-green" />,
      title: "Cultivat în Moldova",
      description: "Pe solurile fertile ale fostelor plantații de viță-de-vie din Moldova"
    },
    {
      icon: <Users className="h-8 w-8 text-nature-green" />,
      title: "Muncă Manuală",
      description: "Fiecare plantă crescută și recoltată cu grijă personală și dedicare"
    },
    {
      icon: <Award className="h-8 w-8 text-nature-green" />,
      title: "Experiență din 2005",
      description: "Aproape 20 de ani de pasiune și dedicare pentru plante medicinale"
    }
  ];

  const storyImages = [
    { src: excavatorWork, alt: "Defrișarea terenurilor cu excavatorul", caption: "Început - defrișarea terenurilor" },
    { src: herbHarvesting, alt: "Recoltarea manuală a plantelor", caption: "Recoltarea cu grijă manuală" },
    { src: lavenderHarvest, alt: "Recoltarea lavandei", caption: "Colectarea plantelor aromatice" },
    { src: manualHarvest, alt: "Procesarea manuală", caption: "Procesarea tradițională" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroFields})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight text-white">
            Vivaverde
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal mt-2 text-white/90">
              Natura Moldovei în Starea Ei Pură
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-white/80 max-w-3xl mx-auto">
            10 hectare de terenuri ecologice, 20 de ani de experiență, 
            plante crescute cu grijă manuală
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="hero" asChild>
              <Link to="/produse">
                Descoperă Produsele Noastre
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="hero-outline" asChild>
              <Link to="/despre">
                Povestea Noastră
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Vivaverde Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              De ce Vivaverde?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descoperă ce ne face unici în cultivarea plantelor medicinale ecologice
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyCards.map((card, index) => (
              <Card key={index} className="text-center shadow-nature hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story in Images Section */}
      <section className="py-16 lg:py-24 bg-nature-green-light/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              Povestea în Imagini
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              De la defrișarea cu excavatorul la recoltarea cu grijă manuală
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {storyImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-earth">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-soil-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-primary-foreground text-sm font-medium">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial/Stats Section */}
      <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-earth opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl lg:text-3xl font-serif font-medium text-foreground mb-8">
              "De la vie abandonată la fermă ecologică prosperă"
            </blockquote>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-nature-green mb-2">10</div>
                <div className="text-muted-foreground">hectare cultivate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-nature-green mb-2">15+</div>
                <div className="text-muted-foreground">specii cultivate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-nature-green mb-2">5+</div>
                <div className="text-muted-foreground">specii colectate</div>
              </div>
            </div>
            
            <div className="mt-12 relative">
              <img 
                src={proudFarmer} 
                alt="Fermier mândru în fața câmpurilor Vivaverde"
                className="w-full max-w-2xl mx-auto rounded-lg shadow-elevated"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-nature-green text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
            Gata să Descoperi Plantele Noastre?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Contactează-ne pentru a afla mai multe despre produsele noastre ecologice
          </p>
          <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
            <Link to="/contact">
              Contactează-ne Acum
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;