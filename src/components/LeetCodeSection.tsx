"use client";
import LeetCodeStats from "./LeetCodeStats";

const LeetCodeSection = () => {
  return (
    <section
      id="leetcode"
      className="bg-background px-4 sm:px-8 py-12 sm:py-16 max-w-full mx-auto"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            LeetCode <span className="text-primary">Journey</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Consistent problem-solving and algorithmic thinking
          </p>
        </div>

        <div>
          {/* Use your actual username */}
          <LeetCodeStats username="swamyrayudu" />
        </div>
      </div>
    </section>
  );
};

export default LeetCodeSection;
