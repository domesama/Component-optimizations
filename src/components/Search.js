import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  const [term, setTerm] = useState("Waifu");
  const [deboucedTerm, setdebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setdebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  useEffect(() => {
    if (deboucedTerm !== "") {
      (async () => {
        const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
          params: {
            action: "query",
            format: "json",
            origin: "*",
            list: "search",
            srsearch: deboucedTerm,
          },
        });
        setResults(data["query"]["search"]);
      })();
    }
  }, [deboucedTerm]);

  const listOfSearchedResults = results.map((topics, index) => {
    return (
      <div key={topics.pageid} className="item">
        <div
          className="content"
          style={{ marginBottom: "5px", marginTop: "15px" }}
        >
          <div className="header" style={{ marginBottom: "5px" }}>
            {topics.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: topics.snippet }}></span>
        </div>
        <div className="right floated content" style={{ marginBottom: "10px" }}>
          <a
            href={`https://en.wikipedia.org?curid=${topics.pageid}`}
            className=" teal ui button"
          >
            Go
          </a>
        </div>
      </div>
    );
  });
  const userSubmiit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="ui segment">
      <form action="" className="ui form" onSubmit={(e) => userSubmiit(e)}>
        <div className="field">
          <div
            className="ui  header"
            style={{ marginTop: "10px", marginLeft: "2.5px" }}
          >
            Wikipedia Search
          </div>
          <input
            className="input"
            type="text"
            placeholder="Enter the terms here..."
            // style={{ marginTop: "10px" }}
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          />
        </div>
      </form>
      <div className="ui celled list"> {listOfSearchedResults}</div>
    </div>
  );
}

export default Search;

// useEffect(() => {
//   const timeoutId = setTimeout(() => {
//     if (term !== "") {
//       (async () => {
//         const { data } = await axios.get(
//           "https://en.wikipedia.org/w/api.php",
//           {
//             params: {
//               action: "query",
//               format: "json",
//               origin: "*",
//               list: "search",
//               srsearch: term,
//             },
//           }
//         );

//         setResults(data["query"]["search"]);
//       })();
//     }
//   }, 500);

//   const search = async () => {
//     const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
//       params: {
//         action: "query",
//         format: "json",
//         origin: "*",
//         list: "search",
//         srsearch: term,
//       },
//     });
//     setResults(data["query"]["search"]);
//   };

//   if (term && !results.length) {
//     search();
//   } else {
//     const timeoutId = setTimeout(() => {
//       if (term !== "") {
//         search();
//       }
//     }, 500);
//     return () => {
//       clearTimeout(timeoutId);
//     };
//   }
// }, [term]);
