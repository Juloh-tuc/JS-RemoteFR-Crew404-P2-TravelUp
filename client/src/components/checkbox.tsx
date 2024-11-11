import React, { useState } from "react";
import "./checkbox.css";

const Checkbox: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    chaud: false,
    froid: false,
    tempere: false,
  });

  const paysFroids = ["Canada", "Islande", "Norvège", "Finlande"];
  const paysChauds = ["Brésil", "Inde", "Egypte", "Afrique du Sud"];
  const paysTempérés = ["Portugal", "Espagne", "Japon", "Australie"];

  const [pays, setPays] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setSelectedOptions((prev) => ({
      ...prev,
      [name]: checked,
    }));

    if (name === "froid" && checked) {
      setPays(paysFroids);
    } else if (name === "chaud" && checked) {
      setPays(paysChauds);
    } else if (name === "tempere" && checked) {
      setPays(paysTempérés);
    } else {
      setPays([]);
    }
  };

  return (
    <div className="checkbox-container">
      <fieldset className="checkbox">
        <legend>Quel type de climat préférez-vous ?</legend>

        <input
          className="questions"
          type="checkbox"
          id="Chaud"
          name="chaud"
          checked={selectedOptions.chaud}
          onChange={handleChange}
        />
        <label htmlFor="Chaud">🌡️ Chaud</label>
        <br />

        <input
          className="questions"
          type="checkbox"
          id="Froid"
          name="froid"
          checked={selectedOptions.froid}
          onChange={handleChange}
        />
        <label htmlFor="Froid">❄️ Froid</label>
        <br />

        <input
          className="questions"
          type="checkbox"
          id="Tempéré"
          name="tempere"
          checked={selectedOptions.tempere}
          onChange={handleChange}
        />
        <label htmlFor="Tempéré">🌤️ Tempéré</label>
      </fieldset>
    </div>
  );
};

export default Checkbox;
