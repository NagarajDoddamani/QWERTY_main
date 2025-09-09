import React from 'react';

const FeedbackForm = () => {
    return (
        <div
            className="w-[450px] rounded-[42px] p-10 flex flex-col backdrop-filter backdrop-blur-md bg-black/20 border border-purple-500/40"
        >
            <h3 className="text-white text-center text-3xl font-semibold mb-8">Message</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div>
                    <label htmlFor="name" className="sr-only">Your name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Your name"
                        className="w-full bg-gradient-to-b from-[#332C41] to-[#1C162A] border-b border-purple-600 focus:border-[#7E22CE] text-white px-4 py-2 outline-none transition-colors rounded-t-md"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="sr-only">Your email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Your email"
                        className="w-full bg-gradient-to-b from-[#332C41] to-[#1C162A] border-b border-purple-600 focus:border-[#7E22CE] text-white px-4 py-2 outline-none transition-colors"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="sr-only">Enter the message</label>
                    <textarea
                        id="message"
                        placeholder="Enter the message"
                        rows="4"
                        className="w-full bg-gradient-to-b from-[#332C41] to-[#1C162A] border-b border-purple-600 focus:border-[#7E22CE] text-white px-4 py-2 outline-none transition-colors resize-none rounded-b-md"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-[#7E22CE] hover:bg-[#6A1AAB] text-white font-bold transition-all duration-300 shadow-lg"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default FeedbackForm;
