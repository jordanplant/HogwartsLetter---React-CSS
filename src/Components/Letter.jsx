import React, { useState } from "react";
import "./Letter.css";
import Fold1 from "./Fold1";
import Fold2 from "./Fold2";
import Fold3 from "./Fold3";

function Letter({ formData }) {
  const [unfolded, setUnfolded] = useState(false);
  const [fold2Unfolded, setFold2Unfolded] = useState(false);
  const [fold3Unfolded, setFold3Unfolded] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [animationDirection, setAnimationDirection] = useState("forward"); // Default animation direction

  const handleUnfold = () => {
    if (!unfolded) {
      setUnfolded(true);
      setFold2Unfolded(true);
      setTimeout(() => {
        setFold3Unfolded(true);
      }, 500);
    } else if (!flipped) {
      setFold3Unfolded(false);
      setTimeout(() => {
        setFold2Unfolded(false);
        setUnfolded(false);
      }, 500);
    }
  };

  const handleFlip = () => {
    if (fold3Unfolded) {
      setTimeout(() => {
        setFlipped(!flipped);
        // Toggle animation direction
        setAnimationDirection(
          animationDirection === "forward" ? "reverse" : "forward"
        );
        setTimeout(() => {
          // After flipping, delay the appearance of the back content
          setFold3Unfolded(true);
        }, 500); // Delay for smoother transition
      });
    }
  };

  // Ensure formData is defined before accessing its properties
  const title = formData?.title || "";
  const surname = formData?.lastName || "";

  return (
    <div className="letter__container">
      <div
        className={`letter forward ${unfolded ? "unfolded" : ""} ${
          flipped ? "flipped" : ""
        }`}
      >
        <div className="fold fold1" onClick={handleUnfold}>
          <Fold1 />
        </div>
        <div className={`fold fold2 ${fold2Unfolded ? "" : "folded"}`}>
          <Fold2 title={title} surname={surname} />
        </div>
        <div
          className={`sharp-fold fold fold3 ${fold3Unfolded ? "" : "folded"}`}
          onClick={handleFlip}
        >
          <Fold3 />
        </div>
      </div>
    </div>
  );
}

export default Letter;
