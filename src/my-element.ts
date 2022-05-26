import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

export const tagName = "my-element";

/**
 * My Element
 */
@customElement(tagName)
export class MyElement extends LitElement {
  static styles = css``;

  @property() name = "";

  render() {
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: MyElement;
  }
}
