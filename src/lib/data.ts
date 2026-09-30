export type Source = {
  id: string;
  isMock: boolean;
  slug: string;
  title: string;
  author: string;
  publisher: string;
  date: string;
  type: string;
  nature: string;
  description: string;
  url?: string;
};
export type Investigation = {
  isMock: boolean;
  slug: string;
  category: string;
  verdict: string;
  title: string;
  claim: string;
  summary: string;
  publishedAt?: string;
  updatedAt?: string;
  author?: { name: string; url?: string };
  read: string;
  image: string;
  imageAlt: string;
  accent: string;
  origin: string;
  context: string;
  know: string[];
  unknown: string[];
  evidence: { title: string; body: string; type: string; date: string }[];
  sources: Source[];
  featured?: boolean;
};

// Editorial examples are explicitly marked as mock content. No sources or findings are presented as real.
const mockSource = (id: string, title: string, type: string): Source => ({
  id,
  isMock: true,
  slug: slugify(title),
  title,
  author: "Illustrative author",
  publisher: "Mock source record",
  date: "Date not specified",
  type,
  nature: "Mock record",
  description:
    "Illustrative source metadata for demonstrating Pramaan’s structured citation preview. This is not a real citation.",
});
export const investigations: Investigation[] = [
  {
    isMock: true,
    slug: "the-library-of-alexandria",
    category: "World History",
    verdict: "Context Missing",
    title: "What do we actually know about the Library of Alexandria?",
    claim:
      "The Library of Alexandria was destroyed in one catastrophic fire, erasing the knowledge of the ancient world.",
    summary:
      "The familiar story compresses centuries of change into one dramatic moment. This mock investigation demonstrates how to separate surviving accounts from later retellings.",
    read: "8 min read",
    image:
      "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Ancient stone columns in warm afternoon light",
    accent: "#b6b6a0",
    origin:
      "A chain of ancient accounts, later histories, and modern retellings. The surviving record is incomplete, and the institution’s history appears to have unfolded over time.",
    context:
      "This demonstration uses an old and widely discussed historical question to show the shape of an investigation. It does not make a researched historical finding.",
    know: [
      "The evidence record for ancient institutions is fragmentary.",
      "Later retellings can merge separate events into one memorable account.",
    ],
    unknown: [
      "A complete inventory of the collection at any one date.",
      "A single, definitive account of the institution’s end.",
    ],
    evidence: [
      {
        title: "How a source trail would be assembled",
        body: "A published investigation would compare contemporary accounts, later histories, and the provenance of surviving texts. This mock block illustrates the format only.",
        type: "Research approach · Mock",
        date: "Illustrative",
      },
    ],
    sources: [mockSource("s1", "Ancient account — illustrative record", "Primary document")],
    featured: true,
  },
  {
    isMock: true,
    slug: "einstein-and-the-bees",
    category: "Science",
    verdict: "Unverified",
    title: "Did Einstein predict that humanity would disappear without bees?",
    claim: "If bees disappeared, humans would have only four years left to live.",
    summary:
      "The quote is widely attributed to Einstein, but a confident attribution requires a traceable source. This mock entry shows how a quote investigation could present that uncertainty.",
    read: "6 min read",
    image:
      "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Honeybee collecting pollen from a flower",
    accent: "#d2ae62",
    origin:
      "Quote checks look for the earliest verifiable appearance, then follow how the wording and attribution changed over time.",
    context:
      "Illustrative mock investigation. No quote source or attribution research has been completed for this example.",
    know: ["A widely repeated attribution is not itself proof of authorship."],
    unknown: [
      "The earliest verifiable appearance of this exact wording.",
      "Whether a primary record links the statement to Einstein.",
    ],
    evidence: [
      {
        title: "Attribution trail required",
        body: "A real check would document the oldest located publication and distinguish it from later repetitions.",
        type: "Quote provenance · Mock",
        date: "Illustrative",
      },
    ],
    sources: [mockSource("s2", "Illustrative quote archive record", "Historical archive")],
  },
  {
    isMock: true,
    slug: "the-great-wall-from-space",
    category: "Internet Myths",
    verdict: "Misleading",
    title: "Can you see the Great Wall of China from the Moon?",
    claim: "The Great Wall is the only human-made structure visible from the Moon.",
    summary:
      "Visibility depends on distance, conditions, and what counts as unaided sight. The popular phrasing bundles two different claims into one.",
    read: "5 min read",
    image:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "The Great Wall winding over a green mountain ridge",
    accent: "#7f8f79",
    origin:
      "Illustrative claim lineage: a simplified visibility statement is repeated and gradually shifts from low Earth orbit to the Moon.",
    context:
      "Mock content for demonstrating an internet myth investigation. No source verification is represented.",
    know: ["Claims about visibility should distinguish low Earth orbit from lunar distance."],
    unknown: ["Exact viewing conditions behind any specific observation."],
    evidence: [
      {
        title: "Clarify the distance in the claim",
        body: "The first step is to distinguish the viewing distance and conditions being described.",
        type: "Claim analysis · Mock",
        date: "Illustrative",
      },
    ],
    sources: [mockSource("s3", "Illustrative observation record", "Official organization")],
  },
  {
    isMock: true,
    slug: "the-midnight-sun-and-sleep",
    category: "Medicine & Health",
    verdict: "Partially Supported",
    title: "Does a full moon meaningfully disrupt sleep?",
    claim: "People sleep significantly worse whenever there is a full moon.",
    summary:
      "Research on lunar phases and sleep has not produced one simple answer. Study design, sample size, and replication matter to the conclusion.",
    read: "7 min read",
    image:
      "https://images.unsplash.com/photo-1532978379173-523e16f371f2?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Bright full moon above a dark horizon",
    accent: "#8895a2",
    origin:
      "A popular belief intersecting with a scientific question that can be tested using sleep measurements and controlled analysis.",
    context: "Mock record. Findings and citations are intentionally not asserted.",
    know: ["Anecdotes cannot establish the size or cause of an effect."],
    unknown: ["Whether any effect is consistent, practically meaningful, and replicated."],
    evidence: [
      {
        title: "Compare study methods",
        body: "A complete review would compare measurements, participant counts, and whether findings were independently replicated.",
        type: "Research synthesis · Mock",
        date: "Illustrative",
      },
    ],
    sources: [mockSource("s4", "Illustrative sleep research record", "Academic research")],
  },
  {
    isMock: true,
    slug: "the-ancient-zero",
    category: "Indian History",
    verdict: "Supported",
    title: "How did zero become a number?",
    claim:
      "The development of zero as a number has a significant history in the Indian mathematical tradition.",
    summary:
      "A careful account distinguishes the use of placeholders from zero as a number and traces how mathematical ideas moved across languages and scholarly communities.",
    read: "9 min read",
    image:
      "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Intricate carved stone detail at a historic temple",
    accent: "#bd9272",
    origin:
      "A historical question about notation, mathematical concepts, and the surviving manuscripts that document them.",
    context:
      "Example verdict label only. The entry is mock content and does not represent completed research.",
    know: ["A serious history distinguishes notation from the abstract concept it represents."],
    unknown: ["The precise path of every intermediate transmission and adaptation."],
    evidence: [
      {
        title: "Separate notation from concept",
        body: "A historical investigation would compare dated manuscripts and scholarly interpretations rather than assume one moment of invention.",
        type: "Historical method · Mock",
        date: "Illustrative",
      },
    ],
    sources: [mockSource("s5", "Illustrative mathematical manuscript record", "Book")],
  },
  {
    isMock: true,
    slug: "lightning-never-strikes-twice",
    category: "Science",
    verdict: "False",
    title: "Does lightning never strike the same place twice?",
    claim: "Lightning never strikes the same place twice.",
    summary:
      "The saying is a metaphor, not a reliable description of lightning. A complete fact check would show how repeated strikes are recorded and under what conditions.",
    read: "4 min read",
    image:
      "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Lightning illuminating a night sky",
    accent: "#8797a4",
    origin:
      "A familiar expression has been repeated as a literal claim, detached from its figurative use.",
    context:
      "Mock entry: verdict included to demonstrate classification range; no underlying research is claimed.",
    know: ["Metaphors should not be treated as measurements."],
    unknown: ["The frequency for a particular site without a defined period and dataset."],
    evidence: [
      {
        title: "Test the literal claim",
        body: "A real investigation would compare records of repeated strikes against the literal wording.",
        type: "Claim check · Mock",
        date: "Illustrative",
      },
    ],
    sources: [mockSource("s6", "Illustrative weather record", "Dataset")],
  },
  {
    isMock: true,
    slug: "the-quote-about-history",
    category: "Famous Quotes",
    verdict: "Disputed",
    title: "Who first said that history repeats itself?",
    claim: "The phrase “History repeats itself” was first written by one specific famous author.",
    summary:
      "Short sayings often have multiple versions and a long attribution trail. Pinning down an origin means finding dated appearances, not just familiar names.",
    read: "6 min read",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Open notebook and fountain pen on a desk",
    accent: "#aa8976",
    origin:
      "Quote origins are built from the earliest located instances and careful comparison of wording and context.",
    context: "Demonstration only; this entry contains no verified quote provenance.",
    know: ["Similar phrasing may predate the version most commonly shared."],
    unknown: ["The earliest appearance of every wording variant."],
    evidence: [
      {
        title: "Trace versions over time",
        body: "A real review would document each located instance with publication details and page references.",
        type: "Text history · Mock",
        date: "Illustrative",
      },
    ],
    sources: [mockSource("s7", "Illustrative quotation bibliography", "Book")],
  },
  {
    isMock: true,
    slug: "what-a-census-can-tell-us",
    category: "Statistics & Data",
    verdict: "Context Missing",
    title: "What does a headline statistic leave out?",
    claim: "A single percentage describes the experience of everyone in a population equally.",
    summary:
      "A percentage needs its denominator, sample, date, geography, and measurement method. Without those details, comparisons can mislead.",
    read: "7 min read",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Data charts and graphs on a computer screen",
    accent: "#80938d",
    origin:
      "Statistical claims often travel farther than their original survey or dataset documentation.",
    context: "Generic mock example: no real statistic is used.",
    know: ["Every statistic has a population, measurement, and timeframe."],
    unknown: ["Representativeness without sampling and methodology details."],
    evidence: [
      {
        title: "Reconstruct the denominator",
        body: "A real check identifies who was counted, what was measured, where, and when.",
        type: "Statistical method · Mock",
        date: "Illustrative",
      },
    ],
    sources: [mockSource("s8", "Illustrative dataset documentation", "Dataset")],
  },
];

export const categories = [
  "History",
  "Indian History",
  "World History",
  "Science",
  "Technology",
  "Economics",
  "Society",
  "Constitution & Law",
  "Geography",
  "Culture",
  "Religion & Mythology",
  "Medicine & Health",
  "Politics & Governance",
  "Internet Myths",
  "Viral Claims",
  "Famous Quotes",
  "Statistics & Data",
];

export function slugify(value: string) {
  return value
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const allSources = investigations
  .flatMap((item) => item.sources)
  .filter((source, i, all) => all.findIndex((x) => x.id === source.id) === i);
