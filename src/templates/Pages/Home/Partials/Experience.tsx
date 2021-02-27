import { h } from "preact";

export function Experience() {
  return (
    <div className="section resume" id="section-history">
      <div className="content">
        <div className="cols">
          <div className="col col-md">
            <div className="title">
              <div className="title_inner">Experience</div>
            </div>

            <div className="resume-items">
              <div className="resume-item content-box active">
                <div class={"experience-company-logo"}>
                  <a target={'_blank'} href="http://searchnode.com/">
                    <img
                      src="images/searchnode.png"
                      data-src="images/searchnode.png"
                      className="d-inline-block ls-is-cached lazyloaded"
                      alt="SearchNode logo"
                      style={{ paddingBottom: "5px" }}
                      width="230px"
                    />
                  </a>
                </div>
                <div className="date">2018 - Present</div>
                <div className="name">
                  Fullstack NodeJS developer -
                  <a target={"_blank"} href="http://searchnode.com/">
                    {" "}
                    SearchNode
                  </a>
                </div>
                <div className="text">
                  SearchNode creates excellent search experience for clients
                </div>
                <br />
                <div className="text">
                  <a href={"searchnode.html"}>Read more</a>
                </div>
              </div>
              <div className="resume-item content-box active">
                <div class={"experience-company-logo"}>
                  <a target={"_blank"} href="https://www.passcamp.com/">
                    <img
                      width={200}
                      height={50}
                      src="images/passcamp.png"
                      className="attachment-large size-large lazyloaded"
                      alt=""
                      loading="lazy"
                      data-lazy-src="images/passcamp.png"
                      data-was-processed="true"
                    />
                  </a>
                </div>
                <div className="date">2016 - 2018</div>
                <div className="name">
                  Fullstack NodeJS Developer -
                  <a target={"_blank"} href="https://www.passcamp.com/">
                    PassCamp
                  </a>
                </div>
                <div className="text">
                  Military grade password manager for teams
                </div>
                <br />
                <div className="text">
                  <a href={"passcamp.html"}>Read more</a>
                </div>
              </div>
              <div className="resume-item content-box active">
                <div class={"experience-company-logo"}>
                  <a target={'_blank'} href={'https://www.adeoweb.lt/'}>
                    <img
                      src="/images/adeo.png"
                      alt="Adeo Web – eCommerce solutions"
                      className="logo_standard"
                      width={200}
                    />
                  </a>
                </div>
                <div className="date">2014 - 2015</div>
                <div className="name">
                  Wordpress Developer -
                  <a href="https://www.adeoweb.lt/">Adeo WEB</a>
                </div>
                <div className="text">
                  Building wordpress and e-commerce websites
                </div>

                <br />
                <div className="text">
                  <a href={"adeo-web.html"}>Read more</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-md">
            <div className="title">
              <div className="title_inner">Education</div>
            </div>

            <div className="resume-items">
              <div className="resume-item content-box active">
                <div className="date">2006 - 2008</div>
                <div className="name">
                  <a href="https://www.kaunokolegija.lt/en/">
                    Kaunas University Of Applied Science (incomplete)
                  </a>
                </div>
                <div className="text">
                  Bachelors Degree in Multimedia technologies
                </div>
              </div>
            </div>
            <div style={{ height: "50px" }} />

            <div className="title">
              <div className="title_inner">Open source projects</div>
            </div>

            <div className="resume-items">
              <div className="resume-item content-box active">
                <div class={"experience-company-logo"}>
                  <a href="https://digimuza.github.io/iterparse">
                    <img
                      alt="logo"
                      src="images/iterparse.png"
                      style={{ width: "200px", height: "auto" }}
                    />
                  </a>
                </div>
                <div className="date">2020 - Present</div>
                <div className="name">
                  <a href="https://digimuza.github.io/iterparse">iterparse</a>
                </div>
                <div className="text">
                  NodeJS Utilities for parsing and manipulating big data
                </div>
                <br />
                <div className="text">
                  <a href={"iterparse.html"}>Read more</a>
                </div>
              </div>
              <div className="resume-item content-box active">
                <div class={"experience-company-logo"}>
                  <a href="https://digimuza.github.io/ts-prime">
                    <img
                      src="images/tsprime.png"
                      alt="alt text"
                      title="ts-prime"
                      style={{ width: "200px", height: "auto" }}
                    />
                  </a>
                </div>
                <div className="date">2020 - Present</div>
                <div className="name">
                  <a href="https://digimuza.github.io/ts-prime">ts-prime</a>
                </div>
                <div className="text">
                  The utility library designed for TypeScript.
                </div>
                <br />
                <div className="text">
                  <a href={"ts-prime.html"}>Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="resume-items" />
      </div>
    </div>
  );
}
