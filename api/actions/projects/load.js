const initialProjects = [
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
  }
];

export function getProjects(req) {
  let projects = req.session.projects;
  if (!projects) {
    projects = initialProjects;
    req.session.projects = projects;
  }
  return projects;
}

export default function load(req) {
  return new Promise((resolve, reject) => {
    // make async call to database
    setTimeout(() => {
      resolve(getProjects(req));
    }, 1000); // simulate async load
  });
}
