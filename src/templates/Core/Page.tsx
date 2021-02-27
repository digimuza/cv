import { Html } from "./Html";
import { h } from "preact";
import { Head } from "./Head";
import { Body } from "./Body";
import { WithChildren } from "../../types";

export function Page(props: WithChildren<{ class: string }>) {
  return (
    <Html>
      <Head></Head>
      <Body class={props.class}>
        <header class="header">
          <div class="head-top">
            <a href="#" class="menu-btn">
              <span></span>
            </a>

            <div class="logo hover-masks-logo">
              <a href="/#section-about">
                <span class="mask-lnk">
                  Andrius <strong>Mozūraitis</strong>
                </span>
                <span class="mask-lnk mask-lnk-hover">
                  Download <strong>CV</strong>
                </span>
              </a>
            </div>

            <div class="top-menu hover-masks">
              <div class="top-menu-nav">
                <div class="menu-topmenu-container">
                  <ul class="menu">
                    <li class="menu-item current-menu-item">
                      <a href="#section-started">Home</a>
                    </li>
                    <li class="menu-item">
                      <a href="#section-about">Resume</a>
                    </li>
                    <li class="menu-item">
                      <a href="/blog.html">Blog</a>
                    </li>
                    <li class="menu-item">
                      <a href="#section-contacts">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
        {props.children}
        <footer class="footer">
          <div class="copy">
            <p>E: andrius@digimuza.com</p>
            <p>T: +370 60262684</p>
          </div>
          <div class="soc-box">
            <div class="follow-label">Follow Me</div>
            <div class="soc">
              <a target="_blank" href="https://github.com/digimuza">
                <span class="icon fab fa-github"></span>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/andriusmozuraitis/"
              >
                <span class="icon fab fa-linkedin"></span>
              </a>
            </div>
          </div>
          <div class="clear"></div>
        </footer>

        <div class="lines">
          <div class="line-col"></div>
          <div class="line-col"></div>
          <div class="line-col"></div>
          <div class="line-col"></div>
          <div class="line-col"></div>
        </div>
      </Body>
    </Html>
  );
}
