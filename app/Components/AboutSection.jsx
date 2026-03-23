"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton"
import { fredoka, nunito } from "../layout";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2 space-y-1">
                <li>Java</li>
                <li>Python</li>
                <li>SQL</li>
                <li>HTML/CSSJavaScript</li>
                <li>C/C++</li>
                <li>Node.js</li>
                <li>Express.js</li>
            </ul>
        ),
    },
    
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-none pl-2 space-y-1">
                <li>Computer Science @ Bryn Mawr College</li>
                <li>Economics @ Haverford College</li>
                <li>Graduating in May 2028</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className = "text-black pt-8 md:pt-10 lg:pt-12 pb-8" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image 
                src="/images/about.jpg" 
                width={400} 
                height={400}
                alt="About image" 
                className="m x-auto md:mx-0 rounded-lg"
            />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className={`${fredoka.className} text-4xl font-bold text-[#FFA8CA] mb-2`}>
                    About Me
                </h2>
                <p className={`${nunito.className} text-base lg:text-lg`}>
                    I am a sophomore pursuing a double major in Computer Science and Economics at Bryn Mawr College.
                    I am passionate about identifying user needs and searching for the solution.
                    Through my experience in client-facing work and internships, I develop strong analytical problem-solving, customer empathy, and an abiliy
                    to collaborate across different teams.
                    I am enriching my technical experience through building products that help solve everyday problems.
                    I love reading, traveling, and trying out new cuisines!
                </p>
                <div className="flex flex-row justify-start mt-4">
                    <TabButton
                    selectTab={() => handleTabChange("skills")}
                    active={tab === "skills"}
                    >
                        {" "}
                        Skills{" "}
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("education")}
                        active={tab === "education"}
                    >
                        {" "}
                        Education{" "}
                    </TabButton>
                </div>
                <div className="mt-8">
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
    );
};

export default AboutSection;