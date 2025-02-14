import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const TicketSelection = ({ selectedTicket, setSelectedTicket, nextStep }) => {
  const ticketOptions = [
    { type: "REGULAR ACCESS", price: "Free", seatsLeft: 20 },
    { type: "VIP ACCESS", price: "$150", seatsLeft: 20 },
    { type: "VVIP ACCESS", price: "$150", seatsLeft: 20 },
  ];

  const [ticketQuantity, setTicketQuantity] = useState(1);

  useEffect(() => {
    const storedTicket = localStorage.getItem("selectedTicket");
    const storedQuantity = localStorage.getItem("ticketQuantity");
    if (storedTicket) {
      setSelectedTicket(storedTicket);
    }
    if (storedQuantity) {
      setTicketQuantity(parseInt(storedQuantity, 10));
    }
  }, [setSelectedTicket]);

  const handleTicketSelection = (ticketType) => {
    setSelectedTicket={setSelectedTicket}
    setSelectedTicket(ticketType);
    localStorage.setItem("selectedTicket", ticketType);
  };

  const handleQuantityChange = (event) => {
    const quantity = event.target.value;
    setTicketQuantity(quantity);
    localStorage.setItem("ticketQuantity", quantity);
  };

  return (
    <div className="max-w-md mx-auto bg-custom-gradient text-white p-6 rounded-3xl shadow-lg sm:max-w-full sm:px-4">
      {/* Step Indicator */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-white">Ticket Selection</h2>
        <p className="text-sm text-white">Step 1/3</p>
      </div>
      <img src="/image.png" alt="Ticket" className="w-full h-1 mb-2" />

      {/* Event Info */}
      <div className="border border-[#0E464F] p-2 rounded-lg">
      <div className="bg-custom-gradient border-[#0E464F] border p-4 rounded-xl mx-auto mb-6 flex flex-col justify-center align-center w-3/4">
        <h3 className="text-2xl font-semibold text-center font-RoadRage w-5/6 mx-auto">Techember Fest &apos;&apos;25</h3>
        <p className="text-sm text-white mt-2 text-center w-3/4 mx-auto">
          Join us for an unforgettable experience at [Event Name]. Secure your spot now.
        </p>
        <p className="text-sm mt-2 text-white text center w-5/6 mx-auto">
          📍 [Event Location] | 🗓 March 15, 2025 | 🕖 7:00 PM
        </p>
      </div>
      <div className="h-1 w-full bg-[#073F3F] mb-4"></div>

      {/* Ticket Type Selection */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-2">Select Ticket Type:</h4>
        <div className="bg-[#052228] border border-[#0E464F] p-4 rounded-lg h-2/5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {ticketOptions.map((ticket) => (
              <button
                key={ticket.type}
                className={`p-2 border border-[#0E464F] rounded-2xl text-center transition-colors duration-300 ${
                  selectedTicket === ticket.type
                    ? "bg-[#052228] text-white border-ticz"
                    : "bg-[#052228] hover:bg-[#0E464F] hover:text-white border-[197686]"
                }`}
                onClick={() => handleTicketSelection(ticket.type)}
              >
                <span className="text-lg font-bold">{ticket.price}</span>
                <span className="block text-sm font-medium">{ticket.type}</span>
                <span className="block text-xs">{ticket.seatsLeft} left</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Ticket Quantity Selection */}
      <div className="mb-4">
        <label className="block text-sm font-semibold">Number of Tickets</label>
        <select
          className="w-full bg-[#052228] border border-[#197686] p-2 rounded-lg mt-1 text-white"
          value={ticketQuantity}
          onChange={handleQuantityChange}
        >
          {[...Array(5)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-between mt-6 gap-2">
        <button className="bg-transparent border border-ticz text-ticz px-4 py-2 rounded-lg w-full sm:w-30 hover:bg-[#24A0B5]">Cancel</button>
        <button className="bg-[#24A0B5] border border-[#197686] text-white px-4 py-2 rounded-lg w-full sm:w-30 hover:bg-[#0E464F]" onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
    </div>
  );
};

export default TicketSelection;

TicketSelection.propTypes = {
  nextStep: PropTypes.func.isRequired,
  selectedTicket: PropTypes.string.isRequired,
  setSelectedTicket: PropTypes.func.isRequired,
};
