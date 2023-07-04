import HeadingSelector from "./HeadingSelector";
import OtherTools from "./OtherTools";
import RedoUndo from "./RedoUndo";

const ToolBar = () => {
  return (
    <div className="tool-bar">
      <RedoUndo />
      <div className="divider" />
      <HeadingSelector />
      <div className="divider" />
      <OtherTools />
    </div>
  );
};

export default ToolBar;
