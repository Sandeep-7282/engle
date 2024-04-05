import { NavLink } from 'react-router-dom';
import "../styles/CategoryHeader.css";
import { useEffect, useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';

const CategoryHeader = ({ isOpen, isMobile }) => {

  const options = [
    { text: "Flashcards", link: "/flashcards", isButton: true },
    { text: "Ambiguous Words", link: "/upcoming" },
    { text: "Learn with Context", link: "/upcoming" },
    { text: "Learn with story", link: "/upcoming" },
    { text: "Learn with Friends", link: "/upcoming" },
    { text: "Favourites", link: "/favourites" },
    { text: "My Notes", link: "/mynotes" },
  ];


  const [menuOpen, setMenuOpen] = useState(isOpen); // State to manage menu open/close
  const location = useLocation();

  useEffect(() => {
    // Check if the current location matches any of the links in the options array
    const isOnOptionLink = options.some(option => location.pathname === option.link);
    // If the current location matches any link, set isOpen to true
    if (isOnOptionLink || isOpen) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  }, [location.pathname, isOpen]);


  return (
    <div className={`menu-transition ${menuOpen ? "menu-open" : ''}`}>
      {(
        <div className={`flex flex-row justify-center ${isMobile ? "bg-transparent rounded-lg shadow-xl" : "bg-[#2E3D79]"} z-10`}>
          <ul className={`flex ${isMobile ? "flex-col mt-2 gap-1 justify-start items-start" : "py-2 flex-row gap-16 justify-center items-center"} `}>

            {options.map((option, index) => (
              <li key={index} className="py-1">
                {option.isButton ? (<>
                  <div className='flex items-center gap-2'>
                <NavLink to={option.link} className={`${isMobile ? "text-black" : "text-white"} text-[1rem] `}>
                    {option.text}
                  </NavLink>
                  <button className={` ${!isMobile ? 'text-white':'text-black'}`} id="flashcard-menu-button" >
                    <FaAngleDown/>
                  </button>
                  
                </div>
                </>
                
                ) : (
                  <NavLink to={option.link} className={`${isMobile ? "text-black" : "text-white"} text-[1rem] `}>
                    {option.text}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryHeader;

