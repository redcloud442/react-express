// utils/utmTracker.ts
export const trackUTMParams = () => {
  const params = new URLSearchParams(window.location.search);

  const utmSource = params.get("utm_source") ?? "direct";
  const utmMedium = params.get("utm_medium") ?? "none";
  const utmCampaign = params.get("utm_campaign") ?? "none";

  const utmData = {
    source: utmSource,
    medium: utmMedium,
    campaign: utmCampaign,
    timestamp: new Date().toISOString(),
  };

  sessionStorage.setItem("utmData", JSON.stringify(utmData));
  console.log(utmData);
};
