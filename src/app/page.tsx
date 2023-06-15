import PageHeading from '@/components/heading';
import NFTCard from '../components/NFTCard';
import { TableContainer } from '@/components/container';

export default async function Home() {
  const { nfts } = await getData();

  return (
    <main>
      <PageHeading>Collections</PageHeading>

      <TableContainer>
        {nfts.map((nft: NFT) => (
          <NFTCard {...nft} key={nft._id} editable />
        ))}
      </TableContainer>
    </main>
  );
}

/* 
  Fetch orignal and user data of nfts and return as NFT[] format.
*/

export async function getData(): Promise<{ nfts: NFT[] }> {
  /* Fetch orignal nfts */
  const res = await fetch(`${process.env.backendBaseUrl}/data`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const data: { nfts: NFT[] } = await res.json();

  const customRes = await fetch(`${process.env.backendBaseUrl}/user-data`, {
    cache: 'no-store',
  });

  if (!customRes.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch custom data');
  }

  const customNfts: { nfts: NFT[] } = await customRes.json();

  /* Append user nft if exists */
  const nfts = data.nfts
    .sort((a, b) => b.value - a.value)
    .map((nft) => ({
      ...nft,
      customized: customNfts.nfts.find((elem) => elem.name === nft.name),
    }));

  return { nfts };
}
