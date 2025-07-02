import { useState, useEffect } from "react";
import TweetList from "../components/TweetList";
import TweetForm from "../components/TweetForm";

const Home = ({ user }) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const storedTweets = JSON.parse(localStorage.getItem("tweets")) || [];
    setTweets(storedTweets);
  }, []);

  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(tweets));
  }, [tweets]);

  const addTweet = (text) => {
    const newTweet = {
      id: Date.now(),
      text,
      likes: 0,
    };
    setTweets([newTweet, ...tweets]);
  };

  const likeTweet = (id) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet
      )
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div>
      <h2>Bienvenido, {user.username}</h2>
      <button onClick={handleLogout}>Cerrar sesión</button>
      <TweetForm onAddTweet={addTweet} />
      <TweetList tweets={tweets} onLike={likeTweet} />
    </div>
  );
};

export default Home;