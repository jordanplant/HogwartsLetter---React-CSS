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

function Fold3() {
  return (
    <div className="content__container">
      {/* Front content */}
      <div>
        <div className="content__signOff front__content">
          <p>Yours sincerely,</p>
          <p className="content__signature">Minerva McGonagall</p>
          <p>Deputy Headmistress</p>
        </div>
        <div className="content__footer  front__content">
          <div className="content">
            <h2>HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY</h2>
            <p className="content__footerText">
              Headmaster: Albus Dumbledore (Order of Merlin, First Class, Grand
              Sorc., Chf. Warlock, Supreme Mugwump, International Confed. of
              Wizards)
            </p>
          </div>
        </div>
        {/* back content */}
        <div className="content back__content back__content__footer page2-content">
          <h3 className="back__section__heading footer__heading">
            OTHER EQUIPMENT
          </h3>
          <ul className="back__footer__list">
            <li>{applyItalicization("1 Wand")}</li>
            <li>
              {applyItalicization("1 Cauldron (pewter, standard size 2)")}
            </li>
            <li>{applyItalicization("1 Set glass or crystal phials")}</li>
            <li>{applyItalicization("1 Telescope")}</li>
            <li>{applyItalicization("1 Set brass scales")}</li>
          </ul>
          <h4>
            {applyItalicization(
              "Students may also bring an owl OR a cat OR a toad"
            )}
          </h4>
          <h3 className="back__footer content__footerText">
            {applyItalicization(
              "PARENTS ARE REMINDED THAT FIRST-YEARS ARE NOT ALLOWED THEIR OWN BROOMSTICKS"
            )}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Fold3;
