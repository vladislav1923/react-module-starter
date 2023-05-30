import * as React from 'react';
import { render } from '@testing-library/react';

import 'jest-canvas-mock';

import Counter from '@/components/Counter';
import { ThemeEnum } from '@/enums/theme';

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<Counter theme={ThemeEnum.Dark} />);
  });
});
