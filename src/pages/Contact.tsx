import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Facebook, Youtube, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mesaj trimis cu succes!",
      description: "Îți vom răspunde în cel mai scurt timp posibil.",
    });
    setFormData({ name: "", email: "", phone: "", type: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-nature-green" />,
      title: "Email",
      details: "contact@vivaverde.md",
      description: "Răspundem în maxim 24 de ore"
    },
    {
      icon: <Phone className="h-6 w-6 text-nature-green" />,
      title: "Telefon",
      details: "+373 XXX XXX XXX",
      description: "Luni-Vineri, 8:00-18:00"
    },
    {
      icon: <MapPin className="h-6 w-6 text-nature-green" />,
      title: "Locația Fermei",
      details: "Moldova, Republica Moldova",
      description: "Vizite cu programare în avans"
    },
    {
      icon: <Clock className="h-6 w-6 text-nature-green" />,
      title: "Program",
      details: "Luni-Vineri 8:00-18:00",
      description: "Weekend doar cu programare"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-nature text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Hai să Vorbim
          </h1>
          <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Suntem Aici pentru Tine
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center shadow-nature hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {info.title}
                  </h3>
                  <p className="text-lg font-medium text-nature-green mb-1">
                    {info.details}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-nature-green-light/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elevated">
              <CardHeader>
                <CardTitle className="text-2xl font-serif font-bold text-foreground">
                  Trimite-ne un Mesaj
                </CardTitle>
                <p className="text-muted-foreground">
                  Completează formularul și îți vom răspunde cât mai curând posibil
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nume complet *</Label>
                      <Input
                        id="name"
                        placeholder="Numele tău complet"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@exemplu.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input
                        id="phone"
                        placeholder="+373 XXX XXX XXX"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="type">Tip solicitare</Label>
                      <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selectează tipul" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="info">Informații produse</SelectItem>
                          <SelectItem value="comenzi">Comenzi</SelectItem>
                          <SelectItem value="colaborari">Colaborări</SelectItem>
                          <SelectItem value="altele">Altele</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Mesaj *</Label>
                    <Textarea
                      id="message"
                      placeholder="Scrie aici mesajul tău..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Trimite Mesajul
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map Placeholder and Social Media */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="shadow-elevated">
                <CardHeader>
                  <CardTitle className="text-xl font-serif font-bold text-foreground">
                    Locația Fermei
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-nature-green-light/30 h-64 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-nature-green mx-auto mb-2" />
                      <p className="text-muted-foreground">
                        Harta interactivă<br />
                        cu locația fermei
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Vizitele la fermă sunt posibile cu programare în avans. 
                    Contactează-ne pentru a stabili o întâlnire.
                  </p>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="shadow-elevated">
                <CardHeader>
                  <CardTitle className="text-xl font-serif font-bold text-foreground">
                    Urmărește-ne
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Vezi munca noastră în acțiune
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors">
                      <Facebook className="h-6 w-6 text-blue-600" />
                      <div>
                        <p className="font-medium text-foreground">Facebook</p>
                        <p className="text-sm text-muted-foreground">Poze și actualizări de la fermă</p>
                      </div>
                    </a>
                    <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors">
                      <Youtube className="h-6 w-6 text-red-600" />
                      <div>
                        <p className="font-medium text-foreground">YouTube</p>
                        <p className="text-sm text-muted-foreground">Video-uri cu activitatea noastră</p>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              Întrebări Frecvente
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Cum pot comanda plante medicinale?
                </h3>
                <p className="text-muted-foreground">
                  Contactează-ne telefonic sau prin email pentru a afla despre disponibilitate 
                  și prețuri. Nu vindeem online, toate comenzile se fac direct.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Plantele sunt certificate ecologic?
                </h3>
                <p className="text-muted-foreground">
                  Da, toate plantele noastre sunt cultivate și procesate în sistem ecologic, 
                  fără utilizarea de chimicale sau pesticide.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Pot vizita ferma?
                </h3>
                <p className="text-muted-foreground">
                  Organizăm vizite la fermă cu programare în avans. Contactează-ne 
                  pentru a stabili o întâlnire.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;