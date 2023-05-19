import CalendarIcon from "assets/calendar.svg";
import CallIcon from "assets/phone.svg";
import EmailIcon from "assets/email.svg";
import LocationIcon from "assets/location.svg";
import SMSIcon from "assets/sms.svg";
import TextIcon from "assets/text.svg";
import URLIcon from "assets/url.svg";
import VCARDIcon from "assets/vcard.svg";
import WiFiIcon from "assets/wifi.svg";

const getIcons = (title) => {
  switch (title) {
    case "Text":
      return <TextIcon />;
    case "URL":
      return <URLIcon />;
    case "GeoLoc":
      return <LocationIcon />;
    case "SMS":
      return <SMSIcon />;
    case "WiFi":
      return <WiFiIcon />;
    case "VCARD":
      return <VCARDIcon />;
    case "Email":
      return <EmailIcon />;
    case "Calendar":
      return <CalendarIcon />;
    case "Call":
      return <CallIcon />;

    default:
      return <TextIcon />;
  }
};

export default getIcons;
