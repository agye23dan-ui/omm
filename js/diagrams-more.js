/*
 * Loads every extra lesson diagram. render.js imports from here, so diagrams register before any lesson draws.
 * The first seven diagrams and the drawing helpers live in diagrams.js.
 */
import './dg-foundations.js';
import './dg-electronics.js';
import './dg-machines.js';
import './dg-practice.js';

export { hasDiagram, diagram, DIAGRAMS } from './diagrams.js';
