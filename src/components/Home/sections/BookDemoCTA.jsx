import React, { useState } from "react";

const BookDemoCTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email && email.includes("@")) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <section className="w-full bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
            Ready to Transform Your Business?
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-green-50 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            See how SireSoft can help you achieve your goals. Book a free demo
            today and discover the power of our innovative solutions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20">
              <div className="text-3xl sm:text-4xl mb-2">🚀</div>
              <h3 className="text-white font-bold text-base sm:text-lg mb-2">
                Quick Setup
              </h3>
              <p className="text-green-50 text-sm">
                Get started in minutes with our expert guidance
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20">
              <div className="text-3xl sm:text-4xl mb-2">💡</div>
              <h3 className="text-white font-bold text-base sm:text-lg mb-2">
                Personalized Demo
              </h3>
              <p className="text-green-50 text-sm">
                Tailored to your specific business needs
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20">
              <div className="text-3xl sm:text-4xl mb-2">🎯</div>
              <h3 className="text-white font-bold text-base sm:text-lg mb-2">
                Expert Support
              </h3>
              <p className="text-green-50 text-sm">
                Dedicated team to answer all your questions
              </p>
            </div>
          </div>

          {!isSubmitted ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter your email"
                className="px-6 py-4 rounded-lg border-2 border-green-600 
             text-gray-900 placeholder-white/80
             focus:outline-none focus:ring-4 focus:ring-green-600/50
             text-base sm:text-lg w-full sm:w-80"
              />
              <button
                onClick={handleSubmit}
                className="px-8 py-4 bg-white text-green-700 rounded-lg font-bold text-base sm:text-lg hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50 whitespace-nowrap w-full sm:w-auto"
              >
                Book Free Demo
              </button>
            </div>
          ) : (
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-6 max-w-md mx-auto">
              <div className="text-4xl mb-2">✅</div>
              <p className="text-white font-bold text-lg">Thank you!</p>
              <p className="text-green-50 text-sm mt-2">
                We'll contact you shortly to schedule your demo.
              </p>
            </div>
          )}

          <p className="mt-6 sm:mt-8 text-green-100 text-sm sm:text-base">
            ⏱️ No credit card required • 📞 30-minute consultation • 🎁 Free
            trial available
          </p>

          <div className="mt-8 sm:mt-10 pt-8 border-t border-white/20">
            <p className="text-green-50 mb-4 text-sm sm:text-base">
              Prefer to talk to us directly?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 text-white font-semibold hover:text-green-100 transition text-sm sm:text-base"
              >
                📞 Call us: +1 (234) 567-890
              </a>
              <span className="hidden sm:inline text-white/40">|</span>
              <a
                href="mailto:demo@siresoft.com"
                className="inline-flex items-center gap-2 text-white font-semibold hover:text-green-100 transition text-sm sm:text-base"
              >
                ✉️ Email: demo@siresoft.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDemoCTA;
