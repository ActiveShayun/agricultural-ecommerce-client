import { MdOutlineAlarmOn } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import Button from "../../shared/btn/Button";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    once: true
});

const WhyUs = () => {
    return (
        <div className="my-16">
            <div className="lg:text-center mb-4 lg:mb-10 px-4">
                <h2 className='text-[42px] font-medium lg:mb-4'>Why Us</h2>
                <p>
                    We specialize in delivering durable and innovative fencing solutions built to last. With
                    <span className="lg:block">a focus on quality and trust, we help secure spaces across industries and</span>
                    communities.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10">
                <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    className="bg-linear-to-tl from-[#a2c8ee] to-[#f2f4f6] p-10 space-y-4 rounded-md lg:relative lg:top-16">
                    <p><MdOutlineAlarmOn className="w-10 h-12" /></p>
                    <h3 className="text-[25px] font-medium">Unmatched Durability with Corrosion-Free Technology</h3>
                    <p>Our JF-270 barbed wire features a robust 270 GSM zinc coating, ensuring superior resistance against rust and corrosion. Paired with stainless steel binding wire, our fencing solutions are designed to withstand harsh environmental conditions, offering longevity and reliability.</p>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="bg-[#0a4a87] text-white p-10 space-y-4 rounded-md">
                    <p><IoSettings className="w-10 h-12" /></p>
                    <h3 className="text-[25px] font-medium">Customer-Centric Approach</h3>
                    <p>At JF Products, customer satisfaction is paramount. We pride ourselves on delivering timely services, maintaining transparent communication, and ensuring a seamless purchasing experience. Our commitment to excellence is reflected in the positive feedback from our valued clients.</p>
                </div>
                <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    className="bg-linear-to-tl from-[#a2c8ee] to-[#f2f4f6] p-10 space-y-4 rounded-md lg:relative lg:top-16">
                    <p><CiSettings className="w-10 h-12" /></p>
                    <h3 className="text-[25px] font-medium">Innovative and Diverse Product Range</h3>
                    <p>We offer a wide array of fencing solutions, including Polyhex Mesh, Australian Trellis, and GI Poultry Mesh, catering to various needs from agricultural to residential applications. Our products combine functionality with aesthetic appeal, ensuring both security and style.</p>
                </div>
            </div>
            <div className="flex justify-center lg:mt-24 mt-8">
                <Button text={'Contact Us'} />
            </div>

        </div>
    );
};

export default WhyUs;