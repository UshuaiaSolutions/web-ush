import React from "react";
import { CorteDesktop, Negrita } from "../../components/base/Cortes";

const componentMap = {
  // "<CorteMobile />": <CorteMobile />,
  "<CorteDesktop />": <CorteDesktop />,
  "<CorteMobile />": <></>,
  // "<CorteDesktop /> ": <></>,
  "<Negrita>": "startNegrita",
  "</Negrita>": "endNegrita",
};

function parseTranslation(text) {
  const parts = text.split(
    /(<CorteDesktop \/>)|(<CorteMobile \/>)|(<Negrita>)|(<\/Negrita>)/g
  );

  const elements = [];
  let insideNegrita = false;

  parts.forEach((part, index) => {
    if (componentMap[part]) {
      const component = componentMap[part];
      if (component === "startNegrita") {
        insideNegrita = true;
        return;
      }
      if (component === "endNegrita") {
        insideNegrita = false;
        return;
      }
      elements.push(React.cloneElement(component, { key: index }));
    } else {
      if (insideNegrita) {
        elements.push(<Negrita key={index}>{part}</Negrita>);
      } else {
        elements.push(<span key={index}>{part}</span>);
      }
    }
  });

  return elements;
}

const Translator = ({ text }) => {
  return <>{parseTranslation(text)}</>;
};

export default Translator;
