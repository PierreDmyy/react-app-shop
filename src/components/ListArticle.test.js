import React from "react";
import ReactDOM from "react-dom";
import LisrArticle from "./ListArticle";
import renderer from "react-test-renderer";

const ListArticle = () => <div>ListArticle</div>;
export default ListArticle;

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ListArticle />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders ListArticle html", () => {
  const tree = renderer.create(<ListArticle />).toJSON();
  expect(tree).toMatchSnapshot();
});
