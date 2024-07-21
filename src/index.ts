import { Hono } from 'hono';
import { japaneseWords } from './words';

const app = new Hono();

function getRandomWords(count: number): string[] {
  const shuffled = japaneseWords.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

app.get('/', (c) => {
  const words = getRandomWords(2);
  return c.json({ words });
});

export default app;
