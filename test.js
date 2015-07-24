import { equal } from 'assert';
import getMdContent from './index';

it('should getMdContent', () => {
  equal(getMdContent('unicorns'), 'unicorns');
});
