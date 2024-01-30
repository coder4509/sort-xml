
# sort-xml

This package helps to sort XML tag attributes alphabetically

## Installation

To install run the following command:

```bash
  npm install -g sort-xml
```

## If needed and @babel/runtime not installed then install it with below

```bash
  npm install @babel/runtime -D
```

## Single File Sort

If wants to sort single file then use it like below in terminal
```bash 
   sort-xml --source=<source_xml_path> --dest=<destination_xml_path> --indent=2 --sortDir=asc
```
## Description

1. --source - path of xml file which you want to sort
2. --dest - if you provide destination path then it will create new xml sorted file instead ovveride source xml file.
          - if not metioned in command then it will use source file path as destination path default and ovveride the file once sort completed.
3. --indent - this will put indentation to the file
4. --sortDir - it will sort attributes asecending or descending.

## Mutiple File Sort

To sort multiple file under current folder then first open the terminal under that folder where xml files present.

example:-
```bash 
   cd /path of folder/ # point terminal to that folder.
```
```bash 
   # then run below command
   sort-xml  --indent=2 --sortDir=asc
```

## Description

1. here no need to mention source and destination it will automatically check xml files under current folder and do sorting and update the file under current folder.


## Command Arguments 

``` bash
  --source
           - if wants to sort sepecific file then mention path of that xml file.

  --dest 
           - if wants to create sorted file in new destination the mention destination path of xml file.
           - if not mentioned the path then it will use source path as destination default.
  --indent 
           - if need indentation two then use it default value is 4 
  --format 
          - if wants to prettify file after sort done the pass value as true or false. default value is true.
  --ignore 
          - if wants to ignore any attributes which should not sort then metion attribute name. default value is empty string.
  --sortDir 
         -  if wants to sort attributes ascending or descending then pass these valus "asc" or "desc". default value is asc. 
```
