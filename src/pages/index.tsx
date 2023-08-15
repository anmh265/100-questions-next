import { Inter } from "next/font/google";
import { ModalContainer } from "./ModalContainer/ModalContainer";
import { StudentInfo } from "./DisplayStudentInfo/StudentInfo";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <>
    <StudentInfo />
    <ModalContainer />
    </>
  )
}
