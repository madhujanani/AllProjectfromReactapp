import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';

// test('renders h1 in document', () => {
//   render(<App />);
//   //screen.debug();
//   const linkElement = screen.getByText(/React/);
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders span in document', () => {
//   render(<App />);
//   //screen.debug();
//   const linkElement = screen.getByTestId('MySpan');
//   expect(linkElement).toBeInTheDocument();
// });

// test('list contains four Animals', () => {
//   render(<App />);
//   const listElement = screen.getByRole('list');
//   const listItems = screen.getAllByRole('listitem');
  
//   expect(listElement).toBeInTheDocument();
//   expect(listElement).toHaveClass('animal');
//   expect(listItems.length).toEqual(4)
// });
// test('common div in document', () => {
//    const container=render(<App />);
//   //screen.debug();
//   const linkElement = screen.getByTestId('MySpan');
//   expect(linkElement).toBeInTheDocument();
// });

test('loading text is shown', async() => {
  const container=render(<App />);
 //screen.debug();
 const loading = screen.getByText('Loading...');
 expect(loading).toBeInTheDocument();
 await waitForElementToBeRemoved(()=>
  screen.getByText('Loading...'));
});


// test('User name is rendered', async() => {
//   render(<App/>)
// const username = await screen.findByText('Loading...');
// expect(username).toBeInTheDocument();

// });

// test('Error thrown from API', async() => {
//   render(<App/>)
//   window.fetch.mockImlementationOnce(()=>{
//     return Promise.reject({message:'API is Down'})
//   })
// const errorMsg = await screen.findByText('API is Down');
// expect(errorMsg).toBeInTheDocument();

// });
