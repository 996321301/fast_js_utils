/**
 * @author 王云龙
 * @description 判断数据类型的工具类
 */

class TypeUtil {
    /**
     * @description 判断是否是json字符串
     * @param str 判断是否是json字符串的字符串
     */
    static isJsonStr(str:string): boolean{
        let isJson = true;
        if(str.search(/^[0-9]*$/)>-1){
            return false;
        }
        try{
            JSON.parse(str);
        }catch(e){
            isJson = false;
        }
        return isJson;
    }
    /**
     * @description 判断是否是空
     * @param data 要判断的数据可以是：字符串，数组，对象，undefined, null
     */
    static isEmpty(data:any): boolean{
        if(typeof data === "string"){
            return !data
        }else if(typeof data === "object"){
            if(data instanceof Array){
                return !data.length
            }else if(data === null){
                return true
            }else{
                return (JSON.stringify(data) === "{}")
            }
        }else if(typeof data === "number"){
            return !data
        }else{
            return true
        }
    }
    /**
     * @description 判断字符串是否为手机号码
     * @param str 要判断的手机号码字符串
     */
    static isPhoneNumber(str:string): boolean{
        let myreg=/^[1][0-9]{10}$/;
        if (!myreg.test(str)) {
            return false;
        } else {
            return true;
        }
    }
    /**
     * @description json字符串转json对象
     * @param str json字符串，如果不是json字符串则会返回空对象
     */
    static stringToJson(str: string): object{
        if(TypeUtil.isJsonStr(str)){
            return JSON.parse(str);
        }else{
            return {};
        }
    }
    /**
     * @description json对象转化为字符串
     * @param json 要转化为字符串的json对象
     */
    static jsonToString(json: object): string{
        if(typeof json !== "object"){
            return "";
        }
        return JSON.stringify(json);
    }
    /**
     * @description 将json对象转化为字典字符串（aaa=1&bbb=2）
     * @param json 要转化的json对象
     */
    static jsonToParam(json: any): string{
        if(typeof json !== "object"){
            return "";
        }
        let paramArr: string[] = [];
        for(let i in json){
            paramArr.push(`${i}=${json[i]}`);
        }
        return paramArr.join("&")
    }
    /**
     * @description 将传入内容转化为string
     * @param value 要转化的对象
     */
    static toString(value: any): string{
        return `${value}`;
    }
}

export default TypeUtil