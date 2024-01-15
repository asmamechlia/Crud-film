import React from 'react';
import './Home.css';
import DachraImage from './dachra.jpg'; 
import mondeImage from './monde.jpg';
import NowImage from './Now.jpg';
import SeeImage from './See.jpg';
import ordreImage from './ordre.jpg';
import rebelImage from './rebel.jpg';

function Home() {
  const movies = [
    { title: 'Les ordres du mal', image: ordreImage, link: 'https://www.netflix.com/watch/81478662?trackId=255824129&tctx=0%2C0%2C754e3f83-0e11-4cee-94bb-9c037f756fd7-394434871%2C754e3f83-0e11-4cee-94bb-9c037f756fd7-394434871%7C2%2Cunknown%2C%2C%2CtitlesResults%2C81478662%2CVideo%3A81478662%2CminiDpPlayButton' },
    { title: 'Le monde après nous', image: mondeImage, link: 'https://www.netflix.com/watch/81314956?trackId=255824129&tctx=0%2C0%2C754e3f83-0e11-4cee-94bb-9c037f756fd7-394211130%2C754e3f83-0e11-4cee-94bb-9c037f756fd7-394211130%7C2%2Cunknown%2C%2C%2CtitlesResults%2C81314956%2CVideo%3A81314956%2CdetailsPagePlayButton' },
    { title: 'Dachra', image: DachraImage, link: 'https://www.netflix.com/watch/81623713?trackId=255824129&tctx=0%2C1%2C754e3f83-0e11-4cee-94bb-9c037f756fd7-394070688%2C754e3f83-0e11-4cee-94bb-9c037f756fd7-394070688%7C2%2Cunknown%2C%2C%2CtitlesResults%2C81623713%2CVideo%3A81623713%2CminiDpPlayButton' },
    { title: 'Nowhere', image: NowImage, link: 'https://www.netflix.com/watch/81449034?trackId=255824129&tctx=2%2C14%2C754e3f83-0e11-4cee-94bb-9c037f756fd7-393640080%2C754e3f83-0e11-4cee-94bb-9c037f756fd7-393640080%7C2%2Cunknown%2C%2C%2CtitlesResults%2C81449034%2CVideo%3A81449034%2CdetailsPagePlayButton' },
    { title: 'See You on Venus', image: SeeImage, link: 'https://www.netflix.com/watch/81648162?trackId=255824129&tctx=0%2C0%2C754e3f83-0e11-4cee-94bb-9c037f756fd7-394313948%2C754e3f83-0e11-4cee-94bb-9c037f756fd7-394313948%7C2%2Cunknown%2C%2C%2CtitlesResults%2C81648162%2CVideo%3A81648162%2CminiDpPlayButton' },
    { title: 'Rebel moon', image: rebelImage, link: 'https://www.netflix.com/watch/81464239?trackId=255824129&tctx=0%2C0%2C754e3f83-0e11-4cee-94bb-9c037f756fd7-394547580%2C754e3f83-0e11-4cee-94bb-9c037f756fd7-394547580%7C2%2Cunknown%2C%2C%2CtitlesResults%2C81464239%2CVideo%3A81464239%2CminiDpPlayButton' },
  ];

  return (
    <div className="home">
      {movies.map((movie, index) => (
        <a key={index} href={movie.link} target="_blank" rel="noopener noreferrer" className="movie-link">
          <div className="movie">
            <img
              src={movie.image}
              alt={movie.title}
            />
            <div className="movie-info">
              <h3>{movie.title}</h3>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Home;
