import React from "react";
import { bar, JS_CONST } from "./helper";
import HELP_2 from "./helper_2";

const Home = () => {
  const value = bar("https://www.zomato.com");
  return (
    <div>
      <h1>
        Home Module - value is {JS_CONST.TEST} - url is {value}
      </h1>
      <p>cer - {HELP_2.HELP_2_TEXT}</p>
    </div>
  );
};

export default Home;
