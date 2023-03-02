import Validation from './Validation';

interface RestaurantProps {
  category: string;
  name: string;
  distanceByMinutes: number;
  description?: string;
  referenceUrl?: string;
}

class Restaurant {
  static readonly CATEGORIES = ['전체', '한식', '중식', '일식', '양식', '아시안', '기타'] as const;

  #category: string;

  #name: string;

  #distanceByMinutes: number;

  #description?: string;

  #referenceUrl?: string;

  constructor({ category, name, distanceByMinutes, description, referenceUrl }: RestaurantProps) {
    this.validate(name);

    this.#category = category;
    this.#name = name;
    this.#distanceByMinutes = distanceByMinutes;
    this.#description = description;
    this.#referenceUrl = referenceUrl;
  }

  isMatchCategory(searchCategory: string) {
    return this.#category === searchCategory;
  }

  getName() {
    return this.#name;
  }

  getDistanceByMinutes() {
    return this.#distanceByMinutes;
  }

  getDescription() {
    return this.#description;
  }

  getCategory() {
    return this.#category;
  }

  validate(name: string) {
    Validation.validateRestaurantNameLength(name);
  }
}

export default Restaurant;
