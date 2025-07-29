import Marquee from "react-fast-marquee";
import { GiQueenCrown } from "react-icons/gi";

const Shipping = () => {
    return (
        <Marquee className="bg-[#d9ecff] p-4 -rotate-3">
            <div className="flex items-center gap-4 text-3xl font-medium">
                <p><GiQueenCrown className="relative top-1"/></p>
                <p>Quality product</p>
                <p><GiQueenCrown className="relative top-1"/></p>
                <p>Shipping across India</p>
                <p><GiQueenCrown className="relative top-1"/></p>
                <p>Shipping across India</p>
            </div>
        </Marquee>
    );
};

export default Shipping;