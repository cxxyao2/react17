import { useRef }  from 'react';

export default function TextFocus() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };
  return (
    <>
    <input ref={inputEl} type="text"
      placeholder="input something..." />
    <input type="number" value="2" autoFocus/>
    <button onClick={onButtonClick}>Focus the input</button>
    </>
  );

}
