/**
 * @todo Complete the test
 * This example is not perfect.
 * Test should check if MomentJS have been called
 */
describe('directive navbar', function() {
  let vm;
  let element;

  beforeEach(angular.mock.module('evojam'));

  beforeEach(inject(($compile, $rootScope) => {
    element = angular.element(`
      <evojam-dashboard-panel></evojam-dashboard-panel>
    `);

    $compile(element)($rootScope.$new());
    $rootScope.$digest();
    vm = element.isolateScope().vm;
  }));

  it('should be compiled', () => {
    expect(element.html()).not.toEqual(null);
  });

  it('should have isolate scope object with instanciate members', () => {
    expect(vm).toEqual(jasmine.any(Object));
  });
});
