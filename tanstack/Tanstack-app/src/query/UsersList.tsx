import { useQuery} from "@tanstack/react-query";
import axios from "axios";

const fetchUsers = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    return data;
    };

    const UsersList = () => {
    const { data, isLoading, error } = useQuery({
        
        queryKey: ["users"],
        queryFn: fetchUsers,
    });
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <ul>
            {data.map((user: any) => (
                <li key={user.id}>{user.name}</li>
            ))} 
        </ul>   

    );
};

export default UsersList;