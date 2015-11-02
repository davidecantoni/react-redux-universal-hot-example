const initialProject = {
  id: 1,
  name: 'AZIZI LIATRIS RESIDENCE',
  tagline: 'Our vision is to build truly elegant homes',
  rera: '458',
  description: '<p>With a view of the enchanting Dubai Marina skyscrapers from the Al Furjan community setting, the Azizi Liatris Residence is uniqueness personified.</p><p>Affordability coupled luxurious amenities make this an excitingly sound investment. High spec building materials and modern designs make the Azizi Liatris an elegant choice for family homes with unrivaled quality finishing. The attractive buildings are conveniently located to all the amenities a modern family may desire. Location makes this piece of the pie all the more sweet.</p>',
  developer_name: 'Azizi Liatris',
  developer_logo: '/azizi-logo.jpg',
  price: '891,000',
  price_sqft: '985',
  price_payable: '89,100',
  currency: 'AED',
  status: 'Under Construction',
  total_units: '250',
  possession: 'Q1 2016',
  title_type: 'Freehold',
  location: 'Al Furjan, Dubai',
  url: 'project-name-test',
  image: '/main-img.jpg',
  secondary_image: '/secondary-img.jpg',
  key_features: [
    'Beautiful large swimming pool',
    'Kid&#39;s pool at the podium level',
    'State of the art gymnasium Modern sauna',
    'Steam room and jacuzzi',
    'Car parking spots for each appartment'
  ],
  master_developer: {
    name: 'Nakheel',
    img: '/nakheel.jpg'
  },
  developer: {
    name: 'Azizi Liatris',
    img: '/azizi.jpg'
  },
  bank: {
    name: 'ADCB',
    img: '/adcb.jpg'
  },
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
