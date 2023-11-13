import Item from "./Item";

function Student(props) {
  const {students, deleteStudent} = props;

  return (
    <div>
        <br/>
      <h3>จำนวนนักเรียน {students.length}</h3>
      <ul>
        {students.map((data) => (
            <Item key={data.id} data={data} deleteStudent={deleteStudent}/>
        ))}
      </ul>
    </div>
  );
}

export default Student;
