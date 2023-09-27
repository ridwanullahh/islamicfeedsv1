import React, { useState } from 'react';
import QuranCard from './QuranCard';
import HadithCard from './HadithCard';
import SolahTimeCard from './SolahTimeCard';

function IslamicFeeds() {
  return (
    <div>
      <QuranCard />
      <HadithCard />
      <SolahTimeCard />
    </div>
  );
}

export default IslamicFeeds;