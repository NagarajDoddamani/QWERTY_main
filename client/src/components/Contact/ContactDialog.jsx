import React from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';

const ContactDialog = () => {
    return (
        // The background class is changed to 'bg-transparent' here.
        <div
            className="w-full max-w-xl bg-transparent border border-white/30 rounded-2xl p-10 flex flex-col justify-center"
        >
            <h2
                className="font-roboto text-5xl lg:text-6xl font-bold mb-4"
                style={{ color: '#7E22CE' }}
            >
                Contact <span className="text-white">us</span>
            </h2>

            <p className="font-roboto text-gray-300 text-lg leading-relaxed mb-12 max-w-md">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>

            <div className="space-y-8">
                <div className="flex items-center gap-5">
                    <FiMail
                        className="text-3xl"
                        style={{ color: '#7E22CE' }}
                    />
                    <span className="font-sans text-gray-200 text-xl">
                        :- xxxxxx@xxxx.com
                    </span>
                </div>
                <div className="flex items-center gap-5">
                    <FiPhone
                        className="text-3xl"
                        style={{ color: '#7E22CE' }}
                    />
                    <span className="font-sans text-gray-200 text-xl">
                        :- +91 XXXXXXXXXX
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ContactDialog;