import React from "react";

const AboutPlatform = () => {
  return (
    <section
      id="#about_us"
      className="dark:bg-gray-900 dark:text-white py-16 px-6"
    >
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-bold mb-4 text-orange-400">
          About Film Review
        </h2>

        <p className="text-lg dark:text-gray-300 text-gray-900 leading-relaxed">
          <span className="font-semibold text-gray-900 dark:text-white">
            Film Review
          </span>{" "}
          is a modern web platform where users can explore movies, rate them,
          and share their opinions with others. Our goal is to create a reliable
          and interactive space for movie lovers to discover and discuss films.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">
          <div
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-orange-400/30 transition"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <h3 className="text-xl font-semibold mb-3 text-orange-400">
              🎬 Movie Details
            </h3>
            <p className="text-gray-400">
              Explore detailed information about each movie including cast,
              rating, release year, and storyline overview.
            </p>
          </div>

          <div
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-orange-400/30 transition"
            data-aos="zoom-in"
          >
            <h3 className="text-xl font-semibold mb-3 text-orange-400">
              ⭐ User Ratings
            </h3>
            <p className="text-gray-400">
              Rate movies based on your experience and read reviews from other
              users to make better viewing choices.
            </p>
          </div>

          <div
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-orange-400/30 transition"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <h3 className="text-xl font-semibold mb-3 text-orange-400">
              📜 Watchlist
            </h3>
            <p className="text-gray-400">
              Add your favorite movies to your personal watchlist and keep track
              of what to watch next.
            </p>
          </div>
        </div>

        <p className="mt-10 text-gray-900 dark:text-gray-400 italic">
          "Your trusted platform for honest and detailed movie reviews."
        </p>
      </div>
    </section>
  );
};

export default AboutPlatform;
