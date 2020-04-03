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

goog.exportSymbol('proto.Food', null, global);
goog.exportSymbol('proto.Foods', null, global);
goog.exportSymbol('proto.SyncFood', null, global);

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
proto.Food = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Food.repeatedFields_, null);
};
goog.inherits(proto.Food, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Food.displayName = 'proto.Food';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Food.repeatedFields_ = [1];



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
proto.Food.prototype.toObject = function(opt_includeInstance) {
  return proto.Food.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Food} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Food.toObject = function(includeInstance, msg) {
  var f, obj = {
    infoList: jspb.Message.getRepeatedField(msg, 1)
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
 * @return {!proto.Food}
 */
proto.Food.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Food;
  return proto.Food.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Food} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Food}
 */
proto.Food.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
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
proto.Food.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Food.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Food} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Food.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfoList();
  if (f.length > 0) {
    writer.writeRepeatedInt32(
      1,
      f
    );
  }
};


/**
 * repeated int32 info = 1;
 * @return {!Array.<number>}
 */
proto.Food.prototype.getInfoList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array.<number>} value */
proto.Food.prototype.setInfoList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.Food.prototype.addInfo = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.Food.prototype.clearInfoList = function() {
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
proto.Foods = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Foods.repeatedFields_, null);
};
goog.inherits(proto.Foods, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Foods.displayName = 'proto.Foods';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Foods.repeatedFields_ = [1];



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
proto.Foods.prototype.toObject = function(opt_includeInstance) {
  return proto.Foods.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Foods} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Foods.toObject = function(includeInstance, msg) {
  var f, obj = {
    foodList: jspb.Message.toObjectList(msg.getFoodList(),
    proto.Food.toObject, includeInstance)
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
 * @return {!proto.Foods}
 */
proto.Foods.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Foods;
  return proto.Foods.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Foods} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Foods}
 */
proto.Foods.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Food;
      reader.readMessage(value,proto.Food.deserializeBinaryFromReader);
      msg.addFood(value);
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
proto.Foods.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Foods.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Foods} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Foods.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFoodList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Food.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Food food = 1;
 * @return {!Array.<!proto.Food>}
 */
proto.Foods.prototype.getFoodList = function() {
  return /** @type{!Array.<!proto.Food>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Food, 1));
};


/** @param {!Array.<!proto.Food>} value */
proto.Foods.prototype.setFoodList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Food=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Food}
 */
proto.Foods.prototype.addFood = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Food, opt_index);
};


proto.Foods.prototype.clearFoodList = function() {
  this.setFoodList([]);
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
proto.SyncFood = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SyncFood, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SyncFood.displayName = 'proto.SyncFood';
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
proto.SyncFood.prototype.toObject = function(opt_includeInstance) {
  return proto.SyncFood.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SyncFood} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SyncFood.toObject = function(includeInstance, msg) {
  var f, obj = {
    frameseq: jspb.Message.getField(msg, 1),
    foods: (f = msg.getFoods()) && proto.Foods.toObject(includeInstance, f)
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
 * @return {!proto.SyncFood}
 */
proto.SyncFood.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SyncFood;
  return proto.SyncFood.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SyncFood} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SyncFood}
 */
proto.SyncFood.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFrameseq(value);
      break;
    case 2:
      var value = new proto.Foods;
      reader.readMessage(value,proto.Foods.deserializeBinaryFromReader);
      msg.setFoods(value);
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
proto.SyncFood.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SyncFood.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SyncFood} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SyncFood.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getFoods();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.Foods.serializeBinaryToWriter
    );
  }
};


/**
 * required uint32 frameseq = 1;
 * @return {number}
 */
proto.SyncFood.prototype.getFrameseq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.SyncFood.prototype.setFrameseq = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SyncFood.prototype.clearFrameseq = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SyncFood.prototype.hasFrameseq = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required Foods foods = 2;
 * @return {!proto.Foods}
 */
proto.SyncFood.prototype.getFoods = function() {
  return /** @type{!proto.Foods} */ (
    jspb.Message.getWrapperField(this, proto.Foods, 2, 1));
};


/** @param {!proto.Foods} value */
proto.SyncFood.prototype.setFoods = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.SyncFood.prototype.clearFoods = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SyncFood.prototype.hasFoods = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto);