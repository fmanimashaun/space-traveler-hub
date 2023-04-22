import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Reserved from 'components/Reserved';

describe('Reserved component', () => {
  const title = 'testTitle';
  const arr = [
    { id: '1', name: 'testName1' },
    { id: '2', name: 'testName2' },
  ];

  it('renders the component with table', () => {
    const { getByText } = render(<Reserved title={title} arr={arr} />);
    const titleText = getByText(`My ${title}`);
    const tableRow1 = getByText('testName1');
    const tableRow2 = getByText('testName2');
    expect(titleText).toBeInTheDocument();
    expect(tableRow1).toBeInTheDocument();
    expect(tableRow2).toBeInTheDocument();
  });

  it('renders the component with no reserved items', () => {
    const { getByText } = render(<Reserved title={title} arr={[]} />);
    const titleText = getByText(`My ${title}`);
    const noReservedText = getByText(`No reserved ${title}`);
    expect(titleText).toBeInTheDocument();
    expect(noReservedText).toBeInTheDocument();
  });
});
