//CUSTOM HOOKS
import { useOneGet } from "./useOneGet";
import { useUpdate } from "./useUpdate";
import { useCreate } from "./useCreate";
import { useDelete } from "./useDelete";
export function useTech({ url, id, data, adminUrl }) {
  const { responseOne } = useOneGet({ url, id });

  const { update } = useUpdate({ adminUrl, id, data });
  const { create } = useCreate({ adminUrl, data });
  const { deleteElement } = useDelete({ adminUrl, id });
  return {
    responseOne,
    create,
    update,
    deleteElement,
  };
}
