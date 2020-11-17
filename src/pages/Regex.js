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
    
    
        Character Sets
        ===============
        [abc] = a or b or c
        [^abc] = a b c without
        [0-9] = 0 to 9
        [a-z] = a to z
        [^0-9] = 0 to 9 without
        [^a-z] = a to z without
        /^[A-Z]/ = First letter must uppercase
        (ab|bc) = ab or bc match
    
        Quantifier and Grouping
        =======================
        /^el{3}/ = elll(true) ell(false)
        /^el{2,5}/ = 2 to 5 times elll(true) el(false)
        /^([0-9]){3}/ = 0 to 9  3times
        /^01[0-9]{9}$/ = bangladeshi phone number check
    
        Shorthand Characters
        ====================
        /\w/ = word character
        /\W/ = word without character
        /\d/ = digit character
        /\D/ = digit without character
        /\s/ = space character
        /\S/ = space without character
        /\b/ = word boundary character  example: /hello\b/  hello worlde (true) hellowo (false)
        /\B/ = word boundary without character
        /\o/ = null
        /\n/ = new line
    
        Assertions
        ===========
        /x(?=y)/  =  xy (true) x(false)
    
        Example
        ========
        1. /^(\+)?(88)?01[0-9]{9}$/  // phone number check
        2. /^[0-9]{4}$/  // postal code check
        3. /^([a-zA-Z0-9]\.?)+[^.\]@([a-zA-Z0-9]\.?)+[^.\]$/   // email check example: abc04.learn@gmail.com
    
        if( !/^[A-Z0-9._%+-]+@[A-Z]+\.[A-Z]{2,4}$/i.test(values.email) ) {
            errors.email = 'Invalid Email Valid';
         }
    
    
    
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
