const WHATSAPP_NUMBER = '919935571741';
const WHATSAPP_MSG = encodeURIComponent(
  "Hello Baidyanath Dental Clinic, I'd like to book a dental appointment."
);
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;
export const PHONE_NUMBER = '099355 71741';
export const PHONE_TEL = 'tel:+919935571741';
export const MAPS_QUERY = encodeURIComponent(
  'Baidyanath Dental Clinic, GF-07, First Square Complex, Raibareli Rd, Vrindavan Yojna-2, Sector 2, Vrindavan Colony, Lucknow, Uttar Pradesh 226029'
);
export const MAPS_EMBED = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;
export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;
