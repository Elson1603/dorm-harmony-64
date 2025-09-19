import React from "react";
import { MapPin, Landmark, Train, Bus, Bike, Accessibility, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-dormitory.jpg";

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="relative h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden mb-12">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg flex items-center justify-center gap-2">
            <MapPin className="inline-block h-10 w-10 text-accent" /> Location & Map
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-white/90">
            Find us easily and explore nearby landmarks, transport options, and accessibility features.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Map Embed */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-muted bg-white">
            <iframe
              title="Thadomal Shahani Engineering College Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9834630688833!2d72.83328527497706!3d19.06446468213778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91130392c07%3A0x3c47bf391c8de931!2sThadomal%20Shahani%20Engineering%20College!5e0!3m2!1sen!2sin!4v1758253535085!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Info & Directions */}
          <div>
            {/* Address */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" /> Address
              </h3>
              <div className="bg-muted/40 rounded-lg p-4 text-lg text-muted-foreground shadow-sm">
                Thadomal Shahani Engineering College, TPS-III, Linking Road, Bandra (West), Mumbai - 400050, Maharashtra
              </div>
            </div>

            {/* Landmarks & Transport */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center border border-muted">
                <Landmark className="h-8 w-8 text-accent mb-2" />
                <div className="font-semibold text-foreground">Nearby Landmarks</div>
                <ul className="text-muted-foreground text-sm mt-2 space-y-1 text-center">
                  <li>National College (200m)</li>
                  <li>Linking Road Market (300m)</li>
                  <li>Carter Road Promenade (1.5km)</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center border border-muted">
                <Train className="h-8 w-8 text-accent mb-2" />
                <div className="font-semibold text-foreground">Transport Options</div>
                <ul className="text-muted-foreground text-sm mt-2 space-y-1 text-center">
                  <li>
                    <Bus className="inline h-4 w-4 mr-1 text-primary" />
                    Bandra Bus Depot (5 min walk)
                  </li>
                  <li>
                    <Train className="inline h-4 w-4 mr-1 text-primary" />
                    Bandra Railway Station (10 min ride)
                  </li>
                  <li>
                    <Bike className="inline h-4 w-4 mr-1 text-primary" />
                    Auto & Taxi Stand nearby
                  </li>
                </ul>
              </div>
            </div>

            {/* Directions */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-2 text-foreground flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-primary" /> Directions
              </h4>
              <div className="bg-muted/40 rounded-lg p-4 text-muted-foreground">
                From Bandra Railway Station, take an auto/taxi towards Linking Road. TSEC is located next to National College, Bandra (West). The campus is easily accessible by bus, train, and road transport.
              </div>
            </div>

            {/* Accessibility */}
            <div>
              <h4 className="text-lg font-semibold mb-2 text-foreground flex items-center gap-2">
                <Accessibility className="h-5 w-5 text-primary" /> Accessibility Highlights
              </h4>
              <ul className="list-disc list-inside text-muted-foreground bg-muted/40 rounded-lg p-4">
                <li>Wheelchair-accessible entrance</li>
                <li>Elevator access to all floors</li>
                <li>Accessible restrooms on campus</li>
                <li>Nearby parking facilities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
