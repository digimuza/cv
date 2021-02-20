import { h } from "preact";


export function LanguageSkills() {
  return (
    <div className="section skills" id="section-skills-lang">
      <div className="content">

        <div className="title">
          <div className="title_inner">Command of English language</div>
        </div>

        <div className="skills dotted content-box">
          <ul>
            <li>
              <div className="name">Speaking</div>
              <div className="progress">
                <div className="percentage" style={{ width: "55%" }}>
                  <span className="percent">55%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Writing</div>
              <div className="progress">
                <div className="percentage" style={{ width: "85%" }}>
                  <span className="percent">85%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
