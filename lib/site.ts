export const SITE_NAME = "Fitlab Gym and Spa";
export const SITE_BASE_URL = "https://fitlabgymandspa.com";

export const BUSINESS_LOCATION_LINE = "Sheger city, Koye Feche, NFAS Silk";

export const PHONE_DISPLAY = "091 296 7931";
export const PHONE_E164 = "+251912967931";

export const PHONE_DISPLAY_SECONDARY = "091 360 0358";
export const PHONE_E164_SECONDARY = "+251913600358";

export const SOCIAL_FALLBACK_URL = "https://www.tiktok.com/@yaredbarch";

export const OPENING_HOURS_HUMAN = {
  monSat: "05:00 - 21:00",
  sunday: "08:00 - 14:00",
} as const;

export const OPENING_HOURS_SCHEMA = [
  {
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "05:00",
    closes: "21:00",
  },
  {
    dayOfWeek: "Sunday",
    opens: "08:00",
    closes: "14:00",
  },
] as const;

export const ADDRESS_SCHEMA = {
  streetAddress: BUSINESS_LOCATION_LINE,
  addressLocality: "Addis Ababa",
  addressCountry: "ET",
} as const;

