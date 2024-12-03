import React from "react";
import ContactForm from "./ContactForm";

const ModalServices = ({ selectedPackage, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <ContactForm packageName={selectedPackage} onClose={onClose} />
            </div>
        </div>
    );
};

export default ModalServices;