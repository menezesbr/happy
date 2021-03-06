import React from 'react';

interface TitleProps {
  text: string;
}

function Title(props: TitleProps) {
  return (
    <h1>{props.text}</h1>
  )
}

function App() {
  return (
    <div className="App">
      <Title text="Hello NLW"/>
    </div>
  );
}

export default App;
