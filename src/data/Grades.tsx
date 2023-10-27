export interface GradeType {
  title?: string;
  id?: number;
  image?: any;
  type: "grade";
}

export const Grades : GradeType[] = [
  {
    title: "Arts",
    image: require("../assets/art.png"),
    type: "grade"
  },
  {
    id: 1,
    title: "Science",
    image: require("../assets/science.png"),
    type: "grade"
  },
  {
    id: 2,
    title: "Maths",
    image: require("../assets/maths.png"),
    type: "grade"
  },
  {
    id: 3,
    title: "Commerce",
    image: require("../assets/commerce.png"),
    type: "grade"
  },
];
