/**
  ** Properties Class (v1.0.0 Beta) - A JavaScript Class Method to Convert Properties (.lang, .properties) to JSON, vice versa.
  ** 4th of November 2020
  ** Released by @Zarkmend_ZAN on Twitter, @ZamyArkreNendmed on GitHub under the MIT License
*/

"use strict";
const properties_class = class {
  constructor () {
    return {
      "create_to_json": function (string, options = {}) {
        let result = {};
        const array = string.split("\n");
        for (let i = 0; i < array.length; i++) {
          const object = array[i].split("=");
          if (object.length % 2 == 0) {
            for (let w = 0; w < object.length; w += 2) {
              try {
                result[object[w]] = object[w + 1];
              }
              catch (error) {
                throw Error("Error parsing to json.");
              };
            };
          }
          else {
          };
        };
        return options.is_url ? URL.createObjectURL(new Blob([JSON.stringify(result, null, 2)], {"type": "application/json"})) : result;
      },
      "create_from_json": function (json_object, options = {}) {
        let result = "";
        for (const [key, value] of Object.entries(json_object)) {
          result += `${key}=${typeof value === "object" ? JSON.stringify(value) : value}\n`;
        };
        return options.is_url ? URL.createObjectURL(new Blob([result])) : result;
      }
    };
  };
};
