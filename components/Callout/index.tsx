import React from "react";
import { ReactNode, FC } from "react";
import * as CSS from "csstype";
import Info from "@components/icons/info";
import { useInView } from "react-intersection-observer";
import { LazyMotion, m } from "framer-motion";

const loadFeatures = () =>
  import("@components/FramerFeatures").then((res) => res.default);

interface CalloutProps {
  children: ReactNode;
}

export const callOutWrapper: CSS.Properties = {
  position: "absolute",
  display: "flex",
  top: "-24px",
  right: "-20px",
  borderRadius: "50%",
  padding: "6px",
  color: "#620024",
  border: "6px solid transparent",
  background: "#0d1014",
};

const callout: CSS.Properties = {
  "*:last-child": {
    marginBottom: "0px",
  },

  position: "relative",
  padding: "10px 25px",
  marginBottom: "2.25rem",
  marginTop: "2.25rem",
  borderRadius: "12px",
  fontSize: "1.25em",
  color: "#fff",
  border: "2px solid #620024",
  background: "rgb(55, 65, 81, 0.5)",
  boxShadow: "6px 5px 5px #54001f",
  opacity: "0.6",
};

const Callout: FC<CalloutProps> = (props) => {
  const { children, ...rest } = props;

  const [ref6, isVisible6] = useInView({
    triggerOnce: true,
    rootMargin: "-200px 0px",
  });
  const variants6 = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -200,
    },
  };

  return (
    <LazyMotion features={loadFeatures}>
      <m.div
        ref={ref6}
        animate={isVisible6 ? "visible" : "hidden"}
        variants={variants6}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={callout}
        {...rest}
      >
        <aside style={callOutWrapper}>
          <Info className="h-6 w-6" />
        </aside>
        <span>{children}</span>
      </m.div>
    </LazyMotion>
  );
};

export default Callout;
