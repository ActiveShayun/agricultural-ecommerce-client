import { MdOutlineCurrencyRupee } from "react-icons/md";
import Button from "../btn/Button";


const Card = ({ title, image, minPrice, maxPrice }) => {
    return (
        <div>
            {/* image container */}
            <div className='lg:h-56 h-[300px] w-full relative group overflow-hidden'>
                <img className='w-full h-full rounded-md object-cover group-hover:scale-125 scale-100 transition transform duration-600 ease-in-out '
                    src={image} alt={title} />
                <div className='bg-black absolute
                   top-0 left-0 w-full h-full rounded-md opacity-45'></div>
            </div>
            {/* text content */}
            <div className='mt-4'>
                <h3 className='text-lg font-bold'>{title}</h3>
                <p>
                    <span className='flex items-center justify-items-start'>
                        <MdOutlineCurrencyRupee />
                        {minPrice}  -
                        <MdOutlineCurrencyRupee />
                        {maxPrice}
                    </span>
                </p>
            </div>
            <Button text={'Shop Now'} />
        </div>
    );
};

export default Card;