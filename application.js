/*
Steps:
1. Create HTML template to collect input and labels for lowercase, uppercase, numbers and special characters
2. ID the div as 'app' and reference the same in the JS file.
3. Create methods to find out whether the string has lowercase, uppercase, numbers or special characters
4. Bind the string to a variable in Vue.object.data
5. As the string changes, run a function which runs the various methods on the string and returns values.
6. According to the return values, alter the style of the labels.

CHECKED AND WORKING!
*/

const red = 'orangered'
var app = new Vue({el:'#app',
                    data: {password:null},
                    methods:{
                      checkLower(text){
                        if(text==null){return false}
                        return text.toUpperCase() != text;
                      },
                      checkUpper(text){
                        return /[A-Z]/.test(text);
                        
                      },
                      checkNumber(text){
                        return /\d/.test(text);
                      },
                      checkSpecial(text){
                        return /[!-\/:-@[-`{-~]/gm.test(text);
                      }
                        }}
                        
                        )