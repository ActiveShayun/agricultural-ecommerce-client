import { BiArrowToRight } from 'react-icons/bi';

const SliderNext = ({ nextRef, isEnd }) => {
    return (
        <button
            ref={nextRef}
            disabled={isEnd}
            className={` ${isEnd ? 'bg-gray-300 cursor-not-allowed pointer-events-none'
                :
                'bg-[#B0DD1D] text-white'} p-2 rounded-full hover:bg-gray-800`}>
            <BiArrowToRight />
        </button>
    );
};

export default SliderNext;