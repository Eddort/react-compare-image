(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a=__webpack_require__.p+"image1.png"},114:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a=__webpack_require__.p+"taller-image.png"},115:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a=__webpack_require__.p+"wider-image.png"},12:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a=__webpack_require__.p+"image2.png"},278:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a=__webpack_require__.p+"image1-taller.png"},279:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a=__webpack_require__.p+"image2-wider.png"},280:function(module,exports,__webpack_require__){__webpack_require__(281),__webpack_require__(431),module.exports=__webpack_require__(432)},347:function(module,exports){},432:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(36);var _storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(50);__webpack_require__(622);const req=__webpack_require__(638);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.configure)((function loadStories(){req.keys().forEach(filename=>req(filename))}),module)}.call(this,__webpack_require__(218)(module))},638:function(module,exports,__webpack_require__){var map={"./index.stories.tsx":639};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=638},639:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(50),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_images_image1_taller_png__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(278),_images_image1_png__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(11),_images_image2_wider_png__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(279),_images_image2_png__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(12),_images_taller_image_png__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(114),_images_wider_image_png__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(115),_src_ReactCompareImage__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(7),withSourceLoader=__webpack_require__(277).withSource,__SOURCE_PREFIX__=(__webpack_require__(277).addSource,"/home/runner/work/react-compare-image/react-compare-image/stories"),__STORY__="import { storiesOf } from '@storybook/react'; \nimport React, { useState } from 'react';\nimport img1SrcTaller from '../images/image1-taller.png';\nimport img1Src from '../images/image1.png';\nimport img2SrcWider from '../images/image2-wider.png';\nimport img2Src from '../images/image2.png';\nimport imgTaller from '../images/taller-image.png';\nimport imgWider from '../images/wider-image.png';\nimport ReactCompareImage from '../src/ReactCompareImage';\n\nstoriesOf('Basic', module)\n  .add('basic usage', () => (\n    <div style={{ maxWidth: '320px' }}>\n      Horizontal comparison\n      <ReactCompareImage leftImage={img1Src} rightImage={img2Src} />\n      <br />\n      Vertical comparison\n      <ReactCompareImage leftImage={img1Src} rightImage={img2Src} vertical />\n    </div>\n  ))\n  .add('hover', () => (\n    <div style={{ maxWidth: '640px' }}>\n      <ReactCompareImage leftImage={img1Src} rightImage={img2Src} hover />\n    </div>\n  ))\n  .add('show labels', () => (\n    <div style={{ maxWidth: '640px' }}>\n      horizontal\n      <ReactCompareImage\n        leftImage={img1Src}\n        leftImageLabel=\"Before\"\n        rightImage={img2Src}\n        rightImageLabel=\"After\"\n      />\n      vertical\n      <ReactCompareImage\n        leftImage={img1Src}\n        leftImageLabel=\"Before\"\n        rightImage={img2Src}\n        rightImageLabel=\"After\"\n        vertical\n      />\n    </div>\n  ))\n  .add('apply css', () => (\n    <div style={{ maxWidth: '640px' }}>\n      <ReactCompareImage\n        leftImage={img1Src}\n        rightImage={img2Src}\n        leftImageCss={{ filter: 'brightness(40%)' }}\n        rightImageCss={{ filter: 'brightness(20%)' }}\n      />\n    </div>\n  ))\n  .add('detect slider position change', () => {\n    const [position, setPosition] = useState(null);\n    return (\n      <div style={{ maxWidth: '640px' }}>\n        <ReactCompareImage\n          leftImage={img1Src}\n          rightImage={img2Src}\n          onSliderPositionChange={setPosition}\n        />\n        <div>slider position: {position}</div>\n      </div>\n    );\n  });\nstoriesOf('Customizing', module)\n  .add('slider width', () => (\n    <div style={{ maxWidth: '640px' }}>\n      <ReactCompareImage\n        leftImage={img1Src}\n        rightImage={img2Src}\n        sliderLineWidth={6}\n      />\n    </div>\n  ))\n  .add('slider color', () => (\n    <div style={{ maxWidth: '640px' }}>\n      <ReactCompareImage\n        leftImage={img1Src}\n        rightImage={img2Src}\n        sliderLineColor=\"rebeccapurple\"\n      />\n    </div>\n  ))\n  .add('handle', () => (\n    <div style={{ maxWidth: '640px' }}>\n      <ReactCompareImage\n        leftImage={img1Src}\n        rightImage={img2Src}\n        handle={<button type=\"button\">I am Custom Handle!</button>}\n      />\n    </div>\n  ))\n  .add('no handle', () => (\n    <div style={{ maxWidth: '640px' }}>\n      <ReactCompareImage\n        leftImage={img1Src}\n        rightImage={img2Src}\n        handle={<React.Fragment />} \n      />\n    </div>\n  ))\n  .add('no slider', () => (\n    <div style={{ maxWidth: '640px' }}>\n      <ReactCompareImage\n        leftImage={img1Src}\n        rightImage={img2Src}\n        handle={<React.Fragment />} \n        sliderLineWidth={0}\n      />\n    </div>\n  ));\n\nstoriesOf('Images with different aspect ratios', module)\n  .add('default behavior', () => (\n    <div style={{ maxWidth: '320px' }}>\n      <div>By default, container size is determined by the taller one.</div>\n      <ReactCompareImage\n        leftImage={imgTaller}\n        rightImage={imgWider}\n        aspectRatio=\"taller\" // this is set by default\n      />\n      <div>\n        If you want to change this behavior, you can set `aspectRatio` prop to\n        `wider`.\n      </div>\n      <ReactCompareImage\n        leftImage={imgTaller}\n        rightImage={imgWider}\n        aspectRatio=\"wider\"\n      />\n    </div>\n  ))\n  .add('same width comparison', () => (\n    <div style={{ maxWidth: '640px' }}>\n      Adjust `object-fit` and `object-position` if you want to display images\n      with the same width.\n      <ReactCompareImage\n        leftImage={img1Src}\n        rightImage={img1SrcTaller}\n        aspectRatio=\"taller\"\n        rightImageCss={{ objectFit: 'contain', objectPosition: 'top' }}\n        leftImageCss={{ objectFit: 'contain', objectPosition: 'top' }}\n      />\n    </div>\n  ))\n  .add('same height comparison', () => (\n    <div style={{ maxWidth: '640px' }}>\n      Adjust `object-fit` and `object-position` if you want to display images\n      with the same height.\n      <ReactCompareImage\n        leftImage={img2SrcWider}\n        rightImage={img2Src}\n        aspectRatio=\"wider\"\n        rightImageCss={{ objectFit: 'contain', objectPosition: 'left' }}\n        leftImageCss={{ objectFit: 'contain', objectPosition: 'left' }}\n        sliderPositionPercentage={0.95}\n      />\n      (Try to slide to the right edge!)\n    </div>\n  ));\n\nstoriesOf('For Debugging', module)\n  .add('multiple components', () => (\n    <div>\n      <div style={{ maxWidth: '200px' }}>\n        <ReactCompareImage leftImage={img1Src} rightImage={img2Src} />\n      </div>\n      <p />\n      <div style={{ maxWidth: '300px' }}>\n        <ReactCompareImage leftImage={img1Src} rightImage={img2Src} />\n      </div>\n      <p />\n      <div style={{ maxWidth: '500px' }}>\n        <ReactCompareImage leftImage={img1Src} rightImage={img2Src} />\n      </div>\n      <p />\n      <div style={{ maxWidth: '100%' }}>\n        <ReactCompareImage leftImage={img1Src} rightImage={img2Src} />\n      </div>\n    </div>\n  ))\n  .add('update src', () => {\n    const [leftImageSrc, setLeftImageSrc] = useState(img1Src);\n    const [rightImageSrc, setRightImageSrc] = useState(img2Src);\n    return (\n      <div>\n        <div style={{ maxWidth: '320px' }}>\n          <ReactCompareImage\n            leftImage={leftImageSrc}\n            rightImage={rightImageSrc}\n          />\n        </div>\n        <button type=\"button\" onClick={() => setLeftImageSrc(imgTaller)}>\n          update left image\n        </button>\n        <button type=\"button\" onClick={() => setRightImageSrc(imgWider)}>\n          update right image\n        </button>\n      </div>\n    );\n  })\n  .add('resizing', () => {\n    return (\n      <div\n        style={{\n          background: 'lightblue',\n          height: 400,\n          overflow: 'scroll',\n          resize: 'both',\n          width: 400,\n        }}\n      >\n        <ReactCompareImage leftImage={img1Src} rightImage={img2Src} />\n      </div>\n    );\n  });\n",__ADDS_MAP__={"basic--detect-slider-position-change":{startLoc:{col:7,line:55},endLoc:{col:3,line:67},startBody:{col:40,line:55},endBody:{col:3,line:67}},"basic--apply-css":{startLoc:{col:7,line:45},endLoc:{col:3,line:54},startBody:{col:20,line:45},endBody:{col:3,line:54}},"basic--show-labels":{startLoc:{col:7,line:26},endLoc:{col:3,line:44},startBody:{col:22,line:26},endBody:{col:3,line:44}},"basic--hover":{startLoc:{col:7,line:21},endLoc:{col:3,line:25},startBody:{col:16,line:21},endBody:{col:3,line:25}},"basic--basic-usage":{startLoc:{col:7,line:12},endLoc:{col:3,line:20},startBody:{col:22,line:12},endBody:{col:3,line:20}},"customizing--no-slider":{startLoc:{col:7,line:105},endLoc:{col:3,line:114},startBody:{col:20,line:105},endBody:{col:3,line:114}},"customizing--no-handle":{startLoc:{col:7,line:96},endLoc:{col:3,line:104},startBody:{col:20,line:96},endBody:{col:3,line:104}},"customizing--handle":{startLoc:{col:7,line:87},endLoc:{col:3,line:95},startBody:{col:17,line:87},endBody:{col:3,line:95}},"customizing--slider-color":{startLoc:{col:7,line:78},endLoc:{col:3,line:86},startBody:{col:23,line:78},endBody:{col:3,line:86}},"customizing--slider-width":{startLoc:{col:7,line:69},endLoc:{col:3,line:77},startBody:{col:23,line:69},endBody:{col:3,line:77}},"images-with-different-aspect-ratios--same-height-comparison":{startLoc:{col:7,line:149},endLoc:{col:3,line:163},startBody:{col:33,line:149},endBody:{col:3,line:163}},"images-with-different-aspect-ratios--same-width-comparison":{startLoc:{col:7,line:136},endLoc:{col:3,line:148},startBody:{col:32,line:136},endBody:{col:3,line:148}},"images-with-different-aspect-ratios--default-behavior":{startLoc:{col:7,line:117},endLoc:{col:3,line:135},startBody:{col:27,line:117},endBody:{col:3,line:135}},"for-debugging--resizing":{startLoc:{col:7,line:205},endLoc:{col:3,line:219},startBody:{col:19,line:205},endBody:{col:3,line:219}},"for-debugging--update-src":{startLoc:{col:7,line:185},endLoc:{col:3,line:204},startBody:{col:21,line:185},endBody:{col:3,line:204}},"for-debugging--multiple-components":{startLoc:{col:7,line:166},endLoc:{col:3,line:184},startBody:{col:30,line:166},endBody:{col:3,line:184}}},__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Basic",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/index.stories.tsx",__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__)).add("basic usage",()=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{maxWidth:"320px"}},"Horizontal comparison",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_ReactCompareImage__WEBPACK_IMPORTED_MODULE_8__.a,{leftImage:_images_image1_png__WEBPACK_IMPORTED_MODULE_3__.a,rightImage:_images_image2_png__WEBPACK_IMPORTED_MODULE_5__.a}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),"Vertical comparison",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_ReactCompareImage__WEBPACK_IMPORTED_MODULE_8__.a,{leftImage:_images_image1_png__WEBPACK_IMPORTED_MODULE_3__.a,rightImage:_images_image2_png__WEBPACK_IMPORTED_MODULE_5__.a,vertical:!0}))).add("hover",()=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{maxWidth:"640px"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_ReactCompareImage__WEBPACK_IMPORTED_MODULE_8__.a,{leftImage:_images_image1_png__WEBPACK_IMPORTED_MODULE_3__.a,rightImage:_images_image2_png__WEBPACK_IMPORTED_MODULE_5__.a,hover:!0}))).add("show labels",()=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{maxWidth:"640px"}},"horizontal",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_ReactCompareImage__WEBPACK_IMPORTED_MODULE_8__.a,{leftImage:_images_image1_png__WEBPACK_IMPORTED_MODULE_3__.a,leftImageLabel:"Before",rightImage:_images_image2_png__WEBPACK_IMPORTED_MODULE_5__.a,rightImageLabel:"After"}),"vertical",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_ReactCompareImage__WEBPACK_IMPORTED_MODULE_8__.a,{leftImage:_images_image1_png__WEBPACK_IMPORTED_MODULE_3__.a,leftImageLabel:"Before",rightImage:_images_image2_png__WEBPACK_IMPORTED_MODULE_5__.a,rightImageLabel:"After",vertical:!0}))).add("apply css",()=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{maxWidth:"640px"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_ReactCompareImage__WEBPACK_IMPORTED_MODULE_8__.a,{leftImage:_images_image1_png__WEBPACK_IMPORTED_MODULE_3__.a,rightImage:_images_image2_png__WEBPACK_IMPORTED_MODULE_5__.a,leftImageCss:{filter:"brightness(40%)"},rightImageCss:{filter:"brightness(20%)"}}))).add("detect slider position change",()=>{const[position,setPosition]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{maxWidth:"640px"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_ReactCompareImage__WEBPACK_IMPORTED_MODULE_8__.a,{leftImage:_images_image1_png__WEBPACK_IMPORTED_MODULE_3__.a,rightImage:_images_image2_png__WEBPACK_IMPORTED_MODULE_5__.a,onSliderPositionChange:setPosition}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,"slider position: ",position))}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Customizing",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/index.stories.tsx",__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__)).add("slider width",()=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{maxWidth:"640px"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_ReactCompareImage__WEBPACK_IMPORTED_MODULE_8__.a,{leftImage:_images_image1_png__WEBPACK_IMPORTED_MODULE_3__.a,rightImage:_images_image2_png__WEBPACK_IMPORTED_MODULE_5__.a,sliderLineWidth:6}))).add("slider color",()=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{maxWidth:"640px"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_ReactCompareImage__WEBPACK_IMPORTED_MODULE_8__.a,{leftImage:_images_image1_png__WEBPACK_IMPORTED_MODULE_3__.a,rightImage:_images_image2_png__WEBPACK_IMPORTED_MODULE_5__.a,sliderLineColor:"rebeccapurple"}))).add("handle",()=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{maxWidth:"640px"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_ReactCompareImage__WEBPACK_IMPORTED_MODULE_8__.a,{leftImage:_images_image1_png__WEBPACK_IMPORTED_MODULE_3__.a,rightImage:_images_image2_png__WEBPACK_IMPORTED_MODULE_5__.a,handle:react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{type:"button"},"I am Custom Handle!")}))).add("no handle",()=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{maxWidth:"640px"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_ReactCompareImage__WEBPACK_IMPORTED_MODULE_8__.a,{leftImage:_images_image1_png__WEBPACK_IMPORTED_MODULE_3__.a,rightImage:_images_image2_png__WEBPACK_IMPORTED_MODULE_5__.a,handle:react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null)}))).add("no slider",()=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{maxWidth:"640px"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_ReactCompareImage__WEBPACK_IMPORTED_MODULE_8__.a,{leftImage:_images_image1_png__WEBPACK_IMPORTED_MODULE_3__.a,rightImage:_images_image2_png__WEBPACK_IMPORTED_MODULE_5__.a,handle:react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null),sliderLineWidth:0}))),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Images with different aspect ratios",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/index.stories.tsx",__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__)).add("default behavior",()=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{maxWidth:"320px"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,"By default, container size is determined by the taller one."),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_ReactCompareImage__WEBPACK_IMPORTED_MODULE_8__.a,{leftImage:_images_taller_image_png__WEBPACK_IMPORTED_MODULE_6__.a,rightImage:_images_wider_image_png__WEBPACK_IMPORTED_MODULE_7__.a,aspectRatio:"taller"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,"If you want to change this behavior, you can set `aspectRatio` prop to `wider`."),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_ReactCompareImage__WEBPACK_IMPORTED_MODULE_8__.a,{leftImage:_images_taller_image_png__WEBPACK_IMPORTED_MODULE_6__.a,rightImage:_images_wider_image_png__WEBPACK_IMPORTED_MODULE_7__.a,aspectRatio:"wider"}))).add("same width comparison",()=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{maxWidth:"640px"}},"Adjust `object-fit` and `object-position` if you want to display images with the same width.",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_ReactCompareImage__WEBPACK_IMPORTED_MODULE_8__.a,{leftImage:_images_image1_png__WEBPACK_IMPORTED_MODULE_3__.a,rightImage:_images_image1_taller_png__WEBPACK_IMPORTED_MODULE_2__.a,aspectRatio:"taller",rightImageCss:{objectFit:"contain",objectPosition:"top"},leftImageCss:{objectFit:"contain",objectPosition:"top"}}))).add("same height comparison",()=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{maxWidth:"640px"}},"Adjust `object-fit` and `object-position` if you want to display images with the same height.",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_ReactCompareImage__WEBPACK_IMPORTED_MODULE_8__.a,{leftImage:_images_image2_wider_png__WEBPACK_IMPORTED_MODULE_4__.a,rightImage:_images_image2_png__WEBPACK_IMPORTED_MODULE_5__.a,aspectRatio:"wider",rightImageCss:{objectFit:"contain",objectPosition:"left"},leftImageCss:{objectFit:"contain",objectPosition:"left"},sliderPositionPercentage:.95}),"(Try to slide to the right edge!)")),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("For Debugging",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/index.stories.tsx",__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__)).add("multiple components",()=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{maxWidth:"200px"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_ReactCompareImage__WEBPACK_IMPORTED_MODULE_8__.a,{leftImage:_images_image1_png__WEBPACK_IMPORTED_MODULE_3__.a,rightImage:_images_image2_png__WEBPACK_IMPORTED_MODULE_5__.a})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{maxWidth:"300px"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_ReactCompareImage__WEBPACK_IMPORTED_MODULE_8__.a,{leftImage:_images_image1_png__WEBPACK_IMPORTED_MODULE_3__.a,rightImage:_images_image2_png__WEBPACK_IMPORTED_MODULE_5__.a})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{maxWidth:"500px"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_ReactCompareImage__WEBPACK_IMPORTED_MODULE_8__.a,{leftImage:_images_image1_png__WEBPACK_IMPORTED_MODULE_3__.a,rightImage:_images_image2_png__WEBPACK_IMPORTED_MODULE_5__.a})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{maxWidth:"100%"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_ReactCompareImage__WEBPACK_IMPORTED_MODULE_8__.a,{leftImage:_images_image1_png__WEBPACK_IMPORTED_MODULE_3__.a,rightImage:_images_image2_png__WEBPACK_IMPORTED_MODULE_5__.a})))).add("update src",()=>{const[leftImageSrc,setLeftImageSrc]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(_images_image1_png__WEBPACK_IMPORTED_MODULE_3__.a),[rightImageSrc,setRightImageSrc]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(_images_image2_png__WEBPACK_IMPORTED_MODULE_5__.a);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{maxWidth:"320px"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_ReactCompareImage__WEBPACK_IMPORTED_MODULE_8__.a,{leftImage:leftImageSrc,rightImage:rightImageSrc})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{type:"button",onClick:()=>setLeftImageSrc(_images_taller_image_png__WEBPACK_IMPORTED_MODULE_6__.a)},"update left image"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{type:"button",onClick:()=>setRightImageSrc(_images_wider_image_png__WEBPACK_IMPORTED_MODULE_7__.a)},"update right image"))}).add("resizing",()=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{background:"lightblue",height:400,overflow:"scroll",resize:"both",width:400}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_ReactCompareImage__WEBPACK_IMPORTED_MODULE_8__.a,{leftImage:_images_image1_png__WEBPACK_IMPORTED_MODULE_3__.a,rightImage:_images_image2_png__WEBPACK_IMPORTED_MODULE_5__.a})))}.call(this,__webpack_require__(218)(module))},7:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const ReactCompareImage=props=>{const{aspectRatio:aspectRatio,handle:handle,handleSize:handleSize,hover:hover,leftImage:leftImage,leftImageAlt:leftImageAlt,leftImageCss:leftImageCss,leftImageLabel:leftImageLabel,onSliderPositionChange:onSliderPositionChange,rightImage:rightImage,rightImageAlt:rightImageAlt,rightImageCss:rightImageCss,rightImageLabel:rightImageLabel,skeleton:skeleton,sliderLineColor:sliderLineColor,sliderLineWidth:sliderLineWidth,sliderPositionPercentage:sliderPositionPercentage,vertical:vertical}=props,horizontal=!vertical,[sliderPosition,setSliderPosition]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(sliderPositionPercentage),[containerWidth,setContainerWidth]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),[containerHeight,setContainerHeight]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),[leftImgLoaded,setLeftImgLoaded]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[rightImgLoaded,setRightImgLoaded]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[isSliding,setIsSliding]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),containerRef=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),rightImageRef=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),leftImageRef=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const containerElement=containerRef.current,resizeObserver=new ResizeObserver(([entry,..._])=>{const currentContainerWidth=entry.target.getBoundingClientRect().width;setContainerWidth(currentContainerWidth)});return resizeObserver.observe(containerElement),()=>resizeObserver.disconnect()},[]),Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(leftImageRef.current.complete&&setLeftImgLoaded(!0),()=>{setLeftImgLoaded(!1)}),[leftImage]),Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(rightImageRef.current.complete&&setRightImgLoaded(!0),()=>{setRightImgLoaded(!1)}),[rightImage]);const allImagesLoaded=rightImgLoaded&&leftImgLoaded;Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const handleSliding=event=>{const e=event||window.event,cursorXfromViewport=e.touches?e.touches[0].pageX:e.pageX,cursorYfromViewport=e.touches?e.touches[0].pageY:e.pageY,cursorXfromWindow=cursorXfromViewport-window.pageXOffset,cursorYfromWindow=cursorYfromViewport-window.pageYOffset,imagePosition=rightImageRef.current.getBoundingClientRect();let pos=horizontal?cursorXfromWindow-imagePosition.left:cursorYfromWindow-imagePosition.top;const minPos=0+sliderLineWidth/2,maxPos=horizontal?containerWidth-sliderLineWidth/2:containerHeight-sliderLineWidth/2;pos<minPos&&(pos=minPos),pos>maxPos&&(pos=maxPos),setSliderPosition(horizontal?pos/containerWidth:pos/containerHeight),onSliderPositionChange&&onSliderPositionChange(horizontal?pos/containerWidth:pos/containerHeight)},startSliding=e=>{setIsSliding(!0),"touches"in e||e.preventDefault(),handleSliding(e),window.addEventListener("mousemove",handleSliding),window.addEventListener("touchmove",handleSliding)},finishSliding=()=>{setIsSliding(!1),window.removeEventListener("mousemove",handleSliding),window.removeEventListener("touchmove",handleSliding)},containerElement=containerRef.current;if(allImagesLoaded){containerElement.addEventListener("touchstart",startSliding),window.addEventListener("touchend",finishSliding),hover?(containerElement.addEventListener("mousemove",handleSliding),containerElement.addEventListener("mouseleave",finishSliding)):(containerElement.addEventListener("mousedown",startSliding),window.addEventListener("mouseup",finishSliding));const leftImageWidthHeightRatio=leftImageRef.current.naturalHeight/leftImageRef.current.naturalWidth,rightImageWidthHeightRatio=rightImageRef.current.naturalHeight/rightImageRef.current.naturalWidth,idealWidthHeightRatio="taller"===aspectRatio?Math.max(leftImageWidthHeightRatio,rightImageWidthHeightRatio):Math.min(leftImageWidthHeightRatio,rightImageWidthHeightRatio);setContainerHeight(containerWidth*idealWidthHeightRatio)}return()=>{containerElement.removeEventListener("touchstart",startSliding),window.removeEventListener("touchend",finishSliding),containerElement.removeEventListener("mousemove",handleSliding),containerElement.removeEventListener("mouseleave",finishSliding),containerElement.removeEventListener("mousedown",startSliding),window.removeEventListener("mouseup",finishSliding),window.removeEventListener("mousemove",handleSliding),window.removeEventListener("touchmove",handleSliding)}},[allImagesLoaded,aspectRatio,containerHeight,containerWidth,horizontal,hover,sliderLineWidth,vertical]);const styles={container:{boxSizing:"border-box",position:"relative",width:"100%",height:containerHeight+"px",overflow:"hidden"},rightImage:_objectSpread({clip:horizontal?`rect(auto, auto, auto, ${containerWidth*sliderPosition}px)`:`rect(${containerHeight*sliderPosition}px, auto, auto, auto)`,display:"block",height:"100%",objectFit:"cover",position:"absolute",width:"100%"},rightImageCss),leftImage:_objectSpread({clip:horizontal?`rect(auto, ${containerWidth*sliderPosition}px, auto, auto)`:`rect(auto, auto, ${containerHeight*sliderPosition}px, auto)`,display:"block",height:"100%",objectFit:"cover",position:"absolute",width:"100%"},leftImageCss),slider:{alignItems:"center",cursor:!hover&&horizontal?"ew-resize":!hover&&!horizontal&&"ns-resize",display:"flex",flexDirection:horizontal?"column":"row",height:horizontal?"100%":handleSize+"px",justifyContent:"center",left:horizontal?containerWidth*sliderPosition-handleSize/2+"px":0,position:"absolute",top:horizontal?0:containerHeight*sliderPosition-handleSize/2+"px",width:horizontal?handleSize+"px":"100%"},line:{background:sliderLineColor,boxShadow:"0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",flex:"0 1 auto",height:horizontal?"100%":sliderLineWidth+"px",width:horizontal?sliderLineWidth+"px":"100%"},handleCustom:{alignItems:"center",boxSizing:"border-box",display:"flex",flex:"1 0 auto",height:"auto",justifyContent:"center",width:"auto"},handleDefault:{alignItems:"center",border:`${sliderLineWidth}px solid ${sliderLineColor}`,borderRadius:"100%",boxShadow:"0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",boxSizing:"border-box",display:"flex",flex:"1 0 auto",height:handleSize+"px",justifyContent:"center",width:handleSize+"px",transform:horizontal?"none":"rotate(90deg)"},leftArrow:{border:`inset ${.15*handleSize}px rgba(0,0,0,0)`,borderRight:`${.15*handleSize}px solid ${sliderLineColor}`,height:"0px",marginLeft:`-${.25*handleSize}px`,marginRight:.25*handleSize+"px",width:"0px"},rightArrow:{border:`inset ${.15*handleSize}px rgba(0,0,0,0)`,borderLeft:`${.15*handleSize}px solid ${sliderLineColor}`,height:"0px",marginRight:`-${.25*handleSize}px`,width:"0px"},leftLabel:{background:"rgba(0, 0, 0, 0.5)",color:"white",left:horizontal?"5%":"50%",opacity:isSliding?0:1,padding:"10px 20px",position:"absolute",top:horizontal?"50%":"3%",transform:horizontal?"translate(0,-50%)":"translate(-50%, 0)",transition:"opacity 0.1s ease-out"},rightLabel:{background:"rgba(0, 0, 0, 0.5)",color:"white",opacity:isSliding?0:1,padding:"10px 20px",position:"absolute",left:horizontal?null:"50%",right:horizontal?"5%":null,top:horizontal?"50%":null,bottom:horizontal?null:"3%",transform:horizontal?"translate(0,-50%)":"translate(-50%, 0)",transition:"opacity 0.1s ease-out"},leftLabelContainer:{clip:horizontal?`rect(auto, ${containerWidth*sliderPosition}px, auto, auto)`:`rect(auto, auto, ${containerHeight*sliderPosition}px, auto)`,height:"100%",position:"absolute",width:"100%"},rightLabelContainer:{clip:horizontal?`rect(auto, auto, auto, ${containerWidth*sliderPosition}px)`:`rect(${containerHeight*sliderPosition}px, auto, auto, auto)`,height:"100%",position:"absolute",width:"100%"}};return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,skeleton&&!allImagesLoaded&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:_objectSpread({},styles.container)},skeleton),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:_objectSpread(_objectSpread({},styles.container),{},{display:allImagesLoaded?"block":"none"}),ref:containerRef,"data-testid":"container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{onLoad:()=>setRightImgLoaded(!0),alt:rightImageAlt,"data-testid":"right-image",ref:rightImageRef,src:rightImage,style:styles.rightImage}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{onLoad:()=>setLeftImgLoaded(!0),alt:leftImageAlt,"data-testid":"left-image",ref:leftImageRef,src:leftImage,style:styles.leftImage}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:styles.slider},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:styles.line}),handle?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:styles.handleCustom},handle):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:styles.handleDefault},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:styles.leftArrow}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:styles.rightArrow})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:styles.line})),leftImageLabel&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:styles.leftLabelContainer},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:styles.leftLabel},leftImageLabel)),rightImageLabel&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:styles.rightLabelContainer},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:styles.rightLabel},rightImageLabel))))};ReactCompareImage.defaultProps={aspectRatio:"taller",handle:null,handleSize:40,hover:!1,leftImageAlt:"",leftImageCss:{},leftImageLabel:null,onSliderPositionChange:()=>{},rightImageAlt:"",rightImageCss:{},rightImageLabel:null,skeleton:null,sliderLineColor:"#ffffff",sliderLineWidth:2,sliderPositionPercentage:.5,vertical:!1},__webpack_exports__.a=ReactCompareImage}},[[280,1,2]]]);
//# sourceMappingURL=main.608a4421c789a4609225.bundle.js.map