const getInitVals = (title) => {
  const textVals = { text: "" };
  const urlVals = { url: "" };
  const geolocVals = { lat: "", lat: "" };
  const smsVals = { tel: "", message: "" };
  const wifiVals = { security: "", ssid: "", password: "" };
  const vcardVals = {
    firstname: "",
    lastname: "",
    emailwork: "",
    emailhome: "",
    telcell: "",
    telwork: "",
    telhome: "",
    telfax: "",
    website: "",
    title: "",
    organization: "",
    address: "",
    postalcode: "",
    city: "",
    country: "",
  };
  const emailVals = { to: "", cc: "", bcc: "", subject: "", body: "" };
  const calendarVals = { title: "", location: "", start: "", end: "" };
  const callVals = { phone: "" };

  switch (title) {
    case "Text":
      return textVals;
    case "URL":
      return urlVals;
    case "GeoLoc":
      return geolocVals;
    case "SMS":
      return smsVals;
    case "WiFi":
      return wifiVals;
    case "VCARD":
      return vcardVals;
    case "Email":
      return emailVals;
    case "Calendar":
      return calendarVals;
    case "Call":
      return callVals;

    default:
      return textVals;
  }
};

export default getInitVals;
