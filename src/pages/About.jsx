const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-y items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              React
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        We love react so much, that we almost love it like JavaScript. maybe we
        love next much more then react, but only because its full stack
        framework built uppon react, so we can say that Javascript is the top,
        after that its the frameworks javascript have, like react, next,
        angular, vue, nest and so on. python is nice and fun to work with cause
        its like typing in english, but comon, do you prefer a horse over a
        Ferrari, because horse dosent need a maintance like a Ferrari?
      </p>
    </>
  );
};
export default About;
