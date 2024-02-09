import React from "react";
import "./Fold.css";

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

function Fold2({ title, surname }) {
  return (
    <div className="content__container">
      <div className="content front__content">
        <p className="content__greeting">{`Dear ${title} ${surname},`}</p>
        <p className="content__body">
          We are pleased to inform you that you have a place at Hogwarts School
          of Witchcraft and Wizardry. Please find enclosed a list of all
          necessary books and equipment. Term begins on 1 September. We await
          your owl by no later than 31 July.
        </p>
      </div>
      <div className="content back__content back__content__body page2-content">
        <h3 className="back__section__heading">SET BOOKS</h3>
        <p>All students should have a copy of each of the following:</p>
        <ul className="back__body__list">
          <li>
            {applyItalicization(
              "The Standard Book of Spells (Grade 1) by Miranda Goshawk"
            )}
          </li>
          <li>
            {applyItalicization("A History of Magic by Bathilda Bagshot")}
          </li>
          <li>{applyItalicization("Magical Theory by Adalbert Waffling")}</li>
          <li>
            {applyItalicization(
              "A Beginner’s Guide to Transfiguration by Emeric Switch"
            )}
          </li>
          <li>
            {applyItalicization(
              "One Thousand Magical Herbs and Fungi by Phyllida Spore"
            )}
          </li>
          <li>
            {applyItalicization(
              "Magical Drafts and Potions by Arsenius Jigger"
            )}
          </li>
          <li>
            {applyItalicization(
              "Fantastic Beasts and Where to Find Them by Newt Scamander"
            )}
          </li>
          <li>
            {applyItalicization(
              "The Dark Forces: A Guide to Self-Protection by Quentin Trimble"
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Fold2;
