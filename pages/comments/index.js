import { useState } from "react";

const CommentsList = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState(null);
  const loadCommentsHandler = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  const submitComment = async () => {
    const response = await fetch(
      "/api/comments",
      {
        method: "POST",
        body: JSON.stringify({ comment }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setComments(data);
    setComment("");
  };

  const deleteComment = async (commentId) => {
    const response = await fetch(
      `/api/comments/${commentId}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    loadCommentsHandler();
  };

  return (
    <>
      <input
        type='text'
        value={comment}
        onChange={(e) =>
          setComment(e.target.value)
        }
      />
      <button onClick={submitComment}>
        Submit comment
      </button>
      <button onClick={loadCommentsHandler}>
        Load Comments
      </button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <h2>
              {comment.id} {comment.text}
            </h2>
            <button
              onClick={() =>
                deleteComment(comment.id)
              }
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};
export default CommentsList;
