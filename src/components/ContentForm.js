import InputLabel from "./UI/InputLabel";
import TagInput from "./tag-input/TagInput";

const ContentForm = () => {
  return (
    <div className="form-control">
      <div className="small-form description">
        <InputLabel>Content description/Brief</InputLabel>
        <textarea rows="8" />
        <div className="char-count">0/600</div>
      </div>

      <div className="small-form tone">
        <InputLabel>Tone of Voice</InputLabel>
        <input type="text" />
        <div className="char-count">0/60</div>
      </div>

      <div className="small-form">
        <InputLabel>Keywords</InputLabel>
        <TagInput />
      </div>
    </div>
  );
};

export default ContentForm;
