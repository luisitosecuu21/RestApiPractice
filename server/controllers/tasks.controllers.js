import pool from "../db.js";

export const getTasks = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tasks ORDER BY createdAt ASC"
    );
    res.send(result);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query("SELECT * FROM tasks WHERE id =?", [id]);

    if (result.length <= 0) {
      return res.status(404).send({ message: "Tarea no encontrada" });
    }

    res.send(result[0]);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const [result] = await pool.query(
      "INSERT INTO tasks (title, description) VALUES (?, ?)",
      [title, description]
    );

    res.send(result);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query("UPDATE tasks SET ? WHERE id =?", [
      req.body,
      id,
    ]);

    if (result.affectedRows <= 0) {
      return res.status(404).send({ message: "Tarea no encontrada" });
    }
    res.json(result);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query("DELETE FROM tasks WHERE id =?", [id]);

    if (result.affectedRows <= 0) {
      return res.status(404).send({ message: "Tarea no encontrada" });
    }

    res.status(204).send(result);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
