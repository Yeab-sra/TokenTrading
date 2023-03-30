import LightbulbIcon from "@mui/icons-material/Lightbulb";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import InfoIcon from "@mui/icons-material/Info";
import BedtimeIcon from "@mui/icons-material/Bedtime";

const Dropdown = () => {
  return (
    <div className="flex justify-end">
      <div className="absolute bg-white mx-5 rounded-2xl w-1/5 px-5">
        <div className="p-3 border-b-2 border-gray-500 flex flex-col justify-center">
          <button className="bg-blue-500 px-4 py-2 rounded-xl text-white font-medium">
            Connect Wallet
          </button>
        </div>
        <div className="flex flex-col my-3 font-medium items-start">
          <button className="my-1">
            <LightbulbIcon /> Request new features
          </button>
          <button className="my-1">
            <BusinessCenterIcon /> Buy crypto with fiat
          </button>
          <button className="my-1">
            <InfoIcon /> Help center
          </button>
          <button className="my-1">
            <BedtimeIcon /> Switch to dark mode
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
