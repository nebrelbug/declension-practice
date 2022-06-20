import { useState } from 'react';
import { Input } from './input';
import { SkipButton } from './modal-button';

export function Quiz({ arrayOfPairs }) {
  const [formValue, setFormValue] = useState('');
  const [arrIndex, setArrIndex] = useState(0);
  const [formState, setFormState] = useState('in-process');
  const [errorMsg, setErrorMsg] = useState('');

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
        setFormState('in-process');
      }, 500);
    } else {
      setFormState('error');
      setErrorMsg(arrayOfPairs[arrIndex][1]);
    }
  };

  const skipToNext = () => {
    setFormState('skipped');
    setTimeout(() => {
      incrementArrIndex();
      setFormValue('');
      setFormState('in-process');
    }, 250);
  };

  return (
    <div className="flex flex-col flex-1 items-center w-full mt-16">
      <h3 className="text-3xl mb-20">
        {arrayOfPairs.length > 0
          ? arrayOfPairs[arrIndex][0]
          : 'No sentences available'}
      </h3>

      <Input
        formState={formState}
        errorMessage={errorMsg}
        onSubmit={handleSubmit}
        value={formValue}
        setValue={setFormValue}
        disabled={arrayOfPairs.length === 0}
      />

      <br />
      <SkipButton onClick={skipToNext} />
    </div>
  );
}
