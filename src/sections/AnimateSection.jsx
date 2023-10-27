import { useInView } from "react-intersection-observer";

const AnimateSection = (WrappedComponent) => {
  return function AnimatedComponent(props) {
    const [ref, inView] = useInView({
      triggerOnce: true, 
    });

    return (
      <div ref={ref} className={`animated-section ${inView ? "visible" : ""}`}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default AnimateSection;
