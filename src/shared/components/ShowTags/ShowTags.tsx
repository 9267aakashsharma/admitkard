import React from "react";
import "./ShowTags.scss";

interface Props {
  tags: string[];
}

const ShowTags = (props: Props) => {
  return (
    <div className="ak-tags">
      {props.tags.map((tag, index) => (
        <p key={index}>{tag}</p>
      ))}
    </div>
  );
};

export default ShowTags;
