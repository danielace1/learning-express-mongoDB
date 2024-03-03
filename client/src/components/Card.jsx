import Proptypes from "prop-types";
import { formatDate } from "../helper";

const Card = ({ technology, title, desc, created_at }) => {
  return (
    <div className="cursor-pointer transition-all duration-500 hover:-translate-y-1 w-full bg-neutral-50 rounded-md shadow-md flex flex-row items-center space-x-4 gap-4">
      <img
        src={`https://ui-avatars.com/api/?name=${technology}&background=random&size=150&length=3&font-size=0.30&bold=true`}
        alt={technology}
        className="rounded-tl-md rounded-bl-md"
      />
      <div>
        <h1 className="font-bold text-sky-600 text-xl">{title}</h1>
        <p className="line-clamp-3">{desc}</p>
        <time className="text-xs font-semibold text-gray-500">
          {formatDate(created_at)}
        </time>
      </div>
    </div>
  );
};

Card.propTypes = {
  technology: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  desc: Proptypes.string.isRequired,
  created_at: Proptypes.string.isRequired,
};

export default Card;
