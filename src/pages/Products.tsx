import { ArrowRight, Leaf, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Products = () => {
  const cultivatedPlants = [
    {
      name: "CIMBRU",
      icon: "🌱",
      description: "Aromă intensă, perfect pentru ceaiuri tonifiante și preparate culinare",
      properties: ["Antioxidant", "Antiseptic", "Digestiv"]
    },
    {
      name: "ȘOVÂRF (Oregano Sălbatic)",
      icon: "🌿", 
      description: "Plantă aromatică cu proprietăți antibacteriene puternice",
      properties: ["Antibacterian", "Antifungic", "Expectorant"]
    },
    {
      name: "MELISA (Roinița)",
      icon: "🍃",
      description: "Efecte calmante, aromă delicată, ideală pentru ceaiuri relaxante",
      properties: ["Calmant", "Antispastic", "Relaxant"]
    },
    {
      name: "SALVIE",
      icon: "🌱",
      description: "\"Planta vindecătoare\" folosită de secole în medicina tradițională",
      properties: ["Antiinflamator", "Astringent", "Antiseptic"]
    },
    {
      name: "MONARDĂ",
      icon: "🌸",
      description: "Parfum puternic, proprietăți antimicrobiene, plantă decorativă",
      properties: ["Antimicrobian", "Aromat", "Decorativ"]
    },
    {
      name: "ECHINACEE",
      icon: "🌻",
      description: "Renumită pentru întărirea sistemului imunitar",
      properties: ["Imunostimulator", "Antiinflamator", "Antiviral"]
    }
  ];

  const wildPlants = [
    {
      name: "Urzică",
      icon: "🌾",
      description: "Bogată în minerale, perfect pentru detoxifiere"
    },
    {
      name: "Floare de Salcâm", 
      icon: "🌸",
      description: "Aromă delicată pentru ceaiuri și siropuri"
    },
    {
      name: "Cicoare",
      icon: "💜", 
      description: "Înlocuitor natural de cafea, benefic pentru ficat"
    },
    {
      name: "Pojarniță (Sunătoare)",
      icon: "🌻",
      description: "Efecte antidepresive naturale"
    },
    {
      name: "Coada-șoricelului",
      icon: "🌱",
      description: "Proprietăți antiinflamatoare"
    },
    {
      name: "Măceșe",
      icon: "🔴",
      description: "Sursa naturală de vitamina C"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-nature text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Plante Medicinale Crescute cu Grijă în Moldova
          </h1>
          <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Descoperă colecția noastră de plante cultivate ecologic și colectate manual din natura sălbatică
          </p>
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg font-medium mb-2">📞 Pentru comenzi și informații</p>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact">
                Contactează-ne Direct
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cultivated Plants Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 text-sm font-semibold px-4 py-2">
              CULTURILE PRINCIPALE
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              Cultivate pe Terenurile Proprii
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Plante crescute cu grijă manuală pe 10 hectare de teren ecologic în Moldova
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cultivatedPlants.map((plant, index) => (
              <Card key={index} className="shadow-nature hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{plant.icon}</div>
                  <CardTitle className="text-xl font-serif font-bold text-nature-green">
                    {plant.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {plant.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {plant.properties.map((property, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {property}
                      </Badge>
                    ))}
                  </div>
                  <div className="pt-4 border-t">
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link to="/contact">
                        Contactează-ne pentru disponibilitate
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wild Plants Section */}
      <section className="py-16 lg:py-24 bg-gradient-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 text-sm font-semibold px-4 py-2">
              FLORA SPONTANĂ
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              Colectate Manual din Natură
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Plante sălbatice colectate responsabil din flora spontană a Moldovei
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wildPlants.map((plant, index) => (
              <Card key={index} className="shadow-light hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">{plant.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {plant.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {plant.description}
                  </p>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link to="/contact">
                      Informații
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Leaf className="h-16 w-16 text-nature-green mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6">
              Calitate Garantată
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-nature-green mb-2">100%</div>
                <div className="text-muted-foreground">Ecologic</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-nature-green mb-2">0</div>
                <div className="text-muted-foreground">Chimicale</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-nature-green mb-2">20</div>
                <div className="text-muted-foreground">Ani experiență</div>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Toate plantele noastre sunt uscate natural și procesate manual pentru 
              păstrarea maximă a principiilor active și proprietăților terapeutice.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-forest text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
            Pentru Comenzi și Informații despre Disponibilitate
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Contactează-ne direct pentru a afla despre stocul disponibil și prețuri
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="hero-outline" asChild>
              <Link to="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Contactează-ne Telefonic
              </Link>
            </Button>
            <Button size="lg" variant="hero-outline" asChild>
              <Link to="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Trimite un Email
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;