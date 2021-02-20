import { h } from "preact";


export function SoftSkills() {
  return (
    <div className="section skills" id="section-skills">
      <div className="content">

        <div className="title">
          <div className="title_inner">Soft Skills</div>
        </div>

        <div className="skills percent content-box">
          <ul>
            <li>
              <div className="name">Presentation</div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Critical thinking</div>
              <div className="progress">
                <div className="percentage" style={{ width: "93%" }}>
                  <span className="percent">93%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Desire to learn</div>
              <div className="progress">
                <div className="percentage" style={{ width: "95%" }}>
                  <span className="percent">95%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Resourcefulness</div>
              <div className="progress">
                <div className="percentage" style={{ width: "85%" }}>
                  <span className="percent">85%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Self-awareness</div>
              <div className="progress">
                <div className="percentage" style={{ width: "83%" }}>
                  <span className="percent">83%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Business ethics</div>
              <div className="progress">
                <div className="percentage" style={{ width: "97%" }}>
                  <span className="percent">97%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Reliability</div>
              <div className="progress">
                <div className="percentage" style={{ width: "99%" }}>
                  <span className="percent">99%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
