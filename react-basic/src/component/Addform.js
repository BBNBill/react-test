import "./Addform.css";
function Addform (){
    return(
        <section className="container">
            <form >
                <labe>ชื่อนักเรียน</labe>
                <input type="text" name="name"/>
                <button type="submit">บันทึก</button>
            </form>
        </section>
    )
}
export default Addform;