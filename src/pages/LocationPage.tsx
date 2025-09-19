
import React from "react";
import { useLocation } from "react-router-dom";
import { MapPin, Landmark, Train, Bus, Bike } from "lucide-react";
import heroImage from "@/assets/hero-dormitory.jpg";

// Example dorm locations data
const dormLocations = [
  {
    id: "1",
    name: "Deluxe Single Room",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9834630688833!2d72.83328527497706!3d19.06446468213778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91130392c07%3A0x3c47bf391c8de931!2sThadomal%20Shahani%20Engineering%20College!5e0!3m2!1sen!2sin!4v1758253535085!5m2!1sen!2sin",
    address:
      "Thadomal Shahani Engineering College, TPS-III, Linking Road, Bandra (West), Mumbai - 400050, Maharashtra",
    landmarks: [
      "National College (200m)",
      "Linking Road Market (300m)",
      "Carter Road Promenade (1.5km)",
    ],
    transport: [
      { icon: "Bus", label: "Bandra Bus Depot (5 min walk)" },
      { icon: "Train", label: "Bandra Railway Station (10 min ride)" },
      { icon: "Bike", label: "Auto & Taxi Stand nearby" },
    ],
  },
  {
    id: "2",
    name: "Twin Share Room",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9854630688833!2d72.83528527497706!3d19.07446468213778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91130392c07%3A0x3c47bf391c8de931!2sNational%20College!5e0!3m2!1sen!2sin!4v1758253535085!5m2!1sen!2sin",
    address:
      "National College, Linking Road, Bandra (West), Mumbai - 400050, Maharashtra",
    landmarks: [
      "Thadomal Shahani Engineering College (200m)",
      "Linking Road Market (100m)",
      "Bandra Lake (1.2km)",
    ],
    transport: [
      { icon: "Bus", label: "National College Bus Stop (2 min walk)" },
      { icon: "Train", label: "Bandra Railway Station (8 min ride)" },
      { icon: "Bike", label: "Bike Rentals nearby" },
    ],
  },
  {
    id: "3",
    name: "Premium Suite",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9834630688833!2d72.83728527497706!3d19.08446468213778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91130392c07%3A0x3c47bf391c8de931!2sCarter%20Road%20Promenade!5e0!3m2!1sen!2sin!4v1758253535085!5m2!1sen!2sin",
    address:
      "Carter Road Promenade, Bandra (West), Mumbai - 400050, Maharashtra",
    landmarks: [
      "Thadomal Shahani Engineering College (1.5km)",
      "National College (1.2km)",
      "Linking Road Market (1km)",
    ],
    transport: [
      { icon: "Bus", label: "Carter Road Bus Stop (3 min walk)" },
      { icon: "Train", label: "Bandra Railway Station (15 min ride)" },
      { icon: "Bike", label: "Bike Rentals & Taxi Stand nearby" },
    ],
  },
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}


export default function LocationPage() {
  const query = useQuery();
  const roomId = query.get("room");
  let dorm;
  if (roomId) {
    dorm = dormLocations.find((d) => d.id === roomId);
  }
  if (!dorm) {
    // Pick a random dorm if no id or not found
    dorm = dormLocations[Math.floor(Math.random() * dormLocations.length)];
  }

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
            Showing location for: <span className="font-bold text-accent-light">{dorm.name}</span>
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
                title={dorm.name + " Map"}
                src={dorm.mapSrc}
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
                {dorm.address}
              </div>
            </div>
            {/* Landmarks */}
            <div className="flex flex-col justify-center items-center p-6 min-h-[200px]">
              <Landmark className="h-8 w-8 text-accent mb-2" />
              <div className="font-semibold text-foreground mb-2">Nearby Landmarks</div>
              <ul className="text-muted-foreground text-sm space-y-1 text-center dark:text-zinc-200">
                {dorm.landmarks.map((lm) => (
                  <li key={lm}>{lm}</li>
                ))}
              </ul>
            </div>
            {/* Transport */}
            <div className="flex flex-col justify-center items-center p-6 min-h-[200px]">
              <Train className="h-8 w-8 text-accent mb-2" />
              <div className="font-semibold text-foreground mb-2">Transport Options</div>
              <ul className="text-muted-foreground text-sm space-y-1 text-center dark:text-zinc-200">
                {dorm.transport.map((t, i) => (
                  <li key={i}>
                    {t.icon === "Bus" && <Bus className="inline h-4 w-4 mr-1 text-primary" />}
                    {t.icon === "Train" && <Train className="inline h-4 w-4 mr-1 text-primary" />}
                    {t.icon === "Bike" && <Bike className="inline h-4 w-4 mr-1 text-primary" />}
                    {t.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
