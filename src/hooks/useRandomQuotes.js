import { useState, useEffect } from 'react';

export default function useRandomQuote() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    loadQuote();
  }, []);

  const loadQuote = async () => {
    const api = 'https://type.fit/api/quotes';
    const result = await fetch(api);
    const getResult = await result.json();
    const index = Math.floor(Math.random() * getResult.length);
    setQuote(getResult[index]);
 }
 return quote;
}

