
import Layout from "@/components/Layout";
import { BookOpen, Heart, Cross, Users, Star, Church } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 gradient-text">
            Understanding Confirmation
          </h1>

          <div className="space-y-12">
            {/* What is Confirmation */}
            <section className="glass p-8 rounded-2xl animate-fade-in">
              <div className="flex items-start gap-4">
                <BookOpen className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">What is Confirmation?</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Confirmation is one of the seven sacraments of the Catholic Church. It completes 
                    the grace of Baptism through the gifts of the Holy Spirit. During Confirmation, 
                    you'll renew your baptismal promises and receive the seal of the Holy Spirit, 
                    marking your complete initiation into the Catholic Church.
                  </p>
                </div>
              </div>
            </section>

            {/* Why is it Important */}
            <section className="glass p-8 rounded-2xl animate-fade-in">
              <div className="flex items-start gap-4">
                <Heart className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Why is it Important?</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Confirmation strengthens our relationship with God and deepens our understanding 
                    of our faith. It helps us become mature Christians, ready to defend our faith 
                    and spread the Gospel through our words and actions. The gifts of the Holy Spirit 
                    received during Confirmation help us make better decisions and live more fully as 
                    followers of Christ.
                  </p>
                </div>
              </div>
            </section>

            {/* Being Catholic Today */}
            <section className="glass p-8 rounded-2xl animate-fade-in">
              <div className="flex items-start gap-4">
                <Cross className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Being Catholic Today</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Being Catholic means being part of a global community of believers who share the 
                    same faith, traditions, and values. It's about living Christ's teachings in our 
                    daily lives, serving others, and working for justice and peace. As young Catholics, 
                    you have a unique opportunity to bring fresh perspectives and energy to the Church 
                    while maintaining its rich traditions.
                  </p>
                </div>
              </div>
            </section>

            {/* Choosing a Saint */}
            <section className="glass p-8 rounded-2xl animate-fade-in">
              <div className="flex items-start gap-4">
                <Star className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Choosing Your Confirmation Saint</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Selecting a Confirmation saint is an important part of your journey. This saint 
                    will be your spiritual role model and heavenly intercessor. Choose someone whose 
                    life story inspires you and whose virtues you'd like to emulate. Research different 
                    saints, their lives, and what they stood for to find one that resonates with you.
                  </p>
                </div>
              </div>
            </section>

            {/* Community and Service */}
            <section className="glass p-8 rounded-2xl animate-fade-in">
              <div className="flex items-start gap-4">
                <Users className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Community and Service</h2>
                  <p className="text-gray-700 leading-relaxed">
                    As a confirmed Catholic, you're called to be an active member of your church 
                    community. This means participating in Mass, joining ministry groups, and serving 
                    others. Your unique talents and perspectives can contribute to the life of the 
                    Church in many ways, from music ministry to social justice initiatives.
                  </p>
                </div>
              </div>
            </section>

            {/* Holy Redeemer Community */}
            <section className="glass p-8 rounded-2xl animate-fade-in">
              <div className="flex items-start gap-4">
                <Church className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Holy Redeemer Community</h2>
                  <p className="text-gray-700 leading-relaxed">
                    At Holy Redeemer Catholic Church in Bergvliet, Cape Town, we're committed to 
                    supporting you on your faith journey. Our confirmation program combines spiritual 
                    formation, community service, and fun activities to help you grow in faith while 
                    building lasting friendships with other young Catholics.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
