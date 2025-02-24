import UserList from "./query/UsersList";
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Creating an instance of QueryClient
const queryClient = new QueryClient();

function App() {
  return (
    // Passing  the instance of QueryClient to QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <UserList />
    </QueryClientProvider>
  );
}

export default App;