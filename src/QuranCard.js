import React, { useState, useEffect } from 'react';
import './style.css';
import quranData from './quran.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faCopy, faPlay, faPause, faRandom, faDownload } from '@fortawesome/free-solid-svg-icons';

const QuranCard = () => {
  const [quranVerse, setQuranVerse] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef(null);

  useEffect(() => {
    fetchQuranVerse();
  }, []);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    } else if (!isPlaying && audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  async function fetchQuranVerse() {
    try {
      // Simulating API call by setting a timeout
      setTimeout(() => {
        const randomVerseIndex = Math.floor(Math.random() * quranData.length);
        const randomVerse = quranData[randomVerseIndex];
        setQuranVerse(randomVerse);
        setIsPlaying(true);
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  }

  function handleShuffle() {
    const randomVerseIndex = Math.floor(Math.random() * quranData.length);
    const randomVerse = quranData[randomVerseIndex];
    setQuranVerse(randomVerse);
    setIsPlaying(true);
  }

  function handleCopy() {
    const verseText = quranVerse.verses[0].text;
    navigator.clipboard.writeText(verseText);
    alert("Verse copied to clipboard!");
  }

  function handleAudioToggle() {
    setIsPlaying(!isPlaying);
  }

  function handleImageDownload() {
    const imageUrl = quranVerse.verses[0].imageurl;
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'quran_verse_image.png';
    link.click();
  }

  return (
    <div className="quran-card">
      <h2>Quran Verse of the Day</h2>
      {quranVerse ? (
        <div>
          <p>{quranVerse.transliteration}:{quranVerse.verses[0].id}</p>
          <p> {quranVerse.verses[0].text}</p>
          <p>{quranVerse.verses[0].translation}</p>
          <div className="icon-buttons">
            <button onClick={handleShuffle}>
              <FontAwesomeIcon icon={faRandom} />
            </button>
            <button onClick={handleCopy}>
              <FontAwesomeIcon icon={faCopy} />
            </button>
            <button onClick={handleAudioToggle}>
              <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
            </button>
            
              <button onClick={handleImageDownload}>
                <FontAwesomeIcon icon={faDownload} />
              </button>
            
          </div>
          <audio ref={audioRef} autoPlay loop>
            <source src={quranVerse.verses[0].audiourl} type="audio/mp3" />
          </audio>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default QuranCard;