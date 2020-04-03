/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspbcomp = require('google-protobuf');
var COMPILED = jspbcomp.COMPILED;
var jspb = jspbcomp.jspb;
var goog = jspbcomp.goog;
var global = Function('return this')();

var common_pb = require('./common_pb.js');
var ChatLog_pb = require('./ChatLog_pb.js');
var DefaultData_pb = require('./DefaultData_pb.js');
goog.exportSymbol('proto.MsgGamesChatNtf', null, global);
goog.exportSymbol('proto.MsgGamesChatRep', null, global);
goog.exportSymbol('proto.MsgGamesChatReq', null, global);
goog.exportSymbol('proto.MsgPlfAcBackgroundChangeNtf', null, global);
goog.exportSymbol('proto.MsgPlfAcCancelRep', null, global);
goog.exportSymbol('proto.MsgPlfAcCancelReq', null, global);
goog.exportSymbol('proto.MsgPlfAcChatLogReq', null, global);
goog.exportSymbol('proto.MsgPlfAcChatNtf', null, global);
goog.exportSymbol('proto.MsgPlfAcChatRep', null, global);
goog.exportSymbol('proto.MsgPlfAcChatReq', null, global);
goog.exportSymbol('proto.MsgPlfAcConfigNtf', null, global);
goog.exportSymbol('proto.MsgPlfAcCreateInfo', null, global);
goog.exportSymbol('proto.MsgPlfAcCreateNtf', null, global);
goog.exportSymbol('proto.MsgPlfAcCreateRep', null, global);
goog.exportSymbol('proto.MsgPlfAcCreateReq', null, global);
goog.exportSymbol('proto.MsgPlfAcDestoryNtf', null, global);
goog.exportSymbol('proto.MsgPlfAcEnterInfo', null, global);
goog.exportSymbol('proto.MsgPlfAcEnterNtf', null, global);
goog.exportSymbol('proto.MsgPlfAcEnterRep', null, global);
goog.exportSymbol('proto.MsgPlfAcEnterReq', null, global);
goog.exportSymbol('proto.MsgPlfAcExitNtf', null, global);
goog.exportSymbol('proto.MsgPlfAcGameEnterNtf', null, global);
goog.exportSymbol('proto.MsgPlfAcGameReadyNtf', null, global);
goog.exportSymbol('proto.MsgPlfAcGameReadyReq', null, global);
goog.exportSymbol('proto.MsgPlfAcGameStartNtf', null, global);
goog.exportSymbol('proto.MsgPlfAcKilledNtf', null, global);
goog.exportSymbol('proto.MsgPlfAcKilledReq', null, global);
goog.exportSymbol('proto.MsgPlfAcMatchNtf', null, global);
goog.exportSymbol('proto.MsgPlfAcMatchRep', null, global);
goog.exportSymbol('proto.MsgPlfAcMatchReq', null, global);
goog.exportSymbol('proto.MsgPlfAcMikeAcceptNtf', null, global);
goog.exportSymbol('proto.MsgPlfAcMikeAcceptReq', null, global);
goog.exportSymbol('proto.MsgPlfAcMikeInfo', null, global);
goog.exportSymbol('proto.MsgPlfAcMikeInviteNtf', null, global);
goog.exportSymbol('proto.MsgPlfAcMikeInviteReq', null, global);
goog.exportSymbol('proto.MsgPlfAcMikeNtf', null, global);
goog.exportSymbol('proto.MsgPlfAcMikeOptNtf', null, global);
goog.exportSymbol('proto.MsgPlfAcMikeOptReq', null, global);
goog.exportSymbol('proto.MsgPlfAcMikeRep', null, global);
goog.exportSymbol('proto.MsgPlfAcMikeReq', null, global);
goog.exportSymbol('proto.MsgPlfAcMikeSuccessNtf', null, global);
goog.exportSymbol('proto.MsgPlfAcOnlineNtf', null, global);
goog.exportSymbol('proto.MsgPlfAcOwnerChangeNtf', null, global);
goog.exportSymbol('proto.MsgPlfAcPrivateChangeNtf', null, global);
goog.exportSymbol('proto.MsgPlfAcRecoveryRep', null, global);
goog.exportSymbol('proto.MsgPlfAcRoomNameChangeNtf', null, global);
goog.exportSymbol('proto.MsgPlfAcStateNtf', null, global);
goog.exportSymbol('proto.MsgPlfAcStateReq', null, global);
goog.exportSymbol('proto.MsgPlfAcTypeChangeNtf', null, global);
goog.exportSymbol('proto.MsgPlfChatNtf', null, global);
goog.exportSymbol('proto.MsgPlfChatRep', null, global);
goog.exportSymbol('proto.MsgPlfChatReq', null, global);
goog.exportSymbol('proto.MsgPlfGpCreateRep', null, global);
goog.exportSymbol('proto.MsgPlfGpCreateReq', null, global);
goog.exportSymbol('proto.MsgPlfGpEnterNtf', null, global);
goog.exportSymbol('proto.MsgPlfGpEnterRep', null, global);
goog.exportSymbol('proto.MsgPlfGpExitNtf', null, global);
goog.exportSymbol('proto.MsgPlfGpLeaderChangeNtf', null, global);
goog.exportSymbol('proto.MsgPlfGpModeChangeNtf', null, global);
goog.exportSymbol('proto.MsgPlfGpModeChangeRep', null, global);
goog.exportSymbol('proto.MsgPlfGpModeChangeReq', null, global);
goog.exportSymbol('proto.MsgPlfInteractNtf', null, global);
goog.exportSymbol('proto.MsgPlfInteractRep', null, global);
goog.exportSymbol('proto.MsgPlfInteractReq', null, global);
goog.exportSymbol('proto.MsgPlfLoginRep', null, global);
goog.exportSymbol('proto.MsgPlfLoginReq', null, global);
goog.exportSymbol('proto.MsgPlfMikeAcceptNtf', null, global);
goog.exportSymbol('proto.MsgPlfMikeAcceptReq', null, global);
goog.exportSymbol('proto.MsgPlfMikeInviteNtf', null, global);
goog.exportSymbol('proto.MsgPlfMikeInviteReq', null, global);
goog.exportSymbol('proto.MsgPlfMikeQuitNtf', null, global);
goog.exportSymbol('proto.MsgPlfMikeQuitReq', null, global);
goog.exportSymbol('proto.MsgPlfMikeRep', null, global);
goog.exportSymbol('proto.MsgPlfPkAcceptNtf', null, global);
goog.exportSymbol('proto.MsgPlfPkAcceptRep', null, global);
goog.exportSymbol('proto.MsgPlfPkAcceptReq', null, global);
goog.exportSymbol('proto.MsgPlfPkCancelRep', null, global);
goog.exportSymbol('proto.MsgPlfPkCancelReq', null, global);
goog.exportSymbol('proto.MsgPlfPkEnterNtf', null, global);
goog.exportSymbol('proto.MsgPlfPkEnterRep', null, global);
goog.exportSymbol('proto.MsgPlfPkEnterReq', null, global);
goog.exportSymbol('proto.MsgPlfPkExitNtf', null, global);
goog.exportSymbol('proto.MsgPlfPkExitReq', null, global);
goog.exportSymbol('proto.MsgPlfPkGroupNtf', null, global);
goog.exportSymbol('proto.MsgPlfPkInviteNtf', null, global);
goog.exportSymbol('proto.MsgPlfPkInviteRep', null, global);
goog.exportSymbol('proto.MsgPlfPkInviteReq', null, global);
goog.exportSymbol('proto.MsgPlfPkMatchNtf', null, global);
goog.exportSymbol('proto.MsgPlfPkMatchRep', null, global);
goog.exportSymbol('proto.MsgPlfPkMatchReq', null, global);
goog.exportSymbol('proto.MsgPlfPkReadyNtf', null, global);
goog.exportSymbol('proto.MsgPlfPkReadyReq', null, global);
goog.exportSymbol('proto.MsgPlfPkResultNtf', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfLoginReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfLoginReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfLoginReq.displayName = 'proto.MsgPlfLoginReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfLoginReq.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfLoginReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfLoginReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfLoginReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getField(msg, 1),
    token: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfLoginReq}
 */
proto.MsgPlfLoginReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfLoginReq;
  return proto.MsgPlfLoginReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfLoginReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfLoginReq}
 */
proto.MsgPlfLoginReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfLoginReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfLoginReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfLoginReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfLoginReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * required uint32 uid = 1;
 * @return {number}
 */
proto.MsgPlfLoginReq.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfLoginReq.prototype.setUid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfLoginReq.prototype.clearUid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfLoginReq.prototype.hasUid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string token = 2;
 * @return {string}
 */
proto.MsgPlfLoginReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.MsgPlfLoginReq.prototype.setToken = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfLoginReq.prototype.clearToken = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfLoginReq.prototype.hasToken = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfLoginRep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfLoginRep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfLoginRep.displayName = 'proto.MsgPlfLoginRep';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfLoginRep.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfLoginRep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfLoginRep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfLoginRep.toObject = function(includeInstance, msg) {
  var f, obj = {
    rcode: jspb.Message.getField(msg, 1),
    ip: jspb.Message.getField(msg, 2),
    port: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfLoginRep}
 */
proto.MsgPlfLoginRep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfLoginRep;
  return proto.MsgPlfLoginRep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfLoginRep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfLoginRep}
 */
proto.MsgPlfLoginRep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIp(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfLoginRep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfLoginRep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfLoginRep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfLoginRep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * required int32 rcode = 1;
 * @return {number}
 */
proto.MsgPlfLoginRep.prototype.getRcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfLoginRep.prototype.setRcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfLoginRep.prototype.clearRcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfLoginRep.prototype.hasRcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string ip = 2;
 * @return {string}
 */
proto.MsgPlfLoginRep.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.MsgPlfLoginRep.prototype.setIp = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfLoginRep.prototype.clearIp = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfLoginRep.prototype.hasIp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 port = 3;
 * @return {number}
 */
proto.MsgPlfLoginRep.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.MsgPlfLoginRep.prototype.setPort = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.MsgPlfLoginRep.prototype.clearPort = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfLoginRep.prototype.hasPort = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfPkMatchReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfPkMatchReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfPkMatchReq.displayName = 'proto.MsgPlfPkMatchReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfPkMatchReq.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfPkMatchReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfPkMatchReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkMatchReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getField(msg, 1),
    type: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfPkMatchReq}
 */
proto.MsgPlfPkMatchReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfPkMatchReq;
  return proto.MsgPlfPkMatchReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfPkMatchReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfPkMatchReq}
 */
proto.MsgPlfPkMatchReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfPkMatchReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfPkMatchReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfPkMatchReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkMatchReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * required uint32 uid = 1;
 * @return {number}
 */
proto.MsgPlfPkMatchReq.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfPkMatchReq.prototype.setUid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfPkMatchReq.prototype.clearUid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkMatchReq.prototype.hasUid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint32 type = 2;
 * @return {number}
 */
proto.MsgPlfPkMatchReq.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfPkMatchReq.prototype.setType = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfPkMatchReq.prototype.clearType = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkMatchReq.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfPkMatchRep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfPkMatchRep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfPkMatchRep.displayName = 'proto.MsgPlfPkMatchRep';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfPkMatchRep.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfPkMatchRep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfPkMatchRep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkMatchRep.toObject = function(includeInstance, msg) {
  var f, obj = {
    rcode: jspb.Message.getField(msg, 1),
    type: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfPkMatchRep}
 */
proto.MsgPlfPkMatchRep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfPkMatchRep;
  return proto.MsgPlfPkMatchRep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfPkMatchRep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfPkMatchRep}
 */
proto.MsgPlfPkMatchRep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRcode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfPkMatchRep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfPkMatchRep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfPkMatchRep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkMatchRep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * required int32 rcode = 1;
 * @return {number}
 */
proto.MsgPlfPkMatchRep.prototype.getRcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfPkMatchRep.prototype.setRcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfPkMatchRep.prototype.clearRcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkMatchRep.prototype.hasRcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint32 type = 2;
 * @return {number}
 */
proto.MsgPlfPkMatchRep.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfPkMatchRep.prototype.setType = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfPkMatchRep.prototype.clearType = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkMatchRep.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfPkMatchNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.MsgPlfPkMatchNtf.repeatedFields_, null);
};
goog.inherits(proto.MsgPlfPkMatchNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfPkMatchNtf.displayName = 'proto.MsgPlfPkMatchNtf';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.MsgPlfPkMatchNtf.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfPkMatchNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfPkMatchNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfPkMatchNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkMatchNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getField(msg, 1),
    infoList: jspb.Message.toObjectList(msg.getInfoList(),
    common_pb.PkPlayerInfo.toObject, includeInstance),
    id: jspb.Message.getField(msg, 3),
    host: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfPkMatchNtf}
 */
proto.MsgPlfPkMatchNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfPkMatchNtf;
  return proto.MsgPlfPkMatchNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfPkMatchNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfPkMatchNtf}
 */
proto.MsgPlfPkMatchNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 2:
      var value = new common_pb.PkPlayerInfo;
      reader.readMessage(value,common_pb.PkPlayerInfo.deserializeBinaryFromReader);
      msg.addInfo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHost(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfPkMatchNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfPkMatchNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfPkMatchNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkMatchNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_pb.PkPlayerInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * required int32 type = 1;
 * @return {number}
 */
proto.MsgPlfPkMatchNtf.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfPkMatchNtf.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfPkMatchNtf.prototype.clearType = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkMatchNtf.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated PkPlayerInfo info = 2;
 * @return {!Array<!proto.PkPlayerInfo>}
 */
proto.MsgPlfPkMatchNtf.prototype.getInfoList = function() {
  return /** @type{!Array<!proto.PkPlayerInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.PkPlayerInfo, 2));
};


/** @param {!Array<!proto.PkPlayerInfo>} value */
proto.MsgPlfPkMatchNtf.prototype.setInfoList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.PkPlayerInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PkPlayerInfo}
 */
proto.MsgPlfPkMatchNtf.prototype.addInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.PkPlayerInfo, opt_index);
};


proto.MsgPlfPkMatchNtf.prototype.clearInfoList = function() {
  this.setInfoList([]);
};


/**
 * optional int64 id = 3;
 * @return {number}
 */
proto.MsgPlfPkMatchNtf.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.MsgPlfPkMatchNtf.prototype.setId = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.MsgPlfPkMatchNtf.prototype.clearId = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkMatchNtf.prototype.hasId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 host = 4;
 * @return {number}
 */
proto.MsgPlfPkMatchNtf.prototype.getHost = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.MsgPlfPkMatchNtf.prototype.setHost = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.MsgPlfPkMatchNtf.prototype.clearHost = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkMatchNtf.prototype.hasHost = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfPkCancelReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfPkCancelReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfPkCancelReq.displayName = 'proto.MsgPlfPkCancelReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfPkCancelReq.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfPkCancelReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfPkCancelReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkCancelReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getField(msg, 1),
    type: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfPkCancelReq}
 */
proto.MsgPlfPkCancelReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfPkCancelReq;
  return proto.MsgPlfPkCancelReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfPkCancelReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfPkCancelReq}
 */
proto.MsgPlfPkCancelReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfPkCancelReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfPkCancelReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfPkCancelReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkCancelReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * required uint32 uid = 1;
 * @return {number}
 */
proto.MsgPlfPkCancelReq.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfPkCancelReq.prototype.setUid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfPkCancelReq.prototype.clearUid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkCancelReq.prototype.hasUid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint32 type = 2;
 * @return {number}
 */
proto.MsgPlfPkCancelReq.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfPkCancelReq.prototype.setType = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfPkCancelReq.prototype.clearType = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkCancelReq.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfPkCancelRep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfPkCancelRep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfPkCancelRep.displayName = 'proto.MsgPlfPkCancelRep';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfPkCancelRep.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfPkCancelRep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfPkCancelRep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkCancelRep.toObject = function(includeInstance, msg) {
  var f, obj = {
    rcode: jspb.Message.getField(msg, 1),
    type: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfPkCancelRep}
 */
proto.MsgPlfPkCancelRep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfPkCancelRep;
  return proto.MsgPlfPkCancelRep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfPkCancelRep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfPkCancelRep}
 */
proto.MsgPlfPkCancelRep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRcode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfPkCancelRep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfPkCancelRep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfPkCancelRep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkCancelRep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * required int32 rcode = 1;
 * @return {number}
 */
proto.MsgPlfPkCancelRep.prototype.getRcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfPkCancelRep.prototype.setRcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfPkCancelRep.prototype.clearRcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkCancelRep.prototype.hasRcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint32 type = 2;
 * @return {number}
 */
proto.MsgPlfPkCancelRep.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfPkCancelRep.prototype.setType = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfPkCancelRep.prototype.clearType = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkCancelRep.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfPkEnterReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfPkEnterReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfPkEnterReq.displayName = 'proto.MsgPlfPkEnterReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfPkEnterReq.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfPkEnterReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfPkEnterReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkEnterReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getField(msg, 1),
    type: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfPkEnterReq}
 */
proto.MsgPlfPkEnterReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfPkEnterReq;
  return proto.MsgPlfPkEnterReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfPkEnterReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfPkEnterReq}
 */
proto.MsgPlfPkEnterReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfPkEnterReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfPkEnterReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfPkEnterReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkEnterReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * required uint32 uid = 1;
 * @return {number}
 */
proto.MsgPlfPkEnterReq.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfPkEnterReq.prototype.setUid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfPkEnterReq.prototype.clearUid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkEnterReq.prototype.hasUid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint32 type = 2;
 * @return {number}
 */
proto.MsgPlfPkEnterReq.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfPkEnterReq.prototype.setType = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfPkEnterReq.prototype.clearType = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkEnterReq.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfPkEnterRep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.MsgPlfPkEnterRep.repeatedFields_, null);
};
goog.inherits(proto.MsgPlfPkEnterRep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfPkEnterRep.displayName = 'proto.MsgPlfPkEnterRep';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.MsgPlfPkEnterRep.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfPkEnterRep.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfPkEnterRep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfPkEnterRep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkEnterRep.toObject = function(includeInstance, msg) {
  var f, obj = {
    rcode: jspb.Message.getField(msg, 1),
    type: jspb.Message.getField(msg, 2),
    infoList: jspb.Message.toObjectList(msg.getInfoList(),
    common_pb.PkPlayerInfo.toObject, includeInstance),
    ip: jspb.Message.getField(msg, 4),
    port: jspb.Message.getField(msg, 5),
    session: jspb.Message.getField(msg, 6),
    time: jspb.Message.getField(msg, 7)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfPkEnterRep}
 */
proto.MsgPlfPkEnterRep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfPkEnterRep;
  return proto.MsgPlfPkEnterRep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfPkEnterRep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfPkEnterRep}
 */
proto.MsgPlfPkEnterRep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRcode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 3:
      var value = new common_pb.PkPlayerInfo;
      reader.readMessage(value,common_pb.PkPlayerInfo.deserializeBinaryFromReader);
      msg.addInfo(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIp(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSession(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfPkEnterRep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfPkEnterRep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfPkEnterRep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkEnterRep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      common_pb.PkPlayerInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
};


/**
 * required int32 rcode = 1;
 * @return {number}
 */
proto.MsgPlfPkEnterRep.prototype.getRcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfPkEnterRep.prototype.setRcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfPkEnterRep.prototype.clearRcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkEnterRep.prototype.hasRcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint32 type = 2;
 * @return {number}
 */
proto.MsgPlfPkEnterRep.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfPkEnterRep.prototype.setType = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfPkEnterRep.prototype.clearType = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkEnterRep.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated PkPlayerInfo info = 3;
 * @return {!Array<!proto.PkPlayerInfo>}
 */
proto.MsgPlfPkEnterRep.prototype.getInfoList = function() {
  return /** @type{!Array<!proto.PkPlayerInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.PkPlayerInfo, 3));
};


/** @param {!Array<!proto.PkPlayerInfo>} value */
proto.MsgPlfPkEnterRep.prototype.setInfoList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.PkPlayerInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PkPlayerInfo}
 */
proto.MsgPlfPkEnterRep.prototype.addInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.PkPlayerInfo, opt_index);
};


proto.MsgPlfPkEnterRep.prototype.clearInfoList = function() {
  this.setInfoList([]);
};


/**
 * optional string ip = 4;
 * @return {string}
 */
proto.MsgPlfPkEnterRep.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.MsgPlfPkEnterRep.prototype.setIp = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.MsgPlfPkEnterRep.prototype.clearIp = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkEnterRep.prototype.hasIp = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 port = 5;
 * @return {number}
 */
proto.MsgPlfPkEnterRep.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.MsgPlfPkEnterRep.prototype.setPort = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.MsgPlfPkEnterRep.prototype.clearPort = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkEnterRep.prototype.hasPort = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 session = 6;
 * @return {number}
 */
proto.MsgPlfPkEnterRep.prototype.getSession = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.MsgPlfPkEnterRep.prototype.setSession = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.MsgPlfPkEnterRep.prototype.clearSession = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkEnterRep.prototype.hasSession = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 time = 7;
 * @return {number}
 */
proto.MsgPlfPkEnterRep.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.MsgPlfPkEnterRep.prototype.setTime = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.MsgPlfPkEnterRep.prototype.clearTime = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkEnterRep.prototype.hasTime = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfPkEnterNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfPkEnterNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfPkEnterNtf.displayName = 'proto.MsgPlfPkEnterNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfPkEnterNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfPkEnterNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfPkEnterNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkEnterNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getField(msg, 1),
    info: (f = msg.getInfo()) && common_pb.PkPlayerInfo.toObject(includeInstance, f),
    id: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfPkEnterNtf}
 */
proto.MsgPlfPkEnterNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfPkEnterNtf;
  return proto.MsgPlfPkEnterNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfPkEnterNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfPkEnterNtf}
 */
proto.MsgPlfPkEnterNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 2:
      var value = new common_pb.PkPlayerInfo;
      reader.readMessage(value,common_pb.PkPlayerInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfPkEnterNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfPkEnterNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfPkEnterNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkEnterNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.PkPlayerInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * required int32 type = 1;
 * @return {number}
 */
proto.MsgPlfPkEnterNtf.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfPkEnterNtf.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfPkEnterNtf.prototype.clearType = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkEnterNtf.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required PkPlayerInfo info = 2;
 * @return {!proto.PkPlayerInfo}
 */
proto.MsgPlfPkEnterNtf.prototype.getInfo = function() {
  return /** @type{!proto.PkPlayerInfo} */ (
    jspb.Message.getWrapperField(this, common_pb.PkPlayerInfo, 2, 1));
};


/** @param {!proto.PkPlayerInfo} value */
proto.MsgPlfPkEnterNtf.prototype.setInfo = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.MsgPlfPkEnterNtf.prototype.clearInfo = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkEnterNtf.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 id = 3;
 * @return {number}
 */
proto.MsgPlfPkEnterNtf.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.MsgPlfPkEnterNtf.prototype.setId = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.MsgPlfPkEnterNtf.prototype.clearId = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkEnterNtf.prototype.hasId = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfPkGroupNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.MsgPlfPkGroupNtf.repeatedFields_, null);
};
goog.inherits(proto.MsgPlfPkGroupNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfPkGroupNtf.displayName = 'proto.MsgPlfPkGroupNtf';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.MsgPlfPkGroupNtf.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfPkGroupNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfPkGroupNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfPkGroupNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkGroupNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getField(msg, 1),
    infoList: jspb.Message.toObjectList(msg.getInfoList(),
    common_pb.PkPlayerInfo.toObject, includeInstance),
    id: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfPkGroupNtf}
 */
proto.MsgPlfPkGroupNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfPkGroupNtf;
  return proto.MsgPlfPkGroupNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfPkGroupNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfPkGroupNtf}
 */
proto.MsgPlfPkGroupNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 2:
      var value = new common_pb.PkPlayerInfo;
      reader.readMessage(value,common_pb.PkPlayerInfo.deserializeBinaryFromReader);
      msg.addInfo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfPkGroupNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfPkGroupNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfPkGroupNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkGroupNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_pb.PkPlayerInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * required int32 type = 1;
 * @return {number}
 */
proto.MsgPlfPkGroupNtf.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfPkGroupNtf.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfPkGroupNtf.prototype.clearType = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkGroupNtf.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated PkPlayerInfo info = 2;
 * @return {!Array<!proto.PkPlayerInfo>}
 */
proto.MsgPlfPkGroupNtf.prototype.getInfoList = function() {
  return /** @type{!Array<!proto.PkPlayerInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.PkPlayerInfo, 2));
};


/** @param {!Array<!proto.PkPlayerInfo>} value */
proto.MsgPlfPkGroupNtf.prototype.setInfoList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.PkPlayerInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PkPlayerInfo}
 */
proto.MsgPlfPkGroupNtf.prototype.addInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.PkPlayerInfo, opt_index);
};


proto.MsgPlfPkGroupNtf.prototype.clearInfoList = function() {
  this.setInfoList([]);
};


/**
 * optional int64 id = 3;
 * @return {number}
 */
proto.MsgPlfPkGroupNtf.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.MsgPlfPkGroupNtf.prototype.setId = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.MsgPlfPkGroupNtf.prototype.clearId = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkGroupNtf.prototype.hasId = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfPkExitReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfPkExitReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfPkExitReq.displayName = 'proto.MsgPlfPkExitReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfPkExitReq.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfPkExitReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfPkExitReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkExitReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfPkExitReq}
 */
proto.MsgPlfPkExitReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfPkExitReq;
  return proto.MsgPlfPkExitReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfPkExitReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfPkExitReq}
 */
proto.MsgPlfPkExitReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfPkExitReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfPkExitReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfPkExitReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkExitReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * required uint32 uid = 1;
 * @return {number}
 */
proto.MsgPlfPkExitReq.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfPkExitReq.prototype.setUid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfPkExitReq.prototype.clearUid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkExitReq.prototype.hasUid = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfPkExitNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfPkExitNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfPkExitNtf.displayName = 'proto.MsgPlfPkExitNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfPkExitNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfPkExitNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfPkExitNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkExitNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfPkExitNtf}
 */
proto.MsgPlfPkExitNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfPkExitNtf;
  return proto.MsgPlfPkExitNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfPkExitNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfPkExitNtf}
 */
proto.MsgPlfPkExitNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfPkExitNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfPkExitNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfPkExitNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkExitNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * required uint32 uid = 1;
 * @return {number}
 */
proto.MsgPlfPkExitNtf.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfPkExitNtf.prototype.setUid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfPkExitNtf.prototype.clearUid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkExitNtf.prototype.hasUid = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfPkReadyReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfPkReadyReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfPkReadyReq.displayName = 'proto.MsgPlfPkReadyReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfPkReadyReq.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfPkReadyReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfPkReadyReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkReadyReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfPkReadyReq}
 */
proto.MsgPlfPkReadyReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfPkReadyReq;
  return proto.MsgPlfPkReadyReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfPkReadyReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfPkReadyReq}
 */
proto.MsgPlfPkReadyReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfPkReadyReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfPkReadyReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfPkReadyReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkReadyReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * required uint32 uid = 1;
 * @return {number}
 */
proto.MsgPlfPkReadyReq.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfPkReadyReq.prototype.setUid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfPkReadyReq.prototype.clearUid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkReadyReq.prototype.hasUid = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfPkReadyNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfPkReadyNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfPkReadyNtf.displayName = 'proto.MsgPlfPkReadyNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfPkReadyNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfPkReadyNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfPkReadyNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkReadyNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getField(msg, 1),
    all: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfPkReadyNtf}
 */
proto.MsgPlfPkReadyNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfPkReadyNtf;
  return proto.MsgPlfPkReadyNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfPkReadyNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfPkReadyNtf}
 */
proto.MsgPlfPkReadyNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAll(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfPkReadyNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfPkReadyNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfPkReadyNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkReadyNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * required uint32 uid = 1;
 * @return {number}
 */
proto.MsgPlfPkReadyNtf.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfPkReadyNtf.prototype.setUid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfPkReadyNtf.prototype.clearUid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkReadyNtf.prototype.hasUid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 all = 2;
 * @return {number}
 */
proto.MsgPlfPkReadyNtf.prototype.getAll = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfPkReadyNtf.prototype.setAll = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfPkReadyNtf.prototype.clearAll = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkReadyNtf.prototype.hasAll = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfChatReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfChatReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfChatReq.displayName = 'proto.MsgPlfChatReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfChatReq.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfChatReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfChatReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfChatReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && ChatLog_pb.ChatItem.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfChatReq}
 */
proto.MsgPlfChatReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfChatReq;
  return proto.MsgPlfChatReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfChatReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfChatReq}
 */
proto.MsgPlfChatReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ChatLog_pb.ChatItem;
      reader.readMessage(value,ChatLog_pb.ChatItem.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfChatReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfChatReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfChatReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfChatReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ChatLog_pb.ChatItem.serializeBinaryToWriter
    );
  }
};


/**
 * required ChatItem info = 1;
 * @return {!proto.ChatItem}
 */
proto.MsgPlfChatReq.prototype.getInfo = function() {
  return /** @type{!proto.ChatItem} */ (
    jspb.Message.getWrapperField(this, ChatLog_pb.ChatItem, 1, 1));
};


/** @param {!proto.ChatItem} value */
proto.MsgPlfChatReq.prototype.setInfo = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.MsgPlfChatReq.prototype.clearInfo = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfChatReq.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfChatRep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfChatRep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfChatRep.displayName = 'proto.MsgPlfChatRep';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfChatRep.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfChatRep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfChatRep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfChatRep.toObject = function(includeInstance, msg) {
  var f, obj = {
    rcode: jspb.Message.getField(msg, 1),
    msgId: jspb.Message.getField(msg, 2),
    msgType: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfChatRep}
 */
proto.MsgPlfChatRep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfChatRep;
  return proto.MsgPlfChatRep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfChatRep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfChatRep}
 */
proto.MsgPlfChatRep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRcode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMsgId(value);
      break;
    case 3:
      var value = /** @type {!proto.MsgType} */ (reader.readEnum());
      msg.setMsgType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfChatRep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfChatRep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfChatRep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfChatRep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {!proto.MsgType} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * required int32 rcode = 1;
 * @return {number}
 */
proto.MsgPlfChatRep.prototype.getRcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfChatRep.prototype.setRcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfChatRep.prototype.clearRcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfChatRep.prototype.hasRcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 msg_id = 2;
 * @return {number}
 */
proto.MsgPlfChatRep.prototype.getMsgId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfChatRep.prototype.setMsgId = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfChatRep.prototype.clearMsgId = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfChatRep.prototype.hasMsgId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MsgType msg_type = 3;
 * @return {!proto.MsgType}
 */
proto.MsgPlfChatRep.prototype.getMsgType = function() {
  return /** @type {!proto.MsgType} */ (jspb.Message.getFieldWithDefault(this, 3, 1));
};


/** @param {!proto.MsgType} value */
proto.MsgPlfChatRep.prototype.setMsgType = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.MsgPlfChatRep.prototype.clearMsgType = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfChatRep.prototype.hasMsgType = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfChatNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfChatNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfChatNtf.displayName = 'proto.MsgPlfChatNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfChatNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfChatNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfChatNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfChatNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && ChatLog_pb.ChatItem.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfChatNtf}
 */
proto.MsgPlfChatNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfChatNtf;
  return proto.MsgPlfChatNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfChatNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfChatNtf}
 */
proto.MsgPlfChatNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ChatLog_pb.ChatItem;
      reader.readMessage(value,ChatLog_pb.ChatItem.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfChatNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfChatNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfChatNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfChatNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ChatLog_pb.ChatItem.serializeBinaryToWriter
    );
  }
};


/**
 * required ChatItem info = 1;
 * @return {!proto.ChatItem}
 */
proto.MsgPlfChatNtf.prototype.getInfo = function() {
  return /** @type{!proto.ChatItem} */ (
    jspb.Message.getWrapperField(this, ChatLog_pb.ChatItem, 1, 1));
};


/** @param {!proto.ChatItem} value */
proto.MsgPlfChatNtf.prototype.setInfo = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.MsgPlfChatNtf.prototype.clearInfo = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfChatNtf.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfInteractReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfInteractReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfInteractReq.displayName = 'proto.MsgPlfInteractReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfInteractReq.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfInteractReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfInteractReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfInteractReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && ChatLog_pb.ChatItem.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfInteractReq}
 */
proto.MsgPlfInteractReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfInteractReq;
  return proto.MsgPlfInteractReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfInteractReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfInteractReq}
 */
proto.MsgPlfInteractReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ChatLog_pb.ChatItem;
      reader.readMessage(value,ChatLog_pb.ChatItem.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfInteractReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfInteractReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfInteractReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfInteractReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ChatLog_pb.ChatItem.serializeBinaryToWriter
    );
  }
};


/**
 * required ChatItem info = 1;
 * @return {!proto.ChatItem}
 */
proto.MsgPlfInteractReq.prototype.getInfo = function() {
  return /** @type{!proto.ChatItem} */ (
    jspb.Message.getWrapperField(this, ChatLog_pb.ChatItem, 1, 1));
};


/** @param {!proto.ChatItem} value */
proto.MsgPlfInteractReq.prototype.setInfo = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.MsgPlfInteractReq.prototype.clearInfo = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfInteractReq.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfInteractRep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfInteractRep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfInteractRep.displayName = 'proto.MsgPlfInteractRep';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfInteractRep.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfInteractRep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfInteractRep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfInteractRep.toObject = function(includeInstance, msg) {
  var f, obj = {
    rcode: jspb.Message.getField(msg, 1),
    msgId: jspb.Message.getField(msg, 2),
    msgType: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfInteractRep}
 */
proto.MsgPlfInteractRep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfInteractRep;
  return proto.MsgPlfInteractRep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfInteractRep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfInteractRep}
 */
proto.MsgPlfInteractRep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRcode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMsgId(value);
      break;
    case 3:
      var value = /** @type {!proto.MsgType} */ (reader.readEnum());
      msg.setMsgType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfInteractRep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfInteractRep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfInteractRep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfInteractRep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {!proto.MsgType} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * required int32 rcode = 1;
 * @return {number}
 */
proto.MsgPlfInteractRep.prototype.getRcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfInteractRep.prototype.setRcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfInteractRep.prototype.clearRcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfInteractRep.prototype.hasRcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 msg_id = 2;
 * @return {number}
 */
proto.MsgPlfInteractRep.prototype.getMsgId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfInteractRep.prototype.setMsgId = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfInteractRep.prototype.clearMsgId = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfInteractRep.prototype.hasMsgId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MsgType msg_type = 3;
 * @return {!proto.MsgType}
 */
proto.MsgPlfInteractRep.prototype.getMsgType = function() {
  return /** @type {!proto.MsgType} */ (jspb.Message.getFieldWithDefault(this, 3, 1));
};


/** @param {!proto.MsgType} value */
proto.MsgPlfInteractRep.prototype.setMsgType = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.MsgPlfInteractRep.prototype.clearMsgType = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfInteractRep.prototype.hasMsgType = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfInteractNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfInteractNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfInteractNtf.displayName = 'proto.MsgPlfInteractNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfInteractNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfInteractNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfInteractNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfInteractNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && ChatLog_pb.ChatItem.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfInteractNtf}
 */
proto.MsgPlfInteractNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfInteractNtf;
  return proto.MsgPlfInteractNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfInteractNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfInteractNtf}
 */
proto.MsgPlfInteractNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ChatLog_pb.ChatItem;
      reader.readMessage(value,ChatLog_pb.ChatItem.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfInteractNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfInteractNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfInteractNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfInteractNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ChatLog_pb.ChatItem.serializeBinaryToWriter
    );
  }
};


/**
 * required ChatItem info = 1;
 * @return {!proto.ChatItem}
 */
proto.MsgPlfInteractNtf.prototype.getInfo = function() {
  return /** @type{!proto.ChatItem} */ (
    jspb.Message.getWrapperField(this, ChatLog_pb.ChatItem, 1, 1));
};


/** @param {!proto.ChatItem} value */
proto.MsgPlfInteractNtf.prototype.setInfo = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.MsgPlfInteractNtf.prototype.clearInfo = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfInteractNtf.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfMikeInviteReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfMikeInviteReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfMikeInviteReq.displayName = 'proto.MsgPlfMikeInviteReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfMikeInviteReq.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfMikeInviteReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfMikeInviteReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfMikeInviteReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomId: jspb.Message.getField(msg, 1),
    targetUid: jspb.Message.getField(msg, 2),
    sayUid: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfMikeInviteReq}
 */
proto.MsgPlfMikeInviteReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfMikeInviteReq;
  return proto.MsgPlfMikeInviteReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfMikeInviteReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfMikeInviteReq}
 */
proto.MsgPlfMikeInviteReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTargetUid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSayUid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfMikeInviteReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfMikeInviteReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfMikeInviteReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfMikeInviteReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string room_id = 1;
 * @return {string}
 */
proto.MsgPlfMikeInviteReq.prototype.getRoomId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.MsgPlfMikeInviteReq.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfMikeInviteReq.prototype.clearRoomId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfMikeInviteReq.prototype.hasRoomId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 target_uid = 2;
 * @return {number}
 */
proto.MsgPlfMikeInviteReq.prototype.getTargetUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfMikeInviteReq.prototype.setTargetUid = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfMikeInviteReq.prototype.clearTargetUid = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfMikeInviteReq.prototype.hasTargetUid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 say_uid = 3;
 * @return {number}
 */
proto.MsgPlfMikeInviteReq.prototype.getSayUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.MsgPlfMikeInviteReq.prototype.setSayUid = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.MsgPlfMikeInviteReq.prototype.clearSayUid = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfMikeInviteReq.prototype.hasSayUid = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfMikeInviteNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfMikeInviteNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfMikeInviteNtf.displayName = 'proto.MsgPlfMikeInviteNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfMikeInviteNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfMikeInviteNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfMikeInviteNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfMikeInviteNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomId: jspb.Message.getField(msg, 1),
    targetUid: jspb.Message.getField(msg, 2),
    sayUid: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfMikeInviteNtf}
 */
proto.MsgPlfMikeInviteNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfMikeInviteNtf;
  return proto.MsgPlfMikeInviteNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfMikeInviteNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfMikeInviteNtf}
 */
proto.MsgPlfMikeInviteNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTargetUid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSayUid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfMikeInviteNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfMikeInviteNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfMikeInviteNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfMikeInviteNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string room_id = 1;
 * @return {string}
 */
proto.MsgPlfMikeInviteNtf.prototype.getRoomId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.MsgPlfMikeInviteNtf.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfMikeInviteNtf.prototype.clearRoomId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfMikeInviteNtf.prototype.hasRoomId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 target_uid = 2;
 * @return {number}
 */
proto.MsgPlfMikeInviteNtf.prototype.getTargetUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfMikeInviteNtf.prototype.setTargetUid = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfMikeInviteNtf.prototype.clearTargetUid = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfMikeInviteNtf.prototype.hasTargetUid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 say_uid = 3;
 * @return {number}
 */
proto.MsgPlfMikeInviteNtf.prototype.getSayUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.MsgPlfMikeInviteNtf.prototype.setSayUid = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.MsgPlfMikeInviteNtf.prototype.clearSayUid = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfMikeInviteNtf.prototype.hasSayUid = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfMikeAcceptReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfMikeAcceptReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfMikeAcceptReq.displayName = 'proto.MsgPlfMikeAcceptReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfMikeAcceptReq.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfMikeAcceptReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfMikeAcceptReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfMikeAcceptReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomId: jspb.Message.getField(msg, 1),
    targetUid: jspb.Message.getField(msg, 2),
    sayUid: jspb.Message.getField(msg, 3),
    status: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfMikeAcceptReq}
 */
proto.MsgPlfMikeAcceptReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfMikeAcceptReq;
  return proto.MsgPlfMikeAcceptReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfMikeAcceptReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfMikeAcceptReq}
 */
proto.MsgPlfMikeAcceptReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTargetUid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSayUid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfMikeAcceptReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfMikeAcceptReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfMikeAcceptReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfMikeAcceptReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string room_id = 1;
 * @return {string}
 */
proto.MsgPlfMikeAcceptReq.prototype.getRoomId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.MsgPlfMikeAcceptReq.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfMikeAcceptReq.prototype.clearRoomId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfMikeAcceptReq.prototype.hasRoomId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 target_uid = 2;
 * @return {number}
 */
proto.MsgPlfMikeAcceptReq.prototype.getTargetUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfMikeAcceptReq.prototype.setTargetUid = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfMikeAcceptReq.prototype.clearTargetUid = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfMikeAcceptReq.prototype.hasTargetUid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 say_uid = 3;
 * @return {number}
 */
proto.MsgPlfMikeAcceptReq.prototype.getSayUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.MsgPlfMikeAcceptReq.prototype.setSayUid = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.MsgPlfMikeAcceptReq.prototype.clearSayUid = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfMikeAcceptReq.prototype.hasSayUid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 status = 4;
 * @return {number}
 */
proto.MsgPlfMikeAcceptReq.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.MsgPlfMikeAcceptReq.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.MsgPlfMikeAcceptReq.prototype.clearStatus = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfMikeAcceptReq.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfMikeAcceptNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfMikeAcceptNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfMikeAcceptNtf.displayName = 'proto.MsgPlfMikeAcceptNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfMikeAcceptNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfMikeAcceptNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfMikeAcceptNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfMikeAcceptNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomId: jspb.Message.getField(msg, 1),
    targetUid: jspb.Message.getField(msg, 2),
    sayUid: jspb.Message.getField(msg, 3),
    status: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfMikeAcceptNtf}
 */
proto.MsgPlfMikeAcceptNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfMikeAcceptNtf;
  return proto.MsgPlfMikeAcceptNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfMikeAcceptNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfMikeAcceptNtf}
 */
proto.MsgPlfMikeAcceptNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTargetUid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSayUid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfMikeAcceptNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfMikeAcceptNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfMikeAcceptNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfMikeAcceptNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string room_id = 1;
 * @return {string}
 */
proto.MsgPlfMikeAcceptNtf.prototype.getRoomId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.MsgPlfMikeAcceptNtf.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfMikeAcceptNtf.prototype.clearRoomId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfMikeAcceptNtf.prototype.hasRoomId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 target_uid = 2;
 * @return {number}
 */
proto.MsgPlfMikeAcceptNtf.prototype.getTargetUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfMikeAcceptNtf.prototype.setTargetUid = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfMikeAcceptNtf.prototype.clearTargetUid = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfMikeAcceptNtf.prototype.hasTargetUid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 say_uid = 3;
 * @return {number}
 */
proto.MsgPlfMikeAcceptNtf.prototype.getSayUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.MsgPlfMikeAcceptNtf.prototype.setSayUid = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.MsgPlfMikeAcceptNtf.prototype.clearSayUid = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfMikeAcceptNtf.prototype.hasSayUid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 status = 4;
 * @return {number}
 */
proto.MsgPlfMikeAcceptNtf.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.MsgPlfMikeAcceptNtf.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.MsgPlfMikeAcceptNtf.prototype.clearStatus = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfMikeAcceptNtf.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfMikeRep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfMikeRep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfMikeRep.displayName = 'proto.MsgPlfMikeRep';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfMikeRep.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfMikeRep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfMikeRep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfMikeRep.toObject = function(includeInstance, msg) {
  var f, obj = {
    rcode: jspb.Message.getField(msg, 1),
    roomId: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfMikeRep}
 */
proto.MsgPlfMikeRep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfMikeRep;
  return proto.MsgPlfMikeRep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfMikeRep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfMikeRep}
 */
proto.MsgPlfMikeRep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfMikeRep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfMikeRep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfMikeRep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfMikeRep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * required int32 rcode = 1;
 * @return {number}
 */
proto.MsgPlfMikeRep.prototype.getRcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfMikeRep.prototype.setRcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfMikeRep.prototype.clearRcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfMikeRep.prototype.hasRcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string room_id = 2;
 * @return {string}
 */
proto.MsgPlfMikeRep.prototype.getRoomId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.MsgPlfMikeRep.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfMikeRep.prototype.clearRoomId = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfMikeRep.prototype.hasRoomId = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfMikeQuitReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfMikeQuitReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfMikeQuitReq.displayName = 'proto.MsgPlfMikeQuitReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfMikeQuitReq.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfMikeQuitReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfMikeQuitReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfMikeQuitReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomId: jspb.Message.getField(msg, 1),
    targetUid: jspb.Message.getField(msg, 2),
    sayUid: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfMikeQuitReq}
 */
proto.MsgPlfMikeQuitReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfMikeQuitReq;
  return proto.MsgPlfMikeQuitReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfMikeQuitReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfMikeQuitReq}
 */
proto.MsgPlfMikeQuitReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTargetUid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSayUid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfMikeQuitReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfMikeQuitReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfMikeQuitReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfMikeQuitReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string room_id = 1;
 * @return {string}
 */
proto.MsgPlfMikeQuitReq.prototype.getRoomId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.MsgPlfMikeQuitReq.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfMikeQuitReq.prototype.clearRoomId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfMikeQuitReq.prototype.hasRoomId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 target_uid = 2;
 * @return {number}
 */
proto.MsgPlfMikeQuitReq.prototype.getTargetUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfMikeQuitReq.prototype.setTargetUid = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfMikeQuitReq.prototype.clearTargetUid = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfMikeQuitReq.prototype.hasTargetUid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 say_uid = 3;
 * @return {number}
 */
proto.MsgPlfMikeQuitReq.prototype.getSayUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.MsgPlfMikeQuitReq.prototype.setSayUid = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.MsgPlfMikeQuitReq.prototype.clearSayUid = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfMikeQuitReq.prototype.hasSayUid = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfMikeQuitNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfMikeQuitNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfMikeQuitNtf.displayName = 'proto.MsgPlfMikeQuitNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfMikeQuitNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfMikeQuitNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfMikeQuitNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfMikeQuitNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomId: jspb.Message.getField(msg, 1),
    targetUid: jspb.Message.getField(msg, 2),
    sayUid: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfMikeQuitNtf}
 */
proto.MsgPlfMikeQuitNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfMikeQuitNtf;
  return proto.MsgPlfMikeQuitNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfMikeQuitNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfMikeQuitNtf}
 */
proto.MsgPlfMikeQuitNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTargetUid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSayUid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfMikeQuitNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfMikeQuitNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfMikeQuitNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfMikeQuitNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string room_id = 1;
 * @return {string}
 */
proto.MsgPlfMikeQuitNtf.prototype.getRoomId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.MsgPlfMikeQuitNtf.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfMikeQuitNtf.prototype.clearRoomId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfMikeQuitNtf.prototype.hasRoomId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 target_uid = 2;
 * @return {number}
 */
proto.MsgPlfMikeQuitNtf.prototype.getTargetUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfMikeQuitNtf.prototype.setTargetUid = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfMikeQuitNtf.prototype.clearTargetUid = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfMikeQuitNtf.prototype.hasTargetUid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 say_uid = 3;
 * @return {number}
 */
proto.MsgPlfMikeQuitNtf.prototype.getSayUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.MsgPlfMikeQuitNtf.prototype.setSayUid = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.MsgPlfMikeQuitNtf.prototype.clearSayUid = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfMikeQuitNtf.prototype.hasSayUid = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfPkInviteReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfPkInviteReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfPkInviteReq.displayName = 'proto.MsgPlfPkInviteReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfPkInviteReq.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfPkInviteReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfPkInviteReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkInviteReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getField(msg, 1),
    targetUid: jspb.Message.getField(msg, 2),
    sayUid: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfPkInviteReq}
 */
proto.MsgPlfPkInviteReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfPkInviteReq;
  return proto.MsgPlfPkInviteReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfPkInviteReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfPkInviteReq}
 */
proto.MsgPlfPkInviteReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTargetUid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSayUid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfPkInviteReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfPkInviteReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfPkInviteReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkInviteReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional uint32 type = 1;
 * @return {number}
 */
proto.MsgPlfPkInviteReq.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfPkInviteReq.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfPkInviteReq.prototype.clearType = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkInviteReq.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 target_uid = 2;
 * @return {number}
 */
proto.MsgPlfPkInviteReq.prototype.getTargetUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfPkInviteReq.prototype.setTargetUid = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfPkInviteReq.prototype.clearTargetUid = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkInviteReq.prototype.hasTargetUid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 say_uid = 3;
 * @return {number}
 */
proto.MsgPlfPkInviteReq.prototype.getSayUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.MsgPlfPkInviteReq.prototype.setSayUid = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.MsgPlfPkInviteReq.prototype.clearSayUid = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkInviteReq.prototype.hasSayUid = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfPkInviteNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfPkInviteNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfPkInviteNtf.displayName = 'proto.MsgPlfPkInviteNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfPkInviteNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfPkInviteNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfPkInviteNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkInviteNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getField(msg, 1),
    time: jspb.Message.getField(msg, 2),
    targetUid: jspb.Message.getField(msg, 3),
    sayUid: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfPkInviteNtf}
 */
proto.MsgPlfPkInviteNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfPkInviteNtf;
  return proto.MsgPlfPkInviteNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfPkInviteNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfPkInviteNtf}
 */
proto.MsgPlfPkInviteNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTargetUid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSayUid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfPkInviteNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfPkInviteNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfPkInviteNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkInviteNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional uint32 type = 1;
 * @return {number}
 */
proto.MsgPlfPkInviteNtf.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfPkInviteNtf.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfPkInviteNtf.prototype.clearType = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkInviteNtf.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 time = 2;
 * @return {number}
 */
proto.MsgPlfPkInviteNtf.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfPkInviteNtf.prototype.setTime = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfPkInviteNtf.prototype.clearTime = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkInviteNtf.prototype.hasTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 target_uid = 3;
 * @return {number}
 */
proto.MsgPlfPkInviteNtf.prototype.getTargetUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.MsgPlfPkInviteNtf.prototype.setTargetUid = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.MsgPlfPkInviteNtf.prototype.clearTargetUid = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkInviteNtf.prototype.hasTargetUid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 say_uid = 4;
 * @return {number}
 */
proto.MsgPlfPkInviteNtf.prototype.getSayUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.MsgPlfPkInviteNtf.prototype.setSayUid = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.MsgPlfPkInviteNtf.prototype.clearSayUid = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkInviteNtf.prototype.hasSayUid = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfPkInviteRep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfPkInviteRep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfPkInviteRep.displayName = 'proto.MsgPlfPkInviteRep';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfPkInviteRep.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfPkInviteRep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfPkInviteRep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkInviteRep.toObject = function(includeInstance, msg) {
  var f, obj = {
    rcode: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfPkInviteRep}
 */
proto.MsgPlfPkInviteRep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfPkInviteRep;
  return proto.MsgPlfPkInviteRep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfPkInviteRep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfPkInviteRep}
 */
proto.MsgPlfPkInviteRep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRcode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfPkInviteRep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfPkInviteRep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfPkInviteRep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkInviteRep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * required int32 rcode = 1;
 * @return {number}
 */
proto.MsgPlfPkInviteRep.prototype.getRcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfPkInviteRep.prototype.setRcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfPkInviteRep.prototype.clearRcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkInviteRep.prototype.hasRcode = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfPkAcceptReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfPkAcceptReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfPkAcceptReq.displayName = 'proto.MsgPlfPkAcceptReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfPkAcceptReq.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfPkAcceptReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfPkAcceptReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkAcceptReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getField(msg, 1),
    result: jspb.Message.getField(msg, 2),
    targetUid: jspb.Message.getField(msg, 3),
    sayUid: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfPkAcceptReq}
 */
proto.MsgPlfPkAcceptReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfPkAcceptReq;
  return proto.MsgPlfPkAcceptReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfPkAcceptReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfPkAcceptReq}
 */
proto.MsgPlfPkAcceptReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setResult(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTargetUid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSayUid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfPkAcceptReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfPkAcceptReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfPkAcceptReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkAcceptReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional uint32 type = 1;
 * @return {number}
 */
proto.MsgPlfPkAcceptReq.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfPkAcceptReq.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfPkAcceptReq.prototype.clearType = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkAcceptReq.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 result = 2;
 * @return {number}
 */
proto.MsgPlfPkAcceptReq.prototype.getResult = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfPkAcceptReq.prototype.setResult = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfPkAcceptReq.prototype.clearResult = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkAcceptReq.prototype.hasResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 target_uid = 3;
 * @return {number}
 */
proto.MsgPlfPkAcceptReq.prototype.getTargetUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.MsgPlfPkAcceptReq.prototype.setTargetUid = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.MsgPlfPkAcceptReq.prototype.clearTargetUid = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkAcceptReq.prototype.hasTargetUid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 say_uid = 4;
 * @return {number}
 */
proto.MsgPlfPkAcceptReq.prototype.getSayUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.MsgPlfPkAcceptReq.prototype.setSayUid = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.MsgPlfPkAcceptReq.prototype.clearSayUid = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkAcceptReq.prototype.hasSayUid = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfPkAcceptNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfPkAcceptNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfPkAcceptNtf.displayName = 'proto.MsgPlfPkAcceptNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfPkAcceptNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfPkAcceptNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfPkAcceptNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkAcceptNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getField(msg, 1),
    result: jspb.Message.getField(msg, 2),
    targetUid: jspb.Message.getField(msg, 3),
    sayUid: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfPkAcceptNtf}
 */
proto.MsgPlfPkAcceptNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfPkAcceptNtf;
  return proto.MsgPlfPkAcceptNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfPkAcceptNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfPkAcceptNtf}
 */
proto.MsgPlfPkAcceptNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setResult(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTargetUid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSayUid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfPkAcceptNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfPkAcceptNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfPkAcceptNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkAcceptNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional uint32 type = 1;
 * @return {number}
 */
proto.MsgPlfPkAcceptNtf.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfPkAcceptNtf.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfPkAcceptNtf.prototype.clearType = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkAcceptNtf.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 result = 2;
 * @return {number}
 */
proto.MsgPlfPkAcceptNtf.prototype.getResult = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfPkAcceptNtf.prototype.setResult = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfPkAcceptNtf.prototype.clearResult = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkAcceptNtf.prototype.hasResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 target_uid = 3;
 * @return {number}
 */
proto.MsgPlfPkAcceptNtf.prototype.getTargetUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.MsgPlfPkAcceptNtf.prototype.setTargetUid = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.MsgPlfPkAcceptNtf.prototype.clearTargetUid = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkAcceptNtf.prototype.hasTargetUid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 say_uid = 4;
 * @return {number}
 */
proto.MsgPlfPkAcceptNtf.prototype.getSayUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.MsgPlfPkAcceptNtf.prototype.setSayUid = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.MsgPlfPkAcceptNtf.prototype.clearSayUid = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkAcceptNtf.prototype.hasSayUid = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfPkAcceptRep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfPkAcceptRep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfPkAcceptRep.displayName = 'proto.MsgPlfPkAcceptRep';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfPkAcceptRep.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfPkAcceptRep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfPkAcceptRep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkAcceptRep.toObject = function(includeInstance, msg) {
  var f, obj = {
    rcode: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfPkAcceptRep}
 */
proto.MsgPlfPkAcceptRep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfPkAcceptRep;
  return proto.MsgPlfPkAcceptRep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfPkAcceptRep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfPkAcceptRep}
 */
proto.MsgPlfPkAcceptRep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRcode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfPkAcceptRep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfPkAcceptRep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfPkAcceptRep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkAcceptRep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * required int32 rcode = 1;
 * @return {number}
 */
proto.MsgPlfPkAcceptRep.prototype.getRcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfPkAcceptRep.prototype.setRcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfPkAcceptRep.prototype.clearRcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkAcceptRep.prototype.hasRcode = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfPkResultNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfPkResultNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfPkResultNtf.displayName = 'proto.MsgPlfPkResultNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfPkResultNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfPkResultNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfPkResultNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkResultNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getField(msg, 1),
    battleResult: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfPkResultNtf}
 */
proto.MsgPlfPkResultNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfPkResultNtf;
  return proto.MsgPlfPkResultNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfPkResultNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfPkResultNtf}
 */
proto.MsgPlfPkResultNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBattleResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfPkResultNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfPkResultNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfPkResultNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfPkResultNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * required int64 id = 1;
 * @return {number}
 */
proto.MsgPlfPkResultNtf.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfPkResultNtf.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfPkResultNtf.prototype.clearId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkResultNtf.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string battle_result = 2;
 * @return {string}
 */
proto.MsgPlfPkResultNtf.prototype.getBattleResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.MsgPlfPkResultNtf.prototype.setBattleResult = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfPkResultNtf.prototype.clearBattleResult = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfPkResultNtf.prototype.hasBattleResult = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcCreateReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcCreateReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcCreateReq.displayName = 'proto.MsgPlfAcCreateReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcCreateReq.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcCreateReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcCreateReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcCreateReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getField(msg, 1),
    priv: jspb.Message.getField(msg, 2),
    notify: jspb.Message.getField(msg, 3),
    gameId: jspb.Message.getField(msg, 4),
    name: jspb.Message.getField(msg, 5),
    backgroundUrl: jspb.Message.getField(msg, 6),
    creater: jspb.Message.getField(msg, 7)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcCreateReq}
 */
proto.MsgPlfAcCreateReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcCreateReq;
  return proto.MsgPlfAcCreateReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcCreateReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcCreateReq}
 */
proto.MsgPlfAcCreateReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPriv(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNotify(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGameId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackgroundUrl(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCreater(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcCreateReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcCreateReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcCreateReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcCreateReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
};


/**
 * required uint32 type = 1;
 * @return {number}
 */
proto.MsgPlfAcCreateReq.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcCreateReq.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcCreateReq.prototype.clearType = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcCreateReq.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint32 priv = 2;
 * @return {number}
 */
proto.MsgPlfAcCreateReq.prototype.getPriv = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfAcCreateReq.prototype.setPriv = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfAcCreateReq.prototype.clearPriv = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcCreateReq.prototype.hasPriv = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required uint32 notify = 3;
 * @return {number}
 */
proto.MsgPlfAcCreateReq.prototype.getNotify = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.MsgPlfAcCreateReq.prototype.setNotify = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.MsgPlfAcCreateReq.prototype.clearNotify = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcCreateReq.prototype.hasNotify = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required uint32 game_id = 4;
 * @return {number}
 */
proto.MsgPlfAcCreateReq.prototype.getGameId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.MsgPlfAcCreateReq.prototype.setGameId = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.MsgPlfAcCreateReq.prototype.clearGameId = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcCreateReq.prototype.hasGameId = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * required string name = 5;
 * @return {string}
 */
proto.MsgPlfAcCreateReq.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.MsgPlfAcCreateReq.prototype.setName = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.MsgPlfAcCreateReq.prototype.clearName = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcCreateReq.prototype.hasName = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * required string background_url = 6;
 * @return {string}
 */
proto.MsgPlfAcCreateReq.prototype.getBackgroundUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.MsgPlfAcCreateReq.prototype.setBackgroundUrl = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.MsgPlfAcCreateReq.prototype.clearBackgroundUrl = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcCreateReq.prototype.hasBackgroundUrl = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * required uint32 creater = 7;
 * @return {number}
 */
proto.MsgPlfAcCreateReq.prototype.getCreater = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.MsgPlfAcCreateReq.prototype.setCreater = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.MsgPlfAcCreateReq.prototype.clearCreater = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcCreateReq.prototype.hasCreater = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcCreateInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.MsgPlfAcCreateInfo.repeatedFields_, null);
};
goog.inherits(proto.MsgPlfAcCreateInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcCreateInfo.displayName = 'proto.MsgPlfAcCreateInfo';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.MsgPlfAcCreateInfo.repeatedFields_ = [9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcCreateInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcCreateInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcCreateInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcCreateInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    creater: jspb.Message.getField(msg, 1),
    owner: jspb.Message.getField(msg, 2),
    status: jspb.Message.getField(msg, 3),
    roomId: jspb.Message.getField(msg, 4),
    gameId: jspb.Message.getField(msg, 5),
    priv: jspb.Message.getField(msg, 6),
    name: jspb.Message.getField(msg, 7),
    backgroundUrl: jspb.Message.getField(msg, 8),
    userBuildRoomsList: jspb.Message.getRepeatedField(msg, 9)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcCreateInfo}
 */
proto.MsgPlfAcCreateInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcCreateInfo;
  return proto.MsgPlfAcCreateInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcCreateInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcCreateInfo}
 */
proto.MsgPlfAcCreateInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCreater(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOwner(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRoomId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGameId(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPriv(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackgroundUrl(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addUserBuildRooms(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcCreateInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcCreateInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcCreateInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcCreateInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getUserBuildRoomsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
};


/**
 * optional uint32 creater = 1;
 * @return {number}
 */
proto.MsgPlfAcCreateInfo.prototype.getCreater = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcCreateInfo.prototype.setCreater = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcCreateInfo.prototype.clearCreater = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcCreateInfo.prototype.hasCreater = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 owner = 2;
 * @return {number}
 */
proto.MsgPlfAcCreateInfo.prototype.getOwner = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfAcCreateInfo.prototype.setOwner = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfAcCreateInfo.prototype.clearOwner = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcCreateInfo.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 status = 3;
 * @return {number}
 */
proto.MsgPlfAcCreateInfo.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.MsgPlfAcCreateInfo.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.MsgPlfAcCreateInfo.prototype.clearStatus = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcCreateInfo.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 room_id = 4;
 * @return {number}
 */
proto.MsgPlfAcCreateInfo.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.MsgPlfAcCreateInfo.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.MsgPlfAcCreateInfo.prototype.clearRoomId = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcCreateInfo.prototype.hasRoomId = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 game_id = 5;
 * @return {number}
 */
proto.MsgPlfAcCreateInfo.prototype.getGameId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.MsgPlfAcCreateInfo.prototype.setGameId = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.MsgPlfAcCreateInfo.prototype.clearGameId = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcCreateInfo.prototype.hasGameId = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 priv = 6;
 * @return {number}
 */
proto.MsgPlfAcCreateInfo.prototype.getPriv = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.MsgPlfAcCreateInfo.prototype.setPriv = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.MsgPlfAcCreateInfo.prototype.clearPriv = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcCreateInfo.prototype.hasPriv = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string name = 7;
 * @return {string}
 */
proto.MsgPlfAcCreateInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.MsgPlfAcCreateInfo.prototype.setName = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.MsgPlfAcCreateInfo.prototype.clearName = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcCreateInfo.prototype.hasName = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string background_url = 8;
 * @return {string}
 */
proto.MsgPlfAcCreateInfo.prototype.getBackgroundUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.MsgPlfAcCreateInfo.prototype.setBackgroundUrl = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.MsgPlfAcCreateInfo.prototype.clearBackgroundUrl = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcCreateInfo.prototype.hasBackgroundUrl = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated string user_build_rooms = 9;
 * @return {!Array<string>}
 */
proto.MsgPlfAcCreateInfo.prototype.getUserBuildRoomsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/** @param {!Array<string>} value */
proto.MsgPlfAcCreateInfo.prototype.setUserBuildRoomsList = function(value) {
  jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.MsgPlfAcCreateInfo.prototype.addUserBuildRooms = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


proto.MsgPlfAcCreateInfo.prototype.clearUserBuildRoomsList = function() {
  this.setUserBuildRoomsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcCreateRep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcCreateRep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcCreateRep.displayName = 'proto.MsgPlfAcCreateRep';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcCreateRep.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcCreateRep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcCreateRep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcCreateRep.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getField(msg, 1),
    info: jspb.Message.getField(msg, 2),
    data: (f = msg.getData()) && proto.MsgPlfAcCreateInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcCreateRep}
 */
proto.MsgPlfAcCreateRep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcCreateRep;
  return proto.MsgPlfAcCreateRep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcCreateRep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcCreateRep}
 */
proto.MsgPlfAcCreateRep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfo(value);
      break;
    case 3:
      var value = new proto.MsgPlfAcCreateInfo;
      reader.readMessage(value,proto.MsgPlfAcCreateInfo.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcCreateRep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcCreateRep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcCreateRep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcCreateRep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.Status} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.MsgPlfAcCreateInfo.serializeBinaryToWriter
    );
  }
};


/**
 * required Status status = 1;
 * @return {!proto.Status}
 */
proto.MsgPlfAcCreateRep.prototype.getStatus = function() {
  return /** @type {!proto.Status} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.Status} value */
proto.MsgPlfAcCreateRep.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcCreateRep.prototype.clearStatus = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcCreateRep.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string info = 2;
 * @return {string}
 */
proto.MsgPlfAcCreateRep.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.MsgPlfAcCreateRep.prototype.setInfo = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfAcCreateRep.prototype.clearInfo = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcCreateRep.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MsgPlfAcCreateInfo data = 3;
 * @return {?proto.MsgPlfAcCreateInfo}
 */
proto.MsgPlfAcCreateRep.prototype.getData = function() {
  return /** @type{?proto.MsgPlfAcCreateInfo} */ (
    jspb.Message.getWrapperField(this, proto.MsgPlfAcCreateInfo, 3));
};


/** @param {?proto.MsgPlfAcCreateInfo|undefined} value */
proto.MsgPlfAcCreateRep.prototype.setData = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.MsgPlfAcCreateRep.prototype.clearData = function() {
  this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcCreateRep.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcCreateNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcCreateNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcCreateNtf.displayName = 'proto.MsgPlfAcCreateNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcCreateNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcCreateNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcCreateNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcCreateNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getField(msg, 1),
    owner: jspb.Message.getField(msg, 2),
    type: jspb.Message.getField(msg, 3),
    show: jspb.Message.getField(msg, 4),
    title: jspb.Message.getField(msg, 5),
    background: jspb.Message.getField(msg, 6)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcCreateNtf}
 */
proto.MsgPlfAcCreateNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcCreateNtf;
  return proto.MsgPlfAcCreateNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcCreateNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcCreateNtf}
 */
proto.MsgPlfAcCreateNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOwner(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setShow(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackground(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcCreateNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcCreateNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcCreateNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcCreateNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * required uint32 id = 1;
 * @return {number}
 */
proto.MsgPlfAcCreateNtf.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcCreateNtf.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcCreateNtf.prototype.clearId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcCreateNtf.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint32 owner = 2;
 * @return {number}
 */
proto.MsgPlfAcCreateNtf.prototype.getOwner = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfAcCreateNtf.prototype.setOwner = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfAcCreateNtf.prototype.clearOwner = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcCreateNtf.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required uint32 type = 3;
 * @return {number}
 */
proto.MsgPlfAcCreateNtf.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.MsgPlfAcCreateNtf.prototype.setType = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.MsgPlfAcCreateNtf.prototype.clearType = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcCreateNtf.prototype.hasType = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required uint32 show = 4;
 * @return {number}
 */
proto.MsgPlfAcCreateNtf.prototype.getShow = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.MsgPlfAcCreateNtf.prototype.setShow = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.MsgPlfAcCreateNtf.prototype.clearShow = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcCreateNtf.prototype.hasShow = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * required string title = 5;
 * @return {string}
 */
proto.MsgPlfAcCreateNtf.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.MsgPlfAcCreateNtf.prototype.setTitle = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.MsgPlfAcCreateNtf.prototype.clearTitle = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcCreateNtf.prototype.hasTitle = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * required string background = 6;
 * @return {string}
 */
proto.MsgPlfAcCreateNtf.prototype.getBackground = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.MsgPlfAcCreateNtf.prototype.setBackground = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.MsgPlfAcCreateNtf.prototype.clearBackground = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcCreateNtf.prototype.hasBackground = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcDestoryNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcDestoryNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcDestoryNtf.displayName = 'proto.MsgPlfAcDestoryNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcDestoryNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcDestoryNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcDestoryNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcDestoryNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    all: jspb.Message.getField(msg, 1),
    id: jspb.Message.getField(msg, 2),
    owner: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcDestoryNtf}
 */
proto.MsgPlfAcDestoryNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcDestoryNtf;
  return proto.MsgPlfAcDestoryNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcDestoryNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcDestoryNtf}
 */
proto.MsgPlfAcDestoryNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAll(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOwner(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcDestoryNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcDestoryNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcDestoryNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcDestoryNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * required uint32 all = 1;
 * @return {number}
 */
proto.MsgPlfAcDestoryNtf.prototype.getAll = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcDestoryNtf.prototype.setAll = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcDestoryNtf.prototype.clearAll = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcDestoryNtf.prototype.hasAll = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint32 id = 2;
 * @return {number}
 */
proto.MsgPlfAcDestoryNtf.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfAcDestoryNtf.prototype.setId = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfAcDestoryNtf.prototype.clearId = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcDestoryNtf.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required uint32 owner = 3;
 * @return {number}
 */
proto.MsgPlfAcDestoryNtf.prototype.getOwner = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.MsgPlfAcDestoryNtf.prototype.setOwner = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.MsgPlfAcDestoryNtf.prototype.clearOwner = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcDestoryNtf.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcEnterReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcEnterReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcEnterReq.displayName = 'proto.MsgPlfAcEnterReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcEnterReq.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcEnterReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcEnterReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcEnterReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getField(msg, 1),
    info: (f = msg.getInfo()) && common_pb.PkPlayerInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcEnterReq}
 */
proto.MsgPlfAcEnterReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcEnterReq;
  return proto.MsgPlfAcEnterReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcEnterReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcEnterReq}
 */
proto.MsgPlfAcEnterReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = new common_pb.PkPlayerInfo;
      reader.readMessage(value,common_pb.PkPlayerInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcEnterReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcEnterReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcEnterReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcEnterReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.PkPlayerInfo.serializeBinaryToWriter
    );
  }
};


/**
 * required uint32 id = 1;
 * @return {number}
 */
proto.MsgPlfAcEnterReq.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcEnterReq.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcEnterReq.prototype.clearId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcEnterReq.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PkPlayerInfo info = 2;
 * @return {?proto.PkPlayerInfo}
 */
proto.MsgPlfAcEnterReq.prototype.getInfo = function() {
  return /** @type{?proto.PkPlayerInfo} */ (
    jspb.Message.getWrapperField(this, common_pb.PkPlayerInfo, 2));
};


/** @param {?proto.PkPlayerInfo|undefined} value */
proto.MsgPlfAcEnterReq.prototype.setInfo = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.MsgPlfAcEnterReq.prototype.clearInfo = function() {
  this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcEnterReq.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcMikeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcMikeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcMikeInfo.displayName = 'proto.MsgPlfAcMikeInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcMikeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcMikeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcMikeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcMikeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getField(msg, 1),
    mike: jspb.Message.getField(msg, 2),
    ready: jspb.Message.getField(msg, 3),
    playing: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcMikeInfo}
 */
proto.MsgPlfAcMikeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcMikeInfo;
  return proto.MsgPlfAcMikeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcMikeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcMikeInfo}
 */
proto.MsgPlfAcMikeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMike(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setReady(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlaying(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcMikeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcMikeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcMikeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcMikeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * required uint32 uid = 1;
 * @return {number}
 */
proto.MsgPlfAcMikeInfo.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcMikeInfo.prototype.setUid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcMikeInfo.prototype.clearUid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcMikeInfo.prototype.hasUid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint32 mike = 2;
 * @return {number}
 */
proto.MsgPlfAcMikeInfo.prototype.getMike = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfAcMikeInfo.prototype.setMike = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfAcMikeInfo.prototype.clearMike = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcMikeInfo.prototype.hasMike = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required uint32 ready = 3;
 * @return {number}
 */
proto.MsgPlfAcMikeInfo.prototype.getReady = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.MsgPlfAcMikeInfo.prototype.setReady = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.MsgPlfAcMikeInfo.prototype.clearReady = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcMikeInfo.prototype.hasReady = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 playing = 4;
 * @return {number}
 */
proto.MsgPlfAcMikeInfo.prototype.getPlaying = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.MsgPlfAcMikeInfo.prototype.setPlaying = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.MsgPlfAcMikeInfo.prototype.clearPlaying = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcMikeInfo.prototype.hasPlaying = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcEnterInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.MsgPlfAcEnterInfo.repeatedFields_, null);
};
goog.inherits(proto.MsgPlfAcEnterInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcEnterInfo.displayName = 'proto.MsgPlfAcEnterInfo';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.MsgPlfAcEnterInfo.repeatedFields_ = [3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcEnterInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcEnterInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcEnterInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcEnterInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getField(msg, 1),
    owner: jspb.Message.getField(msg, 2),
    infoList: jspb.Message.toObjectList(msg.getInfoList(),
    common_pb.PkPlayerInfo.toObject, includeInstance),
    mikeList: jspb.Message.toObjectList(msg.getMikeList(),
    proto.MsgPlfAcMikeInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcEnterInfo}
 */
proto.MsgPlfAcEnterInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcEnterInfo;
  return proto.MsgPlfAcEnterInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcEnterInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcEnterInfo}
 */
proto.MsgPlfAcEnterInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOwner(value);
      break;
    case 3:
      var value = new common_pb.PkPlayerInfo;
      reader.readMessage(value,common_pb.PkPlayerInfo.deserializeBinaryFromReader);
      msg.addInfo(value);
      break;
    case 4:
      var value = new proto.MsgPlfAcMikeInfo;
      reader.readMessage(value,proto.MsgPlfAcMikeInfo.deserializeBinaryFromReader);
      msg.addMike(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcEnterInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcEnterInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcEnterInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcEnterInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      common_pb.PkPlayerInfo.serializeBinaryToWriter
    );
  }
  f = message.getMikeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.MsgPlfAcMikeInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.MsgPlfAcEnterInfo.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcEnterInfo.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcEnterInfo.prototype.clearId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcEnterInfo.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 owner = 2;
 * @return {number}
 */
proto.MsgPlfAcEnterInfo.prototype.getOwner = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfAcEnterInfo.prototype.setOwner = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfAcEnterInfo.prototype.clearOwner = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcEnterInfo.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated PkPlayerInfo info = 3;
 * @return {!Array<!proto.PkPlayerInfo>}
 */
proto.MsgPlfAcEnterInfo.prototype.getInfoList = function() {
  return /** @type{!Array<!proto.PkPlayerInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.PkPlayerInfo, 3));
};


/** @param {!Array<!proto.PkPlayerInfo>} value */
proto.MsgPlfAcEnterInfo.prototype.setInfoList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.PkPlayerInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PkPlayerInfo}
 */
proto.MsgPlfAcEnterInfo.prototype.addInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.PkPlayerInfo, opt_index);
};


proto.MsgPlfAcEnterInfo.prototype.clearInfoList = function() {
  this.setInfoList([]);
};


/**
 * repeated MsgPlfAcMikeInfo mike = 4;
 * @return {!Array<!proto.MsgPlfAcMikeInfo>}
 */
proto.MsgPlfAcEnterInfo.prototype.getMikeList = function() {
  return /** @type{!Array<!proto.MsgPlfAcMikeInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.MsgPlfAcMikeInfo, 4));
};


/** @param {!Array<!proto.MsgPlfAcMikeInfo>} value */
proto.MsgPlfAcEnterInfo.prototype.setMikeList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.MsgPlfAcMikeInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.MsgPlfAcMikeInfo}
 */
proto.MsgPlfAcEnterInfo.prototype.addMike = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.MsgPlfAcMikeInfo, opt_index);
};


proto.MsgPlfAcEnterInfo.prototype.clearMikeList = function() {
  this.setMikeList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcEnterRep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcEnterRep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcEnterRep.displayName = 'proto.MsgPlfAcEnterRep';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcEnterRep.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcEnterRep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcEnterRep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcEnterRep.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getField(msg, 1),
    info: jspb.Message.getField(msg, 2),
    data: (f = msg.getData()) && proto.MsgPlfAcEnterInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcEnterRep}
 */
proto.MsgPlfAcEnterRep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcEnterRep;
  return proto.MsgPlfAcEnterRep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcEnterRep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcEnterRep}
 */
proto.MsgPlfAcEnterRep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfo(value);
      break;
    case 3:
      var value = new proto.MsgPlfAcEnterInfo;
      reader.readMessage(value,proto.MsgPlfAcEnterInfo.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcEnterRep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcEnterRep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcEnterRep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcEnterRep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.Status} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.MsgPlfAcEnterInfo.serializeBinaryToWriter
    );
  }
};


/**
 * required Status status = 1;
 * @return {!proto.Status}
 */
proto.MsgPlfAcEnterRep.prototype.getStatus = function() {
  return /** @type {!proto.Status} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.Status} value */
proto.MsgPlfAcEnterRep.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcEnterRep.prototype.clearStatus = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcEnterRep.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string info = 2;
 * @return {string}
 */
proto.MsgPlfAcEnterRep.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.MsgPlfAcEnterRep.prototype.setInfo = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfAcEnterRep.prototype.clearInfo = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcEnterRep.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MsgPlfAcEnterInfo data = 3;
 * @return {?proto.MsgPlfAcEnterInfo}
 */
proto.MsgPlfAcEnterRep.prototype.getData = function() {
  return /** @type{?proto.MsgPlfAcEnterInfo} */ (
    jspb.Message.getWrapperField(this, proto.MsgPlfAcEnterInfo, 3));
};


/** @param {?proto.MsgPlfAcEnterInfo|undefined} value */
proto.MsgPlfAcEnterRep.prototype.setData = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.MsgPlfAcEnterRep.prototype.clearData = function() {
  this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcEnterRep.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcRecoveryRep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcRecoveryRep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcRecoveryRep.displayName = 'proto.MsgPlfAcRecoveryRep';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcRecoveryRep.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcRecoveryRep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcRecoveryRep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcRecoveryRep.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getField(msg, 1),
    info: jspb.Message.getField(msg, 2),
    data: (f = msg.getData()) && proto.MsgPlfAcEnterInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcRecoveryRep}
 */
proto.MsgPlfAcRecoveryRep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcRecoveryRep;
  return proto.MsgPlfAcRecoveryRep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcRecoveryRep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcRecoveryRep}
 */
proto.MsgPlfAcRecoveryRep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInfo(value);
      break;
    case 3:
      var value = new proto.MsgPlfAcEnterInfo;
      reader.readMessage(value,proto.MsgPlfAcEnterInfo.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcRecoveryRep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcRecoveryRep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcRecoveryRep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcRecoveryRep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.Status} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.MsgPlfAcEnterInfo.serializeBinaryToWriter
    );
  }
};


/**
 * required Status status = 1;
 * @return {!proto.Status}
 */
proto.MsgPlfAcRecoveryRep.prototype.getStatus = function() {
  return /** @type {!proto.Status} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.Status} value */
proto.MsgPlfAcRecoveryRep.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcRecoveryRep.prototype.clearStatus = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcRecoveryRep.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string info = 2;
 * @return {string}
 */
proto.MsgPlfAcRecoveryRep.prototype.getInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.MsgPlfAcRecoveryRep.prototype.setInfo = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfAcRecoveryRep.prototype.clearInfo = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcRecoveryRep.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MsgPlfAcEnterInfo data = 3;
 * @return {?proto.MsgPlfAcEnterInfo}
 */
proto.MsgPlfAcRecoveryRep.prototype.getData = function() {
  return /** @type{?proto.MsgPlfAcEnterInfo} */ (
    jspb.Message.getWrapperField(this, proto.MsgPlfAcEnterInfo, 3));
};


/** @param {?proto.MsgPlfAcEnterInfo|undefined} value */
proto.MsgPlfAcRecoveryRep.prototype.setData = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.MsgPlfAcRecoveryRep.prototype.clearData = function() {
  this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcRecoveryRep.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcEnterNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcEnterNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcEnterNtf.displayName = 'proto.MsgPlfAcEnterNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcEnterNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcEnterNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcEnterNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcEnterNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && common_pb.PkPlayerInfo.toObject(includeInstance, f),
    autoMike: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcEnterNtf}
 */
proto.MsgPlfAcEnterNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcEnterNtf;
  return proto.MsgPlfAcEnterNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcEnterNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcEnterNtf}
 */
proto.MsgPlfAcEnterNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.PkPlayerInfo;
      reader.readMessage(value,common_pb.PkPlayerInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAutoMike(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcEnterNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcEnterNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcEnterNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcEnterNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.PkPlayerInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * required PkPlayerInfo info = 1;
 * @return {!proto.PkPlayerInfo}
 */
proto.MsgPlfAcEnterNtf.prototype.getInfo = function() {
  return /** @type{!proto.PkPlayerInfo} */ (
    jspb.Message.getWrapperField(this, common_pb.PkPlayerInfo, 1, 1));
};


/** @param {!proto.PkPlayerInfo} value */
proto.MsgPlfAcEnterNtf.prototype.setInfo = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.MsgPlfAcEnterNtf.prototype.clearInfo = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcEnterNtf.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint32 auto_mike = 2;
 * @return {number}
 */
proto.MsgPlfAcEnterNtf.prototype.getAutoMike = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfAcEnterNtf.prototype.setAutoMike = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfAcEnterNtf.prototype.clearAutoMike = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcEnterNtf.prototype.hasAutoMike = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcExitNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcExitNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcExitNtf.displayName = 'proto.MsgPlfAcExitNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcExitNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcExitNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcExitNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcExitNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcExitNtf}
 */
proto.MsgPlfAcExitNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcExitNtf;
  return proto.MsgPlfAcExitNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcExitNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcExitNtf}
 */
proto.MsgPlfAcExitNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcExitNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcExitNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcExitNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcExitNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * required uint32 uid = 1;
 * @return {number}
 */
proto.MsgPlfAcExitNtf.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcExitNtf.prototype.setUid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcExitNtf.prototype.clearUid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcExitNtf.prototype.hasUid = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcChatReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcChatReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcChatReq.displayName = 'proto.MsgPlfAcChatReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcChatReq.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcChatReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcChatReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcChatReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && ChatLog_pb.ChatItem.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcChatReq}
 */
proto.MsgPlfAcChatReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcChatReq;
  return proto.MsgPlfAcChatReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcChatReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcChatReq}
 */
proto.MsgPlfAcChatReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ChatLog_pb.ChatItem;
      reader.readMessage(value,ChatLog_pb.ChatItem.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcChatReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcChatReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcChatReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcChatReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ChatLog_pb.ChatItem.serializeBinaryToWriter
    );
  }
};


/**
 * required ChatItem info = 1;
 * @return {!proto.ChatItem}
 */
proto.MsgPlfAcChatReq.prototype.getInfo = function() {
  return /** @type{!proto.ChatItem} */ (
    jspb.Message.getWrapperField(this, ChatLog_pb.ChatItem, 1, 1));
};


/** @param {!proto.ChatItem} value */
proto.MsgPlfAcChatReq.prototype.setInfo = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.MsgPlfAcChatReq.prototype.clearInfo = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcChatReq.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcChatRep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcChatRep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcChatRep.displayName = 'proto.MsgPlfAcChatRep';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcChatRep.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcChatRep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcChatRep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcChatRep.toObject = function(includeInstance, msg) {
  var f, obj = {
    rcode: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcChatRep}
 */
proto.MsgPlfAcChatRep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcChatRep;
  return proto.MsgPlfAcChatRep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcChatRep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcChatRep}
 */
proto.MsgPlfAcChatRep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRcode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcChatRep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcChatRep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcChatRep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcChatRep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * required int32 rcode = 1;
 * @return {number}
 */
proto.MsgPlfAcChatRep.prototype.getRcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcChatRep.prototype.setRcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcChatRep.prototype.clearRcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcChatRep.prototype.hasRcode = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcChatNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcChatNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcChatNtf.displayName = 'proto.MsgPlfAcChatNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcChatNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcChatNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcChatNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcChatNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && ChatLog_pb.ChatItem.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcChatNtf}
 */
proto.MsgPlfAcChatNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcChatNtf;
  return proto.MsgPlfAcChatNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcChatNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcChatNtf}
 */
proto.MsgPlfAcChatNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ChatLog_pb.ChatItem;
      reader.readMessage(value,ChatLog_pb.ChatItem.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcChatNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcChatNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcChatNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcChatNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ChatLog_pb.ChatItem.serializeBinaryToWriter
    );
  }
};


/**
 * required ChatItem info = 1;
 * @return {!proto.ChatItem}
 */
proto.MsgPlfAcChatNtf.prototype.getInfo = function() {
  return /** @type{!proto.ChatItem} */ (
    jspb.Message.getWrapperField(this, ChatLog_pb.ChatItem, 1, 1));
};


/** @param {!proto.ChatItem} value */
proto.MsgPlfAcChatNtf.prototype.setInfo = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.MsgPlfAcChatNtf.prototype.clearInfo = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcChatNtf.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcChatLogReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcChatLogReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcChatLogReq.displayName = 'proto.MsgPlfAcChatLogReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcChatLogReq.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcChatLogReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcChatLogReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcChatLogReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getField(msg, 1),
    owner: jspb.Message.getField(msg, 2),
    info: (f = msg.getInfo()) && ChatLog_pb.ChatItem.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcChatLogReq}
 */
proto.MsgPlfAcChatLogReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcChatLogReq;
  return proto.MsgPlfAcChatLogReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcChatLogReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcChatLogReq}
 */
proto.MsgPlfAcChatLogReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOwner(value);
      break;
    case 3:
      var value = new ChatLog_pb.ChatItem;
      reader.readMessage(value,ChatLog_pb.ChatItem.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcChatLogReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcChatLogReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcChatLogReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcChatLogReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      ChatLog_pb.ChatItem.serializeBinaryToWriter
    );
  }
};


/**
 * required uint32 id = 1;
 * @return {number}
 */
proto.MsgPlfAcChatLogReq.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcChatLogReq.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcChatLogReq.prototype.clearId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcChatLogReq.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint32 owner = 2;
 * @return {number}
 */
proto.MsgPlfAcChatLogReq.prototype.getOwner = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfAcChatLogReq.prototype.setOwner = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfAcChatLogReq.prototype.clearOwner = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcChatLogReq.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required ChatItem info = 3;
 * @return {!proto.ChatItem}
 */
proto.MsgPlfAcChatLogReq.prototype.getInfo = function() {
  return /** @type{!proto.ChatItem} */ (
    jspb.Message.getWrapperField(this, ChatLog_pb.ChatItem, 3, 1));
};


/** @param {!proto.ChatItem} value */
proto.MsgPlfAcChatLogReq.prototype.setInfo = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.MsgPlfAcChatLogReq.prototype.clearInfo = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcChatLogReq.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcOwnerChangeNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcOwnerChangeNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcOwnerChangeNtf.displayName = 'proto.MsgPlfAcOwnerChangeNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcOwnerChangeNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcOwnerChangeNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcOwnerChangeNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcOwnerChangeNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getField(msg, 1),
    owner: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcOwnerChangeNtf}
 */
proto.MsgPlfAcOwnerChangeNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcOwnerChangeNtf;
  return proto.MsgPlfAcOwnerChangeNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcOwnerChangeNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcOwnerChangeNtf}
 */
proto.MsgPlfAcOwnerChangeNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOwner(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcOwnerChangeNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcOwnerChangeNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcOwnerChangeNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcOwnerChangeNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * required uint32 id = 1;
 * @return {number}
 */
proto.MsgPlfAcOwnerChangeNtf.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcOwnerChangeNtf.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcOwnerChangeNtf.prototype.clearId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcOwnerChangeNtf.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint32 owner = 2;
 * @return {number}
 */
proto.MsgPlfAcOwnerChangeNtf.prototype.getOwner = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfAcOwnerChangeNtf.prototype.setOwner = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfAcOwnerChangeNtf.prototype.clearOwner = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcOwnerChangeNtf.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcTypeChangeNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcTypeChangeNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcTypeChangeNtf.displayName = 'proto.MsgPlfAcTypeChangeNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcTypeChangeNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcTypeChangeNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcTypeChangeNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcTypeChangeNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcTypeChangeNtf}
 */
proto.MsgPlfAcTypeChangeNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcTypeChangeNtf;
  return proto.MsgPlfAcTypeChangeNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcTypeChangeNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcTypeChangeNtf}
 */
proto.MsgPlfAcTypeChangeNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcTypeChangeNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcTypeChangeNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcTypeChangeNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcTypeChangeNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * required uint32 type = 1;
 * @return {number}
 */
proto.MsgPlfAcTypeChangeNtf.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcTypeChangeNtf.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcTypeChangeNtf.prototype.clearType = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcTypeChangeNtf.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcBackgroundChangeNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcBackgroundChangeNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcBackgroundChangeNtf.displayName = 'proto.MsgPlfAcBackgroundChangeNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcBackgroundChangeNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcBackgroundChangeNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcBackgroundChangeNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcBackgroundChangeNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    background: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcBackgroundChangeNtf}
 */
proto.MsgPlfAcBackgroundChangeNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcBackgroundChangeNtf;
  return proto.MsgPlfAcBackgroundChangeNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcBackgroundChangeNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcBackgroundChangeNtf}
 */
proto.MsgPlfAcBackgroundChangeNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackground(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcBackgroundChangeNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcBackgroundChangeNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcBackgroundChangeNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcBackgroundChangeNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * required string background = 1;
 * @return {string}
 */
proto.MsgPlfAcBackgroundChangeNtf.prototype.getBackground = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.MsgPlfAcBackgroundChangeNtf.prototype.setBackground = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcBackgroundChangeNtf.prototype.clearBackground = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcBackgroundChangeNtf.prototype.hasBackground = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcPrivateChangeNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcPrivateChangeNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcPrivateChangeNtf.displayName = 'proto.MsgPlfAcPrivateChangeNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcPrivateChangeNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcPrivateChangeNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcPrivateChangeNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcPrivateChangeNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    show: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcPrivateChangeNtf}
 */
proto.MsgPlfAcPrivateChangeNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcPrivateChangeNtf;
  return proto.MsgPlfAcPrivateChangeNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcPrivateChangeNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcPrivateChangeNtf}
 */
proto.MsgPlfAcPrivateChangeNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setShow(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcPrivateChangeNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcPrivateChangeNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcPrivateChangeNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcPrivateChangeNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * required uint32 show = 1;
 * @return {number}
 */
proto.MsgPlfAcPrivateChangeNtf.prototype.getShow = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcPrivateChangeNtf.prototype.setShow = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcPrivateChangeNtf.prototype.clearShow = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcPrivateChangeNtf.prototype.hasShow = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcRoomNameChangeNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcRoomNameChangeNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcRoomNameChangeNtf.displayName = 'proto.MsgPlfAcRoomNameChangeNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcRoomNameChangeNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcRoomNameChangeNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcRoomNameChangeNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcRoomNameChangeNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcRoomNameChangeNtf}
 */
proto.MsgPlfAcRoomNameChangeNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcRoomNameChangeNtf;
  return proto.MsgPlfAcRoomNameChangeNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcRoomNameChangeNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcRoomNameChangeNtf}
 */
proto.MsgPlfAcRoomNameChangeNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcRoomNameChangeNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcRoomNameChangeNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcRoomNameChangeNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcRoomNameChangeNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * required string name = 1;
 * @return {string}
 */
proto.MsgPlfAcRoomNameChangeNtf.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.MsgPlfAcRoomNameChangeNtf.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcRoomNameChangeNtf.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcRoomNameChangeNtf.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcMikeReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcMikeReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcMikeReq.displayName = 'proto.MsgPlfAcMikeReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcMikeReq.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcMikeReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcMikeReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcMikeReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcMikeReq}
 */
proto.MsgPlfAcMikeReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcMikeReq;
  return proto.MsgPlfAcMikeReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcMikeReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcMikeReq}
 */
proto.MsgPlfAcMikeReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcMikeReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcMikeReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcMikeReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcMikeReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * required uint32 type = 1;
 * @return {number}
 */
proto.MsgPlfAcMikeReq.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcMikeReq.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcMikeReq.prototype.clearType = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcMikeReq.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcMikeRep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcMikeRep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcMikeRep.displayName = 'proto.MsgPlfAcMikeRep';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcMikeRep.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcMikeRep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcMikeRep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcMikeRep.toObject = function(includeInstance, msg) {
  var f, obj = {
    rcode: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcMikeRep}
 */
proto.MsgPlfAcMikeRep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcMikeRep;
  return proto.MsgPlfAcMikeRep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcMikeRep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcMikeRep}
 */
proto.MsgPlfAcMikeRep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRcode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcMikeRep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcMikeRep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcMikeRep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcMikeRep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * required int32 rcode = 1;
 * @return {number}
 */
proto.MsgPlfAcMikeRep.prototype.getRcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcMikeRep.prototype.setRcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcMikeRep.prototype.clearRcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcMikeRep.prototype.hasRcode = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcMikeNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcMikeNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcMikeNtf.displayName = 'proto.MsgPlfAcMikeNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcMikeNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcMikeNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcMikeNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcMikeNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getField(msg, 1),
    type: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcMikeNtf}
 */
proto.MsgPlfAcMikeNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcMikeNtf;
  return proto.MsgPlfAcMikeNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcMikeNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcMikeNtf}
 */
proto.MsgPlfAcMikeNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcMikeNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcMikeNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcMikeNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcMikeNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * required uint32 uid = 1;
 * @return {number}
 */
proto.MsgPlfAcMikeNtf.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcMikeNtf.prototype.setUid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcMikeNtf.prototype.clearUid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcMikeNtf.prototype.hasUid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint32 type = 2;
 * @return {number}
 */
proto.MsgPlfAcMikeNtf.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfAcMikeNtf.prototype.setType = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfAcMikeNtf.prototype.clearType = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcMikeNtf.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcMikeInviteReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcMikeInviteReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcMikeInviteReq.displayName = 'proto.MsgPlfAcMikeInviteReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcMikeInviteReq.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcMikeInviteReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcMikeInviteReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcMikeInviteReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcMikeInviteReq}
 */
proto.MsgPlfAcMikeInviteReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcMikeInviteReq;
  return proto.MsgPlfAcMikeInviteReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcMikeInviteReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcMikeInviteReq}
 */
proto.MsgPlfAcMikeInviteReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcMikeInviteReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcMikeInviteReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcMikeInviteReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcMikeInviteReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * required uint32 uid = 1;
 * @return {number}
 */
proto.MsgPlfAcMikeInviteReq.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcMikeInviteReq.prototype.setUid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcMikeInviteReq.prototype.clearUid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcMikeInviteReq.prototype.hasUid = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcMikeInviteNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcMikeInviteNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcMikeInviteNtf.displayName = 'proto.MsgPlfAcMikeInviteNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcMikeInviteNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcMikeInviteNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcMikeInviteNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcMikeInviteNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcMikeInviteNtf}
 */
proto.MsgPlfAcMikeInviteNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcMikeInviteNtf;
  return proto.MsgPlfAcMikeInviteNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcMikeInviteNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcMikeInviteNtf}
 */
proto.MsgPlfAcMikeInviteNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcMikeInviteNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcMikeInviteNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcMikeInviteNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcMikeInviteNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * required uint32 uid = 1;
 * @return {number}
 */
proto.MsgPlfAcMikeInviteNtf.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcMikeInviteNtf.prototype.setUid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcMikeInviteNtf.prototype.clearUid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcMikeInviteNtf.prototype.hasUid = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcMikeAcceptReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcMikeAcceptReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcMikeAcceptReq.displayName = 'proto.MsgPlfAcMikeAcceptReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcMikeAcceptReq.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcMikeAcceptReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcMikeAcceptReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcMikeAcceptReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: jspb.Message.getField(msg, 1),
    uid: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcMikeAcceptReq}
 */
proto.MsgPlfAcMikeAcceptReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcMikeAcceptReq;
  return proto.MsgPlfAcMikeAcceptReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcMikeAcceptReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcMikeAcceptReq}
 */
proto.MsgPlfAcMikeAcceptReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAction(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcMikeAcceptReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcMikeAcceptReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcMikeAcceptReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcMikeAcceptReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * required int32 action = 1;
 * @return {number}
 */
proto.MsgPlfAcMikeAcceptReq.prototype.getAction = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcMikeAcceptReq.prototype.setAction = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcMikeAcceptReq.prototype.clearAction = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcMikeAcceptReq.prototype.hasAction = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint32 uid = 2;
 * @return {number}
 */
proto.MsgPlfAcMikeAcceptReq.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfAcMikeAcceptReq.prototype.setUid = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfAcMikeAcceptReq.prototype.clearUid = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcMikeAcceptReq.prototype.hasUid = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcMikeAcceptNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcMikeAcceptNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcMikeAcceptNtf.displayName = 'proto.MsgPlfAcMikeAcceptNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcMikeAcceptNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcMikeAcceptNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcMikeAcceptNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcMikeAcceptNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: jspb.Message.getField(msg, 1),
    uid: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcMikeAcceptNtf}
 */
proto.MsgPlfAcMikeAcceptNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcMikeAcceptNtf;
  return proto.MsgPlfAcMikeAcceptNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcMikeAcceptNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcMikeAcceptNtf}
 */
proto.MsgPlfAcMikeAcceptNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAction(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcMikeAcceptNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcMikeAcceptNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcMikeAcceptNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcMikeAcceptNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * required int32 action = 1;
 * @return {number}
 */
proto.MsgPlfAcMikeAcceptNtf.prototype.getAction = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcMikeAcceptNtf.prototype.setAction = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcMikeAcceptNtf.prototype.clearAction = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcMikeAcceptNtf.prototype.hasAction = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint32 uid = 2;
 * @return {number}
 */
proto.MsgPlfAcMikeAcceptNtf.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfAcMikeAcceptNtf.prototype.setUid = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfAcMikeAcceptNtf.prototype.clearUid = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcMikeAcceptNtf.prototype.hasUid = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcMikeSuccessNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcMikeSuccessNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcMikeSuccessNtf.displayName = 'proto.MsgPlfAcMikeSuccessNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcMikeSuccessNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcMikeSuccessNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcMikeSuccessNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcMikeSuccessNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getField(msg, 1),
    pos: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcMikeSuccessNtf}
 */
proto.MsgPlfAcMikeSuccessNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcMikeSuccessNtf;
  return proto.MsgPlfAcMikeSuccessNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcMikeSuccessNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcMikeSuccessNtf}
 */
proto.MsgPlfAcMikeSuccessNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcMikeSuccessNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcMikeSuccessNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcMikeSuccessNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcMikeSuccessNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * required uint32 uid = 1;
 * @return {number}
 */
proto.MsgPlfAcMikeSuccessNtf.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcMikeSuccessNtf.prototype.setUid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcMikeSuccessNtf.prototype.clearUid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcMikeSuccessNtf.prototype.hasUid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint32 pos = 2;
 * @return {number}
 */
proto.MsgPlfAcMikeSuccessNtf.prototype.getPos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfAcMikeSuccessNtf.prototype.setPos = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfAcMikeSuccessNtf.prototype.clearPos = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcMikeSuccessNtf.prototype.hasPos = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcMikeOptReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcMikeOptReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcMikeOptReq.displayName = 'proto.MsgPlfAcMikeOptReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcMikeOptReq.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcMikeOptReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcMikeOptReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcMikeOptReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcMikeOptReq}
 */
proto.MsgPlfAcMikeOptReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcMikeOptReq;
  return proto.MsgPlfAcMikeOptReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcMikeOptReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcMikeOptReq}
 */
proto.MsgPlfAcMikeOptReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcMikeOptReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcMikeOptReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcMikeOptReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcMikeOptReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * required uint32 type = 1;
 * @return {number}
 */
proto.MsgPlfAcMikeOptReq.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcMikeOptReq.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcMikeOptReq.prototype.clearType = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcMikeOptReq.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcMikeOptNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcMikeOptNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcMikeOptNtf.displayName = 'proto.MsgPlfAcMikeOptNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcMikeOptNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcMikeOptNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcMikeOptNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcMikeOptNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getField(msg, 1),
    type: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcMikeOptNtf}
 */
proto.MsgPlfAcMikeOptNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcMikeOptNtf;
  return proto.MsgPlfAcMikeOptNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcMikeOptNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcMikeOptNtf}
 */
proto.MsgPlfAcMikeOptNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcMikeOptNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcMikeOptNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcMikeOptNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcMikeOptNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * required uint32 uid = 1;
 * @return {number}
 */
proto.MsgPlfAcMikeOptNtf.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcMikeOptNtf.prototype.setUid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcMikeOptNtf.prototype.clearUid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcMikeOptNtf.prototype.hasUid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint32 type = 2;
 * @return {number}
 */
proto.MsgPlfAcMikeOptNtf.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfAcMikeOptNtf.prototype.setType = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfAcMikeOptNtf.prototype.clearType = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcMikeOptNtf.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcGameReadyReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcGameReadyReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcGameReadyReq.displayName = 'proto.MsgPlfAcGameReadyReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcGameReadyReq.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcGameReadyReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcGameReadyReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcGameReadyReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcGameReadyReq}
 */
proto.MsgPlfAcGameReadyReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcGameReadyReq;
  return proto.MsgPlfAcGameReadyReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcGameReadyReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcGameReadyReq}
 */
proto.MsgPlfAcGameReadyReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcGameReadyReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcGameReadyReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcGameReadyReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcGameReadyReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * required uint32 type = 1;
 * @return {number}
 */
proto.MsgPlfAcGameReadyReq.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcGameReadyReq.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcGameReadyReq.prototype.clearType = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcGameReadyReq.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcGameReadyNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcGameReadyNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcGameReadyNtf.displayName = 'proto.MsgPlfAcGameReadyNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcGameReadyNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcGameReadyNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcGameReadyNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcGameReadyNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getField(msg, 1),
    type: jspb.Message.getField(msg, 2),
    id: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcGameReadyNtf}
 */
proto.MsgPlfAcGameReadyNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcGameReadyNtf;
  return proto.MsgPlfAcGameReadyNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcGameReadyNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcGameReadyNtf}
 */
proto.MsgPlfAcGameReadyNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcGameReadyNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcGameReadyNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcGameReadyNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcGameReadyNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * required uint32 uid = 1;
 * @return {number}
 */
proto.MsgPlfAcGameReadyNtf.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcGameReadyNtf.prototype.setUid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcGameReadyNtf.prototype.clearUid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcGameReadyNtf.prototype.hasUid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint32 type = 2;
 * @return {number}
 */
proto.MsgPlfAcGameReadyNtf.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfAcGameReadyNtf.prototype.setType = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfAcGameReadyNtf.prototype.clearType = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcGameReadyNtf.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 id = 3;
 * @return {number}
 */
proto.MsgPlfAcGameReadyNtf.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.MsgPlfAcGameReadyNtf.prototype.setId = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.MsgPlfAcGameReadyNtf.prototype.clearId = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcGameReadyNtf.prototype.hasId = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcGameStartNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.MsgPlfAcGameStartNtf.repeatedFields_, null);
};
goog.inherits(proto.MsgPlfAcGameStartNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcGameStartNtf.displayName = 'proto.MsgPlfAcGameStartNtf';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.MsgPlfAcGameStartNtf.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcGameStartNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcGameStartNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcGameStartNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcGameStartNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    memberList: jspb.Message.getRepeatedField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcGameStartNtf}
 */
proto.MsgPlfAcGameStartNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcGameStartNtf;
  return proto.MsgPlfAcGameStartNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcGameStartNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcGameStartNtf}
 */
proto.MsgPlfAcGameStartNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.addMember(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcGameStartNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcGameStartNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcGameStartNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcGameStartNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMemberList();
  if (f.length > 0) {
    writer.writeRepeatedUint32(
      1,
      f
    );
  }
};


/**
 * repeated uint32 member = 1;
 * @return {!Array<number>}
 */
proto.MsgPlfAcGameStartNtf.prototype.getMemberList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<number>} value */
proto.MsgPlfAcGameStartNtf.prototype.setMemberList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.MsgPlfAcGameStartNtf.prototype.addMember = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.MsgPlfAcGameStartNtf.prototype.clearMemberList = function() {
  this.setMemberList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcGameEnterNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.MsgPlfAcGameEnterNtf.repeatedFields_, null);
};
goog.inherits(proto.MsgPlfAcGameEnterNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcGameEnterNtf.displayName = 'proto.MsgPlfAcGameEnterNtf';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.MsgPlfAcGameEnterNtf.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcGameEnterNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcGameEnterNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcGameEnterNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcGameEnterNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getField(msg, 1),
    memberList: jspb.Message.getRepeatedField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcGameEnterNtf}
 */
proto.MsgPlfAcGameEnterNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcGameEnterNtf;
  return proto.MsgPlfAcGameEnterNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcGameEnterNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcGameEnterNtf}
 */
proto.MsgPlfAcGameEnterNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.addMember(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcGameEnterNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcGameEnterNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcGameEnterNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcGameEnterNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getMemberList();
  if (f.length > 0) {
    writer.writeRepeatedUint32(
      2,
      f
    );
  }
};


/**
 * required uint32 type = 1;
 * @return {number}
 */
proto.MsgPlfAcGameEnterNtf.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcGameEnterNtf.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcGameEnterNtf.prototype.clearType = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcGameEnterNtf.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated uint32 member = 2;
 * @return {!Array<number>}
 */
proto.MsgPlfAcGameEnterNtf.prototype.getMemberList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array<number>} value */
proto.MsgPlfAcGameEnterNtf.prototype.setMemberList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.MsgPlfAcGameEnterNtf.prototype.addMember = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.MsgPlfAcGameEnterNtf.prototype.clearMemberList = function() {
  this.setMemberList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcMatchReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcMatchReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcMatchReq.displayName = 'proto.MsgPlfAcMatchReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcMatchReq.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcMatchReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcMatchReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcMatchReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getField(msg, 1),
    type: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcMatchReq}
 */
proto.MsgPlfAcMatchReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcMatchReq;
  return proto.MsgPlfAcMatchReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcMatchReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcMatchReq}
 */
proto.MsgPlfAcMatchReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcMatchReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcMatchReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcMatchReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcMatchReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * required uint32 uid = 1;
 * @return {number}
 */
proto.MsgPlfAcMatchReq.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcMatchReq.prototype.setUid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcMatchReq.prototype.clearUid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcMatchReq.prototype.hasUid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint32 type = 2;
 * @return {number}
 */
proto.MsgPlfAcMatchReq.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfAcMatchReq.prototype.setType = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfAcMatchReq.prototype.clearType = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcMatchReq.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcMatchRep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcMatchRep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcMatchRep.displayName = 'proto.MsgPlfAcMatchRep';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcMatchRep.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcMatchRep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcMatchRep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcMatchRep.toObject = function(includeInstance, msg) {
  var f, obj = {
    rcode: jspb.Message.getField(msg, 1),
    type: jspb.Message.getField(msg, 2),
    uid: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcMatchRep}
 */
proto.MsgPlfAcMatchRep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcMatchRep;
  return proto.MsgPlfAcMatchRep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcMatchRep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcMatchRep}
 */
proto.MsgPlfAcMatchRep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRcode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcMatchRep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcMatchRep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcMatchRep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcMatchRep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * required int32 rcode = 1;
 * @return {number}
 */
proto.MsgPlfAcMatchRep.prototype.getRcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcMatchRep.prototype.setRcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcMatchRep.prototype.clearRcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcMatchRep.prototype.hasRcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint32 type = 2;
 * @return {number}
 */
proto.MsgPlfAcMatchRep.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfAcMatchRep.prototype.setType = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfAcMatchRep.prototype.clearType = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcMatchRep.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 uid = 3;
 * @return {number}
 */
proto.MsgPlfAcMatchRep.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.MsgPlfAcMatchRep.prototype.setUid = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.MsgPlfAcMatchRep.prototype.clearUid = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcMatchRep.prototype.hasUid = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcMatchNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.MsgPlfAcMatchNtf.repeatedFields_, null);
};
goog.inherits(proto.MsgPlfAcMatchNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcMatchNtf.displayName = 'proto.MsgPlfAcMatchNtf';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.MsgPlfAcMatchNtf.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcMatchNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcMatchNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcMatchNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcMatchNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getField(msg, 1),
    infoList: jspb.Message.toObjectList(msg.getInfoList(),
    common_pb.PkPlayerInfo.toObject, includeInstance),
    id: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcMatchNtf}
 */
proto.MsgPlfAcMatchNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcMatchNtf;
  return proto.MsgPlfAcMatchNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcMatchNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcMatchNtf}
 */
proto.MsgPlfAcMatchNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 2:
      var value = new common_pb.PkPlayerInfo;
      reader.readMessage(value,common_pb.PkPlayerInfo.deserializeBinaryFromReader);
      msg.addInfo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcMatchNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcMatchNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcMatchNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcMatchNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_pb.PkPlayerInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * required int32 type = 1;
 * @return {number}
 */
proto.MsgPlfAcMatchNtf.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcMatchNtf.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcMatchNtf.prototype.clearType = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcMatchNtf.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated PkPlayerInfo info = 2;
 * @return {!Array<!proto.PkPlayerInfo>}
 */
proto.MsgPlfAcMatchNtf.prototype.getInfoList = function() {
  return /** @type{!Array<!proto.PkPlayerInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.PkPlayerInfo, 2));
};


/** @param {!Array<!proto.PkPlayerInfo>} value */
proto.MsgPlfAcMatchNtf.prototype.setInfoList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.PkPlayerInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PkPlayerInfo}
 */
proto.MsgPlfAcMatchNtf.prototype.addInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.PkPlayerInfo, opt_index);
};


proto.MsgPlfAcMatchNtf.prototype.clearInfoList = function() {
  this.setInfoList([]);
};


/**
 * optional int64 id = 3;
 * @return {number}
 */
proto.MsgPlfAcMatchNtf.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.MsgPlfAcMatchNtf.prototype.setId = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.MsgPlfAcMatchNtf.prototype.clearId = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcMatchNtf.prototype.hasId = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcCancelReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcCancelReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcCancelReq.displayName = 'proto.MsgPlfAcCancelReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcCancelReq.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcCancelReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcCancelReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcCancelReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getField(msg, 1),
    type: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcCancelReq}
 */
proto.MsgPlfAcCancelReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcCancelReq;
  return proto.MsgPlfAcCancelReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcCancelReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcCancelReq}
 */
proto.MsgPlfAcCancelReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcCancelReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcCancelReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcCancelReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcCancelReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * required uint32 uid = 1;
 * @return {number}
 */
proto.MsgPlfAcCancelReq.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcCancelReq.prototype.setUid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcCancelReq.prototype.clearUid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcCancelReq.prototype.hasUid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint32 type = 2;
 * @return {number}
 */
proto.MsgPlfAcCancelReq.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfAcCancelReq.prototype.setType = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfAcCancelReq.prototype.clearType = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcCancelReq.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcCancelRep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcCancelRep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcCancelRep.displayName = 'proto.MsgPlfAcCancelRep';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcCancelRep.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcCancelRep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcCancelRep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcCancelRep.toObject = function(includeInstance, msg) {
  var f, obj = {
    rcode: jspb.Message.getField(msg, 1),
    type: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcCancelRep}
 */
proto.MsgPlfAcCancelRep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcCancelRep;
  return proto.MsgPlfAcCancelRep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcCancelRep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcCancelRep}
 */
proto.MsgPlfAcCancelRep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRcode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcCancelRep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcCancelRep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcCancelRep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcCancelRep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * required int32 rcode = 1;
 * @return {number}
 */
proto.MsgPlfAcCancelRep.prototype.getRcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcCancelRep.prototype.setRcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcCancelRep.prototype.clearRcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcCancelRep.prototype.hasRcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint32 type = 2;
 * @return {number}
 */
proto.MsgPlfAcCancelRep.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfAcCancelRep.prototype.setType = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfAcCancelRep.prototype.clearType = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcCancelRep.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcKilledReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcKilledReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcKilledReq.displayName = 'proto.MsgPlfAcKilledReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcKilledReq.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcKilledReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcKilledReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcKilledReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getField(msg, 1),
    type: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcKilledReq}
 */
proto.MsgPlfAcKilledReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcKilledReq;
  return proto.MsgPlfAcKilledReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcKilledReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcKilledReq}
 */
proto.MsgPlfAcKilledReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcKilledReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcKilledReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcKilledReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcKilledReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * required uint32 uid = 1;
 * @return {number}
 */
proto.MsgPlfAcKilledReq.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcKilledReq.prototype.setUid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcKilledReq.prototype.clearUid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcKilledReq.prototype.hasUid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint32 type = 2;
 * @return {number}
 */
proto.MsgPlfAcKilledReq.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfAcKilledReq.prototype.setType = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfAcKilledReq.prototype.clearType = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcKilledReq.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcKilledNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcKilledNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcKilledNtf.displayName = 'proto.MsgPlfAcKilledNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcKilledNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcKilledNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcKilledNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcKilledNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getField(msg, 1),
    type: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcKilledNtf}
 */
proto.MsgPlfAcKilledNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcKilledNtf;
  return proto.MsgPlfAcKilledNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcKilledNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcKilledNtf}
 */
proto.MsgPlfAcKilledNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcKilledNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcKilledNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcKilledNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcKilledNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * required uint32 uid = 1;
 * @return {number}
 */
proto.MsgPlfAcKilledNtf.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcKilledNtf.prototype.setUid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcKilledNtf.prototype.clearUid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcKilledNtf.prototype.hasUid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint32 type = 2;
 * @return {number}
 */
proto.MsgPlfAcKilledNtf.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfAcKilledNtf.prototype.setType = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfAcKilledNtf.prototype.clearType = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcKilledNtf.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcOnlineNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.MsgPlfAcOnlineNtf.repeatedFields_, null);
};
goog.inherits(proto.MsgPlfAcOnlineNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcOnlineNtf.displayName = 'proto.MsgPlfAcOnlineNtf';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.MsgPlfAcOnlineNtf.repeatedFields_ = [2,3,4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcOnlineNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcOnlineNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcOnlineNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcOnlineNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getField(msg, 1),
    totalList: jspb.Message.getRepeatedField(msg, 2),
    mMikeList: jspb.Message.getRepeatedField(msg, 3),
    fMikeList: jspb.Message.getRepeatedField(msg, 4),
    uMikeList: jspb.Message.getRepeatedField(msg, 5),
    type: jspb.Message.getField(msg, 6),
    uid: jspb.Message.getField(msg, 7)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcOnlineNtf}
 */
proto.MsgPlfAcOnlineNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcOnlineNtf;
  return proto.MsgPlfAcOnlineNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcOnlineNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcOnlineNtf}
 */
proto.MsgPlfAcOnlineNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.addTotal(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.addMMike(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.addFMike(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.addUMike(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcOnlineNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcOnlineNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcOnlineNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcOnlineNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getTotalList();
  if (f.length > 0) {
    writer.writeRepeatedUint32(
      2,
      f
    );
  }
  f = message.getMMikeList();
  if (f.length > 0) {
    writer.writeRepeatedUint32(
      3,
      f
    );
  }
  f = message.getFMikeList();
  if (f.length > 0) {
    writer.writeRepeatedUint32(
      4,
      f
    );
  }
  f = message.getUMikeList();
  if (f.length > 0) {
    writer.writeRepeatedUint32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
};


/**
 * required uint32 id = 1;
 * @return {number}
 */
proto.MsgPlfAcOnlineNtf.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcOnlineNtf.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcOnlineNtf.prototype.clearId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcOnlineNtf.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated uint32 total = 2;
 * @return {!Array<number>}
 */
proto.MsgPlfAcOnlineNtf.prototype.getTotalList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array<number>} value */
proto.MsgPlfAcOnlineNtf.prototype.setTotalList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.MsgPlfAcOnlineNtf.prototype.addTotal = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.MsgPlfAcOnlineNtf.prototype.clearTotalList = function() {
  this.setTotalList([]);
};


/**
 * repeated uint32 m_mike = 3;
 * @return {!Array<number>}
 */
proto.MsgPlfAcOnlineNtf.prototype.getMMikeList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<number>} value */
proto.MsgPlfAcOnlineNtf.prototype.setMMikeList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.MsgPlfAcOnlineNtf.prototype.addMMike = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.MsgPlfAcOnlineNtf.prototype.clearMMikeList = function() {
  this.setMMikeList([]);
};


/**
 * repeated uint32 f_mike = 4;
 * @return {!Array<number>}
 */
proto.MsgPlfAcOnlineNtf.prototype.getFMikeList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array<number>} value */
proto.MsgPlfAcOnlineNtf.prototype.setFMikeList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.MsgPlfAcOnlineNtf.prototype.addFMike = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


proto.MsgPlfAcOnlineNtf.prototype.clearFMikeList = function() {
  this.setFMikeList([]);
};


/**
 * repeated uint32 u_mike = 5;
 * @return {!Array<number>}
 */
proto.MsgPlfAcOnlineNtf.prototype.getUMikeList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 5));
};


/** @param {!Array<number>} value */
proto.MsgPlfAcOnlineNtf.prototype.setUMikeList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.MsgPlfAcOnlineNtf.prototype.addUMike = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


proto.MsgPlfAcOnlineNtf.prototype.clearUMikeList = function() {
  this.setUMikeList([]);
};


/**
 * required uint32 type = 6;
 * @return {number}
 */
proto.MsgPlfAcOnlineNtf.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.MsgPlfAcOnlineNtf.prototype.setType = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.MsgPlfAcOnlineNtf.prototype.clearType = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcOnlineNtf.prototype.hasType = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * required uint32 uid = 7;
 * @return {number}
 */
proto.MsgPlfAcOnlineNtf.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.MsgPlfAcOnlineNtf.prototype.setUid = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.MsgPlfAcOnlineNtf.prototype.clearUid = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcOnlineNtf.prototype.hasUid = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcConfigNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.MsgPlfAcConfigNtf.repeatedFields_, null);
};
goog.inherits(proto.MsgPlfAcConfigNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcConfigNtf.displayName = 'proto.MsgPlfAcConfigNtf';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.MsgPlfAcConfigNtf.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcConfigNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcConfigNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcConfigNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcConfigNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    nameList: jspb.Message.getRepeatedField(msg, 1),
    backgroundsList: jspb.Message.getRepeatedField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcConfigNtf}
 */
proto.MsgPlfAcConfigNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcConfigNtf;
  return proto.MsgPlfAcConfigNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcConfigNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcConfigNtf}
 */
proto.MsgPlfAcConfigNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addBackgrounds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcConfigNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcConfigNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcConfigNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcConfigNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNameList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getBackgroundsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated string name = 1;
 * @return {!Array<string>}
 */
proto.MsgPlfAcConfigNtf.prototype.getNameList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.MsgPlfAcConfigNtf.prototype.setNameList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.MsgPlfAcConfigNtf.prototype.addName = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.MsgPlfAcConfigNtf.prototype.clearNameList = function() {
  this.setNameList([]);
};


/**
 * repeated string backgrounds = 2;
 * @return {!Array<string>}
 */
proto.MsgPlfAcConfigNtf.prototype.getBackgroundsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array<string>} value */
proto.MsgPlfAcConfigNtf.prototype.setBackgroundsList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.MsgPlfAcConfigNtf.prototype.addBackgrounds = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.MsgPlfAcConfigNtf.prototype.clearBackgroundsList = function() {
  this.setBackgroundsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgGamesChatReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgGamesChatReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgGamesChatReq.displayName = 'proto.MsgGamesChatReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgGamesChatReq.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgGamesChatReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgGamesChatReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgGamesChatReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && ChatLog_pb.ChatItem.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgGamesChatReq}
 */
proto.MsgGamesChatReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgGamesChatReq;
  return proto.MsgGamesChatReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgGamesChatReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgGamesChatReq}
 */
proto.MsgGamesChatReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ChatLog_pb.ChatItem;
      reader.readMessage(value,ChatLog_pb.ChatItem.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgGamesChatReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgGamesChatReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgGamesChatReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgGamesChatReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ChatLog_pb.ChatItem.serializeBinaryToWriter
    );
  }
};


/**
 * required ChatItem info = 1;
 * @return {!proto.ChatItem}
 */
proto.MsgGamesChatReq.prototype.getInfo = function() {
  return /** @type{!proto.ChatItem} */ (
    jspb.Message.getWrapperField(this, ChatLog_pb.ChatItem, 1, 1));
};


/** @param {!proto.ChatItem} value */
proto.MsgGamesChatReq.prototype.setInfo = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.MsgGamesChatReq.prototype.clearInfo = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgGamesChatReq.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgGamesChatRep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgGamesChatRep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgGamesChatRep.displayName = 'proto.MsgGamesChatRep';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgGamesChatRep.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgGamesChatRep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgGamesChatRep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgGamesChatRep.toObject = function(includeInstance, msg) {
  var f, obj = {
    rcode: jspb.Message.getField(msg, 1),
    msgId: jspb.Message.getField(msg, 2),
    msgType: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgGamesChatRep}
 */
proto.MsgGamesChatRep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgGamesChatRep;
  return proto.MsgGamesChatRep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgGamesChatRep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgGamesChatRep}
 */
proto.MsgGamesChatRep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRcode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMsgId(value);
      break;
    case 3:
      var value = /** @type {!proto.MsgType} */ (reader.readEnum());
      msg.setMsgType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgGamesChatRep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgGamesChatRep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgGamesChatRep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgGamesChatRep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {!proto.MsgType} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * required int32 rcode = 1;
 * @return {number}
 */
proto.MsgGamesChatRep.prototype.getRcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgGamesChatRep.prototype.setRcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgGamesChatRep.prototype.clearRcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgGamesChatRep.prototype.hasRcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 msg_id = 2;
 * @return {number}
 */
proto.MsgGamesChatRep.prototype.getMsgId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgGamesChatRep.prototype.setMsgId = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgGamesChatRep.prototype.clearMsgId = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgGamesChatRep.prototype.hasMsgId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MsgType msg_type = 3;
 * @return {!proto.MsgType}
 */
proto.MsgGamesChatRep.prototype.getMsgType = function() {
  return /** @type {!proto.MsgType} */ (jspb.Message.getFieldWithDefault(this, 3, 1));
};


/** @param {!proto.MsgType} value */
proto.MsgGamesChatRep.prototype.setMsgType = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.MsgGamesChatRep.prototype.clearMsgType = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgGamesChatRep.prototype.hasMsgType = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgGamesChatNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgGamesChatNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgGamesChatNtf.displayName = 'proto.MsgGamesChatNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgGamesChatNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgGamesChatNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgGamesChatNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgGamesChatNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && ChatLog_pb.ChatItem.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgGamesChatNtf}
 */
proto.MsgGamesChatNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgGamesChatNtf;
  return proto.MsgGamesChatNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgGamesChatNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgGamesChatNtf}
 */
proto.MsgGamesChatNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ChatLog_pb.ChatItem;
      reader.readMessage(value,ChatLog_pb.ChatItem.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgGamesChatNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgGamesChatNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgGamesChatNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgGamesChatNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ChatLog_pb.ChatItem.serializeBinaryToWriter
    );
  }
};


/**
 * required ChatItem info = 1;
 * @return {!proto.ChatItem}
 */
proto.MsgGamesChatNtf.prototype.getInfo = function() {
  return /** @type{!proto.ChatItem} */ (
    jspb.Message.getWrapperField(this, ChatLog_pb.ChatItem, 1, 1));
};


/** @param {!proto.ChatItem} value */
proto.MsgGamesChatNtf.prototype.setInfo = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.MsgGamesChatNtf.prototype.clearInfo = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgGamesChatNtf.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcStateReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcStateReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcStateReq.displayName = 'proto.MsgPlfAcStateReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcStateReq.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcStateReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcStateReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcStateReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcStateReq}
 */
proto.MsgPlfAcStateReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcStateReq;
  return proto.MsgPlfAcStateReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcStateReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcStateReq}
 */
proto.MsgPlfAcStateReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcStateReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcStateReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcStateReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcStateReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * required uint32 state = 1;
 * @return {number}
 */
proto.MsgPlfAcStateReq.prototype.getState = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcStateReq.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcStateReq.prototype.clearState = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcStateReq.prototype.hasState = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfAcStateNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfAcStateNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfAcStateNtf.displayName = 'proto.MsgPlfAcStateNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfAcStateNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfAcStateNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfAcStateNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcStateNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getField(msg, 1),
    state: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfAcStateNtf}
 */
proto.MsgPlfAcStateNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfAcStateNtf;
  return proto.MsgPlfAcStateNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfAcStateNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfAcStateNtf}
 */
proto.MsgPlfAcStateNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfAcStateNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfAcStateNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfAcStateNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfAcStateNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * required uint32 uid = 1;
 * @return {number}
 */
proto.MsgPlfAcStateNtf.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfAcStateNtf.prototype.setUid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfAcStateNtf.prototype.clearUid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcStateNtf.prototype.hasUid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint32 state = 2;
 * @return {number}
 */
proto.MsgPlfAcStateNtf.prototype.getState = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfAcStateNtf.prototype.setState = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfAcStateNtf.prototype.clearState = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfAcStateNtf.prototype.hasState = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfGpCreateReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfGpCreateReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfGpCreateReq.displayName = 'proto.MsgPlfGpCreateReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfGpCreateReq.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfGpCreateReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfGpCreateReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfGpCreateReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getField(msg, 1),
    curMember: jspb.Message.getField(msg, 2),
    maxMember: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfGpCreateReq}
 */
proto.MsgPlfGpCreateReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfGpCreateReq;
  return proto.MsgPlfGpCreateReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfGpCreateReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfGpCreateReq}
 */
proto.MsgPlfGpCreateReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCurMember(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxMember(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfGpCreateReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfGpCreateReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfGpCreateReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfGpCreateReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * required uint32 type = 1;
 * @return {number}
 */
proto.MsgPlfGpCreateReq.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfGpCreateReq.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfGpCreateReq.prototype.clearType = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfGpCreateReq.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint32 cur_member = 2;
 * @return {number}
 */
proto.MsgPlfGpCreateReq.prototype.getCurMember = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfGpCreateReq.prototype.setCurMember = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfGpCreateReq.prototype.clearCurMember = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfGpCreateReq.prototype.hasCurMember = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required uint32 max_member = 3;
 * @return {number}
 */
proto.MsgPlfGpCreateReq.prototype.getMaxMember = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.MsgPlfGpCreateReq.prototype.setMaxMember = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.MsgPlfGpCreateReq.prototype.clearMaxMember = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfGpCreateReq.prototype.hasMaxMember = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfGpCreateRep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfGpCreateRep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfGpCreateRep.displayName = 'proto.MsgPlfGpCreateRep';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfGpCreateRep.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfGpCreateRep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfGpCreateRep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfGpCreateRep.toObject = function(includeInstance, msg) {
  var f, obj = {
    rcode: jspb.Message.getField(msg, 1),
    id: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfGpCreateRep}
 */
proto.MsgPlfGpCreateRep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfGpCreateRep;
  return proto.MsgPlfGpCreateRep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfGpCreateRep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfGpCreateRep}
 */
proto.MsgPlfGpCreateRep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRcode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfGpCreateRep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfGpCreateRep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfGpCreateRep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfGpCreateRep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * required uint32 rcode = 1;
 * @return {number}
 */
proto.MsgPlfGpCreateRep.prototype.getRcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfGpCreateRep.prototype.setRcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfGpCreateRep.prototype.clearRcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfGpCreateRep.prototype.hasRcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 id = 2;
 * @return {number}
 */
proto.MsgPlfGpCreateRep.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfGpCreateRep.prototype.setId = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfGpCreateRep.prototype.clearId = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfGpCreateRep.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfGpEnterRep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.MsgPlfGpEnterRep.repeatedFields_, null);
};
goog.inherits(proto.MsgPlfGpEnterRep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfGpEnterRep.displayName = 'proto.MsgPlfGpEnterRep';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.MsgPlfGpEnterRep.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfGpEnterRep.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfGpEnterRep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfGpEnterRep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfGpEnterRep.toObject = function(includeInstance, msg) {
  var f, obj = {
    rcode: jspb.Message.getField(msg, 1),
    type: jspb.Message.getField(msg, 2),
    infoList: jspb.Message.toObjectList(msg.getInfoList(),
    common_pb.PkPlayerInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfGpEnterRep}
 */
proto.MsgPlfGpEnterRep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfGpEnterRep;
  return proto.MsgPlfGpEnterRep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfGpEnterRep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfGpEnterRep}
 */
proto.MsgPlfGpEnterRep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRcode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 3:
      var value = new common_pb.PkPlayerInfo;
      reader.readMessage(value,common_pb.PkPlayerInfo.deserializeBinaryFromReader);
      msg.addInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfGpEnterRep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfGpEnterRep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfGpEnterRep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfGpEnterRep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      common_pb.PkPlayerInfo.serializeBinaryToWriter
    );
  }
};


/**
 * required uint32 rcode = 1;
 * @return {number}
 */
proto.MsgPlfGpEnterRep.prototype.getRcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfGpEnterRep.prototype.setRcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfGpEnterRep.prototype.clearRcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfGpEnterRep.prototype.hasRcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 type = 2;
 * @return {number}
 */
proto.MsgPlfGpEnterRep.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfGpEnterRep.prototype.setType = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfGpEnterRep.prototype.clearType = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfGpEnterRep.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated PkPlayerInfo info = 3;
 * @return {!Array<!proto.PkPlayerInfo>}
 */
proto.MsgPlfGpEnterRep.prototype.getInfoList = function() {
  return /** @type{!Array<!proto.PkPlayerInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.PkPlayerInfo, 3));
};


/** @param {!Array<!proto.PkPlayerInfo>} value */
proto.MsgPlfGpEnterRep.prototype.setInfoList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.PkPlayerInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PkPlayerInfo}
 */
proto.MsgPlfGpEnterRep.prototype.addInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.PkPlayerInfo, opt_index);
};


proto.MsgPlfGpEnterRep.prototype.clearInfoList = function() {
  this.setInfoList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfGpEnterNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfGpEnterNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfGpEnterNtf.displayName = 'proto.MsgPlfGpEnterNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfGpEnterNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfGpEnterNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfGpEnterNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfGpEnterNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getField(msg, 1),
    info: (f = msg.getInfo()) && common_pb.PkPlayerInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfGpEnterNtf}
 */
proto.MsgPlfGpEnterNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfGpEnterNtf;
  return proto.MsgPlfGpEnterNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfGpEnterNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfGpEnterNtf}
 */
proto.MsgPlfGpEnterNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 2:
      var value = new common_pb.PkPlayerInfo;
      reader.readMessage(value,common_pb.PkPlayerInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfGpEnterNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfGpEnterNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfGpEnterNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfGpEnterNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.PkPlayerInfo.serializeBinaryToWriter
    );
  }
};


/**
 * required uint32 type = 1;
 * @return {number}
 */
proto.MsgPlfGpEnterNtf.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfGpEnterNtf.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfGpEnterNtf.prototype.clearType = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfGpEnterNtf.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required PkPlayerInfo info = 2;
 * @return {!proto.PkPlayerInfo}
 */
proto.MsgPlfGpEnterNtf.prototype.getInfo = function() {
  return /** @type{!proto.PkPlayerInfo} */ (
    jspb.Message.getWrapperField(this, common_pb.PkPlayerInfo, 2, 1));
};


/** @param {!proto.PkPlayerInfo} value */
proto.MsgPlfGpEnterNtf.prototype.setInfo = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.MsgPlfGpEnterNtf.prototype.clearInfo = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfGpEnterNtf.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfGpExitNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfGpExitNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfGpExitNtf.displayName = 'proto.MsgPlfGpExitNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfGpExitNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfGpExitNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfGpExitNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfGpExitNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfGpExitNtf}
 */
proto.MsgPlfGpExitNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfGpExitNtf;
  return proto.MsgPlfGpExitNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfGpExitNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfGpExitNtf}
 */
proto.MsgPlfGpExitNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfGpExitNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfGpExitNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfGpExitNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfGpExitNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * required uint32 uid = 1;
 * @return {number}
 */
proto.MsgPlfGpExitNtf.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfGpExitNtf.prototype.setUid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfGpExitNtf.prototype.clearUid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfGpExitNtf.prototype.hasUid = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfGpModeChangeReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfGpModeChangeReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfGpModeChangeReq.displayName = 'proto.MsgPlfGpModeChangeReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfGpModeChangeReq.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfGpModeChangeReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfGpModeChangeReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfGpModeChangeReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getField(msg, 1),
    member: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfGpModeChangeReq}
 */
proto.MsgPlfGpModeChangeReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfGpModeChangeReq;
  return proto.MsgPlfGpModeChangeReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfGpModeChangeReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfGpModeChangeReq}
 */
proto.MsgPlfGpModeChangeReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMember(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfGpModeChangeReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfGpModeChangeReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfGpModeChangeReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfGpModeChangeReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * required uint32 type = 1;
 * @return {number}
 */
proto.MsgPlfGpModeChangeReq.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfGpModeChangeReq.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfGpModeChangeReq.prototype.clearType = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfGpModeChangeReq.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint32 member = 2;
 * @return {number}
 */
proto.MsgPlfGpModeChangeReq.prototype.getMember = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MsgPlfGpModeChangeReq.prototype.setMember = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MsgPlfGpModeChangeReq.prototype.clearMember = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfGpModeChangeReq.prototype.hasMember = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfGpModeChangeRep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfGpModeChangeRep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfGpModeChangeRep.displayName = 'proto.MsgPlfGpModeChangeRep';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfGpModeChangeRep.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfGpModeChangeRep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfGpModeChangeRep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfGpModeChangeRep.toObject = function(includeInstance, msg) {
  var f, obj = {
    rcode: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfGpModeChangeRep}
 */
proto.MsgPlfGpModeChangeRep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfGpModeChangeRep;
  return proto.MsgPlfGpModeChangeRep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfGpModeChangeRep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfGpModeChangeRep}
 */
proto.MsgPlfGpModeChangeRep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRcode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfGpModeChangeRep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfGpModeChangeRep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfGpModeChangeRep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfGpModeChangeRep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * required uint32 rcode = 1;
 * @return {number}
 */
proto.MsgPlfGpModeChangeRep.prototype.getRcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfGpModeChangeRep.prototype.setRcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfGpModeChangeRep.prototype.clearRcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfGpModeChangeRep.prototype.hasRcode = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfGpModeChangeNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfGpModeChangeNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfGpModeChangeNtf.displayName = 'proto.MsgPlfGpModeChangeNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfGpModeChangeNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfGpModeChangeNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfGpModeChangeNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfGpModeChangeNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    member: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfGpModeChangeNtf}
 */
proto.MsgPlfGpModeChangeNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfGpModeChangeNtf;
  return proto.MsgPlfGpModeChangeNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfGpModeChangeNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfGpModeChangeNtf}
 */
proto.MsgPlfGpModeChangeNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMember(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfGpModeChangeNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfGpModeChangeNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfGpModeChangeNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfGpModeChangeNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * required uint32 member = 1;
 * @return {number}
 */
proto.MsgPlfGpModeChangeNtf.prototype.getMember = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfGpModeChangeNtf.prototype.setMember = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfGpModeChangeNtf.prototype.clearMember = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfGpModeChangeNtf.prototype.hasMember = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgPlfGpLeaderChangeNtf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgPlfGpLeaderChangeNtf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MsgPlfGpLeaderChangeNtf.displayName = 'proto.MsgPlfGpLeaderChangeNtf';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgPlfGpLeaderChangeNtf.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgPlfGpLeaderChangeNtf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgPlfGpLeaderChangeNtf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfGpLeaderChangeNtf.toObject = function(includeInstance, msg) {
  var f, obj = {
    leader: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgPlfGpLeaderChangeNtf}
 */
proto.MsgPlfGpLeaderChangeNtf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgPlfGpLeaderChangeNtf;
  return proto.MsgPlfGpLeaderChangeNtf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgPlfGpLeaderChangeNtf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgPlfGpLeaderChangeNtf}
 */
proto.MsgPlfGpLeaderChangeNtf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLeader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgPlfGpLeaderChangeNtf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgPlfGpLeaderChangeNtf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgPlfGpLeaderChangeNtf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgPlfGpLeaderChangeNtf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * required uint32 leader = 1;
 * @return {number}
 */
proto.MsgPlfGpLeaderChangeNtf.prototype.getLeader = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MsgPlfGpLeaderChangeNtf.prototype.setLeader = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MsgPlfGpLeaderChangeNtf.prototype.clearLeader = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.MsgPlfGpLeaderChangeNtf.prototype.hasLeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto);
