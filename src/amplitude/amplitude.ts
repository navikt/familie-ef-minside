import amplitude from 'amplitude-js';

const amplitudeInstance = amplitude.getInstance();

amplitudeInstance.init('default', '', {
  apiEndpoint: 'amplitude.nav.no/collect-auto',
  saveEvents: false,
  includeUtm: true,
  includeReferrer: true,
  platform: window.location.toString(),
});

// NAVs retningslinjer for amplitude taksonomi: https://github.com/navikt/analytics-taxonomy
export function logEvent(eventName: string, eventProperties: any) {
  amplitudeInstance.logEvent(eventName, eventProperties);
}

export const logNavigering = (
  destinasjon: string,
  lenketekst: string,
  kilde?: string
) => {
  logEvent('navigere', {
    destinasjon: destinasjon,
    lenketekst: lenketekst,
    kilde: kilde,
    team_id: 'familie',
    applikasjon: 'ef-minside',
  });
};

export const logBesøk = (side: string) => {
  logEvent('besøk', {
    side,
    team_id: 'familie',
    applikasjon: 'familie-ef-ettersending',
  });
};
