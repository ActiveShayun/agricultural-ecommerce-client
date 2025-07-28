import { FiAward } from "react-icons/fi";
import { CiFaceSmile } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";

const Trusted = () => {
    return (
        <div className='py-20 bg-gradient-to-tl from-[#002b55] to-[#07417a] rounded-md'>
            <div>
                <h2 className='text-[42px] font-medium text-white lg:text-center mb-4'>
                    Trusted by over 6K+ customers</h2>
            </div>
            <div className='text-white lg:flex justify-center items-center gap-12 space-y-4 lg:space-y-0 '>
                <div className='flex items-center gap-4'>
                    <span className='w-20 h-20 rounded-full bg-white
                     flex items-center justify-center text-black text-3xl'>
                        <FiAward />
                    </span>
                    <p>
                        <span className='text-3xl font-medium block'>Premium</span>
                        <span>Products</span>
                    </p>
                </div>
                <div className='flex items-center gap-4'>
                    <span className='w-20 h-20 rounded-full bg-white
                     flex items-center justify-center text-black text-3xl'>
                        <CiFaceSmile />
                    </span>
                    <p>
                        <span className='text-3xl font-medium block'>4000+</span>
                        <span>Google Review</span>
                    </p>
                </div>
                <div className='flex items-center gap-4'>
                    <span className='w-20 h-20 rounded-full bg-white
                     flex items-center justify-center  text-black text-3xl'>
                        <CiDeliveryTruck />
                    </span>
                    <p>
                        <span className='text-3xl font-medium block'>Delivery</span>
                        <span>Across India</span>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Trusted;