import { useState } from "react";
import { ChevronDown, Music, Calendar, MessageSquare, Church, BookOpen, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Index = () => {
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Create a FormData object from the form
    const formData = new FormData(e.target as HTMLFormElement);
    try {
      // Submit the form data to Netlify
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

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Explore Your Faith</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Quiz Card */}
          <div className="glass p-8 rounded-2xl hover-card">
            <BookOpen className="text-primary mb-4" size={32} />
            <h2 className="text-2xl font-semibold mb-4">Test Your Knowledge</h2>
            <p className="mb-6 text-gray-600">Challenge yourself with our interactive quiz about Confirmation</p>
            <button
              onClick={() => navigate('/quiz')}
              className="bg-primary text-white w-full px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Start Quiz
            </button>
          </div>
          {/* Music Section */}
          <div className="glass p-8 rounded-2xl hover-card">
            <Music className="text-primary mb-4" size={32} />
            <h2 className="text-2xl font-semibold mb-4">Sacred Music</h2>
            <p className="mb-6 text-gray-600">Discover beautiful Catholic hymns and contemporary worship music</p>
            <button
              onClick={() => toast.info("Music section coming soon!")}
              className="bg-primary text-white w-full px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Listen Now
            </button>
          </div>
          {/* Events Section */}
          <div className="glass p-8 rounded-2xl hover-card">
            <Calendar className="text-primary mb-4" size={32} />
            <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
            <p className="mb-6 text-gray-600">Stay updated with confirmation classes and church events</p>
            <button
              onClick={() => navigate('/events')}
              className="bg-primary text-white w-full px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors mb-4"
            >
              View Calendar
            </button>
            {/* Pope Francis Report as an Event */}
            <button
              onClick={() =>
                window.open(
                  "https://theconversation.com/francis-a-pope-who-has-cared-deeply-for-the-poor-and-opened-up-the-catholic-church-164362",
                  "_blank"
                )
              }
              className="bg-primary/20 hover:bg-primary/30 text-white w-full px-4 py-2 rounded-lg transition-colors"
            >
              Read About Pope Francis
            </button>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="bg-gradient-to-b from-primary/5 to-transparent py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Why Confirmation Matters</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4 slide-in">
                <Church className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Strengthen Your Faith</h3>
                  <p className="text-gray-600">Deepen your connection with God and understand the importance of Catholic traditions</p>
                </div>
              </div>
              <div className="flex items-start gap-4 slide-in">
                <Heart className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Join the Community</h3>
                  <p className="text-gray-600">Become an active member of Holy Redeemer Church and make lifelong friendships</p>
                </div>
              </div>
            </div>
            <div className="glass p-8 rounded-2xl">
              <img
                src="/church.jpg"
                alt="Faith Journey"
                className="rounded-lg w-full h-64 object-cover mb-6"
              />
              <p className="text-gray-600 italic">"Confirmation is not the end of your faith journey, but the beginning of a beautiful adventure."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comment Section */}
      <section className="max-w-2xl mx-auto px-4 py-16">
        <div className="glass p-8 rounded-2xl">
          <MessageSquare className="text-primary mb-4" size={32} />
          <h2 className="text-2xl font-semibold mb-4">Share Your Thoughts</h2>
          <form
            name="comments" // Name of the form (required by Netlify)
            method="POST" // Required for Netlify Forms
            data-netlify="true" // Enables Netlify Forms
            onSubmit={handleSubmit}
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
              name="message" // Add a 'name' attribute for Netlify
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
