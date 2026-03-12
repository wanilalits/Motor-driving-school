import React from "react";

export default function App() {
  return (
    <div className="bg-gray-100 text-gray-800">

      {/* NAVBAR */}
      <nav className="bg-black text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">🚗 Smart Motor Driving School</h1>

        <div className="space-x-6 text-sm">
          <a href="#courses" className="hover:text-yellow-400">Courses</a>
          <a href="#batch" className="hover:text-yellow-400">Batch</a>
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </div>
      </nav>


      {/* HERO SECTION */}
      <section className="bg-yellow-400 p-8 md:flex items-center gap-10">

        

        <div>
          <h1 className="text-4xl font-bold mb-4">
            Learn Driving With Confidence
          </h1>

          <p className="text-lg mb-4">
            Professional driving lessons with experienced instructors.
            Get your license quickly and safely.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
            Book Driving Lesson
          </button>
        </div>

      </section>


      {/* COURSES */}
      <section id="courses" className="p-8">

        <h2 className="text-3xl font-bold text-center mb-8">
          Our Driving Courses
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-lg shadow p-5">
           
            <h3 className="text-xl font-semibold">Car Driving</h3>
            <p className="text-gray-600 text-sm">
              Learn safe car driving with real road practice.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-5">
         <h3 className="text-xl font-semibold">Two Wheeler</h3>
            <p className="text-gray-600 text-sm">
              Scooter and motorcycle training for beginners.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-5">
 
            <h3 className="text-xl font-semibold">Heavy Vehicle</h3>
            <p className="text-gray-600 text-sm">
              Truck and commercial vehicle driving training.
            </p>
          </div>

        </div>
      </section>


      {/* BATCH TIMING */}
      <section id="batch" className="bg-white p-8">

        <h2 className="text-3xl font-bold text-center mb-8">
          Batch Timing
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold">🌅 Morning</h3>
            <p>7:00 AM – 10:00 AM</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold">☀️ Afternoon</h3>
            <p>12:00 PM – 3:00 PM</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold">🌙 Evening</h3>
            <p>5:00 PM – 8:00 PM</p>
          </div>

        </div>

      </section>


      {/* WHY CHOOSE US */}
      <section className="p-8 bg-gray-100">

        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">

          <div className="bg-white p-5 shadow rounded">
            ⭐ Certified Instructors
          </div>

          <div className="bg-white p-5 shadow rounded">
            🚗 Modern Training Cars
          </div>

          <div className="bg-white p-5 shadow rounded">
            🪪 License Assistance
          </div>

          <div className="bg-white p-5 shadow rounded">
            ⏰ Flexible Timing
          </div>

        </div>

      </section>


      {/* ABOUT */}
      <section id="about" className="p-8 bg-white">

        <h2 className="text-3xl font-bold text-center mb-6">
          About Our School
        </h2>

        <p className="max-w-3xl mx-auto text-center text-gray-600">
          We are a trusted motor driving school with over 10 years of experience.
          Our mission is to provide high quality driving education and help
          students become safe and responsible drivers.
        </p>

      </section>


      {/* CONTACT */}
      <section id="contact" className="bg-black text-white p-8 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Contact Us
        </h2>

        <p>📞 Phone: 9876543210</p>
        <p>📧 Email: driving@gmail.com</p>
        <p>📍 Address: Nagpur, Maharashtra</p>

      </section>


      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 text-center p-4 text-sm">
        © 2026 Smart Motor Driving School
      </footer>

    </div>
  );
}