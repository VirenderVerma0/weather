import React from 'react';

function About() {
  return (
    
    <section className="bg-slate-700 py-16 mx-30 my-10  shadow rounded-xl  md:px-10 lg:px-22">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-300 mb-4">About WeatherWise</h2>
        <p className="text-lg  mb-8 text-gray-300">
          WeatherWise is your go-to app for accurate and real-time weather updates.
          Whether you're planning your day, a weekend trip, or just curious about the forecast,
          we've got you covered with clean visuals and easy-to-read data.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Real-Time Forecast</h3>
            <p className="text-gray-600">
              Stay updated with minute-by-minute weather data and alerts based on your location.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Interactive Design</h3>
            <p className="text-gray-600">
              A sleek and responsive UI that looks great on any device—phone, tablet, or desktop.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Global Coverage</h3>
            <p className="text-gray-600">
              Get weather updates from anywhere in the world, in just a few clicks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
