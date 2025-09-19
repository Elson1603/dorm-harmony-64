import React, { useMemo } from "react";
import { MapPin, Landmark, Train, Bus, Bike, Accessibility, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-dormitory.jpg";

function LocationPage() {
  // Example dorm locations
  const dormLocations = [
    
    {
      name: "IIT Bombay",
      mapSrc:
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30167.727387024435!2d72.817000304904!3d19.065235806748735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c993b0a3c70f%3A0xe186360d167d2753!2sgalaxy%20cabin%20stay%20%26%20dormitory!5e0!3m2!1sen!2sin!4v1758263262328!5m2!1sen!2sin",
      address:
        "galaxy cabin stay & dormitory, Linking Road, Bandra West, Mumbai - 400050, Maharashtra",
      landmarks: [
        "Powai Lake (500m)",
        "Hiranandani Gardens (1km)",
        "JVLR (2km)"
      ],
      transport: [
        { icon: "Bus", label: "IIT Main Gate Bus Stop (2 min walk)" },
        { icon: "Train", label: "Kanjurmarg Railway Station (15 min ride)" },
        { icon: "Bike", label: "Powai Cycle Stand nearby" },
      ],
    }
  ];

  // Pick a random dorm location on each mount
  const randomDorm = useMemo(() => {
    return dormLocations[Math.floor(Math.random() * dormLocations.length)];
    // eslint-disable-next-line
  }, []);

  const iconMap = { Bus, Train, Bike };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Banner */}
      <section className="relative h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden mb-10">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg flex items-center justify-center gap-2">
            <MapPin className="inline-block h-10 w-10 text-accent" /> Location & <span className="gradient-word animate-gradient">Map</span>
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-white/90">
            Find us easily and explore nearby landmarks, transport options, and accessibility features.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 w-full">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white dark:bg-zinc-900 rounded-xl border border-muted dark:border-zinc-700 grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden items-stretch divide-y md:divide-y-0 md:divide-x divide-muted dark:divide-zinc-700">
            {/* Map */}
            <div className="flex flex-col justify-center items-center p-6 min-h-[260px]">
              <iframe
                  title={randomDorm.name + " Map"}
                  src={randomDorm.mapSrc}
                  style={{ border: 0, width: '100%', height: '240px', borderRadius: '0.75rem', display: 'block', maxWidth: 420, background: 'transparent' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            {/* Address */}
            <div className="flex flex-col justify-center p-6 min-h-[260px]">
              <h3 className="text-2xl font-semibold mb-3 text-foreground flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" /> Address
              </h3>
              <div className="bg-muted/40 dark:bg-zinc-800 rounded-lg p-4 text-lg text-muted-foreground dark:text-zinc-200">
                {randomDorm.address}
              </div>
            </div>
            {/* Landmarks */}
            <div className="flex flex-col justify-center items-center p-6 min-h-[200px]">
              <Landmark className="h-8 w-8 text-accent mb-2" />
              <div className="font-semibold text-foreground mb-2">Nearby Landmarks</div>
              <ul className="text-muted-foreground text-sm space-y-1 text-center dark:text-zinc-200">
                {randomDorm.landmarks.map((landmark, i) => (
                  <li key={i}>{landmark}</li>
                ))}
              </ul>
            </div>
            {/* Transport */}
            <div className="flex flex-col justify-center items-center p-6 min-h-[200px]">
              <Train className="h-8 w-8 text-accent mb-2" />
              <div className="font-semibold text-foreground mb-2">Transport Options</div>
              <ul className="text-muted-foreground text-sm space-y-1 text-center dark:text-zinc-200">
                {randomDorm.transport.map((t, i) => {
                  const Icon = iconMap[t.icon as keyof typeof iconMap] || Bus;
                  return (
                    <li key={i}><Icon className="inline h-4 w-4 mr-1 text-primary" />{t.label}</li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LocationPage;
