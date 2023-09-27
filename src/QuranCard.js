import React, { useState, useEffect } from 'react';
import './style.css';
import quranData from './quran.json';

const QuranCard = () => {
  const [quranVerse, setQuranVerse] = useState("");

  useEffect(() => {
    fetchQuranVerse();
  }, []);

  async function fetchQuranVerse() {
    try {
      // Simulating API call by setting a timeout
      setTimeout(() => {
        const randomVerseIndex = Math.floor(Math.random() * quranData.length);
        const randomVerse = quranData[randomVerseIndex];
        setQuranVerse(randomVerse);
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="quran-card">
      <h2>Quran Verse of the Day</h2>
      {quranVerse ? (
        <div>
          <p>Transliteration: {quranVerse.transliteration}</p>
          <p>Sub ID: {quranVerse.verses[0].id}</p>
          <p>Text: {quranVerse.verses[0].text}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default QuranCard;