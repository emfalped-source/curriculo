var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var __await = function(promise, isYieldStar) {
  this[0] = promise;
  this[1] = isYieldStar;
};
var __asyncGenerator = (__this, __arguments, generator) => {
  var resume = (k, v, yes, no) => {
    try {
      var x = generator[k](v), isAwait = (v = x.value) instanceof __await, done = x.done;
      Promise.resolve(isAwait ? v[0] : v).then((y) => isAwait ? resume(k === "return" ? k : "next", v[1] ? { done: y.done, value: y.value } : y, yes, no) : yes({ value: y, done })).catch((e) => resume("throw", e, yes, no));
    } catch (e) {
      no(e);
    }
  }, method = (k) => it[k] = (x) => new Promise((yes, no) => resume(k, x, yes, no)), it = {};
  return generator = generator.apply(__this, __arguments), it[__knownSymbol("asyncIterator")] = () => it, method("next"), method("throw"), method("return"), it;
};
var __forAwait = (obj, it, method) => (it = obj[__knownSymbol("asyncIterator")]) ? it.call(obj) : (obj = obj[__knownSymbol("iterator")](), it = {}, method = (key, fn) => (fn = obj[key]) && (it[key] = (arg) => new Promise((yes, no, done) => (arg = fn.call(obj, arg), done = arg.done, Promise.resolve(arg.value).then((value) => yes({ value, done }), no)))), method("next"), method("return"), it);

// src/glue/messages.ts
var GLUE_VERSION = 1;
var GLUE_MESSAGE_PROTOTYPES = {
  "erro_evt": {
    "name": "erro_evt",
    "structName": "glue_msg_error",
    "className": "GlueMsgError",
    "fields": [
      {
        "type": "str",
        "name": "message",
        "isNullable": false
      }
    ]
  },
  "load_req": {
    "name": "load_req",
    "structName": "glue_msg_load_req",
    "className": "GlueMsgLoadReq",
    "fields": [
      {
        "type": "arr_str",
        "name": "model_paths",
        "isNullable": false
      },
      {
        "type": "str",
        "name": "mmproj_path",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "n_ctx_auto",
        "isNullable": false
      },
      {
        "type": "bool",
        "name": "use_mmap",
        "isNullable": false
      },
      {
        "type": "bool",
        "name": "use_mlock",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "n_gpu_layers",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "n_ctx",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "n_threads",
        "isNullable": false
      },
      {
        "type": "str",
        "name": "model_alias",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "log_level",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "embeddings",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "offload_kqv",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "n_batch",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "n_ubatch",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "n_parallel",
        "isNullable": true
      },
      {
        "type": "str",
        "name": "pooling_type",
        "isNullable": true
      },
      {
        "type": "str",
        "name": "rope_scaling_type",
        "isNullable": true
      },
      {
        "type": "float",
        "name": "rope_freq_base",
        "isNullable": true
      },
      {
        "type": "float",
        "name": "rope_freq_scale",
        "isNullable": true
      },
      {
        "type": "float",
        "name": "yarn_ext_factor",
        "isNullable": true
      },
      {
        "type": "float",
        "name": "yarn_attn_factor",
        "isNullable": true
      },
      {
        "type": "float",
        "name": "yarn_beta_fast",
        "isNullable": true
      },
      {
        "type": "float",
        "name": "yarn_beta_slow",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "yarn_orig_ctx",
        "isNullable": true
      },
      {
        "type": "str",
        "name": "cache_type_k",
        "isNullable": true
      },
      {
        "type": "str",
        "name": "cache_type_v",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "kv_unified",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "flash_attn",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "swa_full",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "n_ctx_checkpoints",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "checkpoint_min_step",
        "isNullable": true
      },
      {
        "type": "str",
        "name": "chat_template",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "jinja",
        "isNullable": true
      },
      {
        "type": "arr_str",
        "name": "default_template_kwargs_keys",
        "isNullable": true
      },
      {
        "type": "arr_str",
        "name": "default_template_kwargs_vals",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "reasoning",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "image_min_tokens",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "image_max_tokens",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "warmup",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "no_kv_offload",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "mmproj_offload",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "cont_batching",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "n_keep",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "ctx_shift",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "cache_idle_slots",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "n_cache_reuse",
        "isNullable": true
      },
      {
        "type": "arr_str",
        "name": "lora_paths",
        "isNullable": true
      },
      {
        "type": "arr_float",
        "name": "lora_scales",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "lora_init_without_apply",
        "isNullable": true
      },
      {
        "type": "str",
        "name": "spec_draft_model",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "spec_draft_ngl",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "spec_draft_n_max",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "spec_draft_n_min",
        "isNullable": true
      },
      {
        "type": "float",
        "name": "spec_draft_p_min",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "spec_draft_threads",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "spec_draft_threads_batch",
        "isNullable": true
      },
      {
        "type": "arr_str",
        "name": "kv_overrides_keys",
        "isNullable": true
      },
      {
        "type": "arr_str",
        "name": "kv_overrides_vals",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "reasoning_budget_tokens",
        "isNullable": true
      },
      {
        "type": "str",
        "name": "reasoning_budget_message",
        "isNullable": true
      },
      {
        "type": "str",
        "name": "reasoning_format",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "skip_chat_parsing",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "prefill_assistant",
        "isNullable": true
      }
    ]
  },
  "load_res": {
    "name": "load_res",
    "structName": "glue_msg_load_res",
    "className": "GlueMsgLoadRes",
    "fields": [
      {
        "type": "bool",
        "name": "success",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "n_ctx",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "n_batch",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "n_ubatch",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "n_vocab",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "n_ctx_train",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "n_embd",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "n_layer",
        "isNullable": false
      },
      {
        "type": "arr_str",
        "name": "metadata_key",
        "isNullable": false
      },
      {
        "type": "arr_str",
        "name": "metadata_val",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "token_bos",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "token_eos",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "token_eot",
        "isNullable": false
      },
      {
        "type": "arr_int",
        "name": "list_tokens_eog",
        "isNullable": false
      },
      {
        "type": "bool",
        "name": "add_bos_token",
        "isNullable": false
      },
      {
        "type": "bool",
        "name": "add_eos_token",
        "isNullable": false
      },
      {
        "type": "bool",
        "name": "has_encoder",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "token_decoder_start",
        "isNullable": false
      },
      {
        "type": "str",
        "name": "media_marker",
        "isNullable": false
      },
      {
        "type": "bool",
        "name": "has_image_input",
        "isNullable": false
      },
      {
        "type": "bool",
        "name": "has_audio_input",
        "isNullable": false
      }
    ]
  },
  "cmpl_req": {
    "name": "cmpl_req",
    "structName": "glue_msg_completion_req",
    "className": "GlueMsgCompletionReq",
    "fields": [
      {
        "type": "bool",
        "name": "is_chat",
        "isNullable": false
      },
      {
        "type": "str",
        "name": "data_json",
        "isNullable": false
      },
      {
        "type": "arr_raw",
        "name": "files",
        "isNullable": false
      }
    ]
  },
  "cmpl_res": {
    "name": "cmpl_res",
    "structName": "glue_msg_completion_res",
    "className": "GlueMsgCompletionRes",
    "fields": [
      {
        "type": "bool",
        "name": "success",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "req_id",
        "isNullable": false
      }
    ]
  },
  "embd_req": {
    "name": "embd_req",
    "structName": "glue_msg_embedding_req",
    "className": "GlueMsgEmbeddingReq",
    "fields": [
      {
        "type": "str",
        "name": "data_json",
        "isNullable": false
      },
      {
        "type": "arr_raw",
        "name": "files",
        "isNullable": false
      }
    ]
  },
  "embd_res": {
    "name": "embd_res",
    "structName": "glue_msg_embedding_res",
    "className": "GlueMsgEmbeddingRes",
    "fields": [
      {
        "type": "bool",
        "name": "success",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "req_id",
        "isNullable": false
      }
    ]
  },
  "rrnk_req": {
    "name": "rrnk_req",
    "structName": "glue_msg_rerank_req",
    "className": "GlueMsgRerankReq",
    "fields": [
      {
        "type": "str",
        "name": "data_json",
        "isNullable": false
      }
    ]
  },
  "rrnk_res": {
    "name": "rrnk_res",
    "structName": "glue_msg_rerank_res",
    "className": "GlueMsgRerankRes",
    "fields": [
      {
        "type": "bool",
        "name": "success",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "req_id",
        "isNullable": false
      }
    ]
  },
  "gres_req": {
    "name": "gres_req",
    "structName": "glue_msg_get_result_req",
    "className": "GlueMsgGetResultReq",
    "fields": [
      {
        "type": "int",
        "name": "req_id",
        "isNullable": false
      }
    ]
  },
  "gres_res": {
    "name": "gres_res",
    "structName": "glue_msg_get_result_res",
    "className": "GlueMsgGetResultRes",
    "fields": [
      {
        "type": "bool",
        "name": "success",
        "isNullable": false
      },
      {
        "type": "bool",
        "name": "has_more",
        "isNullable": false
      },
      {
        "type": "bool",
        "name": "is_error",
        "isNullable": false
      },
      {
        "type": "str",
        "name": "data_json",
        "isNullable": false
      }
    ]
  },
  "cncl_req": {
    "name": "cncl_req",
    "structName": "glue_msg_cancel_req",
    "className": "GlueMsgCancelReq",
    "fields": [
      {
        "type": "int",
        "name": "req_id",
        "isNullable": false
      }
    ]
  },
  "cncl_res": {
    "name": "cncl_res",
    "structName": "glue_msg_cancel_res",
    "className": "GlueMsgCancelRes",
    "fields": [
      {
        "type": "bool",
        "name": "success",
        "isNullable": false
      }
    ]
  },
  "tbop_req": {
    "name": "tbop_req",
    "structName": "glue_msg_test_backend_ops_req",
    "className": "GlueMsgTestBackendOpsReq",
    "fields": [
      {
        "type": "arr_str",
        "name": "args",
        "isNullable": false
      }
    ]
  },
  "tbop_res": {
    "name": "tbop_res",
    "structName": "glue_msg_test_backend_ops_res",
    "className": "GlueMsgTestBackendOpsRes",
    "fields": [
      {
        "type": "int",
        "name": "retcode",
        "isNullable": false
      },
      {
        "type": "bool",
        "name": "success",
        "isNullable": false
      }
    ]
  }
};

// src/glue/glue.ts
var GLUE_MAGIC = new Uint8Array([71, 76, 85, 69]);
var GLUE_DTYPE_NULL = 0;
var GLUE_DTYPE_BOOL = 1;
var GLUE_DTYPE_INT = 2;
var GLUE_DTYPE_FLOAT = 3;
var GLUE_DTYPE_STRING = 4;
var GLUE_DTYPE_RAW = 5;
var GLUE_DTYPE_ARRAY_BOOL = 6;
var GLUE_DTYPE_ARRAY_INT = 7;
var GLUE_DTYPE_ARRAY_FLOAT = 8;
var GLUE_DTYPE_ARRAY_STRING = 9;
var GLUE_DTYPE_ARRAY_RAW = 10;
var TYPE_MAP = {
  str: GLUE_DTYPE_STRING,
  int: GLUE_DTYPE_INT,
  float: GLUE_DTYPE_FLOAT,
  bool: GLUE_DTYPE_BOOL,
  raw: GLUE_DTYPE_RAW,
  arr_str: GLUE_DTYPE_ARRAY_STRING,
  arr_int: GLUE_DTYPE_ARRAY_INT,
  arr_float: GLUE_DTYPE_ARRAY_FLOAT,
  arr_bool: GLUE_DTYPE_ARRAY_BOOL,
  arr_raw: GLUE_DTYPE_ARRAY_RAW,
  null: GLUE_DTYPE_NULL
};
function glueDeserialize(buf) {
  let offset = 0;
  const view = new DataView(buf.buffer);
  const readUint32 = () => {
    const value = view.getUint32(offset, true);
    offset += 4;
    return value;
  };
  const readInt32 = () => {
    const value = view.getInt32(offset, true);
    offset += 4;
    return value;
  };
  const readFloat = () => {
    const value = view.getFloat32(offset, true);
    offset += 4;
    return value;
  };
  const readBool = () => {
    return readUint32() !== 0;
  };
  const readString = (customLen) => {
    const length = customLen != null ? customLen : readUint32();
    const value = new TextDecoder().decode(buf.slice(offset, offset + length));
    offset += length;
    return value;
  };
  const readRaw = () => {
    const length = readUint32();
    const value = buf.slice(offset, offset + length);
    offset += length;
    return value;
  };
  const readArray = (readItem) => {
    const length = readUint32();
    const value = new Array(length);
    for (let i = 0; i < length; i++) {
      value[i] = readItem();
    }
    return value;
  };
  const readNull = () => null;
  const readField = (field) => {
    switch (field.type) {
      case "str":
        return readString();
      case "int":
        return readInt32();
      case "float":
        return readFloat();
      case "bool":
        return readBool();
      case "raw":
        return readRaw();
      case "arr_str":
        return readArray(readString);
      case "arr_int":
        return readArray(readInt32);
      case "arr_float":
        return readArray(readFloat);
      case "arr_bool":
        return readArray(readBool);
      case "arr_raw":
        return readArray(readRaw);
      case "null":
        return readNull();
    }
  };
  const magicValid = buf[0] === GLUE_MAGIC[0] && buf[1] === GLUE_MAGIC[1] && buf[2] === GLUE_MAGIC[2] && buf[3] === GLUE_MAGIC[3];
  offset += 4;
  if (!magicValid) {
    throw new Error("Invalid magic number");
  }
  const version = readUint32();
  if (version !== GLUE_VERSION) {
    throw new Error("Invalid version number");
  }
  const name = readString(8);
  const msgProto = GLUE_MESSAGE_PROTOTYPES[name];
  if (!msgProto) {
    throw new Error(`Unknown message name: ${name}`);
  }
  const output = { _name: name };
  for (const field of msgProto.fields) {
    const readType = readUint32();
    if (readType === GLUE_DTYPE_NULL) {
      if (!field.isNullable) {
        throw new Error(
          `${name}: Expect field ${field.name} to be non-nullable`
        );
      }
      output[field.name] = null;
      continue;
    }
    if (readType !== TYPE_MAP[field.type]) {
      throw new Error(
        `${name}: Expect field ${field.name} to have type ${field.type}`
      );
    }
    output[field.name] = readField(field);
  }
  return output;
}
function glueSerialize(msg) {
  const msgProto = GLUE_MESSAGE_PROTOTYPES[msg._name];
  if (!msgProto) {
    throw new Error(`Unknown message name: ${msg._name}`);
  }
  const bufs = [];
  const writeUint32 = (value) => {
    const buf = new ArrayBuffer(4);
    new DataView(buf).setUint32(0, value, true);
    bufs.push(new Uint8Array(buf));
  };
  const writeInt32 = (value) => {
    const buf = new ArrayBuffer(4);
    new DataView(buf).setInt32(0, value, true);
    bufs.push(new Uint8Array(buf));
  };
  const writeFloat = (value) => {
    const buf = new ArrayBuffer(4);
    new DataView(buf).setFloat32(0, value, true);
    bufs.push(new Uint8Array(buf));
  };
  const writeBool = (value) => {
    writeUint32(value ? 1 : 0);
  };
  const writeString = (value) => {
    const utf8 = new TextEncoder().encode(value);
    writeUint32(utf8.byteLength);
    bufs.push(utf8);
  };
  const writeRaw = (value) => {
    writeUint32(value.byteLength);
    bufs.push(value);
  };
  const writeArray = (value, writeItem) => {
    writeUint32(value.length);
    for (const item of value) {
      writeItem(item);
    }
  };
  const writeNull = () => {
  };
  bufs.push(GLUE_MAGIC);
  writeUint32(GLUE_VERSION);
  {
    const utf8 = new TextEncoder().encode(msg._name);
    bufs.push(utf8);
  }
  for (const field of msgProto.fields) {
    const val = msg[field.name];
    if (!field.isNullable && (val === null || val === void 0)) {
      throw new Error(
        `${msg._name}: Expect field ${field.name} to be non-nullable`
      );
    }
    if (val === null || val === void 0) {
      writeUint32(GLUE_DTYPE_NULL);
      continue;
    }
    writeUint32(TYPE_MAP[field.type]);
    switch (field.type) {
      case "str":
        writeString(val);
        break;
      case "int":
        writeInt32(val);
        break;
      case "float":
        writeFloat(val);
        break;
      case "bool":
        writeBool(val);
        break;
      case "raw":
        writeRaw(val);
        break;
      case "arr_str":
        writeArray(val, writeString);
        break;
      case "arr_int":
        writeArray(val, writeInt32);
        break;
      case "arr_float":
        writeArray(val, writeFloat);
        break;
      case "arr_bool":
        writeArray(val, writeBool);
        break;
      case "arr_raw":
        writeArray(val, writeRaw);
        break;
      case "null":
        writeNull();
        break;
    }
  }
  const totalLength = bufs.reduce((acc, buf) => acc + buf.byteLength, 0);
  const output = new Uint8Array(totalLength);
  let offset = 0;
  for (const buf of bufs) {
    output.set(buf, offset);
    offset += buf.byteLength;
  }
  return output;
}

// src/wasm/source-map.ts
var WASM_SOURCE_MAP = {
  "default": "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",
  "compat": "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"
};

// src/debug.ts
var cache = /* @__PURE__ */ new Map();
function loadMap(buildKey) {
  return __async(this, null, function* () {
    if (cache.has(buildKey)) return cache.get(buildKey);
    const b64 = WASM_SOURCE_MAP[buildKey];
    if (!b64) throw new Error(`No source map for build "${buildKey}"`);
    const gzipped = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
    const ds = new DecompressionStream("gzip");
    const writer = ds.writable.getWriter();
    writer.write(gzipped);
    writer.close();
    const buf = yield new Response(ds.readable).arrayBuffer();
    const dv = new DataView(buf);
    const bytes = new Uint8Array(buf);
    const firstId = dv.getUint32(0, true);
    const funcCount = dv.getUint32(4, true);
    const numNames = dv.getUint32(8, true);
    const td = new TextDecoder();
    const names = [];
    let pos = 12;
    for (let i = 0; i < numNames; i++) {
      const len = bytes[pos++];
      names.push(td.decode(bytes.subarray(pos, pos + len)));
      pos += len;
    }
    const funcNames = [];
    for (let i = 0; i < funcCount; i++) {
      const idx = dv.getUint16(pos, true);
      pos += 2;
      funcNames.push(idx === 65535 ? null : names[idx]);
    }
    const entry = { firstId, funcNames };
    cache.set(buildKey, entry);
    return entry;
  });
}
var Debug = {
  /**
   * Resolves a list of wasm function indices to their cleaned symbol names.
   */
  decodeFuncIds: (funcIds, isCompatBuild) => __async(void 0, null, function* () {
    const buildKey = isCompatBuild ? "compat" : "default";
    const { firstId, funcNames } = yield loadMap(buildKey);
    return funcIds.map((funcId) => {
      const i = funcId - firstId;
      const name = i >= 0 && i < funcNames.length && funcNames[i] ? funcNames[i] : "(unknown)";
      return { funcId, name };
    });
  }),
  /**
   * Annotates a wasm stack trace string with resolved function names.
   *
   * Example input from Chrome:
   *   at http://localhost:8080/esm/wasm/wllama.wasm:wasm-function[775]:0x74251
   *   at async blob:http://localhost:8080/53a863cc-7227-45cc-8594-ddbbf5257f20:317:28
   *
   * Example input from Firefox:
   *   @http://localhost:8080/esm/wasm/wllama.wasm:wasm-function[796]:0x7dfe2
   *       at wModuleInit/WebAssembly.promising/< (9b6a2acd-d909-44e2-b021-d42fb9087cfb:15:32) index.js:1433:45
   *
   * Example input from Safari:
   *   2441@wasm-function[2441]
   *       at wrapper (d746f19e-4523-4f36-ba06-d0969acc0b05:22:126009)
   *
   * Example output:
   *   wasm-func[775] (server_response::send)
   */
  decodeStackTrace: (stack, isCompatBuild) => __async(void 0, null, function* () {
    const re = /wasm-function\[(\d+)\]/g;
    const funcIds = [
      ...new Set([...stack.matchAll(re)].map((m) => parseInt(m[1])))
    ];
    if (funcIds.length === 0) return stack;
    const resolved = yield Debug.decodeFuncIds(funcIds, isCompatBuild);
    return resolved.map((r) => {
      if (r.name === "(unknown)") {
        return `    wasm-func[${r.funcId}] (unknown)`;
      }
      return `    wasm-func[${r.funcId}] (${r.name})`;
    }).join("\n");
  })
};

// src/utils.ts
var textDecoder = new TextDecoder();
var URL_PARTS_REGEX = /-(\d{5})-of-(\d{5})\.gguf(?:\?.*)?$/;
var parseShardNumber = (fnameOrUrl) => {
  const matches = fnameOrUrl.match(URL_PARTS_REGEX);
  if (!matches) {
    return {
      baseURL: fnameOrUrl,
      current: 1,
      total: 1
    };
  } else {
    return {
      baseURL: fnameOrUrl.replace(URL_PARTS_REGEX, ""),
      current: parseInt(matches[1]),
      total: parseInt(matches[2])
    };
  }
};
var sortFileByShard = (blobs) => {
  const isFiles = blobs.every((b) => !!b.name);
  if (isFiles && blobs.length > 1) {
    const files = blobs;
    files.sort((a, b) => {
      const infoA = parseShardNumber(a.name);
      const infoB = parseShardNumber(b.name);
      return infoA.current - infoB.current;
    });
  }
};
var isMmproj = (blob) => __async(void 0, null, function* () {
  const META_NAME = "general.architecture";
  const META_VAL = "clip";
  const tmp = blob.slice(0, 128 * 1024);
  const header = yield tmp.arrayBuffer();
  const buf = new Uint8Array(header);
  const nameBytes = new TextEncoder().encode(META_NAME);
  const valBytes = new TextEncoder().encode(META_VAL);
  let offset = -1;
  outer: for (let i = 0; i <= buf.length - nameBytes.length; i++) {
    for (let j = 0; j < nameBytes.length; j++) {
      if (buf[i + j] !== nameBytes[j]) continue outer;
    }
    offset = i;
    break;
  }
  if (offset === -1) return false;
  if (offset + 8 * 4 + 4 > buf.length) return false;
  const view = new DataView(header);
  const valLen = view.getBigUint64(offset + 8 * 3, true);
  if (valLen !== /* @__PURE__ */ BigInt("4")) return false;
  for (let i = 0; i < valBytes.length; i++) {
    if (buf[offset + 8 * 4 + i] !== valBytes[i]) return false;
  }
  return true;
});
var absoluteUrl = (relativePath) => typeof document === "undefined" ? new URL(relativePath, self.location.href).href : new URL(relativePath, document.baseURI).href;
var padDigits = (number, digits) => {
  return Array(Math.max(digits - String(number).length + 1, 0)).join("0") + number;
};
var sumArr = (arr) => arr.reduce((prev, curr) => prev + curr, 0);
var isString = (value) => !!(value == null ? void 0 : value.startsWith);
var MMPROJ_FILE_NAME = "mmproj.gguf";
var prepareBlobs = (blobsInp) => __async(void 0, null, function* () {
  const blobs = [];
  let blobMmproj = null;
  for (const blob of blobsInp) {
    if (yield isMmproj(blob)) {
      blobMmproj = blob;
    } else {
      blobs.push(blob);
    }
  }
  sortFileByShard(blobs);
  const result = blobs.map((blob, i) => ({
    blob,
    name: `model-${padDigits(i + 1, 5)}-of-${padDigits(blobs.length, 5)}.gguf`
  }));
  if (blobMmproj) {
    result.push({
      blob: blobMmproj,
      name: MMPROJ_FILE_NAME
    });
  }
  return {
    llm: result.filter((f) => f.name !== MMPROJ_FILE_NAME),
    mmproj: blobMmproj ? { blob: blobMmproj, name: MMPROJ_FILE_NAME } : null,
    all: result
  };
});
var isSupportMultiThread = () => ((e) => __async(void 0, null, function* () {
  try {
    return "undefined" != typeof MessageChannel && new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)), WebAssembly.validate(e);
  } catch (e2) {
    return false;
  }
}))(
  new Uint8Array([
    0,
    97,
    115,
    109,
    1,
    0,
    0,
    0,
    1,
    4,
    1,
    96,
    0,
    0,
    3,
    2,
    1,
    0,
    5,
    4,
    1,
    3,
    1,
    1,
    10,
    11,
    1,
    9,
    0,
    65,
    0,
    254,
    16,
    2,
    0,
    26,
    11
  ])
);
var isSupportExceptions = () => __async(void 0, null, function* () {
  return WebAssembly.validate(
    new Uint8Array([
      0,
      97,
      115,
      109,
      1,
      0,
      0,
      0,
      1,
      4,
      1,
      96,
      0,
      0,
      3,
      2,
      1,
      0,
      10,
      8,
      1,
      6,
      0,
      6,
      64,
      25,
      11,
      11
    ])
  );
});
var isSupportSIMD = () => __async(void 0, null, function* () {
  return WebAssembly.validate(
    new Uint8Array([
      0,
      97,
      115,
      109,
      1,
      0,
      0,
      0,
      1,
      5,
      1,
      96,
      0,
      1,
      123,
      3,
      2,
      1,
      0,
      10,
      10,
      1,
      8,
      0,
      65,
      0,
      253,
      15,
      253,
      98,
      11
    ])
  );
});
var isSupportJSPI = () => {
  return !!WebAssembly.Suspending;
};
var isSupportWebGPU = () => {
  return !!navigator.gpu;
};
var isSupportMem64 = () => {
  try {
    new WebAssembly.Memory({
      address: "i64",
      initial: /* @__PURE__ */ BigInt("1")
      // 1 page (64 KiB)
    });
    return true;
  } catch (e) {
    return false;
  }
};
var checkEnvironmentCompatible = () => __async(void 0, null, function* () {
  if (!(yield isSupportExceptions())) {
    throw new Error("WebAssembly runtime does not support exception handling");
  }
  if (!(yield isSupportSIMD())) {
    throw new Error("WebAssembly runtime does not support SIMD");
  }
});
var isFirefox = () => {
  return !!navigator.userAgent.match(/Firefox\/([0-9\.]+)(?:\s|$)/);
};
var GGUF_FILE_REGEX = /^.*\.gguf(?:\?.*)?$/;
var isValidGgufFile = (path) => {
  return GGUF_FILE_REGEX.test(path);
};
var isSafariMobile = () => {
  return !!navigator.userAgent.match(/Version\/([0-9\._]+).*Mobile.*Safari.*/);
};
var createWorker = (workerCode) => {
  const workerURL = URL.createObjectURL(
    isString(workerCode) ? new Blob([workerCode], { type: "text/javascript" }) : workerCode
  );
  return new Worker(workerURL, { type: "module" });
};
var cbToAsyncIter = (fn) => (...args) => {
  let values = [];
  let resolve;
  let reject;
  values.push(
    new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    })
  );
  fn(...args, (val, done, err) => {
    if (err) {
      reject(err);
      return;
    }
    resolve([val, done]);
    values.push(
      new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      })
    );
  });
  return function() {
    return __asyncGenerator(this, null, function* () {
      let val;
      for (let i = 0, done = false; !done; i++) {
        [val, done] = yield new __await(values[i]);
        delete values[i];
        if (val !== void 0) yield val;
      }
    });
  }();
};
var canUseAsyncFileRead = (compat) => isSupportJSPI() || compat;
var needCompat = () => !isSupportJSPI() || !isSupportMem64();

// src/workers-code/generated.ts
var LIBLLAMA_VERSION = "b10781-c7bda03";
var LLAMA_CPP_WORKER_CODE = "// Start the main llama.cpp\nlet wllamaMalloc;\nlet wllamaStart;\nlet wllamaAction;\nlet wllamaExit;\nlet wllamaDebug;\n\nlet Module = null;\nlet isCompat = false;\nlet lastStack = '';\nlet isAborted = false;\nlet hasMultithread = false;\n\n//////////////////////////////////////////////////////////////\n// UTILS\n//////////////////////////////////////////////////////////////\n\n// send message back to main thread\nconst msg = (data, transfer) => postMessage(data, transfer);\n\n// Convert CPP log into JS log\nconst cppLogToJSLog = (line) => {\n  const matched = line.match(/@@(DEBUG|INFO|WARN|ERROR)@@(.*)/);\n  return !!matched\n    ? {\n        level: (matched[1] === 'INFO' ? 'debug' : matched[1]).toLowerCase(),\n        text: matched[2],\n      }\n    : { level: 'log', text: line };\n};\n\nconst getHeapU8 = () => {\n  const buffer = Module.wasmMemory.buffer;\n  return new Uint8Array(buffer);\n};\n\nconst toSizeT = (num) => {\n  return isCompat ? Number(num) : BigInt(num);\n};\n\n// Get module config that forwards stdout/err to main thread\nconst getWModuleConfig = (_argMainScriptBlob) => {\n  var pathConfig = RUN_OPTIONS.pathConfig;\n  var pthreadPoolSize = RUN_OPTIONS.nbThread;\n  var argMainScriptBlob = _argMainScriptBlob;\n\n  isCompat = RUN_OPTIONS.compat;\n  hasMultithread = pthreadPoolSize > 1;\n\n  msg({\n    verb: 'console.debug',\n    args: [\n      `Multithread enabled: ${hasMultithread}, pthreadPoolSize: ${pthreadPoolSize}`,\n    ],\n  });\n\n  if (!pathConfig['wllama.wasm']) {\n    throw new Error('\"wllama.wasm\" is missing in pathConfig');\n  }\n  return {\n    noInitialRun: true,\n    print: function (text) {\n      if (arguments.length > 1)\n        text = Array.prototype.slice.call(arguments).join(' ');\n      msg({ verb: 'console.log', args: [text] });\n    },\n    printErr: function (text) {\n      if (arguments.length > 1)\n        text = Array.prototype.slice.call(arguments).join(' ');\n      if (text.startsWith('@@STACK@@')) {\n        lastStack = text.slice('@@STACK@@'.length);\n        return;\n      }\n      const logLine = cppLogToJSLog(text);\n      msg({ verb: 'console.' + logLine.level, args: [logLine.text] });\n    },\n    locateFile: function (filename, basePath) {\n      const p = pathConfig[filename];\n      const truncate = (str) =>\n        str.length > 128 ? `${str.substr(0, 128)}...` : str;\n      if (filename.match(/wllama\\.worker\\.js/)) {\n        msg({\n          verb: 'console.error',\n          args: [\n            '\"wllama.worker.js\" is removed from v2.2.1. Hint: make sure to clear browser\\'s cache.',\n          ],\n        });\n      } else {\n        msg({\n          verb: 'console.debug',\n          args: [`Loading \"${filename}\" from \"${truncate(p)}\"`],\n        });\n        return p;\n      }\n    },\n    mainScriptUrlOrBlob: hasMultithread\n      ? argMainScriptBlob\n      : 'throw new Error(\"Multithreading is not enabled\")',\n    pthreadPoolSize: hasMultithread ? pthreadPoolSize : 0,\n    wasmMemory: hasMultithread ? getWasmMemory() : null,\n    onAbort: function (message) {\n      isAborted = true;\n      msg({ verb: 'signal.abort', args: ['abort', message, lastStack, null] });\n    },\n    onExit: function (code) {\n      isAborted = true;\n      const callstack = new Error().stack.toString();\n      msg({\n        verb: 'signal.abort',\n        args: ['abort', 'exit(' + code + ')', callstack, null],\n      });\n    },\n  };\n};\n\n// Get the memory to be used by wasm. (Only used in multi-thread mode)\n// Because we have a weird OOM issue on iOS, we need to try some values\n// See: https://github.com/emscripten-core/emscripten/issues/19144\n//      https://github.com/godotengine/godot/issues/70621\nconst getWasmMemory = () => {\n  let minBytes = 128 * 1024 * 1024;\n  let maxBytes = 4096 * 1024 * 1024;\n  let stepBytes = 128 * 1024 * 1024;\n  while (maxBytes > minBytes) {\n    try {\n      const wasmMemory = new WebAssembly.Memory({\n        initial: toSizeT(minBytes / 65536),\n        maximum: toSizeT(maxBytes / 65536),\n        shared: true,\n        address: isCompat ? undefined : 'i64',\n      });\n      return wasmMemory;\n    } catch (e) {\n      maxBytes -= stepBytes;\n      continue; // retry\n    }\n  }\n  throw new Error('Cannot allocate WebAssembly.Memory');\n};\n\n//////////////////////////////////////////////////////////////\n// HEAPFS PATCH\n//////////////////////////////////////////////////////////////\n\n/**\n * By default, emscripten uses memfs. The way it works is by\n * allocating new Uint8Array in javascript heap. This is not good\n * because it requires files to be copied to wasm heap each time\n * a file is read.\n *\n * HeapFS is an alternative, which resolves this problem by\n * allocating space for file directly inside wasm heap. This\n * allows us to mmap without doing any copy.\n *\n * For llama.cpp, this is great because we use MAP_SHARED\n *\n * Ref: https://github.com/ngxson/wllama/pull/39\n * Ref: https://github.com/emscripten-core/emscripten/blob/main/src/library_memfs.js\n *\n * Note 29/05/2024 @ngxson\n * Due to ftell() being limited to MAX_LONG, we cannot load files bigger than 2^31 bytes (or 2GB)\n * Ref: https://github.com/emscripten-core/emscripten/blob/main/system/lib/libc/musl/src/stdio/ftell.c\n */\n\nconst fsNameToFile = {}; // map Name => File\nconst fsIdToFile = {}; // map ID => File\nlet currFileId = 0;\n\n// Patch and redirect memfs calls to wllama\nconst patchHeapFS = () => {\n  const m = Module;\n  // save functions\n  m.MEMFS.stream_ops._read = m.MEMFS.stream_ops.read;\n  m.MEMFS.stream_ops._write = m.MEMFS.stream_ops.write;\n  m.MEMFS.stream_ops._llseek = m.MEMFS.stream_ops.llseek;\n  m.MEMFS.stream_ops._allocate = m.MEMFS.stream_ops.allocate;\n  m.MEMFS.stream_ops._mmap = m.MEMFS.stream_ops.mmap;\n  m.MEMFS.stream_ops._msync = m.MEMFS.stream_ops.msync;\n\n  const patchStream = (stream) => {\n    const name = stream.node.name;\n    if (fsNameToFile[name]) {\n      const f = fsNameToFile[name];\n      const ptr = Number(f.ptr);\n      stream.node.contents = getHeapU8().subarray(ptr, ptr + f.size);\n      stream.node.usedBytes = f.size;\n    }\n  };\n\n  // replace \"read\" functions\n  m.MEMFS.stream_ops.read = function (\n    stream,\n    buffer,\n    offset,\n    length,\n    position\n  ) {\n    patchStream(stream);\n    return m.MEMFS.stream_ops._read(stream, buffer, offset, length, position);\n  };\n  m.MEMFS.ops_table.file.stream.read = m.MEMFS.stream_ops.read;\n\n  // replace \"llseek\" functions\n  m.MEMFS.stream_ops.llseek = function (stream, offset, whence) {\n    patchStream(stream);\n    return m.MEMFS.stream_ops._llseek(stream, offset, whence);\n  };\n  m.MEMFS.ops_table.file.stream.llseek = m.MEMFS.stream_ops.llseek;\n\n  // replace \"mmap\" functions\n  m.MEMFS.stream_ops.mmap = function (stream, length, position, prot, flags) {\n    patchStream(stream);\n    const name = stream.node.name;\n    if (fsNameToFile[name]) {\n      const f = fsNameToFile[name];\n      const mmapPtr = f.ptr + toSizeT(position);\n      return {\n        ptr: mmapPtr,\n        allocated: false,\n      };\n    } else {\n      return m.MEMFS.stream_ops._mmap(stream, length, position, prot, flags);\n    }\n  };\n  m.MEMFS.ops_table.file.stream.mmap = m.MEMFS.stream_ops.mmap;\n\n  // mount FS\n  m.FS.mkdir('/models');\n  m.FS.mount(m.MEMFS, { root: '.' }, '/models');\n};\n\n// Allocate a new file in wllama heapfs, returns file ID\nconst heapfsAlloc = (name, size, allocBuffer) => {\n  if (size < 1) {\n    throw new Error('File size must be bigger than 0');\n  }\n  const m = Module;\n  const ptr = toSizeT(allocBuffer ? m.mmapAlloc(size) : 0);\n  const file = {\n    ptr: ptr,\n    size: size,\n    id: currFileId++,\n  };\n  fsIdToFile[file.id] = file;\n  fsNameToFile[name] = file;\n  return file.id;\n};\n\n// Add new file to wllama heapfs, return number of written bytes\nconst heapfsWrite = (id, buffer, offset) => {\n  if (fsIdToFile[id]) {\n    const { ptr, size } = fsIdToFile[id];\n    const afterWriteByte = offset + buffer.byteLength;\n    if (afterWriteByte > size) {\n      throw new Error(\n        `File ID ${id} write out of bound, afterWriteByte = ${afterWriteByte} while size = ${size}`\n      );\n    }\n    getHeapU8().set(buffer, Number(ptr) + offset);\n    return buffer.byteLength;\n  } else {\n    throw new Error(`File ID ${id} not found in heapfs`);\n  }\n};\n\n//////////////////////////////////////////////////////////////\n// ASYNC FILE READ\n//////////////////////////////////////////////////////////////\n\nlet isAwaitReading = false;\nlet pendingReadPromise = null;\nlet pendingReadResolve = null;\nlet pendingReadReject = null;\n\nconst _stripModelsPrefix = (path) => path.replace(/^\\/?models\\//, '');\n\n// Called from EM_ASYNC_JS stub in wllama-fs.h (path is already a JS string)\nconst _wllama_js_file_read = async (path, offset, req_size, out_ptr) => {\n  const name = _stripModelsPrefix(path);\n\n  pendingReadPromise = new Promise((res, rej) => {\n    pendingReadResolve = res;\n    pendingReadReject = rej;\n  });\n  isAwaitReading = true;\n\n  postMessage({ verb: 'fs.read_req', args: [name, offset, req_size] });\n\n  let data;\n  try {\n    data = await pendingReadPromise;\n  } finally {\n    isAwaitReading = false;\n    pendingReadResolve = null;\n    pendingReadReject = null;\n  }\n\n  const bytes = new Uint8Array(data);\n  getHeapU8().set(bytes, out_ptr);\n  return toSizeT(bytes.length);\n};\n\n//////////////////////////////////////////////////////////////\n// MAIN CODE\n//////////////////////////////////////////////////////////////\n\nconst callWrapper = (name, ret, args, isAsync) => {\n  const fn = Module.cwrap(\n    name,\n    ret,\n    args,\n    isAsync ? { async: true } : undefined\n  );\n  return async (action, req) => {\n    // console.log(`Calling ${name} with action:`, action, 'and req:', req);\n    let result;\n    try {\n      if (args.length === 2) {\n        result = isAsync ? await fn(action, req) : fn(action, req);\n      } else {\n        result = fn();\n      }\n    } catch (ex) {\n      console.error(ex);\n      throw ex;\n    }\n    return result;\n  };\n};\n\n// re-entering the wasm while a call is suspended (JSPI / asyncify) corrupts its state, so only one call runs at a time and the rest wait in the queue\nlet wasmCallBusy = false;\nconst wasmCallQueue = [];\n\nconst runWasmCall = async (callbackId, fn) => {\n  if (isAborted) {\n    // the wasm is dead, fail fast instead of calling into it\n    msg({ callbackId, err: 'wllama has crashed, please reload the module' });\n    return;\n  }\n  if (wasmCallBusy) {\n    wasmCallQueue.push({ callbackId, fn });\n    return;\n  }\n  wasmCallBusy = true;\n  try {\n    await fn();\n  } finally {\n    wasmCallBusy = false;\n    if (isAborted) {\n      // do not touch the wasm again after it aborted; the main thread already rejected the queued tasks\n      wasmCallQueue.length = 0;\n    } else {\n      const next = wasmCallQueue.shift();\n      if (next) runWasmCall(next.callbackId, next.fn);\n    }\n  }\n};\n\nconst runAction = async (data) => {\n  const { args, callbackId } = data;\n  const argAction = args[0];\n  const argEncodedMsg = args[1];\n  try {\n    const inputPtr = await wllamaMalloc(toSizeT(argEncodedMsg.byteLength), 0);\n    // copy data to wasm heap\n    const inputBuffer = new Uint8Array(\n      getHeapU8().buffer,\n      Number(inputPtr),\n      argEncodedMsg.byteLength\n    );\n    inputBuffer.set(argEncodedMsg, 0);\n    const outputPtr = await wllamaAction(argAction, inputPtr);\n    // length of output buffer is written at the first 4 bytes of input buffer\n    const outputLen = new Uint32Array(\n      getHeapU8().buffer,\n      Number(inputPtr),\n      1\n    )[0];\n    // copy the output buffer to JS heap\n    const outputBuffer = new Uint8Array(outputLen);\n    const outputSrcView = new Uint8Array(\n      getHeapU8().buffer,\n      Number(outputPtr),\n      outputLen\n    );\n    outputBuffer.set(outputSrcView, 0); // copy it\n    msg({ callbackId, result: outputBuffer }, [outputBuffer.buffer]);\n  } catch (err) {\n    handleError(err);\n  }\n};\n\nfunction handleError(err) {\n  // If WASM already aborted, onAbort already sent signal.abort; skip to avoid\n  // re-reporting the resulting WebAssembly.RuntimeError as a JS exception.\n  if (isAborted) return;\n\n  const message = err ? err.message || String(err) : 'Unknown error';\n  const stack = err ? err.stack || String(err) : '';\n  msg({\n    verb: 'signal.abort',\n    args: ['exception', message, stack, err],\n  });\n}\n\nonmessage = async (e) => {\n  if (!e.data) return;\n  const { verb, args, callbackId } = e.data;\n\n  // fs.read_res arrives while wasm is JSPI-suspended; resolve the pending promise.\n  if (verb === 'fs.read_res') {\n    if (pendingReadResolve) {\n      pendingReadResolve(args[0]);\n    }\n    return;\n  }\n\n  // Guard: while awaiting a file read, reject any other incoming task.\n  if (isAwaitReading) {\n    if (callbackId) {\n      msg({\n        callbackId,\n        err: 'Worker is suspended waiting for file data (JSPI)',\n      });\n    }\n    return;\n  }\n\n  if (!callbackId) {\n    msg({ verb: 'console.error', args: ['callbackId is required', e.data] });\n    return;\n  }\n\n  if (verb === 'module.init') {\n    const argMainScriptBlob = args[0];\n    const argUseAsyncFile = args[1];\n    try {\n      Module = getWModuleConfig(argMainScriptBlob);\n      Module.preRun = () => {\n        if (argUseAsyncFile) {\n          Module.ENV['USE_ASYNC_FILE'] = '1';\n        }\n      };\n      Module.onRuntimeInitialized = () => {\n        // async call once module is ready\n        // init FS\n        patchHeapFS();\n        // init cwrap\n        const pointer = isCompat ? 'number' : 'bigint';\n        // TODO: note sure why emscripten cannot bind if there is only 1 argument\n        wllamaMalloc = callWrapper('wllama_malloc', pointer, [\n          'number',\n          pointer,\n        ]);\n        wllamaStart = callWrapper('wllama_start', 'string', [], true);\n        wllamaAction = callWrapper(\n          'wllama_action',\n          pointer,\n          ['string', pointer],\n          true\n        );\n        wllamaExit = callWrapper('wllama_exit', 'string', []);\n        wllamaDebug = callWrapper('wllama_debug', 'string', []);\n        msg({ callbackId, result: null });\n      };\n      wModuleInit();\n    } catch (err) {\n      handleError(err);\n    }\n    return;\n  }\n\n  if (verb === 'fs.alloc') {\n    const argFilename = args[0];\n    const argSize = args[1];\n    const argAllocBuffer = args[2];\n    try {\n      // create blank file\n      const emptyBuffer = new ArrayBuffer(0);\n      Module['FS_createDataFile'](\n        '/models',\n        argFilename,\n        emptyBuffer,\n        true,\n        true,\n        true\n      );\n      // alloc data on heap\n      const fileId = heapfsAlloc(argFilename, argSize, argAllocBuffer);\n      msg({ callbackId, result: { fileId } });\n    } catch (err) {\n      handleError(err);\n    }\n    return;\n  }\n\n  if (verb === 'fs.write') {\n    const argFileId = args[0];\n    const argBuffer = args[1];\n    const argOffset = args[2];\n    try {\n      const writtenBytes = heapfsWrite(argFileId, argBuffer, argOffset);\n      msg({ callbackId, result: { writtenBytes } });\n    } catch (err) {\n      handleError(err);\n    }\n    return;\n  }\n\n  if (verb === 'wllama.start') {\n    await runWasmCall(callbackId, async () => {\n      try {\n        const result = await wllamaStart();\n        msg({ callbackId, result });\n      } catch (err) {\n        handleError(err);\n      }\n    });\n    return;\n  }\n\n  if (verb === 'wllama.action') {\n    await runWasmCall(callbackId, () => runAction(e.data));\n    return;\n  }\n\n  if (verb === 'wllama.exit') {\n    await runWasmCall(callbackId, async () => {\n      try {\n        const result = await wllamaExit();\n        msg({ callbackId, result });\n      } catch (err) {\n        handleError(err);\n      }\n    });\n    return;\n  }\n\n  if (verb === 'wllama.debug') {\n    await runWasmCall(callbackId, async () => {\n      try {\n        const result = await wllamaDebug();\n        msg({ callbackId, result });\n      } catch (err) {\n        handleError(err);\n      }\n    });\n    return;\n  }\n};\n";
var OPFS_UTILS_WORKER_CODE = "let accessHandle;\nlet abortController = new AbortController();\n\nasync function openFile(filename) {\n  const opfsRoot = await navigator.storage.getDirectory();\n  const cacheDir = await opfsRoot.getDirectoryHandle('cache', { create: true });\n  const fileHandler = await cacheDir.getFileHandle(filename, { create: true });\n  accessHandle = await fileHandler.createSyncAccessHandle();\n  accessHandle.truncate(0); // clear file content\n}\n\nasync function writeFile(buf) {\n  accessHandle.write(buf);\n}\n\nasync function closeFile() {\n  accessHandle.flush();\n  accessHandle.close();\n}\n\nasync function writeTextFile(filename, str) {\n  await openFile(filename);\n  await writeFile(new TextEncoder().encode(str));\n  await closeFile();\n}\n\nconst throttled = (func, delay) => {\n  let lastRun = 0;\n  return (...args) => {\n    const now = Date.now();\n    if (now - lastRun > delay) {\n      lastRun = now;\n      func.apply(null, args);\n    }\n  };\n};\n\nconst assertNonNull = (val) => {\n  if (val === null || val === undefined) {\n    throw new Error('OPFS Worker: Assertion failed');\n  }\n};\n\n// respond to main thread\nconst resOK = () => postMessage({ ok: true });\nconst resProgress = (loaded, total) =>\n  postMessage({ progress: { loaded, total } });\nconst resErr = (err) => postMessage({ err });\n\nonmessage = async (e) => {\n  try {\n    if (!e.data) return;\n\n    /**\n     * @param {Object} e.data\n     *\n     * Fine-control FS actions:\n     * - { action: 'open', filename: 'string' }\n     * - { action: 'write', buf: ArrayBuffer }\n     * - { action: 'close' }\n     *\n     * Simple write API:\n     * - { action: 'write-simple', filename: 'string', buf: ArrayBuffer }\n     *\n     * Download API:\n     * - { action: 'download', url: 'string', filename: 'string', options: Object, metadataFileName: 'string' }\n     * - { action: 'download-abort' }\n     */\n    const {\n      action,\n      filename,\n      buf,\n      url,\n      options,\n      metadataFileName,\n      metadataAdditional,\n    } = e.data;\n\n    if (action === 'open') {\n      assertNonNull(filename);\n      await openFile(filename);\n      return resOK();\n    } else if (action === 'write') {\n      assertNonNull(buf);\n      await writeFile(buf);\n      return resOK();\n    } else if (action === 'close') {\n      await closeFile();\n      return resOK();\n    } else if (action === 'write-simple') {\n      assertNonNull(filename);\n      assertNonNull(buf);\n      await openFile(filename);\n      await writeFile(buf);\n      await closeFile();\n      return resOK();\n    } else if (action === 'download') {\n      assertNonNull(url);\n      assertNonNull(filename);\n      assertNonNull(metadataFileName);\n      assertNonNull(options);\n      assertNonNull(options.aborted);\n      abortController = new AbortController();\n      if (options.aborted) abortController.abort();\n      const response = await fetch(url, {\n        ...options,\n        signal: abortController.signal,\n      });\n      const contentLength = response.headers.get('content-length');\n      const etag = (response.headers.get('etag') || '').replace(\n        /[^A-Za-z0-9]/g,\n        ''\n      );\n      const total = parseInt(contentLength, 10);\n      const reader = response.body.getReader();\n      await openFile(filename);\n      let loaded = 0;\n      const throttledProgress = throttled(resProgress, 100);\n      while (true) {\n        const { done, value } = await reader.read();\n        if (done) break;\n        loaded += value.byteLength;\n        await writeFile(value);\n        throttledProgress(loaded, total);\n      }\n      resProgress(total, total); // 100% done\n      await closeFile();\n      // make sure this is in-sync with CacheEntryMetadata\n      await writeTextFile(\n        metadataFileName,\n        JSON.stringify({\n          originalURL: url,\n          originalSize: total,\n          etag,\n          ...metadataAdditional,\n        })\n      );\n      return resOK();\n    } else if (action === 'download-abort') {\n      if (abortController) {\n        abortController.abort();\n      }\n      return;\n    }\n\n    throw new Error('OPFS Worker: Invalid action', e.data);\n  } catch (err) {\n    return resErr(err);\n  }\n};\n";
var WLLAMA_EMSCRIPTEN_CODE = 'var Module=typeof Module!="undefined"?Module:{};var ENVIRONMENT_IS_WEB=!!globalThis.window;var ENVIRONMENT_IS_WORKER=!!globalThis.WorkerGlobalScope;var ENVIRONMENT_IS_NODE=globalThis.process?.versions?.node&&globalThis.process?.type!="renderer";var ENVIRONMENT_IS_PTHREAD=ENVIRONMENT_IS_WORKER&&self.name?.startsWith("em-pthread");if(ENVIRONMENT_IS_NODE){var worker_threads=require("worker_threads");global.Worker=worker_threads.Worker;ENVIRONMENT_IS_WORKER=!worker_threads.isMainThread;ENVIRONMENT_IS_PTHREAD=ENVIRONMENT_IS_WORKER&&worker_threads["workerData"]=="em-pthread"}var arguments_=[];var thisProgram="./this.program";var quit_=(status,toThrow)=>{throw toThrow};var _scriptName=globalThis.document?.currentScript?.src;if(typeof __filename!="undefined"){_scriptName=__filename}else if(ENVIRONMENT_IS_WORKER){_scriptName=self.location.href}var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var readAsync,readBinary;if(ENVIRONMENT_IS_NODE){var fs=require("fs");scriptDirectory=__dirname+"/";readBinary=filename=>{filename=isFileURI(filename)?new URL(filename):filename;var ret=fs.readFileSync(filename);return ret};readAsync=async(filename,binary=true)=>{filename=isFileURI(filename)?new URL(filename):filename;var ret=fs.readFileSync(filename,binary?undefined:"utf8");return ret};if(process.argv.length>1){thisProgram=process.argv[1].replace(/\\\\/g,"/")}arguments_=process.argv.slice(2);if(typeof module!="undefined"){module["exports"]=Module}quit_=(status,toThrow)=>{process.exitCode=status;throw toThrow}}else if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){try{scriptDirectory=new URL(".",_scriptName).href}catch{}if(!ENVIRONMENT_IS_NODE){if(ENVIRONMENT_IS_WORKER){readBinary=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=async url=>{if(isFileURI(url)){return new Promise((resolve,reject)=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=()=>{if(xhr.status==200||xhr.status==0&&xhr.response){resolve(xhr.response);return}reject(xhr.status)};xhr.onerror=reject;xhr.send(null)})}var response=await fetch(url,{credentials:"same-origin"});if(response.ok){return response.arrayBuffer()}throw new Error(response.status+" : "+response.url)}}}else{}var defaultPrint=console.log.bind(console);var defaultPrintErr=console.error.bind(console);if(ENVIRONMENT_IS_NODE){var utils=require("util");var stringify=a=>typeof a=="object"?utils.inspect(a):a;defaultPrint=(...args)=>fs.writeSync(1,args.map(stringify).join(" ")+"\\n");defaultPrintErr=(...args)=>fs.writeSync(2,args.map(stringify).join(" ")+"\\n")}var out=defaultPrint;var err=defaultPrintErr;var wasmBinary;var wasmModule;var ABORT=false;var EXITSTATUS;function assert(condition,text){if(!condition){abort(text)}}var isFileURI=filename=>filename.startsWith("file://");function growMemViews(){if(wasmMemory.buffer!=HEAP8.buffer){updateMemoryViews()}}if(ENVIRONMENT_IS_NODE&&ENVIRONMENT_IS_PTHREAD){var parentPort=worker_threads["parentPort"];parentPort.on("message",msg=>global.onmessage?.({data:msg}));Object.assign(globalThis,{self:global,postMessage:msg=>parentPort["postMessage"](msg)});process.on("uncaughtException",err=>{postMessage({cmd:"uncaughtException",error:err});process.exit(1)})}var startWorker;if(ENVIRONMENT_IS_PTHREAD){var initializedJS=false;self.onunhandledrejection=e=>{throw e.reason||e};async function handleMessage(e){try{var msgData=e["data"];var cmd=msgData.cmd;if(cmd==="load"){let messageQueue=[];self.onmessage=e=>messageQueue.push(e);startWorker=()=>{postMessage({cmd:"loaded"});for(let msg of messageQueue){handleMessage(msg)}self.onmessage=handleMessage};for(const handler of msgData.handlers){if(!Module[handler]||Module[handler].proxy){Module[handler]=(...args)=>{postMessage({cmd:"callHandler",handler,args})};if(handler=="print")out=Module[handler];if(handler=="printErr")err=Module[handler]}}wasmMemory=msgData.wasmMemory;updateMemoryViews();wasmModule=msgData.wasmModule;createWasm();run()}else if(cmd==="run"){establishStackSpace(msgData.pthread_ptr);__emscripten_thread_init(msgData.pthread_ptr,0,0,1,0,0);PThread.threadInitTLS();__emscripten_thread_mailbox_await(msgData.pthread_ptr);if(!initializedJS){initializedJS=true}try{await invokeEntryPoint(msgData.start_routine,msgData.arg)}catch(ex){if(ex!="unwind"){throw ex}}}else if(msgData.target==="setimmediate"){}else if(cmd==="checkMailbox"){if(initializedJS){checkMailbox()}}else if(cmd){err(`worker: received unknown command ${cmd}`);err(msgData)}}catch(ex){__emscripten_thread_crashed();throw ex}}self.onmessage=handleMessage}var HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;var HEAP64,HEAPU64;var runtimeInitialized=false;function updateMemoryViews(){var b=wasmMemory.buffer;HEAP8=new Int8Array(b);HEAP16=new Int16Array(b);Module["HEAPU8"]=HEAPU8=new Uint8Array(b);HEAPU16=new Uint16Array(b);HEAP32=new Int32Array(b);HEAPU32=new Uint32Array(b);HEAPF32=new Float32Array(b);HEAPF64=new Float64Array(b);HEAP64=new BigInt64Array(b);HEAPU64=new BigUint64Array(b)}function initMemory(){if(ENVIRONMENT_IS_PTHREAD){return}if(Module["wasmMemory"]){wasmMemory=Module["wasmMemory"]}else{var INITIAL_MEMORY=Module["INITIAL_MEMORY"]||134217728;wasmMemory=new WebAssembly.Memory({initial:BigInt(INITIAL_MEMORY/65536),maximum:65536n,shared:true,address:"i64"})}updateMemoryViews()}function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(onPreRuns)}function initRuntime(){runtimeInitialized=true;if(ENVIRONMENT_IS_PTHREAD)return startWorker();if(!Module["noFSInit"]&&!FS.initialized)FS.init();TTY.init();wasmExports["__wasm_call_ctors"]();FS.ignorePermissions=false}function preMain(){}function postRun(){if(ENVIRONMENT_IS_PTHREAD){return}if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(onPostRuns)}function abort(what){Module["onAbort"]?.(what);what="Aborted("+what+")";err(what);ABORT=true;what+=". Build with -sASSERTIONS for more info.";if(runtimeInitialized){___trap()}var e=new WebAssembly.RuntimeError(what);throw e}var wasmBinaryFile;function findWasmBinary(){return locateFile("wllama.wasm")}function getBinarySync(file){if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}throw"both async and sync fetching of the wasm failed"}async function getWasmBinary(binaryFile){if(!wasmBinary){try{var response=await readAsync(binaryFile);return new Uint8Array(response)}catch{}}return getBinarySync(binaryFile)}async function instantiateArrayBuffer(binaryFile,imports){try{var binary=await getWasmBinary(binaryFile);var instance=await WebAssembly.instantiate(binary,imports);return instance}catch(reason){err(`failed to asynchronously prepare wasm: ${reason}`);abort(reason)}}async function instantiateAsync(binary,binaryFile,imports){if(!binary&&!isFileURI(binaryFile)&&!ENVIRONMENT_IS_NODE){try{var response=fetch(binaryFile,{credentials:"same-origin"});var instantiationResult=await WebAssembly.instantiateStreaming(response,imports);return instantiationResult}catch(reason){err(`wasm streaming compile failed: ${reason}`);err("falling back to ArrayBuffer instantiation")}}return instantiateArrayBuffer(binaryFile,imports)}function getWasmImports(){assignWasmImports();if(!wasmImports.__instrumented){wasmImports.__instrumented=true;Asyncify.instrumentWasmImports(wasmImports)}var imports={env:wasmImports,wasi_snapshot_preview1:wasmImports};return imports}async function createWasm(){function receiveInstance(instance,module){wasmExports=instance.exports;wasmExports=Asyncify.instrumentWasmExports(wasmExports);wasmExports=applySignatureConversions(wasmExports);registerTLSInit(wasmExports["_emscripten_tls_init"]);assignWasmExports(wasmExports);wasmModule=module;removeRunDependency("wasm-instantiate");return wasmExports}addRunDependency("wasm-instantiate");function receiveInstantiationResult(result){return receiveInstance(result["instance"],result["module"])}var info=getWasmImports();if(Module["instantiateWasm"]){return new Promise((resolve,reject)=>{Module["instantiateWasm"](info,(inst,mod)=>{resolve(receiveInstance(inst,mod))})})}if(ENVIRONMENT_IS_PTHREAD){var instance=new WebAssembly.Instance(wasmModule,getWasmImports());return receiveInstance(instance,wasmModule)}wasmBinaryFile??=findWasmBinary();var result=await instantiateAsync(wasmBinary,wasmBinaryFile,info);var exports=receiveInstantiationResult(result);return exports}class ExitStatus{name="ExitStatus";constructor(status){this.message=`Program terminated with exit(${status})`;this.status=status}}var terminateWorker=worker=>{worker.terminate();worker.onmessage=e=>{}};var cleanupThread=pthread_ptr=>{var worker=PThread.pthreads[pthread_ptr];PThread.returnWorkerToPool(worker)};var callRuntimeCallbacks=callbacks=>{while(callbacks.length>0){callbacks.shift()(Module)}};var onPreRuns=[];var addOnPreRun=cb=>onPreRuns.push(cb);var runDependencies=0;var dependenciesFulfilled=null;var removeRunDependency=id=>{runDependencies--;Module["monitorRunDependencies"]?.(runDependencies);if(runDependencies==0){if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}};var addRunDependency=id=>{runDependencies++;Module["monitorRunDependencies"]?.(runDependencies)};var spawnThread=threadParams=>{var worker=PThread.getNewWorker();if(!worker){return 6}PThread.runningWorkers.push(worker);PThread.pthreads[threadParams.pthread_ptr]=worker;worker.pthread_ptr=threadParams.pthread_ptr;var msg={cmd:"run",start_routine:threadParams.startRoutine,arg:threadParams.arg,pthread_ptr:threadParams.pthread_ptr};if(ENVIRONMENT_IS_NODE){worker.unref()}worker.postMessage(msg,threadParams.transferList);return 0};var runtimeKeepaliveCounter=0;var keepRuntimeAlive=()=>noExitRuntime||runtimeKeepaliveCounter>0;var stackSave=()=>_emscripten_stack_get_current();var stackRestore=val=>__emscripten_stack_restore(val);var stackAlloc=sz=>__emscripten_stack_alloc(sz);var proxyToMainThread=(funcIndex,emAsmAddr,sync,...callArgs)=>{var serializedNumCallArgs=callArgs.length*2;var sp=stackSave();var args=stackAlloc(serializedNumCallArgs*8);var b=args/8;for(var i=0;i<callArgs.length;i++){var arg=callArgs[i];if(typeof arg=="bigint"){(growMemViews(),HEAP64)[b+2*i]=1n;(growMemViews(),HEAP64)[b+2*i+1]=arg}else{(growMemViews(),HEAP64)[b+2*i]=0n;(growMemViews(),HEAPF64)[b+2*i+1]=arg}}var rtn=__emscripten_run_js_on_main_thread(funcIndex,emAsmAddr,serializedNumCallArgs,args,sync);stackRestore(sp);return rtn};function _proc_exit(code){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(0,0,1,code);EXITSTATUS=code;if(!keepRuntimeAlive()){PThread.terminateAllThreads();Module["onExit"]?.(code);ABORT=true}quit_(code,new ExitStatus(code))}function exitOnMainThread(returnCode){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(1,0,0,returnCode);_exit(returnCode)}var exitJS=(status,implicit)=>{EXITSTATUS=status;if(ENVIRONMENT_IS_PTHREAD){exitOnMainThread(status);throw"unwind"}_proc_exit(status)};var _exit=exitJS;var PThread={unusedWorkers:[],runningWorkers:[],tlsInitFunctions:[],pthreads:{},init(){if(!ENVIRONMENT_IS_PTHREAD){PThread.initMainThread()}},initMainThread(){var pthreadPoolSize=Module["pthreadPoolSize"];while(pthreadPoolSize--){PThread.allocateUnusedWorker()}addOnPreRun(async()=>{var pthreadPoolReady=PThread.loadWasmModuleToAllWorkers();addRunDependency("loading-workers");await pthreadPoolReady;removeRunDependency("loading-workers")})},terminateAllThreads:()=>{for(var worker of PThread.runningWorkers){terminateWorker(worker)}for(var worker of PThread.unusedWorkers){terminateWorker(worker)}PThread.unusedWorkers=[];PThread.runningWorkers=[];PThread.pthreads={}},returnWorkerToPool:worker=>{var pthread_ptr=worker.pthread_ptr;delete PThread.pthreads[pthread_ptr];PThread.unusedWorkers.push(worker);PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(worker),1);worker.pthread_ptr=0;__emscripten_thread_free_data(pthread_ptr)},threadInitTLS(){PThread.tlsInitFunctions.forEach(f=>f())},loadWasmModuleToWorker:worker=>new Promise(onFinishedLoading=>{worker.onmessage=e=>{var d=e["data"];var cmd=d.cmd;if(d.targetThread&&d.targetThread!=_pthread_self()){var targetWorker=PThread.pthreads[d.targetThread];if(targetWorker){targetWorker.postMessage(d,d.transferList)}else{err(`Internal error! Worker sent a message "${cmd}" to target pthread ${d.targetThread}, but that thread no longer exists!`)}return}if(cmd==="checkMailbox"){checkMailbox()}else if(cmd==="spawnThread"){spawnThread(d)}else if(cmd==="cleanupThread"){callUserCallback(()=>cleanupThread(d.thread))}else if(cmd==="loaded"){worker.loaded=true;if(ENVIRONMENT_IS_NODE&&!worker.pthread_ptr){worker.unref()}onFinishedLoading(worker)}else if(d.target==="setimmediate"){worker.postMessage(d)}else if(cmd==="uncaughtException"){worker.onerror(d.error)}else if(cmd==="callHandler"){Module[d.handler](...d.args)}else if(cmd){err(`worker sent an unknown command ${cmd}`)}};worker.onerror=e=>{var message="worker sent an error!";err(`${message} ${e.filename}:${e.lineno}: ${e.message}`);throw e};if(ENVIRONMENT_IS_NODE){worker.on("message",data=>worker.onmessage({data}));worker.on("error",e=>worker.onerror(e))}var handlers=[];var knownHandlers=["onExit","onAbort","print","printErr"];for(var handler of knownHandlers){if(Module.propertyIsEnumerable(handler)){handlers.push(handler)}}worker.postMessage({cmd:"load",handlers,wasmMemory,wasmModule})}),async loadWasmModuleToAllWorkers(){if(ENVIRONMENT_IS_PTHREAD){return}let pthreadPoolReady=Promise.all(PThread.unusedWorkers.map(PThread.loadWasmModuleToWorker));return pthreadPoolReady},allocateUnusedWorker(){var worker;var pthreadMainJs=_scriptName;if(Module["mainScriptUrlOrBlob"]){pthreadMainJs=Module["mainScriptUrlOrBlob"];if(typeof pthreadMainJs!="string"){pthreadMainJs=URL.createObjectURL(pthreadMainJs)}}worker=new Worker(pthreadMainJs,{workerData:"em-pthread",name:"em-pthread"});PThread.unusedWorkers.push(worker)},getNewWorker(){if(PThread.unusedWorkers.length==0){PThread.allocateUnusedWorker();PThread.loadWasmModuleToWorker(PThread.unusedWorkers[0])}return PThread.unusedWorkers.pop()}};var onPostRuns=[];var addOnPostRun=cb=>onPostRuns.push(cb);function establishStackSpace(pthread_ptr){var stackHigh=Number((growMemViews(),HEAPU64)[(pthread_ptr+88)/8]);var stackSize=Number((growMemViews(),HEAPU64)[(pthread_ptr+96)/8]);var stackLow=stackHigh-stackSize;_emscripten_stack_set_limits(stackHigh,stackLow);stackRestore(stackHigh)}var wasmTableMirror=[];var getWasmTableEntry=funcPtr=>{funcPtr=Number(funcPtr);var func=wasmTableMirror[funcPtr];if(!func){wasmTableMirror[funcPtr]=func=wasmTable.get(BigInt(funcPtr));if(Asyncify.isAsyncExport(func)){wasmTableMirror[funcPtr]=func=Asyncify.makeAsyncFunction(func)}}return func};var invokeEntryPoint=async(ptr,arg)=>{runtimeKeepaliveCounter=0;noExitRuntime=0;var result=(a1=>WebAssembly.promising(getWasmTableEntry(ptr)).call(null,BigInt(a1)))(arg);function finish(result){if(keepRuntimeAlive()){EXITSTATUS=result;return}__emscripten_thread_exit(result)}result=await result;finish(result)};invokeEntryPoint.isAsync=true;var noExitRuntime=true;var registerTLSInit=tlsInitFunc=>PThread.tlsInitFunctions.push(tlsInitFunc);var wasmMemory;function pthreadCreateProxied(pthread_ptr,attr,startRoutine,arg){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(2,0,1,pthread_ptr,attr,startRoutine,arg);return ___pthread_create_js(pthread_ptr,attr,startRoutine,arg)}var _emscripten_has_threading_support=()=>!!globalThis.SharedArrayBuffer;var INT53_MAX=9007199254740992;var INT53_MIN=-9007199254740992;var bigintToI53Checked=num=>num<INT53_MIN||num>INT53_MAX?NaN:Number(num);function ___pthread_create_js(pthread_ptr,attr,startRoutine,arg){pthread_ptr=bigintToI53Checked(pthread_ptr);attr=bigintToI53Checked(attr);startRoutine=bigintToI53Checked(startRoutine);arg=bigintToI53Checked(arg);if(!_emscripten_has_threading_support()){return 6}var transferList=[];var error=0;if(ENVIRONMENT_IS_PTHREAD&&(transferList.length===0||error)){return pthreadCreateProxied(pthread_ptr,attr,startRoutine,arg)}if(error)return error;var threadParams={startRoutine,pthread_ptr,arg,transferList};if(ENVIRONMENT_IS_PTHREAD){threadParams.cmd="spawnThread";postMessage(threadParams,transferList);return 0}return spawnThread(threadParams)}var syscallGetVarargP=()=>{var ret=Number((growMemViews(),HEAPU64)[SYSCALLS.varargs/8]);SYSCALLS.varargs+=8;return ret};var syscallGetVarargI=()=>{var ret=(growMemViews(),HEAP32)[+SYSCALLS.varargs/4];SYSCALLS.varargs+=4;return ret};var PATH={isAbs:path=>path.charAt(0)==="/",splitPath:filename=>{var splitPathRe=/^(\\/?|)([\\s\\S]*?)((?:\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))(?:[\\/]*)$/;return splitPathRe.exec(filename).slice(1)},normalizeArray:(parts,allowAboveRoot)=>{var up=0;for(var i=parts.length-1;i>=0;i--){var last=parts[i];if(last==="."){parts.splice(i,1)}else if(last===".."){parts.splice(i,1);up++}else if(up){parts.splice(i,1);up--}}if(allowAboveRoot){for(;up;up--){parts.unshift("..")}}return parts},normalize:path=>{var isAbsolute=PATH.isAbs(path),trailingSlash=path.slice(-1)==="/";path=PATH.normalizeArray(path.split("/").filter(p=>!!p),!isAbsolute).join("/");if(!path&&!isAbsolute){path="."}if(path&&trailingSlash){path+="/"}return(isAbsolute?"/":"")+path},dirname:path=>{var result=PATH.splitPath(path),root=result[0],dir=result[1];if(!root&&!dir){return"."}if(dir){dir=dir.slice(0,-1)}return root+dir},basename:path=>path&&path.match(/([^\\/]+|\\/)\\/*$/)[1],join:(...paths)=>PATH.normalize(paths.join("/")),join2:(l,r)=>PATH.normalize(l+"/"+r)};var initRandomFill=()=>view=>view.set(crypto.getRandomValues(new Uint8Array(view.byteLength)));var randomFill=view=>{(randomFill=initRandomFill())(view)};var PATH_FS={resolve:(...args)=>{var resolvedPath="",resolvedAbsolute=false;for(var i=args.length-1;i>=-1&&!resolvedAbsolute;i--){var path=i>=0?args[i]:FS.cwd();if(typeof path!="string"){throw new TypeError("Arguments to path.resolve must be strings")}else if(!path){return""}resolvedPath=path+"/"+resolvedPath;resolvedAbsolute=PATH.isAbs(path)}resolvedPath=PATH.normalizeArray(resolvedPath.split("/").filter(p=>!!p),!resolvedAbsolute).join("/");return(resolvedAbsolute?"/":"")+resolvedPath||"."},relative:(from,to)=>{from=PATH_FS.resolve(from).slice(1);to=PATH_FS.resolve(to).slice(1);function trim(arr){var start=0;for(;start<arr.length;start++){if(arr[start]!=="")break}var end=arr.length-1;for(;end>=0;end--){if(arr[end]!=="")break}if(start>end)return[];return arr.slice(start,end-start+1)}var fromParts=trim(from.split("/"));var toParts=trim(to.split("/"));var length=Math.min(fromParts.length,toParts.length);var samePartsLength=length;for(var i=0;i<length;i++){if(fromParts[i]!==toParts[i]){samePartsLength=i;break}}var outputParts=[];for(var i=samePartsLength;i<fromParts.length;i++){outputParts.push("..")}outputParts=outputParts.concat(toParts.slice(samePartsLength));return outputParts.join("/")}};var UTF8Decoder=globalThis.TextDecoder&&new TextDecoder;var findStringEnd=(heapOrArray,idx,maxBytesToRead,ignoreNul)=>{var maxIdx=idx+maxBytesToRead;if(ignoreNul)return maxIdx;while(heapOrArray[idx]&&!(idx>=maxIdx))++idx;return idx};var UTF8ArrayToString=(heapOrArray,idx=0,maxBytesToRead,ignoreNul)=>{var endPtr=findStringEnd(heapOrArray,idx,maxBytesToRead,ignoreNul);if(endPtr-idx>16&&heapOrArray.buffer&&UTF8Decoder){return UTF8Decoder.decode(heapOrArray.buffer instanceof ArrayBuffer?heapOrArray.subarray(idx,endPtr):heapOrArray.slice(idx,endPtr))}var str="";while(idx<endPtr){var u0=heapOrArray[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=heapOrArray[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=heapOrArray[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u0=(u0&7)<<18|u1<<12|u2<<6|heapOrArray[idx++]&63}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}return str};var FS_stdin_getChar_buffer=[];var lengthBytesUTF8=str=>{var len=0;for(var i=0;i<str.length;++i){var c=str.charCodeAt(i);if(c<=127){len++}else if(c<=2047){len+=2}else if(c>=55296&&c<=57343){len+=4;++i}else{len+=3}}return len};var stringToUTF8Array=(str,heap,outIdx,maxBytesToWrite)=>{if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.codePointAt(i);if(u<=127){if(outIdx>=endIdx)break;heap[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;heap[outIdx++]=192|u>>6;heap[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;heap[outIdx++]=224|u>>12;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}else{if(outIdx+3>=endIdx)break;heap[outIdx++]=240|u>>18;heap[outIdx++]=128|u>>12&63;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63;i++}}heap[outIdx]=0;return outIdx-startIdx};var intArrayFromString=(stringy,dontAddNull,length)=>{var len=length>0?length:lengthBytesUTF8(stringy)+1;var u8array=new Array(len);var numBytesWritten=stringToUTF8Array(stringy,u8array,0,u8array.length);if(dontAddNull)u8array.length=numBytesWritten;return u8array};var FS_stdin_getChar=()=>{if(!FS_stdin_getChar_buffer.length){var result=null;if(ENVIRONMENT_IS_NODE){var BUFSIZE=256;var buf=Buffer.alloc(BUFSIZE);var bytesRead=0;var fd=process.stdin.fd;try{bytesRead=fs.readSync(fd,buf,0,BUFSIZE)}catch(e){if(e.toString().includes("EOF"))bytesRead=0;else throw e}if(bytesRead>0){result=buf.slice(0,bytesRead).toString("utf-8")}}else if(globalThis.window?.prompt){result=window.prompt("Input: ");if(result!==null){result+="\\n"}}else{}if(!result){return null}FS_stdin_getChar_buffer=intArrayFromString(result,true)}return FS_stdin_getChar_buffer.shift()};var TTY={ttys:[],init(){},shutdown(){},register(dev,ops){TTY.ttys[dev]={input:[],output:[],ops};FS.registerDevice(dev,TTY.stream_ops)},stream_ops:{open(stream){var tty=TTY.ttys[stream.node.rdev];if(!tty){throw new FS.ErrnoError(43)}stream.tty=tty;stream.seekable=false},close(stream){stream.tty.ops.fsync(stream.tty)},fsync(stream){stream.tty.ops.fsync(stream.tty)},read(stream,buffer,offset,length,pos){if(!stream.tty||!stream.tty.ops.get_char){throw new FS.ErrnoError(60)}var bytesRead=0;for(var i=0;i<length;i++){var result;try{result=stream.tty.ops.get_char(stream.tty)}catch(e){throw new FS.ErrnoError(29)}if(result===undefined&&bytesRead===0){throw new FS.ErrnoError(6)}if(result===null||result===undefined)break;bytesRead++;buffer[offset+i]=result}if(bytesRead){stream.node.atime=Date.now()}return bytesRead},write(stream,buffer,offset,length,pos){if(!stream.tty||!stream.tty.ops.put_char){throw new FS.ErrnoError(60)}try{for(var i=0;i<length;i++){stream.tty.ops.put_char(stream.tty,buffer[offset+i])}}catch(e){throw new FS.ErrnoError(29)}if(length){stream.node.mtime=stream.node.ctime=Date.now()}return i}},default_tty_ops:{get_char(tty){return FS_stdin_getChar()},put_char(tty,val){if(val===null||val===10){out(UTF8ArrayToString(tty.output));tty.output=[]}else{if(val!=0)tty.output.push(val)}},fsync(tty){if(tty.output?.length>0){out(UTF8ArrayToString(tty.output));tty.output=[]}},ioctl_tcgets(tty){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(tty,optional_actions,data){return 0},ioctl_tiocgwinsz(tty){return[24,80]}},default_tty1_ops:{put_char(tty,val){if(val===null||val===10){err(UTF8ArrayToString(tty.output));tty.output=[]}else{if(val!=0)tty.output.push(val)}},fsync(tty){if(tty.output?.length>0){err(UTF8ArrayToString(tty.output));tty.output=[]}}}};var zeroMemory=(ptr,size)=>(growMemViews(),HEAPU8).fill(0,ptr,ptr+size);var alignMemory=(size,alignment)=>Math.ceil(size/alignment)*alignment;var mmapAlloc=size=>{size=alignMemory(size,65536);var ptr=_emscripten_builtin_memalign(65536,size);if(ptr)zeroMemory(ptr,size);return ptr};var MEMFS={ops_table:null,mount(mount){return MEMFS.createNode(null,"/",16895,0)},createNode(parent,name,mode,dev){if(FS.isBlkdev(mode)||FS.isFIFO(mode)){throw new FS.ErrnoError(63)}MEMFS.ops_table||={dir:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr,lookup:MEMFS.node_ops.lookup,mknod:MEMFS.node_ops.mknod,rename:MEMFS.node_ops.rename,unlink:MEMFS.node_ops.unlink,rmdir:MEMFS.node_ops.rmdir,readdir:MEMFS.node_ops.readdir,symlink:MEMFS.node_ops.symlink},stream:{llseek:MEMFS.stream_ops.llseek}},file:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr},stream:{llseek:MEMFS.stream_ops.llseek,read:MEMFS.stream_ops.read,write:MEMFS.stream_ops.write,mmap:MEMFS.stream_ops.mmap,msync:MEMFS.stream_ops.msync}},link:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr,readlink:MEMFS.node_ops.readlink},stream:{}},chrdev:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr},stream:FS.chrdev_stream_ops}};var node=FS.createNode(parent,name,mode,dev);if(FS.isDir(node.mode)){node.node_ops=MEMFS.ops_table.dir.node;node.stream_ops=MEMFS.ops_table.dir.stream;node.contents={}}else if(FS.isFile(node.mode)){node.node_ops=MEMFS.ops_table.file.node;node.stream_ops=MEMFS.ops_table.file.stream;node.usedBytes=0;node.contents=null}else if(FS.isLink(node.mode)){node.node_ops=MEMFS.ops_table.link.node;node.stream_ops=MEMFS.ops_table.link.stream}else if(FS.isChrdev(node.mode)){node.node_ops=MEMFS.ops_table.chrdev.node;node.stream_ops=MEMFS.ops_table.chrdev.stream}node.atime=node.mtime=node.ctime=Date.now();if(parent){parent.contents[name]=node;parent.atime=parent.mtime=parent.ctime=node.atime}return node},getFileDataAsTypedArray(node){if(!node.contents)return new Uint8Array(0);if(node.contents.subarray)return node.contents.subarray(0,node.usedBytes);return new Uint8Array(node.contents)},expandFileStorage(node,newCapacity){var prevCapacity=node.contents?node.contents.length:0;if(prevCapacity>=newCapacity)return;var CAPACITY_DOUBLING_MAX=1024*1024;newCapacity=Math.max(newCapacity,prevCapacity*(prevCapacity<CAPACITY_DOUBLING_MAX?2:1.125)>>>0);if(prevCapacity!=0)newCapacity=Math.max(newCapacity,256);var oldContents=node.contents;node.contents=new Uint8Array(newCapacity);if(node.usedBytes>0)node.contents.set(oldContents.subarray(0,node.usedBytes),0)},resizeFileStorage(node,newSize){if(node.usedBytes==newSize)return;if(newSize==0){node.contents=null;node.usedBytes=0}else{var oldContents=node.contents;node.contents=new Uint8Array(newSize);if(oldContents){node.contents.set(oldContents.subarray(0,Math.min(newSize,node.usedBytes)))}node.usedBytes=newSize}},node_ops:{getattr(node){var attr={};attr.dev=FS.isChrdev(node.mode)?node.id:1;attr.ino=node.id;attr.mode=node.mode;attr.nlink=1;attr.uid=0;attr.gid=0;attr.rdev=node.rdev;if(FS.isDir(node.mode)){attr.size=4096}else if(FS.isFile(node.mode)){attr.size=node.usedBytes}else if(FS.isLink(node.mode)){attr.size=node.link.length}else{attr.size=0}attr.atime=new Date(node.atime);attr.mtime=new Date(node.mtime);attr.ctime=new Date(node.ctime);attr.blksize=4096;attr.blocks=Math.ceil(attr.size/attr.blksize);return attr},setattr(node,attr){for(const key of["mode","atime","mtime","ctime"]){if(attr[key]!=null){node[key]=attr[key]}}if(attr.size!==undefined){MEMFS.resizeFileStorage(node,attr.size)}},lookup(parent,name){if(!MEMFS.doesNotExistError){MEMFS.doesNotExistError=new FS.ErrnoError(44);MEMFS.doesNotExistError.stack="<generic error, no stack>"}throw MEMFS.doesNotExistError},mknod(parent,name,mode,dev){return MEMFS.createNode(parent,name,mode,dev)},rename(old_node,new_dir,new_name){var new_node;try{new_node=FS.lookupNode(new_dir,new_name)}catch(e){}if(new_node){if(FS.isDir(old_node.mode)){for(var i in new_node.contents){throw new FS.ErrnoError(55)}}FS.hashRemoveNode(new_node)}delete old_node.parent.contents[old_node.name];new_dir.contents[new_name]=old_node;old_node.name=new_name;new_dir.ctime=new_dir.mtime=old_node.parent.ctime=old_node.parent.mtime=Date.now()},unlink(parent,name){delete parent.contents[name];parent.ctime=parent.mtime=Date.now()},rmdir(parent,name){var node=FS.lookupNode(parent,name);for(var i in node.contents){throw new FS.ErrnoError(55)}delete parent.contents[name];parent.ctime=parent.mtime=Date.now()},readdir(node){return[".","..",...Object.keys(node.contents)]},symlink(parent,newname,oldpath){var node=MEMFS.createNode(parent,newname,511|40960,0);node.link=oldpath;return node},readlink(node){if(!FS.isLink(node.mode)){throw new FS.ErrnoError(28)}return node.link}},stream_ops:{read(stream,buffer,offset,length,position){var contents=stream.node.contents;if(position>=stream.node.usedBytes)return 0;var size=Math.min(stream.node.usedBytes-position,length);if(size>8&&contents.subarray){buffer.set(contents.subarray(position,position+size),offset)}else{for(var i=0;i<size;i++)buffer[offset+i]=contents[position+i]}return size},write(stream,buffer,offset,length,position,canOwn){if(buffer.buffer===(growMemViews(),HEAP8).buffer){canOwn=false}if(!length)return 0;var node=stream.node;node.mtime=node.ctime=Date.now();if(buffer.subarray&&(!node.contents||node.contents.subarray)){if(canOwn){node.contents=buffer.subarray(offset,offset+length);node.usedBytes=length;return length}else if(node.usedBytes===0&&position===0){node.contents=buffer.slice(offset,offset+length);node.usedBytes=length;return length}else if(position+length<=node.usedBytes){node.contents.set(buffer.subarray(offset,offset+length),position);return length}}MEMFS.expandFileStorage(node,position+length);if(node.contents.subarray&&buffer.subarray){node.contents.set(buffer.subarray(offset,offset+length),position)}else{for(var i=0;i<length;i++){node.contents[position+i]=buffer[offset+i]}}node.usedBytes=Math.max(node.usedBytes,position+length);return length},llseek(stream,offset,whence){var position=offset;if(whence===1){position+=stream.position}else if(whence===2){if(FS.isFile(stream.node.mode)){position+=stream.node.usedBytes}}if(position<0){throw new FS.ErrnoError(28)}return position},mmap(stream,length,position,prot,flags){if(!FS.isFile(stream.node.mode)){throw new FS.ErrnoError(43)}var ptr;var allocated;var contents=stream.node.contents;if(!(flags&2)&&contents&&contents.buffer===(growMemViews(),HEAP8).buffer){allocated=false;ptr=contents.byteOffset}else{allocated=true;ptr=mmapAlloc(length);if(!ptr){throw new FS.ErrnoError(48)}if(contents){if(position>0||position+length<contents.length){if(contents.subarray){contents=contents.subarray(position,position+length)}else{contents=Array.prototype.slice.call(contents,position,position+length)}}(growMemViews(),HEAP8).set(contents,ptr)}}return{ptr,allocated}},msync(stream,buffer,offset,length,mmapFlags){MEMFS.stream_ops.write(stream,buffer,0,length,offset,false);return 0}}};var FS_modeStringToFlags=str=>{var flagModes={r:0,"r+":2,w:512|64|1,"w+":512|64|2,a:1024|64|1,"a+":1024|64|2};var flags=flagModes[str];if(typeof flags=="undefined"){throw new Error(`Unknown file open mode: ${str}`)}return flags};var FS_getMode=(canRead,canWrite)=>{var mode=0;if(canRead)mode|=292|73;if(canWrite)mode|=146;return mode};var asyncLoad=async url=>{var arrayBuffer=await readAsync(url);return new Uint8Array(arrayBuffer)};var FS_createDataFile=(...args)=>FS.createDataFile(...args);var getUniqueRunDependency=id=>id;var preloadPlugins=[];var FS_handledByPreloadPlugin=async(byteArray,fullname)=>{if(typeof Browser!="undefined")Browser.init();for(var plugin of preloadPlugins){if(plugin["canHandle"](fullname)){return plugin["handle"](byteArray,fullname)}}return byteArray};var FS_preloadFile=async(parent,name,url,canRead,canWrite,dontCreateFile,canOwn,preFinish)=>{var fullname=name?PATH_FS.resolve(PATH.join2(parent,name)):parent;var dep=getUniqueRunDependency(`cp ${fullname}`);addRunDependency(dep);try{var byteArray=url;if(typeof url=="string"){byteArray=await asyncLoad(url)}byteArray=await FS_handledByPreloadPlugin(byteArray,fullname);preFinish?.();if(!dontCreateFile){FS_createDataFile(parent,name,byteArray,canRead,canWrite,canOwn)}}finally{removeRunDependency(dep)}};var FS_createPreloadedFile=(parent,name,url,canRead,canWrite,onload,onerror,dontCreateFile,canOwn,preFinish)=>{FS_preloadFile(parent,name,url,canRead,canWrite,dontCreateFile,canOwn,preFinish).then(onload).catch(onerror)};var FS={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class{name="ErrnoError";constructor(errno){this.errno=errno}},FSStream:class{shared={};get object(){return this.node}set object(val){this.node=val}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(val){this.shared.flags=val}get position(){return this.shared.position}set position(val){this.shared.position=val}},FSNode:class{node_ops={};stream_ops={};readMode=292|73;writeMode=146;mounted=null;constructor(parent,name,mode,rdev){if(!parent){parent=this}this.parent=parent;this.mount=parent.mount;this.id=FS.nextInode++;this.name=name;this.mode=mode;this.rdev=rdev;this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(val){val?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(val){val?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return FS.isDir(this.mode)}get isDevice(){return FS.isChrdev(this.mode)}},lookupPath(path,opts={}){if(!path){throw new FS.ErrnoError(44)}opts.follow_mount??=true;if(!PATH.isAbs(path)){path=FS.cwd()+"/"+path}linkloop:for(var nlinks=0;nlinks<40;nlinks++){var parts=path.split("/").filter(p=>!!p);var current=FS.root;var current_path="/";for(var i=0;i<parts.length;i++){var islast=i===parts.length-1;if(islast&&opts.parent){break}if(parts[i]==="."){continue}if(parts[i]===".."){current_path=PATH.dirname(current_path);if(FS.isRoot(current)){path=current_path+"/"+parts.slice(i+1).join("/");nlinks--;continue linkloop}else{current=current.parent}continue}current_path=PATH.join2(current_path,parts[i]);try{current=FS.lookupNode(current,parts[i])}catch(e){if(e?.errno===44&&islast&&opts.noent_okay){return{path:current_path}}throw e}if(FS.isMountpoint(current)&&(!islast||opts.follow_mount)){current=current.mounted.root}if(FS.isLink(current.mode)&&(!islast||opts.follow)){if(!current.node_ops.readlink){throw new FS.ErrnoError(52)}var link=current.node_ops.readlink(current);if(!PATH.isAbs(link)){link=PATH.dirname(current_path)+"/"+link}path=link+"/"+parts.slice(i+1).join("/");continue linkloop}}return{path:current_path,node:current}}throw new FS.ErrnoError(32)},getPath(node){var path;while(true){if(FS.isRoot(node)){var mount=node.mount.mountpoint;if(!path)return mount;return mount[mount.length-1]!=="/"?`${mount}/${path}`:mount+path}path=path?`${node.name}/${path}`:node.name;node=node.parent}},hashName(parentid,name){var hash=0;for(var i=0;i<name.length;i++){hash=(hash<<5)-hash+name.charCodeAt(i)|0}return(parentid+hash>>>0)%FS.nameTable.length},hashAddNode(node){var hash=FS.hashName(node.parent.id,node.name);node.name_next=FS.nameTable[hash];FS.nameTable[hash]=node},hashRemoveNode(node){var hash=FS.hashName(node.parent.id,node.name);if(FS.nameTable[hash]===node){FS.nameTable[hash]=node.name_next}else{var current=FS.nameTable[hash];while(current){if(current.name_next===node){current.name_next=node.name_next;break}current=current.name_next}}},lookupNode(parent,name){var errCode=FS.mayLookup(parent);if(errCode){throw new FS.ErrnoError(errCode)}var hash=FS.hashName(parent.id,name);for(var node=FS.nameTable[hash];node;node=node.name_next){var nodeName=node.name;if(node.parent.id===parent.id&&nodeName===name){return node}}return FS.lookup(parent,name)},createNode(parent,name,mode,rdev){var node=new FS.FSNode(parent,name,mode,rdev);FS.hashAddNode(node);return node},destroyNode(node){FS.hashRemoveNode(node)},isRoot(node){return node===node.parent},isMountpoint(node){return!!node.mounted},isFile(mode){return(mode&61440)===32768},isDir(mode){return(mode&61440)===16384},isLink(mode){return(mode&61440)===40960},isChrdev(mode){return(mode&61440)===8192},isBlkdev(mode){return(mode&61440)===24576},isFIFO(mode){return(mode&61440)===4096},isSocket(mode){return(mode&49152)===49152},flagsToPermissionString(flag){var perms=["r","w","rw"][flag&3];if(flag&512){perms+="w"}return perms},nodePermissions(node,perms){if(FS.ignorePermissions){return 0}if(perms.includes("r")&&!(node.mode&292)){return 2}else if(perms.includes("w")&&!(node.mode&146)){return 2}else if(perms.includes("x")&&!(node.mode&73)){return 2}return 0},mayLookup(dir){if(!FS.isDir(dir.mode))return 54;var errCode=FS.nodePermissions(dir,"x");if(errCode)return errCode;if(!dir.node_ops.lookup)return 2;return 0},mayCreate(dir,name){if(!FS.isDir(dir.mode)){return 54}try{var node=FS.lookupNode(dir,name);return 20}catch(e){}return FS.nodePermissions(dir,"wx")},mayDelete(dir,name,isdir){var node;try{node=FS.lookupNode(dir,name)}catch(e){return e.errno}var errCode=FS.nodePermissions(dir,"wx");if(errCode){return errCode}if(isdir){if(!FS.isDir(node.mode)){return 54}if(FS.isRoot(node)||FS.getPath(node)===FS.cwd()){return 10}}else{if(FS.isDir(node.mode)){return 31}}return 0},mayOpen(node,flags){if(!node){return 44}if(FS.isLink(node.mode)){return 32}else if(FS.isDir(node.mode)){if(FS.flagsToPermissionString(flags)!=="r"||flags&(512|64)){return 31}}return FS.nodePermissions(node,FS.flagsToPermissionString(flags))},checkOpExists(op,err){if(!op){throw new FS.ErrnoError(err)}return op},MAX_OPEN_FDS:4096,nextfd(){for(var fd=0;fd<=FS.MAX_OPEN_FDS;fd++){if(!FS.streams[fd]){return fd}}throw new FS.ErrnoError(33)},getStreamChecked(fd){var stream=FS.getStream(fd);if(!stream){throw new FS.ErrnoError(8)}return stream},getStream:fd=>FS.streams[fd],createStream(stream,fd=-1){stream=Object.assign(new FS.FSStream,stream);if(fd==-1){fd=FS.nextfd()}stream.fd=fd;FS.streams[fd]=stream;return stream},closeStream(fd){FS.streams[fd]=null},dupStream(origStream,fd=-1){var stream=FS.createStream(origStream,fd);stream.stream_ops?.dup?.(stream);return stream},doSetAttr(stream,node,attr){var setattr=stream?.stream_ops.setattr;var arg=setattr?stream:node;setattr??=node.node_ops.setattr;FS.checkOpExists(setattr,63);setattr(arg,attr)},chrdev_stream_ops:{open(stream){var device=FS.getDevice(stream.node.rdev);stream.stream_ops=device.stream_ops;stream.stream_ops.open?.(stream)},llseek(){throw new FS.ErrnoError(70)}},major:dev=>dev>>8,minor:dev=>dev&255,makedev:(ma,mi)=>ma<<8|mi,registerDevice(dev,ops){FS.devices[dev]={stream_ops:ops}},getDevice:dev=>FS.devices[dev],getMounts(mount){var mounts=[];var check=[mount];while(check.length){var m=check.pop();mounts.push(m);check.push(...m.mounts)}return mounts},syncfs(populate,callback){if(typeof populate=="function"){callback=populate;populate=false}FS.syncFSRequests++;if(FS.syncFSRequests>1){err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`)}var mounts=FS.getMounts(FS.root.mount);var completed=0;function doCallback(errCode){FS.syncFSRequests--;return callback(errCode)}function done(errCode){if(errCode){if(!done.errored){done.errored=true;return doCallback(errCode)}return}if(++completed>=mounts.length){doCallback(null)}}for(var mount of mounts){if(mount.type.syncfs){mount.type.syncfs(mount,populate,done)}else{done(null)}}},mount(type,opts,mountpoint){var root=mountpoint==="/";var pseudo=!mountpoint;var node;if(root&&FS.root){throw new FS.ErrnoError(10)}else if(!root&&!pseudo){var lookup=FS.lookupPath(mountpoint,{follow_mount:false});mountpoint=lookup.path;node=lookup.node;if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}if(!FS.isDir(node.mode)){throw new FS.ErrnoError(54)}}var mount={type,opts,mountpoint,mounts:[]};var mountRoot=type.mount(mount);mountRoot.mount=mount;mount.root=mountRoot;if(root){FS.root=mountRoot}else if(node){node.mounted=mount;if(node.mount){node.mount.mounts.push(mount)}}return mountRoot},unmount(mountpoint){var lookup=FS.lookupPath(mountpoint,{follow_mount:false});if(!FS.isMountpoint(lookup.node)){throw new FS.ErrnoError(28)}var node=lookup.node;var mount=node.mounted;var mounts=FS.getMounts(mount);for(var[hash,current]of Object.entries(FS.nameTable)){while(current){var next=current.name_next;if(mounts.includes(current.mount)){FS.destroyNode(current)}current=next}}node.mounted=null;var idx=node.mount.mounts.indexOf(mount);node.mount.mounts.splice(idx,1)},lookup(parent,name){return parent.node_ops.lookup(parent,name)},mknod(path,mode,dev){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);if(!name){throw new FS.ErrnoError(28)}if(name==="."||name===".."){throw new FS.ErrnoError(20)}var errCode=FS.mayCreate(parent,name);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.mknod){throw new FS.ErrnoError(63)}return parent.node_ops.mknod(parent,name,mode,dev)},statfs(path){return FS.statfsNode(FS.lookupPath(path,{follow:true}).node)},statfsStream(stream){return FS.statfsNode(stream.node)},statfsNode(node){var rtn={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:FS.nextInode,ffree:FS.nextInode-1,fsid:42,flags:2,namelen:255};if(node.node_ops.statfs){Object.assign(rtn,node.node_ops.statfs(node.mount.opts.root))}return rtn},create(path,mode=438){mode&=4095;mode|=32768;return FS.mknod(path,mode,0)},mkdir(path,mode=511){mode&=511|512;mode|=16384;return FS.mknod(path,mode,0)},mkdirTree(path,mode){var dirs=path.split("/");var d="";for(var dir of dirs){if(!dir)continue;if(d||PATH.isAbs(path))d+="/";d+=dir;try{FS.mkdir(d,mode)}catch(e){if(e.errno!=20)throw e}}},mkdev(path,mode,dev){if(typeof dev=="undefined"){dev=mode;mode=438}mode|=8192;return FS.mknod(path,mode,dev)},symlink(oldpath,newpath){if(!PATH_FS.resolve(oldpath)){throw new FS.ErrnoError(44)}var lookup=FS.lookupPath(newpath,{parent:true});var parent=lookup.node;if(!parent){throw new FS.ErrnoError(44)}var newname=PATH.basename(newpath);var errCode=FS.mayCreate(parent,newname);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.symlink){throw new FS.ErrnoError(63)}return parent.node_ops.symlink(parent,newname,oldpath)},rename(old_path,new_path){var old_dirname=PATH.dirname(old_path);var new_dirname=PATH.dirname(new_path);var old_name=PATH.basename(old_path);var new_name=PATH.basename(new_path);var lookup,old_dir,new_dir;lookup=FS.lookupPath(old_path,{parent:true});old_dir=lookup.node;lookup=FS.lookupPath(new_path,{parent:true});new_dir=lookup.node;if(!old_dir||!new_dir)throw new FS.ErrnoError(44);if(old_dir.mount!==new_dir.mount){throw new FS.ErrnoError(75)}var old_node=FS.lookupNode(old_dir,old_name);var relative=PATH_FS.relative(old_path,new_dirname);if(relative.charAt(0)!=="."){throw new FS.ErrnoError(28)}relative=PATH_FS.relative(new_path,old_dirname);if(relative.charAt(0)!=="."){throw new FS.ErrnoError(55)}var new_node;try{new_node=FS.lookupNode(new_dir,new_name)}catch(e){}if(old_node===new_node){return}var isdir=FS.isDir(old_node.mode);var errCode=FS.mayDelete(old_dir,old_name,isdir);if(errCode){throw new FS.ErrnoError(errCode)}errCode=new_node?FS.mayDelete(new_dir,new_name,isdir):FS.mayCreate(new_dir,new_name);if(errCode){throw new FS.ErrnoError(errCode)}if(!old_dir.node_ops.rename){throw new FS.ErrnoError(63)}if(FS.isMountpoint(old_node)||new_node&&FS.isMountpoint(new_node)){throw new FS.ErrnoError(10)}if(new_dir!==old_dir){errCode=FS.nodePermissions(old_dir,"w");if(errCode){throw new FS.ErrnoError(errCode)}}FS.hashRemoveNode(old_node);try{old_dir.node_ops.rename(old_node,new_dir,new_name);old_node.parent=new_dir}catch(e){throw e}finally{FS.hashAddNode(old_node)}},rmdir(path){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);var node=FS.lookupNode(parent,name);var errCode=FS.mayDelete(parent,name,true);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.rmdir){throw new FS.ErrnoError(63)}if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}parent.node_ops.rmdir(parent,name);FS.destroyNode(node)},readdir(path){var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;var readdir=FS.checkOpExists(node.node_ops.readdir,54);return readdir(node)},unlink(path){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;if(!parent){throw new FS.ErrnoError(44)}var name=PATH.basename(path);var node=FS.lookupNode(parent,name);var errCode=FS.mayDelete(parent,name,false);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.unlink){throw new FS.ErrnoError(63)}if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}parent.node_ops.unlink(parent,name);FS.destroyNode(node)},readlink(path){var lookup=FS.lookupPath(path);var link=lookup.node;if(!link){throw new FS.ErrnoError(44)}if(!link.node_ops.readlink){throw new FS.ErrnoError(28)}return link.node_ops.readlink(link)},stat(path,dontFollow){var lookup=FS.lookupPath(path,{follow:!dontFollow});var node=lookup.node;var getattr=FS.checkOpExists(node.node_ops.getattr,63);return getattr(node)},fstat(fd){var stream=FS.getStreamChecked(fd);var node=stream.node;var getattr=stream.stream_ops.getattr;var arg=getattr?stream:node;getattr??=node.node_ops.getattr;FS.checkOpExists(getattr,63);return getattr(arg)},lstat(path){return FS.stat(path,true)},doChmod(stream,node,mode,dontFollow){FS.doSetAttr(stream,node,{mode:mode&4095|node.mode&~4095,ctime:Date.now(),dontFollow})},chmod(path,mode,dontFollow){var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:!dontFollow});node=lookup.node}else{node=path}FS.doChmod(null,node,mode,dontFollow)},lchmod(path,mode){FS.chmod(path,mode,true)},fchmod(fd,mode){var stream=FS.getStreamChecked(fd);FS.doChmod(stream,stream.node,mode,false)},doChown(stream,node,dontFollow){FS.doSetAttr(stream,node,{timestamp:Date.now(),dontFollow})},chown(path,uid,gid,dontFollow){var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:!dontFollow});node=lookup.node}else{node=path}FS.doChown(null,node,dontFollow)},lchown(path,uid,gid){FS.chown(path,uid,gid,true)},fchown(fd,uid,gid){var stream=FS.getStreamChecked(fd);FS.doChown(stream,stream.node,false)},doTruncate(stream,node,len){if(FS.isDir(node.mode)){throw new FS.ErrnoError(31)}if(!FS.isFile(node.mode)){throw new FS.ErrnoError(28)}var errCode=FS.nodePermissions(node,"w");if(errCode){throw new FS.ErrnoError(errCode)}FS.doSetAttr(stream,node,{size:len,timestamp:Date.now()})},truncate(path,len){if(len<0){throw new FS.ErrnoError(28)}var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:true});node=lookup.node}else{node=path}FS.doTruncate(null,node,len)},ftruncate(fd,len){var stream=FS.getStreamChecked(fd);if(len<0||(stream.flags&2097155)===0){throw new FS.ErrnoError(28)}FS.doTruncate(stream,stream.node,len)},utime(path,atime,mtime){var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;var setattr=FS.checkOpExists(node.node_ops.setattr,63);setattr(node,{atime,mtime})},open(path,flags,mode=438){if(path===""){throw new FS.ErrnoError(44)}flags=typeof flags=="string"?FS_modeStringToFlags(flags):flags;if(flags&64){mode=mode&4095|32768}else{mode=0}var node;var isDirPath;if(typeof path=="object"){node=path}else{isDirPath=path.endsWith("/");var lookup=FS.lookupPath(path,{follow:!(flags&131072),noent_okay:true});node=lookup.node;path=lookup.path}var created=false;if(flags&64){if(node){if(flags&128){throw new FS.ErrnoError(20)}}else if(isDirPath){throw new FS.ErrnoError(31)}else{node=FS.mknod(path,mode|511,0);created=true}}if(!node){throw new FS.ErrnoError(44)}if(FS.isChrdev(node.mode)){flags&=~512}if(flags&65536&&!FS.isDir(node.mode)){throw new FS.ErrnoError(54)}if(!created){var errCode=FS.mayOpen(node,flags);if(errCode){throw new FS.ErrnoError(errCode)}}if(flags&512&&!created){FS.truncate(node,0)}flags&=~(128|512|131072);var stream=FS.createStream({node,path:FS.getPath(node),flags,seekable:true,position:0,stream_ops:node.stream_ops,ungotten:[],error:false});if(stream.stream_ops.open){stream.stream_ops.open(stream)}if(created){FS.chmod(node,mode&511)}if(Module["logReadFiles"]&&!(flags&1)){if(!(path in FS.readFiles)){FS.readFiles[path]=1}}return stream},close(stream){if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if(stream.getdents)stream.getdents=null;try{if(stream.stream_ops.close){stream.stream_ops.close(stream)}}catch(e){throw e}finally{FS.closeStream(stream.fd)}stream.fd=null},isClosed(stream){return stream.fd===null},llseek(stream,offset,whence){if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if(!stream.seekable||!stream.stream_ops.llseek){throw new FS.ErrnoError(70)}if(whence!=0&&whence!=1&&whence!=2){throw new FS.ErrnoError(28)}stream.position=stream.stream_ops.llseek(stream,offset,whence);stream.ungotten=[];return stream.position},read(stream,buffer,offset,length,position){if(length<0||position<0){throw new FS.ErrnoError(28)}if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if((stream.flags&2097155)===1){throw new FS.ErrnoError(8)}if(FS.isDir(stream.node.mode)){throw new FS.ErrnoError(31)}if(!stream.stream_ops.read){throw new FS.ErrnoError(28)}var seeking=typeof position!="undefined";if(!seeking){position=stream.position}else if(!stream.seekable){throw new FS.ErrnoError(70)}var bytesRead=stream.stream_ops.read(stream,buffer,offset,length,position);if(!seeking)stream.position+=bytesRead;return bytesRead},write(stream,buffer,offset,length,position,canOwn){if(length<0||position<0){throw new FS.ErrnoError(28)}if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if((stream.flags&2097155)===0){throw new FS.ErrnoError(8)}if(FS.isDir(stream.node.mode)){throw new FS.ErrnoError(31)}if(!stream.stream_ops.write){throw new FS.ErrnoError(28)}if(stream.seekable&&stream.flags&1024){FS.llseek(stream,0,2)}var seeking=typeof position!="undefined";if(!seeking){position=stream.position}else if(!stream.seekable){throw new FS.ErrnoError(70)}var bytesWritten=stream.stream_ops.write(stream,buffer,offset,length,position,canOwn);if(!seeking)stream.position+=bytesWritten;return bytesWritten},mmap(stream,length,position,prot,flags){if((prot&2)!==0&&(flags&2)===0&&(stream.flags&2097155)!==2){throw new FS.ErrnoError(2)}if((stream.flags&2097155)===1){throw new FS.ErrnoError(2)}if(!stream.stream_ops.mmap){throw new FS.ErrnoError(43)}if(!length){throw new FS.ErrnoError(28)}return stream.stream_ops.mmap(stream,length,position,prot,flags)},msync(stream,buffer,offset,length,mmapFlags){if(!stream.stream_ops.msync){return 0}return stream.stream_ops.msync(stream,buffer,offset,length,mmapFlags)},ioctl(stream,cmd,arg){if(!stream.stream_ops.ioctl){throw new FS.ErrnoError(59)}return stream.stream_ops.ioctl(stream,cmd,arg)},readFile(path,opts={}){opts.flags=opts.flags||0;opts.encoding=opts.encoding||"binary";if(opts.encoding!=="utf8"&&opts.encoding!=="binary"){abort(`Invalid encoding type "${opts.encoding}"`)}var stream=FS.open(path,opts.flags);var stat=FS.stat(path);var length=stat.size;var buf=new Uint8Array(length);FS.read(stream,buf,0,length,0);if(opts.encoding==="utf8"){buf=UTF8ArrayToString(buf)}FS.close(stream);return buf},writeFile(path,data,opts={}){opts.flags=opts.flags||577;var stream=FS.open(path,opts.flags,opts.mode);if(typeof data=="string"){data=new Uint8Array(intArrayFromString(data,true))}if(ArrayBuffer.isView(data)){FS.write(stream,data,0,data.byteLength,undefined,opts.canOwn)}else{abort("Unsupported data type")}FS.close(stream)},cwd:()=>FS.currentPath,chdir(path){var lookup=FS.lookupPath(path,{follow:true});if(lookup.node===null){throw new FS.ErrnoError(44)}if(!FS.isDir(lookup.node.mode)){throw new FS.ErrnoError(54)}var errCode=FS.nodePermissions(lookup.node,"x");if(errCode){throw new FS.ErrnoError(errCode)}FS.currentPath=lookup.path},createDefaultDirectories(){FS.mkdir("/tmp");FS.mkdir("/home");FS.mkdir("/home/web_user")},createDefaultDevices(){FS.mkdir("/dev");FS.registerDevice(FS.makedev(1,3),{read:()=>0,write:(stream,buffer,offset,length,pos)=>length,llseek:()=>0});FS.mkdev("/dev/null",FS.makedev(1,3));TTY.register(FS.makedev(5,0),TTY.default_tty_ops);TTY.register(FS.makedev(6,0),TTY.default_tty1_ops);FS.mkdev("/dev/tty",FS.makedev(5,0));FS.mkdev("/dev/tty1",FS.makedev(6,0));var randomBuffer=new Uint8Array(1024),randomLeft=0;var randomByte=()=>{if(randomLeft===0){randomFill(randomBuffer);randomLeft=randomBuffer.byteLength}return randomBuffer[--randomLeft]};FS.createDevice("/dev","random",randomByte);FS.createDevice("/dev","urandom",randomByte);FS.mkdir("/dev/shm");FS.mkdir("/dev/shm/tmp")},createSpecialDirectories(){FS.mkdir("/proc");var proc_self=FS.mkdir("/proc/self");FS.mkdir("/proc/self/fd");FS.mount({mount(){var node=FS.createNode(proc_self,"fd",16895,73);node.stream_ops={llseek:MEMFS.stream_ops.llseek};node.node_ops={lookup(parent,name){var fd=+name;var stream=FS.getStreamChecked(fd);var ret={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>stream.path},id:fd+1};ret.parent=ret;return ret},readdir(){return Array.from(FS.streams.entries()).filter(([k,v])=>v).map(([k,v])=>k.toString())}};return node}},{},"/proc/self/fd")},createStandardStreams(input,output,error){if(input){FS.createDevice("/dev","stdin",input)}else{FS.symlink("/dev/tty","/dev/stdin")}if(output){FS.createDevice("/dev","stdout",null,output)}else{FS.symlink("/dev/tty","/dev/stdout")}if(error){FS.createDevice("/dev","stderr",null,error)}else{FS.symlink("/dev/tty1","/dev/stderr")}var stdin=FS.open("/dev/stdin",0);var stdout=FS.open("/dev/stdout",1);var stderr=FS.open("/dev/stderr",1)},staticInit(){FS.nameTable=new Array(4096);FS.mount(MEMFS,{},"/");FS.createDefaultDirectories();FS.createDefaultDevices();FS.createSpecialDirectories();FS.filesystems={MEMFS}},init(input,output,error){FS.initialized=true;input??=Module["stdin"];output??=Module["stdout"];error??=Module["stderr"];FS.createStandardStreams(input,output,error)},quit(){FS.initialized=false;for(var stream of FS.streams){if(stream){FS.close(stream)}}},findObject(path,dontResolveLastLink){var ret=FS.analyzePath(path,dontResolveLastLink);if(!ret.exists){return null}return ret.object},analyzePath(path,dontResolveLastLink){try{var lookup=FS.lookupPath(path,{follow:!dontResolveLastLink});path=lookup.path}catch(e){}var ret={isRoot:false,exists:false,error:0,name:null,path:null,object:null,parentExists:false,parentPath:null,parentObject:null};try{var lookup=FS.lookupPath(path,{parent:true});ret.parentExists=true;ret.parentPath=lookup.path;ret.parentObject=lookup.node;ret.name=PATH.basename(path);lookup=FS.lookupPath(path,{follow:!dontResolveLastLink});ret.exists=true;ret.path=lookup.path;ret.object=lookup.node;ret.name=lookup.node.name;ret.isRoot=lookup.path==="/"}catch(e){ret.error=e.errno}return ret},createPath(parent,path,canRead,canWrite){parent=typeof parent=="string"?parent:FS.getPath(parent);var parts=path.split("/").reverse();while(parts.length){var part=parts.pop();if(!part)continue;var current=PATH.join2(parent,part);try{FS.mkdir(current)}catch(e){if(e.errno!=20)throw e}parent=current}return current},createFile(parent,name,properties,canRead,canWrite){var path=PATH.join2(typeof parent=="string"?parent:FS.getPath(parent),name);var mode=FS_getMode(canRead,canWrite);return FS.create(path,mode)},createDataFile(parent,name,data,canRead,canWrite,canOwn){var path=name;if(parent){parent=typeof parent=="string"?parent:FS.getPath(parent);path=name?PATH.join2(parent,name):parent}var mode=FS_getMode(canRead,canWrite);var node=FS.create(path,mode);if(data){if(typeof data=="string"){var arr=new Array(data.length);for(var i=0,len=data.length;i<len;++i)arr[i]=data.charCodeAt(i);data=arr}FS.chmod(node,mode|146);var stream=FS.open(node,577);FS.write(stream,data,0,data.length,0,canOwn);FS.close(stream);FS.chmod(node,mode)}},createDevice(parent,name,input,output){var path=PATH.join2(typeof parent=="string"?parent:FS.getPath(parent),name);var mode=FS_getMode(!!input,!!output);FS.createDevice.major??=64;var dev=FS.makedev(FS.createDevice.major++,0);FS.registerDevice(dev,{open(stream){stream.seekable=false},close(stream){if(output?.buffer?.length){output(10)}},read(stream,buffer,offset,length,pos){var bytesRead=0;for(var i=0;i<length;i++){var result;try{result=input()}catch(e){throw new FS.ErrnoError(29)}if(result===undefined&&bytesRead===0){throw new FS.ErrnoError(6)}if(result===null||result===undefined)break;bytesRead++;buffer[offset+i]=result}if(bytesRead){stream.node.atime=Date.now()}return bytesRead},write(stream,buffer,offset,length,pos){for(var i=0;i<length;i++){try{output(buffer[offset+i])}catch(e){throw new FS.ErrnoError(29)}}if(length){stream.node.mtime=stream.node.ctime=Date.now()}return i}});return FS.mkdev(path,mode,dev)},forceLoadFile(obj){if(obj.isDevice||obj.isFolder||obj.link||obj.contents)return true;if(globalThis.XMLHttpRequest){abort("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.")}else{try{obj.contents=readBinary(obj.url)}catch(e){throw new FS.ErrnoError(29)}}},createLazyFile(parent,name,url,canRead,canWrite){class LazyUint8Array{lengthKnown=false;chunks=[];get(idx){if(idx>this.length-1||idx<0){return undefined}var chunkOffset=idx%this.chunkSize;var chunkNum=idx/this.chunkSize|0;return this.getter(chunkNum)[chunkOffset]}setDataGetter(getter){this.getter=getter}cacheLength(){var xhr=new XMLHttpRequest;xhr.open("HEAD",url,false);xhr.send(null);if(!(xhr.status>=200&&xhr.status<300||xhr.status===304))abort("Couldn\'t load "+url+". Status: "+xhr.status);var datalength=Number(xhr.getResponseHeader("Content-length"));var header;var hasByteServing=(header=xhr.getResponseHeader("Accept-Ranges"))&&header==="bytes";var usesGzip=(header=xhr.getResponseHeader("Content-Encoding"))&&header==="gzip";var chunkSize=1024*1024;if(!hasByteServing)chunkSize=datalength;var doXHR=(from,to)=>{if(from>to)abort("invalid range ("+from+", "+to+") or no bytes requested!");if(to>datalength-1)abort("only "+datalength+" bytes available! programmer error!");var xhr=new XMLHttpRequest;xhr.open("GET",url,false);if(datalength!==chunkSize)xhr.setRequestHeader("Range","bytes="+from+"-"+to);xhr.responseType="arraybuffer";if(xhr.overrideMimeType){xhr.overrideMimeType("text/plain; charset=x-user-defined")}xhr.send(null);if(!(xhr.status>=200&&xhr.status<300||xhr.status===304))abort("Couldn\'t load "+url+". Status: "+xhr.status);if(xhr.response!==undefined){return new Uint8Array(xhr.response||[])}return intArrayFromString(xhr.responseText||"",true)};var lazyArray=this;lazyArray.setDataGetter(chunkNum=>{var start=chunkNum*chunkSize;var end=(chunkNum+1)*chunkSize-1;end=Math.min(end,datalength-1);if(typeof lazyArray.chunks[chunkNum]=="undefined"){lazyArray.chunks[chunkNum]=doXHR(start,end)}if(typeof lazyArray.chunks[chunkNum]=="undefined")abort("doXHR failed!");return lazyArray.chunks[chunkNum]});if(usesGzip||!datalength){chunkSize=datalength=1;datalength=this.getter(0).length;chunkSize=datalength;out("LazyFiles on gzip forces download of the whole file when length is accessed")}this._length=datalength;this._chunkSize=chunkSize;this.lengthKnown=true}get length(){if(!this.lengthKnown){this.cacheLength()}return this._length}get chunkSize(){if(!this.lengthKnown){this.cacheLength()}return this._chunkSize}}if(globalThis.XMLHttpRequest){if(!ENVIRONMENT_IS_WORKER)abort("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc");var lazyArray=new LazyUint8Array;var properties={isDevice:false,contents:lazyArray}}else{var properties={isDevice:false,url}}var node=FS.createFile(parent,name,properties,canRead,canWrite);if(properties.contents){node.contents=properties.contents}else if(properties.url){node.contents=null;node.url=properties.url}Object.defineProperties(node,{usedBytes:{get:function(){return this.contents.length}}});var stream_ops={};for(const[key,fn]of Object.entries(node.stream_ops)){stream_ops[key]=(...args)=>{FS.forceLoadFile(node);return fn(...args)}}function writeChunks(stream,buffer,offset,length,position){var contents=stream.node.contents;if(position>=contents.length)return 0;var size=Math.min(contents.length-position,length);if(contents.slice){for(var i=0;i<size;i++){buffer[offset+i]=contents[position+i]}}else{for(var i=0;i<size;i++){buffer[offset+i]=contents.get(position+i)}}return size}stream_ops.read=(stream,buffer,offset,length,position)=>{FS.forceLoadFile(node);return writeChunks(stream,buffer,offset,length,position)};stream_ops.mmap=(stream,length,position,prot,flags)=>{FS.forceLoadFile(node);var ptr=mmapAlloc(length);if(!ptr){throw new FS.ErrnoError(48)}writeChunks(stream,(growMemViews(),HEAP8),ptr,length,position);return{ptr,allocated:true}};node.stream_ops=stream_ops;return node}};var UTF8ToString=(ptr,maxBytesToRead,ignoreNul)=>ptr?UTF8ArrayToString((growMemViews(),HEAPU8),ptr,maxBytesToRead,ignoreNul):"";var SYSCALLS={DEFAULT_POLLMASK:5,calculateAt(dirfd,path,allowEmpty){if(PATH.isAbs(path)){return path}var dir;if(dirfd===-100){dir=FS.cwd()}else{var dirstream=SYSCALLS.getStreamFromFD(dirfd);dir=dirstream.path}if(path.length==0){if(!allowEmpty){throw new FS.ErrnoError(44)}return dir}return dir+"/"+path},writeStat(buf,stat){(growMemViews(),HEAPU32)[buf/4]=stat.dev;(growMemViews(),HEAPU32)[(buf+4)/4]=stat.mode;(growMemViews(),HEAPU64)[(buf+8)/8]=BigInt(stat.nlink);(growMemViews(),HEAPU32)[(buf+16)/4]=stat.uid;(growMemViews(),HEAPU32)[(buf+20)/4]=stat.gid;(growMemViews(),HEAPU32)[(buf+24)/4]=stat.rdev;(growMemViews(),HEAP64)[(buf+32)/8]=BigInt(stat.size);(growMemViews(),HEAP32)[(buf+40)/4]=4096;(growMemViews(),HEAP32)[(buf+44)/4]=stat.blocks;var atime=stat.atime.getTime();var mtime=stat.mtime.getTime();var ctime=stat.ctime.getTime();(growMemViews(),HEAP64)[(buf+48)/8]=BigInt(Math.floor(atime/1e3));(growMemViews(),HEAPU64)[(buf+56)/8]=BigInt(atime%1e3*1e3*1e3);(growMemViews(),HEAP64)[(buf+64)/8]=BigInt(Math.floor(mtime/1e3));(growMemViews(),HEAPU64)[(buf+72)/8]=BigInt(mtime%1e3*1e3*1e3);(growMemViews(),HEAP64)[(buf+80)/8]=BigInt(Math.floor(ctime/1e3));(growMemViews(),HEAPU64)[(buf+88)/8]=BigInt(ctime%1e3*1e3*1e3);(growMemViews(),HEAP64)[(buf+96)/8]=BigInt(stat.ino);return 0},writeStatFs(buf,stats){(growMemViews(),HEAPU32)[(buf+8)/4]=stats.bsize;(growMemViews(),HEAPU32)[(buf+72)/4]=stats.bsize;(growMemViews(),HEAP64)[(buf+16)/8]=BigInt(stats.blocks);(growMemViews(),HEAP64)[(buf+24)/8]=BigInt(stats.bfree);(growMemViews(),HEAP64)[(buf+32)/8]=BigInt(stats.bavail);(growMemViews(),HEAP64)[(buf+40)/8]=BigInt(stats.files);(growMemViews(),HEAP64)[(buf+48)/8]=BigInt(stats.ffree);(growMemViews(),HEAPU32)[(buf+56)/4]=stats.fsid;(growMemViews(),HEAPU32)[(buf+80)/4]=stats.flags;(growMemViews(),HEAPU32)[(buf+64)/4]=stats.namelen},doMsync(addr,stream,len,flags,offset){if(!FS.isFile(stream.node.mode)){throw new FS.ErrnoError(43)}if(flags&2){return 0}var buffer=(growMemViews(),HEAPU8).slice(addr,addr+len);FS.msync(stream,buffer,offset,len,flags)},getStreamFromFD(fd){var stream=FS.getStreamChecked(fd);return stream},varargs:undefined,getStr(ptr){var ret=UTF8ToString(ptr);return ret}};function ___syscall_fcntl64(fd,cmd,varargs){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(3,0,1,fd,cmd,varargs);varargs=bigintToI53Checked(varargs);SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(fd);switch(cmd){case 0:{var arg=syscallGetVarargI();if(arg<0){return-28}while(FS.streams[arg]){arg++}var newStream;newStream=FS.dupStream(stream,arg);return newStream.fd}case 1:case 2:return 0;case 3:return stream.flags;case 4:{var arg=syscallGetVarargI();stream.flags|=arg;return 0}case 5:{var arg=syscallGetVarargP();var offset=0;(growMemViews(),HEAP16)[(arg+offset)/2]=2;return 0}case 6:case 7:return 0}return-28}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_fstat64(fd,buf){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(4,0,1,fd,buf);buf=bigintToI53Checked(buf);try{return SYSCALLS.writeStat(buf,FS.fstat(fd))}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var stringToUTF8=(str,outPtr,maxBytesToWrite)=>stringToUTF8Array(str,(growMemViews(),HEAPU8),outPtr,maxBytesToWrite);function ___syscall_getcwd(buf,size){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(5,0,1,buf,size);buf=bigintToI53Checked(buf);size=bigintToI53Checked(size);try{if(size===0)return-28;var cwd=FS.cwd();var cwdLengthInBytes=lengthBytesUTF8(cwd)+1;if(size<cwdLengthInBytes)return-68;stringToUTF8(cwd,buf,size);return cwdLengthInBytes}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_getdents64(fd,dirp,count){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(6,0,1,fd,dirp,count);dirp=bigintToI53Checked(dirp);count=bigintToI53Checked(count);try{var stream=SYSCALLS.getStreamFromFD(fd);stream.getdents||=FS.readdir(stream.path);var struct_size=280;var pos=0;var off=FS.llseek(stream,0,1);var startIdx=Math.floor(off/struct_size);var endIdx=Math.min(stream.getdents.length,startIdx+Math.floor(count/struct_size));for(var idx=startIdx;idx<endIdx;idx++){var id;var type;var name=stream.getdents[idx];if(name==="."){id=stream.node.id;type=4}else if(name===".."){var lookup=FS.lookupPath(stream.path,{parent:true});id=lookup.node.id;type=4}else{var child;try{child=FS.lookupNode(stream.node,name)}catch(e){if(e?.errno===28){continue}throw e}id=child.id;type=FS.isChrdev(child.mode)?2:FS.isDir(child.mode)?4:FS.isLink(child.mode)?10:8}(growMemViews(),HEAP64)[(dirp+pos)/8]=BigInt(id);(growMemViews(),HEAP64)[(dirp+pos+8)/8]=BigInt((idx+1)*struct_size);(growMemViews(),HEAP16)[(dirp+pos+16)/2]=280;(growMemViews(),HEAP8)[dirp+pos+18]=type;stringToUTF8(name,dirp+pos+19,256);pos+=struct_size}FS.llseek(stream,idx*struct_size,0);return pos}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_ioctl(fd,op,varargs){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(7,0,1,fd,op,varargs);varargs=bigintToI53Checked(varargs);SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(fd);switch(op){case 21509:{if(!stream.tty)return-59;return 0}case 21505:{if(!stream.tty)return-59;if(stream.tty.ops.ioctl_tcgets){var termios=stream.tty.ops.ioctl_tcgets(stream);var argp=syscallGetVarargP();(growMemViews(),HEAP32)[argp/4]=termios.c_iflag||0;(growMemViews(),HEAP32)[(argp+4)/4]=termios.c_oflag||0;(growMemViews(),HEAP32)[(argp+8)/4]=termios.c_cflag||0;(growMemViews(),HEAP32)[(argp+12)/4]=termios.c_lflag||0;for(var i=0;i<32;i++){(growMemViews(),HEAP8)[argp+i+17]=termios.c_cc[i]||0}return 0}return 0}case 21510:case 21511:case 21512:{if(!stream.tty)return-59;return 0}case 21506:case 21507:case 21508:{if(!stream.tty)return-59;if(stream.tty.ops.ioctl_tcsets){var argp=syscallGetVarargP();var c_iflag=(growMemViews(),HEAP32)[argp/4];var c_oflag=(growMemViews(),HEAP32)[(argp+4)/4];var c_cflag=(growMemViews(),HEAP32)[(argp+8)/4];var c_lflag=(growMemViews(),HEAP32)[(argp+12)/4];var c_cc=[];for(var i=0;i<32;i++){c_cc.push((growMemViews(),HEAP8)[argp+i+17])}return stream.tty.ops.ioctl_tcsets(stream.tty,op,{c_iflag,c_oflag,c_cflag,c_lflag,c_cc})}return 0}case 21519:{if(!stream.tty)return-59;var argp=syscallGetVarargP();(growMemViews(),HEAP32)[argp/4]=0;return 0}case 21520:{if(!stream.tty)return-59;return-28}case 21537:case 21531:{var argp=syscallGetVarargP();return FS.ioctl(stream,op,argp)}case 21523:{if(!stream.tty)return-59;if(stream.tty.ops.ioctl_tiocgwinsz){var winsize=stream.tty.ops.ioctl_tiocgwinsz(stream.tty);var argp=syscallGetVarargP();(growMemViews(),HEAP16)[argp/2]=winsize[0];(growMemViews(),HEAP16)[(argp+2)/2]=winsize[1]}return 0}case 21524:{if(!stream.tty)return-59;return 0}case 21515:{if(!stream.tty)return-59;return 0}default:return-28}}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_lstat64(path,buf){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(8,0,1,path,buf);path=bigintToI53Checked(path);buf=bigintToI53Checked(buf);try{path=SYSCALLS.getStr(path);return SYSCALLS.writeStat(buf,FS.lstat(path))}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_newfstatat(dirfd,path,buf,flags){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(9,0,1,dirfd,path,buf,flags);path=bigintToI53Checked(path);buf=bigintToI53Checked(buf);try{path=SYSCALLS.getStr(path);var nofollow=flags&256;var allowEmpty=flags&4096;flags=flags&~6400;path=SYSCALLS.calculateAt(dirfd,path,allowEmpty);return SYSCALLS.writeStat(buf,nofollow?FS.lstat(path):FS.stat(path))}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_openat(dirfd,path,flags,varargs){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(10,0,1,dirfd,path,flags,varargs);path=bigintToI53Checked(path);varargs=bigintToI53Checked(varargs);SYSCALLS.varargs=varargs;try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);var mode=varargs?syscallGetVarargI():0;return FS.open(path,flags,mode).fd}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_stat64(path,buf){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(11,0,1,path,buf);path=bigintToI53Checked(path);buf=bigintToI53Checked(buf);try{path=SYSCALLS.getStr(path);return SYSCALLS.writeStat(buf,FS.stat(path))}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var __abort_js=()=>abort("");function __emscripten_init_main_thread_js(tb){tb=bigintToI53Checked(tb);__emscripten_thread_init(tb,!ENVIRONMENT_IS_WORKER,1,!ENVIRONMENT_IS_WEB,5242880,false);PThread.threadInitTLS()}var handleException=e=>{if(e instanceof ExitStatus||e=="unwind"){return EXITSTATUS}quit_(1,e)};var maybeExit=()=>{if(!keepRuntimeAlive()){try{if(ENVIRONMENT_IS_PTHREAD){if(_pthread_self())__emscripten_thread_exit(EXITSTATUS);return}_exit(EXITSTATUS)}catch(e){handleException(e)}}};var callUserCallback=func=>{if(ABORT){return}try{func();maybeExit()}catch(e){handleException(e)}};function __emscripten_thread_mailbox_await(pthread_ptr){pthread_ptr=bigintToI53Checked(pthread_ptr);if(Atomics.waitAsync){var wait=Atomics.waitAsync((growMemViews(),HEAP32),pthread_ptr/4,pthread_ptr);wait.value.then(checkMailbox);var waitingAsync=pthread_ptr+228;Atomics.store((growMemViews(),HEAP32),waitingAsync/4,1)}}var checkMailbox=()=>callUserCallback(()=>{var pthread_ptr=_pthread_self();if(pthread_ptr){__emscripten_thread_mailbox_await(pthread_ptr);__emscripten_check_mailbox()}});function __emscripten_notify_mailbox_postmessage(targetThread,currThreadId){targetThread=bigintToI53Checked(targetThread);currThreadId=bigintToI53Checked(currThreadId);if(targetThread==currThreadId){setTimeout(checkMailbox)}else if(ENVIRONMENT_IS_PTHREAD){postMessage({targetThread,cmd:"checkMailbox"})}else{var worker=PThread.pthreads[targetThread];if(!worker){return}worker.postMessage({cmd:"checkMailbox"})}}var proxiedJSCallArgs=[];function __emscripten_receive_on_main_thread_js(funcIndex,emAsmAddr,callingThread,numCallArgs,args){emAsmAddr=bigintToI53Checked(emAsmAddr);callingThread=bigintToI53Checked(callingThread);args=bigintToI53Checked(args);numCallArgs/=2;proxiedJSCallArgs.length=numCallArgs;var b=args/8;for(var i=0;i<numCallArgs;i++){if((growMemViews(),HEAP64)[b+2*i]){proxiedJSCallArgs[i]=(growMemViews(),HEAP64)[b+2*i+1]}else{proxiedJSCallArgs[i]=(growMemViews(),HEAPF64)[b+2*i+1]}}var func=proxiedFunctionTable[funcIndex];PThread.currentProxiedOperationCallerThread=callingThread;var rtn=func(...proxiedJSCallArgs);PThread.currentProxiedOperationCallerThread=0;if(typeof rtn=="bigint"){rtn=bigintToI53Checked(rtn)}return rtn}function __emscripten_thread_cleanup(thread){thread=bigintToI53Checked(thread);if(!ENVIRONMENT_IS_PTHREAD)cleanupThread(thread);else postMessage({cmd:"cleanupThread",thread})}function __emscripten_thread_set_strongref(thread){thread=bigintToI53Checked(thread);if(ENVIRONMENT_IS_NODE){PThread.pthreads[thread].ref()}}var isLeapYear=year=>year%4===0&&(year%100!==0||year%400===0);var MONTH_DAYS_LEAP_CUMULATIVE=[0,31,60,91,121,152,182,213,244,274,305,335];var MONTH_DAYS_REGULAR_CUMULATIVE=[0,31,59,90,120,151,181,212,243,273,304,334];var ydayFromDate=date=>{var leap=isLeapYear(date.getFullYear());var monthDaysCumulative=leap?MONTH_DAYS_LEAP_CUMULATIVE:MONTH_DAYS_REGULAR_CUMULATIVE;var yday=monthDaysCumulative[date.getMonth()]+date.getDate()-1;return yday};function __localtime_js(time,tmPtr){time=bigintToI53Checked(time);tmPtr=bigintToI53Checked(tmPtr);var date=new Date(time*1e3);(growMemViews(),HEAP32)[tmPtr/4]=date.getSeconds();(growMemViews(),HEAP32)[(tmPtr+4)/4]=date.getMinutes();(growMemViews(),HEAP32)[(tmPtr+8)/4]=date.getHours();(growMemViews(),HEAP32)[(tmPtr+12)/4]=date.getDate();(growMemViews(),HEAP32)[(tmPtr+16)/4]=date.getMonth();(growMemViews(),HEAP32)[(tmPtr+20)/4]=date.getFullYear()-1900;(growMemViews(),HEAP32)[(tmPtr+24)/4]=date.getDay();var yday=ydayFromDate(date)|0;(growMemViews(),HEAP32)[(tmPtr+28)/4]=yday;(growMemViews(),HEAP64)[(tmPtr+40)/8]=BigInt(-(date.getTimezoneOffset()*60));var start=new Date(date.getFullYear(),0,1);var summerOffset=new Date(date.getFullYear(),6,1).getTimezoneOffset();var winterOffset=start.getTimezoneOffset();var dst=(summerOffset!=winterOffset&&date.getTimezoneOffset()==Math.min(winterOffset,summerOffset))|0;(growMemViews(),HEAP32)[(tmPtr+32)/4]=dst}function __mmap_js(len,prot,flags,fd,offset,allocated,addr){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(12,0,1,len,prot,flags,fd,offset,allocated,addr);len=bigintToI53Checked(len);offset=bigintToI53Checked(offset);allocated=bigintToI53Checked(allocated);addr=bigintToI53Checked(addr);try{var stream=SYSCALLS.getStreamFromFD(fd);var res=FS.mmap(stream,len,offset,prot,flags);var ptr=res.ptr;(growMemViews(),HEAP32)[allocated/4]=res.allocated;(growMemViews(),HEAPU64)[addr/8]=BigInt(ptr);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function __munmap_js(addr,len,prot,flags,fd,offset){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(13,0,1,addr,len,prot,flags,fd,offset);addr=bigintToI53Checked(addr);len=bigintToI53Checked(len);offset=bigintToI53Checked(offset);try{var stream=SYSCALLS.getStreamFromFD(fd);if(prot&2){SYSCALLS.doMsync(addr,stream,len,flags,offset)}}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var __tzset_js=function(timezone,daylight,std_name,dst_name){timezone=bigintToI53Checked(timezone);daylight=bigintToI53Checked(daylight);std_name=bigintToI53Checked(std_name);dst_name=bigintToI53Checked(dst_name);var currentYear=(new Date).getFullYear();var winter=new Date(currentYear,0,1);var summer=new Date(currentYear,6,1);var winterOffset=winter.getTimezoneOffset();var summerOffset=summer.getTimezoneOffset();var stdTimezoneOffset=Math.max(winterOffset,summerOffset);(growMemViews(),HEAPU64)[timezone/8]=BigInt(stdTimezoneOffset*60);(growMemViews(),HEAP32)[daylight/4]=Number(winterOffset!=summerOffset);var extractZone=timezoneOffset=>{var sign=timezoneOffset>=0?"-":"+";var absOffset=Math.abs(timezoneOffset);var hours=String(Math.floor(absOffset/60)).padStart(2,"0");var minutes=String(absOffset%60).padStart(2,"0");return`UTC${sign}${hours}${minutes}`};var winterName=extractZone(winterOffset);var summerName=extractZone(summerOffset);if(summerOffset<winterOffset){stringToUTF8(winterName,std_name,17);stringToUTF8(summerName,dst_name,17)}else{stringToUTF8(winterName,dst_name,17);stringToUTF8(summerName,std_name,17)}};var _emscripten_get_now=()=>performance.timeOrigin+performance.now();var _emscripten_date_now=()=>Date.now();var nowIsMonotonic=1;var checkWasiClock=clock_id=>clock_id>=0&&clock_id<=3;function _clock_time_get(clk_id,ignored_precision,ptime){ignored_precision=bigintToI53Checked(ignored_precision);ptime=bigintToI53Checked(ptime);if(!checkWasiClock(clk_id)){return 28}var now;if(clk_id===0){now=_emscripten_date_now()}else if(nowIsMonotonic){now=_emscripten_get_now()}else{return 52}var nsec=Math.round(now*1e3*1e3);(growMemViews(),HEAP64)[ptime/8]=BigInt(nsec);return 0}var _emscripten_check_blocking_allowed=()=>{};var runtimeKeepalivePush=()=>{runtimeKeepaliveCounter+=1};var _emscripten_exit_with_live_runtime=()=>{runtimeKeepalivePush();throw"unwind"};var jsStackTrace=()=>(new Error).stack.toString();var getCallstack=flags=>{var callstack=jsStackTrace();var lines=callstack.split("\\n");callstack="";var firefoxRe=new RegExp("\\\\s*(.*?)@(.*?):([0-9]+):([0-9]+)");var chromeRe=new RegExp("\\\\s*at (.*?) \\\\((.*):(.*):(.*)\\\\)");for(var line of lines){var symbolName="";var file="";var lineno=0;var column=0;var parts=chromeRe.exec(line);if(parts?.length==5){symbolName=parts[1];file=parts[2];lineno=parts[3];column=parts[4]}else{parts=firefoxRe.exec(line);if(parts?.length>=4){symbolName=parts[1];file=parts[2];lineno=parts[3];column=parts[4]|0}else{callstack+=line+"\\n";continue}}if(symbolName=="_emscripten_log"||symbolName=="_emscripten_get_callstack"){callstack="";continue}if(flags&24){if(flags&64){file=file.substring(file.replace(/\\\\/g,"/").lastIndexOf("/")+1)}callstack+=`    at ${symbolName} (${file}:${lineno}:${column})\\n`}}callstack=callstack.replace(/\\s+$/,"");return callstack};function _emscripten_get_callstack(flags,str,maxbytes){str=bigintToI53Checked(str);var callstack=getCallstack(flags);if(!str||maxbytes<=0){return lengthBytesUTF8(callstack)+1}var bytesWrittenExcludingNull=stringToUTF8(callstack,str,maxbytes);return bytesWrittenExcludingNull+1}var getHeapMax=()=>4294967296;var _emscripten_get_heap_max=()=>BigInt(getHeapMax());var _emscripten_has_asyncify=()=>2;var _emscripten_num_logical_cores=()=>ENVIRONMENT_IS_NODE?require("os").cpus().length:navigator["hardwareConcurrency"];var growMemory=size=>{var oldHeapSize=wasmMemory.buffer.byteLength;var pages=(size-oldHeapSize+65535)/65536|0;try{wasmMemory.grow(BigInt(pages));updateMemoryViews();return 1}catch(e){}};function _emscripten_resize_heap(requestedSize){requestedSize=bigintToI53Checked(requestedSize);var oldSize=(growMemViews(),HEAPU8).length;if(requestedSize<=oldSize){return false}var maxHeapSize=getHeapMax();if(requestedSize>maxHeapSize){return false}for(var cutDown=1;cutDown<=4;cutDown*=2){var overGrownHeapSize=oldSize*(1+.2/cutDown);overGrownHeapSize=Math.min(overGrownHeapSize,requestedSize+100663296);var newSize=Math.min(maxHeapSize,alignMemory(Math.max(requestedSize,overGrownHeapSize),65536));var replacement=growMemory(newSize);if(replacement){return true}}return false}var stringToUTF8OnStack=str=>{var size=lengthBytesUTF8(str)+1;var ret=stackAlloc(size);stringToUTF8(str,ret,size);return ret};var writeI53ToI64=(ptr,num)=>{(growMemViews(),HEAPU32)[ptr/4]=num;var lower=(growMemViews(),HEAPU32)[ptr/4];(growMemViews(),HEAPU32)[(ptr+4)/4]=(num-lower)/4294967296};var stringToNewUTF8=str=>{var size=lengthBytesUTF8(str)+1;var ret=_malloc(size);if(ret)stringToUTF8(str,ret,size);return ret};var readI53FromI64=ptr=>(growMemViews(),HEAPU32)[ptr/4]+(growMemViews(),HEAP32)[(ptr+4)/4]*4294967296;var WebGPU={Internals:{jsObjects:[],jsObjectInsert:(ptr,jsObject)=>{WebGPU.Internals.jsObjects[ptr]=jsObject},bufferOnUnmaps:[],futures:[],futureInsert:(futureId,promise)=>{WebGPU.Internals.futures[futureId]=new Promise(resolve=>promise.finally(()=>resolve(futureId)))}},getJsObject:ptr=>{if(!ptr)return undefined;return WebGPU.Internals.jsObjects[ptr]},importJsAdapter:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateAdapter(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsBindGroup:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateBindGroup(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsBindGroupLayout:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateBindGroupLayout(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsBuffer:(buffer,parentPtr=0)=>{assert(buffer.mapState==="unmapped");var bufferPtr=_emwgpuCreateBuffer(parentPtr);WebGPU.Internals.jsObjectInsert(bufferPtr,buffer);return bufferPtr},importJsCommandBuffer:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateCommandBuffer(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsCommandEncoder:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateCommandEncoder(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsComputePassEncoder:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateComputePassEncoder(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsComputePipeline:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateComputePipeline(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsDevice:(device,parentPtr=0)=>{var queuePtr=_emwgpuCreateQueue(parentPtr);var devicePtr=_emwgpuCreateDevice(parentPtr,queuePtr);WebGPU.Internals.jsObjectInsert(queuePtr,device.queue);WebGPU.Internals.jsObjectInsert(devicePtr,device);return devicePtr},importJsExternalTexture:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateExternalTexture(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsPipelineLayout:(obj,parentPtr=0)=>{var ptr=_emwgpuCreatePipelineLayout(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsQuerySet:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateQuerySet(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsQueue:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateQueue(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsRenderBundle:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateRenderBundle(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsRenderBundleEncoder:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateRenderBundleEncoder(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsRenderPassEncoder:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateRenderPassEncoder(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsRenderPipeline:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateRenderPipeline(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsSampler:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateSampler(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsShaderModule:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateShaderModule(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsSurface:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateSurface(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsTexture:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateTexture(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsTextureView:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateTextureView(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},errorCallback:(callback,type,message,userdata)=>{var sp=stackSave();var messagePtr=stringToUTF8OnStack(message);((a1,a2,a3)=>getWasmTableEntry(callback).call(null,a1,BigInt(a2),BigInt(a3)))(type,BigInt(messagePtr),userdata);stackRestore(sp)},iterateExtensions:(root,handlers)=>{for(var ptr=Number((growMemViews(),HEAPU64)[root/8]);ptr;ptr=Number((growMemViews(),HEAPU64)[ptr/8])){var sType=(growMemViews(),HEAP32)[(ptr+8)/4];var handler=handlers[sType](ptr)}},setStringView:(ptr,data,length)=>{(growMemViews(),HEAPU64)[ptr/8]=BigInt(data);(growMemViews(),HEAPU64)[(ptr+8)/8]=BigInt(length)},makeStringFromStringView:stringViewPtr=>{var ptr=Number((growMemViews(),HEAPU64)[stringViewPtr/8]);var length=Number((growMemViews(),HEAPU64)[(stringViewPtr+8)/8]);return UTF8ToString(ptr,length)},makeStringFromOptionalStringView:stringViewPtr=>{var ptr=Number((growMemViews(),HEAPU64)[stringViewPtr/8]);var length=Number((growMemViews(),HEAPU64)[(stringViewPtr+8)/8]);if(!ptr){if(length===0){return""}return undefined}return UTF8ToString(ptr,length)},makeColor:ptr=>({r:(growMemViews(),HEAPF64)[ptr/8],g:(growMemViews(),HEAPF64)[(ptr+8)/8],b:(growMemViews(),HEAPF64)[(ptr+16)/8],a:(growMemViews(),HEAPF64)[(ptr+24)/8]}),makeExtent3D:ptr=>({width:(growMemViews(),HEAPU32)[ptr/4],height:(growMemViews(),HEAPU32)[(ptr+4)/4],depthOrArrayLayers:(growMemViews(),HEAPU32)[(ptr+8)/4]}),makeOrigin3D:ptr=>({x:(growMemViews(),HEAPU32)[ptr/4],y:(growMemViews(),HEAPU32)[(ptr+4)/4],z:(growMemViews(),HEAPU32)[(ptr+8)/4]}),makeTexelCopyTextureInfo:ptr=>({texture:WebGPU.getJsObject(Number((growMemViews(),HEAPU64)[ptr/8])),mipLevel:(growMemViews(),HEAPU32)[(ptr+8)/4],origin:WebGPU.makeOrigin3D(ptr+12),aspect:WebGPU.TextureAspect[(growMemViews(),HEAP32)[(ptr+24)/4]]}),makeTexelCopyBufferLayout:ptr=>{var bytesPerRow=(growMemViews(),HEAPU32)[(ptr+8)/4];var rowsPerImage=(growMemViews(),HEAPU32)[(ptr+12)/4];return{offset:readI53FromI64(ptr),bytesPerRow:bytesPerRow===4294967295?undefined:bytesPerRow,rowsPerImage:rowsPerImage===4294967295?undefined:rowsPerImage}},makeTexelCopyBufferInfo:ptr=>{var layoutPtr=ptr+0;var bufferCopyView=WebGPU.makeTexelCopyBufferLayout(layoutPtr);bufferCopyView["buffer"]=WebGPU.getJsObject(Number((growMemViews(),HEAPU64)[(ptr+16)/8]));return bufferCopyView},makePassTimestampWrites:ptr=>{if(ptr===0)return undefined;return{querySet:WebGPU.getJsObject(Number((growMemViews(),HEAPU64)[(ptr+8)/8])),beginningOfPassWriteIndex:(growMemViews(),HEAPU32)[(ptr+16)/4],endOfPassWriteIndex:(growMemViews(),HEAPU32)[(ptr+20)/4]}},makePipelineConstants:(constantCount,constantsPtr)=>{if(!constantCount)return;var constants={};for(var i=0;i<constantCount;++i){var entryPtr=constantsPtr+32*i;var key=WebGPU.makeStringFromStringView(entryPtr+8);constants[key]=(growMemViews(),HEAPF64)[(entryPtr+24)/8]}return constants},makePipelineLayout:layoutPtr=>{if(!layoutPtr)return"auto";return WebGPU.getJsObject(layoutPtr)},makeComputeState:ptr=>{if(!ptr)return undefined;var desc={module:WebGPU.getJsObject(Number((growMemViews(),HEAPU64)[(ptr+8)/8])),constants:WebGPU.makePipelineConstants(Number((growMemViews(),HEAPU64)[(ptr+32)/8]),Number((growMemViews(),HEAPU64)[(ptr+40)/8])),entryPoint:WebGPU.makeStringFromOptionalStringView(ptr+16)};return desc},makeComputePipelineDesc:descriptor=>{var desc={label:WebGPU.makeStringFromOptionalStringView(descriptor+8),layout:WebGPU.makePipelineLayout(Number((growMemViews(),HEAPU64)[(descriptor+24)/8])),compute:WebGPU.makeComputeState(descriptor+32)};return desc},makeRenderPipelineDesc:descriptor=>{function makePrimitiveState(psPtr){if(!psPtr)return undefined;return{topology:WebGPU.PrimitiveTopology[(growMemViews(),HEAP32)[(psPtr+8)/4]],stripIndexFormat:WebGPU.IndexFormat[(growMemViews(),HEAP32)[(psPtr+12)/4]],frontFace:WebGPU.FrontFace[(growMemViews(),HEAP32)[(psPtr+16)/4]],cullMode:WebGPU.CullMode[(growMemViews(),HEAP32)[(psPtr+20)/4]],unclippedDepth:!!(growMemViews(),HEAPU32)[(psPtr+24)/4]}}function makeBlendComponent(bdPtr){if(!bdPtr)return undefined;return{operation:WebGPU.BlendOperation[(growMemViews(),HEAP32)[bdPtr/4]],srcFactor:WebGPU.BlendFactor[(growMemViews(),HEAP32)[(bdPtr+4)/4]],dstFactor:WebGPU.BlendFactor[(growMemViews(),HEAP32)[(bdPtr+8)/4]]}}function makeBlendState(bsPtr){if(!bsPtr)return undefined;return{alpha:makeBlendComponent(bsPtr+12),color:makeBlendComponent(bsPtr+0)}}function makeColorState(csPtr){var format=WebGPU.TextureFormat[(growMemViews(),HEAP32)[(csPtr+8)/4]];return format?{format,blend:makeBlendState(Number((growMemViews(),HEAPU64)[(csPtr+16)/8])),writeMask:(growMemViews(),HEAPU32)[(csPtr+24)/4]}:undefined}function makeColorStates(count,csArrayPtr){var states=[];for(var i=0;i<count;++i){states.push(makeColorState(csArrayPtr+32*i))}return states}function makeStencilStateFace(ssfPtr){return{compare:WebGPU.CompareFunction[(growMemViews(),HEAP32)[ssfPtr/4]],failOp:WebGPU.StencilOperation[(growMemViews(),HEAP32)[(ssfPtr+4)/4]],depthFailOp:WebGPU.StencilOperation[(growMemViews(),HEAP32)[(ssfPtr+8)/4]],passOp:WebGPU.StencilOperation[(growMemViews(),HEAP32)[(ssfPtr+12)/4]]}}function makeDepthStencilState(dssPtr){if(!dssPtr)return undefined;return{format:WebGPU.TextureFormat[(growMemViews(),HEAP32)[(dssPtr+8)/4]],depthWriteEnabled:!!(growMemViews(),HEAPU32)[(dssPtr+12)/4],depthCompare:WebGPU.CompareFunction[(growMemViews(),HEAP32)[(dssPtr+16)/4]],stencilFront:makeStencilStateFace(dssPtr+20),stencilBack:makeStencilStateFace(dssPtr+36),stencilReadMask:(growMemViews(),HEAPU32)[(dssPtr+52)/4],stencilWriteMask:(growMemViews(),HEAPU32)[(dssPtr+56)/4],depthBias:(growMemViews(),HEAP32)[(dssPtr+60)/4],depthBiasSlopeScale:(growMemViews(),HEAPF32)[(dssPtr+64)/4],depthBiasClamp:(growMemViews(),HEAPF32)[(dssPtr+68)/4]}}function makeVertexAttribute(vaPtr){return{format:WebGPU.VertexFormat[(growMemViews(),HEAP32)[(vaPtr+8)/4]],offset:readI53FromI64(vaPtr+16),shaderLocation:(growMemViews(),HEAPU32)[(vaPtr+24)/4]}}function makeVertexAttributes(count,vaArrayPtr){var vas=[];for(var i=0;i<count;++i){vas.push(makeVertexAttribute(vaArrayPtr+i*32))}return vas}function makeVertexBuffer(vbPtr){if(!vbPtr)return undefined;var stepMode=WebGPU.VertexStepMode[(growMemViews(),HEAP32)[(vbPtr+8)/4]];var attributeCount=Number((growMemViews(),HEAPU64)[(vbPtr+24)/8]);if(!stepMode&&!attributeCount){return null}return{arrayStride:readI53FromI64(vbPtr+16),stepMode,attributes:makeVertexAttributes(attributeCount,Number((growMemViews(),HEAPU64)[(vbPtr+32)/8]))}}function makeVertexBuffers(count,vbArrayPtr){if(!count)return undefined;var vbs=[];for(var i=0;i<count;++i){vbs.push(makeVertexBuffer(vbArrayPtr+i*40))}return vbs}function makeVertexState(viPtr){if(!viPtr)return undefined;var desc={module:WebGPU.getJsObject(Number((growMemViews(),HEAPU64)[(viPtr+8)/8])),constants:WebGPU.makePipelineConstants(Number((growMemViews(),HEAPU64)[(viPtr+32)/8]),Number((growMemViews(),HEAPU64)[(viPtr+40)/8])),buffers:makeVertexBuffers(Number((growMemViews(),HEAPU64)[(viPtr+48)/8]),Number((growMemViews(),HEAPU64)[(viPtr+56)/8])),entryPoint:WebGPU.makeStringFromOptionalStringView(viPtr+16)};return desc}function makeMultisampleState(msPtr){if(!msPtr)return undefined;return{count:(growMemViews(),HEAPU32)[(msPtr+8)/4],mask:(growMemViews(),HEAPU32)[(msPtr+12)/4],alphaToCoverageEnabled:!!(growMemViews(),HEAPU32)[(msPtr+16)/4]}}function makeFragmentState(fsPtr){if(!fsPtr)return undefined;var desc={module:WebGPU.getJsObject(Number((growMemViews(),HEAPU64)[(fsPtr+8)/8])),constants:WebGPU.makePipelineConstants(Number((growMemViews(),HEAPU64)[(fsPtr+32)/8]),Number((growMemViews(),HEAPU64)[(fsPtr+40)/8])),targets:makeColorStates(Number((growMemViews(),HEAPU64)[(fsPtr+48)/8]),Number((growMemViews(),HEAPU64)[(fsPtr+56)/8])),entryPoint:WebGPU.makeStringFromOptionalStringView(fsPtr+16)};return desc}var desc={label:WebGPU.makeStringFromOptionalStringView(descriptor+8),layout:WebGPU.makePipelineLayout(Number((growMemViews(),HEAPU64)[(descriptor+24)/8])),vertex:makeVertexState(descriptor+32),primitive:makePrimitiveState(descriptor+96),depthStencil:makeDepthStencilState(Number((growMemViews(),HEAPU64)[(descriptor+128)/8])),multisample:makeMultisampleState(descriptor+136),fragment:makeFragmentState(Number((growMemViews(),HEAPU64)[(descriptor+160)/8]))};return desc},fillLimitStruct:(limits,limitsOutPtr)=>{var nextInChainPtr=Number((growMemViews(),HEAPU64)[limitsOutPtr/8]);function setLimitValueU32(name,basePtr,limitOffset,fallbackValue=0){var limitValue=limits[name]??fallbackValue;(growMemViews(),HEAPU32)[(basePtr+limitOffset)/4]=limitValue}function setLimitValueU64(name,basePtr,limitOffset,fallbackValue=0){var limitValue=limits[name]??fallbackValue;writeI53ToI64(basePtr+limitOffset,limitValue)}setLimitValueU32("maxTextureDimension1D",limitsOutPtr,8);setLimitValueU32("maxTextureDimension2D",limitsOutPtr,12);setLimitValueU32("maxTextureDimension3D",limitsOutPtr,16);setLimitValueU32("maxTextureArrayLayers",limitsOutPtr,20);setLimitValueU32("maxBindGroups",limitsOutPtr,24);setLimitValueU32("maxBindGroupsPlusVertexBuffers",limitsOutPtr,28);setLimitValueU32("maxBindingsPerBindGroup",limitsOutPtr,32);setLimitValueU32("maxDynamicUniformBuffersPerPipelineLayout",limitsOutPtr,36);setLimitValueU32("maxDynamicStorageBuffersPerPipelineLayout",limitsOutPtr,40);setLimitValueU32("maxSampledTexturesPerShaderStage",limitsOutPtr,44);setLimitValueU32("maxSamplersPerShaderStage",limitsOutPtr,48);setLimitValueU32("maxStorageBuffersPerShaderStage",limitsOutPtr,52);setLimitValueU32("maxStorageTexturesPerShaderStage",limitsOutPtr,56);setLimitValueU32("maxUniformBuffersPerShaderStage",limitsOutPtr,60);setLimitValueU32("minUniformBufferOffsetAlignment",limitsOutPtr,80);setLimitValueU32("minStorageBufferOffsetAlignment",limitsOutPtr,84);setLimitValueU64("maxUniformBufferBindingSize",limitsOutPtr,64);setLimitValueU64("maxStorageBufferBindingSize",limitsOutPtr,72);setLimitValueU32("maxVertexBuffers",limitsOutPtr,88);setLimitValueU64("maxBufferSize",limitsOutPtr,96);setLimitValueU32("maxVertexAttributes",limitsOutPtr,104);setLimitValueU32("maxVertexBufferArrayStride",limitsOutPtr,108);setLimitValueU32("maxInterStageShaderVariables",limitsOutPtr,112);setLimitValueU32("maxColorAttachments",limitsOutPtr,116);setLimitValueU32("maxColorAttachmentBytesPerSample",limitsOutPtr,120);setLimitValueU32("maxComputeWorkgroupStorageSize",limitsOutPtr,124);setLimitValueU32("maxComputeInvocationsPerWorkgroup",limitsOutPtr,128);setLimitValueU32("maxComputeWorkgroupSizeX",limitsOutPtr,132);setLimitValueU32("maxComputeWorkgroupSizeY",limitsOutPtr,136);setLimitValueU32("maxComputeWorkgroupSizeZ",limitsOutPtr,140);setLimitValueU32("maxComputeWorkgroupsPerDimension",limitsOutPtr,144);setLimitValueU32("maxImmediateSize",limitsOutPtr,148);if(nextInChainPtr!==0){var sType=(growMemViews(),HEAP32)[(nextInChainPtr+8)/4];var compatibilityModeLimitsPtr=nextInChainPtr;setLimitValueU32("maxStorageBuffersInVertexStage",compatibilityModeLimitsPtr,16,limits.maxStorageBuffersPerShaderStage);setLimitValueU32("maxStorageBuffersInFragmentStage",compatibilityModeLimitsPtr,24,limits.maxStorageBuffersPerShaderStage);setLimitValueU32("maxStorageTexturesInVertexStage",compatibilityModeLimitsPtr,20,limits.maxStorageTexturesPerShaderStage);setLimitValueU32("maxStorageTexturesInFragmentStage",compatibilityModeLimitsPtr,28,limits.maxStorageTexturesPerShaderStage)}},fillAdapterInfoStruct:(info,infoStruct)=>{(growMemViews(),HEAPU32)[(infoStruct+88)/4]=info.subgroupMinSize;(growMemViews(),HEAPU32)[(infoStruct+92)/4]=info.subgroupMaxSize;var strs=info.vendor+info.architecture+info.device+info.description;var strPtr=stringToNewUTF8(strs);var vendorLen=lengthBytesUTF8(info.vendor);WebGPU.setStringView(infoStruct+8,strPtr,vendorLen);strPtr+=vendorLen;var architectureLen=lengthBytesUTF8(info.architecture);WebGPU.setStringView(infoStruct+24,strPtr,architectureLen);strPtr+=architectureLen;var deviceLen=lengthBytesUTF8(info.device);WebGPU.setStringView(infoStruct+40,strPtr,deviceLen);strPtr+=deviceLen;var descriptionLen=lengthBytesUTF8(info.description);WebGPU.setStringView(infoStruct+56,strPtr,descriptionLen);strPtr+=descriptionLen;(growMemViews(),HEAP32)[(infoStruct+72)/4]=2;var adapterType=info.isFallbackAdapter?3:4;(growMemViews(),HEAP32)[(infoStruct+76)/4]=adapterType;(growMemViews(),HEAPU32)[(infoStruct+80)/4]=0;(growMemViews(),HEAPU32)[(infoStruct+84)/4]=0},AddressMode:[,"clamp-to-edge","repeat","mirror-repeat"],BlendFactor:[,"zero","one","src","one-minus-src","src-alpha","one-minus-src-alpha","dst","one-minus-dst","dst-alpha","one-minus-dst-alpha","src-alpha-saturated","constant","one-minus-constant","src1","one-minus-src1","src1-alpha","one-minus-src1-alpha"],BlendOperation:[,"add","subtract","reverse-subtract","min","max"],BufferBindingType:[,,"uniform","storage","read-only-storage"],BufferMapState:[,"unmapped","pending","mapped"],CompareFunction:[,"never","less","equal","less-equal","greater","not-equal","greater-equal","always"],CompilationInfoRequestStatus:[,"success","callback-cancelled"],ComponentSwizzle:[,"0","1","r","g","b","a"],CompositeAlphaMode:[,"opaque","premultiplied","unpremultiplied","inherit"],CullMode:[,"none","front","back"],ErrorFilter:[,"validation","out-of-memory","internal"],FeatureLevel:[,"compatibility","core"],FeatureName:{1:"core-features-and-limits",2:"depth-clip-control",3:"depth32float-stencil8",4:"texture-compression-bc",5:"texture-compression-bc-sliced-3d",6:"texture-compression-etc2",7:"texture-compression-astc",8:"texture-compression-astc-sliced-3d",9:"timestamp-query",10:"indirect-first-instance",11:"shader-f16",12:"rg11b10ufloat-renderable",13:"bgra8unorm-storage",14:"float32-filterable",15:"float32-blendable",16:"clip-distances",17:"dual-source-blending",18:"subgroups",19:"texture-formats-tier1",20:"texture-formats-tier2",21:"primitive-index",22:"texture-component-swizzle",327692:"chromium-experimental-unorm16-texture-formats",327729:"chromium-experimental-multi-draw-indirect"},FilterMode:[,"nearest","linear"],FrontFace:[,"ccw","cw"],IndexFormat:[,"uint16","uint32"],InstanceFeatureName:[,"timed-wait-any","shader-source-spirv","multiple-devices-per-adapter"],LoadOp:[,"load","clear"],MipmapFilterMode:[,"nearest","linear"],OptionalBool:["false","true"],PowerPreference:[,"low-power","high-performance"],PredefinedColorSpace:[,"srgb","display-p3"],PrimitiveTopology:[,"point-list","line-list","line-strip","triangle-list","triangle-strip"],QueryType:[,"occlusion","timestamp"],SamplerBindingType:[,,"filtering","non-filtering","comparison"],Status:[,"success","error"],StencilOperation:[,"keep","zero","replace","invert","increment-clamp","decrement-clamp","increment-wrap","decrement-wrap"],StorageTextureAccess:[,,"write-only","read-only","read-write"],StoreOp:[,"store","discard"],SurfaceGetCurrentTextureStatus:[,"success-optimal","success-suboptimal","timeout","outdated","lost","error"],TextureAspect:[,"all","stencil-only","depth-only"],TextureDimension:[,"1d","2d","3d"],TextureFormat:[,"r8unorm","r8snorm","r8uint","r8sint","r16unorm","r16snorm","r16uint","r16sint","r16float","rg8unorm","rg8snorm","rg8uint","rg8sint","r32float","r32uint","r32sint","rg16unorm","rg16snorm","rg16uint","rg16sint","rg16float","rgba8unorm","rgba8unorm-srgb","rgba8snorm","rgba8uint","rgba8sint","bgra8unorm","bgra8unorm-srgb","rgb10a2uint","rgb10a2unorm","rg11b10ufloat","rgb9e5ufloat","rg32float","rg32uint","rg32sint","rgba16unorm","rgba16snorm","rgba16uint","rgba16sint","rgba16float","rgba32float","rgba32uint","rgba32sint","stencil8","depth16unorm","depth24plus","depth24plus-stencil8","depth32float","depth32float-stencil8","bc1-rgba-unorm","bc1-rgba-unorm-srgb","bc2-rgba-unorm","bc2-rgba-unorm-srgb","bc3-rgba-unorm","bc3-rgba-unorm-srgb","bc4-r-unorm","bc4-r-snorm","bc5-rg-unorm","bc5-rg-snorm","bc6h-rgb-ufloat","bc6h-rgb-float","bc7-rgba-unorm","bc7-rgba-unorm-srgb","etc2-rgb8unorm","etc2-rgb8unorm-srgb","etc2-rgb8a1unorm","etc2-rgb8a1unorm-srgb","etc2-rgba8unorm","etc2-rgba8unorm-srgb","eac-r11unorm","eac-r11snorm","eac-rg11unorm","eac-rg11snorm","astc-4x4-unorm","astc-4x4-unorm-srgb","astc-5x4-unorm","astc-5x4-unorm-srgb","astc-5x5-unorm","astc-5x5-unorm-srgb","astc-6x5-unorm","astc-6x5-unorm-srgb","astc-6x6-unorm","astc-6x6-unorm-srgb","astc-8x5-unorm","astc-8x5-unorm-srgb","astc-8x6-unorm","astc-8x6-unorm-srgb","astc-8x8-unorm","astc-8x8-unorm-srgb","astc-10x5-unorm","astc-10x5-unorm-srgb","astc-10x6-unorm","astc-10x6-unorm-srgb","astc-10x8-unorm","astc-10x8-unorm-srgb","astc-10x10-unorm","astc-10x10-unorm-srgb","astc-12x10-unorm","astc-12x10-unorm-srgb","astc-12x12-unorm","astc-12x12-unorm-srgb"],TextureSampleType:[,,"float","unfilterable-float","depth","sint","uint"],TextureViewDimension:[,"1d","2d","2d-array","cube","cube-array","3d"],ToneMappingMode:[,"standard","extended"],VertexFormat:[,"uint8","uint8x2","uint8x4","sint8","sint8x2","sint8x4","unorm8","unorm8x2","unorm8x4","snorm8","snorm8x2","snorm8x4","uint16","uint16x2","uint16x4","sint16","sint16x2","sint16x4","unorm16","unorm16x2","unorm16x4","snorm16","snorm16x2","snorm16x4","float16","float16x2","float16x4","float32","float32x2","float32x3","float32x4","uint32","uint32x2","uint32x3","uint32x4","sint32","sint32x2","sint32x3","sint32x4","unorm10-10-10-2","unorm8x4-bgra"],VertexStepMode:[,"vertex","instance"],WGSLLanguageFeatureName:[,"readonly_and_readwrite_storage_textures","packed_4x8_integer_dot_product","unrestricted_pointer_parameters","pointer_composite_access","uniform_buffer_standard_layout","subgroup_id","texture_and_sampler_let","subgroup_uniformity","texture_formats_tier1"]};var emwgpuStringToInt_DeviceLostReason={undefined:1,unknown:1,destroyed:2};var runtimeKeepalivePop=()=>{runtimeKeepaliveCounter-=1};function _emwgpuAdapterRequestDevice(adapterPtr,futureId,deviceLostFutureId,devicePtr,queuePtr,descriptor){adapterPtr=bigintToI53Checked(adapterPtr);futureId=bigintToI53Checked(futureId);deviceLostFutureId=bigintToI53Checked(deviceLostFutureId);devicePtr=bigintToI53Checked(devicePtr);queuePtr=bigintToI53Checked(queuePtr);descriptor=bigintToI53Checked(descriptor);var adapter=WebGPU.getJsObject(adapterPtr);var desc={};if(descriptor){var requiredFeatureCount=Number((growMemViews(),HEAPU64)[(descriptor+24)/8]);if(requiredFeatureCount){var requiredFeaturesPtr=Number((growMemViews(),HEAPU64)[(descriptor+32)/8]);desc["requiredFeatures"]=Array.from((growMemViews(),HEAPU32).subarray(requiredFeaturesPtr/4,(requiredFeaturesPtr+requiredFeatureCount*4)/4),feature=>WebGPU.FeatureName[feature])}var limitsPtr=Number((growMemViews(),HEAPU64)[(descriptor+40)/8]);if(limitsPtr){var nextInChainPtr=Number((growMemViews(),HEAPU64)[limitsPtr/8]);var requiredLimits={};function setLimitU32IfDefined(name,basePtr,limitOffset,ignoreIfZero=false){var ptr=basePtr+limitOffset;var value=(growMemViews(),HEAPU32)[ptr/4];if(value!=4294967295&&(!ignoreIfZero||value!=0)){requiredLimits[name]=value}}function setLimitU64IfDefined(name,basePtr,limitOffset){var ptr=basePtr+limitOffset;var limitPart1=(growMemViews(),HEAPU32)[ptr/4];var limitPart2=(growMemViews(),HEAPU32)[(ptr+4)/4];if(limitPart1!=4294967295||limitPart2!=4294967295){requiredLimits[name]=readI53FromI64(ptr)}}setLimitU32IfDefined("maxTextureDimension1D",limitsPtr,8);setLimitU32IfDefined("maxTextureDimension2D",limitsPtr,12);setLimitU32IfDefined("maxTextureDimension3D",limitsPtr,16);setLimitU32IfDefined("maxTextureArrayLayers",limitsPtr,20);setLimitU32IfDefined("maxBindGroups",limitsPtr,24);setLimitU32IfDefined("maxBindGroupsPlusVertexBuffers",limitsPtr,28);setLimitU32IfDefined("maxBindingsPerBindGroup",limitsPtr,32);setLimitU32IfDefined("maxDynamicUniformBuffersPerPipelineLayout",limitsPtr,36);setLimitU32IfDefined("maxDynamicStorageBuffersPerPipelineLayout",limitsPtr,40);setLimitU32IfDefined("maxSampledTexturesPerShaderStage",limitsPtr,44);setLimitU32IfDefined("maxSamplersPerShaderStage",limitsPtr,48);setLimitU32IfDefined("maxStorageBuffersPerShaderStage",limitsPtr,52);setLimitU32IfDefined("maxStorageTexturesPerShaderStage",limitsPtr,56);setLimitU32IfDefined("maxUniformBuffersPerShaderStage",limitsPtr,60);setLimitU32IfDefined("minUniformBufferOffsetAlignment",limitsPtr,80);setLimitU32IfDefined("minStorageBufferOffsetAlignment",limitsPtr,84);setLimitU64IfDefined("maxUniformBufferBindingSize",limitsPtr,64);setLimitU64IfDefined("maxStorageBufferBindingSize",limitsPtr,72);setLimitU32IfDefined("maxVertexBuffers",limitsPtr,88);setLimitU64IfDefined("maxBufferSize",limitsPtr,96);setLimitU32IfDefined("maxVertexAttributes",limitsPtr,104);setLimitU32IfDefined("maxVertexBufferArrayStride",limitsPtr,108);setLimitU32IfDefined("maxInterStageShaderVariables",limitsPtr,112);setLimitU32IfDefined("maxColorAttachments",limitsPtr,116);setLimitU32IfDefined("maxColorAttachmentBytesPerSample",limitsPtr,120);setLimitU32IfDefined("maxComputeWorkgroupStorageSize",limitsPtr,124);setLimitU32IfDefined("maxComputeInvocationsPerWorkgroup",limitsPtr,128);setLimitU32IfDefined("maxComputeWorkgroupSizeX",limitsPtr,132);setLimitU32IfDefined("maxComputeWorkgroupSizeY",limitsPtr,136);setLimitU32IfDefined("maxComputeWorkgroupSizeZ",limitsPtr,140);setLimitU32IfDefined("maxComputeWorkgroupsPerDimension",limitsPtr,144);setLimitU32IfDefined("maxImmediateSize",limitsPtr,148,true);if(nextInChainPtr!==0){var sType=(growMemViews(),HEAP32)[(nextInChainPtr+8)/4];var compatibilityModeLimitsPtr=nextInChainPtr;if("maxStorageBuffersInVertexStage"in GPUSupportedLimits.prototype){setLimitU32IfDefined("maxStorageBuffersInVertexStage",compatibilityModeLimitsPtr,16);setLimitU32IfDefined("maxStorageTexturesInVertexStage",compatibilityModeLimitsPtr,20);setLimitU32IfDefined("maxStorageBuffersInFragmentStage",compatibilityModeLimitsPtr,24);setLimitU32IfDefined("maxStorageTexturesInFragmentStage",compatibilityModeLimitsPtr,28)}}desc["requiredLimits"]=requiredLimits}var defaultQueuePtr=Number((growMemViews(),HEAPU64)[(descriptor+48)/8]);if(defaultQueuePtr){var defaultQueueDesc={label:WebGPU.makeStringFromOptionalStringView(defaultQueuePtr+8)};desc["defaultQueue"]=defaultQueueDesc}desc["label"]=WebGPU.makeStringFromOptionalStringView(descriptor+8)}runtimeKeepalivePush();WebGPU.Internals.futureInsert(futureId,adapter.requestDevice(desc).then(device=>{runtimeKeepalivePop();callUserCallback(()=>{WebGPU.Internals.jsObjectInsert(queuePtr,device.queue);WebGPU.Internals.jsObjectInsert(devicePtr,device);devicePtr=BigInt(devicePtr);WebGPU.Internals.futureInsert(deviceLostFutureId,device.lost.then(info=>{callUserCallback(()=>{device.onuncapturederror=ev=>{};var sp=stackSave();var messagePtr=stringToUTF8OnStack(info.message);_emwgpuOnDeviceLostCompleted(deviceLostFutureId,emwgpuStringToInt_DeviceLostReason[info.reason],BigInt(messagePtr));stackRestore(sp)})}));device.onuncapturederror=ev=>{var type=5;if(ev.error instanceof GPUValidationError)type=2;else if(ev.error instanceof GPUOutOfMemoryError)type=3;else if(ev.error instanceof GPUInternalError)type=4;var sp=stackSave();var messagePtr=stringToUTF8OnStack(ev.error.message);_emwgpuOnUncapturedError(BigInt(devicePtr),type,BigInt(messagePtr));stackRestore(sp)};_emwgpuOnRequestDeviceCompleted(futureId,1,BigInt(devicePtr),0n)})},ex=>{runtimeKeepalivePop();callUserCallback(()=>{var sp=stackSave();var messagePtr=stringToUTF8OnStack(ex.message);_emwgpuOnRequestDeviceCompleted(futureId,3,BigInt(devicePtr),BigInt(messagePtr));if(deviceLostFutureId){_emwgpuOnDeviceLostCompleted(deviceLostFutureId,4,BigInt(messagePtr))}stackRestore(sp)})}))}function _emwgpuBufferDestroy(bufferPtr){bufferPtr=bigintToI53Checked(bufferPtr);var buffer=WebGPU.getJsObject(bufferPtr);var onUnmap=WebGPU.Internals.bufferOnUnmaps[bufferPtr];if(onUnmap){for(var i=0;i<onUnmap.length;++i){onUnmap[i]()}delete WebGPU.Internals.bufferOnUnmaps[bufferPtr]}buffer.destroy()}var warnOnce=text=>{warnOnce.shown||={};if(!warnOnce.shown[text]){warnOnce.shown[text]=1;if(ENVIRONMENT_IS_NODE)text="warning: "+text;err(text)}};var _emwgpuBufferGetConstMappedRange=function(bufferPtr,offset,size){bufferPtr=bigintToI53Checked(bufferPtr);offset=bigintToI53Checked(offset);size=bigintToI53Checked(size);var ret=(()=>{var buffer=WebGPU.getJsObject(bufferPtr);if(size==-1)size=undefined;var mapped;try{mapped=buffer.getMappedRange(offset,size)}catch(ex){return 0n}var data=_memalign(16,mapped.byteLength);(growMemViews(),HEAPU8).set(new Uint8Array(mapped),data);WebGPU.Internals.bufferOnUnmaps[bufferPtr].push(()=>_free(data));return data})();return BigInt(ret)};var _emwgpuBufferMapAsync=function(bufferPtr,futureId,mode,offset,size){bufferPtr=bigintToI53Checked(bufferPtr);futureId=bigintToI53Checked(futureId);mode=bigintToI53Checked(mode);offset=bigintToI53Checked(offset);size=bigintToI53Checked(size);var buffer=WebGPU.getJsObject(bufferPtr);WebGPU.Internals.bufferOnUnmaps[bufferPtr]=[];if(size==-1)size=undefined;runtimeKeepalivePush();WebGPU.Internals.futureInsert(futureId,buffer.mapAsync(mode,offset,size).then(()=>{runtimeKeepalivePop();callUserCallback(()=>{_emwgpuOnMapAsyncCompleted(futureId,1,0n)})},ex=>{runtimeKeepalivePop();callUserCallback(()=>{var sp=stackSave();var messagePtr=stringToUTF8OnStack(ex.message);var status=ex.name==="AbortError"?4:ex.name==="OperationError"?3:0;_emwgpuOnMapAsyncCompleted(futureId,status,BigInt(messagePtr));delete WebGPU.Internals.bufferOnUnmaps[bufferPtr]})}))};function _emwgpuBufferUnmap(bufferPtr){bufferPtr=bigintToI53Checked(bufferPtr);var buffer=WebGPU.getJsObject(bufferPtr);var onUnmap=WebGPU.Internals.bufferOnUnmaps[bufferPtr];if(!onUnmap){return}for(var i=0;i<onUnmap.length;++i){onUnmap[i]()}delete WebGPU.Internals.bufferOnUnmaps[bufferPtr];buffer.unmap()}function _emwgpuDelete(ptr){ptr=bigintToI53Checked(ptr);delete WebGPU.Internals.jsObjects[ptr]}function _emwgpuDeviceCreateBuffer(devicePtr,descriptor,bufferPtr){devicePtr=bigintToI53Checked(devicePtr);descriptor=bigintToI53Checked(descriptor);bufferPtr=bigintToI53Checked(bufferPtr);var mappedAtCreation=!!(growMemViews(),HEAPU32)[(descriptor+40)/4];var desc={label:WebGPU.makeStringFromOptionalStringView(descriptor+8),usage:(growMemViews(),HEAPU32)[(descriptor+24)/4],size:readI53FromI64(descriptor+32),mappedAtCreation};var device=WebGPU.getJsObject(devicePtr);var buffer;try{buffer=device.createBuffer(desc)}catch(ex){return false}WebGPU.Internals.jsObjectInsert(bufferPtr,buffer);if(mappedAtCreation){WebGPU.Internals.bufferOnUnmaps[bufferPtr]=[]}return true}function _emwgpuDeviceCreateShaderModule(devicePtr,descriptor,shaderModulePtr){devicePtr=bigintToI53Checked(devicePtr);descriptor=bigintToI53Checked(descriptor);shaderModulePtr=bigintToI53Checked(shaderModulePtr);var nextInChainPtr=Number((growMemViews(),HEAPU64)[descriptor/8]);var sType=(growMemViews(),HEAP32)[(nextInChainPtr+8)/4];var desc={label:WebGPU.makeStringFromOptionalStringView(descriptor+8),code:""};switch(sType){case 2:{desc["code"]=WebGPU.makeStringFromStringView(nextInChainPtr+16);break}}var device=WebGPU.getJsObject(devicePtr);WebGPU.Internals.jsObjectInsert(shaderModulePtr,device.createShaderModule(desc))}var _emwgpuDeviceDestroy=devicePtr=>{const device=WebGPU.getJsObject(devicePtr);device.onuncapturederror=null;device.destroy()};function _emwgpuInstanceRequestAdapter(instancePtr,futureId,options,adapterPtr){instancePtr=bigintToI53Checked(instancePtr);futureId=bigintToI53Checked(futureId);options=bigintToI53Checked(options);adapterPtr=bigintToI53Checked(adapterPtr);var opts;if(options){opts={featureLevel:WebGPU.FeatureLevel[(growMemViews(),HEAP32)[(options+8)/4]],powerPreference:WebGPU.PowerPreference[(growMemViews(),HEAP32)[(options+12)/4]],forceFallbackAdapter:!!(growMemViews(),HEAPU32)[(options+16)/4]};var nextInChainPtr=Number((growMemViews(),HEAPU64)[options/8]);if(nextInChainPtr!==0){var sType=(growMemViews(),HEAP32)[(nextInChainPtr+8)/4];var webxrOptions=nextInChainPtr;opts.xrCompatible=!!(growMemViews(),HEAPU32)[(webxrOptions+16)/4]}}if(!("gpu"in navigator)){var sp=stackSave();var messagePtr=stringToUTF8OnStack("WebGPU not available on this browser (navigator.gpu is not available)");_emwgpuOnRequestAdapterCompleted(futureId,3,BigInt(adapterPtr),BigInt(messagePtr));stackRestore(sp);return}runtimeKeepalivePush();WebGPU.Internals.futureInsert(futureId,navigator.gpu.requestAdapter(opts).then(adapter=>{runtimeKeepalivePop();callUserCallback(()=>{if(adapter){WebGPU.Internals.jsObjectInsert(adapterPtr,adapter);_emwgpuOnRequestAdapterCompleted(futureId,1,BigInt(adapterPtr),0n)}else{var sp=stackSave();var messagePtr=stringToUTF8OnStack("WebGPU not available on this browser (requestAdapter returned null)");_emwgpuOnRequestAdapterCompleted(futureId,3,BigInt(adapterPtr),BigInt(messagePtr));stackRestore(sp)}})},ex=>{runtimeKeepalivePop();callUserCallback(()=>{var sp=stackSave();var messagePtr=stringToUTF8OnStack(ex.message);_emwgpuOnRequestAdapterCompleted(futureId,4,BigInt(adapterPtr),BigInt(messagePtr));stackRestore(sp)})}))}var _emwgpuQueueOnSubmittedWorkDone=function(queuePtr,futureId){queuePtr=bigintToI53Checked(queuePtr);futureId=bigintToI53Checked(futureId);var queue=WebGPU.getJsObject(queuePtr);runtimeKeepalivePush();WebGPU.Internals.futureInsert(futureId,queue.onSubmittedWorkDone().then(()=>{runtimeKeepalivePop();callUserCallback(()=>{_emwgpuOnWorkDoneCompleted(futureId,1)})}))};var _emwgpuWaitAny=function(futurePtr,futureCount,timeoutMSPtr){futurePtr=bigintToI53Checked(futurePtr);futureCount=bigintToI53Checked(futureCount);timeoutMSPtr=bigintToI53Checked(timeoutMSPtr);return Asyncify.handleAsync(async()=>{var promises=[];if(timeoutMSPtr){var timeoutMS=(growMemViews(),HEAP32)[timeoutMSPtr/4];promises.length=futureCount+1;promises[futureCount]=new Promise(resolve=>setTimeout(resolve,timeoutMS,0))}else{promises.length=futureCount}for(var i=0;i<futureCount;++i){var futureId=readI53FromI64(futurePtr+i*8);if(!(futureId in WebGPU.Internals.futures)){return futureId}promises[i]=WebGPU.Internals.futures[futureId]}const firstResolvedFuture=await Promise.race(promises);delete WebGPU.Internals.futures[firstResolvedFuture];return firstResolvedFuture})};_emwgpuWaitAny.isAsync=true;var ENV={};var getExecutableName=()=>thisProgram||"./this.program";var getEnvStrings=()=>{if(!getEnvStrings.strings){var lang=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8";var env={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:lang,_:getExecutableName()};for(var x in ENV){if(ENV[x]===undefined)delete env[x];else env[x]=ENV[x]}var strings=[];for(var x in env){strings.push(`${x}=${env[x]}`)}getEnvStrings.strings=strings}return getEnvStrings.strings};function _environ_get(__environ,environ_buf){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(14,0,1,__environ,environ_buf);__environ=bigintToI53Checked(__environ);environ_buf=bigintToI53Checked(environ_buf);var bufSize=0;var envp=0;for(var string of getEnvStrings()){var ptr=environ_buf+bufSize;(growMemViews(),HEAPU64)[(__environ+envp)/8]=BigInt(ptr);bufSize+=stringToUTF8(string,ptr,Infinity)+1;envp+=8}return 0}function _environ_sizes_get(penviron_count,penviron_buf_size){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(15,0,1,penviron_count,penviron_buf_size);penviron_count=bigintToI53Checked(penviron_count);penviron_buf_size=bigintToI53Checked(penviron_buf_size);var strings=getEnvStrings();(growMemViews(),HEAPU64)[penviron_count/8]=BigInt(strings.length);var bufSize=0;for(var string of strings){bufSize+=lengthBytesUTF8(string)+1}(growMemViews(),HEAPU64)[penviron_buf_size/8]=BigInt(bufSize);return 0}function _fd_close(fd){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(16,0,1,fd);try{var stream=SYSCALLS.getStreamFromFD(fd);FS.close(stream);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}var doReadv=(stream,iov,iovcnt,offset)=>{var ret=0;for(var i=0;i<iovcnt;i++){var ptr=Number((growMemViews(),HEAPU64)[iov/8]);var len=Number((growMemViews(),HEAPU64)[(iov+8)/8]);iov+=16;var curr=FS.read(stream,(growMemViews(),HEAP8),ptr,len,offset);if(curr<0)return-1;ret+=curr;if(curr<len)break;if(typeof offset!="undefined"){offset+=curr}}return ret};function _fd_read(fd,iov,iovcnt,pnum){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(17,0,1,fd,iov,iovcnt,pnum);iov=bigintToI53Checked(iov);iovcnt=bigintToI53Checked(iovcnt);pnum=bigintToI53Checked(pnum);try{var stream=SYSCALLS.getStreamFromFD(fd);var num=doReadv(stream,iov,iovcnt);(growMemViews(),HEAPU64)[pnum/8]=BigInt(num);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}function _fd_seek(fd,offset,whence,newOffset){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(18,0,1,fd,offset,whence,newOffset);offset=bigintToI53Checked(offset);newOffset=bigintToI53Checked(newOffset);try{if(isNaN(offset))return 61;var stream=SYSCALLS.getStreamFromFD(fd);FS.llseek(stream,offset,whence);(growMemViews(),HEAP64)[newOffset/8]=BigInt(stream.position);if(stream.getdents&&offset===0&&whence===0)stream.getdents=null;return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}var doWritev=(stream,iov,iovcnt,offset)=>{var ret=0;for(var i=0;i<iovcnt;i++){var ptr=Number((growMemViews(),HEAPU64)[iov/8]);var len=Number((growMemViews(),HEAPU64)[(iov+8)/8]);iov+=16;var curr=FS.write(stream,(growMemViews(),HEAP8),ptr,len,offset);if(curr<0)return-1;ret+=curr;if(curr<len){break}if(typeof offset!="undefined"){offset+=curr}}return ret};function _fd_write(fd,iov,iovcnt,pnum){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(19,0,1,fd,iov,iovcnt,pnum);iov=bigintToI53Checked(iov);iovcnt=bigintToI53Checked(iovcnt);pnum=bigintToI53Checked(pnum);try{var stream=SYSCALLS.getStreamFromFD(fd);var num=doWritev(stream,iov,iovcnt);(growMemViews(),HEAPU64)[pnum/8]=BigInt(num);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}function _random_get(buffer,size){buffer=bigintToI53Checked(buffer);size=bigintToI53Checked(size);try{randomFill((growMemViews(),HEAPU8).subarray(buffer,buffer+size));return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}function _wgpuAdapterGetInfo(adapterPtr,info){adapterPtr=bigintToI53Checked(adapterPtr);info=bigintToI53Checked(info);var adapter=WebGPU.getJsObject(adapterPtr);WebGPU.fillAdapterInfoStruct(adapter.info,info);return 1}function _wgpuAdapterGetLimits(adapterPtr,limitsOutPtr){adapterPtr=bigintToI53Checked(adapterPtr);limitsOutPtr=bigintToI53Checked(limitsOutPtr);var adapter=WebGPU.getJsObject(adapterPtr);WebGPU.fillLimitStruct(adapter.limits,limitsOutPtr);return 1}function _wgpuAdapterHasFeature(adapterPtr,featureEnumValue){adapterPtr=bigintToI53Checked(adapterPtr);var adapter=WebGPU.getJsObject(adapterPtr);return adapter.features.has(WebGPU.FeatureName[featureEnumValue])}var _wgpuBufferGetSize=function(bufferPtr){bufferPtr=bigintToI53Checked(bufferPtr);var ret=(()=>{var buffer=WebGPU.getJsObject(bufferPtr);return buffer.size})();return BigInt(ret)};var _wgpuCommandEncoderBeginComputePass=function(encoderPtr,descriptor){encoderPtr=bigintToI53Checked(encoderPtr);descriptor=bigintToI53Checked(descriptor);var ret=(()=>{var desc;if(descriptor){desc={label:WebGPU.makeStringFromOptionalStringView(descriptor+8),timestampWrites:WebGPU.makePassTimestampWrites(Number((growMemViews(),HEAPU64)[(descriptor+24)/8]))}}var commandEncoder=WebGPU.getJsObject(encoderPtr);var ptr=_emwgpuCreateComputePassEncoder(0n);WebGPU.Internals.jsObjectInsert(ptr,commandEncoder.beginComputePass(desc));return ptr})();return BigInt(ret)};function _wgpuCommandEncoderCopyBufferToBuffer(encoderPtr,srcPtr,srcOffset,dstPtr,dstOffset,size){encoderPtr=bigintToI53Checked(encoderPtr);srcPtr=bigintToI53Checked(srcPtr);srcOffset=bigintToI53Checked(srcOffset);dstPtr=bigintToI53Checked(dstPtr);dstOffset=bigintToI53Checked(dstOffset);size=bigintToI53Checked(size);var commandEncoder=WebGPU.getJsObject(encoderPtr);var src=WebGPU.getJsObject(srcPtr);var dst=WebGPU.getJsObject(dstPtr);commandEncoder.copyBufferToBuffer(src,srcOffset,dst,dstOffset,size)}var _wgpuCommandEncoderFinish=function(encoderPtr,descriptor){encoderPtr=bigintToI53Checked(encoderPtr);descriptor=bigintToI53Checked(descriptor);var ret=(()=>{var commandEncoder=WebGPU.getJsObject(encoderPtr);var ptr=_emwgpuCreateCommandBuffer(0n);WebGPU.Internals.jsObjectInsert(ptr,commandEncoder.finish());return ptr})();return BigInt(ret)};function _wgpuComputePassEncoderDispatchWorkgroups(passPtr,x,y,z){passPtr=bigintToI53Checked(passPtr);var pass=WebGPU.getJsObject(passPtr);pass.dispatchWorkgroups(x,y,z)}function _wgpuComputePassEncoderEnd(passPtr){passPtr=bigintToI53Checked(passPtr);var pass=WebGPU.getJsObject(passPtr);pass.end()}function _wgpuComputePassEncoderSetBindGroup(passPtr,groupIndex,groupPtr,dynamicOffsetCount,dynamicOffsetsPtr){passPtr=bigintToI53Checked(passPtr);groupPtr=bigintToI53Checked(groupPtr);dynamicOffsetCount=bigintToI53Checked(dynamicOffsetCount);dynamicOffsetsPtr=bigintToI53Checked(dynamicOffsetsPtr);var pass=WebGPU.getJsObject(passPtr);var group=WebGPU.getJsObject(groupPtr);if(dynamicOffsetCount==0){pass.setBindGroup(groupIndex,group)}else{pass.setBindGroup(groupIndex,group,(growMemViews(),HEAPU32),dynamicOffsetsPtr/4,dynamicOffsetCount)}}function _wgpuComputePassEncoderSetPipeline(passPtr,pipelinePtr){passPtr=bigintToI53Checked(passPtr);pipelinePtr=bigintToI53Checked(pipelinePtr);var pass=WebGPU.getJsObject(passPtr);var pipeline=WebGPU.getJsObject(pipelinePtr);pass.setPipeline(pipeline)}var _wgpuComputePipelineGetBindGroupLayout=function(pipelinePtr,groupIndex){pipelinePtr=bigintToI53Checked(pipelinePtr);var ret=(()=>{var pipeline=WebGPU.getJsObject(pipelinePtr);var ptr=_emwgpuCreateBindGroupLayout(0n);WebGPU.Internals.jsObjectInsert(ptr,pipeline.getBindGroupLayout(groupIndex));return ptr})();return BigInt(ret)};var _wgpuDeviceCreateBindGroup=function(devicePtr,descriptor){devicePtr=bigintToI53Checked(devicePtr);descriptor=bigintToI53Checked(descriptor);var ret=(()=>{function makeEntry(entryPtr){var bufferPtr=Number((growMemViews(),HEAPU64)[(entryPtr+16)/8]);var samplerPtr=Number((growMemViews(),HEAPU64)[(entryPtr+40)/8]);var textureViewPtr=Number((growMemViews(),HEAPU64)[(entryPtr+48)/8]);var externalTexturePtr=0;WebGPU.iterateExtensions(entryPtr,{327681:ptr=>{externalTexturePtr=Number((growMemViews(),HEAPU64)[(ptr+16)/8])}});var resource;if(bufferPtr){var size=readI53FromI64(entryPtr+32);if(size==-1)size=undefined;resource={buffer:WebGPU.getJsObject(bufferPtr),offset:readI53FromI64(entryPtr+24),size}}else{resource=WebGPU.getJsObject(samplerPtr||textureViewPtr||externalTexturePtr)}return{binding:(growMemViews(),HEAPU32)[(entryPtr+8)/4],resource}}function makeEntries(count,entriesPtrs){var entries=[];for(var i=0;i<count;++i){entries.push(makeEntry(entriesPtrs+56*i))}return entries}var desc={label:WebGPU.makeStringFromOptionalStringView(descriptor+8),layout:WebGPU.getJsObject(Number((growMemViews(),HEAPU64)[(descriptor+24)/8])),entries:makeEntries(Number((growMemViews(),HEAPU64)[(descriptor+32)/8]),Number((growMemViews(),HEAPU64)[(descriptor+40)/8]))};var device=WebGPU.getJsObject(devicePtr);var ptr=_emwgpuCreateBindGroup(0n);WebGPU.Internals.jsObjectInsert(ptr,device.createBindGroup(desc));return ptr})();return BigInt(ret)};var _wgpuDeviceCreateCommandEncoder=function(devicePtr,descriptor){devicePtr=bigintToI53Checked(devicePtr);descriptor=bigintToI53Checked(descriptor);var ret=(()=>{var desc;if(descriptor){desc={label:WebGPU.makeStringFromOptionalStringView(descriptor+8)}}var device=WebGPU.getJsObject(devicePtr);var ptr=_emwgpuCreateCommandEncoder(0n);WebGPU.Internals.jsObjectInsert(ptr,device.createCommandEncoder(desc));return ptr})();return BigInt(ret)};var _wgpuDeviceCreateComputePipeline=function(devicePtr,descriptor){devicePtr=bigintToI53Checked(devicePtr);descriptor=bigintToI53Checked(descriptor);var ret=(()=>{var desc=WebGPU.makeComputePipelineDesc(descriptor);var device=WebGPU.getJsObject(devicePtr);var ptr=_emwgpuCreateComputePipeline(0n);WebGPU.Internals.jsObjectInsert(ptr,device.createComputePipeline(desc));return ptr})();return BigInt(ret)};function _wgpuInstanceHasWGSLLanguageFeature(instance,featureEnumValue){instance=bigintToI53Checked(instance);if(!("wgslLanguageFeatures"in navigator.gpu)){return false}return navigator.gpu.wgslLanguageFeatures.has(WebGPU.WGSLLanguageFeatureName[featureEnumValue])}var _wgpuQueueSubmit=function(queuePtr,commandCount,commands){queuePtr=bigintToI53Checked(queuePtr);commandCount=bigintToI53Checked(commandCount);commands=bigintToI53Checked(commands);var queue=WebGPU.getJsObject(queuePtr);var cmds=Array.from((growMemViews(),HEAP64).subarray(commands/8,(commands+commandCount*8)/8),id=>WebGPU.getJsObject(id));queue.submit(cmds)};function _wgpuQueueWriteBuffer(queuePtr,bufferPtr,bufferOffset,data,size){queuePtr=bigintToI53Checked(queuePtr);bufferPtr=bigintToI53Checked(bufferPtr);bufferOffset=bigintToI53Checked(bufferOffset);data=bigintToI53Checked(data);size=bigintToI53Checked(size);var queue=WebGPU.getJsObject(queuePtr);var buffer=WebGPU.getJsObject(bufferPtr);var subarray=(growMemViews(),HEAPU8).subarray(data,data+size);queue.writeBuffer(buffer,bufferOffset,subarray,0,size)}var Asyncify={instrumentWasmImports(imports){var importPattern=/^(invoke_.*|__asyncjs__.*)$/;for(let[x,original]of Object.entries(imports)){if(typeof original=="function"){let isAsyncifyImport=original.isAsync||importPattern.test(x);if(isAsyncifyImport){imports[x]=original=new WebAssembly.Suspending(original)}}}},instrumentFunction(original){var wrapper=(...args)=>original(...args);return wrapper},instrumentWasmExports(exports){var exportPattern=/^(wllama_start|wllama_action|main|__main_argc_argv)$/;Asyncify.asyncExports=new Set;var ret={};for(let[x,original]of Object.entries(exports)){if(typeof original=="function"){let isAsyncifyExport=exportPattern.test(x);if(isAsyncifyExport){Asyncify.asyncExports.add(original);original=Asyncify.makeAsyncFunction(original)}var wrapper=Asyncify.instrumentFunction(original);ret[x]=wrapper}else{ret[x]=original}}return ret},asyncExports:null,isAsyncExport(func){return Asyncify.asyncExports?.has(func)},handleAsync:async startAsync=>{runtimeKeepalivePush();try{return await startAsync()}finally{runtimeKeepalivePop()}},handleSleep:startAsync=>Asyncify.handleAsync(()=>new Promise(startAsync)),makeAsyncFunction(original){return WebAssembly.promising(original)}};var getCFunc=ident=>{var func=Module["_"+ident];return func};var writeArrayToMemory=(array,buffer)=>{(growMemViews(),HEAP8).set(array,buffer)};var ccall=(ident,returnType,argTypes,args,opts)=>{var toC={pointer:p=>BigInt(p),string:str=>{var ret=0;if(str!==null&&str!==undefined&&str!==0){ret=stringToUTF8OnStack(str)}return BigInt(ret)},array:arr=>{var ret=stackAlloc(arr.length);writeArrayToMemory(arr,ret);return BigInt(ret)}};function convertReturnValue(ret){if(returnType==="string"){return UTF8ToString(Number(ret))}if(returnType==="pointer")return Number(ret);if(returnType==="boolean")return Boolean(ret);return ret}var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var ret=func(...cArgs);function onDone(ret){if(stack!==0)stackRestore(stack);return convertReturnValue(ret)}var asyncMode=opts?.async;if(asyncMode)return ret.then(onDone);ret=onDone(ret);return ret};var cwrap=(ident,returnType,argTypes,opts)=>{var numericArgs=!argTypes||argTypes.every(type=>type==="number"||type==="boolean");var numericRet=returnType!=="string";if(numericRet&&numericArgs&&!opts){return getCFunc(ident)}return(...args)=>ccall(ident,returnType,argTypes,args,opts)};var FS_createPath=(...args)=>FS.createPath(...args);var FS_unlink=(...args)=>FS.unlink(...args);var FS_createLazyFile=(...args)=>FS.createLazyFile(...args);var FS_createDevice=(...args)=>FS.createDevice(...args);PThread.init();FS.createPreloadedFile=FS_createPreloadedFile;FS.preloadFile=FS_preloadFile;FS.staticInit();{initMemory();if(Module["noExitRuntime"])noExitRuntime=Module["noExitRuntime"];if(Module["preloadPlugins"])preloadPlugins=Module["preloadPlugins"];if(Module["print"])out=Module["print"];if(Module["printErr"])err=Module["printErr"];if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].shift()()}}}Module["ENV"]=ENV;Module["mmapAlloc"]=mmapAlloc;Module["wasmMemory"]=wasmMemory;Module["addRunDependency"]=addRunDependency;Module["removeRunDependency"]=removeRunDependency;Module["ccall"]=ccall;Module["cwrap"]=cwrap;Module["FS_preloadFile"]=FS_preloadFile;Module["FS_unlink"]=FS_unlink;Module["FS_createPath"]=FS_createPath;Module["FS_createDevice"]=FS_createDevice;Module["FS"]=FS;Module["FS_createDataFile"]=FS_createDataFile;Module["FS_createLazyFile"]=FS_createLazyFile;Module["MEMFS"]=MEMFS;var proxiedFunctionTable=[_proc_exit,exitOnMainThread,pthreadCreateProxied,___syscall_fcntl64,___syscall_fstat64,___syscall_getcwd,___syscall_getdents64,___syscall_ioctl,___syscall_lstat64,___syscall_newfstatat,___syscall_openat,___syscall_stat64,__mmap_js,__munmap_js,_environ_get,_environ_sizes_get,_fd_close,_fd_read,_fd_seek,_fd_write];function __asyncjs__js_file_read(path_ptr,offset,req_size,out_ptr){return Asyncify.handleAsync(async()=>await _wllama_js_file_read(UTF8ToString(Number(path_ptr)),Number(offset),Number(req_size),Number(out_ptr)))}__asyncjs__js_file_read.sig="jjjjj";var _malloc,_free,_wllama_malloc,_wllama_start,_wllama_action,_wllama_exit,_wllama_debug,_main,_emwgpuCreateBindGroup,_emwgpuCreateBindGroupLayout,_emwgpuCreateCommandBuffer,_emwgpuCreateCommandEncoder,_emwgpuCreateComputePassEncoder,_emwgpuCreateComputePipeline,_emwgpuCreateExternalTexture,_emwgpuCreatePipelineLayout,_emwgpuCreateQuerySet,_emwgpuCreateRenderBundle,_emwgpuCreateRenderBundleEncoder,_emwgpuCreateRenderPassEncoder,_emwgpuCreateRenderPipeline,_emwgpuCreateSampler,_emwgpuCreateSurface,_emwgpuCreateTexture,_emwgpuCreateTextureView,_emwgpuCreateAdapter,_emwgpuCreateBuffer,_emwgpuCreateDevice,_emwgpuCreateQueue,_emwgpuCreateShaderModule,_emwgpuOnDeviceLostCompleted,_emwgpuOnMapAsyncCompleted,_emwgpuOnRequestAdapterCompleted,_emwgpuOnRequestDeviceCompleted,_emwgpuOnWorkDoneCompleted,_emwgpuOnUncapturedError,__emscripten_tls_init,_pthread_self,_emscripten_builtin_memalign,__emscripten_thread_init,__emscripten_thread_crashed,__emscripten_run_js_on_main_thread,__emscripten_thread_free_data,__emscripten_thread_exit,__emscripten_check_mailbox,_memalign,___trap,_emscripten_stack_set_limits,__emscripten_stack_restore,__emscripten_stack_alloc,_emscripten_stack_get_current,__indirect_function_table,wasmTable;function assignWasmExports(wasmExports){_malloc=wasmExports["malloc"];_free=wasmExports["free"];_wllama_malloc=Module["_wllama_malloc"]=wasmExports["wllama_malloc"];_wllama_start=Module["_wllama_start"]=wasmExports["wllama_start"];_wllama_action=Module["_wllama_action"]=wasmExports["wllama_action"];_wllama_exit=Module["_wllama_exit"]=wasmExports["wllama_exit"];_wllama_debug=Module["_wllama_debug"]=wasmExports["wllama_debug"];_main=Module["_main"]=wasmExports["main"];_emwgpuCreateBindGroup=wasmExports["emwgpuCreateBindGroup"];_emwgpuCreateBindGroupLayout=wasmExports["emwgpuCreateBindGroupLayout"];_emwgpuCreateCommandBuffer=wasmExports["emwgpuCreateCommandBuffer"];_emwgpuCreateCommandEncoder=wasmExports["emwgpuCreateCommandEncoder"];_emwgpuCreateComputePassEncoder=wasmExports["emwgpuCreateComputePassEncoder"];_emwgpuCreateComputePipeline=wasmExports["emwgpuCreateComputePipeline"];_emwgpuCreateExternalTexture=wasmExports["emwgpuCreateExternalTexture"];_emwgpuCreatePipelineLayout=wasmExports["emwgpuCreatePipelineLayout"];_emwgpuCreateQuerySet=wasmExports["emwgpuCreateQuerySet"];_emwgpuCreateRenderBundle=wasmExports["emwgpuCreateRenderBundle"];_emwgpuCreateRenderBundleEncoder=wasmExports["emwgpuCreateRenderBundleEncoder"];_emwgpuCreateRenderPassEncoder=wasmExports["emwgpuCreateRenderPassEncoder"];_emwgpuCreateRenderPipeline=wasmExports["emwgpuCreateRenderPipeline"];_emwgpuCreateSampler=wasmExports["emwgpuCreateSampler"];_emwgpuCreateSurface=wasmExports["emwgpuCreateSurface"];_emwgpuCreateTexture=wasmExports["emwgpuCreateTexture"];_emwgpuCreateTextureView=wasmExports["emwgpuCreateTextureView"];_emwgpuCreateAdapter=wasmExports["emwgpuCreateAdapter"];_emwgpuCreateBuffer=wasmExports["emwgpuCreateBuffer"];_emwgpuCreateDevice=wasmExports["emwgpuCreateDevice"];_emwgpuCreateQueue=wasmExports["emwgpuCreateQueue"];_emwgpuCreateShaderModule=wasmExports["emwgpuCreateShaderModule"];_emwgpuOnDeviceLostCompleted=wasmExports["emwgpuOnDeviceLostCompleted"];_emwgpuOnMapAsyncCompleted=wasmExports["emwgpuOnMapAsyncCompleted"];_emwgpuOnRequestAdapterCompleted=wasmExports["emwgpuOnRequestAdapterCompleted"];_emwgpuOnRequestDeviceCompleted=wasmExports["emwgpuOnRequestDeviceCompleted"];_emwgpuOnWorkDoneCompleted=wasmExports["emwgpuOnWorkDoneCompleted"];_emwgpuOnUncapturedError=wasmExports["emwgpuOnUncapturedError"];__emscripten_tls_init=wasmExports["_emscripten_tls_init"];_pthread_self=wasmExports["pthread_self"];_emscripten_builtin_memalign=wasmExports["emscripten_builtin_memalign"];__emscripten_thread_init=wasmExports["_emscripten_thread_init"];__emscripten_thread_crashed=wasmExports["_emscripten_thread_crashed"];__emscripten_run_js_on_main_thread=wasmExports["_emscripten_run_js_on_main_thread"];__emscripten_thread_free_data=wasmExports["_emscripten_thread_free_data"];__emscripten_thread_exit=wasmExports["_emscripten_thread_exit"];__emscripten_check_mailbox=wasmExports["_emscripten_check_mailbox"];_memalign=wasmExports["memalign"];___trap=wasmExports["__trap"];_emscripten_stack_set_limits=wasmExports["emscripten_stack_set_limits"];__emscripten_stack_restore=wasmExports["_emscripten_stack_restore"];__emscripten_stack_alloc=wasmExports["_emscripten_stack_alloc"];_emscripten_stack_get_current=wasmExports["emscripten_stack_get_current"];__indirect_function_table=wasmTable=wasmExports["__indirect_function_table"]}var wasmImports;function assignWasmImports(){wasmImports={__asyncjs__js_file_read,__pthread_create_js:___pthread_create_js,__syscall_fcntl64:___syscall_fcntl64,__syscall_getcwd:___syscall_getcwd,__syscall_getdents64:___syscall_getdents64,__syscall_ioctl:___syscall_ioctl,__syscall_openat:___syscall_openat,__syscall_stat64:___syscall_stat64,_abort_js:__abort_js,_emscripten_init_main_thread_js:__emscripten_init_main_thread_js,_emscripten_notify_mailbox_postmessage:__emscripten_notify_mailbox_postmessage,_emscripten_receive_on_main_thread_js:__emscripten_receive_on_main_thread_js,_emscripten_thread_cleanup:__emscripten_thread_cleanup,_emscripten_thread_mailbox_await:__emscripten_thread_mailbox_await,_emscripten_thread_set_strongref:__emscripten_thread_set_strongref,_localtime_js:__localtime_js,_mmap_js:__mmap_js,_munmap_js:__munmap_js,_tzset_js:__tzset_js,clock_time_get:_clock_time_get,emscripten_check_blocking_allowed:_emscripten_check_blocking_allowed,emscripten_date_now:_emscripten_date_now,emscripten_exit_with_live_runtime:_emscripten_exit_with_live_runtime,emscripten_get_callstack:_emscripten_get_callstack,emscripten_get_heap_max:_emscripten_get_heap_max,emscripten_get_now:_emscripten_get_now,emscripten_has_asyncify:_emscripten_has_asyncify,emscripten_num_logical_cores:_emscripten_num_logical_cores,emscripten_resize_heap:_emscripten_resize_heap,emwgpuAdapterRequestDevice:_emwgpuAdapterRequestDevice,emwgpuBufferDestroy:_emwgpuBufferDestroy,emwgpuBufferGetConstMappedRange:_emwgpuBufferGetConstMappedRange,emwgpuBufferMapAsync:_emwgpuBufferMapAsync,emwgpuBufferUnmap:_emwgpuBufferUnmap,emwgpuDelete:_emwgpuDelete,emwgpuDeviceCreateBuffer:_emwgpuDeviceCreateBuffer,emwgpuDeviceCreateShaderModule:_emwgpuDeviceCreateShaderModule,emwgpuDeviceDestroy:_emwgpuDeviceDestroy,emwgpuInstanceRequestAdapter:_emwgpuInstanceRequestAdapter,emwgpuQueueOnSubmittedWorkDone:_emwgpuQueueOnSubmittedWorkDone,emwgpuWaitAny:_emwgpuWaitAny,environ_get:_environ_get,environ_sizes_get:_environ_sizes_get,exit:_exit,fd_close:_fd_close,fd_read:_fd_read,fd_seek:_fd_seek,fd_write:_fd_write,memory:wasmMemory,random_get:_random_get,wgpuAdapterGetInfo:_wgpuAdapterGetInfo,wgpuAdapterGetLimits:_wgpuAdapterGetLimits,wgpuAdapterHasFeature:_wgpuAdapterHasFeature,wgpuBufferGetSize:_wgpuBufferGetSize,wgpuCommandEncoderBeginComputePass:_wgpuCommandEncoderBeginComputePass,wgpuCommandEncoderCopyBufferToBuffer:_wgpuCommandEncoderCopyBufferToBuffer,wgpuCommandEncoderFinish:_wgpuCommandEncoderFinish,wgpuComputePassEncoderDispatchWorkgroups:_wgpuComputePassEncoderDispatchWorkgroups,wgpuComputePassEncoderEnd:_wgpuComputePassEncoderEnd,wgpuComputePassEncoderSetBindGroup:_wgpuComputePassEncoderSetBindGroup,wgpuComputePassEncoderSetPipeline:_wgpuComputePassEncoderSetPipeline,wgpuComputePipelineGetBindGroupLayout:_wgpuComputePipelineGetBindGroupLayout,wgpuDeviceCreateBindGroup:_wgpuDeviceCreateBindGroup,wgpuDeviceCreateCommandEncoder:_wgpuDeviceCreateCommandEncoder,wgpuDeviceCreateComputePipeline:_wgpuDeviceCreateComputePipeline,wgpuInstanceHasWGSLLanguageFeature:_wgpuInstanceHasWGSLLanguageFeature,wgpuQueueSubmit:_wgpuQueueSubmit,wgpuQueueWriteBuffer:_wgpuQueueWriteBuffer}}function applySignatureConversions(wasmExports){wasmExports=Object.assign({},wasmExports);var makeWrapper_pp=f=>a0=>Number(f(BigInt(a0)));var makeWrapper__p=f=>a0=>f(BigInt(a0));var makeWrapper___PP=f=>(a0,a1,a2)=>f(a0,BigInt(a1?a1:0),BigInt(a2?a2:0));var makeWrapper_p=f=>()=>Number(f());var makeWrapper_ppp=f=>(a0,a1)=>Number(f(BigInt(a0),BigInt(a1)));var makeWrapper__p_____=f=>(a0,a1,a2,a3,a4,a5)=>f(BigInt(a0),a1,a2,a3,a4,a5);var makeWrapper___p_p_=f=>(a0,a1,a2,a3,a4)=>f(a0,BigInt(a1),a2,BigInt(a3),a4);var makeWrapper__pp=f=>(a0,a1)=>f(BigInt(a0),BigInt(a1));wasmExports["malloc"]=makeWrapper_pp(wasmExports["malloc"]);wasmExports["free"]=makeWrapper__p(wasmExports["free"]);wasmExports["main"]=makeWrapper___PP(wasmExports["main"]);wasmExports["pthread_self"]=makeWrapper_p(wasmExports["pthread_self"]);wasmExports["emscripten_builtin_memalign"]=makeWrapper_ppp(wasmExports["emscripten_builtin_memalign"]);wasmExports["_emscripten_thread_init"]=makeWrapper__p_____(wasmExports["_emscripten_thread_init"]);wasmExports["_emscripten_run_js_on_main_thread"]=makeWrapper___p_p_(wasmExports["_emscripten_run_js_on_main_thread"]);wasmExports["_emscripten_thread_free_data"]=makeWrapper__p(wasmExports["_emscripten_thread_free_data"]);wasmExports["_emscripten_thread_exit"]=makeWrapper__p(wasmExports["_emscripten_thread_exit"]);wasmExports["memalign"]=makeWrapper_ppp(wasmExports["memalign"]);wasmExports["emscripten_stack_set_limits"]=makeWrapper__pp(wasmExports["emscripten_stack_set_limits"]);wasmExports["_emscripten_stack_restore"]=makeWrapper__p(wasmExports["_emscripten_stack_restore"]);wasmExports["_emscripten_stack_alloc"]=makeWrapper_pp(wasmExports["_emscripten_stack_alloc"]);wasmExports["emscripten_stack_get_current"]=makeWrapper_p(wasmExports["emscripten_stack_get_current"]);return wasmExports}async function callMain(){var entryFunction=_main;var argc=0;var argv=0;try{var ret=entryFunction(argc,BigInt(argv));ret=await ret;exitJS(ret,true);return ret}catch(e){return handleException(e)}}function run(){if(runDependencies>0){dependenciesFulfilled=run;return}if(ENVIRONMENT_IS_PTHREAD){initRuntime();return}preRun();if(runDependencies>0){dependenciesFulfilled=run;return}async function doRun(){Module["calledRun"]=true;if(ABORT)return;initRuntime();preMain();Module["onRuntimeInitialized"]?.();var noInitialRun=Module["noInitialRun"]||false;if(!noInitialRun)await callMain();postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(()=>{setTimeout(()=>Module["setStatus"](""),1);doRun()},1)}else{doRun()}}var wasmExports;if(!ENVIRONMENT_IS_PTHREAD){createWasm();run()}\n';

// src/worker.ts
var FILE_READ_REQ_EVENT = "fs.read_req";
var JSPI_STUB = `
if (!WebAssembly.Suspending) {
  // JSPI not available - stubs that keep the import/export tables valid.
  // Suspending wraps imports: identity is fine since async imports won't be called.
  WebAssembly.Suspending = function (fn) {
    // console.log(fn.toString());
    return fn;
  };
  // promising wraps exports: must return a Promise so ccall's ret.then() works.
  WebAssembly.promising = function (fn) {
    return function (...args) {
      try {
        return Promise.resolve(fn(...args));
      } catch (e) {
        return Promise.reject(e);
      }
    };
  };
}
`;
var ProxyToWorker = class {
  // filename -> Blob for async reads
  constructor(resources, nbThread, suppressNativeLog, logger) {
    __publicField(this, "resources");
    __publicField(this, "logger");
    __publicField(this, "suppressNativeLog");
    __publicField(this, "taskQueue", []);
    __publicField(this, "taskId", 1);
    __publicField(this, "resultQueue", []);
    __publicField(this, "busy", false);
    // is the work loop is running?
    __publicField(this, "worker");
    __publicField(this, "multiThread");
    __publicField(this, "nbThread");
    __publicField(this, "useAsyncFile");
    __publicField(this, "fileBlobs", /* @__PURE__ */ new Map());
    this.resources = resources;
    this.nbThread = nbThread;
    this.multiThread = nbThread > 0;
    this.logger = logger;
    this.suppressNativeLog = suppressNativeLog;
    this.useAsyncFile = canUseAsyncFileRead(resources.compat);
  }
  getModuleCode() {
    return __async(this, null, function* () {
      if (!this.resources.jsPath) {
        if (this.resources.compat) {
          throw new Error(
            "compat mode is enabled but no jsPath was provided. Pass a worker JS via setCompat() or install @wllama/wllama-compat."
          );
        }
        return WLLAMA_EMSCRIPTEN_CODE;
      } else if (this.resources.jsPath.code) {
        return this.resources.jsPath.code;
      } else if (isString(this.resources.jsPath)) {
        const response = yield fetch(this.resources.jsPath);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch worker code from ${this.resources.jsPath}`
          );
        }
        return yield response.text();
      } else {
        throw new Error("No JS code provided for worker");
      }
    });
  }
  moduleInit(ggufFiles) {
    return __async(this, null, function* () {
      let moduleCode = JSPI_STUB + (yield this.getModuleCode());
      if (this.resources.noWebGPU) {
        moduleCode = 'try{Object.defineProperty(WorkerNavigator.prototype,"gpu",{get:()=>({requestAdapter:async()=>null})});}catch(e){}' + moduleCode;
      }
      let mainModuleCode = moduleCode.replace("var Module", "var ___Module");
      const runOptions = {
        pathConfig: {
          "wllama.wasm": this.resources.wasmPath
        },
        nbThread: this.nbThread,
        compat: this.resources.compat
      };
      const completeCode = [
        `const RUN_OPTIONS = ${JSON.stringify(runOptions)};`,
        `function wModuleInit() { ${mainModuleCode}; return Module; }`,
        LLAMA_CPP_WORKER_CODE
      ].join(";\n\n");
      this.worker = createWorker(completeCode);
      this.worker.onmessage = this.onRecvMsg.bind(this);
      this.worker.onerror = this.logger.error;
      const res = yield this.pushTask({
        verb: "module.init",
        args: [
          new Blob([moduleCode], { type: "text/javascript" }),
          this.useAsyncFile
        ],
        callbackId: this.taskId++
      });
      const nativeFiles = [];
      for (const file of ggufFiles) {
        const needAllocBuffer = !this.useAsyncFile;
        const id = yield this.fileAlloc(
          file.name,
          file.blob.size,
          needAllocBuffer
        );
        nativeFiles.push(__spreadValues({ id }, file));
        if (this.useAsyncFile) {
          this.fileBlobs.set(file.name, file.blob);
        }
      }
      if (!this.useAsyncFile) {
        yield Promise.all(
          nativeFiles.map((file) => {
            return this.fileWrite(file.id, file.blob);
          })
        );
      }
      return res;
    });
  }
  wllamaStart() {
    return __async(this, null, function* () {
      const result = yield this.pushTask({
        verb: "wllama.start",
        args: [],
        callbackId: this.taskId++
      });
      const parsedResult = this.parseResult(result);
      return parsedResult;
    });
  }
  wllamaAction(name, body) {
    return __async(this, null, function* () {
      const encodedMsg = glueSerialize(body);
      const result = yield this.pushTask({
        verb: "wllama.action",
        args: [name, encodedMsg],
        callbackId: this.taskId++
      });
      const parsedResult = glueDeserialize(result);
      return parsedResult;
    });
  }
  wllamaExit() {
    return __async(this, null, function* () {
      if (this.worker) {
        this.worker.terminate();
      }
    });
  }
  wllamaDebug() {
    return __async(this, null, function* () {
      const result = yield this.pushTask({
        verb: "wllama.debug",
        args: [],
        callbackId: this.taskId++
      });
      return JSON.parse(result);
    });
  }
  ///////////////////////////////////////
  /**
   * Allocate a new file in heapfs
   * @returns fileId, to be used by fileWrite()
   */
  fileAlloc(fileName, size, allocBuffer) {
    return __async(this, null, function* () {
      const result = yield this.pushTask({
        verb: "fs.alloc",
        args: [fileName, size, allocBuffer],
        callbackId: this.taskId++
      });
      return result.fileId;
    });
  }
  /**
   * Write a Blob to heapfs
   */
  fileWrite(fileId, blob) {
    return __async(this, null, function* () {
      const reader = blob.stream().getReader();
      let offset = 0;
      while (true) {
        const { done, value } = yield reader.read();
        if (done) break;
        const size = value.byteLength;
        yield this.pushTask(
          {
            verb: "fs.write",
            args: [fileId, value, offset],
            callbackId: this.taskId++
          },
          // @ts-ignore Type 'ArrayBufferLike' is not assignable to type 'ArrayBuffer'
          [value.buffer]
        );
        offset += size;
      }
    });
  }
  fileReadResponse(name, offset, size) {
    return __async(this, null, function* () {
      var _a;
      try {
        const blob = this.fileBlobs.get(name);
        if (!blob) {
          throw new Error(`blob not found for name="${name}"`);
        }
        const chunk = blob.slice(offset, offset + size);
        const buffer = yield chunk.arrayBuffer();
        this.worker.postMessage(
          { verb: "fs.read_res", args: [buffer] },
          { transfer: [buffer] }
        );
      } catch (err) {
        this.logger.error("fileReadResponse failed, terminating worker:", err);
        (_a = this.worker) == null ? void 0 : _a.terminate();
        this.worker = void 0;
        this.abort(`File read failed: ${err}`, err.stack || "");
      }
    });
  }
  /**
   * Parse JSON result returned by cpp code.
   * Throw new Error if "__exception" is present in the response
   *
   * TODO: get rid of this function once everything is migrated to Glue
   */
  parseResult(result) {
    const parsedResult = JSON.parse(result);
    if (parsedResult && parsedResult["error"]) {
      throw new WllamaRuntimeError("Unknown error, please see console.log", "");
    }
    return parsedResult;
  }
  /**
   * Push a new task to taskQueue
   */
  pushTask(param, buffers) {
    return new Promise((resolve, reject) => {
      this.taskQueue.push({ resolve, reject, param, buffers });
      this.runTaskLoop();
    });
  }
  /**
   * Main loop for processing tasks
   */
  runTaskLoop() {
    return __async(this, null, function* () {
      var _a;
      if (this.busy) {
        return;
      }
      this.busy = true;
      while (true) {
        const task = this.taskQueue.shift();
        if (!task) break;
        this.resultQueue.push(task);
        this.worker.postMessage(
          task.param,
          isSafariMobile() ? void 0 : {
            transfer: (_a = task.buffers) != null ? _a : []
          }
        );
      }
      this.busy = false;
    });
  }
  /**
   * Handle messages from worker
   */
  onRecvMsg(e) {
    if (!e.data) return;
    const { verb, args } = e.data;
    const isCompatBuild = this.resources.compat;
    if (verb && verb.startsWith("console.")) {
      if (this.suppressNativeLog) {
        return;
      }
      if (verb.endsWith("debug")) this.logger.debug(...args);
      if (verb.endsWith("log")) this.logger.log(...args);
      if (verb.endsWith("warn")) this.logger.warn(...args);
      if (verb.endsWith("error")) this.logger.error(...args);
      return;
    } else if (verb === "signal.abort") {
      const [signalType, message, rawStack, originalErr] = args;
      if (originalErr) {
        this.logger.error(originalErr);
      }
      (() => __async(this, null, function* () {
        let stack = "";
        let newMsg = message.replace(
          "Build with -sASSERTIONS for more info.",
          ""
        );
        if (signalType === "abort") {
          newMsg = `(ABORT) ${newMsg}`;
          stack = rawStack.replace(/\|/g, "\n");
        } else if (signalType === "exception") {
          stack = rawStack;
        }
        const decoded = yield Debug.decodeStackTrace(stack, isCompatBuild);
        this.logger.error(`Stack trace (${signalType}):
` + decoded);
        this.abort(newMsg, decoded);
      }))();
      return;
    }
    if (verb === FILE_READ_REQ_EVENT) {
      const [name, offset, size] = args;
      this.fileReadResponse(name, offset, size).catch(() => {
      });
      return;
    }
    const { callbackId, result, err } = e.data;
    if (callbackId) {
      const idx = this.resultQueue.findIndex(
        (t) => t.param.callbackId === callbackId
      );
      if (idx !== -1) {
        const waitingTask = this.resultQueue.splice(idx, 1)[0];
        if (err) waitingTask.reject(err);
        else waitingTask.resolve(result);
      } else {
        this.logger.error(
          `Cannot find waiting task with callbackId = ${callbackId}`
        );
      }
    }
  }
  abort(text, stack) {
    const error = new WllamaRuntimeError(
      text.length == 0 ? "(unknown error)" : text,
      stack
    );
    while (this.resultQueue.length > 0) {
      const waitingTask = this.resultQueue.pop();
      if (!waitingTask) break;
      waitingTask.reject(error);
    }
    while (this.taskQueue.length > 0) {
      const pendingTask = this.taskQueue.pop();
      if (!pendingTask) break;
      pendingTask.reject(error);
    }
  }
};

// src/huggingface.ts
var HF_BASE = "https://huggingface.co";
var DEFAULT_QUANTS = ["Q4_K_M", "Q8_0"];
function fetchRepoFiles(repo, token) {
  return __async(this, null, function* () {
    var _a;
    const url = `${HF_BASE}/api/models/${repo}/tree/main?recursive=true`;
    const headers = { Accept: "application/json" };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    const res = yield fetch(url, { headers });
    if (!res.ok) {
      let msg = res.statusText;
      try {
        msg = (_a = (yield res.json()).error) != null ? _a : msg;
      } catch (e) {
      }
      throw new Error(`HF API error (${res.status}): ${msg}`);
    }
    return res.json();
  });
}
function firstShardPath(files, path) {
  const m = path.match(/^(.+)-(\d{5})-of-(\d{5})\.gguf$/i);
  if (!m) return path;
  const first = `${m[1]}-00001-of-${m[3]}.gguf`;
  return files.some((f) => f.path === first) ? first : path;
}
function selectFile(files, quant, mmprojOnly) {
  const candidates = files.filter((f) => {
    if (f.type !== "file" || !f.path.toLowerCase().endsWith(".gguf"))
      return false;
    const ismmproj = f.path.toLowerCase().includes("mmproj");
    return mmprojOnly ? ismmproj : !ismmproj;
  });
  if (candidates.length === 0) return null;
  if (quant) {
    const upper = quant.toUpperCase();
    const match = candidates.find((f) => f.path.toUpperCase().includes(upper));
    if (match) return firstShardPath(candidates, match.path);
    return null;
  }
  for (const q of DEFAULT_QUANTS) {
    const match = candidates.find((f) => f.path.toUpperCase().includes(q));
    if (match) return firstShardPath(candidates, match.path);
  }
  return firstShardPath(candidates, candidates[0].path);
}
function getHFModelSource(config) {
  return __async(this, null, function* () {
    const { repo, file, quant, mmprojFile, mmprojQuant, hfToken } = config;
    const files = yield fetchRepoFiles(repo, hfToken);
    const modelPath = file != null ? file : selectFile(files, quant, false);
    if (!modelPath) {
      throw new Error(`No GGUF file found in repo "${repo}"`);
    }
    const source = {
      url: `${HF_BASE}/${repo}/resolve/main/${modelPath}`
    };
    if (mmprojFile || mmprojQuant !== void 0) {
      const mmpath = mmprojFile != null ? mmprojFile : selectFile(files, mmprojQuant, true);
      if (mmpath) {
        source.mmprojUrl = `${HF_BASE}/${repo}/resolve/main/${mmpath}`;
      }
    }
    if (hfToken) {
      const params = new URLSearchParams({ token: hfToken });
      source.url += `?${params}`;
      if (source.mmprojUrl) {
        source.mmprojUrl += `?${params}`;
      }
    }
    return source;
  });
}
function getHFFileSHA256(url, headers) {
  return __async(this, null, function* () {
    if (!url.includes("/resolve/")) return void 0;
    const rawUrl = url.replace("/resolve/", "/raw/");
    try {
      const text = yield fetch(rawUrl, { headers }).then((r) => r.text());
      const match = text.match(/^oid sha256:([0-9a-f]{64})$/m);
      return match ? match[1] : void 0;
    } catch (e) {
      return void 0;
    }
  });
}

// src/storage/opfs.ts
var OPFSBackend = class {
  isSupported() {
    var _a;
    return typeof navigator !== "undefined" && "storage" in navigator && !!((_a = navigator.storage) == null ? void 0 : _a.getDirectory);
  }
  read(key) {
    return __async(this, null, function* () {
      try {
        const cacheDir = yield getCacheDir();
        const fileHandle = yield cacheDir.getFileHandle(key);
        return yield fileHandle.getFile();
      } catch (e) {
        return null;
      }
    });
  }
  write(key, stream) {
    return __async(this, null, function* () {
      const writable = yield openWritable(key);
      yield writable.truncate(0);
      const reader = stream.getReader();
      try {
        while (true) {
          const { done, value } = yield reader.read();
          if (done) break;
          yield writable.write(value);
        }
      } finally {
        yield writable.close();
      }
    });
  }
  getSize(key) {
    return __async(this, null, function* () {
      try {
        const cacheDir = yield getCacheDir();
        const fileHandle = yield cacheDir.getFileHandle(key);
        const file = yield fileHandle.getFile();
        return file.size;
      } catch (e) {
        return -1;
      }
    });
  }
  list() {
    return __async(this, null, function* () {
      const cacheDir = yield getCacheDir();
      const result = [];
      try {
        for (var iter = __forAwait(cacheDir.entries()), more, temp, error; more = !(temp = yield iter.next()).done; more = false) {
          const [name, handle] = temp.value;
          if (handle.kind === "file") {
            const file = yield handle.getFile();
            result.push({ key: name, size: file.size });
          }
        }
      } catch (temp) {
        error = [temp];
      } finally {
        try {
          more && (temp = iter.return) && (yield temp.call(iter));
        } finally {
          if (error)
            throw error[0];
        }
      }
      return result;
    });
  }
  delete(key) {
    return __async(this, null, function* () {
      try {
        const cacheDir = yield getCacheDir();
        yield cacheDir.removeEntry(key);
      } catch (e) {
        if ((e == null ? void 0 : e.name) !== "NotFoundError") throw e;
      }
    });
  }
};
function getCacheDir() {
  return __async(this, null, function* () {
    const opfsRoot = yield navigator.storage.getDirectory();
    return opfsRoot.getDirectoryHandle("cache", { create: true });
  });
}
function openWritable(fileName) {
  return __async(this, null, function* () {
    const worker = createWorker(OPFS_UTILS_WORKER_CODE);
    let pResolve;
    let pReject;
    worker.onmessage = (e) => {
      if (e.data.ok) pResolve(null);
      else if (e.data.err) pReject(e.data.err);
    };
    worker.onerror = (e) => {
      var _a;
      return pReject == null ? void 0 : pReject((_a = e.message) != null ? _a : e);
    };
    const workerExec = (data) => new Promise((resolve, reject) => {
      pResolve = resolve;
      pReject = reject;
      worker.postMessage(
        data,
        isSafariMobile() ? void 0 : { transfer: "buf" in data && data.buf ? [data.buf.buffer] : [] }
      );
    });
    yield workerExec({ action: "open", filename: fileName });
    return {
      truncate: () => __async(this, null, function* () {
      }),
      write: (value) => workerExec({ action: "write", buf: value }),
      close: () => __async(this, null, function* () {
        yield workerExec({ action: "close" });
        worker.terminate();
      })
    };
  });
}

// src/storage/cos.ts
function makeHash(key) {
  return { algorithm: "SHA-256", value: key };
}
var COSInternalBackend = class {
  isSupported() {
    return typeof navigator !== "undefined" && "crossOriginStorage" in navigator;
  }
  // IMPORTANT: key must be SHA-256 hash of the data
  read(key) {
    return __async(this, null, function* () {
      try {
        const handle = yield navigator.crossOriginStorage.requestFileHandle(
          makeHash(key)
        );
        return handle.getFile();
      } catch (e) {
        return null;
      }
    });
  }
  // IMPORTANT: key must be SHA-256 hash of the data
  write(key, stream) {
    return __async(this, null, function* () {
      const handle = yield navigator.crossOriginStorage.requestFileHandle(
        makeHash(key),
        { create: true }
      );
      const writable = yield handle.createWritable();
      const reader = stream.getReader();
      try {
        while (true) {
          const { done, value } = yield reader.read();
          if (done) break;
          yield writable.write(value);
        }
      } finally {
        yield writable.close();
      }
    });
  }
  // IMPORTANT: key must be SHA-256 hash of the data
  getSize(key) {
    return __async(this, null, function* () {
      try {
        const handle = yield navigator.crossOriginStorage.requestFileHandle(
          makeHash(key)
        );
        const file = yield handle.getFile();
        return file.size;
      } catch (e) {
        return -1;
      }
    });
  }
  list() {
    return __async(this, null, function* () {
      throw new Error("not implemented");
    });
  }
  delete(_key) {
    return __async(this, null, function* () {
      throw new Error("not implemented");
    });
  }
};
var COSBackend = class {
  constructor() {
    __publicField(this, "cos", new COSInternalBackend());
    __publicField(this, "priv", new OPFSBackend());
  }
  isSupported() {
    return this.priv.isSupported();
  }
  read(key, hint) {
    return __async(this, null, function* () {
      if ((hint == null ? void 0 : hint.sha256) && this.cos.isSupported()) {
        const blob = yield this.cos.read(hint.sha256);
        if (blob) return blob;
      }
      return this.priv.read(key);
    });
  }
  write(key, stream, hint) {
    return __async(this, null, function* () {
      if ((hint == null ? void 0 : hint.sha256) && this.cos.isSupported()) {
        yield this.cos.write(hint.sha256, stream);
      } else {
        yield this.priv.write(key, stream);
      }
    });
  }
  getSize(key, hint) {
    return __async(this, null, function* () {
      if ((hint == null ? void 0 : hint.sha256) && this.cos.isSupported()) {
        const size = yield this.cos.getSize(hint.sha256);
        if (size !== -1) return size;
      }
      return this.priv.getSize(key);
    });
  }
  list() {
    return __async(this, null, function* () {
      return this.priv.list();
    });
  }
  delete(key) {
    return __async(this, null, function* () {
      return this.priv.delete(key);
    });
  }
};

// src/cache-manager.ts
var PREFIX_METADATA = "__metadata__";
var POLYFILL_ETAG = "polyfill_for_older_version";
function hintFromMetadata(metadata) {
  if (!metadata) return void 0;
  if (metadata.sha256) return { sha256: metadata.sha256 };
  return void 0;
}
var CacheManager = class {
  /**
   * @param backends Array of storage backends to use, in order of preference ; if first is available, use it, otherwise try the next one.
   */
  constructor(backends = [new COSBackend()]) {
    __publicField(this, "sb");
    for (const backend of backends) {
      if (backend.isSupported()) {
        this.sb = backend;
        return;
      }
    }
    throw new Error("No supported storage backend found");
  }
  /**
   * Convert a given URL into a storage key.
   *
   * Format: `${hashSHA1(fullURL)}_${fileName}`
   */
  getNameFromURL(url) {
    return __async(this, null, function* () {
      return urlToFileName(url, "");
    });
  }
  /**
   * @deprecated Use `download()` instead
   *
   * Write a new file to cache. This will overwrite existing file.
   *
   * @param name The file name returned by `getNameFromURL()` or `list()`
   */
  write(name, stream, metadata) {
    return __async(this, null, function* () {
      yield this.sb.write(name, stream);
      yield this.writeMetadata(name, metadata);
    });
  }
  download(_0) {
    return __async(this, arguments, function* (url, options = {}) {
      var _a, _b, _c, _d;
      const fileKey = yield urlToFileName(url, "");
      const sha256 = yield getHFFileSHA256(url, (_a = options.headers) != null ? _a : {});
      const hint = sha256 ? { sha256 } : void 0;
      const cachedSize = yield this.sb.getSize(fileKey, hint);
      if (cachedSize !== -1) {
        const metadata2 = yield this.readMetadata(fileKey);
        if ((metadata2 == null ? void 0 : metadata2.originalURL) === url && metadata2.originalSize === cachedSize) {
          return;
        }
        const head = yield fetch(url, __spreadValues({
          method: "HEAD"
        }, options.headers ? { headers: options.headers } : {}));
        const originalSize = parseInt(
          (_b = head.headers.get("content-length")) != null ? _b : "0",
          10
        );
        const etag2 = (head.headers.get("etag") || "").replace(
          /[^A-Za-z0-9]/g,
          ""
        );
        if (originalSize > 0 && originalSize === cachedSize) {
          yield this.writeMetadata(fileKey, __spreadValues({
            originalURL: url,
            originalSize,
            etag: etag2,
            sha256
          }, (_c = options.metadataAdditional) != null ? _c : {}));
          return;
        }
        yield this.sb.delete(fileKey);
        yield this.sb.delete(`${PREFIX_METADATA}${fileKey}`);
      }
      const response = yield fetch(url, __spreadValues(__spreadValues({}, options.headers ? { headers: options.headers } : {}), options.signal ? { signal: options.signal } : {}));
      if (!response.ok || !response.body) {
        throw new Error(`Failed to fetch ${url}: HTTP ${response.status}`);
      }
      const contentLength = response.headers.get("content-length");
      const etag = (response.headers.get("etag") || "").replace(
        /[^A-Za-z0-9]/g,
        ""
      );
      const total = parseInt(contentLength != null ? contentLength : "0", 10);
      const progressCallback = options.progressCallback;
      let loaded = 0;
      let lastProgressAt = 0;
      const progressStream = new TransformStream({
        transform(chunk, controller) {
          loaded += chunk.byteLength;
          if (progressCallback) {
            const now = Date.now();
            if (now - lastProgressAt > 100) {
              lastProgressAt = now;
              progressCallback({ loaded, total });
            }
          }
          controller.enqueue(chunk);
        },
        flush() {
          progressCallback == null ? void 0 : progressCallback({ loaded, total: total || loaded });
        }
      });
      const metadata = __spreadValues({
        originalURL: url,
        originalSize: total,
        etag
      }, (_d = options.metadataAdditional) != null ? _d : {});
      if (sha256) {
        metadata.sha256 = sha256;
      }
      yield this.sb.write(
        fileKey,
        response.body.pipeThrough(progressStream),
        hint
      );
      yield this.writeMetadata(fileKey, metadata);
    });
  }
  /**
   * Open a file in cache for reading
   *
   * @param nameOrURL The file name returned by `getNameFromURL()` or `list()`, or the original URL of the remote file
   * @returns Blob, or null if file does not exist
   */
  open(nameOrURL) {
    return __async(this, null, function* () {
      const hint1 = hintFromMetadata(yield this.getMetadata(nameOrURL));
      const direct = yield this.sb.read(nameOrURL, hint1);
      if (direct) return direct;
      const key = yield urlToFileName(nameOrURL, "");
      const hint2 = hintFromMetadata(yield this.getMetadata(key));
      return this.sb.read(key, hint2);
    });
  }
  /**
   * Get the size of a file in stored cache
   *
   * NOTE: in case the download is stopped mid-way (i.e. user close browser tab), the file maybe corrupted, size maybe different from `metadata.originalSize`
   *
   * @param name The file name returned by `getNameFromURL()` or `list()`
   * @returns number of bytes, or -1 if file does not exist
   */
  getSize(name) {
    return __async(this, null, function* () {
      const hint = hintFromMetadata(yield this.getMetadata(name));
      return this.sb.getSize(name, hint);
    });
  }
  /**
   * Get metadata of a cached file
   */
  getMetadata(name) {
    return __async(this, null, function* () {
      const metadata = yield this.readMetadata(name);
      if (metadata) return metadata;
      const cachedSize = yield this.sb.getSize(name);
      return cachedSize > 0 ? (
        // files created by older version of wllama don't have metadata; polyfill it
        {
          etag: POLYFILL_ETAG,
          originalSize: cachedSize,
          originalURL: ""
        }
      ) : (
        // cached file not found
        null
      );
    });
  }
  /**
   * Same as `getMetadata()`, but without polyfill. Returns null if the file has no metadata.
   */
  readMetadata(name) {
    return __async(this, null, function* () {
      const blob = yield this.sb.read(`${PREFIX_METADATA}${name}`);
      if (!blob) return null;
      try {
        return yield new Response(blob).json();
      } catch (e) {
        return null;
      }
    });
  }
  /**
   * List all files currently in cache
   */
  list() {
    return __async(this, null, function* () {
      const all = yield this.sb.list();
      const metadataMap = {};
      for (const { key } of all) {
        if (key.startsWith(PREFIX_METADATA)) {
          const blob = yield this.sb.read(key);
          if (blob) {
            const meta = yield new Response(blob).json().catch(() => null);
            metadataMap[key.slice(PREFIX_METADATA.length)] = meta;
          }
        }
      }
      const result = [];
      for (const { key, size } of all) {
        if (!key.startsWith(PREFIX_METADATA)) {
          result.push({
            name: key,
            size,
            metadata: metadataMap[key] || {
              originalSize: size,
              originalURL: "",
              etag: ""
            }
          });
        }
      }
      return result;
    });
  }
  /**
   * Clear all files currently in cache
   */
  clear() {
    return __async(this, null, function* () {
      yield this.deleteMany(() => true);
    });
  }
  /**
   * Delete a single file in cache
   *
   * @param nameOrURL Can be either an URL or a name returned by `getNameFromURL()` or `list()`
   */
  delete(nameOrURL) {
    return __async(this, null, function* () {
      const name2 = yield this.getNameFromURL(nameOrURL);
      yield this.deleteMany(
        (entry) => entry.name === nameOrURL || entry.name === name2
      );
    });
  }
  /**
   * Delete multiple files in cache.
   *
   * @param predicate A predicate like `array.filter(item => boolean)`
   */
  deleteMany(predicate) {
    return __async(this, null, function* () {
      const list = yield this.list();
      for (const item of list) {
        if (predicate(item)) {
          yield this.sb.delete(item.name);
          yield this.sb.delete(`${PREFIX_METADATA}${item.name}`);
        }
      }
    });
  }
  /**
   * Write the metadata of the file to disk.
   */
  writeMetadata(name, metadata) {
    return __async(this, null, function* () {
      const blob = new Blob([JSON.stringify(metadata)], { type: "text/plain" });
      yield this.sb.write(`${PREFIX_METADATA}${name}`, blob.stream());
    });
  }
};
var cache_manager_default = CacheManager;
function urlToFileName(url, prefix) {
  return __async(this, null, function* () {
    const hashBuffer = yield crypto.subtle.digest(
      "SHA-1",
      new TextEncoder().encode(url)
    );
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    return `${prefix}${hashHex}_${url.split("/").pop()}`;
  });
}

// src/model-manager.ts
var DEFAULT_PARALLEL_DOWNLOADS = 3;
var ModelValidationStatus = /* @__PURE__ */ ((ModelValidationStatus2) => {
  ModelValidationStatus2["VALID"] = "valid";
  ModelValidationStatus2["INVALID"] = "invalid";
  ModelValidationStatus2["DELETED"] = "deleted";
  return ModelValidationStatus2;
})(ModelValidationStatus || {});
var Model = class {
  constructor(modelManager, url, mmprojUrl, savedFiles) {
    __publicField(this, "modelManager");
    /**
     * URL to the GGUF file (in case it contains multiple shards, the URL should point to the first shard)
     *
     * This URL will be used to identify the model in the cache. There can't be 2 models with the same URL.
     */
    __publicField(this, "url");
    /**
     * URL to mmproj file, if exists
     */
    __publicField(this, "mmprojUrl");
    /**
     * Size in bytes (total size of all shards).
     *
     * A value of -1 means the model is deleted from the cache. You must call `ModelManager.downloadModel` to re-download the model.
     */
    __publicField(this, "size");
    /**
     * List of all shards in the cache, sorted by original URL (ascending order)
     */
    __publicField(this, "files");
    this.modelManager = modelManager;
    this.url = url;
    this.mmprojUrl = mmprojUrl;
    if (savedFiles) {
      this.files = this.getAllFiles(savedFiles);
      this.size = sumArr(this.files.map((f) => f.metadata.originalSize));
    } else {
      this.files = [];
      this.size = 0;
    }
  }
  /**
   * Open and get a list of all shards as Blobs
   */
  open() {
    return __async(this, null, function* () {
      if (this.size === -1) {
        throw new WllamaError(
          `Model is deleted from the cache; Call ModelManager.downloadModel to re-download the model`,
          "load_error"
        );
      }
      const blobs = [];
      for (const file of this.files) {
        const blob = yield this.modelManager.cacheManager.open(file.name);
        if (!blob) {
          throw new Error(
            `Failed to open file ${file.name}; Hint: the model may be invalid, please refresh it`
          );
        }
        blobs.push(blob);
      }
      return blobs;
    });
  }
  /**
   * Validate the model files.
   *
   * If the model is invalid, the model manager will not be able to use it. You must call `refresh` to re-download the model.
   *
   * Cases that model is invalid:
   * - The model is deleted from the cache
   * - The model files are missing (or the download is interrupted)
   */
  validate() {
    let nbShards = ModelManager.parseModelUrl(this.url).length;
    if (this.mmprojUrl) {
      nbShards += 1;
    }
    if (this.size === -1) {
      return "deleted" /* DELETED */;
    }
    if (this.size < 16 || this.files.length !== nbShards) {
      return "invalid" /* INVALID */;
    }
    for (const file of this.files) {
      if (!file.metadata || file.metadata.originalSize !== file.size) {
        return "invalid" /* INVALID */;
      }
    }
    return "valid" /* VALID */;
  }
  /**
   * In case the model is invalid, call this function to re-download the model
   */
  refresh() {
    return __async(this, arguments, function* (options = {}) {
      var _a;
      const urls = ModelManager.parseModelUrl(this.url);
      if (this.mmprojUrl) {
        urls.push(this.mmprojUrl);
      }
      const works = urls.map((url, index) => ({
        url,
        index
      }));
      this.modelManager.logger.debug("Downloading model files:", urls);
      const nParallel = (_a = this.modelManager.params.parallelDownloads) != null ? _a : DEFAULT_PARALLEL_DOWNLOADS;
      const totalSize = yield this.getTotalDownloadSize(urls);
      const loadedSize = [];
      const worker = () => __async(this, null, function* () {
        while (works.length > 0) {
          const w = works.shift();
          if (!w) break;
          yield this.modelManager.cacheManager.download(w.url, __spreadProps(__spreadValues({}, options), {
            metadataAdditional: {
              originalURL: w.url,
              mmprojURL: this.mmprojUrl
            },
            progressCallback: ({ loaded }) => {
              var _a2;
              loadedSize[w.index] = loaded;
              (_a2 = options.progressCallback) == null ? void 0 : _a2.call(options, {
                loaded: sumArr(loadedSize),
                total: totalSize
              });
            }
          }));
        }
      });
      const promises = [];
      for (let i = 0; i < nParallel; i++) {
        promises.push(worker());
        loadedSize.push(0);
      }
      yield Promise.all(promises);
      this.files = this.getAllFiles(yield this.modelManager.cacheManager.list());
      this.size = this.files.reduce((acc, f) => acc + f.metadata.originalSize, 0);
    });
  }
  /**
   * Remove the model from the cache
   */
  remove() {
    return __async(this, null, function* () {
      this.files = this.getAllFiles(yield this.modelManager.cacheManager.list());
      yield this.modelManager.cacheManager.deleteMany(
        (f) => !!this.files.find((file) => file.name === f.name)
      );
      this.size = -1;
    });
  }
  getAllFiles(savedFiles) {
    const allUrls = new Set(ModelManager.parseModelUrl(this.url));
    if (this.mmprojUrl) {
      allUrls.add(this.mmprojUrl);
    }
    const allFiles = [];
    for (const url of allUrls) {
      const file = savedFiles.find((f) => f.metadata.originalURL === url);
      if (!file) {
        throw new Error(`Model file not found: ${url}`);
      }
      allFiles.push(file);
    }
    allFiles.sort(
      (a, b) => a.metadata.originalURL.localeCompare(b.metadata.originalURL)
    );
    return allFiles;
  }
  getTotalDownloadSize(urls) {
    return __async(this, null, function* () {
      const responses = yield Promise.all(
        urls.map((url) => fetch(url, { method: "HEAD" }))
      );
      const sizes = responses.map(
        (res) => Number(res.headers.get("content-length") || "0")
      );
      return sumArr(sizes);
    });
  }
};
var ModelManager = class _ModelManager {
  constructor(params = {}) {
    // The CacheManager singleton, can be accessed by user
    __publicField(this, "cacheManager");
    __publicField(this, "params");
    __publicField(this, "logger");
    this.cacheManager = params.cacheManager || new cache_manager_default();
    this.params = params;
    this.logger = params.logger || console;
  }
  /**
   * Parses a model URL and returns an array of URLs based on the following patterns:
   * - If the input URL is an array, it returns the array itself.
   * - If the input URL is a string in the `gguf-split` format, it returns an array containing the URL of each shard in ascending order.
   * - Otherwise, it returns an array containing the input URL as a single element array.
   * @param modelUrl URL or list of URLs
   */
  static parseModelUrl(modelUrl) {
    var _a;
    if (Array.isArray(modelUrl)) {
      return modelUrl;
    }
    const urlPartsRegex = /-(\d{5})-of-(\d{5})\.gguf(?:\?.*)?$/;
    const queryMatch = modelUrl.match(/\.gguf(\?.*)?$/);
    const queryParams = (_a = queryMatch == null ? void 0 : queryMatch[1]) != null ? _a : "";
    const matches = modelUrl.match(urlPartsRegex);
    if (!matches) {
      return [modelUrl];
    }
    const baseURL = modelUrl.replace(urlPartsRegex, "");
    const total = matches[2];
    const paddedShardIds = Array.from(
      { length: Number(total) },
      (_, index) => (index + 1).toString().padStart(5, "0")
    );
    return paddedShardIds.map(
      (current) => `${baseURL}-${current}-of-${total}.gguf${queryParams}`
    );
  }
  /**
   * Get all models in the cache
   */
  getModels() {
    return __async(this, arguments, function* (opts = {}) {
      const cachedFiles = yield this.cacheManager.list();
      let models = [];
      for (const file of cachedFiles) {
        if (!file.metadata.originalURL) continue;
        const shards = _ModelManager.parseModelUrl(file.metadata.originalURL);
        const mmprojUrl = file.metadata.mmprojURL;
        const isFirstShard = shards.length === 1 || shards[0] === file.metadata.originalURL;
        if (isFirstShard) {
          models.push(
            new Model(this, file.metadata.originalURL, mmprojUrl, cachedFiles)
          );
        }
      }
      if (!opts.includeInvalid) {
        models = models.filter(
          (m) => m.validate() === "valid" /* VALID */
        );
      }
      return models;
    });
  }
  /**
   * Download a model from the given URL.
   *
   * The URL must end with `.gguf`
   */
  downloadModel(_0) {
    return __async(this, arguments, function* (sourceOrURL, options = {}) {
      const source = isString(sourceOrURL) ? { url: sourceOrURL } : sourceOrURL;
      if (!isValidGgufFile(source.url)) {
        throw new WllamaError(
          `Invalid model URL: ${source.url}; URL must ends with ".gguf"`,
          "download_error"
        );
      }
      const model = new Model(this, source.url, source.mmprojUrl);
      const validity = model.validate();
      if (validity !== "valid" /* VALID */) {
        yield model.refresh(options);
      }
      return model;
    });
  }
  /**
   * Get a model from the cache or download it if it's not available.
   */
  getModelOrDownload(_0) {
    return __async(this, arguments, function* (source, options = {}) {
      var _a;
      const models = yield this.getModels();
      const model = models.find((m) => m.url === source.url);
      if (model) {
        (_a = options.progressCallback) == null ? void 0 : _a.call(options, { loaded: model.size, total: model.size });
        return model;
      }
      return this.downloadModel(source, options);
    });
  }
  /**
   * Remove all models from the cache
   */
  clear() {
    return __async(this, null, function* () {
      yield this.cacheManager.clear();
    });
  }
};

// src/types/types.ts
var LogLevel = /* @__PURE__ */ ((LogLevel2) => {
  LogLevel2[LogLevel2["DEBUG"] = 1] = "DEBUG";
  LogLevel2[LogLevel2["INFO"] = 2] = "INFO";
  LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
  LogLevel2[LogLevel2["ERROR"] = 4] = "ERROR";
  return LogLevel2;
})(LogLevel || {});

// src/wasm-from-cdn.ts
var WasmCompatFromCDN = {
  worker: "https://cdn.jsdelivr.net/npm/@wllama/wllama-compat@3.7.0/wasm/wllama.js",
  wasm: "https://cdn.jsdelivr.net/npm/@wllama/wllama-compat@3.7.0/wasm/wllama.wasm"
};

// src/wllama.ts
var LoggerWithoutDebug = __spreadProps(__spreadValues({}, console), {
  debug: () => {
  }
});
var WllamaError = class extends Error {
  constructor(message, type = "unknown_error") {
    super(message);
    __publicField(this, "type");
    this.type = type;
  }
};
var WllamaAbortError = class extends Error {
  constructor() {
    super("Operation aborted");
    __publicField(this, "name", "AbortError");
  }
};
var WllamaRuntimeError = class extends Error {
  constructor(message, stack) {
    super(message);
    __publicField(this, "name", "RuntimeError");
    __publicField(this, "stack");
    this.stack = stack;
  }
};
var Wllama = class {
  constructor(pathConfig, wllamaConfig = {}) {
    // The CacheManager and ModelManager are singleton, can be accessed by user
    __publicField(this, "cacheManager");
    __publicField(this, "modelManager");
    __publicField(this, "compat", null);
    __publicField(this, "proxy", null);
    __publicField(this, "config");
    __publicField(this, "pathConfig");
    __publicField(this, "useMultiThread", false);
    __publicField(this, "nbThreads", 1);
    __publicField(this, "useEmbeddings", false);
    __publicField(this, "useRerank", false);
    // available when loaded
    __publicField(this, "loadedContextInfo", null);
    __publicField(this, "seed");
    __publicField(this, "bosToken", -1);
    __publicField(this, "eosToken", -1);
    __publicField(this, "eotToken", -1);
    __publicField(this, "eogTokens", /* @__PURE__ */ new Set());
    __publicField(this, "addBosToken", false);
    __publicField(this, "addEosToken", false);
    __publicField(this, "mediaMarker");
    __publicField(this, "chatTemplate");
    __publicField(this, "metadata");
    __publicField(this, "hasEncoder", false);
    __publicField(this, "decoderStartToken", -1);
    // note: we overlay instead of using llama-server default_template_kwargs, because we cannot transfer complex data structure via GLUE
    // overlay allow mixed data type or nested structure for kwargs
    __publicField(this, "chatTemplateKwargs", {});
    var _a, _b, _c;
    checkEnvironmentCompatible();
    if (!pathConfig) throw new WllamaError("AssetsPathConfig is required");
    this.pathConfig = pathConfig;
    this.config = wllamaConfig;
    this.cacheManager = (_a = wllamaConfig.cacheManager) != null ? _a : new cache_manager_default();
    this.modelManager = (_c = wllamaConfig.modelManager) != null ? _c : new ModelManager({
      cacheManager: this.cacheManager,
      logger: (_b = wllamaConfig.logger) != null ? _b : console,
      parallelDownloads: wllamaConfig.parallelDownloads,
      allowOffline: wllamaConfig.allowOffline
    });
    this.setCompat("default");
  }
  logger() {
    var _a;
    return (_a = this.config.logger) != null ? _a : console;
  }
  checkModelLoaded() {
    if (!this.isModelLoaded()) {
      throw new WllamaError(
        "loadModel() is not yet called",
        "model_not_loaded"
      );
    }
  }
  /**
   * Get the libllama version string, e.g. "b6327-4d74393".
   *
   * @returns version string embedded at build time.
   */
  static getLibllamaVersion() {
    return LIBLLAMA_VERSION;
  }
  /**
   * Set compatibility options for Wllama.
   * @param compat Set to null to disable compatibility, or 'default' to use the default compat resources from CDN.
   * @param mode 'safari' by default; If set to 'firefox_safari', the compat mode will **also** be enabled on Firefox, which will significantly degrade the performance but allow using WebGPU on Firefox.
   */
  setCompat(compat, mode = "safari") {
    if (mode === "safari") {
      if (isFirefox()) {
        this.compat = null;
        return;
      }
    }
    this.compat = compat === "default" ? WasmCompatFromCDN : compat;
  }
  /**
   * Check if the model is loaded via `loadModel()`
   */
  isModelLoaded() {
    return !!this.proxy && !!this.metadata;
  }
  /**
   * Get token ID associated to BOS (begin of sentence) token.
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns -1 if the model is not loaded.
   */
  getBOS() {
    return this.bosToken;
  }
  /**
   * Get token ID associated to EOS (end of sentence) token.
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns -1 if the model is not loaded.
   */
  getEOS() {
    return this.eosToken;
  }
  /**
   * Get token ID associated to EOT (end of turn) token.
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns -1 if the model is not loaded.
   */
  getEOT() {
    return this.eotToken;
  }
  /**
   * Check if a given token is end-of-generation token (e.g. EOS, EOT, etc.)
   *
   * @param token the token ID to be checked
   * @returns true if the token is EOS, EOT, or any other end-of-generation tokens
   */
  isTokenEOG(token) {
    return token === this.eosToken || token === this.eotToken || this.eogTokens.has(token);
  }
  /**
   * Get token ID associated to token used by decoder, to start generating output sequence(only usable for encoder-decoder architecture). In other words, encoder uses normal BOS and decoder uses this token.
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns -1 if the model is not loaded.
   */
  getDecoderStartToken() {
    return this.decoderStartToken;
  }
  /**
   * Get model hyper-parameters and metadata
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns ModelMetadata
   */
  getModelMetadata() {
    this.checkModelLoaded();
    return this.metadata;
  }
  /**
   * Check if we're currently using multi-thread build.
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns true if multi-thread is used.
   */
  isMultithread() {
    this.checkModelLoaded();
    return this.useMultiThread;
  }
  /**
   * Get number of threads used in the current context.
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns number of threads
   */
  getNumThreads() {
    this.checkModelLoaded();
    return this.useMultiThread ? this.nbThreads : 1;
  }
  /**
   * Check if the current model uses encoder-decoder architecture
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns true if multi-thread is used.
   */
  isEncoderDecoderArchitecture() {
    this.checkModelLoaded();
    return this.hasEncoder;
  }
  /**
   * Must we add BOS token to the tokenized sequence?
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns true if BOS token must be added to the sequence
   */
  mustAddBosToken() {
    this.checkModelLoaded();
    return this.addBosToken;
  }
  /**
   * Must we add EOS token to the tokenized sequence?
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns true if EOS token must be added to the sequence
   */
  mustAddEosToken() {
    this.checkModelLoaded();
    return this.addEosToken;
  }
  /**
   * Get the jinja chat template comes with the model. It only available if the original model (before converting to gguf) has the template in `tokenizer_config.json`
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns the jinja template. null if there is no template in gguf
   */
  getChatTemplate() {
    var _a;
    this.checkModelLoaded();
    return (_a = this.chatTemplate) != null ? _a : null;
  }
  /**
   * Check if WebGPU is supported by the current environment.
   * @returns true if WebGPU is supported
   */
  isSupportWebGPU() {
    return isSupportWebGPU();
  }
  /**
   * Load model from a given URL (or a list of URLs, in case the model is splitted into smaller files)
   * - If the model already been downloaded (via `downloadModel()`), then we will use the cached model
   * - Else, we download the model from internet
   * @param modelSourceOrURL
   * @param params
   */
  loadModelFromUrl(_0) {
    return __async(this, arguments, function* (modelSourceOrURL, params = {}) {
      var _a;
      const source = isString(modelSourceOrURL) ? { url: modelSourceOrURL } : modelSourceOrURL;
      const useCache = (_a = params.useCache) != null ? _a : true;
      const model = useCache ? yield this.modelManager.getModelOrDownload(source, params) : yield this.modelManager.downloadModel(source, params);
      const blobs = yield model.open();
      return yield this.loadModel(blobs, params);
    });
  }
  /**
   * Load model from a given Hugging Face model ID and file path.
   *
   * @param hfOptions
   * @param params
   */
  loadModelFromHF(_0) {
    return __async(this, arguments, function* (hfOptions, params = {}) {
      const source = yield getHFModelSource(hfOptions);
      return yield this.loadModelFromUrl(source, params);
    });
  }
  /**
   * Load model from a given list of Blob.
   *
   * You can pass multiple buffers into the function (in case the model contains multiple shards).
   *
   * @param ggufBlobsOrModel Can be either list of Blobs (in case you use local file), or a Model object (in case you use ModelManager)
   * @param params LoadModelParams
   */
  loadModel(_0) {
    return __async(this, arguments, function* (ggufBlobsOrModel, params = {}) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      const blobs = ggufBlobsOrModel instanceof Model ? yield ggufBlobsOrModel.open() : [...ggufBlobsOrModel];
      if (blobs.some((b) => b.size === 0)) {
        throw new WllamaError(
          "Input model (or splits) must be non-empty Blob or File",
          "load_error"
        );
      }
      if (!this.pathConfig["default"]) {
        throw new WllamaError(
          '"default" is missing from pathConfig',
          "load_error"
        );
      }
      if (this.proxy) {
        throw new WllamaError("Module is already initialized", "load_error");
      }
      const supportMultiThread = yield isSupportMultiThread();
      const hwConccurency = Math.floor((navigator.hardwareConcurrency || 1) / 2);
      const nbThreads = (_a = params.n_threads) != null ? _a : hwConccurency;
      this.nbThreads = nbThreads;
      this.useMultiThread = supportMultiThread && nbThreads > 1;
      const workerResources = this.getWorkerResources();
      if (params.n_gpu_layers === 0) {
        workerResources.noWebGPU = true;
      }
      this.proxy = new ProxyToWorker(
        workerResources,
        this.useMultiThread ? nbThreads : 0,
        // 0 means disable pthread
        (_b = this.config.suppressNativeLog) != null ? _b : false,
        this.logger()
      );
      let logLevel = (_c = params.log_level) != null ? _c : 2 /* INFO */;
      if (this.config.suppressNativeLog) {
        logLevel = 9999;
      }
      const modelFiles = yield prepareBlobs(blobs);
      yield this.proxy.moduleInit(modelFiles.all);
      this.logger().debug("Calling wllamaStart...");
      const startResult = yield this.proxy.wllamaStart();
      if (!startResult.success) {
        throw new WllamaError(
          `Error while calling start function, result = ${startResult}`
        );
      }
      this.logger().debug("Loading model...");
      const loadResult = yield this.proxy.wllamaAction("load", {
        _name: "load_req",
        log_level: logLevel,
        // if async read is not supported, use mmap; refer to README-dev.md for more details
        use_mmap: !canUseAsyncFileRead(workerResources.compat),
        use_mlock: false,
        n_gpu_layers: (_d = params.n_gpu_layers) != null ? _d : 99999,
        n_ctx: (_e = params.n_ctx) != null ? _e : 1024,
        n_threads: this.useMultiThread ? nbThreads : 1,
        n_ctx_auto: false,
        // not supported for now
        mmproj_path: modelFiles.mmproj ? `/models/${MMPROJ_FILE_NAME}` : void 0,
        model_paths: modelFiles.llm.map((f) => `models/${f.name}`),
        embeddings: params.embeddings,
        offload_kqv: params.offload_kqv,
        n_batch: params.n_batch,
        n_ubatch: params.n_ubatch,
        pooling_type: params.pooling_type,
        rope_scaling_type: params.rope_scaling_type,
        rope_freq_base: params.rope_freq_base,
        rope_freq_scale: params.rope_freq_scale,
        yarn_ext_factor: params.yarn_ext_factor,
        yarn_attn_factor: params.yarn_attn_factor,
        yarn_beta_fast: params.yarn_beta_fast,
        yarn_beta_slow: params.yarn_beta_slow,
        yarn_orig_ctx: params.yarn_orig_ctx,
        cache_type_k: params.cache_type_k,
        cache_type_v: params.cache_type_v,
        // with unified KV, all sequences share one n_ctx cache, so each request can still use the full context
        n_parallel: (_f = params.n_parallel) != null ? _f : 4,
        kv_unified: (_g = params.kv_unified) != null ? _g : true,
        flash_attn: params.flash_attn,
        swa_full: params.swa_full,
        chat_template: params.chat_template,
        jinja: params.jinja,
        reasoning: params.reasoning,
        image_min_tokens: params.image_min_tokens,
        image_max_tokens: params.image_max_tokens,
        warmup: params.warmup,
        no_kv_offload: params.no_kv_offload,
        mmproj_offload: params.mmproj_offload,
        cont_batching: params.cont_batching,
        n_keep: params.n_keep,
        ctx_shift: params.ctx_shift,
        cache_idle_slots: params.cache_idle_slots,
        n_cache_reuse: params.n_cache_reuse,
        lora_paths: (_h = params.lora_adapters) == null ? void 0 : _h.map((a) => a.path),
        lora_scales: (_i = params.lora_adapters) == null ? void 0 : _i.map((a) => {
          var _a2;
          return (_a2 = a.scale) != null ? _a2 : 1;
        }),
        lora_init_without_apply: params.lora_init_without_apply,
        spec_draft_model: params.spec_draft_model,
        spec_draft_ngl: params.spec_draft_ngl,
        spec_draft_n_max: params.spec_draft_n_max,
        spec_draft_n_min: params.spec_draft_n_min,
        spec_draft_p_min: params.spec_draft_p_min,
        spec_draft_threads: params.spec_draft_threads,
        spec_draft_threads_batch: params.spec_draft_threads_batch,
        kv_overrides_keys: params.kv_overrides ? Object.keys(params.kv_overrides) : void 0,
        kv_overrides_vals: params.kv_overrides ? Object.values(params.kv_overrides) : void 0,
        reasoning_budget_tokens: params.reasoning_budget_tokens,
        reasoning_budget_message: params.reasoning_budget_message,
        reasoning_format: params.reasoning_format,
        skip_chat_parsing: params.skip_chat_parsing,
        prefill_assistant: params.prefill_assistant
      });
      const loadedCtxInfo = __spreadProps(__spreadValues({}, loadResult), {
        metadata: {}
      });
      for (let i = 0; i < loadResult.metadata_key.length; i++) {
        loadedCtxInfo.metadata[loadResult.metadata_key[i]] = loadResult.metadata_val[i];
      }
      this.seed = params.seed;
      this.bosToken = loadedCtxInfo.token_bos;
      this.eosToken = loadedCtxInfo.token_eos;
      this.eotToken = loadedCtxInfo.token_eot;
      this.useEmbeddings = !!params.embeddings;
      this.useRerank = params.pooling_type == "rank";
      this.metadata = {
        hparams: {
          nVocab: loadedCtxInfo.n_vocab,
          nCtxTrain: loadedCtxInfo.n_ctx_train,
          nEmbd: loadedCtxInfo.n_embd,
          nLayer: loadedCtxInfo.n_layer
        },
        meta: loadedCtxInfo.metadata
      };
      this.hasEncoder = !!loadedCtxInfo.has_encoder;
      this.decoderStartToken = loadedCtxInfo.token_decoder_start;
      this.addBosToken = loadedCtxInfo.add_bos_token;
      this.addEosToken = loadedCtxInfo.add_eos_token;
      this.chatTemplate = loadedCtxInfo.metadata["tokenizer.chat_template"];
      this.loadedContextInfo = loadedCtxInfo;
      this.eogTokens = new Set(loadedCtxInfo.list_tokens_eog);
      this.mediaMarker = loadedCtxInfo.media_marker;
      this.chatTemplateKwargs = (_j = params.default_template_kwargs) != null ? _j : {};
      this.logger().debug({ loadedCtxInfo });
    });
  }
  getLoadedContextInfo() {
    this.checkModelLoaded();
    if (!this.loadedContextInfo) {
      throw new WllamaError("Loaded context info is not available");
    }
    return __spreadValues({}, this.loadedContextInfo);
  }
  //////////////////////////////////////////////
  // High level API
  /**
   * Calculate embedding vector for a given text.
   * By default, BOS and EOS tokens will be added automatically. You can use the "skipBOS" and "skipEOS" option to disable it.
   * @param options OAI-compatible embedding creation options
   * @returns OAI-compatible embedding response
   */
  createEmbedding(options) {
    return __async(this, null, function* () {
      this.checkModelLoaded();
      if (!this.useEmbeddings) {
        throw new WllamaError(
          "Embeddings is not enabled. Please set it via LoadModelParams.embeddings"
        );
      }
      const result = yield this.proxy.wllamaAction(
        "embedding",
        {
          _name: "embd_req",
          data_json: JSON.stringify(options),
          files: []
          // TODO: support file input
        }
      );
      if (!result.success) {
        throw new WllamaError(
          "Model failed to start inference",
          "inference_error"
        );
      }
      return yield this.getResponse(options, false, result.req_id);
    });
  }
  /**
   * Rerank a list of documents against a query.
   * Requires the model to be loaded with embeddings: true and pooling_type: 'rank'.
   * @param options Reranking options (query, documents, top_n)
   * @returns Reranking response with relevance scores sorted highest first
   */
  createRerank(options) {
    return __async(this, null, function* () {
      var _a, _b;
      this.checkModelLoaded();
      if (!this.useEmbeddings || !this.useRerank) {
        throw new WllamaError(
          "Rerank is not enabled. Please set it via LoadModelParams: embeddings = true and pooling_type = rank"
        );
      }
      const top_n = (_a = options.top_n) != null ? _a : options.documents.length;
      let totalTokens = 0;
      const rawResults = [];
      for (let i = 0; i < options.documents.length; i++) {
        const result = yield this.proxy.wllamaAction("rerank", {
          _name: "rrnk_req",
          data_json: JSON.stringify({
            query: options.query,
            document: options.documents[i]
          })
        });
        if (!result.success) {
          throw new WllamaError(
            "Model failed to start reranking",
            "inference_error"
          );
        }
        const { score, tokens_evaluated } = yield this.getRerankResult(
          result.req_id
        );
        totalTokens += tokens_evaluated;
        rawResults.push({ index: i, score });
      }
      rawResults.sort((a, b) => b.score - a.score);
      return {
        model: (_b = this.getModelMetadata().meta["general.name"]) != null ? _b : "",
        object: "list",
        usage: { prompt_tokens: totalTokens, total_tokens: totalTokens },
        results: rawResults.slice(0, top_n).map(({ index, score }) => ({
          index,
          relevance_score: score
        }))
      };
    });
  }
  createChatCompletion(options) {
    return __async(this, null, function* () {
      var _a;
      if (Object.keys(this.chatTemplateKwargs).length > 0) {
        options = __spreadProps(__spreadValues({}, options), {
          chat_template_kwargs: __spreadValues(__spreadValues({}, this.chatTemplateKwargs), (_a = options.chat_template_kwargs) != null ? _a : {})
        });
      }
      if (options.stream && options.onData) {
        yield this.createCompletionImpl(options);
      } else if (options.stream) {
        return yield this.createCompletionGenerator(options);
      } else {
        return yield this.createCompletionImpl(__spreadProps(__spreadValues({}, options), { stream: false }));
      }
    });
  }
  createCompletion(options) {
    return __async(this, null, function* () {
      if (options.stream && options.onData) {
        yield this.createCompletionImpl(options);
      } else if (options.stream) {
        return yield this.createCompletionGenerator(options);
      } else {
        return yield this.createCompletionImpl(__spreadProps(__spreadValues({}, options), { stream: false }));
      }
    });
  }
  /**
   * Private implementation of createCompletion
   */
  createCompletionImpl(options) {
    return __async(this, null, function* () {
      this.checkModelLoaded();
      const isStream = !!options.stream;
      const isChat = !!options.messages;
      const customOpt = {};
      if (this.seed !== void 0) {
        customOpt.seed = this.seed;
      }
      let files = [];
      if (isChat) {
        const tmp = this.prepareMultimodalInput(
          options
        );
        options = tmp.params;
        files = tmp.files;
      }
      const result = yield this.proxy.wllamaAction(
        "completion",
        {
          _name: "cmpl_req",
          is_chat: isChat,
          data_json: JSON.stringify(__spreadValues(__spreadValues({}, options), customOpt)),
          files: files.map((f) => new Uint8Array(f))
        }
      );
      if (!result.success) {
        throw new WllamaError(
          "Model failed to start inference",
          "inference_error"
        );
      }
      return yield this.getResponse(
        options,
        isStream,
        result.req_id
      );
    });
  }
  /**
   * Same with `createCompletion`, but returns an async iterator instead.
   * Only called when stream=true and no onData is provided.
   */
  createCompletionGenerator(options) {
    return new Promise((resolve) => {
      const createGenerator = cbToAsyncIter(
        (callback) => {
          this.createCompletionImpl(__spreadProps(__spreadValues({}, options), {
            onData: (chunk) => callback(chunk)
          })).then(() => callback(void 0, true)).catch((err) => callback(void 0, false, err));
        }
      );
      resolve(createGenerator());
    });
  }
  /**
   * Whether the currently loaded model supports a specific input modality (e.g. image or audio).
   * @param modality
   * @returns
   */
  supportInputModality(modality) {
    this.checkModelLoaded();
    if (modality === "image") {
      return !!this.loadedContextInfo.has_image_input;
    } else if (modality === "audio") {
      return !!this.loadedContextInfo.has_audio_input;
    } else {
      throw new WllamaError(
        "Unsupported modality: " + modality,
        "unknown_error"
      );
    }
  }
  /**
   * Unload the model and free all memory.
   *
   * Note: This function will NOT crash if model is not yet loaded
   */
  exit() {
    return __async(this, null, function* () {
      var _a;
      yield (_a = this.proxy) == null ? void 0 : _a.wllamaExit();
      this.proxy = null;
    });
  }
  /**
   * [FOR DEBUGGING ONLY] Run ggml backend ops tests without loading any model.
   *
   * Initializes the wasm runtime, executes `test-backend-ops` with the given args, then shuts down.
   *
   * For more info, please refer to guides/debug.md
   *
   * @param args Arguments forwarded to test-backend-ops (e.g. ["-o", "ADD"])
   * @returns retcode (0 = all tests passed) and success flag
   */
  testBackendOps() {
    return __async(this, arguments, function* (args = []) {
      var _a;
      if (!this.pathConfig["default"]) {
        throw new WllamaError(
          '"default" is missing from pathConfig',
          "load_error"
        );
      }
      if (!(yield isSupportMultiThread())) {
        throw new WllamaError(
          "Multi-threading is required to run backend ops tests, but it is not supported in the current environment."
        );
      }
      const tmpProxy = new ProxyToWorker(
        this.getWorkerResources(),
        0,
        // single-thread; no model needed
        (_a = this.config.suppressNativeLog) != null ? _a : false,
        this.logger()
      );
      try {
        yield tmpProxy.moduleInit([]);
        const startResult = yield tmpProxy.wllamaStart();
        if (!startResult.success) {
          throw new WllamaError(
            `Error while calling start function, result = ${startResult}`
          );
        }
        const result = yield tmpProxy.wllamaAction(
          "test_backend_ops",
          { _name: "tbop_req", args: ["test-backend-ops", ...args] }
        );
        return { retcode: result.retcode, success: result.success };
      } finally {
        yield tmpProxy.wllamaExit();
      }
    });
  }
  //////////////////////////////////////////////
  // Low level API
  // TODO: add back
  /**
   * get debug info
   */
  _getDebugInfo() {
    return __async(this, null, function* () {
      this.checkModelLoaded();
      return yield this.proxy.wllamaDebug();
    });
  }
  //////////////////////////////////////////////
  // Utils
  jsonDecode(data_json) {
    try {
      return JSON.parse(data_json);
    } catch (e) {
      this.logger().error("Failed to parse JSON:", data_json);
      throw new WllamaError("Failed to parse model output", "inference_error");
    }
  }
  prepareMultimodalInput(params) {
    const msg = params.messages;
    const msgNew = [];
    const files = [];
    for (const m of msg) {
      if (Array.isArray(m.content)) {
        const newContent = [];
        for (const c of m.content) {
          if (c.type === "text") {
            newContent.push(c);
          } else {
            if (!this.mediaMarker) {
              throw new WllamaError(
                "Media marker is undefined",
                "inference_error"
              );
            }
            files.push(c.data);
            newContent.push({
              type: "text",
              text: this.mediaMarker
            });
          }
        }
        msgNew.push(__spreadProps(__spreadValues({}, m), {
          content: newContent
        }));
      } else {
        msgNew.push(m);
      }
    }
    return {
      params: __spreadProps(__spreadValues({}, params), {
        messages: msgNew
      }),
      files
    };
  }
  // release the slot occupied by the request; cancelling an already-finished request is a no-op
  cancelRequest(reqId) {
    return __async(this, null, function* () {
      try {
        yield this.proxy.wllamaAction("cancel", {
          _name: "cncl_req",
          req_id: reqId
        });
      } catch (e) {
        this.logger().warn("Failed to cancel request", reqId, e);
      }
    });
  }
  getRerankResult(reqId) {
    return __async(this, null, function* () {
      let completed = false;
      try {
        while (true) {
          const chunk = yield this.proxy.wllamaAction(
            "get_result",
            { _name: "gres_req", req_id: reqId }
          );
          const jsonString = chunk.data_json;
          if (jsonString && jsonString.length > 0) {
            if (chunk.is_error) {
              const jsonData = this.jsonDecode(jsonString);
              throw new WllamaError(
                jsonData.message || "Unknown reranking error",
                "inference_error"
              );
            }
            completed = true;
            return this.jsonDecode(jsonString);
          }
          if (!chunk.has_more) {
            completed = true;
            break;
          }
        }
        throw new WllamaError("No reranking result received", "inference_error");
      } finally {
        if (!completed) {
          yield this.cancelRequest(reqId);
        }
      }
    });
  }
  getResponse(options, isStream, reqId) {
    return __async(this, null, function* () {
      var _a, _b;
      let finalResult = null;
      let completed = false;
      try {
        while (true) {
          if ((_a = options.abortSignal) == null ? void 0 : _a.aborted) {
            throw new WllamaAbortError();
          }
          const result_chunk = yield this.proxy.wllamaAction(
            "get_result",
            {
              _name: "gres_req",
              req_id: reqId
            }
          );
          const jsonString = result_chunk.data_json;
          if (!jsonString || jsonString.length === 0) {
            if (!result_chunk.has_more) {
              completed = true;
              break;
            } else {
              continue;
            }
          }
          if (jsonString == "null") {
            continue;
          }
          let jsonData = this.jsonDecode(jsonString);
          finalResult = jsonData;
          if (result_chunk.is_error) {
            this.logger().error("Model returned an error:", jsonData);
            throw new WllamaError(
              jsonData.message || "Unknown inference error",
              "inference_error"
            );
          }
          if (isStream) {
            if (!Array.isArray(jsonData)) {
              jsonData = [jsonData];
            }
            for (const chunk of jsonData) {
              (_b = options.onData) == null ? void 0 : _b.call(options, chunk);
              finalResult = chunk;
            }
          }
          if (!result_chunk.has_more) {
            completed = true;
            break;
          }
        }
      } finally {
        if (!completed) {
          yield this.cancelRequest(reqId);
        }
      }
      return finalResult;
    });
  }
  getWorkerResources() {
    const workerResources = {
      wasmPath: absoluteUrl(this.pathConfig["default"]),
      compat: false
    };
    if (needCompat()) {
      if (!this.compat) {
        this.logger().warn(
          "Not using compat mode" + (isFirefox() ? " (expected on Firefox - WebGPU will be disabled)" : "")
        );
      } else {
        const isUsingDefault = this.compat.worker === WasmCompatFromCDN.worker && this.compat.wasm === WasmCompatFromCDN.wasm;
        if (isUsingDefault) {
          this.logger().warn(
            "Compatibility mode is activated, using resources from CDN. To use local resources, please refer to @wllama/wllama-compat package."
          );
          this.logger().warn(
            "IMPORTANT: Performance will be significantly degraded in compatibility mode."
          );
        }
        workerResources.wasmPath = absoluteUrl(this.compat.wasm);
        workerResources.jsPath = this.compat.worker;
        workerResources.compat = true;
      }
    }
    if (isFirefox()) {
      if (workerResources.compat) {
        this.logger().warn(
          'Using compat mode on Firefox, performance will be significantly degraded; Consider enabling "javascript.options.wasm_js_promise_integration" in "about:config".'
        );
      } else if (!isSupportJSPI()) {
        this.logger().warn(
          'WebGPU is disabled on Firefox due to missing JSPI support. Please consider enabling compat mode, or enabling "javascript.options.wasm_js_promise_integration" in "about:config".'
        );
      }
    }
    return workerResources;
  }
};
export {
  CacheManager,
  LogLevel,
  LoggerWithoutDebug,
  Model,
  ModelManager,
  ModelValidationStatus,
  POLYFILL_ETAG,
  Wllama,
  WllamaAbortError,
  WllamaError,
  WllamaRuntimeError,
  getHFFileSHA256,
  getHFModelSource,
  isValidGgufFile
};
