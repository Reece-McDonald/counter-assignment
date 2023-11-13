// import necessary react testing library helpers here
import { render, fireEvent, screen } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
    // Render the Counter component here
    render(<Counter />);
})


test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
    const cMess = screen.getByText(/Counter/i);
    expect(cMess).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
    const count = screen.getByText(/0/i);
    expect(count).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
    const incr = screen.getByText('+');
    fireEvent.click(incr);
    const countUp = screen.getByText(/1/i);
    expect(countUp).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
    const decr = screen.getByText('-');
    fireEvent.click(decr);
    const countDown = screen.getByText(/-1/i);
    expect(countDown).toBeInTheDocument();
});
