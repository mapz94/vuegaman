import DirectusSDK from "@directus/sdk-js";

const client = new DirectusSDK({
  url: "https://directus.gamandigital.cl/",
  project: "gamandigital",
  storage: window.localStorage
});

export default client;
