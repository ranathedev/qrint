import stl from './RadioInputs.module.scss'

interface Props {
  format: string
  setFormat: (arg: string) => void
}

const RadioInput = ({ format, setFormat }: Props) => {
  return (
    <div className={stl.radioInputs}>
      <label className={stl.radio} onClick={() => setFormat('jpeg')}>
        <input
          type="radio"
          name="format"
          checked={format === 'jpeg'}
          onChange={e => console.log(e.target.value)}
        />
        <span className={stl.label}>JPEG</span>
      </label>
      <label className={stl.radio} onClick={() => setFormat('png')}>
        <input
          type="radio"
          name="format"
          checked={format === 'png'}
          onChange={e => console.log(e.target.value)}
        />
        <span className={stl.label}>PNG</span>
      </label>

      <label className={stl.radio} onClick={() => setFormat('webp')}>
        <input
          type="radio"
          name="format"
          checked={format === 'webp'}
          onChange={e => console.log(e.target.value)}
        />
        <span className={stl.label}>WEBP</span>
      </label>
    </div>
  )
}

export default RadioInput
