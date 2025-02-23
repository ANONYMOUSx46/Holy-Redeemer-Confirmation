
import Layout from "@/components/Layout";
import { Calendar } from "lucide-react";

const events = [
  {
    date: "20 February 2025",
    title: "Confirmation Class",
    description: "What makes you happy?",
    time: "18:00 - 19:30",
  },
  {    date: "5 March 2025",
    title: "Ash Wednesday Mass",
    description: "Celebration of Ash Wednesday, Mass times.",
    time: "8:30am - 5:00pm - 7:30pm",
  },
  {    date: "2 March 2025",
    title: "Ministry Morning",
    description: "Holy Redeemer presents a day to explore the many ministries they have, ask questions and discover where God may be calling you!",
    time: "9:30am",
  },
   {    date: "4 March 2025",
    title: "Praise and Worship, Donations of pancakes for Shrove Tuesday",
    description: "Join parishioners in Worship and Adoration as we prepare our hearts for the season of LENT. Spend and evening",
    time: "19:00pm",
  },
     {    date: "1 March 2025",
    title: "Alter Server Training",
    description: "Alter servers come together and practise",
    time: "12:30 - 2:00pm ",
  }
  // Add more events here
];

const Events = () => {
  return (
    <Layout>
      <div className="min-h-screen py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Upcoming Events
          </h1>
          <div className="space-y-6">
            {events.map((event) => (
              <div
                key={event.title}
                className="glass p-6 rounded-2xl hover:scale-105 transition-transform"
              >
                <div className="flex items-start gap-4">
                  <Calendar className="flex-shrink-0" size={24} />
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
                    <p className="text-primary font-medium">{event.date}</p>
                    <p className="text-sm text-gray-600 mb-2">{event.time}</p>
                    <p>{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Events;
