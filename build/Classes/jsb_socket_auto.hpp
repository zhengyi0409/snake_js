#pragma once
#include "base/ccConfig.h"

#include "cocos/scripting/js-bindings/jswrapper/SeApi.h"

extern se::Object* __jsb_PSAppUtils_proto;
extern se::Class* __jsb_PSAppUtils_class;

bool js_register_PSAppUtils(se::Object* obj);
bool register_all_socket(se::Object* obj);
SE_DECLARE_FUNC(js_socket_PSAppUtils_setSocketResponseCb);
SE_DECLARE_FUNC(js_socket_PSAppUtils_socketStateChange);
SE_DECLARE_FUNC(js_socket_PSAppUtils_setUdpSocketResponseCb);
SE_DECLARE_FUNC(js_socket_PSAppUtils_socketRequestPB);
SE_DECLARE_FUNC(js_socket_PSAppUtils_socketResponse);
SE_DECLARE_FUNC(js_socket_PSAppUtils_netStateChange);
SE_DECLARE_FUNC(js_socket_PSAppUtils_socketRequest);
SE_DECLARE_FUNC(js_socket_PSAppUtils_udpSocketRequestPB);
SE_DECLARE_FUNC(js_socket_PSAppUtils_getCurrentTime);
SE_DECLARE_FUNC(js_socket_PSAppUtils_udpSocketRequest);
SE_DECLARE_FUNC(js_socket_PSAppUtils_udpSocketResponse);
SE_DECLARE_FUNC(js_socket_PSAppUtils_isSocketConnect);
SE_DECLARE_FUNC(js_socket_PSAppUtils_socketRequestPB2);
SE_DECLARE_FUNC(js_socket_PSAppUtils_resetSocketLastTime);
SE_DECLARE_FUNC(js_socket_PSAppUtils_udpReset);
SE_DECLARE_FUNC(js_socket_PSAppUtils_purgeAppUtils);
SE_DECLARE_FUNC(js_socket_PSAppUtils_getInstance);

