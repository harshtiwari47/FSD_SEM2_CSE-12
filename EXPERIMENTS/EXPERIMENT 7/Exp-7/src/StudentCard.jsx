function StudentCard(props){
    return (
        <div className="student-card">
            <h2>Name:{props.name}</h2>
            <p>Marks:{props.marks}</p>
            <p>Course:{props.course}</p>
        </div>
    );
}
export default StudentCard;