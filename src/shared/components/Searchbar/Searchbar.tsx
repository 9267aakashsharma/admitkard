import React from "react";
import Logo from "../Logo/Logo";
import { DebounceInput } from "react-debounce-input";
import "./Searchbar.scss";
import { MdAdd } from "react-icons/md";
import classNames from "classnames";

interface Props {
  searchText: string;
  sendAddQuestionActive: boolean;
  toggleAddQuestion: () => void;
  setSearchText: (text: string) => void;
}

const Searchbar = (props: Props) => {
  return (
    <div className="searchbar">
      <div className="searchbar-left">
        <Logo />
        <DebounceInput
          debounceTimeout={300}
          placeholder="Search"
          value={props.searchText}
          onChange={(e) => {
            props.setSearchText(e.target.value);
          }}
        />
      </div>
      <div
        className={classNames("searchbar-right", {
          active: props.sendAddQuestionActive,
        })}
        onClick={props.toggleAddQuestion}
      >
        <MdAdd />
      </div>
    </div>
  );
};

export default Searchbar;
