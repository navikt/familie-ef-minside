import { format, parseISO } from 'date-fns';

const datoFormat = {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
} as const;

const årMånedFormat = {
  month: '2-digit',
  year: 'numeric',
} as const;

export const formaterNullableIsoDato = (dato?: string): string | undefined =>
  dato && formaterIsoDato(dato);

export const formaterIsoDato = (dato: string): string => {
  return parseISO(dato).toLocaleDateString('no-NO', datoFormat);
};

export const formaterIsoMånedÅr = (dato: string): string => {
  return parseISO(dato).toLocaleDateString('no-NO', årMånedFormat);
};

export const formaterIsoDatoTid = (dato: string): string => {
  return format(parseISO(dato), "dd.MM.yyyy 'kl'.HH:mm");
};

export const formaterTallMedTusenSkille = (verdi?: number): string =>
  harTallverdi(verdi) ? Number(verdi).toLocaleString('no-NO') : '';

export const harTallverdi = (verdi: number | undefined | null | string): boolean =>
  verdi !== undefined && verdi !== null && verdi !== '' && !isNaN(Number(verdi.toString()));
