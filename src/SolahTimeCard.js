import React, { useState, useEffect } from 'react';
import './style.css';

const SolahTimeCard = () => {
  const [prayerTimes, setPrayerTimes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPrayerTimes();
  }, []);

  async function fetchPrayerTimes() {
    setIsLoading(true);
    try {
      const response = await fetch('https://api.example.com/prayer-times');
      const data = await response.json();
      setPrayerTimes(data);
      setIsLoading(false);
    } catch (error) {
      setError('An error occurred while fetching prayer times.');
      setIsLoading(false);
    }
  }

  return (
    <div className="solah-time-card">
      <h2>Solah Times</h2>
      {isLoading ? (
        <p>Loading prayer times...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Prayer</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {prayerTimes.map((time, index) => (
              <tr key={index}>
                <td>{time.prayer}</td>
                <td>{time.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SolahTimeCard;