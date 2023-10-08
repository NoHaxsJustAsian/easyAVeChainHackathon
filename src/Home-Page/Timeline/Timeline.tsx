import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import SectionWrapper from "./SectionWrapper";
import { textVariant } from "./motion";

interface ExperienceItem {
  type: string;
  title: string;
  points: string[];
  logo?: string;
  image?: string;
}

const experiences: ExperienceItem[] = [
    {
        type: 'user',
        title: "User Produced Data",
        points: [
          "This is taken from your iOS Health app",
            " ",
          "It will automatically be sent to the VeHealth app securely"
        ],
      },
      {
          type: 'project',
          title: "Health Insurance Creates Goals",
          points: [
            "The company creates and sends us health goals and thresholds for savings",
            " ",
            "It is key to remember this is before acccessing any data, and they do not have your specific metrics",
          ],
        },
        {
        type: 'client',
        title: "VeHealth dApp Recieves Data",
        points: [
          "An encrypted Smart Contract will calculate compensation and benefits",
          " ",
          "Since we have both the goals and data, we are essentially a private black box that will provide compensation",
        ],
      },
      {
          type: 'project',
          title: "NFT Minting/Updating",
          points: [
            "Once calculations and metrics are calculated, and NFT is minted/updated to reflect a snapshot of your health",
            " ",
            "Over time, your health habits will be reflected in the state of your NFT, allowing for further compensation",
          ],
        },
        {
          type: 'project',
          title: "User Receives Benefits",
          points: [
            "You are compensated with VET, scaling with how active and healthy you've been",
            " ",
            "Continued active lifestyles may increase savings and over time your NFT will reflect health",
          ],
        },     

      {
        type: 'volunteering',
        title: "Insurance Company Recieves \"Broad\" Data",
        points: [
          "We will provide the insurance with only the thresholds crossed, not specific numbers",
          " ",
          "This allows for more accurate calculations of goals while maintaining security",
        ],
      },
      {
        type: 'volunteering',
        title: "Blockchain Powers",
        points: [
          "The blockchain is proof of your data (in encrypted format)",
          " ",
          "FHE Smart Contracts ensure no one sees your data, not even us"
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
        icon={
          <div className='flex justify-center items-center w-full h-full'>
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
            {experience.title}
          </h3>
          <p
            className='text-secondary text-base font-semibold'
            style={{ margin: 0 }}
          >
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
                  className='text-white-100 text-sm pl-1 tracking-wider'>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </VerticalTimelineElement>
    );
  };

const Experience: React.FC = () => {

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
          {experiences.map((experience, index) => (
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
