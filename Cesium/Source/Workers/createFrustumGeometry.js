/* This file is automatically rebuilt by the Cesium build process. */
define(['./when-8166c7dd', './FrustumGeometry-5e81e036', './Transforms-62a339c3', './Matrix2-92b7fb9d', './RuntimeError-4fdc4459', './ComponentDatatype-9ed50558', './WebGLConstants-0664004c', './combine-a5c4cc47', './GeometryAttribute-6f4c3b93', './GeometryAttributes-50becc99', './Plane-049255eb', './VertexFormat-c0801687'], function (when, FrustumGeometry, Transforms, Matrix2, RuntimeError, ComponentDatatype, WebGLConstants, combine, GeometryAttribute, GeometryAttributes, Plane, VertexFormat) { 'use strict';

  function createFrustumGeometry(frustumGeometry, offset) {
    if (when.defined(offset)) {
      frustumGeometry = FrustumGeometry.FrustumGeometry.unpack(frustumGeometry, offset);
    }
    return FrustumGeometry.FrustumGeometry.createGeometry(frustumGeometry);
  }

  return createFrustumGeometry;

});
