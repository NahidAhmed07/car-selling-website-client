/*
  useCounter hook is my own creation . this hook create for making hero section background images slider ...this hook return a counter state that update every 4 second . And this hook receive two parameter 
  (1) counter start index 
  (2) counter end index
  
  background image change a simple array method this counter change the array index value then slider image is automatically change ... 
  ####### happy Coding #########
  
  */

import { useEffect, useState } from "react";

const useCounter = (countStart = 0, countEnd = 10) => {
  const [counter, setCounter] = useState(countStart);
  useEffect(() => {
    const interval = setInterval(() => {
      if (counter === countEnd - 1) {
        setCounter(0);
      } else {
        setCounter(counter + 1);
      }
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  });
  return [counter, setCounter];
};

export default useCounter;
