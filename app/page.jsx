import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Your Thoughts</span>
      </h1>
      <p className="desc text-center">
        Blogger is an open-source platform for sharing your thoughts and discover the modern world. 
      </p>
      
      <Feed />
    </section>
  );
}

export default Home;
