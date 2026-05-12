export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  thumbnail?: string;
}

// TODO Lucas: substituir pelos seus projetos reais (1-2 a princípio).
// Cada slot vazio será mostrado como "próximo grão sendo torrado".
export const projects: Project[] = [
  {
    id: 'placeholder-1',
    title: 'Projeto em construção',
    description:
      'Um sistema fullstack com Java Spring no backend e React + TypeScript no frontend. Em breve, descrição real, screenshots e link.',
    tags: ['java', 'spring', 'postgres', 'react'],
    link: undefined,
  },
];

// quantos slots vazios mostrar depois dos projetos preenchidos
export const EMPTY_SLOTS = 2;
