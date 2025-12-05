import React from "react";
import { Timeline } from "../Pages/Timeline";

export function TimelineDemo() {
  const data = [
    // 10th Class
    {
      title: "2019 – 2020",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-shadow-white md:text-sm dark:text-neutral-200">
            10th Class – State Board
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
            <span>
              Completed 10th grade under the State Board in Kadapa.
            </span>

            <span>
              Year of Completion: <b>2020</b>
            </span>

            <span>Kadapa, Andhra Pradesh</span>
          </div>
        </div>
      ),
    },

    // Intermediate MPC
    {
      title: "2020 – 2022",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-shadow-white md:text-sm dark:text-neutral-200">
            Intermediate (MPC)
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
            <span>
              Completed Intermediate (MPC) at Sri Chaitanya Junior College, Tirupati.
            </span>

            <span>
              Academic Years: <b>2020 – 2022</b>
            </span>

            <span>Tirupati, Andhra Pradesh</span>
          </div>
        </div>
      ),
    },

    // B.Tech CSE
    {
      title: "2022 – 2026",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-shadow-white md:text-sm dark:text-neutral-200">
            B.Tech (CSE)
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
            <span>
              Studying Bachelor of Technology (B.Tech) in Computer Science and
              Engineering at Dayananda Sagar University, Bangalore.
            </span>

            <span>
              Expected Graduation: <b>2026</b> <br />
              (Academic Years: 2022 – 2026)
            </span>

            <span>Bangalore, Karnataka</span>
          </div>
        </div>
      ),
    },
  ];

  const WorkExp = [

    {
      // id: "01",
      CompanyName: "REBERT Technologies Pvt. Ltd.",
      Role: "BackEnd Developer",
      JoBType: "Internship",
      Duration: "6Months",
      IsWorking:true,
      Location: "Pune",
      worktype:"Remote",
      Exp:"1Month"

    }
  ]
// console.log(WorkExp,'WorkExp form the timelineDemo.jsx')
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} Work={WorkExp} />
    </div>
  );
}
