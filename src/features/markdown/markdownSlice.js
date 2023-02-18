// https://redux-toolkit.js.org/api/createSlice#createslice
import { createSlice } from "@reduxjs/toolkit";

const placeholder = `
# Welcome to my React Markdown Previewer!

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

There's also [links](https://www.freecodecamp.com), and
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


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![FCC Logo](https://mshuber1981.github.io/FCC-Front-End-Libraries-Projects/favicon-32x32.png)
`;

export const markdownSlice = createSlice({
  name: "markdown",
  initialState: {
    markdown: placeholder,
  },
  reducers: {
    handleMarkdownChange: (state, { payload }) => {
      state.markdown = payload.target.value;
    },
  },
});

export const { handleMarkdownChange } = markdownSlice.actions;

export const markdownSelector = (state) => state.markdown;

export default markdownSlice.reducer;
