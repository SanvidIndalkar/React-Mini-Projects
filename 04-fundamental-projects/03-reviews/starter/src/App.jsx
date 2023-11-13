import people from './data'
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa'

const App = () => {

  const [index, setIndex] = useState(0);
  const{name, job, image, text} = people[index];

  const nextPerson = () => {
    setIndex((current) => {
      if(current === people.length - 1){
        return 0;
      }
      return current + 1;
    })
  }

  const prevPerson = () => {
    setIndex((current) => {
      if(current === 0){
        return people.length - 1;
      }
      return current - 1;
    })
  }

  const randomPerson = () => {
    const newIndex = Math.floor(Math.random() * people.length);
    if(newIndex === index){
      if(newIndex + 1 === people.length){
        newIndex = 0;
        setIndex(newIndex);
      }
      else{
        setIndex(newIndex + 1);
      }
    }
    else{
      setIndex(newIndex);
    }
  }

  return (
    <main>
      <article className='review'>
        <div className="img-container">
          <img src={image} alt={name} className='person-img'/>
          <span className='quote-icon'>
            <FaQuoteRight/>
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className="btn-container">
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft/>
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight/>
        </button>
        </div>
        <button className='btn btn-container' onClick={randomPerson}>
          surprise me
        </button>
      </article>
    </main>
  );
};
export default App;
