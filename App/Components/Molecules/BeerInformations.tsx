import React from 'react';
import BeerInformationsItem from 'app/Components/Molecules/BeerInformationsItem';

const BeerInformations = ({ beer }: { beer: any }) => {
  const availableVolumes = JSON.parse(beer.volume_available).join(', ');
  const aromas = JSON.parse(beer.aromas).join(', ');
  const availableContainers = JSON.parse(beer.container_available);
  const isAvailableInBarrel = availableContainers.some(
    (item: string) => item === 'barrel',
  );
  const availableInBarrel = isAvailableInBarrel ? 'Yes' : 'No';

  return (
    <>
      <BeerInformationsItem
        title={'Available volumes'}
        value={availableVolumes}
      />
      <BeerInformationsItem
        title={'Available in barrel'}
        value={availableInBarrel}
      />
      <BeerInformationsItem title={'Alcohol in %'} value={beer.abv + '%'} />
      <BeerInformationsItem title={'IBU'} value={beer.ibu} />
      <BeerInformationsItem title={'Type'} value={beer.type} />
      <BeerInformationsItem title={'Aromas'} value={aromas} />
      <BeerInformationsItem
        title={'Gluten free'}
        value={beer.gluten_free ? 'Yes' : 'No'}
      />
      <BeerInformationsItem
        title={'Non-Filtered'}
        value={beer.non_filtered ? 'Yes' : 'No'}
      />
      <BeerInformationsItem
        title={'Refermented in bottle'}
        value={beer.refermented ? 'Yes' : 'No'}
      />
    </>
  );
};

export default BeerInformations;
