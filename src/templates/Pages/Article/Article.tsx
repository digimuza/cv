import { Fragment, h } from "preact";
import { Page } from "../../Core/Page";

export function ArticlesTopSection(props: Article) {
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
export function ArticleEntry(props: Article) {
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
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
}

export interface Article {
  title: string;
  sections: ReadonlyArray<ArticleEntrySection>;
  image?: string;
}
export function Article(props: { data: Article }) {
  return (
    <Page class={""}>
      <div className="wrapper">
        <ArticlesTopSection {...props.data}></ArticlesTopSection>
        <ArticleEntry {...props.data}></ArticleEntry>
      </div>
    </Page>
  );
}
