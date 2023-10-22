import { RefObject } from "react";
import { SpinnerIcon } from "./Icons";

export const Spinner = ({ ref }: { ref: RefObject<HTMLDivElement> }) => {
  return (
    <div
      ref={ref}
      className="col-span-1 my-8 flex w-full items-center justify-center"
    >
      <SpinnerIcon className="!w-[64px]" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};
