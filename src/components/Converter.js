import React, { useEffect, useState } from "react";
import './Converter.css'

const ColorConverter = () => {
  const [ hexColor, setHexColor ] = useState('');
  const [ rgbColor, setRgbColor ] = useState('');

  useEffect(() => {
    document.body.style.backgroundColor = rgbColor
  }, [rgbColor])

  const handleInputChange = (e) => {
    const v = e.target.value;
    if (v.length <= 7) {
      setHexColor(v);
      if (v.length === 7) {
        const isValidHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(v);
        if (isValidHex) {
          const hex = v.substring(1);
          const r = parseInt(hex.substring(0, 2), 16);
          const g = parseInt(hex.substring(2, 4), 16);
          const b = parseInt(hex.substring(4, 6), 16);
          setRgbColor(`rgb(${r}, ${g}, ${b})`);
        } else {
          setRgbColor('Ошибка!');
        }
      } else {
        setRgbColor('');
      }
    }
  }

  return (
    <form className="Converter-form" onChange={handleInputChange}>
      <input
        className="Converter-input"
        type="text"
        name="hex"
        maxLength="7"
        autoComplete="off"
        autoFocus
        defaultValue={hexColor}
      />
      <output 
        className="Converter-output"
        type="text"
        name="rgb"
        style={{ backgroundColor: rgbColor}}
      >
        <span
          className="Converter-output-text"
          style={{ color: rgbColor }}
        >{rgbColor}
        </span>
      </output>
    </form>
  )
}

export default ColorConverter;