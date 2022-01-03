import del from "del";

// конфигурация
import path from "../config/path.js";

// удаление директории
export default () => {
   return del(path.root);
}
