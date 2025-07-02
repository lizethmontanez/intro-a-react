import { useState } from "react";

const Tweet = ({ tweet, onLike }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      onLike(tweet.id);
      setLiked(true);
    }
  };

  return (
    <div className="tweet">
      <p>{tweet.text}</p>
      <button onClick={handleLike}>
        ❤ {tweet.likes} {liked && "(Liked)"}
      </button>
    </div>
  );
};

export default Tweet;