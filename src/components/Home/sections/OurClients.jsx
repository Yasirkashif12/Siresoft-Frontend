const OurClients = () => {
  const clients = [
    {
      id: 1,
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      id: 2,
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      id: 3,
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      id: 4,
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },
    {
      id: 5,
      name: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    },
    {
      id: 6,
      name: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    },
    {
      id: 7,
      name: "Adobe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg",
    },
    {
      id: 8,
      name: "Spotify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12 sm:mb-16 lg:mb-20">
          Our Clients
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center p-4 sm:p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-300 group"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-10 sm:h-12 lg:h-14 w-auto object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
            Trusted by <span className="font-bold text-green-600">500+</span>{" "}
            companies worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
