import { useEffect, useState } from "react";

export default function ViewData() {
  const [data, setData] = useState(null);

  // fetching data using useEffect
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json()) // convert response into json format
      .then((data) => setData(data)); // set json into data state
  }, []); // parameter empty, make it running once when the first time component is render

  console.log('data', data);
  
  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="text-xl font-bold mb-2">Task 3: API Integration</h2>
      {data ? (
        <div>
          <p>ID: {data.id}</p>
          <p>Title: {data.title}</p>
          <p>Status: {data.completed ? "Completed" : "Not Completed"}</p>
        </div>
      ) : (
        <p>Fetching data...</p>
      )}
    </div>
  );
}
