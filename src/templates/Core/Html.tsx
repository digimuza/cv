import { h } from "preact";
import { WithChildren } from "../../types";

export function Html(props: WithChildren) {
  return <html lang="en-US">{props.children}</html>;
}
