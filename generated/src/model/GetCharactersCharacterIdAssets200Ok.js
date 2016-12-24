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
    root.EveSwaggerInterface.GetCharactersCharacterIdAssets200Ok = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCharactersCharacterIdAssets200Ok model module.
   * @module model/GetCharactersCharacterIdAssets200Ok
   * @version 0.3.4
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdAssets200Ok</code>.
   * 200 ok object
   * @alias module:model/GetCharactersCharacterIdAssets200Ok
   * @class
   * @param isSingleton {Boolean} is_singleton boolean
   * @param itemId {Integer} item_id integer
   * @param locationFlag {module:model/GetCharactersCharacterIdAssets200Ok.LocationFlagEnum} location_flag string
   * @param locationId {Integer} location_id integer
   * @param locationType {module:model/GetCharactersCharacterIdAssets200Ok.LocationTypeEnum} location_type string
   * @param typeId {Integer} type_id integer
   */
  var exports = function(isSingleton, itemId, locationFlag, locationId, locationType, typeId) {
    var _this = this;

    _this['is_singleton'] = isSingleton;
    _this['item_id'] = itemId;
    _this['location_flag'] = locationFlag;
    _this['location_id'] = locationId;
    _this['location_type'] = locationType;

    _this['type_id'] = typeId;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdAssets200Ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdAssets200Ok} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdAssets200Ok} The populated <code>GetCharactersCharacterIdAssets200Ok</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('is_singleton')) {
        obj['is_singleton'] = ApiClient.convertToType(data['is_singleton'], 'Boolean');
      }
      if (data.hasOwnProperty('item_id')) {
        obj['item_id'] = ApiClient.convertToType(data['item_id'], 'Integer');
      }
      if (data.hasOwnProperty('location_flag')) {
        obj['location_flag'] = ApiClient.convertToType(data['location_flag'], 'String');
      }
      if (data.hasOwnProperty('location_id')) {
        obj['location_id'] = ApiClient.convertToType(data['location_id'], 'Integer');
      }
      if (data.hasOwnProperty('location_type')) {
        obj['location_type'] = ApiClient.convertToType(data['location_type'], 'String');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Integer');
      }
      if (data.hasOwnProperty('type_id')) {
        obj['type_id'] = ApiClient.convertToType(data['type_id'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * is_singleton boolean
   * @member {Boolean} is_singleton
   */
  exports.prototype['is_singleton'] = undefined;
  /**
   * item_id integer
   * @member {Integer} item_id
   */
  exports.prototype['item_id'] = undefined;
  /**
   * location_flag string
   * @member {module:model/GetCharactersCharacterIdAssets200Ok.LocationFlagEnum} location_flag
   */
  exports.prototype['location_flag'] = undefined;
  /**
   * location_id integer
   * @member {Integer} location_id
   */
  exports.prototype['location_id'] = undefined;
  /**
   * location_type string
   * @member {module:model/GetCharactersCharacterIdAssets200Ok.LocationTypeEnum} location_type
   */
  exports.prototype['location_type'] = undefined;
  /**
   * quantity integer
   * @member {Integer} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * type_id integer
   * @member {Integer} type_id
   */
  exports.prototype['type_id'] = undefined;


  /**
   * Allowed values for the <code>location_flag</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LocationFlagEnum = {
    /**
     * value: "AutoFit"
     * @const
     */
    "AutoFit": "AutoFit",
    /**
     * value: "Cargo"
     * @const
     */
    "Cargo": "Cargo",
    /**
     * value: "CorpseBay"
     * @const
     */
    "CorpseBay": "CorpseBay",
    /**
     * value: "DroneBay"
     * @const
     */
    "DroneBay": "DroneBay",
    /**
     * value: "FleetHangar"
     * @const
     */
    "FleetHangar": "FleetHangar",
    /**
     * value: "Deliveries"
     * @const
     */
    "Deliveries": "Deliveries",
    /**
     * value: "HiddenModifiers"
     * @const
     */
    "HiddenModifiers": "HiddenModifiers",
    /**
     * value: "Hangar"
     * @const
     */
    "Hangar": "Hangar",
    /**
     * value: "HangarAll"
     * @const
     */
    "HangarAll": "HangarAll",
    /**
     * value: "LoSlot0"
     * @const
     */
    "LoSlot0": "LoSlot0",
    /**
     * value: "LoSlot1"
     * @const
     */
    "LoSlot1": "LoSlot1",
    /**
     * value: "LoSlot2"
     * @const
     */
    "LoSlot2": "LoSlot2",
    /**
     * value: "LoSlot3"
     * @const
     */
    "LoSlot3": "LoSlot3",
    /**
     * value: "LoSlot4"
     * @const
     */
    "LoSlot4": "LoSlot4",
    /**
     * value: "LoSlot5"
     * @const
     */
    "LoSlot5": "LoSlot5",
    /**
     * value: "LoSlot6"
     * @const
     */
    "LoSlot6": "LoSlot6",
    /**
     * value: "LoSlot7"
     * @const
     */
    "LoSlot7": "LoSlot7",
    /**
     * value: "MedSlot0"
     * @const
     */
    "MedSlot0": "MedSlot0",
    /**
     * value: "MedSlot1"
     * @const
     */
    "MedSlot1": "MedSlot1",
    /**
     * value: "MedSlot2"
     * @const
     */
    "MedSlot2": "MedSlot2",
    /**
     * value: "MedSlot3"
     * @const
     */
    "MedSlot3": "MedSlot3",
    /**
     * value: "MedSlot4"
     * @const
     */
    "MedSlot4": "MedSlot4",
    /**
     * value: "MedSlot5"
     * @const
     */
    "MedSlot5": "MedSlot5",
    /**
     * value: "MedSlot6"
     * @const
     */
    "MedSlot6": "MedSlot6",
    /**
     * value: "MedSlot7"
     * @const
     */
    "MedSlot7": "MedSlot7",
    /**
     * value: "HiSlot0"
     * @const
     */
    "HiSlot0": "HiSlot0",
    /**
     * value: "HiSlot1"
     * @const
     */
    "HiSlot1": "HiSlot1",
    /**
     * value: "HiSlot2"
     * @const
     */
    "HiSlot2": "HiSlot2",
    /**
     * value: "HiSlot3"
     * @const
     */
    "HiSlot3": "HiSlot3",
    /**
     * value: "HiSlot4"
     * @const
     */
    "HiSlot4": "HiSlot4",
    /**
     * value: "HiSlot5"
     * @const
     */
    "HiSlot5": "HiSlot5",
    /**
     * value: "HiSlot6"
     * @const
     */
    "HiSlot6": "HiSlot6",
    /**
     * value: "HiSlot7"
     * @const
     */
    "HiSlot7": "HiSlot7",
    /**
     * value: "AssetSafety"
     * @const
     */
    "AssetSafety": "AssetSafety",
    /**
     * value: "Locked"
     * @const
     */
    "Locked": "Locked",
    /**
     * value: "Unlocked"
     * @const
     */
    "Unlocked": "Unlocked",
    /**
     * value: "Implant"
     * @const
     */
    "Implant": "Implant",
    /**
     * value: "QuafeBay"
     * @const
     */
    "QuafeBay": "QuafeBay",
    /**
     * value: "RigSlot0"
     * @const
     */
    "RigSlot0": "RigSlot0",
    /**
     * value: "RigSlot1"
     * @const
     */
    "RigSlot1": "RigSlot1",
    /**
     * value: "RigSlot2"
     * @const
     */
    "RigSlot2": "RigSlot2",
    /**
     * value: "RigSlot3"
     * @const
     */
    "RigSlot3": "RigSlot3",
    /**
     * value: "RigSlot4"
     * @const
     */
    "RigSlot4": "RigSlot4",
    /**
     * value: "RigSlot5"
     * @const
     */
    "RigSlot5": "RigSlot5",
    /**
     * value: "RigSlot6"
     * @const
     */
    "RigSlot6": "RigSlot6",
    /**
     * value: "RigSlot7"
     * @const
     */
    "RigSlot7": "RigSlot7",
    /**
     * value: "ShipHangar"
     * @const
     */
    "ShipHangar": "ShipHangar",
    /**
     * value: "SpecializedFuelBay"
     * @const
     */
    "SpecializedFuelBay": "SpecializedFuelBay",
    /**
     * value: "SpecializedOreHold"
     * @const
     */
    "SpecializedOreHold": "SpecializedOreHold",
    /**
     * value: "SpecializedGasHold"
     * @const
     */
    "SpecializedGasHold": "SpecializedGasHold",
    /**
     * value: "SpecializedMineralHold"
     * @const
     */
    "SpecializedMineralHold": "SpecializedMineralHold",
    /**
     * value: "SpecializedSalvageHold"
     * @const
     */
    "SpecializedSalvageHold": "SpecializedSalvageHold",
    /**
     * value: "SpecializedShipHold"
     * @const
     */
    "SpecializedShipHold": "SpecializedShipHold",
    /**
     * value: "SpecializedSmallShipHold"
     * @const
     */
    "SpecializedSmallShipHold": "SpecializedSmallShipHold",
    /**
     * value: "SpecializedMediumShipHold"
     * @const
     */
    "SpecializedMediumShipHold": "SpecializedMediumShipHold",
    /**
     * value: "SpecializedLargeShipHold"
     * @const
     */
    "SpecializedLargeShipHold": "SpecializedLargeShipHold",
    /**
     * value: "SpecializedIndustrialShipHold"
     * @const
     */
    "SpecializedIndustrialShipHold": "SpecializedIndustrialShipHold",
    /**
     * value: "SpecializedAmmoHold"
     * @const
     */
    "SpecializedAmmoHold": "SpecializedAmmoHold",
    /**
     * value: "SpecializedCommandCenterHold"
     * @const
     */
    "SpecializedCommandCenterHold": "SpecializedCommandCenterHold",
    /**
     * value: "SpecializedPlanetaryCommoditiesHold"
     * @const
     */
    "SpecializedPlanetaryCommoditiesHold": "SpecializedPlanetaryCommoditiesHold",
    /**
     * value: "SpecializedMaterialBay"
     * @const
     */
    "SpecializedMaterialBay": "SpecializedMaterialBay",
    /**
     * value: "SubSystemSlot0"
     * @const
     */
    "SubSystemSlot0": "SubSystemSlot0",
    /**
     * value: "SubSystemSlot1"
     * @const
     */
    "SubSystemSlot1": "SubSystemSlot1",
    /**
     * value: "SubSystemSlot2"
     * @const
     */
    "SubSystemSlot2": "SubSystemSlot2",
    /**
     * value: "SubSystemSlot3"
     * @const
     */
    "SubSystemSlot3": "SubSystemSlot3",
    /**
     * value: "SubSystemSlot4"
     * @const
     */
    "SubSystemSlot4": "SubSystemSlot4",
    /**
     * value: "SubSystemSlot5"
     * @const
     */
    "SubSystemSlot5": "SubSystemSlot5",
    /**
     * value: "SubSystemSlot6"
     * @const
     */
    "SubSystemSlot6": "SubSystemSlot6",
    /**
     * value: "SubSystemSlot7"
     * @const
     */
    "SubSystemSlot7": "SubSystemSlot7",
    /**
     * value: "FighterBay"
     * @const
     */
    "FighterBay": "FighterBay",
    /**
     * value: "FighterTube0"
     * @const
     */
    "FighterTube0": "FighterTube0",
    /**
     * value: "FighterTube1"
     * @const
     */
    "FighterTube1": "FighterTube1",
    /**
     * value: "FighterTube2"
     * @const
     */
    "FighterTube2": "FighterTube2",
    /**
     * value: "FighterTube3"
     * @const
     */
    "FighterTube3": "FighterTube3",
    /**
     * value: "FighterTube4"
     * @const
     */
    "FighterTube4": "FighterTube4"  };

  /**
   * Allowed values for the <code>location_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LocationTypeEnum = {
    /**
     * value: "station"
     * @const
     */
    "station": "station",
    /**
     * value: "solar_system"
     * @const
     */
    "solar_system": "solar_system",
    /**
     * value: "other"
     * @const
     */
    "other": "other"  };


  return exports;
}));


