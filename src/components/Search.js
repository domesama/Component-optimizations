import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    // const search = async () => {
    //   const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
    //     params: {
    //       action: "query",
    //       format: "json",
    //       origin: "*",
    //       list: "search",
    //       srsearch: term,
    //     },
    //   });
    //   console.log(data);
    //   setResults(data);
    // };
    // if (term != "") {
    //   search();
    // }

    if (term !== "") {
      (async () => {
        const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
          params: {
            action: "query",
            format: "json",
            origin: "*",
            list: "search",
            srsearch: term,
          },
        });
        setResults(data["query"]["search"]);
      })();
    }
  }, [term]);
  const listOfSearchedResults = results.map((topics, index) => {
    return (
      <div key={topics.pageid} className="item">
        <div className="content">
          <div className="header">{topics.title}</div>
          <span dangerouslySetInnerHTML={{ __html: topics.snippet }}></span>
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
          <label> Search Wikipedia</label>
          <input
            className="input"
            type="text"
            placeholder="Enter the terms here..."
            style={{ marginTop: "10px" }}
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
