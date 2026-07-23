import React from "react";
import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import { ConicButton } from "@/components/ConicButton";

export const metadata: Metadata = {
  title: "How Cricket Betting Odds Work: Formats & Value Explained",
  description:
    "Confused by cricket betting odds? Learn how decimal and fractional odds work, how to calculate implied probability, and how to spot real betting value.",
  alternates: {
    canonical: "/how-cricket-betting-odds-work/",
  },
};

export default function CricketBettingOddsPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-8 select-none">
      <div className="w-full flex flex-col lg:flex-row gap-8">
        
        {/* Left Sidebar */}
        <div className="hidden lg:block lg:w-1/4">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 flex flex-col gap-8 text-left">
          
          {/* Main Title Banner */}
          <section className="w-full bg-[#0c1322] border border-[#007BFF]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-lg shadow-black">
            <h1 className="text-[#00E5FF] font-black text-2xl md:text-3xl tracking-wide leading-tight">
              Cricket Betting Odds Explained: Format & Value
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Is &quot;5/2&quot; better than &quot;3.50&quot;? Understanding the math behind the odds is the first step to identifying &quot;value&quot;—the golden rule of professional betting. If you don&apos;t understand the numbers, you&apos;re not betting; you&apos;re guessing.
            </p>
          </section>

          {/* Section: Decimal vs. Fractional Odds */}
          <section className="w-full bg-[#0c1322] border border-[#007BFF]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6">
            <h2 className="text-[#00E5FF] font-black text-xl md:text-2xl tracking-wide border-b border-[#007BFF]/10 pb-2">
              Decimal vs. Fractional Odds
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Different platforms display odds in different formats. Knowing how to convert them is a basic requirement:
            </p>
            <div className="flex flex-col gap-4">
              <div className="bg-[#05080f] p-5 rounded-2xl border border-[#007BFF]/5 shadow-md">
                <h4 className="text-white font-extrabold text-base mb-2">
                  Decimal Odds (e.g., 2.00)
                </h4>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  These are the most common in modern online betting. To calculate your total return, multiply your stake by the decimal. (Stake x Odds = Total Payout).
                </p>
              </div>
              <div className="bg-[#05080f] p-5 rounded-2xl border border-[#007BFF]/5 shadow-md">
                <h4 className="text-white font-extrabold text-base mb-2">
                  Fractional Odds (e.g., 5/2)
                </h4>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  Common in traditional markets. This shows your potential profit relative to your stake. A 5/2 odd means for every 2 units you bet, you make 5 units of profit.
                </p>
              </div>
              <div className="bg-[#05080f] p-5 rounded-2xl border border-[#007BFF]/5 shadow-md">
                <h4 className="text-white font-extrabold text-base mb-2">
                  Conversion
                </h4>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  To convert 5/2 to decimal, divide 5 by 2 (2.5) and add 1 (3.5).
                </p>
              </div>
            </div>
          </section>

          {/* Section: Implied Probability */}
          <section className="w-full bg-[#0c1322] border border-[#007BFF]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6">
            <h2 className="text-[#00E5FF] font-black text-xl md:text-2xl tracking-wide border-b border-[#007BFF]/10 pb-2">
              Implied Probability
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Every set of odds represents the bookmaker’s estimation of an event&apos;s probability.
            </p>
            <div className="flex flex-col gap-4">
              <div className="bg-[#05080f] p-5 rounded-2xl border border-[#007BFF]/5 shadow-md">
                <h4 className="text-white font-extrabold text-base mb-2">
                  The Math
                </h4>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  Divide 1 by the decimal odds to find the percentage. For example, odds of 2.00 imply a 50% chance (1 \div 2.00 = 0.50).
                </p>
              </div>
              <div className="bg-[#05080f] p-5 rounded-2xl border border-[#007BFF]/5 shadow-md">
                <h4 className="text-white font-extrabold text-base mb-2">
                  The Margin
                </h4>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  If you add up the implied probabilities of all outcomes in a match (e.g., Team A winning + Team B winning), the total will always be greater than 100%. That &quot;extra&quot; percentage is the bookmaker&apos;s margin (the house edge).
                </p>
              </div>
            </div>
          </section>

          {/* Section: Spotting "Value" */}
          <section className="w-full bg-[#0c1322] border border-[#007BFF]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4">
            <h2 className="text-[#00E5FF] font-black text-xl md:text-2xl tracking-wide border-b border-[#007BFF]/10 pb-2 mb-2">
              Spotting &quot;Value&quot;
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Value is the difference between the actual probability of an event and the probability implied by the odds. If you believe a team has a 60% chance to win, but the odds (1.50) imply only a 66% chance, there is no value. If the odds are 2.00 (implying 50%), you have found a positive value bet.
            </p>
          </section>

          {/* Section: FAQs */}
          <section className="w-full bg-[#0c1322] border border-[#007BFF]/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6">
            <h2 className="text-[#00E5FF] font-black text-xl md:text-2xl tracking-wide border-b border-[#007BFF]/10 pb-2">
              FAQs
            </h2>
            <div className="flex flex-col gap-4">
              <div className="bg-[#05080f] p-5 rounded-2xl border border-[#007BFF]/5 shadow-md">
                <h4 className="text-white font-extrabold text-base mb-2">
                  Which odds format is best for beginners?
                </h4>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  Decimal odds are generally considered the easiest to work with because they allow for quick calculations of your total payout.
                </p>
              </div>
              <div className="bg-[#05080f] p-5 rounded-2xl border border-[#007BFF]/5 shadow-md">
                <h4 className="text-white font-extrabold text-base mb-2">
                  How do I calculate if a bet has value?
                </h4>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  Multiply your estimated probability of an outcome by the decimal odds. If the result is greater than 1, the bet has positive expected value.
                </p>
              </div>
            </div>
          </section>

          {/* Promotional Banner */}
          <section className="w-full bg-[#0c1322] border border-[#007BFF]/10 rounded-3xl p-6 md:p-8 text-center flex flex-col items-center gap-4">
            <h3 className="text-[#00E5FF] font-black text-xl md:text-2xl uppercase tracking-wider">
              Want a Practice Account First?
            </h3>
            <p className="text-gray-200 text-sm md:text-base max-w-xl font-semibold leading-relaxed">
              Ask our official WhatsApp support agents for a FREE trial Demo ID. Explore the platform and test out these betting guides risk-free!
            </p>
            <div className="pt-2">
              <ConicButton text="Get Your Free Demo ID Now" />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
