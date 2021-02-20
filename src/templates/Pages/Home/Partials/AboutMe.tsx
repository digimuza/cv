import { h, Fragment } from "preact";


export function AboutMe() {
  return (
    <Fragment>

      <div class="section about" id="section-about">

        <div class="title">
          <div class="title_inner">About</div>
        </div>

        <div class="content content-box">

          <div class="image">
            <img src="images/profile.jpg" alt="" />
          </div>


          <div class="desc">
            <p>
              Hello! I’m Andrius Mozūraitis. Fullstack
              <strong>NodeJS</strong> developer from Lithuania, Kaunas. I have
              rich experience in NodeJS eco system, I able to develop SPA, API,
              CLI application and much more.
            </p>
            <div class="info-list">
              <ul>
                <li>
                  <strong>Age:</strong> <span class="js-age">27</span>
                </li>
                <li>
                  <strong>Residence:</strong> Lithuania
                </li>
                <li>
                  <strong>Address:</strong> Lithuania, Kaunas
                </li>
                <li>
                  <strong>Phone:</strong> +370 60262684
                </li>
                <li>
                  <strong>E-mail:</strong>
                  <a href="mailto:andrius@mozuraitis.com">
                    andrius@mozuraitis.com
                  </a>
                </li>
              </ul>
            </div>
            <div class="bts">
              <a href="#" class="btn hover-animated">
                <span class="circle"></span>
                <span class="lnk">Download CV</span>
              </a>
            </div>
          </div>

          <div class="clear"></div>
        </div>
      </div>
    </Fragment>
  );
}
