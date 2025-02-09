
import Layout from "@/components/Layout";

const candidates = [
  {
    name: "Liam De Wet",
    saint: "St. Padre Pio",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80",
  },
  {
    name: "Jane Smith(placeholder)",
    saint: "St. Catherine of Siena",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80",
  },
  // Add more candidates here
];

const Candidates = () => {
  return (
    <Layout>
      <div className="min-h-screen py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Confirmation Candidates 2024
          </h1>
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
            {candidates.map((candidate) => (
              <div
                key={candidate.name}
                className="glass p-4 rounded-2xl hover:scale-105 transition-transform"
              >
                <img
                  src={candidate.image}
                  alt={candidate.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-lg font-semibold text-center mb-2">
                  {candidate.name}
                </h2>
                <p className="text-sm text-center text-gray-600 italic">
                  Chosen Saint: {candidate.saint}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Candidates;
