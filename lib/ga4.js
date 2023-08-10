// lib/ga4.js

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Sends a page_view event to GA4
export const logPageView = () => {
  window.gtag('config', GA_MEASUREMENT_ID);
};

// Sends a custom event to GA4
export const logEvent = (eventName, params) => {
  window.gtag('event', eventName, params);
};
