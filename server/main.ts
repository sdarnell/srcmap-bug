import { Main } from "./imports/server-main/main";
import { Debug } from '../both/debug';

const mainInstance = new Main();
mainInstance.start();

Debug.Bang();
