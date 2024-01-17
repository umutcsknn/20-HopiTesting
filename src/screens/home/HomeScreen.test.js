import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from './HomeScreen';

describe('HomeScreen component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<HomeScreen />);
    expect(getByText('Your Text Here')).toBeTruthy(); 

  });

  it('navigates to search screen when search bar is pressed', () => {
    const navigationMock = {
      navigate: jest.fn(),
    };
    const { getByTestId } = render(<HomeScreen navigation={navigationMock} />);
    fireEvent.press(getByTestId('searchBarTestId')); 
    expect(navigationMock.navigate).toHaveBeenCalledWith('SearchScreen');
  });

});
