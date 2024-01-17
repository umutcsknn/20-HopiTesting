// EmailScreen.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux'; // Assuming Redux is used
import configureStore from 'redux-mock-store'; // Redux mock store
import EmailScreen from './EmailScreen';

// Mock Redux store configuration
const mockStore = configureStore([]);
const store = mockStore({
  // Mock the Redux state if necessary
});

describe('EmailScreen component', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <EmailScreen />
      </Provider>
    );

    expect(getByPlaceholderText('E-posta adresinizi girin')).toBeTruthy();
    expect(getByText('Eposta Adresi')).toBeTruthy();
    expect(getByText('Eposta adresini girerek başlayabilirsin')).toBeTruthy();
   
  });

  it('dispatches sendEmail action and navigates to PasswordScreen', () => {
    const navigationMock = {
      navigate: jest.fn(),
    };

    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <EmailScreen navigation={navigationMock} />
      </Provider>
    );

    const emailInput = getByPlaceholderText('E-posta adresinizi girin');
    fireEvent.changeText(emailInput, 'example@example.com'); 

    const continueButton = getByText('DEVAM');
    fireEvent.press(continueButton);

    expect(store.getActions()).toEqual([{ type: 'email/sendEmail', payload: 'example@example.com' }]);
    expect(navigationMock.navigate).toHaveBeenCalledWith('PasswordScreen', { email: 'example@example.com' });
  });

});
