import {
    TypeUtil,
    LogUtil,
    DateUtil,
    EventUtil,
    UrlUtil,
    CryptoUtil
} from "../index"

LogUtil.debug("testTypeUtil", TypeUtil.isEmpty({}))
LogUtil.debug("testDateUtil", DateUtil.getTime())
EventUtil.on("testEvent", function(...rest: any[]){
    LogUtil.debug("testEventUtil", rest)
})
EventUtil.emit("testEvent", 1, 3, 4)
LogUtil.debug("testUrlUtil", UrlUtil.getUrlParams("www.asdas.com?aaa=1&nnn=2"));
LogUtil.debug("testCryptoUtil", CryptoUtil.base64Encode("123"));