import React from 'react';
import './App.css';
import joheeLogo from './logo/johee.png';
import ynabLogo from './logo/ynab.png';
import affordanythingLogo from './logo/affordanything.png';
import morningbrewLogo from './logo/morningbrew.png';
import rollerderbyLogo from './logo/rollerderby.png';
import badbloodLogo from './logo/badblood.png';
import schittscreekLogo from './logo/schittscreek.png';

function App() {
  const cards = [{
    name: 'You Need A Budget',
    quote: 'Helped me wrangle my finances.',
    img: ynabLogo,
    alt: 'YNAB Logo',
  }, {
    name: 'Afford Anything',
    quote: 'Taught me how to plan my financial future instead of dread it.',
    img: affordanythingLogo,
    alt: 'Afford Anything Logo',
  }, {
    name: 'Morning Brew',
    quote: 'Keeps me up-to-date on  a broad set of topics.',
    img: morningbrewLogo,
    alt: 'Morning Brew Logo',
  }, {
    name: 'Roller Derby',
    quote: 'Amazing, tight-knit community, and a great way to workout!',
    img: rollerderbyLogo,
    alt: 'Roller Derby Logo',
  }, {
    name: 'Bad Blood',
    quote: 'Riveting and dumbfounding story! I couldn\'t put the book down.',
    img: badbloodLogo,
    alt: 'Bad Blood Book Cover',
  }, {
    name: 'Schitt\'s Creek',
    quote: 'An outrageously funny show about a riches-to-rags family.',
    img: schittscreekLogo,
    alt: 'Schitt\'s Creek Show Poster',
  }];

  return null;
}

export default App;
