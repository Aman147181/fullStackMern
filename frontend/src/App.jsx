import React from "react";
function App() {
  // State to hold the user data
  const [users, setUsers] = React.useState([]);

  // Fetch user data from the server when the component mounts
  React.useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((error) => console.log(error));
  }, []);

  // Render the component
  return (
    <div>
      {console.log(users)}
      {/* Title */}
      <h1 className="text-center text-blue-600 ">hello world</h1>
      
      {/* Display user names */}
      {users.map((user) => (
        <div className="text-center" key={user.id}>
          {user.name}
        </div>
      ))}
    </div>
  );
}

export default App;
