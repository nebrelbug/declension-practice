import { useState } from 'react';
import { Input } from './input';
import { SkipButton } from './modal-button';

export function Quiz({ arrayOfPairs }) {
  const [formValue, setFormValue] = useState('');
  const [arrIndex, setArrIndex] = useState(0);
  const [formState, setFormState] = useState('in-process');
  const [errorMsg, setErrorMsg] = useState('');
  const [score, setScore] = useState({ correct: 0, error: 0, skipped: 0 });

  let incrementArrIndex = () => {
    setArrIndex((i) => {
      if (i < arrayOfPairs.length - 1) {
        return i + 1;
      } else {
        return 0;
      }
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (
      formValue
        .trim()
        .replace(/\s\s+/g, ' ') // fix double spaces
        .toLocaleLowerCase() ===
      arrayOfPairs[arrIndex][1].trim().toLocaleLowerCase()
    ) {
      setFormState('correct');
      setTimeout(() => {
        incrementArrIndex();
        setFormValue('');
        setScore((score) => {
          return { ...score, correct: score.correct + 1 };
        });
        setFormState('in-process');
      }, 500);
    } else {
      setFormState('error');
      setScore((score) => {
        return { ...score, error: score.error + 1 };
      });
      setErrorMsg(arrayOfPairs[arrIndex][1]);
    }
  };

  const skipToNext = () => {
    setFormState('skipped');
    setTimeout(() => {
      incrementArrIndex();
      setFormValue('');
      setScore((score) => {
        return { ...score, skipped: score.skipped + 1 };
      });
      setFormState('in-process');
    }, 250);
  };

  return (
    <div className="flex flex-col flex-1 items-center w-full -mt-[12vh] md:mt-16">
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
