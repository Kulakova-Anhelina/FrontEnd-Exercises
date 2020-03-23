import React from "react";
import "./App.css";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

function App() {
  const jobquery = gql`
    {
      countries {
        code
        name
        continent {
          name
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
        <thead>
          <tr>
            <th>Code</th>
            <th>Country</th>
            <th>Continent</th>
          </tr>
        </thead>
        <tbody>
          {data.countries.map((country, index) => (
            <tr key={index}>
              <td>{country.code}</td>
              <td>{country.name}</td>
              <td>{country.continent.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
