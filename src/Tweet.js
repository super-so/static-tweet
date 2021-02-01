import react from 'react'
import Node from './components/html/node';
import TweetSkeleton from './components/twitter-layout/tweet-skeleton';
import components from './components/twitter-layout/components';

export const Tweet = ({ ast, loading }) => {
  return loading ? <TweetSkeleton /> : <Node components={components} node={ast[0]} />;
};