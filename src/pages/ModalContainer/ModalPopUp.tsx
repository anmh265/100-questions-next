import { printSchoolClass } from "@/AnswerFinders/PrintClassName";
import { FunctionComponent, useState } from "react";
import dataObj from "../../../public/Data/data.json";
import { QuestionObj } from "@/types";

type ModalProps = {
  data: QuestionObj;
  openClick: Function;
};

const ModalPopUp: FunctionComponent<ModalProps> = ({ data, openClick }) => {
  console.log(data);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [answer, setAnswer] = useState<string>("");

  const getAnswer = () => {
    setAnswer(printSchoolClass(dataObj));
  };

  return isOpen ? (
    <div
      className={`absolute top-0 left-0 w-[100vw] h-[100vh] bg-black/[0.3] z-5 ${
        isOpen && "backdrop-blur-sm"
      }`}
    >
      <div className="p-6 absolute top-[35%] left-[50%] bg-blue-300 rounded-lg translate-x-[-50%] translate-y-[-50%]  backdrop-filter: blur(8px)">
        <button
          className="px-1.5 py-0.5 text-black rounded-lg active:scale-95 absolute top-[10px] right-[10px]"
          onClick={() => openClick()}
        >
          x
        </button>
        <div className="mt-7 flex flex-col items-center">
          <div>{`Q. ${data.question}`}</div>
          <button
            className="mt-5 bg-black text-white py-1 px-[5px] rounded-lg active:scale-95"
            onClick={getAnswer}
          >
            Answer
          </button>
          {answer && (
            <div className="bg-white px-3 py-1 mt-3 rounded-md">{answer}</div>
          )}
        </div>
      </div>
    </div>
  ) : null;
};

export default ModalPopUp;
