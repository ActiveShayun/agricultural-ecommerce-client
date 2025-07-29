import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Button from "../../shared/btn/Button";
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from "react";

const Contact = () => {
    const [position, setPosition] = useState([23.8103, 90.4125]); // default fallback
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const { latitude, longitude } = pos.coords;
                    setPosition([latitude, longitude]);
                    setLoading(false);
                },
                (err) => {
                    console.error("Geolocation error:", err);
                    setLoading(false); // fallback to default
                }
            );
        } else {
            console.warn("Geolocation not supported.");
            setLoading(false);
        }
    }, []);
    return (
        <div className=" text-white mt-18 rounded-md grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
            <div className='w-full space-y-4 col-span-1 bg-[#002b55] p-12 rounded-md'>
                <h2 className='text-4xl font-medium'>Contact Us</h2>
                {/* name */}
                <div>
                    <input
                        className='border rounded-md px-4 py-2 w-full '
                        type="text"
                        placeholder='Enter your name' />
                </div>
                {/* Email */}
                <div>
                    <input
                        className='border rounded-md px-4 py-2 w-full text-white'
                        type="email"
                        placeholder='Enter your email' />
                </div>
                {/* massage */}
                <div>
                    <textarea
                        className='border rounded-md px-4 py-4 w-full text-white'
                        placeholder="Write massage">

                    </textarea>
                </div>
                {/* submit button */}
                <div>
                    <Button text={'Submit'} />
                </div>
            </div>

            {/* map */}
            <div className="col-span-2 w-full lg:h-full rounded-md h-[400px]">
                <MapContainer
                    center={position}
                    zoom={13}
                    scrollWheelZoom={true}
                    style={{ height: "100%", width: "100%", borderRadius: '10px' }} //
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            {loading ? "Loading..." : "You are here!"}
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>

        </div>
    );
};

export default Contact;