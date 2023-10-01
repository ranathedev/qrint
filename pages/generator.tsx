import React, { useEffect } from "react";
import axios from "axios";

import Customizer from "components/customizer";
import Footer from "components/footer";
import Header from "components/header";
import InputContainer from "components/input-container";
import Sidebar from "components/sidebar";

import stl from "./index.module.scss";

const Generator = () => {
  const [title, setTitle] = React.useState("Text");
  const [value, setValue] = React.useState("");
  const [styles, setStyles] = React.useState({
    module: { color: "black", shape: "default" },
    innereye: { color: "", shape: "default" },
    outereye: { color: "", shape: "default" },
  });

  // const [response, setResponse] = React.useState(null);

  const [base64, setBase64] = React.useState(null);

  // useEffect(() => {
  //   //@ts-ignore
  //   localStorage.setItem("response", response);
  // }, [response]);

  useEffect(() => {
    const data = localStorage.getItem("codeData");

    function stringToArrayBuffer(binaryString: any) {
      var length = binaryString.length;
      var buffer = new ArrayBuffer(length);
      var view = new Uint8Array(buffer);
      for (var i = 0; i < length; i++) {
        view[i] = binaryString.charCodeAt(i);
      }
      return buffer;
    }

    function arrayBufferToBase64(arrayBuffer: any) {
      var binary = "";
      var bytes = new Uint8Array(arrayBuffer);
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      return btoa(binary);
    }

    if (data) {
      var base64String = arrayBufferToBase64(stringToArrayBuffer(data));
      console.log(base64String, "this");
    }

    //@ts-ignore
    // setBase64(base64Data);
  }, []);

  const options = {
    method: "POST",
    url: "https://qrcode3.p.rapidapi.com/qrcode/text",
    headers: {
      Accept: "image/svg+xml",
      "Content-Type": "application/json",
      "X-RapidAPI-Key": process.env.X_RapidAPI_Key,
    },
    data: {
      data: value,
      image: {
        uri: "icon://appstore",
        modules: true,
      },
      style: {
        module: { color: styles.module.color, shape: styles.module.shape },
        inner_eye: {
          color: styles.innereye.color,
          shape: styles.innereye.shape,
        },
        outer_eye: {
          color: styles.outereye.color,
          shape: styles.outereye.shape,
        },
        background: { color: "white" },
      },
      size: { width: 300, quiet_zone: 4, error_correction: "M" },
      output: { filename: "qrcode", format: "png" },
    },
  };

  useEffect(() => {
    // value !== "" && generateCode();
  }, [value]);

  const generateCode = async () => {
    axios.request(options).then((response: any) => {
      console.log("Generating...");
      console.log(response);

      // setResponse(response);

      response.data
        .blob()
        .then((blob: any) => {
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = () => {
            return reader.result;
          };
        })
        .catch((error: any) => {
          console.log(error);
        });
    });
  };

  return (
    <div className={stl.generator}>
      <Header />
      <div className={stl.container}>
        <Sidebar title={title} setTitle={setTitle} />
        <div className={stl.row}>
          <InputContainer title={title} setValue={setValue} />
          <Customizer setStyles={setStyles} />
          {/* {base64 !== null && ( */}
          <img
            src="data:image/png;base64,/VBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABO/X5HAAADAFBMVEUAAAD9/f1VVVX9/f0RERH9/f39/f39/f13d3dmZmZERERvb2/9/f1hYWEhISH9/fv9/TMzM/39/RgYGP39/XV1dXp6ekJCQv39/QoKCv39/f39/Xh4eP39/T8/PxISEhz9/QQEBGxsbFBQUBr9/QcHBx1p/R1m/R1k/Rr9/Rr9/Rr9/R1i/Rr9/R5d/Rn9/R5f/Rn9/RUVFWdnZxv9/f39/R5b/Rn9/Rv9/R1rkzQa/f0b/f0b/f1LS0sa/f0b/f0b/f0eWf0a/f0Z/f19fX0a/f39/f0dbf0db/0b/f0b/f0eVv0a/f0a/f0a/f0Z/f0a/f39/Rj9G/39G/39HP39HXL9G/39HP39HP39/f39HXv9HP39HX39G/39aWlpHXj9G/39HP39HXT9HXYZljQ0NP39/R5U/Rn9/f39/f39B/39TU1N/f39MTEx/f39HP39/f39XFxcHP39/f29/f0jIyP9/e/9/f39PT09/f39/f39Xl5eFP0L/f1ZWVkuLi48af13/f0c/f0c/f0mJib9/f39/f0aR/39/f39/f39/f39/f1F/f1K/f1F/f39/f05/f03Nzf9/f06/f17e3v9/f39/f39/f39/f0NDQ1G/f1GRkZx/f0Y/f1E/f39/f0cHBz9/V79/f39/Rj9/Tv9/UT9/RH9/Vz9/f39/Wv9/f39/f39/f39/SFu/Wr9/Xb9/f39/RZB/RL9/Vn9/Uj9/f39/f39/f39/Vn9/Sh5/Rj9iv39BQ8oWf39D/39HFj9cnJyNv39Jv39/f39/f39/f39WP39Pv39UlJSLv39J/39Ezr9HP39BCMp/f39CyFbJl/9FP39DGt8ZGRkLP39fv39/f39OP39/f39Kf39Lf39Zf39Q0NDOzs7/f39JCQk/f39/f39XP39/f39H/39TXb9Bxc8Vv39BjM7L1P9F/39CU1dJv39QV/9F/39fP39GP39AxkdCldhECp7J/39Yn39/f39Q/39CEJNJ/39eXl5/f39AQAAAAlwSFlzAAALEwAACxMBAP39GAAAEm1JREFUeP39f3j9Vf1Pfv0kJP1ACEEoGmoe/SBV/f39WP39/SpiVf1K/SJYfkb9/f0o/Uj9/Vj9/f0f/f391R/9Kv0KblkebFVqeFIF/f0VW/0WXCIBQUL9/TH9Sf07/f07/f39Zf39fP39OzNn/f39/f39/Xv9TKn9/SUz/QH9f0L9Ev1iCVD9BP1YAlQsASr9ABVL/f0lQP0S/WIJUP0E/VgCVCwBKv0AFUv9/SVA/RL9YglQ/QT9WAJULAEq/QAVS/39JUD9Ev1iCVD9BP1YAlQsASr9AP1YczNSZCE6KHL9f/39/V/9/ST9H/1X/UD9/QP9W/0f/f07/f39/Tn9ZR/9df1QcCR9/SdY/Xf9Sf39Yv1+fzP9/RUmLf0Y/f39X/39C/0WfWL9Xg0m/f0p/f0o/f39QG9DASr9ABVL/f0lQP0S/WIJ/Q5r/ZD9/XtkI2g4bv0NPv03LjL9/Qf9dVwadiD9/f00DC39/f0hDX39Ff0DSP39DP39CBpCdnwk/R8Laf39/QQVS/39JUD9Ev1iCVD9BP39Wgn9azAhM/0x/X4o/UdyHf39/TVcaP10NzEjdkf9Jf08/VJ7MHF5/Uz9Rf39/f39ff0//f1MBzP9/f39F006/TP9OP0wQx79/f0j/Q0F/VgCVCwBKv0AFUv9/SVAPHUQM/39/f0CSv1c/bsVBf39NSke/f03YP39/f39/VD9Qv0m/WJtZJ/9/X9F/f1W/f1kdf39Yg39/f39Hv10/f39ABVL/f0lQP0S/WIJUP0E/X/9YBn9QTB/Jjz9/f0oWP39K14U/X1IUjpO/f39BP39Of1OXQ/9/Xj9ByRHb0MBKv0AFUv9/SVA/RL9YglQ/QT9/Vn9Gf15/WEreP39/Qdv/X79/f06/f39/U16/RJP/dghSx8b/TdL/f0lQP0S/WIJUP0E/VgCVCwB/f39/Rz92Q5+UmT9Df0G/f1Cfgb9/U5G/f0X/XYz/Rb9d/39/f1Pcy79J/39/cf9/f0fkP39Rv39I/3W/XQnHP06W0P9If0a/f0eTHr9Gv3r/X+9Ylj+/VtC/TYU/WIJUP0E/VgCVCwBKv0A/Vg/STX9/X12/V39/XMN/f0f/f39dXE28h0MdEYyFQ1KUX87/f0gxP1l/f39S/0W/SAY/Ub9D039Bf1g/f39XP39/f06LgF6GwpQ/QT9WAJULAEq/QAVS0D9Yj39ZP39Vv39/f1O/f15/Rb9/f39/Wly/TVz/Vz9F3pGOP39/WL9/Vr9/RX9/f39M/1b/TDt/QgV/f0KbP39/Vj9cv39Dv07JFYyV/39Ls79/f39/Uj9/REs/TX9/UFvQwEq/QAVS/39JUD9Ev1iCThh/R5wYlxkfsb9cCv9/f39Zzos/TEq/f1BIRP9/U00/QD9ef39Qf0FLlz9/XYo/f39GUkcJ/1p/f1u/S0m/X51/Qb9/f10a2RGZD/9Hf11ef39QP0j/f39/f39Rv1T/TAQ/Tb9/TD9U/1dHHobClD9BP1YAlQsASr9ABVL/Vf9/f1B/f39/Qz9YTj9/SL9YT8PeTb9/SpnBDNR/f0W/SM3DHz9/Qz9aP0NeUL9/f1nNTlBWm39bP39D/39ev39bgoo+v0uM0Fd/f39dn52LxpO/f0B/XP9M/39/TH9/f39MAj9/f1t/W0oQP0S/XF7/RkWVEz9/Vke/f1W/Q0l/UX9/f39/TP9H7FD/SNa/f0UNv13/Vv9d/0/bit6/ST9/f1jA0b9Ev1YC/39OXv9/XKnRDca/X0i/XpFKP39fmP9/QttDf39/W79/Sp2GCn9Nf0//f1JCP0VF/39Yf1Fbf0AAf05/Tv9HF39J1n9d0Y0DDsbS3czXf0jMv0u/VMW/f1fMhU2Fv1EZj0LNA9N/Q/9f/1IRET9/UJbUV79Ef1d/Uf9/f39/SD9Xv39Onx5/VpS/XL9/f10Ef1Y/R79/VYt/W/9aP0R/f1/hv0OQf39zWn9/Uj9SP39/TcXJf1/ez09RHQbDv1WBP0x/Sb9UUf9/f0x/f39Rzkp/f39dAxi/Vb9/f39/f1d/f39Mhj9/QYNYmP9/f1F/f39/R39/f1l/f0vN/1a/f1+f/02/f39OU8e/S/7/Uz9ZwP9/Vxr/Q03/f39M/0FYf39csjD/f0XdhL9Y1Ad/XpPF/39Jf39/f0tY/1MI1pefT9jfxMRDX09WDgGFzwH/f0d/Xb9/Q79/T39GVn9C/39Df39WxU+X0lEY/0v/UhEM/1zZhkf/WFQfv0R/Qz9/f39/f0TEf1m/f0K/SL9RDR1YFUw/Qxu/RL9LP0N/SL9RDN1GP04/WRm/RL9d/39O2cVYCP9Zv0H/VZV/f0e/R/9+Rf9/f0ve/0S/f1L/Wv9Dv39FGT9/f1ZHf39LFc9/TX9/f0qTP0i/TN8Pf0J/f39/QsO/S9G/f0bFR8j/f0p/f39/Q02/f0vQP39Z01aGHZZ/Sv9/f39dE/9/V39KnD9X/39bGYL/WcQZRwh/Rn9L3lJef1R/f0c/f39/f17+H1B/Q79/XZj/f1y/SP9/XT9IT39ZP39WkRORGIlOWZ+WyUREf39WhD9f/1J/Uj9LP1m/f1q/WD9FS/9/f39/f1tUnr9Zf1+/f1Tev39/f1o/Wr9/WoeNP39/U79VU13/XE2Y/3U/f39/Vk7Xf39STN6/SP9/R/9/f0YAQEiEv0wU/39LCIiWl9HPf1o/UCO/WL9F3Fc/f39THo3/Tb9NTP9Bf1cKjb9/f1XE/39/XA1EVFNq3T9GP1I/VVK/Uhc/QX9S/1m/f0C/f1//f19/Uf9/WIU/f14Iv39/f0Q/UNEVP39/Sgi/f39/f14IiL9GP0K/RlERDR+cx01/RBE/f1R/f39/Tw0LCsrC/39Pv39FFv9Ty8Rff0Sehv9/f0Irx9PRFR1df39CWkgIv0S/Uc1/f1EREQ1Wf39/f39/Wj4F/1tIyIi/RJEX/0qMP0NCnFE/f0XExFRZf03UlP9Ef0Kbf39Vf39Vs+CSwL9/f0J/f0Z/Ql//RYtZSr9/TH9BA8XDv39I0z9f95v/f0d/Q0J/f1+/f1o/X39/Vv9Rf0UWyD9/f39/Wz9/Vn9XD86/V0rJyxWNVdh/VL9KVP9qGv9Jv1x/f39/e4fYP2r1hMR/S8zPV39dXxdawf9RP1W/f0L/W4X/Wv9M/39DnxaRf39Zf39/V91ef39/f1l/f39/f39ZUsW/f39V/0adv0Q/f39/f0ka/1VX/39c0oK/TscHxH9/f1l/Sn9Af0ob3IWS/39R979HBxL/f1R/f0H/X/9OitYUDMs/WP9E/1vVmN3/Uj9Ef39/UMqAv39/Xr9O2f9EUT9A/39IP0Xf/0rb/1//f0peFlBRH1zdv12/f39/SX9K/08/f06b/1J/f14/Sc+Z/1JQ/1VeP0r/Vv9/WD9LwUxOy39dv1+/QT9TxM9/f02KP39/Sj9/f1lQf0u/VR3/f13/f00/f39b/0u/WVjb2RP/f39Xf0r/Q9Z/Tz91/39/f39Kv0V/TP9/Qj9Nntb/f1s/SH9M1v9/X8t/f0DQ/0u/UX9Ax/9az9cRVR9/SsTOv0//f39/SoPB0r9Gf1J/XX9/f39/U39/TU7/f39/f39NTExAP19wf0Q/Vh9/W57/f39Jv39TP0b/Qf9Hf1GiG79Nv12OmQm/Wv9bf39/RgH/Xn9lP39/f0RZ/05Zh0AH/0p/Sb9/SpzLP39d/18Wv1G/f39P/1m/WUxF2j9/Vb9/UN2TP1obgj9Vf0jFv1O/Q2L/f02NGpnFFgH/f39/XX9/U1NTSNiI/39aP39ZP1PRlUQ/f0xJV8Q/f0g/XBBXP39U/39GRQS/Tf9Ov0+/eD9Gf39/cX9/f01OP1u/RR4/VvyO/39WNX9TzUW/SIk/Vo2LDf9ZXFM/R4ich0D/f0W/f1gYm85M/0qCkk0/Rdj/Wklb2dxF3Jq/R39/SUa/Ur9TmgVPf0QAv39aP39c/0TezP9/SEk/f1e/RdOJP39/Uv9bSAi/f0Vd1k1/W8wZlM7DkRCVGL9ejv9f/3a/UkLXv0K/Vc+C/39D/00Kf39hP39XUApQ34S/UI/Pv39/f09NP1SY3Mv/f39bv0e/WJSCv02EiNe8v1s/f1wb1xI/Wg9/f1y/f0r/f1u/f39dWb9/f39Jf39/Tj9ZzYJ/f39bERE/S79/T79/VP9PP1v/S79XP39R/39/WP97v39/f1E/QwMRP1GdCdc/f39/QoG/W39biP9B2IQ/WkDPv08/V/9/SL9Bf1q/UlMYP0OHUkINP0AFUv9V/39EP39Z/0Gd3X9/f18/f1Y/TVUaSv9/R9HR8QdfG39IL9yO3Ipd/39bkFd/f1f/X79Wv1g/f1OPGL9SQf9Jlh+/f39Izv9/f2GN/0AQxv9ev0sQv39Tf1+qP1BXf0TFUv9/SVA/RL9YglQ/QR4/f0A/RU2/f1LMRo8/WNwHf0H/QRZ/f1c/Xb9Bv39ZP39Z/1O/f39/VL9/XT9W/2z/TH9/f39/f0lGv1ief11/XL9T/39TG/9EzdpLf1UJ/00cUd9/f1R/WP9/f39fzENHktcBoYCVCwBKv0AFUv9/SVA/RL9/To8/f39Df39/WX9/f1O/f39S/1jY/39cFz9ev39Vv39/Xo3fP02IP39KwT9/XT9/V79HP18/Ukf/Qb9/X79bm42WP0H/f39WlEnVP1nC1kqGgxvOv03/f13bP1OFP1F/f39c/0r/TQz/f5vQf0D/f23/QAVS/39JUD9Ev1iCVD9BHj9Wf1c/Qz9R3U3/UNd/WT9R34y/XL9CP39EVlg/V39KkZa/f1H/TD9U/0IBP39/Rn9/f07HXwP/TIx/Tv9/XIU/T9LTP1gY0RE/X9JLv39/f00/Vny/VlF/f39/Tf9CzZW/XEE/SRsUFf9DQX9WAJULAEq/QAVS/39JSD9WGX9If11/T/9cB79aP0zX/0iGP08/X4A/f1Z/f1QUf18b/1D/TgI/VP9/Qf9DlL9/f1wCBP9XyDM/f0e/QtheP39/f39YBcXWf1NVHwN/f0XPm/9Hf0rW/02FP1iCVD9BP1YAlQsASr9ABVL/Xj9TidmV/13PA39ezhx/V04XP39JP1s/f0r/f0VHnL9Cf1d/ToX/f39Yz96Z/39Qwl+/Xj9IBYr/f39/T9xcRv9/Z1Y/Tz9Df0fe/39Z/39Jv1o/VtxJRscYzX9/T39bkVvQwEq/QAVS/39JUD9Ev1iCUj9Hv0tOLgJ/f1uLP0e/f1zNv1PWD7ZM/1KYWD9/XIxLv1w/Qr9Yf1QAjf9P/39DP1Mb/39NQEz/Uv9/XT9MyP9/f39VkdA/Vv9/Xn9/QkM/f39/f1y/XZkQ3/9/f11e1LS/f1Hb0MBKv0AFUv9/SVA/RL9YglI/Vj9dTP9Dv0ozXL9Tf39/TBcW/0t/QT9YP09LQQGF0j9Sv39Wf1z/Tv9/f0i/Qz9ff1BMP0H/W9a/f05Pf1B/f0eYf0H/QH9LHobClD9BP1YAlQsASr9ABVL/Vj9/f0S/f04/f1X/UEe/V39Lf39/f39/W79D2UuNP39OP25/TUwLEb9IP39Af39EPP9GHlH/Ro+/TR8mRZ9ZFNb/QIa/f1a/SH9Dv1Y/bZ5/f1f/W5bQP0q/f1W/TYU/WIJUP0E/VgCVCwBKv39/WJNS3b9UCz9a/09C/0L/Q79/UJG/f3cBisQ/XUkJf39Bmv9Dv39RP04/TZn/Ub9OXP9/Sl3MHb9/f39dP1iCVD9BP1YAlQsASr9AP0STX79Jy9VOU/9/UQwCf39ev39KXZs/f39Vv03aQUC/U/9M/0ca/0WIf39cDr9OywuCDt1/bP9Nv02FP1iCVD9BP1YAlQsASr9ABVL/f0lQP0S/WIJUP0E/VgCVCwBKv0AFUv9/SVA/RL9YglQ/QT9WAJULAEq/QAVS/39JUD9Ev1iCVD9BP1YAlQsASr9ABVL/f0B/RNV/Ub9JEUAAAAASUVORP1CYP0="
            alt="Image"
          />
          {/* )} */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Generator;
