import { useState } from 'react';
import Image from 'next/image';
import NavbarPage from '@/components/navbar2';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function HomePage() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(`Start Date: ${startDate}, End Date: ${endDate}, City: ${city}`);
  };

  return (
    <div>
      <NavbarPage/>
      {/* Background Image with Overlay */}
      <div
        className="relative h-screen bg-cover bg-center "
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* Centered Content */}
        <div className="relative flex flex-col items-center justify-center ">
          <h1 className="text-white text-5xl font-bold p-2 mt-24 ">Explore The World On Two </h1>
          <h1 className='text-5xl font-bold mb-6 mt-1'>Wheels</h1>
          <h2 className='mb-8  text-2xl'>
          Premium bikes for rent at unbeatable prices. Your adventure begins here.
          </h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white text-black p-6 rounded-lg shadow-lg space-y-4"
          >
            <div className="flex space-x-4">
              <div className="w-64">
                <label className="block text-black">City:</label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  required
                >
                  <option value="" disabled>Select a city</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Kolkata">Kolkata</option>
                </select>
              </div>
              <div className="w-64">
                <label className="block text-gray-700">Start Date:</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  required
                />
              </div>
              <div className="w-64">
                <label className="block text-gray-700">End Date:</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  required
                />
              </div>
            </div>

            {/* Search Button below form fields, centered */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Feature Segments with Bikes */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-black">Our Featured Bikes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bike 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg ">
              <Image
                src=""
                alt="Bike 1"
                width={300}
                height={200}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Bike Model 1</h3>
              <p className="text-gray-600">A brief description of the first bike with some key features.</p>
            </div>

            {/* Bike 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <Image
                src=""
                alt="Bike 2"
                width={300}
                height={200}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Bike Model 2</h3>
              <p className="text-gray-600">A brief description of the second bike with some key features.</p>
            </div>

            {/* Bike 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <Image
                src=""
                alt="Bike 3"
                width={300}
                height={200}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Bike Model 3</h3>
              <p className="text-gray-600">A brief description of the third bike with some key features.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
