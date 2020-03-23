import React from "react";
import "./App.css";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

function App() {
  const jobquery = gql`
    {
      jobs {
        cities {
          name,
          country{name}
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(jobquery);

  if (loading)
    // If still loading
    return "Loading...";
  if (error)
    // It there came an error
    return `Error ${error.message}`;

  return (
    // When there is data
    <div className="App">
      <table>
        <tbody>
          {data.jobs.map((job, index) => (
            <tr key={index}>
              <td>{job.cities.name}</td>
              <td>{job.cities.country.name}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
