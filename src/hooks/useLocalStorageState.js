import { useState, useEffect } from "react";

 function useLocalStorageState(key, defaultVal) {
  // 1. make piece of state based on the value in a local storage
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      val = defaultVal;
    }
    return val;
  });
  // 2. UseEffect to update localstorage whenever the state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, setState];
}

export default useLocalStorageState;