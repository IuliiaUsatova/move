import { createContext, useEffect, useState} from "react";
import { getDataFromBackend } from "../../utils/config";

const ModalProvider = ({children}) => {
    //создаем компонент пропсом которого будут данные с бэкенда

    const [data, setData] = useState([]);

    useEffect(() => {
        getDataFromBackend().then(res => {
            setData(res)
        })
    },[])
//и результатом возвращаем 
    return <ModalContext.Provider value={data}> 
    {children} 
    </ModalContext.Provider>
}

export const ModalContext = createContext();
export default ModalProvider;

