import { useState } from "react";

const CommentsList = () => {
  const [comments, setComments] = useState([]);
  const loadCommentsHandler = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };
  return (
    <>
      <button onClick={loadCommentsHandler}>
        Load Comments
      </button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <h2>
              {comment.id} {comment.text}
            </h2>
          </div>
        );
      })}
    </>
  );
};
export default CommentsList;
