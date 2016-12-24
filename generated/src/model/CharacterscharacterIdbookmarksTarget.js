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
    define(['ApiClient', 'model/CharacterscharacterIdbookmarksTargetCoordinates', 'model/CharacterscharacterIdbookmarksTargetItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CharacterscharacterIdbookmarksTargetCoordinates'), require('./CharacterscharacterIdbookmarksTargetItem'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.CharacterscharacterIdbookmarksTarget = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.CharacterscharacterIdbookmarksTargetCoordinates, root.EveSwaggerInterface.CharacterscharacterIdbookmarksTargetItem);
  }
}(this, function(ApiClient, CharacterscharacterIdbookmarksTargetCoordinates, CharacterscharacterIdbookmarksTargetItem) {
  'use strict';




  /**
   * The CharacterscharacterIdbookmarksTarget model module.
   * @module model/CharacterscharacterIdbookmarksTarget
   * @version 0.3.4
   */

  /**
   * Constructs a new <code>CharacterscharacterIdbookmarksTarget</code>.
   * target object
   * @alias module:model/CharacterscharacterIdbookmarksTarget
   * @class
   * @param locationId {Integer} location_id integer
   */
  var exports = function(locationId) {
    var _this = this;



    _this['location_id'] = locationId;
  };

  /**
   * Constructs a <code>CharacterscharacterIdbookmarksTarget</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CharacterscharacterIdbookmarksTarget} obj Optional instance to populate.
   * @return {module:model/CharacterscharacterIdbookmarksTarget} The populated <code>CharacterscharacterIdbookmarksTarget</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('coordinates')) {
        obj['coordinates'] = CharacterscharacterIdbookmarksTargetCoordinates.constructFromObject(data['coordinates']);
      }
      if (data.hasOwnProperty('item')) {
        obj['item'] = CharacterscharacterIdbookmarksTargetItem.constructFromObject(data['item']);
      }
      if (data.hasOwnProperty('location_id')) {
        obj['location_id'] = ApiClient.convertToType(data['location_id'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CharacterscharacterIdbookmarksTargetCoordinates} coordinates
   */
  exports.prototype['coordinates'] = undefined;
  /**
   * @member {module:model/CharacterscharacterIdbookmarksTargetItem} item
   */
  exports.prototype['item'] = undefined;
  /**
   * location_id integer
   * @member {Integer} location_id
   */
  exports.prototype['location_id'] = undefined;



  return exports;
}));


