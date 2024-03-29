import { useCallback, useState } from 'react';
import { axiosConfig, prefferedAxios } from '../api/axios';
import { Journalpost } from '../interfaces/journalpost';
import { DataStatus } from '../interfaces/dataStatus';

export interface JournalpostResponse {
  journalposter: Journalpost[];
  hentJournalposter: () => void;
  journalpostStatus: DataStatus;
}

export const useHentJournalposter = (): JournalpostResponse => {
  const [journalpostStatus, settJournalpostStatus] = useState<DataStatus>(DataStatus.HENTER);
  const [journalposter, settJournalposter] = useState<Journalpost[]>([]);

  const hentJournalposter = useCallback(() => {
    prefferedAxios
      .get(`familie/alene-med-barn/minside/api/journalpost`, axiosConfig)
      .then((response: { data: Journalpost[] }) => {
        response && settJournalposter(response.data);
        settJournalpostStatus(DataStatus.HENTET);
      })
      .catch(() => {
        settJournalpostStatus(DataStatus.FEILET);
      });
  }, []);

  return {
    journalposter,
    hentJournalposter,
    journalpostStatus,
  };
};
