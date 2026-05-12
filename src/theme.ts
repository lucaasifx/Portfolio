import { createTheme, type MantineColorsTuple } from '@mantine/core';

export const palette = {
  espresso: '#1a0f0a',
  bean: '#2b1810',
  beanLight: '#3a2418',
  crema: '#f3e9d8',
  cremaDim: '#d9cdb8',
  latte: '#8a6a52',
  amber: '#e08820',
  ember: '#c25e1a',
} as const;

const amberTuple: MantineColorsTuple = [
  '#fff5e6',
  '#ffe6c2',
  '#fbcf94',
  '#f7b562',
  '#f29a3a',
  '#e08820',
  '#c25e1a',
  '#9a4814',
  '#73330d',
  '#4a1f06',
];

const espressoTuple: MantineColorsTuple = [
  '#f3e9d8',
  '#d4bfa3',
  '#a98968',
  '#8a6a52',
  '#5e4632',
  '#3a2418',
  '#2b1810',
  '#22120c',
  '#1a0f0a',
  '#100806',
];

export const theme = createTheme({
  fontFamily: '"Inter Variable", system-ui, -apple-system, sans-serif',
  fontFamilyMonospace: '"JetBrains Mono", ui-monospace, monospace',
  headings: {
    fontFamily: '"Fraunces Variable", Georgia, serif',
    fontWeight: '500',
  },
  primaryColor: 'amber',
  primaryShade: 5,
  colors: {
    amber: amberTuple,
    espresso: espressoTuple,
  },
  defaultRadius: 'md',
  cursorType: 'pointer',
  other: {
    palette,
  },
});

declare module '@mantine/core' {
  interface MantineThemeOther {
    palette: typeof palette;
  }
}
