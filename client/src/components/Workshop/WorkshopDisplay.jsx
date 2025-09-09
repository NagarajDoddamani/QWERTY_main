import React, { useState } from 'react';

function WorkshopDisplay() {
    const workshops = {
        2019: [
            { title: "Workshop A (2019)", img: "https://www.bing.com/th/id/OIP.lhb0YbbtSJGEbFwHFdFG7gHaGN?w=224&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", desc: "Description for 2019 A" },
            { title: "Workshop B (2019)", img: "https://www.bing.com/th/id/OIP.lhb0YbbtSJGEbFwHFdFG7gHaGN?w=224&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", desc: "Description for 2019 B" },
            { title: "Workshop C (2019)", img: "https://www.bing.com/th/id/OIP.lhb0YbbtSJGEbFwHFdFG7gHaGN?w=224&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", desc: "Description for 2019 C" },
        ],
        2020: [
            { title: "Workshop A (2020)", img: "https://www.bing.com/th/id/OIP.lhb0YbbtSJGEbFwHFdFG7gHaGN?w=224&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", desc: "Description for 2020 A" },
            { title: "Workshop B (2020)", img: "https://www.bing.com/th/id/OIP.lhb0YbbtSJGEbFwHFdFG7gHaGN?w=224&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", desc: "Description for 2020 B" },
            { title: "Workshop C (2020)", img: "https://www.bing.com/th/id/OIP.lhb0YbbtSJGEbFwHFdFG7gHaGN?w=224&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", desc: "Description for 2020 C" },
        ],
        2021: [
            { title: "Workshop A (2021)", img: "https://www.bing.com/th/id/OIP.lhb0YbbtSJGEbFwHFdFG7gHaGN?w=224&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", desc: "Description for 2021 A" },
            { title: "Workshop B (2021)", img: "https://www.bing.com/th/id/OIP.lhb0YbbtSJGEbFwHFdFG7gHaGN?w=224&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", desc: "Description for 2021 B" },
            { title: "Workshop C (2021)", img: "https://www.bing.com/th/id/OIP.lhb0YbbtSJGEbFwHFdFG7gHaGN?w=224&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", desc: "Description for 2021 C" },
        ],
        2022: [
            { title: "Workshop A (2022)", img: "https://www.bing.com/th/id/OIP.lhb0YbbtSJGEbFwHFdFG7gHaGN?w=224&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", desc: "Description for 2022 A" },
            { title: "Workshop B (2022)", img: "https://www.bing.com/th/id/OIP.lhb0YbbtSJGEbFwHFdFG7gHaGN?w=224&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", desc: "Description for 2022 B" },
            { title: "Workshop C (2022)", img: "https://www.bing.com/th/id/OIP.lhb0YbbtSJGEbFwHFdFG7gHaGN?w=224&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", desc: "Description for 2022 C" },
        ],
        2023: [
            { title: "Workshop A (2023)", img: "https://www.bing.com/th/id/OIP.lhb0YbbtSJGEbFwHFdFG7gHaGN?w=224&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", desc: "Description for 2023 A" },
            { title: "Workshop B (2023)", img: "https://www.bing.com/th/id/OIP.lhb0YbbtSJGEbFwHFdFG7gHaGN?w=224&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", desc: "Description for 2023 B" },
            { title: "Workshop C (2023)", img: "https://www.bing.com/th/id/OIP.lhb0YbbtSJGEbFwHFdFG7gHaGN?w=224&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", desc: "Description for 2023 C" },
        ],
        2024: [
            { title: "Workshop A (2024)", img: "https://www.bing.com/th/id/OIP.lhb0YbbtSJGEbFwHFdFG7gHaGN?w=224&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", desc: "Description for 2024 A" },
            { title: "Workshop B (2024)", img: "https://www.bing.com/th/id/OIP.lhb0YbbtSJGEbFwHFdFG7gHaGN?w=224&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", desc: "Description for 2024 B" },
            { title: "Workshop C (2024)", img: "https://www.bing.com/th/id/OIP.lhb0YbbtSJGEbFwHFdFG7gHaGN?w=224&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", desc: "Description for 2024 C" },
        ],
        2025: [
            { title: "Workshop A (2025)", img: "https://www.bing.com/th/id/OIP.lhb0YbbtSJGEbFwHFdFG7gHaGN?w=224&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", desc: "Description for 2025 A" },
            { title: "Workshop B (2025)", img: "https://www.bing.com/th/id/OIP.lhb0YbbtSJGEbFwHFdFG7gHaGN?w=224&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", desc: "Description for 2025 B" },
            { title: "Workshop C (2025)", img: "https://www.bing.com/th/id/OIP.lhb0YbbtSJGEbFwHFdFG7gHaGN?w=224&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", desc: "Description for 2025 C" },
        ],
    };

    const years = Object.keys(workshops).map(Number);
    const [currentYear, setCurrentYear] = useState(2019);

    // Handle navigation
    const handlePrev = () => {
        const currentIndex = years.indexOf(currentYear);
        if (currentIndex > 0) setCurrentYear(years[currentIndex - 1]);
    };
    const handleNext = () => {
        const currentIndex = years.indexOf(currentYear);
        if (currentIndex < years.length - 1) setCurrentYear(years[currentIndex + 1]);
    };

    return (
        <>
            <div className="min-h-[360px] w-full mt-12 pl-8">
                <div className="items-start mb-6 pr-10 flex flex-wrap">
                    <button onClick={handlePrev} className="px-3 rounded text-2xl font-bold">{`<`}</button>
                    <h1 className="text-2xl font-bold">Workshops - {currentYear}</h1>
                    <button onClick={handleNext} className="px-3 rounded text-2xl font-bold">{`>`}</button>
                </div>

                {/* Workshop cards */}
                <div className="flex justify-evenly gap-8 items-center flex-wrap">
                    {workshops[currentYear].map((workshop, index) => (
                        <div key={index}>
                            <img className="w-[400px] h-52" src={workshop.img} alt={workshop.title} />
                            <h2 className="font-medium text-xl">{workshop.title}</h2>
                            <p className="max-w-80">{workshop.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default WorkshopDisplay;
