import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('password-input')
export class PasswordInput extends LitElement {
  @property({ type: String })
  minlength = '';

  @property({ type: String })
  maxlength = '';

  @property({ type: String })
  required = '';

  parseRequired(s: string): boolean {
    if (s === 'true') {
      return true;
    }
    if (s === 'false') {
      return false;
    }
    throw new Error('Parse Error.');
  }

  render() {
    return html`
      <input
        type="password"
        minlength="${this.minlength}"
        maxlength="${this.maxlength}"
        autocomplete="new-password"
        ?required="${this.parseRequired(this.required)}"
      />
    `;
  }

  protected createRenderRoot() {
    return this;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'password-input': PasswordInput;
  }
}
