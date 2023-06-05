const getInitVals = (title) => {
  const textVals = { text: "" };
  const geolocVals = { latitude: "", longitude: "", format: "rfc5870" };
  const smsVals = { to: "" };
  const wifiVals = { security: "", ssid: "", password: "", hidden: false };
  const vcardVals = {
    encoding: "vcard",
    first_name: "",
    last_name: "",
    display_name: "",
    email: "",
    cell_phone: "",
    work_phone: "",
    home_phone: "",
    fax: "",
    videophone: "",
    memo: "",
    nickname: "",
    birthday: "",
    po_box: "",
    street: "",
    region: "",
    url: "",
    title: "",
    organization: "",
    address: "",
    postalcode: "",
    zip_code: "",
    city: "",
    country: "",
    latitude: "",
    longitude: "",
  };
  const emailVals = { to: "", cc: "", bcc: "", subject: "" };
  const callVals = { phone: "" };

  switch (title) {
    case "Text":
      return textVals;
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
    case "Call":
      return callVals;

    default:
      return textVals;
  }
};

export default getInitVals;
