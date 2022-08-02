import React, { useState } from "react";
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'


function App() {
  const [markdown, setMarkdown] = useState(textareaDefault);
  const handleChange = (e) => {
    setMarkdown(e.target.value);
  }
  return (
    <div className="flex flex-col h-10v md:flex-row">
      <Editor changeText={handleChange} value={markdown}/>
      <Preview value={markdown}/>
    </div>
  );
}

const Editor = (props) => {
  return (
    <div className="basis-1/2 my-6 mx-4">
      <div className="bg-gray-600 p-3 flex items-center rounded-t-lg">
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
        </svg>
        <h1 className="text-xl">Editor</h1>
      </div>
      <div className="bg-gray-400 p-4 h-85vh rounded-b-lg">
      <textarea id="editor" onChange={props.changeText} defaultValue={props.value} rows="10" className="block p-2.5 resize-none w-full h-full text-base text-white outline-none rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 " placeholder="Your markdown text..."></textarea>
      </div>
    </div>
  );
}

const Preview = (props) => {
  return (
    <div className="basis-1/2 my-6 mx-4">
      <div className="bg-gray-600 p-3 flex items-center rounded-t-lg">
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"></path>
        </svg>
        <h1 className="text-xl">Preview</h1>
      </div>
      <div className="bg-gray-400 p-4 rounded-b-lg">
      <ReactMarkdown id="preview" className="prose max-w-none" remarkPlugins={[gfm]} children={props.value} />
      </div>
    </div>
  );
}

const textareaDefault = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it. 

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)


`;

export default App;