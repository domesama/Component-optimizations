import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

function ConvertLanaguage({ userInput, selectedLanguage }) {
  const [translatedText, setTranslatedText] = useState("");
  const [debouncedTranslatedText, setDebouncedTranslatedText] = useState(
    translatedText
  );

  useEffect(() => {
    const debounceTranslations = setTimeout(() => {
      setDebouncedTranslatedText(userInput);
    }, 1000);

    return () => {
      clearTimeout(debounceTranslations);
    };
  }, [userInput]);

  useEffect(() => {
    const callingTranslate = async () => {
      const res = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
            q: debouncedTranslatedText,
            target: selectedLanguage["value"],
          },
        }
      );
      setTranslatedText(
        res["data"]["data"]["translations"][0]["translatedText"]
      );
    };

    if (debouncedTranslatedText !== "") {
      callingTranslate();
    }
  }, [debouncedTranslatedText, selectedLanguage]);
  return <Fragment>{translatedText}</Fragment>;
}

export default ConvertLanaguage;
