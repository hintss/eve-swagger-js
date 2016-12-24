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
    root.EveSwaggerInterface.GetWarsWarIdOkDefender = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetWarsWarIdOkDefender model module.
   * @module model/GetWarsWarIdOkDefender
   * @version 0.3.4
   */

  /**
   * Constructs a new <code>GetWarsWarIdOkDefender</code>.
   * The defending corporation or alliance that declared this war, only contains either corporation_id or alliance_id
   * @alias module:model/GetWarsWarIdOkDefender
   * @class
   * @param iskDestroyed {Number} ISK value of ships the defender has killed
   * @param shipsKilled {Integer} The number of ships the defender has killed
   */
  var exports = function(iskDestroyed, shipsKilled) {
    var _this = this;



    _this['isk_destroyed'] = iskDestroyed;
    _this['ships_killed'] = shipsKilled;
  };

  /**
   * Constructs a <code>GetWarsWarIdOkDefender</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetWarsWarIdOkDefender} obj Optional instance to populate.
   * @return {module:model/GetWarsWarIdOkDefender} The populated <code>GetWarsWarIdOkDefender</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('alliance_id')) {
        obj['alliance_id'] = ApiClient.convertToType(data['alliance_id'], 'Integer');
      }
      if (data.hasOwnProperty('corporation_id')) {
        obj['corporation_id'] = ApiClient.convertToType(data['corporation_id'], 'Integer');
      }
      if (data.hasOwnProperty('isk_destroyed')) {
        obj['isk_destroyed'] = ApiClient.convertToType(data['isk_destroyed'], 'Number');
      }
      if (data.hasOwnProperty('ships_killed')) {
        obj['ships_killed'] = ApiClient.convertToType(data['ships_killed'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * Alliance ID if and only if the defender is an alliance
   * @member {Integer} alliance_id
   */
  exports.prototype['alliance_id'] = undefined;
  /**
   * Corporation ID if and only if the defender is a corporation
   * @member {Integer} corporation_id
   */
  exports.prototype['corporation_id'] = undefined;
  /**
   * ISK value of ships the defender has killed
   * @member {Number} isk_destroyed
   */
  exports.prototype['isk_destroyed'] = undefined;
  /**
   * The number of ships the defender has killed
   * @member {Integer} ships_killed
   */
  exports.prototype['ships_killed'] = undefined;



  return exports;
}));


