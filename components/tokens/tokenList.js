import { Fragment } from "react";
import dummyTokens from "./dummyTokens";
import Token from "./token";

import classes from "./tokenList.module.css";

const TokenList = () => {
  return (
    <div className="flex flex-wrap justify-center ml-20 mr-20">
      {dummyTokens.map((token) => (
        <Token name={token.symbol} logo={token.logoURI} />
      ))}
    </div>
  );
};

export default TokenList;
