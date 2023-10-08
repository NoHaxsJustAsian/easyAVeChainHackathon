import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import SectionWrapper from "./SectionWrapper";
import { textVariant } from "./motion";

interface ExperienceItem {
  type: string;
  title: string;
  company_name: string;
  startDate: string;
  date: string;
  points: string[];
  button?: string;
  button2?: string;
  logo?: string;
  button1Link?: string;
  button2Link?: string;
  image?: string;
  link?: string;
}

const experiences: ExperienceItem[] = [
    {
        type: 'work',
        title: "Manager",
        company_name: "Sushi Thai Garden / Phila Fusion",
        startDate: "2016/06/01",
        date: "June 2016 - August 2021",
        points: [
          "Monitored revenue and expenditures on supplies and equipment.",
          "Planned, distributed, and managed work schedules for staff, as well as organized menus, specials, and events.",
          "Oversaw inventory management and ensured proper stock levels.",
          "Obtained proper licensing and permits and maintained communication with food suppliers, event staff, and customers.",
        ],
      },
      {
        type: 'work',
        title: "Snowboard Instructor",
        company_name: "Gore Mountain",
        startDate: "2018/11/01",
        date: "November 2018 - March 2019",
        points: [
          "Provided one-on-one and group snowboarding lessons to clients of varying ages (5-50) and skill levels (beginner to expert).",
          "Offered support and monitored clients' progress systematically to help them improve their snowboarding skills.",
          "Promoted lessons, boarding passes, and services of the tuning shop to visitors.",
          "Ensured the maintenance and proper functioning of equipment during early and late operating hours.",
        ],
      },
      // Projects
      {
          type: 'project',
          title: "CampFire",
          button: "GitHub",
          button2: "Demo",
          company_name: "CS4520 Project",
          startDate: "2023/06/31",
          date: "June 2023 - June 2023",
          points: [
            "Programmed in Swift to develop software utilizing Firebase Auth, Firebase Database, and UIKit to create a To-Do list app with a focus on reflection at the end of the day",
            "Designed the app revolving around the days of the week, to limit the scope, and implemented various features such as moving tasks, marking them as complete, and editing them",
            "Features biometric authentication, dark mode, and notifications"
          ],
          button1Link: 'https://github.com/NoHaxsJustAsian/CampFire',
          button2Link: '',
        },
      {
          type: 'project',
          title: "LyricTab",
          button: "GitHub",
          button2: "Demo",
          company_name: "Personal Project",
          startDate: "2023/04/01",
          date: "April 2023 - Present",
          points: [
            "Programmed in Swift to develop software utilizing Spotify’s REST API to view music lyrics on an iOS lock screen through Live Activities",
            "Utilized MCV principles to implement a variety of thoroughly tested features including dynamically updating lyrics, and multiplatform support",
            "Implemented, deployed, and signed the app locally, with plans to deploy on the App Store",
          ],
          button1Link: 'https://github.com/NoHaxsJustAsian/LyricTab',
        },
        {
          type: 'project',
          title: "iOSChat",
          button: "GitHub",
          button2: "Demo",
          company_name: "CS4520 Project",
          startDate: "2023/06/01",
          date: "June 2023 - June 2023",
          points: [
            "Programmed using Swift, utilizing Firebase Auth to register and login users, and Firebase Database to store user data and messages",
            "Utilized MCV principles to implement live chat between users, as well as multiple screens",
          ],
          button1Link: 'https://github.com/NoHaxsJustAsian/iOSChat',
        },     
      // Volunteering
      {
        type: 'volunteering',
        title: "Brand and Marketing Lead, Project Lead",
        button: "Website",
        company_name: "FirstByte",
        startDate: "2023/01/01",
        date: "January 2023 - Present",
        points: [
          "Curate lesson plans and presentations for a younger audience",
          "Planned and taught coding fundamentals, and JavaScript basics to high schoolers at Camp Harbor View in recurrent bi-weekly lessons",
        ],
        button1Link: 'http://teachfirstbyte.org/',
      },
      {
        type: 'volunteering',
        title: "Eagle Scout Project || Gazebo",
        button: "Website",
        company_name: "Boy Scouts of America Troop 4070",
        startDate: "2012/01/01",
        date: "January 2012 - December 2021",
        points: [
          "Oversaw risk management practices while planning, coordinating, and leading troop activities",
          "Planned, fundraised over 3 thousand dollars, and constructed a gazebo for a local Buddhist temple",
          "Oversaw a construction zone, made sure safety protocols were followed, and the final project is to building code and regulation",
        ],
        button1Link: '',
      },
      {
          type: 'volunteering',
          title: "Blood Drive Ambassador",
          company_name: "American Red Cross",
          startDate: "2020/07/01",
          date: "July 2020 - March 2021",
          points: [
            "Facilitated client registration for blood donation, ensuring proper data collection",
            "Managed post-donation care, providing nourishment and other necessities to donors",
            "Maintained a sanitary environment by cleaning all surfaces between clients, adhering to COVID-19 safety guidelines",
          ],
        },
        {
          type: 'volunteering',
          title: "Emergency Room Volunteer",
          company_name: "Saratoga Hospital",
          startDate: "2020/01/01",
          date: "January 2020 - March 2020",
          points: [
            "Delivered essential amenities such as blankets, water, and food to patients to ensure their comfort",
            "Ensured the availability of medical equipment by regularly restocking throughout the hospital",
          ],
        },
];

const ExperienceCard: React.FC<{ experience: ExperienceItem }> = ({ experience }) => {
  return (
    <VerticalTimelineElement
      id="experience"
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        position: 'relative',
        padding: '5%',
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            alt={experience.company_name}
            className='w-3/4 h-3/4 object-contain'
          />
        </div>
      }
    >
      {experience.logo && (
        <img
          alt={experience.title + ' logo'}
          style={{ position: 'absolute', top: '5%', right: '5%', width: '70px', height: '70px' }}
        />
      )}

      <div>
        <h3 className='text-white text-lg font-bold'>
          {experience.link
            ? <a href={experience.link} target='_blank' rel='noopener noreferrer'>{experience.title}</a>
            : experience.title
          }
        </h3>
        <p
          className='text-secondary text-base font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <div>
        {experience.image && (
          <div className='w-1/2'>
            <img
              src={experience.image}
              alt={experience.title}
              className='h-full w-full object-cover'
            />
          </div>
        )}
        <div className={`${experience.image ? 'w-1/2' : 'w-full'} mt-5 list-disc ml-5 space-y-2`}>
          <ul>
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className='text-white-100 text-sm pl-1 tracking-wider'
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        {experience.button && (
          <motion.button
            whileHover={{ backgroundColor: "#333" }}
            transition={{ duration: 0.2 }}
            className='text-white font-bold py-2 px-4 rounded mt-4 border'
            onClick={() => window.open(experience.button1Link, "_blank")}
          >
            {experience.button}
          </motion.button>
        )}
        {experience.button2 && (
          <motion.button
            whileHover={{ backgroundColor: "#FFA500" }}
            transition={{ duration: 0.2 }}
            style={{ margin: "15px" }}
            className='text-white font-bold py-2 px-4 rounded mt-4 border '
            onClick={() => window.open(experience.button2Link, "_blank")}
          >
            {experience.button2}
          </motion.button>
        )}
      </div>
    </VerticalTimelineElement>
  );
};

const Experience: React.FC = () => {
  const sortedExperiences = experiences.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`text-center`}>
          What I have done so far
        </p>
        <h2 className={`text-center`}>
          Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {sortedExperiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
