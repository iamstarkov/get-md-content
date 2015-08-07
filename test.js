import { equal } from 'assert';
import { isHeader } from 'commonmark-helpers';
import getContent from './index';

const simple = `
# header

content`;

it('should getContent with String', () =>
  equal(getContent(simple, ['header']).text, 'content'));

it('should getContent with RexExp', () =>
  equal(getContent(simple, [/header/]).text, 'content'));

it('should getContent with commonmark Matcher', () =>
  equal(getContent(simple, [isHeader]).text, 'content'));

const basic = `
# header

20 December 2012

content

with two paragraphs`;

it('should getContent combo list', () =>
  equal(getContent(basic, [isHeader, /december/gim]).text, 'content\n\nwith two paragraphs'));

it('should getContent empty list', () =>
  equal(getContent('content').text, 'content'));

it('should getContent with empty content', () =>
  equal(getContent('').text, ''));
