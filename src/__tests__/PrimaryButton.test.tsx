import { render, fireEvent } from '@testing-library/react-native';
import PrimaryButton from '../components/PrimaryButton';


describe('PrimaryButton', () => {
  it('renders the title correctly', () => {
    const { getByText } = render(<PrimaryButton title="Click Me" onPress={() => {}} />);
    expect(getByText('Click Me')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const mockFn = jest.fn();
    const { getByText } = render(<PrimaryButton title="Click Me" onPress={mockFn} />);
    fireEvent.press(getByText('Click Me'));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
