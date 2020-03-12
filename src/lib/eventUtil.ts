
/** 全局事件总栈 */
const eventObj: any = {};
/**
 * @author 王云龙
 * @description 事件总栈工具类，融合监听者发布者模式，方便页面传值，解决了小程序返回不能传值的问题
 */
class EventUtil {
    // 事件注册
    static on(eventName: string, func: Function){
        if(eventObj[eventName]){
            eventObj[eventName].push(func)
        }else{
            eventObj[eventName] = [func]
        }
    }
    // 事件触发
    static emit(eventName: string, ...rest: any[]){
        let funcs: Function[] = eventObj[eventName]
        if(funcs){
            funcs.forEach((fun) => {
                fun(...rest)
            })
        }
    }
    // 事件移除
    static remove(eventName: string, func?: Function | undefined){
        if(!func){
            eventObj[eventName] = [];
            return;
        }
        let funcs: Function[] = eventObj[eventName]
        if(funcs){
            funcs.forEach((fun, idx) => {
                if(fun === func){
                    eventObj[eventName].splice(idx, 1)
                }
            })
        }
    }
}

export default EventUtil