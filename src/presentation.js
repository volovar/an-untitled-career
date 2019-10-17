// Import React
import React from "react";

// Import Spectacle Core tags
import { Appear, Deck, Heading, List, ListItem, Slide, Text } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// components
import LogoGrid from "./components/LogoGrid";

// videos
import dogRun from "./assets/video/Dog Run.mp4";
import allTheGoldblum from "./assets/video/All the Goldblum I need.mp4";

// images
import bloodlust from "./assets/images/bloodlust.jpg";
import digReward from "./assets/images/dpz/dpz-dig-reward.png";
import digSurvey from "./assets/images/dpz/dpz-dig-survey.png";
import goldblumsAnon from "./assets/images/GoldblumsAnonDetail.jpg";
import imhoAbout from "./assets/images/imhopub/imho-about.png";
import imhoPost from "./assets/images/imhopub/imho-post.png";
import ocfmHome from "./assets/images/ocfm/ocfm-home-plus.png";
import ocfmPlayerPlus from "./assets/images/ocfm/ocfm-player-plus.jpg";
import ocfmPlayer from "./assets/images/ocfm/ocfm-player-og.jpg";
import sbHome from "./assets/images/sb/sb-home.png";
import sbEdit from "./assets/images/sb/sb-editor.png";
import sbProfileSketch from "./assets/images/sb/sb-sketch-profile-a.jpg";
import sbProfile from "./assets/images/sb/sb-user-popup.png";

// Require CSS
require("normalize.css");

const theme = createTheme(
    {
        primary: "#af33c1",
        secondary: "#fff",
        tertiary: "#111"
    },
    {
        primary: "SF Pro Display",
        secondary: "SF Pro Text"
    }
);

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck
                contentHeight={"68%"}
                contentWidth={"68%"}
                transition={["slide"]}
                transitionDuration={500}
                theme={theme}
            >
                {/* Title */}
                <Slide bgColor="primary">
                    <Heading
                        size={1}
                        fit
                        caps
                        lineHeight={1}
                        textColor="secondary"
                    >
                        An Untitled <br /> Career
                    </Heading>
                    <Text
                        margin="10px 0 0"
                        textColor="tertiary"
                        size={1}
                        fit
                        bold
                    >
                        The work behind a decade of jobs
                    </Text>
                </Slide>

                {/* Video section title */}
                <Slide bgColor="primary">
                    <Heading
                        size={1}
                        fit
                        caps
                        lineHeight={1}
                        textColor="secondary"
                    >
                        Animation & Video
                    </Heading>
                </Slide>

                {/* Dog run cycle */}
                <Slide bgColor="tertiary">
                    <Heading margin="0 0 0.6em" size={4} textColor="secondary">
                        Untitled (Dog Run Cycle)
                    </Heading>
                    <video loop style={{ outline: "none" }} controls>
                        <source src={dogRun} />
                    </video>
                </Slide>

                {/* Goldblum */}
                <Slide bgColor="tertiary">
                    <Heading margin="0 0 0.6em" size={4} textColor="secondary">
                        All The Goldblum I Need
                    </Heading>
                    <video
                        loop
                        style={{ outline: "none", width: "80%" }}
                        controls
                    >
                        <source src={allTheGoldblum} />
                    </video>
                </Slide>

                {/* Golblum's anonymous */}
                <Slide bgColor="tertiary">
                    <Heading margin="0 0 0.6em" size={4} textColor="secondary">
                        Goldblum's Anonymous
                    </Heading>
                    <img
                        alt="An image of the art installation Goldblum's Anonymous. Found footage piece using various Jeff Goldblum movies cut together so he's planning to defend the Earth from an alien invasion with himself."
                        style={{
                            display: "block",
                            margin: "0.5rem auto",
                            maxWidth: "74%",
                            maxHeight: "70%"
                        }}
                        src={goldblumsAnon}
                    />
                </Slide>

                {/* Bloodlust */}
                <Slide bgColor="tertiary">
                    <Heading margin="0 0 0.6em" size={4} textColor="secondary">
                        Bloodlust
                    </Heading>
                    <img
                        alt="The art installation Bloodlust at Mocad. 11 computer monitors playing short clips of violent video games."
                        style={{
                            display: "block",
                            margin: "0.5rem auto",
                            maxWidth: "74%",
                            maxHeight: "70%"
                        }}
                        src={bloodlust}
                    />
                </Slide>

                {/* Work section title */}
                <Slide bgColor="primary">
                    <Heading
                        size={1}
                        fit
                        caps
                        lineHeight={1}
                        textColor="secondary"
                    >
                        A Series of Jobs
                    </Heading>
                </Slide>

                {/* logo page */}
                <Slide bgColor="secondary" progressColor="tertiary">
                    <LogoGrid />
                </Slide>

                {/* Studyblue title */}
                <Slide bgColor="#00a2e2">
                    <Heading
                        size={1}
                        fit
                        caps
                        lineHeight={1}
                        textColor="secondary"
                    >
                        Studyblue
                    </Heading>
                    <Heading
                        margin="10px 0 0"
                        textColor="tertiary"
                        size={2}
                        bold
                    >
                        Redesign
                    </Heading>
                </Slide>

                <Slide bgColor="secondary" progressColor="tertiary">
                    <Heading margin="0 0 0.6em" size={4} textColor="tertiary">
                        Home
                    </Heading>
                    <img
                        alt="Home page for the StudyBlue."
                        style={{
                            border: "2px solid #555",
                            display: "block",
                            margin: "0.5rem auto",
                            maxWidth: "74%",
                            maxHeight: "70%"
                        }}
                        src={sbHome}
                    />
                </Slide>

                <Slide bgColor="secondary" progressColor="tertiary">
                    <Heading margin="0 0 0.6em" size={4} textColor="tertiary">
                        Flashcard Editor
                    </Heading>
                    <img
                        alt="Flash card editor for the StudyBlue."
                        style={{
                            border: "2px solid #555",
                            display: "block",
                            margin: "0.5rem auto",
                            maxWidth: "74%",
                            maxHeight: "70%"
                        }}
                        src={sbEdit}
                    />
                </Slide>

                <Slide bgColor="secondary" progressColor="tertiary">
                    <Heading margin="0 0 0.6em" size={4} textColor="tertiary">
                        User Popup
                    </Heading>
                    <div
                        style={{
                            display: "grid",
                            gridGap: "2em",
                            gridTemplateColumns: "1fr 1fr",
                            gridTemplateRows: "1fr",
                            maxHeight: "70%"
                        }}
                    >
                        <img
                            alt="Sketch of the StudyBlue profile popup."
                            style={{
                                border: "2px solid #555",
                                display: "block",
                                margin: "0.5rem auto",
                                maxWidth: "100%"
                            }}
                            src={sbProfileSketch}
                        />
                        <img
                            alt="StudyBlue profile popup."
                            style={{
                                border: "2px solid #555",
                                display: "block",
                                margin: "0.5rem auto",
                                maxWidth: "100%"
                            }}
                            src={sbProfile}
                        />
                    </div>
                </Slide>

                {/* Dominos title */}
                <Slide bgColor="#006491">
                    <Heading
                        size={1}
                        fit
                        caps
                        lineHeight={1}
                        textColor="secondary"
                    >
                        Domino's
                    </Heading>
                    <Heading
                        margin="10px 0 0"
                        textColor="tertiary"
                        size={2}
                        bold
                    >
                        Delivery Insurance
                    </Heading>
                </Slide>

                <Slide bgColor="secondary" progressColor="tertiary">
                    <Heading margin="0 0 0.6em" size={4} textColor="tertiary">
                        Survey
                    </Heading>
                    <img
                        alt=""
                        style={{
                            border: "2px solid #555",
                            display: "block",
                            margin: "0.5rem auto",
                            maxWidth: "74%",
                            maxHeight: "70%"
                        }}
                        src={digSurvey}
                    />
                </Slide>

                <Slide bgColor="secondary" progressColor="tertiary">
                    <Heading margin="0 0 0.6em" size={4} textColor="tertiary">
                        Reward Selection
                    </Heading>
                    <img
                        style={{
                            border: "2px solid #555",
                            display: "block",
                            margin: "0.5rem auto",
                            maxWidth: "74%",
                            maxHeight: "70%"
                        }}
                        src={digReward}
                    />
                </Slide>

                {/* Projects section title */}
                <Slide bgColor="primary">
                    <Heading
                        size={1}
                        fit
                        caps
                        lineHeight={1}
                        textColor="secondary"
                    >
                        Projects
                    </Heading>
                </Slide>

                {/* IMHO title */}
                <Slide bgColor="#ac8fff">
                    <Heading
                        size={1}
                        fit
                        caps
                        lineHeight={1}
                        textColor="secondary"
                    >
                        IMHO
                    </Heading>
                    <Heading
                        margin="10px 0 0"
                        textColor="tertiary"
                        size={2}
                        bold
                    >
                        Writing Platform
                    </Heading>
                </Slide>

                <Slide bgColor="secondary" progressColor="tertiary">
                    <Heading margin="0 0 0.6em" size={4} textColor="tertiary">
                        A Living Magazine
                    </Heading>
                    <img
                        style={{
                            border: "2px solid #555",
                            display: "block",
                            margin: "0.5rem auto",
                            maxWidth: "74%",
                            maxHeight: "70%"
                        }}
                        src={imhoAbout}
                    />
                </Slide>

                <Slide bgColor="secondary" progressColor="tertiary">
                    <Heading margin="0 0 0.6em" size={4} textColor="tertiary">
                        Post Page
                    </Heading>
                    <img
                        style={{
                            border: "2px solid #555",
                            display: "block",
                            margin: "0.5rem auto",
                            maxWidth: "74%",
                            maxHeight: "70%"
                        }}
                        src={imhoPost}
                    />
                </Slide>

                {/* OCFM+ title */}
                <Slide bgColor="#fc7e0f">
                    <Heading
                        size={1}
                        fit
                        caps
                        lineHeight={1}
                        textColor="secondary"
                    >
                        OCFM+
                    </Heading>
                    <Heading
                        margin="10px 0 0"
                        textColor="tertiary"
                        size={2}
                        bold
                    >
                        Chrome Extension
                    </Heading>
                </Slide>

                <Slide bgColor="secondary" progressColor="tertiary">
                    <Heading margin="0 0 0.6em" size={4} textColor="tertiary">
                        Enhanced Home
                    </Heading>
                    <img
                        style={{
                            border: "2px solid #555",
                            display: "block",
                            margin: "0.5rem auto",
                            maxWidth: "74%",
                            maxHeight: "70%"
                        }}
                        src={ocfmHome}
                    />
                </Slide>

                <Slide bgColor="secondary" progressColor="tertiary">
                    <Heading margin="0 0 0.6em" size={4} textColor="tertiary">
                        Player / Enhanced Player
                    </Heading>
                    <div
                        style={{
                            display: "grid",
                            gridGap: "2em",
                            gridTemplateColumns: "1fr 1fr",
                            gridTemplateRows: "1fr",
                            maxHeight: "70%"
                        }}
                    >
                        <img
                            style={{
                                border: "2px solid #555",
                                display: "block",
                                margin: "0.5rem auto",
                                maxWidth: "100%"
                            }}
                            src={ocfmPlayer}
                        />
                        <img
                            style={{
                                border: "2px solid #555",
                                display: "block",
                                margin: "0.5rem auto",
                                maxWidth: "100%"
                            }}
                            src={ocfmPlayerPlus}
                        />
                    </div>
                </Slide>

                {/* Final title */}
                <Slide bgColor="primary">
                    <Heading margin="0 0 0.6em" size={2} textColor="secondary">
                        Final Thoughts
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>Make lots of stuff</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>Work on projects you enjoy</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>Embrace change</ListItem>
                        </Appear>
                    </List>
                </Slide>

                {/* End */}
                <Slide bgColor="primary">
                    <Heading
                        size={1}
                        fit
                        caps
                        lineHeight={1}
                        textColor="secondary"
                    >
                        The End (So Far)
                    </Heading>
                </Slide>
            </Deck>
        );
    }
}
