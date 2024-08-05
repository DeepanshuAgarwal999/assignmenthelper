import quality from "/assets/icons/quality.svg";
import ontime from "/assets/icons/ontime.svg fill.svg";
import homework from "/assets/icons/e-homework.svg";
import assignment from "/assets/icons/e-assignment-writing.svg";
import lowestprice from "/assets/icons/lowest-price.svg";
import support from "/assets/icons/24x7-support.svg";
import summarizer from "/assets/icons/pdf-summarizer.svg";
import plagi from "/assets/icons/plagi-checker.svg";
import paraphase from "/assets/icons/paraphrase-tool.svg";
import grammar from "/assets/icons/grammar-tool.svg";
import ratemypaper from "/assets/icons/rate-my-paper.svg";
import spellchecker from "/assets/icons/spell-checker.svg";
import wordcounter from "/assets/icons/word-counter.svg";
import resumebuilder from "/assets/icons/resume-builder.svg";

const AssignmentHelpingData: {
  img: string;
  heading: string;
  textContent: string;
  path: string;
}[] = [
  {
    img: summarizer,
    heading: "Plagiarism Checker",
    textContent:
      "Submit plagiarism work with our AI plagiarism-checking tool.Unique solutions are guaranteed.",
    path: "/",
  },
  {
    img: plagi,
    heading: "Paraphrase Tool",
    textContent:
      "Avoid the hassle of rewriting your entire paper by using our paraphrase tool for quick solutions.",
    path: "/",
  },
  {
    img: grammar,
    heading: "Spell Checker",
    textContent:
      "Don’t let incorrect spellings keep you from top grades. Try our spell checker for perfect writing!",
    path: "/",
  },
  {
    img: paraphase,
    heading: "Grammar Checker",
    textContent:
      "Leave your worries about grammatical errors behind by making the most of our grammar checker.",
    path: "/coming-soon",
  },
  {
    img: ratemypaper,
    heading: "Word Counter",
    textContent:
      "Keep track of your task's length with accurate word count, paragraph count, page count, and more.",
    path: "/coming-soon",
  },
  {
    img: spellchecker,
    heading: "Resume Builder",
    textContent:
      "Impress all working professionals with a custom- built resume generated from our resume builder.",
    path: "/coming-soon",
  },
  {
    img: wordcounter,
    heading: "Equation Solver",
    textContent:
      "Solve all complex mathematical equations in the blink of an eye thanks to our equation solver.",
    path: "/coming-soon",
  },
  {
    img: resumebuilder,
    heading: "Other Tools",
    textContent:
      "Try out our other tools like citation generators, essay typer, PDF summarizer, and more.",
    path: "/coming-soon",
  },
];

const TopFeatureCardData = [
  {
    img: quality,
    heading: "High-Quality Writing",
    content:
      "Our assignment writing service has helped thousands of students improve their grades. We guarantee the highest quality writing at all times.",
  },
  {
    img: ontime,
    heading: "Timely Submissions",
    content:
      "If you need assignments on time, we are the best option for you. Beat impossible deadlines with our 24-hour delivery for urgent papers.",
  },
  {
    img: homework,
    heading: "Friendly Policies",
    content:
      "Our student-friendly policies include a money-back guarantee. Rest assured that we’ll take responsibility for all papers.",
  },
  {
    img: assignment,
    heading: "Reliable Experts",
    content:
      "Every assignment writer on our website has completed their Master’s or Doctorate degree. Rely on them for all types of academic assistance.",
  },
  {
    img: lowestprice,
    heading: "Pocket-Friendly Services",
    content:
      "We always ensure to provide affordable services through our dynamic pricing system. Make the most use of our discounts and bonuses.",
  },
  {
    img: support,
    heading: "24/7 Availability",
    content:
      "Feel free to get in touch with our academic writers whenever you want. Send in your queries, and they'll get back to you ASAP.",
  },
];
const Countries = [
  {
    name: "UK",
    cities: [
      "London",
      "Birmingham",
      "Manchester",
      "Croydon",
      "Leeds",
      "Leicester",
      "Liverpool",
      "Luton",
      "Sheffield",
    ],
  },
  {
    name: "Canada",
    cities: [
      "London",
      "Birmingham",
      "Manchester",
      "Croydon",
      "Leeds",
      "Leicester",
      "Liverpool",
      "Luton",
      "Sheffield",
    ],
  },
  {
    name: "US",
    cities: [
      "London",
      "Birmingham",
      "Manchester",
      "Croydon",
      "Leeds",
      "Leicester",
      "Liverpool",
      "Luton",
      "Sheffield",
    ],
  },
  {
    name: "UAE",
    cities: [
      "London",
      "Birmingham",
      "Manchester",
      "Croydon",
      "Leeds",
      "Leicester",
      "Liverpool",
      "Luton",
      "Sheffield",
    ],
  },
  {
    name: "Singapore",
    cities: [
      "London",
      "Birmingham",
      "Manchester",
      "Croydon",
      "Leeds",
      "Leicester",
      "Liverpool",
      "Luton",
      "Sheffield",
    ],
  },
  {
    name: "NZ",
    cities: [
      "London",
      "Birmingham",
      "Manchester",
      "Croydon",
      "Leeds",
      "Leicester",
      "Liverpool",
      "Luton",
      "Sheffield",
    ],
  },
  {
    name: "China",
    cities: [
      "London",
      "Birmingham",
      "Manchester",
      "Croydon",
      "Leeds",
      "Leicester",
      "Liverpool",
      "Luton",
      "Sheffield",
    ],
  },
  {
    name: "Malaysia",
    cities: [
      "London",
      "Birmingham",
      "Manchester",
      "Croydon",
      "Leeds",
      "Leicester",
      "Liverpool",
      "Luton",
      "Sheffield",
    ],
  },
  {
    name: "India",
    cities: [
      "London",
      "Birmingham",
      "Manchester",
      "Croydon",
      "Leeds",
      "Leicester",
      "Liverpool",
      "Luton",
      "Sheffield",
    ],
  },
];

const testimonials = [
  {
    id: "NAH_AU45764",
    location: "Sydney - Australia",
    ratingSrc:
      "https://www.newassignmenthelpaus.com/assets/images/home/4.5_star.png",
    text: `I was having a lot of issues writing with my lengthy assignment and after taking their service, I got into contact with their customer support staff. They understood my issues with the length and assigned a PhD expert to me. With her help, I was able to complete my 20000-word assignment in just over 3 days. I truly appreciate the help of Miss Claudia and the New Assignment Help.`,
  },
  {
    id: "NAH_AU45763",
    location: "Sydney - Australia",
    ratingSrc:
      "https://www.newassignmenthelpaus.com/assets/images/home/4.5_star.png",
    text: `I have been on the lookout for a job. But even after applying for months I still couldn't get one. Turns out it was because of my resume and its poor format. Since I had no idea how to make it, I simply asked for help from these guys. Professor Carter made me a suitable resume through which I have 3 interviews in the next week.`,
  },
  // Add other testimonials here
];

export { AssignmentHelpingData, TopFeatureCardData, Countries, testimonials };
