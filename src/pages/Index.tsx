import { useState } from "react";
import { ChevronDown, Music, Calendar, MessageSquare, Church, BookOpen, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Index = () => {
  const [comment, setComment] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        toast.success("Comment submitted successfully!");
        setComment(""); // Clear the textarea
      } else {
        toast.error("Failed to submit comment. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-pattern min-h-[90vh] relative flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
            Journey to Confirmation
          </h1>
          <p className="text-xl md:text-2xl mb-8 fade-in opacity-90">
            Discover your path in the Catholic faith at Holy Redeemer Church
          </p>
          <div className="flex justify-center gap-4 fade-in">
            <button 
              onClick={() => navigate('/quiz')} 
              className="bg-primary/90 hover:bg-primary text-white px-6 py-3 rounded-full transition-colors"
            >
              Start Your Journey
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full transition-colors"
            >
              Learn More
            </button>
          </div>
          <ChevronDown className="mx-auto animate-bounce mt-16" size={32} />
        </div>
      </section>

      {/* Comment Section */}
      <section className="max-w-2xl mx-auto px-4 py-16">
        <div className="glass p-8 rounded-2xl">
          <MessageSquare className="text-primary mb-4" size={32} />
          <h2 className="text-2xl font-semibold mb-4">Share Your Thoughts</h2>
          <form 
            onSubmit={handleSubmit} 
            name="comments" 
            method="POST" 
            data-netlify="true" 
            className="space-y-4"
          >
            {/* Hidden Input for Netlify */}
            <input type="hidden" name="form-name" value="comments" />

            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-4 rounded-lg bg-white/50 backdrop-blur-sm mb-4 border border-primary/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
              rows={4}
              placeholder="Share your experience or ask questions..."
              name="message" // Required for Netlify
            />
            <button
              type="submit"
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors w-full md:w-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
