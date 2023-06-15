import { getData } from '../page';

import NFTCard from '@/components/NFTCard';
import PageHeading from '@/components/heading';
import { TableContainer } from '@/components/container';

import ChartView from './View.Chart';

export default async function CustomCollectionPage() {
  const { nfts } = await getData();

  const chartData: IChartData[] = nfts.map((nft) => ({
    name: nft.name,
    data: nft.value,
    'user data': nft.customized?.value || nft.value,
  }));

  return (
    <div className='min-h-screen'>
      <div className='mt-10 container max-md:px-5 mx-auto shadow-xl rounded-lg bg-[#151515]'>
        <ChartView chartData={chartData} />
      </div>

      <PageHeading>User Collections</PageHeading>

      <TableContainer>
        {nfts
          .filter((nft) => nft.customized)
          .map((nft) => (
            <NFTCard {...nft} key={nft._id} />
          ))}
      </TableContainer>
    </div>
  );
}
