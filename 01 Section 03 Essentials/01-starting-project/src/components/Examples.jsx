import { useState, Fragment } from "react"; // used to refresh the page
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  /*  useState() returns an array with 2 elements. It's known as a Hook function
   *   1st element is a snapshot of the previous content of the component
   *   2nd element is a callback function to update the component with the new content
   *   parameter inside useState is the default parameter value
   */
  const [selectedTopic, setSelectedTopic] = useState(); // Hooks functions cannot be called nested, only at the top level, inside React components

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton); // captures button value and set as a function parameter to refresh screen
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <>
      {/* the props is not automatically fowarded to the custom component */}
      {/* for example, the id prop */}
      {/* so, this prop must be declared explicitly in the component */}
      <Section title="Examples" id="examples">
        {/* the complete set of buttons is forwarded as a prop to the Tabs component */}
        <Tabs
          buttonsContainer="menu"
          buttons={
            <>
              {/* must pass a function as a value */}
              {/* if parameters needed, pass as arrow function */}
              {/* onClick is used with forwarding pattern inside component */}
              <TabButton
                isSelected={selectedTopic === "components"}
                onClick={() => handleSelect("components")}
              >
                Components
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "jsx"}
                onClick={() => handleSelect("jsx")}
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "props"}
                onClick={() => handleSelect("props")}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "state"}
                onClick={() => handleSelect("state")}
              >
                State
              </TabButton>
            </>
          }
        >
          {tabContent}
        </Tabs>
      </Section>
    </>
  );
}
