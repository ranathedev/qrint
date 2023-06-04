const getForms = (title) => {
  const textFields = [
    {
      id: "text",
      placeholder: "Enter text or URL",
      label: "Text",
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
    {
      id: "hidden",
      placeholder: "Enter password here ...",
      label: "Hidden",
      type: "checkbox",
    },
  ];

  const vcardFields = [
    {
      id: "first_name",
      placeholder: "Enter First Name here ...",
      label: "First Name",
      type: "text",
    },
    {
      id: "last_name",
      placeholder: "Enter Last Name here ...",
      label: "Last Name",
      type: "text",
    },
    {
      id: "display_name",
      placeholder: "Enter Display Name here ...",
      label: "Display Name",
      type: "text",
    },
    {
      id: "email",
      placeholder: "Enter your email",
      label: "Email",
      type: "text",
    },
    {
      id: "cell_phone",
      placeholder: "Enter Cell No ...",
      label: "Cell No",
      type: "number",
    },
    {
      id: "home_phone",
      placeholder: "Enter Home No ...",
      label: "Home No",
      type: "number",
    },
    {
      id: "work_phone",
      placeholder: "Enter Work No ...",
      label: "Work No",
      type: "number",
    },
    {
      id: "fax",
      placeholder: "Enter Fax No ...",
      label: "Fax No",
      type: "number",
    },
    {
      id: "videophone",
      placeholder: "Enter Fax No ...",
      label: "Video Phone No",
      type: "number",
    },
    {
      id: "memo",
      placeholder: "Enter Fax No ...",
      label: "Memo",
      type: "number",
    },
    {
      id: "nickname",
      placeholder: "Enter Fax No ...",
      label: "Nickname",
      type: "number",
    },
    {
      id: "birthday",
      placeholder: "Enter Fax No ...",
      label: "Birthday",
      type: "date",
    },
    {
      id: "url",
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
      id: "street",
      placeholder: "Enter Address here ...",
      label: "Street",
      type: "text",
    },
    {
      id: "region",
      placeholder: "Enter Address here ...",
      label: "Region",
      type: "text",
    },
    {
      id: "po_box",
      placeholder: "Enter Postal Code ...",
      label: "PO-Box",
      type: "number",
    },
    {
      id: "city",
      placeholder: "Enter City here ...",
      label: "City",
      type: "text",
    },
    {
      id: "zip_code",
      placeholder: "Enter Country here ...",
      label: "Zip Code",
      type: "text",
    },
    {
      id: "country",
      placeholder: "Enter Country here ...",
      label: "Country",
      type: "text",
    },
    {
      id: "latitude",
      placeholder: "Enter Country here ...",
      label: "Latitude",
      type: "text",
    },
    {
      id: "longitude",
      placeholder: "Enter Country here ...",
      label: "Longitude",
      type: "text",
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

  const smsFields = [
    {
      id: "to",
      placeholder: "Enter Number here ...",
      label: "To",
      type: "number",
    },
    {
      id: "message",
      placeholder: "Enter message here ...",
      label: "Message",
      type: "textarea",
    },
  ];

  const geolocFields = [
    {
      id: "latitude",
      placeholder: "Enter Latitude here ...",
      label: "Latitude",
      type: "text",
    },
    {
      id: "longitude",
      placeholder: "Enter Longitude here ...",
      label: "Longitude",
      type: "text",
    },
  ];

  switch (title) {
    case "Text":
      return textFields;
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
    case "Call":
      return callFields;

    default:
      return textFields;
  }
};

export default getForms;
