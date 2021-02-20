import { h } from "preact";


export function Testimonials() {
  return (
    <div className="section testimonials" id="section-testimonials" style={'height: 400px'}>
      <div className="content">
        <div className="title">
          <div className="title_inner">Testimonials</div>
        </div>

        <div className="reviews-carousel">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="reviews-item content-box">
                  <div className="image">
                    <img src="images/rev1.jpg" alt="" />
                  </div>
                  <div className="info">
                    <div className="name">Helen Floyd</div>
                    <div className="company">Art Director</div>
                  </div>
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="reviews-item content-box">
                  <div className="image">
                    <img src="images/rev1.jpg" alt="" />
                  </div>
                  <div className="info">
                    <div className="name">Helen Floyd</div>
                    <div className="company">Art Director</div>
                  </div>
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-nav">
            <a className="prev swiper-button-prev fas fa-long-arrow-alt-left" />
            <a className="next swiper-button-next fas fa-long-arrow-alt-right" />
          </div>
        </div>
      </div>
    </div>
  );
}
