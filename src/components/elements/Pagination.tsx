import React from "react";

const Pagination: React.FC = () => {
  return (
    <nav
      className="flex flex-col self-end mt-28 max-w-full text-base leading-tight text-center text-[color:var(--sds-color-text-default-default)] w-[703px] max-md:mt-10"
      aria-label="Pagination"
    >
      <div className="flex gap-7 self-start">
        <span className="text-green-300 opacity-[var(--sds-size-stroke-border)] w-[var(--sds-size-icon-medium)]">
          <strong className="font-bold text-green-300">/1/</strong>
        </span>
        <a
          href="#"
          className="opacity-[var(--sds-size-stroke-border)] w-[var(--sds-size-icon-medium)]"
        >
          2
        </a>
        <a
          href="#"
          className="opacity-[var(--sds-size-stroke-border)] w-[var(--sds-size-icon-medium)]"
        >
          3
        </a>
        <span className="my-auto opacity-[var(--sds-size-stroke-border)] w-[var(--sds-size-icon-medium)]">
          -
        </span>
        <a
          href="#"
          className="opacity-[var(--sds-size-stroke-border)] w-[var(--sds-size-icon-medium)]"
        >
          8
        </a>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a2e4f0b196ee056abd0d505e586676a2b141d943fc600655958af82c2c71882?placeholderIfAbsent=true&apiKey=4d41f6c15a964c1bb94820575475574a"
        alt=""
        className="object-contain mt-3 w-full aspect-[1000] max-md:max-w-full"
      />
    </nav>
  );
};

export default Pagination;
