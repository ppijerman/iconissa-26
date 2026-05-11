import NavigationBar from "@/src/components/navigation-bar";

type TeamMember = {
  contribution: string;
  name: string;
  role: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Vincentius Reynaldo",
    role: "Team Lead",
    contribution:
      "Led project development, coordinated the team, and oversaw system architecture and integration across frontend and backend.",
  },
  {
    name: "RBillyJ",
    role: "Frontend Developer",
    contribution:
      "Developed core researcher-facing features including onboarding, dashboard, submission flow, and rebuttal interface.",
  },
  {
    name: "Leon Alexius",
    role: "Frontend Developer",
    contribution:
      "Built main application layout, navigation, and dashboards for reviewer and editor workflows.",
  },
  {
    name: "Timothy Setiawan",
    role: "Backend Developer",
    contribution:
      "Implemented reviewer assignment, review APIs, admin management, and integrated notifications across review workflows.",
  },
  {
    name: "Mulya Salam",
    role: "Backend Developer",
    contribution:
      "Developed rebuttal, editorial decision, and notification systems, including admin management interface.",
  },
  {
    name: "Michael (mxespl)",
    role: "Backend Developer",
    contribution:
      "Built submission APIs, status tracking, and integrated notifications across submission and onboarding processes.",
  },
];

function CreditsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <NavigationBar />

      <section className="relative overflow-hidden px-4 py-12 md:px-6 md:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl" />
          <div className="absolute right-1/4 top-0 h-96 w-96 rounded-full bg-teal-300/30 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-16 space-y-4 text-center">
            <div className="mb-4 inline-block">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg">
                <svg
                  className="h-10 w-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </div>
            <h1 className="bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-800 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl">
              Website Credits
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-700 md:text-xl">
              Meet the talented team behind the ICONISSA 2026 website
            </p>
          </div>

          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="group rounded-2xl border border-emerald-100 bg-white p-8 shadow-lg transition-all duration-300 hover:border-emerald-300 hover:shadow-xl"
              >
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-xl font-bold text-white shadow-md transition-transform group-hover:scale-110">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="mb-1 truncate text-xl font-bold text-gray-800">
                      {member.name}
                    </h2>
                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 px-3 py-1">
                      <div className="h-2 w-2 rounded-full bg-emerald-600" />
                      <span className="text-sm font-semibold text-emerald-700">
                        {member.role}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Contribution
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    {member.contribution}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <section className="rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 p-8 text-center shadow-2xl md:p-12">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                Thank You
              </h2>
              <p className="text-lg leading-relaxed text-emerald-50">
                This website was built with dedication and passion to showcase
                ICONISSA 2026 and its mission towards a sustainable, green, and
                digital future for Indonesia. We hope this platform serves as a
                valuable resource for all participants and stakeholders.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default CreditsPage;
