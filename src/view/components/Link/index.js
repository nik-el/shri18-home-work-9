import { compose } from '@bem-react/core';
import Base from './Link';
import LinkActive from './_active/LinkActive';
import LinkDisabled from './_disabled/LinkDisabled';

export default compose(
  LinkActive,
  LinkDisabled
)(Base);
