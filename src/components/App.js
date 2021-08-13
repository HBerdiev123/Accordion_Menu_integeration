import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";

const items = [
  {
    title: "Bretniy Spears",
    content:
      "Britney Jean Spears is an American singer, songwriter, dancer, and actress. She is credited with influencing the revival of teen pop during the late 1990s and early 2000s, for which she is referred to as the 'Princess of Pop'"
  },
  {
    title: "Emily Blunt",
    content:
      "Emily Olivia Leah Blunt is a British actress. Her accolades include a Golden Globe Award and a Screen Actors Guild Award, in addition to nominations for two British Academy Film Awardss"
  },
  {
    title: "Charlize Theron",
    content:
      "Charlize Theron is a South African and American actress and producer. One of the world's highest-paid actresses, Theron is the recipient of numerous accolades, including an Academy Award,"
  }
];

const options = [
  { label: "The Red Color", value: "red" },
  { label: "The Green Color", value: "green" },
  { label: "The Blue Color", value: "blue" }
];

export default function App() {
  const [selected, setSelected] = useState(options[0]);
  // const [showDropDown, setShowDropDown] = useState(true);

  return (
    <div className="App">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>

      <Route path="/dropdown">
        <Dropdown
          options={options}
          selected={selected}
          onSelectChange={setSelected}
        />
      </Route>

      <Route path="/list">
        <Search />
      </Route>

      <Route path="/translate">
        <Translate
          selected={selected}
          onSelectChange={setSelected}
          options={options}
        />
      </Route>
    </div>
  );
}
