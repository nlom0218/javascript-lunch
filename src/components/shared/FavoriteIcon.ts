import errorHandler from '../../utils/errorHandler';
import CustomElement from '../CustomElement';

class FavoriteIcon extends CustomElement {
  static get observedAttributes() {
    return ['favorite'];
  }

  private get isFavorite() {
    return this.hasAttribute('favorite');
  }

  private get restaurantName() {
    return this.getAttribute('restaurantName');
  }

  renderTemplate = () => {
    return `
      <div 
        id="favorite-icon"
        name="${this.restaurantName}"
        class="favorite-restaurant-icon ${
          this.isFavorite ? 'favorite-icon' : 'not-favorite-icon'
        }">${this.isFavorite ? '★' : '☆'}</div>
      `;
  };

  render = () => {
    super.render();

    this.initEventHandlers();
  };

  clickFavoriteIcon = () => {
    if (this.isFavorite) {
      this.removeAttribute('favorite');
    } else {
      this.setAttribute('favorite', '');
    }

    this.dispatchEvent(
      new CustomEvent('toggleFavorite', {
        bubbles: true,
        detail: {
          restaurantName: this.restaurantName,
        },
      }),
    );
  };

  initEventHandlers = () => {
    const $favoriteIcon = this.querySelector('.favorite-restaurant-icon');

    if (!$favoriteIcon) return errorHandler.doesNotExistElement();

    $favoriteIcon.addEventListener('click', this.clickFavoriteIcon);
  };
}

customElements.define('r-favorite-icon', FavoriteIcon);

export default FavoriteIcon;
