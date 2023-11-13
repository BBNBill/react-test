function Item(props) {
    const {data, deleteStudent} = props;
    return (
        <>
            <li key={data.id}>
            <p>
              {data.id} - {data.name}
            </p>
            <button onClick={() => deleteStudent(data.id)}>ลบข้อมูล</button>
          </li>
        </>
    );
}
export default Item;