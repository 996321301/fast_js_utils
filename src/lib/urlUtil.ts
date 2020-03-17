/**
 * @description url相关的工具类
 */
class UrlUtil{
    /**
     * @author 王云龙
     * @desc 获取url地址中的get参数
     * @param str url字符串
     */
    static getUrlParams(str: string): object{
        let arr: string[] = str.split("?")[1].split("&");   //先通过？分解得到？后面的所需字符串，再将其通过&分解开存放在数组里
        let obj: any = {};
        for (let i of arr) {
            obj[i.split("=")[0]] = i.split("=")[1];  //对数组每项用=分解开，=前为对象属性名，=后为属性值
        }
        return obj;
    }
}

export default UrlUtil