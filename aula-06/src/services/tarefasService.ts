import { tarefa } from "../types/types";
import api from "./api";

export const getTarefas = async (): Promise<tarefa[]> => {
  const { data } = await api.get("/tarefas");
  return data;
};

export const createTarefa = async (
  novaTarefa: Omit<tarefa, "id">
): Promise<tarefa> => {
  const { data } = await api.post("/tarefas", novaTarefa);
  return data;
};

export const deleteTarefa = async (id: number): Promise<tarefa> => {
  const { data } = await api.delete("/tarefas/" + id);
  return data;
};

export const updateTarefa = async (TarefaEditada: tarefa): Promise<tarefa> => {
  const { data } = await api.put("/tarefas/" + TarefaEditada.id, TarefaEditada);
  return data;
};
