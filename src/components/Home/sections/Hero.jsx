import { Button } from '../../common';

const Hero = () => (
  <section className="bg-gray-100 py-8 sm:py-12 md:py-16 lg:py-20" aria-labelledby="hero-title">
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h2 
            id="hero-title"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
          >
            Build, Manage & Grow<br />Your Business Online
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-700">
            Websites, Hosting, CRM, Inventory & Cloud Solutions
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-700">
            — Built for Pakistan Businesses
          </p>
          
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <Button>View Plans</Button>
            <Button variant="secondary">Explore Services</Button>
          </div>
        </div>

        <div className="order-1 lg:order-2 bg-white border border-gray-300 rounded-xl p-4 sm:p-6 shadow-sm">
          <div className="bg-gray-200 h-4 sm:h-5 w-20 sm:w-24 rounded mb-6 sm:mb-8" aria-hidden="true"></div>
          <div className="bg-green-50 rounded-lg h-40 sm:h-48 md:h-56 lg:h-64 flex items-center justify-center relative overflow-hidden">
            <div 
              className="absolute w-16 h-16 sm:w-20 sm:h-20 bg-green-600 opacity-20 rounded-full"
              aria-hidden="true"
            ></div>
            <span className="text-green-600 text-sm sm:text-base font-medium relative z-10">
              Dashboard Preview
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
