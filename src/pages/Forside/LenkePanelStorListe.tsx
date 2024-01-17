import ResponsiveFlexbox from '../../components/ResponsiveFlexbox';
import LenkePanelStor from '../../components/LenkePanelStor';
import { Søknad } from '../../icons/Søknad';
import { Ettersending } from '../../icons/Ettersending';
import { useApp } from '../../context/AppContext';
import { Heading } from '@navikt/ds-react';
import { Device } from '../../hooks/useResponsive';

const LenkePanelStorListe: React.FC = () => {
  const { appEnv, currentDevice } = useApp();

  const tittelSize = currentDevice === Device.MOBILE ? 'small' : 'medium';

  return (
    <ResponsiveFlexbox $gap="0.5rem" $direction="column">
      <Heading size={tittelSize} level="2" $responsive={true}>
        Skal du melde fra om endringer eller ettersende dokumentasjon?
      </Heading>
      <ResponsiveFlexbox $gap="1rem" $paddingBottom="1rem" $responsive={true}>
        <LenkePanelStor
          tittel="Melde fra om endring"
          headingLevel="3"
          brødtekst="Her kan du melde fra om endringer som kan påvirke stønaden din."
          url={appEnv.endringsmeldingUrl}
          ikon={<Søknad color="grønn" />}
        />
        <LenkePanelStor
          tittel="Ettersende dokumentasjon"
          headingLevel="3"
          brødtekst="Her kan du ettersende dokumenter til saken din."
          url={appEnv.ettersendingUrl}
          ikon={<Ettersending />}
        />
      </ResponsiveFlexbox>
    </ResponsiveFlexbox>
  );
};

export default LenkePanelStorListe;
