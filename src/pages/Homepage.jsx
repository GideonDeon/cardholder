import { useContext } from "react";
import { CardContext } from "../components/CardContext";
import { useNavigate } from "react-router-dom";
function Homepage() {
  return <Body />;
}

function Body() {
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

    navigate("/thankyou");
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
        <form
          onSubmit={handleSubmit}
          className="w-fit relative left-[50%] translate-x-[-50%] md:top-[50%] md:translate-y-[-50%] md:left-[65%] lg:left-[55%]"
        >
          <label htmlFor="cardholder">CARDHOLDER NAME</label>
          <br />
          <input
            type="text"
            name=""
            id=""
            placeholder="e.g. Jane Appleseed"
            value={cardholder}
            onChange={(e) => {
              const onlyLetters = e.target.value.replace(/[^a-zA-Z\s]/g, "");
              setCardholder(onlyLetters);
            }}
            className="border-1 border-gray-400 rounded-[10px] pl-3 w-[22rem] h-12 placeholder-gray-400"
          />
          <br />
          <label htmlFor="cardnumber">CARD NUMBER</label>
          <br />
          <input
            type="text"
            name=""
            id=""
            maxLength={20}
            value={cardnumber}
            onChange={(e) => {
              let value = e.target.value.replace(/\D/g, "");
              value = value.replace(/(.{4})/g, "$1 ").trim();
              setCardnumber(value);
            }}
            placeholder="e.g. 1234 5678 9123 0000"
            className="border-1 border-gray-400 rounded-[10px] pl-3 w-[22rem] h-12 placeholder-gray-400"
          />
          <br />
          <label htmlFor="expiration">
            EXP. DATE (MM/YY)
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CVV
          </label>
          <br />
          <input
            type="text"
            name=""
            id=""
            value={exp}
            onChange={(e) => {
              let value = e.target.value.replace(/[^\d]/g, "");

              if (value.length >= 3) {
                let month = value.slice(0, 2);
                let year = value.slice(2, 4);

                if (parseInt(month, 10) > 12) {
                  month = "12";
                } else if (parseInt(month, 10) === 0) {
                  month = "01";
                }

                value = month + "/" + year;
              }

              setExp(value);
            }}
            placeholder="MM/YY"
            className="border-1 border-gray-400 rounded-[10px] pl-3 w-[9rem] h-12 placeholder-gray-400"
          />
          <input
            type="text"
            name=""
            id=""
            maxLength={3}
            value={cvv}
            onChange={(e) => {
              const onlyNums = e.target.value.replace(/\D/g, "");
              setCvv(onlyNums);
            }}
            placeholder="e.g. 123"
            className="border-1 border-gray-400 rounded-[10px] pl-3 w-[11rem] h-12 placeholder-gray-400 ml-8"
          />
          <br />
          <button className="bg-[#220930] text-white h-12 w-[22rem] rounded-[10px] mt-2 cursor-pointer">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}
export function CardFront({ cardhold, cardnum, expire }) {
  return (
    <div className="bg-[url(/images/bg-card-front.png)] bg-center bg-contain bg-no-repeat 
                    h-[10rem] w-[20rem] absolute top-32 z-3 left-[5%] sm:left-[20%] md:left-[5%] md:top-[30%] lg:left-[10%]">
      <img
        src="/images/card-logo.svg"
        alt="card-logo"
        className="ml-10 pt-4 w-[4rem] h-[3rem]"
      />
      <form action="" className="relative">
        <input
          type="text"
          name=""
          id=""
          value={cardnum}
          readOnly
          placeholder="0000 0000 0000 0000"
          className="absolute top-8 left-10 w-[14rem] text-[23px] text-white placeholder-white"
        />
        <input
          type="text"
          name=""
          id=""
          value={cardhold}
          readOnly
          placeholder="Jane Appleseed"
          className="absolute top-20 left-8 w-[10rem] text-[12px] text-white uppercase placeholder-white"
        />
        <input
          type="text"
          name=""
          id=""
          value={expire}
          readOnly
          placeholder="00/00"
          className="absolute top-20 right-10 w-[2rem] text-[10px] text-white placeholder-white"
        />
      </form>
    </div>
  );
}
export function CardBack({ cvvnum }) {
  return (
    <div className="bg-[url(/images/bg-card-back.png)] bg-center bg-contain bg-no-repeat absolute top-10 left-[15%] 
                    h-[10rem] w-[20rem] sm:left-[30%] md:left-[8%] md:top-[55%] lg:left-[15%]">
      <form action="" className="relative">
        <input
          type="text"
          name=""
          id=""
          value={cvvnum}
          readOnly
          className="absolute top-16 left-10 w-[15rem] pr-2 text-white text-right placeholder-white"
        />
      </form>
    </div>
  );
}

export default Homepage;
