import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="mt-[200px] bg-[#244D3F] text-white p-10 space-y-12">
            <div className="text-center space-y-5 ">
                <h2 className="text-5xl font-extrabold">KeenKeeper</h2>
                <p className="text-[#FAFAFA]">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <div className="text-center space-y-3">
                    <h2 className="text-xl font-semibold">Social Links</h2>
                    <div className="flex gap-3 justify-center items-center">
                        <FaInstagram />
                        <FaFacebook />
                        <FaXTwitter />
                    </div>

                </div>
            </div>

            <div className="flex justify-around items-center ">
                <p>© 2026 KeenKeeper. All rights reserved.</p>
                <div className="flex gap-5">

                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>

            </div>

        </div>
    );
};

export default Footer;