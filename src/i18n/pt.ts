export const pt: Translations = {
  nav: {
    sobre: 'sobre',
    stack: 'stack',
    projetos: 'projetos',
    contato: 'contato',
  },
  hero: {
    eyebrow: '// dev fullstack — desde 2022',
    firstName: 'LUCAS',
    lastName: 'FERRAZ',
    taglinePrefix: 'construindo com',
    taglineWords: ['café', 'java', 'ideias', 'propósito', 'contexto'],
    location: 'juazeiro · BA · 🇧🇷',
    role: 'engenharia da computação · UNIVASF',
    cta: 'me chama pra um café',
    scrollHint: 'role pra descer',
    marquee: 'java · spring · postgresql · mongodb · react · typescript · engenharia da computação · UNIVASF · juazeiro · BA',
  },
  about: {
    label: '// sobre',
    title: 'antes da primeira linha',
    block1: {
      meta: '// origem',
      text: 'Me chamo Lucas, tenho 20 anos e sou de Juazeiro, BA. Estudo Engenharia da Computação na UNIVASF e desde cedo descobri que programar pra mim é menos sobre tecnologia e mais sobre {{criação}} — a sensação de pegar uma ideia que só existia na minha cabeça e ver ela ganhar vida na tela.',
      highlight: 'criação',
    },
    block2: {
      meta: '// método',
      text: 'Costumo pensar em cada coisa que construo como um {{negócio}}. Me interessa entender o {{problema}} antes de escrever a primeira linha, saber pra quem estou construindo e por quê aquilo precisa existir. Quando entro em um projeto, entro de verdade.',
      highlights: ['negócio', 'problema'],
    },
    block3: {
      meta: '// fora do código',
      text: 'Fora do computador, gosto de pensar em ideias, entender como as coisas funcionam — sistemas, mercados, pessoas — e de um bom {{café}} enquanto faço isso.',
      highlight: 'café',
    },
  },
  stack: {
    label: '// stack',
    title: 'como eu preparo',
    subtitle: '→ minha receita',
    backendLabel: 'backend',
    frontendLabel: 'frontend',
    frontendNote: '// sem framework — gosto de saber o que filtra',
    items: {
      java: { name: 'Java', dose: '// dose: forte', desc: 'minha base, o grão moído' },
      spring: { name: 'Spring', dose: '// dose: o suficiente', desc: 'estrutura que aguenta peso' },
      postgres: { name: 'PostgreSQL', dose: '// dose: relacional', desc: 'quando o problema tem forma' },
      mongo: { name: 'MongoDB', dose: '// dose: flexível', desc: 'quando ainda não tem' },
      react: { name: 'React', dose: '// dose: cuidadosa', desc: 'a tela onde a ideia respira' },
      ts: { name: 'TypeScript', dose: '// dose: obrigatória', desc: 'porque eu durmo melhor' },
    },
  },
  projects: {
    label: '// projetos',
    title: 'o que andei torrando',
    subtitle: '→ alguns trabalhos selecionados',
    emptySlot: '// próximo grão sendo torrado',
    emptyHint: 'em breve',
    open: 'abrir repositório',
    viewMore: 'ver mais',
  },
  contact: {
    label: '// contato',
    title: 'vamos tomar um',
    titleAccent: 'café?',
    text: 'responder rápido é meu padrão. me chama por aqui:',
    emailLabel: 'email',
    githubLabel: 'github',
    linkedinLabel: 'linkedin',
    copied: '// copiado. café à caminho ☕',
  },
  footer: {
    compiled: '// compilado com café',
    location: 'juazeiro, BA',
  },
  hidden: {
    awayTitle: 'volto já — to no café ☕',
  },
};

export interface Translations {
  nav: {
    sobre: string;
    stack: string;
    projetos: string;
    contato: string;
  };
  hero: {
    eyebrow: string;
    firstName: string;
    lastName: string;
    taglinePrefix: string;
    taglineWords: string[];
    location: string;
    role: string;
    cta: string;
    scrollHint: string;
    marquee: string;
  };
  about: {
    label: string;
    title: string;
    block1: { meta: string; text: string; highlight: string };
    block2: { meta: string; text: string; highlights: string[] };
    block3: { meta: string; text: string; highlight: string };
  };
  stack: {
    label: string;
    title: string;
    subtitle: string;
    backendLabel: string;
    frontendLabel: string;
    frontendNote: string;
    items: Record<'java' | 'spring' | 'postgres' | 'mongo' | 'react' | 'ts', {
      name: string;
      dose: string;
      desc: string;
    }>;
  };
  projects: {
    label: string;
    title: string;
    subtitle: string;
    emptySlot: string;
    emptyHint: string;
    open: string;
    viewMore: string;
  };
  contact: {
    label: string;
    title: string;
    titleAccent: string;
    text: string;
    emailLabel: string;
    githubLabel: string;
    linkedinLabel: string;
    copied: string;
  };
  footer: {
    compiled: string;
    location: string;
  };
  hidden: {
    awayTitle: string;
  };
}

export type Dict = Translations;
