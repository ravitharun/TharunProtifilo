import React from "react";
import { Timeline } from "../Pages/Timeline";

 export function TimelineDemo() {
    const data = [
        {
            title: "2022",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-shadow-white md:text-sm dark:text-neutral-200">
                        B.Tech (CSE)
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <span>Currently in my final year of Bachelor of Technology (B.Tech) in Computer Science and Engineering at Dayananda Sagar University, Bangalore.</span>
                        <span>Expected Graduation:
                            2026
                            (2022 – 2026)</span>
                        <span>Bangalore, Karnataka</span>
                    </div>
                </div>
            ),
        },
         {
            title: "2022",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-shadow-white md:text-sm dark:text-neutral-200">
                        B.Tech (CSE)
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <span>Currently in my final year of Bachelor of Technology (B.Tech) in Computer Science and Engineering at Dayananda Sagar University, Bangalore.</span>
                        <span>Expected Graduation:
                            2026
                            (2022 – 2026)</span>
                        <span>Bangalore, Karnataka</span>
                    </div>
                </div>
            ),
        },
         {
            title: "2022",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-shadow-white md:text-sm dark:text-neutral-200">
                        B.Tech (CSE)
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <span>Currently in my final year of Bachelor of Technology (B.Tech) in Computer Science and Engineering at Dayananda Sagar University, Bangalore.</span>
                        <span>Expected Graduation:
                            2026
                            (2022 – 2026)</span>
                        <span>Bangalore, Karnataka</span>
                    </div>
                </div>
            ),
        },
        
    ];

    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    );
}
