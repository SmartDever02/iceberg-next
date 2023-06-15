import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

export default function useAddTagHandler(nft: NFT) {
  const router = useRouter();

  const [value, setValue] = useState<string>('');

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value: inputValue } = e.target;
    name === 'tagInput' && setValue(inputValue);
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;

    const word = value;

    setValue('');
    toast.info('Adding...');

    await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ word, nft }),
    });

    toast.dismiss();
    toast.success('New info added!');

    router.refresh();
  };
  return { value, onChangeHandler, submitHandler };
}
