import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';

// const editor = new EditorJS({
//   holder: 'editorjs',
//   tools: {
//     header: Header,
//     list: List,
//   },
//   tools: {
//     header: {
//       class: Header,
//       inlineToolbar: ['link'],
//     },
//     list: {
//       class: List,
//       inlineToolbar: true,
//     },
//   },
//   onReady: () => {
//     console.log('Editor.js is ready to work!');
//   },
//   onChange: (api, event) => {
//     console.log("Now I know that Editor's content changed!", event);
//   },
// });

const Editor = () => {
  const editorEl = useRef(null);
  return (
    <div>
      <EditorJS instanceRef={(instance) => (instanceRef.current = instance)} />
    </div>
  );
};

export default Editor;
