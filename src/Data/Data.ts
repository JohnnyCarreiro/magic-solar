export const navLinks = [
  {name: 'Sobre',id: 'about'},
  {name: 'Como Atuamos',id: 'how-we-work'},
  {name: 'Serviços',id: 'services'},
  {name: 'Energia Solar',id: 'solar-energy'},
]
export const heroSection = {
  heading: 'Sua empresa está pronta para o presente?',
  description:
    'Faça parte da nova realidade do mundo, passe a gerar sua própria energia elétrica e fuja das incertezas de geração, disponibilidade e tarifas. Transformando o que hoje é um passivo em um ativo.',
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
  topLine: 'Mussum Ipsum, cacilds vidis litro abertis',
  headLine:
    'Somos a MAGIC SOLAR',
  description:
    'A MAGIC SOLAR foi fundada no ano de 2015 com o intuito de proporcionar um serviço especializado e concreto na implementação de sistemas de geração distribuída de energia renovável.',
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
  dark: false,
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
  dark: false,
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
