import { comments } from "../../../data/comments/comments";

export default function (req, res) {
  res.status(200).json(comments);
}
