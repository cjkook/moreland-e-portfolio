import { useState } from 'react';

export default function SlideCard({ cardData, currentIndex, totalCards, onNavigate }) {
  const [showCitation, setShowCitation] = useState(false);

  console.log('slide loaded')
  if (!cardData) {
    return <div>Card data not found</div>;
  }

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < totalCards - 1;

  return (
    <div className="card">
      {/* Title Section */}
      <div className="card-title">
        <h2>{cardData.title}</h2>
        <button
          className="citation-button"
          onClick={() => setShowCitation(!showCitation)}
          aria-label="Show citation"
          title="Show citation"
        >
          ?
        </button>
      </div>

      {/* Citation Popup */}
      {showCitation && (
        <div className="citation-popup">
          <button
            className="citation-close"
            onClick={() => setShowCitation(false)}
          >
            ×
          </button>
          <p>{cardData.citation} <a href={cardData.citationLink} target="_blank" rel="noopener noreferrer">
            View Source
          </a></p>
          <p></p>
        </div>
      )}

      {/* Top Text Section */}
      <div className="card-text-top">
        <p>{cardData.textTop}</p>
      </div>

      {/* Picture Section */}
      <div className="card-image">
        <img src={cardData.image} alt={cardData.imageAlt} />
      </div>

      {/* Bottom Text Section */}
      <div className="card-text-bottom">
        <p>{cardData.textBottom}</p>
      </div>

      {/* Navigation Section */}
      <div className="card-navigation">
        <button
          className="nav-button nav-prev"
          onClick={() => onNavigate(currentIndex - 1)}
          disabled={!canGoPrev}
          aria-label="Previous card"
        >
          ←
        </button>

        <span className="card-counter">
          {currentIndex + 1} / {totalCards}
        </span>

        <button
          className="nav-button nav-next"
          onClick={() => onNavigate(currentIndex + 1)}
          disabled={!canGoNext}
          aria-label="Next card"
        >
          →
        </button>
      </div>
    </div>
  );
}