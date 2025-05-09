import { createContext, FC, ReactNode, useContext } from "react";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";

interface ShareStateContextType{
    scrolly:Animated.SharedValue<number>;
    scrollyGloabl:Animated.SharedValue<number>;
    scrollToTop:()=>void
}
const SharedStateContext = createContext<ShareStateContextType | undefined>(undefined)

export const SharedStateProvider:FC<{children:ReactNode}>=({children})=>{
    const scrolly = useSharedValue(0);
    const scrollyGloabl = useSharedValue(0);
    const scrollToTop=()=>{
        scrolly.value = withTiming(0,{duration:300});
        scrollyGloabl.value=withTiming(0,{})
    }
return (
   <SharedStateContext.Provider value={{scrollToTop,scrolly,scrollyGloabl}}>
{children}
   </SharedStateContext.Provider> 
)
};
export const useSharedState=()=>{
    const context = useContext(SharedStateContext)
    if(context===undefined){
        throw new Error ('useSharedState must be used within a SharedStateProvider');
    }
    return context;
}