/* eslint-disable max-len */

import 'docs/src/modules/components/bootstrap';
// --- Post bootstrap -----
import React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';

const req = require.context('markdown', true, /\.md$/);

function Page(props) {
  return (
    <MarkdownDocs
      markdown={req(`./overrides${props.lang}.md`)}
      demos={{
        'pages/customization/overrides/ClassNames.js': {
          js: require('docs/src/pages/customization/overrides/ClassNames').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/customization/overrides/ClassNames'), 'utf8')
`,
        },
        'pages/customization/overrides/ClassesNesting.js': {
          js: require('docs/src/pages/customization/overrides/ClassesNesting').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/customization/overrides/ClassesNesting'), 'utf8')
`,
        },
        'pages/customization/overrides/ClassesShorthand.js': {
          js: require('docs/src/pages/customization/overrides/ClassesShorthand').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/customization/overrides/ClassesShorthand'), 'utf8')
`,
        },
        'pages/customization/overrides/ClassesState.js': {
          js: require('docs/src/pages/customization/overrides/ClassesState').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/customization/overrides/ClassesState'), 'utf8')
`,
        },
        'pages/customization/overrides/InlineStyle.js': {
          js: require('docs/src/pages/customization/overrides/InlineStyle').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/customization/overrides/InlineStyle'), 'utf8')
`,
        },
        'pages/customization/overrides/DynamicCSS.js': {
          js: require('docs/src/pages/customization/overrides/DynamicCSS').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/customization/overrides/DynamicCSS'), 'utf8')
`,
        },
        'pages/customization/overrides/DynamicClassName.js': {
          js: require('docs/src/pages/customization/overrides/DynamicClassName').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/customization/overrides/DynamicClassName'), 'utf8')
`,
        },
        'pages/customization/overrides/DynamicCSSVariables.js': {
          js: require('docs/src/pages/customization/overrides/DynamicCSSVariables').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/customization/overrides/DynamicCSSVariables'), 'utf8')
`,
        },
        'pages/customization/overrides/DynamicThemeNesting.js': {
          js: require('docs/src/pages/customization/overrides/DynamicThemeNesting').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/customization/overrides/DynamicThemeNesting'), 'utf8')
`,
        },
        'pages/customization/overrides/DynamicInlineStyle.js': {
          js: require('docs/src/pages/customization/overrides/DynamicInlineStyle').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/customization/overrides/DynamicInlineStyle'), 'utf8')
`,
        },
        'pages/customization/overrides/Component.js': {
          js: require('docs/src/pages/customization/overrides/Component').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/customization/overrides/Component'), 'utf8')
`,
        },
      }}
    />
  );
}

export default Page;
