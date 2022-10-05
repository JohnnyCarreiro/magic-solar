export const navLinks = [
  {name: 'Sobre',id: 'about'},
  {name: 'Como Atuamos',id: 'how-we-work'},
  {name: 'Serviços',id: 'services'},
  {name: 'Energia Solar',id: 'solar-energy'},
  {name: 'Contatos',id: 'contacts'},
]

export const metaTags = {
  about_us_section: {
    name: 'Energia Solar - Magic Solar - Soluções em energia Solar',
    image: require('../assets/images/meta_image.png').default,
    content: 'Faça parte da nova realidade do mundo, passe a gerar sua própria energia elétrica. Cuidamos de tudo no seu projeto de energia solar. Você não se preecupa com nada!'
  }
}

export const heroSection = {
  heading: 'Sua empresa está pronta para o presente?',
  description:
    'Faça parte da nova realidade do mundo, passe a gerar sua própria energia elétrica e fuja das incertezas de geração, disponibilidade e tarifas. Transformando o que hoje é um passivo em um ativo. ',
  cta: 'Saiba Mais',
  scrollToId: 'solar-energy'
}
export const homeObjOne = {
  //color Scheme
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  //texts
  topLine: 'Projetos sob-medida',
  headLine:
    'Somos a MAGIC SOLAR',
  description:
    '',
    imgStart: false,
    //image
  img: require('../assets/images/logo.svg').default,
  alt: 'Logo da Magic Solar',
  buttonLabel: 'Saiba Mais',
  scrollToId:'how-we-work',
  //button
  dark: false,
  primary: true,
}
export const homeObjTwo = {
  //color Scheme
  id: 'how-we-work',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  //texts
  topLine: 'Projeto, Implementação e Resultados!',
  headLine:
    'Cuidamos de Tudo, do início ao fim',
  description:
    'Com base no seu consumo atual de energia nossos profissionais buscam projetar a melhor solução fotovoltaica para sua necessidade. Se responsabilizando por toda a parte burocrática com a distribuidora de energia. E entregamos o sistema fotovoltaico já conectado à rede e em pleno funcionamento.',
    imgStart: true,
    //image
  img: require('../assets/images/project.svg').default,
  alt: 'Logo da Magic Solar',
  buttonLabel: 'Saiba Mais',
  scrollToId:'contacts',
  //button
  dark: true,
  primary: false,
}
export const services = [
  {
    heading: 'Projeto',
    description:'Nossos profissionais buscam projetar a melhor solução fotovoltaica para sua necessidade.',
    img: require('../assets/images/project-2.svg').default,
    alt:'projeto'
  },
  {
    heading: 'Implantação',
    description:'Nossa equipe se responsabiliza por toda a parte burocrática com a distribuidora de energia.',
    img: require('../assets/images/implementation.svg').default,
    alt:'implantação'
  },
  {
    heading: 'Resultados',
    description:'Entregamos o sistema fotovoltaico já conectado à rede e em pleno funcionamento.',
    img: require('../assets/images/deliver.svg').default,
    alt:'iamge 2'
  }
]
export const homeObjThree = {
  //color Scheme
  id: 'solar-energy',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  //texts
  topLine: ' Limpa, Renovável e é toda sua!',
  headLine:
    'As vantagens da energia solar',
  description:
    '<p><strong>Sistemas Off e On Grid:</strong><br/> O sistema Off Grid não é ligado na rede da concessionária, ele trabalha com o armazenamento em baterias. O sistema On Grid é ligado a rede da concessionária. <br/><br/>  <strong>Equipamentos Eletrônicos: </strong><br/> A energia solar pode ser utilizada em praticamente todos os equipamentos eletrônicos, como televisão, lavadora, computador, aquecedor de água, etc.<br/><br/> <strong>Dias Nublados ou com Chuva:</strong> <br/> A captação pelos painéis e geração de energia é possível mesmo em dias nublados, chuvosos e de baixa temperatura. Pois depende da radiação solar captada pelos painéis. Preocupação com o meio ambiente: Não gera impactos ambientais durante a produção de energia.</p>',
    imgStart: false,
    //image
  img: require('../assets/images/svg-1.svg').default,
  alt: 'Logo da Magic Solar',
  buttonLabel: 'Saiba Mais',
  scrollToId:'contacts',
  //button
  dark: true,
  primary: false,
}

export const results = [
  {
    heading: '+300',
    description:'Projetos concluídos com sucesso em todo o Brasil.',
    img: require('../assets/images/services/certification.svg').default,
    alt:'projetos'
  },
  {
    heading: '9,0',
    description:'Nota de satisfação dos  clientes Magic Solar.',
    img: require('../assets/images/services/score.svg').default,
    alt:'avalição'
  },
  {
    heading: '25 ANOS',
    description:'De garantia de performance e 12 anos contra defeitos.',
    img: require('../assets/images/services/garanty.svg').default,
    alt:'Garantia'
  }
]
export const contactInfos = {
  //color Scheme
  id: 'contacts',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  //texts
  topLine: 'Um café, suas necessidades e a melhor solução',
  headLine:
    'Nossos Contatos',
  description:
    'Entre em contato conosco para agendar uma visita com um de nossos representantes. Estamos anciosos em saber mais sobre o projeto que desenvolveremos para você.',
  phone: '19 98123-4785',
  email: 'contato@magicsolar.com.br',
  address: 'Rua Guilherme Pedrini, 51 - Parque dos Eucaliptos - Mogi Guaçu/ SP',
  imgStart: false,
  //image
  img: require('../assets/images/contact.svg').default,
  alt: 'Logo da Magic Solar',
  buttonLabel: 'Solicite uma visita',
  scrollToId:'/agenda',
  //button
  dark: true,
  primary: false,
}
