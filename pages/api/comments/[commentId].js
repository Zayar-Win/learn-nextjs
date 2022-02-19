import { comments } from "../../../data/comments/comments";

export default function (req, res) {
  const { commentId } = req.query;
  if (req.method === "GET") {
    const deleteComment = comments.find(
      (comment) =>
        comment.id === parseInt(commentId)
    );
    res.status(200).json(deleteComment);
  } else if (req.method === "DELETE") {
    const deleteComment = comments.find(
      (comment) =>
        comment.id === parseInt(commentId)
    );
    const index = comments.indexOf(deleteComment);

    comments.splice(index, 1);
    res.status(200).json(deleteComment);
  }
}
