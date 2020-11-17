import React, { Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';

/* 
    / REGEX_CHECK / 
    i = case sensetive remove =>     / REGEX_CHECK /i

*/

const Regex = () => {

    let rex;
    let str;

    rex = /hello/i;
    str = 'Welcome Hello World';

    // execu() - Return result in an array or null ( [] || null )
    let result = rex.exec(str);

    // test() - Return true or false
    let result1 = rex.test(str);

    // match() - Return result in an array or null ( [] || null )
    let result2 = str.match(rex);

    // search() - Return index of the first match or -1
    let result3 = str.search(rex);

    // replace() - Return new string
    let result4 = str.replace(rex, "Reguler expression");

    console.log("Initial: ", rex);
    console.log("Initial with source method: ", rex.source);
    console.log("Hello word check with case sensetive remove: ", result);
    console.log("Hello word check with test method: ", result1);
    console.log("Hello word check with match method: ", result2);
    console.log("Hello word check with search method: ", result3);
    console.log("Hello word check with replace method: ", result4);


    // 2nd part
    let re;
    let str1;

    // literal Character
    re = /hello/i;
    str1 = "Hello World";

/* 
    / REGEX_CHECK / 
    i = case sensetive remove =>     / REGEX_CHECK /i

    Meta character
    ==============
    ^ = must start with REGEX_CHECK string => /^REGEX_CHECK /i
    $ = must end with REGEX_CHECK string => /^REGEX_CHECK$/i
    . = matches any one character => /^REGEX.CHECK$/i  example: REGEX1CHECK
    * = more times => /^REGEX*CHECK$/i  example: REGEX123CHECK
    ? = optional => /^REGEX?CHECK$/i  example: REGEXCHECK (X or not other wise false  REGEYCHECK => return false) 

*/




    console.log(re.exec(str1));
    reTest(re, str1)

    function reTest(re, str) {
        if (re.test(str)) {
            console.log(`'${str}' matches '${re.source}'`);
        }
        else {
            console.log(`'${str}' doesn\'t matches '${re.source}'`);
        }
    }


    return (
        <Fragment>
            <TopNavigation title="Regular Expression" />
            <div className="container">
                <h2>Regular Expression</h2>
            </div>
        </Fragment>
    )
};

export default Regex;
