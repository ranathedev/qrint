const getForms = (title) => {
  const textFields = [
    {
      id: "text",
      placeholder: "Enter text here ...",
      label: "Text",
      type: "text",
    },
  ];

  const urlFields = [
    {
      id: "url",
      placeholder: "Enter url here ...",
      label: "URL",
      type: "text",
    },
  ];
  const geolocFields = [
    {
      id: "lat",
      placeholder: "Enter Latitude here ...",
      label: "Latitude",
      type: "text",
    },
    {
      id: "long",
      placeholder: "Enter Longitude here ...",
      label: "Longtude",
      type: "text",
    },
  ];
  const smsFields = [
    {
      id: "tel",
      placeholder: "Enter Number here ...",
      label: "Number",
      type: "number",
    },
    {
      id: "message",
      placeholder: "Enter message here ...",
      label: "Message",
      type: "textarea",
    },
  ];
  const wifiFields = [
    {
      id: "security",
      placeholder: "WPA / WEP",
      label: "Security",
      type: "text",
    },
    {
      id: "ssid",
      placeholder: "Enter SSID here ...",
      label: "Network Name",
      type: "text",
    },
    {
      id: "password",
      placeholder: "Enter password here ...",
      label: "Password",
      type: "text",
    },
  ];
  const vcardFields = [
    {
      id: "firstname",
      placeholder: "Enter First Name here ...",
      label: "First Name",
      type: "text",
    },
    {
      id: "lastname",
      placeholder: "Enter Last Name here ...",
      label: "Last Name",
      type: "text",
    },
    {
      id: "emailwork",
      placeholder: "Enter work email",
      label: "Work Email",
      type: "text",
    },
    {
      id: "emailhome",
      placeholder: "Enter home email",
      label: "Home Email",
      type: "text",
    },
    {
      id: "telcell",
      placeholder: "Enter Cell No ...",
      label: "Cell No",
      type: "number",
    },
    {
      id: "telwork",
      placeholder: "Enter Work No ...",
      label: "Work No",
      type: "number",
    },
    {
      id: "telhome",
      placeholder: "Enter Home No ...",
      label: "Home No",
      type: "number",
    },
    {
      id: "telfax",
      placeholder: "Enter Fax No ...",
      label: "Fax No",
      type: "number",
    },
    {
      id: "website",
      placeholder: "Enter website url",
      label: "Website",
      type: "text",
    },
    {
      id: "title",
      placeholder: "Enter Title here ...",
      label: "Title",
      type: "text",
    },
    {
      id: "organizaton",
      placeholder: "Enter onrganizaton name ...",
      label: "Organization",
      type: "text",
    },
    {
      id: "address",
      placeholder: "Enter Address here ...",
      label: "Address",
      type: "text",
    },
    {
      id: "postalcode",
      placeholder: "Enter Postal Code ...",
      label: "Postal Code",
      type: "number",
    },
    {
      id: "city",
      placeholder: "Enter City here ...",
      label: "City",
      type: "text",
    },
    {
      id: "country",
      placeholder: "Enter Country here ...",
      label: "Country",
      type: "text",
    },
  ];
  const emailFields = [
    {
      id: "to",
      placeholder: "Enter recipient email ...",
      label: "To",
      type: "text",
    },
    {
      id: "cc",
      placeholder: "CC (Optonal)",
      label: "CC",
      type: "text",
    },
    {
      id: "bcc",
      placeholder: "BCC (Optional)",
      label: "BCC",
      type: "text",
    },
    {
      id: "subject",
      placeholder: "Enter subject",
      label: "Subject",
      type: "text",
    },
    {
      id: "body",
      placeholder: "Enter message here ...",
      label: "Message",
      type: "textarea",
    },
  ];
  const calenderFields = [
    {
      id: "title",
      placeholder: "Enter title here ...",
      label: "Title",
      type: "text",
    },
    {
      id: "location",
      placeholder: "Enter location here ...",
      label: "Location",
      type: "text",
    },
    {
      id: "start",
      placeholder: "Enter start time ...",
      label: "Start",
      type: "time",
    },
    {
      id: "end",
      placeholder: "Enter end time ...",
      label: "End",
      type: "time",
    },
  ];
  const callFields = [
    {
      id: "phone",
      placeholder: "Enter Number here ...",
      label: "Number",
      type: "number",
    },
  ];

  switch (title) {
    case "Text":
      return textFields;
    case "URL":
      return urlFields;
    case "GeoLoc":
      return geolocFields;
    case "SMS":
      return smsFields;
    case "WiFi":
      return wifiFields;
    case "VCARD":
      return vcardFields;
    case "Email":
      return emailFields;
    case "Calendar":
      return calenderFields;
    case "Call":
      return callFields;

    default:
      return textFields;
  }
};

export default getForms;
