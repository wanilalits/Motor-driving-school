//import React from "react";
import "./index.css";
export default function App() {
  return (
    <div className="bg-gray-100 ">
      
      <a
  href="https://wa.me/+918855918545?text=Hello%20I%20want%20to%20book%20a%20driving%20lesson"
  target="_blank"
  className="fixed bottom-18 right-6 bg-green-500 text-white px-0 py-1 rounded-full shadow-lg hover:bg-green-600"
>
  💬 Book on WhatsApp
</a>

      {/* NAVBAR */}
   <nav className="bg-[rgb(242,247,245)] p-4 flex flex-col items-center">
  
  <h1 className="text-xl font-bold text-[rgb(107,78,85)] text-center">
    Lalit Motor Driving School & RTO Licence Services
  </h1>
  <div>
Driving Training • RTO Licence Services & Renewal • Vehicle Documentation new and Resell • All RTO Work
</div>
  <div className="mt-3 flex text-sm text-[rgb(107,78,85)]">
    <a href="#courses" className="hover:text-yellow-400">Courses</a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="#batch" className="hover:text-yellow-400">Batch</a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="#about" className="hover:text-yellow-400">About</a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="#contact" className="hover:text-yellow-400">Contact</a>
  </div>

</nav>
      {/* HERO SECTION */}
      <section className="bg-yellow-400 p-1 md:flex items-center ">
        <div>
          <p className="text-lg">
            Professional driving lessons with experienced instructors. Get your
            license quickly and safely.
          </p>
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="px-2" >
        <h2 className="text-3xl font-bold text-center mb-8  bg-white">
          Our Driving Courses
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

  {/* CAR */}
  <div>
    <h3 className="text-xl font-semibold m-0">
      Car Driving{" "}
      <span
        style={{ fontSize: "17px", fontWeight: "400" }}
        className="text-[rgb(179,11,134)]"
      >
        (🔖Ladies Only Batch)
      </span>
    </h3>

    <p className="text-gray-600 text-sm">
      Learn safe car/4 wheeler driving with real road and highway practice.
      <br />
      reverse parking, parallel parking, hill start, Signals, Traffic Rules and more.
    </p>
  </div>

  {/* TWO WHEELER */}
  <div>
    <h3 className="text-xl font-semibold m-0">
      Two Wheeler
      <span
        style={{ fontSize: "17px", fontWeight: "400" }}
        className=" text-[rgb(179,11,134)]"
      >
        (🔖Ladies trainer for Ladies learner)
      </span>
    </h3>

    <p className="text-gray-600 text-sm">
      Scooter and motorcycle training for beginners.
    </p>
  </div>

  {/* HEAVY VEHICLE */}
  <div>
    <h3 className="text-xl font-semibold">
      Heavy Vehicle
    </h3>

    <p className="text-gray-600 text-sm">
      Truck and commercial vehicle driving training.
    </p>
  </div>

</div>
      </section>


      {/* BATCH TIMING */}
      <section id="batch" className="bg-white p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Batch Timing</h2>

        <div className="grid md:grid-cols-3 gap-6 ">
          <div className=" ">
            <h3 className="text-xl font-semibold inline-block">🌅 Morning</h3>
            <p>7:30 AM – 11:00 AM</p>
          </div>

          <div className="">
            <h3 className="text-xl font-semibold ">☀️ Afternoon</h3>
            <p>12:00 PM – 3:00 PM</p>
          </div>

          <div className=" ">
            <h3 className="text-xl font-semibold">🌙 Evening</h3>
            <p>5:00 PM – 8:45 PM</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="p-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-white ">
            ⭐ Certified Instructors
          </div>

          <div className="bg-white  ">
            🚗 Modern Training Cars
          </div>

          <div className="bg-white  ">
            🪪 License Assistance
          </div>

          <div className="bg-white ">
            ⏰ Flexible Timing</div>
        </div>
      </section>


      {/* ABOUT */}
      <section id="about" className="p-1 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">
          About Our School
        </h2>

        <p className="max-w-3xl mx-auto text-center text-gray-600">
          We are a trusted motor driving school with over 10 years of
          experience. Our mission is to provide high quality driving education
          and help students become safe and responsible drivers.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-black text-white p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

        <p>📞 Phone: 9876543210</p>
        <p>📧 Email: driving@gmail.com</p>
        <p>📍 Address: Nagpur, Maharashtra</p>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 text-center p-4 text-sm">
        © 2026 Lalit Motor Driving School
      </footer>

      
    </div>
  );
}
