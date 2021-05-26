import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="containerInner" id="upper">
          <div className="gridContainer">
            <div className="box1">
              <div className="userName">
                <h1>Hi, Jared!</h1>
              </div>
              <div className="date">23 Jan 21</div>
            </div>
            <div className="box2">
              <div className="notifications">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  className="bi bi-bell-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                </svg>
              </div>
            </div>
            <div className="box3">
              <div>
                <input
                  className="searchBar"
                  type="text"
                  placeholder="Search"
                ></input>
              </div>
              <div className="searchIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
            </div>
            <div className="box1">
              <div className="emojiTitle">How do you feel?</div>
            </div>
            <div className="box2">
              <div className="dotMenu">
                <span className="dot" id="dotWhite"></span>
                <span className="dot" id="dotWhite"></span>
              </div>
            </div>
            <div className="box4">
              <div className="emojiGrid">
                <span className="emoji">
                  <p>&#128532;</p>
                </span>
                <span className="emoji">
                  <p>&#128522;</p>
                </span>
                <span className="emoji">
                  <p>&#128513;</p>
                </span>
                <span className="emoji">
                  <p>&#128512;</p>
                </span>
              </div>
            </div>
            <div className="box5">
              <div className="emojiTextGrid">
                <div className="emojiTextItem">Badly</div>
                <div className="emojiTextItem">Fine</div>
                <div className="emojiTextItem">Well</div>
                <div className="emojiTextItem">Excellent</div>
              </div>
            </div>
          </div>
        </div>
        <div className="containerInner" id="lower">
          <span className="resizeBar"></span>
          <div className="gridContainer">
            <div className="box1">
              <div className="cardsTitle">Exercises</div>
            </div>
            <div className="box2">
              <div className="dotMenu">
                <span className="dot" id="dotBlack"></span>
                <span className="dot" id="dotBlack"></span>
              </div>
            </div>
            <div className="box6">
              <div className="cardContainer">
                <div className="card">
                  <div className="cardImg" id="img1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                      />
                    </svg>
                  </div>
                  <div className="cardBody">
                    <div className="cardHeader">Speaking Skills</div>
                    <div className="cardSubtext">16 Exercises</div>
                  </div>
                  <div className="dotMenu">
                    <span className="dot" id="dotGrey"></span>
                    <span className="dot" id="dotGrey"></span>
                  </div>
                </div>
                <div className="card">
                  <div className="cardImg" id="img2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-person-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                  </div>
                  <div className="cardBody">
                    <div className="cardHeader">Reading Speed</div>
                    <div className="cardSubtext">8 Exercises</div>
                  </div>
                  <div className="dotMenu">
                    <span className="dot" id="dotGrey"></span>
                    <span className="dot" id="dotGrey"></span>
                  </div>
                </div>
                <div className="card">
                  <div className="cardImg" id="img3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-puzzle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.112 3.645A1.5 1.5 0 0 1 4.605 2H7a.5.5 0 0 1 .5.5v.382c0 .696-.497 1.182-.872 1.469a.459.459 0 0 0-.115.118.113.113 0 0 0-.012.025L6.5 4.5v.003l.003.01c.004.01.014.028.036.053a.86.86 0 0 0 .27.194C7.09 4.9 7.51 5 8 5c.492 0 .912-.1 1.19-.24a.86.86 0 0 0 .271-.194.213.213 0 0 0 .036-.054l.003-.01v-.008a.112.112 0 0 0-.012-.025.459.459 0 0 0-.115-.118c-.375-.287-.872-.773-.872-1.469V2.5A.5.5 0 0 1 9 2h2.395a1.5 1.5 0 0 1 1.493 1.645L12.645 6.5h.237c.195 0 .42-.147.675-.48.21-.274.528-.52.943-.52.568 0 .947.447 1.154.862C15.877 6.807 16 7.387 16 8s-.123 1.193-.346 1.638c-.207.415-.586.862-1.154.862-.415 0-.733-.246-.943-.52-.255-.333-.48-.48-.675-.48h-.237l.243 2.855A1.5 1.5 0 0 1 11.395 14H9a.5.5 0 0 1-.5-.5v-.382c0-.696.497-1.182.872-1.469a.459.459 0 0 0 .115-.118.113.113 0 0 0 .012-.025L9.5 11.5v-.003l-.003-.01a.214.214 0 0 0-.036-.053.859.859 0 0 0-.27-.194C8.91 11.1 8.49 11 8 11c-.491 0-.912.1-1.19.24a.859.859 0 0 0-.271.194.214.214 0 0 0-.036.054l-.003.01v.002l.001.006a.113.113 0 0 0 .012.025c.016.027.05.068.115.118.375.287.872.773.872 1.469v.382a.5.5 0 0 1-.5.5H4.605a1.5 1.5 0 0 1-1.493-1.645L3.356 9.5h-.238c-.195 0-.42.147-.675.48-.21.274-.528.52-.943.52-.568 0-.947-.447-1.154-.862C.123 9.193 0 8.613 0 8s.123-1.193.346-1.638C.553 5.947.932 5.5 1.5 5.5c.415 0 .733.246.943.52.255.333.48.48.675.48h.238l-.244-2.855z" />
                    </svg>
                  </div>
                  <div className="cardBody">
                    <div className="cardHeader">Memorisation</div>
                    <div className="cardSubtext">10 Exercises</div>
                  </div>
                  <div className="dotMenu">
                    <span className="dot" id="dotGrey"></span>
                    <span className="dot" id="dotGrey"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="box6">
              <nav>
                <div className="navGrid">
                  <div className="navItem" id="navActive">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      fill="currentColor"
                      className="bi bi-house-door-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
                    </svg>
                    <div className="blob"></div>
                  </div>
                  <div className="navItem">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      fill="currentColor"
                      className="bi bi-grid-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
                    </svg>
                  </div>
                  <div className="navItem">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      fill="currentColor"
                      className="bi bi-envelope-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                    </svg>
                  </div>
                  <div className="navItem">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      fill="currentColor"
                      className="bi bi-person-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
