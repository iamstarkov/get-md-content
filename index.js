import { text, html, matchRemoveList } from 'commonmark-helpers';
import { is, map } from 'ramda';

const getMatcher = item => {
  if (is(Function, item)) {
    return item;
  }

  if (is(RegExp, item)) {
    return node => text(node).match(item);
  }
};

const result = node => ({
  text: text(node),
  html: html(node),
  node
});

export default (removeList, input) =>
  result(matchRemoveList(input, ...map(getMatcher, removeList)));
