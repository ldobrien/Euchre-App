(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{217:function(e,t,a){e.exports=a.p+"static/media/Euchre.0bd882d4.jpg"},221:function(e,t,a){e.exports=a(430)},226:function(e,t,a){},381:function(e,t,a){},430:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(216),s=a.n(l),c=(a(226),a(4)),i=a(5),o=a(7),u=a(6),m=a(8),p=a(217),h=a.n(p),d=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h4",{className:"center"},"Home"),r.a.createElement("img",{src:h.a,alt:"Euchre"}),r.a.createElement("p",{className:"center pink"},"Created by JK and LO"))},E=a(433),f=a(435),g=a(431),b=a(380),y=a(10),v=a(17),O=a(12),j=a(24),N=a(434),w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={Name:"",Skill:"-",weight:0,error:null,success:null},a.handleSubmit=function(e){e.preventDefault(),a.props.players[a.state.Name]?a.setState({error:"Unable to Add Player: Player is not unique",success:null}):(a.props.createPlayer(a.state),a.setState({error:null,success:"Player successfully added"}))},a.handleChange=function(e){a.setState(Object(j.a)({},e.target.name,e.target.value))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("h4",{className:"center"},"Add Player"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Add New Player"),r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"Name",placeholder:"Name"}),r.a.createElement("button",{type:"submit"}," Add ")),r.a.createElement("div",{className:"red-text center"},this.state.error?r.a.createElement("p",null,this.state.error):null),r.a.createElement("div",{className:"black-text center"},this.state.success?r.a.createElement("p",null,this.state.success):null)):r.a.createElement(N.a,{to:"/signin"})}}]),t}(n.Component),S=Object(O.d)(Object(y.b)(function(e){return{auth:e.firebase.auth,players:e.firestore.data.players}},function(e){return{createPlayer:function(t){return e(function(e){return function(t,a,n){n.getFirebase,(0,n.getFirestore)().collection("players").doc(e.Name).set(e).then(function(){t({type:"CREATE_PLAYER",player:e})}).catch(function(e){t({type:"CREATE_PLAYER_ERROR",err:e})})}}(t))}}}),Object(v.firestoreConnect)([{collection:"players"}]))(w),C=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.players,a=e.auth;e.games;if(!t)return r.a.createElement("p",null);var n=Object.values(t).map(function(e){var t="-"===e.Skill?null:r.a.createElement("p",{className:"white-text"},"Rank: ",e.Skill);return r.a.createElement("div",{className:"post card pink",key:e.id},r.a.createElement("div",{className:"card-content"},r.a.createElement(b.a,{to:"/players/"+e.id},r.a.createElement("p",{className:"card-title white-text"},e.Name),t)))});return r.a.createElement("div",{className:"container"},a.uid?r.a.createElement(S,null):null,r.a.createElement("h4",{className:"center"},"Players"),n)}}]),t}(n.Component),k=Object(O.d)(Object(y.b)(function(e){return{players:e.firestore.ordered.players,auth:e.firebase.auth,games:e.firestore.ordered.games}}),Object(v.firestoreConnect)([{collection:"players"},{collection:"games"}]))(C),A=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"game card pink"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"winners-losers"},r.a.createElement("p",{className:"winners white-text"},r.a.createElement("span",{className:"winners-text"},"Winners: "),this.props.winner1+", "+this.props.winner2),r.a.createElement("p",{className:"losers white-text"},r.a.createElement("span",{className:"losers-text"},"Losers: "),this.props.loser1+", "+this.props.loser2)),r.a.createElement("p",{className:"score white-text"},r.a.createElement("span",{className:"score-text"},"Losers' score: "),this.props.score),r.a.createElement("p",{className:"score white-text"},r.a.createElement("span",{className:"score-text"},"Date: "),this.props.date.toDate().toString()))))}}]),t}(n.Component),x=(a(381),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={suggestions:[],text:a.props.text},a.handleChange=function(e){var t=e.target.value,n=[];if(t.length>0&&null!=a.props.input){var r=new RegExp("^".concat(t),"i");n=a.props.input.sort().filter(function(e){return r.test(e)})}a.setState(function(){return{suggestions:n,text:t}}),a.props.onChange(e)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"suggestionSelected",value:function(e){this.setState(function(){return{text:e,suggestions:[]}}),this.props.suggestionSelected(this.props.name,e)}},{key:"renderSuggestions",value:function(){var e=this,t=this.state.suggestions;return 0===t.length?null:r.a.createElement("ul",{className:"AutoCompleteText"},t.map(function(t){return r.a.createElement("li",{key:t,onClick:function(){return e.suggestionSelected(t)}},t)}))}},{key:"render",value:function(){var e=this.state.text;return r.a.createElement("div",null,null!=this.state.success?this.clearform():null,r.a.createElement("input",{type:"text",autoComplete:"off",value:e,name:this.props.name,placeholder:this.props.placeholder,onChange:this.handleChange}),this.renderSuggestions())}}]),t}(n.Component)),R=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={winner1:"",winner2:"",loser1:"",loser2:"",score:null,date:new Date},a.handleChange=function(e){null!=e&&a.setState(Object(j.a)({},e.target.name,e.target.value))},a.suggestionSelected=function(e,t){a.setState(Object(j.a)({},e,t))},a.handleSubmit=function(e){e.preventDefault();var t=Number(a.state.score),n=a.state.loser1,r=a.state.loser2,l=a.state.winner1,s=a.state.winner2;"d1"==s&&"d1"==l&&"d1"==n&&"d1"==r?(a.setState({success:"Game Added",error:null,winner1:""}),window.alert("Game Added")):a.props.players[l]&&a.props.players[n]&&a.props.players[s]&&a.props.players[r]?4===new Set([l,s,n,r]).size?(a.setState({success:"Game Added",error:null}),a.props.createGame(a.state),window.alert("Game added")):a.setState({success:null,error:"Players are not unique - no playing with yourself ;)"}):a.setState({success:null,error:"At least one of the players is not valid"}),t<10&&t>=0?Number.isInteger(t)||a.setState({success:null,error:"Score is not an Integer"}):a.setState({success:null,error:"Score is invalid"})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=null==this.props.players?null:Object.keys(this.props.players);return r.a.createElement("div",{className:"container"},r.a.createElement("form",{id:"form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"red-text center"},this.state.error?r.a.createElement("p",null,this.state.error):null),r.a.createElement("div",{className:"black-text center"},this.state.success?r.a.createElement("p",null,this.state.success):null),r.a.createElement("label",null,"Winner"),r.a.createElement(x,{input:e,name:"winner1",placeholder:"Winner",onChange:this.handleChange,suggestionSelected:this.suggestionSelected,text:""}),r.a.createElement(x,{input:e,name:"winner2",placeholder:"Winner",onChange:this.handleChange,suggestionSelected:this.suggestionSelected}),r.a.createElement("label",null,"Loser"),r.a.createElement(x,{input:e,name:"loser1",placeholder:"Loser",onChange:this.handleChange,suggestionSelected:this.suggestionSelected}),r.a.createElement(x,{input:e,name:"loser2",placeholder:"Loser",onChange:this.handleChange,suggestionSelected:this.suggestionSelected}),r.a.createElement("label",null,"Score"),r.a.createElement("input",{type:"text",name:"score",autoComplete:"off",placeholder:"Loser's Score",onChange:this.handleChange}),r.a.createElement("button",{type:"submit"}," Add ")))}}]),t}(n.Component),G=Object(O.d)(Object(y.b)(function(e){return{players:e.firestore.data.players}},function(e){return{createGame:function(t){return e(function(e){return function(t,a,n){n.getFirebase,(0,n.getFirestore)().collection("games").add(e).then(function(){t({type:"CREATE_GAME",game:e})}).catch(function(e){t({type:"CREATE_GAME_ERROR",err:e})})}}(t))}}}),Object(v.firestoreConnect)([{collection:"players"}]))(R),I=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).addGame=function(e){var t=a.state.listofGames;t.push(e),a.setState({listofGames:t})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.auth;if(!this.props.games)return r.a.createElement("p",null);var t=this.props.games.map(function(e){return r.a.createElement(A,{winner1:e.winner1,winner2:e.winner2,loser1:e.loser1,loser2:e.loser2,score:e.score,date:e.date,key:Math.random()})});return t.sort(function(e,t){return t.props.date.toDate()-e.props.date.toDate()}),r.a.createElement("div",{className:"container"},r.a.createElement("h4",{className:"center"},"Games"),e.uid?r.a.createElement(G,{addGame:this.addGame}):null,t)}}]),t}(n.Component),_=Object(O.d)(Object(y.b)(function(e){return{auth:e.firebase.auth,games:e.firestore.ordered.games}}),Object(v.firestoreConnect)([{collection:"games"}]))(I),P=a(432),U=function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(P.a,{to:"/signin"},"Sign In"))))},F=Object(y.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})})}}})(function(e){return r.a.createElement("div",null,r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(P.a,{to:"/add_account"},"Add Account")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Sign Out"))))}),W=Object(y.b)(function(e){return{auth:e.firebase.auth}})(function(e){var t=e.auth.uid?r.a.createElement(F,null):r.a.createElement(U,null);return r.a.createElement("nav",{className:"nav-wrapper pink"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"brand-logo white-text"},"UW Euchre"),t,r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(b.a,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(P.a,{to:"/players"},"Players")),r.a.createElement("li",null,r.a.createElement(P.a,{to:"/games"},"Games")))))}),L=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=0,t=0,a=0,n=0,l=this.props,s=l.playerGames,c=l.playerName,i=null==s?null:s.filter(function(e){return e.winner1===c||e.winner2===c}),o=null==s?null:s.filter(function(e){return e.loser1===c||e.loser2===c});null==i||i.forEach(function(n){e+=10-n.score,t+=10,a+=0===Number(n.score)?1:0});null==o||o.forEach(function(a){e+=a.score-10,t+=Number(a.score),n+=0===Number(a.score)?1:0});var u=null==i?0:i.length,m=null==o?0:o.length,p=null!=u||null!=m?u+m:0,h=0!=p?100*u/p:0,d=e>0?r.a.createElement("span",null,"+",e):r.a.createElement("span",null,e),E=0!=p?t/p:0,f=p>14?.002*h+.08*E:0;return this.props.saveWeight(this.props,f),r.a.createElement("div",{className:"player-skill white-text"},r.a.createElement("br",null),r.a.createElement("p",null," Wins: ",u),r.a.createElement("p",null," Losses: ",m),r.a.createElement("p",null," Total Games: ",p),r.a.createElement("p",null," Win Loss Percentage: ",Math.round(100*h)/100,"%"),r.a.createElement("p",null,"Plus-Minus: ",d),r.a.createElement("p",null," Cumulative Average: ",Math.round(100*E)/100),r.a.createElement("br",null),r.a.createElement("p",null," Skunks: ",a),r.a.createElement("p",null," Times Skunked: ",n))}}]),t}(n.Component),D=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"saveWeight",value:function(e,t){this.props&&this.props.addPlayerWeight(this.props.player.Name,t)}},{key:"render",value:function(){var e=this.props,t=e.player,a=e.allGames;null!=a&&null!=t&&a.filter(function(e){return e.winner1===t.Name||e.winner2===t.Name||e.loser1===t.Name||e.loser2===t.Name});return t?r.a.createElement("div",{className:"container",key:this.props.match.params.id},r.a.createElement("div",{className:"post card pink"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"card-title white-text"},"Name: ",t.Name),r.a.createElement("p",{className:"player-skill white-text"},"Rank: ",t.Skill),r.a.createElement(L,{playerGames:a,playerName:t.Name,saveWeight:this.saveWeight,props:this.props})))):r.a.createElement("p",null)}}]),t}(n.Component),T=Object(O.d)(Object(y.b)(function(e,t){var a=t.match.params.player_id,n=e.firestore.data.players;return{player:n?n[a]:null,allGames:e.firestore.ordered.games}},function(e){return{addPlayerWeight:function(t,a){return e(function(e,t){return function(a,n,r){r.getFirebase,(0,r.getFirestore)().collection("players").doc(e).update({weight:t}).then(function(){a({type:"ADD_WEIGHT",weight:t})}).catch(function(e){a({type:"ADD_WEIGHT_ERROR",err:e})})}}(t,a))}}}),Object(v.firestoreConnect)([{collection:"players"},{collection:"games"}]))(D),M=a(22),H=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={newUser:{username:"",password:""},submitted:!1},a.handleChange=function(e){a.setState({newUser:Object(M.a)({},a.state.newUser,Object(j.a)({},e.target.id,e.target.value))})},a.handleSubmit=function(e){e.preventDefault(),a.props.addAccount(a.state.newUser),a.setState({submitted:!0})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Add Account"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",id:"username",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink"},"Sign Up"))),r.a.createElement("div",{className:"red-text center"},this.state.submitted?a?r.a.createElement("p",null,a):r.a.createElement("p",null,"Account Created"):null)):r.a.createElement(N.a,{to:"/signin"})}}]),t}(n.Component),B=Object(y.b)(function(e){return{auth:e.firebase.auth,authError:e.auth.authError}},function(e){return{addAccount:function(t){return e((a=t,function(e,t,n){var r=n.getFirebase,l=n.getFirestore,s=r();l(),console.log(a),s.auth().createUserWithEmailAndPassword(a.username,a.password).then(function(){e({type:"SIGNUP_SUCCESS"})}).catch(function(t){e({type:"SIGNUP_ERROR",err:t})})}));var a}}})(H),Y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:null,password:null},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a.handleChange=function(e){a.setState(Object(j.a)({},e.target.id,e.target.value))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(N.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",id:"username",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink"},"Sign In"),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null))))}}]),t}(n.Component),z=Object(y.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.username,a.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_ERROR",err:t})})}));var a}}})(Y),J=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(W,null),r.a.createElement(f.a,null,r.a.createElement(g.a,{exact:!0,path:"/",component:d}),r.a.createElement(g.a,{exact:!0,path:"/players",component:k}),r.a.createElement(g.a,{path:"/games",component:_}),r.a.createElement(g.a,{path:"/players/:player_id",component:T}),r.a.createElement(g.a,{path:"/add",component:S}),r.a.createElement(g.a,{path:"/add_account",component:B}),r.a.createElement(g.a,{path:"/signin",component:z}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=a(62),q={players:[]},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PLAYER":return Object(M.a)({},e,{players:Object(K.a)(e.players).concat([t.player])});case"ADD_WEIGHT":return Object(M.a)({},e,{players:Object(K.a)(e.players).concat([t.playerName,t.weight])});default:return e}},Q={games:[]},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_GAME":return Object(M.a)({},e,{games:Object(K.a)(e.games).concat([t.game])});default:return e}},X={authError:null,accountAdded:null},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return Object(M.a)({},e,{authError:"Login Failed"});case"LOGIN_SUCCESS":return Object(M.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return{state:e};case"SIGNUP_SUCCESS":return Object(M.a)({},e,{authError:null,accountAdded:!0});case"SIGNUP_ERROR":return Object(M.a)({},e,{authError:t.err.message});default:return e}},ee=a(61),te=Object(O.c)({player:$,game:V,auth:Z,firestore:ee.firestoreReducer,firebase:v.firebaseReducer}),ae=a(89),ne=a.n(ae);a(423),a(428);ne.a.initializeApp({apiKey:"AIzaSyAmykopjj718snpBmdaMfFvYMe4IoaggK0",authDomain:"uwaterlooeuchre.firebaseapp.com",databaseURL:"https://uwaterlooeuchre.firebaseio.com",projectId:"uwaterlooeuchre",storageBucket:"uwaterlooeuchre.appspot.com",messagingSenderId:"756338843354"}),ne.a.firestore().settings({timestampsInSnapshots:!0});var re=ne.a,le=a(220),se=Object(O.e)(te,Object(O.d)(Object(O.a)(le.a.withExtraArgument({getFirebase:v.getFirebase,getFirestore:ee.getFirestore})),Object(ee.reduxFirestore)(re),Object(v.reactReduxFirebase)(re,{attachAuthIsReady:!0})));se.firebaseAuthIsReady.then(function(){s.a.render(r.a.createElement(y.a,{store:se},r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})})}},[[221,2,1]]]);
//# sourceMappingURL=main.17e7e796.chunk.js.map