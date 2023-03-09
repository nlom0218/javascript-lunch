import Validation from './Validation';

export interface RestaurantProps {
  category: string;
  name: string;
  distanceByMinutes: number;
  description?: string;
  referenceUrl?: string;
  isFavorite?: boolean;
  existRestaurantsName?: string[];
}

class Restaurant {
  static readonly CATEGORIES = ['한식', '중식', '일식', '양식', '아시안', '기타'] as const;

  static readonly DISTANCE_BY_MINUTES = [5, 10, 15, 20, 30] as const;

  private category: string;

  private name: string;

  private distanceByMinutes: number;

  private description?: string;

  private referenceUrl?: string;

  private isFavorite = false;

  constructor({
    category,
    name,
    distanceByMinutes,
    description,
    referenceUrl,
    existRestaurantsName,
  }: RestaurantProps) {
    this.validateCategory(category);
    this.validateName(name, existRestaurantsName);
    this.validateDistanceByMinutes(distanceByMinutes);

    this.category = category;
    this.name = name;
    this.distanceByMinutes = distanceByMinutes;
    this.description = description || undefined;
    this.referenceUrl = referenceUrl || undefined;
  }

  isMatchCategory(searchCategory: string) {
    return this.category === searchCategory;
  }

  getName() {
    return this.name;
  }

  getDistanceByMinutes() {
    return this.distanceByMinutes;
  }

  getDescription() {
    return this.description;
  }

  getCategory() {
    return this.category;
  }

  getReferenceUrl() {
    return this.referenceUrl;
  }

  getIsFavorite() {
    return this.isFavorite;
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  private validateCategory(category: string) {
    Validation.validateRestaurantCategory(category);
  }

  private validateName(name: string, existRestaurantsName?: string[]) {
    Validation.validateRestaurantNameLength(name);
    Validation.validateRestaurantNameDuplication(name, existRestaurantsName);
  }

  private validateDistanceByMinutes(distanceByMinutes: number) {
    Validation.validateRestaurantDistanceByMinutes(distanceByMinutes);
  }
}

export default Restaurant;
