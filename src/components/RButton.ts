import RComponent from './RComponent';

class RButton extends RComponent {
  renderTemplate(): string {
    return `
      <style>
        button {
          width: 100%;
          height: 44px;

          margin-right: 16px;

          border: none;
          border-radius: 8px;

          font-weight: 600;
          cursor: pointer;    
        }

        :host([variant="primary"]) > button {
          background: var(--primary-color);
          color: var(--grey-100);
        }
        
        :host([variant="secondary"]) > button {
          border: 1px solid var(--grey-300);
          background: transparent;

          color: var(--grey-300);
        }
      </style>

      <button class="text-caption">
        <slot></slot>
      </button>
    `;
  }
}

customElements.define('r-button', RButton);

export default RButton;
