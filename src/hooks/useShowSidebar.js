import { useEffect, useState } from "react";

export default function useShowSidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    
    if(winScroll < document.getElementById('career').offsetTop - 100) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return showSidebar;
}