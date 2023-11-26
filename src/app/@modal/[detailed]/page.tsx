import CardDetailed from '@/components/CardDetailed/CardDetailed';
import Loader from '@/components/Loader/Loader';
import ModalWindow from '@/components/ModalWindow/ModalWindow';
import { Suspense } from 'react';

async function getData(id: string) {
  const res = await fetch(`https://api.jikan.moe/v4/manga/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Detailed(params: {
  params: { detailed: string };
}) {
  console.log(params.params.detailed, 3333);
  const detailed = params.params.detailed;
  const data = await getData(detailed);
  return (
    <div>
      <ModalWindow>
        <Suspense fallback={<Loader />}>
          <CardDetailed data={data} />
        </Suspense>
      </ModalWindow>
    </div>
  );
}
