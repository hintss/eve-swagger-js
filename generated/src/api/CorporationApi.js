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
    define(['ApiClient', 'model/GetCorporationsCorporationIdOk', 'model/GetCorporationsCorporationIdNotFound', 'model/GetCorporationsCorporationIdInternalServerError', 'model/GetCorporationsCorporationIdAlliancehistoryInternalServerError', 'model/GetCorporationsCorporationIdAlliancehistory200Ok', 'model/GetCorporationsCorporationIdIconsNotFound', 'model/GetCorporationsCorporationIdIconsOk', 'model/GetCorporationsCorporationIdIconsInternalServerError', 'model/GetCorporationsCorporationIdMembersInternalServerError', 'model/GetCorporationsCorporationIdMembers200Ok', 'model/GetCorporationsCorporationIdMembersForbidden', 'model/GetCorporationsCorporationIdRoles200Ok', 'model/GetCorporationsCorporationIdRolesInternalServerError', 'model/GetCorporationsCorporationIdRolesForbidden', 'model/GetCorporationsNames200Ok', 'model/GetCorporationsNamesInternalServerError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GetCorporationsCorporationIdOk'), require('../model/GetCorporationsCorporationIdNotFound'), require('../model/GetCorporationsCorporationIdInternalServerError'), require('../model/GetCorporationsCorporationIdAlliancehistoryInternalServerError'), require('../model/GetCorporationsCorporationIdAlliancehistory200Ok'), require('../model/GetCorporationsCorporationIdIconsNotFound'), require('../model/GetCorporationsCorporationIdIconsOk'), require('../model/GetCorporationsCorporationIdIconsInternalServerError'), require('../model/GetCorporationsCorporationIdMembersInternalServerError'), require('../model/GetCorporationsCorporationIdMembers200Ok'), require('../model/GetCorporationsCorporationIdMembersForbidden'), require('../model/GetCorporationsCorporationIdRoles200Ok'), require('../model/GetCorporationsCorporationIdRolesInternalServerError'), require('../model/GetCorporationsCorporationIdRolesForbidden'), require('../model/GetCorporationsNames200Ok'), require('../model/GetCorporationsNamesInternalServerError'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.CorporationApi = factory(root.EveSwaggerInterface.ApiClient, root.EveSwaggerInterface.GetCorporationsCorporationIdOk, root.EveSwaggerInterface.GetCorporationsCorporationIdNotFound, root.EveSwaggerInterface.GetCorporationsCorporationIdInternalServerError, root.EveSwaggerInterface.GetCorporationsCorporationIdAlliancehistoryInternalServerError, root.EveSwaggerInterface.GetCorporationsCorporationIdAlliancehistory200Ok, root.EveSwaggerInterface.GetCorporationsCorporationIdIconsNotFound, root.EveSwaggerInterface.GetCorporationsCorporationIdIconsOk, root.EveSwaggerInterface.GetCorporationsCorporationIdIconsInternalServerError, root.EveSwaggerInterface.GetCorporationsCorporationIdMembersInternalServerError, root.EveSwaggerInterface.GetCorporationsCorporationIdMembers200Ok, root.EveSwaggerInterface.GetCorporationsCorporationIdMembersForbidden, root.EveSwaggerInterface.GetCorporationsCorporationIdRoles200Ok, root.EveSwaggerInterface.GetCorporationsCorporationIdRolesInternalServerError, root.EveSwaggerInterface.GetCorporationsCorporationIdRolesForbidden, root.EveSwaggerInterface.GetCorporationsNames200Ok, root.EveSwaggerInterface.GetCorporationsNamesInternalServerError);
  }
}(this, function(ApiClient, GetCorporationsCorporationIdOk, GetCorporationsCorporationIdNotFound, GetCorporationsCorporationIdInternalServerError, GetCorporationsCorporationIdAlliancehistoryInternalServerError, GetCorporationsCorporationIdAlliancehistory200Ok, GetCorporationsCorporationIdIconsNotFound, GetCorporationsCorporationIdIconsOk, GetCorporationsCorporationIdIconsInternalServerError, GetCorporationsCorporationIdMembersInternalServerError, GetCorporationsCorporationIdMembers200Ok, GetCorporationsCorporationIdMembersForbidden, GetCorporationsCorporationIdRoles200Ok, GetCorporationsCorporationIdRolesInternalServerError, GetCorporationsCorporationIdRolesForbidden, GetCorporationsNames200Ok, GetCorporationsNamesInternalServerError) {
  'use strict';

  /**
   * Corporation service.
   * @module api/CorporationApi
   * @version 0.3.4
   */

  /**
   * Constructs a new CorporationApi. 
   * @alias module:api/CorporationApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCorporationsCorporationId operation.
     * @callback module:api/CorporationApi~getCorporationsCorporationIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetCorporationsCorporationIdOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get corporation information
     * Public information about a corporation  ---  Alternate route: &#x60;/v2/corporations/{corporation_id}/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Integer} corporationId An Eve corporation ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/CorporationApi~getCorporationsCorporationIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetCorporationsCorporationIdOk}
     */
    this.getCorporationsCorporationId = function(corporationId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'corporationId' is set
      if (corporationId == undefined || corporationId == null) {
        throw "Missing the required parameter 'corporationId' when calling getCorporationsCorporationId";
      }


      var pathParams = {
        'corporation_id': corporationId
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
      var returnType = GetCorporationsCorporationIdOk;

      return this.apiClient.callApi(
        '/corporations/{corporation_id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCorporationsCorporationIdAlliancehistory operation.
     * @callback module:api/CorporationApi~getCorporationsCorporationIdAlliancehistoryCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCorporationsCorporationIdAlliancehistory200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get alliance history
     * Get a list of all the alliances a corporation has been a member of  ---  Alternate route: &#x60;/v1/corporations/{corporation_id}/alliancehistory/&#x60;  Alternate route: &#x60;/legacy/corporations/{corporation_id}/alliancehistory/&#x60;  Alternate route: &#x60;/dev/corporations/{corporation_id}/alliancehistory/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Integer} corporationId An EVE corporation ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/CorporationApi~getCorporationsCorporationIdAlliancehistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCorporationsCorporationIdAlliancehistory200Ok>}
     */
    this.getCorporationsCorporationIdAlliancehistory = function(corporationId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'corporationId' is set
      if (corporationId == undefined || corporationId == null) {
        throw "Missing the required parameter 'corporationId' when calling getCorporationsCorporationIdAlliancehistory";
      }


      var pathParams = {
        'corporation_id': corporationId
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
      var returnType = [GetCorporationsCorporationIdAlliancehistory200Ok];

      return this.apiClient.callApi(
        '/corporations/{corporation_id}/alliancehistory/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCorporationsCorporationIdIcons operation.
     * @callback module:api/CorporationApi~getCorporationsCorporationIdIconsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetCorporationsCorporationIdIconsOk} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get corporation icon
     * Get the icon urls for a corporation  ---  Alternate route: &#x60;/v1/corporations/{corporation_id}/icons/&#x60;  Alternate route: &#x60;/legacy/corporations/{corporation_id}/icons/&#x60;  Alternate route: &#x60;/dev/corporations/{corporation_id}/icons/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Integer} corporationId An EVE corporation ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/CorporationApi~getCorporationsCorporationIdIconsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetCorporationsCorporationIdIconsOk}
     */
    this.getCorporationsCorporationIdIcons = function(corporationId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'corporationId' is set
      if (corporationId == undefined || corporationId == null) {
        throw "Missing the required parameter 'corporationId' when calling getCorporationsCorporationIdIcons";
      }


      var pathParams = {
        'corporation_id': corporationId
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
      var returnType = GetCorporationsCorporationIdIconsOk;

      return this.apiClient.callApi(
        '/corporations/{corporation_id}/icons/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCorporationsCorporationIdMembers operation.
     * @callback module:api/CorporationApi~getCorporationsCorporationIdMembersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCorporationsCorporationIdMembers200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get corporation members
     * Read the current list of members if the calling character is a member.  ---  Alternate route: &#x60;/v2/corporations/{corporation_id}/members/&#x60;  Alternate route: &#x60;/legacy/corporations/{corporation_id}/members/&#x60;  Alternate route: &#x60;/dev/corporations/{corporation_id}/members/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Integer} corporationId A corporation ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/CorporationApi~getCorporationsCorporationIdMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCorporationsCorporationIdMembers200Ok>}
     */
    this.getCorporationsCorporationIdMembers = function(corporationId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'corporationId' is set
      if (corporationId == undefined || corporationId == null) {
        throw "Missing the required parameter 'corporationId' when calling getCorporationsCorporationIdMembers";
      }


      var pathParams = {
        'corporation_id': corporationId
      };
      var queryParams = {
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [GetCorporationsCorporationIdMembers200Ok];

      return this.apiClient.callApi(
        '/corporations/{corporation_id}/members/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCorporationsCorporationIdRoles operation.
     * @callback module:api/CorporationApi~getCorporationsCorporationIdRolesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCorporationsCorporationIdRoles200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get corporation member roles
     * Return the roles of all members if the character has the personnel manager role or any grantable role.  ---  Alternate route: &#x60;/v1/corporations/{corporation_id}/roles/&#x60;  Alternate route: &#x60;/legacy/corporations/{corporation_id}/roles/&#x60;  Alternate route: &#x60;/dev/corporations/{corporation_id}/roles/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Integer} corporationId A corporation ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/CorporationApi~getCorporationsCorporationIdRolesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCorporationsCorporationIdRoles200Ok>}
     */
    this.getCorporationsCorporationIdRoles = function(corporationId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'corporationId' is set
      if (corporationId == undefined || corporationId == null) {
        throw "Missing the required parameter 'corporationId' when calling getCorporationsCorporationIdRoles";
      }


      var pathParams = {
        'corporation_id': corporationId
      };
      var queryParams = {
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['evesso'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [GetCorporationsCorporationIdRoles200Ok];

      return this.apiClient.callApi(
        '/corporations/{corporation_id}/roles/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCorporationsNames operation.
     * @callback module:api/CorporationApi~getCorporationsNamesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetCorporationsNames200Ok>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get corporation names
     * Resolve a set of corporation IDs to corporation names  ---  Alternate route: &#x60;/v1/corporations/names/&#x60;  Alternate route: &#x60;/legacy/corporations/names/&#x60;  Alternate route: &#x60;/dev/corporations/names/&#x60;   ---  This route is cached for up to 3600 seconds
     * @param {Array.<Integer>} corporationIds A comma separated list of corporation IDs
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.datasource The server name you would like data from (default to tranquility)
     * @param {module:api/CorporationApi~getCorporationsNamesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetCorporationsNames200Ok>}
     */
    this.getCorporationsNames = function(corporationIds, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'corporationIds' is set
      if (corporationIds == undefined || corporationIds == null) {
        throw "Missing the required parameter 'corporationIds' when calling getCorporationsNames";
      }


      var pathParams = {
      };
      var queryParams = {
        'corporation_ids': this.apiClient.buildCollectionParam(corporationIds, 'csv'),
        'datasource': opts['datasource']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [GetCorporationsNames200Ok];

      return this.apiClient.callApi(
        '/corporations/names/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
