from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..models import Task
from ..schemas import TaskCreate
from ..dependencies import get_db

router = APIRouter()


@router.post("/tasks")
def create_task(task: TaskCreate, db: Session = Depends(get_db)):

    new_task = Task(
        title=task.title,
        description=task.description,
        owner_id=1
    )

    db.add(new_task)
    db.commit()
    db.refresh(new_task)

    return new_task


@router.get("/tasks")
def get_tasks(db: Session = Depends(get_db)):

    tasks = db.query(Task).all()

    return tasks


@router.delete("/tasks/{task_id}")
def delete_task(task_id: int, db: Session = Depends(get_db)):

    task = db.query(Task).filter(Task.id == task_id).first()

    if task:
        db.delete(task)
        db.commit()

    return {"message": "Task deleted"}