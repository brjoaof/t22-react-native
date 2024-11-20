export type tarefa = {
  id: number;
  titulo: string;
  descricao: string;
  status: boolean;
};

export type TarefaEditada = {
  item: tarefa | undefined;
  editando: boolean;
};
