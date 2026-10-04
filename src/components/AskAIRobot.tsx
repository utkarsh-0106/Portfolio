import { Link, useLocation } from 'react-router-dom';

export default function AskAIRobot() {
  const location = useLocation();

  if (location.pathname === '/ask') return null;

  return (
    <Link
      to="/ask"
      aria-label="Portfolio AI about Utkarsh's work"
      className="group fixed bottom-6 right-6 z-50 hidden md:block"
    >
      <div className="relative flex flex-col items-center">
        {/* Speech bubble */}
        <div
          className="
            absolute -left-44 -top-2 w-48
            rounded-2xl border border-purple-300/50
            bg-white px-4 py-3
            text-slate-900
            shadow-[0_0_30px_rgba(168,85,247,0.28)]
            transition-all duration-300
            group-hover:-translate-y-1
            group-hover:shadow-[0_0_42px_rgba(168,85,247,0.42)]
          "
        >
          <p className="text-base font-bold tracking-tight text-purple-600">
            Ask AI
          </p>

          <p className="mt-1 text-xs leading-4 text-slate-700">
            Ask about projects, systems, and experience.
          </p>

          {/* Speech bubble pointer */}
          <span
            className="
              absolute -right-2 top-7
              h-4 w-4 rotate-45
              border-r border-t border-purple-300/50
              bg-white
            "
          />
        </div>

        {/* Robot */}
        <div
          className="
            animate-[ask-ai-float_3.5s_ease-in-out_infinite]
            transition-transform duration-300
            group-hover:scale-105
          "
        >
          <svg
            width="128"
            height="128"
            viewBox="0 0 128 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Glow */}
            <circle
              cx="64"
              cy="64"
              r="48"
              fill="rgba(168,85,247,0.10)"
            />

            {/* Antenna */}
            <path
              d="M64 24V15"
              stroke="#A855F7"
              strokeWidth="3"
              strokeLinecap="round"
            />

            <circle
              cx="64"
              cy="12"
              r="5"
              fill="#F97316"
              stroke="#E9D5FF"
              strokeWidth="2"
            />

            {/* Head */}
            <rect
              x="28"
              y="25"
              width="72"
              height="58"
              rx="22"
              fill="#F5EFFF"
              stroke="#A855F7"
              strokeWidth="3"
            />

            {/* Face */}
            <rect
              x="37"
              y="35"
              width="54"
              height="34"
              rx="14"
              fill="#0F0A1A"
            />

            {/* Eyes */}
            <circle cx="51" cy="52" r="5" fill="#A855F7" />
            <circle cx="77" cy="52" r="5" fill="#A855F7" />

            {/* Smile */}
            <path
              d="M55 59C59 63 69 63 73 59"
              stroke="#F97316"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Side ears */}
            <rect
              x="22"
              y="43"
              width="8"
              height="18"
              rx="4"
              fill="#C084FC"
            />

            <rect
              x="98"
              y="43"
              width="8"
              height="18"
              rx="4"
              fill="#C084FC"
            />

            {/* Body — outfit inspired by Utkarsh */}
            <path
              d="M42 84C37 86 32 91 29 98L38 103L44 96V108H84V96L90 103L99 98C96 91 91 86 86 84L78 81H50L42 84Z"
              fill="#7A3F2A"
              stroke="#A86545"
              strokeWidth="3"
            />

            {/* White T-shirt */}
            <path
              d="M51 82L57 87H71L77 82L73 78H55L51 82Z"
              fill="#F8FAFC"
              stroke="#E2E8F0"
              strokeWidth="2"
            />

            {/* Overshirt center opening */}
            <path
              d="M64 88V108"
              stroke="#5B2D20"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Shirt buttons */}
            <circle cx="64" cy="94" r="1.8" fill="#E7B08F" />
            <circle cx="64" cy="101" r="1.8" fill="#E7B08F" />

            {/* Left sleeve */}
            <path
              d="M43 85C37 87 33 92 31 98"
              stroke="#7A3F2A"
              strokeWidth="9"
              strokeLinecap="round"
            />

            {/* Right sleeve */}
            <path
              d="M85 85C91 87 96 82 101 73"
              stroke="#7A3F2A"
              strokeWidth="9"
              strokeLinecap="round"
            />

            {/* Small cuff details */}
            <path
              d="M30 98L36 101"
              stroke="#A86545"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M98 76L103 70"
              stroke="#A86545"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Robot hands */}
            <circle cx="29" cy="101" r="4" fill="#C084FC" />
            <circle cx="104" cy="68" r="4" fill="#C084FC" />


            {/* Chest light */}
            <circle
              cx="64"
              cy="96"
              r="5"
              fill="#F97316"
            />

            {/* Left arm */}
            <path
              d="M43 88C34 88 30 94 29 101"
              stroke="#C084FC"
              strokeWidth="7"
              strokeLinecap="round"
            />

            {/* Right arm / pointing gesture */}
            <path
              d="M85 88C94 84 99 77 103 70"
              stroke="#C084FC"
              strokeWidth="7"
              strokeLinecap="round"
            />

            <circle
              cx="104"
              cy="68"
              r="4"
              fill="#F97316"
            />
          </svg>
        </div>

        {/* Small "Ask AI" indicator */}
        <div
          className="
            -mt-2 rounded-full
            border border-purple-400/40
            bg-slate-950/90
            px-3 py-1
            text-[10px] font-medium tracking-[0.18em]
            text-purple-300
            opacity-90
            shadow-[0_0_18px_rgba(168,85,247,0.18)]
          "
        >
          ASK / AI
        </div>
      </div>
    </Link>
  );
}
