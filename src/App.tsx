import { QueryClientProvider } from '@tanstack/react-query';
import Board from './components/features/Board/Board';
import { queryClient } from './queryClient';
import styled from 'styled-components';

export const BoardContainer = styled.div`
    margin: 0px auto;
    margin-top: 20px;
    width: 100vw;
    background-color: var(--color-grey-light);
    
    @media (min-width: 1024px) {
      width: 90vw;
      border: 3px solid transparent;
      border-radius:10px;
    }

  `;

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BoardContainer>
        <Board/>
      </BoardContainer>
    </QueryClientProvider>
  );
}

export default App;