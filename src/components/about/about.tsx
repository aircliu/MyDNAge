import "../../index.css"; // Import global styles
import woman from "../../assets/stylish-woman-in-the-urban-setting-SBI-304380469 1.png";
import man from "../../assets/young-black-man-training-and-playing-with-his-white-labrador-dog-through-the-city-park-SBI-351227918 1.png";
import left from "../../assets/Left Image.png";
import { Link } from "react-router-dom";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import gradient2 from "../../assets/vector-2.png"
import line from "../../assets/Vector Line.png"

export default function About() {
  return (
    <main className="font-['Poppins',_ui-sans-serif,_system-ui] flex min-h-screen w-full items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
     <img
        src={gradient2}
        alt="Decorative corner graphic"
        className="
          absolute -top-15 left-0
          w-[500px] h-[500px]         /* bigger size—adjust as needed */
          sm:w-[400px] sm:h-[400px]   /* scale up on sm */
          lg:w-[800px] lg:h-[800px]   /* and md */
          pointer-events-none
          z-0                         /* send it behind the main content */
        "
      />
       <img
        src={gradient2}
        alt="Decorative corner graphic"
        className="
          absolute top-70 left-0
          w-[500px] h-[500px]         /* bigger size—adjust as needed */
          sm:w-[200px] sm:h-[200px]   /* scale up on sm */
          lg:w-[650px] lg:h-[650px]   /* and md */
          pointer-events-none
          z-0                         /* send it behind the main content */
        "
      />
       <img
        src={line}
        alt="Decorative corner graphic"
        className="
          absolute top-0 left-0
          w-[500px] h-[500px]         /* bigger size—adjust as needed */
          sm:w-[200px] sm:h-[200px]   /* scale up on sm */
          lg:w-[500px] lg:h-[500px]   /* and md */
          pointer-events-none
          z-0                         /* send it behind the main content */
        "
      />
      {/* CARD ----------------------------------------------------------- */}
      <div className="relative mt-16 sm:mt-20 lg:mt-24 w-full max-w-7xl rounded-2xl bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 shadow-2xl text-sm sm:text-base lg:text-lg">
        {/* TITLE  ------------------------------------ */}
        <h1 className="absolute -top-6 sm:-top-8 -left-2 sm:-left-4 lg:-left-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#393D43]">
          Our Science
        </h1>

        {/* HEADER ------------------------------------------------------- */}
        <header className="text-left">
          <h2 className="mt-6 sm:mt-8 lg:mt-10 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug text-[#393D43]">
            The rate at which you age is not just governed by your genetics—your
            lifestyle and environment also play an important role.
          </h2>

          <p className="mb-3 sm:mb-4 pt-3 sm:pt-4 text-base sm:text-lg md:text-xl lg:text-2xl leading-snug text-[#7F7F7F]">
            Liv's state-of-the-art MyDNAge clock leverages the latest epigenetic
            research to give you an accurate and reliable measure of your
            biological age.
          </p>
        </header>

        {/* BODY + IMAGE ------------------------------------------------- */}
        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-10 md:flex-row md:items-start">
          {/* TEXT BLOCK */}
          <section className="max-w-prose text-center text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-[#7F7F7F] md:text-left py-2">
            <p>
              The original MyDNAge clock was built on the pioneering work of
              Steve Horvath, Ph.D., a world-renowned geneticist and aging
              researcher at UCLA. His breakthrough in the field of epigenetics—
              the study of how external and internal factors influence gene
              expression without altering the DNA sequence—revealed that
              specific molecular changes on DNA could act as reliable biomarkers
              of aging. MyDNAge builds on Horvath's cutting-edge work, detecting
              important DNA-methylation sites across the genome to calculate
              your biological age with impressive accuracy.
            </p>
          </section>

          {/* IMAGE */}
          <img
            src={woman}
            alt="Stylish woman in an urban setting"
            className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] lg:w-[280px] lg:h-[280px] rounded-full object-cover shadow-lg flex-shrink-0 md:ml-6 lg:ml-8"
          />
        </div>

        <header className="text-left">
          <h2 className="mt-6 sm:mt-8 lg:mt-10 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug text-[#393D43]">
            What is epigenetics?
          </h2>

          <p className="pt-3 sm:pt-4 text-base sm:text-lg md:text-xl lg:text-2xl leading-snug text-[#7F7F7F]">
            Many geneticists describe the genome as the hardware of a computer.
            The epigenome, in contrast, is the software, telling your DNA
            hardware what to do. Simply explained, the epigenome provides your
            cells with instructions about where, when, and how much each gene
            should be expressed.
          </p>
        </header>

        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-10 md:flex-row md:items-start">
          {/* TEXT BLOCK */}
          <section className="text-center text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-[#7F7F7F] md:text-left py-2">
            <p className="mb-3 sm:mb-4">
              These instructions don't change your DNA sequence, but they can
              and do influence gene expression, or turning your genes on or off.
              In general, certain types of epigenetic activity, like
              methylation, can silence gene expression, which translates to the
              gene in question becoming less active and producing fewer
              associated proteins. In other cases, methylation fine-tunes gene
              activity rather than turning it off completely. The result? Your
              body can regulate which proteins are made, when they are made, and
              how much are made—helping cells respond to internal and external
              conditions without changing your underlying genetic code.
            </p>
            <p>
              That's the beauty of epigenetics: it acts like a dimmer switch for
              your genes, not a rewrite of your DNA. And this dimmer switch is
              highly responsive to your environment. Things like stress, diet,
              sleep, toxins, and physical activity can all influence methylation
              patterns and, consequently, gene activity.
            </p>
          </section>
        </div>

        <img
          src={man}
          alt="Young black man training and playing with his white labrador dog through the city park"
          className="mx-auto mb-3 sm:mb-4 w-full max-w-[240px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[480px] h-auto"
        />
        <section className="text-center text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-[#7F7F7F] md:text-left py-2">
          <p className="text-right ml-auto max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
            The epigenome, in contrast, is the software, telling your DNA
            hardware what to do.
          </p>
        </section>

        <header className="text-left">
          <h2 className="mt-6 sm:mt-8 lg:mt-10 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug text-[#393D43]">
            What is DNA methylation?
          </h2>

          <p className="pt-3 sm:pt-4 text-base sm:text-lg md:text-xl lg:text-2xl leading-snug text-[#7F7F7F]">
            Each strand of DNA in your body is made up of special building
            blocks called nucleotides. Their bases, adenine (A), guanine (G),
            cytosine (C), and thymine (T), are what make your DNA, well, yours.
            Your DNA is different from others because of the specific sequence
            of those bases, which come together to make a distinct code.
          </p>
        </header>

        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-10 md:flex-row md:items-start">
          {/* TEXT BLOCK */}
          <section className="text-center text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-[#7F7F7F] md:text-left py-2">
            <p className="mb-3 sm:mb-4">
              Methylation is one type of epigenetic program that lets your genes
              know when to increase, decrease, or stop expression by adding one
              or more methyl groups to your DNA. If epigenetics is DNA software,
              methyl groups as the high-level programming code telling the
              genome which genes to express and how quickly to express them.
            </p>
            <p className="mb-3 sm:mb-4">
              <b>MyDNAge</b> investigates thousands of age-related methylation
              sites across the genome to accurately predict an individual's
              biological age. It is even sophisticated enough to let users know
              if certain organs in their body are aging faster than others.
            </p>
            <p className="mb-3 sm:mb-4">
              DNA methylation is an incredibly dynamic process, and methylation
              programming code often changes based on our lifestyle choices and
              health status. As such, it both gives us unique insights into our
              individual health and longevity and, empowered with the right
              information, allows us to alter it through healther habits.
            </p>
          </section>
        </div>

        <header className="text-left">
          <h2 className="mt-6 sm:mt-8 lg:mt-10 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug text-[#393D43]">
            What is the Epi-Metabolic Score?
          </h2>
        </header>

        <img
          src={left}
          alt="Man exercising outside"
          className="mx-auto mb-3 sm:mb-4 w-full max-w-[240px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[480px] h-auto"
        />

        <section className="text-center text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-[#7F7F7F] md:text-left py-2">
          <p className="mb-3 sm:mb-4">
            This unique index leverages the latest scientific research to
            highlight methylation marks on dozens of genes implicated in insulin
            resistance, chronic inflammation, lipid metabolism, and energy
            regulation- all factors linked to the development of obesity and
            Type 2 diabetes. In a single index, your EMS can provide you with an
            accurate snapshot of your current metabolic efficiency and fitness.
            It can provide crucial information to help you adopt the kind of
            diet and exercise changes necessary to support a metabolism
            biologically younger than your chronological age.
          </p>
        </section>

        <header className="text-left">
          <h2 className="mt-6 sm:mt-8 lg:mt-10 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug text-[#393D43]">
            What is TrueAge?
          </h2>

          <p className="pt-3 sm:pt-4 text-base sm:text-lg md:text-xl lg:text-2xl leading-snug text-[#7F7F7F]">
            While a person's chronological age can tell the world how many years a person has walked upon the Earth, it's an individual's TrueAge, or biological age,
            that measures their body's unique pace of aging. It's driven by measurable molecular signals that can tell you how well your cells are functioning.
          </p>

          <Link to="/myDNAge" onClick={() => window.scrollTo(0, 0)} >
            <button
              type="button"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#393D43] px-6 py-3 text-lg font-semibold text-white shadow-md transition-colors hover:bg-[#2e3237] focus:outline-none"
            >
             <HiOutlineQuestionMarkCircle className="h-7 w-7 text-[#AFD5E7]" />
              <span className="text-[#AFD5E7]">Find your true age</span>
            </button>
          </Link>
        </header>

        <header className="text-left">
          <h2 className="mt-6 sm:mt-8 lg:mt-10 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug text-[#393D43]">
            Why does TrueAge matter?
          </h2>

          <p className="pt-3 sm:pt-4 text-base sm:text-lg md:text-xl lg:text-2xl leading-snug text-[#7F7F7F]">
            Your aging process is not just governed by your genetics. TrueAge is calculated by looking at epigenetic modifications, specifically methylation.
          </p>
        </header>

        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-10 md:flex-row md:items-start">
          {/* TEXT BLOCK */}
          <section className="text-center text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-[#7F7F7F] md:text-left py-2">
            <p className="mb-3 sm:mb-4">
              Epigenetic activity is driven by your environment, including vital lifestyle factors like what you eat, how much you exercise, and the quality
              of your sleep. These all have the power to affect how quickly your cells, and the organs and tissues they make up, age over time. By using MyDNAge to determine 
              your TrueAge, you can learn your pace of aging and its effects on your overall health. More importantly, you can use repeatedd MyDNAge testing to monitor
              your biological aging and measure whether different lifestyle interventions are working to slow it.
            </p>
          </section>
        </div>

        <header className="text-left">
          <h2 className="mt-6 sm:mt-8 lg:mt-10 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug text-[#393D43]">
            What is SWARM?
          </h2>

          <p className="pt-3 sm:pt-4 text-base sm:text-lg md:text-xl lg:text-2xl leading-snug text-[#7F7F7F]">
            Epigenetic changes are incredibly dynamic. That means tha trying to measure methylation can result in "noisy" data that might provide different
            results based on the time of day you take the test, natural hormonal fluctuations, or how well you slept the night before.
          </p>
        </header>

        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-10 md:flex-row md:items-start">
          {/* TEXT BLOCK */}
          <section className="text-center text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-[#7F7F7F] md:text-left py-2">
            <p className="mb-3 sm:mb-4">
              To ensure that MyDNAge is reliable over time, Liv uses a proprietary algorithm called the Signal-Weighted Age Regression Model (SWARM).
              Built in collaboration with Epimorphy and Zymo Research, a globally established biotechnology leader specializing in epigenetic measurements,
              the SWARM model helps ensure that stable, biologically meaningful signals across aging pathways are not lost in all the noise. By using SWARM
              to analyze your DNA methylation data, MyDNAge outperforms our competitors in consistency and reliability. SWARM means you can feel confident
              that you results will reflect real epigenetic activity.
            </p>
          </section>
        </div>
        
      </div>
    </main>
  );
}
