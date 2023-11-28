import PropTypes from 'prop-types';

const Students =(props) =>
{
    return (
    <>
    <div div className = "student">
    <p> Name : {props.name}</p>
    <p> Age : {props.age}</p>
    </div>
    </>
    
    );
}
Students.propTypes = {
name : PropTypes.string,
age : PropTypes.number 
}

Students.defaultProps = {
    name : "Guest",
    age : 0
}
export default Students;