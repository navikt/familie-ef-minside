import { breadCrumbOvergangsstønad } from '../../utils/constants';
import React from 'react';
import { setBreadcrumbs } from '@navikt/nav-dekoratoren-moduler';
import { useApp } from '../../context/AppContext';
import SideTittel from '../../components/SideTittel';
import { Grid, Stripe } from './Grid';

const Overgangsstønad: React.FC = () => {
  const { appEnv } = useApp();

  setBreadcrumbs([...appEnv.defaultBreadcrumbs, breadCrumbOvergangsstønad]);

  return (
    <main id="maincontent" tabIndex={-1} role="main">
      <Grid>
        <SideTittel />
      </Grid>
      <Stripe></Stripe>
    </main>
  );
};

export default Overgangsstønad;
