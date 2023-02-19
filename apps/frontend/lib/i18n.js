import { i18n } from "@lingui/core";
import { en, fr, nl } from "make-plural/plurals";

i18n.loadLocaleData("en", { plurals: en });
i18n.loadLocaleData("fr", { plurals: fr });
i18n.loadLocaleData("nl", { plurals: nl });

/**
 * Load messages for requested locale and activate it.
 * This function isn't part of the LinguiJS library because there're
 * many ways how to load messages — from REST API, from file, from cache, etc.
 */
export async function activate(locale) {
  const { messages } = await import(
    `@lingui/loader!../locales/${locale}/messages.po`
  );
  i18n.load(locale, messages);
  i18n.activate(locale);
}
