import { AleneMedBarn } from '../icons/AleneMedBarn';
import styled from 'styled-components';
import ResponsiveFlexbox from './ResponsiveFlexbox';
import { skjermBreddeTittelIkon } from '../utils';
import { BodyShort, Heading } from '@navikt/ds-react';
import { useApp } from '../context/AppContext';
import { Device } from '../hooks/useResponsive';
import React from 'react';

interface Props {
  className?: string;
}

const IkonContainer = styled.div`
  @media (max-width: ${skjermBreddeTittelIkon}px) {
    display: none;
  }
`;

const SideTittel: React.FC<Props> = ({ className }) => {
  const { currentDevice } = useApp();

  const tittelSize = currentDevice === Device.MOBILE ? 'medium' : 'xlarge';
  const underTittelSize = currentDevice === Device.MOBILE ? 'small' : 'medium';

  return (
    <ResponsiveFlexbox $gap="1rem" $direction="row" className={className}>
      <IkonContainer aria-hidden={true}>
        <AleneMedBarn />
      </IkonContainer>
      <ResponsiveFlexbox $direction="column">
        <Heading size={tittelSize} level="1">
          Dine stønader til enslig mor eller far
        </Heading>
        <BodyShort size={underTittelSize}>
          overgangsstønad, stønad til barnetilsyn og stønad til skolepenger
        </BodyShort>
      </ResponsiveFlexbox>
    </ResponsiveFlexbox>
  );
};

export default SideTittel;
