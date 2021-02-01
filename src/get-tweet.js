import fetchTweetAst from './lib/fetchTweetAst';

// Regex to test a valid username, you should also test for a max length of 15, but we're not using
// the user to get the tweet
// const USERNAME = /^[a-zA-Z0-9_]+$/;
const TWEET_ID = /^[0-9]+$/;

export const getTweet = async tweetId => {
  if (tweetId.length > 40 || !TWEET_ID.test(tweetId)) {
    return null;
  }

  try {
    const ast = await fetchTweetAst(tweetId);
    return ast || null;
  } catch (error) {
    // The Twitter API most likely died
    console.error(error);
    return null;
  }
};

// const useTweet = (tweetId) => {
//   const [error, setError] = useState()
//   const [loading, setLoading] = useState(true)
//   const [ast, setAst] = useState()

//   useEffect(async () => {
//     try {
//       const ast = null // await getTweet(tweetId)
//       if (ast) {
//         setAst(ast)
//         setLoading(false)
//       } else {
//         setError('not found')
//         setLoading(false)
//       }
//     } catch (e) {
//       setError(e)
//     }
//     return () => {}
//   }, [tweetId])

//   return { error, loading, ast }
// }
