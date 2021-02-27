import { Fragment, h, JSX } from "preact";
import { Page } from "../../Core/Page";

export function BlogTopSection(props: BlogEntry) {
  return (
    <div
      className="section started layout-creative"
      id="section-started"
      style={`height: 500px; ${
        props.image
          ? `background: url(${props.image})  no-repeat center;`
          : ""
      }`}
    >
      {/* background */}
      <div className="video-bg">
        <div className="video-bg-mask" />
        <div className="video-bg-texture" id="grained_container" />
      </div>
      {/* started content */}
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="started-content">
            <h1 className="h-title">{props.title}</h1>
            <div className="h-subtitles">
              <div className="h-subtitle typing-bread">
                <p className="breadcrumbs">
                  <a href="index.html">Home</a> / <a href="works.html">Blog</a>{" "}
                  / {props.title}
                </p>
              </div>
              <span className="typed-bread" />
            </div>
          </div>
        </div>
      </div>
      {/* mouse button */}
      <a href="#" className="mouse_btn" style={{ display: "none" }}>
        <span className="icon fas fa-chevron-down" />
      </a>
    </div>
  );
}

export interface ArticleEntrySection {
  title: h.JSX.Element;
  text: h.JSX.Element;
}
export function BlogContent(props: BlogEntry) {
  return (
    <div className="section blog">
      <div className="content content-box">
        <div className="single-post-text">
          {/* portfolio content */}
          <div className="portfolio-info portfolio-cols">
            <div className="description-col">
              {props.sections.map((section, index) => {
                return (
                  <Fragment>
                    {index !== 0 && <div style={"height: 35px"}></div>}
                    <div className="title">
                      <div className="title_inner">{section.title}</div>
                    </div>
                    <div className="single-post-text">{section.text}</div>
                  </Fragment>
                );
              })}
            </div>
            <div className="details-col">
             {props.details}
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
}

export interface BlogEntry {
  title: string;
  sections: ReadonlyArray<ArticleEntrySection>;
  image?: string;
  details: JSX.Element
}
export function BlogEntry(props: { data: BlogEntry }) {
  return (
    <Page class={""}>
      <div className="wrapper">
        <BlogTopSection {...props.data}></BlogTopSection>
        <BlogContent {...props.data}></BlogContent>
      </div>
    </Page>
  );
}
