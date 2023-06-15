import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function useRemoveTagHandler(nft: NFT) {
  const router = useRouter();

  const removeTagHandler = async (wordIndex: number) => {
    toast.info('Removing...');

    await fetch('/api', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        index: wordIndex,
        nft,
      }),
    });

    toast.dismiss();
    toast.success('Tag removed!');

    router.refresh();
  };

  return { removeTagHandler };
}
