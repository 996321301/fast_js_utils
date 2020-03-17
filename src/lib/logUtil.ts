
/**
 * @description 控制台工具类，通过配置level确定打印的日志等级
 */
class LogUtil{

    static INFO = 1;
    static DEBUG = 2;
    static WARN = 3;
    static ERROR = 4;
    static CLOSE = 5;

    static level: 1 | 2 | 3 | 4 | 5 = 1;
    /**
     * @description 打印一般日志
     * @param module 所属模块
     * @param log 日志信息
     */
    static info(module: string, log: any): void{
        if(LogUtil.level <= LogUtil.INFO){
            console.log(`普通日志：${module}->`, log );
        }
    }
    /**
     * @description 打印调试日志
     * @param module 所属模块
     * @param log 日志信息
     */
    static debug(module: string, log: any): void{
        if(LogUtil.level <= LogUtil.DEBUG){
            console.log(`%c调试日志：${module}->`, 'color:#00B8F5', log );
        }
    }
    /**
     * @description 打印警告日志
     * @param module 所属模块
     * @param log 日志信息
     */
    static warn(module: string, log: any): void{
        if(LogUtil.level <= LogUtil.WARN){
            console.log(`%c警告日志：${module}->`, 'color:#FFCC00', log );
        }
    }
    /**
     * @description 打印错误日志
     * @param module 所属模块
     * @param log 日志信息
     */
    static error(module: string, log: any): void{
        if(LogUtil.level <= LogUtil.ERROR){
            console.log(`%c错误日志：${module}->`, 'color:#FF0033', log );
        }
    }
}

export default LogUtil