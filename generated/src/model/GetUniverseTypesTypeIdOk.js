/**
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 0.3.4
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetUniverseTypesTypeIdOk = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetUniverseTypesTypeIdOk model module.
   * @module model/GetUniverseTypesTypeIdOk
   * @version 0.3.4
   */

  /**
   * Constructs a new <code>GetUniverseTypesTypeIdOk</code>.
   * 200 ok object
   * @alias module:model/GetUniverseTypesTypeIdOk
   * @class
   * @param categoryId {Integer} category_id integer
   * @param groupId {Integer} group_id integer
   * @param typeDescription {String} type_description string
   * @param typeName {String} type_name string
   */
  var exports = function(categoryId, groupId, typeDescription, typeName) {
    var _this = this;

    _this['category_id'] = categoryId;

    _this['group_id'] = groupId;

    _this['type_description'] = typeDescription;
    _this['type_name'] = typeName;
  };

  /**
   * Constructs a <code>GetUniverseTypesTypeIdOk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetUniverseTypesTypeIdOk} obj Optional instance to populate.
   * @return {module:model/GetUniverseTypesTypeIdOk} The populated <code>GetUniverseTypesTypeIdOk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('category_id')) {
        obj['category_id'] = ApiClient.convertToType(data['category_id'], 'Integer');
      }
      if (data.hasOwnProperty('graphic_id')) {
        obj['graphic_id'] = ApiClient.convertToType(data['graphic_id'], 'Integer');
      }
      if (data.hasOwnProperty('group_id')) {
        obj['group_id'] = ApiClient.convertToType(data['group_id'], 'Integer');
      }
      if (data.hasOwnProperty('icon_id')) {
        obj['icon_id'] = ApiClient.convertToType(data['icon_id'], 'Integer');
      }
      if (data.hasOwnProperty('type_description')) {
        obj['type_description'] = ApiClient.convertToType(data['type_description'], 'String');
      }
      if (data.hasOwnProperty('type_name')) {
        obj['type_name'] = ApiClient.convertToType(data['type_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * category_id integer
   * @member {Integer} category_id
   */
  exports.prototype['category_id'] = undefined;
  /**
   * graphic_id integer
   * @member {Integer} graphic_id
   */
  exports.prototype['graphic_id'] = undefined;
  /**
   * group_id integer
   * @member {Integer} group_id
   */
  exports.prototype['group_id'] = undefined;
  /**
   * icon_id integer
   * @member {Integer} icon_id
   */
  exports.prototype['icon_id'] = undefined;
  /**
   * type_description string
   * @member {String} type_description
   */
  exports.prototype['type_description'] = undefined;
  /**
   * type_name string
   * @member {String} type_name
   */
  exports.prototype['type_name'] = undefined;



  return exports;
}));


