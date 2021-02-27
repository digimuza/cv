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
