import Header from "./component/Header";
import Student from "./component/Student";
import Addform from "./component/Addform";
import { useState } from "react";

function App() {

  const [students, setStudent] = useState([
    { id: 1, name: "student1" },
    { id: 2, name: "student2" },
    { id: 3, name: "student3" },
  ]);

    function deleteStudent(id) {
      setStudent(students.filter((item) => item.id !== id));
      console.log(id);
    }
 
  //พื้นที่สำหรับ CODE JS

  //พื้นที่แสดงผล
  return (
    <div>
      <Header title="HOME"/>
      <Addform/>
      <Student students={students} deleteStudent={deleteStudent}/>
    </div>
  );
}

export default App;
