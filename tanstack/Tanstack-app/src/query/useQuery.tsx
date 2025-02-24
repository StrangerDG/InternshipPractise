import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Function to fetch users
const fetchUsers = async () => {
  try {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    return data;
  } catch (error) {
    // Handle errors explicitly if needed
    throw new Error("Failed to fetch users");
  }
};

const UsersList = () => {
  // Use the useQuery hook to fetch data
  const { data, isLoading, error } = useQuery<any[], Error>({
    queryKey: ["users"], // Unique key for this query
    queryFn: fetchUsers, // Function to fetch data
  });

  // Handle loading state
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Handle error state
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Render the list of users
  return (
    <ul>
      {data && data.map((user: any) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UsersList;