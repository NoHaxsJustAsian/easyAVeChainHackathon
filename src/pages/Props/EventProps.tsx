import TagProps from "./TagProps";

export default interface EventProps {
  _id: string;
  name: String;
  location: string;
  dateTime: Date;
  image: string;
  tags: TagProps[];
  description: String;
  popularity: Number;
}
