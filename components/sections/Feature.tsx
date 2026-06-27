"use client";

import { Features } from "@/lib/constants";

export const Feature = () => {
  return (
    <div className="mx-auto max-w-330">
      <div
        className="
            grid items-stretch gap-4 rounded-lg bg-main-mix-bg/50
            px-4 py-6
            grid-cols-1
            sm:grid-cols-2
            lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-7
          "
      >
        {Features.map((feature, index) => {
          const Icon = feature.icon;
          const isLastInRow = (index + 1) % 2 === 0;
          const isLastOverall = index === Features.length - 1;
          return (
            <div
              key={feature.id}
              className="
                  group relative flex flex-1 cursor-pointer items-center
                  gap-3 rounded-md px-3 py-3 lg:py-2
                "
            >
              <div
                className="shrink-0 text-gray group-hover:text-main"
                style={{
                  transition:
                    "color 0.35s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                }}
              >
                <Icon
                  size={36}
                  strokeWidth={1.5}
                  className="block transition-transform duration-350 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-12 group-hover:scale-110"
                />
              </div>

              <div className="min-w-0">
                <p className="font-(--title_typo-font-family) text-base sm:text-lg leading-tight text-(--title_typo-color) transition-colors duration-300 ease-out group-hover:text-main">
                  {feature.title}
                </p>

                <p className="mt-0.5 font-(--body_typo-font-family) text-sm text-(--body_typo-color)">
                  {feature.desc}
                </p>
              </div>

              {!isLastOverall && (
                <div className="ml-auto hidden h-10 w-px shrink-0 bg-border lg:block" />
              )}

              {!isLastOverall && !isLastInRow && (
                <div className="absolute inset-x-3 bottom-0 hidden h-px bg-border sm:block lg:hidden" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
