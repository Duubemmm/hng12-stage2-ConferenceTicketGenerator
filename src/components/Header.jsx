
const Header = () => {
  return (
    <header className="fixed top-2 w-11/12 flex items-center border border-ticz rounded-lg mx-auto ">
      <div className="w-full flex items-center justify-between py-1">

        {/* Left Section - Logo & Icon */}
        <div className="flex items-center space-x-2">
          <img src= "/ticzlogo.png" alt="Ticz Logo" className="h-6 w-auto" />
        </div>

        {/* Center Section - Navigation Links (Hidden on small screens) */}
        <nav className="hidden sm:flex flex-grow justify-center space-x-8 w-10">
          <a href="#" className="text-white hover:text-[#B3B3B3] transition">Events</a>
          <a href="#" className="text-white hover:text-[#B3B3B3] transition">My Tickets</a>
          <a href="#" className="text-white hover:text-[#B3B3B3] transition">About Project</a>
        </nav>

        {/* Right Section - Ticket Button */}
        <div className="flex items-center">
          <button className="flex items-center bg-white text-black rounded-lg pl-2 pr-2 shadow-md mr-2 font-medium">
            MY TICKETS
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m-5-5l5 5-5 5"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;