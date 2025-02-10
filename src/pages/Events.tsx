
import Layout from "@/components/Layout";
import { Calendar } from "lucide-react";

const events = [
  {
    date: "13 February 2025",
    title: "Confirmation Class",
    description: "Introduction to the Sacrament of Confirmation(placeholder topic)",
    time: "18:00 - 19:30",
  },
  {
    date: "March 22, 2025",
    title: "Saint Selection Workshop(placeholder for maybe an upcoming event)",
    description: "Learn about saints and choose your confirmation saint",
    time: "14:00 - 15:30",
  },
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
