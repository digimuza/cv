import { h } from "preact";
import { Page } from "../../Core/Page";

export function BlogListTopSection() {
  return (
    <div
      className="section started layout-creative"
      id="section-started"
      style={`height: 500px;`}
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
            <h1 className="h-title">Blog</h1>
            <div className="h-subtitles">
              <div className="h-subtitle typing-bread">
                <p className="breadcrumbs">
                  <a href="index.html">Home</a> / <a href="works.html">Blog</a>{" "}
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

export function BlogListFilters(props: BlogList) {
  return (
    <div className="section works" id="section-portfolio">
      <div className="content">
        {/* portfolio filter */}
        <div className="filter-menu content-box">
          <div className="filters">
            <div className="btn-group">
              <label data-text="All" className="glitch-effect">
                <input type="radio" name="fl_radio" value=".box-item" />
                All
              </label>
            </div>
            <div className="btn-group">
              <label data-text="Video">
                <input type="radio" name="fl_radio" value=".f-video" />
                Video
              </label>
            </div>
            <div className="btn-group">
              <label data-text="Music">
                <input type="radio" name="fl_radio" value=".f-music" />
                Music
              </label>
            </div>
            <div className="btn-group">
              <label data-text="Links">
                <input type="radio" name="fl_radio" value=".f-links" />
                Links
              </label>
            </div>
            <div className="btn-group">
              <label data-text="Image">
                <input type="radio" name="fl_radio" value=".f-image" />
                Image
              </label>
            </div>
            <div className="btn-group">
              <label data-text="Gallery">
                <input type="radio" name="fl_radio" value=".f-gallery" />
                Gallery
              </label>
            </div>
            <div className="btn-group">
              <label data-text="Content">
                <input type="radio" name="fl_radio" value=".f-content" />
                Content
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export interface BlogCard {
  category: string;
  title: string;
  url: string;
  image: string;
}
export function BlogCard(props: BlogCard) {
  const target = props.url.startsWith("http") ? { target: "_blank" } : {};
  return (
    <div class={`box-item f-${props.category}`}>
      <div class="image">
        <a href={props.url} class="has-popup-link hover-animated" {...target}>
          <div class={"centrize full-width content-box"}>
            <h5 style={"color: white"}>{props.title}</h5>
          </div>
          {/* <span class="info circle">
            <span class="centrize full-width">
              <span class="vertical-center">
                <span class="icon fas fa-link"></span>
                <span class="desc">
                  <span class="category">{props.category}</span>
                  <span class="name">{props.title}</span>
                </span>
              </span>
            </span>
          </span> */}
        </a>
      </div>
    </div>
  );
}

export interface BlogList {
  entries: ReadonlyArray<BlogCard>;
}
export function BlogList(props: BlogList) {
  return (
    <Page class={""}>
      <BlogListTopSection></BlogListTopSection>
      <div class="wrapper">
        <div class="section works" id="section-portfolio">
          <div class="content">
            {/* <BlogListFilters {...props}></BlogListFilters> */}
            <div class="box-items portfolio-items">
              {props.entries.map((v) => (
                <BlogCard {...v}></BlogCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
