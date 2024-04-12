import React from 'react';
import Valid from './Valid'
import Invalid from './Invalid';
import welcomePage from './WelcomePage';

const components = {
home : Valid,
invalidCred: Invalid,
welcome: welcomePage
}
function DynamicRender(props){
const SelectUser = components[props.User];
return (
<SelectUser />
)
};

export default DynamicRender;


