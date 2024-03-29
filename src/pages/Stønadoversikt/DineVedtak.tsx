import { Alert, BodyLong, VStack } from '@navikt/ds-react';
import { HeadingLevel2 } from '../../components/ResponsiveHeadinger';
import { useApp } from '../../context/AppContext';
import React from 'react';
import { Journalpost } from '../../interfaces/journalpost';
import DokumentListe from '../Dokumentoversikt/DokumentListe';
import styled from 'styled-components';
import DataViewer from '../../components/DataViewer';
import { StønadType } from '../../interfaces/stønader';
import { utledBeskrivelse, utledStønadTekst, utledVedtak } from './utils';

interface Props {
  stønadType: StønadType;
}

const StyledDokumentListe = styled(DokumentListe)`
  .dokument-rad {
    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
    }
  }
`;

const DineVedtak: React.FC<Props> = ({ stønadType }) => {
  const { journalposter, journalpostStatus } = useApp();

  return (
    <VStack gap="2">
      <HeadingLevel2 size="small" level="2">
        Dine vedtak
      </HeadingLevel2>
      <DataViewer
        dataStatus={journalpostStatus}
        loaderTekst="Henter vedtak"
        alertTekst="Noe gikk galt ved uthenting av dine vedtak."
      >
        <DokumentVisning journalposter={journalposter} stønadType={stønadType} />
      </DataViewer>
    </VStack>
  );
};

const DokumentVisning: React.FC<{ journalposter: Journalpost[]; stønadType: StønadType }> = ({
  journalposter,
  stønadType,
}) => {
  const vedtak = utledVedtak(journalposter, stønadType);
  const harVedtak = vedtak.length > 0;

  if (!harVedtak) {
    return (
      <Alert inline variant="info">
        Vi fant ingen vedtaksbrev å vise som gjelder {utledStønadTekst(stønadType)}.
      </Alert>
    );
  }

  const listeBeskrivelse = utledBeskrivelse(stønadType);

  return (
    <>
      <BodyLong>{listeBeskrivelse}</BodyLong>
      <StyledDokumentListe journalposter={vedtak} />
    </>
  );
};

export default DineVedtak;
