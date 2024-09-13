import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import './TaskItem.scss';

const TaskItem = (props) => {
    const { id, description, isCompleted, onDelete, onComplete } = props;
    return (
        <Card className="task" bg={isCompleted ? "success" : null}>
            <h2 className="task__description" style={{ color: isCompleted ? "#f6f6f6" : "#000" }}>{description}</h2>
            <div className="task__actions">
                <ToggleButton
                    id={"toggle-check-" + id}
                    type="checkbox"
                    variant="outline-primary"
                    checked={isCompleted}
                    onChange={() => onComplete(id)}
                    value="1">{isCompleted ? "Completed" : "Complete"}</ToggleButton>
                <Button variant="danger"
                    onClick={() => onDelete(id)}>Delete</Button>
            </div>
        </Card>
    )
}

export default TaskItem;