import { Fragment } from "react";
import dummyTokens from "./dummyTokens";
import Token from "./token";

import classes from "./tokenList.module.css";

const TokenList = () => {
  return (
    <Fragment>
      <div className={classes.tokenContainers}>
        {/* <Token
          name="ETH"
          price="1788.99"
          percent="+2.13"
          logo="data:image/png;base64,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"
        />
        <Token />
        <Token />
        <Token /> */}
        {dummyTokens.map((token) => (
          <Token name={token.symbol} logo={token.logoURI} />
        ))}
      </div>
      {/* <div className={classes.tokenContainers}>
        <Token />
        <Token />
        <Token />
        <Token />
      </div> */}
    </Fragment>
  );
};

export default TokenList;
