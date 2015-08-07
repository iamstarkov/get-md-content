import { text, html, matchRemoveList } from 'commonmark-helpers';
import { is } from 'ramda';

const wrap = item =>
  (is(String, item) || is(RegExp, item))
    ? node => text(node).match(item)
    : item;

const getMatchers = removeList => removeList.map(wrap).filter(is(Function));

export default (input, removeList = []) => {
  const node = matchRemoveList(input, ...getMatchers(removeList));
  if (!node) return;
  return {
    text: text(node),
    html: html(node),
    node
  };
};
