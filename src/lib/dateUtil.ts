import * as moment from "moment"
import LogUtil from "./logUtil";

/**
 * @description 日期时间工具类
 */
class DateUtil{
    static DateFormat = "YYYY-MM-DD"
    static DateFormatCN = "YYYY年MM月DD日"
    static DateTimeFormat = "YYYY-MM-DD HH:mm:ss"
    static TimeFormat = "HH:mm:ss"
    static MinutesTimeFormat = "HH:mm"
    /**
     * @description 获取时间戳
     * @param timeStr 时间字符串，例如getTime("2019-01-11 12:20:00")不传默认当前时间
     */
    static getTime(timeStr: string | number | undefined = Date.now(), platform: "ios" | "android" = "android"){
        return moment(timeStr).utcOffset(platform === "ios" ? 0 : 480).format("X")
    }
    /**
     * @description 格式化时间戳为日期格式
     * @param time 格式化时间戳
     * @param formatStr 格式字符串
     */
    static format(time: number = Date.now(), formatStr: string = DateUtil.DateFormat, platform: "ios" | "android" = "android"){
        return moment(time).utcOffset(platform === "ios" ? 0 : 480).format(formatStr);
    }
}

export default DateUtil