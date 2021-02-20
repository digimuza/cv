import { h } from "preact";


export function Contacts() {
  return (
    <div className="section contacts" id="section-contacts">
      <div className="content">
        <div className="title">
          <div className="title_inner">Contacts</div>
        </div>

        <div className="service-items">
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-phone" />
              </div>
              <div className="name">Phone</div>
              <div className="text">+370 60262684</div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-envelope" />
              </div>
              <div className="name">Email</div>
              <div className="text">
                <a href="mailto:andrius@mozuraitis.com">
                  andrius@mozuraitis.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
}
