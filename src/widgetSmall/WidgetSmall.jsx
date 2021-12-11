import React from "react";
import "./widgetSmall.css";
import { Visibility } from "@material-ui/icons";

export default function widgetSmall() {
  return (
    <div className="widgetSmall">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://cdn.vectorstock.com/i/1000x1000/13/92/cartoon-avatar-woman-front-view-vector-9421392.webp"
            alt="User avatar profile picture"
            className="widgetSmImage"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUsername">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn.vectorstock.com/i/1000x1000/13/92/cartoon-avatar-woman-front-view-vector-9421392.webp"
            alt="User avatar profile picture"
            className="widgetSmImage"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUsername">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn.vectorstock.com/i/1000x1000/13/92/cartoon-avatar-woman-front-view-vector-9421392.webp"
            alt="User avatar profile picture"
            className="widgetSmImage"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUsername">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn.vectorstock.com/i/1000x1000/13/92/cartoon-avatar-woman-front-view-vector-9421392.webp"
            alt="User avatar profile picture"
            className="widgetSmImage"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUsername">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn.vectorstock.com/i/1000x1000/13/92/cartoon-avatar-woman-front-view-vector-9421392.webp"
            alt="User avatar profile picture"
            className="widgetSmImage"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUsername">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
