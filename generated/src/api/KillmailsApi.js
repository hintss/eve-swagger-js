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
    define(['ApiClient', 'model/GetCharactersCharacterIdKillmailsRecentInternalServerError', 'model/GetCharactersCharacterIdKillmailsRecentForbidden', 'model/GetCharactersCharacterIdKillmailsRecent200Ok', 'model/GetKillmailsKillmailIdKillmailHashOk', 'model/GetKillmailsKillmailIdKillmailHashUnprocessableEntity', 'model/GetKillmailsKillmailIdKillmailHashInternalServerError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GetCharactersCharacterIdKillmailsRecentInternalServerError'), require('../model/GetCharactersCharacterIdKillmailsRecentForbidden'), require('../model/GetCharactersCharacterIdKillmailsRecent200Ok'), require('../model/GetKillmailsKillmailIdKillmailHashOk'), require('../model/GetKillmailsKillmailIdKillmailHashUnprocessableEntity'), require('../model/GetKillmailsKillmailIdKillmailHashInternalServerError'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.KillmailsApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetCharactersCharacterIdKillmailsRecentInternalServerError, root.EveSwaggerInterface.GetCharactersCharacterIdKillmailsRecentForbidden, root.EveSwaggerInterface.GetCharactersCharacterIdKillmailsRecent200Ok, root.EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashOk, root.EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashUnprocessableEntity, root.EveSwaggerInterface.GetKillmailsKillmailIdKillmailHashInternalServerError);
  }
}(this, function(ApiClient, GetCharactersCharacterIdKillmailsRecentInternalServerError, GetCharactersCharacterIdKillmailsRecentForbidden, GetCharactersCharacterIdKillmailsRecent200Ok, GetKillmailsKillmailIdKillmailHashOk, GetKillmailsKillmailIdKillmailHashUnprocessableEntity, GetKillmailsKillmailIdKillmailHashInternalServerError) {
  'use strict';

  /**
   * Killmails service.
   * @module api/KillmailsApi
   * @version 0.3.4
   */

  /**
   * Constructs a new KillmailsApi. 
   * @alias module:api/KillmailsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCharactersCharacterIdKillmailsRecent operation.
     * @callback module:api/KillmailsApi~getCharactersCharacterIdKillmailsRecentCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCharactersCharacterIdKillmailsRecent200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List kills and losses
     * Return a list of character&#39;s recent kills and losses  ---  Alternate route: &#x60;/v1/characters/{character_id}/killmails/recent/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/killmails/recent/&#x60;  Alternate route: &#x60;/dev/characters/{character_id}/killmails/recent/&#x60;   ---  This route is cached for up to 120 seconds
     * @param {Integer} characterId An EVE character ID
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.maxCount How many killmails to return at maximum (default to 50)
     * @param {Integer} opts.maxKillId Only return killmails with ID smaller than this. 
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/KillmailsApi~getCharactersCharacterIdKillmailsRecentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCharactersCharacterIdKillmailsRecent200Ok>}
     */
    this.getCharactersCharacterIdKillmailsRecent = function(characterId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'characterId' is set
      if (characterId == undefined || characterId == null) {
        throw "Missing the required parameter 'characterId' when calling getCharactersCharacterIdKillmailsRecent";
      }


      var pathParams = {
        'character_id': characterId
      };
      var queryParams = {
        'max_count': opts['maxCount'],
        'max_kill_id': opts['maxKillId'],
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [GetCharactersCharacterIdKillmailsRecent200Ok];

      return this.apiClient.callApi(
        '/characters/{character_id}/killmails/recent/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getKillmailsKillmailIdKillmailHash operation.
     * @callback module:api/KillmailsApi~getKillmailsKillmailIdKillmailHashCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetKillmailsKillmailIdKillmailHashOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single killmail
     * Return a single killmail from its ID and hash  ---  Alternate route: &#x60;/v1/killmails/{killmail_id}/{killmail_hash}/&#x60;  Alternate route: &#x60;/legacy/killmails/{killmail_id}/{killmail_hash}/&#x60;  Alternate route: &#x60;/dev/killmails/{killmail_id}/{killmail_hash}/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Integer} killmailId The killmail ID to be queried
     * @param {String} killmailHash The killmail hash for verification
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/KillmailsApi~getKillmailsKillmailIdKillmailHashCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetKillmailsKillmailIdKillmailHashOk}
     */
    this.getKillmailsKillmailIdKillmailHash = function(killmailId, killmailHash, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'killmailId' is set
      if (killmailId == undefined || killmailId == null) {
        throw "Missing the required parameter 'killmailId' when calling getKillmailsKillmailIdKillmailHash";
      }

      // verify the required parameter 'killmailHash' is set
      if (killmailHash == undefined || killmailHash == null) {
        throw "Missing the required parameter 'killmailHash' when calling getKillmailsKillmailIdKillmailHash";
      }


      var pathParams = {
        'killmail_id': killmailId,
        'killmail_hash': killmailHash
      };
      var queryParams = {
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GetKillmailsKillmailIdKillmailHashOk;

      return this.apiClient.callApi(
        '/killmails/{killmail_id}/{killmail_hash}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
