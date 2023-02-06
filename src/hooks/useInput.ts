import {useLocalStorage} from "./useStorage";

const useInput = (key: string, initValue: any) => {
  const [value, setValue] = useLocalStorage(key, initValue);

  const reset = () => setValue(initValue);

  const attributeObj = {
    value,
    onChange: (e: { target: HTMLInputElement }) => {
      setValue(e.target.value);
    }
  }

  return [value, reset, attributeObj];
}

export default useInput