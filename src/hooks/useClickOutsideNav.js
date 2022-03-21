import { useEffect } from "react";

export default function useClickOutsideNav(navRef, hamburgerRef, isMenuOpen, setIsMenuOpen) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (isMenuOpen && !navRef.current?.contains(event.target)) {
        if (hamburgerRef.current.contains(event.target)) {
          return;
        } else {
          setIsMenuOpen(false);
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef, hamburgerRef, isMenuOpen, setIsMenuOpen]);
}
