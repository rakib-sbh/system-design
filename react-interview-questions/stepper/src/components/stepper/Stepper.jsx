import { useEffect, useRef } from "react";
import { useState } from "react";

import styles from "./Stepper.module.css";

const Steeper = ({ stepsConfig = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });

  const stepRef = useRef([]);

  const handleNext = () => {
    setCurrentStep((prevState) => {
      if (prevState === stepsConfig.length) {
        setIsComplete(true);
        return prevState;
      } else {
        return prevState + 1;
      }
    });
  };

  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
  };

  useEffect(() => {
    console.log(stepRef.current[0].offsetWidth);
    console.log(stepRef.current[stepsConfig.length - 1].offsetWidth);
    console.log("+++++");
    
    setMargins({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[stepsConfig.length - 1].offsetWidth / 2,
    });
  }, [stepRef, stepsConfig.length]);

  const ActiveComponent = stepsConfig[currentStep - 1]?.component;

  if (!stepsConfig.length) {
    return <></>;
  }

  return (
    <>
      <div className={styles["stepper"]}>
        {stepsConfig.map((step, index) => {
          return (
            <div
              key={step.name}
              ref={(element) => (stepRef.current[index] = element)}
              className={`${styles["step"]} ${
                currentStep > index + 1 || isComplete ? styles["complete"] : ""
              } ${currentStep === index + 1 ? styles["active"] : ""}`}
            >
              <div className={styles["step-number"]}>
                {currentStep > index + 1 || isComplete ? (
                  <span>&#10003;</span>
                ) : (
                  index + 1
                )}
              </div>
              <div className={styles["step-name"]}>{step.name}</div>
            </div>
          );
        })}
        <div
          className={styles["progress-bar"]}
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight,
          }}
        >
          <div
            className={styles["progress"]}
            style={{ width: `${calculateProgressBarWidth()}%` }}
          ></div>
        </div>
      </div>
      <ActiveComponent />
      {!isComplete && (
        <button className={styles["btn"]} onClick={handleNext}>
          {currentStep === stepsConfig.length ? "Finish" : "Next"}
        </button>
      )}
    </>
  );
};

export default Steeper;
