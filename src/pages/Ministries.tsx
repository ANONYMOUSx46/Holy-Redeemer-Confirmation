
import Layout from "@/components/Layout";
import { Music, Book, Users, Heart, Cross } from "lucide-react";

const ministries = [
  {
    icon: Music,
    name: "Music Ministry",
    description: "Join our worship band and help lead the congregation in praise.",
  },
  {
    icon: Book,
    name: "Proclaimers",
    description: "Read Scripture and prayers during Mass.",
  },
  {
    icon: Users,
    name: "Altar Servers",
    description: "Assist the priest during Mass and other liturgical celebrations.",
  },
  {
    icon: Heart,
    name: "Eucharistic Ministers",
    description: "Help distribute Holy Communion during Mass.",
  },
  {
    icon: Cross,
    name: "Collection Ministry",
    description: "Assist with collecting offerings during Mass.",
  },
];

const Ministries = () => {
  return (
    <Layout>
      <div className="min-h-screen py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Church Ministries
          </h1>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ministries.map((ministry) => (
              <div
                key={ministry.name}
                className="glass p-6 rounded-2xl hover:scale-105 transition-transform"
              >
                <ministry.icon className="mb-4" size={32} />
                <h2 className="text-2xl font-semibold mb-2">{ministry.name}</h2>
                <p>{ministry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Ministries;
