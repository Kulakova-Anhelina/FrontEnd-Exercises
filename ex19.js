import React from "react";
import "./App.css";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

function App() {
  const jobquery = gql`
  {
    jobs {
      company {
        name
        websiteUrl
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
              <td>{job.company.name}</td>
              <td><a href={job.company.websiteUrl}>{job.company.websiteUrl}</a></td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
