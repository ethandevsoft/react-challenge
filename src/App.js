import axios from "axios";
import react, { useEffect } from "react";
import "./App.css";
import json from "./data.json";
// Questions:
// 1. Load data from local file (path: “https://ac.aws.citizennet.com/assets/qspreviews/qs_interview_data.json”)
// 2. Use the screenshot as an example, implement a generic function for reading any JSON file in that format, then display the top 12 brands based on audience_size. We always want to have 4 items in one row.
// 3. Add a hover state with a dark, semi-transparent overlay and display the ID of the hovered brand.

function App() {
  const sortFunction = (a, b) => {
    return a.source_items.audience_size < b.source_items.audience_size
      ? 1
      : a.source_items.audience_size > b.source_items.audience_size
      ? -1
      : 0;
  };
  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            width: "50%",
            justifyContent: "flex-start",
            flexDirection: "row",
            flexWrap: "wrap",
            display: "flex",
          }}
        >
          {json.data.sort(sortFunction).map((org,i) => (
            <div
              key={i}
              className="overlay"
              style={{
                display: "flex",
                width: "10rem",
                height: "5rem",
                border: "1px solid white",
                borderRadius: "0.5rem",
                margin: "0.5rem",
                alignItemss: "center",
              }}
            >
              <img
                className="image"
                onError={i => i.target.src='https://via.placeholder.com/50x50'}
                style={{ display: "inline-block" }}
                alt="Org"
                src={org.social_media_pages.picture}
              />
              <span>{org.source_items.id}</span>
            </div>
          ))}
        </div>
        {/* <div>Let's start here</div> */}
      </header>
    </div>
  );
}

export default App;
