(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{219:function(e,t,a){e.exports=a.p+"static/media/Euchre.0bd882d4.jpg"},223:function(e,t,a){e.exports=a(431)},228:function(e,t,a){},41:function(e,t,a){},431:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(218),s=a.n(l),c=(a(228),a(4)),i=a(5),o=a(8),u=a(6),m=a(9),p=a(219),h=a.n(p),d=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h4",{className:"center"},"Home"),r.a.createElement("img",{src:h.a,alt:"Euchre"}),r.a.createElement("p",{className:"center pink"},"Created by JK and LO"))},f=a(434),g=a(436),E=a(432),b=a(43),y=a.n(b),v=a(136),O=a(384),j=a(7),w=a(11),N=a(10),S=a(12),C=function(e,t){return function(a,n,r){r.getFirebase;(0,r.getFirestore)().collection("players").doc(e).update({weight:t}).then(function(){a({type:"ADD_WEIGHT",weight:t})}).catch(function(e){a({type:"ADD_WEIGHT_ERROR",err:e})})}},k=a(435),A=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={Name:null,Skill:"-",weight:0,error:null,success:null},a.handleSubmit=function(e){e.preventDefault(),null==a.state.Name?a.setState({error:"No input received",success:null}):null!=a.props.players&&a.props.players[a.state.Name]?a.setState({error:"Unable to Add Player: Player is not unique",success:null}):(a.props.createPlayer(a.state),a.setState({error:null,success:"Player successfully added",Name:null,Skill:"-",weight:0}))},a.handleChange=function(e){a.setState(Object(S.a)({},e.target.name,e.target.value))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("h4",{className:"center"},"Add Player"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Add New Player"),r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"Name",placeholder:"Name"}),r.a.createElement("button",{type:"submit"}," Add ")),r.a.createElement("div",{className:"red-text center"},this.state.error?r.a.createElement("p",null,this.state.error):null),r.a.createElement("div",{className:"black-text center"},this.state.success?r.a.createElement("p",null,this.state.success):null)):r.a.createElement(k.a,{to:"/signin"})}}]),t}(n.Component),R=Object(N.d)(Object(j.b)(function(e){return{auth:e.firebase.auth,players:e.firestore.data.players}},function(e){return{createPlayer:function(t){return e(function(e){return function(t,a,n){n.getFirebase,(0,n.getFirestore)().collection("players").doc(e.Name).set(e).then(function(){t({type:"CREATE_PLAYER",player:e})}).catch(function(e){t({type:"CREATE_PLAYER_ERROR",err:e})})}}(t))}}}),Object(w.firestoreConnect)([{collection:"players"}]))(A),x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={weightList:[],mounted:!1},a.addWeights=Object(v.a)(y.a.mark(function e(){var t,n,l,s,c,i,o,u,m,p,h,d,f,g,E,b,v,O;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.props,n=t.players,t.auth,l=t.games,n){e.next=3;break}return e.abrupt("return",r.a.createElement("p",null));case 3:for(s=!0,c=!1,i=void 0,e.prev=6,o=n[Symbol.iterator]();!(s=(u=o.next()).done);s=!0)m=u.value,p=null==l?null:l.filter(function(e){return e.winner1==m.Name||e.winner2==m.Name}),h=null==l?null:l.filter(function(e){return e.loser1==m.Name||e.loser2==m.Name}),0,d=0,null==p?0:p.forEach(function(e){10-e.score,d+=10}),null==h?0:h.forEach(function(e){e.score-10,d+=Number(e.score)}),f=null===p?0:p.length,g=null==h?0:h.length,b=0!=(E=f+g)?100*f/E:0,v=0!=E?d/E:0,O=E>14?.002*b+.08*v:0,a.props?a.props.addPlayerWeight(m.Name,O):null;e.next=14;break;case 10:e.prev=10,e.t0=e.catch(6),c=!0,i=e.t0;case 14:e.prev=14,e.prev=15,s||null==o.return||o.return();case 17:if(e.prev=17,!c){e.next=20;break}throw i;case 20:return e.finish(17);case 21:return e.finish(14);case 22:case"end":return e.stop()}},e,this,[[6,10,14,22],[15,,17,21]])})),a.addRanks=Object(v.a)(y.a.mark(function e(){var t,n,l,s,c,i;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.props,n=t.players,t.auth,t.games,n){e.next=3;break}return e.abrupt("return",r.a.createElement("p",null));case 3:if(l=n.filter(function(e){return 0!=e.weight}),a.state.mounted&&0!=l.length){for(i in s=l.slice().sort(function(e,t){return e.weight<t.weight?1:t.weight<e.weight?-1:0}),c=l.slice().map(function(e){return s.indexOf(e)+1}),s)a.props?a.props.addPlayerRank(l[i].Name,c[i]):null;a.setState({mounted:!1})}case 5:case"end":return e.stop()}},e,this)})),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({mounted:!0})}},{key:"componentWillMount",value:function(){this.addWeights()}},{key:"render",value:function(){this.addRanks();var e=this.props,t=e.players,a=e.auth;e.games;if(!t)return r.a.createElement("p",null);var n=Object.values(t).map(function(e){var t=0===e.weight?null:r.a.createElement("p",{className:"white-text"},"Rank: ",e.rank);return r.a.createElement("div",{className:"post card pink",key:e.id},r.a.createElement("div",{className:"card-content"},r.a.createElement(O.a,{to:"/players/"+e.id},r.a.createElement("p",{className:"card-title white-text"},e.Name),t)))});return r.a.createElement("div",{className:"container"},a.uid?r.a.createElement(R,null):null,r.a.createElement("h4",{className:"center"},"Players"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card-content"},n)))}}]),t}(n.Component),G=Object(N.d)(Object(j.b)(function(e){return{players:e.firestore.ordered.players,auth:e.firebase.auth,games:e.firestore.ordered.games}},function(e){return{addPlayerWeight:function(t,a){return e(C(t,a))},addPlayerRank:function(t,a){return e(function(e,t){return function(a,n,r){r.getFirebase,(0,r.getFirestore)().collection("players").doc(e).update({rank:t}).then(function(){a({type:"ADD_RANK",rank:t})}).catch(function(e){a({type:"ADD_RANK_ERROR",err:e})})}}(t,a))}}}),Object(w.firestoreConnect)([{collection:"players"},{collection:"games"}]))(x),_=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=null==this.props.date?null:this.props.date.toString();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"game card pink"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"winners-losers"},r.a.createElement("p",{className:"winners white-text"},r.a.createElement("span",{className:"winners-text"},"Winners: "),this.props.winner1+", "+this.props.winner2),r.a.createElement("p",{className:"losers white-text"},r.a.createElement("span",{className:"losers-text"},"Losers: "),this.props.loser1+", "+this.props.loser2)),r.a.createElement("p",{className:"score white-text"},r.a.createElement("span",{className:"score-text"},"Losers' score: "),this.props.score),r.a.createElement("p",{className:"score white-text"},r.a.createElement("span",{className:"score-text"},"Date: "),e))))}}]),t}(n.Component),D=a(13),P=function(e){return function(t,a,n){n.getFirebase;(0,n.getFirestore)().collection("games").add(e).then(function(){t({type:"CREATE_GAME",game:e})}).catch(function(e){t({type:"CREATE_GAME_ERROR",err:e})})}},I=(a(41),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={game:{winner1:"",winner2:"",loser1:"",loser2:"",score:-1,date:(new Date).toString()},suggestions:{winner1:[],winner2:[],loser1:[],loser2:[]}},a.handleChange=function(e){if(null!=e){var t=e.target.name,n=e.target.value,r=Object.keys(a.props.players),l=[];if(n.length>0&&null!=r){var s=new RegExp("^".concat(n),"i");l=r.sort().filter(function(e){return s.test(e)})}a.setState(function(){return{game:Object(D.a)({},a.state.game,Object(S.a)({},t,n)),suggestions:Object(S.a)({},t,l)}})}},a.handleSubmit=function(e){e.preventDefault();var t=Number(a.state.game.score),n=a.state.game.loser1,r=a.state.game.loser2,l=a.state.game.winner1,s=a.state.game.winner2;t<10&&t>=0&&1==a.state.game.score.toString().length?Number.isInteger(t)?a.props.players[l]&&a.props.players[n]&&a.props.players[s]&&a.props.players[r]?4===new Set([l,s,n,r]).size?(a.props.createGame(a.state.game),document.getElementById("form").reset(),a.setState({success:"Game Added",error:null,game:{winner1:"",winner2:"",loser1:"",loser2:"",score:-1,date:(new Date).toString()}}),window.alert("Game added")):a.setState({success:null,error:"Players are not unique - no playing with yourself ;)"}):a.setState({success:null,error:"At least one of the players is not valid"}):a.setState({success:null,error:"Score is not an Integer"}):a.setState({success:null,error:"Score is invalid"})},a.resetState=function(e){a.setState({game:{winner1:"",winner2:"",loser1:"",loser2:"",score:-1,date:(new Date).toString()},suggestions:{},success:null,error:null})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"suggestionSelected",value:function(e,t){var a=this;this.setState(function(){return{suggestions:Object(S.a)({},e,[]),game:Object(D.a)({},a.state.game,Object(S.a)({},e,t))}})}},{key:"renderSuggestions",value:function(e){var t=this,a=this.state.suggestions[e];return null==a||0===a.length?null:r.a.createElement("ul",{className:"AutoCompleteText"},a.map(function(a){return r.a.createElement("li",{key:a,onClick:function(){return t.suggestionSelected(e,a)}},a)}))}},{key:"render",value:function(){var e=null==this.props.players?null:Object.keys(this.props.players),t=null==this.state.error?null:r.a.createElement("p",null,this.state.error),a=null==this.state.success?null:r.a.createElement("p",null,this.state.success);if(null!=t||null!=a)this.resetState;return r.a.createElement("div",{className:"container"},r.a.createElement("form",{id:"form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"red-text center"},t),r.a.createElement("div",{className:"black-text center"},a),r.a.createElement("label",null,"Winner"),r.a.createElement("input",{type:"text",autoComplete:"off",input:e,name:"winner1",placeholder:"Winner",onChange:this.handleChange,value:this.state.game.winner1}),this.renderSuggestions("winner1"),r.a.createElement("input",{type:"text",autoComplete:"off",input:e,name:"winner2",placeholder:"Winner",onChange:this.handleChange,value:this.state.game.winner2}),this.renderSuggestions("winner2"),r.a.createElement("input",{type:"text",autoComplete:"off",input:e,name:"loser1",placeholder:"Loser",onChange:this.handleChange,value:this.state.game.loser1}),this.renderSuggestions("loser1"),r.a.createElement("input",{type:"text",autoComplete:"off",input:e,name:"loser2",placeholder:"Loser",onChange:this.handleChange,value:this.state.game.loser2}),this.renderSuggestions("loser2"),r.a.createElement("label",null,"Score"),r.a.createElement("input",{type:"text",name:"score",autoComplete:"off",placeholder:"Loser's Score",onChange:this.handleChange}),r.a.createElement("button",{type:"submit"}," Add ")))}}]),t}(n.Component)),U=Object(N.d)(Object(j.b)(function(e){return{players:e.firestore.data.players}},function(e){return{createGame:function(t){return e(P(t))}}}),Object(w.firestoreConnect)([{collection:"players"}]))(I),F=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).addGame=function(e){var t=a.state.listofGames;t.push(e),a.setState({listofGames:t})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.auth;if(!this.props.games)return r.a.createElement("p",null);var t=this.props.games.map(function(e){return r.a.createElement(O.a,{to:"/games/"+e.id,key:e.id},r.a.createElement(_,{winner1:e.winner1,winner2:e.winner2,loser1:e.loser1,loser2:e.loser2,score:e.score,date:e.date,key:e.id}))});return r.a.createElement("div",{className:"container"},r.a.createElement("h4",{className:"center"},"Games"),e.uid?r.a.createElement(U,{addGame:this.addGame}):null,t)}}]),t}(n.Component),L=Object(N.d)(Object(j.b)(function(e){return{auth:e.firebase.auth,games:e.firestore.ordered.games}}),Object(w.firestoreConnect)([{collection:"games",orderBy:["date","desc"]}]))(F),W=a(433),T=function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(W.a,{to:"/signin"},"Sign In"))))},M=Object(j.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})})}}})(function(e){return r.a.createElement("div",null,r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(W.a,{to:"/add_account"},"Add Account")),r.a.createElement("li",null,r.a.createElement(W.a,{to:"/settings"},"Settings")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Sign Out"))))}),z=Object(j.b)(function(e){return{auth:e.firebase.auth}})(function(e){var t=e.auth.uid?r.a.createElement(M,null):r.a.createElement(T,null);return r.a.createElement("nav",{className:"nav-wrapper pink"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"brand-logo white-text"},"UW Euchre"),t,r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(O.a,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(W.a,{to:"/players"},"Players")),r.a.createElement("li",null,r.a.createElement(W.a,{to:"/games"},"Games")))))}),Y=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=0,t=0,a=0,n=0,l=this.props,s=l.playerGames,c=l.playerName,i=null==s?null:s.filter(function(e){return e.winner1===c||e.winner2===c}),o=null==s?null:s.filter(function(e){return e.loser1===c||e.loser2===c});null==i||i.forEach(function(n){e+=10-n.score,t+=10,a+=0===Number(n.score)?1:0});null==o||o.forEach(function(a){e+=a.score-10,t+=Number(a.score),n+=0===Number(a.score)?1:0});var u=null==i?0:i.length,m=null==o?0:o.length,p=null!=u||null!=m?u+m:0,h=0!=p?100*u/p:0,d=e>0?r.a.createElement("span",null,"+",e):r.a.createElement("span",null,e),f=0!=p?t/p:0,g=p>14?.002*h+.08*f:0;return r.a.createElement("div",{className:"player-skill white-text"},r.a.createElement("br",null),r.a.createElement("p",null," Wins: ",u),r.a.createElement("p",null," Losses: ",m),r.a.createElement("p",null," Total Games: ",p),r.a.createElement("p",null," Win Loss Percentage: ",Math.round(100*h)/100,"%"),r.a.createElement("p",null,"Plus-Minus: ",d),r.a.createElement("p",null," Cumulative Average: ",Math.round(100*f)/100),r.a.createElement("p",null," Weight: ",g),r.a.createElement("br",null),r.a.createElement("p",null," Skunks: ",a),r.a.createElement("p",null," Times Skunked: ",n))}}]),t}(n.Component),B=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"saveWeight",value:function(e,t){this.props&&this.props.addPlayerWeight(this.props.player.Name,t)}},{key:"render",value:function(){var e=this.props,t=e.player,a=e.allGames,n=null!=a&&null!=t?a.filter(function(e){return e.winner1===t.Name||e.winner2===t.Name||e.loser1===t.Name||e.loser2===t.Name}):null;if(!t)return r.a.createElement("p",null);var l=null==n?null:n.map(function(e){return r.a.createElement(_,{winner1:e.winner1,winner2:e.winner2,loser1:e.loser1,loser2:e.loser2,score:e.score,date:e.date,key:Math.random()})});return r.a.createElement("div",null,r.a.createElement("div",{className:"container",key:this.props.match.params.id},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"post card pink"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"card-title white-text"},"Name: ",t.Name),r.a.createElement("p",{className:"player-skill white-text"},"Rank: ",t.rank),r.a.createElement(Y,{playerGames:a,playerName:t.Name,saveWeight:this.saveWeight,props:this.props})))))),r.a.createElement("div",{className:"container"},r.a.createElement("h4",{className:"center"},"Games"),l))}}]),t}(n.Component),K=Object(N.d)(Object(j.b)(function(e,t){var a=t.match.params.player_id,n=e.firestore.data.players;return{player:n?n[a]:null,allGames:e.firestore.ordered.games}},function(e){return{addPlayerWeight:function(t,a){return e(C(t,a))}}}),Object(w.firestoreConnect)([{collection:"players"},{collection:"games"}]))(B),H=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={newUser:{username:"",password:""},submitted:!1},a.handleChange=function(e){a.setState({newUser:Object(D.a)({},a.state.newUser,Object(S.a)({},e.target.id,e.target.value))})},a.handleSubmit=function(e){e.preventDefault(),a.props.addAccount(a.state.newUser),a.setState({submitted:!0})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Add Account"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",id:"username",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink"},"Sign Up"))),r.a.createElement("div",{className:"red-text center"},this.state.submitted?a?r.a.createElement("p",null,a):r.a.createElement("p",null,"Account Created"):null)):r.a.createElement(k.a,{to:"/signin"})}}]),t}(n.Component),q=Object(j.b)(function(e){return{auth:e.firebase.auth,authError:e.auth.authError}},function(e){return{addAccount:function(t){return e((a=t,function(e,t,n){var r=n.getFirebase,l=n.getFirestore,s=r();l(),console.log(a),s.auth().createUserWithEmailAndPassword(a.username,a.password).then(function(){e({type:"SIGNUP_SUCCESS"})}).catch(function(t){e({type:"SIGNUP_ERROR",err:t})})}));var a}}})(H),J=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:null,password:null},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a.handleChange=function(e){a.setState(Object(S.a)({},e.target.id,e.target.value))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(k.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",id:"username",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink"},"Sign In"),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null))))}}]),t}(n.Component),$=Object(j.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.username,a.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_ERROR",err:t})})}));var a}}})(J),Q=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={winner1:a.props.winner1,winner2:a.props.winner2,loser1:a.props.loser1,loser2:a.props.loser2,score:a.props.score,date:a.props.date,suggestions:{}},a.handleChange=function(e){if(null!=e){var t=e.target.name,n=e.target.value,r=Object.keys(a.props.players),l=[];if(n.length>0&&null!=r){var s=new RegExp("^".concat(n),"i");l=r.sort().filter(function(e){return s.test(e)})}a.setState(function(){var e;return e={},Object(S.a)(e,t,n),Object(S.a)(e,"suggestions",Object(S.a)({},t,l)),e})}},a.handleSubmit=function(e){e.preventDefault();var t=Number(a.state.score),n=a.state.loser1,r=a.state.loser2,l=a.state.winner1,s=a.state.winner2;t<10&&t>=0&&1==a.state.score.toString().length?Number.isInteger(t)?a.props.players[l]&&a.props.players[n]&&a.props.players[s]&&a.props.players[r]?4===new Set([l,s,n,r]).size?(a.props.editGame(a.props.match.params.game_id,a.state),a.setState({success:"Game Updated"}),window.alert("Game Updated")):a.setState({success:null,error:"Players are not unique - no playing with yourself ;)"}):a.setState({success:null,error:"At least one of the players is not valid"}):a.setState({success:null,error:"Score is not an Integer"}):a.setState({success:null,error:"Score is invalid"})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=(e.players,e.games);null==this.props.players||Object.keys(this.props.players);var a=null==t?null:t[this.props.match.params.game_id];null!==a&&this.setState(function(){return{winner1:a.winner1,winner2:a.winner2,loser1:a.loser1,loser2:a.loser2,score:a.score}})}},{key:"suggestionSelected",value:function(e,t){this.setState(function(){return Object(S.a)({suggestions:Object(S.a)({},e,[])},e,t)})}},{key:"renderSuggestions",value:function(e){var t=this,a=this.state.suggestions[e];return null==a||0===a.length?null:r.a.createElement("ul",{className:"AutoCompleteText"},a.map(function(a){return r.a.createElement("li",{key:a,onClick:function(){return t.suggestionSelected(e,a)}},a)}))}},{key:"render",value:function(){var e=this.props,t=e.players,a=e.games;t=null==this.props.players?null:Object.keys(this.props.players);null==a||a[this.props.match.params.game_id];return"Game Updated"===this.state.success?(this.setState({success:null}),r.a.createElement(k.a,{to:"/games"})):this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{id:"form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"red-text center"},this.state.error?r.a.createElement("p",null,this.state.error):null),r.a.createElement("div",{className:"black-text center"},this.state.success?r.a.createElement("p",null,this.state.success):null),r.a.createElement("label",null,"Winner"),r.a.createElement("input",{type:"text",autoComplete:"off",input:t,name:"winner1",placeholder:"Winner",onChange:this.handleChange,value:this.state.winner1}),this.renderSuggestions("winner1"),r.a.createElement("input",{type:"text",autoComplete:"off",input:t,name:"winner2",placeholder:"Winner",onChange:this.handleChange,value:this.state.winner2}),this.renderSuggestions("winner2"),r.a.createElement("input",{type:"text",autoComplete:"off",input:t,name:"loser1",placeholder:"Loser",onChange:this.handleChange,value:this.state.loser1}),this.renderSuggestions("loser1"),r.a.createElement("input",{type:"text",autoComplete:"off",input:t,name:"loser2",placeholder:"Loser",onChange:this.handleChange,value:this.state.loser2}),this.renderSuggestions("loser2"),r.a.createElement("label",null,"Score"),r.a.createElement("input",{type:"text",name:"score",autoComplete:"off",placeholder:"Loser's Score",value:this.state.score,onChange:this.handleChange}),r.a.createElement("button",{type:"submit"}," Add "))):r.a.createElement(k.a,{to:"/games"})}}]),t}(n.Component),V=Object(N.d)(Object(j.b)(function(e){return{auth:e.firebase.auth,players:e.firestore.data.players,games:e.firestore.data.games}},function(e){return{editGame:function(t,a){return e(function(e,t){return function(a,n,r){r.getFirebase,(0,r.getFirestore)().collection("games").doc(e).update({winner1:t.winner1,winner2:t.winner2,loser1:t.loser1,loser2:t.loser2,score:t.score}).then(function(){a({type:"UPDATE_GAME",game:t})}).catch(function(e){a({type:"UPDATE_GAME_ERROR",err:e})})}}(t,a))}}}),Object(w.firestoreConnect)([{collection:"players"},{collection:"games"}]))(Q),X=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={gamesPlayed:15},a.handleChange=function(e){var t=e.target;console.log(t),null!=e&&null!=t&&(console.log(t),a.setState(function(){return{gamesPlayed:t.value}}))},a.handleSubmit=function(e){e.preventDefault()},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{id:"form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"red-text center"},this.state.error?r.a.createElement("p",null,this.state.error):null),r.a.createElement("div",{className:"black-text center"},this.state.success?r.a.createElement("p",null,this.state.success):null),r.a.createElement("label",null,"Minimum Number of Games Needed for Ranking"),r.a.createElement("input",{type:"text",autoComplete:"off",name:"Minimum Games Needed",placeholder:"Minimum Games Needed",onChange:this.handleChange,value:this.state.gamesPlayed}),r.a.createElement("button",{type:"submit"}," Add ")))}}]),t}(n.Component),Z=(Object(N.d)(Object(j.b)(function(e){return{players:e.firestore.data.players}},function(e){return{createGame:function(t){return e(P(t))}}}),Object(w.firestoreConnect)([{collection:"players"}]))(X),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onClick=function(e){null!=a.props.players?(Object.keys(a.props.players).forEach(function(e){a.props.deletePlayer(e)}),window.alert("Player List Deleted")):window.alert("No Players to Delete")},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container z-depth-1"},r.a.createElement("h5",{className:"red-text center-align"},"Only press this button if you want to delete the entire player list"),r.a.createElement("div",{className:"center-align"},r.a.createElement("button",{className:"waves-effect waves-light red btn",onClick:this.onClick}," Delete all Players ")))}}]),t}(n.Component)),ee=Object(N.d)(Object(j.b)(function(e){return{players:e.firestore.data.players}},function(e){return{deletePlayer:function(t){return e((a=t,function(e,t,n){n.getFirebase,(0,n.getFirestore)().collection("players").doc(a).delete().then(function(){e({type:"DELETE_PLAYERS",playerName:a})}).catch(function(t){e({type:"DELETE_PLAYERS_ERROR",err:t})})}));var a}}}),Object(w.firestoreConnect)([{collection:"players"}]))(Z),te=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onClick=function(e){null!=a.props.games?(Object.keys(a.props.games).forEach(function(e){a.props.deleteGame(e)}),window.alert("Database Deleted")):window.alert("No Database to Delete")},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container z-depth-1"},r.a.createElement("h5",{className:"red-text center-align"},"Only press this button if you want to delete the entire games database"),r.a.createElement("div",{className:"center-align"},r.a.createElement("button",{className:"waves-effect waves-light red btn",onClick:this.onClick}," Delete Database ")))}}]),t}(n.Component),ae=Object(N.d)(Object(j.b)(function(e){return{games:e.firestore.data.games}},function(e){return{deleteGame:function(t){return e((a=t,function(e,t,n){n.getFirebase,(0,n.getFirestore)().collection("games").doc(a).delete().then(function(){e({type:"DELETE_GAME",id:a})}).catch(function(t){e({type:"DELETE_GAME_ERROR",err:t})})}));var a}}}),Object(w.firestoreConnect)([{collection:"games"}]))(te),ne=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card"},r.a.createElement("h5",{className:"center"},"Games"),r.a.createElement(ae,null)))}}]),t}(n.Component),re=(Object(N.d)(Object(j.b)(function(e){return{games:e.firestore.data.games}},null),Object(w.firestoreConnect)([{collection:"games"}]))(ne),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={authorized:!1},a.handleChange=function(e){a.setState({newUser:Object(D.a)({},a.state.newUser,Object(S.a)({},e.target.id,e.target.value))})},a.handleSubmit=function(e){e.preventDefault(),a.state.newUser.email==a.props.auth.email&&a.setState({authorized:!0})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.authorized?r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s6"},r.a.createElement(ae,null)),r.a.createElement("div",{className:"col s6"},r.a.createElement(ee,null)))):r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("div",{className:"input-field"},r.a.createElement("div",{className:"center"},r.a.createElement("h5",null,"Re-enter you email to access this page")),r.a.createElement("div",{className:"container"},r.a.createElement("label",{htmlFor:"email"},"Re-enter your Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange}),r.a.createElement("button",{type:"submit"}," Confirm ")))))}}]),t}(n.Component)),le=Object(N.d)(Object(j.b)(function(e){return{players:e.firestore.data.players,auth:e.firebase.auth}},function(e){return{createGame:function(t){return e(P(t))}}}),Object(w.firestoreConnect)([{collection:"players"}]))(re),se=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(z,null),r.a.createElement(g.a,null,r.a.createElement(E.a,{exact:!0,path:"/",component:d}),r.a.createElement(E.a,{exact:!0,path:"/players",component:G}),r.a.createElement(E.a,{exact:!0,path:"/games",component:L}),r.a.createElement(E.a,{path:"/players/:player_id",component:K}),r.a.createElement(E.a,{path:"/add",component:R}),r.a.createElement(E.a,{path:"/add_account",component:q}),r.a.createElement(E.a,{path:"/signin",component:$}),r.a.createElement(E.a,{path:"/games/:game_id",component:V}),r.a.createElement(E.a,{path:"/settings",component:le}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=a(51),ie={players:[]},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PLAYER":return Object(D.a)({},e,{players:Object(ce.a)(e.players).concat([t.player])});case"ADD_WEIGHT":return Object(D.a)({},e,{players:Object(ce.a)(e.players).concat([t.playerName,t.weight])});case"ADD_RANK":return Object(D.a)({},e,{players:Object(ce.a)(e.players).concat([t.playerName,t.rank])});case"DELETE_PLAYERS":return Object(D.a)({},e,{players:[]});default:return e}},ue={games:[]},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_GAME":return Object(D.a)({},e,{games:Object(ce.a)(e.games).concat([t.game])});case"UPDATE_GAME":return Object(D.a)({},e,{games:e.games.map(function(a,n){return n===t.id?Object.assign({},a,{completed:!1}):e.games})});case"DELETE_GAME":return Object(D.a)({},e,{games:[]});default:return e}},pe={authError:null,accountAdded:null},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return Object(D.a)({},e,{authError:"Login Failed"});case"LOGIN_SUCCESS":return Object(D.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return{state:e};case"SIGNUP_SUCCESS":return Object(D.a)({},e,{authError:null,accountAdded:!0});case"SIGNUP_ERROR":return Object(D.a)({},e,{authError:t.err.message});default:return e}},de=a(64),fe=Object(N.c)({player:oe,game:me,auth:he,firestore:de.firestoreReducer,firebase:w.firebaseReducer}),ge=a(91),Ee=a.n(ge);a(424),a(429);Ee.a.initializeApp({apiKey:"AIzaSyAmykopjj718snpBmdaMfFvYMe4IoaggK0",authDomain:"uwaterlooeuchre.firebaseapp.com",databaseURL:"https://uwaterlooeuchre.firebaseio.com",projectId:"uwaterlooeuchre",storageBucket:"uwaterlooeuchre.appspot.com",messagingSenderId:"756338843354"}),Ee.a.firestore().settings({timestampsInSnapshots:!0});var be=Ee.a,ye=a(222),ve=Object(N.e)(fe,Object(N.d)(Object(N.a)(ye.a.withExtraArgument({getFirebase:w.getFirebase,getFirestore:de.getFirestore})),Object(de.reduxFirestore)(be),Object(w.reactReduxFirebase)(be,{attachAuthIsReady:!0})));ve.firebaseAuthIsReady.then(function(){s.a.render(r.a.createElement(j.a,{store:ve},r.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})})}},[[223,2,1]]]);
//# sourceMappingURL=main.07ac075d.chunk.js.map