import { colors } from "../utils/colors";
import { Locations } from "./Locations";
import { Subjects } from "./Subjects";

export interface TeacherType {
  title: string;
  image: any;
  subtitle: string;
  color: string;
  location: string;
}

export const Teachers = [
  {
    title: "Cassie Valdez",
    image: require("../assets/cassie.png"),
    subtitle: Subjects.BIOLOGY,
    color: colors.pink,
    location: Locations.DISTRICTS,
  },
  {
    id: 1,
    title: "Paul Simons",
    image: require("../assets/paul.png"),
    subtitle: Subjects.CHEMISTRY,
    color: colors.darkGrey,
    location: Locations.DISTRICTS,
  },
  {
    id: 2,
    title: "Graham Osbor",
    image: require("../assets/graham.png"),
    subtitle: Subjects.PHYSICS,
    color: colors.lightGrey,
    location: Locations.ISLAND,
  },
  {
    id: 3,
    title: "Simon Patrick",
    image: require("../assets/simon.png"),
    subtitle: Subjects.COMPUTERSCIENCE,
    color: colors.brown,
    location: Locations.PROVINCE,
  },
  {
    id: 4,
    title: "Simon Olivier",
    image: require("../assets/graham.png"),
    subtitle: Subjects.PHYSICS,
    color: colors.lightGrey,
    location: Locations.PROVINCE,
  },
];
