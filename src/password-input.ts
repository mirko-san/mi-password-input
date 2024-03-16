import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { genPasswordRules, Config } from './utils/gen_password_rules';

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

  buildPasswordrules(): string {
    let minlength = this.minlength === null ? null : parseInt(this.minlength);
    let maxlength = this.maxlength === null ? null : parseInt(this.maxlength);
    if (minlength && isNaN(minlength)) {
      console.error('Parse Error. "minlength" is not integer.');
      console.log('Set "minlength" to null');
      minlength = null;
    }
    if (maxlength && isNaN(maxlength)) {
      console.error('Parse Error. "maxlength" is not integer.');
      console.log('Set "maxlength" to null');
      maxlength = null;
    }
    const o: Config = {
      minlength: minlength || undefined,
      maxlength: maxlength || undefined,
    };
    return genPasswordRules(o);
  }

  render() {
    if (!this.buildPasswordrules()) {
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
    return html`
      <input
        type="password"
        minlength="${this.minlength}"
        maxlength="${this.maxlength}"
        autocomplete="new-password"
        ?required="${this.parseRequired(this.required)}"
        passwordrules="${this.buildPasswordrules()}"
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
