export function DashboardPanelDirective() {
  'ngInject';

  let directive = {
    restrict: 'EA',
    templateUrl: 'app/components/dashboard-panel/dashboard-panel.html',
    scope: {
      type: '@'
    },
    controller: DashboardPanelController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class DashboardPanelController {
  constructor(dataSource) {
    'ngInject';

    this.chartOptions = {
      bezierCurve: false,
      pointDotStrokeWidth: 3
    };
    this.data = dataSource.getData().find(item => item.id === this.type);

  }
}
