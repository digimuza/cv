import { Fragment, h } from "preact";
import { Article } from "./templates/Pages/Article/Article";
import { Home } from "./templates/Pages/Home/Home";

export const pages = [
  {
    page: "index.html",
    content: <Home></Home>,
  },
  {
    page: "passcamp.html",
    content: (
      <Article
        data={{
          title: "Passcamp",
          image: "images/passcamp-background.png",
          sections: [
            {
              title: <span>Role in the company</span>,
              text: (
                <Fragment>
                  <p>
                    Now there is more fashion. There is no so-called trends. Now
                    chase after anything not necessary — nor for fashionable
                    color nor the shape, nor for style. Think about the content
                    that you want to invest in a created object, and only then
                    will form. The thing is your spirit. A spirit unlike forms
                    hard copy.
                  </p>
                  <p>
                    Here choose yourself like that, without any looking back, do
                    your personal, home, small fashion, and all will be well.
                  </p>
                  <p>
                    My job is simple and sophisticated, so it is possible to
                    describe and simple, and flowery language. I love the feel
                    and sophistication of its superiority. I like people with a
                    keen mind and at the same time easy to talk to. These
                    qualities can be combined perfectly natural. However, things
                    like people look miserable, if these properties are
                    connected to them artificially.
                  </p>
                </Fragment>
              ),
            },
          ],
        }}
      ></Article>
    ),
  },
  {
    page: "adeo-web.html",
    content: (
      <Article
        data={{
          title: "AdeoWeb",
          image: "images/adeo_web-background.jpg",
          sections: [
            {
              title: <span>Role in the company</span>,
              text: (
                <Fragment>
                  <p>
                    Now there is more fashion. There is no so-called trends. Now
                    chase after anything not necessary — nor for fashionable
                    color nor the shape, nor for style. Think about the content
                    that you want to invest in a created object, and only then
                    will form. The thing is your spirit. A spirit unlike forms
                    hard copy.
                  </p>
                  <p>
                    Here choose yourself like that, without any looking back, do
                    your personal, home, small fashion, and all will be well.
                  </p>
                  <p>
                    My job is simple and sophisticated, so it is possible to
                    describe and simple, and flowery language. I love the feel
                    and sophistication of its superiority. I like people with a
                    keen mind and at the same time easy to talk to. These
                    qualities can be combined perfectly natural. However, things
                    like people look miserable, if these properties are
                    connected to them artificially.
                  </p>
                </Fragment>
              ),
            },
          ],
        }}
      ></Article>
    ),
  },
  {
    page: "searchnode.html",
    content: (
      <Article
        data={{
          title: "SearchNode",
          image: "images/searchnode-background.png",
          sections: [
            {
              title: <span>Role in the company</span>,
              text: (
                <Fragment>
                  <p>
                    Now there is more fashion. There is no so-called trends. Now
                    chase after anything not necessary — nor for fashionable
                    color nor the shape, nor for style. Think about the content
                    that you want to invest in a created object, and only then
                    will form. The thing is your spirit. A spirit unlike forms
                    hard copy.
                  </p>
                  <p>
                    Here choose yourself like that, without any looking back, do
                    your personal, home, small fashion, and all will be well.
                  </p>
                  <p>
                    My job is simple and sophisticated, so it is possible to
                    describe and simple, and flowery language. I love the feel
                    and sophistication of its superiority. I like people with a
                    keen mind and at the same time easy to talk to. These
                    qualities can be combined perfectly natural. However, things
                    like people look miserable, if these properties are
                    connected to them artificially.
                  </p>
                </Fragment>
              ),
            },
          ],
        }}
      ></Article>
    ),
  },
];
