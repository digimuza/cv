import { h, Fragment } from "preact";


export function TopSection() {
  return (
    <Fragment>

      <div className="section started" id="section-started">

        <div className="video-bg jarallax">
          <div className="video-bg-mask" />
          <div className="video-bg-texture" id="grained_container" />
        </div>

        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="started-content">
              <h1 className="h-title">
                Hello, I’m <strong>Andrius Mozūraitis</strong> profesional full
                stack <strong>TypeScript</strong> developer
              </h1>
              <div className="h-subtitle typing-subtitle">
                <p>
                  I create exceptional <strong> code</strong>
                </p>
                <p>
                  I love <strong>to code</strong>
                </p>
                <p>
                  I am <strong>problem solver</strong>
                </p>
                <p>
                  I love <strong>TypeScript</strong>
                </p>
                <p>
                  I am <strong>fast learner</strong>
                </p>
                <p>
                  I love <strong>google</strong>
                </p>
                <p>
                  I am <strong>top performer</strong>
                </p>
              </div>
              <span className="typed-subtitle" />
            </div>
          </div>
        </div>

        <a href="#" className="mouse_btn" style={{ display: "none" }}>
          <span className="icon fas fa-chevron-down" />
        </a>
      </div>
    </Fragment>
  );
}
