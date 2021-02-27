import { h } from "preact";
import { WithChildren } from "../../types";

export function Body(props: WithChildren<{ class: string }>) {
  return (
    <body class={props.class}>
      {/* <div class="preloader">
        <div class="centrize full-width">
          <div class="vertical-center">
            <div class="spinner">
              <div class="double-bounce1"></div>
              <div class="double-bounce2"></div>
            </div>
          </div>
        </div>
      </div> */}
      <div class="container">
        <div class="cursor-follower"></div>
        {props.children}
      </div>

      <script src="js/jquery.min.js"></script>
      <script src="js/jquery.validate.js"></script>
      <script src="js/magnific-popup.js"></script>
      <script src="js/simpleParallax.js"></script>
      <script src="js/typed.js"></script>
      <script src="js/jarallax.js"></script>
      <script src="js/jarallax-video.js"></script>
      <script src="js/jarallax-element.js"></script>
      <script src="js/imagesloaded.pkgd.js"></script>
      <script src="js/isotope.pkgd.js"></script>
      <script src="js/swiper.js"></script>
      <script src="js/grained.js"></script>

      <script
        type="text/javascript"
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDz2w7HUaWudHwd7AWQpCL48Qs050WOn9s"
      ></script>

      <script src="js/scripts.js"></script>
    </body>
  );
}
