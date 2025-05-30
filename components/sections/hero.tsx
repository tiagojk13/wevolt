export default function HeroSection() {
  // ... seus hooks ...

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-[70vh] overflow-hidden pt-52 lg:pt-40" // <-- removido px-4 aqui!
    >
      {/* Background light effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-primary/20 blur-[100px] light-pulse" />
        <div className="absolute right-1/4 bottom-1/3 h-[250px] w-[250px] rounded-full bg-secondary/20 blur-[100px] light-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute left-1/3 bottom-1/4 h-[200px] w-[200px] rounded-full bg-accent/20 blur-[100px] light-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative z-10 mx-auto px-4"> {/* <-- adicionado px-4 aqui! */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-0">
          {/* Left Content */}
          <motion.div
            className="flex flex-col justify-center text-center lg:text-left"
            style={{ y, opacity }}
          >
            {/* ... resto igual ... */}
          </motion.div>

          {/* Right Content - Static Image with Glow */}
          <RevealAnimation direction="left" delay={0.8} className="flex items-center justify-center">
            <div className="relative aspect-[4/3] w-full max-w-[600px]">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 blur-md light-pulse" />
              <img
                src="/developer.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Desenvolvedor"
                className="relative h-full w-full rounded-lg object-cover"
              />
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}