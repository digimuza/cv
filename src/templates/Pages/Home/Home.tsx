import { h } from "preact";
import { WithChildren } from "../../../types";
import { Page } from "../../Core/Page";
import { AboutMe } from "./Partials/AboutMe";
import { CodingSkills } from "./Partials/CodingSkills";
import { Contacts } from "./Partials/Contacts";
import { Experience } from "./Partials/Experience";
import { Interests } from "./Partials/Interests";
import { LanguageSkills } from "./Partials/LanguageSkills";
import { SoftSkills } from "./Partials/SoftSkills";
import { SpecificKnowledge } from "./Partials/SpecificKnowledge";
import { Testimonials } from "./Partials/Testimonials";
import { TopSection } from "./Partials/TopSection";
import { WhyMe } from "./Partials/WhyMe";

export function Home() {
  return (
    <Page class={"home"}>
      <div className="wrapper">
        <TopSection></TopSection>
        <AboutMe></AboutMe>
        <WhyMe></WhyMe>
        <Experience></Experience>
      </div>
      <SoftSkills></SoftSkills>
      <LanguageSkills></LanguageSkills>
      <CodingSkills></CodingSkills>
      <SpecificKnowledge></SpecificKnowledge>
      <Interests></Interests>
      <Testimonials></Testimonials>
      <Contacts></Contacts>
    </Page>
  );
}
