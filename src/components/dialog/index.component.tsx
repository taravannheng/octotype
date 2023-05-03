import { FC, Fragment, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import TimerContext from "../../contexts/timer-context";
import WordCounterContext from "../../contexts/word-counter-context";

interface DialogProps {
  dialogStyle?: string;
  titleText: string;
  titleStyle?: string;
  descriptionStyle?: string;
}

const Dialog: FC<DialogProps> = ({
  dialogStyle = "",
  titleText,
  titleStyle = "text-neutral-dark",
  descriptionStyle = "text-primary",
}) => {
  const { timer } = useContext(TimerContext);
  const { wordCounter } = useContext(WordCounterContext);

  return (
    <Fragment>
      {timer === 0 && (
        <div
          className={`dialog fixed z-10 inset-0 overflow-y-auto ${dialogStyle}`}
        >
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="fixed inset-0 bg-neutral-grey-4 opacity-60 blur"></div>
            <div className="relative bg-neutral-light rounded-lg shadow-lg p-6 z-10 text-h3 flex justify-center items-center flex-col px-40 py-20">
              <FontAwesomeIcon
                icon={faClose}
                className="absolute top-4 right-4 h-[16px] w-[16px] sm:h-[24px] sm:w-[24px] bg-neutral-grey-3 text-neutral-light p-1 rounded-full hover:bg-neutral-grey-4 hover:text-neutral-light hover:cursor-pointer transition-all duraiton-500"
              />
              <span className={`mb-2 ${titleStyle}`}>{titleText}</span> <br />{" "}
              <span
                className={`text-h1 text-primary text-[80px] ${descriptionStyle}`}
              >
                {wordCounter}
              </span>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Dialog;
