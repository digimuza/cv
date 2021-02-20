import { h } from "preact";


export function Interests() {
  return (
    <div className="section service" id="section-interests">
      <div className="content">

        <div className="title">
          <div className="title_inner">Interests</div>
        </div>

        <div className="service-items">
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-poll" />
              </div>
              <div className="name">Self development</div>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-poll" />
              </div>
              <div className="name">Camping</div>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-chess-knight" />
              </div>
              <div className="name">Chess</div>
              <div className="text">
                I love playing board games especially chess. Have 1670 rank in
                <a href="https://www.chess.com/">chess.com</a>
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-headphones" />
              </div>
              <div className="name">Music</div>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
}
