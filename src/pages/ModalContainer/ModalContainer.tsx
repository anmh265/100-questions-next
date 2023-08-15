import { useState } from "react";
import ModalPopUp from "./ModalPopUp";
import { QuestionObj } from "@/types";

const input = [
    {
      question: 'Write a function to print the name of the class: "class A"',
      id: 0,
      hasProps: false,
    },
    {
      question: "Write a function to print the teacher's name: 'Mary'.",
      id: 1,
      hasProps: false,
    },
  ];

export function ModalContainer() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<QuestionObj>({
    question: "",
    id: 0,
    hasProps: false,
  });

  const openClick = (data: QuestionObj) => {
    setModalOpen(!modalOpen);
    setSelectedItem(data);
  };

  return (
    <div className="flex">
      {input.map((itemObj: QuestionObj) => {
        return (
          <div
            key={itemObj.id + itemObj.question}
            className="flex gap-4 items-center flex-wrap w-full h-full p-3.5 max-w-5xl mx-auto"
          >
            <div
              className="p-2 bg-zinc-300 rounded-md flex justify-center cursor-pointer max-w-xs"
              onClick={() => {
                openClick(itemObj);
              }}
            >
              {`Q. ${itemObj.question}`}
            </div>
            {modalOpen && (
              <ModalPopUp openClick={openClick} data={selectedItem} />
            )}
          </div>
        );
      })}
    </div>
  );
}
