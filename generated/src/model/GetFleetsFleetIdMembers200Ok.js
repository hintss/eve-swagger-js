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
    root.EveSwaggerInterface.GetFleetsFleetIdMembers200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetFleetsFleetIdMembers200Ok model module.
   * @module model/GetFleetsFleetIdMembers200Ok
   * @version 0.3.4
   */

  /**
   * Constructs a new <code>GetFleetsFleetIdMembers200Ok</code>.
   * 200 ok object
   * @alias module:model/GetFleetsFleetIdMembers200Ok
   * @class
   * @param characterId {Integer} character_id integer
   * @param joinTime {Date} join_time string
   * @param role {module:model/GetFleetsFleetIdMembers200Ok.RoleEnum} Member’s role in fleet
   * @param roleName {String} Localized role names
   * @param shipTypeId {Integer} ship_type_id integer
   * @param solarSystemId {Integer} Solar system the member is located in
   * @param squadId {Integer} ID of the squad the member is in. If not applicable, will be set to -1
   * @param takesFleetWarp {Boolean} Whether the member take fleet warps
   * @param wingId {Integer} ID of the wing the member is in. If not applicable, will be set to -1
   */
  var exports = function(characterId, joinTime, role, roleName, shipTypeId, solarSystemId, squadId, takesFleetWarp, wingId) {
    var _this = this;

    _this['character_id'] = characterId;
    _this['join_time'] = joinTime;
    _this['role'] = role;
    _this['role_name'] = roleName;
    _this['ship_type_id'] = shipTypeId;
    _this['solar_system_id'] = solarSystemId;
    _this['squad_id'] = squadId;

    _this['takes_fleet_warp'] = takesFleetWarp;
    _this['wing_id'] = wingId;
  };

  /**
   * Constructs a <code>GetFleetsFleetIdMembers200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetFleetsFleetIdMembers200Ok} obj Optional instance to populate.
   * @return {module:model/GetFleetsFleetIdMembers200Ok} The populated <code>GetFleetsFleetIdMembers200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('character_id')) {
        obj['character_id'] = ApiClient.convertToType(data['character_id'], 'Integer');
      }
      if (data.hasOwnProperty('join_time')) {
        obj['join_time'] = ApiClient.convertToType(data['join_time'], 'Date');
      }
      if (data.hasOwnProperty('role')) {
        obj['role'] = ApiClient.convertToType(data['role'], 'String');
      }
      if (data.hasOwnProperty('role_name')) {
        obj['role_name'] = ApiClient.convertToType(data['role_name'], 'String');
      }
      if (data.hasOwnProperty('ship_type_id')) {
        obj['ship_type_id'] = ApiClient.convertToType(data['ship_type_id'], 'Integer');
      }
      if (data.hasOwnProperty('solar_system_id')) {
        obj['solar_system_id'] = ApiClient.convertToType(data['solar_system_id'], 'Integer');
      }
      if (data.hasOwnProperty('squad_id')) {
        obj['squad_id'] = ApiClient.convertToType(data['squad_id'], 'Integer');
      }
      if (data.hasOwnProperty('station_id')) {
        obj['station_id'] = ApiClient.convertToType(data['station_id'], 'Integer');
      }
      if (data.hasOwnProperty('takes_fleet_warp')) {
        obj['takes_fleet_warp'] = ApiClient.convertToType(data['takes_fleet_warp'], 'Boolean');
      }
      if (data.hasOwnProperty('wing_id')) {
        obj['wing_id'] = ApiClient.convertToType(data['wing_id'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * character_id integer
   * @member {Integer} character_id
   */
  exports.prototype['character_id'] = undefined;
  /**
   * join_time string
   * @member {Date} join_time
   */
  exports.prototype['join_time'] = undefined;
  /**
   * Member’s role in fleet
   * @member {module:model/GetFleetsFleetIdMembers200Ok.RoleEnum} role
   */
  exports.prototype['role'] = undefined;
  /**
   * Localized role names
   * @member {String} role_name
   */
  exports.prototype['role_name'] = undefined;
  /**
   * ship_type_id integer
   * @member {Integer} ship_type_id
   */
  exports.prototype['ship_type_id'] = undefined;
  /**
   * Solar system the member is located in
   * @member {Integer} solar_system_id
   */
  exports.prototype['solar_system_id'] = undefined;
  /**
   * ID of the squad the member is in. If not applicable, will be set to -1
   * @member {Integer} squad_id
   */
  exports.prototype['squad_id'] = undefined;
  /**
   * Station in which the member is docked in, if applicable
   * @member {Integer} station_id
   */
  exports.prototype['station_id'] = undefined;
  /**
   * Whether the member take fleet warps
   * @member {Boolean} takes_fleet_warp
   */
  exports.prototype['takes_fleet_warp'] = undefined;
  /**
   * ID of the wing the member is in. If not applicable, will be set to -1
   * @member {Integer} wing_id
   */
  exports.prototype['wing_id'] = undefined;


  /**
   * Allowed values for the <code>role</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RoleEnum = {
    /**
     * value: "fleet_commander"
     * @const
     */
    "fleet_commander": "fleet_commander",
    /**
     * value: "wing_commander"
     * @const
     */
    "wing_commander": "wing_commander",
    /**
     * value: "squad_commander"
     * @const
     */
    "squad_commander": "squad_commander",
    /**
     * value: "squad_member"
     * @const
     */
    "squad_member": "squad_member"  };


  return exports;
}));


