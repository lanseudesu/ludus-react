import MonacoEditor from '@monaco-editor/react';

function Editor() {
  const handleEditorDidMount = (_, monaco) => {
    monaco.editor.defineTheme('myCustomTheme', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '#aaaa00' },  
      ],
      colors: {
        'editor.background': '#1E1E1E'
      },
    });
    monaco.editor.setTheme('myCustomTheme');
  };

  return (
    <MonacoEditor
      height="85vh"
      language="python"
      theme="myCustomTheme" 
      value="# Type your code here"
      onMount={handleEditorDidMount}
    />
  );
}

export default Editor;
