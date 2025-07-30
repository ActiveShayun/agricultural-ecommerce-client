import Marquee from "react-fast-marquee";
import { GiQueenCrown } from "react-icons/gi";

export default function MarqueeBanner() {
  return (
        <Marquee className="bg-[#d9ecff] px-2 py-3 p-4 w-full lg:-rotate-3">
          <div className="flex items-center gap-3 md:gap-6 text-sm md:text-2xl font-medium whitespace-nowrap">
            <GiQueenCrown className="relative top-[2px]" />
            <p>Quality product</p>
            <GiQueenCrown className="relative top-[2px]" />
            <p>Shipping across India</p>
            <GiQueenCrown className="relative top-[2px]" />
            <p>Best price guaranteed</p>
            <GiQueenCrown className="relative top-[2px]" />
            <p>24/7 Support</p>
          </div>
        </Marquee>
  );
}
