/**
 * @fileoverview gRPC-Web generated client stub for pilldispenser
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.pilldispenser = require('./pilldispenser_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pilldispenser.PillDispenserClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pilldispenser.PillDispenserPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pilldispenser.MedicationPlanRequest,
 *   !proto.pilldispenser.MedicationPlanReply>}
 */
const methodDescriptor_PillDispenser_GetMedicationPlan = new grpc.web.MethodDescriptor(
  '/pilldispenser.PillDispenser/GetMedicationPlan',
  grpc.web.MethodType.UNARY,
  proto.pilldispenser.MedicationPlanRequest,
  proto.pilldispenser.MedicationPlanReply,
  /**
   * @param {!proto.pilldispenser.MedicationPlanRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pilldispenser.MedicationPlanReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pilldispenser.MedicationPlanRequest,
 *   !proto.pilldispenser.MedicationPlanReply>}
 */
const methodInfo_PillDispenser_GetMedicationPlan = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pilldispenser.MedicationPlanReply,
  /**
   * @param {!proto.pilldispenser.MedicationPlanRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pilldispenser.MedicationPlanReply.deserializeBinary
);


/**
 * @param {!proto.pilldispenser.MedicationPlanRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pilldispenser.MedicationPlanReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pilldispenser.MedicationPlanReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pilldispenser.PillDispenserClient.prototype.getMedicationPlan =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pilldispenser.PillDispenser/GetMedicationPlan',
      request,
      metadata || {},
      methodDescriptor_PillDispenser_GetMedicationPlan,
      callback);
};


/**
 * @param {!proto.pilldispenser.MedicationPlanRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pilldispenser.MedicationPlanReply>}
 *     Promise that resolves to the response
 */
proto.pilldispenser.PillDispenserPromiseClient.prototype.getMedicationPlan =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pilldispenser.PillDispenser/GetMedicationPlan',
      request,
      metadata || {},
      methodDescriptor_PillDispenser_GetMedicationPlan);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pilldispenser.MedicationTakenRequest,
 *   !proto.pilldispenser.MedicationTakenReply>}
 */
const methodDescriptor_PillDispenser_MedicationTaken = new grpc.web.MethodDescriptor(
  '/pilldispenser.PillDispenser/MedicationTaken',
  grpc.web.MethodType.UNARY,
  proto.pilldispenser.MedicationTakenRequest,
  proto.pilldispenser.MedicationTakenReply,
  /**
   * @param {!proto.pilldispenser.MedicationTakenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pilldispenser.MedicationTakenReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pilldispenser.MedicationTakenRequest,
 *   !proto.pilldispenser.MedicationTakenReply>}
 */
const methodInfo_PillDispenser_MedicationTaken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pilldispenser.MedicationTakenReply,
  /**
   * @param {!proto.pilldispenser.MedicationTakenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pilldispenser.MedicationTakenReply.deserializeBinary
);


/**
 * @param {!proto.pilldispenser.MedicationTakenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pilldispenser.MedicationTakenReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pilldispenser.MedicationTakenReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pilldispenser.PillDispenserClient.prototype.medicationTaken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pilldispenser.PillDispenser/MedicationTaken',
      request,
      metadata || {},
      methodDescriptor_PillDispenser_MedicationTaken,
      callback);
};


/**
 * @param {!proto.pilldispenser.MedicationTakenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pilldispenser.MedicationTakenReply>}
 *     Promise that resolves to the response
 */
proto.pilldispenser.PillDispenserPromiseClient.prototype.medicationTaken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pilldispenser.PillDispenser/MedicationTaken',
      request,
      metadata || {},
      methodDescriptor_PillDispenser_MedicationTaken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pilldispenser.MedicationMissedRequest,
 *   !proto.pilldispenser.MedicationMissedReply>}
 */
const methodDescriptor_PillDispenser_MedicationMissed = new grpc.web.MethodDescriptor(
  '/pilldispenser.PillDispenser/MedicationMissed',
  grpc.web.MethodType.UNARY,
  proto.pilldispenser.MedicationMissedRequest,
  proto.pilldispenser.MedicationMissedReply,
  /**
   * @param {!proto.pilldispenser.MedicationMissedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pilldispenser.MedicationMissedReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pilldispenser.MedicationMissedRequest,
 *   !proto.pilldispenser.MedicationMissedReply>}
 */
const methodInfo_PillDispenser_MedicationMissed = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pilldispenser.MedicationMissedReply,
  /**
   * @param {!proto.pilldispenser.MedicationMissedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pilldispenser.MedicationMissedReply.deserializeBinary
);


/**
 * @param {!proto.pilldispenser.MedicationMissedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pilldispenser.MedicationMissedReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pilldispenser.MedicationMissedReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pilldispenser.PillDispenserClient.prototype.medicationMissed =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pilldispenser.PillDispenser/MedicationMissed',
      request,
      metadata || {},
      methodDescriptor_PillDispenser_MedicationMissed,
      callback);
};


/**
 * @param {!proto.pilldispenser.MedicationMissedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pilldispenser.MedicationMissedReply>}
 *     Promise that resolves to the response
 */
proto.pilldispenser.PillDispenserPromiseClient.prototype.medicationMissed =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pilldispenser.PillDispenser/MedicationMissed',
      request,
      metadata || {},
      methodDescriptor_PillDispenser_MedicationMissed);
};


module.exports = proto.pilldispenser;

