import { text, html, matchRemoveList } from 'commonmark-helpers';
import { is } from 'ramda';

const wrap = item =>
  (is(String, item) || is(RegExp, item))
    ? node => text(node).match(item)
    : item;

export default (input, removeList = []) => {
  const node = matchRemoveList(input, ...removeList.map(wrap).filter(is(Function)));
  if (!node) return;
  return {
    text: text(node),
    html: html(node),
    node
  };
};
