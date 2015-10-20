const initialWidgets = [
  {
    id: 1,
    developer: {
      id: 1,
      name: 'Azizi',
      url: 'لعقارات'
    },
    project: {
      id: 1,
      name: 'Project name test',
      url: 'project-name-test'
    }
  },
  {
    id: 2,
    developer: {
      id: 1,
      name: 'Deyaar Properties',
      url: 'deyaar-properties'
    },
    project: {
      id: 1,
      name: 'Very nice',
      url: 'very-nice'
    }
  },
];

export function getWidgets(req) {
  let widgets = req.session.widgets;
  if (!widgets) {
    widgets = initialWidgets;
    req.session.widgets = widgets;
  }
  return widgets;
}

export default function load(req) {
  return new Promise((resolve, reject) => {
    // make async call to database
    setTimeout(() => {
      /*if (Math.floor(Math.random() * 3) === 0) {
       reject('Widget load fails 33% of the time. You were unlucky.');
       } else {*/
      resolve(getWidgets(req));
      //}
    }, 3000); // simulate async load
  });
}
