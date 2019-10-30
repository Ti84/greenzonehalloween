import React, { useState } from 'react';
import Present from '../assets/present.png';

const PresentOpenOverlay = ({ listOfPresents, finishedOpeningPresents }) => {
  const [currentPresentScore, setCurrentPresentScore] = useState(0);
  const [currentListOfPresents, setCurrentListOfPresents] = useState(
    listOfPresents
  );
  const [presentsError, setPresentsError] = useState('');

  const openPresent = presentIndex => {
    setCurrentPresentScore(
      currentPresentScore + currentListOfPresents[presentIndex].value
    );
    setCurrentListOfPresents(
      currentListOfPresents.map((present, i) => {
        if (i === presentIndex) {
          return {
            ...present,
            opened: true
          };
        }
        return present;
      })
    );
  };

  const finishedOpening = () => {
    if (currentListOfPresents.find(present => !present.opened)) {
      setPresentsError('Open all of your presents first!');
    } else {
      finishedOpeningPresents(currentPresentScore);
    }
  };
  return (
    <section className="present-overlay game__overlay">
      <h1>Open Presents:</h1>
      <h2 className="game__header">{currentPresentScore}</h2>
      <div className="presents-list">
        {currentListOfPresents.map((present, i) => {
          if (present.opened) {
            return (
              <div key ={i} className="present-tile present--opened">
                <p>{present.value > 0 ? 'Good:' : 'Evil:'}</p>
                <p
                  className={
                    'alignment-label ' +
                    (present.value > 0
                      ? 'alignment-label--good'
                      : 'alignment-label--bad')
                  }
                >
                  {present.value}
                </p>
              </div>
            );
          }
          return (
            <div key={i} className="present-tile present--closed">
              <button
                className="present-tile__btn"
                onClick={() => openPresent(i)}
              >
                <img
                  className="present-tile__img"
                  src={Present}
                  alt="present"
                ></img>
              </button>
            </div>
          );
        })}
      </div>
      <div>
        {presentsError && (
          <div className="form__space--bottom">
            <label className="error-label">{presentsError}</label>
          </div>
        )}
        <input
          className="button-control form__space--top form__space--bottom"
          type="button"
          value="Close"
          onClick={() => finishedOpening()}
        ></input>
      </div>
    </section>
  );
};
export default PresentOpenOverlay;
