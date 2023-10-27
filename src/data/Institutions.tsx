import { colors } from "../utils/colors";
import { InstitutionSubjects } from "./InstitutionSubjects";
import { Locations } from "./Locations";

export interface InstitutionType {
  title: string;
  image: any;
  subtitle: string;
  description: string;
  color: string;
  location: string;
  totalReviews: number;
  avgRating: number;
}

export const Institutions = [
  {
    title: "Victory College",
    image: require("../assets/victoryCollege.png"),
    subtitle: InstitutionSubjects.BIOLOGY,
    description:
      "Studying how CBD awareness and availability as it related to pain management alternatives.",
    color: colors.lightPurple,
    location: Locations.PROVINCE,
    totalReviews: 413,
    avgRating: 4.5
  },
  {
    id: 1,
    title: "New Montana",
    image: require("../assets/newMontana.png"),
    subtitle: InstitutionSubjects.BIOLOGY,
    description:
      "Montana Higher Educational Institute. Gampaha montana.gampaha@gmail.com",
    color: colors.lightPink,
    location: Locations.PROVINCE,
    totalReviews: 354,
    avgRating: 4.1
  },
  {
    id: 2,
    title: "Susipwan Institute",
    image: require("../assets/susipwanInstitute.png"),
    subtitle: InstitutionSubjects.BIOLOGY,
    description:
      "This is a private higher education center which conducting classes for GCE AL Students.",
    color: colors.lightBlue,
    location: Locations.ISLAND,
    totalReviews: 745,
    avgRating: 3.0
  },
  {
    id: 3,
    title: "Simon Fraser University",
    image: require("../assets/victoryCollege.png"),
    subtitle: InstitutionSubjects.BIOLOGY,
    description:
      "Studying how CBD awareness and availability as it related to pain management alternatives.",
    color: colors.lightPurple,
    location: Locations.DISTRICTS,
    totalReviews: 413,
    avgRating: 4.5
  },

  {
    id: 4,
    title: "Simon's Rock College",
    image: require("../assets/newMontana.png"),
    subtitle: InstitutionSubjects.COMPUTERSCIENCE,
    description: "Early college for gifted high schoolers",
    color: colors.lightPink,
    location: Locations.ISLAND,
    totalReviews: 354,
    avgRating: 4.1
  },
];
