/**
 * The About page and the founder proof points used on the home page.
 * Copy supplied by Jessica D. Maine-Jackson. Edit the text between the quotes.
 *
 * About page blocks, in order, inside each section:
 *   { type: "p", text }        a paragraph
 *   { type: "quote", text }    a pull quote in large italic type
 *   { type: "stats" }          the three results figures (from `founder.stats`)
 *   { type: "arms" }           the two cards for Prep and Foundation (from `about.arms`)
 */

export const founder = {
  name: "Jessica D. Maine-Jackson",
  role: "Founder",
  title: "Educator & Strategic Leader",
  // Headshot shown on the home page and the About page. To replace it, save a new
  // file over /public/photos/jessica-maine-jackson.jpg (portrait, about 960 x 1310).
  photo: "/photos/jessica-maine-jackson.jpg" as string | null,
  photoAlt: "Jessica D. Maine-Jackson, founder of Foreword Forum",
  stats: [
    { figure: "100%", label: "of participating students graduated and were accepted to college" },
    { figure: "81%", label: "were awarded scholarships" },
    { figure: "$1M+", label: "in scholarship awards" },
  ],
  statsSource:
    "Across her years leading a college and career readiness program in a district ranked among the top 1% in the nation for readiness programming.",
  credentials: [
    "Corporate leadership",
    "Certified educator",
    "B.A., Communication Studies, Sam Houston State University",
    "14 years in and supporting public education",
    "Campus and district leadership",
    "Educational consultant to Dallas ISD",
    "Led multiple campuses to accreditation for excellence",
    "Founder, strategy and operations consulting firm",
    "First Vice President, Dallas Chapter, Top Ladies of Distinction",
    "Mentor, iCouldBe",
  ],
};

/** Home page section that introduces the founder and her record. */
export const founderHome = {
  label: "Who runs it",
  heading: "Educator & Strategic Leader",
  body: [
    "Jessica D. Maine-Jackson began in corporate leadership, then moved into the classroom. Over 14 years in public education she grew into campus and district leadership and served as an educational consultant to Dallas ISD. From there she turned to entrepreneurship, for the chance to make a more significant impact.",
    "Foreword Forum brings all of that experience together into the resource she saw young people needed: real access to the knowledge, guidance, and support that turn a plan into a next step.",
  ],
  link: { label: "Read her story", href: "/about#who-runs-it" },
};

type Block =
  | { type: "p"; text: string }
  | { type: "quote"; text: string }
  | { type: "stats" }
  | { type: "arms" };

export type AboutSection = { id: string; heading: string; blocks: Block[] };

export const about = {
  label: "About",
  heading: "About Foreword Forum",
  description:
    "Foreword Forum was founded in Dallas by Jessica D. Maine-Jackson, a certified educator whose college and career readiness program saw 100% of students graduate and be accepted to college.",
  lead: [
    "Most students do not fail for lack of ambition. They stall because nobody sat down with them and walked through the steps: which deadline comes first, what the FAFSA actually asks, how to talk about yourself in an essay without sounding like someone else.",
  ],
  leadQuote: "Foreword Forum exists to do that walking-through.",
  sections: [
    {
      id: "who-runs-it",
      heading: "Who runs it",
      blocks: [
        {
          type: "p",
          text: "Jessica D. Maine-Jackson founded Foreword Forum in Dallas. Students join in person in Dallas or live online from anywhere in the country.",
        },
        {
          type: "p",
          text: "She began in corporate leadership, then moved into the classroom as a teacher. She is a certified educator with a B.A. in Communication Studies from Sam Houston State University. Over 14 years in and supporting public education she moved into leadership at the campus level, then the district level, and served as an educational consultant to Dallas ISD, one of the largest school districts in the state.",
        },
        {
          type: "p",
          text: "The center of that work was a college and career readiness program she led, in a district ranked among the top 1% in the nation for readiness programming. She also led multiple campuses to accreditation for excellence. Across her years leading the program, the numbers held: 100% of participating students graduated and were accepted to college, 81% were awarded scholarships, and those awards totaled more than one million dollars.",
        },
        { type: "stats" },
        {
          type: "quote",
          text: "That is the record behind Foreword Forum. It is not a theory about what helps students. It is a method she has already run, at scale, with results that were measured.",
        },
        {
          type: "p",
          text: "From there she turned to entrepreneurship, for the chance to make a more significant impact. Across fifteen-plus years in strategy and operations, she has run her own successful consulting firm serving founders, nonprofits, school districts, and coworking spaces across Dallas-Fort Worth. The short version: she builds the systems that make things actually happen, on schedule, with the people involved treated well.",
        },
        {
          type: "p",
          text: "She also serves as First Vice President of the Dallas Chapter of Top Ladies of Distinction and mentors through iCouldBe, which keeps her in regular conversation with teenagers about what they want and what is in the way. She has two kids in North Texas schools, so the deadlines and the late-night panic are not theoretical to her.",
        },
      ],
    },
    {
      id: "why-it-is-built-this-way",
      heading: "Why it is built this way",
      blocks: [
        {
          type: "p",
          text: "Jessica has taught students with real ability and no plan, and she has worked alongside adults whose advantage was mostly that someone once showed them the steps. Encouragement by itself runs out. A checklist by itself does not get used. Students need both, from someone who keeps showing up.",
        },
        { type: "p", text: "Foreword Forum runs on two arms, and both are the real program." },
        { type: "arms" },
        {
          type: "quote",
          text: "Same curriculum, same mentors, same standard of care. How a seat is funded is a back-office detail, not a tier.",
        },
      ],
    },
    {
      id: "what-students-do",
      heading: "What students actually do",
      blocks: [
        { type: "p", text: "Our first cohort, Volume I, begins October 15, 2026." },
        {
          type: "p",
          text: "Students work through First Draft, the college and career readiness track. It covers the college and job application process, essay writing and revision, financial aid and FAFSA, test preparation, and planning for what comes after graduation, whether that is a four-year school, a two-year school, a trade, or work.",
        },
        {
          type: "p",
          text: "Each student is paired with a Co-Author, a near-peer mentor who went through the same process recently enough to remember the details.",
        },
        {
          type: "p",
          text: "The name comes from the foreword of a book: the short opening that explains why the story matters before the story starts. That is the stage these students are in. The opening pages, not the whole book.",
        },
      ],
    },
  ] satisfies AboutSection[] as AboutSection[],
  arms: [
    {
      name: "Foreword Forum Prep",
      kind: "Paid workshops and cohort seats",
      body: "Foreword Forum Prep offers paid workshops and cohort seats for families who choose that route.",
    },
    {
      name: "Foreword Forum Foundation",
      kind: "Scholarship seats",
      body: "Foreword Forum Foundation, our nonprofit arm, raises funds to cover scholarship seats as funding allows, so cost is not the reason a student sits this out.",
    },
  ],
  closing: {
    heading: "Your story starts here",
    body: "Bring your questions and your half-finished plans. We will work out the rest together.",
    cta: { label: "Write your next chapter", href: "/#waitlist" },
  },
};
