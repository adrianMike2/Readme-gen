function renderLicenseBadge(license) {
    switch (license) {
      case "MIT":
      return `## License[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
      `
      case "GPL 3.0":
        return `## License[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
      `
      case "Apache 2.0":
        return `## License[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
      `
      case "GPL 2.0":
        return `## License[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
      `
      case "LGPL":
        return `## License[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)
      `
      case "none":
        return ``
  
    }
  }
  // making or omitting insaltt text
  const generateInstall = installText => {
    if (!installText) {
        return "";
    }
    return `
    Installation <a name="installation"></a>
    
      ${installText}
    `
  }
  // making or omitting usage text
  const generateUsage = usageText => {
    if (!usageText) {
        return "";
    }
  
    return `
    Usage <a name="usage"></a>
    
      ${usageText}
    `
  }
  // making or omitting contribution text
  const generateContribute = contributeText => {
    if (!contributeText) {
        return "";
    }
  
    return `
    Contribute <a name="contribute"></a>
    
      ${contributeText}
    `
  }
  // making or omitting test text
  const generateTest = testText => {
    if (!testText) {
        return "";
    }
  
    return `
    Testing instructions <a name="testing"></a>
    
      ${testText}
    `
  }
  const tocInstall = installText => {
    if (!installText) {
        return "";
    }
    return `
    [install](#installation)
    `
  }
  const tocUsage = usageText => {
    if (!usageText) {
        return "";
    }
    return `
    [Usage](#usage)
    `
  }
  const tocContribute = contributeText => {
    if (!contributeText) {
        return "";
    }
    return `
    [Contribute](#contribute)
    `
  }
  const tocTest = contributeText => {
    if (!contributeText) {
        return "";
    }
    return `
    [Test](#testing)
    `
  }
  const generateTable = data => {
    return `
    ------------------
    Table of contents
    ------------------
    [Description](#description)
      ${tocInstall(data.install)}
      ${tocUsage(data.usage)} 
      ${tocContribute(data.contribute)}
      ${tocTest(data.test)}
    [Created by](#createdby)
    `
  }
  //function to make complete readme file
  function generateMarkdown(data) {
    return `${data.title}
    
    ${generateTable(data)}
    description <a name="description"></a>
    
      ${data.description}
    ${generateInstall(data.install)}
    ${generateUsage(data.usage)}
    ${generateContribute(data.contribute)}
    ${generateTest(data.test)}
    created by <a name="createdby"></a>
      ${data.name}
      contact me at: ${data.email}
    My github : [https://github.com/${data.git}](https://github.com/${data.git})
    
    ${renderLicenseBadge(data.license)}
  `;
  }
  
  module.exports = generateMarkdown;