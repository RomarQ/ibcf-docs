"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[934],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?o.createElement(f,i(i({ref:t},p),{},{components:r})):o.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},35949:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={title:"EIP-1186 Proof Validator",slug:"/relay-contracts/tezos/validator",hide_title:!0},i=void 0,s={unversionedId:"relay-contracts/tezos/validator",id:"relay-contracts/tezos/validator",title:"EIP-1186 Proof Validator",description:"Methods",source:"@site/docs/relay-contracts/tezos/validator.mdx",sourceDirName:"relay-contracts/tezos",slug:"/relay-contracts/tezos/validator",permalink:"/ibcf-docs/relay-contracts/tezos/validator",draft:!1,editUrl:"https://github.com/airgap-it/ibcf-docs/docs/relay-contracts/tezos/validator.mdx",tags:[],version:"current",frontMatter:{title:"EIP-1186 Proof Validator",slug:"/relay-contracts/tezos/validator",hide_title:!0},sidebar:"docs",previous:{title:"State Aggregator",permalink:"/ibcf-docs/relay-contracts/tezos/state"},next:{title:"Proof Validator",permalink:"/ibcf-docs/relay-contracts/evm/validator"}},l={},c=[{value:"Methods",id:"methods",level:2},{value:"<code>submit_block_state_root</code>",id:"submit_block_state_root",level:3},{value:"<code>configure</code>",id:"configure",level:3},{value:"Views",id:"views",level:2},{value:"<code>validate_storage_proof</code>",id:"validate_storage_proof",level:3}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"submit_block_state_root"},(0,n.kt)("inlineCode",{parentName:"h3"},"submit_block_state_root")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Input type:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"(pair %submit_block_state_root\n    (nat %block_number)\n    (bytes %state_root)\n)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Relayers call this method with the block state roots of an EVM ",(0,n.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1186"},"EIP-1186")," enabled chain."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Requires permissions?")," Yes, only ",(0,n.kt)("inlineCode",{parentName:"p"},"relayers")," can call this method."),(0,n.kt)("div",{class:"padding-vert--md"}),(0,n.kt)("h3",{id:"configure"},(0,n.kt)("inlineCode",{parentName:"h3"},"configure")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Input type:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"(list %configure\n    (or\n        (address %update_administrator)\n        (nat %update_history_length)\n        (nat %update_minimum_endorsements)\n        (nat %update_snapshot_interval)\n        (set %update_validators (or (address %add) (address %remove)))\n    )\n)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," This method modifies the contract configurations."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Requires permissions?")," Yes, only the multisig administrator can call this method."),(0,n.kt)("div",{class:"padding-vert--md"}),(0,n.kt)("h2",{id:"views"},"Views"),(0,n.kt)("h3",{id:"validate_storage_proof"},(0,n.kt)("inlineCode",{parentName:"h3"},"validate_storage_proof")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Input type:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"(pair\n    (bytes %account)\n    (bytes %account_proof_rlp)\n    (nat %block_number)\n    (bytes %storage_proof_rlp)\n    (bytes %storage_slot)\n)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Output type:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"bytes")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Contracts in a Tezos ecosystem can call this method to validate ",(0,n.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1186"},"EIP-1186")," storage slot proofs of EVM contracts."),(0,n.kt)("p",null,"If the proof is valid, it returns the ",(0,n.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/data-structures-and-encoding/rlp"},"RLP")," encoded value of the EVM contract storage slot."))}d.isMDXComponent=!0}}]);