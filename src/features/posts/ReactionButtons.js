import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdd } from "./postsSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😯",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const reactButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() =>
          dispatch(reactionAdd({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });
  return <div>{reactButtons}</div>;
};

export default ReactionButtons;
