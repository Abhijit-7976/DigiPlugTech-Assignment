import { useState } from "react";
import Tag from "./Tag";

const TagInput = () => {
  const [tags, setTags] = useState([]);
  const [inputTag, setInputTag] = useState("");

  const submitHandler = e => {
    e.preventDefault();
    const sameTags = tags.filter(tag => tag === inputTag);

    if (sameTags.length !== 0) {
      setInputTag("");
      return;
    }
    setTags(tags => [...tags, inputTag]);
    setInputTag("");
  };

  return (
    <div className="tags-container">
      {tags.map(tag => (
        <Tag
          tags={tags}
          onSetTags={setTags}
          key={tag}>
          {tag}
        </Tag>
      ))}
      <form
        className="tags-form"
        onSubmit={submitHandler}>
        <input
          type="text"
          value={inputTag}
          onChange={e => setInputTag(e.target.value)}
        />
      </form>
    </div>
  );
};

export default TagInput;
