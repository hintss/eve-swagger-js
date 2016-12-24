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
    root.EveSwaggerInterface.GetCharactersCharacterIdPlanetsPlanetIdOkExtractorDetailsHeads = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetCharactersCharacterIdPlanetsPlanetIdOkExtractorDetailsHeads model module.
   * @module model/GetCharactersCharacterIdPlanetsPlanetIdOkExtractorDetailsHeads
   * @version 0.3.4
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdPlanetsPlanetIdOkExtractorDetailsHeads</code>.
   * head object
   * @alias module:model/GetCharactersCharacterIdPlanetsPlanetIdOkExtractorDetailsHeads
   * @class
   * @param headId {Integer} head_id integer
   * @param latitude {Number} latitude number
   * @param longitude {Number} longitude number
   */
  var exports = function(headId, latitude, longitude) {
    var _this = this;

    _this['head_id'] = headId;
    _this['latitude'] = latitude;
    _this['longitude'] = longitude;
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdPlanetsPlanetIdOkExtractorDetailsHeads</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdPlanetsPlanetIdOkExtractorDetailsHeads} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdPlanetsPlanetIdOkExtractorDetailsHeads} The populated <code>GetCharactersCharacterIdPlanetsPlanetIdOkExtractorDetailsHeads</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('head_id')) {
        obj['head_id'] = ApiClient.convertToType(data['head_id'], 'Integer');
      }
      if (data.hasOwnProperty('latitude')) {
        obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
      }
      if (data.hasOwnProperty('longitude')) {
        obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
      }
    }
    return obj;
  }

  /**
   * head_id integer
   * @member {Integer} head_id
   */
  exports.prototype['head_id'] = undefined;
  /**
   * latitude number
   * @member {Number} latitude
   */
  exports.prototype['latitude'] = undefined;
  /**
   * longitude number
   * @member {Number} longitude
   */
  exports.prototype['longitude'] = undefined;



  return exports;
}));


