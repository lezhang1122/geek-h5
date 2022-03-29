import { RootState } from "@/types/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
/**
 * 
 * @param action 异步的action
 * @param stateName store中保存的状态的属性
 * @returns state
 */
function useInitalState<StateName extends keyof RootState>(action: () => void, stateName: StateName) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(action());
    }, [])
    const state = useSelector((state: RootState) => state[stateName]);
    return {
        state
    }
}

export default useInitalState;