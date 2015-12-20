describe('service DataSource', () => {
  beforeEach(angular.mock.module('evojam'));

  it('should be registered', inject(dataSource => {
    expect(dataSource).not.toEqual(null);
  }));

  describe('getData function', () => {
    it('should exist', inject(dataSource => {
      expect(dataSource.getData).not.toBeNull();
    }));

    it('should return array of object', inject(dataSource => {
      const data = dataSource.getData();
      expect(data).toEqual(jasmine.any(Array));
      expect(data[0]).toEqual(jasmine.any(Object));
      expect(data.length > 1).toBeTruthy();
    }));
  });
});
