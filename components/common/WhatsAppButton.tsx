import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/254724174801"
            target="_blank"
            className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-4 rounded-full shadow-lg flex items-center gap-2 font-semibold z-50 hover:scale-105 transition"
        >
            <FaWhatsapp size={22} />
        </a>
    );
}