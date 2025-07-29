import paris from "../../assets/paris.svg"
import chennai from "../../assets/chennai.svg"
import goa from "../../assets/goa.svg"
import hyderabad from "../../assets/hyderabad.svg"
import kochi from "../../assets/kochi.svg"
import mumbai from "../../assets/mumbai.svg"
import Contact from "./Contact"
import Button from "../../shared/btn/Button"

const Branch = () => {
    return (
        <div className='mb-20'>
            {/* architecture */}
            <div className="flex justify-center mb-8">
                <Button text={'Our Branches'} />
            </div>
            <div className="lg:flex justify-center gap-8 grid grid-cols-3 text-center">
                <div className="bg-[#f7fce8] w-[116px] h-[104px] border border-dashed">
                    <img
                        className="mx-auto w-full h-full p-2"
                        src={paris}
                        alt="paris" />
                    <p className="bg-[#f7fce8] font-medium uppercase w-full text-center p-2 border border-dashed">Coimbatore</p>
                </div>
                <div className="w-[116px] h-[104px] border border-dashed">
                    <img
                        className="mx-auto w-full h-full p-2"
                        src={chennai}
                        alt="" />
                    <p className="font-medium uppercase w-full p-2 border border-dashed">chennai</p>
                </div>
                <div className="w-[116px] h-[104px] border border-dashed">
                    <img
                        className="mx-auto w-full h-full p-2"
                        src={hyderabad}
                        alt="" />
                    <p className="font-medium uppercase w-full p-2 border border-dashed">hyderabad</p>
                </div>
                <div className="w-[116px] h-[104px] border border-dashed">
                    <img
                        className="mx-auto w-full h-full p-2"
                        src={goa}
                        alt="" />
                    <p className="font-medium uppercase w-full  p-2 border border-dashed">goa</p>
                </div>
                <div className="w-[116px] h-[104px] border border-dashed">
                    <img
                        className="mx-auto w-full h-full p-2"
                        src={kochi}
                        alt="" />
                    <p className="font-medium uppercase w-full p-2 border border-dashed">Kochi</p>
                </div>
                <div className="w-[116px] h-[104px] border border-dashed">
                    <img
                        className="mx-auto w-full h-full p-2"
                        src={mumbai}
                        alt="" />
                    <p className="font-medium uppercase w-full p-2 border border-dashed">Mumbai</p>
                </div>
            </div>
            {/* contact section */}
            <div>
                <Contact />
            </div>
        </div>
    );
};

export default Branch;