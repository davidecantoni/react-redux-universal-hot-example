const initialProject = {
  id: 1,
  name: 'Project name test',
  description: 'Lorem ipsum',
  url: 'project-name-test'
};

export function getProject(req) {
  let project = req.session.project;
  if (!project) {
    project = initialProject;
    req.session.project = project;
  }
  return project;
}

export default function load(req) {
  return new Promise((resolve, reject) => {
    // make async call to database
    setTimeout(() => {
      resolve(getProject(req));
    }, 1000); // simulate async load
  });
}
