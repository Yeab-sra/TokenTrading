import classes from "./token.module.css";

const Token = (props) => {
  return (
    <div className={classes.tokenContainers}>
      <div className={classes.details}>
        <h3>{props.name}</h3>
        <h2>${props.price}</h2>
        <p>{props.percent}%</p>
      </div>
      <img src={props.logo} />
    </div>
  );
};

export default Token;
