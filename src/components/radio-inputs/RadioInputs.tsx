import stl from "./RadioInputs.module.scss";

interface Props {
  format: string;
  setFormat: (arg: string) => void;
}

const RadioInput = ({ format, setFormat }: Props) => {
  return (
    <div className={stl.radioInputs}>
      <label className={stl.radio} onClick={() => setFormat("jpg")}>
        <input
          type="radio"
          name="format"
          checked={format === "jpg"}
          onChange={(e) => console.log(e.target.value)}
        />
        <span className={stl.label}>JPG</span>
      </label>
      <label className={stl.radio} onClick={() => setFormat("png")}>
        <input
          type="radio"
          name="format"
          checked={format === "png"}
          onChange={(e) => console.log(e.target.value)}
        />
        <span className={stl.label}>PNG</span>
      </label>

      <label className={stl.radio} onClick={() => setFormat("svg")}>
        <input
          type="radio"
          name="format"
          checked={format === "svg"}
          onChange={(e) => console.log(e.target.value)}
        />
        <span className={stl.label}>SVG</span>
      </label>
    </div>
  );
};

export default RadioInput;
