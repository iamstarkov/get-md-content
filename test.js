import { equal } from 'assert';
import { isHeader } from 'commonmark-helpers';
import getContent from './index';

// что такое контент?
// это статья без нодs заголовка и ноды c датой

const simple = `
# h1

content
`.trim();

const medium = `
# h1

## h2

content
`.trim();

it('should simple getContent matcher', () => {
  equal(getContent([isHeader], simple).text, 'content');
});

it('should simple getContent RexExp', () => {
  equal(getContent([/h1/], simple).text, 'content');
});

it('should simple getContent full list', () => {
  equal(getContent([/h1/, /h2/], medium).text, 'content');
});

it('should simple getContent empty list', () => {
  equal(getContent([], `content`).text, 'content');
});
