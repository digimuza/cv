import { Fragment, h } from "preact";
import { BlogEntry } from "./templates/Pages/Blog/BlogEntry";
import { BlogList } from "./templates/Pages/Blog/BlogList";
import { Home } from "./templates/Pages/Home/Home";

const workBlogEntries = [
  {
    title: "TS-Prime library",
    page: "ts-prime.html",
    content: (
      <BlogEntry
        data={{
          title: "TS-Prime library",
          details: (
            <Fragment>
              {/* title */}
              <div className="title">
                <div className="title_inner">Details</div>
              </div>
              {/* details */}
              <ul className="details-list">
                <li>
                  <strong>Type:</strong>{" "}
                  <a href={"https://digimuza.github.io/ts-prime/#/home"}>Open Source</a>
                </li>
                <li>
                  <strong>Working from:</strong> 2020 - Present
                </li>
              </ul>
            </Fragment>
          ),
          sections: [
            {
              title: <span>In progress...</span>,
              text: <Fragment></Fragment>,
            },
          ],
        }}
      ></BlogEntry>
    ),
  },
  {
    title: "Iterparse library",
    page: "iterparse.html",
    content: (
      <BlogEntry
        data={{
          title: "Iterparse library",
          details: (
            <Fragment>
              {/* title */}
              <div className="title">
                <div className="title_inner">Details</div>
              </div>
              {/* details */}
              <ul className="details-list">
                <li>
                  <strong>Type:</strong>{" "}
                  <a href={"https://digimuza.github.io/iterparse/#/home"}>Open Source</a>
                </li>
                <li>
                  <strong>Working from:</strong> 2020 - Present
                </li>
              </ul>
            </Fragment>
          ),
          sections: [
            {
              title: <span>In progress...</span>,
              text: <Fragment></Fragment>,
            },
          ],
        }}
      ></BlogEntry>
    ),
  },
  {
    title: "Passcamp",
    page: "passcamp.html",
    image: "images/passcamp-background.png",
    content: (
      <BlogEntry
        data={{
          title: "Passcamp",
          details: (
            <Fragment>
              {/* title */}
              <div className="title">
                <div className="title_inner">Details</div>
              </div>
              {/* details */}
              <ul className="details-list">
                <li>
                  <strong>Company:</strong>{" "}
                  <a href={"https://passcamp.com/"}>Passcamp</a>
                </li>
                <li>
                  <strong>Working from:</strong> 2016 - 2018
                </li>
              </ul>
            </Fragment>
          ),
          image: "images/passcamp-background.png",
          sections: [
            {
              title: <span>About project</span>,
              text: (
                <Fragment>
                  <p>Passcamp is password manager for teams</p>
                  <p>
                    It's feature set is heavily orianted for secure password
                    sharing. This project tough me so much about security, e2e
                    encryption, zero-konwalage algorithms.
                  </p>
                </Fragment>
              ),
            },
            {
              title: <span>Role in the company</span>,
              text: (
                <Fragment>
                  <p>I was in initial team in product design, and creation</p>
                  <p>
                    In passcamp I developed Angular 4+ web application, some
                    critical parts of backend infrastructure, Chrome, Firefox
                    and Safari extension.
                  </p>

                  <h4 style={{ color: "white" }}>
                    Angular 4+ passcamp.com web app
                  </h4>
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/gToYzkMp_Ag"
                    {...({
                      frameborder: "0",
                      allow:
                        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                      allowfullscreen: true,
                    } as any)}
                  ></iframe>
                  <p>
                    Passcamp was my first real project using{" "}
                    <strong>Angular 4+</strong>, It was challenging because
                    Passcamp uses a lot of real-time features, and handling all
                    events is not an easy job.
                  </p>
                  <p>
                    This forced me to learn RFP (reactive function programming){" "}
                    <a href={"https://rxjs-dev.firebaseapp.com/guide/overview"}>
                      RxJS
                    </a>
                    .
                  </p>
                  <p>
                    I love RxJS because it enables me to model real-time event
                    streams. This helps with complex real-time data.
                    Additionally angular itself it's not easies the framework
                    out there and now when I have more experience with
                    frameworks like React I probably would not choose it.
                  </p>
                  <p>
                    But in one way or another it helped me master my CSS, HTML
                    and Typescript skills to next level ❤️
                  </p>
                  <h5 style={{ color: "white" }}>Notable challenges</h5>
                  <p>
                    I needed encrypting and decrypting huge amounts of data in
                    browser. I needed to create solution that does not penalize
                    UX. So I used worker pool pattern.
                  </p>
                  <p>
                    It was kinda hard to implement because. In a worker, you
                    don't have any dependency so before that, you need to bundle
                    it down. Keep in mind that when I was developing this
                    application there was not a lot of information about
                    workers. And additionally, the certain browser didn't even
                    support workers feature
                  </p>

                  <h4 style={{ color: "white" }}>Browser extensions</h4>
                  <image
                    src={
                      "https://lh3.googleusercontent.com/HTxlicK4c2F55-2tfJcXqKUFkUaF50mNHLlIEe5fXBwbR_hHBRyAi05oM23hRBNEU-_2c5zHCUpC-8mrLes0hrCS=w640-h400-e365-rj-sc0x00ffffff"
                    }
                  ></image>
                  <p>
                    Browser extension was a really interesting and scary
                    experience. I in first hand experienced what browser the
                    extension can do.
                  </p>
                  <p>
                    Passcamp extension once again was built with Angular 4+. But
                    this time in chrome and extension format.
                  </p>
                  <p>
                    Generally, chrome and firefox extension are the same. But
                    there is a lot of differences with safari extensions.
                  </p>
                  <h4 style={{ color: "white" }}>Microservices and GoLang</h4>
                  <p>
                    For the backend we use{" "}
                    <a href={"https://golang.org/"}>Go</a> programing language.
                    With microservice architecture in mind
                  </p>
                  <p>
                    Go language is really neat and reliable. I wrote multiple
                    microservices and each microservice had 100% test coverage.
                    I love unit testing...
                  </p>
                  <p>
                    It was a nice experience because I initially didn't know the
                    Go language. But interestingly I was able to grasp it really
                    fast.
                  </p>
                  <h4 style={{ color: "white" }}>Conclusion</h4>
                  <p>
                    In Passcamp I learned a lot about modern product
                    development, best practices, and how to write great
                    software.
                  </p>
                  <p>
                    Learned Angular 4+ framework, Go lang language, rxjs and
                    Typescript
                  </p>
                </Fragment>
              ),
            },
          ],
        }}
      ></BlogEntry>
    ),
  },
  {
    title: "AdeoWeb",
    page: "adeo-web.html",
    image: "images/adeo_web-background.jpg",
    content: (
      <BlogEntry
        data={{
          title: "AdeoWeb",
          details: (
            <Fragment>
              {/* title */}
              <div className="title">
                <div className="title_inner">Details</div>
              </div>
              {/* details */}
              <ul className="details-list">
                <li>
                  <strong>Company:</strong>{" "}
                  <a href={"https://www.adeoweb.lt/"}>AdeoWeb</a>
                </li>
                <li>
                  <strong>Working from:</strong> 2015 - 2016
                </li>
              </ul>
            </Fragment>
          ),
          image: "images/adeo_web-background.jpg",
          sections: [
            {
              title: <span>In progress...</span>,
              text: <Fragment></Fragment>,
            },
          ],
        }}
      ></BlogEntry>
    ),
  },
  {
    title: "SearchNode",
    page: "searchnode.html",
    image: "images/searchnode-background.png",
    content: (
      <BlogEntry
        data={{
          title: "SearchNode",
          details: (
            <Fragment>
              {/* title */}
              <div className="title">
                <div className="title_inner">Details</div>
              </div>
              {/* details */}
              <ul className="details-list">
                <li>
                  <strong>Company:</strong>{" "}
                  <a href={"https://searchnode.com/"}>SearchNode</a>
                </li>
                <li>
                  <strong>Working from:</strong> 2018 - Present
                </li>
              </ul>
            </Fragment>
          ),
          image: "images/searchnode-background.png",
          sections: [
            {
              title: <span>In progress...</span>,
              text: <Fragment></Fragment>,
            },
          ],
        }}
      ></BlogEntry>
    ),
  },
];

export const pages = [
  {
    page: "index.html",
    content: <Home></Home>,
  },
  {
    page: "blog.html",
    content: (
      <BlogList
        entries={workBlogEntries.map((w) => ({
          category: "Work",
          image: w.image || "",
          title: w.title,
          url: w.page,
        }))}
      ></BlogList>
    ),
  },
  ...workBlogEntries,
];
