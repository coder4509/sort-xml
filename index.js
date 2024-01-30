#! /usr/bin/env node
import prettify from "@liquify/prettify";
import { parseString, Builder } from "xml2js";
import {
  existsSync,
  readFileSync,
  createWriteStream,
  writeFileSync,
  readdirSync,
  statSync,
} from "fs";
import {
  resolve as _resolve,
  extname,
  join,
  resolve,
} from "path";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

const chalk = require("chalk");

const log = console.log;

const argv = yargs(hideBin(process.argv)).argv;

const { source, dest, indent = 4, format = true, ignore = "", sortDir = 'asc' } = argv;

const parseXMLFile = async ({ pathXML, data }) => {
  let parsedXMLData = {};
  if (pathXML && !existsSync(pathXML)) {
    console.error(chalk.redBright("file path not exits"));
  } else if (!data && !pathXML) {
    console.error(
      chalk.redBright("please put any valid file path or xml file data.")
    );
  } else if (pathXML && existsSync(pathXML)) {
    log(chalk.cyanBright("\n---------XML file sorting started-------\n"));
    log(chalk.green(`\n---------XML file \n${pathXML}\n-------\n`));
    const fileData = readFileSync(pathXML, "utf-8");
    parsedXMLData = await new Promise((resolve) => {
      parseString(fileData, (err, result) => {
        if (err) throw err;
        resolve(result);
      });
    });
  } else if (data) {
    parsedXMLData = await new Promise((resolve) => {
      parseString(data, (err, result) => {
        if (err) throw err;
        resolve(result);
      });
    });
  }
  return parsedXMLData;
};

const createXML = (obj, xmlPath, intent, format = true) => {
  const builder = new Builder({
    xmldec: {
      version: "1.0",
      encoding: "UTF-8",
    },
  });
  const xmlData = builder.buildObject(obj);
  log("\n---------XML file sorted-------\n");
  log(
    chalk.magentaBright(
      `\n---------Updating XML changes in destination path ${_resolve(
        __dirname,
        xmlPath
      )}----------\n`
    )
  );
  if (!existsSync(_resolve(__dirname, xmlPath))) {
    createWriteStream(_resolve(__dirname, xmlPath), "utf-8");
    prettify
      .format(xmlData, {
        language: "XML",
        indentSize: intent || 4,
        markup: {
          forceAttribute: format,
        },
      })
      .then((output) => {
        writeFileSync(_resolve(xmlPath), output, "utf-8");
      })
      .catch(() => {
        return xmlData;
      });
  } else {
    prettify
      .format(xmlData, {
        language: "XML",
        indentSize: 4,
        markup: {
          forceAttribute: true,
        },
      })
      .then((output) => {
        writeFileSync(_resolve(xmlPath), output, "utf-8");
      })
      .catch(() => {
        return xmlData;
      });
  }
};

const sortXMLAttribute = (DATA, KEYS = [], ignoreKey = "") => {
  if (KEYS && !Array.isArray(DATA) && KEYS.length) {
    KEYS.forEach((mainKey) => {
      if (DATA[mainKey] && Object.keys(DATA[mainKey]).length) {
        if (mainKey === "$") {
          const elements = Object.keys(DATA[mainKey]);
          const arr = elements
            .map((itemAtrr) => {
              if (itemAtrr.includes(ignoreKey)) {
                return `abc_${itemAtrr}`;
              }
              return itemAtrr;
            })
            .sort((a, b) => {
              if (sortDir === 'desc') {
                return b.localeCompare(a);
              }
              return a.localeCompare(b);
            });
          const cloneData = { ...DATA[mainKey] };
          DATA[mainKey] = {};
          arr
            .map((itemAtrr) => {
              if (itemAtrr.includes("abc_")) {
                return itemAtrr.replace("abc_", "");
              }
              return itemAtrr;
            })
            .forEach((keyAtt) => {
              DATA[mainKey][keyAtt] = cloneData[keyAtt];
            });
        } else if (DATA[mainKey] && Array.isArray(DATA[mainKey])) {
          const isValidObj = DATA[mainKey][0];
          if (typeof isValidObj === "object") {
            DATA[mainKey] = DATA[mainKey].map((childObj) => {
              const childKeys = Object.keys(childObj);
              sortXMLAttribute(childObj, childKeys, ignoreKey);
              return childObj;
            });
          } else {
            DATA[mainKey] = DATA[mainKey];
          }
        } else {
          Object.keys(DATA[mainKey]).forEach((keyName) => {
            if (keyName === "$") {
              const elements = Object.keys(DATA[mainKey].$);
              const arr = elements
                .map((itemAtrr) => {
                  if (itemAtrr.includes(ignoreKey)) {
                    return `abc_${itemAtrr}`;
                  }
                  return itemAtrr;
                })
                .sort((a, b) => {
                  if (sortDir === 'desc') {
                    return b.localeCompare(a);
                  }
                  return a.localeCompare(b);
                });
              const cloneData = { ...DATA[mainKey].$ };
              DATA[mainKey].$ = {};
              arr
                .map((itemAtrr) => {
                  if (itemAtrr.includes("abc_")) {
                    return itemAtrr.replace("abc_", "");
                  }
                  return itemAtrr;
                })
                .forEach((keyAtt) => {
                  DATA[mainKey].$[keyAtt] = cloneData[keyAtt];
                });
            } else if (
              DATA[mainKey][keyName] &&
              Array.isArray(DATA[mainKey][keyName])
            ) {
              const isValidObj = DATA[mainKey][keyName][0];
              if (typeof isValidObj === "object") {
                DATA[mainKey][keyName] = DATA[mainKey][keyName].map(
                  (childObj) => {
                    const childKeys = Object.keys(childObj);
                    sortXMLAttribute(childObj, childKeys, ignoreKey);
                    return childObj;
                  }
                );
              } else {
                DATA[mainKey][keyName] = DATA[mainKey][keyName];
              }
            }
          });
        }
      }
    });
  }
};
let xmlPath = [];
const getAllXMLFiles = (dir, isNew) => {
  if (isNew) {
    xmlPath = [];
  }
  const mainDir = resolve(dir);
  const files = readdirSync(mainDir, { encoding: "utf-8", recursive: true });
  files.forEach((fileName) => {
    const stats = statSync(fileName);
    if (stats.isDirectory()) {
      // loop it again
      getAllXMLFiles(join(mainDir, fileName), false);
    } else {
      const ext = extname(fileName);
      if (ext === ".xml") {
        xmlPath.push(join(mainDir, fileName));
      }
    }
  });
};

// command line sort xml
const currentDir = process.cwd();
if (!source && currentDir) {
  getAllXMLFiles(currentDir, true);
  if (xmlPath.length) {
    log(chalk.green(`Total xml files found ${xmlPath.length}`));
    log(chalk.greenBright("XML sorting started....."));
    xmlPath.forEach((filePath) => {
      log(chalk.magentaBright(`${filePath}\n`));
      const destinationFile = filePath;
      parseXMLFile({
        pathXML: filePath,
      }).then((xmlParsedData) => {
        const mainKeys = Object.keys(xmlParsedData);
        sortXMLAttribute(xmlParsedData, mainKeys, ignore);
        createXML(xmlParsedData, destinationFile, indent, format);
      });
    });
  } else {
    log(chalk.redBright(`Total xml files found ${xmlPath.length}`));
  }
} else if (source) {
  const destinationFile = dest || source;
  parseXMLFile({
    pathXML: source,
  }).then((xmlParsedData) => {
    const mainKeys = Object.keys(xmlParsedData);
    sortXMLAttribute(xmlParsedData, mainKeys, ignore);
    createXML(xmlParsedData, destinationFile, indent, format);
  });
}
