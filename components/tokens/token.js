const Token = (props) => {
  return (
    <div className="w-60 h-60 m-5 flex-row rounded-3xl bg-gradient-to-r from-cyan-200 to-blue-200">
      <div className="text-left pl-10 mt-5">
        <h3 className="text-xl font-medium">{props.name}</h3>
        <h2 className="text-xl font-medium">${props.price}</h2>
        <p className="text-sm">{props.percent}%</p>
      </div>
      <img src={props.logo} className="h-1/2 ml-auto mr-auto aspect-square" />
    </div>
  );
};

export default Token;
