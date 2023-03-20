import * as React from "react";
import Swapper from "./Swapper";
import Typer from "./Typer";

const TypeWriter = () => {
  const [state, setState] = React.useState(0);

  const next = React.useCallback(() => setState((s) => s + 1), []);

  return (
    <h1 className="box-content flex text-5xl md:text-6xl lg:h-[286px] lg:text-[64px] xl:text-[78px] lg:leading-[96px] tracking-tighter flex-nowrap">
      <span className="inline lg:hidden motion-reduce:inline">
        <p>
          Hi, <span className="font-extrabold">I&apos;m Richard!</span>
        </p>
        <p>
          This is my digital{" "}
          <span className="font-extrabold text-sky-500">notebook</span>
        </p>
        <p>
          I write about{" "}
          <span className="font-mono font-medium text-blue-400">tech</span>
        </p>
      </span>

      <span aria-hidden="true" className="hidden lg:motion-safe:block">
        <Typer text="Hi, " onTypingDone={next} />
        {state >= 1 && (
          <Swapper
            typing="**I'm Richard!**"
            swapping="I'm Richard!"
            onSwappingDone={next}
          >
            <span className="font-extrabold">I&apos;m Richard!</span>
          </Swapper>
        )}
        <br />
        {state >= 2 && <Typer text="This is my digital " onTypingDone={next} />}
        {state >= 3 && (
          <Swapper typing="{ %notes }" swapping="notes" onSwappingDone={next}>
            <span className="font-extrabold text-sky-500">notebook</span>
          </Swapper>
        )}
        <br />
        {state >= 4 && <Typer text="I write about " onTypingDone={next} />}
        {state >= 5 && (
          <Swapper typing="`tech`" swapping="notes" onSwappingDone={next}>
            <>
              <span className="font-mono font-medium text-blue-400">tech</span>
              <span>.</span>
            </>
          </Swapper>
        )}
      </span>
    </h1>
  );
};

export default TypeWriter;
