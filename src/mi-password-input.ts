import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { genPasswordRules, Config } from './utils/gen_password_rules';

@customElement('mi-password-input')
export class MIPasswordInput extends LitElement {
  @property({ type: String })
  minlength = '';

  @property({ type: String })
  maxlength = '';

  @property({ type: String })
  required = '';

  @property({ type: Boolean, attribute: 'allow-lower' })
  allowLower = false;

  @property({ type: Boolean, attribute: 'allow-upper' })
  allowUpper = false;

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
      allow: {
        lower: this.allowLower,
        upper: this.allowUpper,
        // NOTE:
        // 数字のみ補完されるようにするためには allowed: digit ルールを明示的に追加する必要がある
        // 現在の設計では allowDigit を false にするメリットがないため attribute として宣言はしないが
        // 変数として定義はしておき true を強制する
        digit: true,
      },
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
    'password-input': MIPasswordInput;
  }
}
