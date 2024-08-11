export type Translations = {
  en: TextDefinition;
  ja: TextDefinition;
};

type DotNotation<T, Prefix extends string = ""> = {
  [K in Extract<keyof T, string>]: T[K] extends object
    ? DotNotation<T[K], `${Prefix}${K}.`>
    : `${Prefix}${K}`;
}[Extract<keyof T, string>];

export type TranslationKeys = DotNotation<TextDefinition> | string | undefined;

export type TextDefinition = {
  common: {
    save: string;
    selectDate: string;
    hello: string;
  };
  validator: {
    emptyEmail: string;
    invalidEmailFormat: string;
    maxLengthEmail: string;
    emptyPassword: string;
    maxLengthPassword: string;
  };
};
