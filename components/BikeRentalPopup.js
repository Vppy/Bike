import { motion } from "framer-motion";

export default function BikeRentalPopup({ bike, onClose }) {
  if (!bike) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-white p-6 rounded-2xl shadow-xl w-96 relative"
      >
        <button
          className="absolute top-3 right-3 text-gray-600 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">Book {bike.name}</h2>
        <p className="text-gray-600 mb-4">Price: ${bike.price}/hr</p>
        <form className="space-y-4">
          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block font-medium">Pickup Date</label>
            <input type="date" className="w-full p-2 border rounded-lg" />
          </div>
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg mt-2">
            Confirm Booking
          </button>
        </form>
      </motion.div>
    </div>
  );
}
