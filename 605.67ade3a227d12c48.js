"use strict";(self.webpackChunkweb_building=self.webpackChunkweb_building||[]).push([[605],{605:(f,u,o)=>{o.r(u),o.d(u,{AboutModule:()=>b});var l=o(6895),a=o(9299),e=o(4650),p=o(4214),d=o(9127);function g(t,r){1&t&&(e.TgZ(0,"div",1)(1,"h1"),e._uU(2,"About the Website"),e.qZA(),e.TgZ(3,"h2"),e._uU(4,"Introduction to the Website"),e.qZA(),e._UZ(5,"img",2),e.TgZ(6,"p"),e._uU(7,' Welcome to the "'),e.TgZ(8,"strong"),e._uU(9,"Web Tech Mentors"),e.qZA(),e._uU(10,'" website! Our platform is dedicated to teaching the foundational and advanced concepts of web development through comprehensive tutorials that include HTML, CSS, JavaScript, TypeScript, SASS, RxJS, and npm. '),e.qZA(),e.TgZ(11,"p"),e._uU(12," Whether you're starting from scratch or looking to enhance your front-end development skills, our tutorials are designed to guide you through each technology with a hands-on approach. With HTML and CSS, you'll learn to structure and style your web pages, creating responsive and visually appealing designs. Our JavaScript and TypeScript tutorials will help you add interactivity and maintainable code to your projects, while SASS will elevate your CSS with powerful features like variables, nesting, and mixins. "),e.qZA(),e.TgZ(13,"p"),e._uU(14," Dive into RxJS to handle asynchronous events, and manage your project dependencies effectively with npm. Our interactive lessons ensure a learning experience that is engaging and effective. "),e.qZA(),e.TgZ(15,"p"),e._uU(16," Embrace the full scope of web development and become proficient in building sophisticated web applications by starting learning on our website today! "),e.qZA(),e.TgZ(17,"h3"),e._uU(18,"Links to Content"),e.qZA(),e.TgZ(19,"div",3)(20,"a",4),e._uU(21,"NPM"),e.qZA(),e.TgZ(22,"a",4),e._uU(23,"HTML"),e.qZA(),e.TgZ(24,"a",4),e._uU(25,"CSS"),e.qZA(),e.TgZ(26,"a",4),e._uU(27,"SASS"),e.qZA(),e.TgZ(28,"a",4),e._uU(29,"JavaScript"),e.qZA(),e.TgZ(30,"a",4),e._uU(31,"TypesScript"),e.qZA(),e.TgZ(32,"a",4),e._uU(33,"RxJS"),e.qZA()(),e.TgZ(34,"h3"),e._uU(35,"Disclaimers"),e.qZA(),e.TgZ(36,"p")(37,"strong"),e._uU(38,"1. Accuracy"),e.qZA()(),e.TgZ(39,"p"),e._uU(40,"The information provided on this website is for general educational purposes only. While we strive to ensure the accuracy and currency of the content, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability concerning the tutorials or the information, or related graphics contained on the website. Any reliance you place on such information is strictly at your own risk."),e.qZA(),e.TgZ(41,"p")(42,"strong"),e._uU(43,"2. Code and Security"),e.qZA(),e._uU(44,"."),e.qZA(),e.TgZ(45,"p"),e._uU(46,"The tutorials and code snippets provided on this website are for educational purposes only. We do not guarantee their suitability for specific applications, and users are advised to thoroughly test the code in a safe environment before using it in a production setting. Additionally, we shall not be held liable for any security breaches or vulnerabilities that may arise from the use of any code or techniques presented on this website."),e.qZA(),e.TgZ(47,"p")(48,"strong"),e._uU(49,"3. Changes to Content"),e.qZA()(),e.TgZ(50,"p"),e._uU(51,"The content and tutorials on this website may be updated or changed without notice. We reserve the right to modify, update, or discontinue any part of the website at our sole discretion."),e.qZA(),e.TgZ(52,"p")(53,"strong"),e._uU(54,"4. External Links"),e.qZA()(),e.TgZ(55,"p"),e._uU(56,"Our website may contain links to external websites that are not controlled or operated by us. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them."),e.qZA(),e.TgZ(57,"p")(58,"strong"),e._uU(59,"5. Compliance"),e.qZA()(),e.TgZ(60,"p"),e._uU(61,"Users are responsible for ensuring compliance with applicable laws, regulations, and licenses when using the information, code, or techniques presented on this website."),e.qZA(),e.TgZ(62,"p",5),e._uU(63,"\xa9 2023 Web Tech Mentors website. All rights reserved."),e.qZA()()),2&t&&(e.xp6(20),e.Q6J("routerLink","/en/npm/chapter/1/section/1"),e.xp6(2),e.Q6J("routerLink","/en/html/chapter/1/section/1"),e.xp6(2),e.Q6J("routerLink","/en/css/chapter/1/section/1"),e.xp6(2),e.Q6J("routerLink","/en/sass/chapter/1/section/1"),e.xp6(2),e.Q6J("routerLink","/en/js/chapter/1/section/1"),e.xp6(2),e.Q6J("routerLink","/en/ts/chapter/1/section/1"),e.xp6(2),e.Q6J("routerLink","/en/rxjs/chapter/1/section/1"))}const h=[{path:"",component:(()=>{class t{constructor(n,i,s,c){this.router=n,this.route=i,this.coreService=s,this.headLinkService=c,this.rendered=!1}ngOnInit(){const n=this.route.snapshot.queryParamMap.get("lang"),i=this.route.snapshot.queryParamMap.get("category"),s=this.route.snapshot.queryParamMap.get("chapter"),c=this.route.snapshot.queryParamMap.get("section");n&&i&&s&&c?this.router.navigate([`${n}/${i}/chapter/${s}/section/${c}`]):(this.rendered=!0,this.coreService.clearBookData(),this.headLinkService.addOrUpdateLinkToHead("/en/about"),gtag("event","page-load",{category:"about"}))}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(a.F0),e.Y36(a.gz),e.Y36(p.p),e.Y36(d.n))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-about"]],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],["src","assets/images/web_book.png","align","left","alt","Logo"],[1,"button-container"],[3,"routerLink"],[1,"footer"]],template:function(n,i){1&n&&e.YNc(0,g,64,7,"div",0),2&n&&e.Q6J("ngIf",i.rendered)},dependencies:[l.O5,a.rH],styles:[".container[_ngcontent-%COMP%]{overflow-y:auto;margin:1.5rem}.container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:3rem}.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;top:1rem;width:8rem;height:8rem;margin-right:1.5rem;margin-bottom:1.5rem;border-radius:3.8rem}.container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;padding-top:.75rem}.container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:8rem;padding:1rem 0;margin:.25rem 0;font-size:1rem}.container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;padding-top:1.5rem}.container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;width:8rem;padding:1rem 0;margin:.25rem 0;font-size:1rem;text-align:center;text-decoration:none;border:solid 1px #767676;background-color:#efefef}.container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{cursor:pointer;color:#fff;background-color:#add8e6}.container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{margin-top:3rem;margin-bottom:6rem}"]}),t})()}];let m=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.Bz.forChild(h),a.Bz]}),t})(),b=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.ez,m]}),t})()}}]);