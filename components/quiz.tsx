import { useState, useRef, useEffect } from 'react';
import { Input } from './input';
import { SkipButton } from './modal-button';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// const useClick = (callback) => {
//   const ref = useRef(null);

//   useEffect(() => {
//     const handleClick = (event) => {
//       if (ref.current && !ref.current.contains(event.target)) {
//         callback();
//       }
//     };

//     ref.addEventListener('click', handleClick, true);

//     return () => {
//       ref.removeEventListener('click', handleClick, true);
//     };
//   }, [ref]);

//   return ref;
// };

export function Quiz({ arrayOfPairs }) {
  const [formValue, setFormValue] = useState('');
  const [arrIndex, setArrIndex] = useState(0);
  const [formState, setFormState] = useState('in-process');
  const [errorMsg, setErrorMsg] = useState('');
  const [score, setScore] = useState({ correct: 0, error: 0, skipped: 0 });

  const inputReference = useRef(null);

  /* useClick((e) => {
    inputReference.current.focus();
    inputReference.current.setSelectionRange(0, 0);
  }); */

  const focusInput = () => {
    inputReference.current.focus();
    inputReference.current.setSelectionRange(0, 0);
  };

  useEffect(() => {
    focusInput();
  }, []);

  let incrementArrIndex = () => {
    setArrIndex((i) => {
      if (i < arrayOfPairs.length - 1) {
        return i + 1;
      } else {
        return 0;
      }
    });
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    if (
      formValue
        .trim()
        .replace(/\s\s+/g, ' ') // fix double spaces
        .toLocaleLowerCase() ===
      arrayOfPairs[arrIndex][1].trim().toLocaleLowerCase()
    ) {
      setFormState('correct');
      setScore((score) => {
        return { ...score, correct: score.correct + 1 };
      });

      await sleep(250);

      incrementArrIndex();
      setFormValue('');
      setFormState('in-process');

      focusInput();
      // inputReference.dispatchEvent(new Event('click'));
    } else {
      setFormState('error');
      setScore((score) => {
        return { ...score, error: score.error + 1 };
      });
      setErrorMsg(arrayOfPairs[arrIndex][1]);
    }
  }

  async function skipToNext() {
    setFormState('skipped');
    setScore((score) => {
      return { ...score, skipped: score.skipped + 1 };
    });

    await sleep(250);

    incrementArrIndex();
    setFormValue('');
    setFormState('in-process');

    focusInput();
    // inputReference.dispatchEvent(new Event('click'));
  }

  return (
    <div className="flex flex-col flex-1 items-center w-full mt-16">
      <h3 className="text-3xl text-center max-w-[90vw] absolute">
        {arrayOfPairs.length > 0
          ? arrayOfPairs[arrIndex][0]
          : 'No sentences available'}
      </h3>

      <div className="mt-28 md:mt-40">
        <Input
          formState={formState}
          errorMessage={errorMsg}
          onSubmit={handleSubmit}
          value={formValue}
          setValue={setFormValue}
          disabled={arrayOfPairs.length === 0}
          inputRef={inputReference}
        />
      </div>

      <SkipButton onClick={skipToNext} />

      <p className="mt-2 md:mt-10 text-lg text-center">
        Correct: {score.correct}, Incorrect: {score.error}, Skipped:{' '}
        {score.skipped}
      </p>
    </div>
  );
}
