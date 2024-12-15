import { QueryClientProvider } from '@tanstack/react-query';
import Board from './components/features/Board/Board';
import { queryClient } from './queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Board />
    </QueryClientProvider>
  );
}

export default App;