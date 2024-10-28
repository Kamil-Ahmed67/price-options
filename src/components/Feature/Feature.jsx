import PropTypes from "prop-types";
import { FaCheckSquare } from "react-icons/fa";
const Feature = ({feature}) => {
    return (
        <div >
            <p className="flex gap-2 items-center"><FaCheckSquare></FaCheckSquare>{feature}</p>
        </div>
    );
};
Feature.propTypes={
    feature:PropTypes.string
}
export default Feature;