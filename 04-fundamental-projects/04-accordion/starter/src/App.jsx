import { useState } from 'react';
import data from './data'
import Questions from './Questions';


const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    if(activeId === id) 
    {
      setActiveId(null);
    }
    else{
      setActiveId(id);
    }
  }

  return (
    <main>
      <Questions questions = {questions} activeId = {activeId} toggleQuestion={toggleQuestion}/>
    </main>
  );
};
export default App;
