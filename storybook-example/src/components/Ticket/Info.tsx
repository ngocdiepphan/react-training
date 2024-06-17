import PropTypes from "prop-types";
import TicketProps from "./type";
import "../../../build/input.css";
import starIcon from "../../assets/icon/star-sharp-svgrepo-com.svg";

const Info: React.FC<TicketProps> = ({
  image,
  name,
  title,
  price,
  description,
}) => {
  return (
    <section>
      <div className="w-72 h-auto bg-purple-100 border-purple-700 ">
        <div className="w-200 h-200 relative">
          <img className="h-full w-full object-cover" src={image} alt={title} />
        </div>
        <div className="flex flex-col text-center gap-2">
          <div className="flex flex-row justify-center my-4">
            <img
              src={starIcon}
              alt="star"
              className="fill-current w-5 h-5 transition-all duration-300 transform hover:scale-125"
            />
            <img
              src={starIcon}
              alt="star"
              className="fill-current w-5 h-5 transition-all duration-300 transform hover:scale-125"
            />
            <img
              src={starIcon}
              alt="star"
              className="fill-current w-5 h-5 transition-all duration-300 transform hover:scale-125"
            />
            <img
              src={starIcon}
              alt="star"
              className="fill-current w-5 h-5 transition-all duration-300 transform hover:scale-125"
            />
          </div>
          <h2 className="text-purple-900">{title}</h2>
          <h3 className="text-purple-700">By: {name}</h3>

          <p>{description}</p>
          <p>Price: {price} VND</p>
        </div>
        <div className="flex justify-end mx-10 my-5">
          <button className="text-green-900 w-20 h-10 bg-green-200 rounded-md border border-green-700">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

Info.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default Info;
