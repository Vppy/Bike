import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import BikeRentalPopup from "@/components/BikeRentalPopup";

const bikes = [
  { id: 1, name: "Mountain Bike", price: 15, mileage: "30 km", horsepower: "1.5 HP", type: "Mountain", engineCC: "N/A", image: "/bike1.jpg" },
  { id: 2, name: "Road Bike", price: 12, mileage: "40 km", horsepower: "1.2 HP", type: "Road", engineCC: "N/A", image: "/bike2.jpg" },
  { id: 3, name: "Electric Bike", price: 20, mileage: "50 km", horsepower: "3.0 HP", type: "Electric", engineCC: "N/A", image: "/bike3.jpg" },
  { id: 4, name: "Electric Bike", price: 20, mileage: "50 km", horsepower: "3.0 HP", type: "Electric", engineCC: "N/A", image: "/bike3.jpg" },
];

export default function BikeRental() {
  const [selectedBike, setSelectedBike] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [priceRange, setPriceRange] = useState(20);
  const [selectedTypes, setSelectedTypes] = useState({ Mountain: false, Road: false, Electric: false });

  const handleBook = (bike) => {
    setSelectedBike(bike);
    setIsPopupOpen(true);
  };

  const handleTypeChange = (e) => {
    setSelectedTypes({ ...selectedTypes, [e.target.name]: e.target.checked });
  };

  const filteredBikes = bikes.filter(
    (bike) => bike.price <= priceRange && (selectedTypes[bike.type] || Object.values(selectedTypes).every((val) => !val))
  );

  return (
    <main className="bg-white">
      <Navbar />
      <div className="p-6 bg-white text-black flex">
        {/* Left Side Filter */}
        <div className="w-1/4 bg-gray-100 rounded-lg p-6 shadow-lg h-[500px]">
          <h2 className="text-xl font-semibold mb-4">Filter Bikes</h2>

          {/* Price Range Filter */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Price Range</label>
            <input
              type="range"
              min="5"
              max="30"
              step="5"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full"
            />
            <p className="text-sm text-gray-600 mt-2">Max Price: ${priceRange}</p>
          </div>

          {/* Bike Types Filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-2 text-2xl">Bike Types</h3>
            {["Mountain", "Road", "Electric"].map((type) => (
              <div key={type} className="flex items-center text-2xl p-2">
                <input type="checkbox" name={type} checked={selectedTypes[type]} onChange={handleTypeChange} className="mr-2" />
                <label className="text-sm">{type}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Bike List */}
        <div className="w-3/4 p-4">
          <h1 className="text-3xl font-bold text-center mb-6">Bike Rental</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredBikes.map((bike) => (
              <motion.div key={bike.id} whileHover={{ scale: 1.05 }} className="bg-white rounded-2xl shadow-xl p-6 transition-transform">
                <img src={bike.image} alt={bike.name} className="w-full h-40 object-cover rounded-lg" />
                <h2 className="text-xl font-semibold mt-4">{bike.name}</h2>
                <p className="text-xl font-semibold text-blue-600 mt-2">{`$${bike.price}/hr`}</p>

                <button className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition" onClick={() => handleBook(bike)}>
                  Book Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bike Rental Popup */}
      {isPopupOpen && <BikeRentalPopup bike={selectedBike} onClose={() => setIsPopupOpen(false)} />}
    </main>
  );
}
