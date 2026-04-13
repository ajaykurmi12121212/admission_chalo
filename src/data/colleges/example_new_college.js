// NAYA COLLEGE BANANE KE LIYE BAS YE FILE COPY KARO
// Aur apna data fill karo - CollegePage automatically sab handle karega!

const myCollege = {
  id: "my-college",
  name: "My College Full Name",
  shortName: "My College (SHORT)",
  code: "MCL",               // 3-4 letter code for logo circle
  location: "City, State",
  type: "Private",           // or "Government"
  established: 2000,
  campusSize: "20 Acres",
  rating: 4.2,
  totalReviews: 200,
  nirf: "#50-100",
  naac: "A",
  affiliation: "University Name",
  approval: "AICTE",
  colors: { primary: "#1a3a5c", accent: "#f37021" }, // apna brand color daalo

  news: [
    "News item 1...",
    "News item 2...",
  ],

  stories: [
    { title: "Achievement story 1", emoji: "🏆" },
    { title: "Achievement story 2", emoji: "🚀" },
  ],

  about: "College ke baare mein paragraph...",
  aboutPoints: [
    "Key point 1",
    "Key point 2",
  ],

  highlights: [
    ["Established", "2000"],
    ["Location", "City, State"],
    // ... aur add karo
  ],

  rankings: [
    { cat: "Engineering", rank: "#50-100" },
  ],

  faqs: [
    { q: "Question?", a: "Answer..." },
  ],

  courses: [
    { name: "B.Tech CSE", mode: "Full Time", seats: 300, fees: "Rs.3 L", exam: "JEE Main", duration: "4 Years" },
  ],

  fees: [
    { prog: "B.Tech", tuition: "Rs.75K/yr", hostel: "Rs.80K/yr", total: "Rs.3 L (4 yrs)", exam: "JEE Main" },
  ],

  scholarships: [
    { name: "Merit Scholarship", eligibility: "PCM > 90%", amount: "Rs.20,000" },
  ],

  cutoffs: [
    { course: "Computer Science & Engineering", gen: "100000" },
  ],

  admissions: [
    { prog: "B.Tech", eligibility: "10+2 with 45% in PCM", exam: "JEE Main", counselling: "State Counselling", seats: 300 },
  ],

  admissionDates: [
    ["Application Deadline", "June 2026"],
    ["Counselling Start", "July 2026"],
  ],

  placements: {
    highest: "Rs.30 LPA",
    average: "Rs.6 LPA",
    medianUG: "Rs.4 LPA",
    percentage: "85%",
    companies: "200+",
    totalOffers: "500+",
    ugPlaced: "300",
    topRecruiters: ["TCS", "Infosys", "Wipro", "HCL"],
    btechWise: [
      { course: "CSE", avg: "Rs.7 LPA", median: "Rs.5 LPA" },
    ],
  },

  reviews: {
    overall: 4.2,
    total: 200,
    breakdown: [
      { label: "Infrastructure", val: 4.0 },
      { label: "Academics", val: 4.2 },
      { label: "Placements", val: 4.5 },
    ],
    list: [
      { name: "Student Name", batch: "2025", course: "B.Tech CSE", rating: 4, text: "Review text..." },
    ],
  },

  facilities: [
    { name: "Library", desc: "Well-stocked library with digital resources" },
    { name: "Hostel", desc: "Separate hostels for boys and girls" },
  ],

  clubs: [
    { name: "Tech Club", role: "Technical Activities", emoji: "💻" },
    { name: "Sports Club", role: "Sports & Fitness", emoji: "⚽" },
  ],
};

export default myCollege;
