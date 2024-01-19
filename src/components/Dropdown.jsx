import React, { 
    useState,
    useRef,
    useEffect,
    useContext,
    createContext 
} from 'react';
import { Link } from 'react-router-dom';
// dropdown context for open state
const DropdownContext = createContext({
    open: false,
    setOpen: () => {},
});
// dropdown content for displaying dropdown
const DropdownContainer =({ children })=> {
    const { open } = useContext(DropdownContext); // get the context
    return (
      <>
        {open &&
            <div className={`absolute max-w-xs w-56 p-2 mt-2 bg-white rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] top-full right-0 z-50`} >
                {children}
            </div>
        }
        </>
    );
}

// dropdown items for dropdown menus
const DropdownItemText = ({children}) => {
    return (
        <span className='font-medium whitespace-nowrap'>
             {children}
        </span>
    )
}
const DropdownSeparator = () => {
    return (
        <hr className='w-full border-gray-200 border-0.5 my-1'/>
    )
}
const DropdownItemIcon = ({children}) => {
    return (
        <span className='w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 mr-3 overflow-hidden '>
            {children}
        </span>
    )
}
    
const DropdownItem = ({ children, ...props }) => {
  return (
    <Link to="#" {...props} className="flex items-center px-3 py-1.5 text-sm text-gray-800 capitalize transition-colors duration-150 transform hover:bg-gray-200 rounded-md">
        {children}
    </Link>
  );
};

// dropdown button for triggering open
const DropdownButton =({ children, ...props }) => {
    const { open, setOpen } = useContext(DropdownContext); // get the context
    // to open and close the dropdown
    function toggleOpen() {
      setOpen(!open);
      console.log(open);
    }
    return (
        <Link className='cursor-pointer' onClick={toggleOpen} {...props}>
            {children}
        </Link>
    )
};
const Dropdown = ({children,...props}) => {
    const [open,setOpen] = useState(false)
    const dropdownRef = useRef(0);
  // click listeners for closing dropdown
    useEffect(() => {
        // close dropdown if click outside
        function close(e) {
        if (!dropdownRef.current.contains(e.target)) {
            setOpen(false);
        }
        };
        // add or remove event listener
        if (open) {
            window.addEventListener("click", close);
        }
        // cleanup
        return function removeListener() {
            window.removeEventListener("click", close);
        }
    }, [open]); // only run if open state changes

    return (
     <DropdownContext.Provider value={{ open, setOpen }}>
        <div {...props} ref={dropdownRef} className="relative">
            {children}
        </div>
     </DropdownContext.Provider>
    );
}
// optional - but I like this pattern to know it must be a child of Dropdown
Dropdown.Button = DropdownButton;
Dropdown.DropdownContainer = DropdownContainer;
Dropdown.Item = DropdownItem;
Dropdown.ItemText = DropdownItemText;
Dropdown.ItemIcon = DropdownItemIcon;
Dropdown.Separator = DropdownSeparator;

export default Dropdown;
