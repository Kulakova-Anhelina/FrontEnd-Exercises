import React, { useState } from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";

function App() {
  const client = new ApolloClient({ uri: "https://api.graphql.jobs" });
  const [jobs, setJobs] = useState([]);

  client
    .query({
      query: gql`
        {
          jobs {
            cities {
              name
              country {
                name
              }
            }
          }
        }
      `
    })
    .then(result => setJobs(result.data.jobs));

  return (
    <div className="App">
      <table>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index}>
              <td>{job.cities.name}</td>
              <td>{job.cities.country.name}</td>
              <td>
                <a href={job.applyUrl}>{job.applyUrl}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
