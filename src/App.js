import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { YoutubeApiPRovider } from './context/YoutubeApiContext';

export default function App() {
  const queryClient = new QueryClient()
  return (
    <>
      <Header />
      <YoutubeApiPRovider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiPRovider>
    </>
  );
}

