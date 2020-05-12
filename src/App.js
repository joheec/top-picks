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

  return (
    <div className="page">
      <div className="card author-card">
        <div className="name">Johee's Top Picks</div>
        <div className="title">Senior Software Engineer</div>
        <div className="logo"><img src={joheeLogo} alt="Johee Logo" /></div>
      </div>
      <div className="cards-container">
        <div className="card">
          <div className="details">
            <div className="name">{cards[0].name}</div>
            <div className="quote">"{cards[0].quote}"</div>
          </div>
          <div className="logo">
            <img src={cards[0].img} alt={cards[0].alt} />
          </div>
        </div>
        <div className="card">
          <div className="details">
            <div className="name">{cards[1].name}</div>
            <div className="quote">"{cards[1].quote}"</div>
          </div>
          <div className="logo">
            <img src={cards[1].img} alt={cards[1].alt} />
          </div>
        </div>
        <div className="card">
          <div className="details">
            <div className="name">{cards[2].name}</div>
            <div className="quote">"{cards[2].quote}"</div>
          </div>
          <div className="logo">
            <img src={cards[2].img} alt="cards[2].alt" />
          </div>
        </div>
        <div className="card">
          <div className="details">
            <div className="name">{cards[3].name}</div>
            <div className="quote">"{cards[3].quote}"</div>
          </div>
          <div className="logo">
            <img src={cards[3].img} alt={cards[3].alt} />
          </div>
        </div>
        <div className="card">
          <div className="details">
            <div className="name">{cards[4].name}</div>
            <div className="quote">"{cards[4].quote}"</div>
          </div>
          <div className="logo cover">
            <img src={cards[4].img} alt={cards[4].alt} />
          </div>
        </div>
        <div className="card">
          <div className="details">
            <div className="name">{cards[5].name}</div>
            <div className="quote">"{cards[5].quote}"</div>
          </div>
          <div className="logo cover">
            <img src={cards[5].img} alt={cards[5].alt} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
