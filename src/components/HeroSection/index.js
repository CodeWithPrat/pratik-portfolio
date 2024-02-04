import React from "react";
import HeroBgAnimation from "../HeroBgAnimation";
import {
    HeroContainer,
    HeroBg,
    HeroLeftContainer,
    Img,
    HeroRightContainer,
    HeroInnerContainer,
    TextLoop,
    Title,
    Span,
    SubTitle,
    ResumeButton,
    DownloadResumeButton,
} from "./HeroStyle";
import HeroImg from "../../images/pratik_rmbg.png";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";

const HeroSection = () => {
    const handleDownloadResume = () => {
        // Replace 'YOUR_FILE_ID' with the actual Google Drive file ID of your resume file
        const resumeFileId = "1xl3jU-zXBa5oiPlhlMRttW4juLqlTwQO";

        const directLink = `https://drive.google.com/uc?export=download&id=${resumeFileId}`;

        const anchor = document.createElement("a");
        anchor.href = directLink;
        anchor.download = "pratik_9902827441.pdf"; // Replace with the desired filename
        anchor.click();
    };

    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer id="Left">
                        <Title>
                            Hi, I am <br /> {Bio.name}
                        </Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <ResumeButton href={Bio.resume} target="display">
                                Check Resume
                            </ResumeButton>
                            <DownloadResumeButton onClick={handleDownloadResume}>
                                Download Resume
                            </DownloadResumeButton>
                        </div>
                    </HeroLeftContainer>
                    <HeroRightContainer id="Right">
                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    );
};

export default HeroSection;
