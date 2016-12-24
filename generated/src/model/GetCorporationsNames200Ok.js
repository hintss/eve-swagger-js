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
    root.EveSwaggerInterface.GetCorporationsNames200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCorporationsNames200Ok model module.
   * @module model/GetCorporationsNames200Ok
   * @version 0.3.4
   */

  /**
   * Constructs a new <code>GetCorporationsNames200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCorporationsNames200Ok
   * @class
   * @param corporationId {Integer} corporation_id integer
   * @param corporationName {String} corporation_name string
   */
  var exports = function(corporationId, corporationName) {
    var _this = this;

    _this['corporation_id'] = corporationId;
    _this['corporation_name'] = corporationName;
  };

  /**
   * Constructs a <code>GetCorporationsNames200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCorporationsNames200Ok} obj Optional instance to populate.
   * @return {module:model/GetCorporationsNames200Ok} The populated <code>GetCorporationsNames200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('corporation_id')) {
        obj['corporation_id'] = ApiClient.convertToType(data['corporation_id'], 'Integer');
      }
      if (data.hasOwnProperty('corporation_name')) {
        obj['corporation_name'] = ApiClient.convertToType(data['corporation_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * corporation_id integer
   * @member {Integer} corporation_id
   */
  exports.prototype['corporation_id'] = undefined;
  /**
   * corporation_name string
   * @member {String} corporation_name
   */
  exports.prototype['corporation_name'] = undefined;



  return exports;
}));


