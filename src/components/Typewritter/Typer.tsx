import * as React from "react";

type Props = {
  text: string;
  duration?: number;

  onTypingDone: () => void;
};

/**
 * A minimal typing effect.
 *
 * @todo Implement hooks
 *
 * @param props text, duration, onTypingDone
 * @returns Typing effect as Text
 */
const Typer: React.FC<Props> = ({ text, duration = 30, onTypingDone }) => {
  const [state, setState] = React.useState(0);

  React.useEffect(() => {
    if (state < text.length) {
      const timeout = setTimeout(() => setState((prev) => prev + 1), duration);

      return () => clearTimeout(timeout);
    }

    onTypingDone();
  }, [text, duration, state, onTypingDone]);

  return <>{text.substring(0, state)}</>;
};

export default Typer;
