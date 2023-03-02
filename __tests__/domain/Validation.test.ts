import Category from '../../src/domain/Category';
import Restaurant from '../../src/domain/Restaurant';

describe('Validation', () => {
  context('음식점 이름의 길이가 올바를 때', () => {
    it.each(['한식', '짱', '좀길이가엄청긴음식점좀길이가엄청긴음식점'])(
      '%p: Restaurant 객체가 생성되어야 한다.',
      (restaurantName) => {
        // given
        const restaurant = new Restaurant({
          category: new Category('기타', 'etc.png'),
          name: restaurantName,
          distanceByMinutes: 5,
        });

        // then
        expect(restaurant).toBeInstanceOf(Restaurant);
      },
    );
  });

  context('음식점 이름의 길이가 올바르지 않을 때', () => {
    it.each(['', '좀길이가엄청긴음식점좀길이가엄청긴음식점+'])(
      '%p: 에러가 발생해야 한다.',
      (restaurantName) => {
        const createRestaurant = () =>
          new Restaurant({
            category: new Category('기타', 'etc.png'),
            name: restaurantName,
            distanceByMinutes: 5,
          });

        expect(createRestaurant).toThrowError();
      },
    );
  });
});