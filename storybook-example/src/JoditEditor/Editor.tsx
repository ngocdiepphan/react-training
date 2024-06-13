import React, { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';

const JoditEditorComponent: React.FC = () => {
  const editor = useRef(null);
  const [content, setContent] = useState('');

  const config = {
    readonly: false,
    height: 400,
    toolbarButtonSize: 'large' as 'large',
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
    buttons: ['bold', 'italic', 'underline', 'link', 'unlink', 'source'],
  };

  const handleChange = (newContent: string) => {
    setContent(newContent);
  };

  const handleBlur = (newContent: string) => {
    console.log('Editor blurred:', newContent);
  };

  return (
    <div>
      <h2>Hello Dip, start learning JoditEditor!</h2>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </div>
  );
};

export default JoditEditorComponent;
