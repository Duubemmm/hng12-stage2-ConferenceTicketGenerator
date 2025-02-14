import PropTypes from "prop-types";

const TicketConfirmation = ({ formData, onBookAnother }) => {
  return (
    <div className="max-w-md flex flex-col items-center justify-center bg-transparent text-white px-4">
      <div className="flex justify-between items-center w-3/4 border-[#34534a]">
        <h2 className="text-lg font-semibold ">Ready</h2>
        <p className="text-sm text-gray-400">Step 3/3</p>
      </div>
      <img src="/image.png" alt="Ticket" className="w-auto h-1 mb-6" />
      {/* Header */}
      <h2 className="text-2xl font-semibold mb-2">Your Ticket is Booked!</h2>
      <p className="text-gray-400 text-sm mb-6">
        Check your email for a copy or <strong>download</strong>
      </p>

      {/* Ticket Container */}
      <div className="bg-ticket border border-[#0E464F] bg-cover bg-center bg-no-repeat rounded-lg shadow-lg h-auto w-[95%] relative bg-[#052228] mx-auto p-6 max-w-[20rem] min-h-auto overflow-visible">
        {/* Event Title */}
        <div className=" text-center mb-4 bg-transparent border border-[#0E464F] p-2 rounded-lg">
        <h3 className="text-center text-xl font-bold text-white mb-2">Techember Fest &apos;25</h3>
        <p className="text-center text-white text-sm">
          📍 Tech Arena, NY <br />
          📅 Dec 15, 2025 | 10:00 AM - 6:00 PM
        </p>

        {/* Profile Image */}
        <div className="flex justify-center mb-4">
        <div className="border border-[#1B2A3B] rounded-lg p-1">
          <img
            src={formData.avatar || "https://via.placeholder.com/100"}
            alt="Attendee"
            className="w-24 h-24 rounded-lg border border-[#1B2A3B]"
          />
          </div>
        </div>
        <div className="w-[100%] h-48 border border-ticz rounded-md">
  {/* First Row: Name & Email */}
  <div className="flex border-b border-ticz">
    <div className="flex-1 p-1 border-r border-ticz">
      <p className="text-sm text-gray-500">Enter your Name</p>
      <p className="text-sm text-gray-200">{formData.fullName}</p>
    </div>
    <div className="flex-1 p-1">
      <p className="text-sm text-gray-500">Enter your Email*</p>
      <p className="text-sm text-gray-200">{formData.email}</p>
    </div>
  </div>

  {/* Second Row: Ticket Type & Ticket Count */}
  <div className="flex border-b border-ticz">
    <div className="flex-1 p-1 border-r border-ticz">
      <p className="text-sm text-gray-500">Ticket Type:</p>
      <p className="text-sm text-gray-200">{formData.ticketType || "Free"}</p>
    </div>
    <div className="flex-1 p-1">
      <p className="text-sm text-gray-500">Ticket For:</p>
      <p className="text-sm text-gray-200">{formData.ticketCount || 1}</p>
    </div>
  </div>

  {/* Third Row: Special Request (Full Width & 3 Rows) */}
  <div className="p-3 justify-start align-start">
    <p className="text-sm text-gray-500 flex ">Special Request?</p>
    <textarea
      rows="3"
      className="w-full border p-2 rounded-md bg-transparent resize-none border-none text-sm text-gray-200"/>
  </div>
</div>

    
  </div>
      {/* Action Buttons */}
      
      </div>
      <div className="flex justify-between w-full max-w-lg mt-6">
        <button
          className="w-1/2 p-1 text-ticz border border-ticz rounded-lg hover:bg-[#0E464F]"
          onClick={onBookAnother}
        >
          Book Another Ticket
        </button>
        <button className="p-1 bg-ticz w-60 text-white rounded-md hover:bg-custom-gradient ml-2">
          Download Ticket
        </button>
      </div>
      </div>
  );
};

TicketConfirmation.propTypes = {
  formData: PropTypes.shape({
    fullName: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
    ticketType:PropTypes.string,
    ticketCount:PropTypes.string,
    specialRequest:PropTypes.string
  }).isRequired,
  onBookAnother: PropTypes.func.isRequired,
};

export default TicketConfirmation;
