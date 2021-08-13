import axios from "axios";
import React, { useState, useEffect } from "react";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(text);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2/",
        {},
        {
          params: {
            q: debouncedTerm,
            target: language,
            key: ""
          }
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };

    doTranslation();
  }, [language, debouncedTerm]);

  return <div className="ui header">{translated}</div>;
};

export default Convert;
