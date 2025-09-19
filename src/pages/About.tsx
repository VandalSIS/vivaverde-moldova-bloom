import { Calendar, Heart, Leaf, ShieldCheck, Eye, Tractor } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import excavatorWork from "@/assets/excavator-work.jpg";
import landPreparation from "@/assets/land-preparation.jpg";
import manualClearing from "@/assets/manual-clearing.jpg";
import fieldWorkers from "@/assets/field-workers.jpg";

const About = () => {
  const timeline = [
    {
      year: "2005",
      title: "Începutul",
      description: "Totul a început cu o viziune simplă - să redăm viața unor terenuri abandonate. Am cumpărat primul lot dintr-o fostă plantație de viță-de-vie, părăsită și uitată. Cu excavatorul și multă determinare, am început să defrișez, să curat și să pregătesc solul pentru o nouă destinație.",
      image: excavatorWork
    },
    {
      year: "2005-2024",
      title: "Transformarea",
      description: "Teren cu teren, an cu an, am construit ceea ce este azi Vivaverde. 10 hectare de pământ ecologic, neatins de chimicale, ideal pentru plante medicinale. Procesul a fost costisitor și laborios, dar fiecare moment de muncă a meritat.",
      image: landPreparation
    },
    {
      year: "Astăzi",
      title: "Munca de Astăzi",
      description: "Toate plantele sunt cultivate în sistem de agricultură ecologică, fără erbicide, doar cu îngrășăminte naturale, și crescute manual, fără echipamente agricole agresive.",
      image: fieldWorkers
    }
  ];

  const workProcess = [
    {
      icon: <Tractor className="h-8 w-8 text-earth-brown" />,
      title: "Pregătirea solului",
      description: "Cu tractorul și lucrul manual pentru structura perfectă"
    },
    {
      icon: <Leaf className="h-8 w-8 text-nature-green" />,
      title: "Semănatul",
      description: "Fiecare sămânță pusă cu grijă în momentul optim"
    },
    {
      icon: <Heart className="h-8 w-8 text-harvest-gold" />,
      title: "Îngrijirea",
      description: "Plivit manual, irigat controlat, monitorizare constantă"
    },
    {
      icon: <Calendar className="h-8 w-8 text-field-green" />,
      title: "Recoltarea",
      description: "În momentele cheie pentru concentrația maximă de principii active"
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-nature-green" />,
      title: "Procesarea",
      description: "Uscarea naturală pentru păstrarea calităților terapeutice"
    }
  ];

  const values = [
    {
      icon: <Heart className="h-6 w-6 text-harvest-gold" />,
      title: "Autenticitate",
      description: "Respectăm tradițiile și metodele naturale"
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-nature-green" />,
      title: "Calitate",
      description: "Nu facem compromisuri la calitatea produselor"
    },
    {
      icon: <Leaf className="h-6 w-6 text-field-green" />,
      title: "Sustenabilitate",
      description: "Cultivăم respectând echilibrul natural"
    },
    {
      icon: <Eye className="h-6 w-6 text-earth-brown" />,
      title: "Transparență",
      description: "Știi exact de unde vin plantele tale"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-nature text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Din Dragoste pentru Pământ
          </h1>
          <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Povestea Vivaverde
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className={`flex flex-col lg:flex-row gap-8 mb-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-earth"
                  />
                </div>
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <div className="bg-nature-green text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold inline-block w-fit mb-4">
                    {item.year}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-16 lg:py-24 bg-nature-green-light/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              Procesul Nostru de Muncă
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              De la pregătirea solului până la procesarea finală
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {workProcess.map((step, index) => (
              <Card key={index} className="text-center shadow-nature hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              Valorile Noastre
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Principiile care ne ghidează în tot ceea ce facem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 p-3 bg-secondary rounded-full w-fit mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-earth text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
            Cunoaște Povestea Completă
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Fiecare plantă din câmpurile noastre are o poveste de dedicare și grijă
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;