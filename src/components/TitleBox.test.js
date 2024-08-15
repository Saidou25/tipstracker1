import { render, screen } from '@testing-library/react';
import TitleBox from './TitleBox';

test('renders Sy in the <h1>', () => {
  render(<TitleBox firstname="Sy" />);
  const h1Element = screen.getByText(/Sy/i);
  expect(h1Element).toBeInTheDocument();
});

test("matches the <h1> received value if it is a string that contains the exact expected string.", () => {
  render(<TitleBox firstname="Sy" />);
  const h1Element = screen.getByText(/Sy/i);
  expect(h1Element.textContent).toEqual("Hello Sy")
});

test("checks <h1> firstname type of variable, it should be a string.", () => {
  const firstname = "Sy";
  render(<TitleBox firstname="Sy" />);
  expect(firstname).toEqual(expect.any(String));
});

