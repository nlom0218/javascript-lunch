import RFormControl from './RFormControl';

class RInput extends RFormControl {
  override renderTemplate(): string {
    return `
      <style>
        input {
          padding: 8px;
          margin: 6px 0;

          border: 1px solid var(--grey-200);
          border-radius: 8px;

          font-size: 16px;
          width: 100%;
        }
      </style>
      <input>
    `;
  }
}

customElements.define('r-input', RInput);

export default RInput;