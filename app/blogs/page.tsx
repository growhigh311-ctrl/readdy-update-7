import React from "react";
import Link from "next/link";
import { Sidebar } from "@/components/Sidebar";
import { ConicButton } from "@/components/ConicButton";
import { CONFIG } from "@/utils/config";

export default function BlogsPage() {
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
              Reddy Anna Blogs & Betting Guides
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Welcome to the official Reddy Anna Blog portal. Here, our expert team publishes the latest betting strategies, cricket odds guides, match statistics, tournament predictions, and platform update announcements to help you maximize your success.
            </p>
          </section>

          {/* Grid of Blogs */}
          <section className="w-full flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Cricket Betting Odds Explained: Format & Value",
                  date: "May 25, 2026",
                  desc: "Is \"5/2\" better than \"3.50\"? Understanding the math behind the odds is the first step to identifying \"value\"—the golden rule of professional betting. If you don't understand the numbers, you're not betting; you're guessing.",
                  link: "/how-cricket-betting-odds-work/",
                  linkText: "Show More",
                  isExternal: false
                },
                {
                  title: "How to Wager on IPL 2026 Live Sessions",
                  date: "May 24, 2026",
                  desc: "Learn session betting strategies (6-over, 10-over runs), player outcome props, and ball-by-ball hedging systems to manage risks and lock in profits during active matches.",
                  link: CONFIG.whatsappUrl,
                  linkText: "Read Full Article",
                  isExternal: true
                },
                {
                  title: "Understanding Betting Exchanges: Lay & Back Model",
                  date: "May 20, 2026",
                  desc: "A beginner's guide to trading live cricket odds on Reddy Anna Tiger & Sky Exchanges. Understand what backing and laying means, and how to operate like a bookmaker.",
                  link: CONFIG.whatsappUrl,
                  linkText: "Read Full Article",
                  isExternal: true
                },
                {
                  title: "How to Instantly Claim & Use Your Welcome Bonus",
                  date: "May 15, 2026",
                  desc: "Get details on how to set up your verified ID via WhatsApp, deposit starting at just ₹100, and claim your welcome bonus package to play risk-free.",
                  link: CONFIG.whatsappUrl,
                  linkText: "Read Full Article",
                  isExternal: true
                },
                {
                  title: "Top 5 Live Casino Games to Explore in India",
                  date: "May 10, 2026",
                  desc: "An extensive review of local live dealer card games including Teen Patti, Andar Bahar, Muflis, and Dragon Tiger. Find out about RNG fair-play mechanisms.",
                  link: CONFIG.whatsappUrl,
                  linkText: "Read Full Article",
                  isExternal: true
                }
              ].map((blog, idx) => (
                <div
                  key={idx}
                  className="bg-[#0c1322] border border-[#007BFF]/10 hover:border-[#007BFF]/25 rounded-2xl p-5 md:p-6 shadow-md hover:scale-[1.002] transition-all flex flex-col gap-3 group"
                >
                  <div className="text-xs text-gray-400 font-bold bg-[#05080f] self-start px-2.5 py-1 rounded-md border border-[#007BFF]/5">
                    📅 {blog.date}
                  </div>
                  <h4 className="text-white font-extrabold text-base md:text-lg tracking-wide group-hover:text-amber-300 transition-colors">
                    {blog.title}
                  </h4>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                    {blog.desc}
                  </p>
                  {blog.isExternal ? (
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00E5FF] hover:text-[#007BFF] text-xs font-black self-start mt-2 border-b border-dashed border-[#00E5FF]/50 hover:border-[#007BFF]/50 pb-0.5"
                    >
                      {blog.linkText}
                    </a>
                  ) : (
                    <Link
                      href={blog.link}
                      className="text-[#00E5FF] hover:text-[#007BFF] text-xs font-black self-start mt-2 border-b border-dashed border-[#00E5FF]/50 hover:border-[#007BFF]/50 pb-0.5"
                    >
                      {blog.linkText}
                    </Link>
                  )}
                </div>
              ))}
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
