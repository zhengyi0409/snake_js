#include "scripting/js-bindings/auto/jsb_socket_auto.hpp"
#include "scripting/js-bindings/manual/jsb_conversions.hpp"
#include "scripting/js-bindings/manual/jsb_global.h"
#include "PSAppUtils.h"

se::Object* __jsb_PSAppUtils_proto = nullptr;
se::Class* __jsb_PSAppUtils_class = nullptr;

static bool js_socket_PSAppUtils_setSocketResponseCb(se::State& s)
{
    PSAppUtils* cobj = (PSAppUtils*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_socket_PSAppUtils_setSocketResponseCb : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::function<void (int, int, int, cocos2d::Data)> arg0;
        do {
            if (args[0].isObject() && args[0].toObject()->isFunction())
            {
                se::Value jsThis(s.thisObject());
                se::Value jsFunc(args[0]);
                jsThis.toObject()->attachObject(jsFunc.toObject());
                auto lambda = [=](int larg0, int larg1, int larg2, cocos2d::Data larg3) -> void {
                    se::ScriptEngine::getInstance()->clearException();
                    se::AutoHandleScope hs;
        
                    CC_UNUSED bool ok = true;
                    se::ValueArray args;
                    args.resize(4);
                    ok &= int32_to_seval(larg0, &args[0]);
                    ok &= int32_to_seval(larg1, &args[1]);
                    ok &= int32_to_seval(larg2, &args[2]);
                    ok &= Data_to_seval(larg3, &args[3]);
                    se::Value rval;
                    se::Object* thisObj = jsThis.isObject() ? jsThis.toObject() : nullptr;
                    se::Object* funcObj = jsFunc.toObject();
                    bool succeed = funcObj->call(args, thisObj, &rval);
                    if (!succeed) {
                        se::ScriptEngine::getInstance()->clearException();
                    }
                };
                arg0 = lambda;
            }
            else
            {
                arg0 = nullptr;
            }
        } while(false)
        ;
        SE_PRECONDITION2(ok, false, "js_socket_PSAppUtils_setSocketResponseCb : Error processing arguments");
        cobj->setSocketResponseCb(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_socket_PSAppUtils_setSocketResponseCb)

static bool js_socket_PSAppUtils_socketStateChange(se::State& s)
{
    PSAppUtils* cobj = (PSAppUtils*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_socket_PSAppUtils_socketStateChange : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        int arg0 = 0;
        ok &= seval_to_int32(args[0], (int32_t*)&arg0);
        SE_PRECONDITION2(ok, false, "js_socket_PSAppUtils_socketStateChange : Error processing arguments");
        cobj->socketStateChange(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_socket_PSAppUtils_socketStateChange)

static bool js_socket_PSAppUtils_setUdpSocketResponseCb(se::State& s)
{
    PSAppUtils* cobj = (PSAppUtils*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_socket_PSAppUtils_setUdpSocketResponseCb : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::function<void (int, int, int, cocos2d::Data)> arg0;
        do {
            if (args[0].isObject() && args[0].toObject()->isFunction())
            {
                se::Value jsThis(s.thisObject());
                se::Value jsFunc(args[0]);
                jsThis.toObject()->attachObject(jsFunc.toObject());
                auto lambda = [=](int larg0, int larg1, int larg2, cocos2d::Data larg3) -> void {
                    se::ScriptEngine::getInstance()->clearException();
                    se::AutoHandleScope hs;
        
                    CC_UNUSED bool ok = true;
                    se::ValueArray args;
                    args.resize(4);
                    ok &= int32_to_seval(larg0, &args[0]);
                    ok &= int32_to_seval(larg1, &args[1]);
                    ok &= int32_to_seval(larg2, &args[2]);
                    ok &= Data_to_seval(larg3, &args[3]);
                    se::Value rval;
                    se::Object* thisObj = jsThis.isObject() ? jsThis.toObject() : nullptr;
                    se::Object* funcObj = jsFunc.toObject();
                    bool succeed = funcObj->call(args, thisObj, &rval);
                    if (!succeed) {
                        se::ScriptEngine::getInstance()->clearException();
                    }
                };
                arg0 = lambda;
            }
            else
            {
                arg0 = nullptr;
            }
        } while(false)
        ;
        SE_PRECONDITION2(ok, false, "js_socket_PSAppUtils_setUdpSocketResponseCb : Error processing arguments");
        cobj->setUdpSocketResponseCb(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_socket_PSAppUtils_setUdpSocketResponseCb)

static bool js_socket_PSAppUtils_socketRequestPB(se::State& s)
{
    PSAppUtils* cobj = (PSAppUtils*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_socket_PSAppUtils_socketRequestPB : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 5) {
        int arg0 = 0;
        int arg1 = 0;
        int arg2 = 0;
        int arg3 = 0;
        cocos2d::Data arg4;
        ok &= seval_to_int32(args[0], (int32_t*)&arg0);
        ok &= seval_to_int32(args[1], (int32_t*)&arg1);
        ok &= seval_to_int32(args[2], (int32_t*)&arg2);
        ok &= seval_to_int32(args[3], (int32_t*)&arg3);
        ok &= seval_to_Data(args[4], &arg4);
        SE_PRECONDITION2(ok, false, "js_socket_PSAppUtils_socketRequestPB : Error processing arguments");
        cobj->socketRequestPB(arg0, arg1, arg2, arg3, arg4);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 5);
    return false;
}
SE_BIND_FUNC(js_socket_PSAppUtils_socketRequestPB)

static bool js_socket_PSAppUtils_socketResponse(se::State& s)
{
    PSAppUtils* cobj = (PSAppUtils*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_socket_PSAppUtils_socketResponse : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 5) {
        int arg0 = 0;
        int arg1 = 0;
        int arg2 = 0;
        const char* arg3 = nullptr;
        int arg4 = 0;
        ok &= seval_to_int32(args[0], (int32_t*)&arg0);
        ok &= seval_to_int32(args[1], (int32_t*)&arg1);
        ok &= seval_to_int32(args[2], (int32_t*)&arg2);
        std::string arg3_tmp; ok &= seval_to_std_string(args[3], &arg3_tmp); arg3 = arg3_tmp.c_str();
        ok &= seval_to_int32(args[4], (int32_t*)&arg4);
        SE_PRECONDITION2(ok, false, "js_socket_PSAppUtils_socketResponse : Error processing arguments");
        cobj->socketResponse(arg0, arg1, arg2, arg3, arg4);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 5);
    return false;
}
SE_BIND_FUNC(js_socket_PSAppUtils_socketResponse)

static bool js_socket_PSAppUtils_netStateChange(se::State& s)
{
    PSAppUtils* cobj = (PSAppUtils*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_socket_PSAppUtils_netStateChange : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        int arg0 = 0;
        ok &= seval_to_int32(args[0], (int32_t*)&arg0);
        SE_PRECONDITION2(ok, false, "js_socket_PSAppUtils_netStateChange : Error processing arguments");
        cobj->netStateChange(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_socket_PSAppUtils_netStateChange)

static bool js_socket_PSAppUtils_socketRequest(se::State& s)
{
    PSAppUtils* cobj = (PSAppUtils*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_socket_PSAppUtils_socketRequest : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 8) {
        int arg0 = 0;
        int arg1 = 0;
        int arg2 = 0;
        int arg3 = 0;
        const char* arg4 = nullptr;
        int arg5 = 0;
        const char* arg6 = nullptr;
        int arg7 = 0;
        ok &= seval_to_int32(args[0], (int32_t*)&arg0);
        ok &= seval_to_int32(args[1], (int32_t*)&arg1);
        ok &= seval_to_int32(args[2], (int32_t*)&arg2);
        ok &= seval_to_int32(args[3], (int32_t*)&arg3);
        std::string arg4_tmp; ok &= seval_to_std_string(args[4], &arg4_tmp); arg4 = arg4_tmp.c_str();
        ok &= seval_to_int32(args[5], (int32_t*)&arg5);
        std::string arg6_tmp; ok &= seval_to_std_string(args[6], &arg6_tmp); arg6 = arg6_tmp.c_str();
        ok &= seval_to_int32(args[7], (int32_t*)&arg7);
        SE_PRECONDITION2(ok, false, "js_socket_PSAppUtils_socketRequest : Error processing arguments");
        cobj->socketRequest(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 8);
    return false;
}
SE_BIND_FUNC(js_socket_PSAppUtils_socketRequest)

static bool js_socket_PSAppUtils_udpSocketRequestPB(se::State& s)
{
    PSAppUtils* cobj = (PSAppUtils*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_socket_PSAppUtils_udpSocketRequestPB : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 5) {
        int arg0 = 0;
        int arg1 = 0;
        int arg2 = 0;
        int arg3 = 0;
        cocos2d::Data arg4;
        ok &= seval_to_int32(args[0], (int32_t*)&arg0);
        ok &= seval_to_int32(args[1], (int32_t*)&arg1);
        ok &= seval_to_int32(args[2], (int32_t*)&arg2);
        ok &= seval_to_int32(args[3], (int32_t*)&arg3);
        ok &= seval_to_Data(args[4], &arg4);
        SE_PRECONDITION2(ok, false, "js_socket_PSAppUtils_udpSocketRequestPB : Error processing arguments");
        cobj->udpSocketRequestPB(arg0, arg1, arg2, arg3, arg4);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 5);
    return false;
}
SE_BIND_FUNC(js_socket_PSAppUtils_udpSocketRequestPB)

static bool js_socket_PSAppUtils_getCurrentTime(se::State& s)
{
    PSAppUtils* cobj = (PSAppUtils*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_socket_PSAppUtils_getCurrentTime : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        double result = cobj->getCurrentTime();
        ok &= double_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_socket_PSAppUtils_getCurrentTime : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_socket_PSAppUtils_getCurrentTime)

static bool js_socket_PSAppUtils_udpSocketRequest(se::State& s)
{
    PSAppUtils* cobj = (PSAppUtils*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_socket_PSAppUtils_udpSocketRequest : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 8) {
        int arg0 = 0;
        int arg1 = 0;
        int arg2 = 0;
        int arg3 = 0;
        const char* arg4 = nullptr;
        int arg5 = 0;
        const char* arg6 = nullptr;
        int arg7 = 0;
        ok &= seval_to_int32(args[0], (int32_t*)&arg0);
        ok &= seval_to_int32(args[1], (int32_t*)&arg1);
        ok &= seval_to_int32(args[2], (int32_t*)&arg2);
        ok &= seval_to_int32(args[3], (int32_t*)&arg3);
        std::string arg4_tmp; ok &= seval_to_std_string(args[4], &arg4_tmp); arg4 = arg4_tmp.c_str();
        ok &= seval_to_int32(args[5], (int32_t*)&arg5);
        std::string arg6_tmp; ok &= seval_to_std_string(args[6], &arg6_tmp); arg6 = arg6_tmp.c_str();
        ok &= seval_to_int32(args[7], (int32_t*)&arg7);
        SE_PRECONDITION2(ok, false, "js_socket_PSAppUtils_udpSocketRequest : Error processing arguments");
        cobj->udpSocketRequest(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 8);
    return false;
}
SE_BIND_FUNC(js_socket_PSAppUtils_udpSocketRequest)

static bool js_socket_PSAppUtils_udpSocketResponse(se::State& s)
{
    PSAppUtils* cobj = (PSAppUtils*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_socket_PSAppUtils_udpSocketResponse : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 5) {
        int arg0 = 0;
        int arg1 = 0;
        int arg2 = 0;
        const char* arg3 = nullptr;
        int arg4 = 0;
        ok &= seval_to_int32(args[0], (int32_t*)&arg0);
        ok &= seval_to_int32(args[1], (int32_t*)&arg1);
        ok &= seval_to_int32(args[2], (int32_t*)&arg2);
        std::string arg3_tmp; ok &= seval_to_std_string(args[3], &arg3_tmp); arg3 = arg3_tmp.c_str();
        ok &= seval_to_int32(args[4], (int32_t*)&arg4);
        SE_PRECONDITION2(ok, false, "js_socket_PSAppUtils_udpSocketResponse : Error processing arguments");
        cobj->udpSocketResponse(arg0, arg1, arg2, arg3, arg4);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 5);
    return false;
}
SE_BIND_FUNC(js_socket_PSAppUtils_udpSocketResponse)

static bool js_socket_PSAppUtils_isSocketConnect(se::State& s)
{
    PSAppUtils* cobj = (PSAppUtils*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_socket_PSAppUtils_isSocketConnect : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        bool result = cobj->isSocketConnect();
        ok &= boolean_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_socket_PSAppUtils_isSocketConnect : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_socket_PSAppUtils_isSocketConnect)

static bool js_socket_PSAppUtils_socketRequestPB2(se::State& s)
{
    PSAppUtils* cobj = (PSAppUtils*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_socket_PSAppUtils_socketRequestPB2 : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 7) {
        int arg0 = 0;
        int arg1 = 0;
        int arg2 = 0;
        int arg3 = 0;
        cocos2d::Data arg4;
        const char* arg5 = nullptr;
        int arg6 = 0;
        ok &= seval_to_int32(args[0], (int32_t*)&arg0);
        ok &= seval_to_int32(args[1], (int32_t*)&arg1);
        ok &= seval_to_int32(args[2], (int32_t*)&arg2);
        ok &= seval_to_int32(args[3], (int32_t*)&arg3);
        ok &= seval_to_Data(args[4], &arg4);
        std::string arg5_tmp; ok &= seval_to_std_string(args[5], &arg5_tmp); arg5 = arg5_tmp.c_str();
        ok &= seval_to_int32(args[6], (int32_t*)&arg6);
        SE_PRECONDITION2(ok, false, "js_socket_PSAppUtils_socketRequestPB2 : Error processing arguments");
        cobj->socketRequestPB2(arg0, arg1, arg2, arg3, arg4, arg5, arg6);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 7);
    return false;
}
SE_BIND_FUNC(js_socket_PSAppUtils_socketRequestPB2)

static bool js_socket_PSAppUtils_resetSocketLastTime(se::State& s)
{
    PSAppUtils* cobj = (PSAppUtils*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_socket_PSAppUtils_resetSocketLastTime : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        cobj->resetSocketLastTime();
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_socket_PSAppUtils_resetSocketLastTime)

static bool js_socket_PSAppUtils_udpReset(se::State& s)
{
    PSAppUtils* cobj = (PSAppUtils*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_socket_PSAppUtils_udpReset : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        cobj->udpReset();
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_socket_PSAppUtils_udpReset)

static bool js_socket_PSAppUtils_purgeAppUtils(se::State& s)
{
    const auto& args = s.args();
    size_t argc = args.size();
    if (argc == 0) {
        PSAppUtils::purgeAppUtils();
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_socket_PSAppUtils_purgeAppUtils)

static bool js_socket_PSAppUtils_getInstance(se::State& s)
{
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        PSAppUtils* result = PSAppUtils::getInstance();
        ok &= native_ptr_to_seval<PSAppUtils>((PSAppUtils*)result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_socket_PSAppUtils_getInstance : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_socket_PSAppUtils_getInstance)



static bool js_PSAppUtils_finalize(se::State& s)
{
    CCLOGINFO("jsbindings: finalizing JS object %p (PSAppUtils)", s.nativeThisObject());
    auto iter = se::NonRefNativePtrCreatedByCtorMap::find(s.nativeThisObject());
    if (iter != se::NonRefNativePtrCreatedByCtorMap::end())
    {
        se::NonRefNativePtrCreatedByCtorMap::erase(iter);
        PSAppUtils* cobj = (PSAppUtils*)s.nativeThisObject();
        delete cobj;
    }
    return true;
}
SE_BIND_FINALIZE_FUNC(js_PSAppUtils_finalize)

bool js_register_socket_PSAppUtils(se::Object* obj)
{
    auto cls = se::Class::create("PSAppUtils", obj, nullptr, nullptr);

    cls->defineFunction("setSocketResponseCb", _SE(js_socket_PSAppUtils_setSocketResponseCb));
    cls->defineFunction("socketStateChange", _SE(js_socket_PSAppUtils_socketStateChange));
    cls->defineFunction("setUdpSocketResponseCb", _SE(js_socket_PSAppUtils_setUdpSocketResponseCb));
    cls->defineFunction("socketRequestPB", _SE(js_socket_PSAppUtils_socketRequestPB));
    cls->defineFunction("socketResponse", _SE(js_socket_PSAppUtils_socketResponse));
    cls->defineFunction("netStateChange", _SE(js_socket_PSAppUtils_netStateChange));
    cls->defineFunction("socketRequest", _SE(js_socket_PSAppUtils_socketRequest));
    cls->defineFunction("udpSocketRequestPB", _SE(js_socket_PSAppUtils_udpSocketRequestPB));
    cls->defineFunction("getCurrentTime", _SE(js_socket_PSAppUtils_getCurrentTime));
    cls->defineFunction("udpSocketRequest", _SE(js_socket_PSAppUtils_udpSocketRequest));
    cls->defineFunction("udpSocketResponse", _SE(js_socket_PSAppUtils_udpSocketResponse));
    cls->defineFunction("isSocketConnect", _SE(js_socket_PSAppUtils_isSocketConnect));
    cls->defineFunction("socketRequestPB2", _SE(js_socket_PSAppUtils_socketRequestPB2));
    cls->defineFunction("resetSocketLastTime", _SE(js_socket_PSAppUtils_resetSocketLastTime));
    cls->defineFunction("udpReset", _SE(js_socket_PSAppUtils_udpReset));
    cls->defineStaticFunction("purgeAppUtils", _SE(js_socket_PSAppUtils_purgeAppUtils));
    cls->defineStaticFunction("getInstance", _SE(js_socket_PSAppUtils_getInstance));
    cls->defineFinalizeFunction(_SE(js_PSAppUtils_finalize));
    cls->install();
    JSBClassType::registerClass<PSAppUtils>(cls);

    __jsb_PSAppUtils_proto = cls->getProto();
    __jsb_PSAppUtils_class = cls;

    se::ScriptEngine::getInstance()->clearException();
    return true;
}

bool register_all_socket(se::Object* obj)
{
    // Get the global ns
    se::Object* ns = se::ScriptEngine::getInstance()->getGlobalObject();

    js_register_socket_PSAppUtils(ns);
    return true;
}

