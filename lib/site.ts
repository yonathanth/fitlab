export const SITE_NAME = "Fitlab Gym and Spa";
export const SITE_BASE_URL = "https://fitlabgymandspa.com";

export const BUSINESS_LOCATION_LINE = "Sheger city, Koye Feche, Nfas Lilk";

export const PHONE_DISPLAY = "091 296 7931";
export const PHONE_E164 = "+251912967931";

export const SOCIAL_FALLBACK_URL = "https://www.tiktok.com/@yaredbarch";

export const OPENING_HOURS_HUMAN = {
  monFri: "05:00 - 21:00",
  saturday: "06:00 - 19:00",
  sunday: "08:00 - 14:00",
} as const;

export const OPENING_HOURS_SCHEMA = [
  {
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "05:00",
    closes: "21:00",
  },
  {
    dayOfWeek: "Saturday",
    opens: "06:00",
    closes: "19:00",
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

