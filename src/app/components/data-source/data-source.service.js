export class DataSourceService {
  constructor() {
    'ngInject';

    var labels = ['week 48', 'week 49', 'week 50', 'week 51', 'week 52'];
    var series = ['Net Comp', 'AnalyzerHR', 'Question Right'];

    this.data = [
      {
        'id': 'revenue',
        'title': 'Revenue by Solution',
        'cta': 'Revenue Analysis',
        'kpi': '32556',
        'kpiType': 'currency',
        'description': 'Revenue Stream',
        'chart': {
          type: 'line',
          labels,
          series,
          data: [
            [500, 600, 800, 850, 300],
            [400, 400, 600, 660, 150],
            [300, 50, 250, 220, 0]
          ]
        }
      },
      {
        'id': 'installations',
        'title': 'Installations',
        'cta': 'View Installations',
        'kpi': '136',
        'kpiType': 'number',
        'description': 'Installations',
        'chart': {
          type: 'bar',
          labels,
          series,
          data: [
            [6, 7, 8, 9, 3],
            [4, 3, 5, 7, 2],
            [3, 1, 3, 3, 1]
          ]
        }
      }
    ];
  }

  getData() {
    return this.data;
  }
}
