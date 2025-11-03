import { useContext } from "react";
import { CardContext } from "../components/CardContext";
import { CardFront, CardBack } from "./Homepage.jsx";
import { useNavigate } from "react-router-dom";

function Thankyou() {
  const navigate = useNavigate();
  const {
    cardholder,
    setCardholder,
    cardnumber,
    setCardnumber,
    exp,
    setExp,
    cvv,
    setCvv,
  } = useContext(CardContext);
  function handleSubmit(e) {
    e.preventDefault();

    setCardholder("");
    setCardnumber("");
    setExp("");
    setCvv("");
    navigate("/");
  }
  return (
    <div className="md:grid grid-cols-[1fr_3fr] min-h-screen">
      <div>
        <img
          src="/images/bg-image.png"
          alt=""
          className=" h-[15rem] w-full md:min-h-screen"
        />
      </div>
      <div className="mt-20">
        <CardFront cardhold={cardholder} cardnum={cardnumber} expire={exp} />
        <CardBack cvvnum={cvv} />
        <div className="relative left-[50%] translate-x-[-50%] w-fit md:left-[65%] md:top-[50%] md:translate-y-[-50%] lg:left-[55%]">
          <img
            src="/images/icon-complete.svg"
            className="relative left-[50%] translate-x-[-50%]"
            alt="icon-complete"
          />
          <p className="text-center text-4xl mt-[25px] uppercase">Thank You!</p>
          <p className="text-center text-gray-400 m-[25px]">We have added your card details</p>
          <form onSubmit={handleSubmit}>
            <button className="bg-[#220930] text-white h-12 w-[22rem] rounded-[10px] mt-2 cursor-pointer">
              continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Thankyou;
