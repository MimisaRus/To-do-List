import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import TaskItem from '../taskItem/TaskItem';
import TaskManagerService from '../../services/TasksManagerService';

function TaskList() {
    const [description, setDescription] = useState("");
    const [data, setData] = useState([]);
    const service = new TaskManagerService();

    useEffect(() => {
        async function fetchData() {
            try {
                const dataOfTasks = await service.getAllTasks();
                setData(dataOfTasks);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);
    function onInputChange(event) {
        const value = event.target.value;
        setDescription(value);
    }

    async function onAdd() {
        if (description.trim() === "" || description === undefined) {
            return;
        }
        try {
            const item = await service.addTask(description, false);
            // const item = { id: lastId, description, isCompleted: false };
            // setLastid(lastId => lastId + 1);
            setData([...data, item]);
            setDescription("");
        } catch (error) {
            console.log(error);
        }
    }

    const onDelete = async (id) => {
        try {
            await service.deleteTaskById(id);
            const Arr = data.filter((item) => {
                return id !== item.id;
            });
            setData(Arr);
        } catch (error) {
            console.log(error);
        }
    }

    const onComplete = async (id) => {
        let index;
        const items = [...data];
        try {
            for (index = 0; index < data.length; ++index) {
                if (items[index].id === id) {
                    items[index].isCompleted = !items[index].isCompleted;
                    await service.updateTask(items[index]);
                    break;
                }
            }
            setData(items);
        } catch (error) {
            items[index].isCompleted = !items[index].isCompleted;
            console.log(error);
        }
    }
    return (
        <Container>
            <Card className='bg-dark text-white' body>
                <Row>
                    <Col md={12}>
                        <h1>TaskList</h1>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <Form.Control size="lg" type="text" placeholder="Enter Task"
                            onChange={onInputChange} />
                    </Col>
                    <Col offset={1}>
                        <Button variant="outline-primary"
                            style={{ width: "100%", height: "100%" }}
                            onClick={onAdd}>Add Task</Button>{' '}
                    </Col>
                </Row>
            </Card>
            <Row>
                <ul className="task-list_items">
                    {data.map((item) =>
                        <li key={item.id}>
                            <TaskItem id={item.id}
                                description={item.description}
                                isCompleted={item.isCompleted}
                                onDelete={onDelete}
                                onComplete={onComplete} />
                        </li>
                    )}
                </ul>
            </Row>
        </Container>
    )
}

export default TaskList;