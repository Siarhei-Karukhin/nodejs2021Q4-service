import { Router } from 'express';
import { getAll, create, read, update, remove } from './task.service';
import Task from './task.model';

const router = Router({ mergeParams: true });

router.route('/')
  .get(async (req, res) => {
    try {
      const { boardId } = req.params;
      const tasks = await getAll(boardId);
      res.status(200).json(tasks.map(Task.toResponse));
    } catch (e) {
      res.status(404).send(e.message);
    }
  })

  .post(async (req, res) => {
    try {
      const { boardId } = req.params;
      const task = await create({ ...req.body, boardId });
      res.status(201).json(Task.toResponse(task));
    } catch (e) {
      res.status(404).send(e.message);
    }
  });


router.route('/:id')
  .get(async (req, res) => {
    try {
      const task = await read(req.params.id);
      if (task) {
        res.status(200).json(Task.toResponse(task));
      } else {
        throw new Error(404, `Not found`);
      }
    } catch (e) {
      res.status(404).send(e.message);
    }
  })

  .put(async (req, res) => {
    try {
      const task = await update(req.params.boardId, req.params.id, req.body);
      if (task) {
        res.status(200).json(Task.toResponse(task));
      } else {
        throw new Error(404, `Not found`);
      }
    } catch (e) {
      res.status(400).send(e.message);
    }
  })

  .delete(async (req, res) => {
    const deleted = await remove(req.params.id);
    if (deleted) {
      res.status(200).send();
    } else {
      throw new Error(404, `Not found`);
    }
  });

  export default router;
