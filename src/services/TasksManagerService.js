class TaskManagerService {
    _apiUrl = 'http://localhost:5030/api/ToDoItems';

    // Функция для получения задачи по id
    async getTaskById(id) {
        const response = await fetch(`${this._apiUrl}/${id}`);
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }
        return await response.json();
    }

    // Функция для получения всех задач
    async getAllTasks() {
        const response = await fetch(this._apiUrl);
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }
        return await response.json();
    }

    // Функция для обновления существующей задачи
    async updateTask(task) {
        const response = await fetch(this._apiUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        });
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }
        return await response.json();
    }

    // Функция для удаления задачи по id
    async deleteTaskById(id) {
        const response = await fetch(`${this._apiUrl}?id=${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }
    }

    // Функция для добавления новой задачи
    async addTask(description, isCompleted) {
        const response = await fetch(`${this._apiUrl}?description=${encodeURIComponent(description)}&isCompleted=${isCompleted}`, {
            method: 'POST',
        });
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }
        return await response.json();
    }

    // Пример использования функций
    // (async () => {
    //     try {
    //         // Получить задачу с id 1
    //         const task = await getTaskById(1);
    //         console.log(task);

    //         // Получить все задачи
    //         const tasks = await getAllTasks();
    //         console.log(tasks);

    //         // Обновить задачу
    //         const updatedTask = await updateTask({ id: 1, description: 'Новая задача', isCompleted: false });
    //         console.log(updatedTask);

    //         // Удалить задачу с id 3
    //         const deleteResult = await deleteTaskById(3);
    //         console.log(deleteResult);

    //         // Добавить новую задачу
    //         const newTask = await addTask('Задача 4', false);
    //         console.log(newTask);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // })();

}
export default TaskManagerService;