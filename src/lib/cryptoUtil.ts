import * as Base64 from "base-64"

/**
 * @description 加密工具类
 */
class CryptoUtil{
    /**
     * @description 将字符串进行base64加密
     * @param str 需要加密的字符串
     */
    static base64Encode(str: string): string{
        return Base64.encode(str)
    }
    /**
     * @description 解密base64字符串
     * @param str 需要解密的base64字符串
     */
    static base64Decode(str: string): string{
        return Base64.decode(str)
    }
    /**
     * @description 隐藏电话号码中间几位
     * @param phone 电话号码
     */
    static resetPhone(phone: string): string{
        let str = String(phone)
        let len = str.length;
        let prev,next;
        if (len >= 7) {
            prev = str.slice(-len,-7)
            next = str.slice(-3)
            str = prev+"****"+next
        } else if (len < 7 && len >= 6) {
            prev = str.slice(-len,-4)
            next = str.slice(-2)
            str = prev + "**" + next
        }
        return str
    }
}

export default CryptoUtil