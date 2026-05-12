import { motion } from 'motion/react';
import classes from './StackIngredient.module.css';

interface Props {
  name: string;
  dose: string;
  desc: string;
  index: number;
}

export function StackIngredient({ name, dose, desc, index }: Props) {
  return (
    <motion.div
      className={classes.row}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.08 * index }}
    >
      <div className={classes.head}>
        <h3 className={`display ${classes.name}`}>{name}</h3>
        <span className={`mono ${classes.dose}`}>{dose}</span>
      </div>
      <p className={classes.desc}>{desc}</p>
      <div className={classes.line} aria-hidden />
    </motion.div>
  );
}
