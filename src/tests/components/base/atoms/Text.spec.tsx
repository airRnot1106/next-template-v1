import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { Text } from '@/components/base/atoms/Text';

describe('Text', () => {
  test('should render text', () => {
    const content = 'Hello World';
    render(<Text content={content} />);
    expect(screen.getByText(content)).toBeInTheDocument();
  });
});
