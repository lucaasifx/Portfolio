import type { Dict } from './pt';

export const en: Dict = {
  nav: {
    sobre: 'about',
    stack: 'stack',
    projetos: 'work',
    contato: 'contact',
  },
  hero: {
    eyebrow: '// fullstack dev — since 2022',
    firstName: 'LUCAS',
    lastName: 'FERRAZ',
    taglinePrefix: 'building with',
    taglineWords: ['coffee', 'java', 'ideas', 'purpose', 'context'],
    location: 'juazeiro · BA · 🇧🇷',
    role: 'computer engineering · UNIVASF',
    cta: 'grab a coffee with me',
    scrollHint: 'scroll down',
    marquee: 'java · spring · postgresql · mongodb · react · typescript · computer engineering · UNIVASF · juazeiro · BA',
  },
  about: {
    label: '// about',
    title: 'before the first line',
    block1: {
      meta: '// origin',
      text: "I'm Lucas, 20, from Juazeiro, BA. I study Computer Engineering at UNIVASF and figured out early that, for me, programming is less about tech and more about {{creation}} — the feeling of taking an idea that only existed in my head and watching it come alive on screen.",
      highlight: 'creation',
    },
    block2: {
      meta: '// method',
      text: 'I tend to think about everything I build as a {{business}}. I care about understanding the {{problem}} before writing the first line — who it is for and why it needs to exist. When I get into a project, I get into it for real.',
      highlights: ['business', 'problem'],
    },
    block3: {
      meta: '// outside the code',
      text: 'Off the computer, I like thinking about ideas, figuring out how things work — systems, markets, people — and a good {{coffee}} while doing it.',
      highlight: 'coffee',
    },
  },
  stack: {
    label: '// stack',
    title: 'how I brew it',
    subtitle: '→ my recipe',
    backendLabel: 'backend',
    frontendLabel: 'frontend',
    frontendNote: "// no framework — I like knowing what filters through",
    items: {
      java: { name: 'Java', dose: '// dose: strong', desc: 'my foundation, the ground bean' },
      spring: { name: 'Spring', dose: '// dose: enough', desc: 'structure that carries weight' },
      postgres: { name: 'PostgreSQL', dose: '// dose: relational', desc: 'when the problem has a shape' },
      mongo: { name: 'MongoDB', dose: '// dose: flexible', desc: "when it doesn't yet" },
      react: { name: 'React', dose: '// dose: careful', desc: 'the canvas the idea breathes on' },
      ts: { name: 'TypeScript', dose: '// dose: mandatory', desc: 'because I sleep better' },
    },
  },
  projects: {
    label: '// work',
    title: "what I've been roasting",
    subtitle: '→ a few selected works',
    emptySlot: '// next bean in the roaster',
    emptyHint: 'soon',
    open: 'open repository',
    viewMore: 'view more',
  },
  contact: {
    label: '// contact',
    title: "let's grab a",
    titleAccent: 'coffee?',
    text: 'responding fast is my default. reach me at:',
    emailLabel: 'email',
    githubLabel: 'github',
    linkedinLabel: 'linkedin',
    copied: '// copied. coffee on the way ☕',
  },
  footer: {
    compiled: '// brewed with coffee',
    location: 'juazeiro, BA',
  },
  hidden: {
    awayTitle: 'brb — making coffee ☕',
  },
};
