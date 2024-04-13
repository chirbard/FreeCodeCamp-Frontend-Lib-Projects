marked.setOptions({
  breaks: true
});

const initialMarkdown = 
`heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
# H1
## H2
[link](https://www.freecodecamp.com)

\`inline code\`

\`\`\`
const codeBlock = () => {
  console.log('hi')
} 
\`\`\`

list
- item 1
- item 2

> Block Quotes!

**bold text**

image:
![freecodecamp logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`

const Editor = props => {
  return (
    <div className='bg-gray-100 p-8 rounded-xl w-full md:w-4/5 max-w-5xl flex flex-col items-center'>
      <h2 className='text-2xl font-bold mb-2 text-gray-700'>Editor</h2>
      <textarea
          id="editor"
          value={props.markdown}
          onChange={props.onChange}
          className='w-full min-h-80 rounded-md p-2'
       />
     </div>
  );
}

const Preview = props => {
  return (
    <div className='bg-gray-100 p-8 rounded-xl w-full md:w-4/5 max-w-5xl flex flex-col items-center'>
      <h2 className='text-2xl font-bold mb-2 text-gray-700'>Preview</h2>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked.parse(props.markdown)
        }}
        className='bg-white rounded-md p-2'
      />
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: initialMarkdown
    };
    this.onChange = this.onChange.bind(this);
  }
  
  onChange(event) {
    this.setState({
      markdown: event.target.value
    });
  }
 
  render() {
    return (
      <div className='min-h-screen flex justify-center items-center flex-col gap-4 bg-gray-900'>
        <Editor markdown={this.state.markdown} onChange={this.onChange}/>
        <Preview markdown={this.state.markdown} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById("app")
)