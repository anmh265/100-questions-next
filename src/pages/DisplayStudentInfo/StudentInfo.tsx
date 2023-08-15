import data from "../../../public/Data/data.json";

export function StudentInfo() {
  return (
    <div>
      <div className="flex flex-col items-center gap-x-2.5 gap-y-2 m-4">
        <div className="flex gap-x-3">
          <span>Class: </span>
          <div className="border-black border-2 px-2">{(data.name).slice(data.name.length - 1, data.name.length)}</div>
        </div>
        <div className="flex gap-x-3">
          <span>Teacher's Name: </span>
          <div>{data.teacherName}</div>
        </div>
        <div>
            <div>
                {`Student Name: Aparna`}
            </div>
        </div>
      </div>
    </div>
  );
}
