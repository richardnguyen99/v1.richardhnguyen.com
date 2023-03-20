import * as React from "react";
import clsx from "classnames";

import Typer from "./Typer";

type Props = {
  typing: string;
  swapping: string;

  typingDuration?: number;
  swappingDuration?: number;
  swappingDelay?: number;

  children?: React.ReactNode;

  onSwappingDone: (done: boolean) => void;
};

const Swapper: React.FC<Props> = ({
  typing,
  swapping,
  typingDuration = 30,
  swappingDuration = 400,
  swappingDelay = 150,
  children,
  onSwappingDone,
}) => {
  const ref = React.useRef(false);
  const [running, setRunning] = React.useState(false);
  const id = React.useId();

  const onTypingAnimationDone = React.useCallback(() => {
    if (!ref.current && onSwappingDone) {
      onSwappingDone(true);
      ref.current = true;
    }
  }, [onSwappingDone]);

  const onTypingDone = React.useCallback(() => {
    setRunning(true);
  }, []);

  return (
    <span
      id={`swapper-${id}`}
      className="inline-flex flex-col h-[96px] leading-[96px] overflow-hidden"
    >
      <span
        className={clsx("opacity-70 select-none font-mono", {
          "animate-swapOut-running": running,
          "animate-swapOut-paused": !running,
        })}
        onAnimationEnd={onTypingAnimationDone}
      >
        <Typer text={typing} onTypingDone={onTypingDone} />
      </span>
      {running && (
        <span
          className={clsx("", {
            "animate-swapIn-running": true,
          })}
        >
          {children || swapping}
        </span>
      )}
    </span>
  );
};

export default Swapper;
