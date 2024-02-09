import React from "react";
import "./Fold.css";

const Fold1 = () => {
  // Function to apply italicization to text within parentheses or following 'by'
  const applyItalicization = (text) => {
    // Italicizing text in parentheses
    text = text.replace(
      /\(([^)]+)\)/g,
      '<span style="font-style: italic; font-size: 0.8em; color: #0c0434;">($1)</span>'
    );

    // Italicizing text following 'by'
    text = text.replace(
      /by\s+([\w\s]+)/g,
      '<span style="font-style: italic; font-size: 0.8em; color: #0c0434;">by $1</span>'
    );

    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };

  return (
    <div className="content__container">
      <div className="content__header front__content">
        <img
          className="crest"
          src="./public/hogwarts-1.svg"
          alt="Hogwarts Crest"
        />
      </div>

      <div className="content__header back__content page2-content">
        <div className="content back__content__heading">
          <h3 className="back__section__heading">UNIFORM</h3>
          <p>First-year students will require:</p>
          <ol className="back__header__list">
            <li>
              {applyItalicization("Three sets of plain work robes (black)")}
            </li>
            <li>
              {applyItalicization("One plain pointed hat (black) for day wear")}
            </li>
            <li>
              {applyItalicization(
                "One pair of protective gloves (dragon hide or similar)"
              )}
            </li>
            <li>
              {applyItalicization(
                "One winter cloak (black, silver fastenings)"
              )}
            </li>
          </ol>
          <h4>Please note that all pupils’ clothes should carry name tags</h4>
        </div>
      </div>
    </div>
  );
};

export default Fold1;
