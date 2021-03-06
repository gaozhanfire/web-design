document.writeln("    <div id=\'top\' class=\'bg-lightgray width-whole\'>");
document.writeln("        <div class=\'width-main center\'>");
document.writeln("            <div id=\'top-tel\' class=\'text-darkgray pull-left\'>010-114/116114电话预约</div>");
document.writeln("            <div id=\'top-doc\' class=\'text-darkgray pull-left\'><a class=\'a-normal text-lightblue\' href=\'doctor/sign-in.html\'>医生端</a> </div>");
document.writeln("            <div id=\'top-back\' class=\'text-darkgray pull-left\'><a class=\'a-normal text-lightblue\' href=\'back/login.html\'>后台管理</a> </div>");
document.writeln("            <div id=\'top-order\' class=\'pull-right\'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href=\'user.html\' class=\'a-normal text-lightblue\'>我的订单</a>&nbsp;</div>");
document.writeln("            <div id=\'top-register\' class=\'pull-right\'>&nbsp;<a href=\'register.html\' class=\'a-normal text-lightblue\'>注册</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>");
document.writeln("            <div id=\'top-login\' class=\'pull-right\'>&nbsp;<a href=\'javascript:void(0)\' class=\'a-normal text-lightblue\' data-toggle=\'modal\' data-target=\'#loginModal\'>登录</a>&nbsp;</div>");
document.writeln("            <div id=\'top-logout\' class=\'pull-right\'>&nbsp;<a href=\'javascript:void(0)\' class=\'a-normal text-lightblue\'>退出登录</a>&nbsp;</div>");
document.writeln("            <div id=\'top-welcome\' class=\'text-darkgray pull-right\'>欢迎来到预约挂号平台 &nbsp;</div>");
document.writeln("        </div>");
document.writeln("    </div>");
document.writeln("    <div id=\'subtop\' class=\'width-main center\'>");
document.writeln("        <div class=\'top_left'\>");
document.writeln("        	<a href=\'https://www.bestdoublelin.com:8443/HosSystem/homepage.html'\>");
document.writeln("        		<img src=\'images/login.png'\>");
document.writeln("        		<h2 class=\'top_h2'\>基于人脸识别的智慧医疗预约挂号平台</h2>");
document.writeln("          </a>");
document.writeln("        </div>");
document.writeln("        <div id=\'searchbox\' class=\'input-group pull-right\'>");
document.writeln("            <div class=\'input-group-btn\'>");
document.writeln("                <div class=\'btn-group\'>");
document.writeln("                    <button type=\'button\' class=\'btn bg-yellow text-white dropdown-toggle\' data-toggle=\'dropdown\'>");
document.writeln("                        <span id=\'search-btn-title\'>科室</span><span class=\'caret\'></span>");
document.writeln("                    </button>");
document.writeln("                    <ul class=\'dropdown-menu\'>");
document.writeln("                        <li><a id=\'search-menu-ks\' href=\'javascript:void(0)\'>科室</a></li>");
document.writeln("                        <li><a id=\'search-menu-jb\' href=\'javascript:void(0)\'>疾病</a></li>");
document.writeln("                    </ul>");
document.writeln("                </div>");
document.writeln("            </div>");
document.writeln("            <input id=\'top-search\' type=\'text\' class=\'form-control\' />");
document.writeln("            <span class=\'input-group-btn\'>");
document.writeln("                <button id=\'search-btn\' type=\'button\' class=\'btn bg-yellow text-white\'>");
document.writeln("                    <span class=\'glyphicon glyphicon-search\'></span>");
document.writeln("                </button>");
document.writeln("            </span>");
document.writeln("        </div>");
document.writeln("    </div>");
document.writeln("    <div id=\'navi\' class=\'navi bg-lightblue width-whole\'>");
document.writeln("        <div class=\'width-main text-white center\'>");
document.writeln("            <div class=\'navi\'>");
document.writeln("                <div class=\'navi-item text-center\'><a href=\'homepage.html\' class=\'a-normal text-white\'>首页</a></div>");
document.writeln("                <div class=\'navi-item text-center\'><a href=\'ks.html\' class=\'a-normal text-white\'>按科室挂号</a></div>");
document.writeln("                <div class=\'navi-item text-center\'><a href=\'jb.html\' class=\'a-normal text-white\'>按疾病挂号</a></div>");
document.writeln("                <div class=\'navi-item text-center\'><a href=\'help.html\' class=\'a-normal text-white\'>帮助中心</a></div>");
document.writeln("            </div>");
document.writeln("        </div>");
document.writeln("    </div>");
document.writeln("    <div class=\'modal fade\' id=\'loginModal\' tabindex=\'-1\' role=\'dialog\' aria-labelledby=\'myModalLabel\'>");
document.writeln("        <div  class=\'modal-container\'>");
document.writeln("            <div class=\'modal-dialog\' role=\'document\'>");
document.writeln("                <div class=\'modal-content\'>");
document.writeln("                    <div class=\'modal-header\'>");
document.writeln("                        <button type=\'button\' class=\'close\' data-dismiss=\'modal\' aria-label=\'Close\'><span aria-hidden=\'true\'>&times;</span></button>");
document.writeln("                        <h4 class=\'modal-title\' id=\'logintitle\'>用户登录</h4>");
document.writeln("                    </div>");
document.writeln("                    <div class=\'modal-body\'>");
document.writeln("                        <form id=\'loginform\'>");
document.writeln("                            <div class=\'form-group\'>");
document.writeln("                                <label class=\'col-lg-3 control-label\'>注册邮箱：</label>");
document.writeln("                                <div class=\'col-lg-9\'>");
document.writeln("                                    <input type=\'email\' class=\'form-control\' name=\'email\' id=\'loginemail\'>");
document.writeln("                                </div>");
document.writeln("                            </div>");
document.writeln("                            <div class=\'form-group\'>");
document.writeln("                                <label class=\'col-lg-3 control-label\'>密码：</label>");
document.writeln("                                <div class=\'col-lg-9\'>");
document.writeln("                                    <input type=\'password\' class=\'form-control\' name=\'pwd\' id=\'loginpwd\'>");
document.writeln("                                </div>");
document.writeln("                            </div>");
document.writeln("                        </form>");
document.writeln("                    </div>");
document.writeln("                    <div class=\'modal-footer\'>");
document.writeln("                        <button type=\'button\' class=\'btn btn-default\' id=\'cancel\' data-dismiss=\'modal\'>&nbsp;&nbsp;取消&nbsp;&nbsp;</button>");
document.writeln("                        <button type=\'button\' class=\'btn btn-primary\' id=\'loginbtn\'>&nbsp;&nbsp;登录&nbsp;&nbsp;</button>");
document.writeln("                    </div>");
document.writeln("                </div>");
document.writeln("            </div>");
document.writeln("        </div>");
document.writeln("    </div>");

//document.writeln("    <div id=\'foot'\ class=\'bg-darkblue text-white'\ >");
//document.writeln("    	<h2 class=\'foot_h2'\>TempName团队 © 版权所有</h2>");
//document.writeln("    </div>");