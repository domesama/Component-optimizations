import React, { useState, useEffect } from "react";
import axios from "axios";

function ConvertLanaguage({ userInput, selectedLanguage }) {
  const [debouncedTranslatedText, setDebouncedTranslatedText] = useState(null);
  const [results, setResults] = useState("");

  useEffect(() => {
    const debounceTranslations = setTimeout(() => {
      setDebouncedTranslatedText({
        userInput: userInput,
        selectedLanguage: selectedLanguage,
      });
    }, 1000);

    return () => {
      clearTimeout(debounceTranslations);
    };
  }, [userInput, selectedLanguage]);

  useEffect(() => {
    const callingTranslate = async () => {
      const res = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
            q: debouncedTranslatedText["userInput"],
            target: debouncedTranslatedText["selectedLanguage"]["value"],
          },
        }
      );
      setResults(res["data"]["data"]["translations"][0]["translatedText"]);
    };

    if (
      debouncedTranslatedText !== null &&
      debouncedTranslatedText["userInput"] !== ""
    ) {
      callingTranslate();
    }
  }, [debouncedTranslatedText]);
  return <div>{results}</div>;
}

export default ConvertLanaguage;
