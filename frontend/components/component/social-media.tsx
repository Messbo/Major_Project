// components/TwitterFeed.tsx

"use client"; // Mark this component as a Client Component

import { useEffect, useState } from 'react';

interface TweetData {
  id: string;
  text: string;
}

const TwitterFeed: React.FC = () => {
  const [tweets, setTweets] = useState<TweetData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
// components/TwitterFeed.tsx

const fetchTweets = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/tweets'); // Update URL to Flask API
      if (!response.ok) {
        throw new Error('Failed to fetch Tweets.');
      }
      const data = await response.json();
      setTweets(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred.');
    }
};
  useEffect(() => {
    fetchTweets();
    const interval = setInterval(fetchTweets, 10000); // Fetch new tweets every 10 seconds
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="p-4 bg-blue-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Recent Tweets on Disaster Management</h2>
      <div className="grid grid-cols-1 gap-4">
        {tweets.map(tweet => (
          <div key={tweet.id} className="p-4 border rounded-lg bg-white shadow">
            <p className="text-gray-700">{tweet.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TwitterFeed;
