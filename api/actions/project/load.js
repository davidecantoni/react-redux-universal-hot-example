const initialProject = {
  id: 1,
  name: 'Project name test',
  description: 'Penatibus placerat urna sed placerat et habitasse a pid elementum ut facilisis adipiscing lorem et, cras, pid penatibus pid enim, aliquet cum montes? Ultrices, porttitor mus ac, tempor ut sit, ac nunc mattis tristique mus nunc dis magna, magna augue eu, phasellus, non amet? Risus eu augue mauris vel, adipiscing rhoncus duis velit ultrices sagittis egestas. Dignissim integer arcu sit ut nisi, duis nec, aliquam sociis, vel augue! Urna tortor? Nec phasellus! Montes sit! Proin magna elementum duis natoque magna et, penatibus rhoncus tristique, magnis ac! Nec ac sagittis nec! Rhoncus tincidunt rhoncus nunc ac? Hac! Ut scelerisque? Lectus porta urna eu placerat placerat a non lundium montes in eros tempor augue placerat turpis vel, ac odio parturient, lacus magna.',
  url: 'project-name-test',
  image: '//pfae-a.akamaihd.net/img/banner-background/background-image-1.jpg?v=22cf5485da34642bb289b1b113f2d2de',
  meta: {
    title: 'Project name test'
  }
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
