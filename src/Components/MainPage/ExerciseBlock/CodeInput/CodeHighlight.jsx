import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js/lib/core';
import html from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import 'highlight.js/styles/vs2015.css';
import "./CodeHighliight.css"

hljs.registerLanguage('html', html);
hljs.registerLanguage('css', css);

const CodeHighlight = (props) => {
  const codeRef = useRef(null);

  useEffect(() => {
    hljs.highlightBlock(codeRef.current);
  }, []);

  return (
    <div style={({ marginLeft: `${props.spases}px` })} className="code" ref={codeRef}>
      {props.code}
    </div>
  );
};

export default CodeHighlight;
